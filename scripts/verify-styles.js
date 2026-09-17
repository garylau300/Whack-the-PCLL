'use strict';

// Checks over styles.css. There is no CSS toolchain here on purpose, so
// these are text-level checks over the one stylesheet — but each one guards
// a rule this repo has already learned the hard way, and each failure is
// invisible until someone looks at the right page in the right mode.

const fs = require('fs');
const path = require('path');
const { createRun } = require('./verify-lib');

const ROOT = path.join(__dirname, '..');
const css = fs.readFileSync(path.join(ROOT, 'styles.css'), 'utf8');
const run = createRun('styles.css');

// ---------------------------------------------------------------------------
// 1. Brace balance. A stray brace silently swallows every rule after it, and
//    the page just quietly loses its styling from that point down. This used
//    to be an inline `node -e` block in ci.yml; it lives here so it also runs
//    from `npm test` on a laptop.
// ---------------------------------------------------------------------------
let depth = 0;
let line = 1;
let negativeAt = 0;
for (const ch of css) {
  if (ch === '\n') line++;
  if (ch === '{') depth++;
  if (ch === '}') {
    depth--;
    if (depth < 0 && !negativeAt) negativeAt = line;
  }
}
run.count('lines', line);
if (depth !== 0) {
  run.fail('brace balance', 'styles.css', `net depth ${depth} at end of file${negativeAt ? ` (first unmatched "}" around line ${negativeAt})` : ''}`);
}

// ---------------------------------------------------------------------------
// 2. prefers-reduced-motion must neutralise delays, not just durations.
//
//    The dashboard staggers its sections with animation-delay under
//    `fill-mode: both`. Collapsing only the duration leaves the backwards
//    fill holding each section at its `from` keyframe — opacity 0 — for the
//    whole delay, so a reduced-motion reader watches the page assemble one
//    block at a time while everyone else gets one smooth fade. Measured at
//    ~210ms before this was fixed.
// ---------------------------------------------------------------------------
const rmMatch = /@media\s*\(prefers-reduced-motion:\s*reduce\)\s*\{([\s\S]*?\n)\}/.exec(css);
if (!rmMatch) {
  run.fail('reduced motion', 'styles.css', 'no @media (prefers-reduced-motion: reduce) block found at all');
} else {
  const block = rmMatch[1];
  for (const prop of ['animation-duration', 'animation-delay', 'transition-duration', 'transition-delay', 'animation-iteration-count']) {
    if (!new RegExp(`${prop}\\s*:[^;]*!important`).test(block)) {
      run.fail('reduced motion', 'styles.css', `the global reduce block does not reset ${prop} with !important`);
    }
  }
  run.count('reduced-motion resets', 5);
}

// A delay declared outside the reduce block is only safe because of the reset
// above — count them so the check is visibly doing something.
const outsideReduceBlock = rmMatch ? css.replace(rmMatch[0], '') : css;
const delays = [...outsideReduceBlock.matchAll(/(?:animation|transition)-delay\s*:/g)];
run.count('delays guarded', delays.length);

// ---------------------------------------------------------------------------
// 3. A looping animation's keyframes must start *and* end at the resting
//    pose (CLAUDE.md, "A looping animation's keyframes"). The reduce block
//    above collapses an animation to a single 0.001ms run, which snaps the
//    element to its FINAL keyframe — so a loop that ends mid-motion leaves
//    reduced-motion readers staring at a frozen half-swing.
// ---------------------------------------------------------------------------
function parseKeyframes(source) {
  const out = new Map();
  const re = /@keyframes\s+([\w-]+)\s*\{/g;
  let m;
  while ((m = re.exec(source))) {
    // Walk braces from the opening one so a nested block can't end it early.
    let i = re.lastIndex;
    let d = 1;
    while (i < source.length && d > 0) {
      if (source[i] === '{') d++;
      else if (source[i] === '}') d--;
      i++;
    }
    out.set(m[1], source.slice(re.lastIndex, i - 1));
    re.lastIndex = i;
  }
  return out;
}

// Declarations at a given stop, as a { prop: value } map. `animation-timing-
// function` is excluded: it shapes the easing *into* the next stop and says
// nothing about the pose.
function stopAt(body, matcher) {
  const re = /([^{}]+)\{([^{}]*)\}/g;
  let m;
  const decls = {};
  let found = false;
  while ((m = re.exec(body))) {
    const selectors = m[1].split(',').map((s) => s.trim().toLowerCase());
    if (!selectors.some(matcher)) continue;
    found = true;
    for (const decl of m[2].split(';')) {
      const idx = decl.indexOf(':');
      if (idx === -1) continue;
      const prop = decl.slice(0, idx).trim().toLowerCase();
      if (prop === 'animation-timing-function') continue;
      decls[prop] = decl.slice(idx + 1).trim().replace(/\s+/g, ' ').toLowerCase();
    }
  }
  return found ? decls : null;
}

// A whole turn is the identity pose, which is why the spinner can end at
// rotate(360deg) and still be at rest.
function normalise(value) {
  return value.replace(/rotate\(\s*360deg\s*\)/g, 'none').replace(/rotate\(\s*0deg\s*\)/g, 'none');
}

const keyframes = parseKeyframes(css);
const looping = new Set();
for (const m of css.matchAll(/animation:\s*([^;]+);/g)) {
  for (const part of m[1].split(',')) {
    if (!/\binfinite\b/.test(part)) continue;
    const name = part.trim().split(/\s+/).find((tok) => keyframes.has(tok));
    if (name) looping.add(name);
  }
}

for (const name of looping) {
  run.count('looping animations');
  const body = keyframes.get(name);
  // Missing "from"/"0%" means the element's own base style is the start,
  // which is the resting pose by definition.
  const start = stopAt(body, (s) => s === 'from' || s === '0%') || {};
  const end = stopAt(body, (s) => s === 'to' || s === '100%');
  if (!end) {
    run.fail('looping keyframes', `@keyframes ${name}`, 'has no "to"/"100%" stop, so the reduce block snaps it to whichever stop happens to be last');
    continue;
  }
  for (const prop of new Set([...Object.keys(start), ...Object.keys(end)])) {
    const a = normalise(start[prop] === undefined ? 'none' : start[prop]);
    const b = normalise(end[prop] === undefined ? 'none' : end[prop]);
    if (a !== b) {
      run.fail('looping keyframes', `@keyframes ${name}`, `${prop} starts at "${a}" and ends at "${b}" — a loop must return to its resting pose, or reduced-motion readers are left frozen at the end state`);
    }
  }
}

if (!looping.size) {
  run.fail('looping keyframes', 'styles.css', 'found no infinite animations at all — the check is not matching the stylesheet');
}

run.done();
