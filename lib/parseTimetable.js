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
const VENUE_HINT_RE = /theatre|zoom|\bcct[\s-]*\d|\broom\b|\bonline\b|\blibrary\b|\bcourt\b/i;
// Trailing "(A)" / "(B)" on a course-name line, e.g. "Civil Litigation (B)".
const SECTION_SUFFIX_RE = /\(([A-Za-z])\)\s*$/;
// A short initials-only line ("JJ", "CYip", "CYip / XF", "EChang/BChan") that
// — when immediately followed by a venue line — is the instructor for it.
// Real instructor initials on this sheet run 2-6 chars per name (JJ, AN, SL,
// DDR, CYip, EChang, GFung, ...) — capped short so a wrapped topic word like
// "Businesses" or "applications" can't be mistaken for one.
const SHORT_NAME_RE = /^[A-Za-z][A-Za-z.]{0,5}(?:\s*[/,]\s*[A-Za-z][A-Za-z.]{0,5})*$/;

// Every real instructor token on this sheet has a *second* capital somewhere
// — either fully uppercase initials ("JJ", "NH", "DDR") or one capital per
// surname in a squashed name ("CYip", "SHaldane", "DYuen"). A short, plain,
// Title-Case English word — a legal-topic word like "Costs" is exactly this
// shape — only ever has the one leading capital, so this is what tells them
// apart (length/shape alone isn't enough, as "Costs" already fits both).
function looksLikeInitials(s) {
  return (s.match(/[A-Z]/g) || []).length >= 2;
}

// Above every week's "Week N" row sits a "Pre-recorded LGs" list — videos to
// watch on Moodle before/after a given live LG/SG, not tied to any date.
const PRE_RECORDED_LABEL_RE = /^pre-?recorded lgs?/i;
// e.g. "(to be watched before LG3)" / "(to be completeted before LG3)".
const WATCH_HINT_RE = /\(\s*(to be [^)]*)\)/i;
// A pre-recorded entry's own LG number, wherever it falls in its topic text
// ("Corp & Com Transactions LG5 - ...", "...Post LG2 Supplement & Quizzes",
// "LG4 (Part 2) - Review..."). Global so a "Post LG5 & LG6 Supplements"-style
// entry referencing two LGs picks up both.
const PRE_RECORDED_NO_RE = /LG\s*\d+[A-Za-z]?(?:\s*\(part[^)]*\))?/gi;

function extractPreRecorded(grid, weekHeaderRow) {
  let labelRow = null;
  for (let r = 1; r < weekHeaderRow; r++) {
    if (PRE_RECORDED_LABEL_RE.test(cellText(grid, r, 1))) {
      labelRow = r;
      break;
    }
  }
  if (labelRow === null) return [];

  // A new entry starts at any row containing a course code; a row with no
  // code (blank in column A/B, e.g. a wrapped description, or occasionally
  // a lone trailing "(Instructor)" on its own row) continues the entry
  // above it.
  const entries = [];
  let current = null;
  for (let r = labelRow + 1; r < weekHeaderRow; r++) {
    const cells = [];
    for (let c = 2; c <= 10; c++) {
      const t = cellText(grid, r, c);
      if (t) cells.push(t);
    }
    if (cells.length === 0) continue;
    const codeIdx = cells.findIndex((t) => COURSE_CODE_RE.test(t));
    if (codeIdx !== -1) {
      if (current) entries.push(current);
      const code = COURSE_CODE_RE.exec(cells[codeIdx])[0].replace(/\s+/g, '').toUpperCase();
      current = { code, textParts: cells.filter((_, i) => i !== codeIdx) };
    } else if (current) {
      current.textParts.push(...cells);
    }
  }
  if (current) entries.push(current);

  return entries.map(({ code, textParts }) => {
    let text = textParts.join(' ').replace(/\s+/g, ' ').trim();
    let when = null;
    const hintMatch = WATCH_HINT_RE.exec(text);
    if (hintMatch) {
      when = hintMatch[1].trim();
      text = (text.slice(0, hintMatch.index) + text.slice(hintMatch.index + hintMatch[0].length)).replace(/\s+/g, ' ').trim();
    }
    let instructor = null;
    const instMatch = /\(([^()]+)\)\s*$/.exec(text);
    if (instMatch && SHORT_NAME_RE.test(instMatch[1].trim()) && looksLikeInitials(instMatch[1])) {
      instructor = instMatch[1].trim();
      text = text.slice(0, instMatch.index).trim();
    }
    // Additive only — not stripped from the topic. Unlike a live session's
    // "LG5:" prefix, here the LG number is often mid-sentence ("...Post LG2
    // Supplement..."), so removing it would mangle the topic text instead of
    // just cleaning it up.
    const noMatches = text.match(PRE_RECORDED_NO_RE);
    const no = noMatches ? [...new Set(noMatches.map((m) => m.replace(/\s+/g, ' ').trim()))].join(' / ') : null;
    return { code, topic: text || null, when, instructor, no };
  });
}

