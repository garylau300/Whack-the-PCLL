(() => {
  'use strict';

  const {
    ELECTIVE_NAMES, initTheme, initFontScale, loadTimetable, sessionKeyFor, sessionHref, issueHref, quizHref,
    findSessionInTimetable, examIssueSectionsHtml, examCrossRefsHtml, examTriggerRoutesHtml,
    issueCode, issueNotesKey, loadCheckedIds, saveCheckedIds, wireFlowChecks, escapeHtml,
    noteClozeControlsHtml, wireNoteCloze, loadClozeGroups,
  } = window.PCLL;

  const $ = (id) => document.getElementById(id);
  const params = new URLSearchParams(location.search);
  const code = (params.get('code') || '').trim().toUpperCase();
  const no = params.get('no') || '';
  const dateIso = params.get('date') || '';
  const start = params.get('start') || '';
  const issueId = params.get('issue') || '';
  const details = (window.COURSE_DETAILS && window.COURSE_DETAILS[code]) || null;

  function setSyncStatus(text) {
    $('syncStatus').textContent = text;
  }

  // Shows one of the dead-end messages instead of the body. `isError` keeps
  // the same distinction quiz.js draws: a broken/unresolvable link is an
  // error, "nothing authored here yet" is just a plain status.
  function showStatus(message, isError) {
    $('issueSection').hidden = true;
    $('status').hidden = false;
    $('status').className = isError ? 'status error' : 'status';
    $('status').textContent = message;
  }

  // One HTML generator for the pager, called for both the top and bottom
  // slots so they can never drift into two different designs — same
  // reasoning as examIssueListHtml being the one issue-index renderer.
  // `backTop` is the only difference between the two calls: a "back to top"
  // control makes sense after the notes, not before them.
  function pagerHtml(prevItem, nextItem, allHref, posLabel, backTop) {
    const card = (dir, item) => {
      if (!item) return '';
      const arrow = `<span class="issue-pager-arrow" aria-hidden="true">${dir === 'prev' ? '&#8592;' : '&#8594;'}</span>`;
      const copy = `<span class="issue-pager-copy">
          <span class="issue-pager-kicker">${dir === 'prev' ? 'Previous' : 'Next'}</span>
          <span class="issue-pager-title">${escapeHtml(item.label)}</span>
        </span>`;
      return `<a class="issue-pager-card issue-pager-card--${dir}" href="${escapeHtml(item.href)}">${dir === 'prev' ? arrow + copy : copy + arrow}</a>`;
    };
    return `<div class="issue-pager-row">${card('prev', prevItem)}${card('next', nextItem)}</div>
      <div class="issue-pager-meta">
        <a class="issue-pager-all" href="${escapeHtml(allHref)}">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>
          All issue types
        </a>
        <span class="issue-pager-pos">${escapeHtml(posLabel)}</span>
        ${backTop ? `<button type="button" class="issue-backtop" data-action="back-top">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V6M5 13l7-7 7 7"/></svg>
          Back to top
        </button>` : ''}
      </div>`;
  }

  // Renders the identical pager into both slots from one set of prev/next
  // data, so the top copy and the bottom copy can never disagree about
  // what's adjacent or where you are in the list.
  function renderNav(issueTypes, index, ev, foundDate, code, details, key) {
    const total = issueTypes.length;
    const prevType = issueTypes[index - 1];
    const nextType = issueTypes[index + 1];
    const prevItem = prevType
      ? { href: issueHref(ev, foundDate, prevType.id), label: `${issueCode(code, details, key, index - 1)} — ${prevType.title}` }
      : null;
    const nextItem = nextType
      ? { href: issueHref(ev, foundDate, nextType.id), label: `${issueCode(code, details, key, index + 1)} — ${nextType.title}` }
      : null;
    const allHref = sessionHref(ev, foundDate);
    const posLabel = `Issue ${index + 1} of ${total}`;

    $('issuePagerTop').innerHTML = pagerHtml(prevItem, nextItem, allHref, posLabel, false);
    $('issuePagerBottom').innerHTML = pagerHtml(prevItem, nextItem, allHref, posLabel, true);
    $('issuePagerTop').hidden = false;
    $('issuePagerBottom').hidden = false;
  }

  function renderIssue(data) {
    const entry = findSessionInTimetable(data, code, no, dateIso, start);
    if (!entry) {
      showStatus('Could not find this session — it may have moved. Check the course page instead.', true);
      return;
    }
    const { ev, dateIso: foundDate } = entry;

    // Set the escape routes before any of the dead ends below, so a session
    // whose notes have changed is still navigable rather than a trap.
    $('backLink').href = sessionHref(ev, foundDate);
    $('sessionLink').href = sessionHref(ev, foundDate);
    $('sessionLink').textContent = ev.no || 'Session';
    const courseName = code ? (data.meta.courses[code] || ELECTIVE_NAMES[code] || '') : '';
    $('courseLink').textContent = courseName ? `${code} · ${courseName}` : code;
    $('courseLink').href = `course.html?code=${encodeURIComponent(code)}`;
    $('quizLink').href = quizHref(ev, foundDate);

    // The topbar carries the SESSION heading (matching what session.html's
    // own header shows for the same session, since the back arrow returns
    // there) rather than this issue type's own title — that title is long
    // enough on some pages to wrap to three lines in a bar that also holds
    // the print/font/theme buttons, and it is the body's own subject, not
    // the page's location in the site.
    $('issueSessionTitle').textContent = `${ev.no ? ev.no + ' — ' : ''}${ev.topic || 'Session'}`;

    const key = sessionKeyFor(ev.no);
    const sessionDetail = details && details.sessions && key && details.sessions[key];
    const issueTypes = (sessionDetail && sessionDetail.examNotes && sessionDetail.examNotes.issueTypes) || [];
    if (!issueTypes.length) {
      showStatus('No exam notes for this session yet.', false);
      return;
    }

    const index = issueTypes.findIndex((t) => t.id === issueId);
    if (index === -1) {
      showStatus("That issue type is no longer in this session's notes.", false);
      return;
    }
    const issue = issueTypes[index];

    const code9 = issueCode(code, details, key, index);
    const heading = `${code9} — ${issue.title}`;
    document.title = `${heading} — Whack the PCLL`;
    $('issueTitle').textContent = heading;

    const summaryEl = $('issueSummary');
    if (issue.summary) {
      summaryEl.textContent = issue.summary;
      summaryEl.hidden = false;
    } else {
      summaryEl.hidden = true;
    }

    // The answering flowchart is a three-level checklist (step > point >
    // sub-point), persisted per issue page. Only leaves are stored; every
    // parent's state is derived by wireFlowChecks from its descendants.
    const notesKey = issueNotesKey(code, key, issue.id);
    $('issueBody').innerHTML = noteClozeControlsHtml(loadClozeGroups())
      + examIssueSectionsHtml(issue, {
        triggers: examTriggerRoutesHtml(issue, data, code, details),
      }, { checkable: true, checked: loadCheckedIds(notesKey) })
      + examCrossRefsHtml(issue, data, code, details);
    wireFlowChecks($('issueBody'), () => loadCheckedIds(notesKey), (set) => saveCheckedIds(notesKey, set));
    // Masking runs over the rendered notes, so it has to come after the
    // body exists — and the bar lives inside the same container it masks.
    wireNoteCloze($('issueBody'), $('issueBody'));
    renderNav(issueTypes, index, ev, foundDate, code, details, key);

    $('status').hidden = true;
    $('issueSection').hidden = false;
  }

  async function load() {
    if (!code || !issueId) {
      $('status').className = 'status error';
      $('status').textContent = 'No issue type specified.';
      return;
    }
    await loadTimetable({
      onData: (data, isStale) => {
        renderIssue(data);
        setSyncStatus(isStale
          ? `Showing cached data from ${new Date(data.meta.syncedAt).toLocaleString()} — refreshing…`
          : `Last synced ${new Date(data.meta.syncedAt).toLocaleString()}`);
      },
      onError: (err) => {
        $('status').hidden = false;
        $('status').className = 'status error';
        $('status').textContent = 'Could not load these notes: ' + err.message;
        setSyncStatus('Sync failed');
      },
    });
  }

  initTheme($('themeBtn'));
  initFontScale($('fontBtn'));
  // "Save as PDF" is a destination in the browser's own print dialog, so
  // printing is the whole implementation — see the @media print block in
  // styles.css for what the printed page actually looks like.
  //
  // The per-step "Why this matters" and "In the exam" blocks are collapsed
  // <details>, and a closed <details> prints as just its summary — so a
  // printed copy would silently lose them. CSS cannot reliably force one open
  // (the closed state is not a plain `display` rule), so open them here and
  // put back exactly the ones that were closed once the dialog is done.
  // beforeprint covers Ctrl+P as well as the button.
  let reclose = [];
  window.addEventListener('beforeprint', () => {
    reclose = [...document.querySelectorAll('.exam-coach-item:not([open])')];
    reclose.forEach((d) => { d.open = true; });
  });
  window.addEventListener('afterprint', () => {
    reclose.forEach((d) => { d.open = false; });
    reclose = [];
  });
  $('printBtn').addEventListener('click', () => window.print());
  // Delegated because the button lives inside pagerHtml()'s innerHTML and is
  // re-created on every render. Explicit behavior:'smooth' bypasses the CSS
  // scroll-behavior property (and so the global prefers-reduced-motion reset
  // in styles.css), so the choice is made here instead of leaving it to CSS.
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.issue-backtop')) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });
  load();
})();
