'use strict';

// Page-level wiring checks: the things that break a whole page rather than
// one note, and that nothing else in the toolchain looks at.
//
// ESLint sees each .js file alone, so it cannot know that issue.js does
// $('printBtn') on a page whose HTML has no such button, or that adding a
// course means editing six <script> lists. Node --check sees syntax only.
// These are the cross-file invariants in between.

const fs = require('fs');
const path = require('path');
const { createRun, loadSite } = require('./verify-lib');

const ROOT = path.join(__dirname, '..');
const run = createRun('page wiring');

// Every page loads the same shared scripts in the same order, then the
// generated course index, then its own entry point last.
//
// Adding a course no longer means editing six <script> lists: the notes are
// fetched per course at runtime, so a new course file is picked up by
// `npm run build:index` and nothing else. What these checks now defend is
// the other direction — that no page quietly puts the corpus back on the
// critical path.
const SHARED = ['common-core.js', 'common-content.js', 'common-session.js'];
const INDEX_SCRIPT = 'courseIndex.js';
const PAGES = {
  'index.html': 'dashboard.js',
  'timetable.html': 'app.js',
  'course.html': 'course.js',
  'session.html': 'session.js',
  'quiz.html': 'quiz.js',
  'issue.html': 'issue.js',
};

const courseCodes = fs.readdirSync(path.join(ROOT, 'courseDetails'))
  .filter((f) => f.endsWith('.js'))
  .map((f) => f.replace(/\.js$/, ''))
  .sort();

const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');

