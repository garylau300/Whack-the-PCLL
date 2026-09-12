(() => {
  'use strict';

  const {
    ELECTIVE_NAMES, initTheme, loadTimetable,
    sessionKeyFor, sessionDetailHtml, sessionFallbackHtml, wireSessionDetail,
    quizHref, findSessionInTimetable,
  } = window.PCLL;

  const $ = (id) => document.getElementById(id);
  const params = new URLSearchParams(location.search);
  const code = (params.get('code') || '').trim().toUpperCase();
  const no = params.get('no') || '';
  const dateIso = params.get('date') || '';
  const start = params.get('start') || '';
  const details = (window.COURSE_DETAILS && window.COURSE_DETAILS[code]) || null;

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

    const studyLink = $('studyLink');
    if (sessionDetail && (sessionDetail.cloze || sessionDetail.flashcards)) {
      studyLink.href = quizHref(ev, foundDate);
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
    await loadTimetable({
      onData: (data, isStale) => {
        renderSession(data);
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
  load();
})();
