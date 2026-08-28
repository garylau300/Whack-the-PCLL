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

  function listSection(heading, items) {
    if (!items || !items.length) return '';
    return `<h3>${escapeHtml(heading)}</h3><ul>${items.map((i) => `<li>${escapeHtml(i)}</li>`).join('')}</ul>`;
  }

  function referenceHtml(ref) {
    if (!ref) return '';
    let body = `<h4>${escapeHtml(ref.title)}</h4>`;
    if (ref.external) {
      body += `<p class="muted">${escapeHtml(ref.note || '')}</p>`;
    } else if (ref.sections) {
      body += ref.sections.map((s) => `<div class="reference-section"><strong>${escapeHtml(s.heading)}</strong><ul>${s.items.map((i) => `<li>${escapeHtml(i)}</li>`).join('')}</ul></div>`).join('');
    } else {
      if (ref.body) body += `<p>${escapeHtml(ref.body)}</p>`;
      if (ref.bullets) body += `<ul>${ref.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join('')}</ul>`;
      if (ref.statutes) body += statuteBoxHtml(ref.statutes);
      if (ref.diagrams) body += ref.diagrams.map((d) => processDiagramHtml(d)).join('');
      if (ref.legalIssues) body += legalIssuesHtml(ref.legalIssues);
      if (ref.warnings) body += warningBoxHtml(ref.warnings);
      if (ref.checkboxes) body += `<ul>${ref.checkboxes.map((c) => `<li>${escapeHtml(c)}</li>`).join('')}</ul>`;
      if (ref.fields) body += `<p class="muted">Fields: ${ref.fields.map(escapeHtml).join(', ')}</p>`;
    }
    return `<div class="reference-block">${body}</div>`;
  }

  function resolveDeadlineFromDetails(details, deadlineId) {
    return deadlineId && details && (details.deadlines || []).find((d) => d.id === deadlineId);
  }

  // Renders a numbered step-by-step flow (e.g. a 5-stage process model) as a
  // small horizontal diagram — wraps to a vertical stack on narrow screens
  // via CSS flex-wrap, no chart library needed.
  function processDiagramHtml(diagram) {
    if (!diagram || !diagram.steps || !diagram.steps.length) return '';
    const title = diagram.title ? `<p class="process-diagram-title">${escapeHtml(diagram.title)}</p>` : '';
    const steps = diagram.steps.map((s, i) => `
      <div class="process-step">
        <div class="process-step-badge">${i + 1}</div>
        <div class="process-step-label">${escapeHtml(s.label)}</div>
        ${s.detail ? `<div class="process-step-detail">${escapeHtml(s.detail)}</div>` : ''}
      </div>${i < diagram.steps.length - 1 ? '<div class="process-arrow" aria-hidden="true">&#8594;</div>' : ''}`).join('');
    return `${title}<div class="process-diagram">${steps}</div>`;
  }

  // A callout for compliance-critical facts (statutory deadlines, offences,
  // consequences of non-compliance) — deliberately distinct from a plain
  // bullet so the reader's eye catches it while skimming.
  function warningBoxHtml(items) {
    if (!items || !items.length) return '';
    return `<div class="law-callout law-callout--warning">
      <div class="law-callout-head"><span aria-hidden="true">&#9888;</span> Important</div>
      <ul>${items.map((i) => `<li>${escapeHtml(i)}</li>`).join('')}</ul>
    </div>`;
  }

  // A quoted-provision box — for a statute section or case-law principle
  // quoted (approximately) verbatim, with its citation. `cite` names the
  // source (e.g. "s4 Partnership Ordinance (Cap. 38)" or "Lord Hoffmann").
  function statuteBoxHtml(items) {
    if (!items || !items.length) return '';
    return items.map((s) => `<blockquote class="law-callout law-callout--quote">
      <p>${escapeHtml(s.text)}</p>
      ${s.cite ? `<cite>&mdash; ${escapeHtml(s.cite)}</cite>` : ''}
    </blockquote>`).join('');
  }

  // One `fullNotes`/legal-issue-note entry can mix any of these structured
  // shapes alongside (or instead of) a plain `body` paragraph — lets
  // courseDetails.js pick whichever shape (bullets/table/diagram/Q&A/quoted
  // provision/warning) actually fits that note's content instead of forcing
  // everything into prose.
  function fullNoteBodyHtml(n) {
    let html = '';
    if (n.body) html += `<p>${escapeHtml(n.body)}</p>`;
    if (n.bullets) html += `<ul>${n.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join('')}</ul>`;
    if (n.bulletGroups) {
      html += n.bulletGroups.map((g) => `<h4>${escapeHtml(g.heading)}</h4><ul>${g.items.map((i) => `<li>${escapeHtml(i)}</li>`).join('')}</ul>`).join('');
    }
    if (n.statutes) html += statuteBoxHtml(n.statutes);
    if (n.table) {
      html += `<div class="table-scroll"><table class="session-table note-table"><thead><tr>${n.table.headers.map((h) => `<th>${escapeHtml(h)}</th>`).join('')}</tr></thead><tbody>${n.table.rows.map((r) => `<tr>${r.map((c) => `<td>${escapeHtml(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    }
    if (n.diagram) html += processDiagramHtml(n.diagram);
    if (n.qa) html += `<dl class="qa-list">${n.qa.map((p) => `<dt>${escapeHtml(p.q)}</dt><dd>${escapeHtml(p.a)}</dd>`).join('')}</dl>`;
    if (n.warnings) html += warningBoxHtml(n.warnings);
    return html;
  }

  // Shared by both the accordion (legalIssueHtml, used for reference-
  // material appendices) and the mindmap popup body (legalIssuesMindmapHtml,
  // used for a session's own top-level legal issues) — one issue's notes,
  // rendered directly (no further nested collapsing) so all of an issue's
  // content shows at once once you're looking at it.
  function legalIssueNotesHtml(issue) {
    return (issue.notes || []).map((n) => `<div class="legal-issue-note">
      <h4>${escapeHtml(n.heading)}</h4>
      ${fullNoteBodyHtml(n)}
    </div>`).join('');
  }

  // Groups fullNotes-style entries under a numbered legal issue (e.g.
  // "1. Types of Business Vehicles") — one top-level collapsible per issue.
  // Used for reference-material appendices (course.html's "Reference
  // Materials" details, e.g. Grade Descriptors); a session's own top-level
  // legal issues use the mindmap below instead.
  function legalIssueHtml(issue) {
    return `<details class="detail-content legal-issue"><summary>${escapeHtml(issue.number)}. ${escapeHtml(issue.heading)}</summary>${legalIssueNotesHtml(issue)}</details>`;
  }

  function legalIssuesHtml(issues) {
    if (!issues || !issues.length) return '';
    return issues.map(legalIssueHtml).join('');
  }

  // Positions two concentric rings of `.mindmap-node` buttons around the
  // hub, sized to the container's actual pixel dimensions (not percentages
  // — that would distort the spoke angles whenever the container isn't
  // square): issue nodes split the circle's 360° evenly (n issues,
  // 360/n each), so the issue ring itself is collision-free regardless of
  // which issues happen to be neighbours. The outer note ring's radius is
  // then solved from the busiest issue's note count (see below) rather
  // than fixed, since a note-heavy issue still only gets its own equal
  // share of the circle to spread its notes across and needs to push them
  // further out to keep them from overlapping within that fixed sector.
  // Below the 641px breakpoint the CSS switches `.mindmap` to a plain
  // nested vertical stack (see styles.css), so positioning is skipped
  // there — the nodes just flow normally and the spoke lines are cleared.
  function layoutMindmap(mapEl) {
    const svg = mapEl.querySelector('.mindmap-lines');
    const issueNodes = [...mapEl.querySelectorAll('.mindmap-node--issue')];
    const noteNodes = [...mapEl.querySelectorAll('.mindmap-node--note')];
    const isDesktop = window.matchMedia('(min-width: 641px)').matches;
    if (!isDesktop || !issueNodes.length) {
      [...issueNodes, ...noteNodes].forEach((el) => { el.style.left = ''; el.style.top = ''; });
      svg.innerHTML = '';
      return;
    }
    const w = mapEl.clientWidth, h = mapEl.clientHeight;
    if (!w || !h) return; // a hidden ancestor (e.g. a collapsed <details>) — nothing to measure yet
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    const cx = w / 2, cy = h / 2;
    const minDim = Math.min(w, h);
    const n = issueNodes.length;
    const sector = (Math.PI * 2) / n;
    const childrenOf = issueNodes.map((_, i) => noteNodes.filter((el) => Number(el.dataset.issueIdx) === i));
    const maxChildren = Math.max(1, ...childrenOf.map((c) => c.length));
    const r1 = minDim * 0.27;
    // Solve the note ring's radius from the busiest issue's note count:
    // fitting maxChildren notes within one (equal, fixed-width) sector
    // without overlap means pushing them out until the arc distance
    // between adjacent notes clears their width — a denser session
    // (more notes on its busiest issue) needs, and gets, a larger ring.
    const spreadFrac = 0.7;
    const spread = sector * spreadFrac;
    const gapAngle = maxChildren > 1 ? spread / (maxChildren - 1) : spread;
    const minGapPx = 118;
    // Clamped below the distance to the nearest edge (less a note node's
    // rough half-height plus margin) so a note whose angle points nearly
    // straight up/down/sideways can't be pushed close enough to clip
    // against the container's own overflow:hidden edge.
    const edgeLimit = Math.min(cx, cy) - 60;
    const r2 = Math.min(minDim * 0.47, edgeLimit, Math.max(minDim * 0.4, minGapPx / gapAngle));
    let lines = '';
    issueNodes.forEach((issueNode, i) => {
      const angle = sector * i - Math.PI / 2;
      const x1 = cx + r1 * Math.cos(angle);
      const y1 = cy + r1 * Math.sin(angle);
      issueNode.style.left = `${x1}px`;
      issueNode.style.top = `${y1}px`;
      lines += `<line x1="${cx}" y1="${cy}" x2="${x1.toFixed(1)}" y2="${y1.toFixed(1)}" class="mindmap-line" />`;

      const children = childrenOf[i];
      children.forEach((noteNode, j) => {
        const childAngle = children.length === 1 ? angle : angle - spread / 2 + (spread * j) / (children.length - 1);
        const x2 = cx + r2 * Math.cos(childAngle);
        const y2 = cy + r2 * Math.sin(childAngle);
        noteNode.style.left = `${x2}px`;
        noteNode.style.top = `${y2}px`;
        lines += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" class="mindmap-line mindmap-line--child" />`;
      });
    });
    svg.innerHTML = lines;
  }

  // A session's numbered legal issues, rendered as a two-level hub-and-
  // spoke mindmap instead of a stack of expandable summaries: a central
  // hub branches to one node per issue, and each issue node branches again
  // to one node per note within it. Clicking (or Enter/Space-ing) an issue
  // node opens that issue's full write-up (every note concatenated);
  // clicking one of its note nodes opens just that note, in the same
  // popup dialog. Every node's popup content is pre-rendered into an inert
  // <template> (cloned into the shared popup body on open) so wiring stays
  // purely DOM-based, same spirit as wireClozeSection/wireFlashcardSection.
  function legalIssuesMindmapHtml(issues) {
    if (!issues || !issues.length) return '';
    let nodesHtml = '';
    let templatesHtml = '';
    issues.forEach((issue, i) => {
      const issueTitle = `${issue.number}. ${issue.heading}`;
      nodesHtml += `<button type="button" class="mindmap-node mindmap-node--issue" data-level="1" data-idx="${i}" data-title="${escapeHtml(issueTitle)}" aria-haspopup="dialog">
        <span class="mindmap-node-num" aria-hidden="true">${escapeHtml(issue.number)}</span>
        <span class="mindmap-node-label">${escapeHtml(issue.heading)}</span>
      </button>`;
      templatesHtml += `<template data-mindmap-body="issue-${i}">${legalIssueNotesHtml(issue)}</template>`;
      (issue.notes || []).forEach((note, j) => {
        nodesHtml += `<button type="button" class="mindmap-node mindmap-node--note" data-level="2" data-issue-idx="${i}" data-note-idx="${j}" data-title="${escapeHtml(issueTitle)} — ${escapeHtml(note.heading)}" aria-haspopup="dialog">
          <span class="mindmap-node-label">${escapeHtml(note.heading)}</span>
        </button>`;
        templatesHtml += `<template data-mindmap-body="note-${i}-${j}"><h4>${escapeHtml(note.heading)}</h4>${fullNoteBodyHtml(note)}</template>`;
      });
    });
    return `<div class="mindmap-wrap">
      <div class="mindmap" data-mindmap>
        <svg class="mindmap-lines" aria-hidden="true"></svg>
        <div class="mindmap-hub"><span>Legal Issues</span></div>
        ${nodesHtml}
      </div>
      <p class="mindmap-hint muted small">Tap a topic, then a sub-topic, to open it.</p>
      <div class="mindmap-modal-panel settings-panel" data-mindmap-modal>
        <div class="settings-card mindmap-modal-card">
          <div class="settings-head">
            <h3 id="mindmapModalTitle"></h3>
            <button type="button" class="icon-btn mindmap-modal-close" aria-label="Close"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button>
          </div>
          <div class="mindmap-modal-body detail-content"></div>
        </div>
      </div>
      <div hidden>${templatesHtml}</div>
    </div>`;
  }

  // Wires one legalIssuesMindmapHtml() block: lays out both rings of
  // spokes, and opens the shared popup dialog with the clicked node's
  // pre-rendered template content on click — an issue node's own template
  // (all its notes) or one of its note nodes' templates (just that note),
  // depending on which level was clicked.
  //
  // Layout is driven by a ResizeObserver on the mindmap element rather
  // than a plain one-off call plus a window `resize` listener: this
  // function runs from wireSessionDetail, which session.js calls while
  // `#sessionSection` is still `hidden` (it's only unhidden a few lines
  // later, once rendering finishes) — so the container measures 0x0 at
  // that exact moment and a one-off layoutMindmap() call would silently
  // no-op forever, with nothing ever prompting a second attempt. A
  // ResizeObserver instead fires as soon as the element's box actually
  // has a size (i.e. once the section is unhidden) and again on every
  // later resize, so it both fixes that ordering race and replaces the
  // old resize listener in one mechanism.
  function wireLegalIssuesMindmap(container) {
    const wrap = container.querySelector('.mindmap-wrap');
    if (!wrap) return;
    const mapEl = wrap.querySelector('[data-mindmap]');
    const modalPanel = wrap.querySelector('[data-mindmap-modal]');
    const modalCard = modalPanel.querySelector('.mindmap-modal-card');
    const modalBody = wrap.querySelector('.mindmap-modal-body');
    const modalTitle = wrap.querySelector('#mindmapModalTitle');
    const closeBtn = wrap.querySelector('.mindmap-modal-close');
    const modal = initDialog({ panel: modalPanel, dialog: modalCard, closeBtn, labelledBy: 'mindmapModalTitle' });

    if (window.ResizeObserver) {
      new ResizeObserver(() => layoutMindmap(mapEl)).observe(mapEl);
    } else {
      layoutMindmap(mapEl);
      window.addEventListener('resize', () => layoutMindmap(mapEl));
    }

    mapEl.addEventListener('click', (e) => {
      const node = e.target.closest('.mindmap-node');
      if (!node) return;
      const key = node.dataset.level === '2' ? `note-${node.dataset.issueIdx}-${node.dataset.noteIdx}` : `issue-${node.dataset.idx}`;
      const tpl = wrap.querySelector(`template[data-mindmap-body="${key}"]`);
      modalTitle.textContent = node.dataset.title || '';
      modalBody.innerHTML = '';
      if (tpl) modalBody.appendChild(tpl.content.cloneNode(true));
      modal.open(node);
    });
  }

  // Parses `{{answer}}` markers out of a cloze item's template text into a
  // click-to-reveal blank — a small memory-testing aid for a session's key
  // legal principles, sitting alongside (not replacing) the full prose.
  function clozeItemHtml(item) {
    const parts = item.text.split(/(\{\{.+?\}\})/g);
    return `<li class="cloze-item">${parts.map((part) => {
      const m = /^\{\{(.+)\}\}$/.exec(part);
      if (!m) return escapeHtml(part);
      return `<button type="button" class="cloze-blank"><span class="cloze-hidden" aria-hidden="true">?</span><span class="cloze-answer">${escapeHtml(m[1])}</span></button>`;
    }).join('')}</li>`;
  }

  // `groups` is [{ topic, items: [{text}, ...] }, ...] — each topic renders
  // as its own labeled sub-section so a session covering several distinct
  // legal issues doesn't dump every cloze item into one undifferentiated
  // list. A flat array of items (the old shape) is also accepted, and
  // treated as a single unlabeled group, so nothing else has to change in
  // lockstep with this.
  function asQuizGroups(groups) {
    if (!groups || !groups.length) return [];
    return groups[0] && groups[0].items ? groups : [{ topic: '', items: groups }];
  }

  function clozeSectionHtml(groups) {
    const list = asQuizGroups(groups);
    if (!list.length) return '';
    return `<div class="cloze-section">
      <div class="cloze-head"><h3>Key Principles — Test Yourself</h3><button type="button" class="link-btn cloze-toggle-all">Reveal all</button></div>
      ${list.map((g) => `<div class="quiz-topic-group">
        ${g.topic ? `<h4 class="quiz-topic-heading">${escapeHtml(g.topic)}</h4>` : ''}
        <ul class="cloze-list">${g.items.map(clozeItemHtml).join('')}</ul>
      </div>`).join('')}
    </div>`;
  }

  // Delegated click handling for a rendered clozeSectionHtml() block — each
  // blank toggles independently; the "Reveal all" button flips every blank
  // in the section together and relabels itself based on current state.
  function wireClozeSection(container) {
    const section = container.querySelector('.cloze-section');
    if (!section) return;
    section.addEventListener('click', (e) => {
      const toggleAll = e.target.closest('.cloze-toggle-all');
      if (toggleAll) {
        const anyHidden = !!section.querySelector('.cloze-blank:not(.revealed)');
        section.querySelectorAll('.cloze-blank').forEach((b) => b.classList.toggle('revealed', anyHidden));
        toggleAll.textContent = anyHidden ? 'Hide all' : 'Reveal all';
        return;
      }
      const blank = e.target.closest('.cloze-blank');
      if (blank) blank.classList.toggle('revealed');
    });
  }

  // A single click-to-flip flashcard: `card` is { front, back }.
  function flashcardHtml(card, i) {
    return `<button type="button" class="flashcard" data-idx="${i}" aria-label="Flashcard — click to flip">
      <span class="flashcard-inner">
        <span class="flashcard-face flashcard-front">${escapeHtml(card.front)}</span>
        <span class="flashcard-face flashcard-back">${escapeHtml(card.back)}</span>
      </span>
    </button>`;
  }

  // Same topic-grouped shape as clozeSectionHtml — see asQuizGroups.
  function flashcardSectionHtml(groups) {
    const list = asQuizGroups(groups);
    if (!list.length) return '';
    return `<div class="flashcard-section">
      <div class="cloze-head"><h3>Flashcards</h3><button type="button" class="link-btn flashcard-toggle-all">Flip all</button></div>
      ${list.map((g, gi) => `<div class="quiz-topic-group">
        ${g.topic ? `<h4 class="quiz-topic-heading">${escapeHtml(g.topic)}</h4>` : ''}
        <div class="flashcard-grid">${g.items.map((c, i) => flashcardHtml(c, `${gi}-${i}`)).join('')}</div>
      </div>`).join('')}
    </div>`;
  }

  // Delegated click handling for a rendered flashcardSectionHtml() block —
  // same "each toggles independently, one button flips them all together"
  // pattern as wireClozeSection.
  function wireFlashcardSection(container) {
    const section = container.querySelector('.flashcard-section');
    if (!section) return;
    section.addEventListener('click', (e) => {
      const toggleAll = e.target.closest('.flashcard-toggle-all');
      if (toggleAll) {
        const anyUnflipped = !!section.querySelector('.flashcard:not(.flipped)');
        section.querySelectorAll('.flashcard').forEach((c) => c.classList.toggle('flipped', anyUnflipped));
        toggleAll.textContent = anyUnflipped ? 'Unflip all' : 'Flip all';
        return;
      }
      const card = e.target.closest('.flashcard');
      if (card) card.classList.toggle('flipped');
    });
  }

  // Full write-up for one session (lecture outline, prep checklist, fact
  // pattern, etc.) sourced from courseDetails.js's `sessions[key]` entries —
  // shared so the course page's session table (which links out to
  // session.html via sessionHref) and session.html itself render identically.
  function sessionDetailHtml(sessionDetail, ev, code, details) {
    const partLetter = sessionPartLetter(ev.no);
    const matchedPart = sessionDetail.parts && sessionDetail.parts.find((p) => p.partLetter === partLetter);
    const partsToShow = matchedPart ? [matchedPart] : (sessionDetail.parts || []);

    let html = '<div class="session-meta">' + [
      sessionDetail.date ? field('Date', sessionDetail.date) : '',
      sessionDetail.time ? field('Time', sessionDetail.time) : '',
      sessionDetail.mode ? field('Format', sessionDetail.mode) : '',
      sessionDetail.skills ? field('Skills', sessionDetail.skills) : '',
      sessionDetail.authors && sessionDetail.authors.length ? field('Author(s)', sessionDetail.authors.join(', ')) : '',
    ].join('') + '</div>';

    for (const p of partsToShow) {
      if (sessionDetail.parts) html += `<h3>${escapeHtml(p.title)}</h3>`;
      if (p.instructor) {
        html += `<p class="instructor-line">${escapeHtml(p.instructor.name)} &middot; <a href="mailto:${escapeHtml(p.instructor.email)}">${escapeHtml(p.instructor.email)}</a> &middot; ${escapeHtml(p.instructor.hours)}</p>`;
      }
      html += listSection('Learning Objectives', p.objectives);
    }
    if (!sessionDetail.parts && sessionDetail.objectives) html += listSection('Objectives', sessionDetail.objectives);

    if (sessionDetail.compulsory) html += `<p class="muted"><strong>Compulsory.</strong> ${escapeHtml(sessionDetail.weight || '')}</p>`;
    if (sessionDetail.swapProcedure) html += `<p class="muted">${escapeHtml(sessionDetail.swapProcedure)}</p>`;

    html += listSection('Topics Covered', sessionDetail.topicsCovered);

    if (sessionDetail.prepChecklist) {
      html += `<h3>Preparation Before Class</h3><div class="checklist" data-prep-checklist></div>`;
    } else if (sessionDetail.prep) {
      html += listSection('Readings', sessionDetail.prep.readings);
      html += listSection('Pre-lecture Activities', (sessionDetail.prep.activities || []).map((a) => `${a.title} — ${a.instructions}`));
    }

    if (sessionDetail.factPattern) {
      const fp = sessionDetail.factPattern;
      html += `<h3>Fact Pattern</h3><div class="session-meta">${[
        fp.client ? field('Client', fp.client) : '',
        fp.role ? field('Your Role', fp.role) : '',
        fp.instructingPartner ? field('Instructing Partner', fp.instructingPartner) : '',
        fp.documents ? field('Documents', fp.documents.join(', ')) : '',
      ].join('')}</div>${fp.note ? `<p class="muted">${escapeHtml(fp.note)}</p>` : ''}`;
    }

    if (sessionDetail.activities) {
      html += `<h3>Activities</h3><ul class="activity-list">${sessionDetail.activities.map((a) => {
        const deadline = resolveDeadlineFromDetails(details, a.deadlineId);
        return `<li>${escapeHtml(a.title)}${deadline ? deadlineChipsHtml([deadline]) : ''}</li>`;
      }).join('')}</ul>`;
    }

    if (sessionDetail.exercises) {
      html += sessionDetail.exercises.map((ex) => `
        <details class="detail-content"><summary>${escapeHtml(ex.title)}</summary>
          ${ex.factPattern ? `<p>${escapeHtml(ex.factPattern)}</p>` : ''}
          ${ex.questions ? `<ul>${ex.questions.map((q) => `<li>${escapeHtml(q)}</li>`).join('')}</ul>` : ''}
          ${ex.questionGroups ? ex.questionGroups.map((g, i) => `<h4>${i + 1}. ${escapeHtml(g.heading)}</h4><ul>${g.questions.map((q) => `<li>${escapeHtml(q)}</li>`).join('')}</ul>`).join('') : ''}
        </details>`).join('');
    }

    html += listSection('Key Takeaways', sessionDetail.keyTakeaways);
    html += listSection('During / After', sessionDetail.duringAfter);

    // legalIssues (numbered, grouped-by-issue) is the current format,
    // rendered as an interactive mindmap (see legalIssuesMindmapHtml) rather
    // than an expandable list; fullNotes (a flat list) is kept as a
    // fallback for any session not yet migrated to the richer shape.
    if (sessionDetail.legalIssues) {
      html += legalIssuesMindmapHtml(sessionDetail.legalIssues);
    } else if (sessionDetail.fullNotes) {
      html += `<details class="detail-content"><summary>Full Lecture Notes</summary>${sessionDetail.fullNotes.map((n) => `
        <details><summary>${escapeHtml(n.heading)}</summary>${fullNoteBodyHtml(n)}</details>`).join('')}</details>`;
    }

    if (sessionDetail.referenceIds && sessionDetail.referenceIds.length) {
      html += `<details class="detail-content"><summary>Reference Materials</summary>${sessionDetail.referenceIds.map((id) => referenceHtml(details.references[id])).join('')}</details>`;
    }

    return html;
  }

  function sessionFallbackHtml(ev, dateIso, weekNumber, dayName) {
    const timeText = ev.start ? `${fmtTime(ev.start)}${ev.end ? '–' + fmtTime(ev.end) : ''}` : (ev.timeLabel || 'TBC');
    const dateLabel = dateIso ? fmtShort(dateIso) : (dayName || '');
    const fields = [field('Date', `${dateLabel} (Wk ${weekNumber})`), field('Time', timeText)];
    if (ev.venue) fields.push(field('Venue', ev.venue));
    if (ev.instructor) fields.push(field('Who', ev.instructor));
    if (ev.topic) fields.push(field('Topic', ev.topic));
    return `<div class="session-meta">${fields.join('')}</div><p class="muted">No detailed materials uploaded for this session yet.</p>`;
  }

  function renderPrepChecklist(container, sessionDetail, prepKey) {
    if (!container) return;
    container.innerHTML = checklistHtml(sessionDetail.prepChecklist, loadCheckedIds(prepKey));
  }

  // After bodyEl.innerHTML has been set from sessionDetailHtml(), wires up
  // the prep checklist it may contain (the [data-prep-checklist]
  // placeholder) — shared so course.js and session.js don't each duplicate
  // this glue. (Cloze/flashcards live on quiz.html now, wired there instead.)
  function wireSessionDetail(bodyEl, sessionDetail, code, ev) {
    if (sessionDetail && sessionDetail.legalIssues) wireLegalIssuesMindmap(bodyEl);
    if (!sessionDetail || !sessionDetail.prepChecklist) return;
    const prepKey = sgPrepChecklistKey(code, sessionKeyFor(ev.no));
    const container = bodyEl.querySelector('[data-prep-checklist]');
    const render = () => renderPrepChecklist(container, sessionDetail, prepKey);
    render();
    wireChecklist(container, prepKey, render);
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

  window.PCLL = {
    ICONS, COURSE_COLORS, DEFAULT_COLOR, ELECTIVE_CODES, ELECTIVE_NAMES,
    todayISO, pickCurrentWeekIndex, fmtShort, fmtLong, fmtTime, escapeHtml, field, isHappeningNow, isMyGroupSession,
    eventCardHtml, effectiveTheme, setTheme, initTheme, fetchTimetable, loadTimetable,
    loadMyElectives, saveMyElectives, eventIsFilteredOut, initElectiveSettings, initDialog,
    loadCheckedIds, saveCheckedIds, hwChecklistKey, sgPrepChecklistKey,
    checklistHtml, wireChecklist, buildDeadlinesIndex, isDeadlineDone,
    deadlineChipsHtml, daysUntil,
    sessionHref, quizHref, findSessionInTimetable, preRecordedSessionKey, sessionKeyFor, sessionPartLetter, sessionDetailHtml, sessionFallbackHtml, wireSessionDetail,
    clozeSectionHtml, wireClozeSection, flashcardSectionHtml, wireFlashcardSection,
  };
})();
