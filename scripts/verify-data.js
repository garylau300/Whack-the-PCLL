'use strict';

// Structural checks over courseDetails/*.js — the invariants that decide
// whether authored notes actually reach the page, and whether a reader's
// saved progress still lines up with what is rendered.
//
// Everything here is a *silent* failure mode: none of it throws, none of it
// shows up as a broken page. A mistyped section key just vanishes, a
// duplicated point text quietly shares one checkbox, a crossRef at a renamed
// id degrades to plain text. That is exactly what needs a machine to notice.

const path = require('path');
const { createRun, loadSite, walk } = require('./verify-lib');

const ROOT = path.join(__dirname, '..');
const { PCLL, COURSE_DETAILS } = loadSite(ROOT);
const run = createRun('courseDetails structure');

// Keep in step with EXAM_SECTIONS in common-content.js and with
// examIssueSectionsHtml's documented issue shape.
const SECTION_KEYS = ['triggers', 'answering', 'lookOut', 'skills', 'skeleton', 'mistakes', 'authorities'];
const ISSUE_KEYS = new Set([...SECTION_KEYS, 'id', 'title', 'summary', 'weighting', 'notes', 'crossRefs']);
// Keep in step with fullNoteBodyHtml in common-content.js.
const BODY_KEYS = new Set(['body', 'bullets', 'bulletGroups', 'statutes', 'table', 'diagram', 'flowchart', 'qa', 'warnings', 'heading']);

const NUL = String.fromCharCode(0);

// ---------------------------------------------------------------------------
// 1. Issue-type shape: a key the renderer does not know about is dropped on
//    the floor, so a typo ("lookout" for "lookOut") loses a whole section
//    with no error anywhere.
// ---------------------------------------------------------------------------
const prefixes = new Map();
for (const [code, details] of Object.entries(COURSE_DETAILS)) {
  const prefix = details.codePrefix;
  if (prefix) {
    if (prefixes.has(prefix)) {
      run.fail('duplicate codePrefix', code, `shares codePrefix "${prefix}" with ${prefixes.get(prefix)} — issue codes would collide`);
    }
    prefixes.set(prefix, code);
  }

  for (const [sessionKey, session] of Object.entries(details.sessions || {})) {
    if (!/^(LG|SG)\d+$/.test(sessionKey)) {
      run.fail('session key', `${code}/${sessionKey}`, 'session keys are "LG"/"SG" + number with no trailing letter');
    }
    const issueTypes = (session.examNotes && session.examNotes.issueTypes) || [];
    if (!issueTypes.length) continue;
    run.count('sessions');

    const seenIds = new Set();
    for (const [i, issue] of issueTypes.entries()) {
      const where = `${code}/${sessionKey}/${issue.id || `#${i}`}`;
      run.count('issue types');

      if (!issue.id) run.fail('issue id', where, 'issue type has no id — issueHref cannot address it');
      else if (seenIds.has(issue.id)) run.fail('issue id', where, 'duplicate id within the session — the second page is unreachable');
      seenIds.add(issue.id);
      if (!issue.title) run.fail('issue title', where, 'issue type has no title');

      for (const key of Object.keys(issue)) {
        if (!ISSUE_KEYS.has(key)) {
          run.fail('unknown issue key', where, `"${key}" is not rendered by examIssueSectionsHtml — it will silently vanish`);
        }
      }
      for (const key of SECTION_KEYS) {
        const body = issue[key];
        if (!body) continue;
        for (const bodyKey of Object.keys(body)) {
          // `routes` is the one extra key a section may carry: the session
          // layer injects it into triggers via examIssueSectionsHtml's
          // `extras` argument.
          if (BODY_KEYS.has(bodyKey)) continue;
          if (key === 'triggers' && bodyKey === 'routes') continue;
          run.fail('unknown section key', `${where}.${key}`, `"${bodyKey}" is not rendered by fullNoteBodyHtml`);
        }
      }
      for (const note of issue.notes || []) {
        for (const bodyKey of Object.keys(note)) {
          if (!BODY_KEYS.has(bodyKey)) {
            run.fail('unknown note key', where, `notes[] entry carries "${bodyKey}", which fullNoteBodyHtml does not render`);
          }
        }
      }
    }
  }
}

