(() => {
  'use strict';

  const {
    ELECTIVE_NAMES, initTheme, initFontScale, loadTimetable, sessionKeyFor, sessionHref,
    findSessionInTimetable, flashcardSectionHtml, wireFlashcardSection,
    clozeSectionHtml, wireClozeSection,
    examQuestionBank, examQuizRound, examQuizHtml, wireExamQuiz, examIssueIndex,
    sessionEventsByKey, issueHref, QUIZ_KINDS,
  } = window.PCLL;

  const $ = (id) => document.getElementById(id);
  const params = new URLSearchParams(location.search);
  const code = (params.get('code') || '').trim().toUpperCase();
  const no = params.get('no') || '';
  const dateIso = params.get('date') || '';
  const start = params.get('start') || '';
  const details = (window.COURSE_DETAILS && window.COURSE_DETAILS[code]) || null;

  function setSyncStatus(text) {
    $('syncStatus').textContent = text;
  }

  function renderQuiz(data) {
    const entry = findSessionInTimetable(data, code, no, dateIso, start);
    const section = $('quizSection');
    if (!entry) {
      section.hidden = true;
      $('status').hidden = false;
      $('status').className = 'status error';
      $('status').textContent = 'Could not find this session — it may have moved. Check the course page instead.';
      return;
    }
    const { ev, dateIso: foundDate } = entry;
    $('backLink').href = sessionHref(ev, foundDate);

    const courseName = code ? (data.meta.courses[code] || ELECTIVE_NAMES[code] || '') : '';
    $('courseLink').textContent = courseName ? `${code} · ${courseName}` : code;
    $('courseLink').href = `course.html?code=${encodeURIComponent(code)}`;

    const key = sessionKeyFor(ev.no);
    const sessionDetail = details && details.sessions && key && details.sessions[key];
    const bodyEl = $('quizBody');

    // An exam-notes session authors no cloze or flashcards, so its test is
    // DERIVED from the notes instead — see examQuestionBank. A session with
    // both would show both; in practice the two formats don't overlap.
    const bank = sessionDetail && sessionDetail.examNotes
      ? examQuestionBank(code, details, key)
      : [];

    const heading = `${ev.no ? ev.no + ' — ' : ''}${bank.length ? 'Test Yourself' : 'Quiz & Flashcards'}`;
    document.title = `${heading} — Whack the PCLL`;
    $('quizTitle').textContent = heading;

    if (!sessionDetail || (!bank.length && !sessionDetail.cloze && !sessionDetail.flashcards)) {
      section.hidden = true;
      $('status').hidden = false;
      $('status').className = 'status';
      $('status').textContent = 'No quiz or flashcards for this session yet.';
      return;
    }

    if (bank.length) {
      // Only this page knows the live event, so it resolves the "open the
      // issue" links — same division of labour as examIssueListHtml.
      const eventsByKey = sessionEventsByKey(data, code);
      const hrefFor = (entry) => {
        const found = eventsByKey.get(entry.sessionKey);
        return found ? issueHref(found.ev, found.dateIso, entry.id) : '';
      };
      const universe = examIssueIndex(code, details);
      const available = QUIZ_KINDS.filter((k) => bank.some((q) => q.kind === k));
      let active = available.slice();

      const draw = () => {
        const round = examQuizRound(bank, { size: 12, universe, kinds: active });
        bodyEl.innerHTML = examQuizHtml(round, { hrefFor, kinds: available, active });
        wireExamQuiz(bodyEl, {
          // The widget needs the round itself to report on it, and hrefFor
          // to link the issue types that were missed.
          questions: round,
          hrefFor,
          onAgain: draw,
          onKinds: (picked) => { active = picked.length ? picked : available.slice(); draw(); },
        });
      };
      draw();
    } else {
      bodyEl.innerHTML = flashcardSectionHtml(sessionDetail.flashcards) + clozeSectionHtml(sessionDetail.cloze);
      wireFlashcardSection(bodyEl);
      wireClozeSection(bodyEl);
    }

    $('status').hidden = true;
    section.hidden = false;
  }

  async function load() {
    if (!code) {
      $('status').className = 'status error';
      $('status').textContent = 'No session specified.';
      return;
    }
    await loadTimetable({
      onData: (data, isStale) => {
        renderQuiz(data);
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
