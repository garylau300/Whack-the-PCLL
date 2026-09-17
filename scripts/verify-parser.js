'use strict';

// Unit checks for the timetable backend — lib/xlsxLite.js and
// lib/parseTimetable.js.
//
// These are the two files with no browser in the loop at all: everything
// they get wrong turns into a wrong *event* (a session at the wrong time, a
// small group resolved to the wrong student, a whole block dropped), which
// looks perfectly plausible on the page. parseTimetable.js already exports
// its pure helpers for exactly this; until now nothing called them.
//
// No network and no real workbook: the fixtures below are hand-built in the
// shapes the real HKU sheet uses, which are documented at each regex in
// lib/parseTimetable.js.

const path = require('path');
const { createRun } = require('./verify-lib');

const ROOT = path.join(__dirname, '..');
const { parseTimeRange, parseGroupRanges, rangesContain, extractWeek } = require(path.join(ROOT, 'lib/parseTimetable.js'));
const { parseSheetXml } = require(path.join(ROOT, 'lib/xlsxLite.js'));

const run = createRun('timetable parser');

function eq(kind, actual, expected, where) {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  run.count('assertions');
  if (a !== e) run.fail(kind, where, `expected ${e}, got ${a}`);
}

// ---------------------------------------------------------------------------
// parseTimeRange — the meridiem on this sheet is often stated only once, on
// the end time, and "12:00 noon" is its own spelling.
// ---------------------------------------------------------------------------
const t1 = parseTimeRange('12:45 - 2:45 p.m.(Gps 1-13)');
eq('parseTimeRange', t1 && [t1.start, t1.end], ['12:45', '14:45'], 'start inherits the end meridiem');
eq('parseTimeRange', t1 && t1.groupRanges, [[1, 13]], 'trailing group range is parsed');

const t2 = parseTimeRange('9:00 a.m.- 6:00 p.m.');
eq('parseTimeRange', t2 && [t2.start, t2.end], ['09:00', '18:00'], 'both meridiems stated');

const t3 = parseTimeRange('10:30 a.m. - 12:00 noon');
eq('parseTimeRange', t3 && [t3.start, t3.end], ['10:30', '12:00'], '"noon" is midday, not midnight');

const t4 = parseTimeRange('12:30 - 1:30 p.m.');
eq('parseTimeRange', t4 && [t4.start, t4.end], ['12:30', '13:30'], '12:30 p.m. stays 12:30, not 24:30');

eq('parseTimeRange', parseTimeRange('PCLL8010 Civil Litigation'), null, 'a non-time line is not a time range');

// ---------------------------------------------------------------------------
// parseGroupRanges / rangesContain — these decide whose session it is.
// ---------------------------------------------------------------------------
eq('parseGroupRanges', parseGroupRanges('Gps 1-13'), [[1, 13]], 'a single range');
eq('parseGroupRanges', parseGroupRanges('Gps 1-7, 14'), [[1, 7], [14, 14]], 'a range plus a loose number');
eq('parseGroupRanges', parseGroupRanges('Gp 5'), [[5, 5]], 'one group');
eq('rangesContain', rangesContain([[1, 7], [14, 14]], 11), false, '11 is in neither range');
eq('rangesContain', rangesContain([[1, 13]], 11), true, '11 is inside 1-13');
eq('rangesContain', rangesContain([[14, 26]], 24), true, 'the paired group resolves too');

// ---------------------------------------------------------------------------
// extractWeek — the end-to-end shape, on a grid small enough to read.
// Columns are 1-based to match the real sheet's layout (column A is the
// section label, B onwards are the days).
// ---------------------------------------------------------------------------
function grid(rows) {
  const g = [];
  for (const [r, c, v] of rows) {
    if (!g[r]) g[r] = [];
    g[r][c] = v;
  }
  return g;
}

// Group 11's own small group is listed explicitly; group 3's is not, and
// must come back as someone else's.
const week = extractWeek(grid([
  [3, 1, 'FIRST SEMESTER 2026-2027'],
  [5, 1, 'Week 4'],
  [5, 2, 'MONDAY'],
  [5, 3, 'TUESDAY'],
  [6, 2, 'Sep 14'],
  [6, 3, 'Sep 15'],
  [7, 1, 'Full-time Face-to-Face SGs'],
  [7, 2, '12:45 - 2:45 p.m.(Gps 1-13)'],
  [8, 2, 'PCLL8010'],
  [9, 2, 'Civil Litigation (A)'],
  [10, 2, 'SG2: Interlocutory applications'],
  [11, 2, 'Gp. 11 / 24: CCT 310 - JJ'],
  [12, 2, 'Gp. 3 / 16: CCT 311 - AN'],
  [7, 3, '10:30 a.m. - 12:00 noon'],
  [8, 3, 'PCLL8020'],
  [9, 3, 'Corp & Com Transactions'],
  [10, 3, 'LG5: Corporate Practice'],
  [11, 3, 'Zoom'],
]), 40, { group: 11, pairedGroup: 24, courses: {} });

