# LG8 v1.0 (Discovery source review)

This is the authoring record for Civil Litigation LG8. The exam-facing notes are in `courseDetails/PCLL8010.js`, under `sessions.LG8.examNotes.issueTypes`. The record is separate so that answers can cite rules and cases without referring to teaching materials.

## Sources reviewed

- `LG8 Discovery Lecture Outline.pdf` (2026–27, 14 pages, paragraphs 1–62), supplied by the user. All pages were extracted and reviewed; pages 3, 8 and the later procedure pages received focused checks against the page render.
- `LG8-Discovery.pptx` (38 slides), supplied by the user. All slide text was extracted and reviewed. The slides are a second presentation of the same core material and add fact-pattern examples and procedural summaries.

The outline mentions a case-file example of a List of Documents, but that case file was not among the two supplied files. The notes therefore use a generic Form 26 drafting skeleton and do not invent a completed specimen.

## Issue-to-source map

| LG8 issue ID | Source detail carried into exam notes | Outline | Slides |
| --- | --- | --- | --- |
| `scope-relevance` | Broad meaning of document; electronic and metadata examples; Peruvian Guano relevance; direct-relevance/proportionality restriction; PDSL1.2 route | pp. 2–4, paras. 2–8 | 2–8 |
| `list-continuing` | Automatic post-pleadings lists; Form 26 schedules; present and former possession, custody or power; continuing search; Form 27 verification | pp. 3–4, paras. 9–13 | 9–12, 21 |
| `privilege-objections` | Without prejudice communications; legal advice/litigation privilege, pre-existing documents and copies; waiver; self-incrimination; state the objection in the list | pp. 4–7, paras. 14–22 | 13–21 |
| `inspection-authenticity` | Inspection and copy-request sequence, timing and objections; O.27 r.4 authenticity admission or notice | pp. 6–7, paras. 23–24 | 22–23 |
| `specific-discovery` | Further and better list; focused letter and summons; relevance to existing pleadings, likely existence and control, necessity/proportionality, confidentiality and denying affidavit | pp. 7–9, paras. 25–31 | 24–28 |
| `implied-undertaking` | Collateral-use restriction, open-court exception, release by consent or leave, and variation of an O.24 order | pp. 9–11, paras. 32–38 | 29–30 |
| `preaction-nonparty` | HCO ss.41–42 / DCO ss.47A–47B, O.24 r.7A, timing, target and supporting affidavit | pp. 11–12, paras. 39–43 | 31–32 |
| `alternative-tools` | Norwich Pharmacal conditions, Bankers Trust tracing example, subpoena duces tecum at trial | p. 12, paras. 44–51 | 33–34 |
| `interrogatories` | O.26 purpose and limits, question drafting, number/rounds, 14-day objection route, affidavit answer within 28 days, enforcement | pp. 12–14, paras. 52–62 | 35–38 |

## Editorial and legal checks

- Nine issues group related tasks so the exam flow begins with the missing document or information, its holder and the stage of proceedings. The detailed tests, procedure and draftable relief remain in the relevant issue rather than in a separate catch-all issue.
- Model-answer text and authority tables cite O.24, O.26, O.27, HCO/DCO provisions, practice direction and cases where used. Source filenames, slide numbers, “lecture”, and “Annex” do not appear in exam-facing text.
- The notes distinguish relevance from a court-imposed direct-relevance limit, disclosure from inspection, listing from a privilege claim, and ordinary inter-party discovery from pre-action/non-party and information-gathering routes.
- The post-CJR statutory pre-action discussion follows the supplied 2026–27 materials and the current O.24 r.7A route. Historical descriptions of HCO s.41 that limit it to personal-injury claims should not be substituted for the updated rule without checking the applicable version.
- Case propositions are paraphrased. No unverified verbatim judgment quotations or case-file facts were inserted.

## Verification

Run `npm run build:index` after editing the course source, followed by `npm run check`, `npm run lint` and `npm test`. The `check` script uses a POSIX shell loop; in PowerShell, run `node --check` over each tracked JavaScript file instead. Inspect the LG8 overview and issues in desktop/mobile and light/dark layouts, and check course/session/quiz routing and print output.
