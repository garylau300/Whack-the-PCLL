(() => {
  'use strict';

  const {
    todayISO, pickCurrentWeekIndex, findDateIndex, fmtShort, eventCardHtml, initTheme,
    loadTimetable, loadMyElectives, eventIsFilteredOut, initElectiveSettings,
    buildDeadlinesIndex, deadlineChipsHtml, isDeadlineDone, emptyStateHtml,
  } = window.PCLL;

  // Doesn't depend on the (async) timetable fetch, so it's ready before the
  // first render — a single Map lookup per day thereafter, never a scan.
  const deadlinesIndex = buildDeadlinesIndex(window.COURSE_DETAILS || {});
  function dayDeadlineChips(dateIso) {
    return deadlineChipsHtml((deadlinesIndex.get(dateIso) || []).filter((d) => !isDeadlineDone(d)));
  }

  let timetable = null;
  let activeWeekIndex = 0;
  let activeDayIndex = 0;
  let viewMode = 'grid'; // 'grid' | 'day'
  let navInitialized = false; // only set the initial week once — a background
  // stale-while-revalidate refresh shouldn't jump the user back to "today's
  // week" if they've since navigated elsewhere

  const $ = (id) => document.getElementById(id);

  function renderWeekPills() {
    const scroll = $('weekScroll');
    scroll.innerHTML = '';
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
        <div class="day-col-head">${day.day}${day.date ? `<button type="button" class="date day-jump" data-date="${day.date}">${fmtShort(day.date)}</button>` : ''}${day.date ? dayDeadlineChips(day.date) : ''}</div>
        <div class="day-col-body">
          ${events.length ? events.map((ev) => eventCardHtml(ev, { dateIso: day.date })).join('') : '<div class="empty-day">No sessions</div>'}
        </div>`;
      grid.appendChild(col);
    }
  }

  // Jumps straight to a specific date's day view -- used both by clicking a
  // date header in the week grid, and by a `?date=` link into this page
  // (e.g. from the dashboard's week strip), so either path lands on that
  // exact day rather than always the current week's first day.
  function jumpToDay(dateIso) {
    const found = findDateIndex(timetable.weeks, dateIso);
    if (!found) return;
    activeWeekIndex = found.week;
    activeDayIndex = found.day;
    viewMode = 'day';
    $('dayViewBtn').classList.add('active');
    $('gridViewBtn').classList.remove('active');
    render();
  }

  function renderDayView(week) {
    const days = week.days;
    if (activeDayIndex >= days.length) activeDayIndex = 0;
    const day = days[activeDayIndex];
    const myElectives = loadMyElectives();
    // day.day already supplies the weekday as its own bold heading line, so
    // the muted subline below it skips the weekday fmtLong() would repeat.
    const dateSub = day.date
      ? new Date(day.date + 'T00:00:00Z').toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })
      : '';
    $('dayViewLabel').innerHTML = `${day.day}${dateSub ? `<span class="date">${dateSub}</span>` : ''}`;
    $('dayViewDeadlines').innerHTML = day.date ? dayDeadlineChips(day.date) : '';
    const events = (day.events || []).filter((ev) => !eventIsFilteredOut(ev, myElectives));
    $('dayViewBody').innerHTML = events.length
      ? events.map((ev) => eventCardHtml(ev, { dateIso: day.date })).join('')
      : emptyStateHtml('No sessions — a free day.');
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
    setSyncStatus(fresh ? 'Refreshing…' : 'Syncing…');
    await loadTimetable({
      fresh,
      onData: (data, isStale) => {
        timetable = data;
        $('status').hidden = true;
        if (!navInitialized) {
          const requestedDate = new URLSearchParams(location.search).get('date');
          const found = requestedDate && findDateIndex(timetable.weeks, requestedDate);
          if (found) {
            activeWeekIndex = found.week;
            activeDayIndex = found.day;
            viewMode = 'day';
            $('dayViewBtn').classList.add('active');
            $('gridViewBtn').classList.remove('active');
          } else {
            activeWeekIndex = pickCurrentWeekIndex(timetable.weeks);
          }
          navInitialized = true;
        }
        render();
        setSyncStatus(isStale
          ? `Showing cached data from ${new Date(data.meta.syncedAt).toLocaleString()} — refreshing…`
          : `Last synced ${new Date(data.meta.syncedAt).toLocaleString()}`);
      },
      onError: (err) => {
        $('status').hidden = false;
        $('status').className = 'status error';
        $('status').textContent = 'Could not load the timetable: ' + err.message;
        setSyncStatus('Sync failed');
      },
    });
  }

  function init() {
    initTheme($('themeBtn'));
    $('prevWeek').addEventListener('click', () => selectWeek(activeWeekIndex - 1));
    $('nextWeek').addEventListener('click', () => selectWeek(activeWeekIndex + 1));
    $('prevDay').addEventListener('click', () => {
      if (activeDayIndex > 0) {
        activeDayIndex -= 1;
      } else if (activeWeekIndex > 0) {
        activeWeekIndex -= 1;
        activeDayIndex = timetable.weeks[activeWeekIndex].days.length - 1;
      }
      render();
    });
    $('nextDay').addEventListener('click', () => {
      const max = timetable.weeks[activeWeekIndex].days.length - 1;
      if (activeDayIndex < max) {
        activeDayIndex += 1;
      } else if (activeWeekIndex < timetable.weeks.length - 1) {
        activeWeekIndex += 1;
        activeDayIndex = 0;
      }
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
    // Delegated on the grid container (not re-bound per column) since
    // renderGridView replaces its children wholesale on every render.
    $('weekGrid').addEventListener('click', (e) => {
      const btn = e.target.closest('.day-jump');
      if (btn) jumpToDay(btn.dataset.date);
    });
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
