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
- `courseDetails/PCLL8010.js`, `PCLL8020.js`, `PCLL8030.js`, `PCLL8050.js` —
  one file per course, each extends the same `window.COURSE_DETAILS`. Adding
  a new course means a new file under `courseDetails/` plus a new `<script>`
  tag on every HTML page that currently loads the others — **six pages**:
  course.html, index.html, issue.html, quiz.html, session.html,
  timetable.html. It also needs a `codePrefix` (CIV / CCT / PRP / CRM so far)
  and, unless one already exists, a `COURSE_COLORS` hue.
- **PCLL8050 is only half of what the Faculty calls the "Criminal Litigation
  Core Practice Course".** That course is three subjects: Criminal Procedure
  and Criminal Litigation are taught and assessed together as one 50%
  component, which is what PCLL8050 covers; Criminal Advocacy is the other
  50% and is its own timetable course, PCLL8051. So the PCLL8050 assessment
  marks are out of **50**, exactly as the course outline states them — don't
  renormalise them to 100, and don't fold Criminal Advocacy's assessment
  into this course.
- Session entries are keyed by `"LG"`/`"SG"` + number, **no trailing
  letter** (`"LG1"`, not `"LG1A"`) — `sessionKeyFor`/`sessionPartLetter` in
  `common-core.js` resolve the `"A"`/`"B"` part from the live timetable
  event's own `no` field, not from `courseDetails`.
- Data shapes a session's notes can use — `bullets`, `bulletGroups`,
  `table`, `diagram`, `flowchart`, `qa`, `statutes`, `warnings` — are
  documented where they're rendered: `fullNoteBodyHtml` in
  `common-content.js`. That's the single source of truth; don't duplicate
  the schema here where it can drift out of sync. The same goes for the
  `examNotes` shape, documented on `examIssueSectionsHtml` in that file.
- **A session has three possible note formats, and `sessionDetailHtml`
  picks the first one authored**, in this order: `examNotes` (current),
  `legalIssues` (the mindmap), `fullNotes` (a flat legacy accordion). As of
  the last count: 44 sessions declared, 8 with `examNotes`, **3** with
  `legalIssues` (PCLL8010/LG1, PCLL8020/LG1, PCLL8030/LG0), and **0** with
  `fullNotes`. The three mindmap sessions predate `examNotes` and are
  deliberately left as they are — a new format alongside them, not a
  migration. `fullNotes` is a different case: its renderer is still live in
  `common-session.js` but no data has reached it for some time. Removing it
  is a decision, not a cleanup — don't do it in passing, and don't assume
  it's exercised when you change the note-body renderers.
- **One course topic can span several sessions.** CCT's Corporate Practice
  is the worked example: the outline covers LG2, LG3 and LG5 as one body of
  law, so it's authored as `examNotes` on each of those three sessions
  rather than duplicated, with `crossRefs` tying them together. A
  `crossRefs` entry is `{ session, issue, label }` — a courseDetails session
  key plus an issue type's `id` within it — rendered by `examCrossRefsHtml`
  in `common-session.js`, which needs the live timetable (hence session, not
  content layer). A ref only becomes a link once *both* halves resolve; a
  ref pointing at a renamed or deleted issue degrades to plain text rather
  than a dead link, so **renaming an issue `id` silently downgrades every
  ref to it** — grep for the old id when you rename one.
- **An issue type's `triggers` has two halves.** `bullets` say "these facts
  mean you are on the right page"; `routes` say "these neighbouring facts
  mean you are on the WRONG page, and here is the right one". A `routes`
  entry is `{ when, session, issue, label }` — the same `{session, issue,
  label}` shape as `crossRefs` plus the fact pattern — resolved by
  `examTriggerRoutesHtml` in `common-session.js` and injected into the
  triggers section through `examIssueSectionsHtml`'s `extras` argument.
  That argument exists only so the session layer can put resolved links
  inside a section the content layer renders, without `common-content.js`
  learning about the timetable (core → content → session still holds).
  Both renderers resolve through `resolveIssueRef`, so the
  degrade-to-plain-text rule is implemented once.
- **Never repeat the session or code in a `label`.** `resolveIssueRef`
  prepends the target's own issue code (`"CIV-LG4.11 — "`) itself, so
  `label: 'LG4 — Amending pleadings'` renders as "CIV-LG4.11 — LG4 —
  Amending pleadings". Write the bare title. This applies to `crossRefs` and
  `routes` alike, and cross-session refs are where it goes wrong — both
  verification scripts assert no rendered link text carries two such tags.
