'use strict';

// The verify-*.js scripts are plain Node programs, not a test-runner suite
// -- same reason the site itself has no bundler. This is the whole harness:
// collect failures, print them grouped, exit non-zero if any; load the
// browser-side scripts under a stub window; and derive the two committed
// index files, so the generator and the staleness check cannot disagree.

function createRun(title) {
  const failures = [];
  const counts = {};

  // Record a failure. `kind` groups related failures so a systemic break
  // prints as one block rather than hundreds of interleaved lines.
  function fail(kind, where, message) {
    failures.push({ kind, where, message });
  }

  function check(kind, ok, where, message) {
    if (!ok) fail(kind, where, message);
    return ok;
  }

  // Counters for the summary line -- these are not assertions, they are the
  // "what did it actually look at" evidence that a passing run is meaningful
  // rather than a no-op that walked an empty list.
  function count(name, n) {
    counts[name] = (counts[name] || 0) + (n === undefined ? 1 : n);
  }

  function done() {
    const tally = Object.entries(counts).map(([k, v]) => `${v} ${k}`).join(', ');
    if (!failures.length) {
      console.log(`PASS  ${title}${tally ? ` (${tally})` : ''}`);
      return;
    }
    const byKind = new Map();
    for (const f of failures) {
      if (!byKind.has(f.kind)) byKind.set(f.kind, []);
      byKind.get(f.kind).push(f);
    }
    console.error(`FAIL  ${title}${tally ? ` (${tally})` : ''} — ${failures.length} problem(s)`);
    for (const [kind, list] of byKind) {
      console.error(`\n  ${kind} (${list.length}):`);
      for (const f of list.slice(0, 20)) {
        console.error(`    ${f.where}${f.where ? ': ' : ''}${f.message}`);
      }
      if (list.length > 20) console.error(`    ... and ${list.length - 20} more`);
    }
    console.error('');
    process.exitCode = 1;
  }

  return { fail, check, count, done };
}

// Loads the browser-side site scripts under Node. They are plain
// <script>-tag files that assign into `window`, so the only thing needed is
// a window (plus the couple of globals the top-level theme IIFE touches on
// load). Load order matters exactly as it does in the browser:
// core -> content -> session.
function loadSite(root) {
  const path = require('path');
  const R = (f) => path.join(root, f);
  // A browser stub, not a DOM: these files render to strings and touch the
  // document only for the theme, the text size and the topbar measurement,
  // all of which run at load. Anything that returns null here is a page
  // element that does not exist outside a browser, and the site code is
  // expected to cope — that is the contract this stub asserts.
  global.window = {};
  global.document = {
    documentElement: { dataset: {}, style: { setProperty() {} } },
    readyState: 'complete',
    querySelector() { return null; },
    getElementById() { return null; },
    addEventListener() {},
  };
  global.localStorage = { getItem() { return null; }, setItem() {} };
  require(R('common-core.js'));
  require(R('common-content.js'));
  require(R('common-session.js'));
  // Read the directory rather than listing the courses: now that no page
  // carries a <script> per course, this would otherwise be the last place a
  // new course still had to be registered by hand.
  for (const f of courseFiles(root)) require(R(path.join('courseDetails', f)));
  return { PCLL: global.window.PCLL, COURSE_DETAILS: global.window.COURSE_DETAILS };
}

// Every course file on disk, sorted so the load order is stable.
function courseFiles(root) {
  const fs = require('fs');
  const path = require('path');
  return fs.readdirSync(path.join(root, 'courseDetails')).filter((f) => f.endsWith('.js')).sort();
}

// ---------------------------------------------------------------------
// The two committed index files, derived from the loaded corpus.
//
// This lives here, and not in the generator, because `verify-data.js` builds
// the same two strings and compares them byte for byte against what is on
// disk. One derivation, two callers: a stale index cannot pass CI, and the
// generator cannot drift from what the check expects.
// ---------------------------------------------------------------------
const GENERATED_BY = 'npm run build:index';

function buildIndexes(win) {
  const CD = win.COURSE_DETAILS || {};
  const PCLL = win.PCLL;

  // What EVERY page needs: enough to render deadlines, name a course and
  // know which of its sessions have exam notes -- without the notes.
  const index = {};
  for (const code of Object.keys(CD).sort()) {
    const d = CD[code];
    index[code] = {
      name: d.name || '',
      codePrefix: d.codePrefix || '',
      deadlines: d.deadlines || [],
      // quiz.html's setup screen lists course and sessions before any course
      // file is fetched; it loads the one course you pick.
      examSessions: Object.keys(d.sessions || {}).filter((k) => {
        const n = d.sessions[k].examNotes;
        return n && (n.issueTypes || []).length;
      }),
    };
  }

  // One row per issue type. The haystack is lower-cased at build time so a
  // keystroke costs a substring test and nothing else.
  //
  // It carries the TRIGGER FACT PATTERNS as well as the title and summary,
  // which is the whole point: you meet a problem question, type the facts
  // you can see in it, and land on the issue type whose triggers describe
  // them. Searching titles alone would only find what you could already
  // name.
  const rows = [];
  for (const code of Object.keys(CD).sort()) {
    const d = CD[code];
    for (const key of Object.keys(d.sessions || {})) {
      const notes = d.sessions[key].examNotes;
      if (!notes) continue;
      (notes.issueTypes || []).forEach((it, i) => {
        const triggers = ((it.triggers && it.triggers.bullets) || []).join(' ');
        const hay = `${it.title} ${it.summary || ''} ${triggers}`.replace(/\s+/g, ' ').toLowerCase();
        rows.push([PCLL.issueCode(code, d, key, i), code, key, it.id, it.title, hay]);
      });
    }
  }

  const head = (what) => `// GENERATED FILE -- do not edit by hand; run \`${GENERATED_BY}\`.\n// ${what}\n`;
  return {
    courseIndexJs: head('Course metadata and deadlines, without the notes. See scripts/build-index.js.')
      + `window.COURSE_INDEX = ${JSON.stringify(index, null, 2)};\n`,
    searchIndexJs: head('[code, course, sessionKey, issueId, title, searchable text] per issue type.')
      + `window.SEARCH_INDEX = ${JSON.stringify(rows)};\n`,
  };
}

// Depth-first walk over every plain object in a data tree, so a check can
// find every `table`/`statutes`/`flowchart` wherever it is authored rather
// than only in the sections it expects.
function walk(node, path, fn) {
  if (Array.isArray(node)) {
    node.forEach((v, i) => walk(v, `${path}[${i}]`, fn));
    return;
  }
  if (!node || typeof node !== 'object') return;
  fn(node, path);
  for (const [k, v] of Object.entries(node)) walk(v, `${path}.${k}`, fn);
}

module.exports = { createRun, loadSite, walk, courseFiles, buildIndexes };