// Turn a block's free-text description lines into structured fields, so the
// UI can show "No. / Topic / Venue / Instructor" instead of a raw text dump.
// Drops the lines that just repeat data already shown elsewhere (the bare
// course code, and the course-name line right after it — keeping only its
// "(A)"/"(B)" part suffix if present). The course-name line is identified
// *positionally* (the one line right after the code, before any LG/SG
// marker) rather than by matching it against a known course name string,
// because HKU sometimes abbreviates it on the sheet itself (e.g. "Corp &
// Com Transactions" for "Corporate & Commercial Transactions") in ways that
// won't match — a stray unmatched line here isn't just harmlessly folded
// into the topic, it becomes its own phantom session once split below.
//
// HKU sometimes packs *two* LG/SG sub-sessions into one cell block with no
// separator between them (e.g. "LG1A: ..." / "DDR - Theatre" / "LG1B: ..." /
// "OC - Theatre" all stacked in one column) — each new LG/SG marker starts
// its own session, each with its own venue/instructor, so this returns an
// *array* of field-sets, one per marker (or a single one if there's no
// marker at all, e.g. a plain ceremony description).
function classifyLines(lines, code) {
  // A bare code line sometimes carries a "FT " (Full-Time) prefix ("FT
  // PCLL8020") — still nothing but the code, so still stripped here. If
  // this weren't caught, it would consume the *positional* course-name-line
  // slot below in place of the code, leaving the real course-name line
  // (e.g. "Corp & Com Transactions (B)") behind as unstripped content.
  const bareCode = code ? code.replace(/\s+/g, '').toUpperCase() : null;
  const cleaned = lines
    .map((l) => l.trim())
    .filter(Boolean)
    .filter((l) => {
      if (!bareCode) return true;
      const lineNoSpace = l.replace(/\s+/g, '').toUpperCase();
      return lineNoSpace !== bareCode && lineNoSpace !== 'FT' + bareCode;
    });

  let part = null;
  let content = cleaned;
  // Only applies once we actually have a course code — the code -> course
  // name -> marker pattern is specific to course sessions. Without a code
  // (e.g. a bare announcement line like "[Start of 2nd Semester]"), there's
  // no known "name line" to dedupe, so nothing should be stripped.
  if (code && content.length && !LG_SG_NO_RE.test(content[0])) {
    const m = SECTION_SUFFIX_RE.exec(content[0]);
    if (m) part = m[1].toUpperCase();
    content = content.slice(1);
  }

  const segments = [];
  let current = { no: null, lines: [] };
  for (const line of content) {
    const lgm = LG_SG_NO_RE.exec(line);
    if (lgm) {
      if (current.no || current.lines.length) segments.push(current);
      current = { no: lgm[1].toUpperCase() + lgm[2], lines: lgm[3] ? [lgm[3].trim()] : [] };
    } else {
      current.lines.push(line);
    }
  }
  if (current.no || current.lines.length) segments.push(current);
  if (segments.length === 0) segments.push({ no: null, lines: [] });

  return segments.map((seg) => ({ ...classifySegment(seg.lines), no: seg.no, part }));
}

