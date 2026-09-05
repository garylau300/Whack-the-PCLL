# Working in this repo

Standing instructions compiled from prior sessions, so they don't need to be
repeated. Read this before making changes. See `README.md` for the
architecture/how-it-works story; this file is about *conventions and rules*,
not what the code does.

## Non-negotiables

- **Zero-build static site.** Plain HTML/CSS/JS, no bundler, no framework.
  Keep it that way. ESLint/Prettier (see below) are dev-only tools and must
  never change this.
- **Never fabricate or guess course content.** Only use what's in the
  uploaded course documents, or facts verified independently (e.g. via
  WebSearch). If something can't be verified, say so rather than filling
  the gap.
- **Never transcribe classmates' PII** from uploaded materials into the
  repo (names beyond what a fact pattern needs, HKID numbers, addresses,
  etc.) — paraphrase fact patterns instead of copying them verbatim.

## Architecture map

- `common-core.js` β†’ `common-content.js` β†’ `common-session.js` — the site's
  shared client logic, split from one 1,056-line `common.js` into three
  files that **must load in that order** on every page (each merges its
  exports into `window.PCLL` via `Object.assign`, never a plain overwrite,
  so load order is what determines whether a symbol is defined yet).
  - `common-core.js`: formatting/escaping primitives, localStorage-backed
    caches, the timetable fetch/cache layer, session URL/lookup helpers,
    the accessible-dialog helper (`initDialog`), the theme toggle, the
    event-card renderer.
  - `common-content.js`: the structured-content vocabulary a session or
    reference-material body is built from (lists, quote/warning boxes,
    step diagrams, tables, the cloze/flashcard quiz widgets).
  - `common-session.js`: the legal-issue mindmap and
    `sessionDetailHtml`/`wireSessionDetail`, which tie the other two
    together into a full session page.
  - If you add a new shared helper, export it via the *same*
    `Object.assign(window.PCLL || {}, {...})` pattern in whichever file it
    conceptually belongs to — check the dependency direction first
    (core β†’ content β†’ session, never the reverse) if it needs to call
    something from another file.
- `courseDetails/PCLL8010.js`, `PCLL8020.js`, `PCLL8030.js` — one file per
  course, each extends the same `window.COURSE_DETAILS`. Adding a new
  course means a new file under `courseDetails/` plus a new `<script>` tag
  on every HTML page that currently loads the other three (course.html,
  index.html, quiz.html, session.html, timetable.html).
- Session entries are keyed by `"LG"`/`"SG"` + number, **no trailing
  letter** (`"LG1"`, not `"LG1A"`) — `sessionKeyFor`/`sessionPartLetter` in
  `common-core.js` resolve the `"A"`/`"B"` part from the live timetable
  event's own `no` field, not from `courseDetails`.
- Data shapes a session's `legalIssues`/reference notes can use —
  `bullets`, `bulletGroups`, `table`, `diagram`, `qa`, `statutes`,
  `warnings` — are documented where they're rendered:
  `fullNoteBodyHtml` in `common-content.js`. That's the single source of
  truth; don't duplicate the schema here where it can drift out of sync.

## Course-content authoring rules

- **Cloze/flashcards are legal principles and hard law ONLY.** Never
  admin, deadlines, dates, attendance, or course logistics. Group them by
  topic (matching the session's own `legalIssues` groupings) using the
  `{ topic, items: [...] }` shape (see `asQuizGroups` in
  `common-content.js`) — not one flat undifferentiated list.
- **Never add to a course page**: AI/plagiarism policy, attendance /
  compulsory-session info, or generic course-description boilerplate —
  even if a source document you're digesting contains such a section.
  Coordinators, learning outcomes, assessment structure, and materials
  lists are fine and expected.
- **A `statutes` quote box (`{ text, cite }`) must be verbatim and
  verified.** Never present your own paraphrase as if it were a quote.
  WebSearch to confirm the real statute/case wording before using a quote
  box; if the exact wording can't be confirmed, use a plain `bullets`
  sentence that still cites the specific section/paragraph number instead
  of a quote box.
- **Mark section/paragraph numbers whenever appropriate** — in bullets,
  table rows, wherever a specific provision is being described.
- **`warnings` are for compliance-critical facts only** — a statutory
  deadline with real legal consequences, an offence/penalty, disciplinary
  risk. Not a stand-in for a `statutes` quote box, and not for routine
  "this is important" bullets that aren't actually about a non-compliance
  risk.

## UI conventions

- A timetable session is a real, separately addressable, linkable page
  (`session.html?code=...&no=...&date=...&start=...`) — never a modal or
  popup for the session's own content.
- A session's numbered legal issues render as an interactive two-level
  mindmap (hub β†’ issue nodes β†’ note nodes, each opening a popup dialog on
  click) — see `legalIssuesMindmapHtml`/`wireLegalIssuesMindmap` in
  `common-session.js`. This is deliberately *not* an expandable accordion.
  Reference-material appendices (course.html's "Reference Materials"
  `<details>`) still use the plain accordion
  (`legalIssueHtml`/`legalIssuesHtml` in `common-content.js`), because a
  mindmap can't measure its own layout while a collapsed ancestor
  `<details>` hides it — don't convert those without solving that first.
- Quiz/flashcards for a session live on a dedicated `quiz.html` page (not
  inline on `session.html`), reached via the `.study-cta` button.
- Every modal/popup on the site (settings panel, mindmap popup) is wired
  through the shared `initDialog` helper in `common-core.js` (focus trap,
  Escape-to-close, focus-restore-to-trigger) — don't hand-roll another
  open/close implementation.
- If you add JS that measures a DOM element's size for layout (like the
  mindmap does), remember `wireSessionDetail`/session.js render content
  while `#sessionSection` is still `hidden` — a plain one-off measurement
  will silently see 0Γ—0. Use a `ResizeObserver` (see
  `wireLegalIssuesMindmap`) rather than a one-off call, so it self-corrects
  once the container actually gets a size.