eq('extractWeek', week && week.week, 4, 'week number is read off the "Week N" row');
eq('extractWeek', week && week.semester, 1, 'semester comes from the sheet header');

const monday = week && week.days.find((d) => d.day === 'Monday');
eq('extractWeek', monday && monday.date, '2026-09-14', 'a first-semester September date takes the first year');
eq('extractWeek', monday && monday.events.length, 1, 'one event on Monday');

const sg = monday && monday.events[0];
eq('extractWeek', sg && sg.code, 'PCLL8010', 'course code is lifted out of the block');
eq('extractWeek', sg && sg.no, 'SG2', 'the session number is parsed off the "SG2:" prefix');
eq('extractWeek', sg && sg.topic, 'Interlocutory applications', 'the course-name line is stripped, the topic is not');
eq('extractWeek', sg && sg.part, 'A', 'the "(A)" section suffix is kept');
eq('extractWeek', sg && [sg.start, sg.end], ['12:45', '14:45'], 'the time comes from the block\'s time row');
eq('extractWeek', sg && [sg.venue, sg.instructor], ['CCT 310', 'JJ'], 'group 11\'s own room and instructor, not group 3\'s');
eq('extractWeek', sg && sg.scope, 'group', 'an explicit Gp line for this group means it is ours');

const tuesday = week && week.days.find((d) => d.day === 'Tuesday');
const lg = tuesday && tuesday.events[0];
eq('extractWeek', lg && [lg.code, lg.no], ['PCLL8020', 'LG5'], 'the Tuesday block is the other course');
eq('extractWeek', lg && lg.venue, 'Zoom', 'a venue line with no instructor still resolves');
eq('extractWeek', lg && [lg.start, lg.end], ['10:30', '12:00'], 'noon is 12:00');

// A block listing small groups that do *not* include this student must come
// back as someone else's, not as a whole-cohort session.
const otherWeek = extractWeek(grid([
  [3, 1, 'FIRST SEMESTER 2026-2027'],
  [5, 1, 'Week 4'],
  [5, 2, 'MONDAY'],
  [6, 2, 'Sep 14'],
  [7, 2, '12:45 - 2:45 p.m.'],
  [8, 2, 'PCLL8030'],
  [9, 2, 'Property Transactions'],
  [10, 2, 'SG1: Assignments'],
  [11, 2, 'Gp. 3 / 16: CCT 311 - AN'],
]), 40, { group: 11, pairedGroup: 24, courses: {} });
const other = otherWeek && otherWeek.days[0].events[0];
eq('extractWeek', other && other.scope, 'other-group', 'a listing without this group is another group\'s session');

// ---------------------------------------------------------------------------
// xlsxLite.parseSheetXml — Google Sheets pads its export out to the sheet's
// full declared grid with styled-but-empty self-closing cells (25,859 of
// them against 123 real ones in a live week tab). Skipping those is what
// makes the parse ~6x faster, so pin the behaviour that makes it safe:
// nothing that carries a value may be dropped, and maxRow/maxCol must
// describe the populated region.
// ---------------------------------------------------------------------------
const sheetXml = '<worksheet><sheetData>'
  + '<row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" s="3"/><c r="C1" t="inlineStr"><is><t>inline</t></is></c></row>'
  + '<row r="2"><c r="A2" s="3"/><c r="B2"><v>42</v></c></row>'
  + '<row r="900"><c r="A900" s="3"/><c r="Z900" s="3"/></row>'
  + '</sheetData></worksheet>';
const parsed = parseSheetXml(sheetXml, ['shared text']);

eq('parseSheetXml', parsed.grid[1][1], 'shared text', 'a shared-string cell resolves through the table');
eq('parseSheetXml', parsed.grid[1][3], 'inline', 'an inline string is read from its <t>');
eq('parseSheetXml', parsed.grid[2][2], '42', 'a numeric cell keeps its raw text');
eq('parseSheetXml', parsed.maxRow, 2, 'row 900 held only padding, so it is not the max row');
eq('parseSheetXml', parsed.maxCol, 3, 'column Z held only padding, so it is not the max column');
eq('parseSheetXml', parsed.grid[1][2], undefined, 'a padding cell is absent, which cellText reads as empty');

// A cell that is genuinely empty *and* has a body must still be kept, since
// only self-closing cells are safe to assume valueless.
const withEmptyBody = parseSheetXml('<c r="A1" t="s"><v>0</v></c>', ['']);
eq('parseSheetXml', withEmptyBody.grid[1][1], '', 'an explicitly empty shared string is preserved');
eq('parseSheetXml', withEmptyBody.maxRow, 1, 'and still counts toward maxRow');

run.done();
