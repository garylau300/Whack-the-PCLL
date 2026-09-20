(() => {
  'use strict';

  const {
    ELECTIVE_NAMES, initTheme, initFontScale, loadTimetable, sessionKeyFor, sessionHref,
    findSessionInTimetable, flashcardSectionHtml, wireFlashcardSection,
    clozeSectionHtml, wireClozeSection,
    examQuestionBank, examQuizRound, examQuizHtml, wireExamQuiz, examIssueIndex,
    sessionEventsByKey, issueHref, QUIZ_KINDS,
    quizSetupHtml, wireQuizSetup, loadQuizSetup, saveQuizSetup, spreadCounts,
  } = window.PCLL;

  const DEFAULT_ROUND = 10;

  const $ = (id) => document.getElementById(id);
  const params = new URLSearchParams(location.search);
  const code = (params.get('code') || '').trim().toUpperCase();
  const no = params.get('no') || '';
  const dateIso = params.get('date') || '';
  const start = params.get('start') || '';

  function setSyncStatus(text) {
    $('syncStatus').textContent = text;
  }

  const detailsFor = (c) => (window.COURSE_DETAILS && window.COURSE_DETAILS[c]) || null;

  // Every course that actually has exam notes to build questions from, with
  // the sessions that carry them. The timetable supplies the display names.
  function examCourses(data) {
    return Object.keys(window.COURSE_DETAILS || {}).map((c) => {
      const d = window.COURSE_DETAILS[c];
      const sessions = Object.keys(d.sessions || {}).filter((k) => {
        const notes = d.sessions[k].examNotes;
        return notes && (notes.issueTypes || []).length;
      });
      return { code: c, name: data.meta.courses[c] || ELECTIVE_NAMES[c] || '', sessions };
    }).filter((c) => c.sessions.length);
  }

  // The whole page is one of two views. `session` is the timetable entry the
  // page was opened from, or null when it was reached from the dashboard.
  function render(data) {
    const section = $('quizSection');
    const bodyEl = $('quizBody');
    const courses = examCourses(data);
    const eventsByKeyFor = (c) => sessionEventsByKey(data, c);

    const entry = code ? findSessionInTimetable(data, code, no, dateIso, start) : null;
    if (code && !entry) {
      section.hidden = true;
      $('status').hidden = false;
      $('status').className = 'status error';
      $('status').textContent = 'Could not find this session — it may have moved. Check the course page instead.';
      return;
    }

    $('backLink').href = entry ? sessionHref(entry.ev, entry.dateIso) : 'index.html';
    $('backLink').setAttribute('aria-label', entry ? 'Back to session' : 'Back to dashboard');

    // ---- the older authored cloze/flashcards, for the mindmap sessions ----
    if (entry) {
      const details = detailsFor(code);
      const key = sessionKeyFor(entry.ev.no);
      const sd = details && details.sessions && key && details.sessions[key];
      const hasAuthored = sd && (sd.cloze || sd.flashcards);
      const hasNotes = sd && sd.examNotes;
      if (hasAuthored && !hasNotes) {
        setCourseLink(data, code);
        setHeading(`${entry.ev.no ? entry.ev.no + ' — ' : ''}Quiz & Flashcards`);
        bodyEl.innerHTML = flashcardSectionHtml(sd.flashcards) + clozeSectionHtml(sd.cloze);
        wireFlashcardSection(bodyEl);
        wireClozeSection(bodyEl);
        $('status').hidden = true;
        section.hidden = false;
        return;
      }
      if (!hasNotes) {
        section.hidden = true;
        $('status').hidden = false;
        $('status').className = 'status';
        $('status').textContent = 'No quiz or flashcards for this session yet.';
        return;
      }
    }

    if (!courses.length) {
      section.hidden = true;
      $('status').hidden = false;
      $('status').className = 'status';
      $('status').textContent = 'No course has exam notes to build questions from yet.';
      return;
    }

    // ---- setup state ----
    const saved = loadQuizSetup() || {};
    const openedSession = entry ? sessionKeyFor(entry.ev.no) : '';
    const startCode = (entry && code) || (courses.some((c) => c.code === saved.code) ? saved.code : courses[0].code);
    const setup = {
      code: startCode,
      // Opening from a session scopes to it; otherwise fall back to what was
      // last used, and finally to the whole course.
      sessions: entry && openedSession ? [openedSession] : (Array.isArray(saved.sessions) ? saved.sessions : []),
      // Arriving from a session resets the issue picking — the remembered
      // one belongs to whatever scope it was chosen in.
      issues: entry ? [] : (Array.isArray(saved.issues) ? saved.issues : []),
      counts: (saved.counts && typeof saved.counts === 'object') ? { ...saved.counts } : null,
    };

    // Drop any remembered session that this course does not have.
    const validSessions = () => {
      const course = courses.find((c) => c.code === setup.code);
      return (setup.sessions || []).filter((s) => course && course.sessions.includes(s));
    };

    // Every issue type the chosen sessions contain, which is both what the
    // chips offer and what a remembered issue selection is reconciled to.
    function issuesInScope() {
      const details = detailsFor(setup.code);
      if (!details) return [];
      const picked = validSessions();
      return examIssueIndex(setup.code, details)
        .filter((e) => !picked.length || picked.includes(e.sessionKey))
        .map((e) => ({ key: `${e.sessionKey}/${e.id}`, code9: e.code9, title: e.title }));
    }

    const validIssues = (inScope) => {
      const keys = new Set(inScope.map((i) => i.key));
      return (setup.issues || []).filter((k) => keys.has(k));
    };

    function bankFor() {
      const details = detailsFor(setup.code);
      if (!details) return [];
      return examQuestionBank(setup.code, details, {
        sessions: validSessions(),
        issues: setup.issues || [],
      });
    }

    const availOf = (bank) => {
      const a = {};
      QUIZ_KINDS.forEach((k) => { a[k] = 0; });
      bank.forEach((q) => { a[q.kind] = (a[q.kind] || 0) + 1; });
      return a;
    };

    // A remembered mix can outrun the scope it is now applied to — switch to
    // a session with no authorities table and that slider has to come down.
    // Anything that would clamp to nothing falls back to an even spread, so
    // changing scope never lands on an empty round.
    function reconcile(avail) {
      if (!setup.counts) { setup.counts = spreadCounts(DEFAULT_ROUND, avail); return; }
      let total = 0;
      QUIZ_KINDS.forEach((k) => {
        const capped = Math.max(0, Math.min(Number(setup.counts[k]) || 0, avail[k] || 0));
        setup.counts[k] = capped;
        total += capped;
      });
      if (!total) setup.counts = spreadCounts(DEFAULT_ROUND, avail);
    }

    function showSetup() {
      setCourseLink(data, setup.code);
      setHeading('Test Yourself');
      setup.sessions = validSessions();
      const inScope = issuesInScope();
      setup.issues = validIssues(inScope);
      const avail = availOf(bankFor());
      reconcile(avail);
      bodyEl.innerHTML = quizSetupHtml({ courses, setup, avail, issues: inScope });
      wireQuizSetup(bodyEl, {
        // Live while dragging: record the value but do NOT re-render, or the
        // thumb is pulled out from under the pointer mid-drag.
        onCount: (kind, n) => {
          setup.counts[kind] = n;
          saveQuizSetup(setup);
          const total = QUIZ_KINDS.reduce((s, k) => s + (setup.counts[k] || 0), 0);
          const countEl = bodyEl.querySelector('.quiz-setup-count');
          const startEl = bodyEl.querySelector('.quiz-setup-start');
          if (countEl) {
            countEl.textContent = total
              ? `${total} question${total === 1 ? '' : 's'} in this round`
              : 'Nothing selected — raise a slider, or use one of the spreads.';
          }
          if (startEl) startEl.disabled = !total;
        },
        onChange: (change) => {
          if (change.code) { setup.code = change.code; setup.sessions = []; setup.issues = []; }
          if (change.allIssues) setup.issues = [];
          // "None" cannot mean an empty round, so it selects a single issue
          // type to start narrowing from rather than nothing at all.
          if (change.noIssues) setup.issues = inScope.length ? [inScope[0].key] : [];
          if (change.toggleIssue) {
            const all = inScope.map((i) => i.key);
            const on = setup.issues.length ? setup.issues.slice() : all.slice();
            const i = on.indexOf(change.toggleIssue);
            if (i >= 0) on.splice(i, 1); else on.push(change.toggleIssue);
            // All of them, or none of them, both mean "no issue filter".
            setup.issues = (on.length === all.length || !on.length) ? [] : on;
          }
          if (change.toggleSession) {
            const course = courses.find((c) => c.code === setup.code);
            const all = course ? course.sessions : [];
            const on = setup.sessions.length ? setup.sessions.slice() : all.slice();
            const i = on.indexOf(change.toggleSession);
            if (i >= 0) on.splice(i, 1); else on.push(change.toggleSession);
            setup.sessions = on.length === all.length ? [] : on;
            // The issue chips belong to the old session set.
            setup.issues = [];
          }
          if (change.spread) setup.counts = spreadCounts(change.spread, availOf(bankFor()));
          saveQuizSetup(setup);
          showSetup();
        },
        onStart: () => { saveQuizSetup(setup); showRound(); },
      });
      $('status').hidden = true;
      section.hidden = false;
    }

    function showRound() {
      const details = detailsFor(setup.code);
      const bank = bankFor();
      reconcile(availOf(bank));
      if (!bank.length) { showSetup(); return; }

      setCourseLink(data, setup.code);
      const picked = validSessions();
      const narrowed = (setup.issues || []).length;
      const scopeLabel = narrowed
        ? `${narrowed} issue type${narrowed === 1 ? '' : 's'}`
        : (picked.length === 1 ? picked[0]
          : picked.length ? `${picked.length} sessions` : setup.code);
      setHeading(`${scopeLabel} — Test Yourself`);

      const eventsByKey = eventsByKeyFor(setup.code);
      const hrefFor = (e) => {
        const found = eventsByKey.get(e.sessionKey);
        return found ? issueHref(found.ev, found.dateIso, e.id) : '';
      };
      const universe = examIssueIndex(setup.code, details);

      const draw = () => {
        const round = examQuizRound(bank, { perKind: setup.counts, universe });
        bodyEl.innerHTML = examQuizHtml(round, { hrefFor });
        wireExamQuiz(bodyEl, {
          questions: round,
          hrefFor,
          onAgain: draw,
          onCustomise: showSetup,
        });
      };
      draw();
      $('status').hidden = true;
      section.hidden = false;
    }

    // Reached from a session, an issue page or the course page: that named a
    // scope, so go straight to questions. Reached from the dashboard with no
    // scope at all: ask first.
    if (entry) showRound(); else showSetup();
  }

  function setCourseLink(data, c) {
    const name = c ? (data.meta.courses[c] || ELECTIVE_NAMES[c] || '') : '';
    $('courseLink').textContent = name ? `${c} · ${name}` : (c || 'Courses');
    $('courseLink').href = c ? `course.html?code=${encodeURIComponent(c)}` : 'index.html';
  }

  function setHeading(heading) {
    document.title = `${heading} — Whack the PCLL`;
    $('quizTitle').textContent = heading;
  }

  async function load() {
    await loadTimetable({
      onData: (data, isStale) => {
        render(data);
        setSyncStatus(isStale
          ? `Showing cached data from ${new Date(data.meta.syncedAt).toLocaleString()} — refreshing…`
          : `Last synced ${new Date(data.meta.syncedAt).toLocaleString()}`);
      },
      onError: (err) => {
        $('status').hidden = false;
        $('status').className = 'status error';
        $('status').textContent = 'Could not load this quiz: ' + err.message;
        setSyncStatus('Sync failed');
      },
    });
  }

  initTheme($('themeBtn'));
  initFontScale($('fontBtn'));
  load();
})();