- **Never truncate a page title with an ellipsis — let it wrap.** The
  `.topbar` is a three-column grid (`"title brand controls"`) so the
  centred `.topbar-brand` always has real reserved space either side and a
  long title can't run under it; below 640px the brand takes its own
  centred row and the title a full-width one beneath. Keep `min-width: 0`
  on `.topbar h1` so it wraps inside its column rather than widening the
  column and pushing the brand off-centre.
- **A looping animation's keyframes must start *and* end at the resting
  pose.** The global `prefers-reduced-motion` rule near the top of
  `styles.css` collapses every animation to a single 0.001ms run, which
  snaps the element to its *final* keyframe — so a loop ending mid-motion
  leaves reduced-motion users staring at a frozen half-swing. The brand
  hammer (`brandSwing`/`brandSpark`/`brandJolt`) is the worked example.
- **Every course gets its own colour in `COURSE_COLORS`** (`common-core.js`)
  — electives included, not just the seven core courses. That one map is
  the single source of truth: the dashboard course list, the timetable
  cards and anything else colour-coded all read it via the
  `--course-color` custom property, so they can't drift apart. Adding a
  course means adding a hue distinct from the ones already there;
  `DEFAULT_COLOR` is the fallback for a *courseless* calendar entry only.
- **The site's mascot is a raccoon** (`RACCOON.relaxed`/`RACCOON.celebrate`
  in `common-core.js`, colored via `--raccoon-*` custom properties, not
  `currentColor` — it's a multi-part illustration, not a single-tone icon).
  Two poses, two jobs, don't blur them: `emptyStateHtml(message)` (relaxed,
  sleepy) for a "nothing scheduled, relax" moment — the dashboard's empty
  "Today's Classes" and the timetable's empty day view both use it, but a
  narrow week-grid column doesn't (the illustration doesn't fit a ~180px
  cell; that one stays plain `.empty-day` text). `checklistCompleteHtml(message)`
  (celebrating, arms up) fires when every item in a checklist is checked —
  course.js's homework list and the session prep checklist in
  common-session.js both append it into the same container the checklist
  renders into, computed fresh on every render (`checked.size === items.length`),
  so it appears and disappears with the checked state rather than being
  its own tracked flag. Don't invent a new "completion" concept (e.g. for
  quiz/flashcards) just to hang the mascot off it — only wire it to a
  completion state that already exists in the data.

## Verification workflow — do this before every commit

1. `npm run check` (syntax-checks every tracked `.js` file) and
   `npm run lint`.
2. Start the dev server (`npm run dev`), then write a throwaway Playwright
   script in the scratchpad dir to actually click through the change —
   screenshot both light and dark themes, check for console errors. There
   is no persisted test suite yet (see "Known gaps"), so this manual pass
   is what actually catches a regression before it ships.
3. Kill the dev server (`pkill -f "scripts/dev-server.js"`) before
   finishing up.
4. Commit with a message that explains *why*, not just what.

## Known gaps / natural next steps

(From a deliberate "what would you improve" review — not urgent, just
recorded so the reasoning doesn't have to be redone.)

- **No persisted automated test suite.** Every verification this repo has
  had so far is a one-off Playwright script, written and thrown away per
  session. A handful of checked-in specs (a session/course/quiz page smoke
  test, a mindmap-overlap check) run via `npm test` and wired into CI would
  catch a regression automatically instead of relying on whoever's working
  that session to think to check by hand.
- **Prettier is configured but not enforced.** `npm run format`/
  `format:check` exist, but `prettier --check .` currently fails on every
  tracked source file — the existing code wasn't written to Prettier's
  exact rules, and reformatting everything in one pass would be a large,
  purely cosmetic diff with real risk (template literals building HTML
  strings) for no behavioral benefit. Left as a deliberate, separate
  decision for whoever wants to make that call.
- **`common-*.js` are still fairly large** (roughly 300–580 lines each).
  Further splitting is possible but riskier than it looks: which file a
  function lives in is constrained by a real dependency order
  (core β†’ content β†’ session, never backwards) — see the commit that did
  this split (`git log --grep "Split common.js"`) for the full dependency
  analysis before attempting to split further.

## Git workflow

- Commit only when asked; explain *why* in the message, not just what
  changed.
- Never force-push, amend, or rewrite history on this branch without being
  explicitly asked to.
- Working branch: `claude/pcll-study-portal-timetable-wdjeu5`.
