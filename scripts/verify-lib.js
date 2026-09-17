'use strict';

// The three verify-*.js scripts are plain Node programs, not a test-runner
// suite -- same reason the site itself has no bundler. This is the whole
// harness: collect failures, print them grouped, exit non-zero if any.

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
  global.window = {};
  global.document = { documentElement: { dataset: {} } };
  global.localStorage = { getItem() { return null; }, setItem() {} };
  require(R('common-core.js'));
  require(R('common-content.js'));
  require(R('common-session.js'));
  for (const f of ['PCLL8010', 'PCLL8020', 'PCLL8030', 'PCLL8050']) {
    require(R(path.join('courseDetails', `${f}.js`)));
  }
  return { PCLL: global.window.PCLL, COURSE_DETAILS: global.window.COURSE_DETAILS };
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

module.exports = { createRun, loadSite, walk };
