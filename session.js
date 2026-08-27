(() => {
  'use strict';

  const {
    ELECTIVE_NAMES, initTheme, loadTimetable,
    sessionKeyFor, sessionDetailHtml, sessionFallbackHtml, wireSessionDetail,
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

  // The event itself isn't in the URL — just enough to re-find it (code +
  // date + session no, with start time as a tie-breaker for the rare case
  // two of a course's events share a date and number/lack one).
  function findSession(data) {
    let candidates = [];
    for (const week of data.weeks) {
      for (const day of week.days) {
        if (dateIso && day.date !== dateIso) continue;
        for (const ev of day.events || []) {
          if (ev.code !== code) continue;
          candidates.push({ ev, dateIso: day.date, weekNumber: week.week, dayName: day.day });
        }
      }
    }
    if (candidates.length > 1) {
      const byNo = candidates.filter((c) => (c.ev.no || '') === no);
      if (byNo.length) candidates = byNo;
    }
    if (candidates.length > 1 && start) {
      const byStart = candidates.filter((c) => c.ev.start === start);
      if (byStart.length) candidates = byStart;
    }
    return candidates[0] || null;
  }

  function renderSession(data) {
    const entry = findSession(data);
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
      ? sessionDetailHtml(sessionDetail, ev, code, details)
      : sessionFallbackHtml(ev, foundDate, weekNumber, dayName);
    wireSessionDetail(bodyEl, sessionDetail, code, ev);

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
