(() => {
  'use strict';

  const {
    ELECTIVE_NAMES, initTheme, initFontScale, loadTimetable,
    sessionKeyFor, sessionDetailHtml, sessionFallbackHtml, wireSessionDetail,
    quizHref, findSessionInTimetable,
    loadCourseDetails, wireSiteSearch,
  } = window.PCLL;

  const $ = (id) => document.getElementById(id);
  const params = new URLSearchParams(location.search);
  const code = (params.get('code') || '').trim().toUpperCase();
  const no = params.get('no') || '';
  const dateIso = params.get('date') || '';
  const start = params.get('start') || '';
  // The notes for this one course, fetched on their own rather than shipped
  // with the page. Started here at module scope so the request goes out in
  // parallel with the timetable's, and awaited in load() before anything
  // renders. Resolves to null for a course with no authored notes, which is
  // the case every dead-end message below already handles.
  let details = null;
  const detailsReady = loadCourseDetails(code);

  if (code) $('backLink').href = `course.html?code=${encodeURIComponent(code)}`;

  function setSyncStatus(text) {
    $('syncStatus').textContent = text;
  }

  function renderSession(data) {
    const entry = findSessionInTimetable(data, code, no, dateIso, start);
    const section = $('sessionSection');
    if (!entry) {
      section.hidden = true;
      $('status').hidden = false;
      $('status').className = 'status error';
      $('status').textContent = 'Could not find this session — it may have moved. Check the course page instead.';
      return;
    }
    const { ev, dateIso: foundDate, weekNumber, dayName } = entry;

    const courseName = code ? (data.meta.courses[code] || ELECTIVE_NAMES[code] || '') : '';
    $('courseLink').textContent = courseName ? `${code} · ${courseName}` : code;
    $('courseLink').href = `course.html?code=${encodeURIComponent(code)}`;

    const heading = `${ev.no ? ev.no + ' — ' : ''}${ev.topic || 'Session'}`;
    document.title = `${heading} — Whack the PCLL`;
    $('sessionTitle').textContent = heading;

    const key = sessionKeyFor(ev.no);
    const sessionDetail = details && details.sessions && key && details.sessions[key];
    const bodyEl = $('sessionBody');
    bodyEl.innerHTML = sessionDetail
      ? sessionDetailHtml(sessionDetail, ev, code, details, foundDate)
      : sessionFallbackHtml(ev, foundDate, weekNumber, dayName);
    wireSessionDetail(bodyEl, sessionDetail, code, ev);

    // Exam-notes sessions author no cloze or flashcards, but their test is
    // derived from the notes themselves (examQuestionBank), so they get the
    // button too — with wording that says which one you are about to open.
    const studyLink = $('studyLink');
    const hasQuiz = sessionDetail && (sessionDetail.cloze || sessionDetail.flashcards);
    const hasExamNotes = !!(sessionDetail && sessionDetail.examNotes);
    if (hasQuiz || hasExamNotes) {
      studyLink.href = quizHref(ev, foundDate);
      // Set the two label spans, NOT the anchor's own textContent: the
      // button is an icon + title + subtitle + arrow, and assigning
      // textContent to the anchor deletes all four.
      const derived = hasExamNotes && !hasQuiz;
      studyLink.querySelector('.study-cta-title').textContent = derived
        ? 'Test Yourself' : 'Quiz & Flashcards';
      studyLink.querySelector('.study-cta-sub').textContent = derived
        ? 'Multiple-choice questions built from this session’s exam notes'
        : 'Test yourself on this session’s key legal principles';
      studyLink.hidden = false;
    } else {
      studyLink.hidden = true;
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
    details = await detailsReady;
    await loadTimetable({
      onData: (data, isStale) => {
        renderSession(data);
        // Search needs the live timetable to turn a hit into a link, so it
        // is wired here rather than at load. It no-ops on a repeat call.
        wireSiteSearch(data);
        setSyncStatus(isStale
          ? `Showing cached data from ${new Date(data.meta.syncedAt).toLocaleString()} — refreshing…`
          : `Last synced ${new Date(data.meta.syncedAt).toLocaleString()}`);
      },
      onError: (err) => {
        $('status').hidden = false;
        $('status').className = 'status error';
        $('status').textContent = 'Could not load this session: ' + err.message;
        setSyncStatus('Sync failed');
      },
    });
  }

  initTheme($('themeBtn'));
  initFontScale($('fontBtn'));
  load();
})();
