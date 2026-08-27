(() => {
  'use strict';

  const { ELECTIVE_CODES, ELECTIVE_NAMES, todayISO, fmtShort, fmtLong, eventCardHtml, initTheme } = window.PCLL;

  const ELECTIVES_KEY = 'pcll.myElectives';

  let timetable = null;
  let activeWeekIndex = 0;
  let activeDayIndex = 0;
  let viewMode = 'grid'; // 'grid' | 'day'

  const $ = (id) => document.getElementById(id);

  function loadMyElectives() {
    try {
      return new Set(JSON.parse(localStorage.getItem(ELECTIVES_KEY) || '[]'));
    } catch {
      return new Set();
    }
  }

  function saveMyElectives(set) {
    try {
      localStorage.setItem(ELECTIVES_KEY, JSON.stringify([...set]));
    } catch {
      /* localStorage unavailable — filtering just won't persist */
    }
  }

  async function fetchTimetable(fresh) {
    const res = await fetch(`/api/timetable${fresh ? '?fresh=1' : ''}`);
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Failed to load timetable');
    return data;
  }

  function pickCurrentWeekIndex(weeks) {
    const today = todayISO();
    let best = 0;
    for (let i = 0; i < weeks.length; i++) {
      const days = weeks[i].days.filter((d) => d.date);
      if (!days.length) continue;
      const first = days[0].date;
      const last = days[days.length - 1].date;
      if (today >= first && today <= last) return i;
      if (today > last) best = i; // keep advancing to the most recent past week
      if (today < first) return best; // stop at the first upcoming week
    }
    return best;
  }

  function eventIsFilteredOut(ev, myElectives) {
    if (!ev.code || !ELECTIVE_CODES.includes(ev.code)) return false;
    if (myElectives.size === 0) return false; // nothing chosen yet -> show everything
    return !myElectives.has(ev.code);
  }

  function renderWeekPills() {
    const scroll = $('weekScroll');
    scroll.innerHTML = '';
    const today = todayISO();
    const currentIdx = pickCurrentWeekIndex(timetable.weeks);
    timetable.weeks.forEach((w, i) => {
      const btn = document.createElement('button');
      const days = w.days.filter((d) => d.date);
      const range = days.length ? `${fmtShort(days[0].date)}–${fmtShort(days[days.length - 1].date)}` : '';
      btn.className = 'week-pill' + (i === activeWeekIndex ? ' active' : '') + (i === currentIdx ? ' current-real-week' : '');
      btn.textContent = `Wk ${w.week}`;
      btn.title = range;
      btn.addEventListener('click', () => selectWeek(i));
      scroll.appendChild(btn);
    });
  }

  function renderWeekRange(week) {
    const days = week.days.filter((d) => d.date);
    const el = $('weekRange');
    if (!days.length) { el.textContent = `Week ${week.week}`; return; }
    el.textContent = `Week ${week.week} · ${fmtShort(days[0].date)} – ${fmtShort(days[days.length - 1].date)}, ${new Date(days[0].date + 'T00:00:00Z').getUTCFullYear()}`;
  }

  function renderGridView(week) {
    const grid = $('weekGrid');
    grid.innerHTML = '';
    const today = todayISO();
    const myElectives = loadMyElectives();
    for (const day of week.days) {
      const col = document.createElement('div');
      col.className = 'day-col' + (day.date === today ? ' is-today' : '');
      const events = (day.events || []).filter((ev) => !eventIsFilteredOut(ev, myElectives));
      col.innerHTML = `
        <div class="day-col-head">${day.day}${day.date ? `<span class="date">${fmtShort(day.date)}</span>` : ''}</div>
        <div class="day-col-body">
          ${events.length ? events.map((ev) => eventCardHtml(ev, { dateIso: day.date })).join('') : '<div class="empty-day">No sessions</div>'}
        </div>`;
      grid.appendChild(col);
    }
  }

  function renderDayView(week) {
    const days = week.days;
    if (activeDayIndex >= days.length) activeDayIndex = 0;
    const day = days[activeDayIndex];
    const myElectives = loadMyElectives();
    $('dayViewLabel').innerHTML = `${day.day}${day.date ? `<span class="date">${fmtLong(day.date)}</span>` : ''}`;
    const events = (day.events || []).filter((ev) => !eventIsFilteredOut(ev, myElectives));
    $('dayViewBody').innerHTML = events.length
      ? events.map((ev) => eventCardHtml(ev, { dateIso: day.date })).join('')
      : '<div class="empty-day">No sessions</div>';
  }

  function render() {
    const week = timetable.weeks[activeWeekIndex];
    renderWeekPills();
    renderWeekRange(week);
    if (viewMode === 'grid') {
      $('weekGrid').hidden = false;
      $('dayView').hidden = true;
      renderGridView(week);
    } else {
      $('weekGrid').hidden = true;
      $('dayView').hidden = false;
      renderDayView(week);
    }
    // Keep the active week pill scrolled into view.
    const activePill = $('weekScroll').querySelector('.week-pill.active');
    if (activePill) activePill.scrollIntoView({ inline: 'center', block: 'nearest' });
  }

  function selectWeek(i) {
    activeWeekIndex = Math.max(0, Math.min(timetable.weeks.length - 1, i));
    activeDayIndex = 0;
    render();
  }

  function renderSettings() {
    const mine = loadMyElectives();
    const list = $('electiveList');
    list.innerHTML = ELECTIVE_CODES.map((code) => `
      <div class="elective-row">
        <input type="checkbox" id="ec-${code}" data-code="${code}" ${mine.has(code) ? 'checked' : ''} />
        <label for="ec-${code}">${code} — ${ELECTIVE_NAMES[code]}</label>
      </div>`).join('');
    list.querySelectorAll('input[type=checkbox]').forEach((cb) => {
      cb.addEventListener('change', () => {
        const set = loadMyElectives();
        if (cb.checked) set.add(cb.dataset.code);
        else set.delete(cb.dataset.code);
        saveMyElectives(set);
        render();
      });
    });
  }

  function setSyncStatus(text) {
    $('syncStatus').textContent = text;
  }

  async function load(fresh) {
    try {
      setSyncStatus(fresh ? 'Refreshing…' : 'Syncing…');
      timetable = await fetchTimetable(fresh);
      $('status').hidden = true;
      activeWeekIndex = pickCurrentWeekIndex(timetable.weeks);
      render();
      const synced = new Date(timetable.meta.syncedAt);
      setSyncStatus(`Last synced ${synced.toLocaleString()}`);
    } catch (err) {
      $('status').hidden = false;
      $('status').className = 'status error';
      $('status').textContent = 'Could not load the timetable: ' + err.message;
      setSyncStatus('Sync failed');
    }
  }

  function init() {
    initTheme($('themeBtn'));
    $('prevWeek').addEventListener('click', () => selectWeek(activeWeekIndex - 1));
    $('nextWeek').addEventListener('click', () => selectWeek(activeWeekIndex + 1));
    $('prevDay').addEventListener('click', () => { activeDayIndex = Math.max(0, activeDayIndex - 1); render(); });
    $('nextDay').addEventListener('click', () => {
      const max = timetable.weeks[activeWeekIndex].days.length - 1;
      activeDayIndex = Math.min(max, activeDayIndex + 1);
      render();
    });
    $('gridViewBtn').addEventListener('click', () => {
      viewMode = 'grid';
      $('gridViewBtn').classList.add('active');
      $('dayViewBtn').classList.remove('active');
      render();
    });
    $('dayViewBtn').addEventListener('click', () => {
      viewMode = 'day';
      $('dayViewBtn').classList.add('active');
      $('gridViewBtn').classList.remove('active');
      render();
    });
    $('settingsBtn').addEventListener('click', () => {
      renderSettings();
      $('settingsPanel').hidden = false;
    });
    $('closeSettings').addEventListener('click', () => { $('settingsPanel').hidden = true; });
    $('settingsPanel').addEventListener('click', (e) => {
      if (e.target === $('settingsPanel')) $('settingsPanel').hidden = true;
    });
    $('refreshBtn').addEventListener('click', () => load(true));

    // Default to day view on narrow screens.
    if (window.matchMedia('(max-width: 640px)').matches) {
      viewMode = 'day';
      $('dayViewBtn').classList.add('active');
      $('gridViewBtn').classList.remove('active');
    }

    load(false);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