- **Every issue type has a derived code: `<PREFIX>-<sessionKey>.<NN>`**
  (e.g. `CIV-LG4.11`), built by `issueCode(code, details, sessionKey, index)`
  in `common-core.js` from the course's `codePrefix` and the issue's 1-based
  position. It is **derived, never authored** — so it cannot drift out of
  step with the notes, and there is nothing to keep in sync when an issue is
  added. The trade-off is deliberate: **reordering or inserting an issue
  renumbers everything after it**, so don't reorder a session's issueTypes
  once students may have written a code down. It appears on the session-page
  index cards, the course roll-up cards, the issue page's `<h1>`, and as the
  tag on every `crossRefs`/`routes` link. Adding a course means adding a
  `codePrefix` (CIV / CCT / PRP so far) distinct from the others;
  `coursePrefix` falls back to the course code's numeric tail if one is
  missing.
- **The answering flowchart is a three-level checklist; nothing else is.**
  Step > point > sub-point, all checkboxes. `bullets`/`bulletGroups`
  everywhere (Issue Triggers, Look Out For, Skills, Mistakes, reference
  appendices, mindmap popups) stay plain lists — they are things to notice
  while reading, not work to complete. `flowchartHtml(fc, opts)` renders the
  checkboxes only when `opts.checkable` is set, and `issue.js` is the only
  caller that sets it.
- **A flowchart point is a string OR `{ text, points: [...] }`.** The nested
  `points` are sub-points, the third level. Both shapes coexist so the ~1,000
  points authored as plain strings keep working untouched; add a sub-level
  only where the rule genuinely has one (a lettered list of limbs, a
  multi-part test). The best source of sub-points is an enumeration already
  embedded in an existing point — lifting `(a)…(b)…(c)` out of a long
  sentence is a restructure of verified text, not new content.
- **Every flowchart step carries two coaching blocks, and they are NOT part
  of the checklist.** A step may author `why` (a sentence or two on why the
  rule is shaped this way — the reasoning that makes it memorable rather
  than a line to recite) and `exam: { write, trap }` (`write` is a sentence
  to transcribe with the facts swapped in; `trap` is the one mistake that
  loses marks at that step). Both are optional and independent, and
  `flowCoachHtml` in `common-content.js` renders them as two collapsed
  `<details>` under the step's own label. Three rules:
  - **They are never checkboxes.** Only the step > point > sub-point chain
    is work to complete; these are things to understand while doing it. That
    is also why `flowLeafIds` ignores them entirely — which means adding
    `why`/`exam` to an already-authored step **cannot reset a reader's saved
    ticks**, because no checkbox id is derived from them. (Editing the step
    `label` still does.)
  - **Collapsed by default, and opened for printing by `issue.js`.** A
    closed `<details>` prints as just its summary, and CSS cannot reliably
    force one open — the closed state is not a plain `display` rule. So
    `beforeprint` opens them and `afterprint` re-closes exactly the ones
    that were shut, which covers Ctrl+P as well as the print button.
  - **`write` must be transcribable and grounded.** It is a model sentence,
    so it names the provision the step has already established and leaves
    `[date]`/`[sum]` placeholders for the facts. Never put a provision in a
    `write` line that the step itself has not cited — the same
    no-fabrication rule as anywhere else.
- **Only leaves are persisted; parents are derived.** `wireFlowChecks`
  computes each parent's checked/indeterminate state from its descendant
  leaves on every change and once on load, so a stored Set can never disagree
  with what is displayed, and editing a step's points cannot leave a parent
  stuck ticked. Ticking a parent writes every leaf beneath it. State lives
  under `issueNotesKey(code, sessionKey, issueId)`.
- **A checkbox id is a hash of its ancestor chain**, via
  `noteCheckId(path.join('\0'))` where path is step label > point text >
  sub-point text. Text-derived, so inserting a row never transfers a
  neighbour's ticked state; ancestor-qualified, so two identically worded
  points under different steps don't collide. Rewording a row resets it,
  which is intended. Don't give one step two identically worded points (or a
  flowchart two identical step labels) — that *would* collide.
- **Scope `querySelectorAll` with `:scope` when walking the checkbox tree.**
  `li.querySelectorAll('ul input')` matches any input with a `ul` ancestor
  *anywhere*, including the row's own input whose enclosing
  `<ul class="exam-flow-points">` sits outside the `li` — which made every
  point count itself among its own leaves and never roll up. See the `KIDS`
  constant in `wireFlowChecks`.
