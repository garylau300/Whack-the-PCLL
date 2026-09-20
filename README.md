# Whack the PCLL (Group 11)

A study portal for HKU's PCLL, built for Group 11. Two halves that meet on
the same page:

- a **live timetable** — one Vercel serverless function parses HKU's official
  Google Sheet on request, so nothing is copied by hand and nothing goes
  stale; and
- **exam notes** — hand-authored, per-course, organised by the issue types
  that actually come up in a problem question, hung off the sessions the
  timetable already knows about.

It's a zero-build static site: plain HTML/CSS/JS, no bundler, no framework,
no client dependencies. ESLint and Prettier are dev-only.

`CLAUDE.md` is the companion to this file: this one is *what the code does*,
that one is *the conventions and rules for changing it*.

## The timetable half

- **`api/timetable.js`** fetches the published workbook
  (`.../export?format=xlsx`) and parses it with a small dependency-free XLSX
  reader (`lib/xlsxLite.js` — which exists to avoid the `xlsx` npm package,
  whose registry build carries unpatched prototype-pollution/ReDoS
  advisories).

  Roughly where the time goes on a cold request: **~530ms** fetching from
  Google, **~70ms** parsing 21 week-tabs, for a **~75KB** JSON response.
  Most of what a naive parse costs is avoidable — Sheets pads its export out
  to the sheet's full declared grid, so a week tab holds 25,859
  styled-but-empty cells against 123 that carry anything, and skipping those
  is worth about 6x on the parse alone.

- **`lib/parseTimetable.js`** walks each week's free-form layout
  (whole-cohort webinars/LGs and small-group breakouts stacked per weekday
  column) and turns it into structured events. The interesting part is
  resolving *this* student's session out of a sheet that lists every group's:
  groups pair as N / N+13, so Group 11 pairs with Group 24. Each session's
  free text is classified into No. / Topic / Venue / Instructor rather than
  left as a text dump. A breakout listed for other groups is still
  surfaced — with the full listing — but tagged `scope: "other-group"` so the
  UI can grey it out instead of hiding it.

  Nearly every regex in that file is there because HKU's sheet does something
  irregular, and each one carries a comment saying which irregularity. It has
  no frontend dependency and is unit-tested by `scripts/verify-parser.js`.

- **Caching, three layers deep**, because the sheet changes far less often
  than people load the page:
  - the response is cached at the edge for ~6 hours (`Cache-Control:
    s-maxage` / `stale-while-revalidate`);
  - `api/timetable.js` keeps an in-memory copy with the same TTL, so a warm
    container answers a repeat request in ~1ms without re-fetching — and
    serves that last-known-good copy if Google Sheets ever fails, rather than
    erroring out;
  - on the client, `loadTimetable()` in `common-core.js` mirrors the pattern
    in `localStorage`: cached data renders instantly, then a background fetch
    quietly upgrades it, so moving between pages never shows a loading
    screen once you've synced once.

  "Refresh now" (or `/api/timetable?fresh=1`) forces a re-sync end to end.

## The notes half

- **`courseDetails/PCLL8010.js`** and friends — one file per course, each
  extending the same `window.COURSE_DETAILS`. This is where all authored
  content lives: course info, assessment structure, materials, and per-session
  notes.
- A session's notes are authored as **exam notes**: a list of *issue types*,
  each its own addressable page (`issue.html?...&issue=<id>`). An issue type
  carries the triggers that tell you you're on the right page, an answering
  flowchart, things to look out for, common mistakes, a model-answer skeleton
  and its key authorities. The answering flowchart is a three-level checklist
  (step > point > sub-point) that remembers what you've ticked, and every step
  carries two collapsed coaching blocks: *why* the rule is shaped that way,
  and what to *write* in the exam plus the *trap* at that step.
- Issue types get a derived code — `CIV-4.11` — built from the course
  prefix, session key and position. Derived, never authored, so it can't drift
  out of step with the notes.
- Notes cross-link. `crossRefs` says "this is also dealt with over there";
  `routes` says "if the facts look like *this*, you're on the wrong page, go
  here". Both resolve through the live timetable, and degrade to plain text
  rather than a dead link if a target moves.
- **You can test yourself on any of it, and none of the questions were
  written by hand.** A session's Test Yourself page builds a multiple-choice
  round out of the notes themselves: a fact pattern and "which issue type is
  this?", a `routes` entry and "which one actually deals with it?" (that one
  comes free — a route is *already* authored as a near-miss, so the page it
  sits on is a ready-made wrong answer), a flowchart step and "which mistake
  loses marks here?", a case and "what does it establish?". Around 3,400
  questions across the four courses, and a new issue type is covered the
  moment it's authored. Wrong answers for the last two kinds are drawn from
  the same issue type, so you have to know which step or which case — not
  merely which topic. Finish a round and you get a results card: the score,
  which of the four kinds you were weak on, the issue types you missed as
  links straight back to them, and a tip or two on where in the notes to go
  next. Nothing is stored between rounds, so it only ever reports on the
  round you just did.
- The notes can also be **clozed in place**: on an issue page, hide the
  rules, the checklist points, the traps, the model sentences or the case
  names, and click any blank to reveal it. What's left is the prompt — the
  step label stays when its rule goes, the authorities table keeps the
  proposition and hides the case.
