// Minimal, dependency-free reader for the subset of XLSX we need: sheet names,
// shared strings, and cell grids. Avoids the `xlsx` npm package, whose registry
// build (0.18.5) carries unpatched prototype-pollution/ReDoS advisories.
'use strict';

const zlib = require('zlib');

function readZipEntries(buf) {
  // Locate End Of Central Directory record (search from the end; comment is
  // rarely used in xlsx so this is normally found immediately).
  const EOCD_SIG = 0x06054b50;
  let eocdOffset = -1;
  for (let i = buf.length - 22; i >= 0 && i >= buf.length - 22 - 65536; i--) {
    if (buf.readUInt32LE(i) === EOCD_SIG) {
      eocdOffset = i;
      break;
    }
  }
  if (eocdOffset === -1) throw new Error('Not a valid zip/xlsx file (EOCD not found)');

  const entryCount = buf.readUInt16LE(eocdOffset + 10);
  const cdOffset = buf.readUInt32LE(eocdOffset + 16);

  const entries = new Map();
  let ptr = cdOffset;
  const CD_SIG = 0x02014b50;
  for (let i = 0; i < entryCount; i++) {
    if (buf.readUInt32LE(ptr) !== CD_SIG) throw new Error('Corrupt central directory');
    const method = buf.readUInt16LE(ptr + 10);
    const compSize = buf.readUInt32LE(ptr + 20);
    const uncompSize = buf.readUInt32LE(ptr + 24);
    const nameLen = buf.readUInt16LE(ptr + 28);
    const extraLen = buf.readUInt16LE(ptr + 30);
    const commentLen = buf.readUInt16LE(ptr + 32);
    const localHeaderOffset = buf.readUInt32LE(ptr + 42);
    const name = buf.toString('utf8', ptr + 46, ptr + 46 + nameLen);
    entries.set(name, { method, compSize, uncompSize, localHeaderOffset });
    ptr += 46 + nameLen + extraLen + commentLen;
  }

  function readFile(name) {
    const meta = entries.get(name);
    if (!meta) return null;
    const lh = meta.localHeaderOffset;
    if (buf.readUInt32LE(lh) !== 0x04034b50) throw new Error('Corrupt local file header for ' + name);
    const nameLen = buf.readUInt16LE(lh + 26);
    const extraLen = buf.readUInt16LE(lh + 28);
    const dataStart = lh + 30 + nameLen + extraLen;
    const compressed = buf.subarray(dataStart, dataStart + meta.compSize);
    if (meta.method === 0) return compressed;
    if (meta.method === 8) return zlib.inflateRawSync(compressed);
    throw new Error('Unsupported zip compression method ' + meta.method + ' for ' + name);
  }

  return { names: [...entries.keys()], readFile };
}

function decodeXmlEntities(s) {
  return s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&amp;/g, '&');
}

function parseSharedStrings(xml) {
  if (!xml) return [];
  const out = [];
  const siRe = /<si\b[^>]*>([\s\S]*?)<\/si>/g;
  let m;
  while ((m = siRe.exec(xml))) {
    const inner = m[1];
    let text = '';
    const tRe = /<t\b[^>]*>([\s\S]*?)<\/t>/g;
    let tm;
    while ((tm = tRe.exec(inner))) text += tm[1];
    out.push(decodeXmlEntities(text));
  }
  return out;
}

function colToNum(col) {
  let n = 0;
  for (const c of col) n = n * 26 + (c.charCodeAt(0) - 64);
  return n;
}

function parseSheetXml(xml, sharedStrings) {
  const grid = [];
  let maxRow = 0;
  let maxCol = 0;
  // Two top-level alternatives (rather than a shared attrs group followed by
  // an alternation) because a lazy attrs group would otherwise swallow the
  // trailing "/" of a self-closing <c .../> before the "/>" branch gets a
  // chance to match, causing it to fall through and consume unrelated XML
  // up to the next real "</c>".
  const cellRe = /<c\b([^>]*?)\/>|<c\b([^>]*?)>([\s\S]*?)<\/c>/g;
  let cm;
  while ((cm = cellRe.exec(xml))) {
    const attrs = cm[1] !== undefined ? cm[1] : cm[2];
    const body = cm[3] || '';
    const refMatch = /r="([A-Z]+)(\d+)"/.exec(attrs);
    if (!refMatch) continue;
    const col = colToNum(refMatch[1]);
    const row = parseInt(refMatch[2], 10);
    maxRow = Math.max(maxRow, row);
    maxCol = Math.max(maxCol, col);

    const typeMatch = /t="([^"]+)"/.exec(attrs);
    const type = typeMatch ? typeMatch[1] : null;

    let value = '';
    if (type === 'inlineStr') {
      let text = '';
      const tRe = /<t\b[^>]*>([\s\S]*?)<\/t>/g;
      let tm;
      while ((tm = tRe.exec(body))) text += tm[1];
      value = decodeXmlEntities(text);
    } else {
      const vMatch = /<v>([\s\S]*?)<\/v>/.exec(body);
      const raw = vMatch ? vMatch[1] : '';
      if (type === 's') {
        value = sharedStrings[parseInt(raw, 10)] || '';
      } else {
        value = decodeXmlEntities(raw);
      }
    }

    if (!grid[row]) grid[row] = [];
    grid[row][col] = value;
  }
  return { grid, maxRow, maxCol };
}

function loadWorkbook(buf) {
  const zip = readZipEntries(buf);

  const sharedStringsXml = zip.readFile('xl/sharedStrings.xml');
  const sharedStrings = parseSharedStrings(sharedStringsXml ? sharedStringsXml.toString('utf8') : null);

  const workbookXml = zip.readFile('xl/workbook.xml').toString('utf8');
  const relsXml = zip.readFile('xl/_rels/workbook.xml.rels').toString('utf8');

  const relMap = new Map();
  const relRe = /<Relationship\b([^>]*)\/>/g;
  let rm;
  while ((rm = relRe.exec(relsXml))) {
    const idMatch = /Id="([^"]+)"/.exec(rm[1]);
    const targetMatch = /Target="([^"]+)"/.exec(rm[1]);
    if (idMatch && targetMatch) relMap.set(idMatch[1], targetMatch[1]);
  }

  const sheets = [];
  const sheetRe = /<sheet\b([^>]*)\/>/g;
  let sm;
  while ((sm = sheetRe.exec(workbookXml))) {
    const attrs = sm[1];
    const nameMatch = /name="([^"]+)"/.exec(attrs);
    const ridMatch = /r:id="([^"]+)"/.exec(attrs);
    if (!nameMatch || !ridMatch) continue;
    const target = relMap.get(ridMatch[1]);
    sheets.push({ name: decodeXmlEntities(nameMatch[1]), path: 'xl/' + target.replace(/^\/?/, '') });
  }

  function getSheetGrid(nameOrIndex) {
    const sheet =
      typeof nameOrIndex === 'number' ? sheets[nameOrIndex] : sheets.find((s) => s.name === nameOrIndex);
    if (!sheet) return null;
    const xml = zip.readFile(sheet.path).toString('utf8');
    return parseSheetXml(xml, sharedStrings);
  }

  return { sheetNames: sheets.map((s) => s.name), getSheetGrid };
}

module.exports = { loadWorkbook };
