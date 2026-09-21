'use strict';

// Sourcing checks: does a claim in the notes rest on something the page
// itself establishes?
//
// This exists because of a real error that every other check passed. A step
// on CCT-6.09 said a shareholder who did not call an Event of Default in time
// was "left to its ordinary contractual remedies for the underlying breach",
// and the model sentence put it as "its remedy would have been in damages".
// Nothing in the course materials said that -- it was general contract law
// imported from outside and presented as part of the topic -- and it was also
// wrong, because six of the seven limbs of the clause are not breaches by
// anyone at all. It survived `npm run check`, `npm run lint`, the whole of
// `npm test`, the quote-box verifier and a browser pass, because all of those
// look at structure, markup or quoted text. None of them read prose.
//
// Prose cannot be checked against its source in CI: the course documents are
// uploads, not repo files. What CAN be checked is whether the notes agree
// with THEMSELVES -- and the two shapes below are the ones that error took.
//
//   1. A provision named where the page never establishes it.
//   2. A statement that someone has, or lacks, a legal remedy, with nothing
//      cited for it and no authority on the page that mentions it.
//
// Neither is a substitute for reading a claim against the materials by hand.
// Check 2 in particular is a floor: it catches an unsourced claim phrased as
// an entitlement, which is how a remedy assertion is almost always phrased,
// and it catches nothing else.
//
// Both detectors are exercised on fixtures on every run (see SELFTEST at the
// foot of this file), because a checker with no failing input is
// indistinguishable from one that does nothing.

const path = require('path');
const { createRun, loadSite, walk } = require('./verify-lib');

const ROOT = path.join(__dirname, '..');
const run = createRun('note sourcing');
const { PCLL, COURSE_DETAILS } = loadSite(ROOT);

// The shapes a provision is written in across this corpus. Deliberately
// narrow: a loose pattern here produces noise, and a check nobody trusts
// gets ignored, which is worse than not having it.
const CITE = /\b(?:MA\s?\d+[A-Z]?(?:\(\d+[A-Z]?\))?(?:\([a-z]+\))?|ss?\.?\s?\d+[A-Z]*(?:\(\d+\))?(?:\([a-z]+\))?|O\.\s?\d+[A-Z]?(?:\s+rr?\.\s?\d+[A-Z]*)?|rr?\.\s?\d+[A-Z]*|clause \d+(?:\.\d+)*(?:\([a-z]+\))?|Cap\.\s?\d+[A-Z]?|Part \d+)/gi;

const norm = (t) => String(t).toLowerCase().replace(/\s+/g, ' ');

// One citation can be written several ways for the same provision, and a
// naive string compare reads those as different provisions: `rr.9(2)-(3)` in
// a model sentence against `r.9(2)` in the step beside it, `ss141, 142`
// against `s141`, `O.13A r.4` against an `O.13A` established at the top of
// the page and an `r.4` in the step. So a match is made on the finest parts:
// a plural prefix is singularised, and a compound `O.X r.Y` becomes the two
// tokens it is built from, each of which must be found.
function citeTokens(cite) {
  const c = norm(cite).replace(/\bss\.?\s?/g, 's').replace(/\brr\.\s?/g, 'r.').replace(/\s+/g, '');
  const m = c.match(/^(o\.\d+[a-z]?)(r\.\d+[a-z]*)$/);
  return m ? [m[1], m[2]] : [c];
}
const citesIn = (t) => new Set((String(t).match(CITE) || []).map(norm));

// A section is routinely cited as a LIST -- "ss641, 643 and 645", "ss627-8" --
// and only the first member of one carries the `s` the pattern keys on. Read
// the whole list, so a page that sets out s643 in the middle of one counts as
// having cited it.
const CITE_LIST = /\bss\.?\s?\d+[A-Z]*(?:\s*(?:,|and|&|-|–|to)\s*\d+[A-Z]*)+/gi;
function listedSections(text) {
  const out = [];
  for (const run of String(text).match(CITE_LIST) || []) {
    for (const n of run.match(/\d+[A-Za-z]*/g) || []) out.push(`s${n.toLowerCase()}`);
  }
  return out;
}
const hasCite = (t) => { CITE.lastIndex = 0; const r = CITE.test(String(t)); CITE.lastIndex = 0; return r; };

