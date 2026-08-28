(() => {
  'use strict';

  const {
    ELECTIVE_NAMES, fmtShort, fmtTime, escapeHtml, isHappeningNow, isMyGroupSession,
    initTheme, loadTimetable, ICONS, loadCheckedIds, hwChecklistKey,
    checklistHtml, wireChecklist, daysUntil, sessionHref, preRecordedSessionKey,
  } = window.PCLL;

  const $ = (id) => document.getElementById(id);
  const code = (new URLSearchParams(location.search).get('code') || '').trim().toUpperCase();
  const details = (window.COURSE_DETAILS && window.COURSE_DETAILS[code]) || null;

  let homeworkChecklistWired = false;

  function setSyncStatus(text) {
    $('syncStatus').textContent = text;
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

  // Each row's "No." cell is a real link to that session's own page
  // (session.html) — clicking anywhere else in the row jumps to the same
  // href (see initSessionRows), so the whole row stays a big, convenient
  // click target while still being a genuine, shareable/keyboard-reachable
  // link rather than a JS-only popup trigger.
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
    const href = escapeHtml(sessionHref(ev, dateIso));
    return `<tr class="${rowClass}" data-idx="${idx}">
      <td class="col-date">${escapeHtml(dateLabel)}<span class="wk-tag">Wk ${weekNumber}</span></td>
      <td class="col-time">${escapeHtml(timeText)}</td>
      <td class="col-no"><a class="row-link" href="${href}">${escapeHtml(no || 'View')}</a></td>
      <td class="col-topic">${escapeHtml(ev.topic || '')}</td>
      <td class="col-venue">${escapeHtml(ev.venue || '')}</td>
      <td class="col-who">${escapeHtml(ev.instructor || '')}</td>
    </tr>`;
  }

  // Most pre-recorded entries have no dedicated session page — but where
  // courseDetails.js documents one (matched via entry.no, or via
  // preRecordedTopic when the timetable gives no `no` of its own — see
  // preRecordedSessionKey), the "No." cell becomes a real link, same as a
  // dated session's row (rowHtml above).
  function preRecordedRowHtml(entry, weekNumber, idx) {
    const when = entry.when ? entry.when[0].toUpperCase() + entry.when.slice(1) : 'No specific timing given';
    const key = preRecordedSessionKey(code, entry);
    const hasDetail = key && details && details.sessions && details.sessions[key];
    const noCell = hasDetail
      ? `<a class="row-link" href="${escapeHtml(sessionHref({ code: entry.code, no: key }, ''))}">${escapeHtml(entry.no || key)}</a>`
      : escapeHtml(entry.no || '');
    return `<tr class="pre-recorded" data-idx="${idx}">
      <td class="col-date">${ICONS.play}Pre-recorded<span class="wk-tag">Wk ${weekNumber}</span></td>
      <td class="col-time">${escapeHtml(when)}</td>
      <td class="col-no">${noCell}</td>
      <td class="col-topic">${escapeHtml(entry.topic || '')}</td>
      <td class="col-venue">Moodle</td>
      <td class="col-who">${escapeHtml(entry.instructor || '')}</td>
    </tr>`;
  }

  function renderCourseInfo() {
    const section = $('courseInfoSection');
    if (!details) { section.hidden = true; return; }
    section.hidden = false;
    $('coordinatorList').innerHTML = (details.coordinators || []).map((c) => {
      const meta = [c.room, c.hours].filter(Boolean).map(escapeHtml).join(' &middot; ');
      return `
      <div class="coordinator-card">
        <strong>${escapeHtml(c.name)}</strong>
        ${meta ? `<div class="muted">${meta}</div>` : ''}
        <a href="mailto:${escapeHtml(c.email)}">${escapeHtml(c.email)}</a>
      </div>`;
    }).join('');
    $('learningOutcomesList').innerHTML = (details.learningOutcomes || []).map((o) => `<li>${escapeHtml(o)}</li>`).join('');
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
    $('materialsNotesList').innerHTML = (details.materialsNotes || []).map((m) => `<li class="muted">${escapeHtml(m)}</li>`).join('');
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
    let idx = 0;
    for (const week of data.weeks) {
      for (const entry of week.preRecorded || []) {
        if (entry.code !== code) continue;
        rows.push(preRecordedRowHtml(entry, week.week, idx++));
      }
      for (const day of week.days) {
        for (const ev of day.events || []) {
          if (ev.code !== code) continue;
          rows.push(rowHtml(ev, week.week, day.date, day.day, idx++));
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

  // Rows only carry a real <a> in their "No." cell (see rowHtml) — this
  // just extends a click anywhere else in the row to the same destination,
  // so the row stays a comfortable click target without duplicating the
  // link's own keyboard/screen-reader/right-click behavior.
  function initSessionRows() {
    $('sessionTableBody').addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      const tr = e.target.closest('tr[data-idx]');
      const link = tr && tr.querySelector('a.row-link');
      if (link) location.href = link.href;
    });
  }

  initTheme($('themeBtn'));
  initSessionRows();
  load();
})();
