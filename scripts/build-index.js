#!/usr/bin/env node
// Regenerates the two derived index files that let a page avoid loading the
// whole corpus:
//
//   courseIndex.js  -- the slice every page needs (course name, codePrefix,
//                      deadlines, which sessions carry exam notes). 719 bytes
//                      gzipped, against 560KB for the four course files.
//   searchIndex.js  -- one row per issue type, with the text worth searching.
//                      45KB gzipped, so it is fetched on the first search
//                      rather than shipped with every page.
//
// Both are COMMITTED, not built at deploy time: the site stays a zero-build
// static site that runs from a clone with no toolchain. This script is the
// authoring convenience, and `npm test` asserts the committed output still
// matches the data (see verify-data.js), so a stale index fails CI instead of
// quietly serving stale search results.
//
// Usage: npm run build:index

const fs = require('fs');
const path = require('path');
const { loadSite, buildIndexes } = require('./verify-lib');

const root = path.join(__dirname, '..');
loadSite(root);

const { courseIndexJs, searchIndexJs } = buildIndexes(global.window);

for (const [file, body] of [['courseIndex.js', courseIndexJs], ['searchIndex.js', searchIndexJs]]) {
  const target = path.join(root, file);
  const before = fs.existsSync(target) ? fs.readFileSync(target, 'utf8') : '';
  fs.writeFileSync(target, body);
  const kb = (Buffer.byteLength(body) / 1024).toFixed(1);
  console.log(`${before === body ? 'unchanged' : 'WROTE    '}  ${file.padEnd(16)} ${kb}KB`);
}