// ---------------------------------------------------------------------------
// 2. Tables, quote boxes and flowchart checkbox ids, anywhere in the tree.
//
//    The checkbox-id checks are the ones with teeth: an id is a hash of its
//    ancestor chain (step label > point > sub-point), so two identically
//    worded siblings collide onto one id and tick each other. See CLAUDE.md,
//    "A checkbox id is a hash of its ancestor chain".
// ---------------------------------------------------------------------------
for (const [code, details] of Object.entries(COURSE_DETAILS)) {
  walk(details, code, (node, where) => {
    if (Array.isArray(node.headers) && Array.isArray(node.rows)) {
      const width = node.headers.length;
      node.rows.forEach((row, i) => {
        if (!Array.isArray(row)) {
          run.fail('table shape', `${where}.rows[${i}]`, 'row is not an array');
        } else if (row.length !== width) {
          run.fail('table width', `${where}.rows[${i}]`, `${row.length} cells against ${width} headers`);
        }
      });
      run.count('tables');
    }

    if (node.cite !== undefined && !node.text) {
      run.fail('quote box', where, 'statutes entry has a cite but no text');
    }
    if (node.text !== undefined && node.cite !== undefined) run.count('quote boxes');

    if (!Array.isArray(node.steps)) return;
    run.count('flowcharts');
    const stepLabels = new Set();
    const stepIds = new Set(node.steps.map((s) => s.id).filter(Boolean));
    node.steps.forEach((step, i) => {
      run.count('flowchart steps');
      if (!step.label) {
        run.fail('step label', `${where}.steps[${i}]`, 'step has no label — it has no checkbox id');
        return;
      }
      if (stepLabels.has(step.label)) {
        run.fail('checkbox id collision', `${where}.steps[${i}]`, `two steps share the label ${JSON.stringify(step.label)} — they share one checkbox`);
      }
      stepLabels.add(step.label);

      for (const branch of step.branches || []) {
        if (branch.goto && !stepIds.has(branch.goto)) {
          run.fail('dangling goto', `${where}.steps[${i}]`, `branch goto "${branch.goto}" matches no step id — the jump renders as nothing`);
        }
      }

      const pointTexts = new Set();
      (step.points || []).forEach((point, j) => {
        const text = typeof point === 'string' ? point : point && point.text;
        if (text == null) {
          run.fail('point shape', `${where}.steps[${i}].points[${j}]`, 'point is neither a string nor { text, points }');
          return;
        }
        if (pointTexts.has(text)) {
          run.fail('checkbox id collision', `${where}.steps[${i}]`, `two points under one step share the text ${JSON.stringify(text.slice(0, 60))}`);
        }
        pointTexts.add(text);

        const kids = (typeof point === 'string' ? null : point.points) || [];
        const kidTexts = new Set();
        for (const kid of kids) {
          if (typeof kid !== 'string') {
            run.fail('point shape', `${where}.steps[${i}].points[${j}]`, 'sub-points must be plain strings — both flowLeafIds and the renderer treat them as such');
            continue;
          }
          if (kidTexts.has(kid)) {
            run.fail('checkbox id collision', `${where}.steps[${i}].points[${j}]`, `two sub-points share the text ${JSON.stringify(kid.slice(0, 60))}`);
          }
          kidTexts.add(kid);
        }
      });
    });
  });
}

// ---------------------------------------------------------------------------
// 3. crossRefs / routes resolution and label hygiene.
//
//    An unresolvable ref does not error — resolveIssueRef degrades it to
//    plain text, so a renamed issue id turns a link into dead prose that
//    nobody notices. And resolveIssueRef prepends the target's own code, so
//    a label that repeats the code or session renders it twice.
// ---------------------------------------------------------------------------
function refProblem(code, ref) {
  const details = COURSE_DETAILS[code];
  if (!details) return `course ${code} has no courseDetails entry`;
  const session = details.sessions && details.sessions[ref.session];
  if (!session) return `session "${ref.session}" is not in ${code}`;
  const issueTypes = (session.examNotes && session.examNotes.issueTypes) || [];
  if (!issueTypes.some((t) => t.id === ref.issue)) return `issue "${ref.issue}" is not in ${code}/${ref.session}`;
  return null;
}

