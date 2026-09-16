// Civil Litigation (PCLL8010) -- hand-transcribed course-level reference
// material (course outlines, lecture outlines, activity plans), in the
// same spirit as legalSkills.js: not fetched live, not derived from the
// timetable sheet. Session entries are keyed by "LG"/"SG" + number with NO
// trailing letter ("LG1", not "LG1A") -- course.js resolves which part
// ("A"/"B") from the live timetable event's own `no` field, not from here.
// See CLAUDE.md for the full authoring conventions this file follows.
window.COURSE_DETAILS = window.COURSE_DETAILS || {};
window.COURSE_DETAILS.PCLL8010 = {
  name: 'Civil Litigation',
  // Short tag for the derived issue codes (e.g. CIV-LG4.11) — see issueCode
  // in common-core.js. Must be unique across courses.
  codePrefix: 'CIV',

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
      dateLabel: '18 September 2026, 10:00–10:30am',
      note: 'Venue: CCT310',
      deadlineIds: ['PCLL8010-interview'],
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
    { id: 'PCLL8010-interview', courseCode: 'PCLL8010', kind: 'assessment', refId: 'assessment-interview', date: '2026-09-18', time: '10:00', title: 'Standardised Client Interview Assessment — CCT310, 10:00–10:30am' },
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
        {
          topic: 'Case Analysis & Problem-Solving Method',
          items: [
            { front: 'What are the 5 levels of the case analysis model, in order?', back: '1. Area of law. 2. Cause of action/remedy. 3. Legal ingredients. 4. Material facts. 5. Evidence (and method of proof).' },
            { front: "Why does the case analysis model separate 'material facts' (Level 4) from 'evidence' (Level 5)?", back: "Material facts are what must be pleaded to support each legal ingredient; evidence is what proves each material fact. They feed different documents (pleadings vs affidavits) and shouldn't be conflated." },
            { front: 'What does the acronym PG-FLAP stand for?', back: 'Problem/goal identification, Fact investigation, Legal issue identification and assessment, Advice and decision-making, Planning and implementation.' },
            { front: "What's the difference between Blocking Conflict and Playing Out Conflict?", back: 'Blocking Conflict: non-contentious, foreseeing and avoiding conflict. Playing Out Conflict: contentious, conflict already exists, litigation anticipated.' },
            { front: "At the 'Advice & decision-making' stage of PG-FLAP, what should you weigh beyond the legal merits?", back: "Non-legal factors too — cost in time and money, and the client's peace of mind — and whether to take a client-centred approach (client decides) or a lawyer-centred one (you recommend)." },
            { front: 'What four things should you prepare for every case, whether or not an exercise asks for them?', back: 'A Dramatis Personae, a Chronology of Events, a succinct case summary, and a Skeletal Plan for any drafting.' },
            { front: 'What ethical duty applies specifically to ex-parte applications?', back: "A duty of full and frank disclosure to the court — since the other side isn't present to challenge the application." },
          ],
        },
        {
          topic: 'Letters Before Action & Costs',
          items: [
            { front: 'Is a Letter Before Action legally required before starting proceedings?', back: 'No general rule requires it, except personal injury claims (PD18.1) — but the court\'s costs discretion can penalise unreasonable pre-action conduct (O.62 r.5(1)(e)/(2)(d)).' },
            { front: "What's a reasonable response window to give in an LBA, even though none is fixed by rule?", back: '14–28 days is generally considered reasonable.' },
            { front: 'Name two purposes an LBA can serve beyond simply demanding payment.', back: "Saving costs where liability isn't really disputed or settlement is possible, and testing the waters / clarifying the issues before committing to litigation." },
            { front: 'When might sending an LBA actually be tactically unwise?', back: 'Where there is a real risk the defendant will use the advance warning to dissipate assets before they can be secured.' },
          ],
        },
      ],
      cloze: [
        {
          topic: 'Case Analysis & Problem-Solving Method',
          items: [
            { text: 'In the 5-level case analysis model, Level {{1}} identifies the area of law, while Level {{2}} identifies the cause of action or remedy actually available to the client.' },
            { text: 'Level 4 (material facts) of the case analysis model drives {{pleadings}}, while Level 5 (evidence) drives {{affidavits}}.' },
            { text: 'The 5-stage process for legal problem solving is known by the acronym {{PG-FLAP}}: Problem/goal identification, Fact investigation, Legal issue identification and assessment, Advice and decision-making, Planning and implementation.' },
            { text: 'The two basic types of legal problem are {{Blocking Conflict}} (non-contentious — foreseeing and avoiding conflict) and {{Playing Out Conflict}} (contentious — conflict already exists).' },
            { text: 'At the Advice & decision-making stage of PG-FLAP, options are not limited to suing — they also include {{settling}}, {{mediating}}, negotiating, admitting fault, or withdrawing.' },
            { text: "Build the habit of preparing, for every case, a {{Dramatis Personae}}, a {{Chronology of Events}}, a succinct case summary, and a {{Skeletal Plan}} for any drafting." },
            { text: 'An ex-parte application (e.g. an ex-parte affidavit) carries a duty of {{full and frank disclosure}} to the court.' },
          ],
        },
        {
          topic: 'Letters Before Action & Costs',
          items: [
            { text: 'An LBA is not generally required before starting proceedings, except for {{personal injury}} claims under {{PD18.1}}.' },
            { text: "A party who unreasonably skips an LBA risks an adverse costs order, since the court's costs discretion takes into account the conduct of the parties {{before}} and during the proceedings, under {{O.62 r.5(1)(e) and r.5(2)(d)}}, Rules of the High Court." },
            { text: 'There is no standard form or specific content requirement for an LBA — but a reasonable window to allow for a response is {{14–28 days}}.' },
            { text: "One purpose of an LBA is to save {{costs}} if liability isn't disputed or settlement is possible; another is to {{test the waters}} before committing to litigation." },
            { text: 'Anyone can send an LBA — but if there is a real risk the defendant will {{dissipate assets}}, it may be tactically wiser to seek relief without advance warning instead.' },
          ],
        },
      ],
      referenceIds: ['proFormaDeclaration', 'skillsGuideLBA'],
    },

    LG3: {
      kind: 'LG',
      date: '2026-09-07',
      time: '09:00-11:00',
      mode: 'Face-to-face',
      authors: ['Alfred Cheng', 'Vivian Chan'],
      objectives: [
        'Understand the rules and methods of serving originating processes under the Rules of the High Court.',
        'Apply time computation rules under O.3 RHC and calculate deadlines for acknowledgement of service.',
        'Analyse scenarios involving service out of jurisdiction and substituted service.',
        'Evaluate the procedural steps for contesting jurisdiction or applying for a stay of proceedings.',
      ],
      topicsCovered: [
        'Computation of time (O.3 RHC, HCO)',
        'Service of originating processes (O.10 RHC)',
        'Methods of service: personal service, service on particular parties, substituted service, ordinary and deemed service',
        'Service out of the jurisdiction (O.11 RHC); the Hague Convention; service in the Mainland',
        'Acknowledgement of service (O.12 RHC): deadlines, contesting jurisdiction, forum non conveniens',
      ],
      prep: {
        readings: [
          'This lecture outline and the LG3 Reference Materials',
          'Julienne Jen, "Hong Kong Civil Court Practice" (LexisNexis, 2025), chapters on Order 3, Orders 10-12 and Order 65',
          'RHC O.3, O.10-12 and O.65',
          'Contract Case file Bundle A and Negligence Case file Bundle A (Moodle)',
        ],
      },
      prepChecklist: [
        { id: 'read-outline', label: 'Read the LG3 lecture outline and Reference Materials' },
        { id: 'read-orders', label: 'Read RHC O.3, O.10-12 and O.65 themselves' },
        { id: 'exercise-1', label: 'Attempt Exercise 1 (the Arthur v Bill service and AS deadline problem)' },
        { id: 'exercise-2', label: 'Exercise 2: review the Writs, Acknowledgements and affirmations of service in the Contract and Negligence case files' },
      ],
      keyTakeaways: [
        'Service should be carried out in the prescribed manner under the Rules; if that is not practicable, substituted service should be considered.',
        'Service on certain times and dates attracts a different computation — the specified-day and after-4pm rules change the date the clock starts.',
        'Forum conveniens is considered for service out of the jurisdiction.',
        'Filing an acknowledgement of service is not a waiver of irregularity (O.12 r.7) — but failing to apply under O.12 r.8 within the time for a defence IS a submission to the jurisdiction (O.12 r.8(7)).',
      ],
      examNotes: {
        intro: 'Service questions are date questions with a rule attached: work out which rule governs the method, what date that method deems service to occur, and only then count the deadline under O.3. These issue types follow that order — the computation engine first, then the methods, then what the defendant does about it.',
        issueTypes: [
          {
            id: 'computing-time',
            title: 'Computing time under O.3',
            summary: 'The counting engine every other deadline in this lecture runs on — after/from, before, clear days, specified days, and the vacation.',
            triggers: {
              bullets: [
                'Any deadline at all is in play — this is the engine every other date in the lecture runs on.',
                'The rule or order says "within N days after" or "from" a specified act or event.',
                'The rule says "not less than" or "at least N days before" a date — count backwards.',
                'The words "clear days" appear.',
                'The period is 7 days or less and spans a weekend or public holiday.',
                'A deadline falls on a Sunday, a general holiday, or a day the Registry is shut.',
                'The period runs into or across the Summer Vacation.',
                'A party is out of time and wants the period extended, or wants it abridged.',
                'The facts give a date of an act but the rule keys off a different event — identify which event starts the clock before counting.',
              ],
              routes: [
                { when: 'It is the acknowledgement deadline you are counting', session: 'LG3', issue: 'acknowledgement-of-service', label: 'Acknowledgement of service — 14 days INCLUDING the day of service' },
                { when: 'You first need the date service is deemed to occur', session: 'LG3', issue: 'serving-the-writ', label: 'Serving the writ under O.10' },
                { when: 'The document is not an originating process', session: 'LG3', issue: 'ordinary-service-and-timing', label: 'Ordinary service, timing and proof' },
                { when: 'The defendant was served abroad', session: 'LG3', issue: 'service-out-of-jurisdiction', label: 'Service out of the jurisdiction — the order fixes the time, not O.12 r.5(a)' },
                { when: 'It is a defence, reply or close-of-pleadings date', session: 'LG4', issue: 'pleadings-timetable', label: 'The pleadings timetable and close of pleadings' },
                { when: 'The period you are counting is the "prescribed time" for a default judgment', session: 'LG6', issue: 'default-notice-of-intention', label: 'Default judgment for failure to give notice of intention to defend (O.13)' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Counting a period correctly',
                steps: [
                  {
                    id: 'direction',
                    label: 'First ask: is the act required to be done AFTER a date, or BEFORE one?',
                    branches: [
                      { condition: 'Within a specified period after or from a date', then: 'O.3 r.2(2) — the period begins immediately after that date, so the reference date is not day 1', goto: 'clear' },
                      { condition: 'Within, or not less than, a specified period before a date', then: 'O.3 r.2(3) — the period ends immediately before that date; count backwards, excluding the reference date', goto: 'clear' },
                    ],
                  },
                  {
                    id: 'clear',
                    label: 'Is it expressed in CLEAR days?',
                    detail: 'O.3 r.2(4) — where the act must be done a specified number of clear days before or after a date, at least that number of days must intervene between the day the act is done and that date. Both ends are excluded, so "2 clear days after 1 September" gives 2 and 3 September as the intervening days and a target of 4 September.',
                  },
                  {
                    id: 'short',
                    label: 'Is the period 7 days or less? Then strip out the specified days',
                    points: [
                      'O.3 r.2(5) — where the period in question, being a period of 7 days or less, would include a specified day, that day is excluded.',
                      'O.3 r.2(6) defines a specified day: a Saturday; a general holiday; a gale warning day (as defined by s71(2) IGCO); a black rainstorm warning day; or, if the act must be done at an office of the Court, another day on which the office is closed.',
                      'A period of 8 days or more does NOT get this treatment — every day counts.',
                      'The parallel provision for acts at a court office is s71(1A)(c) IGCO, which likewise disregards closure days for periods not exceeding 7 days.',
                    ],
                  },
                  {
                    id: 'expiry',
                    label: 'Does the deadline land on a day the Court office is closed?',
                    detail: 'O.3 r.4(1) — where time for doing any act AT AN OFFICE OF THE COURT expires on a specified day and the act cannot be done that day, the act is in time if done on the next day the office is open. The same effect follows from s71(1A)(a)-(b) IGCO.',
                  },
                  {
                    id: 'vacation',
                    label: 'Is the Summer Vacation in the window?',
                    points: [
                      'O.3 r.3 — unless the Court otherwise directs, the Summer Vacation is excluded in reckoning any period for SERVING, FILING OR AMENDING ANY PLEADING.',
                      'Summer Vacation is 1-31 August (O.64 r.1; O.1 r.4).',
                      'For non-pleadings (a notice of appeal, issuing a summons), the source is s31(1) HCO: where any law regulating civil procedure allows a period NOT EXCEEDING ONE MONTH, no days in the Summer Vacation are reckoned — unless the Court otherwise directs.',
                      'But note the proviso to s31(1): nothing in it extends the time for entering appearance to a writ indorsed with a statement of claim.',
                      'There is NO Summer Vacation in the District Court — this is a High Court concept only.',
                    ],
                  },
                  {
                    id: 'extend',
                    label: 'Can the period be moved?',
                    points: [
                      'O.3 r.5(1) — the Court may on such terms as it thinks just extend or abridge the period.',
                      'O.3 r.5(2) — it may extend even though the application is made after the period has expired.',
                      'O.3 r.5(3) — time for serving, filing or amending a pleading or other document may be extended by consent given in writing, without any order.',
                    ],
                  },
                  {
                    id: 'delay',
                    label: 'Has a year passed since the last step?',
                    detail: 'O.3 r.6 — where a year or more has elapsed since the last proceeding, the party who wishes to proceed must give every other party not less than one month\'s notice of intention to proceed. A summons on which no order was made is not a "proceeding" for this rule. It does not apply to default judgment where D failed to acknowledge service, to execution, or to matrimonial proceedings.',
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'O.3 r.2(5) only bites on periods of 7 days or LESS. On an 8-day or longer period, Saturdays, Sundays and holidays are all counted.',
                'The single most important exception in this lecture: O.10 r.1(3)(a) deems service on the seventh day "ignoring Order 3, rule 2(5)". So for deemed service of a writ by post or letterbox, weekends and holidays DO count.',
                'O.3 r.4 is about acts at an office of the Court. It moves a filing deadline; it does not move the date service was deemed to occur.',
                'Summer Vacation under O.3 r.3 is confined to pleadings. For anything else you need s31(1) HCO, which only applies to periods not exceeding one month — and has its own proviso about a writ indorsed with a statement of claim.',
                'O.12 r.5(a) counts the 14 days for acknowledging service INCLUDING the day of service — which is the opposite of the O.3 r.2(2) default. Do not apply r.2(2) to it.',
                'A gale warning day and a black rainstorm warning day are any day throughout OR FOR PART OF WHICH the warning is in force (s71(2) IGCO).',
              ],
            },
            skills: {
              bullets: [
                'Draw the calendar. Every worked example in this lecture is done on a calendar grid, and it is the fastest way to avoid an off-by-one.',
                'State the rule before the count: "this is a period after a date, so O.3 r.2(2) applies and 2 September is not day 1".',
                'Say out loud whether the period is 7 days or less, because that single fact decides whether specified days come out.',
                'Where the facts put a typhoon or black rainstorm in the window, deal with it expressly rather than silently counting through it.',
                'Where information is missing (whether the office was closed, whether a warning was in force), say what you would need to confirm.',
              ],
            },
            skeleton: {
              table: {
                headers: ['Wording', 'Rule', 'How to count'],
                rows: [
                  ['"within 14 days after/from [date]"', 'O.3 r.2(2)', 'The period begins immediately after that date — the reference date is not day 1'],
                  ['"not less than / at least 14 days before [date]"', 'O.3 r.2(3)', 'The period ends immediately before that date — count backwards, excluding the reference date'],
                  ['"2 clear days after [date]"', 'O.3 r.2(4)', 'At least that number of whole days must intervene; both the reference date and the target date are excluded'],
                  ['A period of 7 days or less spanning a weekend or holiday', 'O.3 r.2(5)-(6)', 'Specified days are excluded from the count'],
                  ['A period of 8 days or more', 'O.3 r.2(5) does not apply', 'Every day counts, including Saturdays, Sundays and holidays'],
                  ['Deemed service of a writ by post or letterbox', 'O.10 r.1(3)(a)', 'Seventh day after sending or insertion, expressly IGNORING O.3 r.2(5) — so weekends and holidays count'],
                  ['Deadline expiring when the Court office is closed', 'O.3 r.4(1)', 'In time if done on the next day the office is open'],
                  ['Time to acknowledge service of a writ served in the jurisdiction', 'O.12 r.5(a)', '14 days after service INCLUDING the day of service'],
                ],
              },
            },
            mistakes: {
              bullets: [
                'Counting the reference date as day 1 under O.3 r.2(2).',
                'Excluding weekends from a period longer than 7 days.',
                'Excluding weekends from the 7-day deemed service period under O.10 r.1(3)(a), which expressly disapplies O.3 r.2(5).',
                'Counting the 14 days for acknowledgement of service from the day AFTER service — O.12 r.5(a) includes the day of service.',
                'Applying the Summer Vacation to a non-pleading without going through s31(1) HCO, or applying it at all in the District Court.',
              ],
            },
            authorities: {
              statutes: [
                { text: '(2)Where the act is required to be done within a specified period after or from a specified date, the period begins immediately after that date. (3)Where the act is required to be done within or not less than a specified period before a specified date, the period ends immediately before that date. (4)Where the act is required to be done a specified number of clear days before or after a specified date, at least that number of days must intervene between the day on which the act is done and that date. (5)Where, apart from this paragraph, the period in question, being a period of 7 days or less, would include a specified day, that day shall be excluded.', cite: 'O.3 r.2(2)-(5), Rules of the High Court (Cap. 4A)' },
              ],
              table: {
                headers: ['Point', 'Provision', 'What it actually provides'],
                rows: [
                  ['"Month" means calendar month', 'O.3 r.1', 'Without prejudice to s3 IGCO, "month" in a judgment, order, direction or other document in High Court proceedings means a calendar month unless the context otherwise requires'],
                  ['Counting a period after a date', 'O.3 r.2(2)', 'The period begins immediately after that date'],
                  ['Counting a period before a date', 'O.3 r.2(3)', 'The period ends immediately before that date'],
                  ['Clear days', 'O.3 r.2(4)', 'At least that number of days must intervene between the day the act is done and that date'],
                  ['Specified days excluded for short periods', 'O.3 r.2(5)', 'Only where the period is 7 days or less'],
                  ['What is a specified day', 'O.3 r.2(6)', 'A Saturday; a general holiday; a gale warning day or black rainstorm warning day as defined by s71(2) IGCO; or (for an act at a court office) another day the office is closed'],
                  ['Summer Vacation and pleadings', 'O.3 r.3; O.64 r.1', 'Unless the Court otherwise directs, the Summer Vacation (1-31 August) is excluded in reckoning any period for serving, filing or amending any pleading'],
                  ['Summer Vacation and other acts', 's31(1) HCO (Cap. 4)', 'Where any law regulating civil procedure allows a period not exceeding one month, no days in the Summer Vacation are reckoned unless the Court otherwise directs — but this does not extend the time for entering appearance to a writ indorsed with a statement of claim'],
                  ['Deadline on a closure day', 'O.3 r.4(1); s71(1A)(a)-(b) IGCO', 'An act at an office of the Court is in time if done on the next day the office is open'],
                  ['Court-office computation generally', 's71(1A) IGCO (Cap. 1)', 'For acts at a court office, s71(1A)(a)-(c) apply to the exclusion of s71(1)(b), (c) and (d); (c) disregards closure days for periods not exceeding 7 days'],
                  ['Extension and abridgment', 'O.3 r.5(1)-(3)', 'The Court may extend or abridge on such terms as it thinks just, even after expiry; pleadings and other documents may be extended by written consent without an order'],
                  ['Notice after a year\'s delay', 'O.3 r.6', 'Not less than one month\'s notice of intention to proceed; a summons on which no order was made is not a proceeding'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG3', issue: 'serving-the-writ', label: 'Serving the writ under O.10' },
              { session: 'LG3', issue: 'acknowledgement-of-service', label: 'Acknowledgement of service' },
              { session: 'LG3', issue: 'ordinary-service-and-timing', label: 'Ordinary service, timing and proof' },
            ],
          },

          {
            id: 'serving-the-writ',
            title: 'Serving the writ under O.10',
            summary: 'Personal service as the rule, the two alternatives within the jurisdiction, and the deemed date each produces.',
            triggers: {
              bullets: [
                'A writ has been issued and the question is how to get it to the defendant.',
                'The writ was posted, or put through a letter box, and you need the date it counts as served.',
                'The defendant refuses to take the document, or walks away from the process server.',
                'The defendant\'s solicitors have been in correspondence and may accept service.',
                'The defendant had actual knowledge of the writ before, or after, the deemed date.',
                'There is a contractual clause specifying how or on whom process may be served.',
                'The claim is for recovery or delivery of possession of premises or land.',
                'The writ was never served at all and the validity period is running out.',
              ],
              routes: [
                { when: 'The defendant is a company, firm, minor or patient', session: 'LG3', issue: 'serving-particular-parties', label: 'Serving particular kinds of party' },
                { when: 'None of the prescribed methods is practicable', session: 'LG3', issue: 'substituted-service', label: 'Substituted service' },
                { when: 'The defendant is outside Hong Kong', session: 'LG3', issue: 'service-out-of-jurisdiction', label: 'Service out of the jurisdiction' },
                { when: 'Service happened but did not comply with the rules', session: 'LG3', issue: 'defective-service', label: 'Defective service and the Court\'s discretion' },
                { when: 'You now need the date the deemed service produces', session: 'LG3', issue: 'computing-time', label: 'Computing time under O.3' },
                { when: 'The document is a pleading rather than the writ', session: 'LG4', issue: 'pleadings-timetable', label: 'The pleadings timetable (filing and serving)' },
                { when: 'A default judgment has already been entered on this service', session: 'LG6', issue: 'regular-or-irregular', label: 'Is the default judgment regular or irregular?' },
              ],
            },
            answering: {
              flowchart: {
                title: 'How was the writ served, and on what date?',
                steps: [
                  {
                    id: 'rule',
                    label: 'Start from the rule: personal service',
                    points: [
                      'O.10 r.1(1) — a writ must be served personally on each defendant by the plaintiff or his agent.',
                      'O.65 r.1(1) — a document need not be served personally unless an express provision of the rules or an order of the Court requires it; an originating process is such a case (O.10 r.1 and r.5).',
                      'O.65 r.2 — personal service is effected by leaving a copy of the document with the person to be served.',
                      'O.65 r.1(2) — the Court retains power to dispense with the requirement of personal service.',
                      'O.10 r.5 — these rules apply to originating summonses, notices of motion and petitions too (with the appropriate acknowledgement form), except an ex parte originating summons or summary proceedings for possession of land.',
                    ],
                  },
                  {
                    id: 'howpersonal',
                    label: 'If served personally, how is it done in practice?',
                    points: [
                      'Cheung Ping v Cheung Wai Kit (DCCJ 3618/2010) — the server must satisfy himself he has found the correct person; hand or leave the copy; it need not be left in the person\'s actual corporeal possession.',
                      'If the person refuses to take it, inform them of the nature of the document and throw it down in their presence.',
                      'It is sufficient to say the documents are "court documents" without specifying it is a writ — but NOT sufficient simply to hand over the document without saying what it is.',
                      'The date of service is the date the document was actually served personally.',
                    ],
                  },
                  {
                    id: 'alternatives',
                    label: 'Or use one of the two alternatives for a defendant within the jurisdiction (O.10 r.1(2))',
                    points: [
                      '(a) sending a copy of the writ by REGISTERED POST to the defendant at his usual or last known address; or',
                      '(b) if there is a letter box for that address, INSERTING THROUGH THE LETTER BOX a copy enclosed in a sealed envelope addressed to the defendant.',
                      '"usual address" is where D can usually be reached; "last known address" is the address last known to P from whatever source — P need not have the most up-to-date address.',
                      '"address" is not confined to a residence: it may be any location where the person may be reached or where written contact can be established.',
                      '"through" the letter box takes its ordinary colloquial meaning — not underneath a door, and not through an open window.',
                      'Service is not valid if, at the time of insertion or posting, D was outside the jurisdiction.',
                    ],
                  },
                  {
                    id: 'deemed',
                    label: 'If an alternative was used, apply the deeming provision (O.10 r.1(3))',
                    points: [
                      '(a) the date of service is deemed, unless the contrary is shown, to be the SEVENTH DAY (ignoring O.3 r.2(5)) after the date the copy was sent or inserted.',
                      'Because O.3 r.2(5) is expressly ignored, Saturdays, Sundays and public holidays are counted within those 7 days.',
                      {
                        text: '(b) the affidavit proving due service must state two things:',
                        points: [
                          '(i) that in the deponent\'s opinion — or, if the deponent is P\'s solicitor or their employee, in P\'s opinion — the copy will have come to D\'s knowledge within 7 days thereafter.',
                          '(ii) for postal service, that the copy has not been returned to P through the post undelivered.',
                        ],
                      },
                      'If P knows D is no longer at the address, the deponent cannot honestly make that statement of belief.',
                    ],
                  },
                  {
                    id: 'rebut',
                    label: 'Test "unless the contrary is shown" both ways',
                    points: [
                      'If the writ is returned through the post, it is not deemed served.',
                      'If P can show D received it earlier — for example D telephoned the solicitors to ask about it — the actual date replaces the deemed date.',
                      'If there is evidence D did not actually know of the writ, or the proceedings were not brought to D\'s notice, there is still no good service.',
                      'Barclays Bank of Swaziland v Hahn — the deeming provision does not apply if D is not within the jurisdiction at the time of service by the alternative methods; service takes place when D is in the jurisdiction and has knowledge of the writ.',
                    ],
                  },
                  {
                    id: 'other',
                    label: 'Two routes that produce their own date',
                    points: [
                      'O.10 r.1(4) — where D\'s solicitor indorses on the writ a statement accepting service on D\'s behalf, the writ is deemed duly served on the date the indorsement was made. Note this does NOT give notice of intention to defend: D is still exposed to default judgment if no acknowledgement is filed.',
                      'O.10 r.1(5) — where a writ is NOT duly served but D acknowledges service of it, the writ is deemed, unless the contrary is shown, to have been duly served on the date D acknowledges service. So a writ served on the wrong defendant, or while D was abroad, can still be cured by the acknowledgement.',
                    ],
                  },
                  {
                    id: 'form',
                    label: 'Check the writ itself was in order',
                    detail: 'O.10 r.1(6) — every copy of a writ for service must be sealed with the seal of the High Court and accompanied by a form of acknowledgement of service in Form No. 14 with the title and number of the action entered. Failure is an irregularity, which the Court may relieve against under O.2 r.1 where experienced solicitors are not prejudiced.',
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The 7-day deeming period under O.10 r.1(3)(a) expressly ignores O.3 r.2(5). This is the exception that catches people who have just learned the specified-day rule.',
                'Barclays Bank v Hahn is the answer whenever the facts put D abroad at the moment of posting or insertion: the deeming provision simply does not operate, and service happens only when D is back in the jurisdiction with knowledge of the writ.',
                'O.10 r.1(5) is a cure, not a trap for D alone: an acknowledgement fixes the date of service even where service was irregular — which is why O.12 r.7 separately preserves D\'s right to object to the irregularity.',
                'A solicitor\'s indorsement under O.10 r.1(4) deems service but is not an acknowledgement. The 14 days start running and default judgment becomes a live risk.',
                '"Last known address" is judged by what P knew, from any source — P is not obliged to have the current address, but if P KNOWS D has moved, the r.1(3)(b)(i) statement of belief cannot honestly be made.',
                'The alternatives in O.10 r.1(2) are only available for a defendant WITHIN the jurisdiction.',
              ],
            },
            skills: {
              bullets: [
                'Name the method first, then the date it produces, then the deadline that runs from it — in that order.',
                'Where an alternative method was used, always check the affidavit requirements in r.1(3)(b); a service question is often really an affidavit question.',
                'If the facts mention travel, check where D was on the date of posting or insertion before applying the deeming provision.',
                'Where service may be bad, give both the consequence (no good service) and the cure (substituted service, a fresh attempt, or reliance on an acknowledgement under r.1(5)).',
              ],
            },
            mistakes: {
              bullets: [
                'Excluding weekends and holidays from the 7-day deemed service period.',
                'Applying the deeming provision where D was out of the jurisdiction at the time of posting or insertion.',
                'Treating a solicitor\'s indorsement under r.1(4) as though it were an acknowledgement of service.',
                'Forgetting that the writ must be sealed and accompanied by Form No. 14.',
                'Serving by ordinary (rather than registered) post under r.1(2)(a).',
              ],
            },
            authorities: {
              statutes: [
                { text: 'A writ must be served personally on each defendant by the plaintiff or his agent.', cite: 'O.10 r.1(1), Rules of the High Court (Cap. 4A)' },
                { text: 'the date of service shall, unless the contrary is shown, be deemed to be the seventh day (ignoring Order 3, rule 2(5)) after the date on which the copy was sent to, or as the case may be, inserted through the letter box for, the address in question;', cite: 'O.10 r.1(3)(a), Rules of the High Court (Cap. 4A)' },
                { text: 'Personal service of a document is effected by leaving a copy of the document with the person to be served.', cite: 'O.65 r.2, Rules of the High Court (Cap. 4A)' },
              ],
              table: {
                headers: ['Point', 'Provision', 'What it actually provides'],
                rows: [
                  ['Personal service is the rule', 'O.10 r.1(1)', 'A writ must be served personally on each defendant by the plaintiff or his agent'],
                  ['Two alternatives within the jurisdiction', 'O.10 r.1(2)(a)-(b)', 'Registered post to D\'s usual or last known address; or insertion through the letter box for that address in a sealed envelope addressed to D'],
                  ['Deemed date and the affidavit', 'O.10 r.1(3)(a)-(b)', 'Seventh day after sending or insertion, ignoring O.3 r.2(5); the affidavit must state the opinion that the writ will have come to D\'s knowledge within 7 days and, for post, that it was not returned undelivered'],
                  ['Solicitor accepting service', 'O.10 r.1(4)', 'Deemed duly served on the date the indorsement was made'],
                  ['Acknowledgement cures defective service', 'O.10 r.1(5)', 'Where a writ is not duly served but D acknowledges service, it is deemed duly served, unless the contrary is shown, on the date of acknowledgement — subject to O.12 r.7'],
                  ['Sealed writ and Form No. 14', 'O.10 r.1(6)', 'Every copy for service must be sealed and accompanied by a Form No. 14 acknowledgement with the title and number entered'],
                  ['Other originating processes', 'O.10 r.5', 'Applies to originating summonses, notices of motion and petitions, except an ex parte originating summons or summary proceedings for possession of land'],
                  ['When personal service is required', 'O.65 r.1(1)-(2)', 'Only where an express provision or an order of the Court requires it; the Court may dispense with the requirement'],
                  ['How personal service is effected', 'O.65 r.2', 'By leaving a copy of the document with the person to be served'],
                  ['Practical approach to personal service', 'Cheung Ping v Cheung Wai Kit (DCCJ 3618/2010)', 'Identify the correct person; hand or leave the copy; if refused, state the nature of the document and throw it down in their presence; saying "court documents" suffices, silence does not'],
                  ['D abroad at the time of posting', 'Barclays Bank of Swaziland v Hahn [1989] 1 WLR 506', 'The deeming provision does not apply if D is not within the jurisdiction at the time of service by the alternative methods; service takes place when D is in the jurisdiction and has knowledge of the writ'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG3', issue: 'computing-time', label: 'Computing time under O.3' },
              { session: 'LG3', issue: 'serving-particular-parties', label: 'Serving particular kinds of party' },
              { session: 'LG3', issue: 'substituted-service', label: 'Substituted service' },
              { session: 'LG3', issue: 'defective-service', label: 'Defective service and the Court\'s discretion' },
              { session: 'LG3', issue: 'acknowledgement-of-service', label: 'Acknowledgement of service' },
            ],
          },
          {
            id: 'serving-particular-parties',
            title: 'Serving particular kinds of party',
            summary: 'Companies, overseas companies, partnerships, persons under disability, agents of overseas principals — each has its own route.',
            triggers: {
              bullets: [
                'The defendant is a Hong Kong company, and the question is which of the two routes applies.',
                'The defendant is a non-Hong Kong company, registered or not, with or without a place of business here.',
                'The defendant is a partnership, or an individual sued in the name of a firm.',
                'The defendant is a minor, or a mentally incapacitated person.',
                'The contracting party abroad acted through an agent trading or residing in Hong Kong.',
                'The registered office has been abandoned, or post to it is returned.',
                'The claim concerns land and nobody appears to be in possession.',
                'Judgment is to be enforced against a partner personally rather than the firm.',
                'The defendant is a foreign State, or a body with statutory service provisions of its own.',
              ],
              routes: [
                { when: 'The party is an ordinary individual in Hong Kong', session: 'LG3', issue: 'serving-the-writ', label: 'Serving the writ under O.10' },
                { when: 'The prescribed route for that party is impracticable', session: 'LG3', issue: 'substituted-service', label: 'Substituted service' },
                { when: 'The company or person is outside the jurisdiction', session: 'LG3', issue: 'service-out-of-jurisdiction', label: 'Service out of the jurisdiction' },
                { when: 'The wrong officer or the wrong address was served', session: 'LG3', issue: 'defective-service', label: 'Defective service and the Court\'s discretion' },
                { when: 'A counterclaim is to be served on a new party', session: 'LG4', issue: 'defence-counterclaim-and-reply', label: 'Defence, counterclaim and reply' },
                { when: 'A default judgment followed service on a company at its registered office', session: 'LG6', issue: 'regular-or-irregular', label: 'Is the default judgment regular or irregular?' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Who is the defendant, and which route does that dictate?',
                steps: [
                  {
                    id: 'company',
                    label: 'A Hong Kong limited company — two alternative routes',
                    points: [
                      'Statutory route: s827 CO — "A document may be served on a company by leaving it at, or sending it by post to, the company\'s registered office."',
                      'It is the more straightforward route: service is effective simply by complying with the statutory steps. There is no need to prove the document actually came to the notice of the company or its directors (Ho Kwok Wah v Group Jewellery Arts Ltd), and no need to satisfy O.10 r.1(3).',
                      'Deemed time under s827 comes from PD 19.2, citing s8 IGCO: unless the contrary is proved, the writ is deemed to have reached the registered office on the 4th working day after posting by REGISTERED post, and the 2nd working day after posting by ORDINARY post.',
                      'Rules route: O.10 r.1 with O.65 r.3. By O.65 r.3(2), where a writ is served on a body corporate under O.10 r.1(2), the reference to D\'s usual or last known address becomes the REGISTERED OR PRINCIPAL OFFICE, and the reference to D\'s knowledge becomes the knowledge of a person mentioned in O.65 r.3(1).',
                      'By O.65 r.3(1), personal service on a body corporate may, in cases for which provision is not otherwise made by any written law, be effected by leaving a copy with the chairman or president, or the clerk, secretary, treasurer or other similar officer.',
                      'Under the rules route the deemed date is the seventh day after posting (O.10 r.1(3)(a)) and the r.1(3)(b) affirmation of belief is still required.',
                      'Service on a company BY LEAVING the document is only available under s827 CO — it is not available under O.65 r.3(2) or O.10 r.1.',
                    ],
                  },
                  {
                    id: 'whichroute',
                    label: 'Which company route to use, and why it matters',
                    points: [
                      'The rule you serve under decides the deemed date and what you must establish: s827 sends you to PD 19.2, O.10 r.1 sends you to r.1(3)(a).',
                      'The position on postal service was once doubted because of O.10 r.1(7) (Treasure Land Property Consultants v United Smart Development Ltd (CA)), but later cases referred to O.65 r.3(1), and the current position appears to be that postal service may be effected under EITHER rule — they are alternatives.',
                      's827 is considered easier to achieve and is used mostly in practice. Which is better depends on what information you have.',
                      'Good practice: state in the covering letter which method is being adopted, so there is no confusion about the deemed date.',
                      'If D has no registered office, it is not a case where provision is made by an enactment — so you fall back to the rules.',
                      'China Medical Technologies Inc v Bank of China (Hong Kong) Ltd — leaving the writ at the G/F reception of the tower did not satisfy s827 where the registered address was 14/F and the process server could have asked to go up; sending the writ by email is also not acceptable under s827.',
                    ],
                  },
                  {
                    id: 'overseasco',
                    label: 'An overseas company — s803 CO, in a cascade',
                    points: [
                      'Address the document to an authorised representative as shown in the Companies Registry and leave it at, or send it by post to, their last known address in Hong Kong (s803(1)).',
                      'If there is no authorised representative, or they refuse to accept service, leave it at or post it to any place of business established by the company in Hong Kong (s803(2)-(3)).',
                      'If there is no place of business, send by registered post to the registered office with a copy to the principal place of business shown in the Companies Registry.',
                      'If no registered office or principal place of business is shown, leave it at or post it to a place where the company had a place of business in Hong Kong within the past 12 months (s803(4)).',
                    ],
                  },
                  {
                    id: 'firm',
                    label: 'A partnership sued in the firm\'s name — O.81 r.3',
                    points: [
                      'r.3(1)(a) — on any one or more of the partners (O.10 applies to that personal service).',
                      'r.3(1)(b) — at the principal place of business of the partnership within the jurisdiction, on any person having at the time of service the control or management of the partnership business there.',
                      'r.3(1)(c) — by sending a copy by registered post (in accordance with O.10 r.1(2)) to the firm at its principal place of business within the jurisdiction.',
                      'Service under any of these is deemed good on the firm WHETHER OR NOT any member of the firm is out of the jurisdiction.',
                      'For the postal route, r.3(2) mirrors O.10: deemed served on the seventh day (ignoring O.3 r.2(5)), with an affidavit stating the belief that it will have come to the knowledge of a person in (1)(a) or (b) within 7 days and was not returned undelivered.',
                      'One of these methods must be used or service is ineffective (3D-Gold v PwC).',
                      'r.3(3) — if the partnership was dissolved before the action began, to P\'s knowledge, the writ must be served on EVERY person within the jurisdiction sought to be made liable.',
                      'r.3(4) — every person served under (1)(a) or (b) must be given a written notice at the time of service stating whether they are served as a partner, as a person having control or management, or both; without that notice they are deemed served as a PARTNER.',
                    ],
                  },
                  {
                    id: 'firmconseq',
                    label: 'And note why the choice of partnership method matters',
                    detail: 'The rules on enforcing a judgment against the personal assets of partners depend partly on whether the partners themselves were served. If you want to enforce against a partner personally, serve that partner under r.3(1)(a). The names and addresses of all partners must in any event be disclosed to the Court before entering judgment (O.81 r.5(1)).',
                  },
                  {
                    id: 'disability',
                    label: 'A person under disability — O.80',
                    points: [
                      'O.80 r.1 — a "person under disability" is a minor or a mentally incapacitated person (a mentally disordered or mentally handicapped person within the Mental Health Ordinance who by reason of that is incapable of managing and administering their property and affairs).',
                      'O.80 r.2(1) — such a person may not bring or make a claim except by a NEXT FRIEND, and may not acknowledge service, defend, counterclaim or intervene except by a GUARDIAN AD LITEM. On the defendant side it is the guardian ad litem who matters.',
                      'O.80 r.2(3) — except where the Official Solicitor is acting, a next friend or guardian ad litem must act by a solicitor. So service is effected on the solicitors.',
                      'Get this wrong and service may be set aside for not having been effected on the correct person.',
                    ],
                  },
                  {
                    id: 'agent',
                    label: 'An overseas principal with a Hong Kong agent — O.10 r.2',
                    points: [
                      'The Court may, on an ex parte application, authorise service on the agent instead of the principal where: a contract was entered into within the jurisdiction with or through an agent who is an individual residing or carrying on business here, or a body corporate with a registered office or place of business here; the principal was not and is not such a person; and the agent\'s authority has not been determined or they are still in business relations with the principal.',
                      'r.2(2) — the order must limit a time within which D must acknowledge service.',
                      'r.2(3) — a copy of the order and of the writ must be sent by post to D at his address out of the jurisdiction.',
                      'The discretion is used carefully: the Court will consider whether there is any difficulty in serving out of the jurisdiction before granting leave.',
                    ],
                  },
                  {
                    id: 'contract',
                    label: 'A contractually agreed method — O.10 r.3',
                    points: [
                      'Where the contract gives the Court of First Instance jurisdiction (or it otherwise has it) and provides for the manner or place of service, a writ served in accordance with the contract is deemed duly served.',
                      'r.3(2) — but a writ served OUT of the jurisdiction under a contract is not deemed duly served unless leave has been granted under O.11 r.1(1) or service without leave is permitted under O.11 r.1(2).',
                    ],
                  },
                  {
                    id: 'land',
                    label: 'A possession claim where nobody is in occupation — O.10 r.4',
                    points: [
                      'On an ex parte application, where no person appears to be in possession and service cannot otherwise be effected, the Court may authorise service by affixing a copy of the writ to a conspicuous part of the premises or land — or order that service already so effected be treated as good service.',
                      'r.4(2) — in any event, a copy of the writ must be posted in a conspicuous place on or at the entrance to the premises, in addition to and not in substitution for any other mode of service.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'For a company, the route decides the date: s827 with PD 19.2 gives the 4th working day (registered post) or 2nd working day (ordinary post); O.10 r.1 gives the 7th day. Say which route you are using.',
                'Service on a company BY LEAVING the document is a s827 route only. You cannot "leave it" under O.10 r.1 or O.65 r.3(2).',
                'China Medical Technologies shows how exacting s827 is: the ground-floor reception of the building is not the registered office on the 14th floor, and email is not "leaving it at or sending it by post to".',
                'On the defendant side of a disability case it is the GUARDIAN AD LITEM, not the next friend — and the Official Solicitor is the exception to the must-act-by-a-solicitor rule.',
                'O.81 r.3(4) has a sting: serve a person under (1)(a) or (b) without the written notice of the capacity in which they are served, and they are deemed served as a partner.',
                'Serving the firm under (1)(b) or (c) may not be enough to enforce against a partner personally — if that is the goal, serve the partner under (1)(a).',
                'A contractual service clause does not dispense with O.11 leave for service abroad.',
              ],
            },
            skills: {
              bullets: [
                'Identify the legal nature of each defendant before choosing a method — natural person, Hong Kong company, overseas company, firm, or person under disability.',
                'For a company, name the route AND its deemed-date provision in the same breath, and note the covering-letter practice point.',
                'For a partnership, say which of the three methods you would use and tie it to whether enforcement against partners personally is in view.',
                'Where the facts give you an agent or a contractual clause, deal with the leave requirement rather than assuming the method is self-executing.',
              ],
            },
            skeleton: {
              table: {
                headers: ['Defendant', 'Route', 'Deemed date / key requirement'],
                rows: [
                  ['Hong Kong limited company', 's827 CO — leave at or post to the registered office', 'PD 19.2 with s8 IGCO: 4th working day after registered post; 2nd working day after ordinary post. No need to prove actual notice'],
                  ['Hong Kong limited company', 'O.10 r.1(2) with O.65 r.3(2) — registered or principal office', '7th day after posting (O.10 r.1(3)(a)), plus the r.1(3)(b) affirmation of belief'],
                  ['Hong Kong limited company', 'O.65 r.3(1) — leaving a copy with the chairman, president, clerk, secretary, treasurer or similar officer', 'Personal service, where provision is not otherwise made by any written law'],
                  ['Overseas company', 's803 CO cascade', 'Authorised representative\'s last known Hong Kong address; then a Hong Kong place of business; then registered office by registered post with a copy to the principal place of business; then a place of business within the past 12 months'],
                  ['Partnership sued in the firm name', 'O.81 r.3(1)(a), (b) or (c)', 'Good on the firm even if a partner is abroad; postal route deemed on the 7th day; written notice of capacity required under r.3(4)'],
                  ['Minor or mentally incapacitated person (as defendant)', 'O.80 r.2(1)', 'Through the guardian ad litem, who must act by a solicitor unless the Official Solicitor acts — so serve the solicitors'],
                  ['Overseas principal with a Hong Kong agent', 'O.10 r.2 (ex parte leave)', 'Order must limit the time for acknowledgement; order and writ posted to D abroad'],
                ],
              },
            },
            mistakes: {
              bullets: [
                'Applying the O.10 r.1(3)(a) 7-day deeming to a writ posted under s827 CO, or PD 19.2 to a writ posted under O.10 r.1.',
                '"Leaving" a writ at a company address while purporting to rely on O.10 r.1 or O.65 r.3(2).',
                'Serving a minor defendant personally instead of through the guardian ad litem\'s solicitors.',
                'Serving a partner under O.81 r.3(1)(a) or (b) without the written notice of capacity.',
                'Treating a contractual service clause as removing the need for O.11 leave to serve abroad.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'A document may be served on a company by leaving it at, or sending it by post to, the company\'s registered office.', cite: 's827, Companies Ordinance (Cap. 622)' },
                { text: 'A person under disability may not bring, or make a claim in, any proceedings except by his next friend and may not acknowledge service, defend, make a counterclaim or intervene in any proceedings, or appear in any proceedings under a judgment or order notice of which has been served on him, except by his guardian ad litem.', cite: 'O.80 r.2(1), Rules of the High Court (Cap. 4A)' },
              ],
              table: {
                headers: ['Point', 'Provision', 'What it actually provides'],
                rows: [
                  ['Statutory service on a company', 's827 CO', 'By leaving at, or sending by post to, the registered office'],
                  ['No need to prove actual notice under s827', 'Ho Kwok Wah v Group Jewellery Arts Ltd [2000] 3 HKC 595', 'Service is effective on compliance with the statutory steps; the O.10 r.1(3) criteria need not be met'],
                  ['Deemed time under s827', 'PD 19.2, citing s8 IGCO', '4th working day after registered post; 2nd working day after ordinary post, unless the contrary is proved'],
                  ['Exacting compliance with s827', 'China Medical Technologies Inc v Bank of China (Hong Kong) Ltd [2020] HKCFA 28', 'Leaving the writ at the ground-floor reception where the registered office was on the 14th floor did not satisfy s827; nor does email'],
                  ['Personal service on a body corporate', 'O.65 r.3(1)', 'Where provision is not otherwise made by written law, by leaving a copy with the chairman, president, clerk, secretary, treasurer or other similar officer'],
                  ['O.10 r.1(2) adapted for a body corporate', 'O.65 r.3(2)', 'Usual or last known address reads as the registered or principal office; D\'s knowledge reads as the knowledge of a person in r.3(1)'],
                  ['Which rule applies to postal service on a company', 'O.10 r.1(7); Treasure Land Property Consultants v United Smart Development Ltd [1995] 3 HKC 34 (CA)', 'Doubt arose from O.10 r.1(7); later cases relied on O.65 r.3(1), and the current position appears to be that the two routes are alternatives'],
                  ['Overseas companies', 's803(1)-(4) CO', 'A cascade from the authorised representative\'s last known Hong Kong address down to a place of business held within the past 12 months'],
                  ['Service on a firm', 'O.81 r.3(1)(a)-(c), r.3(2)', 'On a partner; at the principal place of business on a person with control or management; or by registered post to the firm there — deemed good even if a partner is abroad; postal route deemed on the 7th day with the usual affidavit'],
                  ['Dissolved partnership; notice of capacity', 'O.81 r.3(3)-(4)', 'If dissolved to P\'s knowledge before the action, serve every person within the jurisdiction sought to be made liable; a person served without the written notice of capacity is deemed served as a partner'],
                  ['One of the methods must be used', '3D-Gold v PwC HCA 1192/2011', 'Otherwise service on the partnership is ineffective'],
                  ['Persons under disability', 'O.80 r.1, r.2(1), r.2(3)', 'Minor or mentally incapacitated person; defends only by guardian ad litem; who must act by a solicitor unless the Official Solicitor acts'],
                  ['Agent of an overseas principal', 'O.10 r.2(1)-(3)', 'Ex parte leave on the three conditions; the order must limit the time for acknowledgement; order and writ posted to D abroad'],
                  ['Service in pursuance of contract', 'O.10 r.3(1)-(2)', 'A writ served per the contract is deemed duly served — but service out of the jurisdiction still needs O.11 leave unless permitted without leave'],
                  ['Possession of premises or land', 'O.10 r.4(1)-(2)', 'Ex parte authorisation to affix a copy to a conspicuous part, or an order treating such service as good; and in any event a copy posted at the entrance in addition to any other mode'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG3', issue: 'serving-the-writ', label: 'Serving the writ under O.10' },
              { session: 'LG3', issue: 'substituted-service', label: 'Substituted service' },
              { session: 'LG3', issue: 'service-out-of-jurisdiction', label: 'Service out of the jurisdiction' },
              { session: 'LG3', issue: 'defective-service', label: 'Defective service and the Court\'s discretion' },
            ],
          },

          {
            id: 'substituted-service',
            title: 'Substituted service',
            summary: 'When the prescribed methods are impracticable — the test, the ex parte application, and what the Court needs to see.',
            triggers: {
              bullets: [
                'The defendant cannot be located, or is evading the process server.',
                'There is no identifiable address and no letter box.',
                'A corporate defendant has no registered office, or it is defunct.',
                'Repeated attempts at personal service have failed and the limitation period is running.',
                'The only reliable channel to the defendant is electronic — email, social media, a messaging app, a wallet address.',
                'The defendant is abroad and local law forbids service by a private person.',
                'An order for substituted service has been made and the question is whether what was done complies with it.',
                'Judgment was entered in default and the defendant says the documents never reached them.',
              ],
              routes: [
                { when: 'A prescribed method is still available', session: 'LG3', issue: 'serving-the-writ', label: 'Serving the writ under O.10' },
                { when: 'The party type has its own statutory route', session: 'LG3', issue: 'serving-particular-parties', label: 'Serving particular kinds of party' },
                { when: 'The defendant is abroad', session: 'LG3', issue: 'service-out-of-jurisdiction', label: 'Service out of the jurisdiction' },
                { when: 'The order was made but not followed', session: 'LG3', issue: 'defective-service', label: 'Defective service and the Court\'s discretion' },
                { when: 'You now need the acknowledgement deadline the order sets', session: 'LG3', issue: 'acknowledgement-of-service', label: 'Acknowledgement of service' },
                { when: 'A default judgment was entered after the substituted service', session: 'LG6', issue: 'regular-or-irregular', label: 'Is the default judgment regular or irregular?' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Applying for substituted service',
                steps: [
                  {
                    id: 'gate',
                    label: 'The gateway: is it IMPRACTICABLE to serve in the prescribed manner?',
                    points: [
                      'O.65 r.4(1) — where a document must be served personally, or is a document to which O.10 r.1 applies, and it appears to the Court that it is impracticable FOR ANY REASON to serve it in the manner prescribed, the Court may order substituted service.',
                      'Impracticability is what gives rise to the Court\'s discretion (Chan Yeuk Mui v Ng Shu Chi).',
                      'Typical cases: cannot locate D; cannot identify an address and there is no letter box; D is evading service; a corporate defendant has no registered office.',
                    ],
                  },
                  {
                    id: 'apply',
                    label: 'Make the application',
                    points: [
                      'Ex parte, by affidavit stating the facts on which the application is founded (O.65 r.4(2)).',
                      'Demonstrate the steps already taken to serve in the usual manner — including the inquiries made — and why it was impracticable.',
                      'Propose an appropriate method that is likely to bring the document to the person\'s notice.',
                    ],
                  },
                  {
                    id: 'method',
                    label: 'Choose a method the Court will accept',
                    points: [
                      'Substituted service is effected by taking such steps as the COURT MAY DIRECT to bring the document to the notice of the person to be served (O.65 r.4(3)) — the order defines what counts as service.',
                      'Traditional methods: advertisement in newspapers; service on D through a friend or relative; fax, post or email.',
                      'But newspaper advertising has been held duplicative and unnecessary in an appropriate case (Airport Authority v Persons Unlawfully and Wilfully Obstructing or Interfering).',
                      'Modern methods the Court has accepted: Facebook Messenger (Zhuhai Gotech Intelligent Technology Co Ltd v Persons Unknown); and blockchain or NFT-based service (Chen Shanxian and others, HCA 533/2025).',
                    ],
                  },
                  {
                    id: 'after',
                    label: 'Then think about what happens if it still does not reach D',
                    detail: 'Substituted service is a deeming mechanism: compliance with the order is service. But if the document demonstrably never came to D\'s notice, that feeds into any later application to set aside a judgment obtained in default — so the method proposed should be one genuinely likely to inform D, not merely one the Court will approve.',
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The test is IMPRACTICABLE, not impossible — but it is not satisfied by a single failed attempt either. The affidavit must show the attempts and inquiries.',
                'Substituted service is available for documents requiring personal service AND for documents to which O.10 r.1 applies — so it covers the writ itself.',
                'What constitutes service is whatever the ORDER directs. Comply with the order exactly; a method that seemed sensible but was not directed is not service.',
                'Do not reach for newspaper advertising by reflex — the Court has called it duplicative and unnecessary where a better-targeted method exists.',
                'Substituted service is one of the methods expressly preserved for service out of the jurisdiction (O.11 r.5(1) applies O.65 r.4).',
              ],
            },
            skills: {
              bullets: [
                'Lead with the evidence: list the attempts made, dates, and the inquiries undertaken, because that is what establishes impracticability.',
                'Propose a specific method and explain why it is likely to bring the document to D\'s notice on these facts — a proposal without that reasoning is what gets refused.',
                'Note that the application is ex parte and by affidavit, and identify who would swear it.',
                'If the deadline for serving the writ is approaching, say so — urgency is part of the picture.',
              ],
            },
            mistakes: {
              bullets: [
                'Applying before making, and evidencing, real attempts at prescribed service.',
                'Treating substituted service as available only after personal service has been attempted, when O.10 r.1(2) alternatives should also have been considered.',
                'Serving by a method not directed by the order.',
                'Assuming newspaper advertisement is the default.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'If, in the case of any document which by virtue of any provision of these rules is required to be served personally or in the case of a document to which Order 10, rule 1, applies, it appears to the Court that it is impracticable for any reason to serve that document in the manner prescribed on that person, the Court may make an order for substituted service of that document.', cite: 'O.65 r.4(1), Rules of the High Court (Cap. 4A)' },
              ],
              table: {
                headers: ['Point', 'Provision', 'What it actually provides'],
                rows: [
                  ['The power and the test', 'O.65 r.4(1)', 'Impracticable for any reason to serve in the manner prescribed, for documents requiring personal service or to which O.10 r.1 applies'],
                  ['The test in practice', 'Chan Yeuk Mui v Ng Shu Chi [1999] 2 HKC 704', 'Impracticability of the usual methods is what gives rise to the Court\'s discretion'],
                  ['The application', 'O.65 r.4(2)', 'May be made by affidavit stating the facts on which it is founded; made ex parte'],
                  ['What amounts to service', 'O.65 r.4(3)', 'Taking such steps as the Court may direct to bring the document to the notice of the person to be served'],
                  ['Newspaper advertising', 'Airport Authority v Persons Unlawfully and Wilfully Obstructing or Interfering [2020] HKCFI 2743', 'Held duplicative and unnecessary in the circumstances'],
                  ['Social media', 'Zhuhai Gotech Intelligent Technology Co Ltd v Persons Unknown (HCZZ 10/2020)', 'Service by Facebook Messenger'],
                  ['Blockchain', 'Chen Shanxian and others (HCA 533/2025)', 'Service by blockchain/NFT'],
                  ['Available for service out', 'O.11 r.5(1)', 'O.65 r.4 is among the provisions applied to service of a writ out of the jurisdiction'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG3', issue: 'serving-the-writ', label: 'Serving the writ under O.10' },
              { session: 'LG3', issue: 'serving-particular-parties', label: 'Serving particular kinds of party' },
              { session: 'LG3', issue: 'service-out-of-jurisdiction', label: 'Service out of the jurisdiction' },
              { session: 'LG3', issue: 'defective-service', label: 'Defective service and the Court\'s discretion' },
            ],
          },

          {
            id: 'ordinary-service-and-timing',
            title: 'Ordinary service, timing and proof',
            summary: 'Everything that is not an originating process — how it is served, when it counts, what the affidavit must say.',
            triggers: {
              bullets: [
                'The document is a summons, notice, order, pleading or affidavit — anything that is not an originating process.',
                'Service was by post, by leaving the document at an address, or through a document exchange.',
                'Service was effected after 4pm, or on a Saturday, Sunday or public holiday.',
                'The question is what the affirmation or affidavit of service has to say.',
                'A party has given no address for service, or the address given is not genuine.',
                'The party is acting in person and the question is where documents go.',
                'A document was sent electronically and the question is whether that counts.',
              ],
              routes: [
                { when: 'The document is the writ or another originating process', session: 'LG3', issue: 'serving-the-writ', label: 'Serving the writ under O.10' },
                { when: 'You need to turn the service date into a deadline', session: 'LG3', issue: 'computing-time', label: 'Computing time under O.3' },
                { when: 'No ordinary method can reach the party', session: 'LG3', issue: 'substituted-service', label: 'Substituted service' },
                { when: 'The address for service came from an acknowledgement', session: 'LG3', issue: 'acknowledgement-of-service', label: 'Acknowledgement of service — the address requirements' },
                { when: 'The document being served is a pleading', session: 'LG4', issue: 'pleadings-timetable', label: 'The pleadings timetable (filing and serving)' },
                { when: 'You are proving service in order to enter a default judgment', session: 'LG6', issue: 'entering-default-judgment', label: 'Entering judgment under O.13: procedure, proof of service and fixed costs' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Serving and proving an ordinary document',
                steps: [
                  {
                    id: 'how',
                    label: 'How ordinary service is effected (O.65 r.5(1))',
                    points: [
                      'By leaving the document at the proper address of the person to be served; or',
                      'by post; or',
                      'where the proper address includes a numbered box at a document exchange, by leaving it at that exchange (or one that transmits to it every business day); or',
                      'in such other manner as the court may direct.',
                    ],
                  },
                  {
                    id: 'proper',
                    label: 'Identify the "proper address" (O.65 r.5(2))',
                    points: [
                      'It is the person\'s address for service — the one given in the writ, acknowledgement of service or notice of change of solicitor.',
                      'If they have no address for service, then: in any case, the business address of the solicitor acting for them; for an individual, their usual or last known address; for individuals suing or being sued in a firm name, the principal or last known place of business of the firm within the jurisdiction; for a body corporate, its registered or principal office.',
                    ],
                  },
                  {
                    id: 'when',
                    label: 'Work out when it is deemed served',
                    points: [
                      'Document exchange: unless the contrary is proved, deemed served on the BUSINESS DAY FOLLOWING the day it is left (O.65 r.5(2A)); "business day" means a day other than a general holiday (r.5(4)).',
                      'O.65 r.7 — where a document (OTHER than a writ or other originating process) is served under r.2 or r.5(1)(a) on a specified day, or after 4 p.m. on another day, it is deemed served on the next following day that is not a specified day, for the purpose of computing time after service.',
                      'For r.7, "specified day" means a Saturday, a general holiday, a gale warning day or a black rainstorm warning day (r.7(3)) — note this list does not include the "office closed" limb found in O.3 r.2(6).',
                    ],
                  },
                  {
                    id: 'prove',
                    label: 'Prove it (O.65 r.8)',
                    points: [
                      'Except as provided in O.10 r.1(3)(b) and O.81 r.3(2)(b), an affidavit of service must state BY WHOM the document was served, the DAY OF THE WEEK AND DATE on which it was served, WHERE it was served and HOW.',
                      'For service under O.10 r.1(2) the additional statements in r.1(3)(b) are required: the opinion that the writ will have come to D\'s knowledge within 7 days, and for post that it was not returned undelivered.',
                    ],
                  },
                  {
                    id: 'none',
                    label: 'Check whether service is needed at all (O.65 r.9)',
                    detail: 'Where a document is required to be served but need not be served personally or under O.10 r.1(2), and at the time for service the person is in default as to acknowledgement of service or has no address for service, the document need not be served on them — unless the Court otherwise directs or the rules otherwise provide.',
                  },
                  {
                    id: 'sunday',
                    label: 'And the Sunday rule (O.65 r.10)',
                    points: [
                      'No process may be served or executed within the jurisdiction on a Sunday, except in case of urgency with the leave of the Court.',
                      '"Process" includes a writ, judgment, notice, order, petition, originating or other summons or warrant (r.10(2)).',
                      'r.10(1A) — the prohibition does not apply to service of process under the Court Proceedings (Electronic Technology) (High Court Civil Proceedings) Rules.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'O.65 r.7 expressly does NOT apply to a writ or other originating process. Do not use the after-4pm rule to shift the date of service of a writ.',
                'The r.7(3) list of specified days is shorter than the O.3 r.2(6) list — it omits the "another day on which the office is closed" limb.',
                'A document exchange delivery is deemed served the following BUSINESS day, and a business day here means any day other than a general holiday — so a Saturday can be a business day for this rule.',
                'O.65 r.8 requires four specific matters, including the day of the week. An affidavit that gives only a date is incomplete.',
                'O.65 r.9 is a real saving: once D is in default of acknowledgement, ordinary documents need not be served on them at all.',
                'The Sunday prohibition now has an electronic-service carve-out (r.10(1A)).',
              ],
            },
            skills: {
              bullets: [
                'Say whether the document is an originating process before reaching for O.65 r.5 or r.7 — the answer decides which rules are even in play.',
                'When proving service, run the four O.65 r.8 elements as a checklist: by whom, day and date, where, how.',
                'Where timing matters, state the hour and day of service, because 4 p.m. and specified days both move the deemed date.',
                'On the case-file exercise, read each affirmation of service against r.8 and, where the alternative method was used, against O.10 r.1(3)(b).',
              ],
            },
            mistakes: {
              bullets: [
                'Applying O.65 r.7 to a writ.',
                'Treating a Saturday as a non-business day for the document-exchange deeming rule.',
                'Filing an affidavit of service that omits the day of the week, or the manner of service.',
                'Serving process on a Sunday without leave.',
              ],
            },
            authorities: {
              statutes: [
                { text: '(1)This rule applies if a document (other than a writ of summons or other originating process) is served under rule 2 or 5(1)(a)— (a)on a specified day; or (b)after 4 p.m. on another day. (2)For computing a period of time after service of the document, the document is deemed to be served on the next following day, not being a specified day.', cite: 'O.65 r.7(1)-(2), Rules of the High Court (Cap. 4A)' },
                { text: 'Except as provided in Order 10, rule 1(3)(b) and Order 81, rule 3(2)(b), an affidavit of service of any document must state by whom the document was served, the day of the week and date on which it was served, where it was served and how.', cite: 'O.65 r.8, Rules of the High Court (Cap. 4A)' },
              ],
              table: {
                headers: ['Point', 'Provision', 'What it actually provides'],
                rows: [
                  ['Modes of ordinary service', 'O.65 r.5(1)(a)-(d)', 'Leaving at the proper address; by post; at a numbered document-exchange box; or as the court directs'],
                  ['Proper address', 'O.65 r.5(2)(a)-(d)', 'The address for service; failing that, the solicitor\'s business address, an individual\'s usual or last known address, a firm\'s principal or last known place of business, or a body corporate\'s registered or principal office'],
                  ['Document exchange deeming', 'O.65 r.5(2A), r.5(4)', 'Deemed served on the business day following, unless the contrary is proved; business day means a day other than a general holiday'],
                  ['Service on a specified day or after 4 p.m.', 'O.65 r.7(1)-(3)', 'For documents other than originating process served under r.2 or r.5(1)(a): deemed served the next day that is not a specified day; the list omits the office-closed limb'],
                  ['Affidavit of service', 'O.65 r.8', 'By whom, day of the week and date, where, and how'],
                  ['When no service is required', 'O.65 r.9', 'Where the person is in default as to acknowledgement or has no address for service, and the document need not be served personally or under O.10 r.1(2)'],
                  ['Sunday service', 'O.65 r.10(1), (1A), (2)', 'No process served or executed on a Sunday except in urgency with leave; not applicable to service under the electronic technology rules; "process" defined widely'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG3', issue: 'computing-time', label: 'Computing time under O.3' },
              { session: 'LG3', issue: 'serving-the-writ', label: 'Serving the writ under O.10' },
              { session: 'LG3', issue: 'acknowledgement-of-service', label: 'Acknowledgement of service' },
            ],
          },

          {
            id: 'defective-service',
            title: 'Defective service and the Court\'s discretion',
            summary: 'What happens when service does not comply — O.2 r.1, the cases, and the two sides\' options.',
            triggers: {
              bullets: [
                'Service happened, but not in the manner the rules prescribe.',
                'The writ was left with a receptionist, a security guard or a colleague.',
                'The wrong officer of a company or firm was served.',
                'The writ was served out of the jurisdiction without leave having been obtained.',
                'The writ had expired, or its validity had not been validly extended, when it was served.',
                'The defendant plainly knew of the proceedings despite the irregularity.',
                'The plaintiff asks the Court to treat what was done as good service.',
                'The defendant wants the service set aside and is deciding what to file.',
              ],
              routes: [
                { when: 'The question is what a compliant service would have been', session: 'LG3', issue: 'serving-the-writ', label: 'Serving the writ under O.10' },
                { when: 'The defect is in which person was served', session: 'LG3', issue: 'serving-particular-parties', label: 'Serving particular kinds of party' },
                { when: 'The defect is the absence of leave to serve abroad', session: 'LG3', issue: 'service-out-of-jurisdiction', label: 'Service out of the jurisdiction' },
                { when: 'You are advising the defendant on the procedural route', session: 'LG3', issue: 'contesting-jurisdiction', label: 'Contesting jurisdiction — the O.12 r.8 application' },
                { when: 'The defendant has acknowledged and asks what that costs them', session: 'LG3', issue: 'acknowledgement-of-service', label: 'Acknowledgement of service — O.12 r.7 is not a waiver' },
                { when: 'The defective service has already produced a default judgment', session: 'LG6', issue: 'setting-aside-irregular', label: 'Setting aside an irregular judgment' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Service has gone wrong — now what?',
                steps: [
                  {
                    id: 'irregular',
                    label: 'Start from O.2 r.1: non-compliance is an irregularity, not a nullity',
                    detail: 'Where there has been a failure to comply with the requirements of the rules, the failure is treated as an IRREGULARITY and does not nullify the proceedings or any step taken in them. The Court may confirm the validity of service despite the non-compliance where it is fair and just to do so.',
                  },
                  {
                    id: 'plaintiff',
                    label: 'For the plaintiff: ask the Court to cure it',
                    points: [
                      'Even on non-compliance, the Court may exercise its O.2 r.1 powers to validate the service.',
                      'The Court does not tend to look favourably on declarations of irregularity where the irregularity was purely technical and no prejudice was caused.',
                      'Retrospective leave is available: where P served out of the jurisdiction without first obtaining leave, the Court may grant retrospective leave under O.2 r.1 to rectify the irregularity if good cause is shown (China Medical Technologies Inc v Paul Weiss).',
                    ],
                  },
                  {
                    id: 'defendant',
                    label: 'For the defendant: accept service and seek a declaration',
                    detail: 'D can accept service and seek a declaration of irregularity — the relief in O.12 r.8(1)(b) is an order declaring that the writ has not been duly served. But D must still give notice of intention to defend and apply within the time limited for serving a defence (see Contesting jurisdiction).',
                  },
                  {
                    id: 'cases',
                    label: 'Read the cases for where the line falls',
                    points: [
                      'Hong Kong and Shanghai Banking Corp Ltd v Ong Tong Sing — following substantial inter-partes correspondence, the writ was served by delivering a copy to D\'s office and leaving it with the receptionist, rather than personally on D.',
                      '3D Gold v PwC — a writ was served on the general counsel of a firm of accountants rather than on a partner. There had been a history of prior dealings; the court held D was clearly aware of the service and the nature of the claim, so the process server\'s error had caused no actual harm.',
                      'The common thread is prejudice: where D plainly knew of the proceedings and suffered no harm, technical non-compliance is unlikely to be fatal.',
                      'Contrast China Medical Technologies Inc v Bank of China (Hong Kong) Ltd, where the statutory route under s827 CO was not complied with at all — that is a failure of the method, not a technicality of execution.',
                    ],
                  },
                  {
                    id: 'cured',
                    label: 'And remember the rules cure some defects themselves',
                    points: [
                      'O.10 r.1(5) — a writ not duly served is deemed duly served on the date D acknowledges service, unless the contrary is shown.',
                      'O.12 r.7 — acknowledging service is NOT a waiver of any irregularity in the writ, in its service, or in an order giving leave to serve out or extending the writ\'s validity.',
                      'So an acknowledgement fixes the date without surrendering the objection — provided D then applies under O.12 r.8 in time.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'O.2 r.1 makes non-compliance an irregularity, not a nullity. An answer that says defective service is "void" is starting in the wrong place.',
                'Prejudice is the hinge. Where D knew of the proceedings and was not harmed, the court is unlikely to set service aside.',
                'A failure to use a permitted METHOD at all (as in China Medical Technologies under s827) is different from a flawed execution of a permitted method.',
                'O.10 r.1(5) and O.12 r.7 work together: the acknowledgement cures the date but preserves the objection. Do not treat filing an acknowledgement as giving up the point.',
                'Retrospective leave for service out is available under O.2 r.1 on good cause — so P is not necessarily undone by having served before obtaining leave.',
              ],
            },
            skills: {
              bullets: [
                'Identify precisely which requirement was not complied with, then ask whether it goes to the method or merely to its execution.',
                'Argue prejudice explicitly on both sides — it is what the cases turn on.',
                'For D, set out the procedural route (acknowledge, then apply under O.12 r.8 within the time for a defence) rather than just asserting the service was bad.',
                'For P, identify the curative provision you would rely on: O.2 r.1, retrospective leave, or O.10 r.1(5).',
              ],
            },
            mistakes: {
              bullets: [
                'Describing irregular service as a nullity.',
                'Advising D to ignore the writ because service was defective — that risks a default judgment, and the objection must be taken under O.12 r.8.',
                'Assuming any non-compliance can be cured, without addressing prejudice.',
                'Forgetting that D must still acknowledge service to contest jurisdiction.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'Where, in beginning or purporting to begin any proceedings or at any stage in the course of or in connection with any proceedings, there has, by reason of any thing done or left undone, been a failure to comply with the requirements of these rules, whether in respect of time, place, manner, form or content or in any other respect, the failure shall be treated as an irregularity and shall not nullify the proceedings, any step taken in the proceedings, or any document, judgment or order therein.', cite: 'O.2 r.1(1), Rules of the High Court (Cap. 4A)' },
              ],
              table: {
                headers: ['Point', 'Source', 'What it actually provides'],
                rows: [
                  ['Non-compliance is an irregularity', 'O.2 r.1', 'It does not nullify the proceedings or any step taken; the Court may validate where fair and just'],
                  ['Declaration that the writ was not duly served', 'O.12 r.8(1)(b)', 'One of the reliefs available to a defendant contesting jurisdiction'],
                  ['Leaving the writ with a receptionist', 'HSBC Ltd v Ong Tong Sing [2008] 3 HKLRD 444', 'Writ delivered to D\'s office and left with the receptionist after substantial inter-partes correspondence, rather than served personally'],
                  ['Serving the wrong officer of a firm', '3D Gold v PwC [2014] 4 HKC 528', 'Served on the general counsel rather than a partner; D was clearly aware of the service and the nature of the claim, so the error caused no actual harm'],
                  ['Retrospective leave for service out', 'China Medical Technologies Inc v Paul Weiss [2019] HKCFI 2631', 'Where P served out without leave, the Court may grant retrospective leave under O.2 r.1 if good cause is shown'],
                  ['Acknowledgement cures the date', 'O.10 r.1(5)', 'A writ not duly served is deemed duly served on the date of acknowledgement, unless the contrary is shown'],
                  ['Acknowledgement is not a waiver', 'O.12 r.7', 'It is not a waiver of any irregularity in the writ, its service, or an order giving leave to serve out or extending validity'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG3', issue: 'serving-the-writ', label: 'Serving the writ under O.10' },
              { session: 'LG3', issue: 'serving-particular-parties', label: 'Serving particular kinds of party' },
              { session: 'LG3', issue: 'contesting-jurisdiction', label: 'Contesting jurisdiction and forum non conveniens' },
              { session: 'LG3', issue: 'acknowledgement-of-service', label: 'Acknowledgement of service' },
            ],
          },
          {
            id: 'service-out-of-jurisdiction',
            title: 'Service out of the jurisdiction (O.11)',
            summary: 'Is a gateway in O.11 r.1 open, will the Court give leave, and by what method may the writ lawfully be served abroad?',
            triggers: {
              bullets: [
                'The defendant is abroad, or is a foreign company with no place of business here.',
                'A contract was made in Hong Kong or is governed by Hong Kong law, but the counterparty is overseas.',
                'A tort caused damage in Hong Kong but the tortfeasor is elsewhere.',
                'A foreign party needs to be joined to an action already on foot against a Hong Kong defendant.',
                'Service has to be effected in the Mainland or Macao.',
                'The destination is a Hague Convention country and the question is which channel to use.',
                'Local law at the place of service forbids service by a private person.',
                'Leave was granted and the question is what deadline the order set.',
                'The writ was served abroad without leave and the plaintiff wants to regularise it.',
              ],
              routes: [
                { when: 'The defendant is in fact within the jurisdiction', session: 'LG3', issue: 'serving-the-writ', label: 'Serving the writ under O.10' },
                { when: 'The foreign party is a company, firm or agent of a principal abroad', session: 'LG3', issue: 'serving-particular-parties', label: 'Serving particular kinds of party' },
                { when: 'No permitted foreign method will work', session: 'LG3', issue: 'substituted-service', label: 'Substituted service' },
                { when: 'The defendant wants the leave discharged or a stay', session: 'LG3', issue: 'contesting-jurisdiction', label: 'Contesting jurisdiction and forum non conveniens' },
                { when: 'You need the acknowledgement deadline the order fixed', session: 'LG3', issue: 'acknowledgement-of-service', label: 'Acknowledgement of service' },
                { when: 'Leave was never obtained', session: 'LG3', issue: 'defective-service', label: 'Defective service — retrospective leave under O.2 r.1' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Service out: gateway, leave, method',
                steps: [
                  {
                    id: 'leaveneeded',
                    label: 'Is leave needed at all?',
                    points: [
                      'The general rule is that leave is required: O.11 r.1(1) permits service out "with the leave of the Court".',
                      'O.11 r.1(2)(b) allows service out WITHOUT leave where each claim made by the writ is one which, by virtue of any written law, the Court of First Instance has power to hear and determine notwithstanding that the defendant is not within the jurisdiction, or that the wrongful act did not take place within it.',
                      'Where service out is under r.1(2), the time for acknowledging service inserted in the writ is limited in accordance with the practice adopted under r.4(4): O.11 r.1(3)(c).',
                      'O.11 r.1 does not apply at all to the admiralty and limitation writs listed in O.11 r.1(4)(a)-(c).',
                      'For an originating summons, notice of motion or petition, r.1 applies as it applies to a writ: O.11 r.9(1); but service out of an originating summons or summons under O.121 r.2 needs no leave: O.11 r.9(4A).',
                    ],
                  },
                  {
                    id: 'gateway',
                    label: 'Identify the gateway in O.11 r.1(1) — there are 17 of them',
                    points: [
                      'r.1(1)(a) — relief is sought against a person domiciled or ordinarily resident within the jurisdiction.',
                      'r.1(1)(c) — the claim is brought against a person duly served within or out of the jurisdiction, and a person out of the jurisdiction is a necessary or proper party to it.',
                      {
                        text: 'r.1(1)(d) — a claim to enforce, rescind, dissolve, annul or otherwise affect a contract, or for damages or other relief for its breach, where the contract falls into any one of four cases:',
                        points: [
                          '(i) was made within the jurisdiction.',
                          '(ii) was made by or through an agent trading or residing within the jurisdiction for a principal trading or residing out of it.',
                          '(iii) is by its terms or by implication governed by Hong Kong law.',
                          '(iv) contains a term that the Court of First Instance shall have jurisdiction.',
                        ],
                      },
                      'r.1(1)(e) — a claim in respect of a breach COMMITTED within the jurisdiction of a contract made within or out of it. This is a separate gateway from (d): read them together, because a contract made abroad but breached here comes in under (e), not (d).',
                      'r.1(1)(f) — the claim is founded on a tort AND the damage was sustained, or resulted from an act committed, within the jurisdiction.',
                      'r.1(1)(g) — the whole subject-matter of the action is land situate within the jurisdiction.',
                      'r.1(1)(i) — a claim for a debt secured on immovable property, or to assert, declare or determine proprietary or possessory rights or rights of security in or over movable property situate within the jurisdiction.',
                      'r.1(1)(b), (h), (j)-(p) cover injunctions, land instruments, trusts, estates, probate, enforcement of a judgment or arbitral award, Carriage by Air, mutual legal assistance, s52B(2) and s52A(2) costs, s21M interim relief, and constructive trust claims. Read the rule itself rather than relying on a summary.',
                    ],
                  },
                  {
                    id: 'test',
                    label: 'Apply the three-part test for leave',
                    points: [
                      '1. A GOOD ARGUABLE CASE that the claim falls within one or more of the O.11 r.1 gateways.',
                      '2. A SERIOUS ISSUE TO BE TRIED on the merits of the dispute itself.',
                      '3. FORUM CONVENIENS — Hong Kong is the most appropriate forum to try the case.',
                      'The statutory overlay: no leave shall be granted unless it is made sufficiently to appear to the Court that the case is a PROPER ONE for service out under this Order: O.11 r.4(2).',
                    ],
                  },
                  {
                    id: 'application',
                    label: 'Make the application: ex parte, on affidavit, with full and frank disclosure',
                    points: [
                      'Ex parte to a master, supported by an affidavit. Because it is ex parte, the duty of full and frank disclosure applies.',
                      {
                        text: 'O.11 r.4(1) prescribes what the affidavit must state — four matters, and the fourth applies only to a necessary-or-proper-party application:',
                        points: [
                          '(a) the grounds on which the application is made.',
                          '(b) that in the deponent\'s belief the plaintiff has a good cause of action.',
                          '(c) in what place the defendant is, or probably may be found.',
                          '(d) where the application is under r.1(1)(c), the grounds for the deponent\'s belief that there is between the plaintiff and the person already served a REAL ISSUE which the plaintiff may reasonably ask the Court to try.',
                        ],
                      },
                      'The order granting leave MUST limit a time within which the defendant to be served must acknowledge service: O.11 r.4(4). That is why the 14-day rule in O.12 r.5(a) does not apply to service out.',
                      'An order giving leave to serve an originating summons out must likewise limit a time for acknowledgement: O.11 r.9(6).',
                    ],
                  },
                  {
                    id: 'method',
                    label: 'Choose a method that is lawful in the place of service',
                    points: [
                      'O.11 r.5(1) applies O.10 r.1(1), (4), (5) and (6) and O.65 r.4 to service out — so personal service, the solicitor\'s indorsement route, deemed service by acknowledgement, and substituted service all remain available; only the accompanying acknowledgement form is modified.',
                      'O.11 r.5(3)(a) — a writ served out NEED NOT be served personally, so long as it is served in accordance with the law of the country or place where service is effected.',
                      'O.11 r.5(3)(b) — it need not be served by the plaintiff or the plaintiff\'s agent if served by a method provided by r.5A, r.6 or r.7.',
                      'The overriding limit: O.11 r.5(2) — nothing in r.5, r.5A or any order made under them authorises or requires the doing of anything in the place of service which is CONTRARY TO THE LAW of that country or place. Swiss and PRC law, for example, do not permit service of foreign process by a private person.',
                      'Service by post is not expressly listed as a method, but is possible if permitted by the law of the place of service, by contract (O.10 r.3), or under an order for substituted service.',
                    ],
                  },
                  {
                    id: 'mainland',
                    label: 'If service is in the Mainland or Macao: O.11 r.5A, and it is MANDATORY',
                    points: [
                      'O.11 r.5A(1) — the writ MUST be served through the judicial authorities of the Mainland or Macao. Note it covers Macao as well as the Mainland.',
                      '"Mainland" means any part of China other than Hong Kong, Macao and Taiwan: O.11 r.5A(7).',
                      'Lodge in the Registry a request for service together with 2 copies of the writ AND 2 additional copies for the person to be served: O.11 r.5A(2) — four copies in all.',
                      'The request must contain the full name and address of the person to be served, a description of the nature of the proceedings, and, if a particular method of service is desired, an indication of that method: O.11 r.5A(3)(a)-(c).',
                      'Every copy lodged must be in Chinese or accompanied by a Chinese translation: O.11 r.5A(4); every translation must be certified correct by the translator, and the certificate must state that person\'s full name, address and QUALIFICATIONS for making the translation: O.11 r.5A(5).',
                      'The Registrar sends the documents to the relevant judicial authorities with a request that they arrange service: O.11 r.5A(6).',
                      'The request must contain an undertaking to be personally responsible for all expenses incurred by the Registrar, to pay them to the Treasury and to produce a receipt to the Registrar: O.11 r.8A.',
                    ],
                  },
                  {
                    id: 'abroad',
                    label: 'Otherwise: service through governments, judicial authorities or consuls (O.11 r.6)',
                    points: [
                      {
                        text: 'Hague Convention country — O.11 r.6(2A)(a)-(b) gives two routes:',
                        points: [
                          '(a) through the authority designated under the Convention for that country.',
                          '(b) if that country\'s law permits, through its judicial authorities or a British consular authority.',
                        ],
                      },
                      {
                        text: 'Country with some other Civil Procedure Convention — O.11 r.6(2)(a)-(b):',
                        points: [
                          '(a) through the judicial authorities of that country.',
                          '(b) through a British consular authority, subject to any nationality restriction in the convention.',
                        ],
                      },
                      {
                        text: 'No convention at all — O.11 r.6(3)(a)-(b):',
                        points: [
                          '(a) through the government of that country, where it is willing to effect service.',
                          '(b) through a British consular authority, except where that is contrary to local law.',
                        ],
                      },
                      'O.11 r.6 does not apply to service in the UK, the Channel Islands, the Isle of Man, any independent Commonwealth country, British protectorate or colony, or the Republic of Ireland, unless service is pursuant to r.6(2A): O.11 r.6(1)(a)-(e).',
                      'Procedure: lodge a request in the Registry with a copy of the writ and an additional copy for each person to be served (O.11 r.6(4)); a translation into the official language of the place of service is required unless that language is or includes English (O.11 r.6(5)), certified correct with the translator\'s name, address and qualification (O.11 r.6(6)); the Registrar sends the documents to the Chief Secretary for Administration (O.11 r.6(7)).',
                      'The request must contain the undertaking to be personally responsible for the Chief Secretary\'s expenses: O.11 r.8.',
                      'A foreign State is served under O.11 r.7, through the Chief Secretary for Administration.',
                    ],
                  },
                  {
                    id: 'proof',
                    label: 'Prove the service',
                    points: [
                      'An official certificate that a writ to which r.5A or r.6 has been complied with was served personally, or in accordance with the law of the place of service, on a specified date, is EVIDENCE of the facts stated: O.11 r.5(5).',
                      'The certificate must be by a British consular authority in that place, by the government or judicial authorities of that place, or by any other authority designated for that place under the Hague Convention: O.11 r.5(5)(a)-(c).',
                      'An official certificate by the Chief Secretary for Administration that a writ was duly served on a specified date under a r.7 request is evidence of that fact: O.11 r.5(6).',
                      'A document purporting to be such a certificate is deemed to be one until the contrary is proved: O.11 r.5(7).',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The three-part test is not in the rule. O.11 r.4(1)-(2) prescribes the affidavit contents and the "proper case" requirement; good arguable case / serious issue to be tried / forum conveniens is the case-law gloss. Cite both.',
                'r.4(1)(d) is easy to miss: a r.1(1)(c) "necessary or proper party" application needs an extra limb in the affidavit, about a REAL ISSUE between the plaintiff and the person already served.',
                'O.11 r.5A is not confined to the Mainland — it governs Macao too, and the slides\' shorthand "service in the Mainland" understates it.',
                'Because r.5A(1) says the writ MUST be served through the judicial authorities, the Hague Art 10(a) postal route is not open for the Mainland in any event. China (including Hong Kong and Macau) has objected to Art 10(a); so have Japan, India, South Korea, Mexico, Russia and Turkey. The USA, UK, Australia, Canada, France, Germany, Italy and Switzerland permit it.',
                'The deadline for acknowledging service is whatever the order says (O.11 r.4(4)), NOT 14 days. Read the order before calculating anything.',
                'Leave under O.11 does not decide forum. A defendant can still contest jurisdiction or apply for a stay under O.12 r.8 once served.',
                'Serving out without leave where leave was needed is an irregularity, not a nullity — retrospective leave under O.2 r.1 is available on good cause shown (China Medical Technologies Inc v Paul Weiss).',
              ],
            },
            skills: {
              bullets: [
                'Name the gateway by its sub-sub-paragraph — "O.11 r.1(1)(d)(iii), a contract governed by Hong Kong law" — not merely "O.11".',
                'Take the three limbs of the leave test in order, and deal with forum conveniens positively (why Hong Kong IS appropriate), since it is the limb most often lost.',
                'Work through the affidavit contents in r.4(1)(a)-(d) as a checklist and say who would swear it.',
                'Before proposing a method, ask what the law of the place of service permits — that is the r.5(2) question, and it is where marks are won.',
                'For a Mainland or Macao defendant, set out the r.5A mechanics concretely: four copies, the certified Chinese translation with the translator\'s qualifications, and the r.8A expenses undertaking.',
              ],
            },
            skeleton: {
              table: {
                headers: ['Where the defendant is', 'Route', 'Provision'],
                rows: [
                  ['The Mainland or Macao', 'MUST go through the judicial authorities, via a Registry request — no private service, no Hague postal route', 'O.11 r.5A(1)-(6); r.8A'],
                  ['A Hague Convention country', 'The designated authority; or, if local law permits, that country\'s judicial authorities or a British consular authority', 'O.11 r.6(2A)(a)-(b)'],
                  ['A country with another Civil Procedure Convention', 'Its judicial authorities, or a British consular authority subject to convention nationality limits', 'O.11 r.6(2)(a)-(b)'],
                  ['A country with no convention', 'Its government if willing, or a British consular authority unless contrary to local law', 'O.11 r.6(3)(a)-(b)'],
                  ['The UK, Ireland, a Commonwealth country, protectorate or colony', 'O.11 r.6 does not apply at all, save under r.6(2A)', 'O.11 r.6(1)(a)-(e)'],
                  ['A foreign State', 'Through the Chief Secretary for Administration on a Registry request', 'O.11 r.7'],
                  ['Anywhere — where local law permits it', 'Personal service, the solicitor\'s indorsement, deemed service by acknowledgement, or substituted service all remain available', 'O.11 r.5(1), (3); O.10 r.1(1), (4), (5), (6); O.65 r.4'],
                  ['Anywhere — the overriding limit', 'Nothing may be done in the place of service that is contrary to that place\'s law', 'O.11 r.5(2)'],
                ],
              },
            },
            mistakes: {
              bullets: [
                'Assuming that because the defendant is abroad, leave is automatic — the Court must be satisfied the case is a proper one: O.11 r.4(2).',
                'Applying the 14-day acknowledgement period to a defendant served out of the jurisdiction.',
                'Treating "the contract was breached in Hong Kong" as gateway (d) when it is gateway (e).',
                'Serving personally abroad by a private process server without checking whether that is lawful where service is effected.',
                'Using the Hague Central Authority route for a Mainland defendant when O.11 r.5A prescribes a mandatory route through the Registrar.',
                'Forgetting the expenses undertaking (O.11 r.8 / r.8A) in the request lodged at the Registry.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'Nothing in this rule, rule 5A or any order or direction of the Court made by virtue of it shall authorize or require the doing of anything in a country or place in which service is to be effected which is contrary to the law of that country or place.', cite: 'O.11 r.5(2), Rules of the High Court (Cap. 4A)' },
                { text: 'Where in accordance with these rules, a writ is to be served on a person in the Mainland or Macao, the writ must be served through the judicial authorities of the Mainland or Macao, as the case may be.', cite: 'O.11 r.5A(1), Rules of the High Court (Cap. 4A)' },
                { text: 'An order granting under rule 1 leave to serve a writ out of the jurisdiction must limit a time within which the defendant to be served must acknowledge service.', cite: 'O.11 r.4(4), Rules of the High Court (Cap. 4A)' },
              ],
              table: {
                headers: ['Point', 'Provision', 'What it actually provides'],
                rows: [
                  ['Leave is the general rule', 'O.11 r.1(1)', 'Service out is permissible WITH the leave of the Court if the action falls within one of the listed gateways'],
                  ['Service out without leave', 'O.11 r.1(2)(b)', 'Where each claim is one the Court of First Instance may hear notwithstanding that D is not within the jurisdiction or the act did not occur here'],
                  ['Time for AS where no leave needed', 'O.11 r.1(3)(c)', 'Limited in accordance with the practice adopted under r.4(4)'],
                  ['Domicile or residence gateway', 'O.11 r.1(1)(a)', 'Relief sought against a person domiciled or ordinarily resident within the jurisdiction'],
                  ['Necessary or proper party', 'O.11 r.1(1)(c)', 'Claim against a person duly served within or out of the jurisdiction, and a person out of it is a necessary or proper party'],
                  ['Contract gateway', 'O.11 r.1(1)(d)(i)-(iv)', 'Contract made within the jurisdiction; or made by or through an agent trading or residing here for a principal abroad; or governed by Hong Kong law by its terms or by implication; or containing a Court of First Instance jurisdiction term'],
                  ['Breach gateway', 'O.11 r.1(1)(e)', 'Breach committed within the jurisdiction of a contract made within OR out of it — irrespective of an accompanying breach abroad'],
                  ['Tort gateway', 'O.11 r.1(1)(f)', 'Claim founded on a tort where the damage was sustained, or resulted from an act committed, within the jurisdiction'],
                  ['Land gateway', 'O.11 r.1(1)(g)', 'The whole subject-matter of the action is land situate within the jurisdiction'],
                  ['Security and movables', 'O.11 r.1(1)(i)', 'Debt secured on immovable property, or proprietary, possessory or security rights in or over movable property situate within the jurisdiction'],
                  ['Rule disapplied', 'O.11 r.1(4)(a)-(c)', 'Collision, limitation and Merchant Shipping (Oil Pollution) writs are outside O.11 r.1'],
                  ['Affidavit contents', 'O.11 r.4(1)(a)-(d)', 'Grounds; deponent\'s belief in a good cause of action; where D is or may probably be found; and for r.1(1)(c), the grounds for believing there is a real issue the Court may reasonably be asked to try'],
                  ['Proper case requirement', 'O.11 r.4(2)', 'No leave unless it appears sufficiently that the case is a proper one for service out under this Order'],
                  ['Order must fix the AS deadline', 'O.11 r.4(4)', 'The order granting leave must limit a time within which D must acknowledge service'],
                  ['Methods preserved for service out', 'O.11 r.5(1)', 'Applies O.10 r.1(1), (4), (5), (6) and O.65 r.4, with the acknowledgement form modified as appropriate'],
                  ['Local law is the limit', 'O.11 r.5(2)', 'Nothing in r.5 or r.5A authorises anything contrary to the law of the place of service'],
                  ['No personal service required abroad', 'O.11 r.5(3)(a)-(b)', 'Need not be served personally if served in accordance with local law; need not be served by P or P\'s agent if served under r.5A, r.6 or r.7'],
                  ['Official certificate as proof', 'O.11 r.5(5)(a)-(c)', 'A certificate by a British consular authority, the local government or judicial authorities, or a Hague designated authority is evidence of the facts stated'],
                  ['Chief Secretary\'s certificate', 'O.11 r.5(6)-(7)', 'Evidence of service under a r.7 request; a document purporting to be such a certificate is deemed one until the contrary is proved'],
                  ['Hague Convention defined', 'O.11 r.5(8)', 'The Convention on the service abroad of judicial and extra-judicial documents in civil or commercial matters, signed at The Hague on 15 November 1965'],
                  ['Mainland and Macao: mandatory route', 'O.11 r.5A(1), (7)', 'Must be served through the judicial authorities; "Mainland" means any part of China other than Hong Kong, Macao and Taiwan'],
                  ['Mainland and Macao: the lodgment', 'O.11 r.5A(2)-(6)', '2 copies plus 2 additional copies for the person served; request stating name and address, nature of proceedings and any desired method; Chinese or certified Chinese translation stating the translator\'s name, address and qualifications; Registrar forwards to the judicial authorities'],
                  ['Hague country', 'O.11 r.6(2A)(a)-(b)', 'Through the designated authority, or if local law permits through that country\'s judicial authorities or a British consular authority'],
                  ['Other convention country', 'O.11 r.6(2)(a)-(b)', 'Through the judicial authorities, or through a British consular authority subject to convention nationality limits'],
                  ['No convention', 'O.11 r.6(3)(a)-(b)', 'Through the government of that country if willing, or a British consular authority unless contrary to local law'],
                  ['Rule 6 disapplied', 'O.11 r.6(1)(a)-(e)', 'Does not apply to the UK, Channel Islands, Isle of Man, independent Commonwealth countries, British protectorates or colonies, or the Republic of Ireland, save under r.6(2A)'],
                  ['Rule 6 procedure', 'O.11 r.6(4)-(7)', 'Request plus a copy and an additional copy per person served; translation into the local official language unless English; certified with the translator\'s name, address and qualification; Registrar sends to the Chief Secretary for Administration'],
                  ['Expenses undertakings', 'O.11 r.8 and r.8A', 'r.8 for requests under r.6(4), r.7 or r.7A (Chief Secretary\'s expenses); r.8A for requests under r.5A (Registrar\'s expenses)'],
                  ['Originating summonses', 'O.11 r.9(1), (4A), (6)', 'r.1 applies to an originating summons, notice of motion or petition; no leave for an originating summons or O.121 r.2 summons; an order giving leave must limit a time for acknowledgement'],
                  ['Serving out without leave', 'China Medical Technologies Inc v Paul Weiss [2019] HKCFI 2631', 'The Court may grant retrospective leave under O.2 r.1 where good cause is shown'],
                ],
              },
            },
            notes: [
              {
                heading: 'Hague Convention Article 10(a): postal service',
                bullets: [
                  'The Convention\'s primary route is the Central Authority in the destination country (O.11 r.6(2A)), whose certificate then proves service under O.11 r.5(5).',
                  'Article 10(a) permits service by post, but only where the destination State has not objected. Per the lecture slides: permitted in the USA, the UK, Australia, Canada, France, Germany, Italy and Switzerland; NOT permitted in China (including Hong Kong and Macau), Japan, India, South Korea, Mexico, Russia and Turkey.',
                  'Even where Art 10(a) is open, O.11 r.5(2) still applies: the method must not be contrary to the law of the place of service.',
                  'For the Mainland and Macao the question does not arise — O.11 r.5A(1) makes the judicial-authority route mandatory.',
                ],
              },
            ],
            crossRefs: [
              { session: 'LG3', issue: 'serving-the-writ', label: 'Serving the writ under O.10' },
              { session: 'LG3', issue: 'serving-particular-parties', label: 'Serving particular kinds of party' },
              { session: 'LG3', issue: 'substituted-service', label: 'Substituted service' },
              { session: 'LG3', issue: 'acknowledgement-of-service', label: 'Acknowledgement of service' },
              { session: 'LG3', issue: 'contesting-jurisdiction', label: 'Contesting jurisdiction and forum non conveniens' },
              { session: 'LG3', issue: 'computing-time', label: 'Computing time under O.3' },
            ],
          },

          {
            id: 'acknowledgement-of-service',
            title: 'Acknowledgement of service (O.12)',
            summary: 'Who may acknowledge, on what form, to what address, by when — and what filing it does and does not commit the defendant to.',
            triggers: {
              bullets: [
                'A writ has been served and the question is what the defendant must do next, and by when.',
                'The defendant is a company and wants a director rather than a solicitor to act.',
                'The acknowledgement was filed late, or after judgment.',
                'The defendant has been named in a writ that has never been served.',
                'The address for service given in the acknowledgement is not genuine, or is missing.',
                'The acknowledgement was posted on the last day but reached the Registry later.',
                'The defendant was served abroad, or under an order for substituted service.',
                'The defendant wants to take some other step in the action before acknowledging.',
                'The proceedings were begun by originating summons rather than writ.',
              ],
              routes: [
                { when: 'You still need the date of service the deadline runs from', session: 'LG3', issue: 'serving-the-writ', label: 'Serving the writ under O.10' },
                { when: 'The 14 days need computing against a Registry closure', session: 'LG3', issue: 'computing-time', label: 'Computing time under O.3' },
                { when: 'The defendant wants to challenge jurisdiction or seek a stay', session: 'LG3', issue: 'contesting-jurisdiction', label: 'Contesting jurisdiction and forum non conveniens' },
                { when: 'The defendant was served abroad', session: 'LG3', issue: 'service-out-of-jurisdiction', label: 'Service out of the jurisdiction — the order sets the time' },
                { when: 'There was an irregularity in the writ or its service', session: 'LG3', issue: 'defective-service', label: 'Defective service and the Court\'s discretion' },
                { when: 'The next question is the defence deadline', session: 'LG4', issue: 'pleadings-timetable', label: 'The pleadings timetable and close of pleadings' },
                { when: 'The time has run out and no acknowledgement was ever filed', session: 'LG6', issue: 'default-notice-of-intention', label: 'Default judgment for failure to give notice of intention to defend (O.13)' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Working through an acknowledgement of service',
                steps: [
                  {
                    id: 'who',
                    label: 'Who may acknowledge?',
                    points: [
                      'A natural person: by a solicitor or in person: O.12 r.1(1).',
                      'A body corporate: by a solicitor, OR by a person duly authorised to act on its behalf — but that authorised person may take NO FURTHER STEP in the action, unless leave is given under r.1(2A) for the company to be represented by one of its directors: O.12 r.1(2).',
                      {
                        text: 'The r.1(2A) application to let a director represent the company is ex parte to a Registrar, and has two components — O.12 r.1(2A)(a)-(b):',
                        points: [
                          '(a) an affidavit made by the director and filed with the application, stating and verifying the reasons why leave should be given.',
                          '(b) the board resolution authorising the director to appear, exhibited to that affidavit.',
                        ],
                      },
                      'No appeal lies from the Registrar\'s order giving or refusing leave (r.1(2B)); the Court may revoke leave at any time (r.1(2C)); and no appeal lies from a revocation (r.1(2D)).',
                      'A person under disability acts through a next friend or guardian ad litem: O.80 r.2.',
                      'Where two or more defendants acknowledge by the same solicitor at the same time, only one acknowledgement need be completed: O.12 r.1(4).',
                    ],
                  },
                  {
                    id: 'form',
                    label: 'Get the form and its contents right',
                    points: [
                      'Form No. 14 (writ), No. 15 (originating summons) or No. 15A, whichever is appropriate: O.12 r.3(1) — and O.10 r.5(1) for the originating-summons forms.',
                      'It must be signed by the solicitor acting, or by the defendant if acting in person (except in the r.1(2) authorised-person case): O.12 r.3(1).',
                      'It must indicate whether the defendant intends to contest the proceedings.',
                      'Address for service: if in person, the address of the defendant\'s place of residence and, if that is outside the jurisdiction or there is none, an address WITHIN the jurisdiction at or to which documents may be delivered or sent: O.12 r.3(2)(a). For a body corporate, "place of residence" means its registered or principal office.',
                      'If by a solicitor, the solicitor\'s business address within the jurisdiction, to which a numbered document-exchange box may be added: O.12 r.3(2)(b). That business address is then the address for service.',
                      'Where the acknowledging solicitor acts as agent for another solicitor with a place of business within the jurisdiction, the acknowledgement must say so and give that other solicitor\'s name and address: O.12 r.3(3).',
                    ],
                  },
                  {
                    id: 'when',
                    label: 'Calculate the deadline',
                    points: [
                      'Within the jurisdiction: 14 days after service of the writ, INCLUDING the day of service: O.12 r.5(a). So a writ served on day 1 gives a deadline of service date + 13.',
                      'Contrast O.3 r.2(2), under which a period after a specified act ordinarily begins the day after — r.5(a) displaces that expressly.',
                      'Out of the jurisdiction: the time limited under O.10 r.2(2), O.11 r.1(3) or O.11 r.4(4) — i.e. whatever the order or the writ specifies — or that time as extended: O.12 r.5(b).',
                      'Substituted service: the order may modify the period, so read the order.',
                      'For an originating summons, the word "or abridged" is read into r.5(a), and the r.5(b) reference becomes O.11 r.9(6): O.12 r.9(3).',
                      'Do the O.3 r.4 check on the last day: if it ends on a day the Registry is closed, the act is in time if done on the next open day.',
                    ],
                  },
                  {
                    id: 'file',
                    label: 'File it — and note the date that counts',
                    points: [
                      'Acknowledge by properly completing the acknowledgement and handing it in at, or sending it by post to, the Registry: O.12 r.1(3). It is filed with the Registry; service on the plaintiff is not required.',
                      'The date on which service is acknowledged is the date the acknowledgement is RECEIVED at the Registry: O.12 r.1(5) — not the date it was signed or posted.',
                      'On receipt the Registry officer stamps it with the date received, enters it in the cause book with a note of any indicated intention to contest or to apply for a stay of execution, and posts a date-stamped copy to the plaintiff at the plaintiff\'s address for service: O.12 r.4(a)-(c).',
                    ],
                  },
                  {
                    id: 'late',
                    label: 'If it is late, or after judgment',
                    points: [
                      'A defendant may not give notice of intention to defend AFTER judgment has been obtained, except with the leave of the Court: O.12 r.6(1).',
                      'Otherwise nothing precludes acknowledging out of time — but a late acknowledgement does not buy more time: the defendant is not entitled, unless the Court otherwise orders, to serve a defence or do any other act later than if the acknowledgement had been in time: O.12 r.6(2).',
                      'Practical consequence: the risk of a late acknowledgement is not the acknowledgement itself but the default judgment that may be entered in the meantime.',
                    ],
                  },
                  {
                    id: 'effect',
                    label: 'Understand what filing does and does not do',
                    points: [
                      'It is NOT a waiver of any irregularity in the writ, in its service, or in an order giving leave to serve out or extending the writ\'s validity: O.12 r.7.',
                      'But unless the defendant makes an application under O.12 r.8(1) or (2), the acknowledgement IS treated as a submission to the jurisdiction, unless withdrawn by leave under O.21 r.1: O.12 r.8(7).',
                      'A writ not duly served but acknowledged is deemed duly served, on the date of acknowledgement, unless the contrary is shown: O.10 r.1(5), subject to O.12 r.7.',
                      'An acknowledgement of service is treated as the entry of an appearance for the purposes of any enactment or rule of law referring to entering an appearance: O.12 r.10.',
                      'Before taking any step in the action — save, perhaps, an admission under O.13A — the defendant must first file an acknowledgement.',
                    ],
                  },
                  {
                    id: 'address',
                    label: 'If the address for service is missing or not genuine',
                    detail: 'On the plaintiff\'s application the Court may set aside the acknowledgement, or order the defendant to give an address (or a genuine one), and may in any case direct that the acknowledgement shall nevertheless have effect for the purposes of O.10 r.1(5) and O.65 r.9: O.12 r.3(4).',
                  },
                  {
                    id: 'notserved',
                    label: 'If the defendant is named but never served: O.12 r.8A',
                    points: [
                      'A person named as a defendant in a writ not served on them may serve on the plaintiff a notice requiring the plaintiff, within a specified period of NOT LESS THAN 14 days after service of the notice, either to serve the writ or to discontinue the action against them: O.12 r.8A(1).',
                      'If the plaintiff fails to comply in time, the Court may on the defendant\'s application by summons dismiss the action or make such other order as it thinks fit: O.12 r.8A(2).',
                      'The summons must be supported by an affidavit verifying the facts and stating that the defendant intends to contest the proceedings; a copy must be served with the summons: O.12 r.8A(3).',
                      'If the plaintiff then serves the writ, the defendant must acknowledge service within the time limited for doing so: O.12 r.8A(4).',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The 14 days INCLUDE the day of service (O.12 r.5(a)). This is the exception to the O.3 r.2(2) "day after" rule and it is the single most-tested point in this topic.',
                'The operative date is receipt at the Registry (O.12 r.1(5)), so posting on the last day is not enough.',
                'A company may acknowledge through an authorised person, but that person can then take no further step — a solicitor (or r.1(2A) leave for a director) is needed for anything after the acknowledgement.',
                'The r.1(2A) affidavit must exhibit the BOARD RESOLUTION authorising the director to appear. Without it the application is incomplete.',
                'Service out of the jurisdiction has no 14-day rule: the time is whatever the order fixed under O.11 r.4(4) (or the writ under O.11 r.1(3)).',
                'Filing an acknowledgement is not, by itself, a submission to jurisdiction — but it becomes one unless an O.12 r.8 application follows within the time for serving a defence.',
                'A late acknowledgement does not extend the time for the defence: O.12 r.6(2).',
              ],
            },
            skills: {
              bullets: [
                'Show the date arithmetic explicitly, marking the day of service as day 1, and then apply the O.3 r.4 Registry-closure check.',
                'State which Form number applies and why — 14 for a writ, 15 or 15A for an originating summons.',
                'When advising a corporate defendant, deal with representation as a separate question from acknowledgement: who may sign it, and who may act afterwards.',
                'Always pair the acknowledgement advice with the next deadline (the defence), because O.12 r.6(2) and O.12 r.8 both key off it.',
                'If the facts disclose any irregularity in service, say in the same breath that acknowledging does not waive it (O.12 r.7) but that an O.12 r.8 application is still required.',
              ],
            },
            skeleton: {
              table: {
                headers: ['The question', 'The answer', 'Provision'],
                rows: [
                  ['How long, served within the jurisdiction?', '14 days after service, INCLUDING the day of service', 'O.12 r.5(a)'],
                  ['How long, served out of the jurisdiction?', 'Whatever time the order or the writ fixed — there is no 14-day default', 'O.12 r.5(b); O.11 r.4(4); O.11 r.1(3)'],
                  ['How long, under an order for substituted service?', 'As modified by that order — read it', 'O.65 r.4(3); O.12 r.5(a)'],
                  ['What date counts as the date of acknowledgement?', 'The date the acknowledgement is received at the Registry', 'O.12 r.1(5)'],
                  ['Which form?', 'No. 14 for a writ; No. 15 or 15A for an originating summons', 'O.12 r.3(1); O.10 r.5(1)'],
                  ['Whose address for service?', 'D\'s residence (or a Hong Kong address) if in person; the solicitor\'s business address if by solicitor', 'O.12 r.3(2)(a)-(b)'],
                  ['Can a company acknowledge without a solicitor?', 'Yes, by a duly authorised person — but that person may take no further step without r.1(2A) leave', 'O.12 r.1(2), (2A)'],
                  ['What if it is late?', 'Permitted, but it buys no extra time for the defence; and none at all after judgment without leave', 'O.12 r.6(1)-(2)'],
                  ['Does filing waive a defect in service?', 'No — but it becomes a submission to jurisdiction unless an O.12 r.8 application follows in time', 'O.12 r.7; O.12 r.8(7)'],
                ],
              },
            },
            mistakes: {
              bullets: [
                'Counting the 14 days from the day AFTER service.',
                'Treating the date of posting or signature as the date of acknowledgement.',
                'Advising a defendant with a defective service point to sit on their hands rather than acknowledge — that invites a default judgment.',
                'Assuming the 14-day period applies to a defendant served abroad.',
                'Giving an address for service outside the jurisdiction where the defendant acknowledges in person.',
                'Letting a company\'s authorised non-solicitor representative take further steps in the action without r.1(2A) leave.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'in the case of a writ served within the jurisdiction, to fourteen days after service of the writ (including the day of service) or, where that time has been extended by or by virtue of these rules, to that time as so extended; and', cite: 'O.12 r.5(a), Rules of the High Court (Cap. 4A)' },
                { text: 'The date on which service is acknowledged is the date on which the acknowledgment of service is received at the Registry.', cite: 'O.12 r.1(5), Rules of the High Court (Cap. 4A)' },
                { text: 'The acknowledgment by a defendant of service of a writ shall not be treated as a waiver by him of any irregularity in the writ or service thereof or in any order giving leave to serve the writ or extending the validity of the writ for the purpose of service.', cite: 'O.12 r.7, Rules of the High Court (Cap. 4A)' },
              ],
              table: {
                headers: ['Point', 'Provision', 'What it actually provides'],
                rows: [
                  ['Individual defendant', 'O.12 r.1(1)', 'May acknowledge and defend by a solicitor or in person, whether or not sued in a representative capacity'],
                  ['Corporate defendant', 'O.12 r.1(2)', 'May acknowledge by a solicitor or by a duly authorised person, but may take no further step except by a solicitor unless leave is given under r.1(2A)'],
                  ['Leave for a director to represent', 'O.12 r.1(2A)(a)-(b)', 'Ex parte to a Registrar, on the director\'s own affidavit stating and verifying the reasons, with the authorising board resolution exhibited'],
                  ['Appeal and revocation', 'O.12 r.1(2B)-(2D)', 'No appeal from the Registrar\'s grant or refusal; the Court may revoke at any time; no appeal from the revocation'],
                  ['How to acknowledge', 'O.12 r.1(3)', 'By properly completing the acknowledgement and handing it in at, or sending it by post to, the Registry'],
                  ['Co-defendants', 'O.12 r.1(4)', 'One acknowledgement suffices where two or more acknowledge by the same solicitor at the same time'],
                  ['The operative date', 'O.12 r.1(5)', 'The date the acknowledgement is received at the Registry'],
                  ['Form and signature', 'O.12 r.3(1)', 'Form No. 14, 15 or 15A as appropriate, signed by the solicitor acting or by D in person'],
                  ['Address for service', 'O.12 r.3(2)(a)-(b)', 'In person: place of residence, or an address within the jurisdiction if there is none here; by solicitor: the solicitor\'s business address within the jurisdiction. For a body corporate, "place of residence" means its registered or principal office'],
                  ['Agent solicitors', 'O.12 r.3(3)', 'Must state that the solicitor acts as agent and give the principal solicitor\'s name and address'],
                  ['No or false address', 'O.12 r.3(4)', 'The Court may set aside the acknowledgement or order a genuine address, and may direct that it still has effect for O.10 r.1(5) and O.65 r.9'],
                  ['Registry procedure', 'O.12 r.4(a)-(c)', 'Date stamp; entry in the cause book noting any indicated intention to contest or to seek a stay of execution; a stamped copy posted to P'],
                  ['Time, within the jurisdiction', 'O.12 r.5(a)', '14 days after service INCLUDING the day of service, or as extended'],
                  ['Time, out of the jurisdiction', 'O.12 r.5(b)', 'The time limited under O.10 r.2(2), O.11 r.1(3) or O.11 r.4(4), or as extended'],
                  ['After judgment', 'O.12 r.6(1)', 'No notice of intention to defend after judgment except with leave'],
                  ['Late acknowledgement', 'O.12 r.6(2)', 'Permitted, but D gains no extra time for the defence or any other act unless the Court otherwise orders'],
                  ['Not a waiver', 'O.12 r.7', 'No waiver of irregularity in the writ, its service, leave to serve out, or an extension of validity'],
                  ['But a submission unless r.8 used', 'O.12 r.8(7)', 'Except where D applies under r.8(1) or (2), the acknowledgement is treated as a submission to the jurisdiction, unless withdrawn by leave under O.21 r.1'],
                  ['Deemed due service', 'O.10 r.1(5)', 'A writ not duly served but acknowledged is deemed duly served on the date of acknowledgement, unless the contrary is shown — subject to O.12 r.7'],
                  ['Writ never served', 'O.12 r.8A(1)-(4)', 'D may require P, on not less than 14 days\' notice, to serve or discontinue; on default the Court may dismiss on D\'s summons supported by an affidavit stating D intends to contest; if P then serves, D must acknowledge in the usual time'],
                  ['Originating summonses', 'O.12 r.9(1), (3)', 'D must acknowledge as if it were a writ; r.5(a) reads "extended or abridged" and the r.5(b) reference becomes O.11 r.9(6)'],
                  ['Equivalent to appearance', 'O.12 r.10', 'An acknowledgement is treated as the entry of an appearance for any enactment or rule of law referring to entering an appearance'],
                  ['Persons under disability', 'O.80 r.2', 'Must acknowledge through a next friend or guardian ad litem'],
                ],
              },
            },
            notes: [
              {
                heading: 'Exercise 1 (Arthur v Bill): what to work through',
                bullets: [
                  'The materials pose this exercise but do not supply a model answer, so treat what follows as the route to the answer rather than the answer itself.',
                  '(a) The writ was issued on 12 June 2026 and sent by registered post to Bill\'s last known address the same day. Identify the method (O.10 r.1(2)(a) postal service), then the deemed date of service (O.10 r.1(3): the seventh day after posting, unless the contrary is shown), then count 14 days from that date INCLUDING it (O.12 r.5(a)), then apply the O.3 r.4 Registry-closure check to the last day.',
                  '(b) If Bill was in Tokyo from 11 to 21 June and collected the writ on 22 June, the question is whether the deemed date under O.10 r.1(3) is displaced by the "unless the contrary is shown" proviso. The lecture slide points to Barclays Bank of Swaziland Ltd v Hahn on this.',
                  'The exercise also asks what FURTHER INFORMATION would be needed — so identify the gaps: was the address in fact Bill\'s last known address, was the letter returned undelivered, and what does the affirmation of service say.',
                  'Note the separate point that the Statement of Claim was served on 24 June: the acknowledgement deadline runs from service of the WRIT, not from the statement of claim.',
                ],
              },
            ],
            crossRefs: [
              { session: 'LG3', issue: 'computing-time', label: 'Computing time under O.3' },
              { session: 'LG3', issue: 'serving-the-writ', label: 'Serving the writ under O.10' },
              { session: 'LG3', issue: 'contesting-jurisdiction', label: 'Contesting jurisdiction and forum non conveniens' },
              { session: 'LG3', issue: 'defective-service', label: 'Defective service and the Court\'s discretion' },
              { session: 'LG3', issue: 'service-out-of-jurisdiction', label: 'Service out of the jurisdiction' },
            ],
          },

          {
            id: 'contesting-jurisdiction',
            title: 'Contesting jurisdiction and forum non conveniens (O.12 r.8)',
            summary: 'The two limbs of O.12 r.8, the procedure that preserves the objection, the Spiliada test, jurisdiction clauses and a stay for arbitration.',
            triggers: {
              bullets: [
                'The defendant says the writ or its service was irregular, or that leave to serve out should never have been granted.',
                'The defendant says another forum is clearly more appropriate.',
                'The contract contains an exclusive or non-exclusive jurisdiction clause naming another court.',
                'The same dispute is already being litigated abroad.',
                'The contract contains an arbitration agreement.',
                'An order extending the validity of the writ is said to have been wrongly made.',
                'The defendant has filed an acknowledgement and the defence deadline is approaching.',
                'The defendant took a step in the action and the plaintiff says it has submitted.',
                'The defendant\'s property in Hong Kong has been seized or frozen.',
              ],
              routes: [
                { when: 'The complaint is purely about how service was carried out', session: 'LG3', issue: 'defective-service', label: 'Defective service and the Court\'s discretion' },
                { when: 'The complaint is that no O.11 r.1 gateway was open', session: 'LG3', issue: 'service-out-of-jurisdiction', label: 'Service out of the jurisdiction' },
                { when: 'You need the deadline the application must be made by', session: 'LG4', issue: 'pleadings-timetable', label: 'The pleadings timetable (the time for serving a defence)' },
                { when: 'The question is the effect of filing the acknowledgement', session: 'LG3', issue: 'acknowledgement-of-service', label: 'Acknowledgement of service' },
                { when: 'The application failed and a defence is now due', session: 'LG4', issue: 'defence-counterclaim-and-reply', label: 'Defence, counterclaim and reply' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Contesting jurisdiction, step by step',
                steps: [
                  {
                    id: 'limb',
                    label: 'Which limb of O.12 r.8 is this?',
                    points: [
                      'r.8(1) — the Court HAS NO jurisdiction, or the writ or service was irregular: use this for a defect in the writ or its service, a claim that falls outside the O.11 r.1 gateways, or an order extending the writ\'s validity that should not have been made.',
                      'r.8(2) — the Court SHOULD NOT EXERCISE a jurisdiction it has: use this for forum non conveniens, an exclusive jurisdiction clause, or parallel foreign proceedings.',
                      {
                        text: 'The r.8(2A) grounds are set out expressly — and the limb is also open "on any other ground":',
                        points: [
                          '(a) considering the best interests and convenience of the parties and the witnesses, the proceedings should be conducted in another court.',
                          '(b) the defendant is entitled to rely on an agreement to which the plaintiff is a party, excluding the Court\'s jurisdiction.',
                          '(c) other proceedings are pending between the same parties in another court on the same cause of action.',
                        ],
                      },
                      'The two limbs are not exclusive of each other: a defendant served out may challenge the gateway under r.8(1) and seek a stay under r.8(2) in the same summons.',
                    ],
                  },
                  {
                    id: 'relief',
                    label: 'Ask for the right relief',
                    points: [
                      {
                        text: 'Under r.8(1) the reliefs available are:',
                        points: [
                          '(a) setting aside the writ or its service.',
                          '(b) a declaration that the writ has not been duly served.',
                          '(c) discharge of an order giving leave to serve out.',
                          '(d) discharge of an order extending the writ\'s validity.',
                          '(e) protection or release of seized property.',
                          '(f) discharge of a freezing-type order.',
                          '(g) a declaration that the Court has no jurisdiction over D in respect of the subject-matter, claim or relief.',
                          '(ga) an order staying the proceedings.',
                          '(h) such other relief as may be appropriate.',
                        ],
                      },
                      {
                        text: 'Under r.8(2) the reliefs available are:',
                        points: [
                          '(a) a declaration that the Court should not exercise any jurisdiction it may have.',
                          '(b) an order staying the proceedings.',
                          '(c) such other relief as may be appropriate, including the relief in r.8(1)(e) or (f).',
                        ],
                      },
                      'Where a stay is sought on forum grounds, the foreign forum said to be appropriate must be NAMED in the summons.',
                    ],
                  },
                  {
                    id: 'procedure',
                    label: 'Follow the procedure exactly — it is what preserves the objection',
                    points: [
                      'STEP 1: give notice of intention to defend, i.e. file an acknowledgement of service — this is required by both r.8(1) and r.8(2). Do it with an express reservation that D submits only for the purpose of challenging jurisdiction.',
                      'STEP 2: WITHIN THE TIME LIMITED FOR SERVICE OF A DEFENCE, apply to the Court. That is the deadline, not the acknowledgement deadline.',
                      'The application must be by SUMMONS, and the summons must state the grounds: O.12 r.8(3).',
                      'It must be supported by an AFFIDAVIT verifying the facts on which it is based, a copy of which must be served with the summons: O.12 r.8(4).',
                      'Filing the acknowledgement does not submit D to the jurisdiction so long as the r.8 application is made: O.12 r.8(6). Without it, the acknowledgement is a submission: O.12 r.8(7); Re Resource 1 (2000) 3 HKCFAR 187.',
                    ],
                  },
                  {
                    id: 'outcome',
                    label: 'Know what happens if the application fails',
                    points: [
                      'If the Court makes no order on the application or dismisses it, the notice of intention to defend STANDS unless the Court directs otherwise, and D is treated as having given it: O.12 r.8(6).',
                      'The Court may then give directions for service of a defence and the further conduct of the proceedings: O.12 r.8(6A).',
                      'If the Court does not dispose of the matter, it may give directions for its disposal, including trial of the point as a preliminary issue: O.12 r.8(5).',
                    ],
                  },
                  {
                    id: 'spiliada',
                    label: 'Forum non conveniens: the Spiliada stages',
                    points: [
                      'Stage 1 — D must show Hong Kong is NOT the natural and appropriate forum for the trial.',
                      'Stage 2 — D must show another available forum is CLEARLY OR DISTINCTLY more appropriate than Hong Kong.',
                      'Stage 3 — if D succeeds, the burden shifts: P must show it would be deprived of a personal or juridical advantage it would otherwise enjoy here.',
                      'Stage 4 — the Court balances P\'s interest against D\'s, asking whether substantial justice can still be done if P is left to litigate abroad.',
                      'Authority: The Spiliada [1987] AC 460, applied in Hong Kong in The Lanka Muditha [1991] 1 HKLR 741 and SPH v SA (2014) 17 HKCFAR 364.',
                    ],
                  },
                  {
                    id: 'factors',
                    label: 'Work the factors, and weight them the way the cases now do',
                    points: [
                      'Pointing away from Hong Kong: the dispute happened abroad; it concerns foreign public policy the foreign court is best suited to decide; there is pending litigation abroad on the same matter (Oracle (China) Software Systems Co Ltd v CITIC 21 CN Co Ltd).',
                      'Now carrying LESS weight: that witnesses are abroad (they can travel, or give evidence over the internet); that foreign law applies (the Hong Kong court can hear expert evidence on it); that the company was incorporated elsewhere.',
                      'Personal or juridical advantages of staying in Hong Kong: the quality of justice (substantial justice may not be done in the foreign forum); a cause of action available here but not there; higher damages; a longer limitation period.',
                      'D must state the NATURE OF ITS DEFENCE so the Court can assess the factors. The absence of an arguable defence will usually lead to the forum non conveniens argument being dismissed: Bayer Polymers Co Ltd v Industrial and Commercial Bank of China; Xu Ziming v Ruifeng Petroleum Chemical Holdings Ltd.',
                    ],
                  },
                  {
                    id: 'clause',
                    label: 'If there is a jurisdiction clause, it changes the weighting',
                    points: [
                      'EXCLUSIVE clause — the parties agreed to submit disputes only to the named forum. There is a heavy burden on the party resisting to persuade the Court not to hold them to their bargain. An exclusive clause naming Hong Kong is a strong case to refuse a stay; one naming a foreign forum is a strong case to grant one.',
                      'NON-EXCLUSIVE clause — the parties agreed to a named forum but also that disputes may go elsewhere. Where Hong Kong is the named forum, very strong reasons are needed to show it is not the appropriate forum: Noble Power Investments Ltd v Nissei Stomach Tokyo Co Ltd [2008] 5 HKLRD 631.',
                      'A jurisdiction clause is also a freestanding r.8(2A)(b) ground: an agreement excluding the Court\'s jurisdiction on which D is entitled to rely.',
                    ],
                  },
                  {
                    id: 'arbitration',
                    label: 'If there is an arbitration agreement, the test is different',
                    points: [
                      'An action may be stayed in favour of arbitration. Four questions (Tommy C P Sze & Co v Li & Fung Trading Ltd [2003] 1 HKC 418):',
                      '1. Is there an arbitration agreement? — D to prove there is.',
                      '2. Is it null and void, inoperative, or incapable of being performed? — it must not be.',
                      '3. Is there in reality a dispute or difference between the parties?',
                      '4. Is that dispute within the ambit of the arbitration agreement?',
                      'If all four are answered in D\'s favour, the stay follows.',
                      'This is not the Spiliada exercise: do not run the four questions as forum factors, or the balancing exercise as if it decided an arbitration stay.',
                    ],
                  },
                  {
                    id: 'otherstays',
                    label: 'Remember stays arise in other situations too',
                    detail: 'A stay may also be sought temporarily in favour of mediation, pending the resolution of other actions or issues, or of execution of a judgment pending appeal. Those are not O.12 r.8 applications and should not be conflated with a jurisdictional challenge.',
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The deadline is the time limited for SERVICE OF A DEFENCE, not the acknowledgement deadline. Missing it converts the acknowledgement into a submission: O.12 r.8(7).',
                'D must still acknowledge service. Both limbs of r.8 open with "shall give notice of intention to defend" — refusing to acknowledge does not preserve the objection, it just risks a default judgment.',
                'The acknowledgement should carry an express reservation that D submits only to contest jurisdiction, but the reservation is not what saves D — making the r.8 application in time is.',
                'r.8(1) and r.8(2) answer different questions: whether the Court HAS jurisdiction, versus whether it SHOULD EXERCISE it. Say which one you are on.',
                'Under Spiliada the burden moves: stages 1 and 2 are D\'s, stage 3 is P\'s, and stage 4 is the Court\'s balance.',
                'A forum non conveniens application without a stated arguable defence usually fails (Bayer Polymers; Xu Ziming).',
                'Losing the application is not fatal to defending: the notice of intention to defend stands, and the Court may give directions for the defence: O.12 r.8(6), (6A).',
              ],
            },
            skills: {
              bullets: [
                'Open by identifying the limb and the specific relief sought, by sub-paragraph — for example "a stay under O.12 r.8(2)(b) on the r.8(2A)(a) ground".',
                'Set out the two-step procedure as a timeline: acknowledge with reservation, then summons plus affidavit before the defence deadline.',
                'Take Spiliada stage by stage and say, at each stage, whose burden it is.',
                'Deal with the jurisdiction clause first if there is one — it changes the weight of everything else.',
                'If there is an arbitration clause, run the four Tommy C P Sze questions rather than the forum factors.',
                'Name the alternative forum expressly, because the summons must.',
              ],
            },
            skeleton: {
              table: {
                headers: ['The complaint', 'Limb', 'Relief and test'],
                rows: [
                  ['The writ or its service was irregular', 'O.12 r.8(1)', 'Set aside the writ or service, or declare it not duly served: r.8(1)(a)-(b)'],
                  ['The claim falls outside every O.11 r.1 gateway', 'O.12 r.8(1)', 'Discharge the order giving leave to serve out: r.8(1)(c)'],
                  ['The writ should not have been renewed', 'O.12 r.8(1)', 'Discharge the order extending its validity: r.8(1)(d)'],
                  ['The Court has no jurisdiction over D at all', 'O.12 r.8(1)', 'A declaration to that effect: r.8(1)(g)'],
                  ['Another forum is clearly more appropriate', 'O.12 r.8(2)', 'A stay: r.8(2)(b) on the r.8(2A)(a) ground; the four Spiliada stages'],
                  ['The contract names another court', 'O.12 r.8(2)', 'A stay: r.8(2A)(b); exclusive clause = heavy burden to resist; non-exclusive naming Hong Kong = very strong reasons needed (Noble Power)'],
                  ['The same dispute is already running abroad', 'O.12 r.8(2)', 'A stay: r.8(2A)(c) (lis alibi pendens); cf Oracle (China)'],
                  ['The contract contains an arbitration clause', 'A stay, not a r.8(2A) ground', 'The four Tommy C P Sze questions, not the Spiliada balance'],
                  ['In every case', 'Both limbs', 'Acknowledge service first, then apply by summons stating the grounds with a supporting affidavit, within the time for serving a defence: r.8(3)-(4)'],
                ],
              },
            },
            mistakes: {
              bullets: [
                'Not filing an acknowledgement at all, on the view that acknowledging would submit to the jurisdiction.',
                'Filing an acknowledgement and then waiting — the application must be made within the time for serving a defence.',
                'Applying by letter or by ordinary application rather than by summons stating the grounds, with a supporting affidavit served with it (O.12 r.8(3)-(4)).',
                'Arguing forum non conveniens without stating the nature of the defence.',
                'Treating "most of the witnesses are overseas" as decisive — the cases now give it much less weight.',
                'Running the Spiliada balancing exercise on an arbitration clause.',
                'Forgetting that the leave to serve out can be challenged in its own right under r.8(1)(c), separately from any forum argument.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'A defendant who wishes to dispute the jurisdiction of the court in the proceedings by reason of any such irregularity as is mentioned in rule 7 or on any other ground shall give notice of intention to defend the proceedings and shall, within the time limited for service of a defence, apply to the Court for—', cite: 'O.12 r.8(1), Rules of the High Court (Cap. 4A)' },
                { text: 'Except where the defendant makes an application in accordance with paragraph (1) or (2), the acknowledgment by a defendant of service of a writ shall, unless the acknowledgment is withdrawn by leave of the Court under Order 21, rule 1, be treated as a submission by the defendant to the jurisdiction of the Court in the proceedings.', cite: 'O.12 r.8(7), Rules of the High Court (Cap. 4A)' },
              ],
              table: {
                headers: ['Point', 'Source', 'What it actually provides'],
                rows: [
                  ['Limb 1: no jurisdiction or irregularity', 'O.12 r.8(1)', 'D shall give notice of intention to defend and, within the time limited for service of a defence, apply to the Court'],
                  ['Relief under limb 1', 'O.12 r.8(1)(a)-(h)', 'Set aside the writ or service; declare it not duly served; discharge leave to serve out; discharge an extension of validity; protect or release seized property; discharge an order preventing dealings with property; declare no jurisdiction over the subject-matter; stay the proceedings (ga); other appropriate relief'],
                  ['Limb 2: should not exercise jurisdiction', 'O.12 r.8(2)(a)-(c)', 'A declaration the Court should not exercise any jurisdiction it may have; a stay; or other appropriate relief including r.8(1)(e) or (f) relief'],
                  ['The specified grounds', 'O.12 r.8(2A)(a)-(c)', 'Best interests and convenience of the parties and witnesses point to another court; D is entitled to rely on an agreement excluding the Court\'s jurisdiction; the same cause of action is pending between the parties in another court'],
                  ['Form of application', 'O.12 r.8(3)-(4)', 'By summons stating the grounds, supported by an affidavit verifying the facts, a copy of which is served with the summons'],
                  ['Directions', 'O.12 r.8(5)', 'If the Court does not dispose of the matter it may give directions, including for trial as a preliminary issue'],
                  ['No submission if r.8 used', 'O.12 r.8(6)', 'D is not treated as having submitted by giving notice of intention to defend; if the application fails, the notice stands and D is treated as having given it'],
                  ['Directions after failure', 'O.12 r.8(6A)', 'The Court may give directions for service of a defence and the further conduct of the proceedings'],
                  ['Submission by default', 'O.12 r.8(7); Re Resource 1 (2000) 3 HKCFAR 187', 'Without a r.8(1) or (2) application, the acknowledgement is a submission unless withdrawn by leave under O.21 r.1'],
                  ['Acknowledgement is no waiver', 'O.12 r.7', 'No waiver of irregularity in the writ, service, leave to serve out or an extension of validity'],
                  ['Forum non conveniens', 'The Spiliada [1987] AC 460; The Lanka Muditha [1991] 1 HKLR 741; SPH v SA (2014) 17 HKCFAR 364', 'Hong Kong not the natural and appropriate forum; another available forum clearly or distinctly more appropriate; then P\'s juridical advantage; then the balance of justice'],
                  ['An arguable defence is needed', 'Bayer Polymers Co Ltd v Industrial and Commercial Bank of China [2000] 1 HKC 805; Xu Ziming v Ruifeng Petroleum Chemical Holdings Ltd (HCA 450/2013)', 'D must state the nature of its defence; its absence usually leads to the forum non conveniens argument being dismissed'],
                  ['Pending foreign litigation', 'Oracle (China) Software Systems Co Ltd v CITIC 21 CN Co Ltd (HCA 105/2012)', 'A classic example of a foreign forum being more appropriate'],
                  ['Non-exclusive jurisdiction clause', 'Noble Power Investments Ltd v Nissei Stomach Tokyo Co Ltd [2008] 5 HKLRD 631', 'Where Hong Kong is the named forum, very strong reasons are needed to show it is not appropriate'],
                  ['Stay for arbitration', 'Tommy C P Sze & Co v Li & Fung Trading Ltd [2003] 1 HKC 418', 'Four questions: is there an arbitration agreement; is it null and void, inoperative or incapable of performance; is there in reality a dispute; is it within the agreement\'s ambit'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG3', issue: 'acknowledgement-of-service', label: 'Acknowledgement of service' },
              { session: 'LG3', issue: 'service-out-of-jurisdiction', label: 'Service out of the jurisdiction' },
              { session: 'LG3', issue: 'defective-service', label: 'Defective service and the Court\'s discretion' },
              { session: 'LG3', issue: 'computing-time', label: 'Computing time under O.3' },
            ],
          },
        ],
      },
    },

    LG4: {
      kind: 'LG',
      date: '2026-09-08',
      time: '09:00-11:00',
      mode: 'Face-to-face',
      authors: ['Alfred Cheng', 'Julienne Jen', 'Ophelia Chan'],
      objectives: [
        'Define pleadings and explain their purpose and importance.',
        'Outline and apply the procedural timelines relevant to pleadings.',
        'Describe the formal requirements for drafting pleadings.',
        'Demonstrate an understanding of the substantive drafting requirements of pleadings.',
        'Distinguish when further and better particulars may be requested, and the procedural steps involved.',
        'Explain the amendment process for pleadings.',
        'Recognise the grounds for striking out pleadings.',
      ],
      topicsCovered: [
        'What pleadings are, and why they matter (Poon Hau Kei; Aktieselskabet Dansk Skibsfinansiering)',
        'Chronology and procedural timelines; filing and serving (O.18 rr.1-5A, r.20)',
        'Formal requirements (O.18 r.6) and the Statement of Truth (O.18 r.20A, O.41A)',
        'Substantive requirements: material facts not evidence (O.18 r.7), points of law (O.18 r.11), matters pleaded specifically (O.18 r.8) and particulars (O.18 r.12)',
        'Further and better particulars (O.18 rr.12(3)-(7))',
        'Statement of claim, defence, counterclaim and reply (O.18 rr.13-18; O.15 rr.2-3)',
        'Amendment of pleadings (O.20) and striking out (O.18 r.19)',
      ],
      prep: {
        readings: [
          'The LG4 Lecture Outline and the Lecture Notes attached to it',
          'RHC O.18, O.20 and O.41A themselves',
          'Julienne Jen, "Hong Kong Civil Court Practice" (LexisNexis, 2026) — the "Blue Book" — O.18 [5029]-[5933], O.20 [6469]-[6591] and [6798]-[6838], O.41A [5018]-[5107] and [5128]-[5139.2] (online)',
          'Eric TM Cheung et al, "Civil Procedure in Hong Kong", 7th ed (LexisNexis, 2023) — the "Textbook" — chapter 8',
          'Contract Case File, Bundles A & B; Negligence Case File, Bundle B',
        ],
      },
      prepChecklist: [
        { id: 'read-outline', label: 'Read the LG4 Lecture Outline and its Lecture Notes' },
        { id: 'read-orders', label: 'Read RHC O.18, O.20 and O.41A themselves' },
        { id: 'blue-book', label: 'Read the Blue Book paragraphs listed for O.18, O.20 and O.41A' },
        { id: 'case-files', label: 'Review the pleadings in the Contract Case File Bundles A & B and the Negligence Case File Bundle B' },
        { id: 'runway-defence', label: 'Study the Defence and Counterclaim of Runway Fashion Limited (Contract Case File Bundle B, pp.56-64) against the O.18 r.6 formal requirements' },
      ],
      keyTakeaways: [
        'Pleadings define the real issues in dispute, and the parties are bound by their pleaded cases at trial.',
        'Plead material facts only — not the evidence that proves them, and not legal argument.',
        'Request further and better particulars BY LETTER first; the Court may refuse an application made without one (O.18 r.12(6)).',
        'One amendment without leave, before the close of pleadings (O.20 r.3(1)); after that, leave is needed and the test is prejudice to the other side that costs cannot cure.',
        'Striking out is a drastic power used sparingly, and only in plain and obvious cases.',
      ],
      examNotes: {
        intro: 'Pleadings questions come in two shapes. The first is a date question: what must be served, by whom, by when, and when do the pleadings close — which then decides whether an amendment needs leave. The second is a drafting question: is this material fact or evidence, is this a point of law or legal argument, has this been pleaded specifically, is this particularised. The issue types below run in that order — the timetable first, then the formal and substantive drafting rules, then what you do about a pleading that is deficient: particulars, amendment, or striking out.',
        issueTypes: [
          {
            id: 'what-pleadings-do',
            title: 'What pleadings are and why they matter',
            summary: 'The types of pleading, the function the cases give them, and the consequence — the parties are bound by what they plead.',
            triggers: {
              bullets: [
                'A party wants to run an argument at trial that is not in its pleaded case.',
                'A discovery request is resisted as going beyond the pleaded issues.',
                'A pleading is so vague that the other side says it cannot know the case it has to meet.',
                'The question asks what purpose a particular pleading serves, or which pleading comes next.',
                'A document is served after the reply and the question is whether it was permitted.',
                'The action was begun by originating summons and the question is whether pleadings arise at all.',
                'A party says it was taken by surprise at trial.',
                'The question is open-ended — "why do pleadings matter?" — and wants the cases, not the rules.',
              ],
              routes: [
                { when: 'The question is really about a date or a deadline', session: 'LG4', issue: 'pleadings-timetable', label: 'The pleadings timetable and close of pleadings' },
                { when: 'The unpleaded point could be brought in', session: 'LG4', issue: 'amending-pleadings', label: 'Amending pleadings' },
                { when: 'The pleading is deficient in detail rather than in principle', session: 'LG4', issue: 'further-and-better-particulars', label: 'Further and better particulars' },
                { when: 'The pleading is bad in principle', session: 'LG4', issue: 'striking-out', label: 'Striking out a pleading' },
                { when: 'The complaint is that the paragraph contains the wrong sort of material', session: 'LG4', issue: 'material-facts-not-evidence', label: 'Material facts, not evidence' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Placing the document and its function',
                steps: [
                  {
                    id: 'what',
                    label: 'Identify the document',
                    points: [
                      'A pleading is a formal written document in which the parties formulate their claim or defence.',
                      'The sequence: statement of claim; defence (and counterclaim); reply (and defence to counterclaim); then, rarely and only with leave, rejoinder, surrejoinder, rebutter and surrebutter.',
                      'Further and better particulars are also pleadings for these purposes — "pleading" in O.41A r.1 expressly includes particulars given voluntarily, on request, or under an order made under O.18 r.12(3) or (4), and any amendment to a pleading or to those particulars.',
                      'No pleading after a reply or a defence to counterclaim may be served except with the leave of the Court: O.18 r.4.',
                    ],
                  },
                  {
                    id: 'purpose',
                    label: 'State the purpose, with authority',
                    points: [
                      'The core function: to define the real issues between the parties in advance of trial (Poon Hau Kei v Hsin Cheong Construction Co Ltd (2004) 7 HKCFAR 148).',
                      'From that follow the practical consequences (Aktieselskabet Dansk Skibsfinansiering v Wheelock Marden Co Ltd [1994] 2 HKC 264 (CA)): inform the other party of the nature of the case it has to meet; prevent surprise at trial; enable the other side to know what evidence to prepare; limit the generality of the discovery required; and tie the parties\' hands as to the cases they will run at trial.',
                      'The last of those is the one that decides most problem questions: a party is bound by its pleaded case.',
                    ],
                  },
                  {
                    id: 'consequence',
                    label: 'Work out the consequence on the facts',
                    points: [
                      'If a party wants to run an unpleaded case, the answer is not "it can be argued anyway" — it is an application to amend under O.20.',
                      'If a pleading is deficient, the answer is a request for further and better particulars under O.18 r.12, then an application if refused.',
                      'If the pleading is bad in principle, the answer is striking out under O.18 r.19.',
                      'Those three routes — particulars, amendment, striking out — are the whole of what this lecture does about a defective pleading. Identify which one the facts call for.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The materials set as a student discovery task whether pleadings appear in an action begun by originating summons as well as by writ. The rules point the way: O.18 r.1 keys the statement of claim to a writ, and O.18 r.19(3) applies the striking-out rule to an originating summons and a petition "as if the summons or petition were a pleading" — which it would not need to do if they already were one. Work the answer from those provisions rather than assuming.',
                'Particulars are pleadings. That matters twice over: they must be verified by a statement of truth (O.18 r.20A(2)), and they must satisfy the O.18 r.6 formal requirements.',
                'Rejoinder and beyond require leave (O.18 r.4). Do not write a timetable that has them following as of right.',
                'Limiting discovery is a purpose of pleadings, not merely a side effect — it is the answer to "why does it matter that this allegation was not pleaded?"',
              ],
            },
            skills: {
              bullets: [
                'Name the pleading precisely: "Defence and Counterclaim", not "the defence", where a counterclaim is included.',
                'When asked why pleadings matter, give the Poon Hau Kei purpose first and then the Aktieselskabet Dansk Skibsfinansiering consequences — the consequences are what apply to facts.',
                'Tie the answer to a remedy. "The allegation is unpleaded" is only half an answer; say whether the route is particulars, amendment or striking out.',
              ],
            },
            mistakes: {
              bullets: [
                'Treating a witness statement or an affidavit as a pleading — they are separate documents with their own verification rules under O.41A.',
                'Forgetting that further and better particulars are themselves pleadings.',
                'Assuming a party may simply argue an unpleaded point at trial.',
                'Listing rejoinder, surrejoinder, rebutter and surrebutter as ordinary steps rather than the rare, leave-only steps they are.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Source', 'What it actually provides'],
                rows: [
                  ['Purpose of pleadings', 'Poon Hau Kei v Hsin Cheong Construction Co Ltd (2004) 7 HKCFAR 148', 'To define the real issues between the parties in advance of trial'],
                  ['What follows from that purpose', 'Aktieselskabet Dansk Skibsfinansiering v Wheelock Marden Co Ltd [1994] 2 HKC 264 (CA)', 'Inform the other party of the case to be met; prevent surprise; enable evidence to be prepared; limit the generality of discovery; tie the parties to the cases they will run'],
                  ['Particulars are pleadings', 'O.41A r.1; O.18 r.20A(2)', '"Pleading" includes particulars given voluntarily, on request, or under an order under O.18 r.12(3) or (4), and any amendment to a pleading or to those particulars'],
                  ['Later pleadings need leave', 'O.18 r.4', 'No pleading subsequent to a reply or a defence to counterclaim shall be served except with the leave of the Court'],
                  ['Pleading any matter whenever arising', 'O.18 r.9', 'Subject to rr.7(1), 10 and 15(2), a party may plead any matter which has arisen at any time, whether before or since the issue of the writ'],
                  ['Originating summons', 'O.18 r.19(3)', 'The striking-out rule applies, so far as applicable, to an originating summons and a petition as if it were a pleading'],
                  ['Trial without pleadings', 'O.18 r.21(1)-(2), (4)', 'Either party may apply by summons for trial without pleadings; the Court must so order if the issues can be defined without them — but the rule does not apply to a claim for libel, slander, malicious prosecution, false imprisonment, or one based on an allegation of fraud'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG4', issue: 'pleadings-timetable', label: 'The pleadings timetable and close of pleadings' },
              { session: 'LG4', issue: 'material-facts-not-evidence', label: 'Material facts, not evidence' },
              { session: 'LG4', issue: 'amending-pleadings', label: 'Amending pleadings' },
              { session: 'LG4', issue: 'striking-out', label: 'Striking out a pleading' },
            ],
          },

          {
            id: 'pleadings-timetable',
            title: 'The pleadings timetable and close of pleadings',
            summary: 'Who serves what, by when, in each of the two writ scenarios — and the date that decides whether an amendment needs leave.',
            triggers: {
              bullets: [
                'The question gives a service date and asks for a deadline.',
                'A party asks whether it is too late to amend without leave.',
                'A defence has not been served and the plaintiff is considering judgment in default.',
                'The writ was generally indorsed and no statement of claim has followed.',
                'An application under O.12 r.8 is pending and the defence deadline is approaching.',
                'An O.14 or O.86 summons was served before the defence was due.',
                'A reply has been served, or deliberately not served, and the close of pleadings is in issue.',
                'A pleading was served but never filed, or filed out of time.',
                'The period runs into the Summer Vacation.',
                'A request for particulars is outstanding and a party assumes the pleadings stay open.',
              ],
              routes: [
                { when: 'You still need the date of service of the writ', session: 'LG3', issue: 'serving-the-writ', label: 'Serving the writ under O.10' },
                { when: 'The acknowledgement deadline is the one in doubt', session: 'LG3', issue: 'acknowledgement-of-service', label: 'Acknowledgement of service' },
                { when: 'The arithmetic needs the O.3 counting rules', session: 'LG3', issue: 'computing-time', label: 'Computing time under O.3' },
                { when: 'A jurisdiction challenge is what is holding up the defence', session: 'LG3', issue: 'contesting-jurisdiction', label: 'Contesting jurisdiction and forum non conveniens' },
                { when: 'The close of pleadings decides an amendment question', session: 'LG4', issue: 'amending-pleadings', label: 'Amending pleadings' },
                { when: 'The question is what the defence must actually say', session: 'LG4', issue: 'defence-counterclaim-and-reply', label: 'Defence, counterclaim and reply' },
                { when: 'The defence deadline passed with nothing served', session: 'LG6', issue: 'default-of-defence', label: 'Default judgment in default of defence (O.19)' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Building the timetable',
                steps: [
                  {
                    id: 'scenario',
                    label: 'First: was the writ generally or specially indorsed?',
                    points: [
                      'GENERALLY indorsed (no statement of claim on the writ) — the plaintiff must serve a statement of claim either when the writ is served, or at any time after service but before the expiration of 14 days after that defendant gives notice of intention to defend: O.18 r.1.',
                      'SPECIALLY indorsed (statement of claim on the writ) — no separate statement of claim is needed; O.18 r.1 applies "unless the Court gives leave to the contrary or a statement of claim is indorsed on the writ".',
                      'Either way the defendant must acknowledge service within 14 days of being served with the writ, INCLUDING the day of service: O.12 r.5(a).',
                    ],
                  },
                  {
                    id: 'defence',
                    label: 'Then the defence — and read the rule, because it is a "whichever is the later" test',
                    points: [
                      'O.18 r.2(1): a defendant who gives notice of intention to defend must serve a defence on every other party who may be affected, before the expiration of 28 days after THE TIME LIMITED FOR ACKNOWLEDGING SERVICE OF THE WRIT or after THE STATEMENT OF CLAIM IS SERVED on him, WHICHEVER IS THE LATER.',
                      'So both dates must be computed, and the later one starts the 28 days. On a specially indorsed writ the statement of claim arrives with the writ, so the acknowledgement deadline is almost always the later; on a generally indorsed writ it can be either.',
                      'O.18 r.2(2): if an O.14 or O.86 summons is served before the defence, r.2(1) does not apply unless leave to defend is given — and then the defence is due within 28 days after the order, or such other period specified in it.',
                      'O.18 r.2(3): where the defendant has applied under O.12 r.8(1) or (2), r.2(1) does not apply unless the application is dismissed or no order is made — and then the defence is due within 28 days after the FINAL DETERMINATION of the application, or such other period as the Court specifies.',
                    ],
                  },
                  {
                    id: 'reply',
                    label: 'Reply and defence to counterclaim',
                    points: [
                      'A reply is only required if it is needed for compliance with O.18 r.8 — i.e. to plead specifically something that would otherwise take the defendant by surprise. If no reply is served, O.18 r.14(1) applies: there is an implied joinder of issue on the defence: O.18 r.3(1).',
                      'A plaintiff served with a counterclaim must, if it intends to defend it, serve a defence to counterclaim: O.18 r.3(2).',
                      'Where both are served, they must be in the SAME document: O.18 r.3(3).',
                      'Timing: a reply within 28 days after service of the defence; a defence to counterclaim within 28 days after service of the counterclaim to which it relates: O.18 r.3(4).',
                    ],
                  },
                  {
                    id: 'close',
                    label: 'Fix the close of pleadings — this is the date that matters most',
                    points: [
                      'O.18 r.20(1)(a) — 14 days after service of the reply; or, if there is no reply but only a defence to counterclaim, 14 days after service of the defence to counterclaim.',
                      'O.18 r.20(1)(b) — if NEITHER a reply nor a defence to counterclaim is served, 28 days after service of the defence.',
                      'O.18 r.20(2) — pleadings are deemed closed at that time NOTWITHSTANDING that a request or order for particulars has been made but not complied with. An outstanding request does not hold the close of pleadings open.',
                      'Why it matters: the right to amend once without leave runs only "before the pleadings are deemed to be closed" (O.20 r.3(1)), as does the plaintiff\'s right to amend the writ once (O.20 r.1(1)).',
                    ],
                  },
                  {
                    id: 'filing',
                    label: 'Do not forget filing, which is separate from service',
                    points: [
                      '"Serving" is giving a document to another party; "filing" is submitting it to the Court.',
                      'O.18 r.5A(1): every pleading and originating process shall be filed in the Registry WITHIN THE TIME during which it may be served on any other party — so in practice, filed and served at about the same time.',
                      'O.18 r.5A(2): a party may apply by summons, stating the further time required, for more time to file.',
                      'O.18 r.5A(3): a party who misses the time is not at liberty to file without the leave of the Court.',
                      'O.18 r.5: pleadings and amended pleadings may not be served during the Summer Vacation except with leave or the consent of all parties.',
                    ],
                  },
                  {
                    id: 'compute',
                    label: 'Compute the dates under O.3, and mind the two different counting rules',
                    points: [
                      'The acknowledgement period counts the day of service (O.12 r.5(a)). The 28-day periods in O.18 rr.2 and 3 do not: O.3 r.2(2) begins the period immediately after the reference date.',
                      'Periods of 28 days are longer than 7, so O.3 r.2(5) does not exclude Saturdays, Sundays and public holidays — every day counts.',
                      'If the last day falls when the Registry is closed, the act is in time if done on the next open day: O.3 r.4(1).',
                    ],
                  },
                ],
              },
            },
            skeleton: {
              table: {
                headers: ['Step', 'Generally indorsed writ', 'Specially indorsed writ', 'Provision'],
                rows: [
                  ['Acknowledgement of service', '14 days after service, including the day of service', 'Same', 'O.12 r.5(a)'],
                  ['Statement of claim', 'With the writ, or within 14 days after D gives notice of intention to defend', 'Not needed — it is on the writ', 'O.18 r.1'],
                  ['Defence (and counterclaim)', '28 days after the LATER of the time limited for acknowledging service and service of the statement of claim', 'Same test; in practice 28 days after the time limited for acknowledging service', 'O.18 r.2(1)'],
                  ['Reply and/or defence to counterclaim', '28 days after service of the defence / of the counterclaim; same document if both', 'Same', 'O.18 r.3(3)-(4)'],
                  ['Rejoinder and beyond', 'Only with leave', 'Same', 'O.18 r.4'],
                  ['Close of pleadings — reply served', '14 days after service of the reply (or of the defence to counterclaim if there is no reply)', 'Same', 'O.18 r.20(1)(a)'],
                  ['Close of pleadings — no reply or defence to counterclaim', '28 days after service of the defence', 'Same', 'O.18 r.20(1)(b)'],
                  ['Filing', 'Within the time during which the pleading may be served', 'Same', 'O.18 r.5A(1)'],
                ],
              },
            },
            lookOut: {
              bullets: [
                'O.18 r.2(1) is a "whichever is the later" rule. Computing only one of the two dates is the commonest way to get the defence deadline wrong.',
                'The 28 days run from the TIME LIMITED for acknowledging service, not from the date the defendant actually acknowledged. Acknowledging early does not shorten the defence period; acknowledging late does not extend it (O.12 r.6(2)).',
                'A pending O.12 r.8 jurisdiction application suspends the defence deadline entirely, and the clock restarts on the FINAL DETERMINATION of that application: O.18 r.2(3).',
                'An outstanding request or order for particulars does NOT postpone the close of pleadings: O.18 r.20(2). A party waiting on particulars can lose the right to amend without leave while it waits.',
                'A reply is optional. Serving one unnecessarily changes the close of pleadings from 28 days after the defence to 14 days after the reply — which may be earlier or later; check before serving.',
                'Where there is a counterclaim but no reply, the close of pleadings is measured from the defence to counterclaim, not from the defence: O.18 r.20(1)(a).',
              ],
            },
            skills: {
              bullets: [
                'Lay out the timetable as dates, not as rule numbers, and then attach the rule to each date.',
                'For the defence, always show BOTH candidate start dates and say which is later before counting 28 days.',
                'State the close of pleadings expressly, even when the question does not ask for it — it is the premise of any amendment answer.',
                'Where the facts are incomplete (no service date, no acknowledgement date), say what further information is needed rather than assuming.',
                'Use the O.3 computation rules explicitly, and remember the acknowledgement period is the one that includes the day of service.',
              ],
            },
            mistakes: {
              bullets: [
                'Running the 28 days for the defence from the date of actual acknowledgement.',
                'Counting the 28-day periods as if O.3 r.2(5) excluded weekends and holidays — it applies only to periods of 7 days or less.',
                'Forgetting that a specially indorsed writ dispenses with a separate statement of claim.',
                'Treating a reply as a required step.',
                'Assuming pleadings stay open while particulars are outstanding.',
                'Filing a pleading late without appreciating that leave is then needed: O.18 r.5A(3).',
              ],
            },
            authorities: {
              statutes: [
                { text: 'a defendant who gives notice of intention to defend an action must, unless the Court gives leave to the contrary, serve a defence on every other party to the action who may be affected thereby before the expiration of 28 days after the time limited for acknowledging service of the writ or after the statement of claim is served on him, whichever is the later.', cite: 'O.18 r.2(1), Rules of the High Court (Cap. 4A)' },
                { text: 'The pleadings in an action are deemed to be closed at the time provided by paragraph (1) notwithstanding that any request or order for particulars has been made but has not been complied with at that time.', cite: 'O.18 r.20(2), Rules of the High Court (Cap. 4A)' },
              ],
              table: {
                headers: ['Point', 'Provision', 'What it actually provides'],
                rows: [
                  ['Statement of claim', 'O.18 r.1', 'Unless the Court gives leave to the contrary or the statement of claim is indorsed on the writ, P must serve it when the writ is served, or after service but before 14 days after D gives notice of intention to defend'],
                  ['Defence', 'O.18 r.2(1)', '28 days after the time limited for acknowledging service, or after service of the statement of claim, whichever is the later'],
                  ['Defence where O.14 or O.86 summons served first', 'O.18 r.2(2)', 'r.2(1) does not apply unless leave to defend is given; then 28 days after the order, or as specified in it'],
                  ['Defence where a jurisdiction challenge is pending', 'O.18 r.2(3)', 'r.2(1) does not apply unless the O.12 r.8 application is dismissed or no order made; then 28 days after its final determination, or as the Court specifies'],
                  ['When a reply is needed', 'O.18 r.3(1)', 'Only if needed for compliance with r.8; if none is served, r.14(1) applies'],
                  ['Defence to counterclaim', 'O.18 r.3(2)-(3)', 'Required if P intends to defend the counterclaim; a reply and a defence to counterclaim must be in the same document'],
                  ['Timing of both', 'O.18 r.3(4)', '28 days after service of the defence, and 28 days after service of the counterclaim, respectively'],
                  ['Later pleadings', 'O.18 r.4', 'Nothing after a reply or defence to counterclaim without leave'],
                  ['Summer Vacation', 'O.18 r.5', 'No service of pleadings or amended pleadings except with leave or the consent of all parties'],
                  ['Filing', 'O.18 r.5A(1)-(3)', 'File in the Registry within the time for service; apply by summons for further time; no filing out of time without leave'],
                  ['Close of pleadings', 'O.18 r.20(1)(a)-(b)', '14 days after the reply (or the defence to counterclaim where there is no reply); otherwise 28 days after the defence'],
                  ['Outstanding particulars', 'O.18 r.20(2)', 'Do not postpone the close of pleadings'],
                  ['Acknowledgement of service', 'O.12 r.5(a)', '14 days after service of the writ, including the day of service'],
                  ['Computing the 28 days', 'O.3 r.2(2), (5); O.3 r.4(1)', 'Period begins immediately after the reference date; Saturdays, Sundays and holidays are excluded only for periods of 7 days or less; a deadline falling when the Registry is closed runs to the next open day'],
                ],
              },
            },
            notes: [
              {
                heading: 'The lecture\'s worked deadline problem',
                bullets: [
                  'Facts as given on the slides: a generally indorsed writ issued against Bill on 16 June and sent the same day by registered post to his last known address; Bill collected it from his letter box on 19 June; a statement of claim was served on 23 June.',
                  'Step 1 — the date of service. Service by registered post is deemed to occur on the seventh day after the writ was sent, UNLESS THE CONTRARY IS SHOWN (O.10 r.1(3)(a)). Bill had actual knowledge on 19 June, which displaces the deemed date. The date of service is 19 June.',
                  'Step 2 — the acknowledgement deadline. 14 days after service INCLUDING the day of service (O.12 r.5(a)), giving 2 July.',
                  'Step 3 — the defence deadline. O.18 r.2(1) takes the later of the time limited for acknowledging service (2 July) and service of the statement of claim (23 June). 2 July is later, so the 28 days run from it: 30 July.',
                  'Note two slips in the slide itself: it gives the posting date as 15 June in the working although the fact pattern says 16 June, and it cites the acknowledgement period as "O.12 r.5(1)" where the rule is O.12 r.5(a). The method is right; check the arithmetic against the fact pattern you are actually given.',
                  'The same structure answers the LG3 exercise on Arthur and Bill — the two are deliberately the same fact pattern with different dates.',
                ],
              },
            ],
            crossRefs: [
              { session: 'LG3', issue: 'computing-time', label: 'Computing time under O.3' },
              { session: 'LG3', issue: 'acknowledgement-of-service', label: 'Acknowledgement of service' },
              { session: 'LG3', issue: 'contesting-jurisdiction', label: 'Contesting jurisdiction (which suspends the defence deadline)' },
              { session: 'LG4', issue: 'amending-pleadings', label: 'Amending pleadings' },
              { session: 'LG4', issue: 'defence-counterclaim-and-reply', label: 'Defence, counterclaim and reply' },
            ],
          },

          {
            id: 'formal-requirements',
            title: 'Formal requirements for a pleading',
            summary: 'What must appear on the face of every pleading, how it is divided, how it is indorsed and signed — and the amendment colours.',
            triggers: {
              bullets: [
                'The question hands you a draft pleading and asks what is wrong with it.',
                'A pleading is about to be filed and the Registry requirements are in issue.',
                'The pleading is an amended one and the question is how the amendments must be shown.',
                'The party is acting in person, or the pleading was settled by counsel.',
                'The solicitor serving the pleading is acting as agent for another firm.',
                'Dates or sums have been written out in words.',
                'Several unrelated allegations share a single paragraph.',
                'The pleading carries a statement of truth but no signature, or the reverse.',
              ],
              routes: [
                { when: 'The missing element is the statement of truth', session: 'LG4', issue: 'statement-of-truth', label: 'The statement of truth (O.41A)' },
                { when: 'The defect is in what the paragraphs say, not how they are set out', session: 'LG4', issue: 'material-facts-not-evidence', label: 'Material facts, not evidence' },
                { when: 'The document is an amended pleading', session: 'LG4', issue: 'amending-pleadings', label: 'Amending pleadings — colours, indorsement and verification' },
                { when: 'The pleading is prolix or embarrassing rather than merely irregular', session: 'LG4', issue: 'striking-out', label: 'Striking out a pleading' },
                { when: 'The document is further and better particulars', session: 'LG4', issue: 'further-and-better-particulars', label: 'Further and better particulars — the r.12(7) format' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Checking a pleading for form',
                steps: [
                  {
                    id: 'face',
                    label: 'What must appear on its face: O.18 r.6(1)',
                    points: [
                      'The year in which the writ in the action was issued, and the number of the action — in practice the HCA [number] / [year] heading.',
                      'The title of the action — the Court the action is in, and the names of the parties.',
                      'The description of the pleading — "Statement of Claim", "Defence and Counterclaim", and so on.',
                      'The date on which it was served. Practice Direction 19.1(1) makes this a requirement when the pleading is presented for filing in the Registry.',
                      'A caution on pinpointing: the lecture outline lettered these (a) to (d). The consolidated text of the rule available for checking letters them (a), (b), (d) and (e), with no paragraph (c). Cite the requirement, and confirm the letter against the official e-Legislation text before pinning an answer to one.',
                    ],
                  },
                  {
                    id: 'body',
                    label: 'How the body must be set out',
                    points: [
                      'O.18 r.6(2) — every pleading must, IF NECESSARY, be divided into paragraphs numbered consecutively, each allegation being so far as convenient contained in a separate paragraph. The "if necessary" and "so far as convenient" qualifications are in the rule; it is a standard of good drafting, not an absolute.',
                      'O.18 r.6(3) — dates, sums and other numbers must be expressed in FIGURES and not in words. So "2 hats", not "two hats".',
                    ],
                  },
                  {
                    id: 'indorse',
                    label: 'The indorsement: O.18 r.6(4)',
                    points: [
                      'Where the party sues or defends IN PERSON — indorsed with that party\'s name and address.',
                      'In any other case — the name or firm and business address of the SOLICITOR BY WHOM IT WAS SERVED.',
                      'And, if that solicitor is the agent of another, also the name or firm and business address of the principal. This limb is easy to miss and applies whenever agency solicitors are used.',
                    ],
                  },
                  {
                    id: 'sign',
                    label: 'The signature: O.18 r.6(5)',
                    points: [
                      'Every pleading must be signed by COUNSEL, if settled by him; and if not, by the party\'s SOLICITOR, or by the PARTY if he sues or defends in person.',
                      'The common practice of printing counsel\'s name at the end of a pleading is acceptable (Blue Book O.18 [5288]-[5291]).',
                      'That remains so despite the addition of the statement of truth: PD 19.3(3).',
                      'The signature under r.6(5) is a different thing from the statement of truth under O.18 r.20A. A pleading needs both.',
                    ],
                  },
                  {
                    id: 'amended',
                    label: 'If it is an amended pleading, two further requirements',
                    points: [
                      'Colour: first amendments in red, second or re-amendments in green, third in violet, fourth in yellow: PD 19.1 §2.',
                      'O.20 r.10(2) — an amended document must be INDORSED WITH A STATEMENT that it has been amended, specifying the date of amendment and the name of the Judge, master or Registrar who made the authorising order and its date; or, if no order was made, the NUMBER OF THE RULE of O.20 under which the amendment was made.',
                      'O.20 r.10(1) — where the amendments are so numerous, or of such nature or length, that written alterations would make the document difficult or inconvenient to read, a FRESH document must be prepared (and, for a writ or originating summons, re-issued).',
                      'And the amendment must be verified by a statement of truth: O.20 r.13(1).',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'r.6(2) says "if necessary" and "so far as convenient" — a pleading is not automatically defective because two allegations share a paragraph. Argue it as poor drafting under O.18 r.19(1)(c) rather than as a breach of r.6(2).',
                'The figures rule in r.6(3) covers dates and sums as well as counts — "1 January 2026" and "HK$150,000", not words.',
                'The agency limb of r.6(4) is a real requirement, not a courtesy: where the serving solicitor acts as agent, the principal\'s name and business address must appear too.',
                'Counsel signs only if counsel settled the pleading. If counsel did not, the solicitor or the litigant in person signs — r.6(5) is a sequence, not a choice.',
                'The r.6(5) signature and the O.41A statement of truth are separate requirements with separate signatories, and the statement of truth did not replace the signature (PD 19.3(3)).',
                'The amendment colours are in a Practice Direction, and the indorsement naming the rule or order is in O.20 r.10(2). Both are needed; citing only the colours is half the answer.',
              ],
            },
            skills: {
              bullets: [
                'Work a "what is wrong with this pleading" question as a checklist: heading, title, description, date of service, paragraph numbering, figures, indorsement, signature, statement of truth.',
                'Say which defects are formal and curable and which go to substance — a missing date of service is not the same kind of problem as pleading evidence.',
                'For an amended pleading, deal with colour, indorsement and verification as three separate points.',
                'Use the Defence and Counterclaim of Runway Fashion Limited in the Contract Case File as the worked model of what a compliant pleading looks like.',
              ],
            },
            mistakes: {
              bullets: [
                'Omitting the date of service from the face of the pleading.',
                'Writing numbers out in words.',
                'Indorsing only the agent solicitor\'s details where the firm acts as agent for another.',
                'Treating the statement of truth as a substitute for the r.6(5) signature.',
                'Showing amendments in colour but omitting the O.20 r.10(2) indorsement, or the other way round.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'Every pleading must, if necessary, be divided into paragraphs numbered consecutively, each allegation being so far as convenient contained in a separate paragraph.', cite: 'O.18 r.6(2), Rules of the High Court (Cap. 4A)' },
                { text: 'Dates, sums and other numbers must be expressed in a pleading in figures and not in words.', cite: 'O.18 r.6(3), Rules of the High Court (Cap. 4A)' },
              ],
              table: {
                headers: ['Point', 'Source', 'What it actually provides'],
                rows: [
                  ['On the face of the pleading', 'O.18 r.6(1)', 'The year the writ was issued and the action number; the title of the action; the description of the pleading; the date on which it was served'],
                  ['Date of service on filing', 'PD 19.1(1)', 'Required when the pleading is presented for filing in the Registry'],
                  ['Paragraphing', 'O.18 r.6(2)', 'Divided if necessary into consecutively numbered paragraphs, each allegation so far as convenient in a separate paragraph'],
                  ['Figures', 'O.18 r.6(3)', 'Dates, sums and other numbers in figures, not words'],
                  ['Indorsement', 'O.18 r.6(4)(a)-(b)', 'Party\'s name and address if in person; otherwise the name or firm and business address of the solicitor who served it — and, if that solicitor is the agent of another, the principal\'s name or firm and business address'],
                  ['Signature', 'O.18 r.6(5)', 'By counsel if settled by him; if not, by the party\'s solicitor, or by the party if suing or defending in person'],
                  ['Printed counsel name', 'Blue Book O.18 [5288]-[5291]; PD 19.3(3)', 'The common practice of printing counsel\'s name is acceptable, and remains so despite the statement of truth'],
                  ['Amendment colours', 'PD 19.1 §2', 'First amendments red, second or re-amendments green, third violet, fourth yellow'],
                  ['Amendment indorsement', 'O.20 r.10(2)', 'The amended document must be indorsed with a statement that it has been amended, the date, and the Judge, master or Registrar and date of the authorising order — or, if none, the rule number relied on'],
                  ['Fresh document', 'O.20 r.10(1)', 'Required where the amendments are so numerous or of such nature or length that written alterations would make the document difficult or inconvenient to read'],
                  ['Verification of amendments', 'O.20 r.13(1)', 'An amendment to a pleading or to the particulars of a pleading must be verified by a statement of truth'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG4', issue: 'statement-of-truth', label: 'The statement of truth' },
              { session: 'LG4', issue: 'amending-pleadings', label: 'Amending pleadings' },
              { session: 'LG4', issue: 'striking-out', label: 'Striking out a pleading' },
              { session: 'LG4', issue: 'pleadings-timetable', label: 'The pleadings timetable and close of pleadings' },
            ],
          },

          {
            id: 'statement-of-truth',
            title: 'The statement of truth (O.41A)',
            summary: 'Which documents need one, who may sign, in what form, and what happens if it is missing or false.',
            triggers: {
              bullets: [
                'The party is a company, a partnership or a public body and the question is who signs.',
                'A solicitor proposes to sign the statement of truth on the client\'s behalf.',
                'A pleading has been served without a statement of truth.',
                'An allegation in the pleading turns out to be false.',
                'A pleading is being amended, or particulars are being given.',
                'The signatory is a company employee and the question is whether they hold a senior position.',
                'The party sues by a next friend or guardian ad litem.',
                'The statement of truth is in a separate document from the pleading it verifies.',
                'The pleading contains inconsistent alternative allegations.',
                'An insurer is conducting the proceedings.',
              ],
              routes: [
                { when: 'The rest of the pleading\'s form is also in issue', session: 'LG4', issue: 'formal-requirements', label: 'Formal requirements for a pleading' },
                { when: 'The alternatives themselves are the problem', session: 'LG4', issue: 'pleading-in-the-alternative', label: 'Inconsistent allegations and pleading in the alternative' },
                { when: 'The unverified document is further and better particulars', session: 'LG4', issue: 'further-and-better-particulars', label: 'Further and better particulars' },
                { when: 'The unverified document is an amendment', session: 'LG4', issue: 'amending-pleadings', label: 'Amending pleadings — O.20 r.13' },
                { when: 'You are considering striking the pleading out for it', session: 'LG4', issue: 'striking-out', label: 'Striking out a pleading' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Working an O.41A question',
                steps: [
                  {
                    id: 'which',
                    label: 'Which documents must be verified?',
                    points: [
                      'O.41A r.2(1): a pleading; a witness statement; an expert report; and any other document required to be verified by another rule or a practice direction.',
                      'O.18 r.20A(1)-(2) makes the same point for pleadings and extends it to the particulars of a pleading — those given voluntarily, on a request by the other party, or under an order made under O.18 r.12(3) or (4).',
                      'O.20 r.13(1)-(2): an amendment to a pleading, or to those particulars, must also be verified.',
                      'O.41A r.2(2): a pleading must be verified EVEN IF it makes inconsistent alternative allegations under O.18 r.12A. Pleading in the alternative is not an excuse for not verifying.',
                      'Exceptions: the Court may direct that verification is not needed where it is just to do so (r.2(3)), and a practice direction may so provide (r.2(4)) — but only for matters heard in a specialist list (r.2(5)).',
                    ],
                  },
                  {
                    id: 'who',
                    label: 'Who signs?',
                    points: [
                      'Default (r.3(1)(b)): the party putting forward the verified document, or where appropriate his next friend or guardian ad litem; OR the legal representative of that party or next friend or guardian ad litem.',
                      'Witness statement or expert report (r.3(1)(a)): the maker of it.',
                      {
                        text: 'A body of persons, CORPORATE OR UNINCORPORATE (r.3(2)): a person holding a SENIOR POSITION in the body — which r.3(4) defines:',
                        points: [
                          '(a) for a corporation, any director, manager, secretary or other similar officer.',
                          '(b) for an unincorporated association, the corresponding person appropriate to it.',
                          '(c) for a public body or authority, a person duly authorised by it.',
                        ],
                      },
                      'And that person must STATE IN THE STATEMENT OF TRUTH the office or position he holds: r.3(5).',
                      'A partnership (r.3(6)): one of the partners, or a person having the control or management of the partnership business.',
                      'A public officer (r.3(3)): the officer, or a person holding a senior position in the public body or authority to which the proceedings relate.',
                      'Insurers (r.3(8)-(9)) and, if permitted by a practice direction, a non-party or two or more parties jointly (r.3(7)).',
                    ],
                  },
                  {
                    id: 'lawyer',
                    label: 'If the legal representative signs, understand what that signature means',
                    points: [
                      'He must sign IN HIS OWN NAME, and must not sign only in the name of the firm to which he belongs: O.41A r.3(10).',
                      {
                        text: 'O.41A r.4(3): the Court treats a legal representative\'s signature as his statement of three things:',
                        points: [
                          '(a) the party authorised him to sign.',
                          '(b) BEFORE SIGNING he had explained to the party that in signing he would be confirming the party\'s belief that the facts stated were true.',
                          '(c) BEFORE SIGNING he had informed the party of the possible consequences if it should subsequently appear the party did not have an honest belief in their truth.',
                        ],
                      },
                      'So confirm all three in writing with the client before signing. The solicitor, not only the client, is exposed if the statement turns out to be false.',
                    ],
                  },
                  {
                    id: 'form',
                    label: 'Get the form right',
                    points: [
                      'For a pleading and anything other than a witness statement or expert report, the prescribed form is: "[I believe] [the (plaintiff or as may be) believes] that the facts stated in this [name document being verified] are true.": O.41A r.5(1).',
                      'For a witness statement or expert report the form adds the honestly-held-opinion limb: O.41A r.5(2).',
                      'Where the statement of truth is in a SEPARATE document (r.5(3)), that document must be headed with the title of the proceedings and the action number, and must identify the document being verified in the prescribed way — for a pleading, "the [statement of claim or as may be] served on the [name of party] on [date]".',
                      'Where a party sues by a next friend or guardian ad litem, the statement is that the NEXT FRIEND believes the facts are true: O.41A r.4(2).',
                    ],
                  },
                  {
                    id: 'missing',
                    label: 'If it is missing',
                    points: [
                      'O.41A r.6(1): the Court MAY BY ORDER strike out a pleading that is not verified by a statement of truth — a discretion, not an automatic consequence. Any party may apply: r.6(2).',
                      'O.41A r.8(1)-(2): alternatively the Court may order the person who failed to verify to do so; again, any party may apply.',
                      'For a witness statement or expert report the consequence is different and harsher: it is NOT ADMISSIBLE in evidence unless the Court otherwise orders: O.41A r.7.',
                    ],
                  },
                  {
                    id: 'false',
                    label: 'If it is false — and note the gatekeeping',
                    points: [
                      'O.41A r.9(1): proceedings for contempt of court may be brought against a person who makes, or causes to be made, a false statement in a document verified by a statement of truth WITHOUT AN HONEST BELIEF IN ITS TRUTH.',
                      {
                        text: 'r.9(2): proceedings may be brought ONLY where BOTH gates are passed:',
                        points: [
                          '(a) by the Secretary for Justice, or by a person aggrieved by the false statement.',
                          '(b) AND with the LEAVE OF THE COURT.',
                        ],
                      },
                      'r.9(3): leave shall not be granted unless the Court is satisfied that punishment for contempt is PROPORTIONATE AND APPROPRIATE in relation to the false statement.',
                      'r.9(4): the rule is subject to, and without prejudice to, the general law of contempt.',
                      'Where the legal representative signed, the exposure is the legal representative\'s.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The test for a corporate signatory is a SENIOR POSITION, and r.3(4)(a) defines it — any director, manager, secretary or other similar officer. It is not "a director" only.',
                'A senior-position signatory must state the office or position held (r.3(5)). Omitting it is a defect in the verification itself.',
                'A solicitor who signs must sign in his own name, not the firm\'s: r.3(10).',
                'The consequence of a missing statement of truth is a DISCRETION to strike out (r.6(1)), or an order to verify (r.8) — not automatic invalidity. Saying "the pleading is a nullity" is wrong.',
                'Contempt under r.9 is not self-executing: it needs both a qualifying applicant and the leave of the Court, and leave requires proportionality. The outline\'s shorthand "false statement = contempt" omits both gates.',
                'Pleading inconsistent alternatives under O.18 r.12A does not relieve the party of verifying: O.41A r.2(2).',
                'Particulars and amendments need their own statements of truth: O.18 r.20A(2); O.20 r.13.',
              ],
            },
            skills: {
              bullets: [
                'Identify the party type first — individual, corporation, unincorporated association, partnership, public body — because that decides the signatory rule.',
                'Where a solicitor is to sign, set out the three r.4(3) confirmations as advice to be given and recorded in writing before signing.',
                'Quote the prescribed r.5(1) wording rather than paraphrasing it; the form is prescribed.',
                'When a statement of truth is missing, give the Court\'s two options (strike out under r.6, or order verification under r.8) rather than asserting one consequence.',
                'On a false statement, take the r.9(2) and r.9(3) gates in order before concluding that contempt proceedings are available.',
              ],
            },
            mistakes: {
              bullets: [
                'Saying a pleading without a statement of truth is automatically struck out.',
                'Having a junior employee rather than a person holding a senior position sign for a company.',
                'Omitting the signatory\'s office or position.',
                'Signing in the firm name.',
                'Treating a false statement as automatically contempt, without the Secretary for Justice or an aggrieved person and without leave.',
                'Forgetting to verify further and better particulars, or an amendment.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'A pleading must be verified by a statement of truth in accordance with this Order notwithstanding that the party has in the pleading made an allegation of fact in accordance with Order 18, rule 12A, which is inconsistent with another allegation of fact in the same pleading.', cite: 'O.41A r.2(2), Rules of the High Court (Cap. 4A)' },
                { text: 'Where a legal representative signs a statement of truth, he shall sign in his own name, and shall not sign only in the name of the firm to which he belongs.', cite: 'O.41A r.3(10), Rules of the High Court (Cap. 4A)' },
                { text: 'Proceedings for contempt of court may be brought against a person if he makes, or causes to be made, a false statement in a document verified by a statement of truth without an honest belief in its truth.', cite: 'O.41A r.9(1), Rules of the High Court (Cap. 4A)' },
              ],
              table: {
                headers: ['Point', 'Provision', 'What it actually provides'],
                rows: [
                  ['What must be verified', 'O.41A r.2(1)(a)-(d)', 'A pleading; a witness statement; an expert report; any other document another rule or practice direction requires to be verified'],
                  ['Pleadings and particulars', 'O.18 r.20A(1)-(2)', 'A pleading, and particulars given voluntarily, on request, or under an order under r.12(3) or (4)'],
                  ['Amendments', 'O.20 r.13(1)-(2)', 'An amendment to a pleading or to those particulars must be verified'],
                  ['Alternatives still verified', 'O.41A r.2(2)', 'Verification is required notwithstanding inconsistent alternative allegations under O.18 r.12A'],
                  ['Dispensing with verification', 'O.41A r.2(3)-(5)', 'The Court may so direct where just; a practice direction may so provide, but only for a matter heard in a specialist list'],
                  ['Default signatory', 'O.41A r.3(1)(b)', 'The party putting forward the document, his next friend or guardian ad litem, or their legal representative'],
                  ['Corporate and unincorporated bodies', 'O.41A r.3(2), (4)(a)-(c), (5)', 'A person holding a senior position — any director, manager, secretary or other similar officer of a corporation; the corresponding person for an unincorporated association; a duly authorised person for a public body — who must state the office or position held'],
                  ['Partnerships', 'O.41A r.3(6)(a)-(b)', 'One of the partners, or a person having the control or management of the partnership business'],
                  ['Public officers', 'O.41A r.3(3)', 'The public officer, or a person holding a senior position in the public body or authority to which the proceedings relate'],
                  ['Insurers', 'O.41A r.3(8)-(9)', 'An insurer or the Motor Insurers\' Bureau with a financial interest may sign; where several insurers act, the lead insurer\'s responsible officer may sign, stating the capacity'],
                  ['Legal representative signs in own name', 'O.41A r.3(10)', 'Not only in the name of the firm'],
                  ['What the statement means', 'O.41A r.4(1)-(2)', 'That the party putting forward the document believes the facts stated are true; where there is a next friend or guardian ad litem, that the next friend or guardian so believes'],
                  ['What a lawyer\'s signature is treated as stating', 'O.41A r.4(3)(a)-(c)', 'That he was authorised; that before signing he explained that he would be confirming the party\'s belief; and that before signing he informed the party of the possible consequences of a dishonest statement'],
                  ['The prescribed form', 'O.41A r.5(1)', '"[I believe] [the (plaintiff or as may be) believes] that the facts stated in this [name document being verified] are true."'],
                  ['Separate document', 'O.41A r.5(3)(a)-(b)', 'Must be headed with the title of the proceedings and the action number, and identify the verified document in the prescribed form'],
                  ['Failure to verify a pleading', 'O.41A r.6(1)-(2)', 'The Court MAY by order strike out; any party may apply'],
                  ['Failure to verify a witness statement or expert report', 'O.41A r.7', 'Not admissible in evidence unless the Court otherwise orders'],
                  ['Power to order verification', 'O.41A r.8(1)-(2)', 'The Court may order the person who failed to verify to do so; any party may apply'],
                  ['False statements', 'O.41A r.9(1)-(4)', 'Contempt proceedings for a false statement made without honest belief; only by the Secretary for Justice or a person aggrieved, and only with leave; leave only if punishment is proportionate and appropriate; subject to the general law of contempt'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG4', issue: 'formal-requirements', label: 'Formal requirements for a pleading' },
              { session: 'LG4', issue: 'pleading-in-the-alternative', label: 'Pleading in the alternative' },
              { session: 'LG4', issue: 'further-and-better-particulars', label: 'Further and better particulars' },
              { session: 'LG4', issue: 'amending-pleadings', label: 'Amending pleadings' },
              { session: 'LG4', issue: 'striking-out', label: 'Striking out a pleading' },
            ],
          },
          {
            id: 'material-facts-not-evidence',
            title: 'Material facts, not evidence — and points of law',
            summary: 'The O.18 r.7 line between what goes in and what stays out, and the difference between raising a point of law and arguing one.',
            triggers: {
              bullets: [
                'The question hands you a paragraph and asks whether it belongs in the pleading.',
                'A pleading recites documents, correspondence or CCTV footage.',
                'A pleading contains a passage of legal exposition or submission.',
                'A party has omitted a fact and the question is whether it had to be pleaded.',
                'A cause of action is not named anywhere in the statement of claim.',
                'A contractual clause has been set out word for word.',
                'The claim is in defamation and the words themselves are in issue.',
                'A fact is presumed by law, or the burden of disproving it lies on the other side.',
                'One event could not have happened without an earlier one.',
                'A fact arose only after the writ was issued.',
              ],
              routes: [
                { when: 'The complaint is that detail is missing rather than misplaced', session: 'LG4', issue: 'pleading-specifically-and-particulars', label: 'Matters to be pleaded specifically, and particulars' },
                { when: 'The detail must be extracted from the other side', session: 'LG4', issue: 'further-and-better-particulars', label: 'Further and better particulars' },
                { when: 'The paragraph is the prayer for relief or the causes of action', session: 'LG4', issue: 'statement-of-claim', label: 'Drafting the statement of claim' },
                { when: 'The paragraph is an admission, denial or non-admission', session: 'LG4', issue: 'defence-counterclaim-and-reply', label: 'Defence, counterclaim and reply' },
                { when: 'The pleading is prolix, ambiguous or irrelevant enough to strike', session: 'LG4', issue: 'striking-out', label: 'Striking out a pleading' },
                { when: 'The fix is to rewrite the paragraph', session: 'LG4', issue: 'amending-pleadings', label: 'Amending pleadings' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Is this paragraph properly pleaded?',
                steps: [
                  {
                    id: 'rule',
                    label: 'Start with the rule, in full',
                    points: [
                      'O.18 r.7(1): subject to the rest of r.7 and to rr.7A, 10, 11 and 12, every pleading must contain, AND CONTAIN ONLY, a statement in a summary form of the MATERIAL FACTS on which the party relies for his claim or defence, BUT NOT THE EVIDENCE by which those facts are to be proved, and the statement must be AS BRIEF as the nature of the case admits.',
                      'Three separate requirements, and a question can turn on any of them: material facts, not evidence, and brevity.',
                      'Note the opening words. r.7(1) is expressly subject to rr.7A, 10, 11 and 12 — so the points of law permitted by r.11 and the particulars required by r.12 are not exceptions smuggled in, they are carved out on the face of the rule.',
                    ],
                  },
                  {
                    id: 'material',
                    label: 'Is it a material fact?',
                    points: [
                      'Material facts are the facts necessary for the purpose of formulating a COMPLETE CAUSE OF ACTION: Bruce v Odhams Press Ltd [1936] 1 All ER 287, 294 (CA).',
                      'So run the elements of the cause of action and ask whether this fact is needed to make one of them out.',
                      'The lecture sets as a discovery task whether failing to name a cause of action (for instance "defamation") in the statement of claim defeats it — the Textbook at [8-25] is the pointer. The Bruce v Odhams test is about facts, not labels; work the answer from that and the Textbook rather than assuming either way.',
                    ],
                  },
                  {
                    id: 'evidence',
                    label: 'Or is it evidence?',
                    points: [
                      'Do not plead the evidence used to prove a material fact: Ng Kam Chuen v Attorney General [1991] 2 HKC 560.',
                      'The lecture\'s worked contrast, in a sale of goods claim: PLEAD "The Plaintiff agreed to buy, and the Defendant agreed to sell, 100 cartons of canned dog food for $150,000 on [date]" — that is the agreement, the material fact. DO NOT plead "The Plaintiff sent a purchase order to the Defendant to place an order for..." — the purchase order is the evidence of the agreement.',
                      'The same test with the slide examples: "A mini-bus collided into a BMW at the Victoria Dockside at 10am on 1 September" is the material fact; "Rosewood Hotel\'s CCTV recording showed that a mini-bus collided into a BMW..." is evidence of it.',
                      'A quick way to spot it: if the sentence describes how the fact would be PROVED — a document, a recording, a witness — it is evidence.',
                    ],
                  },
                  {
                    id: 'docs',
                    label: 'If a document or conversation is involved: O.18 r.7(2)',
                    points: [
                      'The EFFECT of any document, or the PURPORT of any conversation, referred to in the pleading must, IF MATERIAL, be briefly stated.',
                      'And the PRECISE WORDS must not be stated, EXCEPT in so far as those words are themselves material — as in a libel action, where the words are the cause of action.',
                      'The lecture\'s worked example: a warranty clause reading "Each of the Warranties shall be separate and independent and, save as expressly provided, shall not be limited by reference to any other Warranty or anything in this Agreement" is pleaded as "Each of the Warranties would constitute a separate and independent warranty (Clause 11.3)".',
                    ],
                  },
                  {
                    id: 'nonpleadable',
                    label: 'What need NOT be pleaded: O.18 r.7(3) and r.7(4)',
                    points: [
                      'r.7(3): a party need not plead any fact if it is PRESUMED BY LAW to be true, or if the burden of DISPROVING it lies on the other party — UNLESS the other party has specifically denied it in his pleading. That final qualification is on the face of the rule and is easy to miss.',
                      'Presumed fact example: s34 of the Sale of Goods Ordinance (Cap. 26), by which delivery of goods by a seller to a carrier is prima facie deemed delivery to the buyer.',
                      'Burden example: the onus is on the defendant to prove that the plaintiff failed to mitigate — so the plaintiff need not plead mitigation.',
                      'r.7(4): a statement that a thing has been done or an event has occurred, being a thing or event whose doing or occurrence constitutes a CONDITION PRECEDENT necessary for the party\'s case, is to be IMPLIED in his pleading.',
                      'Practical advice from the lecture: plead the condition precedent anyway. It makes for a clearer pleading and costs nothing.',
                    ],
                  },
                  {
                    id: 'law',
                    label: 'Points of law: permitted, but only as points',
                    points: [
                      'O.18 r.11: "A party may by his pleading raise any point of law." The whole rule is that one sentence.',
                      'PERMISSIBLE, because each states a legal conclusion as a proposition: "The Defendant is negligent"; "The Defendant owes a duty of care to the Plaintiff"; "The contract contains an implied condition under s16 of the Sale of Goods Ordinance (Cap. 26)"; "D1 is vicariously liable for D2".',
                      'NOT PERMISSIBLE, because it is ARGUMENT: "The Plaintiff submits that the Defendant\'s conduct as pleaded above constitutes an acceptance of the Plaintiff\'s offer"; "D2\'s conduct shows recklessness and therefore the Plaintiff is entitled to punitive damages".',
                      'NOT PERMISSIBLE, because it EXPLAINS THE LAW: "For a contract to be formed, there must be offer and acceptance, as well as intention to create legal relations. As all of these elements were present, a contract was formed between P and D"; "Negligence is the failure to exercise the degree of care that a reasonably prudent person would have exercised in the same circumstances, resulting in harm or loss to another person".',
                      'The giveaway words are "submits", "therefore", and any sentence that would be at home in a textbook.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'r.7(1) says "contain, and contain only". A pleading can be defective for containing too much as well as too little — which is what makes prolixity a striking-out ground under O.18 r.19(1)(c).',
                'The r.7(3) exemption falls away if the other party has SPECIFICALLY DENIED the presumed fact. Once denied, plead it.',
                'r.7(2) has two limbs. Brief statement of the effect IF MATERIAL; and no precise words UNLESS the words are themselves material. In defamation the words are the cause of action, so they are pleaded verbatim.',
                'Raising a point of law is not the same as pleading a legal argument or explaining the law. Test each sentence: does it assert a legal conclusion, or does it reason towards one?',
                'A pleading may plead any matter that arose at ANY time, before or since the issue of the writ (O.18 r.9) — subject to r.7(1), r.10 and r.15(2). A fact is not excluded merely because it post-dates the writ.',
                'Brevity is a requirement of the rule, not a style preference. "As brief as the nature of the case admits" is the standard.',
              ],
            },
            skills: {
              bullets: [
                'Take each disputed paragraph in turn and label it: material fact, evidence, point of law, or argument. Then give the rule.',
                'For a "material fact or evidence?" question, name the cause of action and run its elements — that is what makes a fact material on the Bruce v Odhams test.',
                'When rewriting a paragraph, show the corrected version rather than just criticising the original.',
                'For a document, plead the effect and cite the clause number, as the lecture\'s Clause 11.3 example does.',
                'If the answer depends on whether the other side has specifically denied a presumed fact, say so and ask for the defence.',
              ],
            },
            mistakes: {
              bullets: [
                'Pleading the documents that prove the agreement instead of the agreement.',
                'Setting out a contractual clause verbatim where its effect would do.',
                'Writing a paragraph of legal exposition into a statement of claim.',
                'Treating "The Defendant is negligent" as impermissible legal argument — it is a point of law and is allowed by r.11.',
                'Omitting a presumed fact after the other side has specifically denied it.',
                'Assuming a condition precedent must always be pleaded expressly — it is implied by r.7(4), though it is better practice to plead it.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'Subject to the provisions of this rule and rules 7A, 10, 11 and 12, every pleading must contain, and contain only, a statement in a summary form of the material facts on which the party pleading relies for his claim or defence, as the case may be, but not the evidence by which those facts are to be proved, and the statement must be as brief as the nature of the case admits.', cite: 'O.18 r.7(1), Rules of the High Court (Cap. 4A)' },
                { text: 'Without prejudice to paragraph (1), the effect of any document or the purport of any conversation referred to in the pleading must, if material, be briefly stated, and the precise words of the document or conversation must not be stated, except in so far as those words are themselves material.', cite: 'O.18 r.7(2), Rules of the High Court (Cap. 4A)' },
                { text: 'A party need not plead any fact if it is presumed by law to be true or the burden of disproving it lies on the other party, unless the other party has specifically denied it in his pleading.', cite: 'O.18 r.7(3), Rules of the High Court (Cap. 4A)' },
              ],
              table: {
                headers: ['Point', 'Source', 'What it actually provides'],
                rows: [
                  ['Material facts only, in summary form', 'O.18 r.7(1)', 'Must contain, AND CONTAIN ONLY, a summary of the material facts, not the evidence, and as brief as the nature of the case admits — subject to rr.7A, 10, 11 and 12'],
                  ['What "material" means', 'Bruce v Odhams Press Ltd [1936] 1 All ER 287, 294 (CA)', 'Facts necessary for the purpose of formulating a complete cause of action'],
                  ['No evidence', 'Ng Kam Chuen v Attorney General [1991] 2 HKC 560', 'The evidence by which material facts are to be proved is not pleaded'],
                  ['Documents and conversations', 'O.18 r.7(2)', 'Effect or purport briefly stated if material; precise words not stated unless themselves material'],
                  ['Presumed facts and reversed burdens', 'O.18 r.7(3)', 'Need not be pleaded, unless the other party has specifically denied the fact'],
                  ['Condition precedent', 'O.18 r.7(4)', 'A statement that the thing was done or the event occurred is to be IMPLIED in the pleading'],
                  ['Points of law', 'O.18 r.11', '"A party may by his pleading raise any point of law."'],
                  ['Matters arising at any time', 'O.18 r.9', 'Subject to rr.7(1), 10 and 15(2), a party may plead any matter arising at any time, before or since the issue of the writ'],
                  ['Prolix or embarrassing pleading', 'O.18 r.19(1)(c); Blue Book O.18 [5853.2]', 'Pleading ambiguously, with irrelevant allegations, or with unnecessarily lengthy statements of fact, may prejudice, embarrass or delay the fair trial'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG4', issue: 'pleading-specifically-and-particulars', label: 'Matters to be pleaded specifically, and particulars' },
              { session: 'LG4', issue: 'statement-of-claim', label: 'Drafting the statement of claim' },
              { session: 'LG4', issue: 'striking-out', label: 'Striking out a pleading' },
              { session: 'LG4', issue: 'what-pleadings-do', label: 'What pleadings are and why they matter' },
            ],
          },

          {
            id: 'pleading-specifically-and-particulars',
            title: 'Matters to be pleaded specifically, and particulars',
            summary: 'What O.18 r.8 forces into a later pleading, what O.18 r.12(1) requires to be particularised, and the criminal-conviction rule.',
            triggers: {
              bullets: [
                'A defence raises limitation, illegality, set-off, contributory negligence or failure to mitigate.',
                'A claim alleges fraud, misrepresentation, breach of trust, wilful default or undue influence.',
                'Exemplary or provisional damages, or interest, are claimed.',
                'The claim alleges the other party knew or had notice of something.',
                'A party wants to rely on a criminal conviction.',
                'Special damages are claimed and the particulars run long.',
                'The claim is for personal injuries.',
                'A defence raises a matter that would take the plaintiff by surprise.',
                'Negligence is alleged and the question is how the breaches must be set out.',
                'The defence is to a claim for recovery of land.',
              ],
              routes: [
                { when: 'The question is what kind of material goes in at all', session: 'LG4', issue: 'material-facts-not-evidence', label: 'Material facts, not evidence' },
                { when: 'The other side pleaded it, but without the necessary detail', session: 'LG4', issue: 'further-and-better-particulars', label: 'Further and better particulars' },
                { when: 'It is the statement of claim\'s own contents in issue', session: 'LG4', issue: 'statement-of-claim', label: 'Drafting the statement of claim' },
                { when: 'The matter is set-off raised as a defence', session: 'LG4', issue: 'defence-counterclaim-and-reply', label: 'Defence, counterclaim and reply' },
                { when: 'The particulars need verifying', session: 'LG4', issue: 'statement-of-truth', label: 'The statement of truth (O.41A)' },
                { when: 'The matter was left out and must now be added', session: 'LG4', issue: 'amending-pleadings', label: 'Amending pleadings' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Specificity and particulars',
                steps: [
                  {
                    id: 'r8',
                    label: 'O.18 r.8(1) — and read its two limits, because the outline\'s shorthand hides them',
                    points: [
                      'The rule applies only to "any pleading SUBSEQUENT TO A STATEMENT OF CLAIM" — so it bites on a defence, a reply, a defence to counterclaim, not on the statement of claim itself.',
                      'It requires a party to plead specifically any matter, FOR EXAMPLE performance, release, any relevant statute of limitation, fraud or any fact showing illegality — the list is illustrative, not exhaustive.',
                      {
                        text: 'And the test is three-limbed — a matter falling within any one of:',
                        points: [
                          '(a) which he alleges makes any claim or defence of the opposite party NOT MAINTAINABLE.',
                          '(b) which, if not specifically pleaded, might take the opposite party BY SURPRISE.',
                          '(c) which raises ISSUES OF FACT NOT ARISING out of the preceding pleading.',
                        ],
                      },
                      'So the right question is not "is this on a list?" but "does this matter fall within limb (a), (b) or (c)?"',
                    ],
                  },
                  {
                    id: 'r8list',
                    label: 'The matters the course expects you to plead specifically',
                    points: [
                      'Fraud: O.18 r.8(1), and particulars under O.18 r.12(1)(a).',
                      'Limitation — "any relevant statute of limitation" is named in r.8(1) itself.',
                      'Contributory negligence: Chow Wai Hung v King Rise Engineering Ltd (CACV 213/2005) at para 21.',
                      'Set-off as a defence: SC Chow & Associates Ltd v Chow Kit Ming [1997] 2 HKC 96 (HC), and see O.18 r.17.',
                      'Failure to mitigate damages: Master Yield Ltd v Ho Foon Yung Anesis (CACV 67/2012) at para 28 et seq.',
                      'Exemplary or provisional damages: O.18 r.8(3) — and they must be pleaded "TOGETHER WITH THE FACTS ON WHICH THE PARTY PLEADING RELIES", which the outline\'s summary omits.',
                      'Interest under s48 of the High Court Ordinance (or s49 of the District Court Ordinance): O.18 r.8(4), which covers a claim for interest "under section 48 of the Ordinance OR OTHERWISE" — so contractual interest is caught too.',
                      'A defendant to an action for recovery of land must plead specifically every ground of defence; a plea of possession by himself or his tenant is not sufficient: O.18 r.8(2).',
                    ],
                  },
                  {
                    id: 'damages',
                    label: 'Know the two damages terms the lecture defines',
                    points: [
                      'EXEMPLARY (punitive) damages — an award larger than what is needed to compensate for the loss suffered; the excess is punishment.',
                      'PROVISIONAL damages — in a personal injury claim, damages assessed now on the ASSUMPTION that the claimant\'s condition will not deteriorate, leaving the claimant able to come back for further damages if it does.',
                      'Both must be specifically pleaded with the facts relied on: O.18 r.8(3).',
                    ],
                  },
                  {
                    id: 'r12',
                    label: 'O.18 r.12(1) — every pleading must contain the necessary particulars',
                    points: [
                      'The general obligation: "every pleading must contain the necessary particulars of any claim, defence or other matter pleaded". Particulars are details.',
                      'r.12(1)(a) — particulars of any MISREPRESENTATION, FRAUD, BREACH OF TRUST, WILFUL DEFAULT or UNDUE INFLUENCE relied on.',
                      'r.12(1)(b) — where a party alleges any CONDITION OF THE MIND of any person (a disorder or disability of mind, malice, fraudulent intention or any other condition of mind), particulars of the facts relied on — "EXCEPT KNOWLEDGE", which is carved out on the face of the rule.',
                      'r.12(1)(c) — where a claim for damages is made AGAINST the party pleading, particulars of any facts relied on in MITIGATION of, or otherwise in relation to, the AMOUNT of damages.',
                      'Special damages must be particularised (White Book §18/12/11) — special damage being damage that is not the natural and probable consequence of the breach, so the connection has to be spelled out. General damages need not be.',
                      'Common situations in this course where particulars are expected: breach of contract, negligence, loss and damage, and agreements.',
                    ],
                  },
                  {
                    id: 'knowledge',
                    label: 'Knowledge and notice are a special case: O.18 r.12(4)',
                    points: [
                      'Knowledge is excepted from the r.12(1)(b) automatic requirement — so there is no strict need to particularise knowledge or notice at the outset.',
                      {
                        text: 'But where a party alleges as a fact that a person had knowledge or notice of some fact, matter or thing, the Court MAY, on such terms as it thinks just, order that party to serve particulars — O.18 r.12(4):',
                        points: [
                          '(a) where knowledge is alleged, particulars of the facts relied on.',
                          '(b) where notice is alleged, particulars of the notice.',
                        ],
                      },
                      'Practical advice: give them anyway. It avoids an application (with its costs and delay), and you should in any event know why your client says the other side knew.',
                      'The lecture\'s worked example of particularised knowledge is the pre-contract Zoom meeting in which the plaintiff told the defendant\'s representative about the influencer collaboration that depended on the backdrop — the facts from which knowledge is inferred, pleaded as facts.',
                    ],
                  },
                  {
                    id: 'folios',
                    label: 'Long particulars go in a separate document: O.18 r.12(2)',
                    points: [
                      'Where it is necessary to give particulars of DEBT, EXPENSES OR DAMAGES and those particulars EXCEED 3 FOLIOS, they must be set out in a SEPARATE DOCUMENT referred to in the pleading.',
                      'And the pleading must state whether that document has already been served and, if so, when — or that it is to be served with the pleading.',
                      '"3 folios" is 216 words, counting any figure such as a price or a date as a single word (English RSC O.1 r.4; the term is not defined in the Hong Kong RHC — White Book §18/12/57).',
                      'In a personal injuries action there is a separate obligation: the plaintiff must serve WITH the statement of claim a medical report and a statement of the special damages claimed: O.18 r.12(1A), with r.12(1B) letting the Court fix a period or make another order, and r.12(1C) defining both documents.',
                    ],
                  },
                  {
                    id: 'conviction',
                    label: 'Relying on a criminal conviction: O.18 r.7A',
                    points: [
                      'Section 62(1) of the Evidence Ordinance (Cap. 8) makes the fact of a criminal conviction, if relevant to the civil proceedings, admissible to prove commission of the offence; s62(2) means that once the conviction is proved, the defendant is taken to have committed the offence and all the acts constituting it UNLESS THE CONTRARY IS PROVED — so the burden shifts.',
                      {
                        text: 'To use it, the party must INCLUDE IN HIS PLEADING A STATEMENT OF HIS INTENTION, with particulars of three matters — O.18 r.7A(1):',
                        points: [
                          '(a) the conviction and the date thereof.',
                          '(b) the court which made the conviction.',
                          '(c) the issue in the proceedings to which the conviction is relevant.',
                        ],
                      },
                      'O.18 r.7A(2) does the same for a finding of adultery under s63 of the Evidence Ordinance.',
                      'O.18 r.7A(3): the opposite party must in HIS pleading make any denial of the conviction, any allegation that it was erroneous, or any denial of its relevance.',
                      'The lecture\'s worked example pleads the defendants\' guilty pleas and convictions for driving and permitting to be driven a vehicle with defective tyres, naming the regulation, the offence provision, the magistracy and the case numbers.',
                    ],
                  },
                ],
              },
            },
            skeleton: {
              table: {
                headers: ['Matter', 'What is required', 'Source'],
                rows: [
                  ['Performance, release, limitation, fraud, illegality', 'Plead specifically in a pleading subsequent to the statement of claim', 'O.18 r.8(1)'],
                  ['Contributory negligence', 'Plead specifically', 'Chow Wai Hung v King Rise Engineering Ltd (CACV 213/2005) para 21'],
                  ['Set-off as a defence', 'Plead specifically; may be included in the defence and set off', 'SC Chow & Associates Ltd v Chow Kit Ming [1997] 2 HKC 96; O.18 r.17'],
                  ['Failure to mitigate', 'Plead specifically', 'Master Yield Ltd v Ho Foon Yung Anesis (CACV 67/2012) para 28 et seq'],
                  ['Exemplary or provisional damages', 'Plead specifically TOGETHER WITH the facts relied on', 'O.18 r.8(3)'],
                  ['Interest', 'Plead specifically — under s48 HCO (s49 DCO) or otherwise', 'O.18 r.8(4)'],
                  ['Defence to a land recovery claim', 'Every ground pleaded specifically; bare possession is not enough', 'O.18 r.8(2)'],
                  ['Misrepresentation, fraud, breach of trust, wilful default, undue influence', 'Particulars required', 'O.18 r.12(1)(a)'],
                  ['Condition of mind (malice, fraudulent intention, mental disorder) — but NOT knowledge', 'Particulars of the facts relied on', 'O.18 r.12(1)(b)'],
                  ['Mitigation or the amount of damages, where damages are claimed against you', 'Particulars of the facts relied on', 'O.18 r.12(1)(c)'],
                  ['Knowledge or notice', 'No strict requirement at the outset; the Court may order particulars', 'O.18 r.12(4)(a)-(b)'],
                  ['Special damages', 'Particularised; general damages need not be', 'White Book §18/12/11'],
                  ['Particulars of debt, expenses or damages over 3 folios (216 words)', 'Separate document referred to in the pleading, stating whether and when served', 'O.18 r.12(2); White Book §18/12/57'],
                  ['Personal injuries claim', 'Medical report and statement of special damages served WITH the statement of claim', 'O.18 r.12(1A)-(1C)'],
                  ['Criminal conviction', 'Statement of intention plus particulars of the conviction and date, the court, and the relevant issue', 'O.18 r.7A(1); Evidence Ordinance (Cap. 8) s62'],
                ],
              },
            },
            lookOut: {
              bullets: [
                'O.18 r.8(1) applies only to pleadings SUBSEQUENT TO a statement of claim. Do not cite it for a defect in the statement of claim itself — there, the obligation is r.12(1).',
                'The r.8(1) list is introduced by "for example". A matter not on the list is still caught if it falls within limb (a), (b) or (c).',
                'Exemplary and provisional damages must be pleaded WITH THE FACTS relied on, not merely claimed in the prayer: r.8(3).',
                'Knowledge is expressly excepted from r.12(1)(b), so a pleading is not defective for omitting particulars of knowledge — but r.12(4) lets the Court order them, which is why giving them anyway is the safer course.',
                'Special damages need particulars; general damages do not. Getting this the wrong way round is a common error.',
                'The 3-folio threshold is a word count (216 words, figures counting as one word each), not a page count.',
                'The r.7A conviction requirement is a pleading of INTENTION plus particulars. Pleading the conviction as a bare fact does not satisfy the rule.',
                'Section 62(2) of the Evidence Ordinance shifts the burden: once the conviction is proved the other side must disprove the acts. That is the reason the conviction is worth pleading.',
              ],
            },
            skills: {
              bullets: [
                'Run r.8 and r.12 as two distinct questions: must this matter be raised specifically at all, and if raised, must it be particularised?',
                'For each item pleaded specifically, give the source — some are in the rule, some come from case law.',
                'Draft particulars as numbered sub-paragraphs of facts, in the style of the lecture\'s negligence particulars (driving too fast in the rain when turning in, defective tyres, disregard of the warning signs, failure to brake in time, failure to stop, slow down or swerve).',
                'For loss and damage, particularise item by item with figures and a total, as the lecture\'s replacement-pump schedule does.',
                'Where the claim depends on the other side\'s knowledge, plead the facts from which knowledge is to be inferred — the meeting, the date, who said what — rather than asserting knowledge.',
                'On a conviction, plead all three r.7A(1) particulars and the magistracy case number.',
              ],
            },
            mistakes: {
              bullets: [
                'Citing O.18 r.8(1) against a statement of claim.',
                'Treating the r.8(1) examples as a closed list.',
                'Claiming exemplary damages in the prayer without pleading the facts.',
                'Particularising general damages and leaving special damages at large.',
                'Pleading "the Defendant knew" without the facts from which knowledge is inferred.',
                'Setting out pages of damages particulars in the body of the pleading rather than in a separate document.',
                'Pleading a conviction without stating the intention to rely on s62 of the Evidence Ordinance.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'A party must in any pleading subsequent to a statement of claim plead specifically any matter, for example, performance, release, any relevant statute of limitation, fraud or any fact showing illegality-', cite: 'O.18 r.8(1), Rules of the High Court (Cap. 4A)' },
                { text: 'A claim for exemplary damages or for provisional damages must be specifically pleaded together with the facts on which the party pleading relies.', cite: 'O.18 r.8(3), Rules of the High Court (Cap. 4A)' },
                { text: 'Where it is necessary to give particulars of debt, expenses or damages and those particulars exceed 3 folios, they must be set out in a separate document referred to in the pleading and the pleading must state whether the document has already been served, and, if so, when, or is to be served with the pleading.', cite: 'O.18 r.12(2), Rules of the High Court (Cap. 4A)' },
              ],
              table: {
                headers: ['Point', 'Provision', 'What it actually provides'],
                rows: [
                  ['Specific pleading, and its three limbs', 'O.18 r.8(1)(a)-(c)', 'In a pleading subsequent to a statement of claim: any matter alleged to make the opposite party\'s claim or defence not maintainable; or which if not pleaded might take him by surprise; or which raises issues of fact not arising out of the preceding pleading'],
                  ['Recovery of land', 'O.18 r.8(2)', 'D must plead specifically every ground of defence; a plea of possession by himself or his tenant is not sufficient'],
                  ['Exemplary and provisional damages', 'O.18 r.8(3)', 'Specifically pleaded together with the facts relied on'],
                  ['Interest', 'O.18 r.8(4)', 'Any claim for interest under s48 of the Ordinance or otherwise must be pleaded specifically'],
                  ['General duty to particularise', 'O.18 r.12(1)', 'Every pleading must contain the necessary particulars of any claim, defence or other matter pleaded'],
                  ['Misrepresentation and equitable wrongs', 'O.18 r.12(1)(a)', 'Particulars of any misrepresentation, fraud, breach of trust, wilful default or undue influence relied on'],
                  ['Condition of mind', 'O.18 r.12(1)(b)', 'Particulars of the facts relied on for any disorder or disability of mind, malice, fraudulent intention or other condition of mind — except knowledge'],
                  ['Mitigation and amount', 'O.18 r.12(1)(c)', 'Where damages are claimed against the party pleading, particulars of facts relied on in mitigation of or otherwise in relation to the amount'],
                  ['Personal injuries', 'O.18 r.12(1A)-(1C)', 'A medical report and a statement of the special damages claimed served with the statement of claim; the Court may fix a period or make another order; both terms defined'],
                  ['Long particulars', 'O.18 r.12(2)', 'Over 3 folios, in a separate document referred to in the pleading, which must state whether and when it was served'],
                  ['"Folio"', 'English RSC O.1 r.4; White Book §18/12/57', '216 words, any figure such as a price or a date counting as a single word; not defined in the Hong Kong RHC'],
                  ['Knowledge and notice', 'O.18 r.12(4)(a)-(b)', 'The Court may on such terms as it thinks just order particulars of the facts relied on for knowledge, or particulars of the notice'],
                  ['Special damages', 'White Book §18/12/11', 'Must be particularised; general damages need not be'],
                  ['Convictions', 'O.18 r.7A(1)(a)-(c)', 'A statement of intention with particulars of the conviction and its date, the court which made it, and the issue to which it is relevant'],
                  ['Findings of adultery', 'O.18 r.7A(2)', 'The same, for a finding of adultery under s63 of the Evidence Ordinance'],
                  ['The opposite party\'s response', 'O.18 r.7A(3)(a)-(c)', 'Any denial of the conviction, allegation that it was erroneous, or denial of its relevance must be made in his pleading'],
                  ['Effect of a conviction', 'Evidence Ordinance (Cap. 8) s62(1)-(2)', 'Admissible to prove commission of the offence; once proved, the person is taken to have committed the offence and all the acts constituting it unless the contrary is proved'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG4', issue: 'material-facts-not-evidence', label: 'Material facts, not evidence' },
              { session: 'LG4', issue: 'further-and-better-particulars', label: 'Further and better particulars' },
              { session: 'LG4', issue: 'defence-counterclaim-and-reply', label: 'Defence, counterclaim and reply' },
              { session: 'LG4', issue: 'statement-of-claim', label: 'Drafting the statement of claim' },
            ],
          },

          {
            id: 'further-and-better-particulars',
            title: 'Further and better particulars',
            summary: 'The letter first, then the application — the test, the burden, and what happens if an order is not complied with.',
            triggers: {
              bullets: [
                'A pleading is vague, ambiguous or leaves the other side unable to prepare its case.',
                'A request for particulars has been sent and refused.',
                'A party wants particulars before serving its defence.',
                'An order for particulars has been made and ignored.',
                'The question asks how to respond to a badly drafted statement of claim.',
                'An application was made without any prior letter.',
                'The Court raises the adequacy of a pleading of its own motion.',
                'Particulars have been served as a freestanding document that does not reproduce the request.',
                'A party is waiting on particulars as the close of pleadings approaches.',
                'The particulars served carry no statement of truth.',
              ],
              routes: [
                { when: 'The question is what the pleading should have particularised', session: 'LG4', issue: 'pleading-specifically-and-particulars', label: 'Matters to be pleaded specifically, and particulars' },
                { when: 'Waiting for particulars is costing a right to amend', session: 'LG4', issue: 'pleadings-timetable', label: 'The pleadings timetable and close of pleadings' },
                { when: 'The deficiency goes beyond detail to the pleading\'s validity', session: 'LG4', issue: 'striking-out', label: 'Striking out a pleading' },
                { when: 'The particulars need their own verification', session: 'LG4', issue: 'statement-of-truth', label: 'The statement of truth (O.41A)' },
                { when: 'The format of the particulars is the issue', session: 'LG4', issue: 'formal-requirements', label: 'Formal requirements for a pleading' },
                { when: 'The answer is for the other side to amend instead', session: 'LG4', issue: 'amending-pleadings', label: 'Amending pleadings' },
              ],
            },
            answering: {
              flowchart: {
                title: 'From request to order',
                steps: [
                  {
                    id: 'identify',
                    label: 'Identify the deficiency precisely',
                    points: [
                      'Further and better particulars are sought where the other side has failed to plead the necessary particulars of its claim, defence or other matter.',
                      'The typical complaints: the pleading is vague and does not pin down the specific allegations; it is ambiguous and does not narrow the issues; it is uncertain, with information missing, so that the party cannot prepare its case.',
                      'A request has to identify what is deficient, allegation by allegation. A general complaint that the pleading is inadequate will not do.',
                    ],
                  },
                  {
                    id: 'letter',
                    label: 'Write the letter FIRST — this is the step that decides applications',
                    points: [
                      'O.18 r.12(6): where the applicant for an order under this rule DID NOT APPLY BY LETTER for the particulars he requires, the Court MAY REFUSE to make the order UNLESS of opinion that there were sufficient reasons for an application by letter not having been made.',
                      'So the rule is a discretion to refuse, with an escape hatch — not an absolute bar. But do not rely on the escape hatch.',
                      'The Court may refuse where there was no prior request by letter: Law Wing Ping v Prudential Insurance Co Ltd [2018] HKCFI 113 at paras 42-44.',
                    ],
                  },
                  {
                    id: 'apply',
                    label: 'If refused, apply — and note who may apply',
                    points: [
                      'O.18 r.12(3): the Court may order a party to serve on any other party particulars of any claim, defence or other matter stated in his pleading, or in any affidavit of his ordered to stand as a pleading, or a statement of the nature of the case on which he relies — on such terms as the Court thinks just.',
                      'O.18 r.12(3A): the Court may make an order under r.12(3) on the APPLICATION OF A PARTY OR OF ITS OWN MOTION. The own-motion power reflects the duty to identify issues early under the active case management objective in O.1A r.4(2)(b).',
                    ],
                  },
                  {
                    id: 'test',
                    label: 'Apply the test and know who carries the burden',
                    points: [
                      'O.18 r.12(3B): NO ORDER shall be made under r.12(3) unless the Court is of the opinion that the order is NECESSARY either for DISPOSING FAIRLY of the cause or matter or for SAVING COSTS.',
                      'Burden: the party seeking the particulars must show that they are not only RELEVANT but that the order is NECESSARY — Well Joint Trading Ltd v Chiu Chung Chiu (HCA 1768/2011) at para 17.',
                      'A decision of this nature is an exercise of judicial discretion: Sunny Tadjudin v Bank of America NA (HCMP 337/2012) at para 11. That matters on appeal — the threshold for interfering is high.',
                    ],
                  },
                  {
                    id: 'timing',
                    label: 'Timing: normally not before the defence',
                    points: [
                      'O.18 r.12(5): an order under this rule shall NOT be made BEFORE SERVICE OF THE DEFENCE unless, in the opinion of the Court, the order is NECESSARY OR DESIRABLE TO ENABLE THE DEFENDANT TO PLEAD, or for some other special reason.',
                      'In practice that means a statement of claim so badly pleaded that the defendant cannot know enough about the plaintiff\'s case to draft a defence.',
                      'Otherwise, wait: particulars are normally a post-defence exercise.',
                      'And note the interaction with the timetable — an outstanding request or order for particulars does not postpone the close of pleadings: O.18 r.20(2).',
                    ],
                  },
                  {
                    id: 'form',
                    label: 'Formal requirements for the particulars themselves',
                    points: [
                      'All the O.18 r.6 formal requirements apply, because further and better particulars are a pleading.',
                      'Plus O.18 r.12(7): where particulars are given pursuant to a request or an order, the REQUEST OR ORDER SHALL BE INCORPORATED WITH THE PARTICULARS, each item of the particulars following immediately after the corresponding item of the request or order.',
                      'And they must be verified by a statement of truth: O.18 r.20A(1)-(2); O.41A r.1.',
                    ],
                  },
                  {
                    id: 'noncompliance',
                    label: 'If the order is not complied with',
                    points: [
                      'The party may be ordered to provide fresh responses, and such an order may be made on an "UNLESS" basis: Tenzer v Goh (HCPI 718/2011).',
                      'The Court may refuse the party permission to adduce evidence at trial on the as-yet unparticularised pleading: Discreet Ltd v Cubiertas y Mzov SA [1998] 1 HKC 108 (CFI).',
                      'Or the pleading may be struck out.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The letter requirement is the single most testable point. O.18 r.12(6) is a discretion to refuse, so state it as "the Court MAY refuse" and then cite Law Wing Ping for the fact that it does.',
                'The test is NECESSARY, not merely useful or relevant: O.18 r.12(3B). Well Joint Trading makes relevance insufficient on its own.',
                'The Court can order particulars of its OWN MOTION under r.12(3A) — an application is not the only route.',
                'Particulars before the defence need the r.12(5) gateway: necessary or desirable to enable the defendant to plead, or some other special reason.',
                'r.12(7) requires the request or order to be incorporated item by item. A standalone document that answers the request without reproducing it does not comply.',
                'Waiting for particulars does not stop the pleadings closing (r.20(2)), which can cost a party its O.20 r.3(1) right to amend once without leave.',
                'The particulars are a pleading, so they need a statement of truth of their own.',
              ],
            },
            skills: {
              bullets: [
                'Structure the advice as a sequence: identify the deficiency, write the letter, then apply if refused.',
                'For each item requested, say which allegation in the pleading it relates to and why the pleading as it stands does not allow the client to prepare its case.',
                'Address necessity head on, not just relevance — that is the r.12(3B) test and the Well Joint Trading burden.',
                'If the request is pre-defence, deal expressly with the r.12(5) gateway.',
                'Set out the particulars in the r.12(7) format: each item of the request, then the answer immediately under it.',
                'Where the other side has ignored an order, ask for an unless order rather than a bare fresh order.',
              ],
            },
            mistakes: {
              bullets: [
                'Applying to the Court without first requesting by letter.',
                'Arguing only relevance, without addressing necessity.',
                'Seeking particulars before the defence without engaging r.12(5).',
                'Serving particulars as a freestanding document without incorporating the request item by item.',
                'Forgetting the statement of truth on the particulars.',
                'Assuming the close of pleadings waits for outstanding particulars.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'No order shall be made under paragraph (3) unless the Court is of the opinion that the order is necessary either for disposing fairly of the cause or matter or for saving costs.', cite: 'O.18 r.12(3B), Rules of the High Court (Cap. 4A)' },
                { text: 'Where the applicant for an order under this rule did not apply by letter for the particulars he requires, the Court may refuse to make the order unless of opinion that there were sufficient reasons for an application by letter not having been made.', cite: 'O.18 r.12(6), Rules of the High Court (Cap. 4A)' },
                { text: 'Where particulars are given pursuant to a request, or order of the Court, the request or order shall be incorporated with the particulars, each item of the particulars following immediately after the corresponding item of the request or order.', cite: 'O.18 r.12(7), Rules of the High Court (Cap. 4A)' },
              ],
              table: {
                headers: ['Point', 'Source', 'What it actually provides'],
                rows: [
                  ['The power to order particulars', 'O.18 r.12(3)', 'The Court may order particulars of any claim, defence or other matter in a pleading, or in an affidavit ordered to stand as a pleading, or a statement of the nature of the case relied on, on such terms as it thinks just'],
                  ['Who may set it in motion', 'O.18 r.12(3A)', 'On the application of a party or of the Court\'s own motion'],
                  ['Active case management', 'O.1A r.4(2)(b)', 'The duty to identify the issues at an early stage underlies the own-motion power'],
                  ['The test', 'O.18 r.12(3B)', 'Necessary either for disposing fairly of the cause or matter or for saving costs'],
                  ['The burden', 'Well Joint Trading Ltd v Chiu Chung Chiu (HCA 1768/2011) para 17', 'The party seeking must show the particulars are not only relevant but that the order is necessary'],
                  ['Nature of the decision', 'Sunny Tadjudin v Bank of America NA (HCMP 337/2012) para 11', 'An exercise of judicial discretion'],
                  ['Letter first', 'O.18 r.12(6); Law Wing Ping v Prudential Insurance Co Ltd [2018] HKCFI 113 paras 42-44', 'The Court may refuse an order where no prior request by letter was made, unless there were sufficient reasons for not making one'],
                  ['Before the defence', 'O.18 r.12(5)', 'No order before service of the defence unless necessary or desirable to enable the defendant to plead, or for some other special reason'],
                  ['Format of the particulars', 'O.18 r.12(7)', 'The request or order must be incorporated, each item of particulars following immediately after the corresponding item'],
                  ['Verification', 'O.18 r.20A(1)-(2); O.41A r.1', 'Particulars are a pleading and must be verified by a statement of truth'],
                  ['Non-compliance: fresh responses', 'Tenzer v Goh (HCPI 718/2011)', 'A further order may be made, and may be on an "unless" basis'],
                  ['Non-compliance: evidence shut out', 'Discreet Ltd v Cubiertas y Mzov SA [1998] 1 HKC 108 (CFI)', 'The party may be refused permission to adduce evidence at trial on the unparticularised pleading'],
                  ['Close of pleadings unaffected', 'O.18 r.20(2)', 'Pleadings close notwithstanding an outstanding request or order for particulars'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG4', issue: 'pleading-specifically-and-particulars', label: 'Matters to be pleaded specifically, and particulars' },
              { session: 'LG4', issue: 'pleadings-timetable', label: 'The pleadings timetable and close of pleadings' },
              { session: 'LG4', issue: 'statement-of-truth', label: 'The statement of truth' },
              { session: 'LG4', issue: 'striking-out', label: 'Striking out a pleading' },
              { session: 'LG4', issue: 'formal-requirements', label: 'Formal requirements for a pleading' },
            ],
          },

          {
            id: 'pleading-in-the-alternative',
            title: 'Inconsistent allegations and pleading in the alternative',
            summary: 'O.18 r.10 and O.18 r.12A do different jobs — one governs a previous pleading, the other the same pleading.',
            triggers: {
              bullets: [
                'A reply says something that does not sit with the statement of claim.',
                'A defence denies a contract was signed and, in the alternative, relies on its terms.',
                'A party wants to run two factually inconsistent cases.',
                'A pleading with alternatives is said not to need a statement of truth.',
                'A later pleading raises a new ground of claim not in the earlier one.',
                'Two accounts are different but not mutually exclusive, and a party says that is enough.',
                'Paragraphs are labelled "in the alternative" but simply contradict each other.',
              ],
              routes: [
                { when: 'The cure is to amend the earlier pleading', session: 'LG4', issue: 'amending-pleadings', label: 'Amending pleadings' },
                { when: 'The alternatives affect who verifies and how', session: 'LG4', issue: 'statement-of-truth', label: 'The statement of truth — O.41A r.2(2)' },
                { when: 'The inconsistency is in a defence or reply', session: 'LG4', issue: 'defence-counterclaim-and-reply', label: 'Defence, counterclaim and reply' },
                { when: 'The pleading is embarrassing enough to strike out', session: 'LG4', issue: 'striking-out', label: 'Striking out a pleading' },
                { when: 'The real complaint is about evidence or argument in the pleading', session: 'LG4', issue: 'material-facts-not-evidence', label: 'Material facts, not evidence' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Which rule applies?',
                steps: [
                  {
                    id: 'which',
                    label: 'Ask first: inconsistent with a PREVIOUS pleading, or within the SAME one?',
                    points: [
                      'Inconsistent with a PREVIOUS pleading of his own — O.18 r.10(1): a party shall not in any pleading make any allegation of fact, OR RAISE ANY NEW GROUND OF CLAIM, inconsistent with a previous pleading of his.',
                      {
                        text: 'Inconsistent within the SAME pleading — O.18 r.12A: a party MAY make an allegation of fact inconsistent with another allegation of fact in the same pleading, but only if BOTH limbs are satisfied:',
                        points: [
                          '(a) the party has REASONABLE GROUNDS for so doing.',
                          '(b) AND the allegations are MADE IN THE ALTERNATIVE.',
                        ],
                      },
                      'The outline runs these together. They are different rules with different consequences, and identifying which one is engaged is the first step.',
                    ],
                  },
                  {
                    id: 'meaning',
                    label: 'What "inconsistent" means',
                    points: [
                      '"Inconsistent" means new or different — the allegations need NOT be mutually exclusive: Goldon Investment Ltd v NPH International Holdings Ltd (HCA 5457/1999, Ma J, 07.06.2002).',
                      'That is a wide test. A reply that introduces a materially different account of the same events is caught even though both accounts could theoretically be true.',
                    ],
                  },
                  {
                    id: 'remedy',
                    label: 'If it is inconsistent with a previous pleading, the remedy is amendment',
                    points: [
                      'O.18 r.10(2): paragraph (1) shall not be taken as prejudicing the right of a party to AMEND, OR APPLY FOR LEAVE TO AMEND, his previous pleading so as to plead the allegations or claims IN THE ALTERNATIVE.',
                      'So r.10(2) is not a licence to plead the inconsistency in the later pleading. It preserves the route back: amend the EARLIER pleading under O.20 so that both versions stand there, in the alternative.',
                      'Which puts the O.20 analysis in play — once without leave before the close of pleadings, with leave after.',
                    ],
                  },
                  {
                    id: 'goodbad',
                    label: 'Test the alternatives against the lecture\'s two examples',
                    points: [
                      'PROPER alternatives, on a claim relying on a written contract: (1) the defendant had no agreement with the plaintiff based on the written contract because he did not sign it; and (2) in the alternative, he admits an agreement with the plaintiff, but based on some other written documents or made orally, so that the plaintiff\'s written contract does not bind him in the way alleged.',
                      'IMPROPER: (1) the defendant did not sign the contract and so was not privy to it; and (2) in the alternative, even if he did sign it, the written contract contained terms the plaintiff does not rely on, such that the defendant is not liable. The vice is that the two do not answer the same question — did the defendant sign or not — and the second concedes the first away.',
                      'The distinction to hold on to: alternatives are proper where each is a complete answer on a different factual footing; improper where the second simply contradicts the first on the very fact in issue.',
                    ],
                  },
                  {
                    id: 'verify',
                    label: 'Alternatives still have to be verified',
                    detail: 'O.41A r.2(2) is express: a pleading must be verified by a statement of truth notwithstanding that the party has made an allegation of fact in accordance with O.18 r.12A which is inconsistent with another allegation of fact in the same pleading. Pleading in the alternative is not a reason to leave the statement of truth off.',
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'r.10(2) is about the RIGHT TO AMEND a previous pleading. It is not the source of the "reasonable grounds and in the alternative" permission — that is r.12A, and it operates within a single pleading.',
                '"Inconsistent" is wide: new or different is enough, and the allegations need not be mutually exclusive (Goldon Investment).',
                'r.10(1) catches a new GROUND OF CLAIM as well as an allegation of fact.',
                'Both r.12A limbs must be satisfied — reasonable grounds AND made in the alternative. Labelling a paragraph "in the alternative" without reasonable grounds does not save it.',
                'Pleading in the alternative never dispenses with the statement of truth: O.41A r.2(2).',
                'A reply that contradicts the statement of claim is the classic r.10(1) breach, and the answer is to amend the statement of claim, not to leave the reply as it stands.',
              ],
            },
            skills: {
              bullets: [
                'Say which pleading the inconsistency is with — the same one or an earlier one — before naming a rule.',
                'Where alternatives are proposed, state the reasonable grounds for each, and label them expressly as alternatives.',
                'Where the inconsistency is with an earlier pleading, advise the amendment route and then run the O.20 analysis (is it before the close of pleadings?).',
                'Test proposed alternatives by asking whether each is a complete answer on its own factual footing.',
              ],
            },
            mistakes: {
              bullets: [
                'Citing O.18 r.10(2) as the authority for pleading in the alternative — that is r.12A.',
                'Assuming "inconsistent" requires the allegations to be mutually exclusive.',
                'Writing "in the alternative" over paragraphs that simply contradict each other on the fact in issue.',
                'Curing an inconsistency by amending the LATER pleading when it is the earlier one that needs to carry both versions.',
                'Omitting the statement of truth because the pleading contains alternatives.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'A party shall not in any pleading make any allegation of fact, or raise any new ground of claim, inconsistent with a previous pleading of his.', cite: 'O.18 r.10(1), Rules of the High Court (Cap. 4A)' },
                { text: 'Paragraph (1) shall not be taken as prejudicing the right of a party to amend, or apply for leave to amend, his previous pleading so as to plead the allegations or claims in the alternative.', cite: 'O.18 r.10(2), Rules of the High Court (Cap. 4A)' },
              ],
              table: {
                headers: ['Point', 'Source', 'What it actually provides'],
                rows: [
                  ['Inconsistency with a previous pleading', 'O.18 r.10(1)', 'No allegation of fact, and no new ground of claim, inconsistent with a previous pleading of his own'],
                  ['The amendment route', 'O.18 r.10(2)', 'Preserves the right to amend, or apply for leave to amend, the PREVIOUS pleading so as to plead the allegations or claims in the alternative'],
                  ['Alternatives within one pleading', 'O.18 r.12A(a)-(b)', 'Permitted if the party has reasonable grounds for so doing AND the allegations are made in the alternative'],
                  ['What "inconsistent" means', 'Goldon Investment Ltd v NPH International Holdings Ltd (HCA 5457/1999, Ma J, 07.06.2002)', 'New or different; the allegations need not be mutually exclusive'],
                  ['Verification unaffected', 'O.41A r.2(2)', 'A pleading must still be verified notwithstanding inconsistent alternative allegations made under O.18 r.12A'],
                  ['Amendment mechanics', 'O.20 rr.3(1), 5(1)', 'Once without leave before the close of pleadings; otherwise with leave on such terms as may be just'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG4', issue: 'amending-pleadings', label: 'Amending pleadings' },
              { session: 'LG4', issue: 'statement-of-truth', label: 'The statement of truth' },
              { session: 'LG4', issue: 'defence-counterclaim-and-reply', label: 'Defence, counterclaim and reply' },
              { session: 'LG4', issue: 'material-facts-not-evidence', label: 'Material facts, not evidence' },
            ],
          },
          {
            id: 'statement-of-claim',
            title: 'Drafting the statement of claim',
            summary: 'The prayer for relief, the cause-of-action constraint tied to the writ, and the date the writ was issued.',
            triggers: {
              bullets: [
                'A remedy is wanted at trial that does not appear in the statement of claim.',
                'The statement of claim pleads a cause of action the writ never mentioned.',
                'The claim is for personal injuries.',
                'The question asks what is missing from a draft statement of claim.',
                'Costs were not claimed in the prayer for relief.',
                'The claim as pleaded goes further than the writ\'s general indorsement.',
                'The date the writ was issued does not appear on the pleading.',
                'The document is a counterclaim and the question is what it must contain.',
                'Interest is wanted but was never pleaded.',
              ],
              routes: [
                { when: 'The question is whether a paragraph is fact, evidence or argument', session: 'LG4', issue: 'material-facts-not-evidence', label: 'Material facts, not evidence' },
                { when: 'Something needed particularising or specific pleading', session: 'LG4', issue: 'pleading-specifically-and-particulars', label: 'Matters to be pleaded specifically, and particulars' },
                { when: 'The writ itself has to change', session: 'LG4', issue: 'amending-pleadings', label: 'Amending pleadings — O.20 rr.1 and 5' },
                { when: 'The heading, numbering or signature is in issue', session: 'LG4', issue: 'formal-requirements', label: 'Formal requirements for a pleading' },
                { when: 'The question is how the defendant must answer it', session: 'LG4', issue: 'defence-counterclaim-and-reply', label: 'Defence, counterclaim and reply' },
                { when: 'The claim discloses no reasonable cause of action', session: 'LG4', issue: 'striking-out', label: 'Striking out a pleading' },
                { when: 'You have to draft one from a client file, and the claim is contractual', session: 'LG5', issue: 'contract-claim-structure', label: 'Basic structure for a contractual claim' },
                { when: 'You have to draft one from a client file, and the claim is in tort', session: 'LG5', issue: 'tort-claim-structure', label: 'Basic structure for a tortious claim' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Building the statement of claim',
                steps: [
                  {
                    id: 'relief',
                    label: 'The prayer for relief: O.18 r.15(1)',
                    points: [
                      'A statement of claim must state SPECIFICALLY the relief or remedy which the plaintiff claims; but COSTS NEED NOT be specifically claimed.',
                      'In practice this is a "prayer for relief" set out at the end, and costs are included anyway.',
                      'Why it matters: the Court CANNOT GRANT RELIEF WHICH HAS NOT BEEN CLAIMED AT ALL — Belmont Finance Corp Ltd v Williams Furniture Ltd [1979] Ch 250, [1978] 1 All ER 118.',
                      'So go through the remedies the client actually wants — damages, a declaration, an injunction, specific performance, interest, costs — and check each appears.',
                    ],
                  },
                  {
                    id: 'causes',
                    label: 'The cause-of-action constraint: O.18 r.15(2), and note its second limb',
                    points: [
                      'A statement of claim must NOT contain any allegation or claim in respect of a cause of action UNLESS that cause of action is MENTIONED IN THE WRIT, or ARISES FROM FACTS which are the same as, or include or form part of, facts giving rise to a cause of action so mentioned.',
                      'BUT subject to that, a plaintiff MAY in his statement of claim ALTER, MODIFY OR EXTEND any claim made in the indorsement of the writ WITHOUT AMENDING THE INDORSEMENT. The outline omits this second limb, and it is what makes a generally indorsed writ workable.',
                      'So the question on the facts is whether the new cause of action shares the factual substratum of one already in the writ. If it does, no amendment of the writ is needed; if it does not, the writ itself must be amended under O.20 r.1 or r.5.',
                    ],
                  },
                  {
                    id: 'date',
                    label: 'The issue date: O.18 r.15(3)',
                    points: [
                      'Every statement of claim must BEAR ON ITS FACE a statement of the DATE ON WHICH THE WRIT IN THE ACTION WAS ISSUED.',
                      'This is separate from, and additional to, the O.18 r.6(1) requirement to state the year the writ was issued and the action number.',
                      'It is a small point that is easy to omit from a draft and easy to spot in an exam.',
                    ],
                  },
                  {
                    id: 'pi',
                    label: 'If it is a personal injuries claim',
                    points: [
                      {
                        text: 'The plaintiff must serve WITH the statement of claim two documents — O.18 r.12(1A):',
                        points: [
                          '(a) a MEDICAL REPORT.',
                          '(b) a STATEMENT OF THE SPECIAL DAMAGES CLAIMED.',
                        ],
                      },
                      'If they are not served with it, the Court may specify a period within which they are to be provided, or make such other order as it thinks fit — including dispensing with the requirement or staying the proceedings: O.18 r.12(1B).',
                      'O.18 r.12(1C) defines both: the medical report must substantiate ALL the personal injuries alleged and be one the plaintiff proposes to adduce in evidence at trial; the statement of special damages must give full particulars of expenses and losses already incurred and an ESTIMATE of any future expenses and losses, including loss of earnings and of pension rights.',
                    ],
                  },
                  {
                    id: 'body',
                    label: 'Then the body, on the ordinary rules',
                    points: [
                      'Material facts in summary form, not evidence, as brief as the nature of the case admits: O.18 r.7(1).',
                      'Particulars of anything within O.18 r.12(1), and of special damages.',
                      'Points of law may be raised (O.18 r.11) but not argued.',
                      'Note that O.18 r.8(1) does NOT apply to a statement of claim — it governs pleadings subsequent to one.',
                      'Formal requirements under O.18 r.6, and a statement of truth under O.18 r.20A.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The Court cannot grant relief never claimed (Belmont Finance). Omitting a remedy from the prayer is not a technicality — it loses the remedy.',
                'Costs need not be specifically claimed (r.15(1)), though they always are in practice.',
                'r.15(2) has a second limb that lets the plaintiff alter, modify or extend a claim WITHOUT amending the writ\'s indorsement, so long as the cause of action is mentioned in the writ or shares its facts.',
                'The r.15(3) date of issue is a separate requirement from the r.6(1) year and action number. Both appear.',
                'O.18 r.8(1) has no application to a statement of claim — do not criticise one for failing to plead limitation or illegality specifically.',
                'A counterclaim is treated as a statement of claim for r.15(1) and r.12(1A)-(1C): O.18 r.18(a). So a counterclaim needs its own prayer for relief.',
              ],
            },
            skills: {
              bullets: [
                'Draft the prayer last but check it first — list the client\'s objectives and confirm each has a corresponding head of relief.',
                'Where a new cause of action is proposed, state expressly whether it shares the facts of one mentioned in the writ, and say what follows if it does not.',
                'Include the date of issue of the writ in the draft.',
                'For a personal injuries claim, deal with the medical report and statement of special damages as service obligations, not optional extras.',
                'Cross-check the statement of claim against the writ\'s indorsement before advising that no amendment is needed.',
              ],
            },
            mistakes: {
              bullets: [
                'Leaving a remedy out of the prayer for relief.',
                'Assuming the writ must be amended whenever the statement of claim says something new — r.15(2) allows alteration, modification and extension within the same facts.',
                'Omitting the date on which the writ was issued.',
                'Serving a personal injuries statement of claim without the medical report or the statement of special damages.',
                'Applying O.18 r.8(1) to the statement of claim.',
                'Forgetting that a counterclaim needs its own prayer for relief.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'A statement of claim must state specifically the relief or remedy which the plaintiff claims; but costs need not be specifically claimed.', cite: 'O.18 r.15(1), Rules of the High Court (Cap. 4A)' },
                { text: 'Every statement of claim must bear on its face a statement of the date on which the writ in the action was issued.', cite: 'O.18 r.15(3), Rules of the High Court (Cap. 4A)' },
              ],
              table: {
                headers: ['Point', 'Source', 'What it actually provides'],
                rows: [
                  ['Prayer for relief', 'O.18 r.15(1)', 'Must state specifically the relief or remedy claimed; costs need not be specifically claimed'],
                  ['Relief not claimed cannot be granted', 'Belmont Finance Corp Ltd v Williams Furniture Ltd [1979] Ch 250, [1978] 1 All ER 118', 'The Court cannot grant relief which has not been claimed at all'],
                  ['Causes of action', 'O.18 r.15(2)', 'No allegation or claim for a cause of action unless mentioned in the writ or arising from the same, included or overlapping facts — but subject to that, P may alter, modify or extend any claim in the indorsement WITHOUT amending it'],
                  ['Date of issue', 'O.18 r.15(3)', 'Must bear on its face the date on which the writ was issued'],
                  ['Personal injuries documents', 'O.18 r.12(1A)-(1B)', 'A medical report and a statement of the special damages claimed served with the statement of claim; otherwise the Court may fix a period, dispense with the requirement, or stay the proceedings'],
                  ['What those documents must contain', 'O.18 r.12(1C)', 'A report substantiating ALL the injuries alleged which P proposes to adduce at trial; full particulars of expenses and losses already incurred plus an estimate of future ones, including loss of earnings and pension rights'],
                  ['Counterclaim treated as a statement of claim', 'O.18 r.18(a)', 'rr.12(1A), (1B), (1C) and 15(1) apply to a counterclaim as if it were a statement of claim and the defendant making it a plaintiff'],
                  ['Formal requirements and verification', 'O.18 r.6; O.18 r.20A', 'Apply to the statement of claim as to every pleading'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG5', issue: 'function-and-structure', label: 'What a statement of claim must do, and its four-part shape' },
              { session: 'LG5', issue: 'contract-claim-structure', label: 'Basic structure for a contractual claim' },
              { session: 'LG5', issue: 'tort-claim-structure', label: 'Basic structure for a tortious claim' },
              { session: 'LG4', issue: 'material-facts-not-evidence', label: 'Material facts, not evidence' },
              { session: 'LG4', issue: 'pleading-specifically-and-particulars', label: 'Matters to be pleaded specifically, and particulars' },
              { session: 'LG4', issue: 'defence-counterclaim-and-reply', label: 'Defence, counterclaim and reply' },
              { session: 'LG4', issue: 'amending-pleadings', label: 'Amending pleadings' },
              { session: 'LG4', issue: 'formal-requirements', label: 'Formal requirements for a pleading' },
            ],
          },

          {
            id: 'defence-counterclaim-and-reply',
            title: 'Defence, counterclaim and reply',
            summary: 'The traverse rules that decide what is admitted, set-off, the counterclaim as a separate action, and joinder of issue.',
            triggers: {
              bullets: [
                'A defence answers some allegations and passes over others in silence.',
                'A defence contains a bare general denial.',
                'The defendant has a money claim of its own against the plaintiff.',
                'The defendant wants to bring in a third party on its counterclaim.',
                'No reply has been served and the question is what the plaintiff is taken to have admitted.',
                'A denial is pleaded without reasons or without the defendant\'s own version.',
                'The plaintiff obtains judgment and the question is what becomes of the counterclaim.',
                'A defence of tender before action is raised.',
                'Both a reply and a defence to counterclaim are to be served.',
                'The defendant\'s cross-claim is unliquidated and the question is whether it can be set off.',
              ],
              routes: [
                { when: 'The deadline for the defence or reply is in issue', session: 'LG4', issue: 'pleadings-timetable', label: 'The pleadings timetable and close of pleadings' },
                { when: 'The matter had to be raised specifically or particularised', session: 'LG4', issue: 'pleading-specifically-and-particulars', label: 'Matters to be pleaded specifically, and particulars' },
                { when: 'The question is what the claim itself should have said', session: 'LG4', issue: 'statement-of-claim', label: 'Drafting the statement of claim' },
                { when: 'The defence contradicts itself or an earlier pleading', session: 'LG4', issue: 'pleading-in-the-alternative', label: 'Inconsistent allegations and pleading in the alternative' },
                { when: 'A new party must actually be served with the counterclaim', session: 'LG3', issue: 'serving-particular-parties', label: 'Serving particular kinds of party' },
                { when: 'The defence discloses no reasonable defence', session: 'LG4', issue: 'striking-out', label: 'Striking out a pleading' },
                { when: 'No defence was served at all, or no defence to counterclaim', session: 'LG6', issue: 'default-of-defence', label: 'Default judgment in default of defence (O.19)' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Working through the defence and what follows',
                steps: [
                  {
                    id: 'traverse',
                    label: 'The defence: start from "deemed admitted unless traversed"',
                    points: [
                      'O.18 r.13(1): subject to r.13(6), an allegation of fact made by a party in his pleading is DEEMED TO BE ADMITTED by the opposite party UNLESS it is TRAVERSED by that party in his pleading, or a joinder of issue under r.14 operates as a non-admission of it.',
                      'O.18 r.13(2): subject to r.13(5), a traverse may be made either by a DENIAL or by a STATEMENT OF NON-ADMISSION, and either EXPRESSLY OR BY NECESSARY IMPLICATION.',
                      'So the rule\'s vocabulary is "traverse", of which denial and non-admission are the two species. Using the right word is worth marks.',
                    ],
                  },
                  {
                    id: 'specific',
                    label: 'And the traverse must be SPECIFIC',
                    points: [
                      'O.18 r.13(3): every allegation of fact in a statement of claim or counterclaim which the party served does not intend to admit must be SPECIFICALLY traversed in his defence or defence to counterclaim — and A GENERAL DENIAL of such allegations, OR A GENERAL STATEMENT OF NON-ADMISSION of them, IS NOT A SUFFICIENT TRAVERSE.',
                      'That is the rule that kills the "the Defendant denies each and every allegation in the Statement of Claim" paragraph.',
                    ],
                  },
                  {
                    id: 'deny',
                    label: 'If you deny, r.13(5) imposes two further duties',
                    points: [
                      {
                        text: 'Where an allegation is traversed BY A DENIAL, the denying party must in his defence or defence to counterclaim — O.18 r.13(5)(a)-(b):',
                        points: [
                          '(a) STATE HIS REASONS for doing so.',
                          '(b) and, if he intends to put forward a DIFFERENT VERSION OF EVENTS from the claimant\'s, STATE HIS OWN VERSION.',
                        ],
                      },
                      'Practice guidance on when to use which: ADMIT where there is really no controversy (White Book §18/13/2); DENY where it is within the defendant\'s own knowledge that the allegation is false (Blue Book O.18 [5606]); NOT ADMIT where the defendant has no knowledge of the truth of the allegation and wishes to put the plaintiff to proof (Blue Book O.18 [5606]).',
                      'A defendant who denies must set out his POSITIVE case; otherwise he is not entitled to call evidence of fact contrary to the plaintiff\'s contention (White Book §18/13/5).',
                    ],
                  },
                  {
                    id: 'silence',
                    label: 'Silence: r.13(6) is the qualification to the deeming rule',
                    detail: 'A party who (a) fails to deal with an allegation but (b) has set out in his defence or defence to counterclaim the NATURE OF HIS CASE in relation to the issue to which that allegation is relevant, IS TO BE TAKEN TO REQUIRE THAT ALLEGATION TO BE PROVED. So silence is not automatically an admission where the defence has engaged with the issue — which is why r.13(1) opens "Subject to paragraph (6)".',
                  },
                  {
                    id: 'setoff',
                    label: 'Set-off: O.18 r.17',
                    points: [
                      'Where a claim by a defendant to a SUM OF MONEY (WHETHER OF AN ASCERTAINED AMOUNT OR NOT) is relied on AS A DEFENCE to the whole or part of the plaintiff\'s claim, it may be INCLUDED IN THE DEFENCE and set off against that claim — WHETHER OR NOT IT IS ALSO ADDED AS A COUNTERCLAIM.',
                      'Both parenthetical limbs matter: an unliquidated cross-claim can be a set-off, and set-off and counterclaim are not alternatives — the same claim can do both jobs.',
                      'The purpose is to avoid a multiplicity of proceedings: the plaintiff\'s claim is reduced by the defendant\'s.',
                      'Set-off must be pleaded specifically: SC Chow & Associates Ltd v Chow Kit Ming [1997] 2 HKC 96 (HC).',
                      'Note the related O.18 r.16: a defence of tender before action is unavailable unless and until the amount alleged to have been tendered has been paid into court under O.22.',
                    ],
                  },
                  {
                    id: 'counterclaim',
                    label: 'Counterclaim: O.15 rr.2-3',
                    points: [
                      'O.15 r.2(1): a defendant who alleges he has any claim or is entitled to any relief or remedy against a plaintiff in respect of ANY MATTER (WHENEVER AND HOWEVER ARISING) may, INSTEAD OF BRINGING A SEPARATE ACTION, counterclaim — and where he does so he MUST ADD THE COUNTERCLAIM TO HIS DEFENCE. Hence one document, titled "Defence and Counterclaim", with a defence section and a counterclaim section.',
                      'O.15 r.2(2): the joinder rule in O.15 r.1 applies to a counterclaim AS IF IT WERE A SEPARATE ACTION, the counterclaiming defendant were the plaintiff and the party against whom it is made a defendant.',
                      'O.15 r.2(3): a counterclaim may be PROCEEDED WITH notwithstanding that judgment is given for the plaintiff on the claim, OR THAT THE ACTION IS STAYED, DISCONTINUED OR DISMISSED. The outline gives only the judgment limb.',
                      'O.15 r.2(4): where the counterclaim is established and there is a BALANCE in favour of one party, the Court may give judgment for the balance — without affecting its discretion as to costs.',
                      'Adding a new party: O.15 r.3(1) allows joining another person (whether or not already a party) only where the defendant alleges that person is LIABLE TO HIM ALONG WITH THE PLAINTIFF in respect of the counterclaim\'s subject matter, or claims relief RELATING TO OR CONNECTED WITH the original subject matter. It is not an at-large power.',
                      'Mechanics for a new party: add the name to the title, issue the counterclaim out of the Registry, and serve a sealed copy with a Form No. 14 acknowledgement of service, the originating process and all other pleadings served; that person then becomes a party from the time of service: O.15 r.3(2). O.10-O.13 apply as if the counterclaim were a writ: O.15 r.3(5).',
                      'Timing: where the person served is already a party, service must be within the O.18 r.2 period for the defence to which the counterclaim is added: O.15 r.3(3).',
                    ],
                  },
                  {
                    id: 'reply',
                    label: 'Reply and joinder of issue: O.18 r.14',
                    points: [
                      'A reply is the plaintiff\'s response to the defence, and is needed only for compliance with O.18 r.8: O.18 r.3(1).',
                      'O.18 r.14(1): if there is no reply to a defence, there is an IMPLIED JOINDER OF ISSUE on that defence.',
                      'O.18 r.14(2): subject to r.14(3), at the close of pleadings there is an implied joinder of issue on the pleading LAST SERVED, and a party may EXPRESSLY join issue on the next preceding pleading.',
                      'O.18 r.14(3): there can be NO joinder of issue, implied or expressed, ON A STATEMENT OF CLAIM OR COUNTERCLAIM. A defendant cannot answer a statement of claim by joinder of issue — it must plead to it.',
                      'O.18 r.14(4): a joinder of issue operates as a NON-ADMISSION of every material allegation of fact in the pleading joined on — unless, on an EXPRESS joinder, an allegation is excepted and stated to be admitted, in which case the express joinder is a non-admission of every other allegation.',
                    ],
                  },
                ],
              },
            },
            skeleton: {
              table: {
                headers: ['Response to an allegation', 'When to use it', 'What the rules require', 'Source'],
                rows: [
                  ['Admit', 'Where there is really no controversy', 'Nothing further', 'White Book §18/13/2'],
                  ['Deny', 'Where it is within D\'s own knowledge that the allegation is false', 'State the reasons; and if a different version of events is intended, state that version', 'O.18 r.13(5)(a)-(b); Blue Book O.18 [5606]'],
                  ['Not admit', 'Where D has no knowledge of the truth and puts P to proof', 'A traverse by statement of non-admission; must still be specific', 'O.18 r.13(2)-(3); Blue Book O.18 [5606]'],
                  ['A general denial of everything', 'Never', 'Not a sufficient traverse — the allegations are deemed admitted', 'O.18 r.13(3)'],
                  ['Silence, with the nature of D\'s case on the issue set out', 'Where the defence engages the issue elsewhere', 'D is taken to require the allegation to be proved', 'O.18 r.13(6)'],
                  ['Silence, with nothing on the issue', 'Never', 'Deemed admitted', 'O.18 r.13(1)'],
                  ['Money cross-claim used as a defence', 'Where D has a money claim, liquidated or not', 'Include in the defence and set off; may also be a counterclaim; plead specifically', 'O.18 r.17; SC Chow & Associates Ltd v Chow Kit Ming [1997] 2 HKC 96'],
                  ['Money or other claim pursued as a claim', 'Where D wants relief, not just a reduction', 'Add the counterclaim to the defence in one document', 'O.15 r.2(1)'],
                  ['No reply to the defence', 'Where P simply does not admit the defence', 'Implied joinder of issue — a non-admission of every material allegation', 'O.18 r.14(1), (4)'],
                ],
              },
            },
            lookOut: {
              bullets: [
                'The rule\'s word is TRAVERSE. A denial and a statement of non-admission are both traverses; the distinction between them controls what r.13(5) then requires.',
                'A general denial or a general non-admission is NOT a sufficient traverse (r.13(3)) — so the allegations it purports to answer are deemed admitted under r.13(1).',
                'A denial without reasons, or without D\'s own version where D has one, does not comply with r.13(5), and D who does not set out his positive case cannot call contrary evidence at trial (White Book §18/13/5).',
                'r.13(6) is a real qualification: silence is not an admission where the defence has set out the nature of D\'s case on the relevant issue.',
                'Set-off works for unliquidated as well as ascertained sums, and does not stop the same claim being a counterclaim too (r.17).',
                'A counterclaim survives judgment for the plaintiff AND a stay, discontinuance or dismissal of the action: O.15 r.2(3).',
                'O.15 r.3(1) is not an at-large joinder power — the new party must be alleged liable ALONG WITH the plaintiff on the counterclaim\'s subject matter, or the relief must relate to or be connected with the original subject matter.',
                'There can be no joinder of issue on a statement of claim or counterclaim: O.18 r.14(3).',
              ],
            },
            skills: {
              bullets: [
                'Go through the statement of claim paragraph by paragraph and give each allegation one of admit, deny or not admit — that is how a defence is built and how a question about one is answered.',
                'For every denial, write the reason and, where there is one, D\'s own version, because r.13(5) requires both.',
                'Say expressly what is deemed admitted by any allegation the defence passes over, and check r.13(6) before concluding.',
                'Distinguish set-off from counterclaim in terms of what each achieves: reduction of P\'s claim versus affirmative relief.',
                'Where a third party is to be brought in on a counterclaim, deal with the O.15 r.3(1) gateway before the r.3(2) mechanics.',
                'Where no reply is served, state the consequence in the rule\'s terms: an implied joinder of issue operating as a non-admission of every material allegation in the defence.',
              ],
            },
            mistakes: {
              bullets: [
                'Opening a defence with a general denial of every allegation.',
                'Denying without stating reasons or D\'s own version.',
                'Treating every unanswered allegation as admitted without checking r.13(6).',
                'Saying a set-off must be liquidated.',
                'Putting the counterclaim in a separate document from the defence.',
                'Assuming a counterclaim falls away if the action is discontinued or dismissed.',
                'Joining a third party to a counterclaim without the r.3(1) connection.',
                'Pleading a joinder of issue in answer to a statement of claim.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'Every allegation of fact made in a statement of claim or counterclaim which the party on whom it is served does not intend to admit must be specifically traversed by him in his defence or defence to counterclaim, as the case may be; and a general denial of such allegations, or a general statement of non-admission of them, is not a sufficient traverse of them.', cite: 'O.18 r.13(3), Rules of the High Court (Cap. 4A)' },
                { text: 'Where a claim by a defendant to a sum of money (whether of an ascertained amount or not) is relied on as a defence to the whole or part of a claim made by the plaintiff, it may be included in the defence and set-off against the plaintiff\'s claim, whether or not it is also added as a counterclaim.', cite: 'O.18 r.17, Rules of the High Court (Cap. 4A)' },
                { text: 'A counterclaim may be proceeded with notwithstanding that judgment is given for the plaintiff in the action or that the action is stayed, discontinued or dismissed.', cite: 'O.15 r.2(3), Rules of the High Court (Cap. 4A)' },
              ],
              table: {
                headers: ['Point', 'Source', 'What it actually provides'],
                rows: [
                  ['Deemed admission', 'O.18 r.13(1)', 'Subject to r.13(6), an allegation is deemed admitted unless traversed, or unless a joinder of issue under r.14 operates as a non-admission'],
                  ['Forms of traverse', 'O.18 r.13(2)', 'By denial or by statement of non-admission, expressly or by necessary implication'],
                  ['Specific traverse required', 'O.18 r.13(3)', 'A general denial or general non-admission is not a sufficient traverse'],
                  ['Duties on denial', 'O.18 r.13(5)(a)-(b)', 'State reasons; and state D\'s own version if a different version of events is intended'],
                  ['Silence where the case is set out', 'O.18 r.13(6)', 'D is taken to require the allegation to be proved'],
                  ['When to admit, deny or not admit', 'White Book §18/13/2, §18/13/5; Blue Book O.18 [5606]', 'Admit where no real controversy; deny where D knows the allegation is false; not admit where D lacks knowledge — and a denying D who does not set out his positive case cannot call contrary evidence'],
                  ['Set-off', 'O.18 r.17', 'A money claim, ascertained or not, relied on as a defence may be included in the defence and set off, whether or not also counterclaimed'],
                  ['Tender', 'O.18 r.16', 'A defence of tender before action is not available unless and until the amount is paid into court under O.22'],
                  ['Counterclaim must be added to the defence', 'O.15 r.2(1)', 'Any matter whenever and however arising; instead of a separate action; added to the defence'],
                  ['Counterclaim treated as a separate action', 'O.15 r.2(2)-(3)', 'O.15 r.1 applies as if it were a separate action; it survives judgment for P and a stay, discontinuance or dismissal'],
                  ['Judgment for the balance', 'O.15 r.2(4)', 'Where a counterclaim is established and there is a balance, the Court may give judgment for it, without affecting its costs discretion'],
                  ['Joining a new party', 'O.15 r.3(1)', 'Only where that person is alleged liable along with P on the counterclaim\'s subject matter, or relief is claimed relating to or connected with the original subject matter'],
                  ['Mechanics for a new party', 'O.15 r.3(2)-(3), (5)', 'Add to the title; issue out of the Registry; serve a sealed copy with Form No. 14, the originating process and all other pleadings; within the O.18 r.2 period where already a party; O.10-O.13 apply as if it were a writ'],
                  ['Reply only when needed', 'O.18 r.3(1)', 'Required only for compliance with r.8; otherwise r.14(1) applies'],
                  ['Joinder of issue', 'O.18 r.14(1)-(4)', 'Implied on the defence if no reply; implied on the last pleading at close of pleadings; none on a statement of claim or counterclaim; operates as a non-admission of every material allegation'],
                  ['Counterclaim and defence to counterclaim', 'O.18 r.18(a)-(b)', 'rr.12(1A)-(1C) and 15(1) apply to a counterclaim as to a statement of claim; rr.8(2), 16 and 17 apply to a defence to counterclaim as to a defence'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG4', issue: 'pleadings-timetable', label: 'The pleadings timetable and close of pleadings' },
              { session: 'LG4', issue: 'pleading-specifically-and-particulars', label: 'Matters to be pleaded specifically, and particulars' },
              { session: 'LG4', issue: 'statement-of-claim', label: 'Drafting the statement of claim' },
              { session: 'LG4', issue: 'pleading-in-the-alternative', label: 'Pleading in the alternative' },
              { session: 'LG3', issue: 'serving-particular-parties', label: 'Serving particular kinds of party (for a counterclaim against a new party)' },
            ],
          },

          {
            id: 'amending-pleadings',
            title: 'Amending pleadings (O.20)',
            summary: 'Three routes — without leave, by agreement, with leave — and the limitation-period exceptions.',
            triggers: {
              bullets: [
                'New facts have come to light, or an error has been found.',
                'The other side has applied to strike out and the pleading could be saved by amendment.',
                'A party wants to add a new cause of action after the limitation period has run.',
                'A party\'s name is wrong on the pleadings.',
                'The plaintiff obtained probate after the writ was issued and wants to sue as executor.',
                'An amendment has been made without leave and the other side objects.',
                'The parties are willing to consent to the amendment.',
                'A party has been left out, or the wrong party sued.',
                'Leave to amend was granted and nothing was done with it.',
                'The amended pleading is the second or third round of amendments.',
                'The trial date is close and the amendment would require it to be vacated.',
              ],
              routes: [
                { when: 'Everything turns on whether pleadings have closed', session: 'LG4', issue: 'pleadings-timetable', label: 'The pleadings timetable and close of pleadings' },
                { when: 'The amendment is to plead alternatives properly', session: 'LG4', issue: 'pleading-in-the-alternative', label: 'Inconsistent allegations and pleading in the alternative' },
                { when: 'The amendment is being offered to resist a strike-out', session: 'LG4', issue: 'striking-out', label: 'Striking out a pleading' },
                { when: 'The question is the colours, indorsement or a fresh document', session: 'LG4', issue: 'formal-requirements', label: 'Formal requirements for a pleading' },
                { when: 'The amendment needs verifying', session: 'LG4', issue: 'statement-of-truth', label: 'The statement of truth — O.20 r.13' },
                { when: 'The new cause of action must also fit the writ', session: 'LG4', issue: 'statement-of-claim', label: 'Drafting the statement of claim — O.18 r.15(2)' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Which amendment route?',
                steps: [
                  {
                    id: 'why',
                    label: 'Identify why the amendment is wanted',
                    points: [
                      'New facts have come to light; errors have been found; the issues at trial need to be clearly identified; or the opponent has applied to strike out and the pleading could be cured.',
                      'The reason matters, because on a leave application the Court is deciding whether the amendment is needed to determine the real questions in controversy.',
                    ],
                  },
                  {
                    id: 'noleave',
                    label: 'Route 1 — without leave, ONCE, before the close of pleadings',
                    points: [
                      'O.20 r.3(1): a party may, WITHOUT LEAVE, amend ANY PLEADING of his ONCE at any time BEFORE THE PLEADINGS ARE DEEMED TO BE CLOSED; and where he does so he must SERVE the amended pleading on the opposite party.',
                      'The plaintiff has a parallel right to amend THE WRIT once before the close of pleadings (O.20 r.1(1)) — but NOT for adding, omitting or substituting a party, altering the capacity in which a party sues or is sued, adding or substituting a new cause of action, or amending an indorsed statement of claim, unless done before service: O.20 r.1(3)(a)-(c).',
                      {
                        text: 'Consequential amendments — and note the asymmetry the outline flattens:',
                        points: [
                          'Amended statement of claim served on D: D may amend his defence, and the period is the period fixed by the rules for his defence OR 14 days after service of the amended statement of claim, WHICHEVER EXPIRES LATER (O.20 r.3(2)(a)-(b)).',
                          'Amended defence served on P: P may amend his reply, and the period is simply 14 days after service of the amended defence (O.20 r.3(3)(a)-(b)) — no "whichever is later".',
                        ],
                      },
                      'O.20 r.3(4): references to a defence and a reply include a counterclaim and a defence to counterclaim. O.20 r.3(5) applies r.3(2) where an amended counterclaim is served on a non-plaintiff party.',
                      'O.20 r.3(6): if a party who has already pleaded does not amend, he is taken to rely on his existing pleading in answer to the amended one, and O.18 r.14(2) has effect as if the amended pleading had been served when the original was.',
                      'Costs: the costs of and occasioned by any amendment made without leave in the writ of summons or any pleading are borne by the party making the amendment, unless the Court otherwise orders: O.62 r.3(3).',
                    ],
                  },
                  {
                    id: 'disallow',
                    label: 'The other side\'s answer to a without-leave amendment: O.20 r.4',
                    points: [
                      'Within 14 DAYS after service of the amended writ or pleading, that party may apply to the Court TO DISALLOW the amendment: O.20 r.4(1).',
                      'The test is counterfactual: if an application for leave had been made under r.5 AT THE DATE the amendment was made, and leave would have been REFUSED, the Court SHALL order the amendment (or that part of it) TO BE STRUCK OUT: O.20 r.4(2).',
                      'Any order may be on such terms as to costs or otherwise as the Court thinks just: O.20 r.4(3).',
                    ],
                  },
                  {
                    id: 'agreement',
                    label: 'Route 2 — by agreement',
                    points: [
                      'O.20 r.12(1): notwithstanding the rest of O.20, ANY PLEADING in any cause or matter may, BY WRITTEN AGREEMENT between the parties, be amended AT ANY STAGE of the proceedings. In practice, a Consent Summons.',
                      'O.20 r.12(2): the rule does NOT apply to an amendment consisting of the ADDITION, OMISSION OR SUBSTITUTION OF A PARTY. That always needs the Court.',
                    ],
                  },
                  {
                    id: 'leave',
                    label: 'Route 3 — with leave',
                    points: [
                      'O.20 r.5(1): subject to O.15 rr.6, 7 and 8 and the rest of r.5, the Court may AT ANY STAGE of the proceedings allow the plaintiff to amend his WRIT, or ANY PARTY to amend his PLEADINGS, on such terms as to costs or otherwise AS MAY BE JUST and in such manner (if any) as it may direct.',
                      'There is also the O.20 r.8 route: for the purpose of determining the real question in controversy, or correcting any defect or error, the Court may at any stage, of its OWN MOTION or on application, order a pleading or any other document to be amended: O.20 r.8(1). But r.8(1A) imposes a filter — the Court SHALL NOT order a pleading to be amended unless it is of the opinion that the order is NECESSARY either for disposing fairly of the cause or matter or for saving costs. (The same wording as the particulars test in O.18 r.12(3B).)',
                      'Procedure: Summons + draft amended pleading + affidavit if necessary, heard before a master. The summons is worded to give leave to file and serve the amended pleading within a stated number of days, leave to the other side to amend in response thereafter, and costs.',
                    ],
                  },
                  {
                    id: 'ketteman',
                    label: 'The discretion: "as may be just"',
                    points: [
                      'Ketteman v Hansel Properties Ltd [1987] AC 189 at 212F gives the principles: amendments should be made as are necessary to enable the real questions in controversy to be decided; they should not be refused solely because they result from an honest fault or mistake, since it is not the function of the court to punish parties for mistakes in the conduct of their cases; however blameworthy (short of bad faith) the failure to plead earlier, and however late the application, the Court should generally allow the amendment UNLESS IT WILL PREJUDICE THE OTHER PARTY; and there is no injustice if the other party can be COMPENSATED BY APPROPRIATE ORDERS AS TO COSTS.',
                      'Nowadays that is read subject to the O.1A underlying objectives. So prejudice is assessed twice over: to the other party, and to the system.',
                      {
                        text: 'In Subba Alvin v Houng Kee (Asia) Ltd [2012] 4 HKLRD 640 leave was refused for prejudice on two fronts:',
                        points: [
                          '(i) to the other party, having to prepare a new case at a late stage.',
                          '(ii) to the whole system, since the trial dates would have to be vacated to give that party time.',
                        ],
                      },
                      'Costs on a leave application: the Court retains a discretion (Wong Wai Lung v Bondfield Development Ltd (CACV 214/2006)), but the usual order is TWO SETS — the costs of and occasioned by the amendment to the other side in any event; and the costs of the hearing to whoever wins the argument about whether leave should be granted: Lessy SARL v Pacific Star Development Ltd [1996] 2 HKC 326 (HC), per Yam J at 327B-C.',
                    ],
                  },
                  {
                    id: 'limitation',
                    label: 'After the limitation period has expired: O.20 r.5(2)-(5)',
                    points: [
                      'The general position is that such an amendment will not be allowed — it would let a party get round a time bar by the back door.',
                      'But where the application is made AFTER any relevant period of limitation CURRENT AT THE DATE OF ISSUE OF THE WRIT has expired, the Court may nevertheless grant leave IF IT THINKS IT JUST TO DO SO, in three cases: r.5(3), (4) and (5).',
                      'r.5(3) — CORRECT THE NAME OF A PARTY, notwithstanding that the effect will be to substitute a new party, if the Court is satisfied the mistake was a GENUINE MISTAKE and was NOT MISLEADING or such as to cause any reasonable doubt as to the identity of the person intending to sue or intended to be sued. A misspelling with no doubt about identity is the paradigm.',
                      'r.5(4) — ALTER THE CAPACITY in which a party sues, if the new capacity is one which that party HAD at the commencement of the proceedings OR HAS SINCE ACQUIRED. The worked example: obtaining a grant of probate after the writ was issued, then amending to sue as executor (White Book §20/8/18).',
                      'r.5(5) — ADD OR SUBSTITUTE A NEW CAUSE OF ACTION, if it arises out of the SAME FACTS OR SUBSTANTIALLY THE SAME FACTS as a cause of action in respect of which relief HAS ALREADY BEEN CLAIMED IN THE ACTION BY THE PARTY APPLYING.',
                      'The r.5(5) words are given a BROAD AND LIBERAL interpretation, and require not a complete overlap of facts but a SIGNIFICANT overlap: Leung Kin Fook v Eastern Worldwide Co Ltd (No 2) [1997] 1 HKC 524 (CA).',
                    ],
                  },
                  {
                    id: 'after',
                    label: 'After leave is granted — two traps',
                    points: [
                      'O.20 r.9(1): if the party does not amend the document in accordance with the order before the expiration of the period specified in it — or, IF NO PERIOD IS SPECIFIED, 14 DAYS after the order was made — THE ORDER CEASES TO HAVE EFFECT, without prejudice to the Court\'s power to extend the period. Leave obtained is not leave banked.',
                      'Format: colours under PD 19.1 §2 (red, then green, then violet, then yellow); the O.20 r.10(2) indorsement naming the amendment date and the order or the rule relied on; a fresh document if the amendments are too numerous or long to read as alterations (O.20 r.10(1)).',
                      'And the amendment must be verified by a statement of truth: O.20 r.13(1)-(2).',
                    ],
                  },
                ],
              },
            },
            skeleton: {
              table: {
                headers: ['Situation', 'Route', 'Test or limit', 'Source'],
                rows: [
                  ['First amendment, pleadings still open', 'Without leave', 'Once only, before the close of pleadings; must serve', 'O.20 r.3(1)'],
                  ['First amendment of the writ, pleadings still open', 'Without leave', 'Once only; not for adding/omitting/substituting a party, altering capacity, a new cause of action, or an indorsed statement of claim, unless before service', 'O.20 r.1(1), (3)(a)-(c)'],
                  ['Responding to an amended statement of claim', 'Without leave', 'The rules\' period for the defence or 14 days after service, whichever expires LATER', 'O.20 r.3(2)(a)-(b)'],
                  ['Responding to an amended defence', 'Without leave', '14 days after service — no "whichever is later"', 'O.20 r.3(3)(a)-(b)'],
                  ['Objecting to a without-leave amendment', 'Apply to disallow', 'Within 14 days; struck out if leave would have been refused at the date of amendment', 'O.20 r.4(1)-(2)'],
                  ['Both sides agree', 'By written agreement', 'Any stage — but NOT to add, omit or substitute a party', 'O.20 r.12(1)-(2)'],
                  ['Pleadings closed, no agreement', 'With leave', '"As may be just"; Ketteman principles; prejudice to the other party and to the system', 'O.20 r.5(1); Ketteman [1987] AC 189, 212F; Subba Alvin [2012] 4 HKLRD 640'],
                  ['Court acting to determine the real question or correct an error', 'O.20 r.8', 'Own motion or on application — but only if necessary for disposing fairly of the matter or saving costs', 'O.20 r.8(1), (1A)'],
                  ['Wrong name, limitation expired', 'With leave', 'Genuine mistake, not misleading, no reasonable doubt as to identity', 'O.20 r.5(3)'],
                  ['Wrong capacity, limitation expired', 'With leave', 'The capacity was held at commencement or has since been acquired', 'O.20 r.5(4)'],
                  ['New cause of action, limitation expired', 'With leave', 'Arises out of the same or substantially the same facts as one already relied on — significant, not complete, overlap', 'O.20 r.5(5); Leung Kin Fook (No 2) [1997] 1 HKC 524 (CA)'],
                ],
              },
            },
            lookOut: {
              bullets: [
                'The without-leave right is ONCE, and it expires at the CLOSE OF PLEADINGS — which is why the O.18 r.20 date has to be fixed first, and why an outstanding request for particulars (which does not postpone that date under r.20(2)) can cost a party the right.',
                'The consequential-amendment periods are asymmetric: the defence gets the LATER of the rules\' period and 14 days (r.3(2)(b)); the reply gets 14 days flat (r.3(3)(b)).',
                'Amending the WRIT without leave is narrower than amending a pleading: O.20 r.1(3) excludes parties, capacity, new causes of action and an indorsed statement of claim.',
                'Agreement cannot add, omit or substitute a party: O.20 r.12(2).',
                'The Ketteman test is PREJUDICE, not lateness or fault. Lateness matters only through the prejudice it causes — and, post-CJR, prejudice to the system counts too (Subba Alvin).',
                'The limitation trigger in r.5(2) is a period "current at the DATE OF ISSUE OF THE WRIT", not at the date of the application.',
                'r.5(5) requires the new cause of action to overlap a cause of action for which THE APPLYING PARTY has already claimed relief in the action — not merely any fact in the case.',
                'An order granting leave CEASES TO HAVE EFFECT if the amendment is not made within the period specified, or 14 days if none: O.20 r.9(1).',
                'Costs on a without-leave amendment fall on the amending party by default: O.62 r.3(3). On a leave application the usual order is two sets, and only the second follows the event.',
              ],
            },
            skills: {
              bullets: [
                'Fix the close of pleadings before anything else — it decides which route is available.',
                'Take the routes in order: without leave, by agreement, then with leave. Do not go straight to a summons if the without-leave right is still alive.',
                'On a leave application, structure the argument as Ketteman does: is the amendment necessary to decide the real questions; what is the prejudice; can costs cure it.',
                'Where limitation has run, identify which of r.5(3), (4) or (5) is relied on and satisfy its specific test — they are three separate gateways, not one.',
                'Draft the summons with the three limbs the lecture models: leave to file and serve the amended pleading within a stated period; leave to the other side to amend in response; and costs.',
                'Deal with costs expressly — two sets, and say which way each goes.',
                'Diary the O.20 r.9(1) deadline the moment leave is granted.',
              ],
            },
            mistakes: {
              bullets: [
                'Applying for leave when the without-leave right under r.3(1) is still available.',
                'Treating the reply amendment period as "the later of" — it is 14 days flat.',
                'Assuming a party can be added by consent.',
                'Arguing lateness as a freestanding reason to refuse leave, rather than through prejudice.',
                'Measuring the limitation period from the date of the application rather than the date of issue of the writ.',
                'Relying on r.5(5) where the new cause of action overlaps facts in the case generally but not a cause of action for which the applicant has already claimed relief.',
                'Obtaining leave and then missing the r.9(1) period, so that the order lapses.',
                'Producing an amended pleading without the colour convention, the r.10(2) indorsement, or a fresh statement of truth.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'A party may, without the leave of the Court, amend any pleading of his once at any time before the pleadings are deemed to be closed and, where he does so, he must serve the amended pleading on the opposite party.', cite: 'O.20 r.3(1), Rules of the High Court (Cap. 4A)' },
                { text: 'An amendment may be allowed under paragraph (2) notwithstanding that the effect of the amendment will be to add or substitute a new cause of action if the new cause of action arises out of the same facts or substantially the same facts as a cause of action in respect of which relief has already been claimed in the action by the party applying for leave to make the amendment.', cite: 'O.20 r.5(5), Rules of the High Court (Cap. 4A)' },
                { text: 'The costs of and occasioned by any amendment made without leave in the writ of summons or any pleading shall be borne by the party making the amendment, unless the Court otherwise orders.', cite: 'O.62 r.3(3), Rules of the High Court (Cap. 4A)' },
              ],
              table: {
                headers: ['Point', 'Source', 'What it actually provides'],
                rows: [
                  ['Amending a pleading without leave', 'O.20 r.3(1)', 'Once, at any time before the close of pleadings; the amended pleading must be served'],
                  ['Amending the writ without leave', 'O.20 r.1(1), (3)(a)-(c)', 'Once before the close of pleadings — but not to add, omit or substitute a party, alter capacity, add or substitute a new cause of action, or amend an indorsed statement of claim, unless before service'],
                  ['Consequential amendment of the defence', 'O.20 r.3(2)(a)-(b)', 'D may amend; the period is the rules\' period for his defence or 14 days after the amended statement of claim is served, whichever expires later'],
                  ['Consequential amendment of the reply', 'O.20 r.3(3)(a)-(b)', 'P may amend; the period is 14 days after the amended defence is served'],
                  ['Counterclaims', 'O.20 r.3(4)-(5)', 'References to defence and reply include counterclaim and defence to counterclaim; r.3(2) applies to an amended counterclaim served on a non-plaintiff party'],
                  ['If the other party does not amend', 'O.20 r.3(6)', 'He is taken to rely on his existing pleading in answer to the amended one, and O.18 r.14(2) applies as if the amended pleading had been served when the original was'],
                  ['Disallowing an amendment made without leave', 'O.20 r.4(1)-(3)', 'Apply within 14 days of service; struck out if leave would have been refused had it been sought at the date of the amendment; terms as to costs as the Court thinks just'],
                  ['Amendment with leave', 'O.20 r.5(1)', 'At any stage, P may amend the writ and any party its pleadings, on such terms as to costs or otherwise as may be just'],
                  ['The Court\'s own-motion power', 'O.20 r.8(1), (1A)', 'To determine the real question in controversy or correct a defect or error — but a pleading may not be ordered amended unless necessary for disposing fairly of the matter or saving costs'],
                  ['The discretion', 'Ketteman v Hansel Properties Ltd [1987] AC 189, 212F', 'Allow amendments necessary to decide the real questions; do not refuse solely for honest fault or mistake; however blameworthy short of bad faith and however late, generally allow unless it prejudices the other party; no injustice where costs can compensate'],
                  ['Prejudice to the system', 'Subba Alvin v Houng Kee (Asia) Ltd [2012] 4 HKLRD 640', 'Refused for prejudice to the other party preparing a new case late, and to the system in vacating trial dates'],
                  ['Amendment by agreement', 'O.20 r.12(1)-(2)', 'Any pleading, by written agreement, at any stage — but not to add, omit or substitute a party'],
                  ['Limitation: the trigger', 'O.20 r.5(2)', 'Where the application is made after a limitation period current at the DATE OF ISSUE OF THE WRIT has expired, leave may nevertheless be granted if the Court thinks it just'],
                  ['Correcting a name', 'O.20 r.5(3)', 'Allowed even if the effect is to substitute a new party, if the mistake was genuine and not misleading or such as to cause reasonable doubt as to identity'],
                  ['Altering capacity', 'O.20 r.5(4); White Book §20/8/18', 'If the new capacity was held at the commencement of proceedings or has since been acquired — e.g. probate granted after issue of the writ'],
                  ['New cause of action', 'O.20 r.5(5); Leung Kin Fook v Eastern Worldwide Co Ltd (No 2) [1997] 1 HKC 524 (CA)', 'Same or substantially the same facts as a cause of action for which the applicant has already claimed relief; construed broadly and liberally, requiring significant not complete overlap'],
                  ['Leave lapses if unused', 'O.20 r.9(1)-(2)', 'The order ceases to have effect unless the amendment is made within the period specified, or 14 days if none, subject to the Court\'s power to extend and to any directions'],
                  ['Mechanics and format', 'O.20 r.10(1)-(2); PD 19.1 §2', 'A fresh document where alterations would be difficult to read; an indorsement stating the amendment, its date and the order or rule relied on; red, green, violet, yellow for successive amendments'],
                  ['Verification', 'O.20 r.13(1)-(2)', 'Amendments to a pleading or to its particulars must be verified by a statement of truth'],
                  ['Costs of the amendment', 'O.62 r.3(3)', 'Borne by the amending party unless the Court otherwise orders'],
                  ['Costs on a leave application', 'Lessy SARL v Pacific Star Development Ltd [1996] 2 HKC 326 (HC), 327B-C; Wong Wai Lung v Bondfield Development Ltd (CACV 214/2006)', 'The usual order is two sets — costs of and occasioned by the amendment to the other side in any event, and costs of the hearing to the successful party — but the Court retains its discretion'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG4', issue: 'pleadings-timetable', label: 'The pleadings timetable and close of pleadings' },
              { session: 'LG4', issue: 'pleading-in-the-alternative', label: 'Pleading in the alternative' },
              { session: 'LG4', issue: 'striking-out', label: 'Striking out a pleading' },
              { session: 'LG4', issue: 'formal-requirements', label: 'Formal requirements for a pleading' },
              { session: 'LG4', issue: 'statement-of-truth', label: 'The statement of truth' },
            ],
          },

          {
            id: 'striking-out',
            title: 'Striking out a pleading (O.18 r.19)',
            summary: 'The four grounds, the evidence rule that splits them, and the plain-and-obvious threshold.',
            triggers: {
              bullets: [
                'A claim is said to be hopeless in law.',
                'A pleading makes irrelevant allegations of dishonesty against the other side.',
                'A pleading is so prolix or ambiguous that a fair trial would be delayed.',
                'The same dispute has already been litigated and decided.',
                'A pleading has been served without a statement of truth.',
                'Parallel proceedings have been brought on the same facts.',
                'A claim is being pursued with no intention of taking it to trial.',
                'The applicant wants to file evidence and the ground chosen may not allow it.',
                'The defect could be cured by an amendment.',
                'The hearing is days away and no letter of grounds has gone out.',
                'The proceedings were begun by originating summons or petition.',
              ],
              routes: [
                { when: 'The pleading could be saved rather than removed', session: 'LG4', issue: 'amending-pleadings', label: 'Amending pleadings' },
                { when: 'The complaint is only a lack of detail', session: 'LG4', issue: 'further-and-better-particulars', label: 'Further and better particulars' },
                { when: 'The defect is a missing statement of truth', session: 'LG4', issue: 'statement-of-truth', label: 'The statement of truth — O.41A r.6' },
                { when: 'The embarrassment comes from pleading evidence or argument', session: 'LG4', issue: 'material-facts-not-evidence', label: 'Material facts, not evidence' },
                { when: 'The objection is really to the Court\'s jurisdiction', session: 'LG3', issue: 'contesting-jurisdiction', label: 'Contesting jurisdiction and forum non conveniens' },
                { when: 'You need the purpose of pleadings to frame the argument', session: 'LG4', issue: 'what-pleadings-do', label: 'What pleadings are and why they matter' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Running a strike-out',
                steps: [
                  {
                    id: 'what',
                    label: 'What striking out is',
                    detail: 'The Court orders the removal of a pleading, or part of it, from the Court file, so that it no longer forms part of the record between the parties. Note that O.18 r.19(1) also empowers the Court to order the pleading AMENDED instead, and to order the action STAYED OR DISMISSED, or judgment entered accordingly — so the application is not all-or-nothing.',
                  },
                  {
                    id: 'grounds',
                    label: 'Identify the ground — there are four, and they are not interchangeable',
                    points: [
                      'r.19(1)(a) — it DISCLOSES NO REASONABLE CAUSE OF ACTION OR DEFENCE. That is: the legal basis of the claim is unarguable or almost incontestably bad, or bound to fail. It is NOT enough that there is only a slim chance of success, and there is no striking out where the legal viability of the cause of action is sensitive to the facts (Blue Book O.18 [5853]).',
                      'r.19(1)(b) — it is SCANDALOUS, FRIVOLOUS OR VEXATIOUS. Scandalous: it makes an imputation — dishonesty, misconduct, outrageous conduct or bad faith — AND is irrelevant (Textbook §12-154); casting irrelevant aspersions on the other side\'s character. Frivolous: not capable of reasoned argument, without foundation, or cannot possibly succeed — a claim pursued though the party or its lawyers know it has no merit. Vexatious: oppressive, or brought or continued in bad faith — for instance to harass.',
                      'r.19(1)(c) — it may PREJUDICE, EMBARRASS OR DELAY THE FAIR TRIAL of the action. Pleading ambiguously, with irrelevant allegations, with unnecessarily lengthy statements of fact, or otherwise infringing the drafting rules (Blue Book O.18 [5853.2]).',
                      'r.19(1)(d) — it is OTHERWISE AN ABUSE OF THE PROCESS of the court. Re-litigation of matters previously decided, multiplicity of proceedings, lack of intention to proceed to trial (Blue Book O.18 [5853.3]).',
                      'Note the word "otherwise" in (d): it signals that (a) to (c) are themselves species of abuse, so (d) catches what the first three do not.',
                    ],
                  },
                  {
                    id: 'threshold',
                    label: 'State the threshold — it is high, and it is the answer to most questions',
                    points: [
                      'The power is DRASTIC, to be used SPARINGLY, and only in PLAIN AND OBVIOUS cases — a last resort: New China Hong Kong Group Ltd (in liq) v Ng Kwai Kai Kenneth [2011] HKCU 276.',
                      'So the analysis is not "would this claim probably fail?" but "is it plain and obvious that it must?"',
                      'Where the pleading could be cured, amendment (which r.19(1) itself permits the Court to order) is the proportionate answer, and it is the answer the underlying objectives push towards.',
                    ],
                  },
                  {
                    id: 'evidence',
                    label: 'The evidence rule — this is what splits the procedure in two',
                    points: [
                      'O.18 r.19(2): NO EVIDENCE shall be admissible on an application under paragraph (1)(a). So a ground (a) application is judged BY REFERENCE TO THE PLEADINGS ALONE.',
                      'Therefore: relying on ground (a) — issue an INTER PARTES SUMMONS WITHOUT an affidavit.',
                      'Relying on grounds (b), (c) or (d) — issue an INTER PARTES SUMMONS TOGETHER WITH an affidavit, since evidence is admissible to show why the action cannot be maintained.',
                      'Pleading grounds in the alternative is common, but the evidence must then be confined to the non-(a) grounds.',
                    ],
                  },
                  {
                    id: 'procedure',
                    label: 'Procedure and timing',
                    points: [
                      'The Court may act on its OWN MOTION or on application, at ANY STAGE of the proceedings: O.18 r.19(1).',
                      'Do it as promptly as possible, to avoid wasting time and costs on issues that should not be in the case.',
                      'The applicant must WRITE TO THE RESPONDENT setting out the broad grounds of the intended application AT LEAST FIVE CLEAR WORKING DAYS before the day of the hearing: Practice Direction 19.1 §5.',
                      'O.18 r.19(3): the rule applies, so far as applicable, to an originating summons and a petition as if it were a pleading.',
                    ],
                  },
                  {
                    id: 'sot',
                    label: 'The separate route: no statement of truth',
                    detail: 'A pleading not verified by a statement of truth may be struck out under O.41A r.6(1), on the application of any party (r.6(2)) — a discretion, and a different power from O.18 r.19. The alternative is an order under O.41A r.8 requiring the party to verify. Consider which is proportionate before applying to strike out.',
                  },
                ],
              },
            },
            skeleton: {
              table: {
                headers: ['Ground', 'What it means', 'Evidence?', 'Source'],
                rows: [
                  ['No reasonable cause of action or defence', 'Legal basis unarguable or almost incontestably bad; bound to fail — but not merely a slim chance of success, and not where viability is fact-sensitive', 'NO — summons without affidavit; pleadings alone', 'O.18 r.19(1)(a), (2); Blue Book O.18 [5853]'],
                  ['Scandalous', 'An imputation of dishonesty, misconduct, outrageous conduct or bad faith AND irrelevant', 'Yes — summons with affidavit', 'O.18 r.19(1)(b); Textbook §12-154'],
                  ['Frivolous', 'Not capable of reasoned argument, without foundation, cannot possibly succeed', 'Yes — summons with affidavit', 'O.18 r.19(1)(b)'],
                  ['Vexatious', 'Oppressive, or brought or continued in bad faith — e.g. to harass', 'Yes — summons with affidavit', 'O.18 r.19(1)(b)'],
                  ['May prejudice, embarrass or delay a fair trial', 'Ambiguous pleading, irrelevant allegations, unnecessary length, breach of the drafting rules', 'Yes — summons with affidavit', 'O.18 r.19(1)(c); Blue Book O.18 [5853.2]'],
                  ['Abuse of process', 'Re-litigation of decided matters, multiplicity of proceedings, no intention to proceed to trial', 'Yes — summons with affidavit', 'O.18 r.19(1)(d); Blue Book O.18 [5853.3]'],
                  ['No statement of truth', 'A separate power; the Court MAY strike out, or may instead order verification', 'Application by any party', 'O.41A rr.6, 8'],
                ],
              },
            },
            lookOut: {
              bullets: [
                'The threshold — plain and obvious, sparingly, a last resort — is the point most answers turn on. Lead with it.',
                'Ground (a) admits NO evidence at all (r.19(2)). Filing an affidavit on a ground (a) application is a procedural error, and it also signals that the case is really a (b)-(d) case.',
                'Scandalous has TWO limbs: the imputation and irrelevance. A relevant allegation of dishonesty — fraud properly pleaded and particularised — is not scandalous.',
                'r.19(1) lets the Court order the pleading AMENDED rather than struck out, and lets it stay or dismiss the action or enter judgment. Address the alternatives.',
                'There is no striking out where the legal viability of the cause of action is sensitive to the facts (Blue Book O.18 [5853]) — that is a trial question.',
                'PD 19.1 §5 requires a letter setting out the broad grounds at least five CLEAR WORKING days before the hearing. Missing it is its own problem.',
                'A missing statement of truth is O.41A r.6, not O.18 r.19 — and the Court may order verification instead (r.8).',
              ],
            },
            skills: {
              bullets: [
                'Name the ground by its sub-paragraph and apply its own test — the four grounds have four different tests.',
                'State the plain-and-obvious threshold early, then show why these facts meet or fall short of it.',
                'Deal with the evidence question expressly, because it decides whether an affidavit is filed.',
                'Where the defect is curable, say so and address why striking out rather than amendment is (or is not) proportionate.',
                'Advise on the PD 19.1 §5 letter and its timing as part of the procedural answer.',
                'If acting for the respondent, the first move is usually to propose an amendment that cures the defect.',
              ],
            },
            mistakes: {
              bullets: [
                'Filing an affidavit in support of a ground (a) application.',
                'Treating "the claim will probably fail" as enough.',
                'Calling a relevant allegation of dishonesty scandalous.',
                'Ignoring the Court\'s power under r.19(1) to order an amendment instead.',
                'Applying to strike out without the PD 19.1 §5 letter.',
                'Using O.18 r.19 for a missing statement of truth instead of O.41A r.6.',
                'Delaying the application, and so wasting costs on issues that should have been removed.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'No evidence shall be admissible on an application under paragraph (1)(a).', cite: 'O.18 r.19(2), Rules of the High Court (Cap. 4A)' },
                { text: 'This rule shall, so far as applicable, apply to an originating summons and a petition as if the summons or petition, as the case may be, were a pleading.', cite: 'O.18 r.19(3), Rules of the High Court (Cap. 4A)' },
              ],
              table: {
                headers: ['Point', 'Source', 'What it actually provides'],
                rows: [
                  ['The power', 'O.18 r.19(1)', 'The Court may, of its own motion or on application, at any stage, order struck out OR AMENDED any pleading or writ indorsement, or anything in it, on the four grounds — and may order the action stayed or dismissed or judgment entered accordingly'],
                  ['Ground (a)', 'O.18 r.19(1)(a); Blue Book O.18 [5853]', 'Discloses no reasonable cause of action or defence: unarguable or almost incontestably bad, bound to fail; not where there is a slim chance of success, nor where legal viability is fact-sensitive'],
                  ['Ground (b)', 'O.18 r.19(1)(b); Textbook §12-154', 'Scandalous (an imputation of dishonesty, misconduct, outrageous conduct or bad faith, AND irrelevant), frivolous (not capable of reasoned argument, without foundation, cannot possibly succeed) or vexatious (oppressive, or brought or continued in bad faith)'],
                  ['Ground (c)', 'O.18 r.19(1)(c); Blue Book O.18 [5853.2]', 'May prejudice, embarrass or delay the fair trial — ambiguity, irrelevant allegations, undue length, infringing the drafting rules'],
                  ['Ground (d)', 'O.18 r.19(1)(d); Blue Book O.18 [5853.3]', 'Otherwise an abuse of the process — re-litigation of decided matters, multiplicity of proceedings, no intention to proceed to trial'],
                  ['The threshold', 'New China Hong Kong Group Ltd (in liq) v Ng Kwai Kai Kenneth [2011] HKCU 276', 'A drastic power, to be used sparingly, and only in plain and obvious cases — a last resort'],
                  ['No evidence on ground (a)', 'O.18 r.19(2)', 'Judged by reference to the pleadings alone; inter partes summons without an affidavit'],
                  ['Evidence on grounds (b)-(d)', 'O.18 r.19(1)(b)-(d)', 'Inter partes summons together with an affidavit showing why the action cannot be maintained'],
                  ['Originating summonses and petitions', 'O.18 r.19(3)', 'The rule applies so far as applicable, as if the summons or petition were a pleading'],
                  ['Advance notice', 'Practice Direction 19.1 §5', 'The applicant must write to the respondent the broad grounds of the intended application at least five clear working days before the day of the hearing'],
                  ['Unverified pleading', 'O.41A rr.6(1)-(2), 8(1)-(2)', 'A separate power: the Court may by order strike out a pleading not verified by a statement of truth, on any party\'s application — or may instead order the person to verify it'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG4', issue: 'amending-pleadings', label: 'Amending pleadings' },
              { session: 'LG4', issue: 'material-facts-not-evidence', label: 'Material facts, not evidence' },
              { session: 'LG4', issue: 'statement-of-truth', label: 'The statement of truth' },
              { session: 'LG4', issue: 'further-and-better-particulars', label: 'Further and better particulars' },
              { session: 'LG4', issue: 'what-pleadings-do', label: 'What pleadings are and why they matter' },
            ],
          },
        ],
      },
    },

    LG5: {
      kind: 'LG',
      date: '2026-09-10',
      time: '09:00-11:30',
      mode: 'Face-to-face',
      authors: ['Julienne Jen', 'Ophelia Chan'],
      objectives: [
        'Draft a simple Statement of Claim in a contract and negligence case.',
      ],
      topicsCovered: [
        'Main function of a Statement of Claim — all the material facts and necessary particulars that establish the cause of action and the relief sought',
        'Guide and tools: Dramatis Personae, chronology, the 5-Level Case Analysis, the Basic Structures, the Pleadings Drafting Guide',
        'General approach to drafting a Statement of Claim — Steps 1 to 9',
        'Basic Structure for a Contractual Claim (Steps 1-11) and for a Tortious Claim (Steps 1-9)',
        'Review and critique of the sample drafts for Exercises 1 and 2',
      ],
      prep: {
        readings: [
          'The LG4 Lecture Notes Parts E, F & G, and this Lecture Outline',
          'RHC O.18 and O.41A (Cap. 4A) — the key rules for this lecture',
          'Appendices 1-8: the Dramatis Personae and chronology examples, the two 5-Level Case Analyses, the succinct summary, both Basic Structures and the Pleadings Drafting Guide',
        ],
        activities: [
          { title: 'Exercise 1: To Tung Restaurant Limited (Appendix 9)', instructions: 'Prepare a draft extract of the Skeletal Plan covering Steps 2 to 4 of the Basic Structure for a Statement of Claim in Contract, and a draft extract of the Statement of Claim covering up to Step 4 of the Skeletal Plan.' },
          { title: 'Exercise 2: Lost Treasures Antique Shop (Appendix 10)', instructions: 'Prepare a draft extract of the Skeletal Plan covering Steps 2, 4 and 6 of the Basic Structure for a Statement of Claim in Tort, and draft extracts of the Statement of Claim covering the accident, the Defendants’ breach and the Plaintiff’s loss and damage.' },
        ],
      },
      prepChecklist: [
        { id: 'read-lg4-parts', label: 'Review LG4 Lecture Notes Parts E, F & G and the LG5 Lecture Outline' },
        { id: 'read-orders', label: 'Read RHC O.18 and O.41A themselves' },
        { id: 'read-appendices', label: 'Work through Appendices 1-8 — the two case-analysis examples, both Basic Structures and the Drafting Guide' },
        { id: 'exercise-1', label: 'Exercise 1 (To Tung): skeletal plan extract for Steps 2-4, and the Statement of Claim extract to Step 4' },
        { id: 'exercise-2', label: 'Exercise 2 (Lost Treasures): skeletal plan extract for Steps 2, 4 and 6, and the Statement of Claim extracts for the accident, the breach and the loss' },
      ],
      keyTakeaways: [
        'A Statement of Claim sets out all the material facts and necessary particulars establishing the cause of action, and the relief sought — three limbs, all three of which have to be satisfied.',
        'Level 4 material facts are what gets pleaded; Level 5 evidence is what stays out. That is why the 5-Level Case Analysis is done before the draft, not after.',
        'Every draft has the same four parts: introduction and background; substantive contents; prayer for relief; statement of truth.',
        'In a tortious claim the accident paragraph is neutral (Step 2) and the fault paragraph is pointed (Step 4) — a neutral description is one D may admit.',
        'There is no set right or wrong answer in drafting. The tools are a scaffold to be used flexibly, and the Pleadings Drafting Guide is the checklist your finished draft is measured against.',
      ],
      examNotes: {
        intro: 'LG4 told you what a pleading may and may not contain. LG5 is the drafting paper: given a client file, produce a Statement of Claim. The issue types below run in the order the work is actually done — function and shape first, then the two fact-organising tools, then the 5-Level Case Analysis that turns facts into pleadable material facts, then the nine-step process, then the contract and tort structures that supply the paragraph order, then the endings (interest, prayer, jurisdiction plea), then the marking criteria, and finally the two worked examples end to end.',
        issueTypes: [
          {
            id: 'function-and-structure',
            title: 'What a statement of claim must do, and its four-part shape',
            summary: 'The function the lecture gives it in one sentence, and the skeleton every draft is hung on.',
            triggers: {
              bullets: [
                'The question says "draft a Statement of Claim" and you need somewhere to start.',
                'A draft has substantive paragraphs but never introduces the parties.',
                'A draft ends at the last paragraph of loss, with no prayer for relief.',
                'A draft is unsigned and unverified.',
                'The question asks what the function or purpose of a statement of claim is.',
                'You are asked to review and critique a sample draft rather than write one.',
                'The facts plainly give a cause of action but you cannot tell which of them have to go in.',
                'A paragraph is accurate and interesting and you cannot say what it is doing there.',
              ],
              routes: [
                { when: 'The question is about pleadings generally rather than this document', session: 'LG4', issue: 'what-pleadings-do', label: 'What pleadings are and why they matter' },
                { when: 'The issue is the prayer, the writ’s causes of action, or the date of issue', session: 'LG4', issue: 'statement-of-claim', label: 'Drafting the statement of claim' },
                { when: 'The issue is whether a paragraph is fact, evidence or argument', session: 'LG4', issue: 'material-facts-not-evidence', label: 'Material facts, not evidence' },
                { when: 'The formal heading, numbering or signature is in issue', session: 'LG4', issue: 'formal-requirements', label: 'Formal requirements for a pleading' },
                { when: 'The claim is contractual and you need the paragraph order', session: 'LG5', issue: 'contract-claim-structure', label: 'Basic structure for a contractual claim' },
                { when: 'The claim is in tort and you need the paragraph order', session: 'LG5', issue: 'tort-claim-structure', label: 'Basic structure for a tortious claim' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Fixing the shape before writing a word',
                steps: [
                  {
                    id: 'function',
                    label: 'Start from the function, because it decides what goes in',
                    points: [
                      'The main function of a statement of claim is to set out ALL the material facts AND necessary particulars that establish the plaintiff’s cause of action, AND the relief sought.',
                      {
                        text: 'That sentence contains three separate tests, and every paragraph you write has to pass the one that applies to it:',
                        points: [
                          'Material facts — O.18 r.7(1): a statement in summary form of the material facts relied on, NOT the evidence by which they are to be proved, as brief as the nature of the case admits.',
                          'Necessary particulars — O.18 r.12(1): every pleading must contain the necessary particulars of any claim, defence or other matter pleaded.',
                          'The relief sought — O.18 r.15(1): the relief or remedy claimed must be stated specifically, though costs need not be.',
                        ],
                      },
                      'Most deficient drafts satisfy the first limb and fail one of the other two. Check all three, separately.',
                    ],
                  },
                  {
                    id: 'structure',
                    label: 'Lay out the four parts',
                    points: [
                      'Introduction to the parties and necessary background.',
                      'Substantive contents — the cause of action, told in the order it happened.',
                      'Prayer for relief.',
                      'Statement of truth.',
                      'That is the whole document, and the Basic Structures in the appendices map straight onto it. In the contractual structure, Step 1 is the introduction, Steps 2-9 are the substantive contents, Step 10 is the prayer and Step 11 the verification; in the tortious structure, Step 1, Steps 2-7, Step 8 and Step 9 respectively.',
                    ],
                  },
                  {
                    id: 'coverage',
                    label: 'Test the draft for coverage against the legal ingredients',
                    points: [
                      'A statement of claim is complete when EVERY legal ingredient of the cause of action has at least one material fact pleaded in support of it.',
                      'That is exactly what Levels 3 and 4 of the 5-Level Case Analysis give you, which is why the analysis is done before the draft.',
                      'Level 5 evidence does not go into the pleading at all — it goes into the witness statements and affidavits.',
                      'Run the test the other way too: a paragraph that supports no legal ingredient and no head of relief is a paragraph to cut.',
                    ],
                  },
                  {
                    id: 'flex',
                    label: 'Remember the general note — there is no set right or wrong answer',
                    points: [
                      'The lecture says so expressly: with drafting there is no set right/wrong answer, and although the tools help, they should be used FLEXIBLY.',
                      'So the marks are not for reproducing the appendix step order. They are for a draft that is accurate, complete, logical and readable.',
                      'A step may be skipped where it has nothing to say on the facts — the appendices say so expressly for Step 1, for contract Step 4, and for tort Steps 3 and 5.',
                      'Steps may be reordered where it reads better — the contract structure expressly allows D’s knowledge to be pleaded before the contract, or between the contract and the terms.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The function sentence has three limbs. Drafts routinely plead the facts, then forget the particulars or the prayer.',
                '"Necessary background" is not everything the client told you. Both Basic Structures warn to keep it concise and avoid irrelevant details.',
                'Some background IS a material fact — ownership of the property in a claim for its loss; the employment relationship where vicarious liability is alleged; the goodwill owned in passing off. Those are pleaded because an ingredient needs them, not as scene-setting.',
                'The statement of truth is part of the document you were asked to draft, not an afterthought that someone else adds.',
                'The source of a fact belongs in the chronology and in the witness statements. It never belongs in the pleading.',
              ],
            },
            skills: {
              bullets: [
                'Write the four part headings on a blank page first and then fill them. It is much harder to lose the prayer for relief that way.',
                'Before drafting, list the legal ingredients down the left of a page and the material facts against each. A blank is a gap in the CLAIM, not a gap in the draft.',
                'When critiquing a draft, work the three limbs in order — facts, particulars, relief — rather than reading top to bottom hunting for errors.',
                'Keep asking of each paragraph: which ingredient or which head of relief does this support?',
              ],
            },
            mistakes: {
              bullets: [
                'Opening with the accident or the contract and never introducing the parties.',
                'Reciting the whole factual history because the client supplied it.',
                'Pleading the evidence — what a witness said, what a document says word for word — instead of the fact it proves.',
                'Stopping at the loss paragraph, with no prayer for relief and no statement of truth.',
                'Treating the appendix step numbers as a compulsory template rather than a checklist.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'Subject to the provisions of this rule and rules 7A, 10, 11 and 12, every pleading must contain, and contain only, a statement in a summary form of the material facts on which the party pleading relies for his claim or defence, as the case may be, but not the evidence by which those facts are to be proved, and the statement must be as brief as the nature of the case admits.', cite: 'O.18 r.7(1), Rules of the High Court (Cap. 4A)' },
                { text: 'A statement of claim must state specifically the relief or remedy which the plaintiff claims; but costs need not be specifically claimed.', cite: 'O.18 r.15(1), Rules of the High Court (Cap. 4A)' },
              ],
              table: {
                headers: ['Point', 'Source', 'What it actually provides'],
                rows: [
                  ['The function', 'LG5 Lecture Outline, Part A', 'To set out all the material facts and necessary particulars that establish the plaintiff’s cause of action and the relief sought'],
                  ['Material facts only', 'O.18 r.7(1)', 'A summary of the material facts relied on, not the evidence proving them, as brief as the nature of the case admits'],
                  ['Necessary particulars', 'O.18 r.12(1)', 'Every pleading must contain the necessary particulars of any claim, defence or other matter pleaded'],
                  ['The relief sought', 'O.18 r.15(1)', 'Must be stated specifically; costs need not be specifically claimed'],
                  ['Points of law', 'O.18 r.11', 'A party may by his pleading raise any point of law — raise, not argue'],
                  ['The four parts', 'LG5 Lecture Outline, Part B (Basic Structures)', 'Introduction to parties and necessary background; substantive contents; prayer for relief; statement of truth'],
                  ['Verification', 'O.18 r.20A; O.41A r.5(1)', 'The pleading must be verified by a statement of truth, in the prescribed form'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG5', issue: 'five-level-case-analysis', label: 'The 5-Level Case Analysis' },
              { session: 'LG5', issue: 'drafting-process', label: 'The nine-step drafting process' },
              { session: 'LG5', issue: 'drafting-guide-criteria', label: 'The Pleadings Drafting Guide' },
              { session: 'LG4', issue: 'statement-of-claim', label: 'Drafting the statement of claim' },
              { session: 'LG4', issue: 'material-facts-not-evidence', label: 'Material facts, not evidence' },
            ],
          },

          {
            id: 'case-analysis-tools',
            title: 'Dramatis Personae and the chronology',
            summary: 'The two organising tools that turn a bundle of instructions into facts you can plead — and a list of what is still missing.',
            triggers: {
              bullets: [
                'The instructions name a dozen people and the roles will not stay straight.',
                'Two documents give different dates, or different figures, for the same thing.',
                'You are asked what further information or investigation is required.',
                'The question asks who the parties to the action should be.',
                'A fact plainly matters but you cannot say how it would be proved.',
                'The facts arrive as letters, invoices and attendance notes rather than as a narrative.',
                'You are asked for the pre-drafting analysis rather than the draft.',
                'The same person is described three different ways across the file.',
              ],
              routes: [
                { when: 'The facts are organised and you now need the legal ingredients', session: 'LG5', issue: 'five-level-case-analysis', label: 'The 5-Level Case Analysis' },
                { when: 'The question is what order the whole job is done in', session: 'LG5', issue: 'drafting-process', label: 'The nine-step drafting process' },
                { when: 'The gap is a missing particular in a pleading already served', session: 'LG4', issue: 'further-and-better-particulars', label: 'Further and better particulars' },
                { when: 'The worry is that a fact is evidence rather than a material fact', session: 'LG4', issue: 'material-facts-not-evidence', label: 'Material facts, not evidence' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Organising the facts before the law',
                steps: [
                  {
                    id: 'dp',
                    label: 'Dramatis Personae — who is who',
                    points: [
                      'A list of the persons involved in the case.',
                      {
                        text: 'The information recorded generally includes:',
                        points: [
                          'The person’s name.',
                          'Their position or role.',
                          'A summary of their involvement in the case.',
                        ],
                      },
                      'Add the DEFINED TERM you will use for that person throughout — the Appendix 1 example carries a column for exactly that, and those defined terms carry straight into the pleading.',
                      'Group by side: the plaintiff and its people, then each defendant and its people, then "other parties" such as police officers and independent witnesses.',
                      'It answers the Step 3 question "who should be the parties to the action?". Someone who owed a duty or made a promise is a candidate defendant; someone who merely saw it happen is a witness.',
                    ],
                  },
                  {
                    id: 'chron',
                    label: 'Chronology — what happened, in date order',
                    points: [
                      'A list of the relevant events in DATE ORDER.',
                      {
                        text: 'The information recorded generally includes:',
                        points: [
                          'The date.',
                          'A description of the event.',
                          'The SOURCE of the information — a particular document, or a particular witness.',
                        ],
                      },
                      'The source column is the point of the exercise: it is where a fact with no proof shows up as a fact with an empty cell.',
                      'Use square brackets for what you do not yet have — the Appendix 2 example runs "[contract with Svarowski?]" and "[any other witnesses at the party?]" straight down its source column — so the gaps stay visible.',
                      'Record approximate dates as approximate ("Around October 2020 or before", "A day after"), because that is how they will have to be pleaded: "On or about ...".',
                    ],
                  },
                  {
                    id: 'use',
                    label: 'Use them to drive the draft and the further-instructions letter',
                    points: [
                      'The chronology gives the ORDER of the substantive paragraphs. A statement of claim is told chronologically, which is why both Basic Structures run contract or accident, then what followed, then breach, then consequences, then loss.',
                      'The Dramatis Personae gives the introductory paragraphs and the defined terms.',
                      'Anything still in square brackets when both are finished is your list of further instructions and further investigations.',
                      'Neither tool is filed and neither is a pleading. They are working documents for you.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The source column belongs to the chronology, not to the pleading. Naming the witness or the document in a statement of claim is pleading evidence, contrary to O.18 r.7(1).',
                'A date that cannot be precisely ascertained is pleaded as "On or about ..." — the chronology is where you notice that it cannot.',
                'Two sources giving different dates for the same event is a further-instructions point, not something to resolve silently in the draft.',
                'The Dramatis Personae is usually where vicarious liability surfaces: an individual named as the tortfeasor, and their employer named separately as a second defendant.',
                'Where a contract was made through agents, the Dramatis Personae is also what tells you to plead the agency and each agent’s authority.',
              ],
            },
            skills: {
              bullets: [
                'Build both before taking a view on the law. They are cheap, and they stop you drafting around a fact you have not noticed.',
                'Carry the defined terms from the Dramatis Personae into the draft unchanged, so the same person is never called two things.',
                'Keep the square-bracket queries alive into the skeletal plan. The model plans do, and they are what the further-instructions letter is written from.',
                'Record the source even for facts the client gave you orally — "the client" is a source, and it tells you the fact rests on his evidence alone.',
              ],
            },
            mistakes: {
              bullets: [
                'Writing the chronology from the client’s narrative alone and never recording a source.',
                'Leaving out the people who will not be parties — the witnesses are exactly who you will need later.',
                'Resolving a doubtful date by picking one, instead of flagging it and pleading "on or about".',
                'Carrying the source column into the pleading.',
                'Treating either tool as a document to be filed or served.',
              ],
            },
            authorities: {
              table: {
                headers: ['Tool', 'What it records', 'What it is for'],
                rows: [
                  ['Dramatis Personae', 'Name; position or role; summary of involvement; the defined term to be used', 'The introductory paragraphs, the defined terms, and deciding who the parties should be'],
                  ['Chronology', 'Date; description of event; source of information (document or witness)', 'The order of the substantive paragraphs, and identifying which facts have no proof yet'],
                  ['Why the source stays out of the pleading', 'O.18 r.7(1)', 'A pleading contains material facts, not the evidence by which they are to be proved'],
                  ['Conversations and documents', 'O.18 r.7(2)', 'The effect of a document or the purport of a conversation must, if material, be briefly stated; the precise words must not be, except so far as they are themselves material'],
                  ['Where the gaps go next', 'LG5 Lecture Outline, Part C Steps 1-2 and 8', 'Step 1 is investigation and research; Step 2 is organising; Step 8 asks whether further instructions are required'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG5', issue: 'five-level-case-analysis', label: 'The 5-Level Case Analysis' },
              { session: 'LG5', issue: 'drafting-process', label: 'The nine-step drafting process' },
              { session: 'LG5', issue: 'worked-contract-claim', label: 'Worked example: the commercial dishwashers claim' },
              { session: 'LG5', issue: 'worked-tort-claim', label: 'Worked example: the shopfront collision claim' },
            ],
          },

          {
            id: 'five-level-case-analysis',
            title: 'The 5-Level Case Analysis',
            summary: 'Area of law, cause of action, ingredients, material facts, evidence — and the four separate jobs the one grid does.',
            triggers: {
              bullets: [
                'The question asks you to prepare a case analysis, or hands you a partial one to complete.',
                'You have the facts but cannot tell which of them have to be pleaded.',
                'You are asked to assess the merits of the client’s case.',
                'You are asked what further evidence should be obtained.',
                'A draft pleads a breach but never pleads the term said to have been breached.',
                'A head of loss is claimed and nothing in the draft makes it recoverable.',
                'Two defendants are involved and the ingredients differ between them.',
                'The same facts support two causes of action and you are not sure how to handle both.',
              ],
              routes: [
                { when: 'The facts are not yet organised', session: 'LG5', issue: 'case-analysis-tools', label: 'Dramatis Personae and the chronology' },
                { when: 'The analysis is done and the draft is next', session: 'LG5', issue: 'drafting-process', label: 'The nine-step drafting process' },
                { when: 'The claim is contractual and you need the paragraph order', session: 'LG5', issue: 'contract-claim-structure', label: 'Basic structure for a contractual claim' },
                { when: 'The claim is tortious and you need the paragraph order', session: 'LG5', issue: 'tort-claim-structure', label: 'Basic structure for a tortious claim' },
                { when: 'The question is whether a particular fact is material or evidential', session: 'LG4', issue: 'material-facts-not-evidence', label: 'Material facts, not evidence' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Working the five levels',
                steps: [
                  {
                    id: 'levels',
                    label: 'The five levels, in order',
                    points: [
                      'Level 1 — the AREA OR AREAS OF LAW in question.',
                      'Level 2 — within each area of law, the CAUSE OR CAUSES OF ACTION and the REMEDIES that are relevant.',
                      'Level 3 — in respect of each cause of action or remedy, the LEGAL INGREDIENTS that have to be established.',
                      'Level 4 — in respect of each legal ingredient, the MATERIAL FACT OR FACTS in support.',
                      'Level 5 — in respect of each material fact, the EVIDENCE (and the method of proof) for that fact.',
                    ],
                  },
                  {
                    id: 'uses',
                    label: 'What the analysis is for — four jobs, not one',
                    points: [
                      'Drafting pleadings: the Level 4 material facts, which must cover ALL the Level 3 legal ingredients.',
                      'Drafting affidavits or witness statements: the Level 5 evidence.',
                      'Analysing the merits of the client’s case — whether, and how well, all the necessary legal ingredients can be established.',
                      'Deciding what further evidence should be obtained, by checking whether there is enough to prove all the necessary points.',
                      'So one grid answers the drafting question AND the advice question. Where an exam asks both, build it once and read it twice.',
                    ],
                  },
                  {
                    id: 'contract',
                    label: 'The Level 3 ingredients in a breach of contract claim',
                    points: [
                      'Existence of the contract.',
                      'The material terms.',
                      'Breach of those terms.',
                      'Recoverable loss — loss within D’s contemplation at the time of the contract. Both worked examples give this its own ingredient row, and the material fact under it is what D WAS TOLD before contracting.',
                    ],
                  },
                  {
                    id: 'tort',
                    label: 'The Level 3 ingredients in a negligence claim',
                    points: [
                      'Duty of care owed by the defendant to the plaintiff.',
                      'Where the employer is sued too: vicarious liability of the employer for the employee’s negligence — a separate ingredient, with its own material facts.',
                      'Breach of duty by each defendant, taken separately.',
                      'Breach of any statutory provision relied on, with the conviction and its date where there has been one.',
                      'Causation.',
                      'Damages — foreseeable, and not too remote.',
                    ],
                  },
                  {
                    id: 'fill',
                    label: 'Fill it in as a grid, then read it both ways',
                    points: [
                      'Down the ingredient column: is there a material fact against EVERY ingredient? A blank here is a claim that fails, not a draft that is short.',
                      'Across from each material fact: is there evidence? A blank here is a further-investigation point, not a pleading problem.',
                      'Square-bracket the evidence you expect to exist but have not seen. Both worked examples do this throughout, and it is what the further-instructions letter is written from.',
                      'Where there are two defendants, run separate ingredient rows for each — their breaches are pleaded in separate paragraphs.',
                      'Where the same facts give two causes of action, that is two grids, not one grid with more rows.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'Level 4 is what gets pleaded; Level 5 is what does not. That one line is the entire reason the analysis comes before the draft.',
                'Recoverable loss is an ingredient, not an afterthought. Without it, the consequential heads of loss have nothing holding them up.',
                'Level 2 asks for REMEDIES as well as causes of action — a claim that needs a declaration or an injunction has to reach the prayer for relief.',
                'Vicarious liability is its own ingredient row, and it needs two facts: that the tortfeasor was the employee, AND that he was acting in the course of employment at the time.',
                'An ingredient supplied by statute still needs its material facts. "The goods were not of merchantable quality" is the ingredient; the defective modules and the faulty pump are the facts.',
                'The grid is per cause of action, so two causes of action on one set of facts are two grids.',
              ],
            },
            skills: {
              bullets: [
                'Write Level 3 from the LAW, then go looking for facts. Doing it the other way round produces a pleading that tracks the client’s story and misses an ingredient.',
                'Name each ingredient in the words the law uses — "merchantable quality", "in the course of employment" — because that is what the material fact has to answer.',
                'Keep the evidence column even when only the pleading is asked for. It is where the further-instructions questions come from, and they earn marks.',
                'Where the ingredient is statutory, put the subsection in the grid so it reaches the draft.',
              ],
            },
            mistakes: {
              bullets: [
                'Pleading the Level 5 evidence — the witness, the police statement, the invoice — in the statement of claim.',
                'Skipping Level 3 and going straight from the facts to the draft.',
                'Treating loss as a figure, and never pleading the knowledge that makes it recoverable.',
                'Running one grid across two defendants whose ingredients differ.',
                'Filling in Level 5 with "the client" for everything, and so never noticing which facts rest on his evidence alone.',
              ],
            },
            authorities: {
              table: {
                headers: ['Level', 'What goes in it', 'Where it ends up'],
                rows: [
                  ['Level 1', 'The area(s) of law in question', 'Frames the whole analysis — contract, tort, or both'],
                  ['Level 2', 'The cause(s) of action and remedy(ies) that are relevant', 'The causes of action in the writ and the heads in the prayer for relief'],
                  ['Level 3', 'The legal ingredients of each cause of action or remedy', 'Nothing — but every one of them must be covered by Level 4'],
                  ['Level 4', 'The material fact(s) supporting each ingredient', 'The body of the statement of claim'],
                  ['Level 5', 'The evidence, and the method of proof, for each material fact', 'Witness statements and affidavits, never the pleading'],
                  ['Contract ingredients', 'LG5 Lecture Outline, Part C Step 3; Appendices 3 and the Exercise 1 model', 'Existence of contract; material terms; breach; recoverable loss within D’s contemplation at the time of contract'],
                  ['Negligence ingredients', 'Appendix 4 and the Exercise 2 model', 'Duty; vicarious liability where relied on; breach by each defendant; breach of statutory provision where relied on; causation; damages not too remote'],
                  ['Terms implied by statute', 'Sale of Goods Ordinance (Cap. 26) ss16(2), 16(3) and 17(2), as cited in the course materials', 'Merchantable quality; reasonable fitness for a purpose made known to the seller; correspondence with the sample. Read the subsections themselves before pleading them'],
                  ['Evidence excluded from the pleading', 'O.18 r.7(1)', 'Material facts only, not the evidence by which they are to be proved'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG5', issue: 'case-analysis-tools', label: 'Dramatis Personae and the chronology' },
              { session: 'LG5', issue: 'contract-claim-structure', label: 'Basic structure for a contractual claim' },
              { session: 'LG5', issue: 'tort-claim-structure', label: 'Basic structure for a tortious claim' },
              { session: 'LG4', issue: 'material-facts-not-evidence', label: 'Material facts, not evidence' },
            ],
          },

          {
            id: 'drafting-process',
            title: 'The nine-step drafting process',
            summary: 'Part C’s Steps 1 to 9 — from gathering the facts to explaining the statement of truth to the client.',
            triggers: {
              bullets: [
                'The question asks how you would go about drafting the statement of claim.',
                'You are asked for a SKELETAL PLAN rather than a draft.',
                'You are asked for a succinct summary of the claim.',
                'The draft is finished and the question is what happens next.',
                'The question asks what you would do before sending the draft to the client.',
                'You are told to review and critique a draft.',
                'The question asks what further instructions you would seek.',
              ],
              routes: [
                { when: 'You are at the fact-organising stage', session: 'LG5', issue: 'case-analysis-tools', label: 'Dramatis Personae and the chronology' },
                { when: 'You are at the legal-ingredients stage', session: 'LG5', issue: 'five-level-case-analysis', label: 'The 5-Level Case Analysis' },
                { when: 'You are at the drafting stage and the claim is contractual', session: 'LG5', issue: 'contract-claim-structure', label: 'Basic structure for a contractual claim' },
                { when: 'You are at the drafting stage and the claim is in tort', session: 'LG5', issue: 'tort-claim-structure', label: 'Basic structure for a tortious claim' },
                { when: 'You are at the review stage', session: 'LG5', issue: 'drafting-guide-criteria', label: 'The Pleadings Drafting Guide' },
                { when: 'The question is who signs the statement of truth', session: 'LG4', issue: 'statement-of-truth', label: 'The statement of truth' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Steps 1 to 9',
                steps: [
                  {
                    id: 'gather',
                    label: 'Steps 1-2 — gather, then organise',
                    points: [
                      'Step 1: gather together the client’s facts — all the background facts and information — and conduct all the necessary investigations and research.',
                      'Step 2: organise the facts and identify the relevant FACTUAL issues, using the Dramatis Personae and the chronology of events.',
                      'These two are where a missing document or an unasked question is cheapest to find.',
                    ],
                  },
                  {
                    id: 'law',
                    label: 'Steps 3-4 — identify the law, then map it onto the facts',
                    points: [
                      'Step 3: identify the relevant LEGAL issues. What are the causes of action and remedies? Who should be the parties to the action?',
                      'Step 3 also asks, for each cause of action or remedy, what the legal ingredients are — for breach of contract, the existence of the contract, the material terms, and breach of those terms.',
                      'Step 4: prepare the 5-Level Case Analysis. It shows the inter-relationship between the factual and legal issues, and identifies, for each legal ingredient, the material fact(s) required to establish it — and those are the facts that must be pleaded.',
                    ],
                  },
                  {
                    id: 'plan',
                    label: 'Steps 5-6 — the summary, then the skeleton',
                    points: [
                      'Step 5: prepare a SUCCINCT SUMMARY of the client’s claim in 2-3 SENTENCES. It gives you the basic shape of the claim, and it should be easy once the 5-Level Case Analysis is done.',
                      'Step 6: prepare a SKELETAL PLAN of the statement of claim following the basic structure, using the Level 4 material facts. This can be done in POINT FORM.',
                      'The skeletal plan is where the square-bracket queries live — "did he pay $8,000 or $8,900?", "obtain the registration number from the client". The model plans carry them; the draft does not.',
                      'The plan is also where you record WHY you are pleading something that is not strictly material — the Exercise 1 model notes that the express delivery and payment terms are pleaded because P will refer to them when pleading its own performance.',
                    ],
                  },
                  {
                    id: 'draft',
                    label: 'Step 7 — start drafting',
                    points: [
                      {
                        text: 'Bear in mind, by reference to the relevant rules in O.18:',
                        points: [
                          'The FORMALITIES — O.18 r.6.',
                          'The specific matters which MUST be pleaded — O.18 rr.8, 12 and 15.',
                          'The matters which MAY be pleaded — O.18 r.11, points of law.',
                          'The matters which SHOULD NOT be pleaded — O.18 r.7(1), evidence and immaterial facts, and legal argument.',
                        ],
                      },
                      'That list is the LG4 material being put to work. If you cannot place a paragraph in one of those four categories, it probably does not belong.',
                    ],
                  },
                  {
                    id: 'review',
                    label: 'Step 8 — review the completed draft, against questions and then against the Guide',
                    points: [
                      'Is it logical? Can the intended reader follow it?',
                      'Are its contents, including those reflecting the client’s instructions, accurate?',
                      'Does it contain everything that needs or should be included?',
                      'Are further instructions from the client required?',
                      'Are there any typographical or grammatical mistakes?',
                      'Can certain sentences or phrases be expressed more precisely and concisely?',
                      'Does it read convincingly?',
                      'Then run the Pleadings Drafting Guide over it as a checklist, and amend where necessary.',
                    ],
                  },
                  {
                    id: 'client',
                    label: 'Step 9 — to the client',
                    points: [
                      'Send the finalised draft to the client for approval and comments, and amend where necessary.',
                      'EXPLAIN THE STATEMENT OF TRUTH to the client, who should sign it.',
                      'That explanation is not a courtesy. Where the legal representative signs instead, O.41A r.4(3) treats the signature as a statement that the party authorised it, that the explanation was given before signing, and that the party was told the possible consequences of a statement made without honest belief.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The succinct summary is 2-3 sentences and it is a real step, not a warm-up. If you cannot write it, the analysis is not finished.',
                'Step 6’s skeletal plan is in POINT FORM. Exam questions frequently ask for the plan, or for an extract of the plan and an extract of the draft — read what is asked for before writing prose.',
                'Step 8 is where the further-instructions questions are settled, before the draft goes out — not after the client has queried it.',
                'The CLIENT signs the statement of truth. The lawyer signs only where it cannot conveniently be signed by the client.',
                'Steps 1 and 9 both involve the client. The drafting in between is only the middle of the job.',
              ],
            },
            skills: {
              bullets: [
                'When asked for a skeletal plan, answer in the appendix’s step headings with point form under each. That is the form the model answers take, and it makes the coverage visible.',
                'Keep the square-bracket queries in the plan; they earn marks because they show the further instructions were spotted.',
                'When asked for "an extract covering Steps 2 to 4", give exactly those steps — not a whole pleading, and not a narrative.',
                'Write the succinct summary before the draft, and read the finished draft back against it.',
                'Note in the plan, in brackets, any deliberate departure from the appendix order and why.',
              ],
            },
            mistakes: {
              bullets: [
                'Drafting straight from the instructions, skipping the analysis and the plan.',
                'Producing a full statement of claim when the question asked for a skeletal plan extract.',
                'Leaving the statement of truth unexplained, or having the solicitor sign it as a matter of course.',
                'Treating Step 8 as proofreading rather than as a checklist pass against the drafting guide.',
                'Resolving a factual gap by assumption instead of listing it as a further instruction.',
              ],
            },
            authorities: {
              table: {
                headers: ['Step', 'What it produces', 'Where the rule or tool comes from'],
                rows: [
                  ['1 — Gather', 'All background facts, investigations and research', 'LG5 Lecture Outline, Part C'],
                  ['2 — Organise', 'Dramatis Personae and chronology; the factual issues', 'Appendices 1 and 2'],
                  ['3 — Legal issues', 'Causes of action, remedies, parties, and the legal ingredients of each', 'LG5 Lecture Outline, Part C'],
                  ['4 — Analyse', 'The 5-Level Case Analysis grid', 'Appendices 3 and 4'],
                  ['5 — Summarise', 'A succinct summary of the claim in 2-3 sentences', 'Appendix 5'],
                  ['6 — Plan', 'A skeletal plan in point form, from the Level 4 material facts', 'Appendices 6 and 7'],
                  ['7 — Draft', 'The statement of claim', 'O.18 r.6 (formalities); rr.8, 12, 15 (must); r.11 (may); r.7(1) (must not)'],
                  ['8 — Review', 'An amended draft that satisfies the Guide', 'Appendix 8'],
                  ['9 — Client', 'An approved, verified pleading', 'O.41A rr.3 and 4(3)'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG5', issue: 'drafting-guide-criteria', label: 'The Pleadings Drafting Guide' },
              { session: 'LG5', issue: 'contract-claim-structure', label: 'Basic structure for a contractual claim' },
              { session: 'LG5', issue: 'tort-claim-structure', label: 'Basic structure for a tortious claim' },
              { session: 'LG4', issue: 'statement-of-truth', label: 'The statement of truth' },
              { session: 'LG4', issue: 'formal-requirements', label: 'Formal requirements for a pleading' },
            ],
          },

          {
            id: 'contract-claim-structure',
            title: 'Basic structure for a contractual claim',
            summary: 'Appendix 6’s eleven steps — parties, contract, terms, D’s knowledge, performance, breach, consequences, loss, interest, prayer, verification.',
            triggers: {
              bullets: [
                'The claim is for damages for breach of contract and you need the paragraph order.',
                'The contract was made orally, or partly orally and partly in writing.',
                'The terms relied on are implied rather than express.',
                'The loss claimed goes beyond the price — lost profits, expenses, compensation paid to a third party.',
                'The contract was varied after it was made.',
                'The parties contracted through agents.',
                'P has terminated and wants to say so in the pleading.',
                'P incurred expenses trying to limit its loss and wants them back.',
                'The claim is to enforce a term for a fixed sum rather than for damages.',
              ],
              routes: [
                { when: 'The claim is in tort rather than contract', session: 'LG5', issue: 'tort-claim-structure', label: 'Basic structure for a tortious claim' },
                { when: 'You have not yet worked out the ingredients', session: 'LG5', issue: 'five-level-case-analysis', label: 'The 5-Level Case Analysis' },
                { when: 'The interest, prayer or jurisdiction plea is the point', session: 'LG5', issue: 'interest-and-prayer', label: 'Interest, the prayer for relief and the District Court plea' },
                { when: 'You want to see it done on a full set of facts', session: 'LG5', issue: 'worked-contract-claim', label: 'Worked example: the commercial dishwashers claim' },
                { when: 'The question is which matters must be pleaded specifically', session: 'LG4', issue: 'pleading-specifically-and-particulars', label: 'Matters to be pleaded specifically, and particulars' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Appendix 6, step by step',
                steps: [
                  {
                    id: 's1',
                    label: 'Step 1 — Introduction to parties and necessary background',
                    points: [
                      'Save in a very simple claim, it is customary to give a brief introduction to the parties and some necessary background. Keep it CONCISE and avoid irrelevant details.',
                      'Sometimes certain background facts are necessary ingredients of P’s claim, and so are material facts that HAVE to be pleaded — if P claims for the loss of his property, he must plead his ownership of it.',
                      'Where there is nothing of significance to say about the parties or the background, Step 1 can be skipped.',
                      'In practice this is the "At all material times" paragraph: incorporation, the business each party carries on, and — where the contract was made through agents — each individual’s authority to act for and on behalf of his company.',
                    ],
                  },
                  {
                    id: 's2',
                    label: 'Step 2 — The contract',
                    points: [
                      {
                        text: 'The material facts relating to the contract generally include:',
                        points: [
                          '(a) the parties to the contract.',
                          '(b) the date of the contract — if it cannot be precisely ascertained, give an approximate date by saying "On or about ...".',
                          '(c) how the contract was made — orally, in writing, or by conduct; or, for example, partly oral and partly in writing.',
                          '(d) the subject matter of the contract.',
                          '(e) the consideration.',
                        ],
                      },
                      'If the contract is wholly or partly IN WRITING, identify the document(s) in which it is contained.',
                      'If the contract is wholly or partly ORAL, give particulars as to the oral part — how, when, where and between whom the contract was made.',
                      'If the parties acted through AGENTS in agreeing the contract, say so, and identify the agents and the principals.',
                      'Where the contract has been altered or modified by a subsequent agreement, plead the ORIGINAL contract first and then the VARIATION (which also needs to be supported by consideration). In a simple case where nothing significant arises from the history and the variation is unlikely to be in dispute, go straight to the varied contract.',
                      'O.18 r.7(2) governs how the oral part is pleaded: the PURPORT of the conversation, briefly stated — not the precise words, unless the words are themselves material.',
                    ],
                  },
                  {
                    id: 's3',
                    label: 'Step 3 — The material terms',
                    points: [
                      'Plead any other material terms not already covered at Step 2.',
                      'A term is MATERIAL if it is one P intends to rely upon for his claim — a term allegedly breached by D, or a term which entitles P to the relief or remedy sought.',
                      'State whether the term is EXPRESS or IMPLIED, and set out the substance of the term.',
                      'If it is an implied term, generally give particulars of the facts and matters — and the statutory provision, if any — relied on as giving rise to the implied term.',
                      'If the term is a CONDITION of the contract and P claims repudiation for breach of a condition, say "condition" instead of "term".',
                      'Avoid the ineffective and unnecessary plea "P will refer to all other terms and conditions of the agreement at trial": Citibank N.A. (Nominees) Ltd v Deacon Te-ken Chiu [1983] HKLR 121 (CA).',
                    ],
                  },
                  {
                    id: 's4',
                    label: 'Step 4 — D’s knowledge',
                    points: [
                      'Where P relies on D’s knowledge of certain facts, or on any special circumstances, to show that the loss suffered was reasonably within the parties’ contemplation AT THE TIME OF CONTRACT as a likely consequence of the breach, P MUST plead those facts, that knowledge and those special circumstances.',
                      'This may be more conveniently pleaded before Step 2, or between Steps 2 and 3. The Exercise 1 model does exactly that — the pre-contract telephone conversation comes before the express terms, because the terms were agreed in the same call.',
                      'Skip this step if it is not applicable to the case.',
                      'Without it, consequential heads of loss have no pleaded foundation. This is the step most often missed.',
                    ],
                  },
                  {
                    id: 's5',
                    label: 'Step 5 — Material events after the contract',
                    points: [
                      'Plead performance of the contract on P’s part where necessary or appropriate — P has paid the price; P has given D the required notification for delivery of the goods.',
                      'Plead performance on D’s part where necessary or appropriate — D has delivered part of the goods to P.',
                      'This is where the express terms pleaded at Step 3 earn their place: performance is pleaded by reference to them.',
                    ],
                  },
                  {
                    id: 's6',
                    label: 'Step 6 — D’s breach',
                    points: [
                      'Identify PRECISELY and WITH PARTICULARS how D has fallen short of the contractual promise.',
                      'Generally start by alleging that D was in breach of contract, and then set out clearly D’s acts or omissions constituting the breach.',
                      'If P wants to allege that the breach gives P a right to treat the contract as at an end and P has accordingly terminated, plead that D has REPUDIATED the contract and that P has ACCEPTED the repudiation, giving the necessary particulars.',
                      'In practice: one paragraph alleging breach of the identified terms, then a "PARTICULARS OF BREACH" sub-heading listing the specific defects or failures.',
                    ],
                  },
                  {
                    id: 's7',
                    label: 'Step 7 — Material events after D’s breach',
                    points: [
                      'What happened as a result of the breach, which leads to the loss and damage suffered by P?',
                      'It is generally NOT necessary for P to plead that it has reasonably mitigated its loss — failure to mitigate is for D to raise in the Defence if D wishes to.',
                      'BUT if P wants to rely on acts done in mitigation — for instance to claim the expenses incurred in attempting to mitigate — set out those facts and particulars HERE.',
                      'If P is alleging repudiation and acceptance, that can equally be pleaded here with its particulars.',
                    ],
                  },
                  {
                    id: 's8',
                    label: 'Step 8 — The loss and damage',
                    points: [
                      'Plead that the loss and damage arise AS A RESULT of D’s breach.',
                      'Briefly identify EACH HEAD of loss separately.',
                      'State the amount under each head, and where applicable show how the figure is arrived at. State any deduction allowed.',
                      'If the amount of damages cannot be quantified at the pleading stage, it is permissible to plead words to the effect that particulars of damages are to be supplied later — or after a particular stage of the proceedings, such as after discovery.',
                      'Distinguish LIQUIDATED claims from UNLIQUIDATED damages. If you are not claiming damages for breach but enforcing a term — a liquidated sum under a guarantee or agreement — avoid the words "loss and damage".',
                      'In practice this is a "PARTICULARS OF DAMAGES" table, one head of loss per row, with a total.',
                    ],
                  },
                  {
                    id: 's9to11',
                    label: 'Steps 9-11 — Interest, prayer for relief, statement of truth',
                    points: [
                      'Step 9 — interest: discretionary interest under s48 HCO (or s49 DCO) may be set out in the body and the prayer, or in the prayer alone; ALL other claims for interest must be pleaded in the body with the facts and matters they depend on.',
                      'Step 10 — prayer for relief: summarise all the relief sought at the end (O.18 r.15); the sum claimed if liquidated, or "Damages" if unliquidated; interest; costs; and, in a District Court action, the Practice Direction 27 jurisdiction plea as the last paragraph before the prayer.',
                      'Step 11 — statement of truth: signed by the party or his legal representative (O.41A r.3(1)(b)), though in general the lawyer should not sign unless the client cannot conveniently do so; a director, manager or secretary for a corporation (O.41A rr.3(2) and (4)); a partner or a person with the control or management of the business for a partnership (O.41A r.3(6)); and, if a legal representative signs, in his own name and not the firm’s (O.41A r.3(10)).',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'Step 4 is the step that is skipped and should not be. Without D’s knowledge pleaded, lost profits, a discount given to a customer and compensation paid to a third party have nothing establishing their recoverability.',
                'The order of Steps 2, 3 and 4 is flexible, and the model draft reorders them. What matters is that all three are there.',
                'A term is material only if P relies on it — but an express term can still be worth pleading because P’s own performance will be pleaded by reference to it. Say so in the plan when you do that.',
                '"Condition" is a deliberate word: use it only where repudiation for breach of a condition is being claimed.',
                'Mitigation cuts both ways. P need not plead that it mitigated, but P must plead the acts if it wants the cost of them.',
                'Do not plead D’s exclusion clauses for it. Whether terms sent after an oral contract was concluded were incorporated at all is D’s point to take in its Defence.',
                'Citibank N.A. (Nominees) Ltd v Deacon Te-ken Chiu [1983] HKLR 121 (CA) is the authority for not sweeping up with "all other terms and conditions".',
              ],
            },
            skills: {
              bullets: [
                'Define your terms once, in brackets, at first use — "the Agreement", "the Dishwashers" — and never vary them afterwards.',
                'Use "At all material times" for standing facts in the introduction, and dates for events.',
                'Give each implied term its statutory source in the same paragraph as the term.',
                'Put PARTICULARS OF BREACH and PARTICULARS OF DAMAGES under their own headings — the Drafting Guide marks headings and paragraphing.',
                'Express dates, sums and other numbers in figures and not in words: O.18 r.6(3).',
                'Plead the agency expressly where individuals contracted for companies: who acted, for whom, and with what authority.',
              ],
            },
            mistakes: {
              bullets: [
                'Pleading the breach without first pleading the term that was breached.',
                'Claiming consequential loss with no pleaded knowledge or special circumstances.',
                'Sweeping up with "P will refer to all other terms and conditions of the agreement at trial".',
                'Alleging breach with no particulars of breach.',
                'Pleading a single global damages figure with no breakdown by head.',
                'Using "loss and damage" for a liquidated sum claimed under a term.',
                'Reproducing the precise words of the pre-contract conversation rather than its purport.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'Without prejudice to paragraph (1), the effect of any document or the purport of any conversation referred to in the pleading must, if material, be briefly stated, and the precise words of the document or conversation must not be stated, except in so far as those words are themselves material.', cite: 'O.18 r.7(2), Rules of the High Court (Cap. 4A)' },
                { text: 'Dates, sums and other numbers must be expressed in a pleading in figures and not in words.', cite: 'O.18 r.6(3), Rules of the High Court (Cap. 4A)' },
              ],
              table: {
                headers: ['Step', 'What is pleaded', 'Rule or authority'],
                rows: [
                  ['1 — Parties and background', 'Concise introduction; background facts that are themselves ingredients (e.g. ownership); agents’ authority', 'Appendix 6 Step 1'],
                  ['2 — The contract', 'Parties, date, how made, subject matter, consideration; documents if written; particulars of the oral part; agency; original contract then variation', 'Appendix 6 Step 2; O.18 r.7(2)'],
                  ['3 — Material terms', 'Express or implied, with the substance of each; the statutory provision for an implied term; "condition" where repudiation is claimed', 'Appendix 6 Step 3'],
                  ['No sweeping-up plea', 'Citibank N.A. (Nominees) Ltd v Deacon Te-ken Chiu [1983] HKLR 121 (CA)', 'Avoid "P will refer to all other terms and conditions of the agreement at trial"'],
                  ['4 — D’s knowledge', 'The facts, knowledge and special circumstances bringing the loss within the parties’ contemplation at the time of contract', 'Appendix 6 Step 4'],
                  ['5 — Performance', 'Performance by P, and by D, where necessary or appropriate', 'Appendix 6 Step 5'],
                  ['6 — Breach', 'The allegation of breach, then the particulars of breach; repudiation and acceptance if relied on', 'Appendix 6 Step 6; O.18 r.12(1)'],
                  ['7 — After the breach', 'What followed; acts done in mitigation only if their cost is claimed', 'Appendix 6 Step 7'],
                  ['8 — Loss and damage', 'Each head separately, with amounts and workings; deductions; particulars to follow if unquantifiable; liquidated vs unliquidated', 'Appendix 6 Step 8'],
                  ['9-11 — Endings', 'Interest, prayer for relief, statement of truth', 'O.18 r.15; O.41A r.3'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG5', issue: 'worked-contract-claim', label: 'Worked example: the commercial dishwashers claim' },
              { session: 'LG5', issue: 'interest-and-prayer', label: 'Interest, the prayer for relief and the District Court plea' },
              { session: 'LG5', issue: 'five-level-case-analysis', label: 'The 5-Level Case Analysis' },
              { session: 'LG4', issue: 'pleading-specifically-and-particulars', label: 'Matters to be pleaded specifically, and particulars' },
              { session: 'LG4', issue: 'material-facts-not-evidence', label: 'Material facts, not evidence' },
            ],
          },

          {
            id: 'tort-claim-structure',
            title: 'Basic structure for a tortious claim',
            summary: 'Appendix 7’s nine steps, the neutral-accident rule at Step 2, separate particulars per defendant, and O.18 r.7A where there is a conviction.',
            triggers: {
              bullets: [
                'The claim is in negligence and you need the paragraph order.',
                'There are two defendants — a tortfeasor and an employer.',
                'The duty arises under a statute rather than at common law.',
                'The facts mention a prosecution, a conviction or a notice of prosecution.',
                'Someone was injured, not just property damaged.',
                'The claim is on occupier’s liability, employer’s liability or passing off, where the relationship itself has to be pleaded.',
                'A draft describes the accident in language full of "negligently" and "recklessly".',
                'The losses cannot all be quantified yet.',
              ],
              routes: [
                { when: 'The claim is contractual rather than tortious', session: 'LG5', issue: 'contract-claim-structure', label: 'Basic structure for a contractual claim' },
                { when: 'You have not yet worked out the ingredients', session: 'LG5', issue: 'five-level-case-analysis', label: 'The 5-Level Case Analysis' },
                { when: 'You want to see it done on a full set of facts', session: 'LG5', issue: 'worked-tort-claim', label: 'Worked example: the shopfront collision claim' },
                { when: 'The interest, prayer or jurisdiction plea is the point', session: 'LG5', issue: 'interest-and-prayer', label: 'Interest, the prayer for relief and the District Court plea' },
                { when: 'The question is what the defendant must admit, deny or not admit', session: 'LG4', issue: 'defence-counterclaim-and-reply', label: 'Defence, counterclaim and reply' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Appendix 7, step by step',
                steps: [
                  {
                    id: 's1',
                    label: 'Step 1 — Introduction to parties and necessary background',
                    points: [
                      'Save in a very simple claim, give a brief, concise introduction to the parties and the necessary background.',
                      {
                        text: 'Very often the RELATIONSHIP between the parties must be set out, because it forms the basis for the existence of the duty:',
                        points: [
                          'Occupier’s liability — it is material that D was the occupier and P the visitor.',
                          'An employer’s statutory or common law duty — it is material that D was P’s employer.',
                          'Vicarious liability — it is material that the tortfeasor is the servant or agent of D.',
                        ],
                      },
                      'In some cases the factual basis for the duty, or for the right D has infringed, must be stated first. In passing off, P should first identify the goodwill owned, and later plead D’s misrepresentation and the damage to that goodwill.',
                      'Where there is nothing of significance to say, Step 1 can be skipped.',
                    ],
                  },
                  {
                    id: 's2',
                    label: 'Step 2 — The accident or event leading to the claim',
                    points: [
                      'Describe the accident or event SUCCINCTLY: the parties’ roles, the date, the time, the location, and what happened to cause the accident or event, with particulars.',
                      'At this stage, AVOID IF POSSIBLE making any allegation of negligence or breach.',
                      'Describe the event in a NEUTRAL manner, so that hopefully D will ADMIT it.',
                      'There is a pleading consequence behind that tactic: an allegation of fact is deemed admitted unless traversed (O.18 r.13(1)), so a paragraph D has no reason to deny is an issue removed from the trial.',
                      'This is also where the facts founding vicarious liability go — that D1 was acting in the course of his employment with D2 at the time.',
                    ],
                  },
                  {
                    id: 's3',
                    label: 'Step 3 — The existence and scope of duty',
                    points: [
                      'Identify the specific duty that was breached by D, and set out its scope.',
                      'If the duty arose under statute, identify the relevant statutory provision(s).',
                      'In simple cases where the duty and its scope are obvious, or non-controversial, or do not involve statutory provisions — traffic accident cases are the example given — Step 3 may be SKIPPED.',
                    ],
                  },
                  {
                    id: 's4',
                    label: 'Step 4 — D’s negligence or breach',
                    points: [
                      'NOW make clear allegations of negligence and/or breach, in plain and descriptive language, so that D will understand the case being made against it.',
                      'Identify precisely and with particulars how D has fallen short of the duty of care.',
                      'Generally start by alleging that the accident or event was CAUSED BY D’s negligence or breach of duty.',
                      'Then set out the PARTICULARS of negligence or breach of duty, listing all D’s specific acts or omissions constituting the breach.',
                      'If two or more specific duties are breached, use a SEPARATE PARAGRAPH for each breach of duty.',
                      'If two or more defendants are involved, the allegations of the separate acts and omissions of EACH defendant should be set out in DIFFERENT PARAGRAPHS — the model draft uses lettered headings, "PARTICULARS OF NEGLIGENCE OF THE 1ST DEFENDANT" and then the 2nd.',
                      'O.18 r.7A: if P wishes to adduce evidence that D was convicted of an offence before a court in Hong Kong, P MUST include in the pleading a statement of that intention, with particulars of the conviction and its date, the court which made the conviction, and the issue in the proceedings to which the conviction is relevant.',
                    ],
                  },
                  {
                    id: 's5',
                    label: 'Step 5 — Material events after D’s breach',
                    points: [
                      'What happened as a result of the breach, which leads to the loss and damage suffered by P?',
                      'This step may be SKIPPED if it has already been set out under Step 2.',
                      'In practice it is the "As a result of the Collision ..." paragraph — what was destroyed or damaged — and then a second paragraph for what P had to do about each of those things.',
                    ],
                  },
                  {
                    id: 's6',
                    label: 'Step 6 — The loss and damage',
                    points: [
                      'Plead that the loss and damage arise as a result of the accident or of D’s breach.',
                      'Briefly identify each head of loss separately, and state the amount under each head, showing how the figure is arrived at where applicable.',
                      'If the amount cannot be quantified at the pleading stage, it is permissible to plead that particulars of damages are to be supplied later.',
                      'PERSONAL INJURIES actions need more: summarily describe the injuries suffered, ATTACH the medical report(s) relied upon, and file a STATEMENT OF SPECIAL DAMAGES — a separate document with greater detail on the injuries and a breakdown of the damages sought. See O.18 rr.12(1A) and (1C), and Practice Direction 18.1.',
                    ],
                  },
                  {
                    id: 's7to9',
                    label: 'Steps 7-9 — Interest, prayer for relief, statement of truth',
                    points: [
                      'Step 7 — interest: normally P can claim only DISCRETIONARY interest in a tortious claim, under s48 HCO (or s49 DCO). It may be set out in the body and the prayer, or in the prayer alone.',
                      'Step 8 — prayer for relief: summarise all the relief sought (O.18 r.15); normally the primary claim is for damages, plus interest and costs; add the Practice Direction 27 jurisdiction plea in a District Court action.',
                      'Step 9 — statement of truth, on the same O.41A r.3 rules as a contractual claim.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'Step 2 neutral, Step 4 pointed. Getting that the wrong way round is the commonest structural error in a tort draft — an accident paragraph loaded with "negligently" gives D a reason to deny what it would otherwise have admitted.',
                'Step 3 is skippable in traffic accident cases. Do not spend paragraphs establishing a duty nobody disputes.',
                'Vicarious liability needs BOTH facts pleaded: the employment relationship, and that the tortfeasor was acting in the course of employment at the time.',
                'Where the employer is ALSO primarily negligent, that is a separate allegation with its own particulars. Do not fold it into vicarious liability — they are different ingredients.',
                'O.18 r.7A is a MUST, not a may, and it is easy to miss where the facts mention a prosecution. Where a prosecution is only a possibility, it is a further-instructions point and an amendment later.',
                'The personal-injuries machinery in O.18 r.12(1A)-(1C) applies only where personal injuries are claimed. A pure property-damage claim does not carry it.',
                'Where a damaged item is replaced with something better than what was lost, betterment is a real issue — raise it with the client rather than pleading the full replacement cost unexamined.',
              ],
            },
            skills: {
              bullets: [
                'Write the particulars of negligence as a list of failures, each beginning with a verb — "failing to keep any or any proper look-out", "driving whilst physically unfit to do so".',
                'Use the "any or any proper" formula where the allegation is that the thing was not done at all, or not done adequately.',
                'Plead a breach of a guideline or standard by naming the guideline and saying what it sets.',
                'Keep the accident paragraph to date, time, place, roles and mechanism — nothing evaluative.',
                'Give the accident a defined term ("the Collision") at Step 2 and use it for the rest of the pleading.',
                'Where a fact is not yet known — a registration number, the exact dates of the repair works — leave a visible placeholder and list it as a further instruction.',
              ],
            },
            mistakes: {
              bullets: [
                'Alleging negligence in the accident paragraph.',
                'Pleading one undifferentiated set of particulars against two defendants.',
                'Omitting the course-of-employment averment where vicarious liability is relied on.',
                'Forgetting the O.18 r.7A statement and particulars where there has been a conviction.',
                'Attaching the personal-injuries machinery to a pure property-damage claim, or omitting it from a personal injuries one.',
                'Spending paragraphs on duty in a road traffic case.',
                'Inventing a figure for a loss the client has not yet quantified, instead of reserving particulars.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'Subject to paragraph (6), an allegation of fact made by a party in his pleading is deemed to be admitted by the opposite party unless it is traversed by that party in his pleading or a joinder of issue under rule 14 operates as a non-admission of it.', cite: 'O.18 r.13(1), Rules of the High Court (Cap. 4A)' },
              ],
              table: {
                headers: ['Step', 'What is pleaded', 'Rule or authority'],
                rows: [
                  ['1 — Parties and background', 'The relationship founding the duty — occupier and visitor, employer and employee, principal and servant or agent; the goodwill in passing off', 'Appendix 7 Step 1'],
                  ['2 — The accident', 'Roles, date, time, location, mechanism, with particulars — described NEUTRALLY so D may admit it', 'Appendix 7 Step 2; O.18 r.13(1)'],
                  ['3 — Duty and its scope', 'The specific duty and its scope; the statutory provision if the duty is statutory. Skippable where obvious (e.g. traffic accidents)', 'Appendix 7 Step 3'],
                  ['4 — Negligence or breach', 'The allegation that the accident was caused by D’s negligence, then particulars; a separate paragraph per duty and per defendant', 'Appendix 7 Step 4; O.18 r.12(1)'],
                  ['Convictions', 'O.18 r.7A(1)', 'A statement of the intention to adduce the conviction, with particulars of the conviction and its date, the court, and the issue to which it is relevant'],
                  ['5 — After the breach', 'What resulted from the breach; skippable if already in Step 2', 'Appendix 7 Step 5'],
                  ['6 — Loss and damage', 'Each head separately with amounts and workings; particulars to follow if unquantifiable', 'Appendix 7 Step 6'],
                  ['Personal injuries extras', 'O.18 rr.12(1A) and (1C); Practice Direction 18.1', 'A medical report substantiating all the injuries alleged, and a statement of the special damages claimed, served with the statement of claim'],
                  ['7-9 — Endings', 'Discretionary interest under s48 HCO or s49 DCO; prayer for relief; statement of truth', 'O.18 r.15; O.41A r.3'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG5', issue: 'worked-tort-claim', label: 'Worked example: the shopfront collision claim' },
              { session: 'LG5', issue: 'interest-and-prayer', label: 'Interest, the prayer for relief and the District Court plea' },
              { session: 'LG5', issue: 'five-level-case-analysis', label: 'The 5-Level Case Analysis' },
              { session: 'LG4', issue: 'pleading-specifically-and-particulars', label: 'Matters to be pleaded specifically, and particulars' },
              { session: 'LG4', issue: 'defence-counterclaim-and-reply', label: 'Defence, counterclaim and reply' },
            ],
          },

          {
            id: 'interest-and-prayer',
            title: 'Interest, the prayer for relief and the District Court plea',
            summary: 'Where interest goes and where it must not, what the prayer has to contain, and the extra paragraph a District Court action needs.',
            triggers: {
              bullets: [
                'Interest is wanted and the question is where in the pleading it goes.',
                'The claim is for contractual interest rather than discretionary interest.',
                'The action is in the District Court.',
                'A draft prayer claims damages but not interest, or not costs.',
                'The question asks what the closing paragraphs of a statement of claim should be.',
                'A remedy the client wants does not appear at the end of the draft.',
                'The draft adds "further or other relief" and you are asked whether that saves anything.',
                'The claim is liquidated and the draft claims "Damages".',
              ],
              routes: [
                { when: 'The issue is the prayer’s relationship to the writ, or the date of issue', session: 'LG4', issue: 'statement-of-claim', label: 'Drafting the statement of claim' },
                { when: 'The issue is what must be pleaded specifically in general', session: 'LG4', issue: 'pleading-specifically-and-particulars', label: 'Matters to be pleaded specifically, and particulars' },
                { when: 'You are drafting a contractual claim end to end', session: 'LG5', issue: 'contract-claim-structure', label: 'Basic structure for a contractual claim' },
                { when: 'You are drafting a tortious claim end to end', session: 'LG5', issue: 'tort-claim-structure', label: 'Basic structure for a tortious claim' },
                { when: 'The question is who signs the verification', session: 'LG4', issue: 'statement-of-truth', label: 'The statement of truth' },
                { when: 'The judgment will be entered in default or on an admission rather than after trial', session: 'LG6', issue: 'liquidated-or-unliquidated', label: 'Classifying the claim: liquidated or unliquidated' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Ending the pleading properly',
                steps: [
                  {
                    id: 'interest',
                    label: 'Interest: which kind is it?',
                    points: [
                      'DISCRETIONARY interest is claimed under s48 of the High Court Ordinance (Cap. 4), or s49 of the District Court Ordinance (Cap. 336) in a District Court action.',
                      'For discretionary interest, some practitioners set the claim out BOTH in the body of the statement of claim AND in the prayer; some set it out ONLY in the prayer. BOTH are acceptable: Prague Enterprises Ltd v Chan Miu Cheung [1994] 3 HKC 175 (CA).',
                      'ALL OTHER claims for interest — contractual interest being the obvious one — require the facts and matters on which they depend to be set out, and MUST be pleaded IN THE BODY of the pleading, not only in the prayer.',
                      'Read that alongside O.18 r.8(4), which requires a party to plead specifically any claim for interest under s48 "or otherwise". The safe course, and the one both model drafts take, is a body paragraph claiming interest AND a line in the prayer.',
                      'In a tortious claim, normally only discretionary interest is available.',
                    ],
                  },
                  {
                    id: 'prayer',
                    label: 'The prayer for relief',
                    points: [
                      'Summarise ALL the relief sought at the end: O.18 r.15.',
                      'Set out the SUM CLAIMED if it is a liquidated demand, or claim "Damages" if the claim is unliquidated.',
                      'Claim interest.',
                      'It is customary to expressly ask for "Costs", though O.18 r.15(1) says costs need not be specifically claimed.',
                      'Some practitioners add "Further or other relief". It generally has NO LEGAL EFFECT, because all the relief claimed must be specifically pleaded.',
                      'The reason the prayer matters: the Court cannot grant relief which has not been claimed at all — Belmont Finance Corp Ltd v Williams Furniture Ltd [1979] Ch 250, [1978] 1 All ER 118.',
                    ],
                  },
                  {
                    id: 'dc',
                    label: 'If the action is in the District Court, add the jurisdiction plea',
                    points: [
                      'Practice Direction 27 §4 requires all writs and originating summonses to contain a plea that the relief sought does fall within the jurisdiction of the District Court, specifying the jurisdiction-conferring section(s) of the District Court Ordinance (Cap. 336) or other enactment.',
                      'It can conveniently be inserted as the LAST PARAGRAPH of the statement of claim, before the prayer for relief.',
                      'The current Practice Direction 27 is dated 5 June 2025 and took effect on 20 June 2025 — check the wording against the current version rather than an outline’s paraphrase of it.',
                      'No equivalent plea is needed in the Court of First Instance.',
                    ],
                  },
                  {
                    id: 'truth',
                    label: 'Then the statement of truth — the document is not finished at the prayer',
                    points: [
                      'A pleading must be verified by a statement of truth: O.18 r.20A(1).',
                      'The form is prescribed by O.41A r.5(1): "[I believe] [the (plaintiff or as may be) believes] that the facts stated in this [name document being verified] are true.".',
                      'Who signs is an O.41A r.3 question: the party, or his legal representative, but the lawyer should not sign unless it cannot conveniently be signed by the client.',
                      'A corporation: a person holding a senior position — a director, manager, secretary or other similar officer — who must state the office or position held (O.41A rr.3(2), (4)(a) and (5)).',
                      'A partnership: one of the partners, or a person having the control or management of the partnership business (O.41A r.3(6)).',
                      'A legal representative who signs must sign in his OWN NAME, not only in the name of the firm (O.41A r.3(10)).',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The Court cannot grant relief which has not been claimed at all. The prayer is therefore the paragraph to check FIRST, not last.',
                'Discretionary interest is the only kind that may live in the prayer alone. Contractual interest cannot.',
                'O.18 r.8(4) and the Prague Enterprises practice sit slightly awkwardly together — pleading interest in the body as well as in the prayer satisfies both, at no cost.',
                '"Further or other relief" is not a safety net for a remedy you forgot.',
                'The District Court jurisdiction plea comes from a Practice Direction, not from the Rules — but it applies to every District Court writ, and the outline’s wording of it differs slightly from the current Practice Direction.',
                'Match the ordinance to the court: s48 HCO in the Court of First Instance, s49 DCO in the District Court. The two model drafts do exactly that, and for that reason.',
                'A liquidated claim asks for the sum; an unliquidated claim asks for "Damages". Do not blur them.',
              ],
            },
            skills: {
              bullets: [
                'Draft the prayer from the client’s list of objectives, not from the body of the pleading — that is how you catch a remedy that never got pleaded.',
                'Claim damages, interest and costs as three numbered items.',
                'Name the ordinance and section in the body paragraph: "pursuant to section 48 of the High Court Ordinance".',
                'Check which court the action is in before you check the section number.',
                'In a District Court draft, write the jurisdiction paragraph in as soon as you start, so it cannot be forgotten at the end.',
              ],
            },
            mistakes: {
              bullets: [
                'Pleading contractual interest only in the prayer.',
                'Citing s48 HCO in a District Court action, or s49 DCO in the Court of First Instance.',
                'Omitting costs, or relying on "further or other relief" to cover an unpleaded remedy.',
                'Leaving out the District Court jurisdiction paragraph.',
                'Stopping at the prayer and omitting the statement of truth.',
                'Having the solicitor sign the statement of truth where the client could conveniently have signed it.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'A party must plead specifically any claim for interest under section 48 of the Ordinance or otherwise.', cite: 'O.18 r.8(4), Rules of the High Court (Cap. 4A)' },
                { text: 'A statement of claim must state specifically the relief or remedy which the plaintiff claims; but costs need not be specifically claimed.', cite: 'O.18 r.15(1), Rules of the High Court (Cap. 4A)' },
                { text: 'All writs and originating summonses should contain a plea that the relief sought does fall within the jurisdiction of the District Court, specifying which jurisdiction-conferring section(s) of the District Court Ordinance (Cap. 336) or other enactment shall apply to the case.', cite: 'Practice Direction 27, §4 (dated 5 June 2025, in effect 20 June 2025)' },
              ],
              table: {
                headers: ['Point', 'Source', 'What it actually provides'],
                rows: [
                  ['Discretionary interest', 's48, High Court Ordinance (Cap. 4); s49, District Court Ordinance (Cap. 336)', 'The Court’s discretionary power to award interest on debt and damages — the only interest normally available in a tortious claim'],
                  ['Where discretionary interest may be pleaded', 'Prague Enterprises Ltd v Chan Miu Cheung [1994] 3 HKC 175 (CA)', 'Both in the body and in the prayer, or in the prayer alone; both are acceptable'],
                  ['All other interest claims', 'Appendix 6 Step 9', 'The facts and matters on which they depend must be set out, and they must be pleaded in the body, not only in the prayer'],
                  ['Plead interest specifically', 'O.18 r.8(4)', 'Any claim for interest under s48 of the Ordinance or otherwise must be pleaded specifically'],
                  ['The prayer', 'O.18 r.15(1)', 'The relief or remedy must be stated specifically; costs need not be'],
                  ['Relief never claimed', 'Belmont Finance Corp Ltd v Williams Furniture Ltd [1979] Ch 250, [1978] 1 All ER 118', 'The Court cannot grant relief which has not been claimed at all'],
                  ['District Court jurisdiction plea', 'Practice Direction 27, §4', 'Every District Court writ and originating summons pleads that the relief falls within the District Court’s jurisdiction, specifying the jurisdiction-conferring section(s)'],
                  ['Verification', 'O.18 r.20A(1); O.41A r.5(1)', 'The pleading must be verified by a statement of truth, in the prescribed form'],
                  ['Who signs', 'O.41A rr.3(1)(b), (2), (4)(a), (5), (6), (10)', 'The party or his legal representative; a senior officer for a corporation, stating the position held; a partner or manager for a partnership; a lawyer signs in his own name, not the firm’s'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG4', issue: 'statement-of-claim', label: 'Drafting the statement of claim' },
              { session: 'LG4', issue: 'statement-of-truth', label: 'The statement of truth' },
              { session: 'LG5', issue: 'contract-claim-structure', label: 'Basic structure for a contractual claim' },
              { session: 'LG5', issue: 'tort-claim-structure', label: 'Basic structure for a tortious claim' },
            ],
          },

          {
            id: 'drafting-guide-criteria',
            title: 'The Pleadings Drafting Guide — what the draft is marked against',
            summary: 'Appendix 8: Presentation 30%, Contents 40%, Overall 30% — and how to run it over a draft as a checklist.',
            triggers: {
              bullets: [
                'You have finished a draft and are at Step 8 of the process.',
                'The question asks you to review and critique a sample draft.',
                'The question asks what makes a good statement of claim.',
                'A draft is legally accurate but hard to follow.',
                'A draft contradicts itself on a date or a figure.',
                'A draft argues the law instead of pleading facts.',
                'You are marking your own practice attempt.',
              ],
              routes: [
                { when: 'The problem is that a paragraph is evidence or legal argument', session: 'LG4', issue: 'material-facts-not-evidence', label: 'Material facts, not evidence' },
                { when: 'The problem is the heading, numbering, indorsement or signature', session: 'LG4', issue: 'formal-requirements', label: 'Formal requirements for a pleading' },
                { when: 'The problem is a missing particular', session: 'LG4', issue: 'pleading-specifically-and-particulars', label: 'Matters to be pleaded specifically, and particulars' },
                { when: 'The problem is that the pleading is bad in principle', session: 'LG4', issue: 'striking-out', label: 'Striking out a pleading' },
                { when: 'The problem is that an ingredient has no material fact behind it', session: 'LG5', issue: 'five-level-case-analysis', label: 'The 5-Level Case Analysis' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Running the Guide over a draft',
                steps: [
                  {
                    id: 'presentation',
                    label: 'Presentation — 30%',
                    points: [
                      'Uses correct grammar and spelling.',
                      'Is succinct and precise.',
                      'Uses appropriate language.',
                      {
                        text: 'Is well-organised:',
                        points: [
                          'An appropriate introduction.',
                          'Appropriate headings and paragraphing.',
                          'Logical sequencing.',
                          'A conclusion that flows logically from the text.',
                        ],
                      },
                      'Avoids internal contradictions.',
                      'Complies fully with all prescribed formalities under O.18 r.6.',
                    ],
                  },
                  {
                    id: 'contents',
                    label: 'Contents — 40%',
                    points: [
                      'Sets out ALL material facts supporting ALL ingredients of the cause(s) of action.',
                      'Sets out all necessary particulars of fact as required under O.18 r.12.',
                      'Sets out the relief claimed.',
                      'Sets out matters required under O.18 rr.7, 7A and 8.',
                      'Excludes evidence and immaterial facts.',
                      'Excludes law and legal arguments — but may raise a point of law.',
                    ],
                  },
                  {
                    id: 'overall',
                    label: 'Overall — 30%',
                    points: [
                      'Shows a clear understanding of the nature and purpose of pleadings.',
                      'Sets out a SUSTAINABLE claim.',
                      'Accurately, coherently, logically and effectively sets out the client’s case.',
                    ],
                  },
                  {
                    id: 'use',
                    label: 'How the Guide is meant to be used',
                    points: [
                      'Be familiar with the criteria BEFORE you start drafting, and then use the Guide as a CHECKLIST to assess the draft once it is done.',
                      'Read the weightings. 30% is presentation alone, so spelling, headings and paragraph numbering are worth real marks, not housekeeping.',
                      'Contents at 40% is the largest block, and its first line is coverage of every ingredient — that is the 5-Level Case Analysis being marked.',
                      'Overall at 30% asks whether the claim is SUSTAINABLE. A technically tidy pleading of a claim that cannot succeed does not score here.',
                      'Work the three blocks as three separate passes over the draft, not as one read-through.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The Guide is the marking scheme for a drafting question. Use it as one, rather than reading the draft and hoping to notice things.',
                '"Excludes law and legal arguments (but may raise a point of law)" is a real distinction, not a contradiction: O.18 r.11 permits a point of law to be RAISED; it does not permit it to be argued.',
                'Internal contradictions are marked separately — check the dates and figures in the body against the particulars of damages and the prayer.',
                'The formalities referred to are O.18 r.6: the year the writ was issued and the action number, the title of the action, the description of the pleading, the date of service, numbered paragraphs, figures rather than words, the indorsement and the signature.',
                'O.18 r.7A appears expressly in the Contents criteria. It is easy to forget in a tort draft where a conviction is in the facts.',
                'A "sustainable claim" means one that would survive O.18 r.19 — so a pleading that discloses no reasonable cause of action fails the Overall block however tidy it looks.',
              ],
            },
            skills: {
              bullets: [
                'Do a dedicated arithmetic pass: the heads of loss must add to the stated total, and the total must match anything asserted in the body.',
                'Do a dedicated consistency pass on defined terms, names and dates.',
                'Read the draft once asking only one question: would D understand the case it has to meet?',
                'Check every ingredient in your case analysis against a paragraph number in the draft, and write the number down.',
                'When critiquing someone else’s draft, organise the critique under the Guide’s three headings — it reads as a structured answer rather than a list of gripes.',
              ],
            },
            mistakes: {
              bullets: [
                'Treating presentation as the part that does not matter, when it is 30% of the marks.',
                'Arguing the law in the pleading.',
                'A particulars-of-damages table whose rows do not add up to its total.',
                'Inconsistent defined terms, or the same person named two different ways.',
                'Reviewing by reading rather than against the criteria.',
                'Leaving the formalities to chance because the question said "draft an extract".',
              ],
            },
            authorities: {
              table: {
                headers: ['Block', 'Criteria', 'Rules engaged'],
                rows: [
                  ['Presentation — 30%', 'Grammar and spelling; succinct and precise; appropriate language; well-organised (introduction, headings and paragraphing, logical sequencing, conclusion flowing from the text); no internal contradictions; full compliance with the prescribed formalities', 'O.18 r.6'],
                  ['Contents — 40%', 'All material facts supporting all ingredients; all necessary particulars of fact; the relief claimed; the matters required by rr.7, 7A and 8; excludes evidence and immaterial facts; excludes law and legal argument, though a point of law may be raised', 'O.18 rr.7, 7A, 8, 11, 12, 15'],
                  ['Overall — 30%', 'Clear understanding of the nature and purpose of pleadings; a sustainable claim; accurate, coherent, logical and effective setting-out of the client’s case', 'Poon Hau Kei v Hsin Cheong Construction Co Ltd (2004) 7 HKCFAR 148; O.18 r.19'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG5', issue: 'drafting-process', label: 'The nine-step drafting process' },
              { session: 'LG5', issue: 'five-level-case-analysis', label: 'The 5-Level Case Analysis' },
              { session: 'LG4', issue: 'formal-requirements', label: 'Formal requirements for a pleading' },
              { session: 'LG4', issue: 'material-facts-not-evidence', label: 'Material facts, not evidence' },
              { session: 'LG4', issue: 'what-pleadings-do', label: 'What pleadings are and why they matter' },
            ],
          },

          {
            id: 'worked-contract-claim',
            title: 'Worked example: the commercial dishwashers claim',
            summary: 'Exercise 1 end to end — the analysis, the summary, the skeletal plan and what the draft extract does with them.',
            triggers: {
              bullets: [
                'A contract question turns on goods that did not perform as promised.',
                'The terms relied on are implied by the Sale of Goods Ordinance rather than agreed expressly.',
                'The loss claimed includes consequential loss that depends on what the seller was told before contracting.',
                'The seller’s standard terms arrived after an oral contract had already been concluded.',
                'The question asks for a skeletal plan extract covering particular steps.',
                'The claim is being brought in the District Court.',
                'A figure in the client’s own earlier correspondence does not match the figure the instructions support.',
              ],
              routes: [
                { when: 'You need the step structure rather than the worked example', session: 'LG5', issue: 'contract-claim-structure', label: 'Basic structure for a contractual claim' },
                { when: 'You need the ingredients grid', session: 'LG5', issue: 'five-level-case-analysis', label: 'The 5-Level Case Analysis' },
                { when: 'The interest, prayer or jurisdiction plea is the point', session: 'LG5', issue: 'interest-and-prayer', label: 'Interest, the prayer for relief and the District Court plea' },
                { when: 'The claim is in tort rather than contract', session: 'LG5', issue: 'worked-tort-claim', label: 'Worked example: the shopfront collision claim' },
              ],
            },
            answering: {
              flowchart: {
                title: 'The dishwasher claim, step by step',
                steps: [
                  {
                    id: 'facts',
                    label: 'The facts, compressed',
                    points: [
                      'A restaurant company bought two commercial dishwashers from a catering-supplies company under an oral agreement made by telephone between the restaurant’s director and the supplier’s sales director.',
                      'In that same call the buyer told the seller what the machines were for: a celebrity wedding banquet on a fixed date; a large volume of crockery and cutlery cleaned quickly; the standard of a top-class Hong Kong restaurant; and that poor hygiene can seriously affect a restaurant’s reputation and business.',
                      'Both machines had defective temperature control modules and one also had a faulty water pump, so the water temperature and pressure were inadequate to clean properly.',
                      'The restaurant gave a discount to the banquet customer whose guests fell ill, paid to have the machines repaired, and lost regular profits as long-standing customers stopped coming.',
                    ],
                  },
                  {
                    id: 'analysis',
                    label: 'The 5-Level Case Analysis',
                    points: [
                      'Level 1 contract; Level 2 breach of contract and damages.',
                      'Ingredient — the contract. Material fact: an oral contract made by telephone between the two named individuals for their respective companies on a stated date, for two identified dishwashers at a stated total price.',
                      'Ingredient — the material terms. Material fact: the terms implied by the Sale of Goods Ordinance (Cap. 26).',
                      'Ingredient — breach. Material fact: the machines were neither of merchantable quality nor fit for their purpose.',
                      'Ingredient — recoverable loss. Material facts: what the seller was told before the contract, and then the three heads of loss.',
                      'Level 5 evidence: the client; the order confirmation; the repairer’s invoice; the customer’s complaint letter; the parties’ exchange of letters.',
                    ],
                  },
                  {
                    id: 'summary',
                    label: 'The succinct summary',
                    points: [
                      'One or two sentences: damages for breach of an oral sale-of-goods contract, for failing to supply dishwashers of merchantable quality and/or fit for their purpose.',
                      'Notice what it leaves out — no dates, no figures, no particulars. It is the SHAPE of the claim, not its content.',
                    ],
                  },
                  {
                    id: 'plan',
                    label: 'The skeletal plan, and what its square brackets do',
                    points: [
                      'Step 1 introduces both companies, with "[check with client]" and "[conduct a company search]" against the incorporation facts.',
                      'Step 2 gives the five Step 2 elements — parties, date, mode, subject matter, consideration — and records a drafting decision: the individuals are introduced in the introductory paragraph so that the contract paragraph can be shorter.',
                      'Step 3 separates express terms (delivery date; deposit and balance) from implied terms, and records WHY the express terms are pleaded although not strictly material — P will refer to them when pleading its own performance.',
                      'Step 4 lists the three things the seller was told, which is what makes the consequential loss recoverable.',
                      'Step 5 raises a real discrepancy: the deposit may have been 10% of the dishwashers alone, or of an order that also included a wine cooler. The plan asks the client to check, rather than choosing a figure.',
                      'Steps 6 to 8 give the breach with particulars, the events after the breach, and the three heads of loss.',
                      'Step 9 claims discretionary interest under s49 of the District Court Ordinance, because the action is in the District Court.',
                    ],
                  },
                  {
                    id: 'draft',
                    label: 'What the draft does with the plan',
                    points: [
                      'Paragraph 1 is "At all material times" and introduces both companies and both individuals, including that each individual had authority to act for and on behalf of his company.',
                      'Paragraph 2 pleads the agreement: made orally, between the named individuals on behalf of the named companies, on a stated date, with the subject matter and the price.',
                      'Paragraph 3 pleads the pre-contract telephone conversation and what the buyer told the seller — Step 4, moved ahead of the terms because the terms were agreed in the same call.',
                      'Paragraph 4 pleads the express terms agreed in that call; paragraph 5 the implied terms under the Sale of Goods Ordinance.',
                      'Paragraph 6 pleads performance on both sides — deposit, delivery, balance — by reference to the express terms.',
                      'Paragraph 7 alleges breach of the implied terms and gives PARTICULARS OF BREACH: the defective temperature control modules, and the faulty water pump on one machine.',
                      'Paragraph 8 pleads the consequences; paragraph 9 pleads the loss with a PARTICULARS OF DAMAGES table and a total.',
                      'Then interest under s49 DCO, the prayer for damages, interest and costs, the solicitors’ name, and a statement of truth signed by the director, stating his position and his authority to sign for the company.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The seller’s exclusion clauses are printed on the reverse of an order confirmation faxed AFTER the oral contract was concluded on the telephone. Whether they were incorporated at all is a live question — the plaintiff does not plead them, and should not.',
                'The seller’s reply letter gives a delivery date different from the buyer’s account. That is a dispute of fact: plead the client’s instructions, and record the conflict as a further-instructions point.',
                'The buyer’s own complaint letter asserts lost profits "of at least $300,000", while the instructions support $100,000. The model pleads the figure the instructions support. A pleading that contradicts the client’s own earlier correspondence is a gift to the other side.',
                'The order confirmation covers a wine cooler as well as the dishwashers, which is why the deposit figure is uncertain. Do not silently pick one.',
                'The seller’s letter also relies on the buyer having signed the delivery confirmation. That is a defence point, not something the statement of claim answers in advance.',
                'The model Exercise 1 draft is a District Court action but carries no Practice Direction 27 §4 jurisdiction plea. Appendix 6 Step 10 says such a plea can conveniently go in as the last paragraph before the prayer — put one in your own District Court draft.',
                'Check that the particulars-of-damages rows add to the stated total. In the model they do.',
              ],
            },
            skills: {
              bullets: [
                'Where an oral contract is pleaded, plead the individuals, their authority, the date and the medium — that is the O.18 r.7(2) "purport of the conversation", not its words.',
                'Plead implied terms with their statutory source in the same paragraph as the term.',
                'Keep pre-contract representations that go to the defendant’s knowledge in their own paragraph, separate from the terms.',
                'Where an amount is uncertain, raise it as a further instruction rather than pleading a guess.',
                'Give the contract and the goods defined terms at first mention and use them throughout.',
              ],
            },
            mistakes: {
              bullets: [
                'Pleading the seller’s terms and conditions for it.',
                'Copying a figure from the client’s own letter without checking it against the instructions.',
                'Pleading the repair invoice and the complaint letter as the facts, rather than the facts they prove.',
                'Claiming s48 HCO interest in a District Court action.',
                'Omitting the authority averment for the individuals who made the contract.',
                'Pleading only merchantable quality, and forgetting fitness for the particular purpose that was made known.',
              ],
            },
            authorities: {
              table: {
                headers: ['Element', 'How it is pleaded', 'Rule or source'],
                rows: [
                  ['The contract', 'Oral, by telephone, between named individuals for named companies, on a stated date, with subject matter and price', 'Appendix 6 Step 2'],
                  ['Authority of the agents', 'Each individual pleaded as having authority to act for and on behalf of his company', 'Appendix 6 Step 2'],
                  ['The implied terms', 'Sale of Goods Ordinance (Cap. 26) ss16(2) and 16(3), as pleaded in the model draft', 'Merchantable quality; reasonable fitness for a purpose made known to the seller — read the subsections before relying on them'],
                  ['Recoverable loss', 'The three things the seller was told before contracting, pleaded in their own paragraph', 'Appendix 6 Step 4'],
                  ['Particulars of breach', 'Defective temperature control modules on both machines; a faulty water pump on one', 'O.18 r.12(1)'],
                  ['Particulars of damages', 'The discount given to the customer; the cost of repair; lost profits — each a row, with a total', 'Appendix 6 Step 8'],
                  ['Figures', 'In figures, not words', 'O.18 r.6(3)'],
                  ['Interest', 'Discretionary interest in a District Court action', 's49, District Court Ordinance (Cap. 336)'],
                  ['Verification', 'Signed by a director, stating the position held and the authority to sign for the company', 'O.41A rr.3(2), (4)(a), (5)'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG5', issue: 'contract-claim-structure', label: 'Basic structure for a contractual claim' },
              { session: 'LG5', issue: 'five-level-case-analysis', label: 'The 5-Level Case Analysis' },
              { session: 'LG5', issue: 'interest-and-prayer', label: 'Interest, the prayer for relief and the District Court plea' },
              { session: 'LG5', issue: 'worked-tort-claim', label: 'Worked example: the shopfront collision claim' },
            ],
          },

          {
            id: 'worked-tort-claim',
            title: 'Worked example: the shopfront collision claim',
            summary: 'Exercise 2 end to end — two defendants, vicarious liability, particulars per defendant, and property loss that is not all quantified.',
            triggers: {
              bullets: [
                'A vehicle operated by an employee damages a third party’s property.',
                'The employer is sued both vicariously and for its own negligence.',
                'The driver breached an industry guideline on working hours.',
                'A vehicle was mechanically defective and the owner allowed it on the road.',
                'The plaintiff trades as a sole proprietor under a business name.',
                'Some heads of loss cannot yet be quantified.',
                'A prosecution may follow but has not yet been brought.',
                'Property was replaced with something newer or better than what was lost.',
              ],
              routes: [
                { when: 'You need the step structure rather than the worked example', session: 'LG5', issue: 'tort-claim-structure', label: 'Basic structure for a tortious claim' },
                { when: 'You need the ingredients grid', session: 'LG5', issue: 'five-level-case-analysis', label: 'The 5-Level Case Analysis' },
                { when: 'The claim is contractual rather than tortious', session: 'LG5', issue: 'worked-contract-claim', label: 'Worked example: the commercial dishwashers claim' },
                { when: 'The interest or prayer is the point', session: 'LG5', issue: 'interest-and-prayer', label: 'Interest, the prayer for relief and the District Court plea' },
              ],
            },
            answering: {
              flowchart: {
                title: 'The shopfront collision, step by step',
                steps: [
                  {
                    id: 'facts',
                    label: 'The facts, compressed',
                    points: [
                      'A bus mounted the pavement and hit a vehicle parked outside an antique shop; the force of the collision propelled both the vehicle and the front of the bus through the shopfront.',
                      'The frontage was destroyed, the ceiling structurally damaged and the stock on display smashed; repairs took six weeks, during which the shop was closed.',
                      'The driver had fallen asleep at the wheel during his usual shift, having worked hours significantly in excess of the Transport Department guidelines; the bus’s steering rod and joints were severely rusted.',
                      'The shop owner sues the driver as first defendant and the bus company as second defendant.',
                    ],
                  },
                  {
                    id: 'analysis',
                    label: 'The 5-Level Case Analysis',
                    points: [
                      'Level 1 tort; Level 2 negligence of both defendants, vicarious liability of the employer, and damages.',
                      'Ingredients: duty of care owed by both defendants; the employer’s vicarious liability; breach by the driver; breach by the employer; causation; damages that are foreseeable and not too remote.',
                      'Driver’s breach: falling asleep at the wheel; failing to observe the guidelines on working hours; driving with a severely rusted steering rod and joints.',
                      'Employer’s own breach: permitting its employee to work in excess of the guidelines; allowing the bus to operate in that mechanical condition.',
                      'Causation: the collision propelled the vehicle and the front of the bus through the shopfront, damaging the vehicle, the stock, the frontage and the ceiling.',
                      'Evidence: the client; staff who witnessed it; the bus passenger; police statements; the guidelines themselves; the police examination report — several carrying question marks, because they have not been obtained yet.',
                    ],
                  },
                  {
                    id: 'plan',
                    label: 'The skeletal plan',
                    points: [
                      'Step 1 introduces the owner (of both the shop and the vehicle), the driver (the employer’s employee) and the bus company (owner of the bus and employer of the driver).',
                      'Step 2 gives the date, the time, the location and the mechanism, plus the two facts that have to be pleaded there: that the vehicle was parked outside the shop, and that the driver was acting in the course of his employment.',
                      'Step 3 is marked "N.A." — this is a traffic accident case, the duty is obvious, and the step is skipped exactly as Appendix 7 allows.',
                      'Step 4 is the driver’s negligence with particulars, the employer’s own negligence with particulars, and the employer’s vicarious liability.',
                      'Step 5 lists what the collision did: the vehicle written off, the frontage destroyed, the ceiling structurally damaged, the stock irreparably damaged, and the shop closed for the six weeks of repairs.',
                      'Step 6 gives the heads of loss, with square-bracket queries on betterment (was replacing an older vehicle with a new one warranted? was the warranty in place on the old one?) and on losses not yet quantified (business lost during the closure).',
                      'Step 7 claims discretionary interest under s48 of the High Court Ordinance, because the action is in the Court of First Instance.',
                    ],
                  },
                  {
                    id: 'draft',
                    label: 'What the draft does with the plan',
                    points: [
                      'Paragraphs 1 to 3 are "At all material times": what the plaintiff owned; what the first defendant was employed as and drove; what the second defendant owned and operated. Registration numbers are left as visible placeholders, to be obtained.',
                      'Paragraph 4 is the NEUTRAL accident paragraph: date, time, road, that the driver was in the course of his employment, what the bus did, and a defined term for the collision. No allegation of negligence anywhere in it.',
                      'Paragraph 5 pleads the three factual matters that make the negligence case — asleep at the wheel, over-hours, defective steering — still as facts rather than as allegations of fault.',
                      'Paragraph 6 then alleges that the collision was caused by the negligence of the first defendant, for which the second defendant is vicariously liable, and by the negligence of the second defendant.',
                      'The particulars follow under two lettered headings, one per defendant, each a list of failures beginning with a verb.',
                      'Paragraph 7 is what the collision did; paragraph 8 is what the plaintiff then had to do about it; paragraph 9 pleads loss and damage with a PARTICULARS OF DAMAGE list and two square-bracket queries left open.',
                      'Then interest under s48 HCO, the prayer for damages, interest and costs, and a statement of truth signed by the plaintiff personally in the "I believe" form.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The plaintiff is a sole proprietor, so the shop is not a separate legal person. He sues in his own name, and his ownership of both the shop and the vehicle is a MATERIAL FACT, not background.',
                'The vehicle was parked on double yellow lines and the insurer has refused to indemnify. Illegal parking is a contributory-negligence point for the defence to raise; it does not stop the claim being pleaded, and the refusal is why the plaintiff bears the loss himself.',
                'The draft keeps paragraphs 4 and 5 neutral and puts the fault in paragraph 6. That is Appendix 7 Steps 2 and 4 working exactly as intended.',
                'No prosecution had been brought when instructions were taken, so O.18 r.7A does not bite yet. If a conviction follows, the pleading must be amended to add the r.7A statement and particulars.',
                'Nobody was injured, so none of the personal-injuries machinery in O.18 rr.12(1A)-(1C) applies here.',
                'The particulars of damage deliberately leave two items unquantified, in square brackets, rather than inventing figures — and the plan flags betterment on the replacement vehicle as a question for the client.',
                'The employer’s primary negligence and its vicarious liability are pleaded as two distinct things in the same paragraph. Both are needed: one survives if the other fails.',
              ],
            },
            skills: {
              bullets: [
                'Separate what the defendants DID (a neutral paragraph) from what that MAKES them (the negligence paragraph).',
                'Give each defendant its own lettered block of particulars.',
                'Where a registration number or a date is not yet known, leave a visible placeholder and list it as a further instruction.',
                'Plead a guideline breach by naming the guideline and saying what it sets — here, maximum driving hours.',
                'Plead the vicarious liability averment twice over: employment in the introduction, course of employment in the accident paragraph.',
                'Use "any or any proper" where the allegation is that something was not done at all, or not done adequately.',
              ],
            },
            mistakes: {
              bullets: [
                'Suing the shop rather than the sole proprietor who owns it.',
                'Merging the two defendants’ particulars into a single list.',
                'Putting "negligently" into the accident paragraph.',
                'Claiming the cost of a brand-new replacement without addressing betterment.',
                'Pleading a conviction that has not happened — or omitting the r.7A statement once one has.',
                'Omitting the closure of the shop, and so losing the head of loss for the business lost during it.',
              ],
            },
            authorities: {
              table: {
                headers: ['Element', 'How it is pleaded', 'Rule or source'],
                rows: [
                  ['The parties', 'Ownership of the shop and the vehicle; the driver’s employment; the employer’s ownership and operation of the bus', 'Appendix 7 Step 1'],
                  ['The accident', 'Date, time, location, mechanism and a defined term — neutrally, with no allegation of fault', 'Appendix 7 Step 2; O.18 r.13(1)'],
                  ['Duty', 'Skipped — a traffic accident where the duty is obvious and non-statutory', 'Appendix 7 Step 3'],
                  ['Negligence', 'One paragraph alleging causation by each defendant’s negligence, then lettered particulars per defendant', 'Appendix 7 Step 4'],
                  ['Vicarious liability', 'Employment pleaded in the introduction; course of employment pleaded in the accident paragraph', 'Appendix 4 and Appendix 7 Step 1'],
                  ['Convictions', 'Not applicable on these facts — no prosecution had been brought', 'O.18 r.7A(1)'],
                  ['Consequences and loss', 'What the collision did, then what the plaintiff had to do, then the particulars of damage', 'Appendix 7 Steps 5 and 6'],
                  ['Unquantified heads', 'Left in square brackets as items to be particularised once known', 'Appendix 7 Step 6'],
                  ['Interest', 'Discretionary interest in the Court of First Instance', 's48, High Court Ordinance (Cap. 4)'],
                  ['Verification', 'Signed by the plaintiff personally, in the "I believe" form', 'O.41A rr.3(1)(b), 5(1)'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG5', issue: 'tort-claim-structure', label: 'Basic structure for a tortious claim' },
              { session: 'LG5', issue: 'five-level-case-analysis', label: 'The 5-Level Case Analysis' },
              { session: 'LG5', issue: 'interest-and-prayer', label: 'Interest, the prayer for relief and the District Court plea' },
              { session: 'LG5', issue: 'worked-contract-claim', label: 'Worked example: the commercial dishwashers claim' },
            ],
          },
        ],
      },
      flashcards: [
        {
          topic: 'Function and Structure of a Statement of Claim',
          items: [
            { front: 'What is the main function of a Statement of Claim?', back: 'To set out all the material facts and necessary particulars that establish the plaintiff’s cause of action, and the relief sought.' },
            { front: 'What are the four parts every Statement of Claim comprises?', back: 'Introduction to parties and necessary background; substantive contents; prayer for relief; statement of truth.' },
            { front: 'Under O.18 r.7(1), what must a pleading contain — and contain only?', back: 'A statement in summary form of the material facts relied on, not the evidence by which those facts are to be proved, as brief as the nature of the case admits.' },
            { front: 'Under O.18 r.15(1), what must a statement of claim state specifically — and what need not be claimed?', back: 'It must state specifically the relief or remedy claimed; costs need not be specifically claimed.' },
            { front: 'Why does omitting a remedy from the prayer for relief lose it?', back: 'Because the Court cannot grant relief which has not been claimed at all: Belmont Finance Corp Ltd v Williams Furniture Ltd [1979] Ch 250.' },
            { front: 'How must dates, sums and other numbers be expressed in a pleading?', back: 'In figures and not in words: O.18 r.6(3).' },
          ],
        },
        {
          topic: 'The 5-Level Case Analysis',
          items: [
            { front: 'What are the five levels of the 5-Level Case Analysis?', back: '1 the area(s) of law; 2 the causes of action and remedies; 3 the legal ingredients of each; 4 the material facts supporting each; 5 the evidence for each material fact.' },
            { front: 'Which level supplies what goes into the pleading, and which level must stay out of it?', back: 'Level 4 material facts are pleaded; Level 5 evidence is not — it goes into witness statements and affidavits.' },
            { front: 'What are the legal ingredients of a breach of contract claim?', back: 'Existence of the contract; the material terms; breach of those terms — plus recoverable loss within the defendant’s contemplation at the time of the contract.' },
            { front: 'What two facts must be pleaded to establish an employer’s vicarious liability?', back: 'That the tortfeasor was the employer’s employee, and that he was acting in the course of that employment at the time.' },
            { front: 'Besides drafting pleadings, what three other jobs does the 5-Level Case Analysis do?', back: 'It supplies the evidence for affidavits and witness statements; it tests the merits of the client’s case; and it shows what further evidence needs to be obtained.' },
          ],
        },
        {
          topic: 'Pleading a Contractual Claim',
          items: [
            { front: 'What material facts about the contract itself does Step 2 of the contract structure require?', back: 'The parties; the date (or "on or about" an approximate date); how the contract was made; the subject matter; and the consideration.' },
            { front: 'When is a term "material" and so required to be pleaded?', back: 'When it is a term the plaintiff intends to rely upon for his claim — one allegedly breached, or one entitling him to the relief sought.' },
            { front: 'What extra detail must be given when pleading an implied term?', back: 'Particulars of the facts and matters — and the statutory provision, if any — relied on as giving rise to the implied term.' },
            { front: 'Why must the defendant’s knowledge of special circumstances be pleaded?', back: 'Because it is what shows the loss was reasonably within the parties’ contemplation at the time of the contract as a likely consequence of the breach.' },
            { front: 'Which sweeping-up plea should be avoided, and on what authority?', back: '"P will refer to all other terms and conditions of the agreement at trial" — Citibank N.A. (Nominees) Ltd v Deacon Te-ken Chiu [1983] HKLR 121 (CA).' },
            { front: 'Must the plaintiff plead that it mitigated its loss?', back: 'Generally no — failure to mitigate is for the defendant to raise in the Defence. But the plaintiff must plead acts done in mitigation if it wants to claim the expenses of them.' },
            { front: 'When pleading an oral contract, how much of the conversation goes in?', back: 'Its purport, briefly stated — not the precise words, unless the words are themselves material: O.18 r.7(2).' },
          ],
        },
        {
          topic: 'Pleading a Tortious Claim',
          items: [
            { front: 'How should the accident paragraph of a tort claim be written, and why?', back: 'Neutrally, avoiding any allegation of negligence, so that the defendant will hopefully admit it — an allegation of fact is deemed admitted unless traversed: O.18 r.13(1).' },
            { front: 'When may Step 3 (the existence and scope of duty) be skipped?', back: 'Where the duty and its scope are obvious, non-controversial or not statutory — traffic accident cases being the example.' },
            { front: 'How are allegations pleaded where two defendants are involved?', back: 'The separate acts and omissions of each defendant go in different paragraphs, with separate particulars for each.' },
            { front: 'What must a plaintiff plead if he intends to rely on the defendant’s conviction in Hong Kong?', back: 'A statement of that intention with particulars of the conviction and its date, the court which made it, and the issue in the proceedings to which it is relevant: O.18 r.7A.' },
            { front: 'What two extra documents must be served with a statement of claim in a personal injuries action?', back: 'A medical report and a statement of the special damages claimed: O.18 r.12(1A).' },
            { front: 'Where does the relationship founding the duty of care get pleaded?', back: 'In the introduction — occupier and visitor, employer and employee, or master and servant where vicarious liability is alleged.' },
          ],
        },
        {
          topic: 'Interest, Relief and Verification',
          items: [
            { front: 'Where may a claim for discretionary interest be pleaded?', back: 'Either in the body of the statement of claim and the prayer, or in the prayer alone — both are acceptable: Prague Enterprises Ltd v Chan Miu Cheung [1994] 3 HKC 175 (CA).' },
            { front: 'Where must a claim for contractual interest be pleaded?', back: 'In the body of the pleading, with the facts and matters on which it depends — not only in the prayer.' },
            { front: 'Which section gives discretionary interest in the Court of First Instance, and which in the District Court?', back: 'Section 48 of the High Court Ordinance (Cap. 4); section 49 of the District Court Ordinance (Cap. 336).' },
            { front: 'What extra plea must a District Court statement of claim carry?', back: 'A plea that the relief sought falls within the District Court’s jurisdiction, specifying the jurisdiction-conferring section(s) relied on: Practice Direction 27 §4.' },
            { front: 'Who signs the statement of truth where the party is a corporation?', back: 'A person holding a senior position — a director, manager, secretary or other similar officer — who must state the office or position held: O.41A rr.3(2), (4)(a) and (5).' },
            { front: 'When should a solicitor sign the statement of truth?', back: 'Only where it cannot conveniently be signed by the client — and then in his own name, not the firm’s: O.41A r.3(10).' },
          ],
        },
      ],
      cloze: [
        {
          topic: 'Function and Structure of a Statement of Claim',
          items: [
            { text: 'The main function of a Statement of Claim is to set out all the {{material facts}} and necessary {{particulars}} that establish the plaintiff’s cause of action and the {{relief sought}}.' },
            { text: 'A Statement of Claim comprises an introduction to parties and necessary background; the {{substantive contents}}; the {{prayer for relief}}; and the {{statement of truth}}.' },
            { text: 'Under O.18 r.{{7(1)}}, a pleading must contain a statement in summary form of the material facts relied on, but not the {{evidence}} by which those facts are to be proved.' },
            { text: 'Under O.18 r.15(1) a statement of claim must state specifically the relief or remedy claimed, but {{costs}} need not be specifically claimed.' },
            { text: 'Under O.18 r.6(3), dates, sums and other numbers must be expressed in a pleading in {{figures}} and not in {{words}}.' },
          ],
        },
        {
          topic: 'The 5-Level Case Analysis',
          items: [
            { text: 'Level {{3}} of the case analysis gives the legal ingredients of the cause of action; Level {{4}} gives the material facts supporting each ingredient; and Level {{5}} gives the evidence for each material fact.' },
            { text: 'It is the Level {{4}} material facts that are pleaded in the Statement of Claim, and they must cover all the Level {{3}} legal ingredients.' },
            { text: 'The legal ingredients of a breach of contract claim are the existence of the {{contract}}, the {{material terms}}, and {{breach}} of those terms.' },
            { text: 'Recoverable loss in contract is loss within the defendant’s {{contemplation}} at the time of the {{contract}} as a likely consequence of the breach.' },
            { text: 'Vicarious liability requires the plaintiff to plead that the tortfeasor was the defendant’s {{employee}} and was acting in the {{course of employment}} at the time.' },
          ],
        },
        {
          topic: 'Pleading a Contractual Claim',
          items: [
            { text: 'Where the date of the contract cannot be precisely ascertained, it is pleaded by giving an approximate date, using the words "{{On or about}}".' },
            { text: 'A term is material if it is one the plaintiff intends to {{rely upon}} for his claim, and the pleading must state whether it is an {{express}} or an {{implied}} term.' },
            { text: 'Where the plaintiff claims repudiation for breach of a condition, the pleading should describe the term as a "{{condition}}" rather than as a term.' },
            { text: 'Under O.18 r.7(2), the {{purport}} of a conversation referred to in a pleading must, if material, be briefly stated, and the {{precise words}} must not be stated unless they are themselves material.' },
            { text: 'The plaintiff generally need not plead that it has {{mitigated}} its loss, because failure to mitigate is for the {{defendant}} to raise in the Defence.' },
            { text: 'Where the plaintiff wishes to treat the contract as at an end, it must plead that the defendant {{repudiated}} the contract and that the plaintiff {{accepted}} the repudiation.' },
          ],
        },
        {
          topic: 'Pleading a Tortious Claim',
          items: [
            { text: 'The accident paragraph of a tortious claim should describe the event in a {{neutral}} manner, avoiding any allegation of negligence, so that the defendant will hopefully {{admit}} it.' },
            { text: 'An allegation of fact in a pleading is deemed to be {{admitted}} by the opposite party unless it is {{traversed}}: O.18 r.13(1).' },
            { text: 'Step 3 of the tortious structure — the existence and scope of the duty — may be skipped where the duty is obvious or non-controversial, as in {{traffic accident}} cases.' },
            { text: 'Where a plaintiff intends to adduce evidence of a defendant’s conviction in Hong Kong, O.18 r.{{7A}} requires him to plead his intention with particulars of the conviction and its date, the {{court}} which made it, and the {{issue}} to which it is relevant.' },
            { text: 'In a personal injuries action the plaintiff must serve with the statement of claim a {{medical report}} and a statement of the {{special damages}} claimed: O.18 r.12(1A).' },
          ],
        },
        {
          topic: 'Interest, Relief and Verification',
          items: [
            { text: 'Discretionary interest is claimed under section {{48}} of the High Court Ordinance, or section {{49}} of the District Court Ordinance.' },
            { text: 'A claim for discretionary interest may be set out in the body and the prayer, or in the {{prayer}} alone: Prague Enterprises Ltd v Chan Miu Cheung [1994] 3 HKC 175 (CA).' },
            { text: 'All claims for interest other than discretionary interest must be pleaded in the {{body}} of the pleading, with the facts and matters on which they depend.' },
            { text: 'Under O.18 r.8(4), a party must plead {{specifically}} any claim for interest under section 48 of the Ordinance or otherwise.' },
            { text: 'Practice Direction 27 §4 requires every District Court writ to plead that the relief sought falls within the {{jurisdiction}} of the District Court, specifying the jurisdiction-conferring {{section(s)}} relied on.' },
            { text: 'Where the party is a corporation, the statement of truth must be signed by a person holding a {{senior position}}, who must state the {{office or position}} he holds.' },
            { text: 'A legal representative who signs a statement of truth must sign in his {{own name}}, and not only in the name of the {{firm}} to which he belongs.' },
          ],
        },
      ],
    },

    LG6: {
      kind: 'LG',
      date: '2026-09-11',
      time: '16:00-18:00',
      mode: 'Face-to-face',
      authors: ['Alfred Cheng', 'Vivian Chan'],
      objectives: [
        'Distinguish between the procedures for obtaining default judgment under O.13 (failure to acknowledge service) and O.19 (failure to file a defence).',
        'Apply the rules governing admissions and proposals for payment by instalments under O.13A.',
        'Draft the necessary documents to enter a default judgment and advise on the associated fixed costs.',
        'Analyse the grounds and procedures for setting aside a default judgment, differentiating between regular and irregular judgments.',
      ],
      topicsCovered: [
        'Admission of claims (O.13A): types of admission, the procedure for making them, and the plaintiff\'s options',
        'Judgment in default of acknowledgement of service (O.13): liquidated, unliquidated, detention of goods, recovery of land',
        'Judgment in default of defence (O.19)',
        'The procedure for entering a default judgment, including proof of service',
        'Setting aside default judgments: the key difference between regular and irregular judgments',
        'The principles and tests applied by the Court (ex debito justitiae for irregular judgments; the discretionary test including a defence on the merits for regular judgments), with the potential terms and costs consequences',
      ],
      prep: {
        readings: [
          'This lecture outline and the LG6 Reference Materials',
          'Julienne Jen, "Hong Kong Civil Court Practice" (LexisNexis, 2025), chapters on Orders 12, 13, 13A and 19',
          'RHC O.12, O.13, O.13A and O.19',
          'Negligence Case file Batch A, documents A56-A71 — identify the type of default judgment and its effect on co-defendants',
          'Negligence Case file Batch B, documents B3-B27 — was the judgment regular or irregular, and how was it set aside',
        ],
      },
      prepChecklist: [
        { id: 'read-outline', label: 'Read the LG6 lecture outline and Reference Materials' },
        { id: 'read-orders', label: 'Read RHC O.12, O.13, O.13A and O.19 themselves' },
        { id: 'batch-a', label: 'Batch A (A56-A71): was the default judgment against D2 liquidated or unliquidated, and what happens to the case against D1?' },
        { id: 'batch-b', label: 'Batch B (B3-B27): was the judgment regular or irregular, and how were the set-aside requirements met?' },
        { id: 'exercise-andrew', label: 'Exercise 1, Andrew: advise on setting aside a judgment obtained while he was out of the jurisdiction' },
        { id: 'exercise-cynthia', label: 'Exercise 1, Cynthia: advise on using O.13A to admit and propose instalments' },
      ],
      keyTakeaways: [
        'O.13A is a settlement mechanism for a defendant who admits liability but needs time to pay. The plaintiff\'s response dictates whether judgment is entered immediately or the terms are set by the Court.',
        'Which default-judgment Order applies depends on the STAGE of the default: failure to file an acknowledgement of service (O.13) against failure to file a defence after acknowledging (O.19).',
        'The validity of service determines whether the default judgment was obtained regularly or irregularly — and that, not the strength of the defence, is the first question on a set-aside application.',
        'Costs consequences flow from the type of judgment: on an irregular judgment P pays D\'s costs; on a regular judgment D pays P\'s costs.',
      ],
      examNotes: {
        intro: 'Every question in this lecture is answered in the same three moves. First classify the claim, because liquidated or unliquidated decides which rule applies, which form is used, and whether the judgment is final or interlocutory. Second, identify the stage the defendant defaulted at — no acknowledgement of service (O.13), or acknowledgement but no defence (O.19) — because that decides the Order, the procedure and whether a notice of intention to enter judgment is needed. Third, if a judgment has already been entered, ask whether service was good: regular or irregular decides the test, the evidence and who pays the costs. The issue types below run in that order, with the O.13A admission route sitting alongside as what a defendant who does not want to fight should have done instead.',
        issueTypes: [
          {
            id: 'liquidated-or-unliquidated',
            title: 'Classifying the claim: liquidated or unliquidated',
            summary: 'The first question in the lecture — it fixes which rule applies, which form is served, and whether the judgment is final or interlocutory.',
            triggers: {
              bullets: [
                'Any default judgment or O.13A question at all — nothing else in the lecture can be answered until the claim is classified.',
                'The claim is for a sum due under a contract, an invoice, a loan, or a dishonoured cheque.',
                'The claim is for damages for negligence, for personal injury, or for breach of contract.',
                'The writ claims a fixed sum AND damages to be assessed.',
                'The writ adds interest to a fixed sum, and you need to know whether that spoils the classification.',
                'The writ seeks something that is not money at all — delivery of goods, possession of land, an account, an injunction, a declaration.',
                'You are deciding which admission form to serve with the writ: Form No. 16 or Form No. 16C.',
                'You are drafting the prayer in a summons for default judgment and must choose between "final judgment" and "interlocutory judgment with damages to be assessed".',
              ],
              routes: [
                { when: 'The defendant wants to admit rather than fight', session: 'LG6', issue: 'admissions-o13a', label: 'Making an admission under O.13A' },
                { when: 'The defendant never acknowledged service', session: 'LG6', issue: 'default-notice-of-intention', label: 'Default judgment for failure to give notice of intention to defend (O.13)' },
                { when: 'The defendant acknowledged service but filed no defence', session: 'LG6', issue: 'default-of-defence', label: 'Default judgment in default of defence (O.19)' },
                { when: 'The question is really whether the acknowledgement deadline has passed at all', session: 'LG3', issue: 'acknowledgement-of-service', label: 'Acknowledgement of service — 14 days INCLUDING the day of service' },
                { when: 'The interest claim has to have been pleaded for it to be recoverable on the judgment', session: 'LG5', issue: 'interest-and-prayer', label: 'Interest, the prayer for relief and the District Court plea' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Classifying the claim',
                steps: [
                  {
                    id: 'test',
                    label: 'Ask the one question: must the Court assess the amount?',
                    points: [
                      'A LIQUIDATED claim does not require the Court\'s assessment of loss — a fixed sum of debt, a fixed penalty, interest, or "liquidated damages" agreed in the contract.',
                      'An UNLIQUIDATED claim requires the Court to assess the amount — damages for negligence or for breach of contract, where the Court must decide how much the plaintiff is entitled to.',
                      {
                        text: 'The lecture\'s own worked examples, which are the safest calibration:',
                        points: [
                          'LIQUIDATED: $3,400 under an invoice; payment under a bounced cheque; repayment of a defaulted loan with contractual interest.',
                          'UNLIQUIDATED: damages of $1,000,000 for loss of goodwill; compensation of $300,000 for pain and suffering; damages for breach of contract.',
                        ],
                      },
                      'The size or precision of the figure is NOT the test. "$1,000,000 for loss of goodwill" is still unliquidated: the number is the plaintiff\'s assertion, not a sum the Court is bound to enter.',
                      'Classify on the INDORSEMENT of the writ — O.13 rr.1-5 and O.19 rr.2-6 all key off what the writ is indorsed with, not what the plaintiff later says the claim is worth.',
                    ],
                  },
                  {
                    id: 'interest',
                    label: 'Check whether interest spoils the classification — usually it does not',
                    points: [
                      'O.13 r.1(2) — a claim is not prevented from being treated as one for a liquidated demand by reason ONLY that part of it is for interest under s48 of the Ordinance at a rate not higher than that payable on judgment debts at the date of the writ.',
                      'O.19 r.2(2) applies O.13 r.1(2) to default of defence, so the same saving runs in both Orders.',
                      'The saving is limited to s48 interest at or below the judgment-debt rate. Interest claimed on some other basis, or at a higher rate, is outside it — so read the rate pleaded, not just the word "interest".',
                      'That does not mean contractual interest makes a claim unliquidated. A loan of $200,000 with an agreed further $20,000 payable as interest is a liquidated claim for $220,000 in its own right, because no assessment is needed.',
                    ],
                  },
                  {
                    id: 'mixed',
                    label: 'Is it a MIXED claim? The answer differs between O.13A and O.13/O.19',
                    points: [
                      'For O.13 and O.19 a mixed writ is NOT reclassified. The plaintiff enters against that defendant such judgment on each claim as he would have been entitled to enter if that were the only claim indorsed: O.13 r.5; O.19 r.6.',
                      'So a mixed judgment is PART FINAL (the liquidated demand, and possession of land) and PART INTERLOCUTORY (unliquidated damages, and detention of goods).',
                      'For O.13A ONLY, the opposite rule applies: O.13A r.1(2) treats the amount of a claim as UNLIQUIDATED if it consists of a claim for a liquidated amount and a claim for an unliquidated amount.',
                      'The divergence is the trap. The same writ can be "mixed" for O.13 and "unliquidated" for O.13A. Do not carry one Order\'s classification across into the other.',
                    ],
                  },
                  {
                    id: 'consequence',
                    label: 'Read off the consequence',
                    points: [
                      'Liquidated demand only → FINAL judgment for a sum not exceeding that claimed by the writ, and costs: O.13 r.1(1); O.19 r.2(1).',
                      'Unliquidated damages only → INTERLOCUTORY judgment for damages to be assessed, and costs: O.13 r.2; O.19 r.3. Liability is won; quantum still has to be proved at an assessment, usually with the defendant absent.',
                      {
                        text: 'Detention of goods only → the plaintiff has an option, and in each case it is subject to O.42 r.1A: O.13 r.3(1); O.19 r.4(1).',
                        points: [
                          'Interlocutory judgment for delivery of the goods OR their value to be assessed, and costs.',
                          'Interlocutory judgment for the value of the goods to be assessed, and costs.',
                          'Or apply by summons for judgment for delivery WITHOUT giving the defendant the alternative of paying their assessed value — and that summons must be supported by affidavit, with the summons and a copy of the affidavit served on the defendant notwithstanding O.65 r.9.',
                        ],
                      },
                      'Possession of land only → judgment for possession and costs, on producing a certificate by the plaintiff\'s solicitor (or, if he sues in person, an affidavit) that he is not claiming any relief of the nature specified in O.88 r.1: O.13 r.4(1); O.19 r.5(1).',
                      'Anything else → not a default-judgment claim in the ordinary sense. Under O.13 r.6(1) the plaintiff proceeds as if the defendant HAD given notice of intention to defend; under O.19 r.7(1) he applies to the Court by summons for judgment.',
                      'For O.13A the classification picks the form: liquidated → Form No. 16 and rr.4-5; unliquidated → Form No. 16C and rr.6-7: O.13A r.13(2).',
                    ],
                  },
                ],
              },
            },
            skeleton: {
              table: {
                headers: ['Type of claim', 'Judgment in default of A/S (O.13)', 'Judgment in default of defence (O.19)', 'O.13A admission form'],
                rows: [
                  ['Liquidated demand only', 'FINAL judgment for a sum not exceeding that claimed, and costs: r.1(1)', 'FINAL judgment for a sum not exceeding that claimed, and costs: r.2(1)', 'Form No. 16 (rr.4-5)'],
                  ['Unliquidated damages only', 'INTERLOCUTORY judgment, damages to be assessed, and costs: r.2', 'INTERLOCUTORY judgment, damages to be assessed, and costs: r.3', 'Form No. 16C (rr.6-7)'],
                  ['Detention of goods only', 'Interlocutory for delivery or value to be assessed, or value to be assessed; or summons for delivery without the alternative: r.3(1), subject to O.42 r.1A', 'Same three options: r.4(1), subject to O.42 r.1A', 'Not an O.13A claim — the only remedy sought must be payment of money: r.2(1)'],
                  ['Possession of land only', 'Judgment for possession and costs, on a solicitor\'s certificate of no O.88 r.1 relief: r.4(1)', 'Judgment for possession and costs, on the same certificate: r.5(1)', 'Not an O.13A claim'],
                  ['Two or more of the above, and no other claim', 'Such judgment on each claim as if it were the only claim indorsed — part final, part interlocutory: r.5', 'Such judgment on each claim as if it were the only claim made: r.6', 'Treated as UNLIQUIDATED: r.1(2) — Form No. 16C'],
                  ['Any other description of claim', 'Proceed as if the defendant had given notice of intention to defend: r.6(1)', 'Apply to the Court by summons for judgment: r.7(1), (3)', 'Not an O.13A claim'],
                ],
              },
            },
            lookOut: {
              bullets: [
                'Classification is done on the indorsement of the writ, not on the plaintiff\'s later valuation of the claim.',
                'O.13 r.1(2)\'s interest saving is narrow: s48 interest at a rate no higher than the judgment-debt rate at the date of the writ. Check the rate pleaded.',
                '"Interlocutory" does not mean the plaintiff won less. It means liability is established and quantum still has to be proved.',
                'O.13A is available ONLY where the only remedy sought is the payment of money (r.2(1)). A writ that also seeks delivery up or an injunction is outside the Order entirely.',
                'O.42 r.1A cuts a detention judgment down to damages only where the claimant is a partial owner whose right of action is not founded on a possessory title.',
                'A claim for an account, an injunction or a declaration falls within "a description not mentioned in rules 1 to 4" — O.13 r.6(1) — which is why O.19 r.7 exists for such a claim at the defence stage.',
              ],
            },
            skills: {
              bullets: [
                'Classify in one sentence WITH the reason: "the sum is fixed by the loan agreement, so the Court need not assess it — the claim is liquidated".',
                'Then say what the classification buys: which rule, which form, final or interlocutory.',
                'On a mixed writ, classify each head separately and state which parts go final and which interlocutory — do not average them into one answer.',
                'If the question involves both an admission and a default judgment, flag the O.13A r.1(2) divergence expressly rather than leaving the reader to spot it.',
                'Where the claim is outside rr.1-4, say so and route to O.13 r.6 or O.19 r.7 instead of forcing the facts into a default judgment.',
              ],
            },
            mistakes: {
              bullets: [
                'Treating a large or precisely pleaded figure as liquidated because it looks certain.',
                'Applying O.13A r.1(2)\'s "mixed means unliquidated" rule to an O.13 or O.19 default judgment.',
                'Entering final judgment on an unliquidated claim.',
                'Forgetting the solicitor\'s certificate of no O.88 r.1 relief on a possession claim.',
                'Missing that the claim falls outside rr.1-4 altogether, and entering a judgment the rules do not permit.',
                'Assuming interest always makes a claim unliquidated, or that contractual interest always keeps it liquidated, without reading the rate and basis pleaded.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'A claim shall not be prevented from being treated for the purposes of this rule as a claim for a liquidated demand by reason only that part of the claim is for interest under section 48 of the Ordinance at a rate which is not higher than that payable on judgment debts at the date of the writ.', cite: 'O.13 r.1(2), Rules of the High Court (Cap. 4A)' },
                { text: 'For the purposes of rules 6(1)(b) and 7(1)(b), the amount of a claim is treated as unliquidated if the claim consists of a claim for a liquidated amount of money and a claim for an unliquidated amount of money.', cite: 'O.13A r.1(2), Rules of the High Court (Cap. 4A)' },
              ],
              table: {
                headers: ['Point', 'Source', 'What it actually provides'],
                rows: [
                  ['Liquidated demand, default of A/S', 'O.13 r.1(1)', 'Final judgment for a sum not exceeding that claimed by the writ in respect of the demand, and costs, with the action proceeding against the other defendants'],
                  ['Interest saving', 'O.13 r.1(2); O.19 r.2(2)', 'Part of the claim being s48 interest at a rate no higher than the judgment-debt rate at the date of the writ does not stop it being a liquidated demand; O.19 r.2(2) applies the same rule at the defence stage'],
                  ['Unliquidated damages', 'O.13 r.2; O.19 r.3', 'Interlocutory judgment for damages to be assessed and costs'],
                  ['Detention of goods', 'O.13 r.3(1); O.19 r.4(1)', 'At the plaintiff\'s option, interlocutory judgment for delivery or value to be assessed, or for value to be assessed; or a summons for delivery without the alternative of paying the assessed value — subject to O.42 r.1A'],
                  ['Partial owner of goods', 'O.42 r.1A(1)', 'Where a detention claim is made by a partial owner whose right of action is not founded on a possessory title, any judgment or order on the claim shall be for the payment of damages only'],
                  ['Possession of land', 'O.13 r.4(1); O.19 r.5(1)', 'Judgment for possession and costs, on producing a solicitor\'s certificate (or the plaintiff\'s own affidavit if in person) that no relief of the nature specified in O.88 r.1 is claimed'],
                  ['Mixed claims', 'O.13 r.5; O.19 r.6', 'Such judgment in respect of each claim as the plaintiff would be entitled to enter if that were the only claim indorsed or made — so part final, part interlocutory'],
                  ['Other claims', 'O.13 r.6(1); O.19 r.7(1), (3)', 'Under O.13 the plaintiff proceeds as if the defendant had given notice of intention to defend; under O.19 he applies to the Court by summons and the Court gives such judgment as the plaintiff appears entitled to on his statement of claim'],
                  ['Which admission form', 'O.13A r.13(2)', 'A liquidated claim must be served with Form No. 16; an unliquidated claim with Form No. 16C'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG6', issue: 'admissions-o13a', label: 'Making an admission under O.13A' },
              { session: 'LG6', issue: 'default-notice-of-intention', label: 'Default judgment for failure to give notice of intention to defend (O.13)' },
              { session: 'LG6', issue: 'default-of-defence', label: 'Default judgment in default of defence (O.19)' },
              { session: 'LG6', issue: 'entering-default-judgment', label: 'Entering judgment under O.13: procedure, proof of service and fixed costs' },
            ],
          },
          {
            id: 'admissions-o13a',
            title: 'Making an admission under O.13A',
            summary: 'When a defendant who does not want to fight can admit, by when, on which form, and what the admission actually commits him to.',
            triggers: {
              bullets: [
                'The defendant says he has no defence, or admits owing something, and wants the action over quickly and cheaply.',
                'The defendant can pay, but not all at once or not immediately.',
                'The defendant admits liability for an accident but disputes the amount claimed.',
                'The defendant wants to offer part of a liquidated sum in satisfaction of the whole claim.',
                'The deadline for serving the defence has passed and the defendant now wants to admit.',
                'The writ seeks money AND something else — delivery up, possession, an injunction.',
                'The defendant has already returned an acknowledgement of service saying he does not intend to contest.',
                'Either party is a minor or otherwise under a disability.',
                'You are advising the plaintiff on what must be served together with the writ.',
              ],
              routes: [
                { when: 'You have not yet fixed whether the claim is liquidated', session: 'LG6', issue: 'liquidated-or-unliquidated', label: 'Classifying the claim: liquidated or unliquidated' },
                { when: 'The admission has been filed and the question is what the plaintiff must now do', session: 'LG6', issue: 'responding-to-an-admission', label: 'The plaintiff\'s response to an admission' },
                { when: 'The defendant wants to pay by instalments', session: 'LG6', issue: 'time-to-pay', label: 'Requesting time to pay, instalments and the stay of execution' },
                { when: 'A default judgment has already been entered', session: 'LG6', issue: 'regular-or-irregular', label: 'Is the default judgment regular or irregular?' },
                { when: 'The live question is when the defence was actually due', session: 'LG4', issue: 'pleadings-timetable', label: 'The pleadings timetable and close of pleadings' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Advising a defendant who wants to admit',
                steps: [
                  {
                    id: 'gate',
                    label: 'Is O.13A available at all?',
                    points: [
                      'O.13A r.2(1) is a gateway: the Order applies only "where the only remedy that a plaintiff is seeking is the payment of money". A writ that also seeks delivery up, possession, an injunction or a declaration falls outside it.',
                      'Within that gateway both liquidated and unliquidated money claims are covered — rr.4-5 for liquidated, rr.6-7 for unliquidated.',
                      'O.13A r.1(2) — for rr.6(1)(b) and 7(1)(b), a claim that is partly liquidated and partly unliquidated is treated as UNLIQUIDATED.',
                      'It is not available where the defendant has already indicated in the acknowledgement of service that he does not intend to defend the claim.',
                      {
                        text: 'O.13A r.2(2) — where an admission is made the plaintiff may enter judgment EXCEPT where:',
                        points: [
                          'the defendant is a person under disability; or',
                          'the plaintiff is a person under disability AND the admission is made under r.5 or r.7.',
                          '"Person under disability" carries its O.80 r.1 meaning: r.2(4).',
                        ],
                      },
                    ],
                  },
                  {
                    id: 'timing',
                    label: 'Is the defendant in time — and if not, is the late route still open?',
                    points: [
                      'Writ: the period for filing and serving the admission is the period fixed for service of his defence — O.13A r.3(1)(a).',
                      'Originating summons: the period fixed for filing his affidavit evidence — r.3(1)(b). In any other case, 14 days after service of the originating process — r.3(1)(c).',
                      'A late admission is still possible on a writ IF the plaintiff has not obtained a default judgment under O.13 or O.19: r.3(2)(a).',
                      'On an originating summons the late route works if the admission is filed and served before the date or period fixed under O.28 r.2 for the hearing: r.3(2)(b).',
                      'A late admission under r.3(2) is then treated as if it had been made within the primary period: r.3(3).',
                      'So the real race is against the default judgment, not against the calendar — which is precisely why a plaintiff who wants to shut the O.13A route down enters judgment promptly.',
                    ],
                  },
                  {
                    id: 'which',
                    label: 'Pick the right rule and the right form',
                    points: [
                      'Whole of a liquidated claim → r.4, admission in Form No. 16.',
                      'Part of a liquidated claim, in satisfaction of the whole claim → r.5, admission in Form No. 16.',
                      'Whole of an unliquidated claim, where the defendant admits liability but does NOT offer to pay a liquidated amount → r.6, admission in Form No. 16C. The admission goes to liability only, not quantum: r.6(1)(c).',
                      'An unliquidated claim where the defendant admits liability AND offers a liquidated sum in satisfaction of the claim → r.7, admission in Form No. 16C: r.7(1)(c).',
                      'In every case the defendant admits by BOTH filing the admission in the Registry AND serving a copy on the plaintiff: rr.4(2), 5(2), 6(2), 7(2). Filing alone does not start the plaintiff\'s 14 days — the clock runs from service of the copy.',
                      'The forms are in RHC Appendix A. On both Form No. 16 and Form No. 16C the defendant must set out his financial position, and if he is not an individual he must attach the latest audited profit and loss account and balance sheet.',
                    ],
                  },
                  {
                    id: 'commit',
                    label: 'Advise the defendant what the admission actually commits him to',
                    points: [
                      'Under r.5 the plaintiff\'s only choices are to accept the amount admitted in satisfaction of the WHOLE claim, or not to accept it — in which case the action proceeds as a defended claim. A part admission is an offer to settle everything, not a payment on account.',
                      'An admission under r.6 concedes liability and leaves quantum to the Court, so the defendant has NOT capped his exposure and still faces an assessment.',
                      'An admission under r.7 does put a figure on it — but if the plaintiff does not accept that figure, judgment is entered for an amount to be decided by the Court: r.7(9)-(10).',
                      'An admission is not lightly undone: the Court MAY allow a party to amend or withdraw an admission if it considers it just to do so having regard to all the circumstances of the case: r.2(3).',
                      'Judgment under r.4, 5 or 7 must include the interest claimed to the date of judgment where the three r.12(1) conditions are met; if they are not, judgment is for an amount of interest to be decided by the Court: r.12(2).',
                      'Where the Court enters judgment under r.6 or r.7 for an amount to be decided by it, it may give such directions as it considers appropriate: r.8.',
                    ],
                  },
                  {
                    id: 'serve',
                    label: 'If acting for the plaintiff: what must go out with the writ',
                    points: [
                      'O.13A r.13(2) — where the only remedy sought is the payment of money, the writ, originating summons or other originating process MUST be accompanied by a copy of Form No. 16 (liquidated) or Form No. 16C (unliquidated) for admitting the claim.',
                      'PD 24.1 para.8 — on an O.13 application the affidavit of service should also depose to the fact that the relevant O.13A statutory forms were served together with the Writ and the acknowledgement of service.',
                      'So a failure to serve the admission form is not just a discourtesy: it shows up as a gap in the very affidavit on which the default judgment is sought.',
                    ],
                  },
                ],
              },
            },
            skeleton: {
              table: {
                headers: ['What the defendant admits', 'Rule', 'Defendant\'s form', 'What the judgment will be for'],
                rows: [
                  ['The whole of a liquidated claim', 'O.13A r.4', 'Form No. 16', 'The amount of the claim (less any payments made) and costs: r.4(7)'],
                  ['Part of a liquidated claim, in satisfaction of the whole', 'O.13A r.5', 'Form No. 16', 'The amount admitted (less any payments made) and costs — if the plaintiff accepts: r.5(8)'],
                  ['Liability on an unliquidated claim, no sum offered', 'O.13A r.6', 'Form No. 16C', 'An amount to be decided by the Court, and costs: r.6(6)'],
                  ['Liability on an unliquidated claim, with a sum offered in satisfaction', 'O.13A r.7', 'Form No. 16C', 'The amount offered (less any payments made) and costs if accepted: r.7(8); otherwise an amount to be decided by the Court: r.7(10)'],
                ],
              },
            },
            lookOut: {
              bullets: [
                'r.2(1) is a gateway with the word "only" in it — the only remedy sought must be the payment of money.',
                'The r.3(2)(a) late route closes the moment a default judgment is entered. Advise on speed, not just on the deadline.',
                'A part admission under r.5 is an offer in satisfaction of the whole claim. If the plaintiff rejects it, the case is simply defended.',
                'Under r.6 the defendant admits liability only. Clients routinely assume an admission ends the case; it does not.',
                'Disability cuts across the whole Order: r.2(2) stops the plaintiff entering judgment on the admission.',
                'A defendant who has already said in the acknowledgement of service that he does not intend to defend cannot then use O.13A.',
                'Filing without serving does not start the plaintiff\'s 14 days — each of rr.4(2), 5(2), 6(2) and 7(2) requires both.',
              ],
            },
            skills: {
              bullets: [
                'Open by applying r.2(1) to the remedies actually sought on the writ, and say whether the gateway is passed.',
                'Classify the claim, then name the rule and the form together — "a liquidated claim admitted in whole, so r.4 and Form No. 16".',
                'Where the defendant is out of time, do not stop at the deadline: apply r.3(2)(a) and check whether a default judgment has been entered.',
                'Advise on the consequence as well as the mechanism — what the defendant is giving up, and what he is not.',
                'If the question asks whether the defendant SHOULD admit, weigh the fixed costs and the stay of execution against the loss of any defence, rather than just describing the procedure.',
              ],
            },
            mistakes: {
              bullets: [
                'Using O.13A where the writ seeks anything besides money.',
                'Advising that a late admission is impossible, instead of checking whether a default judgment has yet been entered.',
                'Treating a r.5 part admission as a payment on account of a continuing claim.',
                'Telling a client that an admission of liability under r.6 fixes what he has to pay.',
                'Filing the admission in the Registry without serving a copy on the plaintiff.',
                'Overlooking r.13(2), and serving a writ for money without the admission form.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'Where the only remedy that a plaintiff is seeking is the payment of money, the defendant may make an admission in accordance with—', cite: 'O.13A r.2(1), Rules of the High Court (Cap. 4A)' },
                { text: 'The Court may allow a party to amend or withdraw an admission if the Court considers it just to do so having regard to all the circumstances of the case.', cite: 'O.13A r.2(3), Rules of the High Court (Cap. 4A)' },
                { text: 'after the expiry of the period for filing it specified in paragraph (1)(a) if the plaintiff has not obtained a default judgment under Order 13 or 19', cite: 'O.13A r.3(2)(a), Rules of the High Court (Cap. 4A)' },
              ],
              table: {
                headers: ['Point', 'Source', 'What it actually provides'],
                rows: [
                  ['The gateway', 'O.13A r.2(1)', 'The Order is available only where the only remedy the plaintiff seeks is the payment of money; the defendant then admits under r.4, 5, 6 or 7'],
                  ['When the plaintiff may not enter judgment', 'O.13A r.2(2), (4)', 'Where the defendant is a person under disability, or the plaintiff is under disability and the admission is under r.5 or r.7; "person under disability" has its O.80 r.1 meaning'],
                  ['Amending or withdrawing', 'O.13A r.2(3)', 'The Court may allow a party to amend or withdraw an admission if it considers it just having regard to all the circumstances'],
                  ['Primary period', 'O.13A r.3(1)(a)-(c)', 'Writ: the period fixed for service of the defence. Originating summons: the period fixed for filing affidavit evidence. Any other case: 14 days after service of the originating process'],
                  ['Late admission', 'O.13A r.3(2)-(3)', 'Permitted on a writ if no default judgment under O.13 or 19 has been obtained, and on an originating summons if filed and served before the O.28 r.2 hearing date — and it then takes effect as if made in time'],
                  ['Mixed claims', 'O.13A r.1(2)', 'A claim that is partly liquidated and partly unliquidated is treated as unliquidated for rr.6(1)(b) and 7(1)(b)'],
                  ['How an admission is made', 'O.13A rr.4(2), 5(2), 6(2), 7(2)', 'By filing the admission in the Registry in Form No. 16 (liquidated) or Form No. 16C (unliquidated) AND serving a copy on the plaintiff'],
                  ['Admission of unliquidated liability', 'O.13A r.6(1)(c)', 'Applies where the defendant admits liability but does not offer to pay a liquidated amount in satisfaction — so the admission goes to liability, not quantum'],
                  ['Admission with an offer', 'O.13A r.7(1)(c)', 'Applies where the defendant both admits liability and offers to pay a liquidated amount of money in satisfaction of the claim'],
                  ['Directions on quantum', 'O.13A r.8', 'Where the Court enters judgment under r.6 or r.7 for an amount to be decided by it, it may give such directions as it considers appropriate'],
                  ['Interest', 'O.13A r.12(1)-(2)', 'Judgment under r.4, 5 or 7 must include interest claimed to the date of judgment if the three conditions are met (basis pleaded; s48 rate no higher than the judgment-debt rate at issue of the writ; calculation included in the request) — otherwise interest is for an amount decided by the Court'],
                  ['Forms served with the writ', 'O.13A r.13(1)-(2); PD 24.1 para.8', 'Money claims must be served with Form No. 16 or Form No. 16C; the affidavit of service on an O.13 application should depose that those forms went out with the Writ and the acknowledgement of service'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG6', issue: 'liquidated-or-unliquidated', label: 'Classifying the claim: liquidated or unliquidated' },
              { session: 'LG6', issue: 'responding-to-an-admission', label: 'The plaintiff\'s response to an admission' },
              { session: 'LG6', issue: 'time-to-pay', label: 'Requesting time to pay, instalments and the stay of execution' },
              { session: 'LG6', issue: 'default-notice-of-intention', label: 'Default judgment for failure to give notice of intention to defend (O.13)' },
              { session: 'LG4', issue: 'pleadings-timetable', label: 'The pleadings timetable and close of pleadings' },
            ],
          },
          {
            id: 'responding-to-an-admission',
            title: 'The plaintiff\'s response to an admission',
            summary: 'Four rules, four forms and one 14-day clock — and in every case the sanction for missing it is a stay of the claim.',
            triggers: {
              bullets: [
                'An admission in Form No. 16 or Form No. 16C has been served on the plaintiff.',
                'The plaintiff wants judgment on the admission and asks what to file.',
                'The plaintiff is content with the amount admitted but not with the proposed instalments.',
                'The plaintiff wants to reject a part admission and fight the whole claim.',
                'More than 14 days have gone by since the admission was served and nothing has been filed.',
                'The plaintiff asks why the action appears to have been stayed.',
                'The defendant has admitted liability on an unliquidated claim and the plaintiff wants damages assessed.',
                'The defendant has offered a figure on an unliquidated claim and the plaintiff thinks it is too low.',
              ],
              routes: [
                { when: 'The question is whether the admission was validly made at all', session: 'LG6', issue: 'admissions-o13a', label: 'Making an admission under O.13A' },
                { when: 'The dispute is only about the date or rate of payment', session: 'LG6', issue: 'time-to-pay', label: 'Requesting time to pay, instalments and the stay of execution' },
                { when: 'No admission was made and the deadline has passed', session: 'LG6', issue: 'default-notice-of-intention', label: 'Default judgment for failure to give notice of intention to defend (O.13)' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Responding to an admission',
                steps: [
                  {
                    id: 'clock',
                    label: 'Start the clock and note what happens if it runs out',
                    points: [
                      'In every case the 14 days run from the date the COPY OF THE ADMISSION IS SERVED on the plaintiff, not from the date it was filed.',
                      'The sanction is the same across all four rules and it is a stay, not a dismissal: rr.4(4), 5(4), 6(4) and 7(4).',
                      'Under rr.4(4) and 6(4) the claim is stayed "until he files the request"; under rr.5(4) and 7(4) it is stayed until he files the notice. The stay therefore lifts the moment the plaintiff does what he should have done.',
                      'Note the different verbs. On a FULL admission (rr.4 and 6) the plaintiff "may obtain judgment" by filing a request — there is nothing to accept or reject. On a PART admission (rr.5 and 7) the plaintiff "shall" file a notice saying whether he accepts.',
                    ],
                  },
                  {
                    id: 'whole-liq',
                    label: 'Whole of a liquidated claim admitted (r.4) — Form No. 16A',
                    points: [
                      'The plaintiff obtains judgment by filing a request in Form No. 16A: r.4(3).',
                      'Where the defendant has NOT requested time to pay, rr.4(5)-(7) apply; where he HAS, r.9 applies instead: r.4(3)(a)-(b).',
                      'The plaintiff may specify in his request either the date by which the whole judgment debt is to be paid, or the times and rate of instalments: r.4(5).',
                      'Upon receipt of the request the Court SHALL enter judgment: r.4(6). There is no hearing and no discretion.',
                      'Judgment is for the amount of the claim (less any payments made) and costs, payable by the date or at the times and rate specified — or, if none is specified, IMMEDIATELY: r.4(7).',
                    ],
                  },
                  {
                    id: 'part-liq',
                    label: 'Part of a liquidated claim admitted in satisfaction of the whole (r.5) — Form No. 16B',
                    points: [
                      {
                        text: 'Within 14 days the plaintiff SHALL file a notice in Form No. 16B AND serve a copy on the defendant, stating one of three things: r.5(3).',
                        points: [
                          'r.5(3)(a)(i) — he accepts the amount admitted in satisfaction of the whole claim;',
                          'r.5(3)(a)(ii) — he does not accept it and wishes the proceedings to continue; or',
                          'r.5(3)(a)(iii) — where the defendant has requested time to pay, he accepts the amount in satisfaction of the whole claim but NOT the defendant\'s proposals as to payment.',
                        ],
                      },
                      'Those really are the only options: accept the amount admitted in satisfaction of the whole claim, or refuse it and let the case proceed as a defended claim. See Form No. 16B.',
                      'If the plaintiff accepts, he obtains judgment by filing a request in Form No. 16B: r.5(5) — again with rr.5(6)-(8) applying if no time to pay was requested, and r.9 applying if it was.',
                      'Upon receipt of the request the Court shall enter judgment: r.5(7), for the amount ADMITTED (less any payments made) and costs: r.5(8).',
                      'If the plaintiff does not file the notice in accordance with r.5(3), the WHOLE claim is stayed until he does: r.5(4).',
                    ],
                  },
                  {
                    id: 'whole-unliq',
                    label: 'Liability on the whole of an unliquidated claim admitted (r.6) — Form No. 16D',
                    points: [
                      'The defendant\'s admission puts forward no figure at all: r.6(1)(c). It goes to liability, not quantum.',
                      'The plaintiff obtains judgment by filing a request in Form No. 16D: r.6(3), within 14 days or the claim is stayed: r.6(4).',
                      'Upon receipt the Court shall enter judgment: r.6(5), and that judgment is for an amount TO BE DECIDED BY THE COURT and costs: r.6(6).',
                      'So this route produces the same shape of outcome as an interlocutory default judgment — liability established, damages to be assessed — and the Court may give such directions as it considers appropriate: r.8.',
                    ],
                  },
                  {
                    id: 'part-unliq',
                    label: 'Liability on an unliquidated claim admitted with a sum offered (r.7) — Form No. 16E',
                    points: [
                      'Within 14 days the plaintiff SHALL file a notice in Form No. 16E stating whether or not he accepts the amount in satisfaction of the claim, and serve a copy on the defendant: r.7(3). If he does not, the claim is stayed: r.7(4).',
                      'If he ACCEPTS the offer, he may obtain judgment by filing a request in Form No. 16E: r.7(5); he may specify the date or the times and rate of payment: r.7(6); the Court shall enter judgment: r.7(7); and judgment is for the amount OFFERED (less any payments made) and costs: r.7(8).',
                      'If he DOES NOT accept the amount offered, he may still obtain judgment by filing a request in Form No. 16E: r.7(9) — and that judgment is for an amount to be decided by the Court and costs: r.7(10).',
                      'That is the key asymmetry with r.5. Rejecting a part admission on a LIQUIDATED claim throws the case back into the ordinary defended track; rejecting the offer on an UNLIQUIDATED claim still yields judgment on liability, with quantum for the Court.',
                    ],
                  },
                  {
                    id: 'interest',
                    label: 'Finally, check interest',
                    detail: 'Judgment under r.4, 5 or 7 must include the amount of interest claimed to the date of judgment if the three conditions in r.12(1) are all met — the basis of the claim to interest was stated in the indorsement, statement of claim or originating summons; where interest is claimed under s48 of the Ordinance the rate is no higher than that payable on judgment debts at the date the writ or originating summons was issued; and the request for judgment includes a calculation of the interest claimed. If those conditions are not satisfied, judgment is for an amount of interest to be decided by the Court: r.12(2). Note that r.12 does not mention r.6 — there is no fixed sum for interest to run on.',
                  },
                ],
              },
            },
            skeleton: {
              table: {
                headers: ['Admission', 'Plaintiff\'s form', 'Must the plaintiff file within 14 days?', 'Judgment is for'],
                rows: [
                  ['Whole liquidated claim: r.4', 'Form No. 16A (request for judgment)', 'A request — if not, the claim is stayed until he files it: r.4(4)', 'The amount of the claim less payments, and costs: r.4(7)'],
                  ['Part of a liquidated claim: r.5', 'Form No. 16B (notice, then request)', 'A notice stating acceptance, rejection, or acceptance of the amount but not the payment proposal — if not, the whole claim is stayed: r.5(4)', 'The amount admitted less payments, and costs: r.5(8) — or, if rejected, nothing; the case proceeds as defended'],
                  ['Whole unliquidated claim: r.6', 'Form No. 16D (request for judgment)', 'A request — if not, the claim is stayed: r.6(4)', 'An amount to be decided by the Court, and costs: r.6(6)'],
                  ['Unliquidated claim with a sum offered: r.7', 'Form No. 16E (reply and request)', 'A notice stating whether or not he accepts — if not, the claim is stayed: r.7(4)', 'The amount offered less payments, and costs if accepted: r.7(8); an amount to be decided by the Court if not: r.7(10)'],
                ],
              },
            },
            lookOut: {
              bullets: [
                'The 14 days run from SERVICE of the copy of the admission, not from filing.',
                'The sanction is a stay of the claim, and it is self-lifting — the plaintiff cures it by filing the document he should have filed.',
                'Under r.5 a rejection sends the whole case back to the defended track. Under r.7 a rejection still produces judgment on liability.',
                'Where the defendant has requested time to pay, rr.4(3)(b) and 5(5)(b) divert the process into r.9 — do not apply rr.4(5)-(7) or 5(6)-(8) on those facts.',
                'If the plaintiff specifies no date or rate in his request, judgment is payable IMMEDIATELY: rr.4(7)(b), 7(8)(b).',
                'r.12 governs interest only on judgments under rr.4, 5 and 7 — not r.6.',
                'The Court "shall enter judgment" on receipt of the request in each case: rr.4(6), 5(7), 6(5), 7(7). This is an administrative act, not an application.',
              ],
            },
            skills: {
              bullets: [
                'Name the rule and the form together, and say who files what and within how long.',
                'State the consequence of inaction in terms of the stay, and add that it lifts on filing — that is the answer to "what has gone wrong with our action?"',
                'Where the defendant has proposed instalments, split the answer in two: the amount, and the time for payment. They are decided by different routes.',
                'On a part admission, advise commercially — accepting under r.5 ends the case for the admitted sum; rejecting means proving the whole claim.',
                'Deal with interest expressly by walking the three r.12(1) conditions rather than asserting that interest "will be added".',
              ],
            },
            mistakes: {
              bullets: [
                'Counting the 14 days from the date the admission was filed in the Registry.',
                'Treating the sanction as a striking out or a dismissal rather than a stay.',
                'Advising that rejecting a r.7 offer leaves the plaintiff with nothing, when it produces judgment for an amount to be decided by the Court.',
                'Using Form No. 16B on an unliquidated claim, or Form No. 16E on a liquidated one.',
                'Applying rr.4(5)-(7) where the defendant has requested time to pay, instead of r.9.',
                'Forgetting that judgment is payable immediately if the request specifies no date or rate.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'If the plaintiff does not file a request for judgment within 14 days after the copy of the admission is served on him, the claim is stayed until he files the request.', cite: 'O.13A r.4(4), Rules of the High Court (Cap. 4A)' },
                { text: 'If the plaintiff does not file the notice in accordance with paragraph (3), the whole claim is stayed until he files the notice.', cite: 'O.13A r.5(4), Rules of the High Court (Cap. 4A)' },
                { text: 'If the plaintiff does not accept the amount offered by the defendant, he may obtain judgment by filing in the Registry a request in Form No. 16E in Appendix A.', cite: 'O.13A r.7(9), Rules of the High Court (Cap. 4A)' },
              ],
              table: {
                headers: ['Point', 'Source', 'What it actually provides'],
                rows: [
                  ['Request on a whole liquidated admission', 'O.13A r.4(3), (5)-(7)', 'Judgment obtained by filing a request in Form No. 16A; the plaintiff may specify the date or the times and rate; the Court shall enter judgment for the amount of the claim less payments and costs, payable as specified or, if none is specified, immediately'],
                  ['Diversion to r.9', 'O.13A rr.4(3)(b), 5(5)(b)', 'Where the defendant has requested time to pay, r.9 applies instead of the ordinary judgment paragraphs'],
                  ['Notice on a part liquidated admission', 'O.13A r.5(3)', 'Within 14 days the plaintiff shall file a Form No. 16B notice and serve a copy, stating that he accepts the amount in satisfaction of the whole claim, does not accept it and wishes the proceedings to continue, or accepts the amount but not the payment proposals'],
                  ['Judgment on a part liquidated admission', 'O.13A rr.5(7)-(8)', 'The Court shall enter judgment for the amount admitted (less any payments made) and costs'],
                  ['Whole unliquidated admission', 'O.13A rr.6(3)-(6)', 'Request in Form No. 16D; stay if not filed within 14 days; the Court shall enter judgment for an amount to be decided by the Court and costs'],
                  ['Unliquidated admission with an offer', 'O.13A rr.7(3), (5)-(10)', 'Form No. 16E notice within 14 days saying whether the offer is accepted; if accepted, judgment for the amount offered less payments and costs; if not, judgment for an amount to be decided by the Court and costs'],
                  ['The stay', 'O.13A rr.4(4), 5(4), 6(4), 7(4)', 'Failure to file the request or notice within 14 days after service of the copy admission stays the claim until the plaintiff files it'],
                  ['Interest', 'O.13A r.12(1)-(2)', 'Applies to judgments under rr.4, 5 and 7 only; interest claimed to the date of judgment is included where the three conditions are met, otherwise it is for an amount decided by the Court'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG6', issue: 'admissions-o13a', label: 'Making an admission under O.13A' },
              { session: 'LG6', issue: 'time-to-pay', label: 'Requesting time to pay, instalments and the stay of execution' },
              { session: 'LG6', issue: 'liquidated-or-unliquidated', label: 'Classifying the claim: liquidated or unliquidated' },
              { session: 'LG5', issue: 'interest-and-prayer', label: 'Interest, the prayer for relief and the District Court plea' },
            ],
          },
          {
            id: 'time-to-pay',
            title: 'Requesting time to pay, instalments and the stay of execution',
            summary: 'How a defendant who admits but cannot pay gets terms — who decides the rate, what the stay of execution is worth, and how easily it is lost.',
            triggers: {
              bullets: [
                'The defendant admits the claim but cannot pay it in one sum.',
                'The defendant can pay part now and the rest over time.',
                'The plaintiff is content with the amount admitted but says the proposed instalments are too slow.',
                'The Court has fixed a rate of payment without holding a hearing.',
                'The defendant has missed an instalment under a judgment entered on his own proposal.',
                'The defendant asks whether admitting will stop enforcement against his assets.',
                'A client wants to know what admitting will cost in costs.',
                'The question asks whether a defendant "should" admit and propose instalments.',
              ],
              routes: [
                { when: 'The admission itself is the live question', session: 'LG6', issue: 'admissions-o13a', label: 'Making an admission under O.13A' },
                { when: 'The question is which form the plaintiff files in response', session: 'LG6', issue: 'responding-to-an-admission', label: 'The plaintiff\'s response to an admission' },
                { when: 'A default judgment has already been entered and the client wants to delay payment', session: 'LG6', issue: 'setting-aside-regular', label: 'Setting aside a regular judgment' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Getting and keeping terms to pay',
                steps: [
                  {
                    id: 'make',
                    label: 'Make the request properly, and note which admissions can carry one',
                    points: [
                      'A defendant who makes an admission under r.4, 5 or 7 may make a request for time to pay: r.9(1). Rule 6 is NOT in that list — there is no sum yet for a payment proposal to attach to.',
                      'A request for time to pay is a proposal about the date of payment, or a proposal to pay by instalments at the times and rate specified in the request: r.9(2).',
                      'The request MUST be filed with the admission: r.9(3). It is not a later application.',
                      'On Form No. 16 and Form No. 16C the defendant sets out his financial position, and must set out the exact time and rate at which he will pay, together with his reasons for being able to pay only by instalments.',
                    ],
                  },
                  {
                    id: 'accepted',
                    label: 'If the plaintiff ACCEPTS the proposal',
                    points: [
                      'He may obtain judgment by filing a request for judgment in Form No. 16A, 16B or 16E as the case may be: r.9(4), and upon receipt the Court shall enter judgment: r.9(5).',
                      'Judgment is for the amount of the claim (r.4), the amount admitted (r.5) or the amount offered (r.7), in each case less any payments made, plus costs — and in ALL cases for payment by the date or at the times and rate specified in the defendant\'s own request: r.9(6).',
                      'This is the practical prize: the defendant, not the plaintiff and not the Court, has written the payment terms into the judgment.',
                    ],
                  },
                  {
                    id: 'refused',
                    label: 'If the plaintiff DOES NOT accept the proposal',
                    points: [
                      'The plaintiff files a notice in Form No. 16A, 16B or 16E as the case may be: r.10(2).',
                      'When the Court receives that notice it shall enter judgment for the amount admitted (less any payments made) to be paid by the date or at the times and rate DETERMINED BY THE COURT: r.10(3).',
                      'So the amount is still fixed by the admission — only the timing moves to the Court. The defendant does not lose the benefit of admitting by having his instalment proposal refused.',
                      {
                        text: 'The Court may determine the date or the times and rate WITHOUT a hearing, but it shall consider: r.10(4).',
                        points: [
                          'the information set out in the defendant\'s admission filed in the Registry;',
                          'the reasons why the plaintiff does not accept the defendant\'s proposal for payment; and',
                          'all other relevant matters.',
                        ],
                      },
                      'If there IS to be a hearing, the Court shall give each party at least 7 days\' notice of it: r.10(5).',
                      'Where the determination was made without a hearing, either party may apply for it to be re-determined: r.11(1) — within 14 days after the applicant is served with notice of the determination: r.11(2).',
                    ],
                  },
                  {
                    id: 'stay',
                    label: 'The stay of execution — what it is worth and how it is lost',
                    points: [
                      'Where judgment is for payment by instalments at the times and rate specified in the DEFENDANT\'S request for time to pay, then unless the Court otherwise orders and subject to r.9(8), execution of the judgment is STAYED pending payment: r.9(7).',
                      'That is the answer to "can I stop them enforcing against my assets?" — yes, for so long as the instalments are paid.',
                      'But the stay is fragile. If the defendant fails to pay an instalment OR PART of an instalment in accordance with the judgment, the stay IMMEDIATELY ceases and the plaintiff may enforce payment of the whole amount adjudged to be paid, or the whole of any unpaid balance: r.9(8).',
                      'Note the wording: the stay does not lapse only as to the missed instalment, and the plaintiff is not put back to suing for arrears. The whole balance becomes enforceable at once.',
                      'Note too that r.9(7) is in terms tied to instalments at the times and rate specified in the DEFENDANT\'S request. Where the Court has determined the rate under r.10 because the plaintiff objected, r.9(7) does not by its own terms apply — so advise on the terms of the judgment as entered rather than assuming a stay.',
                    ],
                  },
                  {
                    id: 'costs',
                    label: 'Advise on the costs of admitting',
                    points: [
                      'Where the plaintiff obtains judgment under O.13A WITHOUT a hearing, the fixed scale in O.62, 2nd Schedule, Part II applies: 2nd Schedule, Part I, para.1A.',
                      'On that scale the basic costs for a para.1A case are $10,000 where the plaintiff is legally represented (and $600 where he is not), with $500 for each additional defendant after the first.',
                      'The lecture gives the District Court equivalents as $6,500, with $350 for each additional defendant.',
                      'Para.2 of the 2nd Schedule qualifies all of this: notwithstanding para.1 or 1A, NO costs are allowed in any case to which para.1 or 1A applies unless the Court orders costs to be allowed, or (in a para.1(b) default-judgment case) judgment is obtained within 28 days after service of the writ or such further time as the Court allows.',
                      'The commercial point for the defendant is that a fixed, modest costs figure and a stay of execution on his own proposed terms is usually a better outcome than a defended action he cannot win.',
                    ],
                  },
                ],
              },
            },
            skeleton: {
              table: {
                headers: ['Question', 'Answer', 'Provision'],
                rows: [
                  ['Which admissions can carry a request for time to pay?', 'Those under rr.4, 5 and 7 — not r.6', 'O.13A r.9(1)'],
                  ['When must the request be made?', 'It must be filed with the admission', 'O.13A r.9(3)'],
                  ['Who fixes the terms if the plaintiff accepts?', 'The defendant — judgment is for payment by the date or at the times and rate specified in his own request', 'O.13A r.9(6)'],
                  ['Who fixes the terms if the plaintiff objects?', 'The Court, which may decide without a hearing but must consider the admission, the plaintiff\'s reasons and all other relevant matters', 'O.13A r.10(3)-(4)'],
                  ['What notice is given if there is a hearing?', 'At least 7 days to each party', 'O.13A r.10(5)'],
                  ['Can a no-hearing determination be revisited?', 'Yes — either party may apply for re-determination within 14 days of being served with notice of it', 'O.13A r.11'],
                  ['Is execution stayed?', 'Yes, pending payment, where judgment is for instalments at the times and rate in the defendant\'s own request — unless the Court otherwise orders', 'O.13A r.9(7)'],
                  ['What happens on a missed instalment?', 'The stay immediately ceases and the plaintiff may enforce the whole amount or the whole unpaid balance', 'O.13A r.9(8)'],
                  ['What are the costs?', 'Fixed scale where judgment is obtained without a hearing — $10,000 in the High Court if legally represented, plus $500 per additional defendant; $6,500 in the District Court per the lecture', 'O.62, 2nd Sch., Pt I para.1A and Pt II'],
                ],
              },
            },
            lookOut: {
              bullets: [
                'r.9(1) does not include r.6. A defendant admitting unliquidated liability with no figure cannot attach a payment proposal to it.',
                'The request must be filed WITH the admission (r.9(3)) — it cannot be added afterwards.',
                'Refusal of the payment proposal does not reopen the AMOUNT: r.10(3) enters judgment for the amount admitted and moves only the timing.',
                'Missing part of a single instalment is enough to end the stay, and the whole balance then becomes enforceable: r.9(8).',
                'r.9(7) speaks of instalments at the times and rate specified in the DEFENDANT\'S request. Read the judgment as entered before advising that execution is stayed.',
                'The Court may fix the rate without any hearing at all: r.10(4)(a). The 14-day re-determination right in r.11 is the defendant\'s answer to that.',
                'Fixed costs under the 2nd Schedule are not automatic — para.2 withholds them unless the Court orders costs or the para.1(b) 28-day condition is met.',
              ],
            },
            skills: {
              bullets: [
                'Answer "should the defendant admit?" commercially: set the fixed costs and the stay of execution against the value of any defence, and say which is better on these facts.',
                'Split the analysis into amount and timing — they are governed by different rules and decided by different people.',
                'Quantify where the materials let you: name the fixed-costs figure for the right court and add the per-defendant uplift.',
                'Warn the client about r.9(8) in terms of consequence, not just rule number: one missed part-instalment and the whole balance is enforceable.',
                'Where the Court has determined the rate without a hearing, advise on the r.11 re-determination window before it closes.',
              ],
            },
            mistakes: {
              bullets: [
                'Advising a r.6 defendant to propose instalments.',
                'Filing the request for time to pay after the admission.',
                'Telling a client that a rejected instalment proposal puts the admitted amount back in issue.',
                'Assuming the stay survives a partly paid instalment.',
                'Asserting a stay of execution where the Court, not the defendant, fixed the rate.',
                'Quoting the High Court fixed costs in a District Court action, or omitting the additional-defendant uplift.',
                'Missing the 14-day re-determination deadline in r.11(2).',
              ],
            },
            authorities: {
              statutes: [
                { text: 'Where judgment is for payment by instalments at the times and rate specified in the defendant\'s request for time to pay, then unless the Court otherwise orders and subject to paragraph (8), execution of the judgment is stayed pending payment.', cite: 'O.13A r.9(7), Rules of the High Court (Cap. 4A)' },
                { text: 'If the defendant fails to pay an instalment or part of an instalment in accordance with the judgment, the stay of execution pursuant to paragraph (7) immediately ceases and the plaintiff may enforce the payment of the whole amount adjudged to be paid or the whole of any unpaid balance.', cite: 'O.13A r.9(8), Rules of the High Court (Cap. 4A)' },
                { text: 'When the Court receives the plaintiff\'s notice, it shall enter judgment for the amount admitted (less any payments made) to be paid by the date or at the times and rate of payment determined by the Court.', cite: 'O.13A r.10(3), Rules of the High Court (Cap. 4A)' },
              ],
              table: {
                headers: ['Point', 'Source', 'What it actually provides'],
                rows: [
                  ['Who may request time to pay', 'O.13A r.9(1)', 'A defendant who makes an admission under r.4, 5 or 7 — r.6 is excluded'],
                  ['What the request is', 'O.13A r.9(2)-(3)', 'A proposal about the date of payment or to pay by instalments at specified times and rate, which must be filed with the admission'],
                  ['If accepted', 'O.13A r.9(4)-(6)', 'The plaintiff files a request for judgment in Form No. 16A, 16B or 16E; the Court shall enter judgment for the relevant amount less payments and costs, payable on the defendant\'s own proposed terms'],
                  ['The stay', 'O.13A r.9(7)', 'Execution is stayed pending payment where judgment is for instalments at the times and rate in the defendant\'s request, unless the Court otherwise orders'],
                  ['Loss of the stay', 'O.13A r.9(8)', 'Failure to pay an instalment or part of one ends the stay immediately and lets the plaintiff enforce the whole amount or the whole unpaid balance'],
                  ['If refused', 'O.13A r.10(2)-(3)', 'The plaintiff files a notice; the Court enters judgment for the amount admitted, payable as the Court determines'],
                  ['How the Court determines', 'O.13A r.10(4)-(5)', 'It may do so without a hearing but must consider the defendant\'s admission, the plaintiff\'s reasons for refusing, and all other relevant matters; if there is a hearing, at least 7 days\' notice to each party'],
                  ['Re-determination', 'O.13A r.11(1)-(2)', 'Where the determination was made without a hearing, either party may apply for re-determination within 14 days after being served with notice of the determination'],
                  ['Fixed costs', 'O.62, 2nd Sch., Pt I paras.1A and 2; Pt II', 'The Part II scale applies where the plaintiff obtains judgment under O.13A without a hearing — $10,000 if legally represented, $600 if not, plus $500 for each additional defendant; but no costs are allowed at all unless the Court orders them or, in a para.1(b) case, judgment is obtained within 28 days after service of the writ'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG6', issue: 'admissions-o13a', label: 'Making an admission under O.13A' },
              { session: 'LG6', issue: 'responding-to-an-admission', label: 'The plaintiff\'s response to an admission' },
              { session: 'LG6', issue: 'entering-default-judgment', label: 'Entering judgment under O.13: procedure, proof of service and fixed costs' },
            ],
          },
          {
            id: 'default-notice-of-intention',
            title: 'Default judgment for failure to give notice of intention to defend (O.13)',
            summary: 'The as-of-right judgment when no acknowledgement of service arrives — when the clock actually runs out, and what it does to the co-defendants.',
            triggers: {
              bullets: [
                'The writ was served and the time for acknowledging service has gone by with nothing filed.',
                'One of several defendants has failed to acknowledge while the others are defending.',
                'The defendant returned an acknowledgement of service saying he does not intend to contest the proceedings.',
                'The defendant acknowledged service late, and the plaintiff wants judgment anyway.',
                'The defendant acknowledged service after the plaintiff applied for judgment but before it was sealed.',
                'Nothing has happened in the action for more than a year and the plaintiff now wants judgment.',
                'The claim seeks something other than money, goods or land.',
                'The defendant has satisfied the claim, so there is nothing left to sue for but costs.',
                'The defendant says he intends to apply for a stay of execution rather than to defend.',
              ],
              routes: [
                { when: 'The defendant DID acknowledge service but filed no defence', session: 'LG6', issue: 'default-of-defence', label: 'Default judgment in default of defence (O.19)' },
                { when: 'You still need to know whether the judgment is final or interlocutory', session: 'LG6', issue: 'liquidated-or-unliquidated', label: 'Classifying the claim: liquidated or unliquidated' },
                { when: 'The question is the mechanics of entering the judgment', session: 'LG6', issue: 'entering-default-judgment', label: 'Entering judgment under O.13: procedure, proof of service and fixed costs' },
                { when: 'The acknowledgement deadline itself is what is in dispute', session: 'LG3', issue: 'acknowledgement-of-service', label: 'Acknowledgement of service — 14 days INCLUDING the day of service' },
                { when: 'The defendant says he never knew about the writ', session: 'LG6', issue: 'regular-or-irregular', label: 'Is the default judgment regular or irregular?' },
                { when: 'The defendant would rather admit the claim than fight it', session: 'LG6', issue: 'admissions-o13a', label: 'Making an admission under O.13A' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Entering judgment under O.13',
                steps: [
                  {
                    id: 'stage',
                    label: 'Confirm the stage of the default — O.13 is about the acknowledgement, not the defence',
                    points: [
                      '"Notice of intention to defend" is given by filing an acknowledgement of service. O.13 bites where none is given at all.',
                      'If the defendant DID acknowledge but has served no defence, the Order is O.19, not O.13 — different rules, and a notice requirement O.13 does not have.',
                      'The ordinary deadline is 14 days after service of the writ, counted under O.12 r.5 and O.3 — so check the computation before asserting that the defendant is in default.',
                    ],
                  },
                  {
                    id: 'prescribed',
                    label: 'Work out "the prescribed time" — it is defined, and it is not always 14 days',
                    points: [
                      'Every one of O.13 rr.1-6 lets the plaintiff act only "after the prescribed time", and r.6A defines it.',
                      'Limb 1 — the time limited for the defendant to acknowledge service of the writ.',
                      'Limb 2 — if WITHIN that time the defendant has returned to the Registry an acknowledgement of service containing a statement to the effect that he does not intend to contest the proceedings, then the prescribed time is the date on which that acknowledgement was received at the Registry.',
                      'So a defendant who files an acknowledgement saying he will not contest brings the prescribed time FORWARD. The plaintiff does not have to sit out the rest of the 14 days.',
                      'The definition lives in r.6A, not r.6 — r.6 is the "other claims" rule. A citation to "O.13 r.6" for the prescribed time is a slip worth avoiding.',
                    ],
                  },
                  {
                    id: 'type',
                    label: 'Match the claim to the rule, and read off final or interlocutory',
                    points: [
                      'Liquidated demand only → r.1: final judgment for a sum not exceeding that claimed by the writ, and costs.',
                      'Unliquidated damages only → r.2: interlocutory judgment for damages to be assessed, and costs.',
                      'Detention of goods only → r.3(1): at the plaintiff\'s option, interlocutory judgment for delivery or value to be assessed, or for value to be assessed; or a summons for delivery without the alternative of paying the assessed value — subject to O.42 r.1A.',
                      'Possession of land only → r.4(1): judgment for possession and costs, on producing a solicitor\'s certificate (or the plaintiff\'s own affidavit if suing in person) that no relief of the nature specified in O.88 r.1 is claimed.',
                      'Two or more of those and no other claim → r.5: such judgment on each as if it were the only claim indorsed, so part final and part interlocutory.',
                      'A claim of a description NOT mentioned in rr.1-4 → r.6(1): the plaintiff does not get a default judgment at all. He proceeds as if the defendant had given notice of intention to defend, on filing an affidavit proving due service and, where the statement of claim was not indorsed on or served with the writ, on serving a statement of claim.',
                      'Where the claim has been satisfied or complied with so that it has become unnecessary to proceed, the plaintiff may after the prescribed time enter judgment for COSTS only: r.6(2).',
                    ],
                  },
                  {
                    id: 'codefendants',
                    label: 'Check the effect on the other defendants — this is a standard exam sub-question',
                    points: [
                      'Each of rr.1-5 ends with the same words: the plaintiff may enter judgment against the defaulting defendant "and proceed with the action against the other defendants, if any".',
                      'So a default judgment against one defendant does NOT dispose of the claim against the co-defendants. The action simply continues against those who are defending.',
                      'The one express qualification is possession of land: where there is more than one defendant, judgment entered under r.4 shall not be ENFORCED against any defendant unless and until judgment for possession has been entered against all of them: r.4(5).',
                      'Where the judgment obtained is interlocutory, liability is fixed against that defendant only, and quantum is still assessed — so consider whether the assessment should await the trial against the remaining defendants.',
                    ],
                  },
                  {
                    id: 'late',
                    label: 'Watch the two timing traps at either end',
                    points: [
                      'LATE ACKNOWLEDGEMENT — except with the leave of the Court, a defendant may not give notice of intention to defend AFTER judgment has been obtained: O.12 r.6(1).',
                      'Short of that, nothing precludes a defendant from acknowledging service after the time limited; but if he does, he is not, unless the Court otherwise orders, entitled to serve a defence or do any other act later than if he had acknowledged in time: O.12 r.6(2).',
                      'The gap between applying and sealing matters. In Kwan Tat Chung v Ho Cheuk Kwan HCPI 381/2002, [2003] HKEC 36, two defendants successfully set aside a default judgment applied for after the acknowledgement time had expired but only sealed by the Court after they had actually acknowledged service.',
                      'PLAINTIFF\'S OWN DELAY — judgment in default may be signed at any time after the prescribed time has expired, but O.3 r.6 requires a party who desires to proceed, where a year or more has elapsed since the last proceeding in the cause or matter, to give every other party not less than ONE MONTH\'S notice of his intention to proceed. A summons on which no order was made is not a proceeding for that purpose.',
                    ],
                  },
                  {
                    id: 'stayexec',
                    label: 'The defendant who will not contest but wants a stay: O.13 r.8',
                    detail: 'Where judgment for a debt or liquidated demand is entered under O.13 against a defendant who has returned an acknowledgement of service stating that although he does not intend to contest the proceedings he intends to apply for a stay of execution by writ of fieri facias, execution by such a writ is stayed for 14 days from the acknowledgement of service. If within that time the defendant issues and serves on the plaintiff a summons for such a stay, supported by an affidavit in accordance with O.47 r.1, the stay continues until the summons is heard or otherwise disposed of, unless the Court after giving the parties an opportunity of being heard otherwise directs.',
                  },
                ],
              },
            },
            skeleton: {
              table: {
                headers: ['Question', 'Answer', 'Provision'],
                rows: [
                  ['What default does O.13 address?', 'Failure to give notice of intention to defend, i.e. to file an acknowledgement of service', 'O.13, heading; O.12 r.5'],
                  ['When may the plaintiff act?', 'After "the prescribed time"', 'O.13 rr.1-6'],
                  ['What is the prescribed time?', 'The time limited to acknowledge service; or, if within that time the defendant returned an acknowledgement stating he does not intend to contest, the date the Registry received it', 'O.13 r.6A'],
                  ['Liquidated demand', 'Final judgment for a sum not exceeding that claimed, and costs', 'O.13 r.1(1)'],
                  ['Unliquidated damages', 'Interlocutory judgment, damages to be assessed, and costs', 'O.13 r.2'],
                  ['Detention of goods', 'Interlocutory for delivery or value to be assessed, or for value to be assessed; or a summons for delivery without the money alternative', 'O.13 r.3(1), subject to O.42 r.1A'],
                  ['Possession of land', 'Judgment for possession and costs, on a certificate of no O.88 r.1 relief', 'O.13 r.4(1)'],
                  ['Mixed claims', 'Such judgment on each claim as if it were the only claim indorsed — part final, part interlocutory', 'O.13 r.5'],
                  ['Any other claim', 'No default judgment: proceed as if notice of intention to defend had been given', 'O.13 r.6(1)'],
                  ['Claim already satisfied', 'Judgment for costs only', 'O.13 r.6(2)'],
                  ['Effect on co-defendants', 'The plaintiff proceeds with the action against the other defendants; for land, judgment is not enforced against any until entered against all', 'O.13 rr.1-5; r.4(5)'],
                  ['Late acknowledgement', 'Not permitted after judgment except with leave; otherwise permitted but without extending any later step', 'O.12 r.6(1)-(2)'],
                  ['A year\'s inactivity', 'One month\'s notice of intention to proceed', 'O.3 r.6'],
                ],
              },
            },
            lookOut: {
              bullets: [
                'The "prescribed time" is defined in r.6A, and its second limb can make it EARLIER than 14 days.',
                'Every one of rr.1-5 preserves the action against the other defendants — so "what happens to the claim against D1?" is answered by the closing words of the rule itself.',
                'Land is the exception: a possession judgment is not enforced against any defendant until entered against all: r.4(5).',
                'A claim outside rr.1-4 gives no default judgment at all — r.6(1) sends the plaintiff back into the ordinary track.',
                'r.6(2) is easy to miss: where the defendant has satisfied the claim, the plaintiff can still enter judgment for costs.',
                'O.12 r.6(1) bars a late acknowledgement only AFTER judgment — and even then leave is available.',
                'A default judgment applied for in time but sealed after a late acknowledgement is vulnerable: Kwan Tat Chung.',
                'O.3 r.6 is about the last PROCEEDING, not the last event, and expressly excludes a summons on which no order was made.',
              ],
            },
            skills: {
              bullets: [
                'Name the stage first — no acknowledgement means O.13, and say so before reaching for any rule number.',
                'Compute the prescribed time on the facts rather than assuming 14 days, and check r.6A\'s second limb whenever an acknowledgement has been returned.',
                'State both the form of judgment and the costs order in the same sentence, because the rules give both.',
                'Answer the co-defendant question expressly by quoting the closing words of the rule.',
                'Where the client is the defendant, check the sealing date against the acknowledgement date before advising that the judgment is unassailable.',
              ],
            },
            mistakes: {
              bullets: [
                'Citing "O.13 r.6" for the prescribed time — the definition is in r.6A.',
                'Waiting out the full 14 days after the defendant has returned an acknowledgement saying he will not contest.',
                'Assuming a default judgment against one defendant ends the action against the rest.',
                'Enforcing a possession judgment against one defendant before judgment has been entered against all of them.',
                'Entering a default judgment on a claim for an account, an injunction or a declaration.',
                'Overlooking the one month\'s notice of intention to proceed after a year\'s inactivity.',
                'Using O.13 where the defendant acknowledged service and simply failed to serve a defence.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'the time limited for the defendant to acknowledge service of the writ or, if within that time the defendant has returned to the Registry an acknowledgment of service containing a statement to the effect that he does not intend to contest the proceedings, the date on which the acknowledgment was received at the Registry.', cite: 'O.13 r.6A, Rules of the High Court (Cap. 4A) — defining "the prescribed time"' },
                { text: 'Except with the leave of the Court, a defendant may not give notice of intention to defend in an action after judgment has been obtained therein.', cite: 'O.12 r.6(1), Rules of the High Court (Cap. 4A)' },
                { text: 'Where a year or more has elapsed since the last proceeding in a cause or matter, the party who desires to proceed must give to every other party not less than one month\'s notice of his intention to proceed.', cite: 'O.3 r.6, Rules of the High Court (Cap. 4A)' },
              ],
              table: {
                headers: ['Point', 'Source', 'What it actually provides'],
                rows: [
                  ['The prescribed time', 'O.13 r.6A', 'The time limited to acknowledge service, or the date the Registry received an acknowledgement stating that the defendant does not intend to contest, if returned within that time'],
                  ['Liquidated demand', 'O.13 r.1(1)', 'Final judgment for a sum not exceeding that claimed by the writ in respect of the demand, and costs, proceeding with the action against the other defendants'],
                  ['Unliquidated damages', 'O.13 r.2', 'Interlocutory judgment for damages to be assessed and costs'],
                  ['Detention of goods', 'O.13 r.3(1)-(2)', 'Three options at the plaintiff\'s election, subject to O.42 r.1A; a summons for delivery without the money alternative must be supported by affidavit, and the summons and a copy of the affidavit served on the defendant notwithstanding O.65 r.9'],
                  ['Possession of land', 'O.13 r.4(1), (5)', 'Judgment for possession and costs on a solicitor\'s certificate of no O.88 r.1 relief; where there is more than one defendant, no enforcement against any until judgment for possession is entered against all'],
                  ['Mixed claims', 'O.13 r.5', 'Such judgment in respect of each claim as the plaintiff would be entitled to enter if it were the only claim indorsed on the writ'],
                  ['Other claims', 'O.13 r.6(1)', 'The plaintiff proceeds as if the defendant had given notice of intention to defend, on filing an affidavit proving due service and, where the statement of claim was not indorsed on or served with the writ, on serving one'],
                  ['Claim satisfied', 'O.13 r.6(2)', 'Where it has become unnecessary to proceed because the defendant satisfied the claim or complied with its demands, the plaintiff may enter judgment for costs'],
                  ['Stay of execution by fi. fa.', 'O.13 r.8', 'Where the defendant returned an acknowledgement saying he will not contest but intends to apply for a stay of execution by fi. fa., execution by such a writ is stayed 14 days from the acknowledgement, and continues if he issues and serves a summons supported by an O.47 r.1 affidavit within that time'],
                  ['Late acknowledgement', 'O.12 r.6(1)-(2)', 'Barred after judgment except with leave; otherwise permitted, but the defendant gains no extra time for a defence or any other act'],
                  ['Acknowledgement before sealing', 'Kwan Tat Chung v Ho Cheuk Kwan HCPI 381/2002, [2003] HKEC 36', 'Two defendants successfully set aside a default judgment applied for after the acknowledgement time expired but sealed only after they had in fact acknowledged service'],
                  ['A year\'s delay', 'O.3 r.6', 'One month\'s notice of intention to proceed is required where a year or more has elapsed since the last proceeding; a summons on which no order was made is not a proceeding'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG6', issue: 'default-of-defence', label: 'Default judgment in default of defence (O.19)' },
              { session: 'LG6', issue: 'entering-default-judgment', label: 'Entering judgment under O.13: procedure, proof of service and fixed costs' },
              { session: 'LG6', issue: 'liquidated-or-unliquidated', label: 'Classifying the claim: liquidated or unliquidated' },
              { session: 'LG6', issue: 'regular-or-irregular', label: 'Is the default judgment regular or irregular?' },
              { session: 'LG3', issue: 'acknowledgement-of-service', label: 'Acknowledgement of service' },
              { session: 'LG3', issue: 'computing-time', label: 'Computing time under O.3' },
            ],
          },
          {
            id: 'default-of-defence',
            title: 'Default judgment in default of defence (O.19)',
            summary: 'The second-stage default — and the notice of intention to enter judgment that O.13 does not require and most answers get wrong.',
            triggers: {
              bullets: [
                'The defendant acknowledged service but has served no defence.',
                'The period for service of the defence has expired.',
                'The claim is for relief not covered by O.13 rr.1-5, so the plaintiff was sent down the O.19 route.',
                'A party has failed to serve a defence to counterclaim.',
                'The plaintiff is about to enter judgment and the defendant is represented by solicitors.',
                'The Court has made an order extending the time for service of the defence.',
                'The defendant is acting in person and has given no address for service in Hong Kong.',
                'The plaintiff has failed to serve a statement of claim and the defendant wants the action dismissed.',
              ],
              routes: [
                { when: 'No acknowledgement of service was ever filed', session: 'LG6', issue: 'default-notice-of-intention', label: 'Default judgment for failure to give notice of intention to defend (O.13)' },
                { when: 'The dispute is about when the defence was actually due', session: 'LG4', issue: 'pleadings-timetable', label: 'The pleadings timetable and close of pleadings' },
                { when: 'A defence was served but is said to be defective', session: 'LG4', issue: 'striking-out', label: 'Striking out a pleading (O.18 r.19)' },
                { when: 'You need the fixed-costs scale or the prescribed form of judgment — the parts of the O.13 procedure that apply here too', session: 'LG6', issue: 'entering-default-judgment', label: 'Entering judgment under O.13: procedure, proof of service and fixed costs' },
                { when: 'Judgment has been entered and the defendant wants it set aside', session: 'LG6', issue: 'setting-aside-regular', label: 'Setting aside a regular judgment' },
                { when: 'The claim falls under r.7 and the judgment is measured against the statement of claim', session: 'LG5', issue: 'function-and-structure', label: 'What a statement of claim must do, and its four-part shape' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Entering judgment under O.19',
                steps: [
                  {
                    id: 'when',
                    label: 'Confirm that O.19 is the right Order, and that the time has run',
                    points: [
                      'O.19 applies at the PLEADINGS stage: the defendant has failed to serve a defence on the plaintiff.',
                      'It also catches the defendant who never acknowledged service where the claim is for relief outside O.13 rr.1-5, because O.13 r.6(1) puts the plaintiff back on the ordinary track and O.19 r.7 is what he then uses.',
                      'The plaintiff may act only after the expiration of the period fixed by or under the rules for service of the defence — so compute that period before anything else.',
                      'O.19 r.1 runs the other way: where the plaintiff is required to serve a statement of claim and fails to, the DEFENDANT may after the period expires apply to the Court to dismiss the action, and the Court may dismiss it or make such other order on such terms as it thinks just.',
                    ],
                  },
                  {
                    id: 'type',
                    label: 'Match the claim to the rule — the structure mirrors O.13',
                    points: [
                      'Liquidated demand only → r.2(1): final judgment for a sum not exceeding that claimed by the writ, and costs. O.13 r.1(2)\'s interest saving is applied by r.2(2).',
                      'Unliquidated damages only → r.3: interlocutory judgment for damages to be assessed, and costs.',
                      'Detention of goods only → r.4(1): the same three options as O.13 r.3(1), subject to O.42 r.1A.',
                      'Possession of land only → r.5(1): judgment for possession and costs on the same solicitor\'s certificate; and by r.5(5), where there is more than one defendant, no enforcement against any until judgment is entered against all.',
                      'Two or more of the claims in rr.2-5 and no other claim → r.6: such judgment on each as if it were the only claim made.',
                      'A claim of a description not mentioned in rr.2-5 → r.7(1): the plaintiff APPLIES TO THE COURT for judgment, and on the hearing the Court shall give such judgment as the plaintiff appears entitled to on his statement of claim. The application must be by summons: r.7(3).',
                      'Where such a claim is made against more than one defendant and one defaults, the plaintiff may apply for judgment against that defendant if the claim against him is severable, and proceed against the others; or set the action down for judgment against him when it is set down against the others: r.7(2).',
                    ],
                  },
                  {
                    id: 'notice',
                    label: 'The notice of intention to enter judgment — read r.8A, not the shorthand',
                    points: [
                      'r.8A(1) prohibits entering judgment under O.19 against a party WHO HAS FILED AN ACKNOWLEDGEMENT OF SERVICE GIVING NOTICE OF INTENTION TO DEFEND, or on a counterclaim, unless two things are done.',
                      'r.8A(1)(a) — after that acknowledgement or counterclaim has been filed, and NOT LESS THAN 2 CLEAR DAYS BEFORE ENTERING JUDGMENT, the party intending to enter judgment has served written notice of his intention to do so on the party against whom judgment is sought, or on his solicitor if he is legally represented.',
                      'r.8A(1)(b) — EVIDENCE OF THAT SERVICE BY WAY OF AFFIDAVIT HAS BEEN FILED IN THE COURT. This second limb is routinely omitted from summaries of the rule, and it is a filing requirement, not an optional extra.',
                      {
                        text: 'r.8A(2) then disapplies the rule in two cases, and neither is the one usually quoted:',
                        points: [
                          'r.8A(2)(a) — the Court has made an order prescribing or extending the time for service of the defence or defence to counterclaim; or',
                          'r.8A(2)(b) — the party against whom judgment is sought does not have a solicitor of record in the proceedings AND has failed to state an address within the jurisdiction at which he can be served.',
                        ],
                      },
                      'The familiar shorthand — "no notice is needed if the defendant failed to file an acknowledgement of service" — is not one of the r.8A(2) exceptions. It is true only because such a defendant falls outside r.8A(1) in the first place, which is scoped to a party who HAS filed an acknowledgement giving notice of intention to defend.',
                      'Note also that the 2 clear days run to the ENTERING of judgment, not to the making of an application, and that clear days are computed under O.3 r.2(4).',
                    ],
                  },
                  {
                    id: 'counterclaim',
                    label: 'Do not forget the counterclaim mirror',
                    detail: 'A defendant who counterclaims against a plaintiff is treated for the purposes of rr.2-7 as if he were a plaintiff who had made the claim in the counterclaim against a defendant. So where the plaintiff or any other party against whom the counterclaim is made fails to serve a defence to counterclaim, those rules apply as if the counterclaim were a statement of claim, the defence to counterclaim a defence, and the parties reversed — with references to the period for service of the defence read as references to the period for service of the defence to counterclaim: O.19 r.8.',
                  },
                  {
                    id: 'aside',
                    label: 'Note the setting-aside power before you finish',
                    detail: 'The Court may, on such terms as it thinks just, set aside or vary any judgment entered in pursuance of O.19: r.9. It is the counterpart of O.13 r.9, in materially the same words, and the same regular/irregular analysis applies to it.',
                  },
                ],
              },
            },
            skeleton: {
              table: {
                headers: ['Claim', 'O.13 (no acknowledgement)', 'O.19 (no defence)', 'Judgment'],
                rows: [
                  ['Liquidated demand only', 'r.1(1)', 'r.2(1); interest saving applied by r.2(2)', 'Final, for a sum not exceeding that claimed, and costs'],
                  ['Unliquidated damages only', 'r.2', 'r.3', 'Interlocutory, damages to be assessed, and costs'],
                  ['Detention of goods only', 'r.3(1)', 'r.4(1)', 'Interlocutory for delivery or value to be assessed, or value to be assessed; or a summons for delivery without the money alternative — subject to O.42 r.1A'],
                  ['Possession of land only', 'r.4(1)', 'r.5(1)', 'Possession and costs, on a certificate of no O.88 r.1 relief; no enforcement against any defendant until entered against all'],
                  ['Two or more of the above', 'r.5', 'r.6', 'Such judgment on each claim as if it were the only claim'],
                  ['Any other claim', 'r.6(1) — proceed as if notice of intention to defend had been given', 'r.7(1), (3) — apply to the Court by summons', 'Such judgment as the plaintiff appears entitled to on his statement of claim'],
                  ['Notice of intention to enter judgment', 'Not required', 'Required against a party who filed an acknowledgement giving notice of intention to defend, or on a counterclaim: r.8A(1)', '2 clear days\' written notice plus an affidavit of that service filed in Court'],
                  ['Setting aside', 'r.9', 'r.9', 'On such terms as the Court thinks just'],
                ],
              },
            },
            lookOut: {
              bullets: [
                'r.8A(1)(b) requires an AFFIDAVIT of service of the notice to be filed. Serving the notice is only half of the rule.',
                'The 2 clear days run to entering judgment, and "clear days" excludes both ends under O.3 r.2(4).',
                'The real r.8A(2) exceptions are a Court order prescribing or extending the time for the defence, and a defendant with no solicitor of record who has given no address within the jurisdiction.',
                'r.8A(2)(b) has TWO limbs joined by "and" — no solicitor of record AND no address for service. One alone is not enough.',
                'O.19 r.7 is an application to the Court, not an administrative entry — and the Court gives such judgment as the plaintiff appears entitled to ON HIS STATEMENT OF CLAIM, so the pleading has to support it.',
                'r.8 makes the whole Order run in reverse on a counterclaim; a plaintiff who ignores a counterclaim is exposed in exactly the same way.',
                'r.1 gives the DEFENDANT a remedy where the plaintiff fails to serve a statement of claim.',
              ],
            },
            skills: {
              bullets: [
                'Open by fixing the stage: acknowledged but no defence means O.19, and that alone brings in r.8A.',
                'Set out the r.8A requirements as two steps plus two exceptions, and apply each to the facts rather than reciting them.',
                'Where the claim is outside rr.2-5, say that judgment requires an application by summons and that the Court measures it against the statement of claim.',
                'Compute the defence deadline expressly — the whole Order depends on the period having expired.',
                'On a counterclaim, spell out the substitution r.8 requires instead of arguing by analogy.',
              ],
            },
            mistakes: {
              bullets: [
                'Serving the r.8A notice but never filing the affidavit of service.',
                'Reciting "notice is not needed where the defendant failed to acknowledge service" as if it were a r.8A(2) exception.',
                'Treating the 2 clear days as running to the date of the application rather than to entering judgment.',
                'Counting the 2 clear days inclusively.',
                'Applying r.8A(2)(b) to an unrepresented defendant who HAS given a Hong Kong address for service.',
                'Entering judgment administratively on a claim that falls under r.7 and requires a summons.',
                'Forgetting that O.19 applies to a defence to counterclaim as much as to a defence.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'No party shall enter judgment under the provisions of this Order against a party who has filed an acknowledgment of service giving notice of intention to defend, or on a counterclaim, unless—', cite: 'O.19 r.8A(1), Rules of the High Court (Cap. 4A)' },
                { text: 'after such acknowledgment of service or counterclaim has been filed, and not less than 2 clear days before entering judgment, the party intending to enter judgment has served notice in writing of his intention to do so on the party against whom judgment is sought or, if that party is legally represented, on his solicitor;', cite: 'O.19 r.8A(1)(a), Rules of the High Court (Cap. 4A)' },
                { text: 'evidence of such service by way of affidavit has been filed in the Court.', cite: 'O.19 r.8A(1)(b), Rules of the High Court (Cap. 4A)' },
              ],
              table: {
                headers: ['Point', 'Source', 'What it actually provides'],
                rows: [
                  ['When the plaintiff may act', 'O.19 rr.2-7', 'After the expiration of the period fixed by or under the rules for service of the defence'],
                  ['Plaintiff\'s own default', 'O.19 r.1', 'Where the plaintiff fails to serve a required statement of claim, the defendant may apply to dismiss the action and the Court may dismiss it or make such other order on such terms as it thinks just'],
                  ['Liquidated demand', 'O.19 r.2(1)-(2)', 'Final judgment for a sum not exceeding that claimed, and costs; O.13 r.1(2)\'s interest saving applies'],
                  ['Unliquidated damages', 'O.19 r.3', 'Interlocutory judgment for damages to be assessed and costs'],
                  ['Detention of goods', 'O.19 r.4(1)-(2)', 'The same three options as O.13 r.3(1), subject to O.42 r.1A; a summons for delivery without the money alternative must be supported by affidavit and served with it'],
                  ['Possession of land', 'O.19 r.5(1), (5)', 'Judgment for possession and costs on a certificate of no O.88 r.1 relief; no enforcement against any defendant until judgment is entered against all'],
                  ['Mixed claims', 'O.19 r.6', 'Such judgment on each claim as the plaintiff would be entitled to enter if it were the only claim made'],
                  ['Other claims', 'O.19 r.7(1)-(3)', 'Application to the Court by summons; the Court shall give such judgment as the plaintiff appears entitled to on his statement of claim; where there are several defendants and the claim against the defaulter is severable, judgment may be sought against him alone'],
                  ['Counterclaims', 'O.19 r.8', 'A counterclaiming defendant is treated as a plaintiff for rr.2-7, with the counterclaim read as a statement of claim and the periods read as those for the defence to counterclaim'],
                  ['Notice of intention to enter judgment', 'O.19 r.8A(1)(a)-(b)', 'Written notice served not less than 2 clear days before entering judgment, on the party or his solicitor, plus an affidavit of that service filed in the Court'],
                  ['Exceptions to the notice', 'O.19 r.8A(2)(a)-(b)', 'A Court order prescribing or extending the time for service of the defence or defence to counterclaim; or the party having no solicitor of record and having failed to state an address within the jurisdiction at which he can be served'],
                  ['Setting aside', 'O.19 r.9', 'The Court may, on such terms as it thinks just, set aside or vary any judgment entered in pursuance of the Order'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG6', issue: 'default-notice-of-intention', label: 'Default judgment for failure to give notice of intention to defend (O.13)' },
              { session: 'LG6', issue: 'entering-default-judgment', label: 'Entering judgment under O.13: procedure, proof of service and fixed costs' },
              { session: 'LG6', issue: 'setting-aside-regular', label: 'Setting aside a regular judgment' },
              { session: 'LG4', issue: 'pleadings-timetable', label: 'The pleadings timetable and close of pleadings' },
              { session: 'LG4', issue: 'defence-counterclaim-and-reply', label: 'Defence, counterclaim and reply' },
              { session: 'LG3', issue: 'computing-time', label: 'Computing time under O.3' },
              { session: 'LG5', issue: 'function-and-structure', label: 'What a statement of claim must do, and its four-part shape' },
            ],
          },
          {
            id: 'entering-default-judgment',
            title: 'Entering judgment under O.13: procedure, proof of service and fixed costs',
            summary: 'The documents that actually obtain an O.13 judgment — proof of service of the WRIT, which is what O.13 needs because the defendant never acknowledged. O.19 asks a different question (see "Default judgment in default of defence (O.19)"); only the fixed-costs scale and the form of judgment are genuinely shared between the two.',
            triggers: {
              bullets: [
                'The plaintiff is in a position to enter judgment and asks what to file.',
                'The writ was served by post or by insertion into a letter box.',
                'The copy writ has been returned through the post undelivered.',
                'The defendant\'s solicitor indorsed the writ accepting service.',
                'The question asks what the plaintiff can recover by way of costs on a default judgment.',
                'An interlocutory judgment has been entered and the client asks what happens next.',
                'The affidavit of service does not mention the O.13A admission forms.',
                'The affirmation of service asserts that the posted writ was not returned undelivered.',
                'You are drafting the prayer in the summons or the body of the judgment.',
              ],
              routes: [
                { when: 'You have not yet decided whether the judgment is final or interlocutory', session: 'LG6', issue: 'liquidated-or-unliquidated', label: 'Classifying the claim: liquidated or unliquidated' },
                { when: 'The defendant acknowledged service but filed no defence', session: 'LG6', issue: 'default-of-defence', label: 'Default judgment in default of defence (O.19)' },
                { when: 'The dispute is whether service was good at all', session: 'LG6', issue: 'regular-or-irregular', label: 'Is the default judgment regular or irregular?' },
                { when: 'The method of service itself is what is in issue', session: 'LG3', issue: 'serving-the-writ', label: 'Serving the writ under O.10' },
                { when: 'Service was on a company at its registered office', session: 'LG3', issue: 'serving-particular-parties', label: 'Serving particular kinds of party' },
                { when: 'Service was effected by order for substituted service', session: 'LG3', issue: 'substituted-service', label: 'Substituted service' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Obtaining and recording the judgment',
                steps: [
                  {
                    id: 'scope',
                    label: 'This is the O.13 procedure — only two pieces of it carry over to O.19',
                    points: [
                      'An O.13 judgment is entered because the defendant never acknowledged service, so what the plaintiff must prove is that the WRIT ITSELF was duly served — that is what the gate, the affidavit\'s 7-day opinion, and the r.7(3)-(5) returned-writ duty below are all about.',
                      'An O.19 judgment starts from the opposite fact: the defendant HAS acknowledged service, so the writ\'s service is no longer in issue. What has to be proved instead is service of the O.19 r.8A NOTICE OF INTENTION TO ENTER JUDGMENT — a different document, under a different rule, with its own affidavit requirement. That mechanism is covered on its own page: "Default judgment in default of defence (O.19)".',
                      'Two things below genuinely apply to both Orders because their own text says so: the form-of-judgment rule (O.19 rr.2-5 cite the same Forms 39-42 as O.13 rr.1-4: O.42 r.1(1)-(2)), and the fixed-costs scale (O.62, 2nd Sch., Pt I para.1(b) names O.19 r.2 in the same breath as O.13 r.1). Everything else here — the r.7(1) gate, the affidavit\'s 7-day opinion, and the r.7(3)-(5) duty on a returned writ — is confined to O.13 by its own wording and has no O.19 counterpart.',
                    ],
                  },
                  {
                    id: 'gate',
                    label: 'Clear the O.13 r.7(1) gate first (O.13 only) — judgment "shall not be entered" unless one of three things is true',
                    points: [
                      'r.7(1)(a) — the defendant has acknowledged service of the writ on him; or',
                      'r.7(1)(b) — an affidavit is filed by or on behalf of the plaintiff proving due service of the writ on the defendant; or',
                      'r.7(1)(c) — the plaintiff produces the writ indorsed by the defendant\'s solicitor with a statement that he accepts service of the writ on the defendant\'s behalf.',
                      'r.7(2) adds that where an application is made affecting a party who has failed to give notice of intention to defend, the Court hearing it may require to be satisfied IN SUCH MANNER AS IT THINKS FIT that the party failed to give such notice.',
                      'So proof of service is not a formality to be produced later. It is the condition on which the judgment is entered at all.',
                    ],
                  },
                  {
                    id: 'docs',
                    label: 'Prepare the application: summons plus affidavit (this part applies whichever Order the default is under)',
                    points: [
                      {
                        text: 'The summons seeks the orders actually wanted, and the wording tracks the classification:',
                        points: [
                          'Final judgment in default be entered in favour of the Plaintiff, for a liquidated claim; OR',
                          'Interlocutory judgment on liability be entered in favour of the Plaintiff with damages to be assessed, for an unliquidated claim; and',
                          'Costs be to the Plaintiff.',
                        ],
                      },
                      'Under O.13 the affidavit proves that the writ was duly served: O.13 r.7(1)(b). Under O.19 it instead proves service of the r.8A notice of intention to enter judgment — the writ\'s own service is not what is being proved, because the acknowledgement already concedes it.',
                      'Where a form of judgment is prescribed by Appendix A, the judgment must be in that form: O.42 r.1(1) — a Rules-wide provision, not an O.13 one. The same Forms 39-42 are named by both O.13 rr.1-4 and O.19 rr.2-5: Form 39 for a liquidated demand, Form 40 for unliquidated damages, Form 41 for detention of goods and Form 42 for possession of land.',
                      'The party entering judgment is entitled to have recited in it a statement of the MANNER in which, and the PLACE at which, the writ was served: O.42 r.1(2) — which is why the mode of service ends up on the face of the judgment.',
                      'A default judgment is short. In the negligence case file it reads, in substance: no notice of intention to defend having been given by the defendant, it is adjudged that the defendant do pay the plaintiff damages to be assessed.',
                    ],
                  },
                  {
                    id: 'affidavit',
                    label: 'Draft the affidavit of service of the WRIT with the set-aside application in mind (O.13 only)',
                    points: [
                      'State who served, on whom, when, where and by what method — the affidavit is the document a defendant will later attack.',
                      'Where service was by POST or by INSERTION INTO A LETTER BOX, the affidavit must state that in the plaintiff\'s opinion the writ would have come to the defendant\'s knowledge within 7 days.',
                      'That opinion must be REASONABLE. If the Court thinks it is not, it can rule that there has been no proper service and refuse the default judgment: Law Kwok Hung v Tse Ping Man [1999] 4 HKC 397; Cheng Yip Chi v Kan Ming Construction Investments Ltd HCA 3291/2000.',
                      'PD 24.1 para.8 — on an O.13 application the affidavit of service should also depose to the fact that the relevant O.13A statutory forms for making an admission were served together with the Writ and the acknowledgement of service.',
                      'Do not assert more than the deponent knows. In C&S Dental Care Ltd v Premier Asia Medical Centre Ltd DCCJ 6089/2019, [2020] HKDC 1023 the affirmation of service was framed on O.10 r.1(3) — that the letter had not been returned undelivered — and the writ was in fact returned before judgment was obtained, which made the service irregular.',
                      'None of this affidavit exists under O.19. There the writ\'s service is already conceded by the acknowledgement, so there is nothing left to prove about it — the affidavit that matters instead proves service of the r.8A notice.',
                    ],
                  },
                  {
                    id: 'returned',
                    label: 'If the posted writ comes back undelivered, O.13 r.7(3)-(5) imposes a duty (O.13 only — no O.19 counterpart)',
                    points: [
                      'Where judgment has been entered against a defendant purporting to have been served BY POST under O.10 r.1(2)(a) and the copy writ is returned through the post undelivered, the plaintiff SHALL, before taking any step or further step in the action or in enforcement, do one of two things: r.7(3).',
                      'r.7(3)(a) — make a request for the judgment to be set aside on the ground that the writ has not been duly served. That request is made by producing to an officer of the Registry, and leaving with him for filing, an affidavit stating the relevant facts — and THEREUPON THE JUDGMENT SHALL BE SET ASIDE and the entries marked accordingly: r.7(4).',
                      'r.7(3)(b) — apply to the Court for directions. That application is made ex parte by affidavit stating the facts and any order or direction sought, and the Court may set aside the judgment, direct that notwithstanding the return the writ shall be treated as duly served, or make such other order or direction as the circumstances require: r.7(5).',
                      'Note what r.7(4) does: the set-aside is administrative and automatic on filing the affidavit. It is not a discretion, and the plaintiff\'s own duty to invoke it arises before any further step is taken.',
                    ],
                  },
                  {
                    id: 'costs',
                    label: 'Work out the costs on the fixed scale (this step DOES apply to an O.19 judgment too)',
                    points: [
                      'The scale in O.62, 2nd Schedule, Part II applies where the writ was indorsed with a claim for a debt or liquidated demand only and the plaintiff obtains judgment on failure to give notice of intention to defend under O.13 r.1, or in default of defence under O.19 r.2: 2nd Sch., Pt I, para.1(b).',
                      'It also applies where the plaintiff obtains judgment under O.13A without a hearing: para.1A.',
                      'Basic costs on that scale are $10,000 where the plaintiff is legally represented, and $600 where he is not. Additional costs are $500 for each additional defendant after the first, and $1,000 for each defendant served where substituted service is ordered and effected.',
                      'The lecture gives the District Court equivalents as $6,500, with $350 for each additional defendant.',
                      'Para.2 is the trap: NOTWITHSTANDING paras.1 and 1A, no costs are allowed in any case to which they apply unless (a) the Court orders costs to be allowed, or (b) in a para.1(b) case, judgment is obtained WITHIN 28 DAYS after service of the writ or within such further time as the Court may allow.',
                      'Para.3 adds to the basic costs the fee that would have been payable on the issue of a writ for the amount recovered.',
                    ],
                  },
                  {
                    id: 'after',
                    label: 'Say what happens next — an interlocutory judgment is not the end (whichever Order it was entered under)',
                    points: [
                      'A final judgment can be enforced at once. An interlocutory judgment fixes liability only, and the plaintiff must still prove quantum at an assessment of damages at which the defendant is usually absent.',
                      'In the District Court, unless otherwise ordered or directed at the time of giving judgment, the assessment takes place before a master and the automatic directions under O.37 r.1A of the Rules of the District Court (Cap. 336H) take effect: O.37 r.1.',
                      'On full compliance with those directions an application is made to the practice master for an appointment for the assessment and leave to set down; leave is granted if the practice master is satisfied that the directions have been fully complied with and the matter is ready to proceed.',
                      'A Notice of Appointment of Assessment of Damages then issues, giving the date, time and place of the hearing, and is served on the defendant.',
                    ],
                  },
                ],
              },
            },
            skeleton: {
              table: {
                headers: ['Step', 'Document', 'Point to get right'],
                rows: [
                  ['Establish the right to enter judgment (O.13 only)', 'Acknowledgement, affidavit of service, or the writ indorsed by the defendant\'s solicitor', 'One of the three limbs of O.13 r.7(1) must be satisfied or judgment shall not be entered — under O.19 the gate is the r.8A notice instead, not this rule'],
                  ['Apply', 'Summons', 'The prayer must match the classification: final judgment, or interlocutory judgment with damages to be assessed; plus costs to the plaintiff'],
                  ['Prove service of the writ (O.13 only)', 'Affidavit of service', 'Mode, date and place; the 7-day opinion for postal or letter-box service, and it must be reasonable — O.19 proves service of the r.8A notice instead, not the writ'],
                  ['Prove the admission forms went out', 'The same affidavit', 'PD 24.1 para.8 — depose that the O.13A forms were served with the Writ and the acknowledgement of service'],
                  ['Enter judgment', 'Judgment in the prescribed Appendix A form', 'Form 39 liquidated, 40 unliquidated, 41 goods, 42 land: O.42 r.1(1); the manner and place of service may be recited: r.1(2)'],
                  ['Claim costs', 'Fixed scale', '$10,000 if legally represented; $500 per additional defendant; $1,000 per defendant where substituted service was ordered and effected; but nothing at all unless para.2 is satisfied'],
                  ['If the writ is returned undelivered', 'Affidavit to the Registry, or an ex parte application', 'r.7(3)-(5) — before taking any step or further step, request the set-aside or apply for directions'],
                  ['After an interlocutory judgment', 'Notice of Appointment of Assessment of Damages', 'Automatic directions apply; the appointment comes from the practice master once they are complied with'],
                ],
              },
            },
            lookOut: {
              bullets: [
                'This whole page is the O.13 procedure. Only the fixed-costs scale and the form-of-judgment rule below apply to an O.19 judgment too — the r.7(1) gate, the affidavit\'s 7-day opinion and the r.7(3)-(5) duty do not.',
                'O.13 r.7(1) is mandatory in form — "judgment shall not be entered... unless".',
                'The 7-day opinion on postal or letter-box service is the plaintiff\'s own opinion, and it is reviewable for reasonableness.',
                'Never plead in the affidavit of service more than the deponent can stand behind — the C&S Dental affirmation is the cautionary example.',
                'r.7(3) imposes a duty on the PLAINTIFF once the writ comes back undelivered, and it bites before any further step in the action or in enforcement.',
                'Under r.7(4) the set-aside on a returned writ is automatic on filing the affidavit — the plaintiff is not applying for a discretion.',
                'Fixed costs are withheld altogether unless the Court orders costs or, in a default-judgment case, judgment is obtained within 28 days after service of the writ: 2nd Sch., Pt I, para.2.',
                'The substituted-service uplift of $1,000 per defendant served is easy to miss when the writ was served by order.',
                'Interlocutory judgment is a milestone, not an outcome — build the assessment of damages into the advice.',
              ],
            },
            skills: {
              bullets: [
                'List the documents by name — summons, affidavit of service, judgment in the prescribed form — rather than describing the process in the abstract.',
                'Quote the prayer you would use, and make it match the classification of the claim.',
                'Deal with the 7-day opinion expressly whenever the facts mention post or a letter box.',
                'Quantify the costs: scale figure, court, additional defendants, and the para.2 condition.',
                'Close with what the judgment does and does not achieve, and, if interlocutory, with the assessment route.',
                'When acting for a defendant, read the affidavit of service first — it is where the irregularity, if any, will be visible.',
              ],
            },
            mistakes: {
              bullets: [
                'Citing O.13 r.7(1), the 7-day opinion, or r.7(3)-(5) as if they governed an O.19 judgment. They don\'t: O.19\'s equivalent gate is service of the r.8A notice, covered on its own page.',
                'Entering judgment without satisfying one of the three limbs of O.13 r.7(1).',
                'Omitting the 7-day opinion from an affidavit of postal or letter-box service.',
                'Asserting in the affirmation of service that a posted writ was not returned, when it was or later is.',
                'Taking a further step in enforcement after the writ has been returned undelivered, instead of complying with r.7(3).',
                'Quoting the fixed-costs figure without checking the para.2 condition, or using the High Court figure in the District Court.',
                'Forgetting PD 24.1 para.8 and filing an affidavit that is silent on the O.13A forms.',
                'Treating an interlocutory judgment as if the plaintiff had recovered the sum claimed.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'Judgment shall not be entered against a defendant under this Order unless—', cite: 'O.13 r.7(1), Rules of the High Court (Cap. 4A)' },
                { text: 'A request under paragraph (3)(a) shall be made by producing to an officer of the Registry and leaving with him for filing, an affidavit stating the relevant facts, and thereupon the judgment shall be set aside and the entry of the judgment and of any proceedings for its enforcement made in the book kept in the Registry for that purpose shall be marked accordingly.', cite: 'O.13 r.7(4), Rules of the High Court (Cap. 4A)' },
                { text: 'The party entering any judgment shall be entitled to have recited therein a statement of the manner in which, and the place at which, the writ or other originating process by which the cause or matter in question was begun was served.', cite: 'O.42 r.1(2), Rules of the High Court (Cap. 4A)' },
              ],
              table: {
                headers: ['Point', 'Source', 'What it actually provides'],
                rows: [
                  ['Scope of this page', 'O.13 r.7; O.19 r.8A', 'The r.7(1) gate, the affidavit\'s 7-day opinion, and the r.7(3)-(5) duty on a returned writ are confined to O.13 by their own wording ("under this Order"); O.19\'s equivalent requirement is service of the r.8A notice of intention to enter judgment, covered on its own page. Only the form-of-judgment rule (O.42 r.1) and the fixed-costs scale below apply to both Orders'],
                  ['Proof of service', 'O.13 r.7(1)(a)-(c)', 'Judgment shall not be entered unless the defendant has acknowledged service, an affidavit proving due service is filed, or the plaintiff produces the writ indorsed by the defendant\'s solicitor accepting service'],
                  ['The Court\'s own satisfaction', 'O.13 r.7(2)', 'On an application affecting a party who failed to give notice of intention to defend, the Court may require to be satisfied in such manner as it thinks fit that he failed to do so'],
                  ['Writ returned undelivered', 'O.13 r.7(3)', 'Where the writ was purportedly served by post under O.10 r.1(2)(a) and is returned undelivered, the plaintiff shall, before any step or further step in the action or its enforcement, request a set-aside or apply for directions'],
                  ['Automatic set-aside', 'O.13 r.7(4)', 'On filing an affidavit of the relevant facts at the Registry the judgment shall be set aside and the Registry entries marked accordingly'],
                  ['Directions instead', 'O.13 r.7(5)', 'An ex parte application by affidavit; the Court may set aside, direct that the writ be treated as duly served notwithstanding the return, or make such other order as the circumstances require'],
                  ['The 7-day opinion', 'Law Kwok Hung v Tse Ping Man [1999] 4 HKC 397; Cheng Yip Chi v Kan Ming Construction Investments Ltd HCA 3291/2000', 'Where service is by post or letter box the affidavit must state the plaintiff\'s opinion that the writ would come to the defendant\'s knowledge within 7 days, and that opinion must be reasonable'],
                  ['Admission forms', 'PD 24.1 para.8', 'The affidavit of service on an O.13 application should depose that the O.13A statutory forms were served with the Writ and the acknowledgement of service'],
                  ['Form of judgment', 'O.42 r.1(1)-(2)', 'Where Appendix A prescribes a form the judgment must be in it (Forms 39-42 for the four claim types); the manner and place of service may be recited in the judgment'],
                  ['Fixed costs: when the scale applies', 'O.62, 2nd Sch., Pt I paras.1(b) and 1A', 'Judgment under O.13 r.1 or O.19 r.2 on a debt or liquidated demand, and judgment under O.13A without a hearing'],
                  ['Fixed costs: the figures', 'O.62, 2nd Sch., Pt II', '$10,000 basic where the plaintiff is legally represented and $600 where not; $500 for each additional defendant after the first; $1,000 for each defendant served where substituted service is ordered and effected'],
                  ['Fixed costs: the condition', 'O.62, 2nd Sch., Pt I paras.2-3', 'No costs at all unless the Court orders them or, in a para.1(b) case, judgment is obtained within 28 days after service of the writ or such further time as the Court allows; the writ issue fee for the amount recovered is added to the basic costs'],
                  ['Assessment of damages', 'O.37 rr.1, 1A, Rules of the District Court (Cap. 336H)', 'Unless otherwise ordered at the time of judgment the assessment is before a master with automatic directions; on compliance, the practice master gives an appointment and leave to set down'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG6', issue: 'default-notice-of-intention', label: 'Default judgment for failure to give notice of intention to defend (O.13)' },
              { session: 'LG6', issue: 'default-of-defence', label: 'Default judgment in default of defence (O.19)' },
              { session: 'LG6', issue: 'regular-or-irregular', label: 'Is the default judgment regular or irregular?' },
              { session: 'LG3', issue: 'serving-the-writ', label: 'Serving the writ under O.10' },
              { session: 'LG3', issue: 'ordinary-service-and-timing', label: 'Ordinary service, timing and proof' },
              { session: 'LG3', issue: 'substituted-service', label: 'Substituted service' },
            ],
          },
          {
            id: 'regular-or-irregular',
            title: 'Is the default judgment regular or irregular?',
            summary: 'The pivot of every set-aside question — service either complied with the rules or it did not, and the whole test changes with the answer.',
            triggers: {
              bullets: [
                'A default judgment has been entered and the defendant wants it set aside.',
                'The defendant says he never received the writ.',
                'The defendant was out of Hong Kong when the writ was served.',
                'The writ was posted or put through a letter box rather than served personally.',
                'The writ was sent to a company\'s registered office and came back undelivered.',
                'The company had moved and had not filed notice of the change of registered office.',
                'Service was effected under an order for substituted service.',
                'Judgment was applied for in time but sealed after a late acknowledgement of service.',
                'The plaintiff entered judgment more than a year after the last step, with no notice of intention to proceed.',
              ],
              routes: [
                { when: 'You have concluded the judgment is irregular', session: 'LG6', issue: 'setting-aside-irregular', label: 'Setting aside an irregular judgment' },
                { when: 'You have concluded the judgment is regular', session: 'LG6', issue: 'setting-aside-regular', label: 'Setting aside a regular judgment' },
                { when: 'The question is what the rules required of the method used', session: 'LG3', issue: 'serving-the-writ', label: 'Serving the writ under O.10' },
                { when: 'The defendant is a company, a firm or a person under disability', session: 'LG3', issue: 'serving-particular-parties', label: 'Serving particular kinds of party' },
                { when: 'Service was by order for substituted service', session: 'LG3', issue: 'substituted-service', label: 'Substituted service' },
                { when: 'The complaint is a defect in service short of the judgment', session: 'LG3', issue: 'defective-service', label: 'Defective service and the Court\'s discretion' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Classifying the judgment',
                steps: [
                  {
                    id: 'question',
                    label: 'Ask the right question: was the service of the writ defective?',
                    points: [
                      'A judgment is IRREGULAR because the service of the writ was defective — it did not comply with the rules on service, for instance O.10.',
                      'A judgment is REGULAR where the plaintiff served in the required manner and the defendant simply failed to respond in time.',
                      'The question is about the plaintiff\'s compliance, not about the defendant\'s diligence. A defendant may be entirely blameless and still face a regular judgment.',
                      'It is worth naming who was at fault, because the costs order follows from it: on an irregular judgment the plaintiff deprived the defendant of the opportunity to respond; on a regular one the defendant failed to take an opportunity he had.',
                    ],
                  },
                  {
                    id: 'presumption',
                    label: 'Where the trouble usually comes from: the O.10 alternatives to personal service',
                    points: [
                      'Posting the writ, and inserting it through a letter box, are permitted alternatives to personal service under O.10.',
                      'Those two methods give rise only to a PRESUMPTION of good service. The defendant may lead evidence to show that he was in fact unaware of the service of the writ.',
                      'So the presumption is the plaintiff\'s starting point, not his finishing point — and it is rebuttable on evidence.',
                    ],
                  },
                  {
                    id: 'test',
                    label: 'State the test, in the terms the cases use',
                    points: [
                      'The test for regularity of service is whether the writ was BROUGHT TO THE DEFENDANT\'S NOTICE by the service — NOT whether it was merely delivered to his usual or last known address: Chu Kam Lun v Yap Lisa Susanto [1999] 3 HKC 378; Kwan Kam Wah v Chan Wai Ming [2000] 2 HKC 378; Cosec Nominees Ltd v Lam Hon Ming Alan [2001] 3 HKC 290.',
                      'A defendant may assert that he did not know of the existence of the writ, provided he can provide convincing evidence of that. The Court usually has to accept such an assertion unless it finds it not credible: BOC(HK) Ltd v Cheung King Fung [2007] 1 HKLRD 462 at 469-470.',
                      'So the defendant\'s evidence matters, and its quality is what the Court weighs. A bare denial is not convincing evidence; an account of where he was, and why the mail went unread, is.',
                    ],
                  },
                  {
                    id: 'mode',
                    label: 'Then take account of the MODE of service, because it changes the strength of the case',
                    points: [
                      'If service was effected by SUBSTITUTED SERVICE, there is a strong argument that it would be treated as having brought the writ to the notice of the defendant, and it is difficult to persuade the Court otherwise: Melco Crown Gaming (Macau) Ltd v Wong Yam Tak HCA 238/2013 (To J; 07.05.2014).',
                      'Where a posted writ was RETURNED UNDELIVERED to the plaintiff and the plaintiff nevertheless entered default judgment, the defendant was held entitled to have the judgment set aside ex debito justitiae: Fok Chun Hung v Lo Yuk Shi [1995] 1 HKLR 420.',
                      'Where a company is served, the modes under O.10 r.1 and s827 of the Companies Ordinance are ALTERNATIVES: if one method is relied on, the consequences of that method must follow. In C&S Dental Care Ltd v Premier Asia Medical Centre Ltd DCCJ 6089/2019, [2020] HKDC 1023 the writ was sent to the registered office by registered post and returned undelivered after the affirmation of service was prepared but before judgment was obtained; because the affirmation relied on O.10 r.1, the service was irregular, there being evidence to displace the deemed notice.',
                      'The practical lesson from C&S Dental is to read the affidavit of service and hold the plaintiff to the route it chose.',
                    ],
                  },
                  {
                    id: 'other',
                    label: 'Remember that irregularity is not only about service',
                    points: [
                      'A judgment entered when the defendant had in fact acknowledged service before it was sealed is vulnerable: Kwan Tat Chung v Ho Cheuk Kwan HCPI 381/2002, [2003] HKEC 36, where two defendants set aside a judgment applied for after the acknowledgement time had expired but sealed only after they had acknowledged.',
                      'A defendant may acknowledge service after the time limited, except that he may not give notice of intention to defend after judgment has been obtained without leave: O.12 r.6(1)-(2).',
                      'Judgment in default may be signed at any time after the prescribed time has expired — but where a year or more has elapsed since the last proceeding, one month\'s notice of intention to proceed must be given first: O.3 r.6.',
                      'Where the writ was posted under O.10 r.1(2)(a) and came back undelivered, O.13 r.7(3)-(4) gives a route to a set-aside that does not depend on this classification at all: the plaintiff himself must request it, and the judgment is then set aside on filing an affidavit of the relevant facts.',
                    ],
                  },
                  {
                    id: 'consequence',
                    label: 'Read off what the classification decides',
                    points: [
                      'IRREGULAR — the defendant can set aside ex debito justitiae, as of right, without the merits of his defence being considered; and the plaintiff usually pays the defendant\'s costs.',
                      'REGULAR — the Court has a discretion; the defendant must explain the default and show a defence with a real prospect of success; and the defendant usually pays the plaintiff\'s costs.',
                      'The classification therefore decides the test, the evidence that has to be filed, and the costs order. Settle it before writing anything else.',
                    ],
                  },
                ],
              },
            },
            skeleton: {
              table: {
                headers: ['Feature', 'Irregular judgment', 'Regular judgment'],
                rows: [
                  ['Service of the writ', 'Defective — it did not comply with the rules', 'Not defective — served in the required manner'],
                  ['Who was at fault', 'The plaintiff, who did not serve properly and so deprived the defendant of the opportunity to respond', 'The defendant, who was properly served and failed to respond in time'],
                  ['Criteria to set aside', 'Once irregularity is shown, the defendant may set aside ex debito justitiae', 'The defendant must explain the default AND show a defence with a real prospect of success'],
                  ['Are the merits considered?', 'No — the defence does not have to be examined', 'Yes — the merits are the most important consideration'],
                  ['Usual costs order', 'The plaintiff pays the defendant\'s costs', 'The defendant pays the plaintiff\'s costs'],
                  ['Terms', 'May still be imposed, having regard to the circumstances and especially the defendant\'s conduct', 'May be imposed where the defence, though real, appears shadowy'],
                ],
              },
            },
            lookOut: {
              bullets: [
                'The test is notice, not delivery. Proof that the writ reached the address is not proof that it reached the defendant.',
                'The presumption from posting or letter-box service is rebuttable — but it takes convincing evidence, not a bare denial.',
                'Substituted service cuts the other way: it is strong evidence that the writ came to the defendant\'s notice.',
                'A company that fails to update its registered office may still be regularly served there — the failure is the company\'s, and it goes to the reasons for the default, not to the validity of service.',
                'C&S Dental is about being held to the route chosen in the affirmation of service: O.10 r.1 and CO s827 are alternatives with different consequences.',
                'Irregularity can arise from something other than service, such as entering judgment after an acknowledgement was filed, or without the O.3 r.6 notice.',
                'Where the posted writ was returned undelivered, O.13 r.7(3)-(4) gives a more direct route than any set-aside application.',
              ],
            },
            skills: {
              bullets: [
                'Answer the classification question first and in one sentence, then build everything else on it.',
                'Identify the exact mode of service on the facts, and match it to the rule that permits it, before saying whether it complied.',
                'Apply the notice test to the facts given — where the defendant was, when the document was left, when it was actually read.',
                'Say what further evidence would settle it, because on these facts it usually would: travel records, mail collection, the affidavit of service itself.',
                'Where the position is genuinely arguable, advise in the alternative — if irregular then X, if regular then Y — and note that the costs order flips with it.',
              ],
            },
            mistakes: {
              bullets: [
                'Treating delivery to the last known address as conclusive of good service.',
                'Starting with the merits of the defence before classifying the judgment.',
                'Assuming a defendant who was abroad must have been irregularly served, without checking the method used.',
                'Ignoring that substituted service makes the defendant\'s "I never knew" case much harder.',
                'Confusing the company\'s failure to update its registered office with a defect in the plaintiff\'s service.',
                'Overlooking the non-service forms of irregularity.',
                'Advising a set-aside application where O.13 r.7(3)-(4) provides a direct and automatic route.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Source', 'What it actually decides'],
                rows: [
                  ['The test for regularity of service', 'Chu Kam Lun v Yap Lisa Susanto [1999] 3 HKC 378; Kwan Kam Wah v Chan Wai Ming [2000] 2 HKC 378; Cosec Nominees Ltd v Lam Hon Ming Alan [2001] 3 HKC 290', 'Whether the writ was brought to the defendant\'s notice by the service — not whether it was merely delivered to his usual or last known address'],
                  ['The defendant\'s assertion of ignorance', 'BOC(HK) Ltd v Cheung King Fung [2007] 1 HKLRD 462 at 469-470', 'The defendant may assert that he did not know of the writ if he provides convincing evidence; the Court usually accepts the assertion unless it finds it not credible'],
                  ['Substituted service', 'Melco Crown Gaming (Macau) Ltd v Wong Yam Tak HCA 238/2013 (To J; 07.05.2014)', 'Where service was by substituted service there is a strong argument that the writ was brought to the defendant\'s notice, and it is difficult to persuade the Court otherwise'],
                  ['Writ returned undelivered', 'Fok Chun Hung v Lo Yuk Shi [1995] 1 HKLR 420', 'Where the writ was served by post and returned undelivered and the plaintiff entered default judgment, the defendant was entitled to have the judgment set aside ex debito justitiae'],
                  ['Service on a company: alternative modes', 'C&S Dental Care Ltd v Premier Asia Medical Centre Ltd DCCJ 6089/2019, [2020] HKDC 1023 (HH Judge Leung, 19.11.2020)', 'O.10 r.1 and CO s827 are alternative modes; if one is relied on the consequences of that method must follow, so where the affirmation relied on O.10 r.1 and the letter was returned before judgment, the service was irregular'],
                  ['Acknowledgement before sealing', 'Kwan Tat Chung v Ho Cheuk Kwan HCPI 381/2002, [2003] HKEC 36', 'A default judgment applied for after the acknowledgement time had expired but sealed after the defendants acknowledged service was set aside'],
                  ['Late acknowledgement', 'O.12 r.6(1)-(2)', 'No notice of intention to defend after judgment except with leave; otherwise a late acknowledgement is permitted but gains the defendant no extra time'],
                  ['Delay by the plaintiff', 'O.3 r.6', 'Where a year or more has elapsed since the last proceeding, one month\'s notice of intention to proceed must be given'],
                  ['The direct statutory route', 'O.13 r.7(3)-(4)', 'Where a writ posted under O.10 r.1(2)(a) is returned undelivered, the plaintiff must request a set-aside or apply for directions before any further step, and on filing an affidavit of the relevant facts the judgment shall be set aside'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG6', issue: 'setting-aside-irregular', label: 'Setting aside an irregular judgment' },
              { session: 'LG6', issue: 'setting-aside-regular', label: 'Setting aside a regular judgment' },
              { session: 'LG6', issue: 'entering-default-judgment', label: 'Entering judgment under O.13: procedure, proof of service and fixed costs' },
              { session: 'LG3', issue: 'serving-the-writ', label: 'Serving the writ under O.10' },
              { session: 'LG3', issue: 'serving-particular-parties', label: 'Serving particular kinds of party' },
              { session: 'LG3', issue: 'substituted-service', label: 'Substituted service' },
              { session: 'LG3', issue: 'defective-service', label: 'Defective service and the Court\'s discretion' },
            ],
          },
          {
            id: 'setting-aside-irregular',
            title: 'Setting aside an irregular judgment',
            summary: 'Set aside as of right, without the merits — but the Court can still impose terms, and the costs run the other way.',
            triggers: {
              bullets: [
                'You have concluded that the service of the writ was defective.',
                'The defendant was abroad, or never at the address, when the writ was left there.',
                'The posted writ was returned undelivered before judgment was obtained.',
                'The affirmation of service relied on a deemed-service rule that the facts contradict.',
                'The defendant admits he owes something but was never properly served.',
                'The defendant\'s own conduct contributed to the service going wrong.',
                'The plaintiff argues that the application should fail because the defendant has no defence.',
                'The defendant needs to stop enforcement while the application is heard.',
              ],
              routes: [
                { when: 'Service in fact complied with the rules', session: 'LG6', issue: 'setting-aside-regular', label: 'Setting aside a regular judgment' },
                { when: 'You have not yet settled the classification', session: 'LG6', issue: 'regular-or-irregular', label: 'Is the default judgment regular or irregular?' },
                { when: 'The writ was posted under O.10 r.1(2)(a) and came back undelivered', session: 'LG6', issue: 'entering-default-judgment', label: 'Entering the judgment: the O.13 r.7(3)-(4) route' },
                { when: 'The client would rather admit and pay by instalments', session: 'LG6', issue: 'time-to-pay', label: 'Requesting time to pay, instalments and the stay of execution' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Setting aside as of right',
                steps: [
                  {
                    id: 'rule',
                    label: 'Name the governing rule, and match it to the default',
                    points: [
                      'Default of notice of intention to defend → O.13 r.9: without prejudice to r.7(3) and (4), the Court may, on such terms as it thinks just, set aside or vary any judgment entered in pursuance of the Order.',
                      'Default of defence → O.19 r.9, in materially the same words.',
                      'Both are discretionary in form. The ex debito justitiae principle is what the case law does with that discretion where the judgment was irregularly obtained.',
                      'Before applying, check whether O.13 r.7(3)-(4) applies instead: if the writ was posted under O.10 r.1(2)(a) and returned undelivered, the judgment is set aside on filing an affidavit of the relevant facts at the Registry, without any application at all.',
                    ],
                  },
                  {
                    id: 'entitlement',
                    label: 'State the entitlement — this is the whole point of the classification',
                    points: [
                      'The defendant can set aside an irregular judgment EX DEBITO JUSTITIAE, that is as of right, without the merits of his defence being considered: Po Kwong Marble Factory Ltd v Wah Yee Decoration Co Ltd [1996] 4 HKC 157.',
                      'So the affidavit does not have to establish a defence, and the plaintiff cannot answer the application by saying the defence is hopeless.',
                      'In England the Court may still refuse to set aside an irregular judgment where the defendant has no defence: Faircharm Investment Ltd v Citibank International plc [1998] Lloyd\'s Rep Bank 127.',
                      'That approach has NOT yet been recognised in Hong Kong: Melco Crown Gaming (Macau) Ltd v Wong Yam Tak HCA 238/2013 (To J; 07.05.2014). Say so expressly if the plaintiff raises it.',
                    ],
                  },
                  {
                    id: 'terms',
                    label: 'But expect terms — "as of right" does not mean unconditional',
                    points: [
                      'The Court can take the circumstances into account, and especially the defendant\'s conduct, in deciding whether any terms should be imposed when setting the judgment aside: Po Kwong Marble.',
                      'Where the defendant is in substance admitting the claim, he may be required to pay the money representing the claim into Court as the price of the set-aside.',
                      'Where the defendant\'s own conduct caused the service to become irregular — as on the facts of Po Kwong Marble itself — the Court can require payment of a sum into Court to do justice to the plaintiff.',
                      'The usual term, if one is imposed, is payment into Court of a sum equal to or less than the plaintiff\'s claim, framed conditionally: "On the defendant paying $300,000 into court within 14 days of this Order, the Judgment in default entered on [date] be set aside."',
                      'Advise the client on this before applying. A conditional order the client cannot satisfy leaves the judgment standing.',
                    ],
                  },
                  {
                    id: 'costs',
                    label: 'Get the costs order the right way round',
                    detail: 'On an irregular judgment the usual order is that the PLAINTIFF PAYS THE DEFENDANT\'S COSTS, because the plaintiff persisted with a judgment that was irregularly obtained. That is the opposite of the order on a regular judgment, and it is one of the quickest ways to show that the classification has been understood.',
                  },
                  {
                    id: 'procedure',
                    label: 'Run the application',
                    points: [
                      'Apply by SUMMONS supported by AFFIDAVIT, headed with the governing rule — O.13 r.9 or O.19 r.9 (or their Rules of the District Court equivalents where the action is in the District Court).',
                      'The prayer identifies the judgment by date and asks that it be set aside; where an interlocutory judgment was followed by a final judgment on assessment, both must be identified.',
                      'Ask for the appropriate costs order in the summons itself rather than leaving it to be argued.',
                      'The summons carries the standard notice that a party intending to oppose should send any affidavit and exhibits to reach the other side not less than 3 days before the hearing date.',
                      'Consider applying at the same time for a STAY OF EXECUTION of the judgment, since the defendant usually learns of the action only when enforcement begins.',
                      'Where enforcement is already listed — for instance a charging order nisi returnable shortly — a consent summons adjourning that hearing sine die with liberty to restore, and vacating the fixture, is the practical first step.',
                      'An appeal is not the route. It is available in England, but the position in Hong Kong is uncertain: compare Bank of Scotland v Pereira [2011] 1 WLR 2391 on the inter-relationship between CPR Part 52 and r.39.3(3). The safest course in Hong Kong remains an application to set aside.',
                    ],
                  },
                  {
                    id: 'order',
                    label: 'Know the order you are asking for',
                    detail: 'The usual order is in two parts: (1) the judgment in default entered on [date] be set aside; and (2) the appropriate costs order. When the Court sets a default judgment aside it will usually also give consequential directions on the future conduct of the case — typically fixing the time for the defendant to file and serve the acknowledgement of service and the defence.',
                  },
                ],
              },
            },
            skeleton: {
              table: {
                headers: ['Element', 'What to say', 'Source'],
                rows: [
                  ['The power', 'The Court may, on such terms as it thinks just, set aside or vary any judgment entered in pursuance of the Order', 'O.13 r.9; O.19 r.9'],
                  ['The classification', 'The service did not comply with the rules, so the judgment is irregular', 'Chu Kam Lun; Kwan Kam Wah; Cosec Nominees'],
                  ['The entitlement', 'The defendant may set aside ex debito justitiae, as of right, without the merits being considered', 'Po Kwong Marble Factory Ltd v Wah Yee Decoration Co Ltd [1996] 4 HKC 157'],
                  ['The plaintiff\'s answer, and why it fails', 'The English approach permitting refusal where there is no defence has not been recognised in Hong Kong', 'Faircharm; Melco Crown Gaming'],
                  ['Terms', 'The Court may still impose terms having regard to the circumstances and especially the defendant\'s conduct — usually payment into Court', 'Po Kwong Marble'],
                  ['Costs', 'The plaintiff pays the defendant\'s costs', 'The usual order on an irregular judgment'],
                  ['Consequential directions', 'Time for the defendant to file and serve the acknowledgement of service and the defence', 'Usual practice on setting aside'],
                ],
              },
            },
            lookOut: {
              bullets: [
                'Ex debito justitiae removes the merits from the test — it does not remove the Court\'s power to impose terms.',
                'The Faircharm point is a live argument the plaintiff may run; meet it with Melco Crown Gaming rather than ignoring it.',
                'The defendant\'s own conduct is relevant to TERMS even though it is irrelevant to entitlement.',
                'Where the writ was posted and returned undelivered, O.13 r.7(3)-(4) is quicker and does not depend on the Court\'s discretion at all.',
                'Identify every judgment to be set aside. An interlocutory judgment followed by a final judgment on assessment is two judgments.',
                'A stay of execution is usually needed as well as the set-aside, because enforcement is what brought the defendant in.',
                'Do not advise an appeal: the Hong Kong position is uncertain and the set-aside application is the safe course.',
              ],
            },
            skills: {
              bullets: [
                'Lead with the classification and the entitlement in the first two sentences — irregular, therefore as of right.',
                'Then deal with terms, because that is where the argument actually is once irregularity is established.',
                'State the costs order and the reason for it, rather than leaving costs to the end as an afterthought.',
                'Set out the relief sought as it would appear in the summons, including the stay of execution.',
                'If the merits happen to be strong, mention them briefly as a reason why no terms should be imposed — but never as the basis of the entitlement.',
              ],
            },
            mistakes: {
              bullets: [
                'Arguing the merits of the defence as if they were required.',
                'Treating "as of right" as meaning the Court cannot impose conditions.',
                'Getting the costs order the wrong way round.',
                'Applying to set aside where O.13 r.7(3)-(4) gives an automatic route.',
                'Setting aside the interlocutory judgment but leaving the final judgment on assessment in place.',
                'Forgetting to ask for a stay of execution, or for consequential directions.',
                'Advising an appeal against the default judgment.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'Without prejudice to rule 7(3) and (4), the Court may, on such terms as it thinks just, set aside or vary any judgment entered in pursuance of this Order.', cite: 'O.13 r.9, Rules of the High Court (Cap. 4A)' },
                { text: 'The Court may, on such terms as it thinks just, set a side or vary any judgment entered in pursuance of this Order.', cite: 'O.19 r.9, Rules of the High Court (Cap. 4A)' },
              ],
              table: {
                headers: ['Point', 'Source', 'What it actually decides'],
                rows: [
                  ['The power to set aside', 'O.13 r.9; O.19 r.9', 'The Court may, on such terms as it thinks just, set aside or vary any judgment entered in pursuance of the Order'],
                  ['Entitlement as of right', 'Po Kwong Marble Factory Ltd v Wah Yee Decoration Co Ltd [1996] 4 HKC 157', 'An irregular judgment may be set aside ex debito justitiae, without considering the merits of the defence'],
                  ['Terms may still be imposed', 'Po Kwong Marble Factory Ltd v Wah Yee Decoration Co Ltd [1996] 4 HKC 157', 'The Court may take the circumstances, especially the defendant\'s conduct, into account in deciding whether to impose terms — such as payment into Court where the defendant is in substance admitting the claim, or where his conduct caused the irregularity'],
                  ['The English qualification', 'Faircharm Investment Ltd v Citibank International plc [1998] Lloyd\'s Rep Bank 127', 'In England the Court may refuse to set aside an irregular judgment if the defendant has no defence'],
                  ['Not the Hong Kong position', 'Melco Crown Gaming (Macau) Ltd v Wong Yam Tak HCA 238/2013 (To J; 07.05.2014)', 'The Faircharm approach has not yet been recognised in Hong Kong'],
                  ['Appeal as an alternative', 'Bank of Scotland v Pereira [2011] 1 WLR 2391', 'An appeal is possible in England, discussing the inter-relationship between CPR Part 52 and r.39.3(3); the Hong Kong position is uncertain, so the safest course remains an application to set aside'],
                  ['The direct statutory route', 'O.13 r.7(3)-(4)', 'Where a writ posted under O.10 r.1(2)(a) is returned undelivered, the judgment shall be set aside on the plaintiff filing an affidavit of the relevant facts at the Registry'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG6', issue: 'regular-or-irregular', label: 'Is the default judgment regular or irregular?' },
              { session: 'LG6', issue: 'setting-aside-regular', label: 'Setting aside a regular judgment' },
              { session: 'LG6', issue: 'entering-default-judgment', label: 'Entering judgment under O.13: procedure, proof of service and fixed costs' },
              { session: 'LG3', issue: 'defective-service', label: 'Defective service and the Court\'s discretion' },
              { session: 'LG3', issue: 'serving-the-writ', label: 'Serving the writ under O.10' },
            ],
          },
          {
            id: 'setting-aside-regular',
            title: 'Setting aside a regular judgment',
            summary: 'A discretion, not a right — explain the default, show a defence with a real prospect of success, and expect to pay the costs.',
            triggers: {
              bullets: [
                'The writ was properly served but the defendant did not respond in time.',
                'The documents went to a valid address but were mishandled inside the company.',
                'A company was served at a registered office it had failed to update.',
                'The defendant has a substantive answer to the claim but no procedural complaint.',
                'The defendant delayed before applying to set the judgment aside.',
                'The plaintiff has already enforced or is enforcing the judgment.',
                'A third party has acted on the faith of the judgment.',
                'The defence looks arguable but thin.',
                'The defendant also wants to bring a counterclaim.',
              ],
              routes: [
                { when: 'Service was in fact defective', session: 'LG6', issue: 'setting-aside-irregular', label: 'Setting aside an irregular judgment' },
                { when: 'You have not yet settled the classification', session: 'LG6', issue: 'regular-or-irregular', label: 'Is the default judgment regular or irregular?' },
                { when: 'The client has no defence and simply needs time to pay', session: 'LG6', issue: 'time-to-pay', label: 'Requesting time to pay, instalments and the stay of execution' },
                { when: 'You are drafting the defence that must be exhibited', session: 'LG4', issue: 'defence-counterclaim-and-reply', label: 'Defence, counterclaim and reply' },
                { when: 'The defence has to plead specific matters to have any prospect', session: 'LG4', issue: 'pleading-specifically-and-particulars', label: 'Pleading specifically and particulars' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Setting aside in the Court\'s discretion',
                steps: [
                  {
                    id: 'power',
                    label: 'Start from the power and the purpose',
                    points: [
                      'The power is the same: O.13 r.9 or O.19 r.9 — on such terms as the Court thinks just.',
                      'On a regular judgment the Court has a discretion to decide whether to set it aside, exercised to avoid injustice to the defendant: L&M Specialist Construction Ltd v Wo Hing Construction Co Ltd [2000] 3 HKC 335.',
                      'Because it is a discretion, the application is an exercise in persuasion on evidence, not an assertion of entitlement — which is why the affidavit does the work.',
                    ],
                  },
                  {
                    id: 'factors',
                    label: 'Work through the discretionary factors',
                    points: [
                      'The NATURE OF AND REASONS FOR THE DEFAULT. Why was no acknowledgement or defence filed? An explanation that is candid and documented is worth far more than one that is vague.',
                      'The DEFENDANT\'S CONDUCT, including delay in applying to set aside and whether he has paid due regard to court processes: Wong Pak v Ng Po Chui [1982] HKC 243.',
                      'PREJUDICE TO THIRD PARTIES on setting aside may also be considered.',
                      'And, most important of all, whether the defendant is able to show a potential defence on the merits.',
                    ],
                  },
                  {
                    id: 'merits',
                    label: 'The merits: state the test in the words the cases use',
                    points: [
                      'A potential defence means the Court has to form a PROVISIONAL VIEW that the defence has a REAL PROSPECT OF SUCCESS, or carries with it SOME DEGREE OF CONVICTION: Young Bing Ching v Chow Yung Fong [2001] 2 HKLRD 394.',
                      'It is not simply an ARGUABLE defence, but one having a REAL LIKELIHOOD OF SUCCESS: Premier Fashion Wears Ltd v Li Hing Chung [1994] 1 HKC 213; Maryo Development Ltd v Tsang Yau May CACV 271/2013 (Yuen, Barma JJA & Harris J; 11.01.2016).',
                      'So the affidavit must descend to the facts of the defence and exhibit what supports it — contemporaneous statements, contracts, invoices, reports — rather than asserting that a defence exists.',
                      'A defence that goes only to QUANTUM is weaker than one that goes to liability. "I owe less than they say" may support terms, or an O.13A admission, rather than a set-aside.',
                    ],
                  },
                  {
                    id: 'costs',
                    label: 'Get the costs order the right way round — it is the reverse of the irregular case',
                    detail: 'On a regular judgment the usual order is that the DEFENDANT PAYS THE PLAINTIFF\'S COSTS, both of obtaining the default judgment and of setting it aside, because the plaintiff did nothing wrong in serving properly and then obtaining and enforcing the judgment. The defendant\'s own summons will often offer exactly that — costs of the application to the plaintiff in any event.',
                  },
                  {
                    id: 'terms',
                    label: 'Expect terms where the defence is shadowy',
                    detail: 'The Court can impose terms for setting the judgment aside where the defence, although having a real prospect of success, still appears SHADOWY: L&M Specialist Construction. In practice that means a conditional order for payment into Court. Advise the client on the risk of a conditional order before applying, because a condition he cannot meet leaves the judgment standing.',
                  },
                  {
                    id: 'evidence',
                    label: 'Build the affidavit around the test',
                    points: [
                      'Identify the deponent, his authority to make the affidavit on the party\'s behalf, and the basis of his knowledge.',
                      'State its purpose: to support the application to set aside the judgment, identifying each judgment by date.',
                      'Explain the default fully and with documents — who received what, when it was discovered, and why it was not acted on.',
                      'Show promptness from the moment of discovery, because delay before the application is what the Court weighs, not delay before discovery.',
                      'Then set out the defence on the merits, fact by fact, exhibiting the material that supports each limb, and any counterclaim.',
                      'Where a supporting witness can confirm a disputed part of the account, a short second affirmation confined to those paragraphs is worth more than assertion in the main one.',
                      'Correct any continuing breach that the default exposed — for instance, filing an overdue notice of change of registered office — and exhibit proof, since that goes to the defendant\'s regard for proper processes.',
                    ],
                  },
                ],
              },
            },
            skeleton: {
              table: {
                headers: ['Section of the affidavit', 'What it must establish', 'Why the Court wants it'],
                rows: [
                  ['Deponent and authority', 'Who the deponent is, that he is authorised to make the affidavit on the party\'s behalf, and the basis of his knowledge, information and belief', 'Admissibility and weight'],
                  ['Purpose', 'That the affidavit supports an application to set aside, identifying every judgment by date', 'Defines the relief sought'],
                  ['Background', 'The party\'s business, the relevant addresses and who handled correspondence', 'Makes the explanation of the default intelligible'],
                  ['The reasons for the default', 'Precisely why no acknowledgement or defence was filed, supported by documents', 'The nature of and reasons for the default'],
                  ['Discovery and promptness', 'When the default judgment came to the decision-maker\'s attention and what was done immediately afterwards', 'The defendant\'s conduct and any delay: Wong Pak v Ng Po Chui'],
                  ['Remedial steps', 'Any continuing default now put right, with proof', 'Due regard to proper processes'],
                  ['The defence on the merits', 'Each limb of the defence, fact by fact, with the supporting documents exhibited', 'A real prospect of success: Young Bing Ching'],
                  ['Counterclaim', 'Any cross-claim, quantified and supported', 'Completes the picture of the dispute to be tried'],
                  ['Conclusion', 'That the defendant has a meritorious defence and the judgment should be set aside', 'Ties the evidence to the relief'],
                ],
              },
            },
            lookOut: {
              bullets: [
                'The merits are the MOST important consideration, but they are not the only one — the reasons for the default and the defendant\'s conduct still have to be addressed.',
                'The threshold is a real prospect of success, not mere arguability: Young Bing Ching; Premier Fashion Wears.',
                'Delay is measured from discovery of the judgment, so an affidavit that fixes the date of discovery precisely is doing real work.',
                'A defence going only to quantum may not get the judgment set aside; consider O.13A instead.',
                'The costs order is the reverse of the irregular case — the defendant pays.',
                'A shadowy defence invites a conditional order for payment into Court: L&M Specialist Construction.',
                'Prejudice to third parties who have acted on the judgment is a relevant factor against setting aside.',
                'A company served at a registered office it failed to update is regularly served — that failure goes to the reasons for the default, not to the validity of service.',
              ],
            },
            skills: {
              bullets: [
                'Order the answer the way the Court weighs it: power, classification, reasons for default, conduct and delay, then the merits at length.',
                'Quote the merits test in its own words, and then apply it to the specific limbs of the proposed defence.',
                'Identify the evidence each limb of the defence needs, and say which exhibits would prove it.',
                'Deal with delay head-on by separating the period before discovery from the period after it.',
                'Concede the costs position rather than arguing it — offering the plaintiff his costs in any event strengthens the application.',
                'Where the defence is thin, advise the client in advance about a conditional order, and consider whether an O.13A admission is the better commercial answer.',
              ],
            },
            mistakes: {
              bullets: [
                'Asserting that a defence exists without exhibiting anything that supports it.',
                'Treating "arguable" as the test.',
                'Leading with the merits and never explaining the default.',
                'Measuring delay from the date of the judgment rather than the date of discovery.',
                'Expecting the plaintiff to pay the costs of a regular judgment properly obtained.',
                'Overlooking the possibility of a conditional order and advising the client that the judgment will simply go.',
                'Treating a company\'s failure to update its registered office as making service irregular.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Source', 'What it actually decides'],
                rows: [
                  ['The power', 'O.13 r.9; O.19 r.9', 'The Court may, on such terms as it thinks just, set aside or vary any judgment entered in pursuance of the Order'],
                  ['The discretion and its purpose', 'L&M Specialist Construction Ltd v Wo Hing Construction Co Ltd [2000] 3 HKC 335', 'On a regular judgment the Court has a discretion whether to set aside, exercised to avoid injustice to the defendant'],
                  ['Terms where the defence is shadowy', 'L&M Specialist Construction Ltd v Wo Hing Construction Co Ltd [2000] 3 HKC 335', 'The Court can impose terms where the defence, although having a real prospect of success, still appears shadowy'],
                  ['Conduct and delay', 'Wong Pak v Ng Po Chui [1982] HKC 243', 'The Court considers the nature of and reasons for the default, and the defendant\'s conduct, including delay in applying to set aside and whether he paid due regard to court processes'],
                  ['The merits test', 'Young Bing Ching v Chow Yung Fong [2001] 2 HKLRD 394', 'The Court must form a provisional view that the defence has a real prospect of success, or carries with it some degree of conviction'],
                  ['Not mere arguability', 'Premier Fashion Wears Ltd v Li Hing Chung [1994] 1 HKC 213; Maryo Development Ltd v Tsang Yau May CACV 271/2013 (Yuen, Barma JJA & Harris J; 11.01.2016)', 'Not simply an arguable defence, but one having a real likelihood of success'],
                  ['Costs', 'The usual order on a regular judgment', 'The defendant pays the plaintiff\'s costs of obtaining the default judgment and of setting it aside, because the plaintiff did nothing wrong'],
                ],
              },
            },
            notes: [
              {
                heading: 'Worked example: how a set-aside affirmation is built',
                body: 'The negligence case file in Batch B contains a complete set-aside application against a regular judgment, and its structure is worth copying because each section answers one limb of the test. The company\'s managing director deposes first to his authority and to the purpose of the affirmation, identifying both the interlocutory judgment and the later final judgment by date. He then explains the default: the company had moved its operations and left its former premises, correspondence sent to the old address was collected by a senior employee who concealed the proceedings, and the judgment came to his own attention only when enforcement was threatened. He fixes the date of that discovery precisely and shows that solicitors were instructed and the application issued within days of it. He then deals with a continuing default the episode exposed — the company had never filed notice of the change of its registered office — and exhibits proof that it has now been filed. Only then does he turn to the merits, taking each limb of the proposed defence in turn and exhibiting the material that supports it, before quantifying a counterclaim. A short second affirmation from the departed employee confirms the two paragraphs that only she could speak to.',
                bullets: [
                  'Note what the structure concedes: the service was good, so the application is squarely a discretionary one and the affirmation never argues otherwise.',
                  'Note where the effort goes: the explanation of the default and the merits get the space, because those are the two limbs the Court weighs.',
                  'Note the evidence discipline: every factual limb of the defence is tied to an exhibit, and matters outside the deponent\'s knowledge are sourced to the person who has it.',
                  'Note the costs: the defendant\'s own summons offers the costs of the application to the plaintiff in any event, which is the order the authorities lead to anyway.',
                ],
              },
            ],
            crossRefs: [
              { session: 'LG6', issue: 'regular-or-irregular', label: 'Is the default judgment regular or irregular?' },
              { session: 'LG6', issue: 'setting-aside-irregular', label: 'Setting aside an irregular judgment' },
              { session: 'LG6', issue: 'time-to-pay', label: 'Requesting time to pay, instalments and the stay of execution' },
              { session: 'LG4', issue: 'defence-counterclaim-and-reply', label: 'Defence, counterclaim and reply' },
              { session: 'LG4', issue: 'pleading-specifically-and-particulars', label: 'Pleading specifically and particulars' },
              { session: 'LG3', issue: 'serving-particular-parties', label: 'Serving particular kinds of party' },
            ],
          },
        ],
      },
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
        {
          topic: 'Commencing & Conducting a Civil Claim',
          items: [
            { front: 'Name the four ways to commence civil proceedings.', back: 'Writ of summons, originating summons, originating motion, or petition.' },
            { front: 'Why does it matter whether a claim is brought by writ or by originating summons?', back: 'A writ suits claims with substantial disputes of fact needing pleadings and discovery; an originating summons suits claims turning mainly on a point of law or construction, decided largely on affidavit evidence.' },
            { front: "What happens if a plaintiff doesn't reply to a defence within 28 days?", back: 'The plaintiff is deemed to have denied the allegations in the defence.' },
            { front: "What's the difference between discovery and exchange of witness statements?", back: 'Discovery discloses documentary evidence; exchange of witness statements discloses oral evidence.' },
            { front: 'When can multiple defendants be sued jointly?', back: 'Where they are jointly and severally liable for the same loss or damage.' },
            { front: "What can a company's board resolution evidence in litigation?", back: "The company's decision to authorise legal action — supporting its standing to sue." },
          ],
        },
        {
          topic: 'Mediation & Letters Before Action',
          items: [
            { front: 'Can a party be forced to mediate?', back: 'No — mediation is voluntary. But an unreasonable refusal to mediate can lead to adverse costs consequences, even for the party who wins at trial.' },
            { front: 'Why might you send materially different LBAs to two different potential defendants in the same matter?', back: "Because each recipient's relationship to the facts differs (e.g. vehicle owner vs driver) — the letter should be tailored to what each is actually alleged to have done, not sent as one identical form letter." },
            { front: 'What should you identify before starting to draft an LBA?', back: 'Its primary purpose (e.g. demanding payment) and any secondary purposes (e.g. preserving a business relationship, clarifying disputed facts) — these shape tone and content.' },
          ],
        },
      ],
      cloze: [
        {
          topic: 'Commencing & Conducting a Civil Claim',
          items: [
            { text: 'A civil claim can be commenced by one of four originating processes: writ of summons, originating summons, originating {{motion}}, or {{petition}}.' },
            { text: 'A {{writ of summons}} generally suits a claim with a substantial dispute of fact, while an {{originating summons}} suits a claim turning mainly on a point of law or construction.' },
            { text: 'After being served with a defence, the plaintiff may reply within {{28 days}} — if no reply is filed, the plaintiff is deemed to have {{denied}} every material allegation in the defence.' },
            { text: 'Multiple defendants can be sued jointly where they are {{jointly and severally liable}} for the same loss or damage.' },
            { text: 'Disclosing documentary evidence before trial is called {{discovery}}; disclosing oral evidence in advance is called {{exchange of witness statements}}.' },
            { text: "A company's written {{board resolution}} can evidence its decision to authorise litigation, supporting the company's standing to sue in its own name." },
            { text: 'Before commencing proceedings, always check the {{limitation period}} has not expired, since this can be a complete defence regardless of the merits.' },
          ],
        },
        {
          topic: 'Mediation & Letters Before Action',
          items: [
            { text: 'Mediation at the case-management stage is {{voluntary}} — the court cannot compel it, but an unreasonable refusal can still lead to adverse {{costs}} consequences, even for the winning party.' },
            { text: 'Before drafting an LBA, identify its primary purpose (e.g. demand payment) and any {{secondary purpose}}s (e.g. preserving the relationship, clarifying facts).' },
            { text: 'Before commencing proceedings, consider the limitation period, the proper court and parties, and any applicable pre-action {{protocol}} (e.g. PD18.1 for personal injury).' },
            { text: "An LBA sent to multiple potential defendants should be tailored to each recipient's own {{relationship}} to the facts, not sent as one identical letter." },
          ],
        },
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
        {
          topic: 'Professional Duties at Intake',
          items: [
            { front: 'What must a firm do before acting for a new client?', back: "Carry out conflict checks and due diligence — under the Law Society's Practice Direction P." },
            { front: "When does a solicitor's duty of confidentiality to a client begin?", back: 'From the initial interview — even before a formal retainer is signed.' },
            { front: "How seriously does the profession treat a solicitor's personal undertaking?", back: 'As a genuine professional obligation, not a mere promise — breaching an undertaking (e.g. one given to keep something confidential) is itself a conduct matter that can attract disciplinary consequences.' },
            { front: 'Why must conflict checks happen before, not after, taking instructions?', back: 'Because acting for a client despite an unresolved conflict is itself capable of being a breach of professional duty — the check has to come first to be meaningful.' },
          ],
        },
        {
          topic: 'Interviewing Technique',
          items: [
            { front: 'What is the purpose of an initial client interview?', back: "To obtain sufficient instructions to advise and act on the new matter — not simply to transcribe the client's story." },
            { front: "What questioning technique lets a client's account emerge in their own words?", back: 'Open questions early, narrowing to closed questions later to pin down specific facts.' },
            { front: "Why does a skilled interviewer look for the client's underlying objectives, not just their first-stated outcome?", back: 'Because the two can differ — a client may ask for one specific remedy while their real objective (e.g. preserving a relationship, minimising publicity) points to a different course of action.' },
            { front: "Why keep a client's account separate from your own legal analysis of it?", back: 'Conflating the two risks misrepresenting what the client actually said.' },
            { front: 'Why summarise next steps at the end of a client interview?', back: 'So the instructions taken are not left ambiguous, and the client knows what to expect to happen next.' },
          ],
        },
      ],
      cloze: [
        {
          topic: 'Professional Duties at Intake',
          items: [
            { text: "Before acting for a new client, a firm must carry out {{conflict}} checks and due diligence — under the Law Society's {{Practice Direction P}}." },
            { text: "A solicitor's duty of {{confidentiality}} to a client attaches from the {{initial interview}} — even before a formal retainer is signed." },
            { text: "A solicitor's personal undertaking (e.g. to keep information confidential) is treated as a serious professional {{obligation}} — breaching it is a conduct matter, not merely a broken promise." },
            { text: 'Conflict checks must be carried out {{before}} taking instructions on a new matter — acting for a client despite an unresolved conflict can itself be a breach of professional duty.' },
          ],
        },
        {
          topic: 'Interviewing Technique',
          items: [
            { text: 'The purpose of an initial client interview is to obtain sufficient {{instructions}} to advise and act on the new matter — not simply to transcribe the client\'s story.' },
            { text: 'Good interviewing technique favours {{open}} questions early, to let the client\'s account emerge in their own words, before narrowing to {{closed}} questions to pin down specific facts.' },
            { text: "A skilled interviewer identifies the client's underlying {{objectives}}, not just the specific outcome they first ask for — the two can differ." },
            { text: "When taking instructions, keep the client's own account separate from your {{legal analysis}} of it — conflating the two risks misrepresenting what the client actually said." },
            { text: 'Active listening in an interview includes reflecting back what the client has said in your own words, to confirm {{accuracy}} of understanding before moving on.' },
            { text: 'A good interview closes by summarising the {{next steps}} and what the client can expect to happen, so the instructions taken are not left ambiguous.' },
          ],
        },
      ],
      referenceIds: ['undertakingForm'],
      assessmentRef: 'assessment-interview',
    },
  },
};
