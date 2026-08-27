(() => {
  'use strict';

  const { ELECTIVE_NAMES, fmtShort, fmtTime, escapeHtml, isHappeningNow, initTheme, fetchTimetable } = window.PCLL;

  const $ = (id) => document.getElementById(id);
  const code = (new URLSearchParams(location.search).get('code') || '').trim().toUpperCase();

  function setSyncStatus(text) {
    $('syncStatus').textContent = text;
  }

  function rowHtml(ev, weekNumber, dateIso, dayName) {
    const timeText = ev.start ? `${fmtTime(ev.start)}${ev.end ? '–' + fmtTime(ev.end) : ''}` : (ev.timeLabel || 'TBC');
    const no = ev.no ? ev.no + (ev.part ? ` (${ev.part})` : '') : (ev.part || '');
    const now = isHappeningNow(ev, dateIso);
    const rowClass = [
      ev.scope === 'group' ? 'mine' : '',
      ev.scope === 'other-group' ? 'other-group' : '',
      now ? 'now' : '',
    ].filter(Boolean).join(' ');
    const dateLabel = dateIso ? fmtShort(dateIso) : (dayName || '');
    return `<tr class="${rowClass}">
      <td class="col-date">${escapeHtml(dateLabel)}<span class="wk-tag">Wk ${weekNumber}</span></td>
      <td class="col-time">${escapeHtml(timeText)}</td>
      <td class="col-no">${escapeHtml(no)}</td>
      <td class="col-topic">${escapeHtml(ev.topic || '')}</td>
      <td class="col-venue">${escapeHtml(ev.venue || '')}</td>
      <td class="col-who">${escapeHtml(ev.instructor || '')}</td>
    </tr>`;
  }

  function renderCourse(data) {
    const name = data.meta.courses[code] || ELECTIVE_NAMES[code] || '';
    const heading = name ? `${code} · ${name}` : code || 'Unknown course';
    document.title = `${heading} — Whack the PCLL`;
    $('courseTitle').textContent = heading;

    const rows = [];
    for (const week of data.weeks) {
      for (const day of week.days) {
        for (const ev of day.events || []) {
          if (ev.code !== code) continue;
          rows.push(rowHtml(ev, week.week, day.date, day.day));
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
    try {
      const data = await fetchTimetable();
      renderCourse(data);
      setSyncStatus(`Last synced ${new Date(data.meta.syncedAt).toLocaleString()}`);
    } catch (err) {
      $('status').hidden = false;
      $('status').className = 'status error';
      $('status').textContent = 'Could not load this course: ' + err.message;
      setSyncStatus('Sync failed');
    }
  }

  initTheme($('themeBtn'));
  load();
})();
