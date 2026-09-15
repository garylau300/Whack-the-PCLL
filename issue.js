(() => {
  'use strict';

  const {
    ELECTIVE_NAMES, initTheme, loadTimetable, sessionKeyFor, sessionHref, issueHref,
    findSessionInTimetable, examIssueSectionsHtml, examCrossRefsHtml, examTriggerRoutesHtml,
    issueCode, issueNotesKey, loadCheckedIds, saveCheckedIds,
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

  function renderNav(issueTypes, index, ev, foundDate) {
    const prev = issueTypes[index - 1];
    const next = issueTypes[index + 1];
    const prevEl = $('issuePrev');
    const nextEl = $('issueNext');
    if (prev) {
      prevEl.href = issueHref(ev, foundDate, prev.id);
      prevEl.innerHTML = `<span aria-hidden="true">&#8592; </span>${index}. ${prev.title}`;
      prevEl.hidden = false;
    } else {
      prevEl.hidden = true;
    }
    if (next) {
      nextEl.href = issueHref(ev, foundDate, next.id);
      nextEl.innerHTML = `${index + 2}. ${next.title}<span aria-hidden="true"> &#8594;</span>`;
      nextEl.hidden = false;
    } else {
      nextEl.hidden = true;
    }
    $('issueUp').href = sessionHref(ev, foundDate);
    $('issueNav').hidden = false;
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

    // Every bullet in the notes is a tick-off checkbox, persisted per issue
    // page. Re-rendered from the stored Set on each paint so the checked
    // styling and the stored state can't drift apart.
    const notesKey = issueNotesKey(code, key, issue.id);
    const paint = () => {
      $('issueBody').innerHTML = examIssueSectionsHtml(issue, {
        triggers: examTriggerRoutesHtml(issue, data, code, details),
      }, { checkable: true, checked: loadCheckedIds(notesKey) }) + examCrossRefsHtml(issue, data, code, details);
    };
    paint();
    $('issueBody').addEventListener('change', (e) => {
      const input = e.target.closest('input[type=checkbox][data-note-id]');
      if (!input) return;
      const set = loadCheckedIds(notesKey);
      if (input.checked) set.add(input.dataset.noteId);
      else set.delete(input.dataset.noteId);
      saveCheckedIds(notesKey, set);
      input.closest('.note-check').classList.toggle('checked', input.checked);
    });
    renderNav(issueTypes, index, ev, foundDate);

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
  load();
})();
