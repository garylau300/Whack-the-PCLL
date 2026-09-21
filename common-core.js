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
// the stylesheet) so there's no flash of the wrong theme or the wrong text
// size. Light and normal are the defaults -- the other values apply only
// once the visitor has explicitly chosen them. Text size has to be settled
// this early for the same reason as the theme, and more urgently: it
// changes the height of everything, so applying it after first paint
// reflows the whole page under the reader.
(function () {
  try {
    const saved = localStorage.getItem('pcll.theme');
    document.documentElement.dataset.theme = saved === 'dark' ? 'dark' : 'light';
  } catch {
    document.documentElement.dataset.theme = 'light';
  }
  try {
    const size = localStorage.getItem('pcll.fontScale');
    document.documentElement.dataset.fontScale = (size === 'large' || size === 'larger') ? size : 'normal';
  } catch {
    document.documentElement.dataset.fontScale = 'normal';
  }
})();

(() => {
  'use strict';

  const COURSE_COLORS = {
    PCLL8010: '#2b6cb0', // Civil Litigation
    PCLL8020: '#b7791f', // Corp & Com Transactions
    PCLL8030: '#2f855a', // Property Transactions
    PCLL8040: '#6b46c1', // Professional Practice & Management
    PCLL8050: '#c53030', // Criminal Litigation
    PCLL8051: '#dd6b20', // Criminal Advocacy
    PCLL8014: '#3182ce', // Civil Advocacy
    // Electives -- previously all fell back to DEFAULT_COLOR (flat gray),
    // making every elective visually indistinguishable from every other and
    // from a courseless calendar entry, on both the dashboard course list
    // and the timetable. Each gets its own distinct hue here instead, kept
    // out of the core courses' hues above.
    PCLL8100: '#257e68', // Trial Advocacy
    PCLL8101: '#23788b', // Commercial Dispute Resolution
    PCLL8102: '#943894', // Personal Injury Litigation
    PCLL8103: '#a13679', // Matrimonial Practice and Procedure
    PCLL8105: '#4343b1', // Drafting Commercial Agreements
    PCLL8107: '#224577', // Listed Companies
    PCLL8108: '#962c46', // China Practice
    PCLL8109: '#743d8f', // Wills, Trusts and Estate Planning
    PCLL8110: '#5c7231', // Use of Chinese in Legal Practice
    PCLL8111: '#246047', // Financial Regulations and Practice
    PCLL8112: '#914930', // Employment Law and Practice
    PCLL8113: '#776222', // Property Practice
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

  // Text size is a three-step cycle rather than a two-state toggle: on a
  // page of dense flowchart rows the useful range runs further than one
  // notch, and three is still short enough to click back round to normal.
  // The scales themselves live in styles.css as percentages on :root, so
  // they multiply the reader's OWN browser font size rather than replacing
  // it -- someone who has already set 20px in their browser keeps that as
  // their "normal". Every font-size in the stylesheet is in rem, which is
  // what makes one declaration scale the whole type system.
  const FONT_KEY = 'pcll.fontScale';
  const FONT_STEPS = ['normal', 'large', 'larger'];
  const FONT_LABELS = { normal: 'Normal', large: 'Large', larger: 'Larger' };

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
    // Three "Aa" marks, one per text-size step. The glyph itself grows with
    // the step, so the control shows the setting it is currently on rather
    // than needing a separate state indicator -- the same trick the theme
    // button uses in swapping sun for moon.
    textNormal: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><text x="12" y="17" text-anchor="middle" font-size="13" font-weight="700" font-family="Inter, system-ui, sans-serif">Aa</text></svg>',
    textLarge: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><text x="12" y="18" text-anchor="middle" font-size="16" font-weight="700" font-family="Inter, system-ui, sans-serif">Aa</text></svg>',
    textLarger: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><text x="12" y="19" text-anchor="middle" font-size="19" font-weight="700" font-family="Inter, system-ui, sans-serif">Aa</text></svg>',
  };

  // The site's mascot -- used at "nothing to worry about" empty states
  // (relaxed) and "you finished everything" checklist-complete moments
  // (celebrate). Colors come from --raccoon-* custom properties (styles.css)
  // rather than currentColor, since it's a multi-part illustration, not a
  // single-tone icon -- same reasoning as course colors having their own
  // custom property instead of inheriting text color.
  const RACCOON = {
    relaxed: '<svg class="raccoon-icon raccoon-relaxed" aria-hidden="true" viewBox="0 0 100 100"><path d="M62 80c11 1 18-6 16-15-1-6 2-10 7-12" fill="none" stroke="var(--raccoon-fur)" stroke-width="13" stroke-linecap="round"/><path d="M62 80c11 1 18-6 16-15-1-6 2-10 7-12" fill="none" stroke="var(--raccoon-mask)" stroke-width="13" stroke-linecap="butt" stroke-dasharray="6 8" stroke-dashoffset="1"/><ellipse cx="43" cy="80" rx="22" ry="15" fill="var(--raccoon-fur)"/><ellipse cx="32" cy="93" rx="8" ry="5" fill="var(--raccoon-fur-dark)"/><ellipse cx="54" cy="93" rx="8" ry="5" fill="var(--raccoon-fur-dark)"/><ellipse cx="30" cy="72" rx="8" ry="6.5" fill="var(--raccoon-fur)"/><ellipse cx="56" cy="72" rx="8" ry="6.5" fill="var(--raccoon-fur)"/><path d="M26 68q1.5 -3 3 0M31 67q1.5 -3.2 3 0M36 68q1.5 -3 3 0" stroke="var(--raccoon-fur-dark)" stroke-width="1.3" fill="none" stroke-linecap="round"/><path d="M52 68q1.5 -3 3 0M57 67q1.5 -3.2 3 0M62 68q1.5 -3 3 0" stroke="var(--raccoon-fur-dark)" stroke-width="1.3" fill="none" stroke-linecap="round"/><circle cx="43" cy="46" r="32" fill="var(--raccoon-fur)"/><circle cx="17" cy="24" r="10" fill="var(--raccoon-fur)"/><circle cx="69" cy="24" r="10" fill="var(--raccoon-fur)"/><circle cx="17" cy="25" r="5.5" fill="var(--raccoon-mask)"/><circle cx="69" cy="25" r="5.5" fill="var(--raccoon-mask)"/><path d="M15 40c-1-10 8-18 16-17 7 1 11 6 12 11 1-5 5-10 12-11 8-1 17 7 16 17 -1 8-9 13-17 12-6-1-9-5-11-9-2 4-5 8-11 9-8 1-16-4-17-12Z" fill="var(--raccoon-mask)"/><ellipse cx="18" cy="54" rx="5" ry="3.5" fill="var(--raccoon-blush)" opacity="0.7"/><ellipse cx="68" cy="54" rx="5" ry="3.5" fill="var(--raccoon-blush)" opacity="0.7"/><ellipse cx="43" cy="55" rx="14" ry="10" fill="var(--raccoon-muzzle)"/><path d="M27 39q5 5 10 0" fill="none" stroke="var(--raccoon-muzzle)" stroke-width="3" stroke-linecap="round"/><path d="M49 39q5 5 10 0" fill="none" stroke="var(--raccoon-muzzle)" stroke-width="3" stroke-linecap="round"/><ellipse cx="43" cy="56" rx="3.4" ry="2.6" fill="var(--raccoon-mask)"/><path d="M43 58v3" stroke="var(--raccoon-mask)" stroke-width="1.6" stroke-linecap="round"/><text x="80" y="18" font-size="14" font-weight="800" fill="var(--raccoon-fur-dark)" font-family="inherit">z</text><text x="89" y="8" font-size="10" font-weight="800" fill="var(--raccoon-fur-dark)" font-family="inherit">z</text></svg>',
    celebrate: '<svg class="raccoon-icon raccoon-celebrate" aria-hidden="true" viewBox="0 0 100 100"><path d="M62 82c12 2 20-5 18-15-1-7 2-12 8-15" fill="none" stroke="var(--raccoon-fur)" stroke-width="13" stroke-linecap="round"/><path d="M62 82c12 2 20-5 18-15-1-7 2-12 8-15" fill="none" stroke="var(--raccoon-mask)" stroke-width="13" stroke-linecap="butt" stroke-dasharray="6 8" stroke-dashoffset="1"/><path d="M27 76C10 70 0 54 4 36" fill="none" stroke="var(--raccoon-fur)" stroke-width="10" stroke-linecap="round"/><path d="M57 76c17-6 27-22 23-40" fill="none" stroke="var(--raccoon-fur)" stroke-width="10" stroke-linecap="round"/><ellipse cx="5" cy="32" rx="8" ry="7" fill="var(--raccoon-fur)"/><ellipse cx="82" cy="34" rx="8" ry="7" fill="var(--raccoon-fur)"/><path d="M1 27q1.5 -3 3 0M6 26q1.5 -3.2 3 0M11 27q1.5 -3 3 0" stroke="var(--raccoon-fur-dark)" stroke-width="1.3" fill="none" stroke-linecap="round"/><path d="M78 29q1.5 -3 3 0M83 28q1.5 -3.2 3 0M88 29q1.5 -3 3 0" stroke="var(--raccoon-fur-dark)" stroke-width="1.3" fill="none" stroke-linecap="round"/><ellipse cx="42" cy="80" rx="21" ry="15" fill="var(--raccoon-fur)"/><ellipse cx="32" cy="93" rx="7.5" ry="5" fill="var(--raccoon-fur-dark)"/><ellipse cx="52" cy="93" rx="7.5" ry="5" fill="var(--raccoon-fur-dark)"/><circle cx="42" cy="45" r="31" fill="var(--raccoon-fur)"/><circle cx="18" cy="23" r="9.5" fill="var(--raccoon-fur)"/><circle cx="66" cy="23" r="9.5" fill="var(--raccoon-fur)"/><circle cx="18" cy="24" r="5.2" fill="var(--raccoon-mask)"/><circle cx="66" cy="24" r="5.2" fill="var(--raccoon-mask)"/><path d="M14 39c-1-10 8-17 16-16 7 1 10 6 11 10 1-4 4-9 11-10 8-1 17 6 16 16 -1 8-9 12-16 11-6-1-9-5-11-8-2 3-5 7-11 8-7 1-15-3-16-11Z" fill="var(--raccoon-mask)"/><ellipse cx="17" cy="52" rx="5" ry="3.5" fill="var(--raccoon-blush)" opacity="0.75"/><ellipse cx="67" cy="52" rx="5" ry="3.5" fill="var(--raccoon-blush)" opacity="0.75"/><ellipse cx="42" cy="54" rx="14" ry="10" fill="var(--raccoon-muzzle)"/><path d="M25 37q6 -7 12 0" fill="none" stroke="var(--raccoon-muzzle)" stroke-width="3.4" stroke-linecap="round"/><path d="M47 37q6 -7 12 0" fill="none" stroke="var(--raccoon-muzzle)" stroke-width="3.4" stroke-linecap="round"/><ellipse cx="42" cy="54" rx="3.4" ry="2.6" fill="var(--raccoon-mask)"/><path d="M34 58q8 8 16 0" fill="none" stroke="var(--raccoon-mask)" stroke-width="2.2" stroke-linecap="round"/><path d="M88 20l2 5 5 2-5 2-2 5-2-5-5-2 5-2Z" fill="var(--raccoon-fur-dark)" opacity="0.9"/><path d="M6 14l1.4 3.4 3.4 1.4-3.4 1.4L6 23.6l-1.4-3.4L1.2 18.8l3.4-1.4Z" fill="var(--raccoon-fur-dark)" opacity="0.8"/></svg>',
  };

  // A relaxed-raccoon empty state, e.g. "no sessions today" -- reused
  // wherever the timetable already shows an <div class="empty-day">-style
  // message, so a free day reads as "nothing to worry about" rather than
  // just a bare sentence.
  function emptyStateHtml(message) {
    return `<div class="empty-state">${RACCOON.relaxed}<p>${escapeHtml(message)}</p></div>`;
  }

  // A celebrating-raccoon banner for "you checked everything off" moments
  // (a course's homework list, a session's prep checklist) -- callers
  // decide when to show it (all items checked) since that depends on
  // storage keys/shapes RACCOON itself doesn't know about.
  function checklistCompleteHtml(message) {
    return `<div class="checklist-complete">${RACCOON.celebrate}<p>${escapeHtml(message)}</p></div>`;
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
    // Ticking a box is the moment there is finally something worth keeping,
    // which is why the persistent-storage request hangs off this and not off
    // page load. See requestPersistentStorage.
    requestPersistentStorage();
  }

  // ---------------------------------------------------------------------
  // Asking the browser not to evict what has been ticked.
  //
  // Everything this site remembers -- 2,652 flowchart checkboxes, the cloze
  // and read-aloud settings, the quiz mix -- is localStorage, which browsers
  // are free to clear under storage pressure. navigator.storage.persist()
  // asks for an exemption.
  //
  // WHEN it is called is the whole design, because the two engines behave
  // oppositely: Firefox shows the reader a permission prompt, while Chrome
  // never prompts and decides silently from its own engagement heuristics.
  // Calling it at page load would therefore throw a dialog at a first-time
  // visitor who has no data yet and no reason to say yes. So it is called
  // from saveCheckedIds -- the first tick is the first moment the answer
  // matters, and by then the reader has a reason to grant it.
  //
  // It does NOT fix Safari, whose seven-day cap on script-writable storage
  // is a separate mechanism from quota eviction and is not lifted by this.
  // The fix there is adding the site to the Home Screen, which is what the
  // web app manifest is for.
  // ---------------------------------------------------------------------
  const PERSIST_KEY = 'pcll.persistAsked';
  const PERSIST_RETRY_MS = 30 * 24 * 60 * 60 * 1000;
  let persistTriedThisPage = false;

  async function requestPersistentStorage() {
    if (persistTriedThisPage) return null;
    persistTriedThisPage = true;
    const store = typeof navigator !== 'undefined' && navigator.storage;
    if (!store || !store.persist || !store.persisted) return null;
    try {
      // Already granted: never ask again, and never prompt again.
      if (await store.persisted()) return true;
      // Chrome answers from heuristics that change as the site becomes more
      // "important" to the reader (bookmarked, installed, used often), so a
      // no today can be a yes later -- but Firefox prompts, so retrying must
      // be rare enough not to nag. Once a month is the compromise.
      const last = Number(localStorage.getItem(PERSIST_KEY)) || 0;
      if (last && Date.now() - last < PERSIST_RETRY_MS) return null;
      // Recorded BEFORE the await: a prompt the reader dismisses must not be
      // re-thrown at them on the very next tick.
      try { localStorage.setItem(PERSIST_KEY, String(Date.now())); } catch { /* no-op */ }
      return await store.persist();
    } catch {
      return null;
    }
  }

  // One canonical key-builder per checklist kind, so every page that reads
  // or writes a given checklist agrees on where it lives.
  function hwChecklistKey(code) { return `pcll.checklist.${code}`; }

  function sgPrepChecklistKey(code, sessionKey) { return `pcll.sgPrep.${code}.${sessionKey}`; }

  // One key per issue-type page, so ticking a point off in the notes is
  // remembered per issue rather than globally.
  function issueNotesKey(code, sessionKey, issueId) { return `pcll.notes.${code}.${sessionKey}.${issueId}`; }

  // Stable id for a note bullet. Derived from the bullet's own text (djb2 ->
  // base36) rather than its position, so inserting a bullet above an existing
  // one doesn't silently transfer its ticked state to a different point.
  // Editing a bullet's wording does reset it, which is the right outcome: a
  // rewritten point is a different point.
  function noteCheckId(text) {
    let h = 5381;
    for (let i = 0; i < text.length; i++) h = (((h << 5) + h) ^ text.charCodeAt(i)) >>> 0;
    return 'n' + h.toString(36);
  }

  // The short human-facing code for an issue type: `<PREFIX>-<sessionNum>.<NN>`,
  // e.g. "CIV-4.11" (session key "LG4" with the "LG" stripped). Derived from
  // the course's `codePrefix`, the session key and the issue's 1-based
  // position -- never authored, so it cannot drift out of step with the notes
  // or be typed inconsistently. `codePrefix` falls back to the numeric tail of
  // the course code so a course that hasn't declared one still produces
  // something unique.
  function coursePrefix(code, details) {
    if (details && details.codePrefix) return details.codePrefix;
    const m = /(\d{2})(\d)$/.exec(code || '');
    return m ? 'C' + m[2] : (code || '?');
  }

  function issueCode(code, details, sessionKey, index) {
    const num = String(sessionKey).replace(/^LG/, '');
    return `${coursePrefix(code, details)}-${num}.${String(index + 1).padStart(2, '0')}`;
  }

  // Every leaf checkbox id in an issue type's answering flowchart, in the
  // same ancestor-chain scheme flowchartHtml uses (step > point > sub-point).
  // A step with no points is itself a leaf; a point with sub-points is not.
  // Kept here rather than in the renderer so the index can count progress
  // without building any markup.
  function flowLeafIds(flowchart) {
    const out = [];
    for (const step of (flowchart && flowchart.steps) || []) {
      const points = step.points || [];
      if (!points.length) { out.push(noteCheckId(step.label)); continue; }
      for (const p of points) {
        const text = typeof p === 'string' ? p : p.text;
        const kids = (typeof p === 'string' ? null : p.points) || [];
        if (!kids.length) { out.push(noteCheckId([step.label, text].join('\u0000'))); continue; }
        for (const k of kids) out.push(noteCheckId([step.label, text, k].join('\u0000')));
      }
    }
    return out;
  }

  // How far through one issue type's flowchart the reader has ticked.
  // `total` is 0 for an issue with no flowchart, which callers render as
  // "no checklist" rather than as 0%.
  function issueProgress(code, sessionKey, issue) {
    const leaves = flowLeafIds(issue.answering && issue.answering.flowchart);
    if (!leaves.length) return { done: 0, total: 0 };
    const set = loadCheckedIds(issueNotesKey(code, sessionKey, issue.id));
    return { done: leaves.filter((id) => set.has(id)).length, total: leaves.length };
  }

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

  // The single "Overdue by Nd / Due today / Due in Nd" wording -- a
  // checklist item's compact meta text (course.js) and the dashboard's
  // Upcoming Deadlines list both render this, and shouldn't drift apart.
  function dueCountdownText(dateIso, done) {
    if (done) return 'Done';
    const days = daysUntil(dateIso);
    if (days < 0) return `Overdue by ${-days}d`;
    if (days === 0) return 'Due today';
    return `Due in ${days}d`;
  }

  function daysUntilUrgency(days) {
    if (days < 0) return 'overdue';
    if (days === 0) return 'today';
    if (days <= 3) return 'soon';
    if (days <= 7) return 'week';
    return 'later';
  }

  // A colored countdown chip for a prominent (not dense-checklist-row)
  // context -- currently just the dashboard's Upcoming Deadlines list.
  function countdownBadgeHtml(dateIso, done) {
    const urgency = done ? 'done' : daysUntilUrgency(daysUntil(dateIso));
    return `<span class="countdown-badge tag-chip countdown-badge--${urgency}">${escapeHtml(dueCountdownText(dateIso, done))}</span>`;
  }

  // A course's date-driven progress through its own scheduled sessions --
  // how many of its LG/SG calendar events fall on or before today, out of
  // the total found anywhere in the timetable. This is NOT an attendance
  // or completion metric (the app has no way to know who actually showed
  // up or did the reading) -- purely "how far into the syllabus calendar
  // you are," which is honestly computable from data the site already has.
  function courseSessionProgress(weeks, code) {
    const today = todayISO();
    let total = 0;
    let done = 0;
    for (const week of weeks) {
      for (const day of week.days) {
        if (!day.date) continue;
        for (const ev of day.events || []) {
          if (ev.code !== code) continue;
          total++;
          if (day.date <= today) done++;
        }
      }
    }
    return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
  }

  // Bare fill-bar markup, shared by the course page's progress card and the
  // dashboard's course-chip percentage -- callers set --course-color on an
  // ancestor element (same custom property .course-chip/.event-card already
  // use) so the fill picks up that course's color for free.
  function progressBarHtml(pct) {
    const clamped = Math.max(0, Math.min(100, pct));
    return `<div class="progress-bar"><div class="progress-bar-fill" style="width:${clamped}%"></div></div>`;
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
  // visible focusable elements (recomputed live, since a dialog may replace
  // its own content via innerHTML after opening, as the mindmap popup does);
  // focus moves to the close button on open and back to whatever triggered
  // the open on close. Shared by initElectiveSettings below and the legal-
  // issue mindmap popup in common-session.js, which were previously two
  // independent, duplicated implementations of the same open/close-panel
  // pattern with none of this behavior.
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

  // Locates an arbitrary date within a timetable's week/day structure -- used
  // to jump straight to a specific day (e.g. from a `?date=` link elsewhere
  // on the site) instead of always landing on the current week.
  function findDateIndex(weeks, dateIso) {
    for (let w = 0; w < weeks.length; w++) {
      const days = weeks[w].days;
      for (let d = 0; d < days.length; d++) {
        if (days[d].date === dateIso) return { week: w, day: d };
      }
    }
    return null;
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

  // ---------------------------------------------------------------------
  // Loading a course's notes on demand.
  //
  // Every page used to carry a <script> per course, so opening the timetable
  // downloaded and parsed 2,540KB of exam notes (560KB gzipped) to read the
  // 2.3KB of deadlines it actually uses -- 1,088x more than needed, before
  // anything rendered. The notes are now fetched by the pages that show
  // them, for the one course they show.
  //
  // What every page still carries is courseIndex.js: name, codePrefix,
  // deadlines and which sessions have exam notes, for every course. 826
  // bytes gzipped. It is generated (npm run build:index) and checked for
  // staleness by npm test, so it cannot drift from the notes it summarises.
  //
  // Two rules if you touch this:
  //  - A page that renders notes MUST await loadCourseDetails before it
  //    reads window.COURSE_DETAILS, and must handle null (a course with no
  //    authored notes, or a failed fetch) the same way it already handles
  //    "nothing authored here yet".
  //  - Resolve, never reject. A missing course is a normal state on this
  //    site -- most electives have no notes at all -- so a failure is a null
  //    the caller already knows how to render, not an error path that would
  //    blank a page that was otherwise fine.
  // ---------------------------------------------------------------------
  const scriptOnce = new Map();

  // One <script> per URL however many callers ask, and the same promise
  // handed to each -- two widgets wanting the same course must not race two
  // copies of a 950KB file onto the page.
  function loadScriptOnce(src) {
    if (scriptOnce.has(src)) return scriptOnce.get(src);
    const p = new Promise((resolve) => {
      const el = document.createElement('script');
      el.src = src;
      el.onload = () => resolve(true);
      el.onerror = () => resolve(false);
      document.head.appendChild(el);
    });
    scriptOnce.set(src, p);
    return p;
  }

  function courseIndex() {
    return window.COURSE_INDEX || {};
  }

  // Name/prefix/deadlines without the notes, for the pages that only need to
  // label a course or count its deadlines.
  function courseMeta(code) {
    return courseIndex()[code] || null;
  }

  function courseHasNotes(code) {
    return !!courseIndex()[code];
  }

  async function loadCourseDetails(code) {
    if (!code) return null;
    const loaded = (window.COURSE_DETAILS || {})[code];
    if (loaded) return loaded;
    if (!courseHasNotes(code)) return null;
    await loadScriptOnce(`courseDetails/${encodeURIComponent(code)}.js`);
    return (window.COURSE_DETAILS || {})[code] || null;
  }

  // The search index is 47KB gzipped -- small enough to feel instant on the
  // first search, far too big to put on every page when the point of all of
  // the above was to stop shipping data a page does not use.
  async function loadSearchIndex() {
    if (window.SEARCH_INDEX) return window.SEARCH_INDEX;
    await loadScriptOnce('searchIndex.js');
    return window.SEARCH_INDEX || [];
  }

  // ---------------------------------------------------------------------
  // Statutory and case references, marked up for emphasis in the notes.
  //
  // Detection runs over the RAW string and yields character ranges; citeHtml
  // then escapes each slice separately. Doing it the other way round -- regex
  // over already-escaped text -- means the patterns can collide with entities
  // (`&` becomes `&amp;`, and a case name like "Tommy C P Sze & Co" then has
  // an entity in the middle of it), so ranges-then-escape is the safe order.
  // Only a fixed <span class="cite"> is ever inserted; nothing in the source
  // text can reach the output unescaped.
  const COURT = 'HCA|CACV|HCPI|HCMP|HCZZ|DCCJ|FACV|HCCW|CAMP|CACC|HCCT|HCSD';
  // A party-name token. The FIRST token must start upper-case or with a digit,
  // so "on the Bruce v Odhams test" does not bold the leading "the".
  const HEAD = "(?:[A-Z]|\\d+[A-Z])[\\w&'’-]*\\.?";
  const TOK = "(?:[A-Z0-9][\\w&'’-]*\\.?|\\((?:No ?\\d+|[A-Z][\\w '’-]{1,18})\\)|of|and|the|for|y|&)";
  // Left-hand party tokens may not be purely numeric — see the comment on
  // CASE_RE below for the citation-merge this prevents.
  const LTOK = "(?:(?:[A-Z]|\\d+[A-Z])[\\w&'’-]*\\.?|\\((?:No ?\\d+|[A-Z][\\w '’-]{1,18})\\)|of|and|the|for|&)";
  // Bounded to the SHAPE of a citation so it cannot run on into the sentence
  // after it — the first cut matched 28 arbitrary characters and bolded prose
  // like "[1987] AC 189 at 212F gives the pr".
  const REPORTER = "\\[(?:19|20)\\d\\d\\]\\s*\\d*\\s*[A-Z][A-Za-z]{0,9}(?:\\s[A-Z][A-Za-z]{0,9}){0,2}\\s*\\d+";
  const YEARPAREN = "\\((?:19|20)\\d\\d\\)\\s*\\d*\\s*[A-Z][A-Za-z]{1,10}\\s*\\d+";
  const COURTFILE = '(?:' + COURT + ') ?\\d+\\/\\d{4}';
  // Optional trailing court and pinpoint, both fully bracket-balanced.
  const TAIL = "(?:\\s*\\((?:CA|HC|CFI|CFA|PC)\\))?(?:\\s+at\\s+(?:paras?\\s+)?\\d[\\w.–-]*)?";
  const CITATION = '(?:\\s*(?:' + REPORTER + '|' + YEARPAREN + ')' + TAIL
    + '|\\s*\\(' + COURTFILE + '\\)|\\s+' + COURTFILE + '|\\s*\\((?:CA|HC|CFI|CFA|PC)\\))';

  const CASE_RE = new RegExp('\\b' + HEAD + '(?:\\s' + LTOK + '){0,6}\\sv\\.? ' + TOK + '(?:\\s' + TOK + '){0,8}(?:' + CITATION + ')?', 'g');

  // One paragraph group — (a), (1A), (ga) — never containing a space, so a
  // parenthetical like "(the Court)" can never be swallowed.
  const PARA = '\\([^()\\s]{1,8}\\)';
  const PARA_RANGE = PARA + '(?:\\s*[-\u2013]\\s*' + PARA + ')?';
  // A reference often continues past its first paragraph: "r.1(1)(b), (h),
  // (j)-(p)" or "MA22(4)(a) and (b)". Without this the highlight stopped at
  // the first group and the rest of the list read as ordinary prose. The
  // separator has to be followed immediately by "(" so " and the 14-day rule"
  // is not absorbed.
  const MORE_PARAS = '(?:(?:\\s*,\\s*|\\s+and\\s+|\\s+or\\s+)' + PARA_RANGE + ')*';
  const PARAS = '(?:' + PARA + ')*(?:\\s*[-\u2013]\\s*' + PARA + ')?' + MORE_PARAS;
  // A rule range with no paragraph groups at all — "rr.2-3", "r.5-7".
  const RULE_RANGE = '(?:\\s*[-\u2013]\\s*(?:rr?\\.\\s?)?\\d+[A-Z]*(?:' + PARA + ')*)?';

  const PATTERNS = [
    // Order + rule first, so "O.18 r.7(1)" stays one unit rather than two
    new RegExp('\\bO\\.\\s?\\d+[A-Z]?\\s+rr?\\.\\s?\\d+[A-Z]*' + PARAS + '(?:\\s*(?:-|\u2013|and|to)\\s*(?:r\\.\\s?)?\\d*[A-Z]*(?:' + PARA + ')+' + MORE_PARAS + ')?' + RULE_RANGE, 'g'),
    /\bO\.\s?\d+[A-Z]?\b/g,
    new RegExp('\\brr?\\.\\s?\\d+[A-Z]*' + PARAS + RULE_RANGE, 'g'),
    new RegExp('\\brules?\\s\\d+[A-Z]*' + PARAS, 'g'),
    new RegExp('\\bss?\\.?\\s?\\d+[A-Z]*' + PARAS + '(?:\\s*[-\u2013]\\s*\\d+[A-Z]*)?(?:\\s+and\\s+\\d+[A-Z]*' + PARAS + ')?', 'g'),
    new RegExp('\\bsections?\\s\\d+[A-Z]*' + PARAS, 'g'),
    new RegExp('\\bMA\\s?\\d+[A-Z]?' + PARAS + '(?:\\s*[-\u2013]\\s*(?:MA)?\\d+' + PARAS + ')?', 'g'),
    /\bCap\.?\s?\d+[A-Z]?\b/g,
    /\b(?:Practice Direction|PD)\s?\d+(?:\.\d+)*(?:\s*§\s?\d+(?:\.\d+)*)?/g,
    /§\s?\d+(?:[/.]\d+)*/g,
    /\bArts?\.?\s?\d+[A-Z]?(?:\s+and\s+\d+)?\b/g,
    /\bL\.N\.\s?\d+ of \d{4}\b/g,
    new RegExp(REPORTER, 'g'),
    new RegExp(YEARPAREN, 'g'),
    new RegExp('\\b' + COURTFILE + '\\b', 'g'),
    CASE_RE,
  ];

  // Sentence glue that is not part of a party name.
  const LEAD_STOP = /^(?:Contrast|See|Cf|Per|And|But|Or|In|On|At|If|Then|Note|Compare|Under|Following|Applied|Approved|Citing|Unlike|Both|Here|This|That|These|Those|Where|When|While|Also|However|Whereas|Because|Since|Thus|So|Hence|Now|Again|Read|Use|Using|Apply|Applying|Consider|Identify|State|Give|Take|Run|Check|Ask|Say|Name|Draft|Plead|Serve|Tick|Set|The)\s+/;

  function findRanges(text) {
    const ranges = [];
    for (const re of PATTERNS) {
      re.lastIndex = 0;
      let m;
      while ((m = re.exec(text)) !== null) {
        let start = m.index;
        let str = m[0];
        if (re === CASE_RE) {
          const trimmed = str.replace(LEAD_STOP, '');
          start += str.length - trimmed.length;
          str = trimmed;
        }
        str = str.replace(/[\s,;:]+$/, '');
        const end = start + str.length;
        if (end > start) ranges.push([start, end]);
        if (m.index === re.lastIndex) re.lastIndex++;
      }
    }
    ranges.sort((a, b) => (a[0] - b[0]) || (b[1] - a[1]));
    const kept = [];
    for (const r of ranges) {
      const prev = kept[kept.length - 1];
      if (prev && r[0] < prev[1]) { if (r[1] > prev[1]) prev[1] = r[1]; continue; }
      kept.push(r.slice());
    }
    return kept;
  }

  // Escapes `text` and wraps every statutory or case reference in it.
  function citeHtml(text) {
    const str = String(text);
    const ranges = findRanges(str);
    if (!ranges.length) return escapeHtml(str);
    let out = '';
    let last = 0;
    for (const [a, b] of ranges) {
      out += escapeHtml(str.slice(last, a));
      out += '<span class="cite">' + escapeHtml(str.slice(a, b)) + '</span>';
      last = b;
    }
    return out + escapeHtml(str.slice(last));
  }

  // ---------------------------------------------------------------------
  // How a citation is SAID, as the sibling of how it is written.
  //
  // Every speech engine reads "O.18 r.19(1)(a)" as "oh dot eighteen r dot
  // nineteen bracket one bracket a", and a premium cloud voice does it just
  // as badly as a free local one -- so this, not the choice of voice, is what
  // decides whether these notes are listenable. It is also why the read-aloud
  // feature needs nothing authored: citeHtml has already wrapped all 1,173
  // references in a <span class="cite">, so the read-aloud pass hands that
  // span's own text straight to citeSpeech and no second detector has to be
  // written or kept in step with the first.
  //
  // Expansion runs in a fixed order because the prefixes nest: "ss" has to go
  // before "s" and "rr" before "r", or the longer form is eaten a character
  // at a time.
  const CITE_PREFIXES = [
    [/\bL\.N\.\s?/g, 'Legal Notice '],
    [/\bO\.\s?(\d+[A-Z]?)/g, 'Order $1'],
    [/\brr\.\s?(?=\d)/g, 'rules '],
    [/\br\.\s?(?=\d)/g, 'rule '],
    [/\bss\.?\s?(?=\d)/g, 'sections '],
    [/\bs\.?\s?(?=\d)/g, 'section '],
    [/\bMA\s?(?=\d)/g, 'Model Article '],
    [/\bCap\.?\s?(?=\d)/g, 'Chapter '],
    [/\bPD\s?(?=\d)/g, 'Practice Direction '],
    [/\bArts?\.?\s?(?=\d)/g, 'Article '],
    [/§\s?/g, 'paragraph '],
  ];
  // The unit word decides what its first bracketed group is called: a section
  // has subsections, everything else has paragraphs. Groups after the first
  // are just read out, because "section 19, subsection 1, paragraph a,
  // sub-paragraph i" is longer than the sentence it sits in.
  const CITE_UNIT = /\b(sections?|rules?|Orders?|Model Articles?|Articles?|paragraphs?|Chapters?)\s(\d+[A-Z]*)((?:\([^()\s]{1,8}\))+)/g;
  const PARA_GROUP = /\(([^()\s]{1,8})\)/g;
  // An all-caps run is a reporter or a court ("HKCFA", "AC", "WLR") and is
  // spelled out; left whole, an engine either invents a word for it or drops
  // it. Anything already expanded above has stopped being all-caps by now.
  const ABBREV = /\b([A-Z]{2,6})\b/g;

  function citeSpeech(text) {
    let s = ' ' + String(text).replace(/\s+/g, ' ').trim() + ' ';
    for (const [re, to] of CITE_PREFIXES) s = s.replace(re, to);
    // " v " and " v. " are the one thing every engine gets wrong in a case
    // name, and the one that makes it unrecognisable when it does.
    s = s.replace(/\sv\.?\s/g, ' versus ');
    s = s.replace(CITE_UNIT, (m, unit, num, groups) => {
      const gs = groups.match(PARA_GROUP).map((g) => g.slice(1, -1));
      const first = /^sections?$/i.test(unit) ? 'subsection' : 'paragraph';
      return `${unit} ${num}, ${first} ${gs[0]}` + gs.slice(1).map((g) => `, ${g}`).join('');
    });
    // A bracketed range has to be resolved while the brackets are still
    // there: once each group has become ", j" and ", p" the hyphen between
    // them is no longer between two words, and the generic range rule below
    // cannot see it. "(j)-(p)" was reading as "j dash, p".
    s = s.replace(/,?\s*\(([^()\s]{1,8})\)\s*[-–]\s*\(([^()\s]{1,8})\)/g, ', $1 to $2');
    // "MA22(4)(a) and (b)" -- the conjunction is already the separator, so
    // the group after it must not bring a comma of its own ("and, b").
    s = s.replace(/\b(and|or|to)\s*\(([^()\s]{1,8})\)/g, '$1 $2');
    s = s.replace(PARA_GROUP, ', $1');
    // A range is "to", whether written with a hyphen or an en dash.
    s = s.replace(/([\w)])\s*[-–]\s*(?=[\w(])/g, '$1 to ');
    // A court file number is said "123 of 2019", not "123 slash 2019".
    s = s.replace(/(\d+)\/(\d{4})\b/g, '$1 of $2');
    // "Order 18 rule 19" runs together without the pause a reader takes.
    s = s.replace(/\b(Orders? \d+[A-Z]?) (?=rules?\b)/g, '$1, ');
    s = s.replace(/[[\]]/g, ' ');
    s = s.replace(ABBREV, (m, a) => a.split('').join(' '));
    return s.replace(/\s*,\s*(?=,)/g, '').replace(/\s+/g, ' ').replace(/\s+([,.])/g, '$1').trim();
  }

  // The same job for ordinary note prose: the handful of abbreviations and
  // symbols that are written to be read rather than said.
  const PROSE_SAY = [
    [/\be\.g\.\s*/gi, 'for example, '],
    [/\bi\.e\.\s*/gi, 'that is, '],
    [/\bcf\.\s*/gi, 'compare '],
    [/\betc\./gi, 'et cetera'],
    [/\bNB\b/g, 'note'],
    [/\bHK\$\s?([\d,.]+)/g, '$1 Hong Kong dollars'],
    [/\s&\s/g, ' and '],
    [/→\s*/g, 'go to '],
    // A derived issue code carries a full stop, which a sentence splitter
    // reads as the end of a sentence -- "...deliveredPRP-4." then ".02, The
    // statutory period". Spelling the prefix and saying the dot removes both
    // the wrong break and the unpronounceable run of capitals.
    [/\b([A-Z]{2,4})-(\d+)\.(\d+)\b/g, (m, a, b, c) => a.split('').join(' ') + ' ' + b + ' point ' + c],
    // A bracket run written straight onto a number -- "13(1)", "13(1)(a)" --
    // is a provision's own subdivision. It reaches here rather than
    // citeSpeech when the detector did not mark it, which is what happens to
    // a capitalised "Section 13(1)": the detector is case-sensitive, so that
    // form is not highlighted on screen either. Said flat as "13, 1" it loses
    // the word that makes it a provision.
    [/(\d[A-Z]?)((?:\((?:\d{1,2}|[a-z]{1,4})\))+)/g, (m, num, groups) => {
      const gs = groups.match(/\(([^)]+)\)/g).map((g) => g.slice(1, -1));
      return `${num}, subsection ${gs[0]}` + gs.slice(1).map((g) => `, ${g}`).join('');
    }],
    // A bare "(a)" or "(iii)" in prose is a statutory paragraph marker -- the
    // verbatim quote boxes are full of them, because a quote is rendered
    // unmarked on purpose and so never reaches citeSpeech. One to four
    // lower-case letters or one to two digits excludes a real parenthetical
    // like "(CA)" or a year like "(2015)".
    [/\((\d{1,2}|[a-z]{1,4})\)/g, ', $1,'],
    // An em/en dash between words is a pause, not a word; without this an
    // engine either says "dash" or runs the two clauses together.
    [/\s[—–]\s/g, ', '],
  ];

  function proseSpeech(text) {
    let s = String(text).replace(/\s+/g, ' ').trim();
    for (const [re, to] of PROSE_SAY) s = s.replace(re, to);
    return tidySpeech(s);
  }

  function tidySpeech(text) {
    return String(text)
      .replace(/\s+/g, ' ')
      .replace(/\s+([,.;:)])/g, '$1')
      .replace(/\(\s+/g, '(')
      .replace(/,\s*(?=[,.;:])/g, '')
      // "...and: (a) proof" becomes "and:, a," without this -- a colon or
      // semicolon is already the pause the comma was adding.
      .replace(/([:;])\s*,\s*/g, '$1 ')
      .trim();
  }

  // What a whole line of notes should say: every statutory and case reference
  // in it read as a lawyer reads it, and the prose between them expanded.
  //
  // It finds the references itself with findRanges rather than reading the
  // <span class="cite"> marks already in the DOM, because the one place those
  // marks are deliberately absent is the place citations are densest: a
  // `statutes` quote box renders its body with escapeHtml, since bolding
  // inside a verbatim quote would alter the quote. Reading the marks would
  // have left exactly those provisions unspoken.
  function speechText(text) {
    const str = String(text);
    const ranges = findRanges(str);
    if (!ranges.length) return proseSpeech(str);
    let out = '';
    let last = 0;
    for (const [a, b] of ranges) {
      out += ' ' + proseSpeech(str.slice(last, a)) + ' ' + citeSpeech(str.slice(a, b)) + ' ';
      last = b;
    }
    return tidySpeech(out + ' ' + proseSpeech(str.slice(last)));
  }

  // ---------------------------------------------------------------------
  // Read-aloud, on the browser's own speechSynthesis.
  //
  // No key, no network, no dependency and no cost, which is what lets it ship
  // under the zero-build rule -- and on the devices this is actually revised
  // on (Siri voices on a Mac or iPhone, Microsoft Natural in Edge, Google TTS
  // on Android) it is as good as anything paid. The quality that is missing
  // from legal text comes from citeSpeech above, not from the voice.
  //
  // Three engine quirks are handled here rather than at the call site:
  //  - getVoices() is empty on the first call in Chrome and fills in later,
  //    so the list is re-read on `voiceschanged` and never cached as empty.
  //  - Chrome drops a REMOTE voice's utterance after about 15 seconds
  //    (crbug 41294170), so text is chunked at sentence boundaries and each
  //    chunk is spoken as its own utterance, chained by onend. Chaining
  //    rather than queueing is also what makes stop exact.
  //  - cancel() immediately followed by speak() can wedge the engine, and a
  //    paused engine silently ignores speak(), so a start always resumes and
  //    defers past the cancel.
  // ---------------------------------------------------------------------
  const SPEECH_KEY = 'pcll.speech';
  const SPEECH_RATES = [0.8, 0.9, 1, 1.15, 1.3, 1.5, 1.75];
  // Comfortably inside Chrome's remote-voice cutoff at every rate offered.
  const SPEECH_CHUNK = 170;

  let voiceList = [];
  let speechRun = 0;

  function speechSupported() {
    return typeof window !== 'undefined'
      && typeof window.speechSynthesis !== 'undefined'
      && typeof window.SpeechSynthesisUtterance !== 'undefined';
  }

  // Higher is better. Hong Kong legal English is read in British English, a
  // "Natural"/"Siri"/"Premium" voice is a different engine from the fallback
  // that shares its language tag, and a local voice is immune to the Chrome
  // cutoff above -- so all three are worth ranking for.
  function scoreVoice(v) {
    const name = v.name || '';
    const lang = v.lang || '';
    let n = 0;
    if (/natural|neural|siri|premium|enhanced/i.test(name)) n += 40;
    if (/google/i.test(name)) n += 12;
    if (/^en[-_]HK/i.test(lang)) n += 25;
    else if (/^en[-_]GB/i.test(lang)) n += 20;
    else if (/^en[-_](AU|IE|NZ|ZA|IN)/i.test(lang)) n += 10;
    else if (/^en[-_]US/i.test(lang)) n += 8;
    if (v.localService) n += 6;
    if (v.default) n += 2;
    if (/compact|espeak|festival/i.test(name)) n -= 40;
    return n;
  }

  function speechVoices() {
    if (!speechSupported()) return [];
    if (!voiceList.length) voiceList = window.speechSynthesis.getVoices() || [];
    return voiceList
      .filter((v) => /^en/i.test(v.lang || ''))
      .slice()
      .sort((a, b) => scoreVoice(b) - scoreVoice(a) || (a.name || '').localeCompare(b.name || ''));
  }

  function loadSpeechPrefs() {
    try {
      const raw = JSON.parse(localStorage.getItem(SPEECH_KEY) || '{}');
      return { voice: typeof raw.voice === 'string' ? raw.voice : '', rate: Number(raw.rate) || 1 };
    } catch {
      return { voice: '', rate: 1 };
    }
  }

  function saveSpeechPrefs(prefs) {
    try { localStorage.setItem(SPEECH_KEY, JSON.stringify(prefs)); } catch { /* no-op */ }
  }

  // The remembered voice may not exist on this device (a different browser,
  // or a voice the OS has since removed), so a miss falls back to the best
  // available rather than to nothing.
  function currentVoice() {
    const list = speechVoices();
    if (!list.length) return null;
    const want = loadSpeechPrefs().voice;
    return list.find((v) => v.voiceURI === want) || list[0];
  }

  // Sentence first, then clause, then a hard cut: a chunk boundary is a
  // breath, so putting it at punctuation is what stops the reading sounding
  // like it was sliced by a character counter.
  function chunkSpeech(text) {
    const out = [];
    const push = (s) => { const t = s.trim(); if (t) out.push(t); };
    for (const sentence of String(text).match(/[^.!?]+(?:[.!?]+|$)/g) || []) {
      if (sentence.trim().length <= SPEECH_CHUNK) { push(sentence); continue; }
      let rest = sentence;
      while (rest.length > SPEECH_CHUNK) {
        const head = rest.slice(0, SPEECH_CHUNK);
        let cut = Math.max(head.lastIndexOf('; '), head.lastIndexOf(', '), head.lastIndexOf(' — '));
        if (cut < SPEECH_CHUNK * 0.4) cut = head.lastIndexOf(' ');
        if (cut <= 0) cut = SPEECH_CHUNK;
        push(rest.slice(0, cut + 1));
        rest = rest.slice(cut + 1);
      }
      push(rest);
    }
    return out;
  }

  function speechStop() {
    speechRun++;
    if (!speechSupported()) return;
    try {
      window.speechSynthesis.resume();
      window.speechSynthesis.cancel();
    } catch { /* no-op */ }
  }

  // Speaks `parts` in order and calls opts.onend once, when the last chunk
  // finishes or the run is superseded by another. Returns false if there was
  // nothing to say.
  function speechSpeak(parts, opts) {
    if (!speechSupported()) return false;
    const o = opts || {};
    const chunks = [];
    for (const p of parts || []) for (const c of chunkSpeech(p)) chunks.push(c);
    if (!chunks.length) return false;

    speechStop();
    const run = speechRun;
    const voice = currentVoice();
    const rate = o.rate || loadSpeechPrefs().rate || 1;
    let i = 0;

    const next = () => {
      if (run !== speechRun) return;
      if (i >= chunks.length) { if (o.onend) o.onend(); return; }
      const u = new window.SpeechSynthesisUtterance(chunks[i++]);
      if (voice) { u.voice = voice; u.lang = voice.lang; }
      u.rate = rate;
      u.onend = next;
      // An "interrupted"/"canceled" error IS a stop -- reacting to it would
      // restart the chain the stop just ended. Anything else is one chunk
      // the engine could not say, and skipping it is better than silence.
      u.onerror = (e) => {
        if (e && (e.error === 'interrupted' || e.error === 'canceled')) return;
        next();
      };
      try {
        window.speechSynthesis.resume();
        window.speechSynthesis.speak(u);
      } catch {
        next();
      }
    };

    // Deferred past the cancel above: Chrome wedges if speak() lands in the
    // same task as cancel().
    setTimeout(next, 0);
    return true;
  }

  if (speechSupported()) {
    const readVoices = () => { voiceList = window.speechSynthesis.getVoices() || []; };
    readVoices();
    window.speechSynthesis.addEventListener('voiceschanged', readVoices);
    // Speech outlives a navigation in Chrome, so a link followed mid-sentence
    // would otherwise keep talking over the next page.
    window.addEventListener('pagehide', speechStop);
  }

  function field(label, value) {
    return `<div class="field"><span class="field-label">${escapeHtml(label)}</span><span class="field-value">${escapeHtml(value)}</span></div>`;
  }

  async function fetchTimetable(fresh) {
    const res = await fetch(`/api/timetable${fresh ? '?fresh=1' : ''}`);
    // api/timetable.js answers its own failures with a JSON { error } body,
    // but a platform-level failure (a gateway timeout, a 5xx from the host
    // rather than the function) answers with HTML. Parsing that first turned
    // every such outage into "Unexpected token '<'", which reads like a bug
    // in the site rather than a service that is down -- so the status is
    // checked before the body is trusted to be JSON at all.
    const text = await res.text();
    let data = null;
    try { data = JSON.parse(text); } catch { /* not JSON — handled below */ }
    if (!res.ok) throw new Error((data && data.error) || `Timetable service error (HTTP ${res.status})`);
    if (!data) throw new Error('Timetable service returned an unreadable response');
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
  // the live sheet's fetch+parse cost (~600ms cold — see README) even
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

  // Builds the URL for one exam-notes issue type within that session
  // (issue.html) — the same session params plus which issue type, so the
  // page can re-locate the event exactly the way session.html/quiz.html do.
  function issueHref(ev, dateIso, issueId) {
    const params = sessionParams(ev, dateIso);
    params.set('issue', issueId || '');
    return `issue.html?${params}`;
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

  // Indexes a course's timetable entries by the courseDetails.js session key
  // they document, so anything holding a session key (a courseDetails entry,
  // an exam-notes cross-reference) can build a real session/quiz/issue URL
  // for it. First occurrence of a key wins — a session taught in A/B halves
  // or repeated for two SG groups is one courseDetails entry, and either
  // event re-locates it.
  //
  // A pre-recorded entry is indexed with `dateIso: null`, which is not a
  // missing date but the genuine value sessionParams/findSessionInTimetable
  // use to mean "pre-recorded" — so those sessions are linkable too.
  function sessionEventsByKey(data, code) {
    const byKey = new Map();
    for (const week of data.weeks) {
      for (const entry of week.preRecorded || []) {
        if (entry.code !== code) continue;
        const key = preRecordedSessionKey(code, entry);
        if (key && !byKey.has(key)) byKey.set(key, { ev: { ...entry, no: entry.no || key }, dateIso: null });
      }
      for (const day of week.days) {
        for (const ev of day.events || []) {
          if (ev.code !== code) continue;
          const key = sessionKeyFor(ev.no);
          if (key && !byKey.has(key)) byKey.set(key, { ev, dateIso: day.date });
        }
      }
    }
    return byKey;
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

  // Publishes the topbar's real height as --topbar-h, for anything that has
  // to sit directly beneath it (the timetable's sticky .week-nav).
  //
  // That offset used to be the literal 58px, against a bar that is actually
  // 64px on a desktop and taller still below 640px, where the brand takes a
  // row of its own — so the nav already tucked under the bar before any of
  // this. A text-size control makes the coupling worse in the cases where
  // the title wraps, and there is no way for CSS to measure an element, so
  // the number has to come from the DOM.
  //
  // A ResizeObserver rather than one measurement, for the reason CLAUDE.md
  // gives about the mindmap: the bar's height changes with the text size,
  // the viewport width and a title that wraps, and a single reading taken
  // at load would be stale after any of them.
  function trackTopbarHeight() {
    const bar = document.querySelector('.topbar');
    if (!bar) return;
    const publish = () => {
      document.documentElement.style.setProperty('--topbar-h', `${Math.round(bar.getBoundingClientRect().height)}px`);
    };
    publish();
    if (typeof ResizeObserver === 'function') new ResizeObserver(publish).observe(bar);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', trackTopbarHeight);
  } else {
    trackTopbarHeight();
  }

  function effectiveFontScale() {
    const explicit = document.documentElement.dataset.fontScale;
    return FONT_STEPS.includes(explicit) ? explicit : 'normal';
  }

  // The button's accessible name has to say both where the reader is and
  // where the next click goes: an icon that merely looks bigger tells a
  // screen-reader user nothing, and a label of just "Text size" leaves a
  // sighted reader guessing what a third click does.
  function paintFontButton(btn, scale) {
    if (!btn) return;
    const next = FONT_STEPS[(FONT_STEPS.indexOf(scale) + 1) % FONT_STEPS.length];
    btn.innerHTML = scale === 'larger' ? ICONS.textLarger : (scale === 'large' ? ICONS.textLarge : ICONS.textNormal);
    const label = `Text size: ${FONT_LABELS[scale]} — click for ${FONT_LABELS[next]}`;
    btn.title = label;
    btn.setAttribute('aria-label', label);
  }

  function setFontScale(scale, btn) {
    const next = FONT_STEPS.includes(scale) ? scale : 'normal';
    document.documentElement.dataset.fontScale = next;
    try { localStorage.setItem(FONT_KEY, next); } catch { /* no-op */ }
    paintFontButton(btn, next);
    if (btn) {
      // Restart the pop-in keyframe, as setTheme does.
      btn.classList.remove('icon-pop');
      void btn.offsetWidth;
      btn.classList.add('icon-pop');
    }
  }

  // Call once per page with the text-size button element.
  function initFontScale(btn) {
    if (!btn) return;
    paintFontButton(btn, effectiveFontScale());
    btn.addEventListener('click', () => {
      const i = FONT_STEPS.indexOf(effectiveFontScale());
      setFontScale(FONT_STEPS[(i + 1) % FONT_STEPS.length], btn);
    });
  }

  window.PCLL = Object.assign(window.PCLL || {}, {
    ICONS, RACCOON, emptyStateHtml, checklistCompleteHtml, COURSE_COLORS, DEFAULT_COLOR, ELECTIVE_CODES, ELECTIVE_NAMES,
    todayISO, pickCurrentWeekIndex, findDateIndex, fmtShort, fmtLong, fmtTime, escapeHtml, citeHtml, citeSpeech, proseSpeech, speechText, field,
    courseIndex, courseMeta, courseHasNotes, loadCourseDetails, loadSearchIndex,
    requestPersistentStorage, isHappeningNow, isMyGroupSession,
    eventCardHtml, effectiveTheme, setTheme, initTheme, effectiveFontScale, setFontScale, initFontScale, fetchTimetable, loadTimetable,
    loadMyElectives, saveMyElectives, eventIsFilteredOut, initElectiveSettings, initDialog,
    loadCheckedIds, saveCheckedIds, hwChecklistKey, sgPrepChecklistKey,
    issueNotesKey, noteCheckId, coursePrefix, issueCode, flowLeafIds, issueProgress,
    checklistHtml, wireChecklist, buildDeadlinesIndex, isDeadlineDone,
    deadlineChipsHtml, daysUntil, dueCountdownText, countdownBadgeHtml, courseSessionProgress, progressBarHtml,
    speechSupported, speechVoices, speechSpeak, speechStop, chunkSpeech,
    loadSpeechPrefs, saveSpeechPrefs, currentVoice, SPEECH_RATES,
    sessionHref, quizHref, issueHref, findSessionInTimetable, preRecordedSessionKey, sessionEventsByKey, sessionKeyFor, sessionPartLetter,
  });
})();
