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
                { text: 'Where, in beginning or purporting to begin any proceedings or at any stage in the course of or in connection with any proceedings, there has, by reason of any thing done or left undone, been a failure to comply with the requirements of these rules, the failure shall be treated as an irregularity and shall not nullify the proceedings or any step taken in the proceedings.', cite: 'O.2 r.1, Rules of the High Court (Cap. 4A)' },
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
