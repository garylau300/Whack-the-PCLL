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
- `index.html` / `styles.css` / `app.js` render the data: a week grid, a
  mobile day view, and a settings panel to filter elective sessions once you
  know your 3 choices (saved in your browser only).

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
