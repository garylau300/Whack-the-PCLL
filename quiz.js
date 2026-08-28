(() => {
  'use strict';

  const {
    ELECTIVE_NAMES, initTheme, loadTimetable, sessionKeyFor, sessionHref,
    findSessionInTimetable, flashcardSectionHtml, wireFlashcardSection,
    clozeSectionHtml, wireClozeSection,
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

    const heading = `${ev.no ? ev.no + ' — ' : ''}Quiz & Flashcards`;
    document.title = `${heading} — Whack the PCLL`;
    $('quizTitle').textContent = heading;

    const key = sessionKeyFor(ev.no);
    const sessionDetail = details && details.sessions && key && details.sessions[key];

    if (!sessionDetail || (!sessionDetail.cloze && !sessionDetail.flashcards)) {
      section.hidden = true;
      $('status').hidden = false;
      $('status').className = 'status';
      $('status').textContent = 'No quiz or flashcards for this session yet.';
      return;
    }

    const bodyEl = $('quizBody');
    bodyEl.innerHTML = flashcardSectionHtml(sessionDetail.flashcards) + clozeSectionHtml(sessionDetail.cloze);
    wireFlashcardSection(bodyEl);
    wireClozeSection(bodyEl);

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
  load();
})();
