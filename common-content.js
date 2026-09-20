// Part 2 of 3 of the site's shared client-side module -- load this AFTER
// common-core.js (needs escapeHtml from it) and BEFORE common-session.js
// (which calls into this file). See common-core.js's header and CLAUDE.md
// for the split's rationale and the required load order.
//
// The structured-content vocabulary a session write-up or a reference-
// material appendix is built from: plain lists, quoted-provision/warning
// callouts, step diagrams, tables (inline in fullNoteBodyHtml), and the
// cloze/flashcard quiz widgets. courseDetails.js authors pick whichever
// shape actually fits a given note's content rather than forcing
// everything into prose -- see fullNoteBodyHtml.
(() => {
  'use strict';

  const { escapeHtml, citeHtml, noteCheckId, issueCode, initDialog, RACCOON } = window.PCLL;

  function listSection(heading, items) {
    if (!items || !items.length) return '';
    return `<h3>${escapeHtml(heading)}</h3><ul>${items.map((i) => `<li>${escapeHtml(i)}</li>`).join('')}</ul>`;
  }

  function referenceHtml(ref) {
    if (!ref) return '';
    let body = `<h4>${escapeHtml(ref.title)}</h4>`;
    if (ref.external) {
      body += `<p class="muted">${escapeHtml(ref.note || '')}</p>`;
    } else if (ref.sections) {
      body += ref.sections.map((s) => `<div class="reference-section"><strong>${escapeHtml(s.heading)}</strong><ul>${s.items.map((i) => `<li>${escapeHtml(i)}</li>`).join('')}</ul></div>`).join('');
    } else {
      if (ref.body) body += `<p>${escapeHtml(ref.body)}</p>`;
      if (ref.bullets) body += `<ul>${ref.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join('')}</ul>`;
      if (ref.statutes) body += statuteBoxHtml(ref.statutes);
      if (ref.diagrams) body += ref.diagrams.map((d) => processDiagramHtml(d)).join('');
      if (ref.legalIssues) body += legalIssuesHtml(ref.legalIssues);
      if (ref.warnings) body += warningBoxHtml(ref.warnings);
      if (ref.checkboxes) body += `<ul>${ref.checkboxes.map((c) => `<li>${escapeHtml(c)}</li>`).join('')}</ul>`;
      if (ref.fields) body += `<p class="muted">Fields: ${ref.fields.map(escapeHtml).join(', ')}</p>`;
    }
    return `<div class="reference-block">${body}</div>`;
  }

  function resolveDeadlineFromDetails(details, deadlineId) {
    return deadlineId && details && (details.deadlines || []).find((d) => d.id === deadlineId);
  }

  // Renders a numbered step-by-step flow (e.g. a 5-stage process model) as a
  // small horizontal diagram — wraps to a vertical stack on narrow screens
  // via CSS flex-wrap, no chart library needed.
  function processDiagramHtml(diagram) {
    if (!diagram || !diagram.steps || !diagram.steps.length) return '';
    const title = diagram.title ? `<p class="process-diagram-title">${escapeHtml(diagram.title)}</p>` : '';
    const steps = diagram.steps.map((s, i) => `
      <div class="process-step">
        <div class="process-step-badge">${i + 1}</div>
        <div class="process-step-label">${escapeHtml(s.label)}</div>
        ${s.detail ? `<div class="process-step-detail">${escapeHtml(s.detail)}</div>` : ''}
      </div>${i < diagram.steps.length - 1 ? '<div class="process-arrow" aria-hidden="true">&#8594;</div>' : ''}`).join('');
    return `${title}<div class="process-diagram">${steps}</div>`;
  }

  // A branching decision flow — the sibling of processDiagramHtml above, for
  // "how do I answer this?" rather than "what are the stages of X?".
  // `diagram` is linear and horizontal; this is vertical and can fork, so it
  // stays readable however long it gets (which is also why it needs no
  // narrow-screen special case — it's already a stack).
  //
  //   flowchart: {
  //     title: 'Optional heading',
  //     steps: [
  //       { id: 'liq',                       // only needed if a branch gotos it
  //         label: 'Is the claim for a liquidated sum?',
  //         detail: 'Optional one-liner.',
  //         points: ['Optional sub-bullets'],
  //         branches: [
  //           { condition: 'Yes', then: 'O.14 is open', goto: 'def' },
  //           { condition: 'No',  then: 'Consider O.14A instead' },
  //         ] },
  //     ],
  //   }
  //
  // A `goto` resolves to the CURRENT display position of the step with that
  // id ("→ Step 4: Defence"), so inserting a step never breaks a reference
  // the way an authored step number would. It renders as plain text, never
  // an <a href="#id">: a flowchart can sit inside a mindmap popup <template>
  // that gets cloneNode'd, and DOM ids would then collide. An unresolvable
  // goto degrades to just the `then` text rather than throwing.
  // A flowchart point is either a plain string, or `{ text, points: [...] }`
  // where the nested points are its sub-points -- the third level. Both
  // shapes coexist so the ~260 point lists authored as plain strings keep
  // working untouched, and a sub-level is added only where the rule actually
  // has one (a lettered list of limbs, a multi-part test).
  function flowPointText(p) { return typeof p === 'string' ? p : p.text; }
  function flowPointKids(p) { return (typeof p === 'string' ? null : p.points) || []; }

  // The two coaching blocks a flowchart step may carry, rendered as inline
  // <details> under the step's own label:
  //
  //   why:  'Why the rule is shaped this way -- the reasoning that makes the
  //          step memorable rather than a line to recite.'
  //   exam: { write: 'A sentence to transcribe with the facts swapped in.',
  //           trap:  'The one mistake that loses marks at this step.' }
  //
  // Both are optional and independent. They are deliberately NOT checkboxes:
  // per the three-level rule, only the flowchart's own step/point/sub-point
  // chain is work to complete -- these are things to understand while doing
  // it, so they sit outside the checklist and outside flowLeafIds entirely.
  // That also means adding them to an authored step cannot disturb a
  // reader's saved ticks, since no checkbox id is derived from them.
  function flowCoachHtml(step) {
    const why = step.why
      ? `<details class="exam-coach-item exam-coach-item--why"><summary>Why this matters</summary>`
        + `<div class="exam-coach-body">${citeHtml(step.why)}</div></details>`
      : '';
    const ex = step.exam || {};
    const write = ex.write
      ? `<p class="exam-coach-line exam-coach-line--write"><span class="exam-coach-tag">Write</span>${citeHtml(ex.write)}</p>`
      : '';
    const trap = ex.trap
      ? `<p class="exam-coach-line exam-coach-line--trap"><span class="exam-coach-tag">Trap</span>${citeHtml(ex.trap)}</p>`
      : '';
    const exam = (write || trap)
      ? `<details class="exam-coach-item exam-coach-item--exam"><summary>In the exam</summary>`
        + `<div class="exam-coach-body">${write}${trap}</div></details>`
      : '';
    return (why || exam) ? `<div class="exam-coach">${why}${exam}</div>` : '';
  }

  // Renders one checkbox row. `path` is the chain of ancestor texts, which is
  // what makes the id both stable under reordering and unique on the page:
  // two points with identical wording under different steps hash differently.
  function flowCheckHtml(path, text, checked, cls, extra) {
    const id = noteCheckId(path.join('\u0000'));
    const on = checked.has(id);
    return `<label class="${cls}${on ? ' checked' : ''}" data-flow-id="${escapeHtml(id)}"${extra || ''}>`
      + `<input type="checkbox" data-flow-id="${escapeHtml(id)}"${on ? ' checked' : ''} />`
      + `<span>${citeHtml(text)}</span></label>`;
  }

  // The answering flowchart, rendered as a three-level checklist: each
  // numbered step is a parent, its points are sub-checkboxes, and a point's
  // own `points` are sub-sub-checkboxes. Only LEAVES are persisted --
  // wireFlowChecks derives every parent's checked/indeterminate state from
  // its descendants, so a stored Set can never disagree with what is shown.
  // A step with no points is itself a leaf.
  function flowchartHtml(fc, opts) {
    if (!fc || !fc.steps || !fc.steps.length) return '';
    const o = opts || {};
    const checkable = !!o.checkable;
    const checked = o.checked || new Set();
    const positionOf = new Map(fc.steps.map((s, i) => [s.id, i + 1]));
    const title = fc.title ? `<p class="exam-flow-title">${escapeHtml(fc.title)}</p>` : '';
    const steps = fc.steps.map((s, i) => {
      const stepPath = [s.label];
      const points = (s.points || []).length
        ? `<ul class="exam-flow-points">${s.points.map((p) => {
          const text = flowPointText(p);
          const kids = flowPointKids(p);
          const pointPath = stepPath.concat(text);
          const subs = kids.length
            ? `<ul class="exam-flow-subpoints">${kids.map((k) => (checkable
              ? `<li>${flowCheckHtml(pointPath.concat(k), k, checked, 'exam-flow-check exam-flow-check--sub')}</li>`
              : `<li>${citeHtml(k)}</li>`)).join('')}</ul>`
            : '';
          const body = checkable
            ? flowCheckHtml(pointPath, text, checked, 'exam-flow-check exam-flow-check--point')
            : citeHtml(text);
          return `<li>${body}${subs}</li>`;
        }).join('')}</ul>`
        : '';
      const branches = (s.branches || []).length
        ? `<ul class="exam-flow-branches">${s.branches.map((b) => {
          const target = b.goto && positionOf.get(b.goto);
          const targetStep = target && fc.steps[target - 1];
          const jump = targetStep
            ? `<span class="exam-flow-goto">&#8594; Step ${target}: ${escapeHtml(targetStep.label)}</span>`
            : '';
          return `<li class="exam-flow-branch"><strong class="exam-flow-cond">${citeHtml(b.condition)}</strong>${b.then ? ` — ${citeHtml(b.then)}` : ''}${jump}</li>`;
        }).join('')}</ul>`
        : '';
      const decision = (s.branches || []).length ? ' exam-flow-step--decision' : '';
      const label = checkable
        ? flowCheckHtml(stepPath, s.label, checked, 'exam-flow-check exam-flow-check--step')
        : `<span class="exam-flow-label">${citeHtml(s.label)}</span>`;
      return `<li class="exam-flow-step${decision}">
        <span class="exam-flow-num" aria-hidden="true">${i + 1}</span>
        ${label}
        ${s.detail ? `<span class="exam-flow-detail">${citeHtml(s.detail)}</span>` : ''}
        ${flowCoachHtml(s)}
        ${points}${branches}
      </li>`;
    }).join('');
    return `${title}<ol class="exam-flow${checkable ? ' exam-flow--checkable' : ''}">${steps}</ol>`;
  }

  // Behaviour for a checkable flowchart. Ticking a leaf saves it; ticking a
  // parent sets every leaf beneath it. After any change -- and once on load --
  // each parent is recomputed from its descendants: checked when all are,
  // indeterminate when only some are. Because parents are derived rather than
  // stored, editing a step's points can never leave a parent stuck ticked.
  function wireFlowChecks(containerEl, load, save) {
    // NOTE the `:scope` on both queries. Without it, `ul input` matches any
    // input that has a `ul` ANYWHERE in its ancestry -- including the row's
    // own input, whose enclosing <ul class="exam-flow-points"> sits outside
    // the <li> being searched. That made every point count itself as one of
    // its own leaves, so it could never roll up to fully checked.
    const KIDS = ':scope ul input[type="checkbox"][data-flow-id]';
    const leavesOf = (labelEl) => {
      const li = labelEl.closest('li');
      // A descendant input is a leaf only if nothing is nested beneath IT --
      // so a step's leaves are its sub-points where they exist, and its bare
      // points where they don't, never the intermediate point rows.
      const leaves = [...li.querySelectorAll(KIDS)]
        .filter((inp) => inp.closest('li').querySelectorAll(KIDS).length === 0);
      return leaves.length ? leaves : [labelEl.querySelector('input')];
    };
    const refresh = () => {
      // Order is irrelevant: every parent is computed from real leaf inputs,
      // never from another parent's derived state.
      for (const row of containerEl.querySelectorAll('.exam-flow-check')) {
        const input = row.querySelector('input');
        const leaves = leavesOf(row);
        const isParent = !(leaves.length === 1 && leaves[0] === input);
        if (isParent) {
          const on = leaves.filter((l) => l.checked).length;
          input.checked = on === leaves.length;
          input.indeterminate = on > 0 && on < leaves.length;
        }
        row.classList.toggle('checked', input.checked);
        row.classList.toggle('partial', input.indeterminate);
      }
    };
    containerEl.addEventListener('change', (e) => {
      const input = e.target.closest('input[type="checkbox"][data-flow-id]');
      if (!input) return;
      const row = input.closest('.exam-flow-check');
      const set = load();
      for (const leaf of leavesOf(row)) {
        leaf.checked = input.checked;
        if (input.checked) set.add(leaf.dataset.flowId);
        else set.delete(leaf.dataset.flowId);
      }
      save(set);
      refresh();
    });
    refresh();
  }

  // A callout for compliance-critical facts (statutory deadlines, offences,
  // consequences of non-compliance) — deliberately distinct from a plain
  // bullet so the reader's eye catches it while skimming.
  function warningBoxHtml(items) {
    if (!items || !items.length) return '';
    return `<div class="law-callout law-callout--warning">
      <div class="law-callout-head"><span aria-hidden="true">&#9888;</span> Important</div>
      <ul>${items.map((i) => `<li>${citeHtml(i)}</li>`).join('')}</ul>
    </div>`;
  }

  // A quoted-provision box — for a statute section or case-law principle
  // quoted (approximately) verbatim, with its citation. `cite` names the
  // source (e.g. "s4 Partnership Ordinance (Cap. 38)" or "Lord Hoffmann").
  function statuteBoxHtml(items) {
    if (!items || !items.length) return '';
    return items.map((s) => `<blockquote class="law-callout law-callout--quote">
      <p>${escapeHtml(s.text)}</p>
      ${s.cite ? `<cite>&mdash; ${citeHtml(s.cite)}</cite>` : ''}
    </blockquote>`).join('');
  }

  // One `fullNotes`/legal-issue-note entry — and one exam-notes section (see
  // examIssueSectionsHtml below) — can mix any of these structured shapes
  // alongside (or instead of) a plain `body` paragraph, so courseDetails.js
  // picks whichever shape (bullets/table/diagram/flowchart/Q&A/quoted
  // provision/warning) actually fits the content instead of forcing
  // everything into prose.
  //
  // This function is the single source of truth for the vocabulary. Emission
  // order is fixed here, NOT by the order keys are authored in.
  function fullNoteBodyHtml(n, opts) {
    let html = '';
    if (n.body) html += `<p>${citeHtml(n.body)}</p>`;
    if (n.bullets) html += `<ul>${n.bullets.map((b) => `<li>${citeHtml(b)}</li>`).join('')}</ul>`;
    if (n.bulletGroups) {
      html += n.bulletGroups.map((g) => `<h4>${citeHtml(g.heading)}</h4><ul>${g.items.map((i) => `<li>${citeHtml(i)}</li>`).join('')}</ul>`).join('');
    }
    if (n.statutes) html += statuteBoxHtml(n.statutes);
    if (n.table) {
      html += `<div class="table-scroll"><table class="session-table note-table"><thead><tr>${n.table.headers.map((h) => `<th>${escapeHtml(h)}</th>`).join('')}</tr></thead><tbody>${n.table.rows.map((r) => `<tr>${r.map((c) => `<td>${citeHtml(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    }
    if (n.diagram) html += processDiagramHtml(n.diagram);
    if (n.flowchart) html += flowchartHtml(n.flowchart, opts);
    if (n.qa) html += `<dl class="qa-list">${n.qa.map((p) => `<dt>${citeHtml(p.q)}</dt><dd>${citeHtml(p.a)}</dd>`).join('')}</dl>`;
    if (n.warnings) html += warningBoxHtml(n.warnings);
    return html;
  }

  // Shared by both the accordion (legalIssueHtml, used for reference-
  // material appendices) and the mindmap popup body (legalIssuesMindmapHtml,
  // used for a session's own top-level legal issues) — one issue's notes,
  // rendered directly (no further nested collapsing) so all of an issue's
  // content shows at once once you're looking at it.
  function legalIssueNotesHtml(issue) {
    return (issue.notes || []).map((n) => `<div class="legal-issue-note">
      <h4>${escapeHtml(n.heading)}</h4>
      ${fullNoteBodyHtml(n)}
    </div>`).join('');
  }

  // Groups fullNotes-style entries under a numbered legal issue (e.g.
  // "1. Types of Business Vehicles") — one top-level collapsible per issue.
  // Used for reference-material appendices (course.html's "Reference
  // Materials" details, e.g. Grade Descriptors); a session's own top-level
  // legal issues use the mindmap below instead.
  function legalIssueHtml(issue) {
    return `<details class="detail-content legal-issue"><summary>${escapeHtml(issue.number)}. ${escapeHtml(issue.heading)}</summary>${legalIssueNotesHtml(issue)}</details>`;
  }

  function legalIssuesHtml(issues) {
    if (!issues || !issues.length) return '';
    return issues.map(legalIssueHtml).join('');
  }

  // The fixed running order of an exam-notes issue type, and the only place
  // these headings are defined. Order is the order you'd actually work a
  // question: spot it (triggers) -> sketch the answer (skeleton) -> work it
  // in full (the flowchart) -> work it carefully (look-out) -> write it well
  // (skills) -> don't blow it (mistakes) -> look it up (authorities). The
  // skeleton sits right after the triggers, before the flowchart, because
  // it's the shape of the answer you'd sketch on scrap paper the moment you
  // spot the issue -- read it before working through the flowchart in full,
  // not after. `notes` is the catch-all and stays last.
  const EXAM_SECTIONS = [
    { key: 'triggers', heading: 'Fact Pattern Triggers' },
    { key: 'skeleton', heading: 'Model Answer Skeleton' },
    { key: 'answering', heading: 'Answering Flowchart' },
    { key: 'lookOut', heading: 'Things to Look Out For' },
    { key: 'skills', heading: 'Answering Skills' },
    { key: 'mistakes', heading: 'Common Mistakes' },
    { key: 'authorities', heading: 'Key Law & Authorities' },
  ];

  // Renders one exam-notes issue type — the body of an issue.html sub-page.
  //
  //   examNotes: {
  //     intro: 'Optional line above the index on the session page.',
  //     issueTypes: [{
  //       id: 'summary-judgment',        // URL slug: stable, authored, never derived
  //       title: 'Summary judgment (O.14)',
  //       summary: 'One line for the index card.',
  //       weighting: 'Commonly 15-20 marks',   // ONLY if a course document says so
  //       // Every section below is optional, and each one's value is a plain
  //       // fullNoteBodyHtml object -- so a section can be bullets, a table, a
  //       // flowchart, quoted provisions, or any mix, whichever the content
  //       // actually needs. The section heading supplies the framing, which is
  //       // why none of these needed their own bespoke shape.
  //       triggers:    { bullets: [...], routes: [...] },
  //         // `routes` turns the trigger list into a router: each entry is
  //         // { when, session, issue, label } -- the fact pattern, and the
  //         // issue type that actually answers it. Resolved into links by
  //         // examTriggerRoutesHtml in common-session.js and passed back in
  //         // via this function's `extras` argument. Same resolution rules as
  //         // crossRefs: a link only where both halves resolve.
  //       answering:   { flowchart: { steps: [...] } },
  //       lookOut:     { bullets: [...] },
  //       skills:      { bulletGroups: [...] },
  //       skeleton:    { bulletGroups: [...] },
  //       mistakes:    { bullets: [...] },
  //       authorities: { table: {...}, statutes: [...] },
  //       notes: [{ heading: 'Anything else', bullets: [...] }],   // catch-all, last
  //     }],
  //   }
  // `extras` is an optional `{ sectionKey: html }` map whose value is appended
  // INSIDE that section, after its authored body. It exists so the session
  // layer can inject content it alone can build -- resolved cross-links need
  // the live timetable, and common-content.js knows nothing about events --
  // without either duplicating the section chrome or inverting the
  // core -> content -> session dependency direction. A section with only an
  // extra and no authored body still renders.
  // The one issue-type index, shared by the session page and the course-wide
  // roll-up (which previously carried two copies of this markup that had to
  // be kept in step by hand). `groups` is [{ label, items }] where an item is
  // { href, code, title, done, total, tags }.
  //
  // Deliberately a dense ROW, not a card: the list is navigation, and at
  // 26 issues in one course a paragraph of summary per row buries the titles.
  // The summary still exists — it is the subtitle on the issue page itself,
  // which is where you are once the list has done its job.
  function examIssueListHtml(groups, opts) {
    const o = opts || {};
    const total = groups.reduce((n, g) => n + g.items.length, 0);
    if (!total) return '';
    const body = groups.map((g) => {
      const rows = g.items.map((it) => {
        const pct = it.total ? Math.round((it.done / it.total) * 100) : 0;
        const state = !it.total ? '' : it.done === it.total ? ' is-done' : it.done ? ' is-part' : '';
        const meter = it.total
          ? `<span class="exam-issue-progress${state}" role="img" aria-label="${it.done} of ${it.total} checklist points done">`
            + `<span class="exam-issue-bar"><span style="width:${pct}%"></span></span>`
            + `<span class="exam-issue-count">${it.done}/${it.total}</span></span>`
          : '';
        const tags = (it.tags || []).map((t) => `<span class="tag-chip exam-issue-tag">${escapeHtml(t)}</span>`).join('');
        // data-filter carries exactly what the filter box matches against, so
        // filtering never has to walk the row's DOM or re-read its text.
        return `<li class="exam-issue-row" data-filter="${escapeHtml((it.code + ' ' + it.title).toLowerCase())}">
          <a class="exam-issue-card${state}" href="${escapeHtml(it.href)}">
            <span class="exam-issue-code">${escapeHtml(it.code)}</span>
            <span class="exam-issue-title">${escapeHtml(it.title)}</span>
            ${tags ? `<span class="exam-issue-tags">${tags}</span>` : ''}
            ${meter}
            <span class="exam-issue-arrow" aria-hidden="true">&#8594;</span>
          </a></li>`;
      }).join('');
      // The label gets its own span so the count badge is not a bare sibling
      // text node — otherwise the heading's accessible name reads "LG39"
      // rather than "LG3, 9 issue types".
      // `quizHref` is optional and resolved by the caller (only it has the
      // timetable). It puts the session's derived Test Yourself round next
      // to that session's issue list, which is where a reader revising the
      // course is actually looking.
      const quiz = g.quizHref
        ? `<a class="exam-index-quiz" href="${escapeHtml(g.quizHref)}">Test yourself &#8594;</a>`
        : '';
      const head = g.label
        ? `<h3 class="exam-index-session"><span class="exam-index-label">${escapeHtml(g.label)}</span>`
          + `<span class="exam-index-count" aria-label="${g.items.length} issue types">${g.items.length}</span>${quiz}</h3>`
        : '';
      return `<div class="exam-issue-group" data-group="${escapeHtml(g.label || '')}">${head}<ol class="exam-issue-index">${rows}</ol></div>`;
    }).join('');
    // The filter earns its place once the list is long enough to scroll past.
    const filter = total >= (o.filterFrom || 8)
      ? `<div class="exam-index-filter">
          <input type="search" class="exam-filter-input" placeholder="Filter ${total} issue types by code or title…" aria-label="Filter issue types" />
          <span class="exam-filter-status" role="status"></span>
        </div>`
      : '';
    return filter + body;
  }

  // Wires the filter box produced above. Hides non-matching rows and any
  // group left empty, and announces the count for screen readers.
  function wireIssueFilter(containerEl) {
    const input = containerEl.querySelector('.exam-filter-input');
    if (!input) return;
    const status = containerEl.querySelector('.exam-filter-status');
    const rows = [...containerEl.querySelectorAll('.exam-issue-row')];
    const groups = [...containerEl.querySelectorAll('.exam-issue-group')];
    const apply = () => {
      const q = input.value.trim().toLowerCase();
      let shown = 0;
      for (const row of rows) {
        const hit = !q || row.dataset.filter.includes(q);
        row.hidden = !hit;
        if (hit) shown++;
      }
      for (const g of groups) g.hidden = !g.querySelector('.exam-issue-row:not([hidden])');
      if (status) status.textContent = q ? `${shown} of ${rows.length}` : '';
      containerEl.classList.toggle('is-filtered', !!q);
    };
    input.addEventListener('input', apply);
    input.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape' || !input.value) return;
      input.value = '';
      apply();
    });
  }

  function examIssueSectionsHtml(issue, extras, opts) {
    if (!issue) return '';
    const extra = extras || {};
    let html = EXAM_SECTIONS.map(({ key, heading }) => {
      const body = (issue[key] && fullNoteBodyHtml(issue[key], opts)) || '';
      const added = extra[key] || '';
      if (!body && !added) return '';
      return `<section class="exam-section exam-section--${key}"><h3>${escapeHtml(heading)}</h3>${body}${added}</section>`;
    }).join('');
    if (issue.notes && issue.notes.length) {
      html += `<section class="exam-section exam-section--notes"><h3>Further Notes</h3>${issue.notes.map((n) => `
        <div class="legal-issue-note"><h4>${citeHtml(n.heading)}</h4>${fullNoteBodyHtml(n, opts)}</div>`).join('')}</section>`;
    }
    return html;
  }

  // Parses `{{answer}}` markers out of a cloze item's template text into a
  // click-to-reveal blank — a small memory-testing aid for a session's key
  // legal principles, sitting alongside (not replacing) the full prose.
  function clozeItemHtml(item) {
    const parts = item.text.split(/(\{\{.+?\}\})/g);
    return `<li class="cloze-item">${parts.map((part) => {
      const m = /^\{\{(.+)\}\}$/.exec(part);
      if (!m) return escapeHtml(part);
      return `<button type="button" class="cloze-blank"><span class="cloze-hidden" aria-hidden="true">?</span><span class="cloze-answer">${escapeHtml(m[1])}</span></button>`;
    }).join('')}</li>`;
  }

  // `groups` is [{ topic, items: [{text}, ...] }, ...] — each topic renders
  // as its own labeled sub-section so a session covering several distinct
  // legal issues doesn't dump every cloze item into one undifferentiated
  // list. A flat array of items (the old shape) is also accepted, and
  // treated as a single unlabeled group, so nothing else has to change in
  // lockstep with this.
  function asQuizGroups(groups) {
    if (!groups || !groups.length) return [];
    return groups[0] && groups[0].items ? groups : [{ topic: '', items: groups }];
  }

  function clozeSectionHtml(groups) {
    const list = asQuizGroups(groups);
    if (!list.length) return '';
    return `<div class="cloze-section">
      <div class="cloze-head"><h3>Key Principles — Test Yourself</h3><button type="button" class="link-btn cloze-toggle-all">Reveal all</button></div>
      ${list.map((g) => `<div class="quiz-topic-group">
        ${g.topic ? `<h4 class="quiz-topic-heading">${escapeHtml(g.topic)}</h4>` : ''}
        <ul class="cloze-list">${g.items.map(clozeItemHtml).join('')}</ul>
      </div>`).join('')}
    </div>`;
  }

  // Delegated click handling for a rendered clozeSectionHtml() block — each
  // blank toggles independently; the "Reveal all" button flips every blank
  // in the section together and relabels itself based on current state.
  function wireClozeSection(container) {
    const section = container.querySelector('.cloze-section');
    if (!section) return;
    section.addEventListener('click', (e) => {
      const toggleAll = e.target.closest('.cloze-toggle-all');
      if (toggleAll) {
        const anyHidden = !!section.querySelector('.cloze-blank:not(.revealed)');
        section.querySelectorAll('.cloze-blank').forEach((b) => b.classList.toggle('revealed', anyHidden));
        toggleAll.textContent = anyHidden ? 'Hide all' : 'Reveal all';
        return;
      }
      const blank = e.target.closest('.cloze-blank');
      if (blank) blank.classList.toggle('revealed');
    });
  }

  // A single click-to-flip flashcard: `card` is { front, back }.
  function flashcardHtml(card, i) {
    return `<button type="button" class="flashcard" data-idx="${i}" aria-label="Flashcard — click to flip">
      <span class="flashcard-inner">
        <span class="flashcard-face flashcard-front">${escapeHtml(card.front)}</span>
        <span class="flashcard-face flashcard-back">${escapeHtml(card.back)}</span>
      </span>
    </button>`;
  }

  // Same topic-grouped shape as clozeSectionHtml — see asQuizGroups.
  function flashcardSectionHtml(groups) {
    const list = asQuizGroups(groups);
    if (!list.length) return '';
    return `<div class="flashcard-section">
      <div class="cloze-head"><h3>Flashcards</h3><button type="button" class="link-btn flashcard-toggle-all">Flip all</button></div>
      ${list.map((g, gi) => `<div class="quiz-topic-group">
        ${g.topic ? `<h4 class="quiz-topic-heading">${escapeHtml(g.topic)}</h4>` : ''}
        <div class="flashcard-grid">${g.items.map((c, i) => flashcardHtml(c, `${gi}-${i}`)).join('')}</div>
      </div>`).join('')}
    </div>`;
  }

  // Delegated click handling for a rendered flashcardSectionHtml() block —
  // same "each toggles independently, one button flips them all together"
  // pattern as wireClozeSection.
  function wireFlashcardSection(container) {
    const section = container.querySelector('.flashcard-section');
    if (!section) return;
    section.addEventListener('click', (e) => {
      const toggleAll = e.target.closest('.flashcard-toggle-all');
      if (toggleAll) {
        const anyUnflipped = !!section.querySelector('.flashcard:not(.flipped)');
        section.querySelectorAll('.flashcard').forEach((c) => c.classList.toggle('flipped', anyUnflipped));
        toggleAll.textContent = anyUnflipped ? 'Unflip all' : 'Flip all';
        return;
      }
      const card = e.target.closest('.flashcard');
      if (card) card.classList.toggle('flipped');
    });
  }

  // ---------------------------------------------------------------------
  // Test Yourself: questions DERIVED from the exam notes, never authored.
  //
  // Same trade-off as issueCode: because every question is built out of
  // content an issue type already carries, the bank cannot drift out of
  // step with the notes, a newly authored issue is covered the moment it
  // lands, and nothing here can invent course content -- which is what
  // makes this safe under the no-fabrication rule. Four kinds:
  //
  //   spot      triggers.bullets   -> which issue type do these facts raise?
  //   route     triggers.routes    -> the near-miss. `routes` is already
  //                                   authored as "these neighbouring facts
  //                                   mean you are on the WRONG page, and
  //                                   here is the right one", so the home
  //                                   issue is a deliberate distractor
  //                                   rather than a random one.
  //   trap      flowchart exam.trap-> which mistake loses marks at this step?
  //   authority authorities.table  -> what does this case/provision establish?
  //
  // A question is only sound if its stem has exactly ONE right answer, so
  // the bank drops any stem that resolves to two different answers (the
  // same authority cited twice in one table for different propositions is
  // the case that actually occurs).
  // ---------------------------------------------------------------------

  // An authorities table earns an `authority` question only when its middle
  // column really is the authority and its last column really is what that
  // authority does. Most tables follow Point / Authority / What it
  // establishes, but a fair few are Step / What is pleaded / Rule -- where
  // the authority is in the LAST column -- and those must not be read
  // backwards. Anything that doesn't match is simply skipped.
  const AUTH_SOURCE_COL = /^(authority|provision|source|provision or case|case|test)$/i;
  const AUTH_EFFECT_COL = /establish|provide|decide|effect|outcome|position/i;

  function examIssueIndex(code, details) {
    const out = [];
    const sessions = (details && details.sessions) || {};
    Object.keys(sessions).forEach((sessionKey) => {
      const notes = sessions[sessionKey].examNotes;
      ((notes && notes.issueTypes) || []).forEach((issue, i) => {
        out.push({
          sessionKey,
          id: issue.id,
          issue,
          title: issue.title,
          code9: issueCode(code, details, sessionKey, i),
        });
      });
    });
    return out;
  }

  // Issue types this one already points at — its routes' targets and its
  // crossRefs. They make the best wrong answers, being related enough to be
  // tempting rather than obviously off-topic.
  function relatedKeys(entry) {
    const t = entry.issue.triggers || {};
    const refs = [].concat(t.routes || [], entry.issue.crossRefs || []);
    return refs.map((r) => r.session + '/' + r.issue);
  }

  // `scope` is what the questions are ABOUT. One session key, an array of
  // them, `{ sessions, issues }` to narrow to particular issue types (an
  // issue is keyed "<sessionKey>/<issueId>"), or nothing for the whole
  // course. An empty list at either level means "all of them".
  //
  // Distractors and route targets are always drawn from the whole course
  // regardless, because narrowing those too would make a tight round
  // answerable by elimination — every wrong answer would visibly be from
  // outside the scope.
  function examQuestionBank(code, details, scope) {
    const universe = examIssueIndex(code, details);
    const byRef = new Map(universe.map((e) => [e.sessionKey + '/' + e.id, e]));

    let keys = null;
    let issues = null;
    if (scope && !Array.isArray(scope) && typeof scope === 'object') {
      keys = (scope.sessions && scope.sessions.length) ? scope.sessions : null;
      issues = (scope.issues && scope.issues.length) ? new Set(scope.issues) : null;
    } else if (scope != null) {
      keys = Array.isArray(scope) ? scope : [scope];
      if (!keys.length) keys = null;
    }

    let pool = keys ? universe.filter((e) => keys.includes(e.sessionKey)) : universe;
    if (issues) pool = pool.filter((e) => issues.has(e.sessionKey + '/' + e.id));
    const qs = [];

    pool.forEach((e) => {
      const trig = e.issue.triggers || {};

      (trig.bullets || []).forEach((b) => qs.push({
        kind: 'spot',
        ask: 'Which issue type do these facts raise?',
        prompt: b,
        answer: e,
        related: relatedKeys(e),
      }));

      (trig.routes || []).forEach((r) => {
        const target = byRef.get(r.session + '/' + r.issue);
        // Same degrade rule as the rendered links: an unresolved ref is
        // skipped rather than guessed at.
        if (!target || target === e) return;
        qs.push({
          kind: 'route',
          // Deliberately not "these facts": a `routes` entry's `when` is
          // usually a fact pattern but is sometimes a framing ("The question
          // is how to classify the interest"), and the stem has to read
          // properly either way.
          ask: 'Which issue type actually deals with this?',
          prompt: r.when,
          answer: target,
          // The page the route is authored ON is the tempting wrong answer.
          decoy: e,
          related: relatedKeys(e),
        });
      });

      const steps = (e.issue.answering && e.issue.answering.flowchart && e.issue.answering.flowchart.steps) || [];
      steps.forEach((s) => {
        if (!s.exam || !s.exam.trap) return;
        qs.push({
          kind: 'trap',
          ask: 'At this step of the answering flowchart, which mistake loses marks?',
          context: `${e.code9} — ${e.title}`,
          prompt: s.label,
          answerText: s.exam.trap,
          answer: e,
        });
      });

      const tbl = e.issue.authorities && e.issue.authorities.table;
      if (tbl && tbl.headers && tbl.headers.length === 3
          && AUTH_SOURCE_COL.test(String(tbl.headers[1]).trim())
          && AUTH_EFFECT_COL.test(String(tbl.headers[2]))) {
        (tbl.rows || []).forEach((row) => {
          if (!row[1] || !row[2]) return;
          qs.push({
            kind: 'authority',
            ask: 'What does this establish?',
            context: `${e.code9} — ${e.title}`,
            prompt: row[1],
            answerText: row[2],
            note: row[0],
            answer: e,
          });
        });
      }
    });

    return dropAmbiguous(qs);
  }

  function answerKeyOf(q) {
    return q.answerText || (q.answer.sessionKey + '/' + q.answer.id);
  }

  // A stem that appears twice with two different answers cannot be asked as
  // multiple choice, because both options would be right. Drop the whole
  // group rather than picking one arbitrarily.
  function dropAmbiguous(qs) {
    const answers = new Map();
    qs.forEach((q) => {
      const stem = q.kind + '\u0000' + q.prompt;
      if (!answers.has(stem)) answers.set(stem, new Set());
      answers.get(stem).add(answerKeyOf(q));
    });
    const kept = new Set();
    return qs.filter((q) => {
      const stem = q.kind + '\u0000' + q.prompt;
      if (answers.get(stem).size > 1) return false;
      const dup = stem + '\u0000' + answerKeyOf(q);
      if (kept.has(dup)) return false;
      kept.add(dup);
      return true;
    });
  }

  function shuffled(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function issueOptionText(e) { return `${e.code9} — ${e.title}`; }

  // Wrong answers, best first: the route's own decoy, then issue types this
  // one cross-refers to, then its session neighbours, then anything. A
  // distractor drawn from the far side of the course is easy to eliminate
  // and teaches nothing.
  function issueDistractors(q, universe, want) {
    const taken = new Set([q.answer.sessionKey + '/' + q.answer.id]);
    const out = [];
    const push = (e) => {
      if (!e) return;
      const k = e.sessionKey + '/' + e.id;
      if (taken.has(k) || out.length >= want) return;
      taken.add(k);
      out.push(e);
    };
    push(q.decoy);
    shuffled(q.related || []).forEach((k) => push(universe.find((e) => e.sessionKey + '/' + e.id === k)));
    shuffled(universe.filter((e) => e.sessionKey === q.answer.sessionKey)).forEach(push);
    shuffled(universe).forEach(push);
    return out;
  }

  // For trap/authority the options are other answer TEXT, and they come from
  // the stem's OWN issue type first. Drawing them from elsewhere in the
  // course makes an easy question: only one option would be about the topic
  // at all, so it can be picked without knowing the step or the case. Within
  // one issue the reader has to know which step the trap belongs to, or
  // which of four propositions this authority is cited for — and the stems
  // are already unique within the issue, because dropAmbiguous removed any
  // that were not.
  function textDistractors(q, bank, want) {
    const mine = q.answer.sessionKey + '/' + q.answer.id;
    const seen = new Set([q.answerText]);
    const pick = [];
    const consider = (o) => {
      if (pick.length >= want || o.kind !== q.kind || !o.answerText) return;
      if (seen.has(o.answerText)) return;
      seen.add(o.answerText);
      pick.push(o.answerText);
    };
    const sameIssue = bank.filter((o) => o.answer.sessionKey + '/' + o.answer.id === mine);
    shuffled(sameIssue).forEach(consider);
    // A short flowchart or a two-row table can't fill four options on its
    // own, so the rest of the session backfills.
    shuffled(bank).forEach(consider);
    return pick;
  }

  // One round: `size` questions spread across whichever kinds are available
  // (round-robin, so a session with 200 trigger bullets and 8 authority rows
  // still asks some of each), each with its options already shuffled.
  function withOptions(q, bank, universe) {
    const options = q.answerText
      ? [{ text: q.answerText, correct: true }]
        .concat(textDistractors(q, bank, 3).map((t) => ({ text: t, correct: false })))
      : [{ text: issueOptionText(q.answer), correct: true, entry: q.answer }]
        .concat(issueDistractors(q, universe, 3).map((e) => ({ text: issueOptionText(e), correct: false, entry: e })));
    return Object.assign({}, q, { options: shuffled(options) });
  }

  // Two ways to draw a round.
  //
  //   opts.perKind: { spot: 4, route: 3, ... } — take exactly that many of
  //     each kind, which is what the setup sliders produce. The mix IS the
  //     length: the round is the sum, so there is no separate size to
  //     reconcile against it.
  //   opts.size (+ optional opts.kinds) — the older even spread, kept for
  //     callers that just want "n questions across whatever is available".
  //     verify-data.js samples rounds this way.
  function examQuizRound(bank, opts) {
    const o = opts || {};
    const universe = o.universe || [];

    if (o.perKind) {
      const chosen = [];
      for (const kind of QUIZ_KINDS) {
        const want = Math.max(0, Number(o.perKind[kind]) || 0);
        if (!want) continue;
        chosen.push(...shuffled(bank.filter((q) => q.kind === kind)).slice(0, want));
      }
      return shuffled(chosen).map((q) => withOptions(q, bank, universe));
    }

    const size = o.size || 12;
    const kinds = (o.kinds && o.kinds.length) ? o.kinds : null;
    const src = bank.filter((q) => !kinds || kinds.includes(q.kind));
    if (!src.length) return [];

    const byKind = new Map();
    shuffled(src).forEach((q) => {
      if (!byKind.has(q.kind)) byKind.set(q.kind, []);
      byKind.get(q.kind).push(q);
    });
    const lists = [...byKind.values()];
    const chosen = [];
    for (let i = 0; chosen.length < size && lists.some((l) => l.length); i++) {
      lists.forEach((l) => { if (chosen.length < size && l.length) chosen.push(l.pop()); });
    }

    return shuffled(chosen).map((q) => withOptions(q, bank, universe));
  }

  // Fixed order, so the filter chips don't reshuffle between rounds.
  const QUIZ_KINDS = ['spot', 'route', 'trap', 'authority'];

  const KIND_LABELS = {
    spot: 'Issue spotting',
    route: 'Near misses',
    trap: 'Step traps',
    authority: 'Authorities',
  };

  // ---------------------------------------------------------------------
  // Round setup. The quiz page opens here when it was reached without a
  // session (the dashboard button), and is reachable from a running round
  // via "Customise". The chosen setup persists, so the dashboard button
  // reopens on whatever was last used rather than a fixed default.
  // ---------------------------------------------------------------------
  const QUIZ_SIZES = [5, 10, 20, 50];
  const QUIZ_SETUP_KEY = 'pcll.quizSetup';

  function loadQuizSetup() {
    try {
      const raw = JSON.parse(localStorage.getItem(QUIZ_SETUP_KEY) || 'null');
      if (!raw || typeof raw !== 'object') return null;
      return raw;
    } catch {
      return null;
    }
  }

  function saveQuizSetup(setup) {
    try { localStorage.setItem(QUIZ_SETUP_KEY, JSON.stringify(setup)); } catch { /* no-op */ }
  }

  // Selections are real checkboxes and radios, not chip buttons you toggle.
  // A checkbox already says "several of these" and a radio "one of these",
  // in every browser's own affordance, and both come with the platform's
  // keyboard handling and hit target — none of which a styled <button>
  // carrying aria-pressed gets for free.
  function checkRow(items, cls, type) {
    return items.map((it) => `<label class="check-option ${cls}${it.on ? ' is-on' : ''}">`
      + `<input type="${type}" ${type === 'radio' ? `name="${escapeHtml(cls)}" ` : ''}`
      + `value="${escapeHtml(String(it.value))}"${it.on ? ' checked' : ''} />`
      + `<span>${it.html || escapeHtml(it.label)}</span></label>`).join('');
  }

  // A slider's top end. A kind with 300 questions behind it still gets a
  // usable slider rather than one where every practical value sits in the
  // first two pixels; the "of N" readout keeps the real size visible.
  const QUIZ_KIND_MAX = 25;

  // `model` is { courses: [{ code, name, sessions: [key] }], setup, avail }
  // where `avail` is { kind: howManyExist } for the current scope. The
  // caller builds both, because only it knows the timetable and the bank.
  function quizSetupHtml(model) {
    const { courses, setup, avail } = model;
    const course = courses.find((c) => c.code === setup.code) || courses[0];
    if (!course) {
      return '<div class="quiz-setup"><p class="muted">No course has exam notes to build questions from yet.</p></div>';
    }
    const sessionsOn = setup.sessions && setup.sessions.length ? setup.sessions : course.sessions;
    const total = QUIZ_KINDS.reduce((n, k) => n + (setup.counts[k] || 0), 0);
    const anyAvail = QUIZ_KINDS.some((k) => (avail[k] || 0) > 0);

    const sliders = QUIZ_KINDS.map((k) => {
      const have = avail[k] || 0;
      const max = Math.min(have, QUIZ_KIND_MAX);
      const val = Math.min(setup.counts[k] || 0, max);
      const id = `quizKind-${k}`;
      return `<div class="quiz-kind-row${have ? '' : ' is-empty'}">
        <label class="quiz-kind-name" for="${id}">${escapeHtml(KIND_LABELS[k] || k)}</label>
        <input class="quiz-kind-slider" type="range" id="${id}" data-kind="${k}"
          min="0" max="${max}" step="1" value="${val}"${have ? '' : ' disabled'}
          aria-describedby="${id}-out" />
        <output class="quiz-kind-out" id="${id}-out" for="${id}">${have
          ? `${val} <span class="quiz-kind-avail">of ${have}</span>`
          : '<span class="quiz-kind-avail">none here</span>'}</output>
      </div>`;
    }).join('');

    return `<div class="quiz-setup">
      <h3>Build a round</h3>
      <fieldset class="quiz-setup-group">
        <legend class="quiz-setup-label">Course</legend>
        <div class="check-row">${checkRow(courses.map((c) => ({
          value: c.code, label: c.name ? `${c.code} · ${c.name}` : c.code, on: c.code === course.code,
        })), 'quiz-course-check', 'radio')}</div>
      </fieldset>
      <fieldset class="quiz-setup-group">
        <legend class="quiz-setup-label">Sessions</legend>
        <div class="check-row">${checkRow(course.sessions.map((s) => ({
          value: s, label: s, on: sessionsOn.includes(s),
        })), 'quiz-session-check', 'checkbox')}</div>
      </fieldset>
      <fieldset class="quiz-setup-group">
        <legend class="quiz-setup-label">Issue types<span class="quiz-issue-picked">${setup.issues && setup.issues.length
          ? `${setup.issues.length} of ${model.issues.length}` : `all ${model.issues.length}`}</span></legend>
        <div class="quiz-issue-box">${checkRow(model.issues.map((it) => ({
          value: it.key,
          on: !setup.issues || !setup.issues.length || setup.issues.includes(it.key),
          html: `<span class="quiz-issue-code">${escapeHtml(it.code9)}</span> ${escapeHtml(it.title)}`,
        })), 'quiz-issue-check', 'checkbox')}</div>
        <div class="quiz-setup-presets">
          <button type="button" class="link-btn quiz-issue-all">Select all</button>
          <button type="button" class="link-btn quiz-issue-none">Clear</button>
        </div>
      </fieldset>
      <fieldset class="quiz-setup-group">
        <legend class="quiz-setup-label">How many of each type</legend>
        <div class="quiz-kind-sliders">${sliders}</div>
        <div class="quiz-setup-presets">
          <span class="quiz-setup-hint muted">Spread evenly</span>
          ${QUIZ_SIZES.map((n) => `<button type="button" class="quiz-spread-btn" data-value="${n}">${n}</button>`).join('')}
        </div>
      </fieldset>
      <p class="quiz-setup-count" role="status">${total
        ? `${total} question${total === 1 ? '' : 's'} in this round`
        : (anyAvail
          ? 'Nothing selected — raise a slider, or use one of the spreads.'
          : 'No questions here. Turn a session back on, or pick another course.')}</p>
      <button type="button" class="quiz-setup-start"${total ? '' : ' disabled'}>Start round →</button>
    </div>`;
  }

  // Chips and the Start button are clicks; the sliders report on `input`, so
  // dragging updates the total live rather than only on release. A slider
  // change patches its own readout and the total in place — re-rendering
  // mid-drag would tear the thumb out from under the pointer.
  function wireQuizSetup(container, handlers) {
    const setupEl = container.querySelector('.quiz-setup');
    if (!setupEl) return;
    const h = handlers || {};

    setupEl.addEventListener('input', (e) => {
      const slider = e.target.closest('.quiz-kind-slider');
      if (!slider) return;
      const val = Number(slider.value);
      const row = slider.closest('.quiz-kind-row');
      const out = row && row.querySelector('.quiz-kind-out');
      if (out) {
        const availEl = out.querySelector('.quiz-kind-avail');
        out.textContent = `${val} `;
        if (availEl) out.appendChild(availEl);
      }
      if (h.onCount) h.onCount(slider.dataset.kind, val);
    });

    // Checkboxes and radios report on `change`, so the handler reads the
    // control's own checked state rather than tracking a class.
    setupEl.addEventListener('change', (e) => {
      const input = e.target.closest('.check-option input');
      if (!input) return;
      const box = input.closest('.check-option');
      const value = input.value;
      if (box.classList.contains('quiz-course-check')) h.onChange({ code: value, sessions: [] });
      else if (box.classList.contains('quiz-session-check')) h.onChange({ toggleSession: value });
      else if (box.classList.contains('quiz-issue-check')) h.onChange({ toggleIssue: value });
    });

    setupEl.addEventListener('click', (e) => {
      if (e.target.closest('.quiz-setup-start')) { if (h.onStart) h.onStart(); return; }
      if (e.target.closest('.quiz-issue-all')) { h.onChange({ allIssues: true }); return; }
      if (e.target.closest('.quiz-issue-none')) { h.onChange({ noIssues: true }); return; }
      const spread = e.target.closest('.quiz-spread-btn');
      if (spread) h.onChange({ spread: Number(spread.dataset.value) });
    });
  }

  // Share `size` questions out across the kinds that have any, never asking
  // for more of a kind than exists. Leftover from a capped kind rolls onto
  // the others, so "spread 50" over a thin scope still returns 50 where the
  // bank can supply them.
  function spreadCounts(size, avail) {
    const counts = {};
    QUIZ_KINDS.forEach((k) => { counts[k] = 0; });
    let left = size;
    let open = QUIZ_KINDS.filter((k) => (avail[k] || 0) > 0);
    while (left > 0 && open.length) {
      const each = Math.max(1, Math.floor(left / open.length));
      const before = left;
      for (const k of open) {
        if (left <= 0) break;
        const room = Math.min(avail[k], QUIZ_KIND_MAX) - counts[k];
        const add = Math.min(each, room, left);
        counts[k] += add;
        left -= add;
      }
      open = open.filter((k) => counts[k] < Math.min(avail[k], QUIZ_KIND_MAX));
      if (left === before) break; // nothing could be placed — the bank is spent
    }
    return counts;
  }

  function quizQuestionHtml(q, i, hrefFor) {
    const href = hrefFor ? hrefFor(q.answer) : '';
    const why = q.kind === 'authority' && q.note ? `<span class="quiz-why-note">${citeHtml(q.note)}</span>` : '';
    const summary = (q.kind === 'spot' || q.kind === 'route') && q.answer.issue.summary
      ? `<span class="quiz-why-note">${citeHtml(q.answer.issue.summary)}</span>` : '';
    const link = href
      ? `<a class="quiz-why-link" href="${escapeHtml(href)}">Open ${escapeHtml(q.answer.code9)} →</a>`
      : '';
    return `<li class="quiz-q" data-idx="${i}"${i === 0 ? '' : ' hidden'}>
      <div class="quiz-q-head">
        <span class="quiz-kind">${escapeHtml(KIND_LABELS[q.kind] || q.kind)}</span>
        <span class="quiz-q-num">${i + 1}</span>
        ${q.context ? `<span class="quiz-context">${escapeHtml(q.context)}</span>` : ''}
      </div>
      <p class="quiz-ask">${escapeHtml(q.ask)}</p>
      <blockquote class="quiz-prompt">${citeHtml(q.prompt)}</blockquote>
      <ul class="quiz-options">${q.options.map((o, j) => `<li><button type="button" class="quiz-option" data-correct="${o.correct ? '1' : '0'}" data-opt="${j}">${citeHtml(o.text)}</button></li>`).join('')}</ul>
      <div class="quiz-why" hidden>${summary}${why}${link}</div>
    </li>`;
  }

  // What a round is worth reporting on. Everything here is measured from
  // the round itself — no stored history, no streaks, no invented "level".
  function quizResults(round, outcomes) {
    const byKind = new Map();
    const missed = [];
    const seenMissed = new Set();
    let right = 0;

    round.forEach((q, i) => {
      const okAnswer = outcomes[i] === true;
      if (okAnswer) right++;
      if (!byKind.has(q.kind)) byKind.set(q.kind, { kind: q.kind, right: 0, total: 0 });
      const k = byKind.get(q.kind);
      k.total++;
      if (okAnswer) k.right++;
      if (!okAnswer) {
        const key = q.answer.sessionKey + '/' + q.answer.id;
        if (!seenMissed.has(key)) { seenMissed.add(key); missed.push(q.answer); }
      }
    });

    const total = round.length;
    const kinds = QUIZ_KINDS.filter((k) => byKind.has(k)).map((k) => byKind.get(k));
    // Weakest first, and only kinds actually got wrong — a tip about a kind
    // you scored full marks on is noise.
    const weak = kinds.filter((k) => k.right < k.total)
      .sort((a, b) => (a.right / a.total) - (b.right / b.total));
    return {
      total,
      right,
      pct: total ? Math.round((right / total) * 100) : 0,
      kinds,
      weak,
      missed,
    };
  }

  // Verdicts are about effort on this round, never about the reader. No
  // stored history exists, so nothing here can claim a trend.
  function quizVerdict(pct) {
    if (pct === 100) return 'Clean sweep';
    if (pct >= 80) return 'Strong round';
    if (pct >= 60) return 'Solid, with gaps';
    if (pct >= 40) return 'Worth another pass';
    return 'Back to the notes';
  }

  // Tips point at WHERE IN THE NOTES to go — they never state a rule of
  // law. That keeps them honest: the site can't invent legal content, and
  // a tip that said something substantive would be exactly that.
  const KIND_TIPS = {
    spot: 'Issue spotting is matching facts to a page. Re-read the Fact Pattern Triggers on the issue types below — they are written as facts you could meet in a problem, not as rules to recite.',
    route: 'Near misses are the neighbouring issue types. Every Fact Pattern Triggers section ends with the facts that belong somewhere else, and says where — work down those before the exam, not during it.',
    trap: 'Step traps live in the "In the exam" block under each flowchart step. Open them as you work down the checklist rather than skipping to the points.',
    authority: 'Authorities are in the Key Law & Authorities table on each issue page. Turn on the Authorities cloze there: it hides the case names and leaves the propositions, which is the direction that actually gets tested.',
  };

  function quizResultsHtml(res, hrefFor) {
    const C = 2 * Math.PI * 52;
    const offset = C * (1 - res.pct / 100);
    const ring = `<svg class="quiz-ring" viewBox="0 0 120 120" role="img" aria-label="${res.right} of ${res.total} correct">
      <circle class="quiz-ring-track" cx="60" cy="60" r="52" />
      <circle class="quiz-ring-value" cx="60" cy="60" r="52"
        style="stroke-dasharray:${C.toFixed(1)};stroke-dashoffset:${offset.toFixed(1)};--quiz-ring-c:${C.toFixed(1)}" />
    </svg>`;

    const bars = res.kinds.map((k) => {
      const pct = Math.round((k.right / k.total) * 100);
      return `<li class="quiz-stat">
        <span class="quiz-stat-label">${escapeHtml(KIND_LABELS[k.kind] || k.kind)}</span>
        <span class="quiz-stat-bar"><span class="quiz-stat-fill" style="width:${pct}%"></span></span>
        <span class="quiz-stat-num">${k.right}/${k.total}</span>
      </li>`;
    }).join('');

    const tips = res.weak.slice(0, 2).map((k) => `<li>${escapeHtml(KIND_TIPS[k.kind] || '')}</li>`).join('');
    const tipBlock = tips
      ? `<div class="quiz-tips"><h4>What to work on</h4><ul>${tips}</ul></div>`
      : `<div class="quiz-tips"><h4>What to work on</h4><ul><li>Nothing from this round — try another, or raise a different question type in Customise.</li></ul></div>`;

    const missed = res.missed.length
      ? `<div class="quiz-missed"><h4>Issue types you missed</h4><ul>${res.missed.map((e) => {
        const href = hrefFor ? hrefFor(e) : '';
        const label = `${e.code9} — ${e.title}`;
        return `<li>${href ? `<a href="${escapeHtml(href)}">${escapeHtml(label)}</a>` : escapeHtml(label)}</li>`;
      }).join('')}</ul></div>`
      : '';

    // The celebrating raccoon is kept for a clean sweep only — see CLAUDE.md
    // on not hanging the mascot off an invented completion state. A finished
    // round is a real one, but a half-right round is not a celebration.
    const mascot = res.pct === 100 ? `<div class="quiz-mascot">${RACCOON.celebrate}</div>` : '';

    return `${mascot}
      <div class="quiz-result-score">
        ${ring}
        <span class="quiz-ring-text"><strong>${res.right}<span class="quiz-ring-of">/${res.total}</span></strong><span class="quiz-ring-pct">${res.pct}%</span></span>
      </div>
      <ul class="quiz-stats">${bars}</ul>
      ${tipBlock}
      ${missed}`;
  }

  function examQuizHtml(round, opts) {
    const o = opts || {};
    if (!round.length) {
      return '<div class="quiz-round"><p class="muted">No questions could be built from these notes yet.</p></div>';
    }
    return `<div class="quiz-round">
      <!-- Customise sits in the head, not at the foot: arriving here from a
           session drops you straight into questions, and a control below ten
           of them is a control nobody finds. -->
      <div class="quiz-head">
        <h3>Test Yourself</h3>
        <div class="quiz-head-right">
          <span class="quiz-score" role="status">0 answered</span>
          <button type="button" class="link-btn quiz-customise">Customise →</button>
        </div>
      </div>
      <div class="quiz-progress">
        <span class="quiz-progress-bar"><span class="quiz-progress-fill" style="width:${(100 / round.length).toFixed(2)}%"></span></span>
        <span class="quiz-progress-text">1 / ${round.length}</span>
      </div>
      <!-- All questions are rendered, but only the current one is shown --
           hidden rather than re-rendered, so the answered ones keep their
           marked state and can all be unhidden at the end for review. -->
      <ol class="quiz-questions">${round.map((q, i) => quizQuestionHtml(q, i, o.hrefFor)).join('')}</ol>
      <div class="quiz-nav">
        <button type="button" class="quiz-next" disabled>Next →</button>
      </div>
      <div class="quiz-actions">
        <button type="button" class="link-btn quiz-again">Start over →</button>
      </div>
      <!-- Results, shown once the last question is answered. Same
           settings-panel/settings-card shell every other dialog on the site
           uses, so initDialog's focus trap and Escape handling apply here
           too rather than being re-implemented. -->
      <div class="quiz-result-panel settings-panel" data-quiz-result>
        <div class="settings-card quiz-result-card">
          <div class="settings-head">
            <h3 id="quizResultTitle">Round complete</h3>
            <button type="button" class="icon-btn quiz-result-close" aria-label="Close"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button>
          </div>
          <div class="quiz-result-body"></div>
          <div class="quiz-result-actions">
            <button type="button" class="quiz-result-again">Another round</button>
            <button type="button" class="link-btn quiz-result-review">Review answers</button>
          </div>
        </div>
      </div>
    </div>`;
  }

  // Delegated: first click on a question locks it in, marks right/wrong,
  // reveals the explanation and updates the score. `onAgain`/`onCustomise` let
  // the page rebuild the round, since only it can resolve hrefs.
  function wireExamQuiz(container, handlers) {
    const round = container.querySelector('.quiz-round');
    if (!round) return;
    const h = handlers || {};
    const score = round.querySelector('.quiz-score');
    let answered = 0;
    let right = 0;
    const cards = [...round.querySelectorAll('.quiz-q')];
    const total = cards.length;
    const outcomes = [];
    let current = 0;

    const nextBtn = round.querySelector('.quiz-next');
    const progressFill = round.querySelector('.quiz-progress-fill');
    const progressText = round.querySelector('.quiz-progress-text');

    const panel = round.querySelector('[data-quiz-result]');
    const card = panel && panel.querySelector('.quiz-result-card');
    const dialog = panel && initDialog({
      panel,
      dialog: card,
      closeBtn: panel.querySelector('.quiz-result-close'),
      labelledBy: 'quizResultTitle',
    });

    const isLast = () => current === total - 1;

    function showQuestion(i) {
      cards.forEach((c, n) => { c.hidden = n !== i; });
      current = i;
      const answered = cards[i].classList.contains('is-answered');
      nextBtn.disabled = !answered;
      nextBtn.textContent = isLast() ? 'See results →' : 'Next →';
      progressFill.style.width = `${((i + 1) / total) * 100}%`;
      progressText.textContent = `${i + 1} / ${total}`;
    }

    function advance() {
      if (nextBtn.disabled) return;
      if (isLast()) { showResults(); return; }
      showQuestion(current + 1);
      // Bring the new question up if the previous one pushed it out of view.
      // Instant when the reader has asked for reduced motion.
      const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      cards[current].scrollIntoView({ block: 'nearest', behavior: smooth ? 'smooth' : 'auto' });
    }

    function showResults() {
      if (!dialog || !h.questions) return;
      // Reviewing is the one time the whole round should be on screen at
      // once, so "Review answers" has something to return to.
      round.classList.add('is-review');
      cards.forEach((c) => { c.hidden = false; });
      round.querySelector('.quiz-nav').hidden = true;
      const res = quizResults(h.questions, outcomes);
      panel.querySelector('#quizResultTitle').textContent = quizVerdict(res.pct);
      panel.querySelector('.quiz-result-body').innerHTML = quizResultsHtml(res, h.hrefFor);
      dialog.open();
    }

    round.addEventListener('click', (e) => {
      // Both "again" buttons do the same thing; the dialog's one closes
      // first so initDialog's document keydown listener is torn down before
      // the page replaces the DOM it was wired to.
      if (e.target.closest('.quiz-result-again')) {
        if (dialog) dialog.close();
        if (h.onAgain) h.onAgain();
        return;
      }
      if (e.target.closest('.quiz-result-review')) { if (dialog) dialog.close(); return; }

      if (e.target.closest('.quiz-next')) { advance(); return; }

      if (e.target.closest('.quiz-customise')) { if (h.onCustomise) h.onCustomise(); return; }

      const again = e.target.closest('.quiz-again');
      if (again) { if (h.onAgain) h.onAgain(); return; }

      const btn = e.target.closest('.quiz-option');
      if (!btn) return;
      const q = btn.closest('.quiz-q');
      if (q.classList.contains('is-answered')) return;

      q.classList.add('is-answered');
      const correct = btn.dataset.correct === '1';
      q.classList.add(correct ? 'is-right' : 'is-wrong');
      btn.classList.add(correct ? 'is-chosen-right' : 'is-chosen-wrong');
      q.querySelectorAll('.quiz-option').forEach((b) => {
        b.disabled = true;
        if (b.dataset.correct === '1') b.classList.add('is-answer');
      });
      q.querySelector('.quiz-why').hidden = false;

      answered++;
      if (correct) right++;
      outcomes[Number(q.dataset.idx)] = correct;
      score.textContent = `${right} / ${answered} correct`;

      // Advancing is always the reader's call — the explanation under the
      // question is the most useful part of getting one wrong, and
      // auto-advancing would scroll it away before it had been read.
      nextBtn.disabled = false;
      nextBtn.focus();
    });

    // Enter or the right arrow advances, which is the gesture this reads
    // as once it is one card at a time. Ignored while the results dialog
    // is open, since initDialog owns the keyboard there.
    round.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter' && e.key !== 'ArrowRight') return;
      if (panel && panel.classList.contains('open')) return;
      if (round.classList.contains('is-review')) return;
      if (e.target.closest('.quiz-option') && e.key === 'Enter') return; // let the button take it
      if (nextBtn.disabled) return;
      e.preventDefault();
      advance();
    });

    showQuestion(0);
  }

  // ---------------------------------------------------------------------
  // Clozing the notes in place: blank out a chosen kind of content on the
  // issue page and click any blank to reveal it. Implemented as a pass over
  // the ALREADY-RENDERED DOM rather than as a renderer option, so no
  // renderer, no data shape and no checkbox id changes — which also means
  // it covers every issue type ever authored, including future ones.
  //
  // The groups are chosen so that what stays visible is a usable prompt:
  // the step label survives when its rule is hidden, the Point column of an
  // authorities table survives when the case name is hidden, and so on.
  // ---------------------------------------------------------------------
  const CLOZE_GROUPS = [
    { key: 'rules', label: 'Rules', sel: '.exam-flow-detail' },
    { key: 'points', label: 'Points', sel: '.exam-flow-points .exam-flow-check > span, .exam-flow-subpoints .exam-flow-check > span' },
    { key: 'traps', label: 'Traps', sel: '.exam-coach-line--trap' },
    { key: 'write', label: 'Model sentences', sel: '.exam-coach-line--write' },
    // The authority column only, and found by reading the rendered header
    // rather than by a class, so the table renderer needs no change and the
    // same authority/provision/source test as examQuestionBank decides which
    // tables qualify. Hiding what it establishes would leave the case name
    // as the prompt, which is the easy direction; naming the case from the
    // proposition is what actually gets dropped in exams.
    {
      key: 'authorities',
      label: 'Authorities',
      find(scope) {
        const out = [];
        scope.querySelectorAll('table.session-table').forEach((t) => {
          const heads = [...t.querySelectorAll('thead th')].map((h) => h.textContent.trim());
          if (heads.length !== 3 || !AUTH_SOURCE_COL.test(heads[1]) || !AUTH_EFFECT_COL.test(heads[2])) return;
          t.querySelectorAll('tbody tr').forEach((tr) => {
            const cell = tr.children[1];
            if (cell) out.push(cell);
          });
        });
        return out;
      },
    },
  ];

  const CLOZE_KEY = 'pcll.cloze';

  function loadClozeGroups() {
    try {
      const raw = JSON.parse(localStorage.getItem(CLOZE_KEY) || '[]');
      return new Set(Array.isArray(raw) ? raw : []);
    } catch {
      return new Set();
    }
  }

  function saveClozeGroups(set) {
    try { localStorage.setItem(CLOZE_KEY, JSON.stringify([...set])); } catch { /* no-op */ }
  }

  function noteClozeControlsHtml(active) {
    const on = active || new Set();
    const boxes = checkRow(CLOZE_GROUPS.map((g) => ({
      value: g.key, label: g.label, on: on.has(g.key),
    })), 'cloze-group-check', 'checkbox');
    return `<div class="note-cloze-bar">
      <span class="note-cloze-label">Hide to test yourself</span>
      <div class="check-row note-cloze-checks">${boxes}</div>
      <button type="button" class="link-btn note-cloze-reveal">Reveal all</button>
    </div>`;
  }

  // `scope` is the rendered notes container. Masking is applied and removed
  // per group, so turning a chip off restores exactly what it hid.
  function wireNoteCloze(container, scope) {
    const bar = container.querySelector('.note-cloze-bar');
    if (!bar || !scope) return;
    const active = loadClozeGroups();

    const apply = (g, on) => {
      const nodes = g.find ? g.find(scope) : scope.querySelectorAll(g.sel);
      nodes.forEach((el) => {
        if (on) {
          if (el.classList.contains('cloze-mask')) return;
          el.classList.add('cloze-mask');
          el.setAttribute('role', 'button');
          el.setAttribute('tabindex', '0');
          el.setAttribute('aria-label', 'Hidden — reveal');
        } else {
          el.classList.remove('cloze-mask', 'is-revealed');
          el.removeAttribute('role');
          el.removeAttribute('tabindex');
          el.removeAttribute('aria-label');
        }
      });
    };

    const syncAll = () => CLOZE_GROUPS.forEach((g) => apply(g, active.has(g.key)));
    syncAll();

    bar.addEventListener('click', (e) => {
      if (!e.target.closest('.note-cloze-reveal')) return;
      scope.querySelectorAll('.cloze-mask').forEach((el) => el.classList.add('is-revealed'));
    });

    bar.addEventListener('change', (e) => {
      const input = e.target.closest('.cloze-group-check input');
      if (!input) return;
      const g = CLOZE_GROUPS.find((x) => x.key === input.value);
      if (!g) return;
      const on = input.checked;
      if (on) active.add(g.key); else active.delete(g.key);
      input.closest('.check-option').classList.toggle('is-on', on);
      saveClozeGroups(active);
      apply(g, on);
    });

    // CAPTURE phase, and preventDefault: a masked flowchart point sits
    // inside its <label>, so without this the click that reveals it would
    // also tick the checkbox.
    scope.addEventListener('click', (e) => {
      const mask = e.target.closest('.cloze-mask');
      if (!mask || mask.classList.contains('is-revealed')) return;
      e.preventDefault();
      e.stopPropagation();
      mask.classList.add('is-revealed');
    }, true);

    scope.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      const mask = e.target.closest('.cloze-mask');
      if (!mask || mask.classList.contains('is-revealed')) return;
      e.preventDefault();
      mask.classList.add('is-revealed');
    });

    return syncAll;
  }

  window.PCLL = Object.assign(window.PCLL || {}, {
    listSection, resolveDeadlineFromDetails, fullNoteBodyHtml, referenceHtml, legalIssueNotesHtml,
    examIssueSectionsHtml, wireFlowChecks, examIssueListHtml, wireIssueFilter,
    clozeSectionHtml, wireClozeSection, flashcardSectionHtml, wireFlashcardSection,
    examQuestionBank, examQuizRound, examQuizHtml, wireExamQuiz, examIssueIndex, QUIZ_KINDS,
    quizSetupHtml, wireQuizSetup, loadQuizSetup, saveQuizSetup, QUIZ_SIZES, spreadCounts,
    noteClozeControlsHtml, wireNoteCloze, loadClozeGroups,
  });
})();
