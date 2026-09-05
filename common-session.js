// Part 3 of 3 of the site's shared client-side module -- load this AFTER
// both common-core.js and common-content.js (needs symbols from both).
// See common-core.js's header and CLAUDE.md for the split's rationale and
// the required load order.
//
// Ties the content vocabulary (common-content.js) and a session's own
// numbered legal issues together into the full session-page renderer:
// the mindmap (hub -> issue nodes -> note nodes, each opening a popup
// instead of expanding inline) and sessionDetailHtml/wireSessionDetail,
// which course.js's session table and session.html itself both call so
// the two render identically.
(() => {
  'use strict';

  const {
    escapeHtml, field, fmtTime, fmtShort, initDialog, sgPrepChecklistKey,
    sessionKeyFor, sessionPartLetter, checklistHtml, wireChecklist, checklistCompleteHtml,
    loadCheckedIds, deadlineChipsHtml,
  } = window.PCLL;
  const { listSection, resolveDeadlineFromDetails, fullNoteBodyHtml, referenceHtml, legalIssueNotesHtml } = window.PCLL;

  // Positions two concentric rings of `.mindmap-node` buttons around the
  // hub, sized to the container's actual pixel dimensions (not percentages
  // — that would distort the spoke angles whenever the container isn't
  // square): issue nodes split the circle's 360° evenly (n issues,
  // 360/n each), so the issue ring itself is collision-free regardless of
  // which issues happen to be neighbours. The outer note ring's radius is
  // then solved from the busiest issue's note count (see below) rather
  // than fixed, since a note-heavy issue still only gets its own equal
  // share of the circle to spread its notes across and needs to push them
  // further out to keep them from overlapping within that fixed sector.
  // Below the 641px breakpoint the CSS switches `.mindmap` to a plain
  // nested vertical stack (see styles.css), so positioning is skipped
  // there — the nodes just flow normally and the spoke lines are cleared.
  function layoutMindmap(mapEl) {
    const svg = mapEl.querySelector('.mindmap-lines');
    const issueNodes = [...mapEl.querySelectorAll('.mindmap-node--issue')];
    const noteNodes = [...mapEl.querySelectorAll('.mindmap-node--note')];
    const isDesktop = window.matchMedia('(min-width: 641px)').matches;
    if (!isDesktop || !issueNodes.length) {
      [...issueNodes, ...noteNodes].forEach((el) => { el.style.left = ''; el.style.top = ''; });
      svg.innerHTML = '';
      return;
    }
    const w = mapEl.clientWidth, h = mapEl.clientHeight;
    if (!w || !h) return; // a hidden ancestor (e.g. a collapsed <details>) — nothing to measure yet
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    const cx = w / 2, cy = h / 2;
    const minDim = Math.min(w, h);
    const n = issueNodes.length;
    const sector = (Math.PI * 2) / n;
    const childrenOf = issueNodes.map((_, i) => noteNodes.filter((el) => Number(el.dataset.issueIdx) === i));
    const maxChildren = Math.max(1, ...childrenOf.map((c) => c.length));
    const r1 = minDim * 0.27;
    // Solve the note ring's radius from the busiest issue's note count:
    // fitting maxChildren notes within one (equal, fixed-width) sector
    // without overlap means pushing them out until the arc distance
    // between adjacent notes clears their width — a denser session
    // (more notes on its busiest issue) needs, and gets, a larger ring.
    const spreadFrac = 0.7;
    const spread = sector * spreadFrac;
    const gapAngle = maxChildren > 1 ? spread / (maxChildren - 1) : spread;
    const minGapPx = 118;
    // Clamped below the distance to the nearest edge (less a note node's
    // rough half-height plus margin) so a note whose angle points nearly
    // straight up/down/sideways can't be pushed close enough to clip
    // against the container's own overflow:hidden edge.
    const edgeLimit = Math.min(cx, cy) - 60;
    const r2 = Math.min(minDim * 0.47, edgeLimit, Math.max(minDim * 0.4, minGapPx / gapAngle));
    let lines = '';
    issueNodes.forEach((issueNode, i) => {
      const angle = sector * i - Math.PI / 2;
      const x1 = cx + r1 * Math.cos(angle);
      const y1 = cy + r1 * Math.sin(angle);
      issueNode.style.left = `${x1}px`;
      issueNode.style.top = `${y1}px`;
      lines += `<line x1="${cx}" y1="${cy}" x2="${x1.toFixed(1)}" y2="${y1.toFixed(1)}" class="mindmap-line" />`;

      const children = childrenOf[i];
      children.forEach((noteNode, j) => {
        const childAngle = children.length === 1 ? angle : angle - spread / 2 + (spread * j) / (children.length - 1);
        const x2 = cx + r2 * Math.cos(childAngle);
        const y2 = cy + r2 * Math.sin(childAngle);
        noteNode.style.left = `${x2}px`;
        noteNode.style.top = `${y2}px`;
        lines += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" class="mindmap-line mindmap-line--child" />`;
      });
    });
    svg.innerHTML = lines;
  }

  // A session's numbered legal issues, rendered as a two-level hub-and-
  // spoke mindmap instead of a stack of expandable summaries: a central
  // hub branches to one node per issue, and each issue node branches again
  // to one node per note within it. Clicking (or Enter/Space-ing) an issue
  // node opens that issue's full write-up (every note concatenated);
  // clicking one of its note nodes opens just that note, in the same
  // popup dialog. Every node's popup content is pre-rendered into an inert
  // <template> (cloned into the shared popup body on open) so wiring stays
  // purely DOM-based, same spirit as wireClozeSection/wireFlashcardSection.
  function legalIssuesMindmapHtml(issues) {
    if (!issues || !issues.length) return '';
    let nodesHtml = '';
    let templatesHtml = '';
    issues.forEach((issue, i) => {
      const issueTitle = `${issue.number}. ${issue.heading}`;
      nodesHtml += `<button type="button" class="mindmap-node mindmap-node--issue" data-level="1" data-idx="${i}" data-title="${escapeHtml(issueTitle)}" aria-haspopup="dialog">
        <span class="mindmap-node-num" aria-hidden="true">${escapeHtml(issue.number)}</span>
        <span class="mindmap-node-label">${escapeHtml(issue.heading)}</span>
      </button>`;
      templatesHtml += `<template data-mindmap-body="issue-${i}">${legalIssueNotesHtml(issue)}</template>`;
      (issue.notes || []).forEach((note, j) => {
        nodesHtml += `<button type="button" class="mindmap-node mindmap-node--note" data-level="2" data-issue-idx="${i}" data-note-idx="${j}" data-title="${escapeHtml(issueTitle)} — ${escapeHtml(note.heading)}" aria-haspopup="dialog">
          <span class="mindmap-node-label">${escapeHtml(note.heading)}</span>
        </button>`;
        templatesHtml += `<template data-mindmap-body="note-${i}-${j}"><h4>${escapeHtml(note.heading)}</h4>${fullNoteBodyHtml(note)}</template>`;
      });
    });
    return `<div class="mindmap-wrap">
      <div class="mindmap" data-mindmap>
        <svg class="mindmap-lines" aria-hidden="true"></svg>
        <div class="mindmap-hub"><span>Legal Issues</span></div>
        ${nodesHtml}
      </div>
      <p class="mindmap-hint muted small">Tap a topic, then a sub-topic, to open it.</p>
      <div class="mindmap-modal-panel settings-panel" data-mindmap-modal>
        <div class="settings-card mindmap-modal-card">
          <div class="settings-head">
            <h3 id="mindmapModalTitle"></h3>
            <button type="button" class="icon-btn mindmap-modal-close" aria-label="Close"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button>
          </div>
          <div class="mindmap-modal-body detail-content"></div>
        </div>
      </div>
      <div hidden>${templatesHtml}</div>
    </div>`;
  }

  // Wires one legalIssuesMindmapHtml() block: lays out both rings of
  // spokes, and opens the shared popup dialog with the clicked node's
  // pre-rendered template content on click — an issue node's own template
  // (all its notes) or one of its note nodes' templates (just that note),
  // depending on which level was clicked.
  //
  // Layout is driven by a ResizeObserver on the mindmap element rather
  // than a plain one-off call plus a window `resize` listener: this
  // function runs from wireSessionDetail, which session.js calls while
  // `#sessionSection` is still `hidden` (it's only unhidden a few lines
  // later, once rendering finishes) — so the container measures 0x0 at
  // that exact moment and a one-off layoutMindmap() call would silently
  // no-op forever, with nothing ever prompting a second attempt. A
  // ResizeObserver instead fires as soon as the element's box actually
  // has a size (i.e. once the section is unhidden) and again on every
  // later resize, so it both fixes that ordering race and replaces the
  // old resize listener in one mechanism.
  function wireLegalIssuesMindmap(container) {
    const wrap = container.querySelector('.mindmap-wrap');
    if (!wrap) return;
    const mapEl = wrap.querySelector('[data-mindmap]');
    const modalPanel = wrap.querySelector('[data-mindmap-modal]');
    const modalCard = modalPanel.querySelector('.mindmap-modal-card');
    const modalBody = wrap.querySelector('.mindmap-modal-body');
    const modalTitle = wrap.querySelector('#mindmapModalTitle');
    const closeBtn = wrap.querySelector('.mindmap-modal-close');
    const modal = initDialog({ panel: modalPanel, dialog: modalCard, closeBtn, labelledBy: 'mindmapModalTitle' });

    if (window.ResizeObserver) {
      new ResizeObserver(() => layoutMindmap(mapEl)).observe(mapEl);
    } else {
      layoutMindmap(mapEl);
      window.addEventListener('resize', () => layoutMindmap(mapEl));
    }

    mapEl.addEventListener('click', (e) => {
      const node = e.target.closest('.mindmap-node');
      if (!node) return;
      const key = node.dataset.level === '2' ? `note-${node.dataset.issueIdx}-${node.dataset.noteIdx}` : `issue-${node.dataset.idx}`;
      const tpl = wrap.querySelector(`template[data-mindmap-body="${key}"]`);
      modalTitle.textContent = node.dataset.title || '';
      modalBody.innerHTML = '';
      if (tpl) modalBody.appendChild(tpl.content.cloneNode(true));
      modal.open(node);
    });
  }

  // Full write-up for one session (lecture outline, prep checklist, fact
  // pattern, etc.) sourced from courseDetails.js's `sessions[key]` entries —
  // shared so the course page's session table (which links out to
  // session.html via sessionHref) and session.html itself render identically.
  function sessionDetailHtml(sessionDetail, ev, code, details) {
    const partLetter = sessionPartLetter(ev.no);
    const matchedPart = sessionDetail.parts && sessionDetail.parts.find((p) => p.partLetter === partLetter);
    const partsToShow = matchedPart ? [matchedPart] : (sessionDetail.parts || []);

    let html = '<div class="session-meta">' + [
      sessionDetail.date ? field('Date', sessionDetail.date) : '',
      sessionDetail.time ? field('Time', sessionDetail.time) : '',
      sessionDetail.mode ? field('Format', sessionDetail.mode) : '',
      sessionDetail.skills ? field('Skills', sessionDetail.skills) : '',
      sessionDetail.authors && sessionDetail.authors.length ? field('Author(s)', sessionDetail.authors.join(', ')) : '',
    ].join('') + '</div>';

    for (const p of partsToShow) {
      if (sessionDetail.parts) html += `<h3>${escapeHtml(p.title)}</h3>`;
      if (p.instructor) {
        html += `<p class="instructor-line">${escapeHtml(p.instructor.name)} &middot; <a href="mailto:${escapeHtml(p.instructor.email)}">${escapeHtml(p.instructor.email)}</a> &middot; ${escapeHtml(p.instructor.hours)}</p>`;
      }
      html += listSection('Learning Objectives', p.objectives);
    }
    if (!sessionDetail.parts && sessionDetail.objectives) html += listSection('Objectives', sessionDetail.objectives);

    if (sessionDetail.compulsory) html += `<p class="muted"><strong>Compulsory.</strong> ${escapeHtml(sessionDetail.weight || '')}</p>`;
    if (sessionDetail.swapProcedure) html += `<p class="muted">${escapeHtml(sessionDetail.swapProcedure)}</p>`;

    html += listSection('Topics Covered', sessionDetail.topicsCovered);

    if (sessionDetail.prepChecklist) {
      html += `<h3>Preparation Before Class</h3><div class="checklist" data-prep-checklist></div>`;
    } else if (sessionDetail.prep) {
      html += listSection('Readings', sessionDetail.prep.readings);
      html += listSection('Pre-lecture Activities', (sessionDetail.prep.activities || []).map((a) => `${a.title} — ${a.instructions}`));
    }

    if (sessionDetail.factPattern) {
      const fp = sessionDetail.factPattern;
      html += `<h3>Fact Pattern</h3><div class="session-meta">${[
        fp.client ? field('Client', fp.client) : '',
        fp.role ? field('Your Role', fp.role) : '',
        fp.instructingPartner ? field('Instructing Partner', fp.instructingPartner) : '',
        fp.documents ? field('Documents', fp.documents.join(', ')) : '',
      ].join('')}</div>${fp.note ? `<p class="muted">${escapeHtml(fp.note)}</p>` : ''}`;
    }

    if (sessionDetail.activities) {
      html += `<h3>Activities</h3><ul class="activity-list">${sessionDetail.activities.map((a) => {
        const deadline = resolveDeadlineFromDetails(details, a.deadlineId);
        return `<li>${escapeHtml(a.title)}${deadline ? deadlineChipsHtml([deadline]) : ''}</li>`;
      }).join('')}</ul>`;
    }

    if (sessionDetail.exercises) {
      html += sessionDetail.exercises.map((ex) => `
        <details class="detail-content"><summary>${escapeHtml(ex.title)}</summary>
          ${ex.factPattern ? `<p>${escapeHtml(ex.factPattern)}</p>` : ''}
          ${ex.questions ? `<ul>${ex.questions.map((q) => `<li>${escapeHtml(q)}</li>`).join('')}</ul>` : ''}
          ${ex.questionGroups ? ex.questionGroups.map((g, i) => `<h4>${i + 1}. ${escapeHtml(g.heading)}</h4><ul>${g.questions.map((q) => `<li>${escapeHtml(q)}</li>`).join('')}</ul>`).join('') : ''}
        </details>`).join('');
    }

    html += listSection('Key Takeaways', sessionDetail.keyTakeaways);
    html += listSection('During / After', sessionDetail.duringAfter);

    // legalIssues (numbered, grouped-by-issue) is the current format,
    // rendered as an interactive mindmap (see legalIssuesMindmapHtml) rather
    // than an expandable list; fullNotes (a flat list) is kept as a
    // fallback for any session not yet migrated to the richer shape.
    if (sessionDetail.legalIssues) {
      html += legalIssuesMindmapHtml(sessionDetail.legalIssues);
    } else if (sessionDetail.fullNotes) {
      html += `<details class="detail-content"><summary>Full Lecture Notes</summary>${sessionDetail.fullNotes.map((n) => `
        <details><summary>${escapeHtml(n.heading)}</summary>${fullNoteBodyHtml(n)}</details>`).join('')}</details>`;
    }

    if (sessionDetail.referenceIds && sessionDetail.referenceIds.length) {
      html += `<details class="detail-content"><summary>Reference Materials</summary>${sessionDetail.referenceIds.map((id) => referenceHtml(details.references[id])).join('')}</details>`;
    }

    return html;
  }

  function sessionFallbackHtml(ev, dateIso, weekNumber, dayName) {
    const timeText = ev.start ? `${fmtTime(ev.start)}${ev.end ? '–' + fmtTime(ev.end) : ''}` : (ev.timeLabel || 'TBC');
    const dateLabel = dateIso ? fmtShort(dateIso) : (dayName || '');
    const fields = [field('Date', `${dateLabel} (Wk ${weekNumber})`), field('Time', timeText)];
    if (ev.venue) fields.push(field('Venue', ev.venue));
    if (ev.instructor) fields.push(field('Who', ev.instructor));
    if (ev.topic) fields.push(field('Topic', ev.topic));
    return `<div class="session-meta">${fields.join('')}</div><p class="muted">No detailed materials uploaded for this session yet.</p>`;
  }

  function renderPrepChecklist(container, sessionDetail, prepKey) {
    if (!container) return;
    const items = sessionDetail.prepChecklist;
    const checked = loadCheckedIds(prepKey);
    const allDone = items.length > 0 && items.every((it) => checked.has(it.id));
    container.innerHTML = checklistHtml(items, checked)
      + (allDone ? checklistCompleteHtml("Prepped and ready — you've got this.") : '');
  }

  // After bodyEl.innerHTML has been set from sessionDetailHtml(), wires up
  // the prep checklist it may contain (the [data-prep-checklist]
  // placeholder) — shared so course.js and session.js don't each duplicate
  // this glue. (Cloze/flashcards live on quiz.html now, wired there instead.)
  function wireSessionDetail(bodyEl, sessionDetail, code, ev) {
    if (sessionDetail && sessionDetail.legalIssues) wireLegalIssuesMindmap(bodyEl);
    if (!sessionDetail || !sessionDetail.prepChecklist) return;
    const prepKey = sgPrepChecklistKey(code, sessionKeyFor(ev.no));
    const container = bodyEl.querySelector('[data-prep-checklist]');
    const render = () => renderPrepChecklist(container, sessionDetail, prepKey);
    render();
    wireChecklist(container, prepKey, render);
  }

  window.PCLL = Object.assign(window.PCLL || {}, {
    sessionDetailHtml, sessionFallbackHtml, wireSessionDetail,
  });
})();
