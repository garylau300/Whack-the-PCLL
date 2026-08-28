// Part 1 of 3 of the site's shared client-side module (see also
// common-content.js and common-session.js) -- split from what used to be
// one 1,056-line common.js so each piece is small enough to actually read.
// This file must load FIRST: it defines the primitives (formatting,
// escaping, storage/cache helpers, the timetable data layer, the
// accessible-dialog helper, the theme toggle) that the other two build on.
// See CLAUDE.md for the required <script> load order on every page.
//
// Exposed as window.PCLL rather than ES modules, to keep this a zero-build
// static site (plain <script> tags, no bundler). Each of the three files
// merges its own exports into window.PCLL (Object.assign, never a plain
// overwrite) so load order among script tags is all that matters -- not
// which file happens to run last.
//
// Applied immediately (this file is loaded synchronously in <head>, before
// the stylesheet) so there's no flash of the wrong theme. Light is the
// default -- dark only applies once the visitor has explicitly chosen it.
(function () {
  try {
    const saved = localStorage.getItem('pcll.theme');
    document.documentElement.dataset.theme = saved === 'dark' ? 'dark' : 'light';
  } catch {
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
  // aria-hidden: every one of these sits inside a control that already has
  // its own accessible name (an aria-label on the button, or adjacent
  // visible text), so the icon itself is purely decorative to assistive
  // tech.
  const ICONS = {
    sun: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',
    moon: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    play: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M10 8.5l5 3.5-5 3.5z" fill="currentColor" stroke="none"/></svg>',
    refresh: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
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

  // Generalizes the loadMyElectives/saveMyElectives pattern with a
  // parameterized storage key, so any new "persisted checklist" (homework,
  // per-SG prep steps, ...) shares one read/write implementation instead of
  // growing its own fixed-key pair.
  function loadCheckedIds(storageKey) {
    try {
      return new Set(JSON.parse(localStorage.getItem(storageKey) || '[]'));
    } catch {
      return new Set();
    }
  }

  function saveCheckedIds(storageKey, set) {
    try {
      localStorage.setItem(storageKey, JSON.stringify([...set]));
    } catch {
      /* localStorage unavailable — checking just won't persist */
    }
  }

  // One canonical key-builder per checklist kind, so every page that reads
  // or writes a given checklist agrees on where it lives.
  function hwChecklistKey(code) { return `pcll.checklist.${code}`; }

  function sgPrepChecklistKey(code, sessionKey) { return `pcll.sgPrep.${code}.${sessionKey}`; }

  // Pure renderer: items -> checklist row markup. No event wiring (same
  // spirit as eventCardHtml/field) — pair with wireChecklist() below.
  function checklistHtml(items, checkedSet) {
    return items.map((item) => {
      const checked = checkedSet.has(item.id);
      return `<label class="checklist-item${checked ? ' checked' : ''}">
        <input type="checkbox" data-id="${escapeHtml(item.id)}" ${checked ? 'checked' : ''} />
        <span class="checklist-label">${escapeHtml(item.label)}</span>
        ${item.meta ? `<span class="checklist-meta">${escapeHtml(item.meta)}</span>` : ''}
      </label>`;
    }).join('');
  }

  // Delegated change-listener for a checklistHtml() container: toggles the
  // clicked item's id in the persisted Set and calls onChange() so the page
  // can re-render (e.g. to refresh "done" styling or due-date labels).
  function wireChecklist(containerEl, storageKey, onChange) {
    containerEl.addEventListener('change', (e) => {
      const input = e.target.closest('input[type=checkbox][data-id]');
      if (!input) return;
      const set = loadCheckedIds(storageKey);
      if (input.checked) set.add(input.dataset.id);
      else set.delete(input.dataset.id);
      saveCheckedIds(storageKey, set);
      if (onChange) onChange();
    });
  }

  // Flattens every course's `deadlines` array (from courseDetails.js) into
  // Map<isoDate, entry[]> — the single place "which dates have something
  // due" logic lives. app.js (timetable day-badges) and dashboard.js
  // (Upcoming Deadlines) both build this once and read the same shape,
  // rather than each re-deriving due dates from homework/assessments.
  function buildDeadlinesIndex(courseDetails) {
    const index = new Map();
    for (const course of Object.values(courseDetails || {})) {
      for (const d of course.deadlines || []) {
        if (!index.has(d.date)) index.set(d.date, []);
        index.get(d.date).push(d);
      }
    }
    return index;
  }

  // The single "is it done" check for a homework/todo-kind deadline —
  // course.js's checklist, the timetable's day-badges, and the dashboard's
  // deadlines list all call this instead of separately re-deriving
  // completion, so ticking a box on the course page makes the same item
  // disappear everywhere else too (each page reads localStorage fresh on
  // its own load).
  function isDeadlineDone(deadline) {
    if (deadline.kind !== 'homework' && deadline.kind !== 'todo') return false;
    return loadCheckedIds(hwChecklistKey(deadline.courseCode)).has(deadline.refId);
  }

  function daysUntil(iso) {
    const today = todayISO();
    const a = new Date(today + 'T00:00:00Z');
    const b = new Date(iso + 'T00:00:00Z');
    return Math.round((b - a) / 86400000);
  }

  // Small pill renderer for a list of deadline entries — used by the
  // timetable's day-header/day-view badges and the dashboard's deadlines
  // list. Callers filter out isDeadlineDone() entries before passing the
  // list in, so a completed item stops showing up as a day-badge too.
  function deadlineChipsHtml(deadlines) {
    if (!deadlines || !deadlines.length) return '';
    return deadlines.map((d) => `<span class="deadline-chip tag-chip deadline-chip--${d.kind}" title="${escapeHtml(d.title)}">${escapeHtml(d.title)}</span>`).join('');
  }

  const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

  // Turns a `.settings-panel`-shaped overlay into an accessible dialog:
  // role="dialog"/aria-modal/aria-labelledby set once at wiring time;
  // Escape closes; Tab/Shift+Tab is trapped within the dialog's currently
  // visible focusable elements (recomputed live, since both the settings
  // panel and the course-page session modal replace their own content via
  // innerHTML after opening); focus moves to the close button on open and
  // back to whatever triggered the open on close. Shared by
  // initElectiveSettings below and course.js's session-detail modal, which
  // were previously two independent, duplicated implementations of the same
  // open/close-panel pattern with none of this behavior.
  function initDialog({ panel, dialog, closeBtn, labelledBy }) {
    dialog.setAttribute('role', 'dialog');
    dialog.setAttribute('aria-modal', 'true');
    dialog.setAttribute('aria-labelledby', labelledBy);

    let triggerEl = null;

    function focusable() {
      return [...dialog.querySelectorAll(FOCUSABLE_SELECTOR)].filter((el) => el.offsetParent !== null);
    }

    function onKeydown(e) {
      if (e.key === 'Escape') { e.preventDefault(); close(); return; }
      if (e.key !== 'Tab') return;
      const items = focusable();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }

    function open(trigger) {
      triggerEl = trigger || document.activeElement;
      panel.classList.add('open');
      closeBtn.focus();
      document.addEventListener('keydown', onKeydown);
    }

    function close() {
      panel.classList.remove('open');
      document.removeEventListener('keydown', onKeydown);
      if (triggerEl) triggerEl.focus();
    }

    closeBtn.addEventListener('click', close);
    panel.addEventListener('click', (e) => { if (e.target === panel) close(); });

    return { open, close };
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
    const modal = initDialog({ panel, dialog: panel.querySelector('.settings-card'), closeBtn, labelledBy: 'settingsTitle' });
    settingsBtn.addEventListener('click', () => {
      renderList();
      modal.open(settingsBtn);
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

  // Shared by sessionHref/quizHref below — `no` + `date` locate the event
  // again once there, `start` is an extra disambiguator for the rare case
  // two of a course's events land on the same date with the same (or no)
  // session number.
  function sessionParams(ev, dateIso) {
    const params = new URLSearchParams({ code: ev.code || '', no: ev.no || '', date: dateIso || '' });
    if (ev.start) params.set('start', ev.start);
    return params;
  }

  // Builds the URL for a session's own page (session.html) from the raw event.
  function sessionHref(ev, dateIso) {
    return `session.html?${sessionParams(ev, dateIso)}`;
  }

  // Builds the URL for that same session's quiz/flashcards page (quiz.html).
  function quizHref(ev, dateIso) {
    return `quiz.html?${sessionParams(ev, dateIso)}`;
  }

  // Pre-recorded timetable entries (week.preRecorded[]) have no date/start
  // of their own, so they can't be re-located by the dated-event search
  // below. Most carry their own `no` (e.g. CCT's pre-recorded "LG5"); for
  // the rest, courseDetails.js's session entry can declare a
  // `preRecordedTopic` matching the entry's exact `topic` text, and that's
  // used as the fallback identifier instead.
  function findPreRecordedSession(data, code, no) {
    const key = sessionKeyFor(no) || no;
    const courseDetail = window.COURSE_DETAILS && window.COURSE_DETAILS[code];
    const sessionDetail = courseDetail && courseDetail.sessions && courseDetail.sessions[key];
    for (const week of data.weeks) {
      for (const entry of week.preRecorded || []) {
        if (entry.code !== code) continue;
        if (entry.no && entry.no === no) {
          return { ev: entry, dateIso: null, weekNumber: week.week, dayName: null };
        }
        if (!entry.no && sessionDetail && sessionDetail.preRecordedTopic && entry.topic === sessionDetail.preRecordedTopic) {
          return { ev: { ...entry, no: key }, dateIso: null, weekNumber: week.week, dayName: null };
        }
      }
    }
    return null;
  }

  // Given a preRecorded entry, finds the courseDetails.js session key (if
  // any) that documents it — either the entry's own `no`, or (when the
  // entry has none) whichever session declares a matching
  // `preRecordedTopic`. Used to decide whether/where a pre-recorded row on
  // course.html should link out to.
  function preRecordedSessionKey(code, entry) {
    if (entry.no) return entry.no;
    const courseDetail = window.COURSE_DETAILS && window.COURSE_DETAILS[code];
    if (!courseDetail || !courseDetail.sessions) return null;
    for (const [key, sessionDetail] of Object.entries(courseDetail.sessions)) {
      if (sessionDetail.preRecordedTopic && sessionDetail.preRecordedTopic === entry.topic) return key;
    }
    return null;
  }

  // Re-locates the event a session.html/quiz.html URL refers to inside a
  // freshly-fetched timetable — the event itself isn't in the URL, just
  // enough (code + date + session no, with start time as a tie-breaker) to
  // find it again. Returns { ev, dateIso, weekNumber, dayName } or null.
  // A blank dateIso always means a pre-recorded entry (see sessionParams) —
  // dated events are never linked without a date, so that case is routed
  // straight to the pre-recorded lookup instead of matching an arbitrary
  // dated session that happens to share the course code.
  function findSessionInTimetable(data, code, no, dateIso, start) {
    if (!dateIso) return findPreRecordedSession(data, code, no);
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

  // "LG1A" -> "LG1", "SG4" -> "SG4" — the key courseDetails.js's `sessions`
  // map uses (no trailing letter; see sessionPartLetter for that).
  function sessionKeyFor(no) {
    const m = /^(LG|SG)\s*(\d+)/i.exec(no || '');
    return m ? (m[1] + m[2]).toUpperCase() : null;
  }

  // "LG1A" -> "A", "LG4" -> null — matched against a session's own
  // `parts[].partLetter`, NOT the unrelated `ev.part` field (that one is the
  // half-cohort A/B split used for scope resolution, and is null for these).
  function sessionPartLetter(no) {
    const m = /^(LG|SG)\s*\d+([A-Za-z])/i.exec(no || '');
    return m ? m[2].toUpperCase() : null;
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

    const mineBadge = isMyGroupSession(ev) ? '<span class="mine-badge tag-chip">Your group</span>' : '';
    const otherGroupBadge = isOtherGroup ? '<span class="other-group-badge tag-chip">Not your group</span>' : '';
    const dateHeadingHtml = dateHeading ? `<div class="event-date">${escapeHtml(dateHeading)}</div>` : '';
    const now = isHappeningNow(ev, dateIso);
    // "Happening now" is also marked by a pulsing outline (.event-card.now)
    // — this text tag is additive so the state isn't conveyed by color/
    // animation alone (WCAG 1.4.1).
    const nowTagHtml = now ? '<span class="now-tag tag-chip">Now</span>' : '';

    const tag = linkable && ev.code ? 'a' : 'div';
    // A numbered session (LG/SG) links straight to its own page; anything
    // else (no session number to key off) falls back to the course page.
    const hrefAttr = linkable && ev.code
      ? ` href="${ev.no ? escapeHtml(sessionHref(ev, dateIso)) : `course.html?code=${encodeURIComponent(ev.code)}`}"`
      : '';

    return `<${tag} class="event-card${now ? ' now' : ''}${isOtherGroup ? ' other-group' : ''}" style="--course-color:${color}"${hrefAttr}>
      ${dateHeadingHtml}
      <span class="time">${timeText}</span>${nowTagHtml}${ev.code ? `<span class="course-tag"><span class="swatch"></span>${escapeHtml(ev.code)}${codeName ? ' · ' + escapeHtml(codeName) : ''}</span>` : ''}
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

  window.PCLL = Object.assign(window.PCLL || {}, {
    ICONS, COURSE_COLORS, DEFAULT_COLOR, ELECTIVE_CODES, ELECTIVE_NAMES,
    todayISO, pickCurrentWeekIndex, fmtShort, fmtLong, fmtTime, escapeHtml, field, isHappeningNow, isMyGroupSession,
    eventCardHtml, effectiveTheme, setTheme, initTheme, fetchTimetable, loadTimetable,
    loadMyElectives, saveMyElectives, eventIsFilteredOut, initElectiveSettings, initDialog,
    loadCheckedIds, saveCheckedIds, hwChecklistKey, sgPrepChecklistKey,
    checklistHtml, wireChecklist, buildDeadlinesIndex, isDeadlineDone,
    deadlineChipsHtml, daysUntil,
    sessionHref, quizHref, findSessionInTimetable, preRecordedSessionKey, sessionKeyFor, sessionPartLetter,
  });
})();
