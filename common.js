// Shared across index.html (app.js) and course.html (course.js): course
// metadata, date/time formatting, the event-card renderer, and the theme
// toggle. Exposed as window.PCLL rather than ES modules, to keep this a
// zero-build static site (plain <script> tags, no bundler).
// Applied immediately (this file is loaded synchronously in <head>, before
// the stylesheet) so there's no flash of the wrong theme. Light is the
// default — dark only applies once the visitor has explicitly chosen it.
(function () {
  try {
    const saved = localStorage.getItem('pcll.theme');
    document.documentElement.dataset.theme = saved === 'dark' ? 'dark' : 'light';
  } catch (e) {
    document.documentElement.dataset.theme = 'light';
  }
})();

(() => {
  'use strict';

  const COURSE_COLORS = {
    PCLL8010: '#2b6cb0', // Civil Litigation
    PCLL8020: '#2f855a', // Corp & Com Transactions
    PCLL8030: '#b7791f', // Property Transactions
    PCLL8040: '#6b46c1', // Professional Practice & Management
    PCLL8050: '#c53030', // Criminal Litigation
    PCLL8051: '#dd6b20', // Criminal Advocacy
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
  const THEME_KEY = 'pcll.theme';
  const ELECTIVES_KEY = 'pcll.myElectives';

  // Inline SVG (stroke="currentColor") instead of emoji — crisp at any size,
  // matches text color in both themes, no font/platform glyph variance.
  const ICONS = {
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M10 8.5l5 3.5-5 3.5z" fill="currentColor" stroke="none"/></svg>',
    refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
  };

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

  function eventIsFilteredOut(ev, myElectives) {
    if (!ev.code || !ELECTIVE_CODES.includes(ev.code)) return false;
    if (myElectives.size === 0) return false; // nothing chosen yet -> show everything
    return !myElectives.has(ev.code);
  }

  // Wires up the settings gear/panel/checkboxes shared by every page that
  // has one. `onChange` is called after any elective is ticked/unticked, so
  // the page can re-render with the new filter applied.
  function initElectiveSettings({ settingsBtn, closeBtn, panel, listEl, onChange }) {
    function renderList() {
      const mine = loadMyElectives();
      listEl.innerHTML = ELECTIVE_CODES.map((code) => `
        <div class="elective-row">
          <input type="checkbox" id="ec-${code}" data-code="${code}" ${mine.has(code) ? 'checked' : ''} />
          <label for="ec-${code}">${code} — ${ELECTIVE_NAMES[code]}</label>
        </div>`).join('');
      listEl.querySelectorAll('input[type=checkbox]').forEach((cb) => {
        cb.addEventListener('change', () => {
          const set = loadMyElectives();
          if (cb.checked) set.add(cb.dataset.code);
          else set.delete(cb.dataset.code);
          saveMyElectives(set);
          if (onChange) onChange();
        });
      });
    }
    settingsBtn.addEventListener('click', () => {
      renderList();
      panel.classList.add('open');
    });
    closeBtn.addEventListener('click', () => { panel.classList.remove('open'); });
    panel.addEventListener('click', (e) => {
      if (e.target === panel) panel.classList.remove('open');
    });
  }

  function todayISO() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  // The index of the week containing today, or (if today falls between
  // weeks, e.g. a break) the most recently started week.
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

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function field(label, value) {
    return `<div class="field"><span class="field-label">${escapeHtml(label)}</span><span class="field-value">${escapeHtml(value)}</span></div>`;
  }

  async function fetchTimetable(fresh) {
    const res = await fetch(`/api/timetable${fresh ? '?fresh=1' : ''}`);
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Failed to load timetable');
    return data;
  }

  const TIMETABLE_CACHE_KEY = 'pcll.timetableCache';

  function getCachedTimetable() {
    try {
      const raw = localStorage.getItem(TIMETABLE_CACHE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  function setCachedTimetable(data) {
    try {
      localStorage.setItem(TIMETABLE_CACHE_KEY, JSON.stringify(data));
    } catch {
      /* localStorage unavailable — just skip the cache */
    }
  }

  // Stale-while-revalidate, client-side: every page load otherwise re-pays
  // the live sheet's fetch+parse cost (well over a second — see README) even
  // though the data rarely changes between visits. Shows the last-cached
  // copy instantly (if any) via `onData(data, true)`, then fetches fresh
  // data in the background and calls `onData(data, false)` again once it
  // lands — so navigating between pages feels instant after the first
  // visit instead of showing a loading state every time.
  async function loadTimetable({ fresh, onData, onError }) {
    const cached = fresh ? null : getCachedTimetable();
    if (cached) onData(cached, true);
    try {
      const data = await fetchTimetable(fresh);
      setCachedTimetable(data);
      onData(data, false);
    } catch (err) {
      if (!cached) onError(err);
      // else: already showing cached data — a failed background refresh
      // isn't worth surfacing as an error.
    }
  }

  // scope: 'group' means this SG session is confirmed to include the
  // student's group — either an explicit Gp N/M line matched it, or (see
  // lib/parseTimetable.js) it's the sole, uncontested occurrence of that SG
  // number this week. Named wrapper so every "is this actually mine" check
  // reads the same way at every call site.
  function isMyGroupSession(ev) {
    return ev.scope === 'group';
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

  // opts: { dateIso, linkable = true, dateHeading }
  // - dateIso: this event's own date, for the "happening now" check.
  // - linkable: wrap the card in a link to that course's page (skipped when
  //   already on that course's own page, or when there's no code to link).
  // - dateHeading: e.g. "Monday, September 1" — shown atop the card when
  //   sessions from different days are listed together (the course page).
  function eventCardHtml(ev, opts = {}) {
    const { dateIso, linkable = true, dateHeading } = opts;
    const color = COURSE_COLORS[ev.code] || DEFAULT_COLOR;
    const timeText = ev.start ? `${fmtTime(ev.start)}${ev.end ? '–' + fmtTime(ev.end) : ''}` : (ev.timeLabel || 'Time TBC');
    const codeName = ev.code ? (ELECTIVE_NAMES[ev.code] || '') : '';
    const isOtherGroup = ev.scope === 'other-group';

    const fields = [];
    if (ev.no) fields.push(field('No.', ev.no + (ev.part ? ` (${ev.part})` : '')));
    else if (ev.part) fields.push(field('Section', ev.part));
    if (ev.topic) fields.push(field('Topic', ev.topic));
    if (ev.venue) fields.push(field('Venue', ev.venue));
    if (ev.instructor) fields.push(field('Who', ev.instructor));
    const fieldsHtml = fields.join('');

    const otherGroupsHtml = ev.otherGroups && ev.otherGroups.length
      ? `<div class="other-groups">${ev.otherGroups.map((g) => escapeHtml(g)).join('<br>')}</div>`
      : '';

    const mineBadge = isMyGroupSession(ev) ? '<span class="mine-badge">Your group</span>' : '';
    const otherGroupBadge = isOtherGroup ? '<span class="other-group-badge">Not your group</span>' : '';
    const dateHeadingHtml = dateHeading ? `<div class="event-date">${escapeHtml(dateHeading)}</div>` : '';
    const now = isHappeningNow(ev, dateIso);

    const tag = linkable && ev.code ? 'a' : 'div';
    const hrefAttr = linkable && ev.code ? ` href="course.html?code=${encodeURIComponent(ev.code)}"` : '';

    return `<${tag} class="event-card${now ? ' now' : ''}${isOtherGroup ? ' other-group' : ''}" style="--course-color:${color}"${hrefAttr}>
      ${dateHeadingHtml}
      <span class="time">${timeText}</span>${ev.code ? `<span class="course-tag"><span class="swatch"></span>${escapeHtml(ev.code)}${codeName ? ' · ' + escapeHtml(codeName) : ''}</span>` : ''}
      <div class="fields">${fieldsHtml}</div>
      ${otherGroupsHtml}
      ${mineBadge}${otherGroupBadge}
    </${tag}>`;
  }

  function effectiveTheme() {
    const explicit = document.documentElement.dataset.theme;
    return explicit === 'dark' ? 'dark' : 'light';
  }

  function setTheme(theme, btn) {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem(THEME_KEY, theme); } catch { /* no-op */ }
    if (btn) {
      btn.innerHTML = theme === 'dark' ? ICONS.sun : ICONS.moon;
      // Restart the pop-in keyframe on every switch (removing then
      // re-adding the class in the same tick wouldn't retrigger it).
      btn.classList.remove('icon-pop');
      void btn.offsetWidth;
      btn.classList.add('icon-pop');
    }
  }

  // Call once per page with the theme toggle button element.
  function initTheme(btn) {
    if (!btn) return;
    btn.innerHTML = effectiveTheme() === 'dark' ? ICONS.sun : ICONS.moon;
    btn.addEventListener('click', () => setTheme(effectiveTheme() === 'dark' ? 'light' : 'dark', btn));
  }

  window.PCLL = {
    ICONS, COURSE_COLORS, DEFAULT_COLOR, ELECTIVE_CODES, ELECTIVE_NAMES,
    todayISO, pickCurrentWeekIndex, fmtShort, fmtLong, fmtTime, escapeHtml, field, isHappeningNow, isMyGroupSession,
    eventCardHtml, effectiveTheme, setTheme, initTheme, fetchTimetable, loadTimetable,
    loadMyElectives, saveMyElectives, eventIsFilteredOut, initElectiveSettings,
  };
})();