function classifySegment(lines) {
  let venue = null;
  let instructor = null;
  const topicParts = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
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
    if (!instructor && !venue && SHORT_NAME_RE.test(line) && looksLikeInitials(line) && lines[i + 1] && VENUE_HINT_RE.test(lines[i + 1])) {
      instructor = line;
      continue;
    }
    topicParts.push(line);
  }

  return { topic: topicParts.join(' ').trim() || null, venue, instructor };
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

  const preRecorded = extractPreRecorded(grid, weekHeaderRow);

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
      // A second, *different* course code bleeding into an already-open
      // block is a different session HKU didn't separate with a time row
      // or "* * *" (rare, but seen — e.g. a Property Transactions SG
      // listing appended straight onto a Civil Litigation LG block with no
      // separator at all). Column A's section label can't be used for this:
      // it's one label per row shared by every day column, and a *different*
      // column's new section can legitimately start on a row that's still
      // the middle of this column's current, still-continuing block.
      if (block && block.lines.length) {
        const codeMatch = COURSE_CODE_RE.exec(text);
        if (codeMatch) {
          const newCode = codeMatch[0].replace(/\s+/g, '').toUpperCase();
          const existingCode = block.lines
            .map((l) => COURSE_CODE_RE.exec(l))
            .find(Boolean);
          if (existingCode && existingCode[0].replace(/\s+/g, '').toUpperCase() !== newCode) {
            closeBlock();
          }
        }
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
      // Drop anything that ends up with nothing worth showing — belt and
      // suspenders against any classification edge case, not just the ones
      // already guarded against above.
      const events = blockToEvents(b, grid, opts).filter(
        (e) => e.no || e.topic || e.venue || e.instructor || (e.otherGroups && e.otherGroups.length)
      );
      day.events.push(...events);
    }
  }

  return { week: weekNumber, semester, days, preRecorded };
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

// Some SG sessions split the cohort into two lettered sections instead of
// listing per-group rooms at all (e.g. Civil Litigation's "Interviewing
// Exercise", which reads "[Please see separate notice]" rather than
// "Gp N/M: ...") — with no Gp line to resolve, there's nothing for the
// caller above to match this student's group against. But every course on
// this sheet that *does* spell out its own (A)/(B) split (Corp & Com
// Transactions, Property Transactions, Civil/Criminal Litigation) lists an
// explicit Gp range for each letter, and in every one of them "(A)" is the
// lower half of the 1-13 (paired 14-26) range and "(B)" the upper half —
// the exact cutoff wobbles between group 6 and 7 depending on the course,
// never close enough to matter for a group solidly on one side or the
// other. Used only as a fallback when no explicit Gp listing exists.
function sectionForGroup(groupNumber) {
  const g = groupNumber > 13 ? groupNumber - 13 : groupNumber;
  return g <= 6 ? 'A' : 'B';
}

function blockToEvents(block, grid, opts) {
  const { group, pairedGroup } = opts;
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
    const fieldsList = classifyLines(headerLines, code);
    // `part` (the classified "(A)"/"(B)" section suffix, if any) is uniform
    // across every segment in this batch — it's read off the one course-name
    // line shared by all of them — so it's safe to resolve scope once here.
    const section = fieldsList[0] && fieldsList[0].part;
    let scope = 'all';
    if (isOtherGroupsBreakdown) scope = 'other-group';
    else if (section === 'A' || section === 'B') {
      scope = section === sectionForGroup(group) ? 'group' : 'other-group';
    }
    return fieldsList.map((fields, i) => ({
      start: primary ? primary.start : null,
      end: primary ? primary.end : null,
      timeLabel: block.timeOptions.map((t) => t.label).join(' / ') || null,
      code,
      ...fields,
      // The group listing follows all of a block's sub-sessions, so it's
      // only attached to the last one rather than repeated on each.
      otherGroups: i === fieldsList.length - 1 ? otherGroups : undefined,
      category,
      scope,
    }));
  }

  const groupLine = block.lines[groupLineIdx];
  const gm = GROUP_LINE_RE.exec(groupLine);
  const n1 = parseInt(gm[1], 10);
  const n2 = gm[2] ? parseInt(gm[2], 10) : null;
  const myNumber = n1 === group || n1 === pairedGroup ? n1 : n2;
  const detail = gm[3].trim();
  const headerLines = block.lines.slice(0, groupLineIdx).filter((l) => !GROUP_LINE_RE.test(l));

  const { start, end } = resolveTime(block.timeOptions, myNumber);
  const fieldsList = classifyLines(headerLines, code);
  const { venue, instructor } = splitDetail(detail);

  return fieldsList.map((fields) => ({
    start,
    end,
    code,
    ...fields,
    // The small-group listing's venue/instructor applies to every
    // sub-session sharing this listing (falls back to a segment's own,
    // for the rare case a sub-session states its own venue inline).
    venue: venue || fields.venue,
    instructor: instructor || fields.instructor,
    category,
    scope: 'group',
  }));
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