- Two earlier formats are still supported alongside it: an interactive
  mindmap (`legalIssues`), used by three sessions that predate exam notes and
  deliberately left as they are, and a flat accordion (`fullNotes`), which
  nothing currently authors — the renderer is still there, but no data
  reaches it.

## Pages

| Page | Script | What it is |
| --- | --- | --- |
| `index.html` | `dashboard.js` | Today's classes, a rule-based "what to do today", this week's pre-recorded videos, upcoming deadlines, a week strip, a Legal Skill of the Day |
| `timetable.html` | `app.js` | The full week-grid / day-view timetable, plus the settings panel for filtering electives |
| `course.html` | `course.js` | One course: info, assessment, the course-wide issue-type roll-up, homework, every session across the programme, materials |
| `session.html` | `session.js` | One session's own page — real and linkable, never a modal |
| `quiz.html` | `quiz.js` | Test Yourself — a multiple-choice round derived from that session's exam notes; falls back to authored cloze/flashcards for the older mindmap sessions |
| `issue.html` | `issue.js` | One issue type's notes, with the checklist and a print button |

Shared logic is split across three files that **must load in that order** —
`common-core.js` → `common-content.js` → `common-session.js` — because each
merges its exports into `window.PCLL` and the dependency runs one way only.

A few things worth knowing:

- **Printing is a stylesheet, not a library.** `issue.html`'s print button
  calls `window.print()`; "Save as PDF" is a destination in the browser's own
  print dialog. How the page prints lives entirely in the `@media print`
  block at the foot of `styles.css`.
- Light is the default theme; dark applies only once you toggle it
  (persisted per browser). The **Aa** button beside it cycles the text
  through three sizes — every font-size in the stylesheet is in `rem`, so
  that is one declaration on `:root` rather than a per-element override, and
  it is a percentage so it multiplies whatever size the reader's browser is
  already set to. Both settings are reset for printing.
- Statutory and case references are detected and highlighted automatically —
  nothing in `courseDetails` carries markup for it.
- The typeface (Quire Sans) is self-hosted from `fonts/*.woff2` — no CDN
  request, so there's no third-party font stylesheet in the loading path at
  all. Each page preloads the Regular weight it needs for body text; every
  other weight/style loads lazily, only if something on that page actually
  uses it.
- `legalSkills.js` is a static, hand-written set of legal-skills tips,
  modelled on the categories in Anthropic's
  [`claude-for-legal`](https://github.com/anthropics/claude-for-legal) repo —
  specifically its `law-student` plugin. That repo is a Claude Code plugin
  marketplace, not a public API, so the content is written once rather than
  fetched; the dashboard picks whichever tip matches today's classes.

## Running locally

```
npm install     # dev-only: eslint, prettier
npm run dev     # site + API at http://localhost:3000
```

## Checks

```
npm run check   # node --check every tracked .js
npm run lint    # eslint
npm test        # the four verify-*.js scripts below
```

`npm test` is four plain Node programs under `scripts/` — no test framework,
same reasoning as the site having no bundler. They catch the cross-file
mistakes that produce no error anywhere:

- **`verify-data.js`** — a note section whose key the renderer doesn't know
  (silently dropped), a `crossRefs` entry pointing at a renamed issue id
  (silently degraded to prose), two identically worded rows under one step
  (silently sharing one checkbox). It also derives every checkbox id a third
  time, from the data, and requires `flowLeafIds` and the rendered markup to
  agree — they walk the same tree in two files that can't call each other.
- **`verify-pages.js`** — all six pages load the same scripts in the required
  order, every `courseDetails/*.js` is on every page, every DOM id a script
  reaches for is declared by that page, `COURSE_COLORS` matches the API's
  course list.
- **`verify-parser.js`** — `lib/parseTimetable.js` and `lib/xlsxLite.js`
  against hand-built fixtures.
- **`verify-styles.js`** — brace balance, and two motion rules: the
  `prefers-reduced-motion` block must neutralise delays and not just
  durations, and a looping animation's keyframes must start *and* end at the
  resting pose (that block collapses an animation to one 0.001ms run, which
  snaps the element to its final keyframe).

CI runs all of it on every push. Nothing here needs a browser, which is what
keeps it fast — so layout, contrast and print rendering are still checked by
hand with a throwaway Playwright script. See CLAUDE.md's verification
workflow.

## Deploying

Zero config — connect the repo to Vercel. `index.html` and friends are served
statically; `api/timetable.js` is auto-detected as a serverless function.

## Updating for a new term / if HKU restructures the sheet

The parser assumes: one tab per week, a `Week N` label in column A with
weekday headers across the row, dates on the next row, and free-form session
blocks below (a time range like `9:00 - 11:00 a.m.` opens a new session;
`Gp <n> / <m> - <venue> - <instructor>` lines are per-group breakouts). If HKU
changes that shape, `lib/parseTimetable.js` is the only file to touch —
start by adding a fixture to `scripts/verify-parser.js` for the new shape.

If the group number changes, update `GROUP` / `PAIRED_GROUP` in
`api/timetable.js`. A new course needs a file in `courseDetails/`, a
`<script>` on all six pages, a `codePrefix`, a `COURSE_COLORS` hue and an
entry in the API's `COURSES` map — `npm test` will tell you which of those you
forgot.
