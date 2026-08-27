'use strict';

// Parses HKU PCLL's weekly timetable sheets (one tab per week, free-form
// merged-cell layout — see README for the shape) into structured events,
// resolving small-group breakouts down to a single group number.

const MONTHS = {
  jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
  jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
};

const DAY_NAMES = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];

// e.g. "12:45 - 2:45 p.m.(Gps 1-13)" / "9:00 a.m.- 6:00 p.m." / "10:30 a.m. - 12:00 noon"
const TIME_RANGE_RE =
  /^\s*(\d{1,2}(?::\d{2})?)\s*(a\.m\.|p\.m\.)?\s*-\s*(\d{1,2}(?::\d{2})?)\s*(a\.m\.|p\.m\.|noon)\s*(?:\(([^)]*)\))?\s*$/i;

const ASTERISK_RE = /^[\s*]+$/;
const GROUP_LINE_RE = /Gp\.?\s*(\d{1,2})\s*(?:\/\s*(\d{1,2}))?\s*[:\-–]\s*(.+)/i;
const COURSE_CODE_RE = /PCLL\s*\d{3,4}/i;

function to24h(time, meridiem) {
  if (/noon/i.test(meridiem || '')) return '12:00';
  let [h, m] = time.split(':').map((x) => parseInt(x, 10));
  m = m || 0;
  if (/p\.m\./i.test(meridiem || '') && h !== 12) h += 12;
  if (/a\.m\./i.test(meridiem || '') && h === 12) h = 0;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

function parseTimeRange(text) {
  const m = TIME_RANGE_RE.exec(text.trim());
  if (!m) return null;
  const [, startTime, startMer, endTime, endMer, groupsText] = m;
  // Meridiem is often only stated once, on the end time — apply it to the
  // start time too unless the start already carries its own.
  const endMeridiem = /noon/i.test(endMer) ? 'p.m.' : endMer;
  const startMeridiem = startMer || endMeridiem;
  return {
    start: to24h(startTime, startMeridiem),
    end: to24h(endTime, endMer),
    label: text.trim(),
    groupRanges: groupsText ? parseGroupRanges(groupsText) : null,
  };
}

// "Gps 1-13", "Gps 1-7, 14", "Gp 5" -> [[1,13]] / [[1,7],[14,14]] / [[5,5]]
function parseGroupRanges(text) {
  const ranges = [];
  const re = /(\d{1,2})\s*-\s*(\d{1,2})|(\d{1,2})/g;
  let m;
  while ((m = re.exec(text))) {
    if (m[1] !== undefined) ranges.push([parseInt(m[1], 10), parseInt(m[2], 10)]);
    else ranges.push([parseInt(m[3], 10), parseInt(m[3], 10)]);
  }
  return ranges;
}

function rangesContain(ranges, n) {
  return ranges.some(([a, b]) => n >= a && n <= b);
}

function cellText(grid, row, col) {
  return ((grid[row] || [])[col] || '').toString().trim();
}

// Find the nearest non-empty column-A label at or above `row` — used purely
// as a human-friendly category ("Full-time Webinar / Live LGs / Meetings",
// "Full-time Face-to-Face SGs", "Pre-recorded LGs", ...).
function sectionLabelAbove(grid, row) {
  for (let r = row; r >= 1; r--) {
    const t = cellText(grid, r, 1);
    if (t) return t;
  }
  return null;
}

function inferYear(semesterText, monthAbbrev) {
  const m = /(\d{4})\s*-\s*(\d{4})/.exec(semesterText || '');
  if (!m) return null;
  const [, y1, y2] = m;
  const month = MONTHS[monthAbbrev.toLowerCase()];
  // First semester runs roughly Aug-Dec (y1), Second Jan-Jul (y2).
  return month >= 7 ? parseInt(y1, 10) : parseInt(y2, 10);
}

function parseDateCell(text, semesterText) {
  const m = /^([A-Za-z]{3,})\s+(\d{1,2})$/.exec(text.trim());
  if (!m) return null;
  const [, monAbbrev, day] = m;
  const monthKey = monAbbrev.slice(0, 3).toLowerCase();
  const month = MONTHS[monthKey];
  if (month === undefined) return null;
  const year = inferYear(semesterText, monthKey);
  if (!year) return null;
  const dt = new Date(Date.UTC(year, month, parseInt(day, 10)));
  return dt.toISOString().slice(0, 10);
}

// Extract one week-tab's grid into { week, semester, days: [...] }.
function extractWeek(grid, maxRow, opts) {
  const semesterText = cellText(grid, 3, 1);
  const semester = /SECOND SEMESTER/i.test(semesterText) ? 2 : 1;

  let weekHeaderRow = null;
  let weekNumber = null;
  for (let r = 1; r <= maxRow; r++) {
    const t = cellText(grid, r, 1);
    const m = /^Week\s+(\d+)/i.exec(t);
    if (m) {
      weekHeaderRow = r;
      weekNumber = parseInt(m[1], 10);
      break;
    }
  }
  if (weekHeaderRow === null) return null;

  const dateRow = weekHeaderRow + 1;
  const days = [];
  for (let col = 2; col <= 7; col++) {
    const dayName = cellText(grid, weekHeaderRow, col).toUpperCase();
    if (!DAY_NAMES.includes(dayName)) continue;
    const dateText = cellText(grid, dateRow, col);
    const date = parseDateCell(dateText, semesterText);
    days.push({ col, day: dayName[0] + dayName.slice(1).toLowerCase(), date, events: [] });
  }

  const bodyStart = dateRow + 1;
  const bodyEnd = Math.min(maxRow, dateRow + 120);

  for (const day of days) {
    const col = day.col;
    let block = null;
    const blocks = [];

    const closeBlock = () => {
      if (block) blocks.push(block);
      block = null;
    };

    for (let r = bodyStart; r <= bodyEnd; r++) {
      const text = cellText(grid, r, col);
      if (!text) continue;
      if (ASTERISK_RE.test(text) && /\*/.test(text)) {
        closeBlock();
        continue;
      }
      const timeRange = parseTimeRange(text);
      if (timeRange) {
        if (block && block.lines.length === 0) {
          // A second (or third) time-range row stacked directly above the
          // actual content, e.g. two SG slots "(Gps 1-7)" / "(Gps 14-20)"
          // sharing one course/room block below — same session, more than
          // one time option, not a new session yet.
          block.timeOptions.push(timeRange);
        } else {
          closeBlock();
          block = { startRow: r, timeOptions: [timeRange], lines: [] };
        }
        continue;
      }
      if (!block) {
        // Stray text with no open time block (rare) — start an untimed block.
        block = { startRow: r, timeOptions: [], lines: [] };
      }
      block.lines.push(text);
    }
    closeBlock();

    for (const b of blocks) {
      day.events.push(...blockToEvents(b, grid, opts));
    }
  }

  return { week: weekNumber, semester, days };
}

// A block can carry more than one time option (e.g. two SG slots stacked
// above one shared room/group list — "(Gps 1-7)" then "(Gps 14-20)"). Pick
// the option whose own group-range actually contains this group number;
// group N's real time slot is determined by that range, not by which row
// the "Gp N / M" line happened to be transcribed under.
function resolveTime(timeOptions, groupNumber) {
  if (timeOptions.length === 0) return { start: null, end: null, label: null };
  if (groupNumber != null) {
    const match = timeOptions.find((t) => t.groupRanges && rangesContain(t.groupRanges, groupNumber));
    if (match) return match;
  }
  return timeOptions[0];
}

function blockToEvents(block, grid, opts) {
  const { group, pairedGroup } = opts;
  const sectionKind = sectionLabelAbove(grid, block.startRow) || '';

  const groupLineIdx = block.lines.findIndex((line) => {
    const m = GROUP_LINE_RE.exec(line);
    if (!m) return false;
    const n1 = parseInt(m[1], 10);
    const n2 = m[2] ? parseInt(m[2], 10) : null;
    return n1 === group || n2 === group || n1 === pairedGroup || n2 === pairedGroup;
  });

  const codeMatch = block.lines.find((l) => COURSE_CODE_RE.test(l));
  const code = codeMatch ? COURSE_CODE_RE.exec(codeMatch)[0].replace(/\s+/g, '') : null;

  if (groupLineIdx === -1) {
    // No per-group breakdown in this block — whole-cohort session (or a
    // breakdown by something other than numbered group, e.g. a future
    // elective split). Surface it all so nothing is silently hidden.
    if (block.lines.length === 0) return [];
    const primary = block.timeOptions[0] || null;
    return [
      {
        start: primary ? primary.start : null,
        end: primary ? primary.end : null,
        timeLabel: block.timeOptions.map((t) => t.label).join(' / ') || null,
        code,
        lines: block.lines,
        section: sectionKind,
        scope: 'all',
      },
    ];
  }

  const groupLine = block.lines[groupLineIdx];
  const gm = GROUP_LINE_RE.exec(groupLine);
  const n1 = parseInt(gm[1], 10);
  const n2 = gm[2] ? parseInt(gm[2], 10) : null;
  const myNumber = n1 === group || n1 === pairedGroup ? n1 : n2;
  const detail = gm[3].trim();
  const headerLines = block.lines.slice(0, groupLineIdx).filter((l) => !GROUP_LINE_RE.test(l));

  const { start, end } = resolveTime(block.timeOptions, myNumber);

  return [
    {
      start,
      end,
      code,
      lines: headerLines,
      detail,
      section: sectionKind,
      scope: 'group',
    },
  ];
}

function buildTimetable(workbook, opts) {
  const { group, pairedGroup, courses } = opts;
  const weeks = [];
  for (const name of workbook.sheetNames) {
    const { grid, maxRow } = workbook.getSheetGrid(name);
    const week = extractWeek(grid, maxRow, { group, pairedGroup });
    if (week) weeks.push(week);
  }
  weeks.sort((a, b) => a.week - b.week);
  return {
    meta: {
      group,
      pairedGroup,
      syncedAt: new Date().toISOString(),
      courses: courses || {},
    },
    weeks,
  };
}

module.exports = { buildTimetable, extractWeek, parseTimeRange, parseGroupRanges, rangesContain };
