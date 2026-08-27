(() => {
  'use strict';

  const COURSE_COLORS = {
    PCLL8010: '#2b6cb0', // Civil Litigation
    PCLL8020: '#2f855a', // Corp & Com Transactions
    PCLL8030: '#b7791f', // Property Transactions
    PCLL8040: '#6b46c1', // Professional Practice & Management
    PCLL8050: '#c53030', // Criminal Litigation
    PCLL8051: '#dd6b20', // Criminal Advocacy
    PCLL8104: '#3182ce', // Civil Advocacy
    PCLL8014: '#3182ce', // Civil Advocacy
  };
  const DEFAULT_COLOR = '#4a5568';
  const ELECTIVE_CODES = [
    'PCLL8100', 'PCLL8101', 'PCLL8102', 'PCLL8103', 'PCLL8105', 'PCLL8107',
    'PCLL8108', 'PCLL8109', 'PCLL8110', 'PCLL8111', 'PCLL8112', 'PCLL8113',
  ];
  const ELECTIVE_NAMES = {
    PCLL8100: 'Trial Advocacy',
    PCLL8101: 'Commercial Dispute Resolution',
    PCLL8102: 'Personal Injury Litigation',
    PCLL8103: 'Matrimonial Practice and Procedure',
    PCLL8105: 'Drafting Commercial Agreements',
    PCLL8107: 'Listed Companies',
    PCLL8108: 'China Practice',
    PCLL8109: 'Wills, Trusts and Estate Planning',
    PCLL8110: 'Use of Chinese in Legal Practice',
    PCLL8111: 'Financial Regulations and Practice',
    PCLL8112: 'Employment Law and Practice',
    PCLL8113: 'Property Practice',
  };
  const ELECTIVES_KEY = 'pcll.myElectives';
  const THEME_KEY = 'pcll.theme';

  let timetable = null;
  let activeWeekIndex = 0;
  let activeDayIndex = 0;
  let viewMode = 'grid'; // 'grid' | 'day'

  const $ = (id) => document.getElementById(id);

  function todayISO() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

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

  function fmtShort(iso) {
    const d = new Date(iso + 'T00:00:00Z');
    return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', timeZone: 'UTC' });
  }

  function fmtLong(iso) {
    const d = new Date(iso + 'T00:00:00Z');
    return d.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC' });
  }

  function fmtTime(hhmm) {
    if (!hhmm) return '';
    const [h, m] = hhmm.split(':').map(Number);
    const period = h >= 12 ? 'pm' : 'am';
    const h12 = h % 12 === 0 ? 12 : h % 12;
    return m === 0 ? `${h12}${period}` : `${h12}:${String(m).padStart(2, '0')}${period}`;
  }

  function renderWeekRange(week) {
    const days = week.days.filter((d) => d.date);
    const el = $('weekRange');
    if (!days.length) { el.textContent = `Week ${week.week}`; return; }
    el.textContent = `Week ${week.week} · ${fmtShort(days[0].date)} – ${fmtShort(days[days.length - 1].date)}, ${new Date(days[0].date + 'T00:00:00Z').getUTCFullYear()}`;
  }

  function eventCardHtml(ev, myElectives, dateIso) {
    const color = COURSE_COLORS[ev.code] || DEFAULT_COLOR;
    const timeText = ev.start ? `${fmtTime(ev.start)}${ev.end ? '–' + fmtTime(ev.end) : ''}` : (ev.timeLabel || 'Time TBC');
    const codeName = ev.code ? (ELECTIVE_NAMES[ev.code] || '') : '';
    const linesHtml = (ev.lines || [])
      .map((l) => `<div>${escapeHtml(l)}</div>`)
      .join('');
    const detailHtml = ev.detail ? `<div>${escapeHtml(ev.detail)}</div>` : '';
    const mineBadge = ev.scope === 'group' ? '<span class="mine-badge">Your group</span>' : '';
    const now = isHappeningNow(ev, dateIso);
    return `<div class="event-card${now ? ' now' : ''}" style="--course-color:${color}">
      <span class="time">${timeText}</span>${ev.code ? `<span class="course-tag"><span class="swatch"></span>${escapeHtml(ev.code)}${codeName ? ' · ' + escapeHtml(codeName) : ''}</span>` : ''}
      <div class="lines">${linesHtml}${detailHtml}</div>
      ${mineBadge}
    </div>`;
  }

  function isHappeningNow(ev, dateIso) {
    if (!ev.start || !ev.end) return false;
    if (dateIso && dateIso !== todayISO()) return false;
    const now = new Date();
    const nowMin = now.getHours() * 60 + now.getMinutes();
    const [sh, sm] = ev.start.split(':').map(Number);
    const [eh, em] = ev.end.split(':').map(Number);
    return nowMin >= sh * 60 + sm && nowMin <= eh * 60 + em;
  }

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
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
          ${events.length ? events.map((ev) => eventCardHtml(ev, myElectives, day.date)).join('') : '<div class="empty-day">No sessions</div>'}
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
      ? events.map((ev) => eventCardHtml(ev, myElectives, day.date)).join('')
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

  function effectiveTheme() {
    const explicit = document.documentElement.dataset.theme;
    if (explicit === 'light' || explicit === 'dark') return explicit;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function updateThemeButton() {
    $('themeBtn').textContent = effectiveTheme() === 'dark' ? '☀️' : '🌙';
  }

  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem(THEME_KEY, theme); } catch { /* no-op */ }
    updateThemeButton();
  }

  function initTheme() {
    updateThemeButton();
    $('themeBtn').addEventListener('click', () => {
      setTheme(effectiveTheme() === 'dark' ? 'light' : 'dark');
    });
  }

  function init() {
    initTheme();
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
