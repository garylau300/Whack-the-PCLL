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

  const { escapeHtml, citeHtml, noteCheckId } = window.PCLL;

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
  // question: spot it -> work it -> work it well -> write it -> don't blow
  // it -> look it up. `notes` is the catch-all and stays last.
  const EXAM_SECTIONS = [
    { key: 'triggers', heading: 'Issue Triggers' },
    { key: 'answering', heading: 'Answering Flowchart' },
    { key: 'lookOut', heading: 'Things to Look Out For' },
    { key: 'skills', heading: 'Answering Skills' },
    { key: 'skeleton', heading: 'Model Answer Skeleton' },
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
      const head = g.label
        ? `<h3 class="exam-index-session"><span class="exam-index-label">${escapeHtml(g.label)}</span>`
          + `<span class="exam-index-count" aria-label="${g.items.length} issue types">${g.items.length}</span></h3>`
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

  window.PCLL = Object.assign(window.PCLL || {}, {
    listSection, resolveDeadlineFromDetails, fullNoteBodyHtml, referenceHtml, legalIssueNotesHtml,
    examIssueSectionsHtml, wireFlowChecks, examIssueListHtml, wireIssueFilter,
    clozeSectionHtml, wireClozeSection, flashcardSectionHtml, wireFlashcardSection,
  });
})();
