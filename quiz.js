(() => {
  'use strict';

  const {
    ELECTIVE_NAMES, initTheme, initFontScale, loadTimetable, sessionKeyFor, sessionHref,
    findSessionInTimetable, flashcardSectionHtml, wireFlashcardSection,
    clozeSectionHtml, wireClozeSection,
    examQuestionBank, examQuizRound, examQuizHtml, wireExamQuiz, examIssueIndex,
    sessionEventsByKey, issueHref, QUIZ_KINDS, QUIZ_SIZES,
    quizSetupHtml, wireQuizSetup, loadQuizSetup, saveQuizSetup,
  } = window.PCLL;

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
      kinds: Array.isArray(saved.kinds) && saved.kinds.length ? saved.kinds : QUIZ_KINDS.slice(),
      size: QUIZ_SIZES.includes(saved.size) ? saved.size : 10,
    };

    // Drop any remembered session that this course does not have.
    const validSessions = () => {
      const course = courses.find((c) => c.code === setup.code);
      return (setup.sessions || []).filter((s) => course && course.sessions.includes(s));
    };

    function bankFor() {
      const details = detailsFor(setup.code);
      if (!details) return [];
      const picked = validSessions();
      const bank = examQuestionBank(setup.code, details, picked.length ? picked : null);
      return bank.filter((q) => setup.kinds.includes(q.kind));
    }

    function setCourseLinkFor(c) { setCourseLink(data, c); }

    function showSetup() {
      setCourseLinkFor(setup.code);
      setHeading('Test Yourself');
      setup.sessions = validSessions();
      bodyEl.innerHTML = quizSetupHtml({ courses, setup, count: bankFor().length });
      wireQuizSetup(bodyEl, {
        onChange: (change) => {
          if (change.code) { setup.code = change.code; setup.sessions = []; }
          if (change.size) setup.size = change.size;
          if (change.toggleSession) {
            const course = courses.find((c) => c.code === setup.code);
            const all = course ? course.sessions : [];
            const on = setup.sessions.length ? setup.sessions.slice() : all.slice();
            const i = on.indexOf(change.toggleSession);
            if (i >= 0) on.splice(i, 1); else on.push(change.toggleSession);
            setup.sessions = on.length === all.length ? [] : on;
          }
          if (change.toggleKind) {
            const on = setup.kinds.slice();
            const i = on.indexOf(change.toggleKind);
            if (i >= 0) on.splice(i, 1); else on.push(change.toggleKind);
            // Never let every type be off — there would be nothing to ask.
            setup.kinds = on.length ? on : QUIZ_KINDS.slice();
          }
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
      if (!bank.length) { showSetup(); return; }

      setCourseLinkFor(setup.code);
      const picked = validSessions();
      const scopeLabel = picked.length === 1 ? picked[0]
        : picked.length ? `${picked.length} sessions` : setup.code;
      setHeading(`${scopeLabel} — Test Yourself`);

      const eventsByKey = eventsByKeyFor(setup.code);
      const hrefFor = (e) => {
        const found = eventsByKey.get(e.sessionKey);
        return found ? issueHref(found.ev, found.dateIso, e.id) : '';
      };
      const universe = examIssueIndex(setup.code, details);
      const available = QUIZ_KINDS.filter((k) => bank.some((q) => q.kind === k));
      let active = available.slice();

      const draw = () => {
        const round = examQuizRound(bank, { size: setup.size, universe, kinds: active });
        bodyEl.innerHTML = examQuizHtml(round, { hrefFor, kinds: available, active });
        wireExamQuiz(bodyEl, {
          questions: round,
          hrefFor,
          onAgain: draw,
          onCustomise: showSetup,
          onKinds: (p) => { active = p.length ? p : available.slice(); draw(); },
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