for (const [page, entry] of Object.entries(PAGES)) {
  const html = read(page);
  run.count('pages');
  const scripts = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map((m) => m[1]);

  // 1. Shared scripts, in order, before anything else.
  const sharedPos = SHARED.map((s) => scripts.indexOf(s));
  if (sharedPos.some((i) => i === -1)) {
    run.fail('missing shared script', page, `expected ${SHARED.join(', ')}; got ${scripts.join(', ') || '(none)'}`);
  } else if (sharedPos[0] > sharedPos[1] || sharedPos[1] > sharedPos[2]) {
    run.fail('shared script order', page, 'common-core -> common-content -> common-session is the required load order');
  }

  // 2. No page ships the notes, and every page ships the index.
  //
  //    This inverts the rule it replaces ("every course file is on every
  //    page"). That rule was what made the timetable download 2,540KB of
  //    exam notes to read 2.3KB of deadlines; the notes are now fetched per
  //    course by loadCourseDetails, so a <script> per course is no longer a
  //    completeness requirement but a performance bug. Both halves matter:
  //    without courseIndex.js a page has no deadlines and no course names,
  //    and with a courseDetails <script> it is back to shipping the corpus.
  for (const s of scripts) {
    if (s.startsWith('courseDetails/')) {
      run.fail('course script on a page', page,
        `loads ${s} — the notes are fetched per course by loadCourseDetails; pages carry courseIndex.js only`);
    }
  }
  if (!scripts.includes(INDEX_SCRIPT)) {
    run.fail('missing index script', page, `does not load ${INDEX_SCRIPT} — no deadlines and no course names`);
  } else if (sharedPos[2] !== -1 && scripts.indexOf(INDEX_SCRIPT) < sharedPos[2]) {
    run.fail('index script order', page, `${INDEX_SCRIPT} loads before common-session.js`);
  }

  // 3. The page's own entry point loads last.
  if (scripts[scripts.length - 1] !== entry) {
    run.fail('entry script', page, `expected ${entry} to load last, got ${scripts[scripts.length - 1]}`);
  }

  // 4. Every DOM id the page's scripts look up is declared by the page.
  //    $('printBtn') on a page without one returns null and the next line
  //    throws, taking the whole page with it.
  const declared = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  const sources = [entry, ...SHARED].map(read).join('\n');
  const looked = new Set();
  for (const m of sources.matchAll(/\$\(\s*'([^']+)'\s*\)/g)) looked.add(m[1]);
  for (const m of sources.matchAll(/getElementById\(\s*'([^']+)'\s*\)/g)) looked.add(m[1]);
  for (const id of looked) {
    if (!declared.has(id)) {
      run.fail('missing element', page, `${entry} looks up #${id}, which this page does not declare`);
    }
    run.count('id lookups');
  }
}

// The index is now the only thing standing between a page and a course's
// notes, so a course file that it does not list is unreachable from the
// whole site — loadCourseDetails refuses to fetch a code it has never heard
// of, precisely so that a typo cannot inject an arbitrary script URL.
const indexJs = read(INDEX_SCRIPT);
const indexed = new Set([...indexJs.matchAll(/"(PCLL\d{4})":\s*\{/g)].map((m) => m[1]));
for (const code of courseCodes) {
  run.count('courses indexed');
  if (!indexed.has(code)) {
    run.fail('course not indexed', INDEX_SCRIPT, `courseDetails/${code}.js exists but is not in the index — run npm run build:index`);
  }
}
for (const code of indexed) {
  if (!courseCodes.includes(code)) {
    run.fail('stale index entry', INDEX_SCRIPT, `${code} is indexed but courseDetails/${code}.js does not exist`);
  }
}

// Colour coverage: COURSE_COLORS in common-core.js is the single source of
// truth for course colour, and a course missing from it falls back to the
// grey used for a *courseless* calendar entry — visually indistinguishable
// from "this is not a course at all".
const { PCLL, COURSE_DETAILS } = loadSite(ROOT);
const apiCourses = Object.keys(
  // The COURSES map in api/timetable.js is the list of codes the timetable
  // can actually produce. Read it out of the source rather than importing,
  // so this stays a static check with no network in it.
  Object.fromEntries([...read('api/timetable.js')
    .split('const COURSES = {')[1]
    .split('};')[0]
    .matchAll(/(PCLL\d{4}):/g)].map((m) => [m[1], true]))
);

if (apiCourses.length < 10) {
  run.fail('course list', 'api/timetable.js', `only parsed ${apiCourses.length} course codes out of COURSES — the check is not reading the map`);
}
for (const code of apiCourses) {
  run.count('courses');
  if (!PCLL.COURSE_COLORS[code]) {
    run.fail('missing colour', 'common-core.js', `${code} is in api/timetable.js's COURSES but has no COURSE_COLORS hue`);
  }
}
for (const code of Object.keys(PCLL.COURSE_COLORS)) {
  if (!apiCourses.includes(code)) {
    run.fail('stale colour', 'common-core.js', `COURSE_COLORS has ${code}, which api/timetable.js does not list`);
  }
}
for (const code of PCLL.ELECTIVE_CODES) {
  if (!PCLL.ELECTIVE_NAMES[code]) run.fail('elective name', 'common-core.js', `${code} is in ELECTIVE_CODES with no ELECTIVE_NAMES entry`);
}
for (const code of Object.keys(PCLL.ELECTIVE_NAMES)) {
  if (!PCLL.ELECTIVE_CODES.includes(code)) run.fail('elective name', 'common-core.js', `${code} is in ELECTIVE_NAMES but not ELECTIVE_CODES`);
}

// A colour that is not distinct is the same bug as a missing one.
const byColour = new Map();
for (const [code, colour] of Object.entries(PCLL.COURSE_COLORS)) {
  if (byColour.has(colour)) {
    run.fail('duplicate colour', 'common-core.js', `${code} and ${byColour.get(colour)} share ${colour}`);
  }
  byColour.set(colour, code);
  if (colour === PCLL.DEFAULT_COLOR) {
    run.fail('duplicate colour', 'common-core.js', `${code} uses DEFAULT_COLOR, which means "no course"`);
  }
}

// Every course with authored notes must be a course the timetable knows, or
// its notes have no session to hang off.
for (const code of Object.keys(COURSE_DETAILS)) {
  if (!apiCourses.includes(code)) {
    run.fail('orphan course', `courseDetails/${code}.js`, 'is not in api/timetable.js\'s COURSES, so no timetable event will ever match it');
  }
}

run.done();
