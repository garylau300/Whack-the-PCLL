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

// "LG1: ...", "SG11:...", "LG1A: ..." — the session's own label/number.
const LG_SG_NO_RE = /^(LG|SG)\s*(\d+[A-Za-z]?)\b\s*[:\-–]?\s*(.*)$/i;
// A line naming/containing a venue, anywhere in HKU's free text for this sheet.
const VENUE_HINT_RE = /theatre|zoom|\bcct\s*\d|\broom\b|\bonline\b|\blibrary\b|\bcourt\b/i;
// Trailing "(A)" / "(B)" on a course-name line, e.g. "Civil Litigation (B)".
const SECTION_SUFFIX_RE = /\(([A-Za-z])\)\s*$/;
// A short initials-only line ("JJ", "CYip", "CYip / XF", "EChang/BChan") that
// — when immediately followed by a venue line — is the instructor for it.
// Real instructor initials on this sheet run 2-6 chars per name (JJ, AN, SL,
// DDR, CYip, EChang, GFung, ...) — capped short so a wrapped topic word like
// "Businesses" or "applications" can't be mistaken for one.
const SHORT_NAME_RE = /^[A-Za-z][A-Za-z.]{0,5}(?:\s*[/,]\s*[A-Za-z][A-Za-z.]{0,5})*$/;

// Turn a block's free-text description lines into structured fields, so the
// UI can show "No. / Topic / Venue / Instructor" instead of a raw text dump.
// Also drops the lines that just repeat data already shown elsewhere (the
// bare course code, and the course name — keeping only its "(A)"/"(B)" part
// suffix if present).
function classifyLines(lines, code, courseName) {
  const cleaned = lines.map((l) => l.trim()).filter(Boolean);
  const courseNameLower = courseName ? courseName.toLowerCase() : null;
  let no = null;
  let part = null;
  let venue = null;
  let instructor = null;
  const topicParts = [];

  for (let i = 0; i < cleaned.length; i++) {
    const line = cleaned[i];
    if (code && line.replace(/\s+/g, '').toUpperCase() === code.replace(/\s+/g, '').toUpperCase()) continue;
    if (courseNameLower && line.toLowerCase().startsWith(courseNameLower.slice(0, Math.min(10, courseNameLower.length)))) {
      const m = SECTION_SUFFIX_RE.exec(line);
      if (m) part = m[1].toUpperCase();
      continue;
    }
    if (!no) {
      const lgm = LG_SG_NO_RE.exec(line);
      if (lgm) {
        no = lgm[1].toUpperCase() + lgm[2];
        if (lgm[3]) topicParts.push(lgm[3].trim());
        continue;
      }
    }
    if (!venue && VENUE_HINT_RE.test(line)) {
      const parts = line.split(/\s+-\s+/);
      if (parts.length === 2 && VENUE_HINT_RE.test(parts[0]) !== VENUE_HINT_RE.test(parts[1])) {
        const [a, b] = parts;
        if (VENUE_HINT_RE.test(a)) { venue = a.trim(); instructor = instructor || b.trim(); }
        else { venue = b.trim(); instructor = instructor || a.trim(); }
      } else {
        venue = line;
      }
      continue;
    }
    if (!instructor && !venue && SHORT_NAME_RE.test(line) && cleaned[i + 1] && VENUE_HINT_RE.test(cleaned[i + 1])) {
      instructor = line;
      continue;
    }
    topicParts.push(line);
  }

  return { no, topic: topicParts.join(' ').trim() || null, part, venue, instructor };
}

// The small-group listing's trailing text is consistently "<room> - <instructor(s)>".
function splitDetail(detail) {
  if (!detail) return { venue: null, instructor: null };
  const parts = detail.split(/\s+-\s+/);
  if (parts.length >= 2) return { venue: parts[0].trim(), instructor: parts.slice(1).join(' - ').trim() };
  return { venue: detail.trim(), instructor: null };
}

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
  const { group, pairedGroup, courses } = opts;
  const category = sectionLabelAbove(grid, block.startRow) || '';

  const groupLineIdx = block.lines.findIndex((line) => {
    const m = GROUP_LINE_RE.exec(line);
    if (!m) return false;
    const n1 = parseInt(m[1], 10);
    const n2 = m[2] ? parseInt(m[2], 10) : null;
    return n1 === group || n2 === group || n1 === pairedGroup || n2 === pairedGroup;
  });

  const codeMatch = block.lines.find((l) => COURSE_CODE_RE.test(l));
  const code = codeMatch ? COURSE_CODE_RE.exec(codeMatch)[0].replace(/\s+/g, '') : null;
  const courseName = code ? (courses || {})[code] : null;

  if (groupLineIdx === -1) {
    if (block.lines.length === 0) return [];
    // Distinguish a genuine whole-cohort session from a small-group listing
    // that just doesn't happen to include this group (e.g. a room/day the
    // student isn't part of) — the latter is greyed out client-side. Only
    // the lines *before* the group listing describe the session itself
    // (course/topic); the listing rows themselves aren't prose to classify
    // into venue/instructor — kept as-is for optional display.
    const firstGroupLineIdx = block.lines.findIndex((l) => GROUP_LINE_RE.test(l));
    const isOtherGroupsBreakdown = firstGroupLineIdx !== -1;
    const headerLines = isOtherGroupsBreakdown ? block.lines.slice(0, firstGroupLineIdx) : block.lines;
    const otherGroups = isOtherGroupsBreakdown
      ? block.lines.slice(firstGroupLineIdx).filter((l) => GROUP_LINE_RE.test(l))
      : undefined;
    const primary = block.timeOptions[0] || null;
    const fields = classifyLines(headerLines, code, courseName);
    return [
      {
        start: primary ? primary.start : null,
        end: primary ? primary.end : null,
        timeLabel: block.timeOptions.map((t) => t.label).join(' / ') || null,
        code,
        ...fields,
        otherGroups,
        category,
        scope: isOtherGroupsBreakdown ? 'other-group' : 'all',
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
  const fields = classifyLines(headerLines, code, courseName);
  const { venue, instructor } = splitDetail(detail);

  return [
    {
      start,
      end,
      code,
      ...fields,
      venue: venue || fields.venue,
      instructor: instructor || fields.instructor,
      category,
      scope: 'group',
    },
  ];
}

function buildTimetable(workbook, opts) {
  const { group, pairedGroup, courses } = opts;
  const weeks = [];
  for (const name of workbook.sheetNames) {
    const { grid, maxRow } = workbook.getSheetGrid(name);
    const week = extractWeek(grid, maxRow, { group, pairedGroup, courses });
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