- **`sessionEventsByKey(data, code)`** (`common-core.js`) is the one way to
  go from a courseDetails session key back to a linkable timetable event.
  Both `course.js`'s exam roll-up and `examCrossRefsHtml` use it, so a
  pre-recorded session (CCT's LG5) is linkable from both: it's indexed with
  `dateIso: null`, which is not a missing date but the value
  `sessionParams`/`findSessionInTimetable` use to mean "pre-recorded".

## Course-content authoring rules

- **Cloze/flashcards are legal principles and hard law ONLY.** Never
  admin, deadlines, dates, attendance, or course logistics. Group them by
  topic (matching the session's own `legalIssues` groupings) using the
  `{ topic, items: [...] }` shape (see `asQuizGroups` in
  `common-content.js`) — not one flat undifferentiated list.
- **Never add to a course page**: AI/plagiarism policy, attendance /
  compulsory-session info, mark-deduction and professionalism warnings,
  repeat-the-year/discontinuation admin, or generic study-skills and
  course-description boilerplate — even if a source document you're
  digesting contains such a section (the Criminal Litigation outline has all
  of them). Coordinators, learning outcomes, assessment structure, and
  materials lists are fine and expected; so is the per-session LGS/SGS
  outline, as `topicsCovered`. `scratchpad/pw/crim-verify.js` asserts the
  banned phrases are absent from the rendered course page — worth copying
  when you add a course.
- **A `statutes` quote box (`{ text, cite }`) must be verbatim and
  verified.** Never present your own paraphrase as if it were a quote.
  WebSearch to confirm the real statute/case wording before using a quote
  box; if the exact wording can't be confirmed, use a plain `bullets`
  sentence that still cites the specific section/paragraph number instead
  of a quote box.
- **Mark section/paragraph numbers whenever appropriate** — in bullets,
  table rows, wherever a specific provision is being described. **Cite to
  the subsection**, not the section: `MA64(4)`, not `MA64`; `s151(2)`, not
  `s151`. A bare section number usually means the provision was taken from
  an outline rather than read, and outlines routinely omit the deadline,
  threshold or exception that decides the answer.
- **Read the provision, don't paraphrase a course outline's paraphrase.**
  Outlines cite provisions; they rarely reproduce them. Where to get the
  real text:
  - **Model Articles (Cap. 622H Sch. 2)** — all 84 articles are reproduced
    in the Companies Registry's `AA_Sample_B.pdf`
    (https://www.cr.gov.hk/en/companies_ordinance/docs/AA_Sample_B.pdf).
    `pdftotext -layout` extracts it cleanly, and it is current (it carries
    the 2023 virtual-meeting amendments at MA35(4)(b)(ii), MA38(6),
    MA39(1A)).
  - **Companies Ordinance (Cap. 622)** — a consolidated PDF is fetchable
    with `curl` (too big for WebFetch's 10 MB cap). The one used so far
    consolidates to **1 Aug 2019**, so it is reliable for stable sections
    but *not* for anything the 2023 Companies (Amendment) Ordinance touched
    (s583A, s547(1), s584, the virtual/hybrid meeting regime) — take those
    from the course outline instead.
  - **Rules of the High Court (Cap. 4A)** — WIPO Lex mirrors the full
    consolidated text as a single HTML page
    (https://wipolex-res.wipo.int/edocs/lexdocs/laws/en/hk/hk038en.html),
    fetchable with `curl` and flattened with a strip-tags pass. It carries
    the CJR amendments (O.1A, O.18 rr.12A and 20A, O.41A), and the latest
    amendment in it is **L.N. 163 of 2013** — so treat ~2013 as its cutoff
    and take anything later from the course materials. The Civil Justice
    Reform consultation PDF at
    https://www.civiljustice.hk/rp/documents/Annex_A.pdf also reproduces
    O.41A, but as a *redlined draft* (strikethroughs survive extraction as
    inline text, e.g. "(4)(6)") — usable for understanding, **never for a
    quote box**.
  - **e-Legislation cannot be WebFetched** — it is a JS single-page app and
    returns only its loading shell, for the HTML and `.pdf` URLs alike.
    `curl` on `!en.pdf` also returns the HTML shell, not a PDF. HKLII is
    the same (`/eng/hk/legis/ord/<cap>/s<n>.html` returns the shell too).
    Don't waste calls on either.
  - **For an Ordinance with no machine-readable mirror**, there is no
    extract to grep, so `quotecheck.py` can only report MISS — that is the
    script being honest, not the quote being wrong, and the quote still has
    to be verified by hand before it ships. Confirm it against **two
    independent reproductions that are unmistakably of the Hong Kong text**,
    not of the English Act it was copied from: an HK-specific section number
    or a subsection where HK and England diverge is what proves the source
    is the Ordinance. Two boxes were cleared this way and need no re-check:
    `s7(1), Control of Exemption Clauses Ordinance (Cap. 71)` (HK numbers it
    s7 where UCTA 1977 numbers it s2) and `s3(1), Partnership Ordinance
    (Cap. 38)` (reproductions carry HK's own s3(2) opening, "But the relation
    between members of any company or association which is— (a) registered
    as a company under any Ordinance relating to the registration of
    joint-stock companies"). Both matched their box word for word.
    Dead ends already tried for these two, don't repeat them: studylib
    (bot check), HKU Historical Laws Online (connection reset), Practical
    Law (403).
  - The **course outline still governs scope**: it decides what is
    examinable, and italicised/unexaminable topics stay out however
    interesting the statute is.
- **Verify every `statutes` quote box mechanically before committing.**
  `scratchpad/quotecheck.py` walks every quote box in a courseDetails file
  and greps its full normalised text against the extracted sources. An
  elided quote (`... (e) ...`) will not match and should be re-cut to quote
  one contiguous limb instead. Likewise `scratchpad/tblcheck.js` catches a
  `table` whose rows and `headers` have drifted out of step — easy to do
  when widening a two-column table to three.
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
  inline on `session.html`), reached via the `.study-cta` button. They are
  optional: `session.js` hides the button when a session authors neither
  `cloze` nor `flashcards`, so an exam-notes session can simply omit them.
- **The issue-type index is ONE renderer: `examIssueListHtml(groups)` in
  `common-content.js`**, used by both the session page (`examNotesIndexHtml`)
  and the course-wide roll-up (`course.js`). It used to be two copies of the
  same card markup that had to be kept in step by hand; don't reintroduce a
  second one. An item is `{ href, code, title, done, total, tags }` and a
  group is `{ label, items }` — the caller resolves hrefs and codes, because
  only it knows the timetable event.
- **The index is a dense navigation ROW, and carries no summary.** At 26
  issue types in one course a line of summary per row buried the titles, so
  the list shows code + title + progress only. Nothing is lost: `summary` is
  still authored and still rendered, as the subtitle on the issue page
  itself, which is where you are once the list has done its job. Don't put
  it back in the list. The Flowchart/Skeleton/Authorities chips are gone for
  the same reason in reverse — `authorities` is set on 44 of 47 issue types,
  so the chip marked almost every row and distinguished none; only
  `weighting` still renders, because it is rare and says something.
- **The index shows real progress, read from the flowchart checkboxes.**
  `issueProgress(code, sessionKey, issue)` (`common-core.js`) recomputes the
  leaf ids with `flowLeafIds` and counts how many are in the stored Set, so
  the roll-up doubles as a record of what you have worked through. An issue
  with no flowchart returns `total: 0` and renders **no meter at all**, not
  a 0% bar — don't "fix" that into a zeroed meter.
- **A filter box appears once a list passes `filterFrom` (default 8).** It
  matches against `data-filter` on each row (the lowercased code + title),
  hides groups left empty, and clears on Escape. Filtering must never read
  the row's rendered text — that is what the data attribute is for.
- **Exam notes are the format for newly authored sessions**, organised by
  the issue types that come up as exam questions. Each issue type is its
  own addressable page (`issue.html?code=…&no=…&date=…&start=…&issue=<id>`,
  built by `issueHref`), reached from a plain ordered list of links on
  session.html and from the course-wide roll-up on course.html. Not a
  mindmap, not a modal, not an accordion — and because it's only links,
  there is nothing for `wireSessionDetail` to wire and nothing measuring
  the DOM. Sections run in one fixed order defined by `EXAM_SECTIONS` in
  `common-content.js`; each section's authored value is just a
  `fullNoteBodyHtml` object, so a section can be bullets, a table, a
  flowchart or any mix — don't add bespoke per-section shapes.
- **`flowchart` vs `diagram`** — `diagram` is the linear, horizontal,
  auto-numbered step chain; `flowchart` is the vertical branching one for
  "how do I answer this?". Keep them separate; don't bolt branching onto
  `diagram`. A flowchart branch's `goto` resolves to *display text* naming
  the target step, never an `<a href="#id">`: a flowchart can be cloned out
  of a mindmap popup `<template>`, and DOM ids would collide.
- **"Be careful" material belongs in an issue type's `lookOut` or
  `mistakes` section, not in `warnings`.** `warnings` stays reserved for
  compliance-critical facts so that red callout keeps its force.
- **Printing is a stylesheet, not a library.** issue.html's print button
  calls `window.print()` and nothing else — "Save as PDF" is a destination
  in the browser's own print dialog, so there is no PDF dependency to add
  and there should not be one. Everything about how the printed page looks
  lives in the `@media print` block at the foot of `styles.css`:
  - It re-declares the colour tokens on `:root, :root[data-theme="dark"]`.
    Both selectors are needed: paper is white whatever the reader had on
    screen, and `:root[data-theme="dark"]` would otherwise outrank a bare
    `:root`. The greys are darkened from their screen values, because what
    reads as "muted" backlit reads as "faded" in ink.
  - `print-color-adjust: exact` is what keeps the flowchart's ticks, the
    tints and the red citations — a printed checklist that drops its ticks
    is a record of nothing.
  - `.table-scroll` is unclipped and `.session-table` set to wrap, since the
    wide authorities tables are sized for a 900px column and paper cannot
    scroll sideways.
  - Break rules avoid splitting a single checklist row, callout or table
    row, and avoid stranding a heading — but deliberately do NOT put
    `break-inside: avoid` on a whole `.exam-section`, because an answering
    flowchart of thirty-odd rows would then shove a half-empty page ahead
    of itself.
  To verify a change, render the real thing with Playwright's `page.pdf()`.
  Note the trap: `page.pdf()` uses print media only while no explicit
  override is in force, so an earlier `emulateMedia({ media: 'screen' })` in
  the same script silently renders the PDF with the on-screen chrome —
  reset with `emulateMedia({ media: null })` before generating.
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
- **Statutory and case references are highlighted automatically — never by
  hand.** `citeHtml(text)` in `common-core.js` detects them and wraps each in
  `<span class="cite">` (bold, `--cite-text`); every note-body renderer in
  `common-content.js` calls it instead of `escapeHtml`. Nothing in
  courseDetails carries markup for this, and nothing should: adding a
  provision to a note is enough for it to light up. Two rules if you touch
  the detector:
  - **Detect over the RAW string, then escape each slice.** `citeHtml`
    collects character ranges and escapes the pieces separately. Running the
    patterns over already-escaped text lets them collide with entities — `&`
    becomes `&amp;`, so a case name like "Tommy C P Sze & Co" has an entity
    in the middle of it. Only a fixed `<span>` is ever inserted, so no source
    text can reach the output unescaped.
  - **A reference continues past its first paragraph.** `PARAS` absorbs
    `(a)-(c)`, `, (h), (j)-(p)` and ` and (b)`, so `r.1(1)(b), (h), (j)-(p)`
    marks as one span rather than stopping at `(b)`. The separator must be
    followed immediately by `(` — otherwise "O.11 r.4(4) and the 14-day rule"
    swallows the prose after it. `RULE_RANGE` separately covers a range with
    no parentheses at all (`rr.2-3`).
  Measure any change against the whole corpus with
  `scratchpad/detector.js`, which loads the detector **out of
  `common-core.js`** rather than copying it, and diff old vs new matches: the
  total span count should stay put while individual spans get longer. 148
  references were being truncated before `PARAS` existed.
- **`--cite-text` is dark red in light mode and a LIGHTER red in dark.** A
  true dark red (`#991b1b`) measures 1.98:1 on the dark surface and is
  unreadable, so the dark theme uses `#f28b82` (6.75:1). Same split as
  `--now-line-text`. Inside a warning callout and a ticked checklist row the
  colour is deliberately dropped to `inherit`, so a red-on-red callout stays
  legible and a completed row dims as a whole.
- **Substantive note content is never `--text-muted`.** The muted token is
  for genuine metadata (a route's "when" clause, a table header, a caption).
  Flowchart step points and details carry the sub-rules that decide an
  answer, so they use `--text`; they were muted at 0.82rem and measured 4.81:1
  in light mode, which is the readability problem a reader actually notices
  even though it technically passes AA. When adding a note component, check
  it with `scratchpad/pw/contrast.js`, which walks the issue page and reports
  a computed ratio per element — and note that `color-mix()` computed values
  are not `rgb()` strings, so that script normalises every colour through a
  canvas rather than parsing the numbers out.
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
- **Countdown wording lives in one place: `dueCountdownText(dateIso, done)`**
  (`common-core.js`) — "Overdue by Nd" / "Due today" / "Due in Nd" / "Done".
  Course.js's checklist meta and the dashboard's Upcoming Deadlines list
  both call it; don't reinstate either's old inline copy of this logic.
  `countdownBadgeHtml(dateIso, done)` wraps that same text in a colored
  `.countdown-badge` chip (urgency ramp: overdue/today red, soon/week amber,
  later/done neutral) for a prominent context — currently just the
  dashboard's deadlines list. The homework checklist's compact meta line
  deliberately stays plain text via `dueCountdownText` directly, not the
  badge: `checklistHtml`'s `item.meta` field is HTML-escaped as plain text
  (only one caller today), so passing badge markup through it would render
  literal `<span>` tags rather than a chip — don't wire the badge in there
  without first giving `checklistHtml` a separate "trusted HTML" field.
- **Course progress is date-driven, not attendance-driven** —
  `courseSessionProgress(weeks, code)` (`common-core.js`) counts how many
  of a course's calendar events (in the live timetable, not courseDetails)
  fall on or before today, out of the total found anywhere in the data.
  It's "how far into the syllabus calendar you are," which the site can
  honestly compute — there's no way to know who actually attended or did
  the reading, so don't relabel this as attendance/completion anywhere it's
  shown (the dashboard course-chip percentage, the course page's
  `#courseProgress` bar via `progressBarHtml(pct)`). Shows for every course
  with at least one scheduled session regardless of whether courseDetails.js
  has an entry for it — unlike most of course.html's sections, it isn't
  gated on authored content.

## Verification workflow — do this before every commit

1. `npm run check` (syntax-checks every tracked `.js` file),
   `npm run lint`, and `npm test`.
2. `npm test` is three plain Node programs under `scripts/` — no test
   framework, same zero-build reasoning as the site itself. They cover the
   cross-file invariants nothing else can see, and CI runs them on every
   push:
   - `verify-data.js` — courseDetails structure. A section key the renderer
     doesn't know is dropped silently, a `crossRefs` entry at a renamed
     issue id degrades to plain text, two identically worded rows under one
     step share a checkbox. It also derives every flowchart checkbox id a
     *third* time, from the data, and requires `flowLeafIds`
     (`common-core.js`) and the rendered markup (`common-content.js`) to
     agree — they walk the same tree in two files that can't call each
     other, so nothing but a check keeps them in step.
   - `verify-pages.js` — page wiring. All six pages load the same scripts
     in the required order, every `courseDetails/*.js` on disk is on every
     page, every DOM id a page's scripts look up is declared by that page,
     and `COURSE_COLORS` matches `api/timetable.js`'s `COURSES` exactly.
   - `verify-parser.js` — `lib/parseTimetable.js` and `lib/xlsxLite.js`
     against hand-built fixtures. This is what those modules' otherwise
     unused exports are for.
   When adding a check, make it fail on purpose first — a check that can't
   fail is worse than none, because it reads as coverage.
3. Then start the dev server (`npm run dev`) and write a throwaway
   Playwright script in the scratchpad dir to click through the change —
   screenshot both light and dark themes, check for console errors.
   `npm test` deliberately covers none of this: layout, contrast and print
   rendering still need a real browser. Two traps in this container:
   `playwright-core` isn't a dependency of this repo (install it in the
   scratchpad, `--no-save`), and `waitUntil: 'networkidle'` never settles
   because the Google Fonts request hangs — abort `fonts.g*` routes and
   wait on `#status` being hidden instead.
4. Kill the dev server (`pkill -f "scripts/dev-server.js"`) before
   finishing up.
5. Commit with a message that explains *why*, not just what.

## Known gaps / natural next steps

(From a deliberate "what would you improve" review — not urgent, just
recorded so the reasoning doesn't have to be redone.)

- **No automated *browser* test.** `npm test` now covers the data, the
  page wiring and the parser (see the verification workflow above), but
  everything that needs a rendered page — layout, contrast, the mindmap's
  measured positions, the print stylesheet — is still a one-off Playwright
  script written and thrown away per session. Checking in a couple of
  headless specs (a session/course/quiz smoke test, a mindmap-overlap
  check) would close the rest of this, at the cost of making Playwright a
  real dependency and CI a good deal slower.
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
- Working branch: `main`.