// ---------------------------------------------------------------------
// Check 2's detector.
//
// RELIEF names a form of relief; ENTITLE is the assertion that somebody has
// or lacks it. BOTH are required, which is what separates "the Plaintiff may
// recover damages" (a proposition of law, and so something that has to come
// from somewhere) from "distinguish a liquidated claim from unliquidated
// damages" (terminology) or "the prayer must ask for an injunction"
// (drafting practice). Triage over the whole corpus is what set this line:
// matching relief alone fired 58 times and was wrong essentially every time,
// because these notes are ABOUT remedies and the words are everywhere.
//
// Note what ENTITLE deliberately omits: the bare nouns "claim" and "sue".
// "a claim for an injunction" is the name of a thing, not an assertion that
// anyone is entitled to one, and including them was the single largest
// source of false positives.
// ---------------------------------------------------------------------
const RELIEF = /\b(damages|specific performance|injunctive relief|rescission|restitution|quantum meruit|an account of profits|compensation|contractual remedies|ordinary remedies|common law remedies|remedies at law|(?:its|their|his|her|a|the) remedy)\b/i;
const ENTITLE = /\b(entitled to|left to|falls? back on|fell back on|may recover|can recover|could recover|recoverable|may sue|can sue|could sue|may claim|can claim|could claim|would (?:be|have been) in|lies in|is liable|are liable|be liable|liable in|liable for|available to (?:it|them|him|her|the))\b/i;

// Text inside quotation marks is a SPECIMEN -- a sentence shown as a model
// pleading or shown as a mistake -- not the notes speaking in their own
// voice. `examples` of bad pleadings are full of confident legal assertions
// precisely because that is what makes them bad.
const unquote = (s) => String(s).replace(/"[^"]*"/g, ' ').replace(/[“][^”]*[”]/g, ' ');

const sentences = (t) => String(t).split(/(?<=[.;])\s+/).filter(Boolean);

// A sentence that asserts a remedy without citing anything. Returns the form
// of relief it names, or null.
function unsourcedRelief(sentence) {
  const s = unquote(sentence);
  const m = s.match(RELIEF);
  if (!m || !ENTITLE.test(s) || hasCite(s)) return null;
  return m[1];
}

// Where a claim about the law can appear. `triggers` is excluded on purpose:
// a Fact Pattern Trigger describes FACTS a reader would meet in a problem, so
// "the 75% holder passed a special resolution" is the trigger doing its job.
// `authorities` is excluded because it IS the anchor everything else is
// measured against.
const CLAIM_KEYS = new Set(['detail', 'why', 'write', 'trap', 'text', 'label', 'summary', 'points', 'bullets']);
const SKIP_SECTIONS = new Set(['triggers', 'authorities']);

// Everything an issue type's authorities section establishes, as one string.
function anchorTextOf(issue) {
  return norm(JSON.stringify(issue.authorities || {}));
}

// Every authored string in an issue type outside the skipped sections, tagged
// with the key it sits under so a claim can be told from a fact pattern.
function claimStrings(issue) {
  const out = [];
  for (const [section, value] of Object.entries(issue)) {
    if (SKIP_SECTIONS.has(section) || typeof value !== 'object' || value === null) continue;
    walk(value, section, (node, at) => {
      for (const [k, v] of Object.entries(node)) {
        if (typeof v === 'string' && v.trim() && CLAIM_KEYS.has(k)) out.push({ at: `${at}.${k}`, text: v });
      }
      // `points` and `bullets` hold bare strings, which `walk` never visits
      // as objects -- pick those up here so a rule stated as a point counts.
      for (const arrKey of ['points', 'bullets']) {
        if (!Array.isArray(node[arrKey])) continue;
        node[arrKey].forEach((p, i) => {
          if (typeof p === 'string' && p.trim()) out.push({ at: `${at}.${arrKey}[${i}]`, text: p });
        });
      }
    });
  }
  return out;
}

