// Legal-skills content modeled on the categories in Anthropic's claude-for-legal
// repo (github.com/anthropics/claude-for-legal), specifically its law-student
// plugin: a Socratic question, an IRAC-structure reminder, and a practical
// skill tip. That plugin runs as interactive Claude Code skills — this is a
// static, hand-written set in that same spirit for a personal study site
// (no API, no live calls), one set per PCLL core course plus a generic
// fallback for days with no relevant class.
window.LEGAL_SKILLS = {
  PCLL8010: [ // Civil Litigation
    { type: 'Socratic Question', text: "Your client wants to sue for breach of contract, but the limitation period expired 8 months ago. What's your first move — and what do you need to know before you can even say the claim is time-barred?" },
    { type: 'IRAC Reminder', text: "Drafting a Statement of Claim: state each cause of action's Issue precisely, plead every element of the Rule (duty, breach, causation, loss...), keep Application to material facts (not evidence), and let the Conclusion mirror the relief claimed." },
    { type: 'Skill Tip', text: "Before any client interview, prepare a chronology and the list of elements you need to establish — let the client's narrative fill the gaps rather than leading with your legal theory." },
  ],
  PCLL8020: [ // Corp & Com Transactions
    { type: 'Socratic Question', text: "Your client is buying 100% of a target's shares. Why might they prefer a share sale over an asset purchase — and what liability comes along for the ride that an asset deal would leave behind?" },
    { type: 'IRAC Reminder', text: "Shareholders'-agreement problems: Issue = which right is in dispute (drag-along, pre-emption...), Rule = the actual clause plus the Companies Ordinance default position, Application = read the clause against the facts, Conclusion = what each side can and can't do." },
    { type: 'Skill Tip', text: "Reviewing financial statements, reconcile the balance sheet against the profit and loss account before advising — a single year's numbers rarely tell the whole story." },
  ],
  PCLL8030: [ // Property Transactions
    { type: 'Socratic Question', text: "Title investigation turns up an unregistered charge from 15 years ago. Does it bind your buyer client — and does that change if it was registered but the search missed it?" },
    { type: 'IRAC Reminder', text: "Title-defect questions: Issue = does the defect affect marketability, Rule = the relevant land law principle (notice, indefeasibility...), Application = the actual search/discovery facts, Conclusion = can completion proceed, and what requisition or indemnity is needed." },
    { type: 'Skill Tip', text: "Diarise every deadline in the Agreement the moment it's signed — completion, requisitions, and deposit dates are the ones most often missed under time pressure." },
  ],
  PCLL8040: [ // Professional Practice & Management
    { type: 'Socratic Question', text: "A client tells you something in confidence that suggests they're about to mislead the court. Where does your duty to the client end and your duty to the court begin?" },
    { type: 'IRAC Reminder', text: "Conduct problems rarely turn on one rule — identify every duty in play (client, court, profession, third parties), then work out which overrides which when they conflict, citing the specific Code provision." },
    { type: 'Skill Tip', text: "When in doubt about a conflict of interest, write down exactly whose interests are affected and how, before deciding — the analysis is usually clear once it's on paper, even if the answer isn't." },
  ],
  PCLL8050: [ // Criminal Litigation
    { type: 'Socratic Question', text: "Your client was cautioned mid-interview but kept answering without a solicitor present. Is that admissible — and what would you need to show to get it excluded?" },
    { type: 'IRAC Reminder', text: "Bail applications: Issue = should bail be granted, Rule = the statutory presumption and recognised factors (flight risk, further offences, witness interference), Application = this client's ties/record/offence severity, Conclusion = conditions that answer the prosecution's actual objections, not generic ones." },
    { type: 'Skill Tip', text: "Draft a plea in mitigation around the sentencing guideline's own stated factors, in its own language — a judge should be able to tick your mitigation off against the framework they're already using." },
  ],
  ADVOCACY: [ // Criminal/Civil Advocacy (PCLL8051, PCLL8104/PCLL8014)
    { type: 'Socratic Question', text: "Your witness just contradicted their own statement under cross-examination. Do you re-examine on it immediately, or save it for closing — and why?" },
    { type: 'IRAC Reminder', text: "Structure oral submissions like IRAC out loud: the issue for the court first, then the rule, then apply it to these facts, then land the conclusion — judges lose patience with advocates who lead with facts and bury the point." },
    { type: 'Skill Tip', text: "Never ask a cross-examination question you don't already know the answer to — if you're not sure, that's a question for submissions, not for the witness." },
  ],
  GENERIC: [
    { type: 'Skill Tip', text: "Read every LG outline on Moodle before the related SG — the SG assumes you've already done the thinking, not that you'll do it live in the room." },
    { type: 'Socratic Question', text: "Pick any case from this week's reading: what's the one fact that, if it were different, would flip the outcome? That's usually the fact the exam question will change." },
    { type: 'IRAC Reminder', text: "Whatever the subject, the discipline is the same: pin down the Issue before you touch the Rule, and don't let Application become a restatement of the facts — it has to connect fact to rule." },
    { type: 'Skill Tip', text: "No class today is a normal day, not a free one — it's the day the pre-recorded LGs and reading actually get done before they pile up." },
  ],
};
