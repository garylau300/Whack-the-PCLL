(() => {
  'use strict';

  const {
    todayISO, pickCurrentWeekIndex, fmtShort, fmtLong, eventCardHtml, initTheme,
    fetchTimetable, loadMyElectives, eventIsFilteredOut, initElectiveSettings,
  } = window.PCLL;

  let timetable = null;
  let activeWeekIndex = 0;
  let activeDayIndex = 0;
  let viewMode = 'grid'; // 'grid' | 'day'

  const $ = (id) => document.getElementById(id);

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
    initElectiveSettings({
      settingsBtn: $('settingsBtn'),
      closeBtn: $('closeSettings'),
      panel: $('settingsPanel'),
      listEl: $('electiveList'),
      onChange: render,
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
