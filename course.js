(() => {
  'use strict';

  const {
    ELECTIVE_NAMES, fmtShort, fmtTime, escapeHtml, field, isHappeningNow, isMyGroupSession,
    initTheme, loadTimetable, ICONS, loadCheckedIds, hwChecklistKey, sgPrepChecklistKey,
    checklistHtml, wireChecklist, deadlineChipsHtml, daysUntil,
  } = window.PCLL;

  const $ = (id) => document.getElementById(id);
  const code = (new URLSearchParams(location.search).get('code') || '').trim().toUpperCase();
  const details = (window.COURSE_DETAILS && window.COURSE_DETAILS[code]) || null;

  // Parallel to the rendered <tr>s in #sessionTableBody — rowsData[i]
  // matches the row stamped data-idx="i", so the click handler can look up
  // the original event without re-parsing the DOM.
  let rowsData = [];
  let homeworkChecklistWired = false;

  function setSyncStatus(text) {
    $('syncStatus').textContent = text;
  }

  // "LG1A" -> "LG1", "SG4" -> "SG4" — the key courseDetails.js's `sessions`
  // map uses (no trailing letter; see sessionPartLetter for that).
  function sessionKeyFor(no) {
    const m = /^(LG|SG)\s*(\d+)/i.exec(no || '');
    return m ? (m[1] + m[2]).toUpperCase() : null;
  }

  // "LG1A" -> "A", "LG4" -> null — matched against a session's own
  // `parts[].partLetter`, NOT the unrelated `ev.part` field (that one is the
  // half-cohort A/B split used for scope resolution, and is null for these).
  function sessionPartLetter(no) {
    const m = /^(LG|SG)\s*\d+([A-Za-z])/i.exec(no || '');
    return m ? m[2].toUpperCase() : null;
  }

  function resolveDeadline(deadlineId) {
    return deadlineId && details && (details.deadlines || []).find((d) => d.id === deadlineId);
  }

  function dueLabel(deadline, done) {
    if (!deadline) return '';
    if (done) return 'Done';
    const days = daysUntil(deadline.date);
    if (days < 0) return `Overdue by ${-days}d`;
    if (days === 0) return 'Due today';
    return `Due in ${days}d`;
  }

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
      if (ref.checkboxes) body += `<ul>${ref.checkboxes.map((c) => `<li>${escapeHtml(c)}</li>`).join('')}</ul>`;
      if (ref.fields) body += `<p class="muted">Fields: ${ref.fields.map(escapeHtml).join(', ')}</p>`;
    }
    return `<div class="reference-block">${body}</div>`;
  }

  function renderModalPrepChecklist(sessionDetail, prepKey) {
    const container = $('modalPrepChecklist');
    if (!container) return;
    container.innerHTML = checklistHtml(sessionDetail.prepChecklist, loadCheckedIds(prepKey));
  }

  function sessionDetailHtml(sessionDetail, ev) {
    const partLetter = sessionPartLetter(ev.no);
    const matchedPart = sessionDetail.parts && sessionDetail.parts.find((p) => p.partLetter === partLetter);
    const partsToShow = matchedPart ? [matchedPart] : (sessionDetail.parts || []);

    let html = '<div class="session-meta">' + [
      sessionDetail.date ? field('Date', sessionDetail.date) : '',
      sessionDetail.time ? field('Time', sessionDetail.time) : '',
      sessionDetail.mode ? field('Format', sessionDetail.mode) : '',
      sessionDetail.skills ? field('Skills', sessionDetail.skills) : '',
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
      const prepKey = sgPrepChecklistKey(code, sessionKeyFor(ev.no));
      html += `<h3>Preparation Before Class</h3><div id="modalPrepChecklist" class="checklist">${checklistHtml(sessionDetail.prepChecklist, loadCheckedIds(prepKey))}</div>`;
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
        const deadline = resolveDeadline(a.deadlineId);
        return `<li>${escapeHtml(a.title)}${deadline ? deadlineChipsHtml([deadline]) : ''}</li>`;
      }).join('')}</ul>`;
    }

    if (sessionDetail.exercises) {
      html += sessionDetail.exercises.map((ex) => `
        <details class="detail-content"><summary>${escapeHtml(ex.title)}</summary>
          ${ex.factPattern ? `<p>${escapeHtml(ex.factPattern)}</p>` : ''}
          ${ex.questions ? `<ul>${ex.questions.map((q) => `<li>${escapeHtml(q)}</li>`).join('')}</ul>` : ''}
        </details>`).join('');
    }

    html += listSection('Key Takeaways', sessionDetail.keyTakeaways);
    html += listSection('During / After', sessionDetail.duringAfter);

    if (sessionDetail.fullNotes) {
      html += `<details class="detail-content"><summary>Full Lecture Notes</summary>${sessionDetail.fullNotes.map((n) => `
        <details><summary>${escapeHtml(n.heading)}</summary><p>${escapeHtml(n.body)}</p></details>`).join('')}</details>`;
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

  function openSessionModal(idx) {
    const entry = rowsData[idx];
    if (!entry) return;
    const { ev, dateIso, weekNumber, dayName } = entry;
    const key = sessionKeyFor(ev.no);
    const sessionDetail = details && details.sessions && key && details.sessions[key];

    $('sessionModalTitle').textContent = `${code}${ev.no ? ' · ' + ev.no : ''}${ev.topic ? ' — ' + ev.topic : ''}`;
    $('sessionModalBody').innerHTML = sessionDetail
      ? sessionDetailHtml(sessionDetail, ev)
      : sessionFallbackHtml(ev, dateIso, weekNumber, dayName);

    if (sessionDetail && sessionDetail.prepChecklist) {
      const prepKey = sgPrepChecklistKey(code, key);
      wireChecklist($('modalPrepChecklist'), prepKey, () => renderModalPrepChecklist(sessionDetail, prepKey));
    }
    $('sessionModal').classList.add('open');
  }

  function rowHtml(ev, weekNumber, dateIso, dayName, idx) {
    const timeText = ev.start ? `${fmtTime(ev.start)}${ev.end ? '–' + fmtTime(ev.end) : ''}` : (ev.timeLabel || 'TBC');
    const no = ev.no ? ev.no + (ev.part ? ` (${ev.part})` : '') : (ev.part || '');
    const now = isHappeningNow(ev, dateIso);
    const rowClass = [
      isMyGroupSession(ev) ? 'mine' : '',
      ev.scope === 'other-group' ? 'other-group' : '',
      now ? 'now' : '',
    ].filter(Boolean).join(' ');
    const dateLabel = dateIso ? fmtShort(dateIso) : (dayName || '');
    return `<tr class="${rowClass}" data-idx="${idx}" tabindex="0" role="button">
      <td class="col-date">${escapeHtml(dateLabel)}<span class="wk-tag">Wk ${weekNumber}</span></td>
      <td class="col-time">${escapeHtml(timeText)}</td>
      <td class="col-no">${escapeHtml(no)}</td>
      <td class="col-topic">${escapeHtml(ev.topic || '')}</td>
      <td class="col-venue">${escapeHtml(ev.venue || '')}</td>
      <td class="col-who">${escapeHtml(ev.instructor || '')}</td>
    </tr>`;
  }

  function preRecordedRowHtml(entry, weekNumber) {
    const when = entry.when ? entry.when[0].toUpperCase() + entry.when.slice(1) : 'No specific timing given';
    return `<tr class="pre-recorded">
      <td class="col-date">${ICONS.play}Pre-recorded<span class="wk-tag">Wk ${weekNumber}</span></td>
      <td class="col-time">${escapeHtml(when)}</td>
      <td class="col-no">${escapeHtml(entry.no || '')}</td>
      <td class="col-topic">${escapeHtml(entry.topic || '')}</td>
      <td class="col-venue">Moodle</td>
      <td class="col-who">${escapeHtml(entry.instructor || '')}</td>
    </tr>`;
  }

  function renderCourseInfo() {
    const section = $('courseInfoSection');
    if (!details) { section.hidden = true; return; }
    section.hidden = false;
    $('courseDescription').textContent = details.description || '';
    $('coordinatorList').innerHTML = (details.coordinators || []).map((c) => `
      <div class="coordinator-card">
        <strong>${escapeHtml(c.name)}</strong>
        <div class="muted">${escapeHtml(c.room)} &middot; ${escapeHtml(c.hours)}</div>
        <a href="mailto:${escapeHtml(c.email)}">${escapeHtml(c.email)}</a>
      </div>`).join('');
    $('learningOutcomesList').innerHTML = (details.learningOutcomes || []).map((o) => `<li>${escapeHtml(o)}</li>`).join('');
    const a = details.attendance || {};
    $('attendanceInfo').innerHTML = [
      a.lectures ? field('Lectures', a.lectures) : '',
      a.smallGroups ? field('Small Groups', a.smallGroups) : '',
    ].join('');
  }

  function renderAssessments() {
    const section = $('assessmentSection');
    if (!details || !details.assessments || !details.assessments.length) { section.hidden = true; return; }
    section.hidden = false;
    $('assessmentTableBody').innerHTML = details.assessments.map((a) => `
      <tr><td>${escapeHtml(a.title)}</td><td>${escapeHtml(a.weight)}</td><td>${escapeHtml(a.dateLabel)}${a.note ? `<br><span class="muted">${escapeHtml(a.note)}</span>` : ''}</td></tr>
    `).join('');
    $('assessmentNotesList').innerHTML = (details.assessmentNotes || []).map((n) => `<li>${escapeHtml(n)}</li>`).join('');
  }

  function renderHomeworkSection() {
    const section = $('homeworkSection');
    const items = [...(details ? details.homework || [] : []), ...(details ? details.todos || [] : [])];
    if (!items.length) { section.hidden = true; return; }
    section.hidden = false;
    const checked = loadCheckedIds(hwChecklistKey(code));
    const checklistItems = items.map((h) => {
      const deadline = resolveDeadline(h.deadlineId);
      return { id: h.id, label: h.title, meta: dueLabel(deadline, checked.has(h.id)) };
    });
    $('homeworkChecklist').innerHTML = checklistHtml(checklistItems, checked);
    if (!homeworkChecklistWired) {
      wireChecklist($('homeworkChecklist'), hwChecklistKey(code), renderHomeworkSection);
      homeworkChecklistWired = true;
    }
  }

  function renderMaterials() {
    const section = $('materialsSection');
    if (!details || !details.materials || !details.materials.length) { section.hidden = true; return; }
    section.hidden = false;
    $('materialsList').innerHTML = details.materials.map((m) => `<li>${escapeHtml(m)}</li>`).join('');
    $('aiPolicyText').textContent = details.aiPolicy || '';
  }

  function renderCourse(data) {
    const name = data.meta.courses[code] || ELECTIVE_NAMES[code] || '';
    const heading = name ? `${code} · ${name}` : code || 'Unknown course';
    document.title = `${heading} — Whack the PCLL`;
    $('courseTitle').textContent = heading;

    renderCourseInfo();
    renderAssessments();
    renderHomeworkSection();
    renderMaterials();

    const rows = [];
    rowsData = [];
    for (const week of data.weeks) {
      for (const entry of week.preRecorded || []) {
        if (entry.code !== code) continue;
        rows.push(preRecordedRowHtml(entry, week.week));
      }
      for (const day of week.days) {
        for (const ev of day.events || []) {
          if (ev.code !== code) continue;
          const idx = rowsData.length;
          rowsData.push({ ev, dateIso: day.date, weekNumber: week.week, dayName: day.day });
          rows.push(rowHtml(ev, week.week, day.date, day.day, idx));
        }
      }
    }

    $('status').hidden = true;
    const section = $('sessionsSection');
    if (!rows.length) {
      section.hidden = true;
      $('status').hidden = false;
      $('status').className = 'status';
      $('status').textContent = `No sessions found for ${code}.`;
      return;
    }
    section.hidden = false;
    $('sessionTableBody').innerHTML = rows.join('');
  }

  async function load() {
    if (!code) {
      $('status').className = 'status error';
      $('status').textContent = 'No course specified.';
      return;
    }
    await loadTimetable({
      onData: (data, isStale) => {
        renderCourse(data);
        setSyncStatus(isStale
          ? `Showing cached data from ${new Date(data.meta.syncedAt).toLocaleString()} — refreshing…`
          : `Last synced ${new Date(data.meta.syncedAt).toLocaleString()}`);
      },
      onError: (err) => {
        $('status').hidden = false;
        $('status').className = 'status error';
        $('status').textContent = 'Could not load this course: ' + err.message;
        setSyncStatus('Sync failed');
      },
    });
  }

  function initSessionModal() {
    const tbody = $('sessionTableBody');
    tbody.addEventListener('click', (e) => {
      const tr = e.target.closest('tr[data-idx]');
      if (tr) openSessionModal(+tr.dataset.idx);
    });
    tbody.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      const tr = e.target.closest('tr[data-idx]');
      if (tr) { e.preventDefault(); openSessionModal(+tr.dataset.idx); }
    });
    $('closeSessionModal').addEventListener('click', () => $('sessionModal').classList.remove('open'));
    $('sessionModal').addEventListener('click', (e) => {
      if (e.target === $('sessionModal')) $('sessionModal').classList.remove('open');
    });
  }

  initTheme($('themeBtn'));
  initSessionModal();
  load();
})();
