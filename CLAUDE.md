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
  the last count: 48 sessions declared, 12 with `examNotes`, **3** with
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
- **Triggers are FACT PATTERNS, and the section is called "Fact Pattern
  Triggers".** A trigger is a sentence describing facts a reader could meet
  in a problem question and recognise — "A generally indorsed writ was served
  on 6 October and the defendant gave notice of intention to defend on 14
  October; no statement of claim has followed" — not a restatement of the
  rule, and not a description of what the exam paper asks ("The question
  gives a service date and asks for a deadline"). `verify-data.js` rejects a
  bullet opening "The question"/"The problem", and requires at least 4 per
  issue type.
  - **Build the facts out of what the issue's own notes already cite.**
    Concrete dates, sums, forms and thresholds are what make a trigger
    recognisable, and every one of them must come from a provision the
    flowchart or authorities on that page has already established. Turning
    "a defence has not been served" into "the 28 days for the defence expired
    on 21 April with nothing served" is a restructure of verified text, the
    same reasoning that licenses lifting sub-points out of a long point. An
    invented threshold is fabrication like any other.
  - **Make them diverse.** Across a list, vary the shape: the textbook case,
    the near-miss the reader will get wrong, the one that looks like the
    neighbouring issue type, and the edge the rule expressly carves out. Nine
    restatements of the same situation discriminate no better than one.
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
  prepends the target's own issue code (`"CIV-4.11 — "`) itself, so
  `label: 'LG4 — Amending pleadings'` renders as "CIV-4.11 — LG4 —
  Amending pleadings". Write the bare title. This applies to `crossRefs` and
  `routes` alike, and cross-session refs are where it goes wrong — both
  verification scripts assert no rendered link text carries two such tags.
- **Every issue type has a derived code: `<PREFIX>-<sessionNum>.<NN>`**
  (e.g. `CIV-4.11`, from session key `LG4` with the leading "LG" stripped),
  built by `issueCode(code, details, sessionKey, index)` in `common-core.js`
  from the course's `codePrefix` and the issue's 1-based position. It is
  **derived, never authored** — so it cannot drift out of step with the
  notes, and there is nothing to keep in sync when an issue is added. The
  trade-off is deliberate: **reordering or inserting an issue renumbers
  everything after it**, so don't reorder a session's issueTypes
  once students may have written a code down. It appears on the session-page
  index cards, the course roll-up cards, the issue page's `<h1>`, and as the
  tag on every `crossRefs`/`routes` link. Adding a course means adding a
  `codePrefix` (CIV / CCT / PRP so far) distinct from the others;
  `coursePrefix` falls back to the course code's numeric tail if one is
  missing.
- **The answering flowchart is a three-level checklist; nothing else is.**
  Step > point > sub-point, all checkboxes. `bullets`/`bulletGroups`
  everywhere (Fact Pattern Triggers, Look Out For, Skills, Mistakes, reference
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
- **Every flowchart step carries a `detail` paragraph, and it is the first
  thing a reader sees.** `detail` is one prose sentence or two stating the
  rule the step applies, rendered by `flowchartHtml` as a `.exam-flow-detail`
  span between the step's label and its coaching blocks. It exists because a
  bare label followed by two collapsed `<details>` and a column of checkboxes
  never states the rule anywhere: an audit found 96% of PRP LG1's steps in
  that condition and unreadable as a result. All 732 steps across the four
  courses now carry one, so treat it as required rather than optional when
  authoring a new step. Two rules:
  - **It is a restructure of the step's own verified content**, drawn from
    that step's `why`, `points` and `branches` — never a new proposition, and
    never a provision the step has not already cited.
  - **It is not a checkbox, and adding one cannot reset saved ticks**, for
    the same reason `why`/`exam` cannot: `flowLeafIds` walks only the
    step > point > sub-point chain, so no checkbox id is derived from it.
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

- **No pills.** A selection is a real `<input>` — a checkbox for "any number
  of these", a radio for "exactly one" — rendered by `checkRow(items, cls,
  type)` in `common-content.js` into `.check-option` labels. Don't build a
  row of rounded `<button>`s carrying `aria-pressed`: a native control
  already states its own arity in every browser's own affordance, and brings
  the platform's keyboard handling, hit target and focus ring with it, none
  of which a styled button gets for free. `accent-color: var(--accent-text)`
  is what themes them. The quiz setup screen (course / sessions / issue
  types) and the issue page's cloze bar are the worked examples; a
  `<fieldset>`/`<legend>` groups each set. Two things are *not* a selection
  and stay buttons: an action that fires once (the 5/10/20/50
  `.quiz-spread-btn` presets, "Select all", "Reveal all"), and anything that
  navigates. The only `border-radius: 999px` left in `styles.css` is on
  progress and meter **bars** (`.exam-issue-bar`, `.quiz-progress-bar`,
  `.quiz-stat-bar`) — a rounded bar is a bar, not a pill; keep it that way
  and don't reintroduce the shape for anything clickable.
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
  `cloze` nor `flashcards` **nor `examNotes`** — an exam-notes session gets
  the button too, labelled "Test yourself", because its questions are
  derived (next bullet) rather than authored.
- **Test Yourself questions are DERIVED from the notes, never authored.**
  `examQuestionBank(code, details, sessionKey)` in `common-content.js`
  builds ~3,400 multiple-choice questions across the corpus out of content
  the issue types already carry. Same trade-off as `issueCode`, for the same
  reason: a derived bank cannot drift out of step with the notes, a newly
  authored issue type is covered the moment it lands, and — the one that
  matters most here — nothing in the generator can invent course content,
  so the no-fabrication rule is satisfied structurally rather than by
  review. **Do not add an authored `questions` section to courseDetails.**
  Four kinds, each from a different shape:
  - `spot` — a `triggers.bullets` fact pattern; which issue type is it?
  - `route` — a `triggers.routes` entry. These are the best questions in the
    bank and cost nothing, because `routes` is *already* authored as "these
    neighbouring facts mean you are on the WRONG page, and here is the right
    one": the target is the answer and the page the route is authored on is
    a deliberate distractor.
  - `trap` — a flowchart step's `exam.trap`; which mistake loses marks here?
  - `authority` — a row of an `authorities.table`; what does this establish?
  - **A stem must have exactly ONE right answer, or it is dropped.**
    `dropAmbiguous` removes any stem that resolves to two different answers.
    This is not hypothetical: the same case is often cited on several rows
    of one table for different propositions, which would make "what does
    De Monsa establish?" unanswerable.
  - **`trap` and `authority` distractors come from the stem's OWN issue
    type**, backfilled from the session only when a short flowchart or a
    two-row table cannot supply four options. Drawing them from across the
    course makes a trivial question — only one option would be on topic at
    all, so it can be picked without knowing the step or the case.
  - **An `authorities.table` only qualifies when its columns really are
    authority → effect**: three headers, the middle matching
    `AUTH_SOURCE_COL` and the last `AUTH_EFFECT_COL`. Several tables are
    Step / What is pleaded / Rule, with the authority in the *last* column,
    and must not be read backwards. **Renaming an authorities column is
    therefore a silent way to delete a whole question kind** — `verify-data.js`
    guards this with a per-kind coverage floor across sessions.
  - The caller resolves hrefs (`quiz.js` has the timetable, the content
    layer does not) — same division of labour as `examIssueListHtml`.
  - **`examQuestionBank`'s third argument is a SCOPE**: one session key, an
    array of them, `{ sessions, issues }` to narrow to particular issue
    types (keyed `"<sessionKey>/<issueId>"`), or nothing for the whole
    course; an empty list at either level means all of them. It narrows only
    what the questions are ABOUT — distractors and route targets still come
    from the whole course, because narrowing those too would make a tight
    round answerable by elimination.
    - **A `route` question scoped to one issue type answers to a DIFFERENT
      one, and that is correct.** The question is drawn from the scoped
      issue's own `routes`, and a route's whole point is that the facts
      belong somewhere else. A scope check that expects every answer to sit
      inside the scope will wrongly flag these.
  - **quiz.html is two views.** Reached with session params (the session
    button, the issue page's button, the course page's per-session links) it
    goes straight to questions. Reached bare — from the dashboard's Test
    Yourself card — it opens the setup screen, because the dashboard spans
    every course and the course is one of the things setup asks for.
    `quizSetupHtml`/`wireQuizSetup` offer course, sessions, **issue types**
    and **a slider per question type**; the choice persists under `pcll.quizSetup`, so the
    dashboard button reopens on whatever was last used. Three rules:
    - **The sliders ARE the length.** Each sets how many questions of that
      kind, and the round is their sum — so any total is reachable and there
      is no separate size to reconcile against the mix. The 5/10/20/50
      `.quiz-spread-btn` buttons are only a shortcut that spreads that many
      across the kinds
      (`spreadCounts`), rolling leftover off a capped kind onto the others.
      A slider's max is `min(available, QUIZ_KIND_MAX)`: a kind with 430
      questions behind it still needs a usable slider, and the "of N"
      readout keeps the real size visible.
    - **Sliders report on `input`, and that handler must not re-render.**
      Rebuilding the panel mid-drag pulls the thumb out from under the
      pointer, so the handler patches its own readout, the total and the
      Start button in place. Only a scope change re-renders.
    - **Never let a filter empty the bank silently.** A remembered mix is
      clamped to what the current scope can supply (`reconcile`), and one
      that clamps to nothing falls back to an even spread — so changing
      course or sessions never lands on an empty round. Start disables
      itself with an explanatory line when every slider is at zero.
    - **Only courses that actually have exam notes are offered.** PCLL8050
      has courseDetails but no `examNotes` sessions, so it is absent rather
      than offered-then-empty.
  - **One question at a time, like a flashcard.** All of the round is
    rendered up front but every card except the current one carries
    `hidden`, so stepping is a visibility change rather than a re-render —
    which is what lets the answered cards keep their marked state and all
    be unhidden together at the end. Two rules:
    - **Answering never auto-advances.** The explanation under a question
      is the most useful part of getting it wrong, and advancing on its own
      would scroll that away before it had been read. `Next` (or Enter /
      right-arrow) is always the reader's own call, and on the last
      question it reads "See results".
    - **Finishing switches the round into `is-review`**, which unhides
      every card, hides the stepper and the progress bar, and shows the
      per-card number instead. That is what the results dialog's "Review
      answers" returns you to.
  - **A finished round opens a results dialog** (`quizResults`,
    `quizResultsHtml`), wired through the shared `initDialog` like every
    other popup. It reports the score, a per-kind accuracy breakdown, the
    issue types that were missed (as links), and at most two tips. Three
    rules:
    - **Everything shown is measured from the round in front of you.** No
      score history is stored, so nothing may claim a trend, a streak or a
      "level" — there is no data for it and inventing one would be a lie
      about the reader's progress.
    - **Tips say where to look in the notes; they never state a rule of
      law.** `KIND_TIPS` points at the Fact Pattern Triggers, the routes,
      the "In the exam" blocks or the authorities cloze. A tip with legal
      content in it would be fabricated course material by the back door.
    - **Every animation ends at the resting pose, and the resting CSS
      already holds the true value** — the ring's `stroke-dashoffset` and
      each bar's `width` are set inline from the data, and the keyframes
      only supply the approach from zero (no `to` block; the implicit final
      keyframe resolves to the element's own value). So the global
      reduced-motion rule, which snaps to the FINAL keyframe, lands on the
      real figure rather than a frozen half-sweep. This is the same hazard
      as the looping-animation rule below, in a one-shot form.
  - **The celebrating raccoon appears only on a clean sweep.** The mascot
    rule below warns against inventing a completion state for the quiz just
    to hang it off — that warning was written when a round had no completion
    state at all. It has one now, and it is real, but a 7/12 is not a
    celebration, so only 100% gets the raccoon.
- **The notes can be clozed in place on the issue page.** A row of
  checkboxes (`noteClozeControlsHtml`/`wireNoteCloze`) blanks a chosen kind of content
  — Rules (`.exam-flow-detail`), Points, Traps, Model sentences,
  Authorities — and any blank reveals on click. Four rules:
  - **It is a pass over the already-rendered DOM, not a renderer option.**
    So no renderer changes, no data changes, no new checkbox ids, and it
    covers every issue type ever authored including future ones. The
    Authorities group finds its cells by reading the rendered `<thead>` with
    the same test `examQuestionBank` uses, rather than by a class the table
    renderer would have to emit.
  - **What stays visible has to be a usable prompt.** The step label
    survives when its rule is hidden, the `TRAP` tag survives when the trap
    is hidden, and the authorities table hides the *authority* column, not
    the effect column — naming the case from the proposition is the
    direction students actually lose marks on.
  - **Click interception is capture-phase with `preventDefault()`.** A
    masked flowchart point sits inside its `<label>`, so without this the
    click that reveals it would also tick the checkbox.
  - **Masked text prints revealed**, on the same reasoning as the ticks: a
    printed page of hatched boxes records nothing. The choice persists
    under `pcll.cloze`; the reveals are deliberately ephemeral.
  - **The bar is NOT sticky — don't pin it back.** It was, on the argument
    that the controls should stay reachable in a forty-row flowchart. With
    the read-aloud row beside the cloze row that is two rows of chrome
    standing between the reader and the notes for the whole of a long page,
    and the notes are what the screen is for. Both settings persist, so
    scrolling back up for them is rare. The only things still pinned on any
    page are the topbar (page chrome) and the timetable's own `.week-nav`
    and `.day-col-head`.
- **Read-aloud is a DOM pass, and the hard part is the citations.**
  `wireNoteSpeech` (`common-content.js`) injects a play button on every
  `.exam-section > h3` and every `.exam-flow-step` on the issue page, and
  reads the block's own rendered text — same pass-over-the-DOM design as the
  clozing, so no renderer, no data shape and no checkbox id changes, and
  every issue type ever authored is covered the moment it lands. Six rules:
  - **The engine is the browser's own `speechSynthesis`, deliberately.** No
    key, no network, no dependency, no cost, so it ships under the zero-build
    rule; and on the devices this is revised on (Siri voices, Microsoft
    Natural in Edge, Google TTS on Android) it is as good as anything paid.
    A cloud voice would need an API key, therefore a serverless function to
    hold it, therefore caching — and would still read the citations wrongly.
  - **`speechText(text)` in `common-core.js` is what makes it listenable.**
    Every engine, free or $180/M characters, reads "O.18 r.19(1)(a)" as "oh
    dot eighteen r dot nineteen bracket one bracket a". `speechText` runs
    `findRanges` (the `citeHtml` detector) over the raw string and hands each
    hit to `citeSpeech` — "Order 18, rule 19, paragraph 1, a" — and the prose
    between to `proseSpeech`. It runs the detector rather than reading the
    `<span class="cite">` marks already in the DOM **because the one place
    those marks are deliberately absent is where citations are densest**: a
    `statutes` quote box renders its body with `escapeHtml`, since bolding
    inside a verbatim quote would alter the quote.
  - **Chunk, don't trust the queue.** Chrome drops a *remote* voice's
    utterance after ~15 seconds (crbug 41294170), so `chunkSpeech` cuts at
    sentence, then clause, then a hard 170 characters, and each chunk is its
    own utterance chained on the previous one's `onend`. Chaining rather than
    queueing is also what makes stop exact. Two more engine quirks are
    handled in `speechSpeak` and should not be "simplified" away:
    `getVoices()` is empty on the first call in Chrome (hence `voiceschanged`),
    and `cancel()` immediately followed by `speak()` wedges the engine (hence
    the deferred start and the `resume()` before each utterance).
  - **A step reads its rule and its points, never its coaching blocks.**
    `SPEAK_SKIP` excludes `.exam-coach`: the `why`/`exam` blocks are
    collapsed on screen and are not part of the step's work, so reading them
    aloud would not match what is displayed.
  - **Clozed text is spoken in full**, on exactly the reasoning that makes
    masked text print revealed — a page read aloud as a row of blanks records
    nothing either, and you have to press play deliberately.
  - **No page player, and no word-level highlight.** The unit is always the
    block whose button was pressed. A highlight would mean wrapping new spans
    inside the very text the cloze pass also rewrites; the block-level
    `.is-being-read` tint needs one class and no DOM surgery. The lit button
    keys off `--accent-text`, not `--accent`, for the dark-mode reason given
    further down.
- **Don't write copy that the interface already says.** A line telling the
  reader that every session ticked means the whole course, or that they
  should pick an answer to continue, or to tap a node to open it, is read
  once and then in the way forever. A sentence earns its place only by
  carrying a fact the reader cannot see — "Saved on this device only" stays
  for exactly that reason, and so do empty states. The same instinct that
  took the summaries off the issue index applies to prose everywhere.
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
- **The typeface is Quire Sans, self-hosted from `fonts/*.woff2`.** The
  `@font-face` block at the top of `styles.css` declares all nine weight/
  style combinations under one `font-family: 'Quire Sans'` name, and
  `body{}` is the only place that names it (every other selector inherits).
  The source TTFs (in the original upload, not the repo) name three of the
  weights as their OWN family — `Quire Sans Light`, `Quire Sans SemiBold`,
  `Quire Sans Black` — because that is how this static-TTF family ships;
  only Regular/Bold/Italic/Bold Italic share the "Quire Sans" name
  internally. That internal name is irrelevant to `@font-face` when serving
  via `src: url()` (it only matters for `local()` lookups of an
  OS-installed font), so every weight is declared here under the one name
  regardless of what its file calls itself, and the rest of the site just
  asks for a `font-weight`. Files are `.woff2` (converted from the
  uploaded `.ttf`s with `fontTools`, ~70% smaller; no TTF fallback needed
  since the site's own CSS already assumes an evergreen browser via
  `color-mix()`). `scripts/dev-server.js`'s MIME map needs its own
  `.woff2` entry — Vercel's static file serving sets it automatically, but
  the local dev server doesn't guess by extension.
- **Headings are sized to actually look like headings**, which they did
  not before: several were smaller than, or the same size as, the 1rem
  body text they introduced (`.exam-section h3` — "Fact Pattern Triggers",
  "Answering Flowchart" — was 0.85rem; `.session-detail-body h4` was
  0.8rem; `.course-section h2`/`.dash-section h2` were 0.95rem), so a
  heading read as a bolded label rather than a break in the page. The
  scale now runs h1 1.5rem → the issue type's own h2 (`#issueTitle`) 1.7rem
  → generic section h2 1.2rem → h3 1.25rem → h4 1.05rem, all weight 700.
  The issue heading is the ONE heading bigger than the topbar's own h1,
  because it is the page's real subject (see the next bullet on why it has
  to be keyed to the id) — the topbar carries the session, not the issue.
  Small-caps-style eyebrow labels implemented as a heading tag for
  semantics (`.exam-index-session`, `.exam-route-heading`,
  `.quiz-topic-heading`) are deliberately NOT part of this scale — they are
  list-group/inline labels, not a break in the reading flow, and stay at
  their own small explicit size.
  - **A descendant selector can silently outrank a single class**, which is
    what happened to the issue heading: `.course-section h2` (a class + a
    type, specificity 0,1,1) beat `.issue-heading` (one class, 0,1,0) for
    every property they both set, regardless of source order or which one
    looks more specific to a reader. The fix was to key the rule to
    `#issueTitle` instead (an id always wins). Reach for an id selector —
    already used sparingly here (`#app`, `#dashboardBody`,
    `#assessmentTableBody`) — whenever a heading needs to escape a
    same-specificity descendant rule rather than adding `!important`.
- **Text size is one CSS declaration, because every font-size is in `rem`.**
  `initFontScale(btn)` (`common-core.js`) cycles `:root`'s `data-font-scale`
  through normal → large → larger, persisted under `pcll.fontScale`, and
  `styles.css` turns that into `font-size: 112.5%` / `125%` on `:root`.
  Three rules if you touch it:
  - **Keep new font sizes in `rem`.** A single `px` font-size is a line of
    text that silently refuses to scale. There are currently none.
  - **The scales are percentages, never px.** A percentage multiplies the
    reader's own browser font size, so someone who has already set 20px
    keeps that as their "normal"; a px value would throw their setting away,
    which is the opposite of what the control is for.
  - **It is applied in the same pre-stylesheet IIFE as the theme**, and
    reset to 100% in the `@media print` block on the same reasoning that
    block resets the dark theme: paper is a fixed artefact and should not
    inherit a choice made for a backlit screen.
  Spacing stays in `px` and deliberately does not scale — the reading column
  tightens rather than the whole layout inflating, which is what keeps a
  40-row flowchart from doubling in height.
- **Anything that sits under the topbar reads `--topbar-h`, never a
  literal.** `trackTopbarHeight` (`common-core.js`) publishes the bar's
  measured height on `:root` via a `ResizeObserver`, because that height
  moves with the text size, the viewport width and a title that wraps —
  the timetable's sticky `.week-nav` used to hard-code `top: 58px` against a
  bar that is 64px on a desktop and over 120px at phone width, and tucked
  under it. CSS cannot measure an element, so the number has to come from
  the DOM.
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
     It also builds the derived Test Yourself bank for every exam-notes
     session and samples rounds out of it, asserting four options, exactly
     one right answer and no duplicates — plus a per-kind coverage floor
     across sessions, which is the only thing that notices when a whole
     question kind stops being generated (rename the "Authority" column in
     the tables and the authority questions just quietly stop appearing).
   - `verify-pages.js` — page wiring. All six pages load the same scripts
     in the required order, every `courseDetails/*.js` on disk is on every
     page, every DOM id a page's scripts look up is declared by that page,
     and `COURSE_COLORS` matches `api/timetable.js`'s `COURSES` exactly.
   - `verify-parser.js` — `lib/parseTimetable.js` and `lib/xlsxLite.js`
     against hand-built fixtures. This is what those modules' otherwise
     unused exports are for.
   When adding a check, make it fail on purpose first — a check that can't
   fail is worse than none, because it reads as coverage.
   Bulk-editing courseDetails by script is normal here (they are too big to
   hand-edit reliably), and the failure mode is silent: a patcher that finds
   its anchor by searching FORWARD from an issue's `id:` will happily walk
   past the end of that issue when the key it wants is absent, and overwrite
   the same-named array in a later section. That is how a `triggers.bullets`
   rewrite once ate an issue type's `skills` list. Bound every such search to
   the next `id: '` AND fail the whole run if any target is missing rather
   than patching what was found; then diff every OTHER section against
   `git show HEAD:` afterwards and require that nothing but the intended key
   changed. `npm test` caught that one, which is the argument for the suite.
3. Then start the dev server (`npm run dev`) and write a throwaway
   Playwright script in the scratchpad dir to click through the change —
   screenshot both light and dark themes, check for console errors.
   `npm test` deliberately covers none of this: layout, contrast and print
   rendering still need a real browser. One trap in this container:
   `playwright-core` isn't a dependency of this repo (install it in the
   scratchpad, `--no-save`). `waitUntil: 'networkidle'` is fine to use now
   that fonts are self-hosted (see "Fonts and headings" below) — it used to
   hang on the Google Fonts request, which is why older scripts in this repo
   abort `fonts.g*` routes and wait on `#status` instead; that workaround is
   no longer necessary but harmless if copied.
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
