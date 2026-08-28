// Hand-transcribed course-level reference material (course outlines, lecture
// outlines, activity plans) — static data in the same spirit as
// legalSkills.js: not fetched live, not derived from the timetable sheet.
// Keyed by course code; a code with no entry here means every dashboard
// section that reads from this file simply renders nothing extra for it —
// that's the whole compatibility story for every course besides PCLL8010
// today. Session entries are keyed by "LG"/"SG" + number with NO trailing
// letter ("LG1", not "LG1A") — course.js resolves which part ("A"/"B") from
// the live timetable event's own `no` field (e.g. "LG1A"), not from here.
window.COURSE_DETAILS = {
  PCLL8010: {
    name: 'Civil Litigation',

    coordinators: [
      { name: 'Ophelia Chan', room: 'CCT 6.15', hours: 'Wednesdays 11am-5pm', email: 'cyyo@hku.hk' },
      { name: 'Sam Liu', room: 'CCT 9.05', hours: 'Mondays 3-6pm', email: 'shanliu2@hku.hk' },
      { name: 'Vivian Chan', room: 'CCT 7.15', hours: 'Wednesdays 11:30am-12:30pm & 5:30-6:30pm', email: 'vicmchan@hku.hk' },
    ],

    learningOutcomes: [
      'Demonstrate sufficient knowledge and understanding of the procedural rules for conducting a civil action in the High Court and the District Court in Hong Kong',
      'Integrate their knowledge and understanding of the procedural rules for conducting a civil action with the core litigation skills',
      'Investigate and analyse factual and evidential issues',
      'Analyse legal issues and conduct practical legal research',
      'Draft basic contentious litigation documents such as letters before action, pleadings, affidavits, summonses and orders',
      'Conduct interviews with clients',
      "Gain familiarity with 'real-life' case files",
    ],

    materials: [
      'Civil Procedure in Hong Kong by Cheung, Chim and Meggitt (7th Edition, LexisNexis 2023)',
      'Case Files (Contract and Negligence)',
      'Large Group (LG) Lecture Outlines',
      'Small Group (SG) Activity Plans',
      'High Court Ordinance and District Court Ordinance, incl. Rules of the High Court / District Court (online)',
      'Hong Kong Civil Court Practice — Desk Edition ("Blue Book") (Butterworths) — annotated Rules of the High Court, available via Lexis',
      'Hong Kong Civil Procedure ("White Book") (Sweet & Maxwell) — the leading practitioner text, available via Westlaw',
    ],
    materialsNotes: [
      'Textbooks date quickly — check the latest case law rather than relying on the book alone.',
      'Electronic research access: the White Book, Hong Kong Law Reports and unreported judgments via Westlaw; the Hong Kong Cases series via Lexis; all Hong Kong legislation via BLIS; judgments and Practice Directions via the Judiciary website.',
      'Copyright: photocopying textbooks or commercially annotated statutes (e.g. the Blue Book) is not allowed — government-published statutes may be freely copied for personal use, but annotated commercial editions may not.',
    ],

    assessments: [
      {
        title: 'Standardised Client Interview Assessment',
        weight: '5%',
        dateLabel: '17 or 18 September 2026',
        note: 'Allocation posted to Moodle',
        deadlineIds: ['PCLL8010-interview-1', 'PCLL8010-interview-2'],
      },
      { title: 'Final Examination — Knowledge', weight: '47.5%', dateLabel: '8 January 2027 (Provisional)' },
      { title: 'Final Examination — Drafting', weight: '47.5%', dateLabel: '9 January 2027 (Provisional)' },
    ],
    assessmentNotes: [
      'To pass, you need at least 50% in aggregate across the written assessments (Knowledge + Drafting + the interviewing exercise) — you do not need to pass each paper individually.',
      'Two thresholds must both be cleared: 50%+ overall (written papers plus the interviewing exercise), AND 50%+ of the written-papers component alone (47.5 out of 95) — a strong interview mark cannot rescue weak written papers. Example: 5/5 on the interview plus 46/95 on the written papers is 51/100 overall, which looks like a pass, but still fails because 46 is under 47.5.',
      'Re-examinations (if allowed) only require re-sitting the paper(s) where you scored below 50% of that paper’s marks; marks from papers you already passed (and the interviewing exercise) carry over.',
      'PCLL8010 = 70% Civil Litigation + 30% Civil Advocacy.',
    ],

    // Each homework/todo item's due date lives ONLY here (referenced by id
    // from homework[]/todos[] below) — one place any date ever needs
    // updating. `kind` drives both the deadline-chip color and which
    // localStorage checklist a "done" check reads from.
    deadlines: [
      { id: 'PCLL8010-hw-sg1', courseCode: 'PCLL8010', kind: 'homework', refId: 'hw-sg1', date: '2026-09-25', time: '17:30', title: 'LBA due (SG1 homework)' },
      { id: 'PCLL8010-hw-sg4', courseCode: 'PCLL8010', kind: 'homework', refId: 'hw-sg4', date: '2026-10-27', title: 'Statement of Claim due (SG4 homework)' },
      { id: 'PCLL8010-hw-sg7', courseCode: 'PCLL8010', kind: 'homework', refId: 'hw-sg7', date: '2026-11-17', title: 'Draft Affirmation & Order due (SG7 homework)' },
      { id: 'PCLL8010-hw-sg8', courseCode: 'PCLL8010', kind: 'homework', refId: 'hw-sg8', date: '2026-12-01', title: 'Draft Affidavit (Mareva) due (SG8 homework)' },
      { id: 'PCLL8010-undertaking', courseCode: 'PCLL8010', kind: 'todo', refId: 'todo-undertaking', date: '2026-09-11', time: '17:00', title: 'Undertaking Form deadline (if not handed in at SG1)' },
      { id: 'PCLL8010-interview-1', courseCode: 'PCLL8010', kind: 'assessment', refId: 'assessment-interview', date: '2026-09-17', title: 'Standardised Client Interview — check your allocated slot' },
      { id: 'PCLL8010-interview-2', courseCode: 'PCLL8010', kind: 'assessment', refId: 'assessment-interview', date: '2026-09-18', title: 'Standardised Client Interview — check your allocated slot' },
    ],

    homework: [
      { id: 'hw-sg1', title: 'Letter before action', sgRef: 'SG1', mode: 'One draft per subgroup', feedback: 'Oral feedback during a later SG', deadlineId: 'PCLL8010-hw-sg1' },
      { id: 'hw-sg4', title: 'Statement of Claim — Negligence', sgRef: 'SG4', mode: 'Individual submission', feedback: 'Individual written feedback', deadlineId: 'PCLL8010-hw-sg4' },
      { id: 'hw-sg7', title: 'Draft Affirmation and Draft Order', sgRef: 'SG7', mode: 'One draft per subgroup', feedback: 'Oral feedback during a later SG', deadlineId: 'PCLL8010-hw-sg7' },
      { id: 'hw-sg8', title: 'Draft Affidavit in Support of Mareva Injunction', sgRef: 'SG8', mode: 'Individual submission', feedback: 'Individual written feedback', deadlineId: 'PCLL8010-hw-sg8' },
    ],

    todos: [
      { id: 'todo-undertaking', title: 'Submit Interviewing Exercise Undertaking Form', deadlineId: 'PCLL8010-undertaking' },
    ],

    // Content shared by more than one session — referenced by id from a
    // session's `referenceIds`, never duplicated inline.
    references: {
      proFormaDeclaration: {
        title: 'Pro Forma Declaration',
        body: "Every written assignment must be submitted with a signed pro forma declaration (that you did not consult previous years' materials/sample drafts, and did not look at other groups' drafts) — without it, the assignment is treated as a non-submission.",
        bullets: [
          'Submit it as the front page of the SAME Word document as your assignment — one file, not a separate attachment.',
          'Typing your name at the top and bottom of the declaration counts as signing it.',
          'Put your name and group number in the top-left corner of the assignment itself.',
        ],
      },
      skillsGuideLBA: {
        title: 'Skills Guide — Drafting a Letter Before Action',
        sections: [
          {
            heading: 'Presentation (30%)',
            items: [
              'Appropriate opening/closing formalities, visual cues and signpost words',
              'Appropriate language for the addressee — active voice, no contractions, no legalese, no vague phrases',
              'Good use of headings, sub-headings, paragraphs',
              'Logical structure with an appropriate opening and conclusion',
              'Consistent tone and style; succinct, clear and precise',
            ],
          },
          {
            heading: 'Aim & Purpose',
            items: [
              'Simple, straightforward English that conveys purpose clearly',
              "Identify the letter's central (and secondary) purposes before drafting",
              'Start by outlining the points to include',
            ],
          },
          {
            heading: 'Contents (40%)',
            items: [
              'Explains on whose behalf the firm is instructed',
              'Sets out the relevant background to the claim in sufficient detail',
              'Includes the cause of action',
              'Summarises loss/damage/injury and deals with quantum',
              "Contains clear proposals for settling the claim that meet the client's objectives",
              'Makes clear that proceedings will follow if the recipient does not comply (if instructed)',
            ],
          },
          {
            heading: 'Other points to bear in mind',
            items: [
              'Put yourself in the position of the reader',
              "Be positive and firm asserting the client's position",
              'Edit hard — the shorter the letter, the greater the impact',
              'Every word should add to or explain the message; remove the rest',
              'Check grammar, spelling and punctuation carefully',
            ],
          },
          {
            heading: 'Overall (30%)',
            items: ["Set out the client's claim clearly, without prejudicing their interests"],
          },
        ],
      },
      lbaStudentGuide: {
        title: 'Student Guide — Drafting an LBA in a Simple Contract Dispute',
        sections: [
          {
            heading: 'Purpose & tone',
            items: [
              'An LBA places the recipient on notice of the claim and invites resolution without court proceedings — firm and authoritative, but professional and respectful; a lawyer is a problem-solver and negotiator, not just an advocate.',
              'It outlines the legal position, states what avoids litigation, gives a chance to respond/settle, and satisfies procedural requirements affecting costs/admissibility (e.g. PD18.1).',
            ],
          },
          {
            heading: 'Preparation & structure',
            items: [
              'Identify the primary purpose (e.g. demand payment) and any secondary purpose (preserve relationship, clarify facts, propose settlement) before drafting.',
              'Follow a deliberate structure — no stream-of-consciousness. Simple, factual, intentional.',
            ],
          },
          {
            heading: 'Opening',
            items: [
              'Professional letter formatting: date, recipient, subject line.',
              'Introduce sender, client, and reason for writing — e.g. "We act for [Client]. We are instructed to write to you concerning a contract entered into on [date]..."',
            ],
          },
          {
            heading: 'Factual background',
            items: [
              'State material facts clearly, chronologically, in active voice — who did what, and when.',
              'No speculation, exaggeration, or emotive language — let the facts speak.',
            ],
          },
          {
            heading: 'Legal basis',
            items: [
              'Explain the legal basis simply and assertively — "Your failure to [breach] constitutes a breach of contract. Our client is entitled to..."',
              'Include a statutory/contractual reference where appropriate; avoid legalese, "it appears", "it is arguable" — project confidence, not doubt.',
            ],
          },
          {
            heading: 'Demand, warning & closing',
            items: [
              'State precisely what is demanded, with the exact amount and a clear deadline (e.g. 7/14 days); may add interest, costs, or an ADR proposal.',
              'If it is a final warning, say so plainly and proportionately — no dramatic threats.',
              'Close restating willingness to resolve; "Yours faithfully"/"Yours sincerely" as appropriate; list enclosures (contract, correspondence, invoices).',
            ],
          },
          {
            heading: 'Style, editing & final checks',
            items: [
              'Short sentences, plain English, no jargon or contractions, one topic per paragraph, clear signposting ("Turning to...", "In summary").',
              'Proofread for grammar/spelling/punctuation; remove every unnecessary word.',
              'Before sending: accurate and complete, clear response timeline, all enclosures included, dated and signed.',
            ],
          },
          {
            heading: 'Key points to recall',
            items: [
              "Be clear about the letter's purpose before you start.",
              'Follow a deliberate structure: opening, facts, legal basis, demand, warning, closing.',
              'Be concise, objective and professional in tone.',
              'Avoid legalese, exaggeration and speculation.',
              'Edit hard for clarity, brevity and accuracy.',
            ],
          },
        ],
      },
      lifecycleReference: {
        title: 'Appendix A — Lifecycle of a Civil Claim',
        body: 'A 12-step map of how a civil claim moves from first instructions through to appeal, in four stages.',
        diagrams: [
          {
            title: 'The pleading stage (Steps 1–6)',
            steps: [
              { label: 'Pre-action', detail: 'Consider: settlement options, limitation periods, the proper court and parties, the parties\' financial position, whether further investigation is needed, and pre-action protocols (e.g. PD18.1).' },
              { label: 'Commencing proceedings', detail: 'Four ways to start a claim: writ of summons, originating summons, originating motion, or petition.' },
              { label: 'Service', detail: 'Formally delivering court documents to a party so they\'re made aware of the proceedings and can respond.' },
              { label: 'Early judgment', detail: 'If relevant: apply for default judgment (the other side failed to respond), or consider summary judgment if it applies.' },
              { label: 'Defend', detail: 'The defendant files a defence; the plaintiff may reply within 28 days (silence = deemed denial). A counterclaim needs a defence to counterclaim within 28 days of service to be disputed.' },
              { label: 'Close of pleadings', detail: 'The formal exchange of pleadings between the parties is complete.' },
            ],
          },
          {
            title: 'Discovery & case management (Steps 7–9)',
            steps: [
              { label: 'Exchange of evidence', detail: 'Documentary evidence is disclosed via discovery; oral evidence via exchange of witness statements.' },
              { label: 'Timetabling questionnaire', detail: 'Each party files a Timetabling Questionnaire (TQ) within 28 days of close of pleadings; the plaintiff takes out a Case Management Summons (CMS), or the court fixes a Case Management Conference.' },
              { label: 'Mediation', detail: 'Parties file a Mediation Certificate and Notice at case management. Mediation is voluntary — the court can\'t compel it — but an unreasonable refusal can bring adverse costs consequences, even for the winner.' },
            ],
          },
          {
            title: 'Trial and appeal (Steps 10–12)',
            steps: [
              { label: 'Pre-trial review', detail: 'Shortly before trial: checks pre-trial steps are done, no outstanding issues remain, the parties have complied with case-management directions, estimates trial length, and explores settlement/mediation.' },
              { label: 'Trial', detail: 'Once claim, defence, counterclaim and replies are all filed, the parties tender their evidence to prove their case.' },
              { label: 'Post-trial matters & appeal', detail: 'Costs, enforcement, and appeal.' },
            ],
          },
        ],
        warnings: [
          'Mediation is voluntary — but an unreasonable refusal to mediate can result in an adverse costs order, even for the party who ultimately wins at trial.',
          'A defence to counterclaim is due within 28 days of service — miss it and you are treated as disputing nothing in the counterclaim.',
        ],
      },
      undertakingForm: {
        title: 'Undertaking Form (Standardised Clients Interviewing Exercise)',
        body: 'Return to your tutor during SG1 (9 or 10 September 2026), or — only if unable to — email it to Mr Frederick Lo (ctflo99@hku.hk) by 5:00pm Friday 11 September 2026. Failing to submit it, or failing to agree to its terms, means 0 out of 5 marks on the Interviewing Exercise.',
        checkboxes: [
          'Agree not to discuss or share the contents of my Interviewing Exercise session (incl. my own notes) with any other student or third party until after 10:00pm on 18 September 2026',
          'Consent to my performance being video-recorded for educational purposes',
        ],
        fields: ['Full Name', 'Signed', 'Date', 'Group no.'],
      },
    },

    sessions: {
      LG1: {
        kind: 'LG',
        date: '2026-09-02',
        time: '13:00-15:30',
        mode: 'Face-to-face',
        authors: ['Julienne Jen', 'Darcy Lynn Davison-Roberts', 'Ophelia Chan'],
        parts: [
          {
            partLetter: 'A',
            title: 'Introduction to the Course',
            instructor: { name: 'Darcy Lynn Davison-Roberts', email: 'dldavrob@hku.hk', hours: 'Thursdays 17:00-19:00' },
            objectives: [
              'The course objectives and how the Civil Litigation course will be taught',
              'The knowledge and skills students will acquire and practise',
              'What is expected of students',
              'Methods of assessment',
            ],
          },
          {
            partLetter: 'B',
            title: 'Taking Instructions on a New Case & Drafting Letters Before Action',
            instructor: { name: 'Ophelia Chan', email: 'cyyo@hku.hk', hours: 'Wednesdays 11:00-17:00' },
            objectives: [
              'Distinguish the two basic types of legal problem solving',
              'Explain the process model of legal problem solving for conducting civil claims',
              'Apply the legal problem-solving skill through a case study',
              'Draft a letter before action',
            ],
          },
        ],
        topicsCovered: [
          'Two basic types of legal problem solving — Blocking Conflict vs Playing Out Conflict',
          '5-stage Process Model of Legal Problem Solving ("PG-FLAP"): Problem/goal identification, Fact investigation, Legal issue identification and assessment, Advice and decision making, Planning and implementation',
          'Drafting a Letter Before Action',
        ],
        prep: {
          readings: ['This lecture outline', 'Negligence Case File, Bundle A', 'Contract Case File', 'Appendix 2: Drafting Letters Before Action Skills Guide'],
          activities: [
            { title: 'Exercise 1: Greenhouse Effective Petroleum Company Limited', instructions: 'Read and complete before class' },
          ],
        },
        keyTakeaways: [
          'PG-FLAP is the way to handle legal problems.',
          'Pre-action conduct (e.g. a letter before action) can have implications as to costs.',
        ],
        exercises: [
          {
            id: 'ex1',
            title: 'Exercise 1 — Greenhouse Effective Petroleum Company Limited',
            factPattern: "You are an assistant solicitor at Messrs. Black, Green & White, approached by Mr George Po, Managing Director of Greenhouse Effective Petroleum Company Limited (\"Greenhouse\"). A traffic accident on 13 January 2020 at Greenhouse's Shatin Petrol Service Station: a silver Mercedes Benz (plate GT 3194) lost control entering the station, colliding with a pump and cash register and injuring a staff member. Both had to be replaced, costing at least a few hundred thousand dollars. Police attended and took statements from the petrol serviceman (Chan Mo Gu) and the supervisor (Wong Chu Yum), neither of whom retained copies. Po does not know the vehicle owner's identity but wants to recover Greenhouse's losses.",
            questions: [
              'How should you advise Greenhouse?',
              'What should Greenhouse do now?',
              'Who should Greenhouse recover against?',
              'How should Greenhouse pursue its cause of action, if any?',
              'What further information or investigation is required?',
            ],
          },
        ],
        legalIssues: [
          {
            number: '1',
            heading: 'Course Structure & Learning Methodology',
            notes: [
              {
                heading: 'Course objectives & design strategy',
                bullets: [
                  'Two strands taught together: (1) civil procedure rules, and (2) civil litigation drafting/problem-solving skills.',
                  'Delivered through LGs, SGs, video recordings, and review/Q&A sessions.',
                  'Procedure rules: taught via LG in week one, then practised via SG later.',
                  'Skills sequencing: interviewing and drafting an LBA are taught early; drafting of pleadings, affidavits, summonses and orders comes progressively later.',
                  'Two realistic case files (Contract and Negligence) run throughout the course so you see how procedural rules and skills apply at different stages of real litigation — both available on Moodle from day one.',
                ],
              },
              {
                heading: 'What a "Skills Guide" is for',
                bullets: [
                  'A skills guide sets out criteria for a skill, guidance on performing it, and criteria for assessing it.',
                  "It's meant to be applied flexibly across different problems, not as a rigid checklist for one situation — use it to guide your own drafting and for self-assessment, with minimal reliance on precedents or sample answers.",
                ],
              },
            ],
          },
          {
            number: '2',
            heading: 'Case Analysis Method',
            notes: [
              {
                heading: '5-level case analysis model',
                table: {
                  headers: ['Level', 'Focus', 'Why it matters'],
                  rows: [
                    ['1', 'Area of law', 'Frames which body of law governs the problem'],
                    ['2', 'Cause of action / remedy', 'What the client can actually claim'],
                    ['3', 'Legal ingredients', 'The elements that support the cause of action'],
                    ['4', 'Material facts', 'The facts needed for each ingredient — drives pleadings'],
                    ['5', 'Evidence', 'What proves each material fact, and how — drives affidavits'],
                  ],
                },
                bullets: ['Useful for assessing merits, deciding what further evidence is needed, drafting pleadings (Level 4), and preparing affidavits (Level 5).'],
              },
              {
                heading: 'Case Analysis, Research, Problem Solving & Fact Management',
                bullets: [
                  'The hardest transition in the course is from theoretical recall to practical analysis, investigation and application — these skills are used together throughout, not learned in isolation.',
                  "Build the habit of preparing, for every case (whether or not an exercise expressly asks for it): a Dramatis Personae (list of people involved), a Chronology of Events, a succinct summary of the client's case, and a Skeletal Plan for any drafting.",
                ],
              },
            ],
          },
          {
            number: '3',
            heading: 'The Litigation Skills Curriculum',
            notes: [
              {
                heading: 'Conducting claims, LBAs, interviewing, pleadings, affidavits, summonses',
                table: {
                  headers: ['Stage', 'What you learn', 'Format / notes'],
                  rows: [
                    ['LG', 'The overall litigation picture', 'Plus textbook reading'],
                    ['SG homework', 'Draft a Letter Before Action, in groups', ''],
                    ['LG2 + SG2', 'Interviewing skills', 'Compulsory interviewing exercise at SG2 — up to 5% of the aggregate, happens once, marks carry to any supplementary exam'],
                    ['SG', 'Draft pleadings using the 5-level model, not precedents', 'Tutor feedback plus sample drafts provided'],
                    ['SG', 'Draft affidavits', 'First affidavit: oral review. Second: individual written feedback. Ex-parte affidavits raise full-and-frank-disclosure duties.'],
                    ['SG', 'Draft summonses / orders', 'Taught alongside affidavits, once affidavit skills are covered'],
                  ],
                },
              },
            ],
          },
          {
            number: '4',
            heading: 'Assessment & Professional Conduct',
            notes: [
              {
                heading: 'Professionalism & written assessments',
                bulletGroups: [
                  {
                    heading: 'Conduct expected of you',
                    items: [
                      'Be punctual, treat others with courtesy, prepare thoroughly.',
                      'Notify your tutor in advance of any inability to attend an SG or submit on time.',
                    ],
                  },
                ],
                table: {
                  headers: ['Component', 'Weight', 'Covers'],
                  rows: [
                    ['Knowledge paper', '47.5%', 'Problem questions on procedure & case analysis'],
                    ['Drafting paper', '47.5%', 'Drafting / planning questions'],
                    ['Interviewing exercise', 'up to 5%', 'Standardised Client Interview — happens once, see SG2'],
                  ],
                },
                warnings: [
                  'Pass mark: at least 50% in aggregate across both papers plus the interviewing exercise — not necessarily 50% on each paper individually.',
                  'Re-examination (if allowed) only requires re-sitting a paper scored below 50%; the other paper’s mark carries over.',
                ],
              },
              {
                heading: 'Civil Advocacy split, materials & submission requirements',
                bullets: [
                  'PCLL8010 = 70% Civil Litigation + 30% Civil Advocacy.',
                  'Course materials (Case Files, LG outlines, SG activity plans) are on Moodle and set out what to prepare before each class.',
                  'Submissions: soft copy via Moodle, with name and group number in the top-left corner.',
                ],
                warnings: ['A completed pro forma declaration must be the front page of the same document — assignments without it are not marked.'],
              },
            ],
          },
          {
            number: '5',
            heading: 'Legal Problem Solving (PG-FLAP)',
            notes: [
              {
                heading: 'Part 1B — PG-FLAP explained in depth',
                bullets: [
                  'Problem solving is central to legal competence: solving problems satisfactorily, lawfully, ethically — drawing on knowledge, skills and professional attitude.',
                  'To solve legal problems you draw on Knowledge (legal and non-legal; substantive, transactional, procedural), Skills (core and specialised), and Attitudes (professionalism, dedication, self-motivation).',
                  'Two basic types of legal problem: Blocking Conflict (foreseeing and avoiding conflict — non-contentious) vs Playing Out Conflict (conflict already exists, contentious, litigation anticipated).',
                ],
                diagram: {
                  title: 'PG-FLAP — the 5-stage process model',
                  steps: [
                    { label: 'Problem / goal identification', detail: "What does the client want or need? What's the obstacle? The problem itself can change as you learn more." },
                    { label: 'Fact investigation', detail: 'Via interviews, correspondence, document analysis — iterating as new legal issues surface, and considering what further information or searches are needed.' },
                    { label: 'Legal issue identification & assessment', detail: 'Research the issues, then assess the merits.' },
                    { label: 'Advice & decision-making', detail: 'Develop and evaluate options (sue, settle, mediate, negotiate, admit fault, withdraw, or continue/renegotiate); weigh non-legal factors too (peace of mind, cost in time and money); choose client-centred (client decides) or lawyer-centred (you recommend).' },
                    { label: 'Planning & implementation', detail: 'A concrete action plan: who does what, when, how.' },
                  ],
                },
              },
            ],
          },
          {
            number: '6',
            heading: 'Letters Before Action',
            notes: [
              {
                heading: 'Letter Before Action — Q&A',
                bullets: [
                  'The Court\'s discretion as to costs takes into account the conduct of all the parties, both before and during the proceedings (O.62 r.5(1)(e) and r.5(2)(d), Rules of the High Court (Cap. 4A)) — this is why unreasonably skipping an LBA can be penalised in costs even though sending one is not itself mandatory.',
                ],
                qa: [
                  { q: 'Is an LBA legally required before starting proceedings?', a: 'No general rule requires it — the exception is personal injury claims (PD18.1). But the court’s costs discretion (above) can penalise unreasonable pre-action conduct, so send one unless there’s a risk the defendant will dissipate assets.' },
                  { q: 'Who can send one, and is there a required form?', a: 'Anyone can send an LBA — there is no standard form or specific content requirement (see the Skills Guide).' },
                  { q: 'Is there a fixed response time, or a consequence for silence?', a: 'No fixed response time, though 14–28 days is reasonable; there is no formal consequence for the recipient staying silent.' },
                  { q: 'What is it actually for?', a: 'To save costs if liability isn’t disputed or settlement is possible, iron out issues, and test the waters.' },
                ],
              },
            ],
          },
        ],
        flashcards: [
          { front: 'What are the 5 levels of the case analysis model?', back: '1. Area of law. 2. Cause of action/remedy. 3. Legal ingredients. 4. Material facts. 5. Evidence (and method of proof).' },
          { front: 'What does the acronym PG-FLAP stand for?', back: 'Problem/goal identification, Fact investigation, Legal issue identification and assessment, Advice and decision-making, Planning and implementation.' },
          { front: "What's the difference between Blocking Conflict and Playing Out Conflict?", back: 'Blocking Conflict: non-contentious, foreseeing and avoiding conflict. Playing Out Conflict: contentious, conflict already exists, litigation anticipated.' },
          { front: 'Is a Letter Before Action legally required before starting proceedings?', back: 'No general rule requires it, except personal injury claims (PD18.1) — but the court\'s costs discretion can penalise unreasonable pre-action conduct (O.62 r.5(1)(e)/(2)(d)).' },
          { front: 'What ethical duty applies specifically to ex-parte applications?', back: 'A duty of full and frank disclosure to the court.' },
          { front: 'What four things should you prepare for every case, whether or not an exercise asks for them?', back: 'A Dramatis Personae, a Chronology of Events, a succinct case summary, and a Skeletal Plan for any drafting.' },
        ],
        cloze: [
          { text: 'The 5-stage process for legal problem solving is known by the acronym {{PG-FLAP}}: Problem/goal identification, Fact investigation, Legal issue identification and assessment, Advice and decision-making, Planning and implementation.' },
          { text: 'The two basic types of legal problem are {{Blocking Conflict}} (non-contentious — foreseeing and avoiding conflict) and {{Playing Out Conflict}} (contentious — conflict already exists).' },
          { text: 'In the 5-level case analysis model, Level {{4}} is the material facts for each legal ingredient (drives pleadings), and Level {{5}} is the evidence for each material fact (drives affidavits).' },
          { text: 'An LBA is not generally required before starting proceedings, except for {{personal injury}} claims under {{PD18.1}}.' },
          { text: 'A party who unreasonably skips an LBA risks an adverse costs order under {{O.62 rr.5(1)(e)/5(2)(d)}}.' },
          { text: "Build the habit of preparing, for every case, a {{Dramatis Personae}}, a {{Chronology of Events}}, a succinct case summary, and a {{Skeletal Plan}} for any drafting." },
          { text: 'An ex-parte application (e.g. an ex-parte affidavit) carries a duty of {{full and frank disclosure}} to the court.' },
          { text: 'There is no standard form or specific content requirement for an LBA — but a reasonable window to allow for a response is {{14–28 days}}.' },
        ],
        referenceIds: ['proFormaDeclaration', 'skillsGuideLBA'],
      },

      SG1: {
        kind: 'SG',
        date: '2026-09-09/10',
        time: '12:45-14:45 (Gp1-13) / 15:00-17:00 (Gp14-26)',
        skills: 'Problem Solving & Drafting Letter Before Action',
        objectives: [
          "Enhance understanding of concepts such as jurisdiction, pleadings, standing and evidence",
          'Work effectively with others to analyse legal problems and apply relevant procedural rules',
          'Draft a letter before action (LBA) for the client',
        ],
        prepChecklist: [
          { id: 'attend-lg1', label: 'Attend Civil Litigation LG1' },
          { id: 'read-case-file', label: 'Read the Negligence Case File — Greenhouse Effective Petroleum Co Ltd v Inn Convenient Co Ltd & anor, Batch A pp 1-62' },
          { id: 'read-appendix-a', label: 'Read and review Appendix A — Lifecycle of a civil claim' },
          { id: 'ex1-commencement', label: 'Prepare Exercise 1: Commencement of proceedings and jurisdiction (4 questions)' },
          { id: 'ex1-pleadings', label: 'Prepare Exercise 1: Documents and pleadings (2 questions)' },
          { id: 'ex1-standing', label: 'Prepare Exercise 1: Standing and Evidence (2 questions)' },
          { id: 'ex1-strategic', label: 'Prepare Exercise 1: Strategic and Practical Considerations (3 questions)' },
          { id: 'read-appendix-bc', label: 'Read Appendices B & C (LBA student guide + skills guide) before Exercise 2' },
        ],
        exercises: [
          {
            id: 'ex1',
            title: 'Exercise 1 — Civil Procedure Application (prep questions)',
            questionGroups: [
              {
                heading: 'Commencement of proceedings and jurisdiction',
                questions: [
                  'In which court should Greenhouse commence proceedings if the claimed loss is HK$571,300? Provide your reasons.',
                  'What originating process should be used to commence the claim, and why?',
                  'Who would be the appropriate plaintiff: Greenhouse Effective Petroleum Company Limited or its sister company?',
                  'Can the defendants be sued jointly? Explain the basis of any potential joint liability.',
                ],
              },
              {
                heading: 'Documents and pleadings',
                questions: [
                  'When a Writ is issued, what must it be indorsed with?',
                  "What court documents should be filed to preserve Greenhouse's position if the limitation period is close to expiry but investigations are ongoing?",
                ],
              },
              {
                heading: 'Standing and Evidence',
                questions: [
                  "What evidence would be required to support Greenhouse's standing to sue for the repair invoice issued by its sister company?",
                  'What is the function of the written board resolution included in the case file?',
                ],
              },
              {
                heading: 'Strategic and Practical Considerations',
                questions: [
                  'If Inn Convenient is insured, what are the implications for the conduct of proceedings?',
                  "Why did the solicitors consider whether Inn Convenient and Michael Shu were 'worth suing' before advising their client to proceed?",
                  'Why was it important to explain the risks of cost recovery even if Greenhouse succeeded in court? What practice direction/procedural rule justifies this?',
                ],
              },
            ],
          },
        ],
        activities: [
          { title: 'Exercise 1 — Civil Procedure Application: sub-groups of 2-3 discuss selected questions; tutor role-plays the supervising partner/client and directs discussion to jurisdiction, standing, limitation, pleadings, service, evidence and strategy.' },
          { title: 'Exercise 2 — Drafting a Letter Before Action: two drafting sub-groups, one addressed to Inn Convenient Company Limited (vehicle owner), the other to Michael Shu (driver). One representative per sub-group submits the final draft with a completed declaration via Moodle.', deadlineId: 'PCLL8010-hw-sg1' },
          { title: 'Exercise 3 — Complete and hand in the Undertaking Form for the Interviewing Exercise (Appendix D).', deadlineId: 'PCLL8010-undertaking' },
        ],
        flashcards: [
          { front: 'Name the four ways to commence civil proceedings.', back: 'Writ of summons, originating summons, originating motion, or petition.' },
          { front: "What happens if a plaintiff doesn't reply to a defence within 28 days?", back: 'The plaintiff is deemed to have denied the allegations in the defence.' },
          { front: 'Can a party be forced to mediate?', back: 'No — mediation is voluntary. But an unreasonable refusal to mediate can lead to adverse costs consequences, even for the party who wins at trial.' },
          { front: "What's the difference between discovery and exchange of witness statements?", back: 'Discovery discloses documentary evidence; exchange of witness statements discloses oral evidence.' },
          { front: 'When can multiple defendants be sued jointly?', back: 'Where they are jointly and severally liable for the same loss or damage.' },
          { front: "What can a company's board resolution evidence in litigation?", back: "The company's decision to authorise legal action — supporting its standing to sue." },
        ],
        cloze: [
          { text: 'A civil claim can be commenced by one of four originating processes: writ of summons, originating summons, originating {{motion}}, or {{petition}}.' },
          { text: 'After being served with a defence, the plaintiff may reply within {{28 days}} — if no reply is filed, the plaintiff is deemed to have {{denied}} the allegations in the defence.' },
          { text: 'Mediation at the case-management stage is {{voluntary}} — the court cannot compel it, but an unreasonable refusal can still lead to adverse {{costs}} consequences, even for the winning party.' },
          { text: 'Disclosing documentary evidence before trial is called {{discovery}}; disclosing oral evidence is called {{exchange of witness statements}}.' },
          { text: 'Multiple defendants can be sued jointly where they are jointly and severally liable for the same {{loss}} or damage.' },
          { text: "A company's written {{board resolution}} can evidence its decision to authorise legal action, supporting the company's standing to sue." },
          { text: 'Before drafting an LBA, identify its primary purpose (e.g. demand payment) and any {{secondary purpose}}s (e.g. preserving the relationship, clarifying facts).' },
          { text: 'Before commencing proceedings, consider the {{limitation period}}, the proper court and parties, and any applicable pre-action {{protocol}} (e.g. PD18.1).' },
        ],
        referenceIds: ['lifecycleReference', 'lbaStudentGuide', 'skillsGuideLBA', 'undertakingForm'],
      },

      SG2: {
        kind: 'SG',
        date: '2026-09-17/18',
        time: 'Allocated slot, 09:30-18:00 (20 min each) — exact time/venue posted to Moodle by 11 Sept',
        skills: 'Client Interviewing',
        objectives: [
          'Prepare and plan effectively to interview a client and obtain instructions on a new case',
          'Understand and develop basic interviewing skills for obtaining further instructions on a new matter',
        ],
        compulsory: true,
        weight: 'Up to 5% of the Civil Litigation aggregate — happens once; marks carry to any supplementary exam',
        swapProcedure: "If unable to attend your allocated slot: arrange a swap with another student, then email all 3 Course Co-ordinators AND Mr Frederick Lo (ctflo99@hku.hk), copying the other student, by 5:00pm Tuesday 15 September 2026 with details and reasons.",
        prepChecklist: [
          { id: 'undertaking-form', label: 'Complete the Undertaking Form (Appendix D of the SG1 Activity Plan)' },
          { id: 'review-lg2', label: "Review Civil Litigation LG2's outline/notes on interviewing and the Standardised Client Interviewing Criteria" },
          { id: 'review-fact-pattern', label: 'Prepare for the interview with the client documents (demand letter & loan agreement) — bring sufficient copies' },
        ],
        factPattern: {
          client: 'Kenny Man',
          role: 'Trainee solicitor at Messrs. Pang, Chan, Law and Lo',
          instructingPartner: 'Jennifer Jong',
          documents: ['Demand letter', 'Loan agreement'],
          note: "A Standardised Client will act as Kenny Man for the exercise; assume your firm has already carried out all checks and due diligence — including a conflict check — in compliance with the Law Society's Practice Direction P.",
        },
        duringAfter: [
          'During: ask the questions needed to represent Kenny Man in this new matter; the standardised client completes a feedback form based on the Standardised Client Interviewing Criteria.',
          'After: honour the signed Undertaking — do not discuss or share the session (or your notes) with anyone until after 10:00pm on 18 September 2026. Written feedback follows in late November/early December.',
          'Conduct: treat the exercise seriously and professionally — misbehaviour, breaching the signed Undertaking, or not showing up without a valid reason can lead to disciplinary action.',
        ],
        flashcards: [
          { front: 'What must a firm do before acting for a new client?', back: 'Carry out conflict checks and due diligence — for interviewing exercises like this one, under the Law Society\'s Practice Direction P.' },
          { front: "When does a solicitor's duty of confidentiality to a client begin?", back: 'From the initial interview — even before a formal retainer is signed.' },
          { front: 'What is the purpose of an initial client interview?', back: 'To obtain sufficient instructions to advise and act on the new matter — not simply to transcribe the client\'s story.' },
          { front: "What questioning technique lets a client's account emerge in their own words?", back: 'Open questions early, narrowing to closed questions later to pin down specific facts.' },
          { front: "Why keep a client's account separate from your own legal analysis of it?", back: 'Conflating the two risks misrepresenting what the client actually said.' },
        ],
        cloze: [
          { text: "Before acting for a new client, a firm must carry out {{conflict}} checks and due diligence — for a new instruction like Kenny Man's, this is done under the Law Society's {{Practice Direction P}}." },
          { text: "A solicitor's duty of {{confidentiality}} to a client attaches from the {{initial interview}} — even before a formal retainer is signed." },
          { text: 'The purpose of an initial client interview is to obtain sufficient {{instructions}} to advise and act on the new matter — not simply to transcribe the client\'s story.' },
          { text: 'Good interviewing technique favours {{open}} questions early, to let the client\'s account emerge in their own words, before narrowing to {{closed}} questions to pin down specific facts.' },
          { text: "A skilled interviewer identifies the client's underlying {{objectives}}, not just the specific outcome they first ask for — the two can differ." },
          { text: "When taking instructions, keep the client's own account separate from your {{legal analysis}} of it — conflating the two risks misrepresenting what the client actually said." },
        ],
        referenceIds: ['undertakingForm'],
        assessmentRef: 'assessment-interview',
      },
    },
  },

  PCLL8020: {
    name: 'Corporate and Commercial Transactions',

    materials: [
      '"Acquisition of Shares and Businesses in Hong Kong" (2nd Edition) by Jessica Y K Young — Chapters 1, 8-11',
      '"Law of Companies in Hong Kong" (4th Edition) by Stefan H C Lo and Charles Z Qu',
      'Companies Ordinance (Cap. 622 of the laws of Hong Kong)',
    ],

    references: {
      documentAnalysis: {
        title: 'Reading Material — Document Analysis: An Introduction',
        body: 'A 5-step method for working out what a document — a statute, a judgment, or a contract — actually means and requires. Document analysis is essential to both Corporate Practice (applying the Companies Ordinance and companies\' articles) and Drafting Commercial Agreements (using precedents critically instead of copying them blind).',
        diagrams: [
          {
            title: 'The 5 steps of document analysis',
            steps: [
              { label: 'Identify the document / provision', detail: 'What type of document is it? Different rules apply to different types — e.g. guarantees and exclusion clauses are construed strictly against whoever seeks to rely on them (contra proferentem).' },
              { label: 'Read carefully & analyse', detail: 'Read the FULL provision to its full stop — don\'t skip provisos, exceptions or qualifications. Note whether the words are permissive or mandatory, and whether a list is exhaustive.' },
              { label: 'Identify the interpretation rules', detail: 'As expressly provided in the document itself, and as provided by law.' },
              { label: 'Apply those rules', detail: 'Apply the relevant rules of interpretation to the provision, bearing in mind the "business commonsense" approach.' },
              { label: 'Check context & consistency', detail: 'Check the meaning you\'ve reached against the context of the whole document and its other provisions.' },
            ],
          },
        ],
        legalIssues: [
          {
            number: '1',
            heading: 'Identifying the Document',
            notes: [
              {
                heading: 'What are you looking at?',
                bullets: [
                  'Identify the type of document/provision — different rules of interpretation can apply depending on the type (e.g. guarantees and exclusion clauses are construed strictly against the party relying on them).',
                  'Identify what the document comprises: is another document incorporated by reference (e.g. a sales order incorporating the seller\'s standard terms)? Has the document been amended or supplemented since execution — if so, that amending document must be reviewed too.',
                ],
              },
              {
                heading: 'Basic structure of a typical commercial agreement',
                table: {
                  headers: ['Part', 'Content'],
                  rows: [
                    ['Introduction', '"THIS AGREEMENT … 20XX:"'],
                    ['Parties clause', 'Sets out the parties to the agreement'],
                    ['Recitals ("WHEREAS…")', 'Background to the agreement — not necessarily binding, but a useful aid to resolving ambiguity'],
                    ['Body / text', 'Definitions & Interpretation, then Core/Substantive Provisions, then Boilerplate Provisions'],
                    ['Schedules / Appendices', 'Not every agreement has them — check whether they form an integral, binding part'],
                    ['Testimonium', '"IN WITNESS OF WHICH … written above"'],
                    ['Execution / Attestation', '"SIGNED by … in the presence of …"'],
                  ],
                },
              },
            ],
          },
          {
            number: '2',
            heading: 'Reading the Provision Carefully',
            notes: [
              {
                heading: 'Words and expressions',
                bullets: [
                  'Are the words permissive ("may" / "shall be entitled to") or mandatory ("shall" / "obliged to")? Permissive words simply confer a choice; mandatory words impose an obligation — breach of which is prima facie a breach of contract.',
                  'Is a list exhaustive? If something is defined to "mean" B, C and D, the list is exhaustive; if defined to "include" p, q, r and s, it is not — other things (e.g. t) may still be included.',
                  'Has the expression already been legally defined — by the courts (e.g. "best endeavours" vs. "reasonable endeavours" have distinct judicially-settled meanings), or by statute (e.g. "deal as a consumer" under the Control of Exemption Clauses Ordinance, Cap. 71)?',
                ],
              },
              {
                heading: 'Worked example — a restrictive covenant',
                body: "An employment contract prohibits an employee, without the employer's express written consent, from acting as advocate for gain, giving legal advice to anyone but the employer, or drawing up legal documents for anyone but the employer — PROVIDED THAT this does not prohibit drafting wills for the employee's immediate family.",
                bullets: [
                  "This is a single main sentence with a general exception (the proviso). Free legal advice given to friends/relatives on a no-liability basis falls outside clause (b)'s prohibition on its own wording (\"other than\"); drafting a will for an immediate family member falls within clause (c) but is saved by the proviso.",
                  'Lesson: read to the full stop, then work out exactly which words in the sentence a given fact pattern actually engages — the same fact can be caught by one sub-clause and saved by a different one\'s proviso.',
                ],
              },
            ],
          },
          {
            number: '3',
            heading: 'Reading the Whole Document',
            notes: [
              {
                heading: 'Context beyond the single clause',
                bullets: [
                  'Check whether the agreement\'s Schedules/Appendices/Exhibits are engaged — e.g. a clause may reference services "more particularly set out in the Schedule"; missing the Schedule is a grave omission.',
                  'Watch for clauses that expressly affect one another: "subject to Clause 3" (Clause 3 prevails on inconsistency), "notwithstanding Clause 5" (the clause containing this wording prevails instead), "without prejudice to Clause 6" (neither overrides the other).',
                  'Check whether another document has been incorporated by reference — e.g. a bank fixed-deposit slip stating that its "General Terms and Conditions" apply pulls in the whole of that separate booklet, not just the slip itself.',
                ],
              },
            ],
          },
          {
            number: '4',
            heading: 'Rules of Document Interpretation',
            notes: [
              {
                heading: 'The general test',
                statutes: [
                  { text: 'Interpretation is the ascertainment of the meaning which the document would convey to a reasonable person having all the background knowledge which would reasonably have been available to the parties in the situation in which they were at the time of the contract.', cite: 'Lord Hoffmann\'s first principle, Investors Compensation Scheme Ltd v West Bromwich Building Society [1998] 1 WLR 896, 912–913' },
                ],
                bullets: [
                  'Courts try to give effect to the parties\' intention, usually taking the natural and ordinary meaning of the words — but where an expression is unclear, they look at the document as a whole and the factual matrix, objectively (not the parties\' subjective intentions or pre-contractual negotiations).',
                  'Courts favour an interpretation that makes business commonsense, and will not adopt a literal but uncommercial reading unless the words cannot reasonably bear any other meaning.',
                ],
              },
              {
                heading: 'Common drafting conventions',
                table: {
                  headers: ['Expression', 'Meaning'],
                  rows: [
                    ['"References to Clauses/Schedules"', 'Refer to clauses/schedules of this agreement, not any other document'],
                    ['"References to a statute/document"', 'Mean that statute/document as amended and supplemented from time to time, up to the date of interpretation'],
                    ['"References to a party"', 'Include that party\'s personal representatives — the agreement doesn\'t automatically end if an individual party dies'],
                    ['"Words importing a gender"', 'Include every gender — "he" can also mean "she"/"it"/"they"'],
                  ],
                },
              },
              {
                heading: 'Canons of construction',
                table: {
                  headers: ['Canon', 'Meaning'],
                  rows: [
                    ['Ejusdem generis', 'General words following two or more specific words are restricted to the same category as those specific words'],
                    ['Noscitur a sociis', 'General words are limited by reference to the subject matter/context in which they are used'],
                    ['Contra proferentem', 'Guarantees and exclusion clauses are construed narrowly — any ambiguity is resolved against the party seeking to rely on the clause'],
                  ],
                },
                bullets: [
                  'Contra proferentem illustration: a guarantee of "all bank loans which Bank may from time to time lend to D" does not cover past loans, other liabilities D owes the Bank outside a bank loan (e.g. under D\'s own guarantee for a third party\'s debts), or D\'s foreign-exchange dealings — only bank loans made after the guarantee, construed narrowly against the party relying on it.',
                ],
              },
              {
                heading: 'Express terms, special conditions, and statutory intervention',
                bullets: [
                  'Express terms normally override implied terms — but for terms implied by statute, always check whether contracting out is actually permitted.',
                  'Special/specific conditions normally override general conditions where the two are inconsistent.',
                ],
                statutes: [
                  { text: 'A person cannot by reference to any contract term or to a notice given to persons generally or to particular persons exclude or restrict his liability for death or personal injury resulting from negligence.', cite: 's7(1), Control of Exemption Clauses Ordinance (Cap. 71)' },
                ],
                warnings: [
                  'Other statutes commonly imply terms into contracts that a clause may not always be free to exclude — check the Sale of Goods Ordinance (Cap. 26) and the Supply of Services (Implied Terms) Ordinance (Cap. 457) before assuming an exclusion clause is effective.',
                ],
              },
            ],
          },
          {
            number: '5',
            heading: 'Computation of Time',
            notes: [
              {
                heading: 'Common time expressions',
                table: {
                  headers: ['Expression', 'Meaning'],
                  rows: [
                    ['"day"', 'A 24-hour period, midnight to midnight'],
                    ['"business day"', 'No universally accepted meaning — check for an applicable custom or usage'],
                    ['"month"', 'Lunar or calendar? In commercial contexts, usually calendar'],
                    ['"lunar month"', 'A 28-day period'],
                    ['"calendar month"', '30 or 31 days depending on the starting month (28, or 29 in a leap year, if it starts in February)'],
                    ['"year"', '12 consecutive calendar months'],
                  ],
                },
              },
              {
                heading: '"Within X days" — included or excluded?',
                bullets: [
                  '"Within X days [after/of] a specified event": the specified day is usually EXCLUDED — the period starts the day after.',
                  '"Within X days commencing on the happening of a specified event": the specified day is usually INCLUDED — the period starts that same day.',
                  'There is no absolute rule for a stated date range (e.g. "from 13 January to 20 January") — always specify expressly whether both dates are included or excluded when drafting, and check the agreement\'s own Interpretation clause first if you\'re construing someone else\'s.',
                  'Absent an express term, an established custom or usage can settle the question — e.g. banking custom charges loan interest from (and including) the advance date to (but excluding) the repayment date.',
                  'For time-related provisions in an ordinance (rather than a contract), the general computation rule is set out in s71 of the Interpretation and General Clauses Ordinance (Cap. 1).',
                ],
              },
            ],
          },
          {
            number: '6',
            heading: 'Boilerplate Provisions',
            notes: [
              {
                heading: 'What boilerplate does',
                bullets: [
                  'Boilerplate clauses deal with how the contract operates, as opposed to substantive clauses, which deal with the parties\' rights and obligations in the transaction itself — but boilerplate can still modify the substantive clauses\' effect, operation and enforcement.',
                ],
                table: {
                  headers: ['Clause', 'What it does'],
                  rows: [
                    ['Notices', 'Specifies how/where notices must be given — a notice is only valid if given to the correct party, at the correct address, in the correct manner; may also deem receipt after a set period'],
                    ['Entire agreement', 'Confines the contract to what\'s written, excluding pre-contractual statements and preventing an oral collateral contract from arising'],
                    ['Counterparts', 'Lets the parties sign separate copies (not the same document), each an original, which together constitute one agreement'],
                    ['Waiver', 'A party\'s failure or delay to exercise a right doesn\'t itself waive that right or any other'],
                    ['Further assurance', 'Requires the parties to do whatever else is needed to give effect to the agreement — may be paired with a power of attorney, which then requires the agreement to be executed as a deed'],
                    ['Costs and expenses', 'Allocates who bears the costs of negotiating/preparing/executing the agreement — always check what needs to be covered (e.g. lenders often also want administration/enforcement costs included)'],
                    ['Governing law & jurisdiction', 'States which law governs the agreement and which courts have jurisdiction'],
                    ['Severability', 'If a clause is unlawful/unenforceable, it is cut out and disregarded, leaving the rest of the agreement to operate on its own — courts will not re-draft the agreement to make it work'],
                  ],
                },
              },
              {
                heading: 'Entire agreement clauses and misrepresentation',
                warnings: [
                  'An "entire agreement" clause that restricts a party\'s rights or remedies can itself amount to an exclusion clause under the Control of Exemption Clauses Ordinance (Cap. 71).',
                  'A "non-reliance" clause (acknowledging no pre-contractual representations were made or relied on) does not automatically exclude liability for fraudulent misrepresentation — see Thomas Witter Ltd v TBP Industries Ltd [1996] 2 All ER 573.',
                ],
              },
            ],
          },
        ],
      },
    },

    sessions: {
      LG1: {
        kind: 'LG',
        date: '2026-09-01',
        time: '09:00-11:00',
        mode: 'Face-to-face',
        authors: ['Stephane Hui Bon Hoa', 'Charmaine Yip'],
        objectives: [
          'Introduce the Corporate and Commercial Transactions course.',
          'Discuss the main types of business vehicles used in Hong Kong.',
          'Provide a brief overview of Hong Kong companies.',
          'Introduce the mechanics and related legislative provisions governing transfers of businesses in Hong Kong.',
        ],
        topicsCovered: [
          'Main types of business vehicles: sole proprietorships, partnerships, companies',
          'Considerations as to which business vehicle to choose/use',
          'The Hong Kong regime on registration of businesses',
          'Transfers of businesses',
        ],
        prep: {
          readings: ['"Acquisition of Shares and Businesses in Hong Kong" (2nd ed.), Chapters 1, 8-11', '"Law of Companies in Hong Kong" (4th ed.)'],
        },
        keyTakeaways: [
          'Sole proprietorships and general partnerships have no separate legal personality from their owners; companies do.',
          'Every Hong Kong business, of any form, must register with the Business Registration Office within 1 month of commencing business.',
          'Transferring a business is not the same transaction as transferring the shares in the company that owns it — the two engage completely different rules.',
        ],
        legalIssues: [
          {
            number: '1',
            heading: 'Sole Proprietorships & Partnerships',
            notes: [
              {
                heading: 'Sole proprietorships',
                bullets: [
                  'A sole proprietorship is a business entity, not a legal entity with its own distinct legal personality.',
                  'The sole proprietor (owner) is a natural person.',
                  'There is no distinction between the sole proprietor and the business: the proprietor is entitled to all of the business\'s profits, and is personally liable for all of its debts.',
                ],
              },
              {
                heading: 'Partnerships — nature and types',
                statutes: [
                  { text: 'Partnership is the relation which subsists between persons carrying on a business in common with a view of profit.', cite: 's3, Partnership Ordinance (Cap. 38)' },
                ],
                bullets: [
                  'Also a business entity, not a separate legal person.',
                  'Three main types in Hong Kong: general partnerships, limited partnerships, and limited liability partnerships.',
                  'Relevant legislation: the Partnership Ordinance (Cap. 38), the Limited Partnership Ordinance (Cap. 37), and the Legal Practitioners Ordinance (Cap. 159, for law firms specifically).',
                ],
                table: {
                  headers: ['Topic', 'Partnership Ordinance provision'],
                  rows: [
                    ['Creation of a partnership', 's4'],
                    ['Partnership agreements', 'ss21 and 26'],
                    ['Partnership property', 'ss22 and 23'],
                    ['Partners\' liability to third parties', 'ss7, 11, 12 and 19'],
                    ['Partners\' duties (fiduciary good faith, honesty, loyalty)', 's31'],
                    ['Duty not to compete with the firm', 's32'],
                    ['Dissolution / end of partnership', 'ss34-37'],
                  ],
                },
                warnings: [
                  'In a general partnership, each partner is personally liable, without limit, for the firm\'s debts — this exposure is one of the main reasons clients choose to incorporate instead.',
                ],
              },
              {
                heading: 'Limited partnerships',
                bullets: [
                  'A separate regime from general partnerships, under the Limited Partnership Ordinance (Cap. 37) — allowing at least one partner to enjoy limited liability, provided they don\'t take part in managing the business.',
                ],
              },
            ],
          },
          {
            number: '2',
            heading: 'Companies',
            notes: [
              {
                heading: 'Separate legal personality',
                statutes: [
                  { text: 'The company is at law a different person altogether from the subscribers to the memorandum; and, though it may be that after incorporation the business is precisely the same as it was before, and the same persons are managers, and the same hands receive the profits, the company is not in law the agent of the subscribers or trustee for them.', cite: 'Lord Macnaghten, Salomon v A Salomon & Co Ltd [1897] AC 22' },
                ],
                bullets: [
                  'Companies are legal entities existing and operating in their own right, separate from their owners (members).',
                  'Members enjoy limited liability.',
                  'Various types exist: private and public companies, companies limited by shares, and companies limited by guarantee.',
                  'Hong Kong company law was substantially rewritten in the early 2010s, producing the current Companies Ordinance.',
                ],
              },
              {
                heading: 'Private companies limited by shares',
                bullets: [
                  'The most common vehicle for Hong Kong private businesses.',
                  'Primarily governed by the Companies Ordinance (Cap. 622), with winding up and related matters governed by the Companies (Winding Up and Miscellaneous Provisions) Ordinance (Cap. 32).',
                ],
              },
            ],
          },
          {
            number: '3',
            heading: 'Choosing & Registering a Business Vehicle',
            notes: [
              {
                heading: 'Considerations in choosing a vehicle',
                bullets: [
                  'The nature and size of the business to be established.',
                  'Who will participate, and how.',
                  'Reporting requirements attached to the vehicle.',
                  'The applicable Hong Kong profits tax rates.',
                ],
              },
              {
                heading: 'Business registration',
                bullets: [
                  'Applies to all Hong Kong businesses, regardless of form.',
                  'A "one-stop registration" process is available for newly incorporated companies.',
                  'Fees/levies are payable for business registration and branch registration certificates.',
                ],
                warnings: [
                  'Register with the Business Registration Office within 1 month of commencing business (Business Registration Ordinance, Cap. 310) — this applies regardless of the vehicle\'s form. Failure to register is an offence, punishable by a fine and up to 1 year\'s imprisonment.',
                ],
              },
            ],
          },
          {
            number: '4',
            heading: 'Transfers of Businesses',
            notes: [
              {
                heading: 'Asset transfer vs. share transfer',
                bullets: [
                  'A transfer of the assets constituting a business is a different transaction from a transfer of shares in the company that owns the business — they engage different rules and different protections.',
                ],
              },
              {
                heading: 'Protection of creditors on a business transfer',
                bullets: [
                  'The Transfer of Businesses (Protection of Creditors) Ordinance (Cap. 49) governs a transferee\'s exposure to a transferred business\'s existing debts and obligations, protecting the creditors to whom that business owes money.',
                  'Operates through a "notice" regime.',
                ],
                table: {
                  headers: ['Topic', 'TBO provision'],
                  rows: [
                    ['Exceptions to the regime', 's3'],
                    ['Prescribed notice contents & publication', 's5'],
                    ['Timing of notice, and when it becomes "complete"', 's4'],
                    ['Indemnity', 's6'],
                    ['Limitation of transferee liability', 's8'],
                    ['Time limit to institute proceedings', 's9'],
                  ],
                },
                warnings: [
                  'Missing the TBO notice regime can expose a transferee to the transferred business\'s existing debts and obligations — always check s3 for exceptions before assuming the regime applies.',
                  'Proceedings under the TBO are themselves subject to their own statutory time limit (s9) — this is separate from the limitation period for the underlying debt.',
                ],
              },
            ],
          },
        ],
        flashcards: [
          { front: 'Does a sole proprietorship have separate legal personality from its owner?', back: 'No — there\'s no distinction between the sole proprietor and the business; the proprietor gets all the profits and is liable for all the debts.' },
          { front: 'What are the three types of partnership recognised in Hong Kong?', back: 'General partnerships, limited partnerships, and limited liability partnerships.' },
          { front: 'What duty do partners owe each other under s31 of the Partnership Ordinance?', back: 'Fiduciary duties of good faith, honesty and loyalty.' },
          { front: 'What did Salomon v Salomon establish?', back: 'A validly incorporated company is a separate legal person from its members, distinct from the individuals who subscribed to its memorandum, even where one person controls the whole enterprise.' },
          { front: "What's the difference between transferring a business's assets and transferring its shares?", back: 'They are different transactions engaging entirely different rules — one transfers what the company owns, the other transfers ownership of the company itself.' },
          { front: 'What does the Transfer of Businesses (Protection of Creditors) Ordinance protect?', back: "The creditors of a business being transferred, by regulating the transferee's exposure to the business's existing debts and obligations." },
        ],
        cloze: [
          { text: 'A sole proprietorship has {{no}} separate legal personality from its owner — the proprietor is personally entitled to all profits and liable for all debts.' },
          { text: 'Hong Kong recognises three types of partnership: general partnerships, {{limited partnerships}}, and {{limited liability partnerships}}.' },
          { text: 'Under the Partnership Ordinance, partners owe each other fiduciary duties of {{good faith}}, honesty and loyalty, and must not {{compete}} with the firm.' },
          { text: 'In {{Salomon v Salomon}}, the House of Lords held that a validly incorporated company is a {{separate legal person}} from its members, even where one person controls the whole enterprise.' },
          { text: 'A Hong Kong private company limited by shares is primarily governed by the {{Companies Ordinance}} (Cap. 622).' },
          { text: 'Every Hong Kong business, regardless of form, must register with the Business Registration Office within {{1 month}} of commencing business.' },
          { text: 'The Transfer of Businesses (Protection of Creditors) Ordinance protects a transferred business\'s {{creditors}} by regulating the transferee\'s exposure to its debts.' },
          { text: 'Transferring a company\'s shares and transferring the business\'s underlying {{assets}} are different transactions, engaging different rules.' },
        ],
        referenceIds: [],
      },

      SG1: {
        kind: 'SG',
        date: '2026-09-07/08',
        time: 'Refer to timetable',
        skills: 'Company Law & Corporate Practice',
        objectives: [
          'Introduce basic company law concepts and corporate transactions involving Hong Kong private companies limited by shares.',
          'Understand and explore the procedural steps and documentary requirements for establishing a company.',
        ],
        prepChecklist: [
          { id: 'read-doc-analysis', label: 'Read the "Document Analysis" reading material' },
          { id: 'review-lg2-5b', label: 'Review the LG2-4, 5A and 5B materials' },
          { id: 'prepare-ex1', label: 'Prepare Exercise 1: foundational corporate practice questions' },
          { id: 'prepare-ex2', label: 'Prepare Exercise 2: the company establishment scenario' },
          { id: 'bring-co', label: 'Bring easy access to the Companies Ordinance (Cap. 622) to class' },
        ],
        exercises: [
          {
            id: 'ex1',
            title: 'Exercise 1 — Foundational Corporate Practice Concepts',
            questionGroups: [
              {
                heading: 'Constitution',
                questions: [
                  'Briefly explain what the constitution of a Hong Kong private company limited by shares is under the Companies Ordinance, and describe what purpose it serves.',
                  'Is a company free to choose its own constitution?',
                ],
              },
              {
                heading: 'Directors',
                questions: [
                  'Describe the roles and powers of a company\'s directors.',
                  'What are relevant considerations to take into account when deciding who can serve as a director of a Hong Kong private company?',
                ],
              },
              {
                heading: 'Shareholders',
                questions: [
                  'Describe the roles, rights and powers of a company\'s shareholders.',
                  'How does one determine who is the registered owner of shares?',
                ],
              },
              {
                heading: 'Transfers & Allotments of Shares',
                questions: [
                  'Highlight the differences between a transfer and an allotment of shares.',
                  'Briefly describe the sequence of steps in effecting a transaction involving a transfer of shares.',
                ],
              },
            ],
          },
          {
            id: 'ex2',
            title: 'Exercise 2 — Company Establishment Exercise',
            factPattern: 'Stephanie and her sister Jessie set up PCLL Investments Limited, a Hong Kong private company limited by shares, a few years ago — originally to invest in property, though it ended up holding a modest securities portfolio instead. Jessie is now relocating to Europe and wants to unwind her involvement by the end of the month, offering Stephanie the Company as a gift. Stephanie wants: (1) the Company held in her name only, and (2) to become its sole director, replacing the company secretary with a new third-party provider, Mitch Secretaries Limited. Stephanie provides you with the Company\'s Annual Return (NAR1) and Articles of Association.',
            questions: [
              'Identify the parties who must perform each step.',
              'Place the steps in the correct sequence.',
              'For each step, address any stamp duty implications and/or corporate reporting requirements.',
              'List and explain any follow-up questions or additional documents you would need to request from Stephanie, Jessie, or the Company.',
            ],
          },
        ],
        flashcards: [
          { front: "What's the difference between a transfer and an allotment of shares?", back: 'A transfer moves existing shares between holders; an allotment creates and issues new shares.' },
          { front: 'Who is treated as the registered owner of shares?', back: "Whoever is entered in the company's register of members — not necessarily whoever holds the share certificate." },
          { front: "State Lord Hoffmann's general test for contractual interpretation.", back: 'The meaning the document would convey to a reasonable person with all the background knowledge reasonably available to the parties at the time of the contract.' },
          { front: 'What does the contra proferentem rule do?', back: "Construes guarantees and exclusion clauses narrowly — any ambiguity is resolved against the party seeking to rely on the clause." },
          { front: 'Under s7(1) of the Control of Exemption Clauses Ordinance, what can never be excluded?', back: 'Liability for death or personal injury resulting from negligence.' },
          { front: '"Within 7 days after delivery" vs "within 7 days commencing on delivery" — which excludes the delivery day?', back: '"After" excludes it (the period starts the next day); "commencing on" includes it (the period starts that same day).' },
          { front: "What's the difference between ejusdem generis and noscitur a sociis?", back: 'Ejusdem generis restricts general words following specific words to the same category as those words. Noscitur a sociis limits general words by the subject matter/context they appear in.' },
        ],
        cloze: [
          { text: "A company's articles of association are part of its {{constitution}} under the Companies Ordinance." },
          { text: 'Companies may adopt the {{Model Articles}} set out in the Companies (Model Articles) Notice (Cap. 622H) as their constitution.' },
          { text: 'A {{transfer}} of shares moves existing shares between holders; an {{allotment}} creates and issues new shares.' },
          { text: 'The registered owner of shares is whoever is entered in the company\'s {{register of members}} — not necessarily whoever holds the share certificate.' },
        ],
        referenceIds: ['documentAnalysis'],
      },
    },
  },
};
