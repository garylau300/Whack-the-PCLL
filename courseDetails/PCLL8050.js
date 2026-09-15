// Criminal Litigation (PCLL8050) -- see PCLL8010.js's header for the
// conventions this file follows (courseDetails is split one file per
// course; each just extends the same window.COURSE_DETAILS).
//
// Scope note: the course the Faculty calls the "Criminal Litigation Core
// Practice Course" is three subjects. Criminal Procedure and Criminal
// Litigation are taught together and assessed together as one 50%
// component -- that combined component is what PCLL8050 is, and what this
// file covers. Criminal Advocacy is the other 50% and is a separate
// timetable course (PCLL8051), so its assessment lives with that code, not
// here. The marks below are therefore out of 50, as the outline states
// them, not renormalised to 100.
window.COURSE_DETAILS = window.COURSE_DETAILS || {};
window.COURSE_DETAILS.PCLL8050 = {
  name: 'Criminal Litigation',
  // Short tag for the derived issue codes (e.g. CRM-LG5.02) — see issueCode
  // in common-core.js. Must be unique across courses.
  codePrefix: 'CRM',

  coordinators: [
    { name: 'Alex Norton', hours: 'Course coordinator — Criminal Procedure', email: 'anorton@hku.hk' },
    { name: 'Amanda Whitfort', hours: 'Course coordinator — Criminal Litigation', email: 'whitfort@hku.hk' },
    { name: 'Hugo Siu', hours: 'Assisting — FT & PT course', email: '' },
    { name: 'Fanny Tang', hours: 'Assisting — FT & PT course', email: '' },
  ],

  learningOutcomes: [
    'Have knowledge of the criminal court structure in Hong Kong, the jurisdiction of the various courts and the procedural rules that apply at each stage of a criminal case',
    'Have knowledge of the powers of police, including the power to stop, detain and search, the power of arrest and the ways in which criminal proceedings can be commenced',
    'Understand the different types of bail, the procedural rules surrounding the grant or refusal of bail, and the bail conditions imposed in practice',
    'Understand how the classification of offences affects venue, and have knowledge of the rules for drafting criminal charges',
    'Understand the procedures for transfer to the District Court or committal to the Court of First Instance, and the procedures in the trial courts',
    'Understand how a matter progresses through the criminal courts in Hong Kong, from inception and investigation through to sentencing, costs and disposal',
    'Be fully aware of the rights of a client and how to defend those rights at both the pre-trial and trial stages — including negotiating with the Prosecution, making a No Case to Answer submission and challenging the admissibility of a confession',
    'Understand aspects of the trial process including pre-trial reviews, disclosure, identification, drafting ss.65B and 65C admissions, examination of witnesses, the procedures for vulnerable witnesses and evidential issues at trial',
    'Be able to consider the applicable substantive law as well as the practical and tactical considerations of the options available at each stage of a typical criminal litigation',
    'Have knowledge of sentencing policies and practices and the types of sentence imposed in the different courts — including tariff / guideline cases, consecutive and concurrent sentences, the totality principle, sentencing young offenders, mitigating and the Sivan Procedure',
    'Understand the procedural aspects of the National Security Law, the Articles of the Basic Law as they relate to it and the Safeguarding of National Security Ordinance, including how certain criminal procedures differ where those provisions apply',
    'Understand the review process in the Magistrates\' Court, the methods of appeal from the Magistrates\' Court, District Court, Court of First Instance and Court of Appeal, and the powers of the appellate court',
    'Be able to advise a client on bail, venue, trial procedures, pleading guilty or not guilty, giving evidence, sentencing, costs and appeals',
    'Develop the skills essential for practice as a criminal litigator: researching, advising, drafting and negotiating',
    'Be familiar with the documents in a typical criminal case file, and appreciate the importance of good file and time management',
    'Be able to undertake basic criminal drafting tasks — a letter of advice to the client, an O.N.E. bind over letter, a brief to counsel, a notice of objection to the admissibility of a confession, a research memorandum on grounds of appeal, and court documents such as s.65C admitted facts',
    'Recognise the ethical issues that frequently arise at each phase of a criminal case',
  ],

  materials: [
    'SET TEXT — A. Whitfort, Criminal Procedure in Hong Kong: A Guide for Students and Practitioners (3rd Edition, 2020), LexisNexis',
    'C. Liu, Criminal Procedure in Hong Kong (3rd Edition, 2026), Sweet & Maxwell',
    'K. Bokhary, S. Young, G. Cross, Archbold Hong Kong: Criminal Law, Pleadings, Evidence & Practice (2025), Sweet & Maxwell — the leading practitioner text, online via Westlaw Asia',
    'Cross & Cheung, Sentencing in Hong Kong (12th Edition, 2026) — the Appendix summarises sentences for common offences; a starting point only, read the cases themselves',
    'S. So, C. Knight & A. Upham, Criminal Litigation in Hong Kong (4th Edition, 2021), Sweet & Maxwell',
    'A. Bruce, Criminal Procedure: Trial on Indictment (updated three times a year), LexisNexis',
    'A. Bruce & G. McCoy, Criminal Evidence in Hong Kong (updated four times a year), LexisNexis',
    'Corns, Criminal Appeals in Hong Kong (2019), Sweet & Maxwell',
    'Case files: HKSAR v Jeff Sham (wounding) and HKSAR v Willy Ma (indecent assault), both on Moodle; HKSAR v John Lace is distributed in SGS 6',
  ],

  materialsNotes: [
    'READ IN FULL — High Court Ordinance (Cap. 4); Criminal Procedure Ordinance (Cap. 221); Magistrates\' Ordinance (Cap. 227); District Court Ordinance (Cap. 336); Police Force Ordinance (Cap. 232) ss.1-10 and 50-63; Costs in Criminal Cases Ordinance (Cap. 492). Reading only the section creating the charged offence, and not the Ordinance as a whole, is the mistake the outline warns against.',
    'BE FAMILIAR WITH — the Basic Law; Community Service Orders Ordinance (Cap. 378); Costs in Criminal Cases Rules (Cap. 492A); Court Proceedings (Electronic Technology) Ordinance (Cap. 638); Courts (Remote Hearings) Ordinance (Cap. 654); Criminal Appeal Rules (Cap. 221A); Detention Centres Ordinance (Cap. 239); Drug Addiction Treatment Centres Ordinance (Cap. 244); High Court Practice Directions; Hong Kong Bill of Rights (Part II of Cap. 383); Hong Kong Court of Final Appeal Ordinance (Cap. 484); Indictment Rules (Cap. 221C); Juvenile Offenders Ordinance (Cap. 226); Limitation Ordinance (Cap. 347); Probation of Offenders Ordinance (Cap. 298); Training Centres Ordinance (Cap. 280); Rehabilitation Centres Ordinance (Cap. 567); Rehabilitation of Offenders Ordinance (Cap. 29).',
    'NATIONAL SECURITY PROVISIONS — the NSL (see also Annex III and Arts 18 and 23 of the Basic Law); the Implementation Rules for Art 43 NSL (in effect 7 July 2020); the Safeguarding National Security Ordinance (in effect 23 March 2024). References in the course materials are to the English translation on the government website.',
    'ALSO POSSIBLY RELEVANT — Crimes Ordinance (Cap. 200); Dangerous Drugs Ordinance (Cap. 134); Firearms & Ammunition Ordinance (Cap. 238); Fixed Penalty (Criminal Proceedings) Ordinance (Cap. 240); Interpretation & General Clauses Ordinance (Cap. 1); Legal Aid Ordinance (Cap. 91); Offences against the Person Ordinance (Cap. 212); Organized & Serious Crimes Ordinance (Cap. 455); Prevention of Bribery Ordinance (Cap. 201); Theft Ordinance (Cap. 210).',
    'RULES, GUIDELINES AND POLICIES to read in full — the 1992 Rules & Directions for the Questioning of Suspects and the Taking of Statements (a breach may be a ground to exclude a confession; note the courts still rely on the 1992 R&Ds rather than the 2012 internal police version); the Prosecution Code 2013; the Victims of Crime Charter; the Statement on the Treatment of Victims and Witnesses (2009); the relevant Practice Directions and the Specimen Directions in Jury Trials (2025, with the February and May 2026 updates), all on the Judiciary website.',
    'The individual LGS notes say which provisions of each Ordinance to review. Copies of the R&Ds, Prosecution Code, Victims Charter and Statement are on Moodle; the Practice Directions are not.',
    'All the listed books can be read in the Law Library or online through an HKU Library account; some are in the Reserve Collection for 3-hour loans.',
  ],

  assessments: [
    { title: 'Coursework 1 — Letter of Advice to the Client', weight: '6 / 50', dateLabel: 'Submitted in SGS 4', note: 'Drafted after SGS 2. Marked against the "Guidelines" marksheet on Moodle.' },
    { title: 'Coursework 2 — O.N.E. Bind Over Letter', weight: '6 / 50', dateLabel: 'Submitted in SGS 4', note: 'Drafted after SGS 2. Marked against the "Guidelines" marksheet on Moodle.' },
    { title: 'Coursework 3 — Brief to Counsel', weight: '6 / 50', dateLabel: 'Submitted in SGS 5', note: 'Drafted after SGS 4. Marked against the "Guidelines" marksheet on Moodle.' },
    { title: 'Research Preparation Exercise (RPE) — Notice of Objection to the Admissibility of a Confession', weight: '5 / 50', dateLabel: 'Issued about one week before the exam', note: 'Take-home; must be submitted on Moodle BEFORE the exam.' },
    { title: 'In-hall Examination — Memorandum of Advice on Grounds of Appeal', weight: '27 / 50', dateLabel: 'Provisionally 12 December 2026', note: 'Open book, likely computer-based. Expands on the RPE fact pattern; drafted as a trainee solicitor advising a partner.' },
  ],

  assessmentNotes: [
    'The 50 marks above are the Criminal Procedure & Criminal Litigation component, which is 50% of the Criminal Litigation Core Practice Course. Criminal Advocacy is the other 50% and is assessed separately.',
    'You must pass BOTH components to pass the Core Practice Course as a whole: a cumulative 25/50 here, and a pass in Criminal Advocacy. Failing one means re-sitting only that component.',
    'Within this component there is no need to pass the exam and the coursework separately — the combined mark from all five assessments above must reach 25/50.',
    'Coursework marks are given to you before the written exam, but they are preliminary: they may be adjusted on second marking.',
    'The Supplemental Examination (RPE and exam) is held the following August. Coursework marks are carried forward and are not resubmitted, but a new fact pattern is set for the RPE and exam.',
    'Review the "Guidelines" marksheet for each drafting exercise before you start drafting — those Guidelines are the criteria you are marked against. There is also an overall Coursework Mark Sheet, and a marksheet for the RPE, all on Moodle.',
    'All content delivered on the course is examinable, including the two guest lectures by Mr David Leung SC, the former DPP.',
  ],

  sessions: {
    // Pre-recorded — the timetable gives this entry no `no` of its own, so
    // it is matched back to this key by `preRecordedTopic` (see
    // preRecordedSessionKey in common-core.js) rather than by a session
    // number. Watch it before LGS 1.
    LG0: {
      kind: 'LG',
      preRecordedTopic: 'Criminal Litigation Introduction - Introduction to the Course',
      mode: 'Pre-recorded (Moodle)',
      time: 'To be watched before LGS 1',
      authors: ['Alex Norton'],
      objectives: [
        'Understand how Criminal Procedure and Criminal Litigation are taught and assessed as one combined component.',
        'Know what the LGS and SGS each cover, and what preparation each requires.',
        'Know the assessment structure — three coursework exercises, the Research Preparation Exercise and the in-hall exam — and the marks attached to each.',
        'Identify the set text, the key Ordinances and the rules and codes to read at the outset.',
      ],
      topicsCovered: [
        'Overview of the Criminal Procedure & Criminal Litigation course',
        'Course structure: 15 LGS (a mixture of live and pre-recorded) plus 2 guest lectures, and 8 SGS',
        'How the two subjects interlock — procedure in an LGS, consolidated in a litigation LGS, applied in an SGS',
        'The three SGS case files: HKSAR v Jeff Sham, HKSAR v Willy Ma and (from SGS 6) HKSAR v John Lace',
        'Assessments: coursework, the Research Preparation Exercise and the written exam',
        'Texts, key Ordinances and the rules, codes and charters to review',
      ],
      keyTakeaways: [
        'Criminal Procedure and Criminal Litigation are one assessed component worth 50 marks; Criminal Advocacy is a separate 50 and both must be passed.',
        'Watch the pre-recorded LGS in the timetabled order — each LGS is built on the one before it, and the SGS tasks assume you have.',
        'Three drafting exercises are assessed coursework: the Letter of Advice, the O.N.E. Bind Over Letter and the Brief to Counsel.',
        'The exam is two parts: a take-home Notice of Objection (5 marks) and an in-hall Memorandum of Advice on grounds of appeal (27 marks).',
        'Read the "Guidelines" marksheet for a drafting exercise before drafting it — it is the marking criteria.',
      ],
      prep: {
        readings: [
          'This course introduction (the Course Introduction notes and slides on Moodle)',
          'A. Whitfort, Criminal Procedure in Hong Kong (3rd Edition, 2020) — the set text',
          'Criminal Procedure Ordinance (Cap. 221), Magistrates\' Ordinance (Cap. 227), District Court Ordinance (Cap. 336), Police Force Ordinance (Cap. 232) and Costs in Criminal Cases Ordinance (Cap. 492), in full',
          'The 1992 Rules & Directions, the Prosecution Code 2013, the Victims of Crime Charter and the Statement on the Treatment of Victims and Witnesses (2009)',
          'Your LGS 1 materials — The Criminal Courts in Hong Kong and the Role of the Prosecution',
        ],
      },
      prepChecklist: [
        { id: 'watch-intro', label: 'Watch the pre-recorded course introduction before LGS 1' },
        { id: 'set-text', label: 'Obtain the set text (Whitfort, 3rd Edition 2020) — purchase or library' },
        { id: 'read-cpo', label: 'Read the Criminal Procedure Ordinance (Cap. 221) in full' },
        { id: 'read-mo', label: 'Read the Magistrates\' Ordinance (Cap. 227) in full' },
        { id: 'read-dco', label: 'Read the District Court Ordinance (Cap. 336) in full' },
        { id: 'read-pfo', label: 'Read the Police Force Ordinance (Cap. 232), ss.1-10 and 50-63' },
        { id: 'read-ccco', label: 'Read the Costs in Criminal Cases Ordinance (Cap. 492) in full' },
        { id: 'read-rd', label: 'Read the 1992 Rules & Directions in full' },
        { id: 'read-code', label: 'Read the Prosecution Code 2013, the Victims of Crime Charter and the 2009 Statement' },
        { id: 'case-files', label: 'Download the Jeff Sham and Willy Ma case files from Moodle' },
        { id: 'lgs1', label: 'Review the LGS 1 materials before LGS 1' },
      ],
      notes: [
        {
          heading: 'How the course is put together',
          bullets: [
            'Criminal Procedure and Criminal Litigation overlap heavily and are taught together across 15 LGS and 8 SGS in the first semester, plus 2 guest lectures.',
            'The sequence is deliberate: the rules are introduced in a Criminal Procedure LGS, consolidated in a practical context in a Criminal Litigation LGS, then applied to a problem in an SGS.',
            'Of the 15 LGS: 7 on Criminal Procedure (including one on the NSL), 3 on Criminal Litigation, 4 on past papers and exam technique, and a final revision LGS.',
            'The NSL is covered in its own LGS this year, looking at how the National Security Provisions differ procedurally. The new offences and the underlying substantive law are outside the scope of this course.',
            'Some live LGS are followed by supplemental recorded videos; the timetable or the lecturer will say when to watch them.',
          ],
        },
        {
          heading: 'The three case files',
          bullets: [
            'HKSAR v Jeff Sham — a wounding case, followed from inception through to disposal, with the typical documents at each stage. You get the whole file at the outset, but an SGS task may relate only to the file at one point in time, so follow the instructions on which documents to review.',
            'HKSAR v Willy Ma — an indecent assault case, used for advising on plea bargaining, the appropriateness of the charge and grounds of appeal. The file is released progressively rather than all at once.',
            'HKSAR v John Lace — distributed in SGS 6; everything needed is given at the time.',
          ],
        },
        {
          heading: 'Skills of the criminal practitioner',
          bullets: [
            'Research.',
            'Thorough knowledge of the applicable evidential and procedural rules.',
            'Application of those rules in practice.',
            'Communication.',
            'Analysis and problem solving.',
            'Advising.',
            'Negotiating.',
            'Drafting.',
            'Advocacy.',
          ],
        },
        {
          heading: 'Questions about the course',
          bullets: [
            'Questions about the course, the LGS content or the assessments go on the Moodle Discussion Forum, so the answer reaches everyone — not to the coordinators individually.',
            'Questions about an SGS go to your tutor during class.',
            'Administrative matters go to ftpcll@hku.hk (full-time) or ptpcll@hku.hk (part-time).',
          ],
        },
      ],
    },

    // LGS and SGS outlines as given in the Course Introduction. These are the
    // scope of each session, not notes on it -- the substantive notes get
    // authored per session later, in the examNotes format.
    LG1: {
      kind: 'LG', mode: 'Live', authors: ['Alex Norton'],
      topicsCovered: [
        'The fundamental rights of a Defendant',
        'A brief overview of criminal proceedings in Hong Kong',
        'The criminal court structure in Hong Kong, including Juvenile Courts',
        'Jurisdiction and powers of the criminal courts, including sentencing powers',
        'Role of the Prosecution and duties of Prosecutors — the Prosecution Code and the Victims Charter',
        'Duty Lawyer Service and Legal Aid',
      ],
    },
    LG2: {
      kind: 'LG', mode: 'Live', authors: ['Alex Norton'],
      topicsCovered: [
        'An overview of the criminal investigation process',
        'Police powers at common law and under the Police Force Ordinance — stop, detain, search, arrest, bail and questioning suspects',
        "Citizen's power of arrest",
        'Arrest-related issues, including the rights of an arrested person',
        'The 1992 Rules and Directions',
        'The decision to prosecute',
        'Limitation periods',
        'Methods of commencing proceedings, including private prosecutions',
        "A Defendant's first appearance in the Magistrates' Court",
        'Bail — the procedural rules (bail is also covered in Criminal Advocacy)',
      ],
    },
    LG3: {
      kind: 'LG', mode: 'Pre-recorded (Moodle)', authors: ['Amanda Whitfort'],
      topicsCovered: [
        "The role and duties of the lawyer on a client's arrest",
        'Negotiating with the OC case / Prosecution regarding the charges',
        'Attendance with the client on arrest',
        "Defendant's rights on arrest",
        "Lawyer's responsibilities following the first meeting with the client",
        'Classification of offences and venue',
        'Drafting the charges — the Indictment Rules and the rules against duplicity, joinder and severance',
        "Magistrates' Court: from first appearance to bail to taking plea",
        'Transfer to the District Court',
        'Committal to the Court of First Instance',
      ],
    },
    LG4: {
      kind: 'LG', mode: 'Pre-recorded (Moodle)', authors: ['Amanda Whitfort'],
      topicsCovered: [
        "Practical tips on negotiating with the Prosecution — not prosecuting, amending or dropping a charge in exchange for a guilty plea, and O.N.E. Bind Overs",
        'An overview of the criminal trial process in a jury trial, from arraignment through to verdict and sentencing, from a practitioner\'s perspective',
      ],
    },
    LG5: {
      kind: 'LG', mode: 'Live', authors: ['Alex Norton'],
      topicsCovered: [
        'Negotiating with the Prosecution — O.N.E. Bind Overs, charge bargaining, plea bargaining and amending the Brief Facts',
        'Drafting a letter of advice to the client — tips for your coursework',
        'Drafting an O.N.E. Bind Over letter — tips for your coursework',
        'Ways the Prosecution may decide not to proceed: withdrawing the charge, offering no evidence, nolle prosequi, leaving the charge on file, offences taken into consideration',
        'Advising on plea, including a guilty plea and withdrawing a guilty plea',
        'Newton Inquiry',
        'An overview of the trial — opening, examination in chief, cross-examination, re-examination and closing; directions to the jury, the summing up, verdict and disposal of exhibits',
        "The Defence case: the Defendant's right of silence, the decision whether to testify, and loss of the shield under s.54(1)(f) CPO",
        'Similar fact evidence',
        'SUPPLEMENTS (recorded, to watch after LGS 5 and before LGS 6) — (1) types of special plea, Case Management Conferences and Pre-trial Reviews in the Magistrates\' Court, District Court and Court of First Instance; (2) applications to stay proceedings',
      ],
    },
    LG6: {
      kind: 'LG', mode: 'Live', authors: ['Alex Norton'],
      topicsCovered: [
        "The Prosecution's duty of disclosure — legal professional privilege and public interest immunity",
        "The Defence's duty of disclosure — alibis and expert evidence",
        's.65B and s.65C admissions',
        'Witness protections and the vulnerable witness provisions',
        'Remote testimony from outside Hong Kong',
        's.79F Notice of Transfer',
        'Voir dire and the alternative procedure',
        'Identification and the ID parade, including the role of the legal representative at a parade',
        'No Case to Answer submissions',
      ],
    },
    LG7: {
      kind: 'LG', mode: 'Pre-recorded (Moodle)', authors: ['Amanda Whitfort'],
      topicsCovered: [
        'Pre-trial issues: dealing with disclosure and expert evidence',
        'Case preparation: instructing Counsel and expert witnesses',
        'Drafting a Brief to Counsel and a Proof of Evidence',
        'ss.65B and 65C — practical tips and drafting Admitted Facts',
        'Issues at trial: developing a trial strategy',
        'Drafting a Notice of Objection to the Admissibility of Evidence',
      ],
    },
    LG8: {
      kind: 'LG', mode: 'Live', authors: ['Alex Norton'],
      topicsCovered: [
        'Sentencing principles and the sentencing regime in Hong Kong',
        'Duties of Counsel on sentencing',
        'Sentencing policies and practices — tariff / guideline cases, consecutive and concurrent sentences, the totality principle, s.109A CPO',
        'Types of sentence, including for juvenile and adult offenders',
        'Mitigating and aggravating factors',
        'Enhancement of sentences, including under OSCO',
        'Pre-sentencing reports',
        'Plea in mitigation (briefly — largely covered in Criminal Advocacy)',
        'The Sivan Procedure',
      ],
    },
    LG9: {
      kind: 'LG', mode: 'Live', authors: ['Alex Norton'],
      topicsCovered: [
        'A brief introduction to the NSL, Arts 18 and 23 of the Basic Law and the Safeguarding of National Security Ordinance — collectively the National Security Provisions',
        'How the National Security Provisions differ from general Hong Kong criminal proceedings in the context of arrest, search and seizure, the grant of police and court bail, the trial process, disclosure, sentencing and appeals',
      ],
    },
    LG10: {
      kind: 'LG', mode: 'Live', authors: ['Alex Norton'],
      topicsCovered: [
        "Review under s.104 Magistrates' Ordinance",
        'Appeals from the Magistrates\' Court, District Court and Court of First Instance, including the procedural formalities',
        "The Defendant's right of appeal against conviction and sentence",
        "The Prosecution's right of appeal",
        "The Secretary for Justice's review of sentence",
        'Powers of the appellate court',
        'Dismissing or allowing an appeal, and other consequential orders',
        'Bail pending appeal',
        'Fresh evidence on appeal',
        'Loss of time',
        'Appeals to the Court of Final Appeal',
      ],
    },
    LG11: {
      kind: 'LG', mode: 'Pre-recorded (Moodle)', authors: ['Amanda Whitfort'],
      topicsCovered: [
        'Exam preparation — review of a past paper focusing on a Letter to the Client',
        'Advice on whether to appeal against conviction, sentence and costs',
        'Procedural aspects and the formalities for appealing',
      ],
    },
    LG12: {
      kind: 'LG', mode: 'Pre-recorded (Moodle)', authors: ['Amanda Whitfort'],
      topicsCovered: [
        'Exam preparation — review of a past paper focusing on a Memo of Advice to a partner in a law firm',
        'Advice on whether to appeal against conviction, sentence and costs',
        'Procedural aspects and the formalities for appealing',
      ],
    },
    LG13: {
      kind: 'LG', mode: 'Pre-recorded (Moodle)', authors: ['Amanda Whitfort'],
      topicsCovered: [
        'Exam preparation — review of several past papers',
        'Drafting a Notice of Objection to the Admissibility of a Confession',
        'Drafting a Memorandum of Advice on grounds of appeal',
      ],
    },
    LG14: {
      kind: 'LG', mode: 'Pre-recorded (Moodle)', authors: ['Alex Norton'],
      topicsCovered: [
        'Consolidation of feedback from trainers across SGS 1-8',
        'Review of the main errors in Criminal Litigation drafting',
        'Review of the main errors in Criminal Procedure problem questions',
        'A selection of past papers, with drafting and exam tips',
      ],
    },
    LG15: {
      kind: 'LG', mode: 'Live', authors: ['Alex Norton'],
      topicsCovered: [
        'Revision LGS — flipped classroom, students as teachers',
        "Students may submit an answer to last year's exam question before the LGS for marking and feedback; one or two are chosen for discussion",
        'Mentimeter questions on revision',
      ],
    },
    SG1: {
      kind: 'SG', skills: 'Criminal Procedure',
      topicsCovered: [
        'Police powers of stop, detention, search, seizure and arrest',
        "A citizen's power of arrest",
        'The steps to take on a refusal of bail',
        "Procedures on a first appearance in the Magistrates' Court",
        'The 1992 Rules & Directions and the consequences of breaches of procedure',
        'Conducting a legal visit',
        "The Prosecution's approach to prosecuting a suspected offence",
      ],
    },
    SG2: {
      kind: 'SG', skills: 'Criminal Litigation',
      topicsCovered: [
        'Introduction to a criminal litigation case file',
        'Researching criminal charges',
        'Advising a client',
        'Interviewing a client to take instructions for an O.N.E. Bind Over letter',
        'AFTER SG2 — two assessed coursework exercises to complete for SGS 4: the Letter of Advice to the Client and the O.N.E. Bind Over Letter',
      ],
    },
    SG3: {
      kind: 'SG', skills: 'Criminal Procedure & Criminal Litigation',
      topicsCovered: [
        "Criminal Procedure — protecting a client's rights at the police station",
        'Searching the digital contents of a phone',
        'Procedures for transfer to the District Court or committal to the Court of First Instance',
        'Discharge following a preliminary inquiry, or a s.16 discharge',
        'Criminal Litigation — developing a case theory: analysing the Prosecution and Defence cases, and negotiating to amend the charge',
      ],
    },
    SG4: {
      kind: 'SG', skills: 'Criminal Procedure & Criminal Litigation',
      topicsCovered: [
        "Criminal Procedure — introducing a Defendant's previous convictions or acquittals into evidence",
        'Procedures for dealing with vulnerable witnesses',
        'Identification parades',
        'Applications for a permanent stay of proceedings',
        'Criminal Litigation — drafting a Brief to Counsel',
        'AFTER SG4 — one assessed coursework exercise to complete for SGS 5: the Brief to Counsel',
      ],
    },
    SG5: {
      kind: 'SG', skills: 'Criminal Litigation',
      topicsCovered: [
        'Further case analysis and responding to client queries',
        'Considering whether to agree to s.65B requests',
        'Reviewing and drafting s.65C Admitted Facts',
        'Analysing whether the Defendant should testify',
      ],
    },
    SG6: {
      kind: 'SG', skills: 'Criminal Litigation',
      topicsCovered: [
        'Role of the Prosecutor and the duties of disclosure',
        'No Case to Answer submissions',
        'Trial strategies, including whether a witness who is overseas can testify',
        'Cautioned statements, voir dires and the alternative procedure',
        'Drafting a Notice of Objection to the Admissibility of a Confession',
        'The HKSAR v John Lace case file is distributed in this session',
      ],
    },
    SG7: {
      kind: 'SG', skills: 'Criminal Procedure',
      topicsCovered: [
        'Questions across all areas of the Criminal Procedure course',
        'Sentencing and costs in particular',
        'Reviews and appeals against conviction and sentence',
      ],
    },
    SG8: {
      kind: 'SG', skills: 'Criminal Litigation',
      topicsCovered: [
        'Identifying and advising upon grounds of appeal against conviction, sentence and costs',
        'Drafting a memorandum of advice from a trainee solicitor to a partner, advising on grounds of appeal',
      ],
    },
  },
};
