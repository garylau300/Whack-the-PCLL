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

// Every page that renders course content loads the same shared scripts in
// the same order, then its own entry point last. Adding a course means
// adding a <script> to all of them — the bug this catches is adding it to
// five and forgetting the sixth, which leaves that page silently missing a
// course.
const SHARED = ['common-core.js', 'common-content.js', 'common-session.js'];
const PAGES = {
  'index.html': 'dashboard.js',
  'timetable.html': 'app.js',
  'course.html': 'course.js',
  'session.html': 'session.js',
  'quiz.html': 'quiz.js',
  'issue.html': 'issue.js',
};

const courseFiles = fs.readdirSync(path.join(ROOT, 'courseDetails'))
  .filter((f) => f.endsWith('.js'))
  .sort()
  .map((f) => `courseDetails/${f}`);

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

  // 2. Every courseDetails file on disk is loaded by every page.
  for (const cf of courseFiles) {
    if (!scripts.includes(cf)) {
      run.fail('missing course script', page, `does not load ${cf} — that course is invisible on this page`);
    } else if (sharedPos[2] !== -1 && scripts.indexOf(cf) < sharedPos[2]) {
      run.fail('course script order', page, `${cf} loads before common-session.js`);
    }
  }
  for (const s of scripts) {
    if (s.startsWith('courseDetails/') && !courseFiles.includes(s)) {
      run.fail('stale course script', page, `loads ${s}, which is not in courseDetails/`);
    }
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