for (const [code, details] of Object.entries(COURSE_DETAILS)) {
  walk(details, code, (node, where) => {
    for (const [field, refs] of [['crossRefs', node.crossRefs], ['routes', node.routes]]) {
      if (!Array.isArray(refs)) continue;
      refs.forEach((ref, i) => {
        const at = `${where}.${field}[${i}]`;
        run.count('refs');
        const problem = refProblem(code, ref);
        if (problem) run.fail('unresolved ref', at, `${problem} (label: ${JSON.stringify(ref.label)})`);
        if (ref.label && /\b(?:LG|SG)\s*\d/.test(ref.label)) {
          run.fail('label repeats session', at, `${JSON.stringify(ref.label)} — resolveIssueRef already prepends the target's code`);
        }
        if (ref.label && /\b[A-Z]{3}-(?:LG|SG)\d/.test(ref.label)) {
          run.fail('label repeats code', at, `${JSON.stringify(ref.label)} — resolveIssueRef already prepends the target's code`);
        }
      });
    }
  });
}

// ---------------------------------------------------------------------------
// 4. flowLeafIds vs the renderer.
//
//    common-core.js's flowLeafIds and common-content.js's flowchartHtml walk
//    the same three-level tree with the same hashing scheme, in two files
//    that cannot call each other (core -> content is one-way). If they ever
//    drift, the progress meter counts checkboxes the page does not have, or
//    misses ones it does — and a reader's saved ticks stop matching. Derive
//    the ids a third time here, from the data, and require all three to agree.
// ---------------------------------------------------------------------------
for (const [code, details] of Object.entries(COURSE_DETAILS)) {
  for (const [sessionKey, session] of Object.entries(details.sessions || {})) {
    for (const issue of ((session.examNotes && session.examNotes.issueTypes) || [])) {
      const flowchart = issue.answering && issue.answering.flowchart;
      if (!flowchart) continue;
      const where = `${code}/${sessionKey}/${issue.id}`;

      const expectedAll = new Set();
      const expectedLeaves = new Set();
      for (const step of flowchart.steps || []) {
        const stepId = PCLL.noteCheckId(step.label);
        expectedAll.add(stepId);
        const points = step.points || [];
        if (!points.length) { expectedLeaves.add(stepId); continue; }
        for (const point of points) {
          const text = typeof point === 'string' ? point : point.text;
          const pointId = PCLL.noteCheckId([step.label, text].join(NUL));
          expectedAll.add(pointId);
          const kids = (typeof point === 'string' ? null : point.points) || [];
          if (!kids.length) { expectedLeaves.add(pointId); continue; }
          for (const kid of kids) {
            const kidId = PCLL.noteCheckId([step.label, text, kid].join(NUL));
            expectedAll.add(kidId);
            expectedLeaves.add(kidId);
          }
        }
      }

      const fromCore = new Set(PCLL.flowLeafIds(flowchart));
      if (fromCore.size !== expectedLeaves.size || [...expectedLeaves].some((id) => !fromCore.has(id))) {
        run.fail('leaf ids drifted', where, `flowLeafIds returned ${fromCore.size} leaves, the data has ${expectedLeaves.size}`);
      }

      const html = PCLL.examIssueSectionsHtml(issue, {}, { checkable: true, checked: new Set() });
      const rendered = new Set([...html.matchAll(/<input type="checkbox" data-flow-id="([^"]+)"/g)].map((m) => m[1]));
      if (rendered.size !== expectedAll.size || [...expectedAll].some((id) => !rendered.has(id))) {
        run.fail('rendered ids drifted', where, `the page renders ${rendered.size} checkboxes, the data has ${expectedAll.size} nodes`);
      }
      run.count('flowcharts cross-checked');
    }
  }
}

run.done();
