(() => {
  'use strict';

  const {
    todayISO, pickCurrentWeekIndex, fmtShort, fmtLong, fmtTime, escapeHtml,
    eventCardHtml, initTheme, loadTimetable, loadMyElectives,
    eventIsFilteredOut, initElectiveSettings, ELECTIVE_NAMES, ICONS,
    COURSE_COLORS, DEFAULT_COLOR, isMyGroupSession,
  } = window.PCLL;
  const LEGAL_SKILLS = window.LEGAL_SKILLS;

  const ADVOCACY_CODES = new Set(['PCLL8051', 'PCLL8014']);
  const WATCH_RE = /assessment|exam\b|provisional|hand in|deadline|separate notice|holiday|court attendance/i;
  // Targets "before", not "after" — that's the actual watch-by deadline
  // ("...after LG8 and before LG9" should resolve to LG9, not LG8). The
  // reference isn't always an LG — some are "to be watched before SG3".
  const DEADLINE_RE = /before\s+(?:CCT\s+)?((?:LG|SG)\s*\d+[A-Za-z]?)/i;

  const $ = (id) => document.getElementById(id);

  let timetable = null;

  function setSyncStatus(text) {
    $('syncStatus').textContent = text;
  }

  function ownEventsFor(day, myElectives) {
    return (day.events || []).filter((ev) => ev.scope !== 'other-group' && !eventIsFilteredOut(ev, myElectives));
  }

  function findTodayContext() {
    const today = todayISO();
    const weekIdx = pickCurrentWeekIndex(timetable.weeks);
    const week = timetable.weeks[weekIdx];
    const day = week.days.find((d) => d.date === today) || null;

    // First/last dated day across the *whole* timetable, to tell "before
    // term starts" / "programme's over" apart from an ordinary day the
    // sheet has nothing for (there's no Sunday column at all, say).
    const allDated = timetable.weeks.flatMap((w) => w.days.filter((d) => d.date));
    const first = allDated[0];
    const last = allDated[allDated.length - 1];

    return { today, week, day, first, last };
  }

  function renderHero(ctx, ownEvents) {
    const dateLabel = fmtLong(ctx.today);
    let summary;
    if (!ctx.day) {
      if (isBeforeTerm(ctx)) summary = `Term starts ${fmtLong(ctx.first.date)}.`;
      else if (isAfterTerm(ctx)) summary = 'The programme has concluded — well done.';
      else summary = 'No classes on the books today.';
    } else if (ownEvents.length === 0) {
      summary = 'No classes today — a clear day.';
    } else {
      const first = ownEvents[0];
      summary = `${ownEvents.length} class${ownEvents.length === 1 ? '' : 'es'} today, starting ${first.start ? fmtTime(first.start) : 'soon'}.`;
    }
    $('hero').innerHTML = `
      <div class="hero-date">${escapeHtml(dateLabel)}</div>
      <div class="hero-summary">${escapeHtml(summary)}</div>
      <div class="hero-week">Week ${ctx.week.week}${ctx.week.days[0] && ctx.week.days[0].date ? ` · ${fmtShort(ctx.week.days[0].date)} – ${fmtShort(ctx.week.days[ctx.week.days.length - 1].date)}` : ''}</div>
    `;
  }

  function isBeforeTerm(ctx) { return ctx.first && ctx.today < ctx.first.date; }
  function isAfterTerm(ctx) { return ctx.last && ctx.today > ctx.last.date; }

  function renderClasses(ownEvents, dateIso) {
    const list = $('classesList');
    list.innerHTML = ownEvents.length
      ? ownEvents.map((ev) => eventCardHtml(ev, { dateIso })).join('')
      : '<div class="empty-day">No classes today.</div>';
  }

  function renderTodo(ctx, ownEvents) {
    const items = [];
    if (!ctx.day) {
      if (isBeforeTerm(ctx)) {
        items.push(`Term hasn't started yet — worth reading the PCLL Handbook on Moodle and confirming your Exam4 setup before ${fmtLong(ctx.first.date)}.`);
      } else {
        items.push('No sessions today — a good day to get ahead on reading and pre-recorded LGs.');
      }
    } else if (ownEvents.length === 0) {
      items.push('No sessions today — a good day to get ahead on reading and pre-recorded LGs.');
    } else {
      if (ownEvents.some(isMyGroupSession)) {
        items.push('Review the SG Activity Plan(s) on Moodle before today’s small-group session(s) — attendance is compulsory and it assumes you’ve already prepared.');
      }
      if (ownEvents.some((e) => /assessment|exam\b|hand in/i.test(`${e.no || ''} ${e.topic || ''}`))) {
        items.push('There’s an assessment/exam or a hand-in today — check the exact time and format, and get there early.');
      }
      if (ownEvents.some((e) => /court attendance/i.test(`${e.topic || ''} ${e.venue || ''}`))) {
        items.push('Court attendance today — double-check the separate notice for which court and time.');
      }
      if (items.length === 0) {
        items.push('Attend today’s session(s) — if any LG has a pre-recorded video flagged on Moodle, watch it beforehand.');
      }
    }
    $('todoList').innerHTML = items.map((t) => `<li>${escapeHtml(t)}</li>`).join('');
  }

  function renderWatchList(week) {
    const flagged = [];
    for (const day of week.days) {
      for (const ev of day.events || []) {
        if (ev.scope === 'other-group') continue;
        const haystack = `${ev.no || ''} ${ev.topic || ''} ${ev.venue || ''} ${ev.category || ''}`;
        if (!WATCH_RE.test(haystack)) continue;
        const when = day.date ? fmtShort(day.date) : day.day;
        const what = ev.topic || ev.no || ev.category || 'Notice';
        flagged.push(`${when}: ${what}`);
      }
    }
    const list = $('watchList');
    list.innerHTML = flagged.length
      ? [...new Set(flagged)].map((t) => `<li>${escapeHtml(t)}</li>`).join('')
      : '<li class="muted">Nothing flagged this week.</li>';
  }

  function renderWeekStrip(week, myElectives) {
    const strip = $('weekStrip');
    const today = todayISO();
    strip.innerHTML = week.days.map((day) => {
      const events = ownEventsFor(day, myElectives);
      const isToday = day.date === today;
      const firstTime = events.length && events[0].start ? fmtTime(events[0].start) : null;
      return `<a href="timetable.html" class="week-strip-day${isToday ? ' is-today' : ''}">
        <div class="wsd-day">${escapeHtml(day.day.slice(0, 3))}</div>
        <div class="wsd-date">${day.date ? escapeHtml(fmtShort(day.date)) : ''}</div>
        <div class="wsd-count">${events.length ? `${events.length} class${events.length === 1 ? '' : 'es'}` : 'Free'}</div>
        ${firstTime ? `<div class="wsd-time">${escapeHtml(firstTime)}</div>` : ''}
      </a>`;
    }).join('');
  }

  // Cross-references a pre-recorded entry's "before LGx" hint against this
  // week's actual live sessions, so "watch when the time comes" can point at
  // a real day instead of just repeating the raw sheet text.
  function resolvePreRecordedTiming(entry, week) {
    const m = DEADLINE_RE.exec(entry.when || '');
    if (!m) return null;
    const targetNo = m[1].replace(/\s+/g, '').toUpperCase();
    for (const day of week.days) {
      for (const ev of day.events || []) {
        if (ev.code === entry.code && ev.no && ev.no.replace(/\s+/g, '').toUpperCase() === targetNo) {
          return { date: day.date, day: day.day };
        }
      }
    }
    return null;
  }

  function renderPreRecordedList(week, myElectives) {
    const today = todayISO();
    const entries = (week.preRecorded || []).filter((e) => !eventIsFilteredOut({ code: e.code }, myElectives));
    const items = entries.map((entry) => {
      const name = (timetable.meta.courses || {})[entry.code] || ELECTIVE_NAMES[entry.code] || '';
      const label = `${entry.code}${name ? ' · ' + name : ''}${entry.no ? ' — ' + entry.no : ''}`;
      const timing = resolvePreRecordedTiming(entry, week);
      let when;
      if (timing) {
        const passed = timing.date && timing.date < today;
        when = passed ? `Was due before ${timing.day} (passed)` : `Watch before ${timing.day}`;
      } else {
        when = entry.when ? entry.when[0].toUpperCase() + entry.when.slice(1) : 'No specific timing given';
      }
      return `<li>
        <strong>${escapeHtml(label)}</strong>
        <div>${escapeHtml(entry.topic || '')}</div>
        <div class="video-when">${ICONS.play}${escapeHtml(when)}</div>
      </li>`;
    });
    $('preRecordedList').innerHTML = items.length
      ? items.join('')
      : '<li class="muted">Nothing to pre-watch this week.</li>';
  }

  // A quick-nav chip per course — every code in meta.courses (core courses
  // plus every elective, whether or not the student's picked it yet), minus
  // electives ruled out once they have picked their 3 (same filter as every
  // other elective-aware list on the site).
  function renderCourseList(myElectives) {
    const courses = timetable.meta.courses || {};
    const codes = Object.keys(courses)
      .filter((code) => !eventIsFilteredOut({ code }, myElectives))
      .sort();
    $('courseList').innerHTML = codes.map((code) => {
      const color = COURSE_COLORS[code] || DEFAULT_COLOR;
      const name = courses[code] || ELECTIVE_NAMES[code] || '';
      return `<a href="course.html?code=${encodeURIComponent(code)}" class="course-chip" style="--course-color:${color}">
        <span class="swatch"></span>${escapeHtml(code)}${name ? ' · ' + escapeHtml(name) : ''}
      </a>`;
    }).join('');
  }

  function legalSkillsKeyFor(code) {
    if (!code) return null;
    if (ADVOCACY_CODES.has(code)) return 'ADVOCACY';
    if (LEGAL_SKILLS[code]) return code;
    return null;
  }

  function dayOfYear(date) {
    const start = new Date(Date.UTC(date.getUTCFullYear(), 0, 0));
    return Math.floor((date - start) / 86400000);
  }

  function renderLegalSkill(ownEvents) {
    const keys = [...new Set(ownEvents.map((e) => legalSkillsKeyFor(e.code)).filter(Boolean))];
    const pool = keys.length ? keys.flatMap((k) => LEGAL_SKILLS[k]) : LEGAL_SKILLS.GENERIC;
    const pick = pool[dayOfYear(new Date()) % pool.length];
    $('legalSkillCard').innerHTML = `
      <span class="legal-skill-tag">${escapeHtml(pick.type)}</span>
      <p>${escapeHtml(pick.text)}</p>
    `;
  }

  function render() {
    const ctx = findTodayContext();
    const myElectives = loadMyElectives();
    const ownEvents = ctx.day ? ownEventsFor(ctx.day, myElectives) : [];

    renderHero(ctx, ownEvents);
    renderCourseList(myElectives);
    renderClasses(ownEvents, ctx.day ? ctx.day.date : null);
    renderTodo(ctx, ownEvents);
    renderPreRecordedList(ctx.week, myElectives);
    renderWatchList(ctx.week);
    renderWeekStrip(ctx.week, myElectives);
    renderLegalSkill(ownEvents);
  }

  async function load(fresh) {
    setSyncStatus(fresh ? 'Refreshing…' : 'Syncing…');
    await loadTimetable({
      fresh,
      onData: (data, isStale) => {
        timetable = data;
        $('status').hidden = true;
        $('dashboardBody').hidden = false;
        render();
        setSyncStatus(isStale
          ? `Showing cached data from ${new Date(data.meta.syncedAt).toLocaleString()} — refreshing…`
          : `Last synced ${new Date(data.meta.syncedAt).toLocaleString()}`);
      },
      onError: (err) => {
        $('status').hidden = false;
        $('status').className = 'status error';
        $('status').textContent = 'Could not load the dashboard: ' + err.message;
        setSyncStatus('Sync failed');
      },
    });
  }

  function init() {
    initTheme($('themeBtn'));
    initElectiveSettings({
      settingsBtn: $('settingsBtn'),
      closeBtn: $('closeSettings'),
      panel: $('settingsPanel'),
      listEl: $('electiveList'),
      onChange: render,
    });
    $('refreshBtn').addEventListener('click', async () => {
      const icon = $('refreshBtn').querySelector('.refresh-icon');
      if (icon) icon.classList.add('spinning');
      await load(true);
      if (icon) icon.classList.remove('spinning');
    });
    load(false);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
