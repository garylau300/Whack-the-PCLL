# Whack the PCLL — Timetable (Group 11)

An interactive timetable for HKU's PCLL programme, built for Group 11. It's a
zero-build static site backed by one Vercel serverless function that parses
HKU's official Google Sheet **live on every request** — no manual copy to go
stale, no redeploy needed when the sheet changes.

## How it works

- `api/timetable.js` fetches the published timetable workbook
  (`.../export?format=xlsx`) and parses it with a small dependency-free XLSX
  reader (`lib/xlsxLite.js` — avoids the `xlsx` npm package, whose registry
  build carries unpatched security advisories).
- `lib/parseTimetable.js` walks each week's free-form layout (whole-cohort
  webinars/LGs and small-group breakouts stacked per weekday column), resolves
  Group 11's specific room/instructor wherever the sheet lists every group's
  breakout (groups pair as N / N+13, so Group 11 pairs with Group 24), and
  classifies each session's free text into structured fields (No. / Topic /
  Venue / Instructor) rather than leaving it as a raw text dump. A small-group
  session listed for other groups (not Group 11's) is still surfaced — with
  the full listing — but tagged `scope: "other-group"` so the UI can grey it
  out instead of hiding it.
- The response is cached at the edge for ~6 hours (`stale-while-revalidate`),
  so it stays fast while self-updating in the background. Use the "Refresh
  now" button (or `/api/timetable?fresh=1`) to force an immediate re-sync.
- **`index.html`** (`dashboard.js`) is the homepage: today's own classes,
  a rule-based "what to do today" checklist, this week's pre-recorded videos
  (cross-referencing each one's "before LGx/SGx" hint against this week's
  actual live sessions to resolve a real "Watch before {day}" deadline where
  possible, falling back to the raw hint otherwise), a "this week — watch out
  for" scan across the current week for assessments/exams/hand-ins/court
  attendance/holidays, a compact Mon–Sat strip for the week, and a
  Legal Skill of the Day (see below). All derived client-side from the same
  live `/api/timetable` response — no extra backend calls.
- **`timetable.html`** (`app.js`) is the full week-grid/day-view timetable,
  with the settings panel to filter elective sessions once you know your 3
  choices (saved in your browser only).
- Any session with a course code is clickable, linking to `course.html?code=`
  that course — a per-course page (`course.js`) listing every session for it
  across the whole programme as a compact table (Date / Time / No. / Topic /
  Venue / Who), with the same "your group" / "other group" highlighting, plus
  that course's pre-recorded LGs interleaved in by week (each sheet lists
  these above the "Week N" row — `extractPreRecorded` in
  `lib/parseTimetable.js` pulls the code, topic, its own LG number(s) — a
  regex pass over the topic text, since it's often mid-sentence ("...Post
  LG2 Supplement...") rather than a clean prefix, so it's additive and never
  rewrites the topic — the watch-before/after hint, and instructor out of
  them). It's built as one `<section class="course-section">` among others
  still to come (assessment methods, course materials).
- Shared rendering (event cards, date/time formatting, the elective-filter
  settings panel, the light/dark toggle) lives in `common.js`, loaded by
  every page. Light is the default theme; dark only applies once a visitor
  explicitly toggles it (persisted per-browser).
- `legalSkills.js` is a static, hand-written set of legal-skills tips (a
  Socratic question, an IRAC-structure reminder, a practical skill tip per
  PCLL core course), modeled on the categories in Anthropic's
  [`claude-for-legal`](https://github.com/anthropics/claude-for-legal) repo —
  specifically its `law-student` plugin. That repo is a Claude Code
  plugin/skill marketplace (slash commands run inside a Claude session), not
  a public API, so this content is written once rather than fetched live; the
  dashboard picks whichever tip matches today's actual classes.

## Running locally

```
npm run dev
```

Serves the site and the API at http://localhost:3000.

## Deploying

Zero config — connect the repo to Vercel. `index.html` etc. are served as a
static site; `api/timetable.js` is auto-detected as a serverless function.

## Updating for a new term / if HKU restructures the sheet

The parser assumes: one tab per week, a `Week N` label in column A with
weekday headers across the row, dates on the next row, and free-form session
blocks below (a time range like `9:00 - 11:00 a.m.` opens a new session;
`Gp <n> / <m> - <venue> - <instructor>` lines are per-group breakouts). If
HKU changes the sheet's structure, adjust `lib/parseTimetable.js` — it's
independent of the frontend and unit-testable by feeding it a saved grid.

If Gary's group number ever changes, update `GROUP` / `PAIRED_GROUP` in
`api/timetable.js`.