for (const [code, details] of Object.entries(COURSE_DETAILS)) {
  for (const [key, session] of Object.entries(details.sessions || {})) {
    const issues = (session.examNotes && session.examNotes.issueTypes) || [];
    issues.forEach((issue, idx) => {
      const where = `${code}/${key}/${PCLL.issueCode(code, details, key, idx)}`;
      run.count('issue types');

      // 1. A model sentence may only name a provision the PAGE establishes.
      //
      // A `write` line is transcribed into a script under exam pressure, so a
      // provision in one that appears nowhere else on the page is either a
      // typo or invented -- and a reader has no way to tell which. The unit
      // is the issue type, not the step, because the page is what the reader
      // has in front of them: a provision set out in the authorities table is
      // visible from any step. CLAUDE.md states this rule per step, which is
      // the better authoring habit but not a defect when broken (62 such
      // steps today, every one of them citing the provision elsewhere on its
      // own page).
      // Every provision the page establishes ANYWHERE except in a model
      // sentence: a `write` must be grounded by something else, so it cannot
      // be allowed to vouch for itself.
      const pageSource = JSON.stringify(issue, (k, v) => (k === 'write' ? undefined : v));
      const pageCites = new Set(listedSections(pageSource));
      for (const c of citesIn(pageSource)) {
        for (const tok of citeTokens(c)) pageCites.add(tok);
      }
      // A citation is satisfied by anything MORE specific: a model sentence
      // naming s141 is grounded by the page's s141(1), and one naming s13 by
      // s13(3). The reverse is not true -- s19(16) is a different provision
      // from s19(1), and CLAUDE.md's cite-to-the-subsection rule is the whole
      // reason that distinction matters.
      const grounded = (tok) => {
        for (const p of pageCites) if (p === tok || p.startsWith(`${tok}(`)) return true;
        return false;
      };
      for (const step of ((issue.answering && issue.answering.flowchart && issue.answering.flowchart.steps) || [])) {
        const write = step.exam && step.exam.write;
        if (!write) continue;
        run.count('model sentences');
        for (const c of citesIn(write)) {
          const missing = citeTokens(c).filter((tok) => !grounded(tok));
          run.check('write cites what the page does not', !missing.length, `${where} / ${step.id}`,
            `the model sentence names ${c}, and nothing else on this page cites ${missing.join(' or ')} — a reader transcribing it cannot see where it came from`);
        }
      }

      // 2. A remedy is a proposition of law and has to come from somewhere.
      //
      // This is the shape the CCT-6.09 error took. It fires only when the
      // sentence asserts an entitlement, cites nothing itself, AND the page's
      // authorities never mention that form of relief -- so a page that has
      // sourced its remedies can discuss them freely.
      const anchor = anchorTextOf(issue);
      for (const { at, text } of claimStrings(issue)) {
        for (const sentence of sentences(text)) {
          run.count('sentences read');
          const relief = unsourcedRelief(sentence);
          if (!relief || anchor.includes(norm(relief))) continue;
          run.fail('remedy claimed with nothing behind it', `${where} (${at})`,
            `asserts an entitlement to "${relief}" but cites nothing, and no authority on this page mentions it — cite the provision or case, or say the materials do not address it: "${sentence.trim().slice(0, 120)}${sentence.length > 120 ? '…' : ''}"`);
        }
      }
    });
  }
}

// ---------------------------------------------------------------------
// Self-test. Both detectors run against the text that actually went wrong,
// and against text that must NOT trip them. Without this the file would pass
// silently if a regex were broken into never matching, which is the failure
// mode a checker cannot report on itself.
// ---------------------------------------------------------------------
const SELFTEST = {
  // The two sentences removed in commit 7c4f55c.
  catches: [
    'If it does not call within the window, the Event of Default produces no transfer, and the non-defaulting Shareholder is left to its ordinary contractual remedies for the underlying breach.',
    'had it not called within 20 Business Days, its remedy would have been in damages for the underlying breach',
    'The buyer may recover damages for the seller\'s failure to complete.',
  ],
  // Shapes that are legitimately in the corpus and must stay silent.
  ignores: [
    'The Plaintiff may recover damages under s27(1) of the Ordinance.',        // cited
    'Distinguish a liquidated claim from unliquidated damages.',                // terminology
    'A claim that needs a declaration or an injunction has to reach the prayer for relief.', // drafting
    'The pleading reads "the Plaintiff is entitled to punitive damages", which is argument.', // specimen
  ],
};
for (const s of SELFTEST.catches) {
  run.check('self-test: detector is asleep', unsourcedRelief(s) !== null, 'verify-sourcing.js',
    `the remedy detector did not fire on text it exists to catch: "${s.slice(0, 80)}…"`);
}
for (const s of SELFTEST.ignores) {
  run.check('self-test: detector is too loud', unsourcedRelief(s) === null, 'verify-sourcing.js',
    `the remedy detector fired on text that is fine: "${s.slice(0, 80)}…"`);
}
run.count('self-tests', SELFTEST.catches.length + SELFTEST.ignores.length);

run.done();
