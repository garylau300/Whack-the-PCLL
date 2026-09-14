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
                'Any question giving you a date and a period — which is nearly every service question.',
                'The period is 7 days or less and the facts include a weekend, public holiday, typhoon or black rainstorm.',
                'A deadline lands on a day the Court office is closed.',
                'The period is for serving, filing or amending a pleading and August is in the window.',
                'A year or more has passed since the last step in the action.',
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
                'A writ or other originating process has to reach a defendant — start here every time.',
                'The writ went by registered post or through a letter box, and you need the date of service.',
                'The defendant was abroad when the writ was posted or inserted.',
                'A solicitor has indorsed the writ accepting service, or the defendant has filed an acknowledgement although service was defective.',
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
                      '(b) the affidavit proving due service must state (i) that in the deponent\'s opinion (or, if the deponent is P\'s solicitor or their employee, in P\'s opinion) the copy will have come to D\'s knowledge within 7 days thereafter; and (ii) for postal service, that the copy has not been returned to P through the post undelivered.',
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
                'The defendant is a limited company — then there are two competing routes with different deemed dates.',
                'The defendant is an overseas company, a firm sued in its own name, a minor, or a mentally incapacitated person.',
                'The defendant is abroad but contracted through a Hong Kong agent.',
                'The claim is for recovery or delivery of possession of premises or land.',
                'The contract itself prescribes a method of service.',
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
                'The defendant cannot be located, or evades the process server.',
                'There is no identifiable address and no letter box.',
                'A corporate defendant has no registered office.',
                'Repeated attempts at personal service have failed and the limitation period is running.',
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
                'The document is not a writ or other originating process — a summons, a pleading, a list of documents.',
                'A document was served late in the day, at a weekend or on a holiday.',
                'You need to prove service, or to know what the affidavit of service must contain.',
                'The defendant is in default of acknowledgement or has given no address for service.',
                'Service is proposed on a Sunday.',
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
                'Service was attempted by a method the rules do not permit, or on the wrong person or at the wrong place.',
                'The writ was left with a receptionist, a general counsel, or someone other than the person required.',
                'A writ was served out of the jurisdiction without leave having been obtained first.',
                'The defendant wants to complain about how service was effected.',
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
                'The defendant is abroad, or is a foreign company with no place of business in Hong Kong.',
                'A contract was made in Hong Kong or is governed by Hong Kong law, but the counterparty is overseas.',
                'A tort caused damage in Hong Kong but the tortfeasor is elsewhere.',
                'A foreign party needs to be joined to an action already on foot against a Hong Kong defendant.',
                'Service has to be effected in the Mainland or Macao.',
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
                      'r.1(1)(d) — a claim to enforce, rescind, dissolve, annul or otherwise affect a contract, or for damages or other relief for its breach, where the contract (i) was made within the jurisdiction, (ii) was made by or through an agent trading or residing within the jurisdiction for a principal trading or residing out of it, (iii) is by its terms or by implication governed by Hong Kong law, or (iv) contains a term that the Court of First Instance shall have jurisdiction.',
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
                      'O.11 r.4(1) prescribes what the affidavit must state: (a) the grounds on which the application is made; (b) that in the deponent\'s belief the plaintiff has a good cause of action; (c) in what place the defendant is, or probably may be found; and (d) where the application is under r.1(1)(c), the grounds for the deponent\'s belief that there is between the plaintiff and the person already served a REAL ISSUE which the plaintiff may reasonably ask the Court to try.',
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
                      'Hague Convention country — service may be through the authority designated under the Convention for that country, or, if that country\'s law permits, through its judicial authorities or a British consular authority: O.11 r.6(2A)(a)-(b).',
                      'Country with some other Civil Procedure Convention — through that country\'s judicial authorities, or through a British consular authority subject to any nationality restriction in the convention: O.11 r.6(2)(a)-(b).',
                      'No convention at all — through the government of that country where it is willing to effect service, or through a British consular authority except where that is contrary to local law: O.11 r.6(3)(a)-(b).',
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
                'The address for service given in the acknowledgement is not genuine.',
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
                      'The r.1(2A) application is ex parte to a Registrar, supported by an affidavit made by the director and filed with the application, stating and verifying the reasons why leave should be given; the board resolution authorising the director to appear must be exhibited to the affidavit: O.12 r.1(2A)(a)-(b).',
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
                      'The r.8(2A) grounds are set out expressly: (a) considering the best interests and convenience of the parties and witnesses, the proceedings should be conducted in another court; (b) the defendant is entitled to rely on an agreement to which the plaintiff is a party excluding the Court\'s jurisdiction; (c) other proceedings are pending between the same parties in another court on the same cause of action — and the limb is also open "on any other ground".',
                      'The two limbs are not exclusive of each other: a defendant served out may challenge the gateway under r.8(1) and seek a stay under r.8(2) in the same summons.',
                    ],
                  },
                  {
                    id: 'relief',
                    label: 'Ask for the right relief',
                    points: [
                      'Under r.8(1): (a) setting aside the writ or its service; (b) a declaration that the writ has not been duly served; (c) discharge of an order giving leave to serve out; (d) discharge of an order extending the writ\'s validity; (e) protection or release of seized property; (f) discharge of a freezing-type order; (g) a declaration that the Court has no jurisdiction over D in respect of the subject-matter, claim or relief; (ga) an order staying the proceedings; (h) such other relief as may be appropriate.',
                      'Under r.8(2): (a) a declaration that the Court should not exercise any jurisdiction it may have; (b) an order staying the proceedings; (c) such other relief as may be appropriate, including the relief in r.8(1)(e) or (f).',
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
