'use strict';

const { loadWorkbook } = require('../lib/xlsxLite');
const { buildTimetable } = require('../lib/parseTimetable');

const SHEET_ID = '1pY7wz0QCwXgKB_jQyA0xl66zUQQo5wuI';
const GROUP = 11;
const PAIRED_GROUP = 24; // groups pair as N / N+13 (26 groups total)

const COURSES = {
  PCLL8010: 'Civil Litigation',
  PCLL8020: 'Corporate & Commercial Transactions',
  PCLL8030: 'Property Transactions',
  PCLL8040: 'Professional Practice & Management',
  PCLL8050: 'Criminal Litigation',
  PCLL8051: 'Criminal Advocacy',
  PCLL8104: 'Civil Advocacy',
  PCLL8014: 'Civil Advocacy',
  PCLL8100: 'Trial Advocacy',
  PCLL8101: 'Commercial Dispute Resolution',
  PCLL8102: 'Personal Injury Litigation',
  PCLL8103: 'Matrimonial Practice and Procedure',
  PCLL8105: 'Drafting Commercial Agreements',
  PCLL8107: 'Listed Companies',
  PCLL8108: 'China Practice',
  PCLL8109: 'Wills, Trusts and Estate Planning',
  PCLL8110: 'Use of Chinese in Legal Practice',
  PCLL8111: 'Financial Regulations and Practice',
  PCLL8112: 'Employment Law and Practice',
  PCLL8113: 'Property Practice',
};

module.exports = async (req, res) => {
  const fresh = req.query && (req.query.fresh === '1' || req.query.fresh === 'true');

  try {
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=xlsx${
      fresh ? `&_=${Date.now()}` : ''
    }`;
    const response = await fetch(url, { redirect: 'follow' });
    if (!response.ok) {
      throw new Error(`Sheet fetch failed: HTTP ${response.status}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    const workbook = loadWorkbook(Buffer.from(arrayBuffer));
    const timetable = buildTimetable(workbook, { group: GROUP, pairedGroup: PAIRED_GROUP, courses: COURSES });

    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader(
      'Cache-Control',
      fresh ? 'no-store' : 'public, s-maxage=21600, stale-while-revalidate=86400'
    );
    res.status(200).send(JSON.stringify(timetable));
  } catch (err) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.status(502).send(JSON.stringify({ error: 'Failed to sync timetable', detail: String(err && err.message || err) }));
  }
};
