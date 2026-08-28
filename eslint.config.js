'use strict';

// Flat config (ESLint 9+). Two profiles: browser-side site scripts (this
// stays a zero-build, plain-<script>-tag site -- no bundler, no
// transpilation, so `sourceType: 'script'`, not 'module') and Node-side
// server scripts (the dev server and the Vercel serverless function).
// Kept deliberately light -- this is here to catch real bugs (typos,
// undeclared globals, accidental var) as the codebase grows across
// sessions, not to enforce a house style beyond what Prettier already
// normalizes. See CLAUDE.md for how this fits into the rest of the repo's
// conventions.

const browserGlobals = {
  window: 'readonly',
  document: 'readonly',
  localStorage: 'readonly',
  sessionStorage: 'readonly',
  fetch: 'readonly',
  console: 'readonly',
  navigator: 'readonly',
  location: 'readonly',
  history: 'readonly',
  URLSearchParams: 'readonly',
  URL: 'readonly',
  Set: 'readonly',
  Map: 'readonly',
  Promise: 'readonly',
  setTimeout: 'readonly',
  clearTimeout: 'readonly',
  setInterval: 'readonly',
  clearInterval: 'readonly',
  requestAnimationFrame: 'readonly',
  ResizeObserver: 'readonly',
  getComputedStyle: 'readonly',
  CustomEvent: 'readonly',
  Event: 'readonly',
};

const nodeGlobals = {
  require: 'readonly',
  module: 'writable',
  exports: 'writable',
  process: 'readonly',
  __dirname: 'readonly',
  __filename: 'readonly',
  console: 'readonly',
  Buffer: 'readonly',
  global: 'readonly',
  setTimeout: 'readonly',
  clearTimeout: 'readonly',
  fetch: 'readonly', // built into Node 18+, used by api/timetable.js
};

const sharedRules = {
  'no-undef': 'error',
  'no-unused-vars': ['warn', { args: 'none' }],
  'no-var': 'error',
  'prefer-const': 'warn',
  eqeqeq: ['warn', 'smart'],
};

module.exports = [
  {
    ignores: ['node_modules/**'],
  },
  {
    files: ['*.js', 'courseDetails/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script',
      globals: browserGlobals,
    },
    rules: sharedRules,
  },
  {
    files: ['api/**/*.js', 'lib/**/*.js', 'scripts/**/*.js', 'eslint.config.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
      globals: nodeGlobals,
    },
    rules: sharedRules,
  },
];
