// Property Transactions (PCLL8030) -- see PCLL8010.js's header for the
// conventions this file follows (courseDetails is split one file per
// course; each just extends the same window.COURSE_DETAILS).
window.COURSE_DETAILS = window.COURSE_DETAILS || {};
window.COURSE_DETAILS.PCLL8030 = {
  name: 'Property Transactions',
  // Short tag for the derived issue codes (e.g. PRP-LG4.11) — see issueCode
  // in common-core.js. Must be unique across courses.
  codePrefix: 'PRP',

  coordinators: [
    { name: 'Alwin Chan', email: 'alwinwh@hku.hk' },
    { name: 'Henry Chung', email: 'hchung88@hku.hk' },
  ],

  // The course's own statement of what the six SGS require and the skills
  // they cover, from the SGS/Assessment memorandum of 1 September 2026.
  learningOutcomes: [
    'Write on the legal and/or ethical issues involved in property transactions — required in all six Small Group Sessions',
    'Interpret and analyse case law and statutes, such as the Conveyancing and Property Ordinance (Cap. 219)',
    'Interpret and analyse transaction documents, such as the provisional Agreement for Sale and Purchase and the formal Agreement for Sale and Purchase',
    'Interpret and analyse fact scenarios arising at the different stages of a typical Hong Kong property transaction',
    'Research the relevant legal principles and apply them to the relevant facts and/or documents in property transactions',
  ],

  // Weightings and scope are from the coordinators' memorandum; the dates
  // are the timetable's own "Assessment I/II (Provisional)" PCLL8030
  // entries, hence the Provisional label (same convention as PCLL8020).
  assessments: [
    { title: 'Property Paper I', weight: '20%', dateLabel: '16 December 2026 (Provisional)', note: 'Open book. Examines only the material covered in LG1–LG10 — the conveyancing chain, from Government Lease through to Assignment.' },
    { title: 'Property Paper II', weight: '80%', dateLabel: '4 January 2027 (Provisional)', note: 'Open book. Covers the entire course, including the LG11–LG14 stamp duty, tax and probate material.' },
  ],
  assessmentNotes: [
    'Both Papers are open-book examinations. The coordinators covered the assessment structure at the start of LG1.',
    'A past paper for Paper II has been uploaded to Moodle.',
    'A review session on the conveyancing aspects only (LG1–LG10) runs on 30 November 2026 — it appears in the timetable as the optional Q&A Session. Students are encouraged to e-mail the coordinators their questions well before it so the answers can be shared in class.',
  ],

  // The six SGS written submissions. Each SGS is taught twice — a Monday
  // sitting and a Tuesday one — and the two sittings have different
  // submission deadlines: the Monday group submits by the preceding
  // Thursday, the Tuesday group by the preceding Friday. The dates below
  // are the MONDAY sitting's, which is the one this timetable places our
  // group (Gp 11/24, SG part B, Mon 3:00pm, CCT 724, tutor Henry Chung) in.
  // The Tuesday sitting's deadlines are 2 Oct, 9 Oct, 23 Oct, 30 Oct,
  // 6 Nov and 13 Nov respectively, all also 11:59pm.
  // SG1 is the one break in the pattern: the preceding Thursday is 1 October
  // (National Day), so that deadline sits on Wednesday 30 September instead.
  deadlines: [
    { id: 'PCLL8030-hw-sg1', courseCode: 'PCLL8030', kind: 'homework', refId: 'hw-sg1', date: '2026-09-30', time: '23:59', title: 'SG1 written submission due (e-mail to tutor)' },
    { id: 'PCLL8030-hw-sg2', courseCode: 'PCLL8030', kind: 'homework', refId: 'hw-sg2', date: '2026-10-08', time: '23:59', title: 'SG2 written submission due (e-mail to tutor)' },
    { id: 'PCLL8030-hw-sg3', courseCode: 'PCLL8030', kind: 'homework', refId: 'hw-sg3', date: '2026-10-22', time: '23:59', title: 'SG3 written submission due (e-mail to tutor)' },
    { id: 'PCLL8030-hw-sg4', courseCode: 'PCLL8030', kind: 'homework', refId: 'hw-sg4', date: '2026-10-29', time: '23:59', title: 'SG4 written submission due (e-mail to tutor)' },
    { id: 'PCLL8030-hw-sg5', courseCode: 'PCLL8030', kind: 'homework', refId: 'hw-sg5', date: '2026-11-05', time: '23:59', title: 'SG5 written submission due (e-mail to tutor)' },
    { id: 'PCLL8030-hw-sg6', courseCode: 'PCLL8030', kind: 'homework', refId: 'hw-sg6', date: '2026-11-12', time: '23:59', title: 'SG6 written submission due (e-mail to tutor)' },
  ],

  homework: [
    { id: 'hw-sg1', title: 'SG1 — write on the legal and/or ethical issues', sgRef: 'SG1', mode: 'E-mail to your tutor before class', deadlineId: 'PCLL8030-hw-sg1' },
    { id: 'hw-sg2', title: 'SG2 — write on the legal and/or ethical issues', sgRef: 'SG2', mode: 'E-mail to your tutor before class', deadlineId: 'PCLL8030-hw-sg2' },
    { id: 'hw-sg3', title: 'SG3 — write on the legal and/or ethical issues', sgRef: 'SG3', mode: 'E-mail to your tutor before class', deadlineId: 'PCLL8030-hw-sg3' },
    { id: 'hw-sg4', title: 'SG4 — write on the legal and/or ethical issues', sgRef: 'SG4', mode: 'E-mail to your tutor before class', deadlineId: 'PCLL8030-hw-sg4' },
    { id: 'hw-sg5', title: 'SG5 — write on the legal and/or ethical issues', sgRef: 'SG5', mode: 'E-mail to your tutor before class', deadlineId: 'PCLL8030-hw-sg5' },
    { id: 'hw-sg6', title: 'SG6 — write on the legal and/or ethical issues', sgRef: 'SG6', mode: 'E-mail to your tutor before class', deadlineId: 'PCLL8030-hw-sg6' },
  ],

  sessions: {
    // Pre-recorded — the timetable gives this entry no `no` of its own
    // (see week 1's preRecorded list), so it's matched back to this key
    // by `preRecordedTopic` (see findPreRecordedSession in common.js)
    // rather than by a real session number.
    LG0: {
      kind: 'LG',
      preRecordedTopic: 'Property Transactions - Introduction to HK Tax and Stamp Duty',
      mode: 'Pre-recorded (Moodle)',
      time: 'To be watched before CCT LG4',
      authors: ['Andrew Halkyard', 'Stefano Mariani', 'Wilson Chow'],
      objectives: [
        'Outline the nature, basic principles and scope of profits tax and stamp duty as they apply to typical corporate, commercial and property transactions in Hong Kong.',
        'Understand the compliance issues arising under both taxes, including who bears liability and the consequences of non-compliance.',
      ],
      topicsCovered: [
        "Hong Kong's territorial system of taxation and the three taxes charged under the Inland Revenue Ordinance",
        "Profits tax — the s14 charging provision, and the meaning of 'trade' and 'business'",
        "The 'badges of trade': how a gain from selling property or shares is characterised as taxable trading profit or a (generally untaxed) capital gain",
        'Stamp duty — the charging heads, computation rules and compliance consequences under the Stamp Duty Ordinance',
      ],
      prep: {
        readings: [
          'Halkyard, "Taxation in Hong Kong: An Overview" (extract)',
          'Willoughby and Halkyard, Encyclopaedia of Hong Kong Taxation: Stamp Duty (Vol. 1), Division I [1]–[1051]',
          'Chow and Mariani, Hong Kong Tax Law: Cases and Materials (7th ed., 2021), Chapter 2 — Profits Tax: Trade, Profession or Business',
          'IRD website: ird.gov.hk/eng/tax/index.htm',
        ],
      },
      keyTakeaways: [
        "Hong Kong's territorial system only taxes Hong Kong-sourced profits or income — a taxpayer's domicile and residence are largely irrelevant.",
        'The Inland Revenue Ordinance charges three separate taxes — property tax, salaries tax and profits tax; there is no general income tax.',
        "Whether a gain on selling property or shares is taxable (a trading profit) or tax-free (a capital gain) turns on whether the taxpayer had an intention to trade, assessed objectively using the 'badges of trade'.",
        'Stamp duty is a tax on documents, not on transactions as such — without a chargeable instrument, there is no duty.',
      ],
      legalIssues: [
        {
          number: '1',
          heading: 'The Hong Kong Tax System — An Overview',
          notes: [
            {
              heading: 'A territorial system, three taxes',
              bullets: [
                'Hong Kong has a territorial system of taxation: the source of profits or income — not the taxpayer\'s domicile or residence — determines liability. Offshore profits or income are generally exempt.',
                'The Inland Revenue Ordinance (Cap. 112) administers three separate and distinct taxes: property tax, salaries tax and profits tax — there is no general income tax as in the UK.',
                'A taxpayer may elect "personal assessment", aggregating income from all three sources, where doing so gives a better tax outcome.',
                'Property tax is assessed at the standard rate (15%) on the owner, on the net assessable value of land and buildings — the annual rent receivable less a flat 20% notional deduction for repairs (regardless of amount actually spent) and any rates paid by the owner.',
                'A two-tiered profits tax rate regime has applied since 2018/19: the first $2 million of profits is taxed at half the standard rate (8.25% for corporations, 7.5% for unincorporated businesses), with the balance at the normal rate (16.5% and 15% respectively).',
                'Hong Kong has several limited double tax agreements (DTAs) covering shipping and airline profits, and comprehensive DTAs with other jurisdictions (e.g. Mainland China) including exchange of tax information.',
              ],
            },
            {
              heading: 'What falls outside the charge altogether',
              bullets: [
                'Three categories of income are exempt under the IRO: (a) income specifically exempted (e.g. bank deposit interest); (b) income of certain exempt persons (e.g. share dealing profits of authorised unit trusts and mutual funds); and (c) income outside the scope of the charging provisions at all — including dividends and capital gains generally.',
              ],
            },
            {
              heading: 'Anti-avoidance',
              warnings: [
                'The Inland Revenue Ordinance (and the Stamp Duty Ordinance) each contain specific anti-avoidance provisions and a wide-ranging general anti-avoidance provision — Hong Kong judges tend to view tax avoidance activity unfavourably.',
                'Because some countries treat Hong Kong as a tax haven, any cross-border tax planning involving Hong Kong should be approached with caution, as it may attract closer scrutiny from other revenue authorities.',
              ],
            },
          ],
        },
        {
          number: '2',
          heading: 'Profits Tax — The Basic Charging Provision',
          notes: [
            {
              heading: 'Section 14: the charge',
              statutes: [
                {
                  text: 'Subject to the provisions of this Ordinance, profits tax shall be charged for each year of assessment at the standard rate on every person carrying on a trade, profession or business in Hong Kong in respect of his assessable profits arising in or derived from Hong Kong for that year from such trade, profession or business (excluding profits arising from the sale of capital assets) as ascertained in accordance with this Part.',
                  cite: 's14(1), Inland Revenue Ordinance (Cap. 112)',
                },
              ],
              bullets: [
                'Because the charge expressly excludes "profits arising from the sale of capital assets," Hong Kong generally does not tax capital gains — the whole question is whether a given gain is a trading profit or a capital gain.',
                'There is generally no distinction between residents and non-residents: a resident may receive profits from abroad tax-free, while a non-resident may be taxed on profits arising in Hong Kong without any physical presence here.',
                '"Person" is defined broadly under s2(1) to include a corporation, partnership, trustee and body of persons — a partnership is treated as a separate legal entity for assessment purposes despite not being a separate legal person at law.',
              ],
              table: {
                headers: ['s14 element', 'What it means'],
                rows: [
                  ['"for each year of assessment"', 'The year of assessment runs 1 April – 31 March; a taxpayer\'s own accounting period (e.g. ending 31 December) can be used instead.'],
                  ['"at the standard rate"', 'The rate in Schedule 1 IRO (see the two-tier regime above); Schedule 8 sets the special rate payable by corporations.'],
                  ['"every person carrying on a trade, profession or business in Hong Kong"', 'The trade/profession/business must actually be carried on in Hong Kong — a question of fact (the "source" question).'],
                  ['"his assessable profits arising in or derived from Hong Kong"', 'Only profits sourced (or deemed sourced) in Hong Kong are chargeable — profits can arise "in Hong Kong from business transacted... whether directly or through an agent."'],
                  ['"excluding profits arising from the sale of capital assets"', 'Not itself defined — this is the trading-profit-vs-capital-gain distinction explored below.'],
                ],
              },
            },
          ],
        },
        {
          number: '3',
          heading: "Meaning of 'Trade' and the Badges of Trade",
          notes: [
            {
              heading: "The statutory definition and the central test",
              statutes: [
                {
                  text: 'includes every trade and manufacture, and every adventure and concern in the nature of trade',
                  cite: "s2(1) (definition of 'trade'), Inland Revenue Ordinance (Cap. 112)",
                },
                {
                  text: "Trading requires an intention to trade; normally the question to be asked is whether this intention existed at the time of the acquisition of the asset. Was it acquired with the intention of disposing of it at a profit, or was it acquired as a permanent investment? ... What I think is not possible is for an asset to be both trading stock and permanent investment at the same time, nor for it to possess an indeterminate status, neither trading stock nor permanent asset.",
                  cite: 'Simmons v IRC [1980] 2 All ER 798, 800 (HL), per Lord Wilberforce',
                },
              ],
              bullets: [
                "The definition is circular (\"trade... includes... trade\"), so its scope is worked out through case law — and it is a wide definition, catching isolated transactions that are merely \"adventures in the nature of trade.\"",
                'The intention to trade is objective, not subjective: it is inferred from all the circumstances of the case — "including things said and things done. Things said at the time, before and after and things done at the time, before and after" (All Best Wishes Ltd v CIR (1992) 3 HKTC 750, 771, per Mortimer J).',
                'A single transaction can be enough: in Rutledge v IRC (1929) 14 TC 490, a businessman who bought one million toilet rolls in Germany and resold them in the UK for a profit was held to have engaged in "an adventure... in the nature of trade," even though it was a one-off.',
              ],
            },
            {
              heading: 'The badges of trade',
              bullets: [
                'These are useful indicia for deciding whether a transaction is trading or a mere realisation of an investment — but they are not a checklist, and no single badge is decisive on its own; the fact-finder must weigh the whole picture (Marson v Morton [1986] 1 WLR 1343, per Sir Nicolas Browne-Wilkinson VC).',
              ],
              table: {
                headers: ['Badge of trade', 'What it asks'],
                rows: [
                  ['Frequency / number of transactions', 'Has the taxpayer frequently engaged in similar transactions?'],
                  ['Length of ownership', 'Has the asset been held for only a short period before resale?'],
                  ['Nature of the subject matter', 'Is the asset normally the subject of trading rather than investment?'],
                  ['Quantity', 'Has the taxpayer bought or sold unusually large quantities?'],
                  ['Circumstances of the sale', 'Was the sale for reasons that would not exist if there had been an intention to resell at acquisition?'],
                  ['Supplementary work', 'Was work done, or effort expended, to add resale value or attract purchasers?'],
                  ['Organisation / effort in selling', 'Did the taxpayer expend time, money or effort beyond what a non-trader would in disposing of such an asset?'],
                  ['Concession of intention', 'Has the taxpayer admitted an actual intention to resell at a profit when the asset was acquired?'],
                  ['Purpose of acquisition', 'Was the asset bought for personal use/enjoyment/income, or purely to resell at a profit?'],
                ],
              },
              bulletGroups: [
                {
                  heading: 'Illustrative cases',
                  items: [
                    'Iswera v Commissioner of Inland Revenue [1965] 1 WLR 663 (PC) — a buyer who bought a whole plot only because the seller would not sell part of it, then immediately resold most of it to fund keeping the rest, was held to have entered "an adventure in the nature of trade": her purpose could not prevail over what she in fact did.',
                    'Crawford Realty Ltd v CIR (1991) 3 HKTC 674 — a long-term property owner who entered a joint venture to redevelop and sell the property was held to have commenced a trade of property development at that point, even though it argued it was merely realising an enhanced capital asset.',
                    "Wing On Cheong Investment Co Ltd v CIR (1987) 3 HKTC 1 — contrast: a company that bought, rented and later redeveloped and sold leasehold units over several years was held, on the evidence (mainly directors' meeting minutes), to have engaged in forced realisation of investments, not trading.",
                    "Waylee Investment Ltd v CIR [1991] HKCU 370 (PC) — \"the clearest indication that an investment was acquired as a capital asset would be an indication that the taxpayer intended to hold the investment as such for an indefinite period,\" per Lord Bridge.",
                  ],
                },
              ],
              warnings: [
                'Under s68(4) IRO, the onus is on the taxpayer, not the Commissioner, to prove that a profits tax assessment is excessive or incorrect. In many marginal trading-vs-investment disputes, the taxpayer loses not on the substantive merits but simply for failing to discharge this burden of proof — cogent, contemporaneous evidence of the intention actually held at acquisition is essential, and its absence is rarely fatal to the Revenue\'s case.',
              ],
            },
          ],
        },
        {
          number: '4',
          heading: 'Applying the Badges to Land and Shares',
          notes: [
            {
              heading: "Individuals rarely 'trade' in shares — but land is different",
              bullets: [
                'For individuals, the courts set the bar for share trading very high: there must be a habitual and systematic course of dealing with a high degree of organisation and commercial strategy before an individual will be found to be trading or carrying on a business in securities (Lee Yee Shing v CIR [2008] 2 HKC 436, [2008] 3 HKLRD 51, the leading Hong Kong authority — the Court of Final Appeal agreed with the Board of Review that an individual who traded extensively in shares over several years, and lost money, was not trading but engaged in speculative or "gambling" transactions).',
                'Compare CIR v Dr Chang Liang-jen (1977) 1 HKTC 975 — a doctor who held a huge share portfolio, sold some shares quickly for good reasons and made substantial profits over several years, was held not to be trading but simply turning over an investment portfolio.',
                'Land is treated very differently: property is "well established as a traded commodity in Hong Kong," and it is difficult for a taxpayer to rebut a trading motive where property is bought and resold within a reasonably short time, especially if it was never put to any other use in the interim (Inland Revenue Department, "Property and Profits Tax", The Hong Kong Accountant (March/April 1997) 65–66).',
              ],
            },
            {
              heading: "The IRD's preliminary screening criteria for property trading",
              body: 'A published statement of the broad (non-binding) criteria the Inland Revenue Department has used to screen property transactions for potential profits tax liability — note the gross-profit thresholds may have changed since publication.',
              table: {
                headers: ['Taxpayer', 'Screening indicator'],
                rows: [
                  ['Individuals and partnerships', 'Resale before assignment is executed (a "confirmor" sale); OR a sale with gross profit exceeding HK$200,000 where the property was held for less than 2 years; OR 3 or more sale transactions by the same individual/partnership within 6 years.'],
                  ['Corporations', 'Resale before assignment is executed (a "confirmor" sale); OR a sale with gross profit exceeding HK$300,000 where the property was held for less than 2 years.'],
                ],
              },
              warnings: [
                'These criteria are only a basis for identifying potential profits tax liability — falling outside them is not a defence to a failure to notify chargeability on a transaction that is, in substance, trading.',
                "A change of intention from holding property as a long-term investment to trading stock must be shown by the Revenue in a clear and unequivocal manner — the mere sale of an investment, or steps taken merely to enhance its value while realising it, do not by themselves establish trading (see Church Body of the Hong Kong Sheng Kung Hui and another v CIR (2016) 19 HKCFAR 54, where the Court of Final Appeal cautioned against mechanical use of the badges of trade: they are not a checklist, but an aid to the fact-finder's holistic inquiry into intention).",
              ],
            },
          ],
        },
        {
          number: '5',
          heading: "Meaning of 'Business'",
          notes: [
            {
              heading: 'A wider concept than trade',
              statutes: [
                {
                  text: 'includes agricultural undertaking, poultry and pig rearing and the letting or sub-letting by any corporation to any person of any premises or portion thereof, and the sub-letting by any other person of any premises or portion of any premises held by him under a lease or tenancy other than from the Government',
                  cite: "s2(1) (definition of 'business'), Inland Revenue Ordinance (Cap. 112)",
                },
                {
                  text: 'the fundamental notion of the exercise of an activity in an organised and coherent way and one which is directed to an end result',
                  cite: 'Rangatira Ltd v CIR (NZ) [1997] STC 47, 56 (PC), quoted with approval in Lee Yee Shing v CIR [2008] 3 HKLRD 51 at para 69',
                },
              ],
              bullets: [
                '"Business" is deliberately wider than "trade" — a decision that there has been no trading does not necessarily mean a profit was not derived from a business.',
                'The s2(1) deeming provision only automatically catches a corporation that lets or sub-lets property; an individual who merely lets is not automatically deemed to carry on a business, though may still be found to on ordinary principles — an individual letting property faces a very high threshold before being found to carry on a business (Lam Woo-shang v CIR (1961) 1 HKTC 123).',
                'Even where s2(1) does not deem an individual to be carrying on a business, the facts may still go beyond mere passive letting — e.g. Kwong Kwan-nang, Louis v CIR (1989) 2 HKTC 541, where letting a cinema together with its licence to operate and goodwill was held to amount to a business, not mere letting of premises.',
                'The threshold for a company to be found to carry on a business is very low: any gainful use to which a company puts its assets prima facie amounts to carrying on a business (CIR v Bartica Investment Ltd [1996] 4 HKC 599 — placing fixed deposits and pledging them as loan security was held to be carrying on business, applying American Leaf Blending Co Sdn Bhd v DGIR (Malaysia) [1979] AC 676).',
              ],
            },
          ],
        },
        {
          number: '6',
          heading: 'Stamp Duty — Scope, Charging Heads and Computation',
          notes: [
            {
              heading: 'Nature and scope',
              bullets: [
                'Stamp duty is a tax on certain instruments effecting certain transactions, prescribed by the Stamp Duty Ordinance (Cap. 117) — it is largely statute-based, so ordinary rules of statutory interpretation apply.',
                'Without a stampable instrument, there can be no duty. The place of execution, and the domicile, nationality, residence or currency of the parties, are all irrelevant (ss4(1) and 18, SDO).',
              ],
              statutes: [
                {
                  text: 'Only such of the instruments specified in the First Schedule as relate to any property situate in Hong Kong or any matter or thing done or to be done in Hong Kong... shall be chargeable with stamp duty of the amount specified in that Schedule.',
                  cite: 's4, Stamp Duty Ordinance (Cap. 117) (charging provision, summarised extract)',
                },
              ],
              table: {
                headers: ['First Schedule head', 'Instrument'],
                rows: [
                  ['Head 1(1)', 'Conveyance on sale (immovable property in Hong Kong)'],
                  ['Head 1(1A)', 'Agreement for sale'],
                  ['Head 1(1AA)/(1B)', 'Special Stamp Duty'],
                  ['Head 1(1AB)/(1C)', "Buyer's Stamp Duty"],
                  ['Head 1(2)(a)', 'Lease — premium'],
                  ['Head 1(2)(b)', 'Lease — rent'],
                  ['Head 2(1)/(2)', 'Contract notes (Hong Kong stock)'],
                  ['Head 2(3)/(4)', 'Instrument of transfer (Hong Kong stock)'],
                ],
              },
            },
            {
              heading: 'Fixed vs ad valorem, and computation',
              bullets: [
                'Fixed duty does not vary with the consideration or value (e.g. $5 under Head 2(4)); ad valorem duty varies according to the consideration or value (e.g. the rates under Head 1 and Head 2(1)) — ranging from $2 per $1,000 for Hong Kong stock up to 6.5% for conveyances/agreements for sale of residential property.',
                'Duty is normally assessed on the consideration stated in the instrument (usually the market value), but: an instrument with nil or inadequate consideration is stamped as a voluntary disposition (s27(1) and (4)); where the sum payable is uncertain but ascertainable, duty is assessed on the maximum sum that might become payable, calculable in advance as at the date of execution (the "contingency principle"); and the Collector may refer to the property\'s value where inadequate consideration confers a substantial benefit on the transferee (ss27(4)/29F(1) and (3)).',
                "Where the consideration consists of stock or another security, duty is based on its market value (or the principal and interest due) as at the instrument's date (ss22/29C(9)); where it consists of periodic payments, duty is chargeable under ss23/29C(9).",
                "Where a sale is in satisfaction of a debt, the debt owed is the consideration (or, if more than the property's value, only that value applies after adjudication) (ss24(1)/(2)/29C(9)) — e.g. a $4 million property sold in exchange for a $5 million debt is only stamped on $4 million, once adjudicated.",
                "Where a sale is subject to an outstanding mortgage being assumed or repaid, the unencumbered value of the property is used, even though the seller receives less in cash (ss24(1)/29C(9)).",
              ],
              statutes: [
                {
                  text: 'Every instrument chargeable with stamp duty containing or relating to several distinct matters shall be separately and distinctly charged, as if it were a separate instrument, with stamp duty in respect of each of the matters.',
                  cite: 's10(2), Stamp Duty Ordinance (Cap. 117)',
                },
              ],
            },
            {
              heading: 'Liability & non-compliance',
              bullets: [
                "Adjudication (s13) resolves disputes over liability and quantum; an adjudicated instrument is 'duly stamped', and mandatory adjudication in certain prescribed circumstances carries no adjudication fee.",
                'All parties and other persons executing the instrument are jointly and severally liable for the duty, except in specific cases such as a vesting order following an order for sale or partition, and a foreclosure order (Note 2 to Head 1(1); see also s4(3)).',
              ],
              warnings: [
                'Non-compliance carries serious consequences: unpaid duty remains a civil debt owed to the Government (ss4(3) and (4)); penalties of up to 10 times the original duty may be imposed (s9); the instrument is not admissible in evidence (s15(1)); and it cannot be acted upon, filed or registered by public officers or bodies corporate (s15(2)).',
              ],
            },
            {
              heading: 'Exemptions',
              bullets: [
                'The most important exemptions are: transfers from a trustee to a beneficiary, or where no beneficial interest passes (s27(5)); and intra-group transfers (s45).',
              ],
            },
          ],
        },
      ],
      cloze: [
        {
          topic: 'The Hong Kong Tax System',
          items: [
            { text: "Hong Kong operates a {{territorial}} system of taxation — profits or income must have a Hong Kong source to be taxable, regardless of the taxpayer's domicile or residence." },
            { text: 'The Inland Revenue Ordinance charges three separate taxes: {{property tax}}, {{salaries tax}}, and profits tax — there is no general income tax in Hong Kong.' },
            { text: 'A taxpayer may elect {{personal assessment}}, aggregating income from all three IRO taxes, where doing so produces a better overall tax outcome.' },
            { text: 'Capital gains are, generally, entirely {{outside the scope}} of the profits tax charging provisions — not merely exempted, but never within the charge to begin with.' },
          ],
        },
        {
          topic: 'Profits Tax — The Charging Provision',
          items: [
            { text: 'Profits tax is charged under {{s14}} of the Inland Revenue Ordinance, on every person carrying on a trade, profession or business in Hong Kong, excluding profits from the sale of {{capital assets}}.' },
            { text: "Under s2(1) of the IRO, 'person' is defined broadly to include a corporation, partnership, trustee and body of persons — a {{partnership}} is treated as a separate legal entity for assessment purposes despite not being one at law." },
            { text: 'There is generally no distinction between residents and non-residents for profits tax — a {{non-resident}} may be taxed on profits arising in Hong Kong without any physical presence here.' },
          ],
        },
        {
          topic: 'The Badges of Trade',
          items: [
            { text: "Under s2(1) of the IRO, 'trade' includes every trade and manufacture, and every {{adventure and concern}} in the nature of trade." },
            { text: 'In Simmons v IRC, Lord Wilberforce held that trading requires an {{intention to trade}}, tested {{objectively}} at the time the asset was acquired.' },
            { text: "The classic 'badges of trade' were restated in {{Marson v Morton}} and later endorsed by the Court of Final Appeal in {{Lee Yee Shing}} v CIR." },
            { text: "A single, one-off transaction can still be trading — in {{Rutledge v IRC}}, buying and reselling a single huge quantity of toilet rolls was held to be 'an adventure in the nature of trade'." },
            { text: 'The onus of proving that a profits tax assessment is excessive or incorrect lies on the {{taxpayer}}, under {{s68(4)}} of the Inland Revenue Ordinance.' },
            { text: 'In {{Iswera v IRC}}, a taxpayer who bought a whole plot only because the seller would not sell part, then immediately resold most of it, was still held to have entered an adventure in the nature of trade — her {{purpose}} for buying could not prevail over what she in fact did.' },
          ],
        },
        {
          topic: 'Applying the Badges to Land and Shares',
          items: [
            { text: 'The Court of Final Appeal in {{Lee Yee Shing v CIR}} held that an individual\'s extensive share dealings were not trading, but rather {{speculative}} (or gambling) transactions — since individuals face a very high bar before being found to trade in shares.' },
            { text: "Land is treated very differently from shares: property is 'well established as a {{traded commodity}}' in Hong Kong, making it hard to rebut a trading motive on a short-term resale." },
            { text: "Under the IRD's preliminary screening criteria, an individual's property sale is flagged as potential trading where the gross profit exceeds {{HK$200,000}} and the property was held for less than {{2 years}}." },
            { text: 'A change of intention from holding property as a long-term investment to trading stock must be shown by the Revenue in a {{clear and unequivocal}} manner — mere realisation, or steps taken merely to enhance value, are not enough.' },
          ],
        },
        {
          topic: "Meaning of 'Business'",
          items: [
            { text: 'Under s2(1) of the IRO, a {{corporation}} that lets or sub-lets any premises is deemed to be carrying on a business — an individual who merely lets property is not automatically deemed to do so.' },
            { text: "'Business' is deliberately a {{wider}} concept than 'trade' — a decision that there has been no trading does not necessarily mean a profit was not derived from a business." },
            { text: 'In {{CIR v Bartica Investment Ltd}}, placing fixed deposits and pledging them as loan security was held to be carrying on business — showing just how {{low}} the threshold is for a company.' },
          ],
        },
        {
          topic: 'Stamp Duty',
          items: [
            { text: 'Without a stampable {{instrument}}, there can be no stamp duty liability.' },
            { text: "Under the stamp duty 'contingency principle', where the sum payable is uncertain but ascertainable, duty is assessed on the {{maximum}} sum that might become payable, calculable in advance as at the date of execution." },
            { text: 'Fixed duty does not vary with the consideration or value; {{ad valorem}} duty varies according to the consideration or value.' },
            { text: 'Every instrument containing several distinct matters must be {{separately and distinctly charged}}, as if each matter were a separate instrument, under s10(2) SDO.' },
            { text: 'Non-compliance with stamp duty carries serious consequences: an unstamped or insufficiently stamped instrument is not admissible in {{evidence}}, and penalties of up to {{10 times}} the original duty may be imposed.' },
          ],
        },
      ],
      flashcards: [
        {
          topic: 'The Hong Kong Tax System',
          items: [
            { front: "What is the key determinant of tax liability under Hong Kong's territorial system?", back: "The source of the profits or income — not the taxpayer's domicile or residence." },
            { front: 'Name the three taxes charged under the Inland Revenue Ordinance.', back: 'Property tax, salaries tax, and profits tax — there is no general income tax.' },
            { front: "What is 'personal assessment' and why would a taxpayer elect it?", back: 'An option to aggregate income from all three IRO taxes for one taxpayer, elected where doing so produces a better overall tax outcome than being assessed separately under each.' },
          ],
        },
        {
          topic: 'Profits Tax — The Charging Provision',
          items: [
            { front: 'What is the basic charging provision for profits tax in Hong Kong?', back: 'Section 14(1), Inland Revenue Ordinance — profits tax is charged on every person carrying on a trade, profession or business in Hong Kong on assessable profits arising in or derived from Hong Kong, excluding profits from the sale of capital assets.' },
            { front: 'Does Hong Kong profits tax distinguish between residents and non-residents?', back: 'Generally, no — a resident may receive foreign profits tax-free, while a non-resident may be taxed on Hong Kong-sourced profits without any physical presence here.' },
          ],
        },
        {
          topic: 'The Badges of Trade',
          items: [
            { front: 'What is the central test for whether a gain is a taxable trading profit or a tax-free capital gain?', back: "Whether the taxpayer had an intention to trade — assessed objectively by reference to the 'badges of trade': Simmons v IRC [1980] 2 All ER 798." },
            { front: "Name some of the classic 'badges of trade'.", back: 'E.g. frequency of similar transactions, length of ownership, nature of the subject matter, supplementary work before sale, circumstances of realisation, and source of finance (Marson v Morton [1986] 1 WLR 1343).' },
            { front: 'What did Iswera v IRC establish?', back: 'Buying a whole plot (because the seller would not sell only part) and immediately reselling most of it to fund keeping the rest was itself an adventure in the nature of trade — the taxpayer\'s purpose could not prevail over what she in fact did.' },
            { front: 'What is the practical significance of s68(4) IRO in trading-vs-investment disputes?', back: "It puts the onus on the taxpayer to prove the Commissioner's assessment is excessive or incorrect — many marginal cases are lost simply for failing to discharge this burden, not on the substantive merits." },
            { front: 'What did Rutledge v IRC establish about one-off transactions?', back: "Even a single, isolated transaction — there, buying and reselling one million toilet rolls — can be 'an adventure in the nature of trade' if carried out in a way typical of dealing in that commodity." },
          ],
        },
        {
          topic: 'Applying the Badges to Land and Shares',
          items: [
            { front: "Why do individuals rarely get found to be 'trading' in shares, compared to land?", back: 'The courts require a habitual and systematic course of dealing with a high degree of organisation before an individual is found to trade in securities (Lee Yee Shing v CIR); land, by contrast, is treated as a commodity routinely traded, so a quick resale more readily suggests a trading motive.' },
            { front: "What are the IRD's rough screening thresholds for an individual's property sale?", back: 'A confirmor (resale-before-assignment) sale, or a sale with gross profit over HK$200,000 where the property was held under 2 years, or 3+ sales within 6 years.' },
            { front: 'What must the Revenue show to establish a change of intention from investment to trading stock?', back: 'Clear and unequivocal evidence of the change — the mere sale of an investment, or steps taken merely to enhance its value while realising it, do not by themselves establish trading.' },
          ],
        },
        {
          topic: "Meaning of 'Business'",
          items: [
            { front: "Under s2(1) IRO, is an individual who simply lets out a flat automatically 'carrying on a business'?", back: 'No — only a corporation is deemed to carry on business by letting/sub-letting; an individual is not automatically deemed to, though may still be found to on ordinary principles if the facts go beyond mere passive receipt of rent.' },
            { front: 'How low is the threshold for a company to be found to carry on a business?', back: 'Very low — any gainful use to which a company puts its assets prima facie amounts to carrying on a business (CIR v Bartica Investment Ltd).' },
          ],
        },
        {
          topic: 'Stamp Duty',
          items: [
            { front: "What is the stamp duty 'contingency principle'?", back: 'Where the sum payable under an instrument is uncertain but ascertainable, duty is assessed on the maximum sum that might become payable, calculated in advance as at the date of execution.' },
            { front: 'Fixed duty vs ad valorem duty — what is the difference?', back: "Fixed duty doesn't vary with the consideration or value (e.g. $5 under Head 2(4)); ad valorem duty varies according to the consideration or value (e.g. the rates under Head 1)." },
            { front: 'What happens to an instrument that is not properly stamped?', back: 'It is not admissible in evidence, cannot be acted upon, filed or registered by public officers or bodies corporate, and penalties of up to 10 times the original duty may be imposed.' },
          ],
        },
      ],
    },

    // LG1 -- the system of land holding, Government leases and Conditions of
    // Grant. Authored from the PT1 LG1 lecture notes (Wilkinson, updated Wu,
    // revised Alwin Chan, August 2026), the 24 LG1 slides, and the four
    // appendices to Lecture 1: a 1937 Government Lease of Inland Lot 4494,
    // the 1976 Agreement and Conditions of Sale of Inland Lot 867 with its
    // Memorandum of Agreement, a 1976 Certificate of Compliance, and a 1994
    // Occupation Permit -- plus the Land Registry's own "Decoding Land
    // Registration" extracts of a Block Government Lease.
    LG1: {
      kind: 'LG',
      date: '2026-09-09',
      time: '09:00-11:30',
      mode: 'Face-to-face',
      authors: ['Alwin Chan'],
      objectives: [
        'Identify what is "land" for the purposes of a conveyancing transaction, and distinguish fixtures from chattels and fittings.',
        'Explain how land is held in Hong Kong, and trace an owner\'s interest back to the Government grant it derives from.',
        'Determine whether a grantee holds a legal estate under a Government lease or an equitable interest under Conditions of Grant, and what converts one into the other.',
        'Construe the restrictive covenants in a Government lease or Conditions of Grant and advise whether a given use is in breach.',
        'Advise whether a breach has been waived and, if not, whether it defeats title on a sale.',
      ],
      topicsCovered: [
        'Vesting of land in the State; the three phases of acquisition and Article 7 of the Basic Law',
        'The meaning of "land" under s2 of the Conveyancing and Property Ordinance; fixtures, chattels and fittings',
        'Land surveys, boundaries, and the resolution of a conflict between the plan and the verbal description',
        'Sectioning by deed poll and subdivision into undivided shares',
        'Government leases, Block Government leases and the five kinds of Conditions',
        'Term, renewal and extension: the Basic Law, the Government Leases Ordinance and the Extension of Government Leases Ordinance (Cap. 648)',
        'Certificates of compliance and the 1 January 1970 divide',
        'Modification of the lease or Conditions, and whether the decision is amenable to judicial review',
        'Restrictive covenants: user, offensive trades, design disposition and height, alienation',
        'Whether a covenant runs with the land and whether it is spent',
        'Express, limited and implied waiver; acquiescence; and the "no real risk" approach on a sale',
        'The Government\'s implied covenants for quiet enjoyment and against derogation from grant',
      ],
      examNotes: {
        intro: 'LG1 sets up the whole course: every later question about title starts from the Government grant this lecture explains. Two things run through nearly every issue type below — construction (what do the words of this grant actually restrict?) and consequence (does a breach of them defeat the title your client is buying?).',
        issueTypes: [
          {
            id: 'what-is-land',
            title: 'Is it "land"? Fixtures, chattels and fittings',
            summary: 'The s2 definition, the purpose-and-degree test, and the threefold classification Elitestone added.',
            triggers: {
              bullets: [
                'The sale includes a conservatory built onto the back of the house and the buyer assumes it passes with the property.',
                'The vendor removes the ceiling lights and the chandelier the day before completion.',
                'A window-type air conditioner has been fitted into an aperture cut in the ballroom wall.',
                'A split air-conditioning system is ducted through the building, and the vendor says it is his to take.',
                'An air conditioner sits on the floor of a restaurant, plugged in and not fixed to anything.',
                'The purchaser wants to know what, precisely, he is getting for his money.',
                'A structure rests on the land by its own weight and has never been bolted down.',
                'The dispute is over an undivided share in a plot rather than a physical parcel.',
                'The item was annexed to the building for the better enjoyment of the item itself, not of the building.',
              ],
              routes: [
                { when: 'The argument is really about where the boundary runs', session: 'LG1', issue: 'boundaries-and-plans', label: 'Boundaries, plans and the verbal description' },
                { when: 'The question is whether the use of the fixture breaches the grant', session: 'LG1', issue: 'user-covenants', label: 'Is the use in breach of the user restriction?' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Deciding whether an item is land',
                steps: [
                  {
                    label: 'Start from the statutory definition, not from intuition',
                    detail: 'Section 2 of the Conveyancing and Property Ordinance (Cap. 219) defines land to include land covered by water; any estate, right, interest or easement in or over land; the whole or part of an undivided share in land and any estate, right, interest or easement in or over it; and things attached to land.',
                    why: 'The definition is deliberately wider than the physical ground. It sweeps in incorporeal interests and undivided shares precisely because Hong Kong holds most of its residential stock as undivided shares in a lot rather than as separately owned parcels — so a definition confined to soil would not describe what anyone actually owns here.',
                    exam: {
                      write: 'By s2 of the Conveyancing and Property Ordinance (Cap. 219), "land" includes things attached to land, so the question is whether the [item] is attached such that it has become part of the land.',
                      trap: 'Reciting the whole four-limb definition when only the "things attached to land" limb is in issue. Quote the limb you need and move to the test.',
                    },
                    points: [
                      'Limb (a) — land covered by water.',
                      'Limb (b) — any estate, right, interest or easement in or over land.',
                      'Limb (c) — the whole or part of an undivided share in land, and any estate, right, interest or easement in or over it.',
                      'Limb (d) — things attached to land, that is, fixtures.',
                    ],
                  },
                  {
                    label: 'Apply the two-part test: the purpose and the degree of annexation',
                    detail: 'Whether an item has become part of the land is decided by the purpose of the annexation and the degree of annexation, weighed together. The purpose limb asks whether the item was attached for the better enjoyment of the item itself, or in order to improve the land or building.',
                    why: 'Degree alone would make a heavy machine land merely because it is hard to move, and would make a priceless tapestry a chattel merely because it hangs on two hooks. Purpose is what stops the test being about brute physics: the question is whether the thing was attached for the better enjoyment of the thing itself, or to improve the land.',
                    exam: {
                      write: 'The test is the purpose and the degree of annexation. Here the [item] was affixed by [means], and the purpose of that annexation was to [improve the premises / enable the item to be used as a chattel], so it is a [fixture / chattel].',
                      trap: 'Treating degree as decisive. A slight degree of annexation with a clear improving purpose can still make a fixture; a heavy object resting on its own weight can still be a chattel.',
                    },
                    points: [
                      'Purpose of annexation — was the item attached to improve the land or building, or for the better enjoyment of the item as a chattel?',
                      'Degree of annexation — how firmly is it fixed, and what damage would removal cause?',
                      'The two are weighed together; neither is conclusive on its own.',
                    ],
                  },
                  {
                    label: 'Then ask whether Elitestone\'s third category is in play',
                    detail: 'In Elitestone Ltd v Morris & Anor [1997] 2 All ER 513 Lord Lloyd proposed a threefold classification: (a) a chattel, (b) a fixture, or (c) part and parcel of the land itself. Category (a) is not land; categories (b) and (c) are. Applied in Hong Kong in Yu Yiu Kong Samuel v Kobylanski Stephen Andrew (unreported) DCCJ 15371/2000, 11/7/2001, per HH Judge A. Cheung (as he then was).',
                    why: 'The third category exists for the thing that was never really "annexed" at all because it was built in place and cannot be moved without destroying it — a bungalow resting on concrete pillars being the classic case. Forcing that into the fixture/chattel binary produces the absurd answer that a house is a chattel because nothing bolts it down.',
                    exam: {
                      write: 'Following Elitestone Ltd v Morris, the [item] is best analysed not as a chattel or a fixture but as part and parcel of the land itself, since it could not be removed without destroying it.',
                      trap: 'Citing Elitestone for the proposition that there are only two categories. Its contribution is the third one, and the third one is what a built-in-place structure needs.',
                    },
                    points: [
                      'Category (a), a chattel — not land.',
                      'Category (b), a fixture — land.',
                      'Category (c), part and parcel of the land itself — land.',
                      'Ask whether the object can be removed at all without being destroyed; if it cannot, category (c) is the natural home for it.',
                    ],
                  },
                  {
                    label: 'Calibrate against the decided examples before committing',
                    detail: 'There is no bright line, so the reported outcomes do the work. The Hong Kong decisions run from a conservatory held to be an integral part of a building, through a window-type air conditioner fitted into an aperture, down to a free-standing unit resting on a restaurant floor.',
                    why: 'This is an area where the reported outcomes are the argument. A bare statement of the test decides nothing; what persuades is showing that the facts sit closer to the case that went one way than to the case that went the other.',
                    exam: {
                      write: 'The present facts are closer to [case] than to [case], because [the feature that decided the first].',
                      trap: 'Citing the air-conditioner cases as if they conflicted. They do not: they turn on how each unit was installed, which is the test doing its work.',
                    },
                    points: [
                      'A greenhouse or conservatory may be a fixture where it is an integral part of the building: Goldful Way Development Ltd v Wellstable Development Ltd [1998] 4 HKC 679.',
                      'A ceiling light has been held to be a fitting rather than a fixture: Haines Connie Frances v Cheung Hing Cheong (2006) HCPI No 551/2000.',
                      {
                        text: 'The air-conditioning cases turn on installation, and read together they are a spectrum rather than a conflict.',
                        points: [
                          'A window-type air conditioner in a ballroom was prima facie a fixture: Irene Loong v Pun Tsun Hang [1959] HKDCLR 192.',
                          'An air-conditioning system was a fixture: Orient Leasing (Hong Kong) Ltd v NP Etches [1985] HKLR 292.',
                          'An air conditioner resting on the floor only was a chattel: Penta Continental Land Investment Co Ltd v Chung Kwok Restaurant Ltd [1967] HKDCLR 22.',
                        ],
                      },
                    ],
                  },
                  {
                    label: 'Say what the classification actually decides on these facts',
                    detail: 'A fixture is part of the land and passes with it on a sale; a chattel or a fitting does not. The classification therefore decides what the purchaser has bought and what the vendor may lawfully remove before completion.',
                    why: 'Classification is never the question a client asks. The client asks whether the vendor may strip the chandeliers out before completion, or whether the price bought the conservatory. The category is only the route to that answer.',
                    exam: {
                      write: 'Since the [item] is a fixture, it forms part of the land and passes to the purchaser on the assignment; the vendor is not entitled to remove it.',
                      trap: 'Stopping at "it is a fixture". Finish the sentence: therefore it passes with the land, therefore removing it is a breach, therefore the purchaser\'s remedy is [x].',
                    },
                    points: [
                      'A fixture passes with the land on a sale unless the contract provides otherwise.',
                      'A chattel or fitting does not, and its inclusion has to be dealt with expressly in the agreement or an inventory.',
                      'Where the parties know an item is contentious, the practical answer is to list it — the test is a poor substitute for drafting.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The contract may allocate items expressly, and an express term displaces the general law. Read the agreement before applying the test.',
                'The threefold classification is Lord Lloyd\'s in Elitestone, a UK decision, adopted in Hong Kong in Yu Yiu Kong Samuel — say so rather than presenting it as native authority.',
                'A dispute between landlord and tenant over a tenant\'s fixture raises a different question (the right to remove) from the one here (whether the item is land at all).',
                'The s2 limb about undivided shares matters in practice far more than the fixtures limb: it is why a flat owner in a multi-storey building owns "land" at all.',
              ],
            },
            skeleton: {
              bullets: [
                'Identify the item and how it is attached, on the facts given.',
                'State the s2 definition, quoting only the limb in issue.',
                'Apply purpose and degree of annexation, taking purpose first.',
                'Consider whether Elitestone category (c) fits better than "fixture".',
                'Compare the closest decided case and say why the facts align with it.',
                'State the consequence for the transaction: does it pass with the land?',
              ],
            },
            mistakes: {
              bullets: [
                'Leading with degree of annexation. Purpose is the more discriminating half of the test and should be argued first.',
                'Treating "fitting" as a legal category. It is a practical label; the legal question is fixture or chattel (or part and parcel of the land).',
                'Assuming an expensive or bulky item must be a fixture.',
                'Forgetting that the answer changes nothing unless you say what follows for the sale.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Authority', 'What it establishes'],
                rows: [
                  ['Definition of land', 's2, Conveyancing and Property Ordinance (Cap. 219)', 'Land includes land covered by water, estates and interests in land, undivided shares, and things attached to land'],
                  ['The test', 'Purpose and degree of annexation', 'Both limbs are weighed; purpose is the discriminating one'],
                  ['Threefold classification', 'Elitestone Ltd v Morris & Anor [1997] 2 All ER 513', 'Chattel / fixture / part and parcel of the land; (b) and (c) are land'],
                  ['Adoption in Hong Kong', 'Yu Yiu Kong Samuel v Kobylanski Stephen Andrew DCCJ 15371/2000, 11/7/2001', 'Elitestone applied locally'],
                  ['Conservatory', 'Goldful Way Development Ltd v Wellstable Development Ltd [1998] 4 HKC 679', 'Greenhouse an integral part of the building, therefore a fixture'],
                  ['Ceiling light', 'Haines Connie Frances v Cheung Hing Cheong (2006) HCPI No 551/2000', 'Held to be a fitting'],
                  ['Window unit', 'Irene Loong v Pun Tsun Hang [1959] HKDCLR 192', 'Window-type air conditioner in a ballroom prima facie a fixture'],
                  ['Ducted system', 'Orient Leasing (Hong Kong) Ltd v NP Etches [1985] HKLR 292', 'Air-conditioning system a fixture'],
                  ['Free-standing unit', 'Penta Continental Land Investment Co Ltd v Chung Kwok Restaurant Ltd [1967] HKDCLR 22', 'Air conditioner resting on the floor only a chattel'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG1', issue: 'sectioning-and-subdivision', label: 'Dividing a lot: sectioning and undivided shares' },
              { session: 'LG2', issue: 'undivided-shares-and-good-title', label: 'Undivided shares, tenancy in common and good title' },
            ],
          },
          {
            id: 'boundaries-and-plans',
            title: 'Boundaries, plans and the verbal description',
            summary: 'There are no guaranteed boundaries in Hong Kong — so the question is one of construction, and the plan usually loses.',
            triggers: {
              bullets: [
                'The verbal description in the Government lease gives frontages of 110 feet, and the annexed plan shows a strip several feet narrower.',
                'The parcels clause says the land is "more particularly delineated and described" on the annexed plan.',
                'Two neighbouring owners each claim the same three feet of a New Territories lot.',
                'The lot was sectioned and no plan was drawn up by a surveyor or registered.',
                'The land is in the New Territories and the only survey is the cadastral one from 1893-1903.',
                'A purchaser asks whether he can rely on the Government\'s plan as a guarantee of the area he is buying.',
                'The area is stated as "1,815 square feet or thereabouts" and the actual measurement differs.',
                'The words of the grant plainly contradict the plan and one of them has to give way.',
              ],
              routes: [
                { when: 'The lot is being divided rather than measured', session: 'LG1', issue: 'sectioning-and-subdivision', label: 'Dividing a lot: sectioning and undivided shares' },
                { when: 'The dispute is about an item on the land rather than the extent of it', session: 'LG1', issue: 'what-is-land', label: 'Is it "land"? Fixtures, chattels and fittings' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Resolving a boundary or plan conflict',
                steps: [
                  {
                    label: 'Start from the fact that Hong Kong guarantees no boundaries',
                    detail: 'There are no guaranteed boundaries in Hong Kong. Resolving a boundary dispute is therefore an exercise in construing the grant rather than consulting a register, and the surveys the boundaries derive from differ between the New Territories and the urban areas.',
                    why: 'This is the premise that makes the whole exercise contractual rather than registral. In a title-guarantee system you would look up the boundary; here there is nothing to look up, so the boundary is whatever the grant, construed objectively, says it is.',
                    exam: {
                      write: 'There is no system of guaranteed boundaries in Hong Kong, so the dispute falls to be resolved as a matter of construction of the Government lease.',
                      trap: 'Treating the Land Registry as a register of title or of boundaries. It is a register of deeds; it guarantees neither.',
                    },
                    points: [
                      'The approach to resolving boundary disputes is contractual.',
                      'Under s30 of the Land Survey Ordinance (Cap. 473), where land is divided by sectioning a plan must be drawn up by a surveyor and registered.',
                      'In the New Territories the cadastral "Indian" survey of 1893-1903 divided the land into about 477 Demarcation Districts, allocated to owners by the Land Court in 1905.',
                      'On Hong Kong Island and in Kowloon, boundaries were delineated on the grant itself, often imperfectly.',
                    ],
                  },
                  {
                    label: 'Identify the operative provision, which is usually the verbal description',
                    detail: 'The question is the intention of the parties as evidenced by the words they used, which is an objective test. That intention is ascertained from the operative provision, which is usually the verbal description in the parcels clause.',
                    why: 'A conveyance operates by its words; the plan is an aid to understanding them. Starting with the plan inverts the relationship and lets a draughtsman\'s error rewrite the grant.',
                    exam: {
                      write: 'The intention of the parties is ascertained objectively from the words used, and the operative provision here is the verbal description in the parcels clause: Secretary for Justice v Wing Lung Wai Community [1999] 3 HKC 580, CA.',
                      trap: 'Announcing that "the plan prevails" as a rule. It is the exception, and only on particular wording.',
                    },
                    points: [
                      'The test is the intention of the parties as evidenced by the words used — an objective test: Secretary for Justice v Wing Lung Wai Community [1999] 3 HKC 580, CA, per Chan CJHC.',
                      'Look to the operative provision, usually the verbal description, to ascertain that intention: Yam Yun Fai v Yip Siu Hung [1992] 1 HKLR 346.',
                    ],
                  },
                  {
                    label: 'Then ask what the plan is permitted to do',
                    detail: 'A plan annexed to the grant may be looked at to elucidate the verbal description, but not so as to contradict it. The exception is a parcels clause saying the land is "more particularly delineated and described" on the plan, where the plan may prevail.',
                    why: 'The line drawn in the cases is between elucidation and contradiction. A plan may explain an ambiguous description; it may not be used to say the description means the opposite of what it says.',
                    exam: {
                      write: 'The plan may be looked at for elucidation but not so as to contradict the verbal description: Green Park Properties Ltd v Dorku Ltd.',
                      trap: 'Missing that the answer flips on the phrase "more particularly delineated and described". Search the parcels clause for it before concluding.',
                    },
                    points: [
                      'Plans may be looked at for elucidation but not so as to contradict the verbal description: Green Park Properties Ltd v Dorku Ltd [2001] 1 HKLRD 139 (CA), (2001) 4 HKCFAR 448 (CFA).',
                      'Where the land is said to be "more particularly delineated and described" on the plan, the plan may prevail: Harvest Rise v Ling Yau Yung [2002] 2 HKLRD 378 (G. Ma J); Eastwood v Ashton [1915] AC 900.',
                      'The specimen Government Lease of Inland Lot 4494 in Appendix I uses exactly that phrase, which is why it carries a marginal note pointing to Eastwood v Ashton.',
                    ],
                  },
                  {
                    label: 'Consider rectification if the words genuinely miss the parties\' intention',
                    detail: 'Where the words of the grant fail to record what the parties actually agreed, the court may modify or even supply words so as to give effect to their true intention. That is rectification, and it is a different exercise from construction.',
                    why: 'Construction can only work with the words on the page. Where the parties plainly agreed something the document fails to express, the answer is to correct the document rather than to strain its language into a meaning it cannot bear.',
                    exam: {
                      write: 'If the words as they stand do not reflect the parties\' true intention, the Court may modify or even supply words so as to give effect to that intention.',
                      trap: 'Reaching for rectification as a first resort. It is what you say after construction has been attempted and has failed.',
                    },
                    points: [
                      'The Court may modify or even supply words — that is, rectify — so as to give effect to the parties\' true intention.',
                      'That is a distinct exercise from construction and needs its own evidential foundation.',
                    ],
                  },
                  {
                    label: 'State the practical answer for the transaction',
                    detail: 'The client needs to know what the vendor can convey and whether to complete. Say which description governs, whether the statutory plan requirements were met on any sectioning, and how large a discrepancy in area the grant itself contemplated.',
                    why: 'A boundary opinion is advice about risk, not an abstract ruling. The purchaser wants to know whether to take the title, raise a requisition, or insist on a survey before completion.',
                    exam: {
                      write: 'On the true construction of the Government lease the boundary follows [the verbal description / the plan], so the disputed strip [does / does not] form part of the lot the vendor can convey.',
                      trap: 'Answering the construction question and never saying what the purchaser should do about it.',
                    },
                    points: [
                      'Say which description governs, and therefore what the vendor can actually convey.',
                      'Where a lot has been sectioned, check that the s30 plan was drawn up by a surveyor and registered.',
                      'Where the area is qualified by "or thereabouts", a modest discrepancy is within what the grant contemplated.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The phrase that changes the answer is "more particularly delineated and described". Look for it explicitly; it is easy to read past.',
                'Wing Lung Wai and Yam Yun Fai are both about finding the operative provision — they are not competing tests.',
                'The New Territories position differs in origin (a cadastral survey and the Land Court) but the construction exercise on a conflict is the same.',
                'An "or thereabouts" qualification on the area is doing real work and should be quoted if the facts give it.',
              ],
            },
            skeleton: {
              bullets: [
                'State that there are no guaranteed boundaries, so the question is one of construction.',
                'Identify the operative provision — normally the verbal description.',
                'Apply the objective test of intention from the words used.',
                'Ask whether the plan is being used to elucidate or to contradict.',
                'Check for "more particularly delineated and described".',
                'Consider rectification only if construction cannot reach the parties\' intention.',
                'Say what the vendor can convey, and what requisition or survey follows.',
              ],
            },
            mistakes: {
              bullets: [
                'Asserting a fixed hierarchy between plan and words. The hierarchy depends on the wording of the parcels clause.',
                'Using the plan to contradict a clear verbal description.',
                'Forgetting s30 of the Land Survey Ordinance where the facts involve sectioning.',
                'Treating a registered plan as a guarantee of the boundary.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Authority', 'What it establishes'],
                rows: [
                  ['Sectioning plans', 's30, Land Survey Ordinance (Cap. 473)', 'Where land is divided by sectioning, a plan must be drawn up by a surveyor and registered'],
                  ['The test', 'Secretary for Justice v Wing Lung Wai Community [1999] 3 HKC 580, CA', 'Intention of the parties as evidenced by the words used — an objective test'],
                  ['Operative provision', 'Yam Yun Fai v Yip Siu Hung [1992] 1 HKLR 346', 'Consider the operative provision, usually the verbal description'],
                  ['Elucidation only', 'Green Park Properties Ltd v Dorku Ltd [2001] 1 HKLRD 139 (CA), (2001) 4 HKCFAR 448 (CFA)', 'Plans may elucidate but not contradict the verbal description'],
                  ['When the plan prevails', 'Harvest Rise v Ling Yau Yung [2002] 2 HKLRD 378; Eastwood v Ashton [1915] AC 900', '"More particularly delineated and described" can give the plan priority'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG1', issue: 'sectioning-and-subdivision', label: 'Dividing a lot: sectioning and undivided shares' },
              { session: 'LG1', issue: 'lease-or-conditions', label: 'Government lease or Conditions? Legal estate or equitable interest' },
              { session: 'LG4', issue: 'raising-requisitions', label: 'Raising requisitions: the time limits' },
            ],
          },
          {
            id: 'sectioning-and-subdivision',
            title: 'Dividing a lot: sectioning and undivided shares',
            summary: 'Two different ways to split a lot — physically by deed poll, or notionally into undivided shares — and they produce very different ownership.',
            triggers: {
              bullets: [
                'An owner of Lot 1234 wants to sell off the eastern half of the plot and keep the rest.',
                'The title documents refer to "Section A of Lot 1234" and "the Remaining Portion of Lot 1234" and the purchaser cannot follow the naming.',
                'A developer proposes to build a block of forty flats and sell each one separately.',
                'The purchaser of a flat asks what exactly he will own, given that the building sits on one lot.',
                'A flat owner claims to be entitled to possession of the whole lot because he is a tenant in common of it.',
                'Section A has been sectioned again and the parties are unsure what the two new parts are called.',
                'The lot was divided and no surveyor\'s plan was registered.',
                'Forty flats are about to go into separate hands and nobody has settled who will manage the building.',
              ],
              routes: [
                { when: 'The dispute is where the boundary of the section actually runs', session: 'LG1', issue: 'boundaries-and-plans', label: 'Boundaries, plans and the verbal description' },
                { when: 'A modification letter was issued for one section only', session: 'LG1', issue: 'modification', label: 'Modifying the lease or the Conditions' },
                { when: 'The building is divided into undivided shares and governed by a deed of mutual covenant', session: 'LG2', issue: 'developer-sequence', label: 'The stages from lot to registered deed of mutual covenant' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Working out how a lot has been divided',
                steps: [
                  {
                    label: 'First ask whether the division is physical or notional',
                    detail: 'Subject to any prohibition in the Government lease or Conditions, an owner is at liberty to deal with the leasehold interest in his lot. He may divide the plot on the ground and sell part of it, which is sectioning, or build a multi-storey building and assign each flat, which requires subdivision into undivided shares.',
                    why: 'The two routes answer different commercial problems. Selling off a piece of ground is a physical division; selling forty flats stacked on the same ground cannot be, because no flat occupies a distinct piece of the lot\'s surface.',
                    exam: {
                      write: 'The owner wishes to dispose of [a distinct part of the ground / individual units in a building], so the appropriate mechanism is [sectioning / subdivision into undivided shares].',
                      trap: 'Using "subdivision" loosely to mean any division. In this lecture subdivision specifically means the undivided-shares route.',
                    },
                    points: [
                      'Subject to any prohibition in the Government lease or Conditions, an owner is at liberty to deal with the leasehold interest in his lot — to sell, give away, lease or leave it by will.',
                      'He may divide the plot on the ground and sell part of it: that is sectioning.',
                      'Or he may build a multi-storey building and assign each flat to a different purchaser: that is subdivision into undivided shares.',
                      'Check the grant first — a restriction on alienation may prevent either until the conditions are complied with.',
                    ],
                  },
                  {
                    label: 'If it is physical: section the lot by deed poll, and follow the naming convention',
                    detail: 'A physical division is carried out by deed poll, and the parts are named by a fixed convention under which each division produces one named Section and leaves a Remaining Portion. A plan must be drawn up by a surveyor and registered: s30, Land Survey Ordinance (Cap. 473).',
                    why: 'The convention exists so that any lot can be split indefinitely without ever reusing a name. Each division creates one named Section and leaves a Remaining Portion, so the chain of names records the history of the divisions.',
                    exam: {
                      write: 'The lot is divided by deed poll, producing Section A of Lot [number] and the Remaining Portion of Lot [number].',
                      trap: 'Getting the naming wrong on a second division. Sectioning Section A produces Subsection 1 of Section A, and the rest stays the Remaining Portion of Section A — not "Section B of Section A".',
                    },
                    points: [
                      'Sectioning is carried out by deed poll.',
                      'A first division of Lot 1234 gives Section A of Lot 1234 and the Remaining Portion of Lot 1234.',
                      'Dividing Section A again gives Subsection 1 of Section A of Lot 1234, with the other part remaining the Remaining Portion of Section A of Lot 1234.',
                      'Dividing a remaining portion again produces the next letter — Section B of Lot 1234 — with the other part keeping the remaining-portion designation.',
                      'A plan by a surveyor must be drawn up and registered: s30, Land Survey Ordinance (Cap. 473).',
                    ],
                  },
                  {
                    label: 'If it is notional: subdivide into undivided shares, and be precise about what each owner gets',
                    detail: 'A notional division gives each flat owner a number of undivided shares in the whole plot, held as tenant in common with the other owners, together with the exclusive right to occupy, use and enjoy — not to possess — a particular flat. The arrangement is held together by a deed of mutual covenant.',
                    why: 'This is the single most important structural fact about Hong Kong residential conveyancing. Nobody owns a flat as a parcel of land; each owner owns an abstract fraction of the whole lot, and the right to occupy a particular flat is contractual, arising from the deed of mutual covenant.',
                    exam: {
                      write: 'Each flat owner becomes a tenant in common of the whole lot, holding a number of undivided shares with the exclusive right to occupy, use and enjoy the particular flat.',
                      trap: 'Writing that the flat owner has the exclusive right to "possess" the flat. The right is to occupy, use and enjoy — possession of the whole is shared, which is what being a tenant in common means.',
                    },
                    points: [
                      'Each flat owner becomes a tenant in common of the whole plot.',
                      'He holds a number of undivided shares in the plot.',
                      'He has the exclusive right to occupy, use and enjoy — not to possess — a particular flat.',
                      'The plot is controlled by a deed of mutual covenant, which is the subject of LG2.',
                    ],
                  },
                  {
                    label: 'Check what the division does to the grant itself',
                    detail: 'Sectioning has a statutory consequence beyond the conveyancing convention. Where separate certificates of compliance are issued for separate sections, s14(5) of the Conveyancing and Property Ordinance deems separate Government leases to have been granted, so each section stands on its own.',
                    why: 'Sectioning is not merely a conveyancing label. Once separate certificates of compliance are issued for separate sections, the statute treats the sections as separately granted — which governs who has to consent to what afterwards.',
                    exam: {
                      write: 'By s14(5) of the Conveyancing and Property Ordinance separate Government leases are deemed to have been granted upon sectioning of the land, so a modification affecting one section does not require the consent of the owners of another.',
                      trap: 'Assuming every owner in a phased development has a say in later phases. Baynard decides the opposite where the sections were separately certified.',
                    },
                    points: [
                      'Baynard Ltd v Secretary for Justice (unreported) HCA 4073/2002 (11.4.2019), the "Gold Coast" case: a developer divided a site into sections for phased development and obtained separate certificates of compliance for each.',
                      'DHCJ Paul Lam SC held that by effect of s14(5) of the Conveyancing and Property Ordinance separate Government leases are deemed granted on sectioning, so modification letters for specific sections did not affect other owners and no consent was required.',
                      'The owners complaining about their lost sea view were not parties to the lease being modified.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The naming convention is examinable in its own right; practise it on a two-stage division until it is automatic.',
                '"Occupy, use and enjoy" is the formula. The deliberate omission of "possess" is the point of the phrase.',
                'A deed poll is a deed made by one party. That is why sectioning does not need a counterparty — the owner is dividing his own land.',
                'Baynard is as much a case about phased development and consent as it is about sectioning; the s14(5) deeming is what links the two.',
              ],
            },
            skeleton: {
              bullets: [
                'Ask whether the client wants to divide the ground or to sell units in a building.',
                'For a physical division: deed poll, the naming convention, and a registered surveyor\'s plan.',
                'For a building: undivided shares, tenancy in common, exclusive right to occupy, use and enjoy.',
                'Note that the deed of mutual covenant controls the subdivided lot.',
                'Consider s14(5) and Baynard where sections have been separately certified.',
              ],
            },
            mistakes: {
              bullets: [
                'Saying the flat owner owns the flat. He owns undivided shares in the lot.',
                'Using "possess" instead of "occupy, use and enjoy".',
                'Forgetting that a restriction on alienation in the grant may block the division altogether until compliance.',
                'Omitting the registered surveyor\'s plan required on a sectioning.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Authority', 'What it establishes'],
                rows: [
                  ['Sectioning plans', 's30, Land Survey Ordinance (Cap. 473)', 'A surveyor\'s plan must be drawn up and registered where land is divided by sectioning'],
                  ['Deemed separate leases', 's14(5), Conveyancing and Property Ordinance (Cap. 219)', 'Separate Government leases deemed granted upon sectioning'],
                  ['Phased development', 'Baynard Ltd v Secretary for Justice HCA 4073/2002 (11.4.2019)', 'Modification of one section does not require the consent of owners of other sections'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG1', issue: 'boundaries-and-plans', label: 'Boundaries, plans and the verbal description' },
              { session: 'LG1', issue: 'modification', label: 'Modifying the lease or the Conditions' },
              { session: 'LG1', issue: 'ddh-and-approvals', label: 'DDH clauses, alienation and other required approvals' },
              { session: 'LG2', issue: 'developer-sequence', label: 'The stages from lot to registered deed of mutual covenant' },
              { session: 'LG2', issue: 'sub-dmc', label: 'Sub-deeds of mutual covenant' },
              { session: 'LG3', issue: 'documents-of-title', label: 'Which documents are documents of title?' },
            ],
          },
          {
            id: 'lease-or-conditions',
            title: 'Government lease or Conditions? Legal estate or equitable interest',
            summary: 'Which document made the grant decides whether your client holds a legal estate or merely an equitable interest — and what has to happen to convert it.',
            triggers: {
              bullets: [
                'The title bundle starts with a document headed "Conditions of Sale" and there is no Government lease anywhere in it.',
                'The purchaser signed a Memorandum of Agreement at the fall of the hammer and paid a deposit at the auction.',
                'The building covenant required completion by 30 June 1989 and the building went up in 1988.',
                'Land was granted in exchange for other land the Government took back.',
                'Land was granted at a reduced premium for a church, a school or a clinic.',
                'The client\'s Government lease expired and he applied for a fresh grant.',
                'An assignment was executed after the Conditions of Sale but before any Government lease was deemed issued.',
                'A mortgage registered between the Conditions and the deemed lease is said to have lapsed on the deemed issue.',
                'The grantee has not yet complied with the positive conditions and wants to assign.',
                'The vendor claims to hold a legal estate under Conditions dated 1976 and cannot produce a certificate of compliance.',
              ],
              routes: [
                { when: 'Compliance is in issue and the date of the Conditions matters', session: 'LG1', issue: 'certificate-of-compliance', label: 'Proving compliance and the 1 January 1970 divide' },
                { when: 'The question is how long the term runs for', session: 'LG1', issue: 'term-renewal-extension', label: 'Term, renewal and extension' },
                { when: 'The grantee wants the restrictions changed rather than complied with', session: 'LG1', issue: 'modification', label: 'Modifying the lease or the Conditions' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Classifying the grant and the interest it confers',
                steps: [
                  {
                    label: 'Identify which instrument made the grant',
                    detail: 'Land used to be granted by Government lease and is now granted by way of Conditions. In the New Territories, Block Government leases were granted corresponding with the Demarcation Districts. A grantee under a Government lease or a Block Government lease receives a legal leasehold estate.',
                    why: 'Government leases stopped being issued, but the old ones are still on titles and the New Territories has its own species of them. The answer to every later question in this issue type turns on which of the three you are holding.',
                    exam: {
                      write: 'The grant here was made by [a Government lease / a Block Government lease / Conditions of Sale dated [date]], which determines the nature of the interest the grantee takes.',
                      trap: 'Calling everything a "Government lease" loosely. Conditions are a contract; a Block Government lease covers a whole Demarcation District, not a single plot.',
                    },
                    points: [
                      'Land used to be granted by Government leases; it is now granted by way of Conditions of Sale, Grant, Exchange and so on.',
                      'In the New Territories, Block Government leases were granted corresponding with the Demarcation Districts, dealing with blocks of land rather than individual plots.',
                      'A grantee under a Government lease or a Block Government lease receives a legal leasehold estate.',
                      'Government leases often contain a building covenant requiring a specified building to be erected within a stated time.',
                      'Land is sold by public auction or by private treaty for a premium plus an annual Government rent; private treaty is used in special cases such as low-cost housing, public utilities, schools, churches, temples, clinics and charitable purposes.',
                    ],
                  },
                  {
                    label: 'If it is Conditions, say which of the five kinds',
                    detail: 'Conditions come in five kinds, each recording why the Government parted with the land, and are invariably in two parts: General Conditions and Special Conditions.',
                    why: 'The five labels are not interchangeable — each records why the Government parted with the land, and that reason often explains the restrictions that follow. Conditions of Grant for a temple will carry a user restriction that Conditions of Sale by auction would not.',
                    exam: {
                      write: 'The grant was made by Conditions of [Sale / Exchange / Grant / Re-grant / Extension], which are in two parts: General Conditions and Special Conditions.',
                      trap: 'Forgetting the two-part structure. The user restriction and the building covenant are almost always Special Conditions, and a question that gives you both parts expects you to say which is which.',
                    },
                    points: [
                      'Conditions of Sale — where land is sold.',
                      'Conditions of Exchange — where the land granted is exchanged for other land. Land exchange entitlements (Letters A and B) may now only be exchanged for a cash payment.',
                      'Conditions of Grant — where land is granted for a particular purpose, such as charitable purposes or the small house policy in the New Territories.',
                      'Conditions of Re-grant — where the Government lease has expired and the grantee applies for a fresh grant.',
                      'Conditions of Extension — where additional land is granted, for example for development purposes.',
                      'The Conditions are invariably in two parts: General and Special conditions.',
                    ],
                  },
                  {
                    label: 'Establish that the Conditions are a binding contract',
                    detail: 'Where land is sold under Conditions, the purchaser receives the Conditions together with a Memorandum of Agreement which he signs. The two documents together constitute a binding contract: Attorney General v Tong Iu [1968] HKLR 603.',
                    why: 'Conditions look like a set of terms rather than an agreement, and the purchaser signs a separate short Memorandum. The point of Tong Iu is that the two documents are read together as one contract, so the purchaser is bound by conditions he never separately signed.',
                    exam: {
                      write: 'The Conditions of Sale together with the Memorandum of Agreement signed by the purchaser constitute a binding contract: Attorney General v Tong Iu [1968] HKLR 603.',
                      trap: 'Treating the Memorandum as the whole contract. It is the signature page for a document whose terms are the General and Special Conditions.',
                    },
                    points: [
                      'Where land is sold under Conditions, the purchaser receives the Conditions together with a Memorandum of Agreement which he signs.',
                      'The courts have held that these documents together constitute a binding contract: Attorney General v Tong Iu [1968] HKLR 603.',
                      'The specimen in Appendix II shows the shape: Particulars of the Lot, then General Conditions 1 to 15, then the Special Conditions, then a Memorandum of Agreement signed at the fall of the hammer.',
                    ],
                  },
                  {
                    label: 'State the interest the grantee holds before compliance — and protect it',
                    detail: 'Until the conditions have been complied with, the grantee under Conditions holds only an equitable interest under a specifically enforceable agreement. It is converted into a legal estate on compliance: s14(1)(a), Conveyancing and Property Ordinance (Cap. 219).',
                    why: 'This is the practical heart of the issue type. Until the conditions are performed the grantee has only what a purchaser under a specifically enforceable contract has: an equitable interest. An equitable interest is vulnerable to a later legal estate acquired without notice, which is why registration matters.',
                    exam: {
                      write: 'Until the conditions have been complied with, the grantee\'s interest under the specifically enforceable Conditions is merely an equitable interest; it should be registered in the Land Registry to protect it.',
                      trap: 'Saying the grantee "owns" the land from the date of the Conditions. He has an equitable interest under a contract, and the distinction is the whole point of this issue type.',
                    },
                    points: [
                      'The interest of the purchaser under the specifically enforceable Conditions is merely an equitable interest under the agreement.',
                      'It is converted into a legal estate when the conditions have been complied with: s14(1)(a), Conveyancing and Property Ordinance (Cap. 219).',
                      'To protect that interest the grantee should register it in the Land Registry.',
                    ],
                  },
                  {
                    label: 'Then apply the deeming provision on compliance',
                    detail: 'No Government lease is physically issued today. Instead, once the conditions have as a matter of fact been complied with, s14(1)(b) of the Conveyancing and Property Ordinance deems a Government lease to have been issued, on the terms conventionally contained in Government leases.',
                    why: 'No Government lease is physically issued any more. Rather than leave every modern title without the document at its root, the Ordinance deems the lease to have been issued once the conditions are met, and gives it the terms leases conventionally contained.',
                    exam: {
                      write: 'No Government lease is in fact issued; by s14(1)(a) of the Conveyancing and Property Ordinance a Government lease is deemed to have been issued upon compliance with the conditions, on the terms conventionally contained in Government leases.',
                      trap: 'Looking for the Government lease in the title bundle and raising a requisition when it is not there. For a modern title it will never be there.',
                    },
                    points: [
                      'Once the conditions have, as a matter of fact, been complied with, a Government lease is deemed issued: s14(1)(b), Conveyancing and Property Ordinance.',
                      'The terms of the deemed-issued Government lease are those conventionally contained in Government leases.',
                      'General Condition 13 of the Appendix II specimen says the same thing from the contract side: on performance to the satisfaction of the Director, and subject to approval of title, the purchaser is entitled to a lease containing the exceptions, reservations, covenants and conditions then inserted in leases of similar lots.',
                    ],
                  },
                  {
                    label: 'Check what happens to instruments made in the gap',
                    detail: 'Decades may pass between the Conditions and compliance, and the land will have been dealt with in the meantime. Section 42 of the Conveyancing and Property Ordinance preserves both the effect of instruments made in that gap and their registration.',
                    why: 'There can be decades between the Conditions and compliance, and a great deal of dealing happens in between. Without a saving provision the deemed issue of a new legal estate could be argued to wipe the slate, which would be unworkable.',
                    exam: {
                      write: 'By s42(1) of the Conveyancing and Property Ordinance an instrument taking effect after the agreement for the Government lease but before its issue has the same force and effect after that issue as it had immediately before.',
                      trap: 'Missing s42(2), which does the same job for the registration of such an instrument. A saved instrument with lost priority would be a hollow saving.',
                    },
                    points: [
                      'An instrument entered into and taking effect after the agreement for the Government lease but before its issue has the same force and effect in relation to the land after the issue as it had immediately before: s42(1), Conveyancing and Property Ordinance.',
                      'Where such an instrument is registered under the Land Registration Ordinance (Cap. 128), the registration continues in force after the issue of the Government lease, with effect from the date of registration: s42(2).',
                      'The Land Registry may make an entry directing attention to s42 in the registers relating to the affected land.',
                    ],
                  },
                  {
                    label: 'Draw the consequence for the transaction',
                    detail: 'Whether the vendor holds a legal estate or an equitable interest is not academic on a sale: it changes what he can show, what the purchaser must requisition, and whether a restriction on alienation still bites.',
                    why: 'The difference between a legal estate and an equitable interest is not academic on a sale: it changes what the vendor can show, what requisitions the purchaser must raise, and whether a restriction on alienation still bites.',
                    exam: {
                      write: 'The distinction matters because the grantee under a Government lease holds a legal estate, whereas the grantee under Conditions holds only an equitable interest until the conditions are complied with.',
                      trap: 'Answering the classification question and stopping. Say what the purchaser must now investigate — usually the certificate of compliance and any restriction on alienation.',
                    },
                    points: [
                      'Legal estate under a Government lease; equitable interest under Conditions until compliance.',
                      'Where compliance has not occurred, a restriction on alienation may prevent the grantee from assigning at all without consent.',
                      'The purchaser\'s next question is how compliance is to be proved, which depends on the date of the Conditions.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'Conditions of Grant are for a particular purpose. If the facts mention a temple, a school or a small house, expect a purpose-linked user restriction to follow.',
                'The Appendix II specimen is worth knowing by shape: Particulars, General Conditions 1-15, Special Conditions, Memorandum. General Condition 13 is the deemed-lease provision and Special Condition 7 the restriction on alienation.',
                'Section 14(1)(a) and 14(1)(b) are doing slightly different work — the conversion of the interest and the deemed issue of the document. Cite the one you mean.',
                'A Block Government lease is still a Government lease for this purpose: the grantee takes a legal leasehold estate.',
              ],
            },
            skeleton: {
              bullets: [
                'Identify the granting instrument and, if Conditions, which of the five kinds.',
                'Note the two-part General/Special structure.',
                'Establish the contract: Conditions plus Memorandum, per Tong Iu.',
                'State the interest before compliance: equitable, and registrable.',
                'Apply s14(1) on compliance: legal estate, deemed lease.',
                'Save any instrument made in the gap under s42(1) and its registration under s42(2).',
                'Say what the purchaser must investigate next.',
              ],
            },
            mistakes: {
              bullets: [
                'Describing a purchaser under Conditions as the holder of a legal estate before compliance.',
                'Raising a requisition for a Government lease that the statute says need never have been issued.',
                'Forgetting to advise registration of the equitable interest.',
                'Confusing Conditions of Exchange with Conditions of Extension — the first swaps land, the second adds it.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Authority', 'What it establishes'],
                rows: [
                  ['Conditions are a contract', 'Attorney General v Tong Iu [1968] HKLR 603', 'Conditions of Sale and the Memorandum of Agreement together constitute a binding contract'],
                  ['Conversion on compliance', 's14(1)(a), Conveyancing and Property Ordinance (Cap. 219)', 'A Government lease is deemed issued upon compliance, converting the equitable interest into a legal estate'],
                  ['Deemed issue', 's14(1)(b), Conveyancing and Property Ordinance', 'Once conditions are complied with in fact, the lease is deemed issued on conventional terms'],
                  ['Instruments in the gap', 's42(1), Conveyancing and Property Ordinance', 'An instrument taking effect before issue keeps the same force and effect afterwards'],
                  ['Registration in the gap', 's42(2), Conveyancing and Property Ordinance', 'Registration under the Land Registration Ordinance (Cap. 128) continues in force with effect from the date of registration'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG1', issue: 'certificate-of-compliance', label: 'Proving compliance and the 1 January 1970 divide' },
              { session: 'LG1', issue: 'term-renewal-extension', label: 'Term, renewal and extension' },
              { session: 'LG1', issue: 'ddh-and-approvals', label: 'DDH clauses, alienation and other required approvals' },
              { session: 'LG4', issue: 'ultimate-root', label: 'The ultimate root of title' },
              { session: 'LG4', issue: 'raising-requisitions', label: 'Raising requisitions: the time limits' },
            ],
          },
          {
            id: 'certificate-of-compliance',
            title: 'Proving compliance and the 1 January 1970 divide',
            summary: 'Whether the owner must prove compliance at all depends on one date — and where he must, the certificate has to be registered.',
            triggers: {
              bullets: [
                'The Conditions of Grant are dated 1976 and the vendor produces no certificate of compliance.',
                'A certificate of compliance was issued but never registered in the Land Registry.',
                'The Conditions are dated 1965 and the purchaser\'s solicitor raises a requisition asking for the certificate.',
                'The certificate says compliance is confirmed "without prejudice to all or any rights of the Crown" in respect of breaches existing or occurring later.',
                'The building covenant required completion by a stated date and the Director inspected the lot afterwards.',
                'The developer obtained separate certificates for each section of a phased development.',
                'The vendor says the lot was inspected and everything was in order, but has nothing in writing.',
                'The purchaser wants to know whether the vendor now holds a legal estate at all.',
              ],
              routes: [
                { when: 'The prior question is which instrument made the grant', session: 'LG1', issue: 'lease-or-conditions', label: 'Government lease or Conditions? Legal estate or equitable interest' },
                { when: 'A breach is admitted and the question is whether it defeats title', session: 'LG1', issue: 'good-title-no-real-risk', label: 'Does an unwaived breach defeat title?' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Proving that the conditions have been complied with',
                steps: [
                  {
                    label: 'Date the Conditions first — everything turns on 1 January 1970',
                    detail: 'How compliance is proved depends on whether the agreement for the Government lease — that is, the Conditions — was entered into before or after 1 January 1970. Sections 14(2) and 14(3) of the Conveyancing and Property Ordinance take opposite approaches either side of that date.',
                    why: 'The divide is a piece of statutory tidying. Titles deriving from pre-1970 Conditions were so numerous, and so often without any certificate, that requiring proof would have cast doubt on a great deal of good title. So the statute simply deems those conditions complied with.',
                    exam: {
                      write: 'The Conditions of Grant are dated [date], which is [before / after] 1 January 1970, so compliance [is deemed under s14(2) / must be proved under s14(3)].',
                      trap: 'Applying the certificate requirement to a pre-1970 grant and raising a requisition for a document that is not required and may never have existed.',
                    },
                    points: [
                      'The divide is the date of the agreement for the Government lease — that is, the date of the Conditions.',
                      'Get the date from the instrument, not from the date of the building works.',
                    ],
                  },
                  {
                    label: 'If the Conditions are dated before 1 January 1970: compliance is deemed',
                    detail: 'Conditions entered into before 1 January 1970 are deemed by s14(2) of the Conveyancing and Property Ordinance to have been complied with, so the Government lease is deemed issued and the owner\'s title is a legal estate, without any certificate.',
                    why: 'Deeming compliance converts the interest into a legal estate by operation of law, whatever the historical facts. That is a deliberate policy choice in favour of the security of old titles over historical accuracy.',
                    exam: {
                      write: 'The Conditions being dated before 1 January 1970, they are deemed to have been complied with under s14(2) of the Conveyancing and Property Ordinance, the Government lease is deemed issued, and no certificate of compliance is required.',
                      trap: 'Hedging. The consequence is clean: no requisition should be raised as to any certificate of compliance for a pre-1970 grant, and the Court of Final Appeal has confirmed it.',
                    },
                    points: [
                      'Conditions entered into before 1 January 1970 are deemed to have been complied with: s14(2), Conveyancing and Property Ordinance.',
                      'The Government lease is therefore deemed to have been issued and the owner\'s title is converted into a legal estate.',
                      'No certificate of compliance is required, so no requisition should be raised as to one.',
                      'Confirmed by the Court of Final Appeal in Minchest Ltd v Lau Tsui Kwai [2008] 2 HKC 283, CFA.',
                    ],
                  },
                  {
                    label: 'If the Conditions are dated after 1 January 1970: the owner must prove compliance',
                    detail: 'For Conditions entered into on or after 1 January 1970, s14(3) of the Conveyancing and Property Ordinance deems compliance only on the issue of a certificate of compliance by the Director of Lands and the registration of that certificate in the Land Registry.',
                    why: 'For modern grants the statute takes the opposite view: the burden of showing that a building covenant and a raft of positive conditions were actually performed falls on the owner, and it is discharged by a document the Director issues after inspecting.',
                    exam: {
                      write: 'The Conditions being dated after 1 January 1970, the owner must prove compliance; by s14(3) he is deemed to have complied upon the issue of a certificate of compliance and the registration of that certificate in the Land Registry.',
                      trap: 'Stating the section as though the certificate alone sufficed. Section 14(3) requires issue and registration, and registration is the limb that gets forgotten.',
                    },
                    points: [
                      'Under s14(3) of the Conveyancing and Property Ordinance, a person with a right to a Government lease upon compliance with conditions precedent is deemed to have complied upon the issue of a certificate of compliance and the registration of that certificate in the Land Registry.',
                      'The certificate is granted by the Director of Lands when he is satisfied that the relevant positive conditions have been complied with and that there is no current breach of any restrictive condition.',
                      'Registration in the Land Registry is a requirement of the section, not a formality: Tai Wai Kin v Cheung Wan Wah Christina [2004] 3 HKC 198.',
                    ],
                  },
                  {
                    label: 'Read what the certificate does and does not say',
                    detail: 'A certificate of compliance is evidence that the positive conditions were performed and that no restrictive condition was being breached at the date of inspection. It is expressly given without prejudice to the Government\'s rights in respect of any breach existing then or occurring afterwards.',
                    why: 'A certificate is evidence that the positive conditions were performed at the date of inspection. It is not an absolution for breaches of restrictive conditions, and the Government says so on the face of the document.',
                    exam: {
                      write: 'The certificate of compliance provides evidence that the positive conditions have been complied with and that there was no breach of a restrictive covenant at that date; it does not preclude the Government from enforcing a later breach.',
                      trap: 'Treating the certificate as a clean bill of health for all time. The specimen in Appendix III says in terms that confirmation is given without prejudice to the Government\'s rights in respect of breaches existing then or occurring afterwards.',
                    },
                    points: [
                      'The certificate provides evidence that the positive conditions have been complied with and that there has been no breach of any restrictive covenant.',
                      'The Appendix III specimen is a memorandum recording an inspection and confirming that the General and Special Conditions, including the building covenant, had been complied with and that all sums due had been paid.',
                      'It states expressly that confirmation of compliance is given without prejudice to all or any rights of the Government in respect of any breach existing at that date or occurring thereafter.',
                      'So a certificate answers the compliance question; it does not answer the breach question.',
                    ],
                  },
                  {
                    label: 'Watch for sectioned and phased developments',
                    detail: 'Where a site is developed in phases, each section is certified separately, and by s14(5) of the Conveyancing and Property Ordinance separate Government leases are deemed granted upon sectioning.',
                    why: 'Where a site is developed in phases, each section is certified separately, and the statute then treats each as separately granted. That is what allows later modifications to be negotiated section by section.',
                    exam: {
                      write: 'Separate certificates of compliance were issued for each section, so by s14(5) separate Government leases are deemed to have been granted on the sectioning.',
                      trap: 'Assuming one certificate covers the whole original lot once it has been sectioned.',
                    },
                    points: [
                      'Baynard Ltd v Secretary for Justice HCA 4073/2002 (11.4.2019): separate certificates for each section of a phased development.',
                      'By s14(5) of the Conveyancing and Property Ordinance, separate Government leases are deemed granted upon sectioning.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The date that matters is the date of the Conditions, not the date of the building works or of the certificate.',
                'Registration is half of s14(3). An unregistered certificate does not do the statutory job.',
                'The certificate speaks to positive conditions. A restrictive covenant is a continuing obligation and a certificate cannot exhaust it.',
                'Minchest is a CFA decision and settles the pre-1970 position — cite it rather than arguing from the statute alone.',
              ],
            },
            skeleton: {
              bullets: [
                'Date the Conditions and place them either side of 1 January 1970.',
                'Pre-1970: s14(2) deems compliance; no certificate needed; Minchest.',
                'Post-1970: s14(3) requires issue and registration of a certificate; Tai Wai Kin.',
                'Explain what the certificate evidences, and what it expressly leaves open.',
                'Check for sectioning and separate certificates under s14(5).',
                'State the effect on the vendor\'s title and on the purchaser\'s requisitions.',
              ],
            },
            mistakes: {
              bullets: [
                'Raising a requisition for a certificate on a pre-1970 grant.',
                'Accepting an unregistered certificate as satisfying s14(3).',
                'Reading the certificate as a waiver of past or future breaches.',
                'Confusing the Director of Lands\' certificate with the Building Authority\'s occupation permit — different authorities, different questions.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Authority', 'What it establishes'],
                rows: [
                  ['Pre-1970 grants', 's14(2), Conveyancing and Property Ordinance (Cap. 219)', 'Conditions entered into before 1 January 1970 are deemed complied with'],
                  ['Pre-1970 confirmed', 'Minchest Ltd v Lau Tsui Kwai [2008] 2 HKC 283, CFA', 'No certificate of compliance required for a pre-1970 grant'],
                  ['Post-1970 grants', 's14(3), Conveyancing and Property Ordinance', 'Deemed compliance upon issue of a certificate and its registration in the Land Registry'],
                  ['Registration required', 'Tai Wai Kin v Cheung Wan Wah Christina [2004] 3 HKC 198', 'The certificate must be registered for s14(3) to operate'],
                  ['Sectioned developments', 's14(5), Conveyancing and Property Ordinance; Baynard Ltd v Secretary for Justice HCA 4073/2002', 'Separate leases deemed granted on sectioning where each section is separately certified'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG1', issue: 'lease-or-conditions', label: 'Government lease or Conditions? Legal estate or equitable interest' },
              { session: 'LG1', issue: 'sectioning-and-subdivision', label: 'Dividing a lot: sectioning and undivided shares' },
              { session: 'LG1', issue: 'good-title-no-real-risk', label: 'Does an unwaived breach defeat title?' },
              { session: 'LG3', issue: 'documents-of-title', label: 'Which documents are documents of title?' },
              { session: 'LG4', issue: 'raising-requisitions', label: 'Raising requisitions: the time limits' },
            ],
          },
          {
            id: 'term-renewal-extension',
            title: 'Term, renewal and extension',
            summary: 'How long the grant runs, what 1997 did to it, and what the 2024 Ordinance does about 2047.',
            triggers: {
              bullets: [
                'The Government lease is for 999 years from 7 January 1862 at an annual rent of $20.',
                'The Conditions grant a term of 75 years renewable for a further 75 years at a rent to be fixed by the Director of Lands.',
                'The land is in the New Territories under a Block Government lease for 75 years from 1 July 1898.',
                'A New Territories lease was granted for a special purpose and the Government has refused to renew it.',
                'A non-renewable Government lease expired in 1995 and the owner asks what he now holds.',
                'A renewable lease expired in 1992 and the owner never executed any renewal paperwork.',
                'The lease expires in 2029, carries no right of renewal, and is neither a short term tenancy nor a special purpose lease.',
                'The client\'s lot appears on a non-extension list and he has been given six years\' notice.',
                'A multi-storey building has 300 owners and the question is how the option to renew could ever be exercised.',
                'An easement was granted "for the residue of the term of the lease" and the lease has since been renewed by statute.',
              ],
              routes: [
                { when: 'The question is whether the covenants survive the renewal', session: 'LG1', issue: 'covenants-running-and-spent', label: 'Does the covenant run, and is it spent?' },
                { when: 'The grant was by Conditions and compliance is in issue', session: 'LG1', issue: 'certificate-of-compliance', label: 'Proving compliance and the 1 January 1970 divide' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Working out the term and what extends it',
                steps: [
                  {
                    label: 'Read the term off the grant, and note how varied they are',
                    detail: 'There is no standard term. Grants have run from 75 years through 999 years to the 50 years the Basic Law now permits, and the length of the term tells you which historical regime the grant belongs to and therefore which renewal or extension mechanism applies to it.',
                    why: 'There is no standard term. The length tells you which historical regime the grant belongs to, and therefore which renewal or extension mechanism you are looking for — so reading it off accurately is the first move, not a detail.',
                    exam: {
                      write: 'The grant is for a term of [length] commencing [date], at an annual Government rent of [sum].',
                      trap: 'Assuming the term runs from the date of the document. The Appendix I lease is dated 1937 but the term runs from 7 January 1862.',
                    },
                    points: [
                      'The earliest grants were for a non-renewable term of 75 years.',
                      'In 1848 leases, mainly in Central and on the Peak, were granted for 999 years.',
                      'At the turn of the century leases were again issued for 75 or 99 years.',
                      'Up to 30 June 1997 the conventional grant by way of Conditions was 75 years, renewable for a further 75 years.',
                      'After the Basic Law came into force a grant may be made only for 50 years beginning from the date of the grant.',
                    ],
                  },
                  {
                    label: 'If the land is in the New Territories, apply the NT-specific regime',
                    detail: 'New Territories land was never ceded. It was held under the Second Convention of Peking for 99 years from 1 July 1898, so every New Territories term had to fit inside that period — which is why the leases run 75 years plus a renewal of 24 years less three days.',
                    why: 'New Territories land was never ceded; it was held under a treaty for 99 years from 1 July 1898. Every NT term had to fit inside that, which is why the leases are 75 years plus a renewal of 24 years less three days — and why all of them needed an extension when the treaty period ran out.',
                    exam: {
                      write: 'The lot is in the New Territories and was held under a Block Government lease for 75 years from 1 July 1898, renewable for 24 years less three days, extended by the New Territories Leases (Extension) Ordinance until 30 June 2047.',
                      trap: 'Forgetting "less three days". The term was cut short of the treaty expiry deliberately, and the phrase is examinable.',
                    },
                    points: [
                      'The New Territories were granted by treaty — not a domestic lease — to the British Government by the Second Convention of Peking for 99 years from 1 July 1898: Li Kwok Ching v Secretary for Justice HCA 1303/2010, judgment 31 March 2015.',
                      'Leases were granted for 75 years from 1 July 1898, renewable for 24 years less three days; from 1959 the term was 99 years from 1 July 1898 less three days.',
                      'The renewals were effected automatically by the New Territories (Renewable Government Leases) Ordinance.',
                      'All NT leases due to expire on 27 June 1997 were extended by the New Territories Leases (Extension) Ordinance until 30 June 2047, unless the lessee opted otherwise.',
                      'That Ordinance does not apply to special purpose leases in the New Territories, for which individual application for renewal must be made.',
                    ],
                  },
                  {
                    label: 'For Hong Kong Island and Kowloon, take the four Basic Law cases in turn',
                    detail: 'The 1997 transition had to deal with urban leases in four different states at once: expiring after 1997, non-renewable and expiring before it, renewable, and newly granted. Articles 120, 121 and 123 of the Basic Law and Annex 3 of the Joint Declaration deal with each separately.',
                    why: 'The 1997 transition had to deal with leases in four different states at once, and the Basic Law and the Joint Declaration deal with each separately. Getting the right limb matters because only some of them produce a new lease, and only some carry a rent that moves with the rateable value.',
                    exam: {
                      write: 'This is a [non-renewable lease expiring before 1997 / renewable lease / new lease granted before 1 July 1997 / new lease granted after 1 July 1997], so it is governed by Article [120 / 121 / 123] of the Basic Law.',
                      trap: 'Missing the difference in how the 3% rent is set. On a s5 renewal it is 3% of the rateable value at the date of renewal; on an Article 121 extension it is 3% as adjusted from time to time.',
                    },
                    points: [
                      'Leases expiring after 1997 are recognised by Article 120 of the Basic Law.',
                      'Non-renewable leases expiring before 1997 were extended without premium until 30 June 2047 at an annual rent of 3% of the rateable value as adjusted from time to time: Article 121. This produces a new lease.',
                      'Renewable leases expiring before or after 1997 are automatically renewed by ss5(1) and 5(2) of the Government Leases Ordinance (Cap. 40) for the stipulated period, at 3% of the rateable value as at the date of renewal — not as adjusted from time to time. This is not a new lease, and the renewal is recognised by Article 120.',
                      'New leases granted before 1 July 1997 for terms not expiring later than 30 June 2047 were permitted by Annex 3 of the Joint Declaration and are recognised by Article 120.',
                      'New leases granted after 1 July 1997 are dealt with in accordance with HKSAR policy under Article 123: 50 years from the date of grant, at a premium plus 3% of the rateable value as it changes from time to time.',
                    ],
                  },
                  {
                    label: 'Note how s5 solves the multi-storey renewal problem',
                    detail: 'An option to renew held by every co-owner of a multi-storey building is unexercisable in practice, because it would need all of them to execute. Section 5 of the Government Leases Ordinance (Cap. 40) cuts through that by treating the option as exercised.',
                    why: 'An option to renew held by three hundred co-owners is unexercisable in practice — you would need every one of them to execute. The statute cuts through it by treating the option as exercised, which is why nobody in a modern building has ever been asked to sign a renewal.',
                    exam: {
                      write: 'Where the renewal paperwork was never executed, s5 of the Government Leases Ordinance (Cap. 40) treats the land as if the owners had exercised the option to renew.',
                      trap: 'Advising a client to chase co-owners for signatures. The statute has already done the work.',
                    },
                    points: [
                      'A renewable lease over a multi-storey building would otherwise require every co-owner to execute the renewal.',
                      'Section 5 of the Government Leases Ordinance (Cap. 40) means that if the option-to-renew paperwork is not executed, the law treats the land as if the owners had exercised the option.',
                    ],
                  },
                  {
                    label: 'Then apply the 2024 extension mechanism for leases running out now',
                    detail: 'The Extension of Government Leases Ordinance (Cap. 648), in operation from 5 July 2024, answers the 2047 problem the way the 1997 problem was answered: by extending applicable leases automatically for 50 years, with a notified exclusion procedure for those that are not to be extended.',
                    why: 'The 2047 problem is the 1997 problem again: a large stock of leases expiring on one horizon, with owners unable to plan or borrow against them. The Ordinance answers it the same way — a statutory extension that requires no application and no premium — while keeping a route to refuse extension in a bad case.',
                    exam: {
                      write: 'The lease expires on [date], after 5 July 2024, carries no right of renewal and is neither a short term tenancy nor a special purpose lease, so it is an applicable lease and is extended for 50 years under the Extension of Government Leases Ordinance (Cap. 648).',
                      trap: 'Applying Cap. 648 to a short term tenancy or a special purpose lease. Both are carved out, and the question will usually tell you which you have.',
                    },
                    points: [
                      'The Extension of Government Leases Ordinance (Cap. 648) came into operation on 5 July 2024.',
                      'It applies to leases expiring on or after that date without a right of renewal, or with an exercised right of renewal, which are neither short term tenancies nor special purpose leases — in other words, leases for general commercial, residential or industrial uses.',
                      'Applicable leases are extended for 50 years from their expiry date unless specifically excluded: s3.',
                      'Where a lease is not to be extended, it goes on a non-extension list and six years\' notice is given. Grounds include serious breaches and the public interest.',
                      'Where owners did not exercise a right to renew, s5 of the Government Leases Ordinance deems it exercised and the Cap. 648 extension then runs.',
                    ],
                  },
                  {
                    label: 'Finally, ask what survives the renewal or extension',
                    detail: 'A renewal or extension carries the old burdens and benefits forward. Covenants relating to the land continue to have effect unless a contrary intention appears, and an easement granted for the residue of a term may run to the end of the extended term.',
                    why: 'An extension that wiped the covenants would be a windfall, and one that killed the easements would be a disaster. The statute and the cases both push the same way: the new term carries the old burdens and the old benefits.',
                    exam: {
                      write: 'By s42(3) of the Conveyancing and Property Ordinance, where a Government lease expires and is renewed or replaced by a new lease of the same land, any covenant relating to that land continues to have effect unless a contrary intention is expressed.',
                      trap: 'Assuming an easement expressed to last "for the residue of the term" dies on renewal. Lam Pau Ho holds the opposite as a matter of the parties\' intention.',
                    },
                    points: [
                      'Where a Government lease expires and is renewed or replaced by a new Government lease of the same land, any covenant relating to that land continues to have effect unless the contrary intention is expressed: s42(3), Conveyancing and Property Ordinance.',
                      'Lam Pau Ho v Cheung Kam Ming (unreported) HCMP 2026/97, 21/11/1997: an easement granted for the residue of the term of the lease continued to the end of the extended term, since the parties cannot have intended it to cease on a statutory extension.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The rent formula differs between mechanisms: 3% of rateable value as at the date of renewal on a s5 renewal, but as adjusted from time to time under Articles 121 and 123. It is a favourite distinction.',
                'Article 121 produces a new lease; the s5 renewal does not. Say which you are dealing with.',
                'Special purpose leases in the New Territories sit outside the NTL(E) Ordinance, and refusals to renew them have been held amenable to judicial review — a different answer from modification decisions.',
                'There is no Summer Vacation-style shortcut here: the dates are the dates, and 30 June 2047 is the horizon almost everything now points at.',
              ],
            },
            skeleton: {
              bullets: [
                'Read the term, the commencement date and the rent off the grant.',
                'Ask whether the land is in the New Territories or in Hong Kong Island / Kowloon.',
                'For NT land: 75 years from 1 July 1898, renewal of 24 years less three days, NT(RGL)O and NTL(E)O to 2047.',
                'For urban land: identify which of the four Basic Law cases applies and state the rent basis.',
                'Consider s5 of Cap. 40 where a renewal was never executed.',
                'Apply Cap. 648 where the lease expires on or after 5 July 2024.',
                'Conclude with what survives: s42(3) covenants, and easements per Lam Pau Ho.',
              ],
            },
            mistakes: {
              bullets: [
                'Running the term from the date of the instrument rather than the stated commencement date.',
                'Treating the Cap. 648 extension as available for special purpose leases or short term tenancies.',
                'Confusing an Article 121 extension (new lease) with a s5 renewal (not a new lease).',
                'Assuming covenants and easements lapse on renewal.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'The Government of the Hong Kong Special Administrative Region shall be responsible for their management, use and development and for their lease or grant to individuals, legal persons or organizations for use or development.', cite: 'Article 7, Basic Law — on land and natural resources within the HKSAR' },
              ],
              table: {
                headers: ['Situation', 'Mechanism', 'Rent basis'],
                rows: [
                  ['NT leases expiring 27 June 1997', 'New Territories Leases (Extension) Ordinance — extended to 30 June 2047', 'As provided by the Ordinance; NT small houses also covered by Article 122'],
                  ['NT renewable leases', 'New Territories (Renewable Government Leases) Ordinance — automatic renewal', 'As stipulated in the lease'],
                  ['Non-renewable lease expiring before 1997 (urban)', 'Extended without premium to 30 June 2047 — Article 121, Basic Law (a new lease)', '3% of rateable value as adjusted from time to time'],
                  ['Renewable lease (urban)', 'Automatic renewal — ss5(1) and 5(2), Government Leases Ordinance (Cap. 40); recognised by Article 120', '3% of rateable value as at the date of renewal'],
                  ['New lease granted before 1 July 1997', 'Annex 3, Joint Declaration; recognised by Article 120', '3% of rateable value adjusted from time to time for the period after 1 July 1997'],
                  ['New lease granted after 1 July 1997', 'HKSAR policy under Article 123 — 50 years from grant', 'Premium plus 3% of rateable value as it changes'],
                  ['General-purpose lease expiring on or after 5 July 2024', 'Extension of Government Leases Ordinance (Cap. 648), s3 — 50 years', 'Subject to the Ordinance; non-extension list carries six years\' notice'],
                  ['Effect on covenants', 's42(3), Conveyancing and Property Ordinance (Cap. 219)', 'Covenants continue unless a contrary intention is expressed'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG1', issue: 'lease-or-conditions', label: 'Government lease or Conditions? Legal estate or equitable interest' },
              { session: 'LG1', issue: 'covenants-running-and-spent', label: 'Does the covenant run, and is it spent?' },
              { session: 'LG1', issue: 'block-lease-nt', label: 'New Territories land: the Watford covenant and Melhado' },
            ],
          },
          {
            id: 'modification',
            title: 'Modifying the lease or the Conditions',
            summary: 'How a restriction gets changed, which instrument does it, and why the Government\'s refusal is generally unreviewable.',
            triggers: {
              bullets: [
                'A developer wants to build to 40 storeys on a lot restricted to 12 and is willing to pay for the privilege.',
                'The Conditions restrict user to industrial purposes and the owner wants to convert the building to offices.',
                'The Government has quoted a premium of several hundred million dollars for the modification and the client says it is irrational.',
                'A Government lease was modified by a letter rather than by a deed under seal.',
                'The Director of Lands refused an in-situ land exchange and the client wants to apply for judicial review.',
                'Modification letters were issued for one section of a phased development and the owners of another section say they should have been consulted.',
                'The plot ratio and site coverage restrictions have become uncommercial as the district has been rezoned.',
                'The client asks which department he should be applying to.',
              ],
              routes: [
                { when: 'The restriction has been breached rather than modified', session: 'LG1', issue: 'user-covenants', label: 'Is the use in breach of the user restriction?' },
                { when: 'The Government has simply not enforced for years', session: 'LG1', issue: 'waiver', label: 'Has the Government waived the breach?' },
                { when: 'The restriction in issue is a design, disposition and height clause', session: 'LG1', issue: 'ddh-and-approvals', label: 'DDH clauses, alienation and other required approvals' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Advising on a modification',
                steps: [
                  {
                    label: 'Identify the restriction the client actually needs changed',
                    detail: 'Modification is negotiated restriction by restriction and priced accordingly, so the first task is to identify precisely which covenants stand in the way — typically a restriction on the type of building, a user restriction, or a limit on height, plot ratio or site coverage.',
                    why: 'Modification is negotiated restriction by restriction and priced accordingly. A client who says "we want to redevelop" is usually asking about three or four separate covenants, and each has to be identified before anything can be applied for.',
                    exam: {
                      write: 'The client needs a modification of the [user / height / plot ratio / site coverage] restriction in [Special Condition x / the Government lease].',
                      trap: 'Treating "modification" as one undifferentiated application. Name the covenant and the clause.',
                    },
                    points: [
                      'Typical targets: a restrictive covenant limiting the type of building, a user restriction to residential, commercial, industrial or agricultural use, or a stipulated maximum height, plot ratio or site coverage.',
                      'It is very common in Hong Kong for a grantee to apply for variation or modification.',
                    ],
                  },
                  {
                    label: 'Apply to LACO, and expect to pay',
                    detail: 'Application is made to the Legal Advisory and Conveyancing Office of the Lands Department, and a premium will usually be charged. Modification premiums are one of the three ways the leasehold system produces revenue, alongside the premium on the original grant and Government rent.',
                    why: 'The premium is the point. The Government is monetising the value the modification releases, and the notes list modification premiums among the reasons the leasehold system is profitable for Hong Kong — alongside the grant premium and the rental income.',
                    exam: {
                      write: 'Application is made to the Legal Advisory and Conveyancing Office of the Lands Department, and a premium will usually be charged.',
                      trap: 'Sending the client to the Building Authority or the Town Planning Board. Those bodies answer different questions; the lease restriction is LACO\'s.',
                    },
                    points: [
                      'Application is made to LACO — the Legal Advisory and Conveyancing Office in the Lands Department.',
                      'A premium will usually be charged, which brings in substantial revenue for Government.',
                      'The leasehold system is profitable in three ways: the premium for the grant, the Government rental income, and the substantial premium payable on modification of restrictive covenants such as height, user, site coverage and plot ratio.',
                    ],
                  },
                  {
                    label: 'Use the right instrument — and note that the statute forgives the wrong one',
                    detail: 'A Government lease is a deed and should ideally be varied by a Deed of Variation under seal; Conditions are a document under hand and may be varied by a letter of modification. Section 14A of the Conveyancing and Property Ordinance now allows a Government lease to be modified by letter as well.',
                    why: 'A deed can only properly be varied by a deed; Conditions are a document under hand and can be varied by a letter. Practice had not always respected that, so a great many titles would have been defective on a technicality — which is exactly what s14A was enacted to cure.',
                    exam: {
                      write: 'A Government lease should be varied by a Deed of Variation under seal and Conditions by a letter of modification; but by s14A of the Conveyancing and Property Ordinance even a Government lease may be modified by a written letter of modification.',
                      trap: 'Raising a requisition on a Government lease modified by letter. Section 14A exists precisely to stop that requisition.',
                    },
                    points: [
                      'A Government lease should ideally be varied by a Deed of Variation, under seal.',
                      'Conditions, being simply a document under hand, may properly be varied by a letter of modification.',
                      'Section 14A of the Conveyancing and Property Ordinance provides that even a Government lease may be modified by a written letter of modification, so that previous departures from that principle do not prejudice landowners.',
                    ],
                  },
                  {
                    label: 'Advise that the refusal is generally not amenable to judicial review',
                    detail: 'When the Government modifies a lease it acts as a private landlord under a contract, not as a public authority exercising a public power, so public-law grounds such as irrationality generally have no purchase on a refusal.',
                    why: 'When the Government modifies a lease it is exercising the rights of a landlord under a contract, not a public power. Public-law grounds like irrationality have no purchase on a landlord deciding what to charge for relaxing a covenant it bargained for.',
                    exam: {
                      write: 'In deciding whether to grant a modification, and on the premium chargeable, the Government acts as a private landlord rather than in a public capacity, so the decision is not amenable to judicial review on grounds of irrationality.',
                      trap: 'Stating the proposition without the qualification. Sime Darby shows the boundary is contested, and leave to appeal to the CFA has been granted on when lease-related decisions are reviewable.',
                    },
                    points: [
                      'Hang Wah Chong Investment Co Ltd v Attorney-General [1981] 1 WLR 1141, [1981] HKLR 336 and Director of Lands v Yin Shuen Enterprises Ltd [2003] 2 HKC 490, CFA: the Government acts as a private landlord, so the decision is not reviewable for irrationality.',
                      'Sime Darby Motor Services Limited v Director of Lands [2024] HKCA 207 held a refusal of an in-situ land exchange not amenable to judicial review — but leave to appeal to the CFA has been granted on when Government lease-related decisions are amenable, so the law is not closed.',
                      'Contrast the refusal to renew a New Territories special purpose lease, which has been held amenable to judicial review.',
                    ],
                  },
                  {
                    label: 'Check who has to consent where the lot has been sectioned',
                    detail: 'Where separate certificates of compliance have issued for separate sections, s14(5) of the Conveyancing and Property Ordinance deems separate Government leases to have been granted. A modification of one section is then a transaction between the Government and that section\'s owner alone.',
                    why: 'Once sections are separately certified the statute deems separate leases, so a modification of one section is a transaction between the Government and that section\'s owner alone. Owners of other sections are strangers to it, however much the outcome affects their view.',
                    exam: {
                      write: 'By s14(5) of the Conveyancing and Property Ordinance separate Government leases are deemed granted on sectioning, so the modification letters for the other sections did not affect this owner and his consent was not required.',
                      trap: 'Assuming a right to be consulted because the development affects the client. Baynard turns on being a party to the lease, not on being affected by it.',
                    },
                    points: [
                      'Baynard Ltd v Secretary for Justice HCA 4073/2002 (11.4.2019), the "Gold Coast" case.',
                      'Separate certificates of compliance were issued for each section; modification letters were then issued on specific sections upon payment of premium.',
                      'Owners who complained that a remaining phase would cost them their sea view were held not to be parties to the lease being modified, so their consent was not required.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'Modification changes the covenant prospectively. It is not a cure for a past breach, which is the waiver question.',
                'The Sime Darby position is live. Note the grant of leave to the CFA rather than stating the law as settled.',
                'A modification of the height or plot ratio restrictions does not touch a separate design, disposition and height clause, which operates independently.',
                'Where the client is a developer who has not yet complied with the positive conditions, a restriction on alienation may be a bigger obstacle than the covenant he wants modified.',
              ],
            },
            skeleton: {
              bullets: [
                'Identify the specific covenant and clause to be modified.',
                'Advise that the application goes to LACO and a premium will be charged.',
                'Choose the instrument: Deed of Variation for a lease, letter of modification for Conditions — and cite s14A.',
                'Advise that a refusal or the premium is generally not reviewable, citing Hang Wah Chong and Yin Shuen, and flag Sime Darby.',
                'Where the lot is sectioned, apply s14(5) and Baynard to the question of consent.',
              ],
            },
            mistakes: {
              bullets: [
                'Advising a judicial review of the premium.',
                'Raising a requisition because a lease was modified by letter rather than by deed.',
                'Confusing modification with waiver: one changes the covenant, the other forgives a breach of it.',
                'Assuming neighbouring owners in a phased development must consent.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Authority', 'What it establishes'],
                rows: [
                  ['Instrument for modification', 's14A, Conveyancing and Property Ordinance (Cap. 219)', 'A Government lease may be modified by a written letter of modification'],
                  ['Not reviewable', 'Hang Wah Chong Investment Co Ltd v Attorney-General [1981] 1 WLR 1141, [1981] HKLR 336', 'Government acts as private landlord; decision not amenable to judicial review'],
                  ['Confirmed by the CFA', 'Director of Lands v Yin Shuen Enterprises Ltd [2003] 2 HKC 490, CFA', 'Same principle applied to the premium chargeable'],
                  ['Boundary contested', 'Sime Darby Motor Services Limited v Director of Lands [2024] HKCA 207', 'In-situ land exchange refusal not reviewable; CFA leave granted on the wider question'],
                  ['Sectioned developments', 's14(5), Conveyancing and Property Ordinance; Baynard Ltd v Secretary for Justice HCA 4073/2002', 'Modification of one section does not require other sections\' owners\' consent'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG1', issue: 'user-covenants', label: 'Is the use in breach of the user restriction?' },
              { session: 'LG1', issue: 'waiver', label: 'Has the Government waived the breach?' },
              { session: 'LG1', issue: 'sectioning-and-subdivision', label: 'Dividing a lot: sectioning and undivided shares' },
              { session: 'LG4', issue: 'raising-requisitions', label: 'Raising requisitions: the time limits' },
            ],
          },
          {
            id: 'user-covenants',
            title: 'Is the use in breach of the user restriction?',
            summary: 'Construe the words, measure the offending use, and decide whether what is happening on the land is caught.',
            triggers: {
              bullets: [
                'The lease permits only a private dwelling house and the owner has put up a block of flats.',
                'The grant restricts user to residential purposes and the flat is being run as a guesthouse.',
                'A covenant prohibits use as a boarding house and the premises have become a home for elderly persons.',
                'The Conditions permit industrial or godown purposes only and a garment company is testing sample clothing there.',
                'A bank is doing data processing in a building restricted to industrial purposes.',
                'A unit restricted to industrial use is being used to sell flowers.',
                'A logistics business is operating from premises restricted to industrial user, and the landlord knew that was the intention when he let them.',
                'One room of a private dwelling is used for charity administration and the rest is lived in.',
                'Land restricted to agricultural user has subterranean chambers built on it for storing ashes.',
                'Land permitted to be used for religious purposes now holds 26,000 niches for cremated ashes.',
                'The Conditions allow each owner one car-parking space and a car-stacking device has been installed.',
                'Parking is restricted to residents\' vehicles and a lorry used commercially is parked there nightly.',
              ],
              routes: [
                { when: 'The land is in the New Territories under a Block Government lease', session: 'LG1', issue: 'block-lease-nt', label: 'New Territories land: the Watford covenant and Melhado' },
                { when: 'The restriction relied on is the offensive trades clause', session: 'LG1', issue: 'offensive-trades', label: 'The offensive trades clause' },
                { when: 'The covenant was complied with once and the question is whether it still bites', session: 'LG1', issue: 'covenants-running-and-spent', label: 'Does the covenant run, and is it spent?' },
                { when: 'There is a breach but the Government has never enforced', session: 'LG1', issue: 'waiver', label: 'Has the Government waived the breach?' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Deciding whether a user covenant has been breached',
                steps: [
                  {
                    label: 'Quote the covenant and construe its words',
                    detail: 'These cases are won and lost on the words of the particular grant, and there is no free-standing meaning to be looked up: a search for a meaning of "house" valid for all times and circumstances was described as fruitless in Wah Yick Enterprises Co Ltd v Building Authority. Construe this covenant, in this grant, against this use.',
                    why: 'These cases are won and lost on the words of the particular grant. The reports read like a dictionary because each one is construing a different formula, and a case about "boarding house" decides nothing about a covenant that says "private dwelling house".',
                    exam: {
                      write: 'The covenant provides that [quote the words], so the question is whether [the use] falls within [the prohibited / the permitted] description.',
                      trap: 'Reasoning from the label the question gives the use ("a guesthouse") rather than from the words of the covenant. Construe first, characterise second.',
                    },
                    points: [
                      'The lease or Conditions may restrict user to residential, commercial, industrial or agricultural use, or restrict the type of building.',
                      'There is no free-standing meaning: a search for a meaning of "house" valid for all times and circumstances was described as fruitless in Wah Yick Enterprises Co Ltd v Building Authority (1999) 2 HKCFAR 574, per Litton PJ.',
                      'So construe this covenant, in this grant, against this use.',
                    ],
                  },
                  {
                    label: 'Work through the residential and dwelling-house line of cases',
                    detail: 'The residential and private dwelling-house formula is the most heavily litigated, and the decisions are strikingly restrictive: uses that are residential in a loose sense — a guesthouse, short-term paying tenants, a sub-let floor — have repeatedly been held to breach it.',
                    why: 'This is the most heavily litigated formula and the cases are strikingly restrictive — the courts have repeatedly held that a use which is residential in a loose sense is nonetheless commercial in character, and that is usually the answer a problem question is looking for.',
                    exam: {
                      write: 'Use as a [guesthouse / boarding house / home for the elderly] is commercial rather than residential in character and therefore breaches a covenant restricting user to [private residential] use.',
                      trap: 'Assuming that because people sleep there it is residential. Lau Yan Kin and the Aberdeen Shopping Plaza line say otherwise.',
                    },
                    points: [
                      'Wong Bei-nei v Attorney General [1973] HKLR 582: a covenant permitting only detached or semi-detached residential premises of a European type, to be used as a private dwelling house, prohibited the erection of a block of flats.',
                      'Fully Profit (Asia) Ltd v Secretary for Justice (2013) 6 HKCFAR 351: a covenant requiring no more than one house on the lot prohibited a multi-storey building.',
                      'Incorporated Owners of Hamilton Mansion v Yu Keim Chiu [1998] 1 HKC 112: a DMC limited to private residential use was breached by use as a photographer\'s studio and as a guesthouse.',
                      'Lau Yan Kin v Perfection (Global) Ltd (2016) LDPD 2697/2014, 4 February 2016: use of residential premises as a guesthouse breached the user clause — though the ruling was in the context of a private tenancy agreement, not a Government lease.',
                      'Aberdeen Shopping Plaza Ltd v Incorporated Owners of Aberdeen Na King Mansions HCA 9319/2000, 13/5/2003, and Winland Finance Ltd v Profit Fine Ltd [2006] 1 HKC 582: a prohibition on use as a boarding house caught a home for elderly persons and a nursing home.',
                      'Caradon District Council v Paton (2000) Times May 17, CA: occupation by paying tenants on short-term lets breached a covenant not to use the property otherwise than as a private dwelling house.',
                      'Dobbs v Linford [1952] 2 All ER 827: a covenant not to use the premises for any purpose other than a private dwelling house was breached by sub-letting the top floor.',
                      'Pandix Ltd v Hui Kam Kwei LDCS 400/2009, 14/10/2010: dwelling, residential and domestic mean the same, and commercial activities are not permitted.',
                    ],
                  },
                  {
                    label: 'If the covenant is industrial, ask what the activity actually is',
                    detail: 'The industrial cases run in two stages: is manufacturing involved at all, and if there is also a non-manufacturing element, is it substantial? That structure is what allows Mexx and Raider to sit alongside one another.',
                    why: 'The industrial cases turn on a single question — is manufacturing involved? — and then on whether the non-manufacturing element is substantial. That two-stage structure is what lets Mexx and Raider come out differently on superficially similar facts.',
                    exam: {
                      write: 'The test of whether user is industrial is whether manufacturing is involved; here the [activity] is [not] manufacturing, and it [is / is not] a substantial part of the use.',
                      trap: 'Stopping at "part of the use is not industrial". Mexx shows a non-industrial element that is not substantial does not breach; Raider shows one that is substantial does.',
                    },
                    points: [
                      'Mexx Consolidated (Far East) Ltd v Attorney General [1987] HKLR 1210: use by a garment company for research, testing and manufacture of sample clothing; the test of industrial user was whether manufacturing was involved; the offending research and testing use was not substantial, so the user was permissible.',
                      'Cavendish Property Development Ltd v Attorney General HCMP 762/1987: use by a bank for data processing breached a covenant permitting industrial purposes only.',
                      'Raider Ltd v Secretary for Justice [2000] 3 HKLRD 300, CFA: manufacture of pagers plus the provision of paging services; the paging services were substantial and breached the Conditions.',
                      'Pak Wai Ching v Secretary for Justice HCMP 255/2003, 12/11/2003: selling flowers breached a covenant restricting use to industrial or godown purposes.',
                      'Incorporated Owners of Wing Ming Industrial Centre v Mantex Supplies Co Ltd HCA 1505/2007, 3/10/2007: use as a Chinese medical clinic breached a restriction to industrial user.',
                      'Older leases are restrictive; the Government now often uses a wider definition of industrial user in new grants, and has a revitalisation policy for industrial buildings.',
                    ],
                  },
                  {
                    label: 'Apply the partial breach test: how extensive or substantial is the offending use?',
                    detail: 'A covenant is not breached by every trivial departure. The test asks how extensive or substantial the offending use is relative to the whole, which is why one room used for charity work was not a breach while a substantial paging business was.',
                    why: 'A covenant is not breached by every trivial departure. The test asks about the scale and significance of the offending use relative to the whole, which is why one room used for charity work was not a breach but a paging business occupying much of a factory was.',
                    exam: {
                      write: 'The test for a partial breach is how extensive or substantial the offending use is: Donald W Shields (No 2) v Mary Chan [1972] HKLR 121. Here the [use] occupies [extent], which is [not] substantial.',
                      trap: 'Applying the partial breach test as though any non-conforming use is de minimis. It is a question of degree and the answer is often that the use is substantial.',
                    },
                    points: [
                      'Donald W Shields (No 2) v Mary Chan [1972] HKLR 121: premises to be used as private and domestic premises only; use of one room for conducting Oxfam business did not breach the covenant.',
                      'Contrast Raider, where the non-conforming paging services were substantial and did breach.',
                      'Cheermark Investment Ltd v Director of Lands [2018] 1 HKLRD 79, CA also has a partial-breach dimension: use of one floor of a five-storey building as a shop was, in the conditions then prevailing, not sufficiently significant to constitute a breach.',
                    ],
                  },
                  {
                    label: 'Check the specialised user cases the lecture flags',
                    detail: 'Agricultural and religious-purpose covenants have generated their own recent line of litigation, most of it about the storage of ashes, and Conditions restricting car parking have produced two further decisions worth having.',
                    why: 'Agricultural and religious-purpose covenants have produced a distinct line of recent litigation, almost all of it about storing ashes — which is both commercially important and a reliable exam fact pattern.',
                    exam: {
                      write: 'Use of the land as a columbarium breaches a covenant restricting user to [agricultural / religious] purposes: [Splendid Resources / Regal Shining].',
                      trap: 'Treating Splendid Resources as a Block Government lease case. It concerned a New Grant with agricultural user prescribed, which is why it sits alongside rather than inside the Watford/Melhado material.',
                    },
                    points: [
                      'Splendid Resources Inc v Secretary for Justice [2017] 2 HKLRD 421, [2017] 2 HKC 570: subterranean chambers for storing ashes on Po Toi Island breached a term in a New Grant restricting use to agricultural user.',
                      'Regal Shining Ltd v Secretary for Justice [2016] 3 HKC 291, CA: land permitted to be used for religious purposes; use as a columbarium breached the permitted user, the grant also providing that no grave should be made nor human remains interred or deposited on the lot in earthenware jars or otherwise.',
                      'Radford Portfolio Management Ltd v Secretary for Justice [2010] CACV 257/2009: Conditions restricting each owner to one car-parking space; a car-stacking device contravened the restriction.',
                      'Latangan Co Ltd v Chu Yip Sing [2011] DCCJ 3373/2008: Conditions specifying parking only for residents\' vehicles; parking a lorry used commercially breached the restriction.',
                    ],
                  },
                  {
                    label: 'Say what follows from the breach',
                    detail: 'A breach matters for what the Government may do about it and for what it does to a sale. The Government\'s remedy is re-entry; between vendor and purchaser the question becomes whether there is a real risk that the right would actually be exercised.',
                    why: 'A breach is only interesting because of what the Government may do about it and what it does to a sale. The remedies are drastic, and the court has shown it will not stand by and let a breach continue merely because the parties had priced it in.',
                    exam: {
                      write: 'The breach exposes the owner to re-entry by the Government and, on a sale, raises the question whether the vendor can show good title.',
                      trap: 'Forgetting that the enforcement question and the title question are different. The first asks what the Government can do; the second asks whether a purchaser must complete.',
                    },
                    points: [
                      'The Government\'s remedy is re-entry, exercised under the Government Rights (Re-entry and Vesting Remedies) Ordinance (Cap. 126) by registering a memorial of re-entry in the Land Registry; Part IV of the Land (Miscellaneous Provisions) Ordinance (Cap. 28) provides a summary remedy for breaches of Government leases and licences.',
                      'Regency Power Enterprises Ltd v SCS Express International Ltd HCA 2195/2009, 8/1/2010: a landlord who knew his tenant intended a commercial logistics use of industrially restricted premises still obtained an injunction, the court holding it could not stand by and permit a continuing breach of a Government lease.',
                      'Between vendor and purchaser the question becomes whether there is a real risk of enforcement.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'Do not import a meaning from a case construing different words. Wah Yick is authority that there is no universal meaning of "house".',
                'The partial breach test is a question of degree, and both answers are well represented in the cases — do not assume it rescues the owner.',
                'A user covenant in a deed of mutual covenant raises the same construction question but a different enforcement question. Hamilton Mansion is a DMC case.',
                'Where the facts mention that the landlord knew of the intended use and priced the rent accordingly, Regency Power is the answer: it did not prevent an injunction.',
              ],
            },
            skills: {
              bullets: [
                'Set out the words of the covenant before anything else, and keep returning to them.',
                'Characterise the use functionally — what is actually happening on the land — rather than by the name the parties give it.',
                'Where the use is mixed, quantify it: how many rooms, what proportion of floor area, how much of the turnover.',
                'Pair each authority with the formula it construed, so the reader can see why it applies.',
              ],
            },
            skeleton: {
              bullets: [
                'Quote the user covenant.',
                'Characterise the actual use on the facts.',
                'Construe the covenant against that use, using the closest decided formula.',
                'If the use is mixed, apply the partial breach test and quantify.',
                'Conclude on breach.',
                'State the consequence: re-entry, and the effect on title on a sale.',
              ],
            },
            mistakes: {
              bullets: [
                'Treating "residential" as covering anything where people sleep.',
                'Applying an industrial-user case to a residential covenant or vice versa.',
                'Concluding there is no breach because part of the use conforms, without measuring the offending part.',
                'Omitting the consequence, which is what the client actually needs.',
              ],
            },
            authorities: {
              table: {
                headers: ['Formula construed', 'Authority', 'Outcome'],
                rows: [
                  ['No universal meaning', 'Wah Yick Enterprises Co Ltd v Building Authority (1999) 2 HKCFAR 574', 'A free-standing meaning of "house" for all times and circumstances is fruitless'],
                  ['Private dwelling house', 'Wong Bei-nei v Attorney General [1973] HKLR 582', 'Block of flats prohibited'],
                  ['No more than one house', 'Fully Profit (Asia) Ltd v Secretary for Justice (2013) 6 HKCFAR 351', 'Multi-storey building prohibited'],
                  ['Private residential (DMC)', 'Incorporated Owners of Hamilton Mansion v Yu Keim Chiu [1998] 1 HKC 112', 'Photographer\'s studio and guesthouse both breached'],
                  ['Residential user', 'Lau Yan Kin v Perfection (Global) Ltd LDPD 2697/2014', 'Guesthouse use is commercial, not residential'],
                  ['Boarding house', 'Aberdeen Shopping Plaza HCA 9319/2000; Winland Finance Ltd v Profit Fine Ltd [2006] 1 HKC 582', 'Home for the elderly and nursing home both caught'],
                  ['Industrial — the test', 'Mexx Consolidated (Far East) Ltd v Attorney General [1987] HKLR 1210', 'Whether manufacturing is involved; non-substantial offending use permissible'],
                  ['Industrial — substantial breach', 'Raider Ltd v Secretary for Justice [2000] 3 HKLRD 300, CFA', 'Paging services substantial and in breach'],
                  ['Industrial — other uses', 'Cavendish HCMP 762/1987; Pak Wai Ching HCMP 255/2003; Mantex Supplies HCA 1505/2007', 'Data processing, flower selling and a medical clinic each breached'],
                  ['Partial breach', 'Donald W Shields (No 2) v Mary Chan [1972] HKLR 121', 'How extensive or substantial is the offending use'],
                  ['Agricultural user', 'Splendid Resources Inc v Secretary for Justice [2017] 2 HKLRD 421', 'Subterranean ash chambers breached agricultural user in a New Grant'],
                  ['Religious purposes', 'Regal Shining Ltd v Secretary for Justice [2016] 3 HKC 291, CA', 'Columbarium breached the permitted user'],
                  ['Car parking', 'Radford Portfolio Management [2010] CACV 257/2009; Latangan Co Ltd [2011] DCCJ 3373/2008', 'Car-stacking device and commercial lorry each breached'],
                  ['Enforcement despite knowledge', 'Regency Power Enterprises Ltd v SCS Express International Ltd HCA 2195/2009', 'Injunction granted; court will not permit a continuing breach of a Government lease'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG1', issue: 'offensive-trades', label: 'The offensive trades clause' },
              { session: 'LG1', issue: 'block-lease-nt', label: 'New Territories land: the Watford covenant and Melhado' },
              { session: 'LG1', issue: 'covenants-running-and-spent', label: 'Does the covenant run, and is it spent?' },
              { session: 'LG1', issue: 'waiver', label: 'Has the Government waived the breach?' },
              { session: 'LG1', issue: 'good-title-no-real-risk', label: 'Does an unwaived breach defeat title?' },
            ],
          },
          {
            id: 'block-lease-nt',
            title: 'New Territories land: the Watford covenant and Melhado',
            summary: 'Two clauses that look alike and are not: one in the body of the Block Government lease binds, the Schedule merely describes.',
            triggers: {
              bullets: [
                'The lot is in a Demarcation District and the Schedule to the Block Government lease describes it as "padi".',
                'The Government says the owner cannot store shipping containers on land described in the Schedule as agricultural.',
                'Land delineated as agricultural or garden land in a Block Government lease is being used for building purposes.',
                'A structure has been put up on New Territories land held under a Block Government lease and no approval was obtained.',
                'The owner argues that the Schedule entry "waste" fixes the permitted use of his lot for all time.',
                'Scrapped cars are being stored on New Territories agricultural land.',
                'The Government relies on a covenant in the body of the lease rather than on the Schedule.',
                'Concrete slabs have been laid on agricultural land and are intended to stay in place permanently.',
              ],
              routes: [
                { when: 'The land is urban and the restriction is an ordinary user covenant', session: 'LG1', issue: 'user-covenants', label: 'Is the use in breach of the user restriction?' },
                { when: 'The offensive trades clause in the Block lease is what is relied on', session: 'LG1', issue: 'offensive-trades', label: 'The offensive trades clause' },
                { when: 'The term and its statutory extension are in issue', session: 'LG1', issue: 'term-renewal-extension', label: 'Term, renewal and extension' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Applying a Block Government lease to New Territories land',
                steps: [
                  {
                    label: 'Establish that this is a Block Government lease and find both candidate clauses',
                    detail: 'It used to be thought that a Block Government lease contained two restrictive covenants, one in the body and one in the Schedule. Melhado decided that only the body covenant restricts user, so the first task is to separate the two and identify which is being relied on.',
                    why: 'It used to be thought there were two restrictive covenants — one in the body, one in the Schedule. Melhado decided there is only one, and the whole issue type is about not confusing them. So separating the two physically, in the document, is the first step.',
                    exam: {
                      write: 'The land is held under a Block Government lease covering Demarcation District [number]. The two provisions in issue are the covenant in the body of the lease and the description of the land in the Schedule.',
                      trap: 'Talking about "the restrictive covenant in the Block Crown lease" without saying which of the two you mean. The answer differs entirely.',
                    },
                    points: [
                      'Block Government leases in the New Territories dealt with blocks of land corresponding with the Demarcation Districts rather than with individual plots.',
                      'It used to be thought that there were two restrictive covenants: one in the body of the lease and one in the Schedule.',
                      'The body covenant is the Watford covenant; the Schedule is the Melhado point.',
                    ],
                  },
                  {
                    label: 'The body of the lease: the Watford covenant, which binds',
                    detail: 'The covenant in the body restricts land delineated or described as agricultural or garden land from being used for building purposes, and separately requires the Surveyor\'s approval before any building or structure of any description is erected on the demised premises.',
                    why: 'This is a genuine covenant given by the lessee, and Watford Construction confirmed it binds. It is what stops New Territories agricultural land simply being built over.',
                    exam: {
                      write: 'The covenant in the body of the Block Government lease restricts land delineated or described as agricultural or garden land from being used for building purposes, and was held binding in Watford Construction Co v Secretary for the New Territories [1978] HKLR 410, CA.',
                      trap: 'Citing Watford for the Schedule. Watford is about the body of the lease and it is still in force.',
                    },
                    points: [
                      'The first covenant, in the body of the Block Government lease, restricts land delineated or described as agricultural or garden land from being used for building purposes.',
                      'Held binding in Watford Construction Co v Secretary for the New Territories [1978] HKLR 410, CA. It is still in force.',
                      'The Land Registry\'s own extracts of a Block Government lease show the clause working as two limbs: a user limb, prohibiting the conversion of ground demised as agricultural or garden ground to building purposes otherwise than for its proper occupation as agricultural or garden ground without the previous licence of the Government; and a building limb, prohibiting the erection or construction of any building or structure of any description on the demised premises without the Surveyor\'s prior approval.',
                      'The exact words are not reproduced here as a quote box because they have been read off a scanned lease and could not be checked against an independent reproduction — the two limbs above are the substance, which is corroborated.',
                    ],
                  },
                  {
                    label: 'The Schedule: Melhado holds it is description, not restriction',
                    detail: 'The Schedule entries — "padi", "waste", "garden", "house", "grave" — record what each lot was being used for at the time of the grant, around 1905. Melhado holds that this is mere description and does not restrict the permitted use to that shown.',
                    why: 'The Schedule entries record what each lot was being used for in about 1905. Treating a snapshot of historical use as a perpetual restriction would have frozen New Territories land use for a century, and the Full Court declined to do it.',
                    exam: {
                      write: 'The description of the land in the Schedule as "padi" is a mere description of the use of the land at the time of the grant and is not a restrictive covenant restricting permitted use: Attorney General v Melhado Investments Ltd [1983] HKLR 327.',
                      trap: 'Arguing that the Schedule entry restricts use. It is the single most commonly misremembered point in this lecture, and the Full Court decided the opposite.',
                    },
                    points: [
                      'The Schedule to a Block Government lease describes the land as "padi", "waste", "garden", "house" or "grave".',
                      'Attorney General v Melhado Investments Ltd [1983] HKLR 327: that description is a mere description of the use at the time of the grant, not a restrictive covenant restricting permitted use to what is specified.',
                      'The practical consequence has been the massive use of New Territories land for storage of containers and of rubbish such as scrapped cars.',
                    ],
                  },
                  {
                    label: 'Then ask whether what has been put on the land is a "structure"',
                    detail: 'With the Schedule out of the picture, the live question is the body covenant\'s prohibition on erecting a building or structure without approval — which turns on whether the thing on the land is a structure at all.',
                    why: 'Once the Schedule is out of the picture, the live question becomes the body covenant and the approval requirement — and that turns on whether the thing on the land is a building or structure at all. Splendid Resources gives the working definition.',
                    exam: {
                      write: 'The concrete slabs are a structure, being something constructed and put together so as to make one whole intended to stay in place permanently: Splendid Resources Inc v Secretary for Justice.',
                      trap: 'Treating Splendid Resources as a Block Government lease case. It arose on a New Grant with agricultural user prescribed — useful for the definition of structure, not for Melhado or Watford directly.',
                    },
                    points: [
                      'Splendid Resources Inc v Secretary for Justice [2017] 2 HKLRD 421 defines a structure as anything constructed, involving the notion of something put together, consisting of a number of different things so put together or built together, constructed so as to make one whole.',
                      'On the facts, the concrete slabs were self-contained units, independent of one another, intended to stay in place permanently — and so were structures.',
                      'The case concerned a New Grant with agricultural user prescribed, not a Block Government lease; it is cited for the meaning of structure.',
                    ],
                  },
                  {
                    label: 'Note that the Block lease\'s offensive trades clause is differently drafted',
                    detail: 'A Block Government lease conventionally contains an offensive trades clause, but unlike the urban version it names no trades. It prohibits only the carrying on of any noisy, noisome or offensive trade or business, so the argument is always about the general words.',
                    why: 'The urban lease itemises a list of Victorian trades; the Block lease does not. That difference matters because the urban list can be argued over word by word, whereas the Block lease version is an open standard that has to be applied to the facts.',
                    exam: {
                      write: 'The Block Government lease prohibits only any noisy, noisome or offensive trade or business, without identifying particular trades.',
                      trap: 'Looking for "victualler" or "tavern-keeper" in a Block Government lease. They are not there.',
                    },
                    points: [
                      'Block Government leases conventionally contain an offensive trades clause, but it does not identify what trades are considered offensive.',
                      'It merely prohibits the carrying out of any noisy, noisome or offensive trade or business on the land.',
                      'Uni-Creation Investments Ltd v Secretary for Justice [2018] HKCA 141 held, in the context of a Block Government lease, that use of land in a deserted village as a columbarium did not on the evidence breach the restriction on noisy or noisome trades.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'Watford and Melhado are not in conflict. One is about the body of the lease and binds; the other is about the Schedule and does not restrict.',
                'The Block lease term is 75 years from 1 July 1898 with a renewal of 24 years less three days — the renewal proviso is in the lease itself.',
                'Splendid Resources is cited for the definition of "structure", and the lecture notes expressly warn that it was not a Block Government lease case.',
                'Uni-Creation is doing double duty: it is the Block lease offensive trades case and also the authority on the width of "offensive".',
              ],
            },
            skeleton: {
              bullets: [
                'Identify the land as New Territories land under a Block Government lease.',
                'Separate the body covenant from the Schedule description.',
                'Apply Watford to the body covenant: it binds.',
                'Apply Melhado to the Schedule: description only.',
                'If a thing has been put on the land, ask whether it is a structure per Splendid Resources.',
                'If an offensive trade is alleged, note the Block lease\'s narrower drafting.',
              ],
            },
            mistakes: {
              bullets: [
                'Treating the Schedule entry as a user restriction.',
                'Citing Watford for the Schedule or Melhado for the body covenant.',
                'Assuming the urban offensive trades list appears in a Block Government lease.',
                'Overlooking the separate requirement of the Surveyor\'s approval before erecting any building or structure.',
              ],
            },
            authorities: {
              table: {
                headers: ['Provision', 'Authority', 'Effect'],
                rows: [
                  ['Covenant in the body of the lease', 'Watford Construction Co v Secretary for the New Territories [1978] HKLR 410, CA', 'Binding: agricultural or garden land may not be used for building purposes'],
                  ['Description in the Schedule', 'Attorney General v Melhado Investments Ltd [1983] HKLR 327', 'Mere description of use at the date of grant; not a restrictive covenant'],
                  ['Meaning of "structure"', 'Splendid Resources Inc v Secretary for Justice [2017] 2 HKLRD 421', 'Something constructed and put together as one whole, intended to stay permanently'],
                  ['Block lease offensive trades clause', 'Uni-Creation Investments Ltd v Secretary for Justice [2018] HKCA 141', 'Prohibits any noisy, noisome or offensive trade without itemising; columbarium not in breach on the evidence'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG1', issue: 'user-covenants', label: 'Is the use in breach of the user restriction?' },
              { session: 'LG1', issue: 'offensive-trades', label: 'The offensive trades clause' },
              { session: 'LG1', issue: 'term-renewal-extension', label: 'Term, renewal and extension' },
            ],
          },
          {
            id: 'offensive-trades',
            title: 'The offensive trades clause',
            summary: 'A Victorian list of trades still sitting in urban Government leases — and a general words limb that has outlived the list.',
            triggers: {
              bullets: [
                'A pizza restaurant is trading from premises whose Government lease forbids a victualler or tavern-keeper.',
                'The premises are let to a sandwich chain and the lease prohibits use by a victualler.',
                'A shop sells roast meat and the purchaser\'s solicitor says the title is defeasible.',
                'A home for the elderly is operating from premises whose lease prohibits use as a tavern.',
                'A columbarium has been established in a deserted village on land held under a Block Government lease.',
                'The lease forbids the trade of a blacksmith, nightman or scavenger and the client cannot tell whether any of it still matters.',
                'The use complained of causes no smell, no noise and nothing visible, and the Government says it is still offensive.',
                'No licence in writing was ever obtained from the Governor or any person authorised in that behalf.',
              ],
              routes: [
                { when: 'The restriction relied on is a general user covenant, not the trades clause', session: 'LG1', issue: 'user-covenants', label: 'Is the use in breach of the user restriction?' },
                { when: 'The land is New Territories land under a Block Government lease', session: 'LG1', issue: 'block-lease-nt', label: 'New Territories land: the Watford covenant and Melhado' },
                { when: 'The Government has known of the trade for years and done nothing', session: 'LG1', issue: 'waiver', label: 'Has the Government waived the breach?' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Applying an offensive trades clause',
                steps: [
                  {
                    label: 'Find the clause and note which kind of lease it is in',
                    detail: 'The urban and Block lease versions are drafted quite differently. An urban Government lease itemises a list of Victorian trades and then adds general words; a Block Government lease has only the general words. Either way the prohibition is subject to a licence from the Government.',
                    why: 'The urban and Block lease versions are drafted quite differently, and the analysis diverges immediately: one gives you a closed list plus general words, the other only the general words.',
                    exam: {
                      write: 'The Government lease contains an offensive trades clause prohibiting the named trades and any other noisy, noisome or offensive trade or business without the previous licence of the Government.',
                      trap: 'Applying the itemised urban list to a Block Government lease. The Block version names no trades.',
                    },
                    points: [
                      'Urban Government leases for land on Hong Kong Island and in Kowloon contain an itemised offensive trades clause.',
                      'Block Government leases contain an offensive trades clause that names no trades and prohibits only any noisy, noisome or offensive trade or business.',
                      'The clause is subject to a licence: the prohibited trade may be carried on with the previous licence of the Government signified in writing.',
                    ],
                  },
                  {
                    label: 'Ask first whether the clause is still effective at all',
                    detail: 'These clauses are relics, and a court asked to enforce a prohibition on sugar-bakers and fellmongers has to decide whether the Government would ever act on it. The answer is fact-sensitive and runs alongside the question of construction.',
                    why: 'These clauses are relics. A court asked to enforce a prohibition on sugar-bakers and fellmongers in 2026 has to decide whether the Government would ever act on it, and Green Park suggests that for an ordinary modern food business it would not.',
                    exam: {
                      write: 'Whether the clause continues to be enforceable is itself in issue: in Green Park Properties Ltd v Dorku Ltd it was described as unthinkable that the Government would enforce the clause against a pizza restaurant.',
                      trap: 'Treating Green Park as having abolished the clause. It is a judgment about the likelihood of enforcement on those facts, and the older authorities on defeasible title were considered in it.',
                    },
                    points: [
                      'Green Park Properties Ltd v Dorku Ltd [2000] 2 HKLRD 400: for a pizza restaurant it was "unthinkable" that Government would enforce the clause, per Cheung J.',
                      'Older authorities in which a shop used for the sale of roast meat was held to render title defeasible were considered in that judgment.',
                      'So the question of enforceability is fact-sensitive and runs alongside the question of construction.',
                    ],
                  },
                  {
                    label: 'Construe the particular word relied on',
                    detail: 'The named trades are archaic and their meanings are not obvious, so each has had to be construed — and the results are not always merciful, "victualler" having been held to catch a modern sandwich shop.',
                    why: 'The named trades are archaic and their meanings are not obvious, so each has had to be construed. The results are not always merciful: "victualler" has been held to catch a modern sandwich shop.',
                    exam: {
                      write: 'The word relied on is "[victualler / tavern / noisy, noisome or offensive]", which has been construed to mean [meaning], and the present use [falls / does not fall] within it.',
                      trap: 'Assuming an archaic word must have a narrow modern application. Joint London Holdings caught a Pret a Manger outlet under "victualler".',
                    },
                    points: [
                      'Victualler: in Joint London Holdings Ltd v Mount Cook Land Ltd [2005] All ER (D) 77, construing a 1950 tenancy condition prohibiting use as a victualler, use as a Pret a Manger outlet was prohibited — a victualler meaning a person providing food and drink.',
                      'Tavern: Incorporated Owners of Yue Sun Mansion v Lake Side Elderly Centre Ltd LDBM 26/2015, 9/12/2016 held that use as a home for the elderly breached a restriction on use as a tavern, "tavern" meaning a dwelling place, an abode, a lodging house, or a public house providing accommodation and refreshments for payment especially for travellers.',
                      'But note the Court of Appeal granted conditional leave in HCMP 556/2017 on 15.5.2017, saying it was reasonably arguable that the provision did not prohibit the operation of an elderly or disability home.',
                    ],
                  },
                  {
                    label: 'If the general words are relied on, apply the Uni-Creation approach',
                    detail: 'The general words are the part of the clause with a future. Uni-Creation gives "offensive" a wider, fluid meaning — anything causing reasonable discomfort or disquiet — which cuts both ways, since a trade that offends nobody\'s senses may still be caught.',
                    why: 'The general words are the part of the clause with a future. Uni-Creation makes "offensive" a fluid, context-sensitive standard rather than a list of nuisances — which cuts both ways, since a trade that offends nobody\'s senses may still be offensive, and yet on the facts the columbarium was not.',
                    exam: {
                      write: 'Applying Uni-Creation Investments Ltd v Secretary for Justice, "offensive" bears a wider meaning including anything causing reasonable discomfort or disquiet to any person within the relevant location, judged in context.',
                      trap: 'Reading Uni-Creation as holding that a columbarium is offensive. The Court of Appeal upheld the finding that it did not infringe the clause on the evidence.',
                    },
                    points: [
                      'Uni-Creation Investments Ltd v Secretary for Justice [2018] HKCA 141: "offensive" should be given a wider meaning, to include anything which causes reasonable discomfort or disquiet to any person within the relevant location.',
                      'It is a fluid concept, and context matters when construing the clause — the sensitivities around the treatment of human remains and the worship of ancestors were part of that context.',
                      'A trade that does not offend by smell, noise or sight may still be offensive within the meaning of the clause.',
                      'On the facts the use did not infringe the clause, and that was upheld on appeal.',
                    ],
                  },
                  {
                    label: 'Check the licence limb and then state the consequence',
                    detail: 'The clause is a prohibition subject to consent, not an absolute bar: the trade may be carried on with the previous licence of the Government signified in writing. A client whose use is caught may therefore be able to regularise it.',
                    why: 'The clause is a prohibition subject to consent, not an absolute bar. A client whose use is caught may still be able to regularise it, which is a better answer than advising that the use must stop.',
                    exam: {
                      write: 'The prohibited trade may be carried on with the previous licence of the Government signified in writing; no such licence was obtained here, so the use is in breach.',
                      trap: 'Omitting the licence limb entirely and advising the client that the use is simply prohibited.',
                    },
                    points: [
                      'The prohibition operates without the previous licence of the Government, signified in writing by the Governor or other person duly authorised in that behalf.',
                      'If the use is in breach, the consequences are the Government\'s right of re-entry and, on a sale, the question whether the vendor can show good title.',
                      'Green Park is as much a title case as a construction case: the practical question was whether the breach made the title bad.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The clause is two limbs — the named trades and the general words — and they are argued differently. Say which limb you are on.',
                'Yue Sun Mansion should be cited with the grant of conditional leave noted; the point is arguable rather than settled.',
                'Uni-Creation is a Block Government lease case, so it also carries the point that the Block version names no trades.',
                'A breach of this clause raises the same title question as any other breach, so the analysis usually continues into waiver and real risk.',
              ],
            },
            skeleton: {
              bullets: [
                'Set out the clause and identify whether it is the urban or Block version.',
                'Raise the enforceability question, citing Green Park.',
                'Construe the specific word relied on, with the authority that construed it.',
                'If the general words are in play, apply Uni-Creation on the width of "offensive".',
                'Check whether any licence was obtained.',
                'State the consequence for enforcement and for title.',
              ],
            },
            mistakes: {
              bullets: [
                'Assuming an archaic named trade has no modern application.',
                'Citing Uni-Creation as authority that a columbarium breaches the clause.',
                'Forgetting the licence limb.',
                'Applying the itemised urban clause to New Territories land.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'that (the said Lessee) or any other person or persons shall not nor will during the continuance of this demise, use, exercise, or follow, in or upon the demised premises or any part thereof, the trade or business of a Brazier, Slaughterman, Soap-maker, Sugar-baker, Fellmonger, Melter of Tallow, Oilman, Butcher, Distiller, Victualler or Tavern-keeper, Blacksmith, Nightman, Scavenger or any other noisy noisome or offensive trade or business whatever without the previous licence of Her said Majesty signified in writing by the Governor or other person duly authorized in that behalf', cite: 'The offensive trades clause in an urban Government lease, as reproduced in the LG1 slides' },
              ],
              table: {
                headers: ['Word or limb', 'Authority', 'Outcome'],
                rows: [
                  ['Enforceability generally', 'Green Park Properties Ltd v Dorku Ltd [2000] 2 HKLRD 400', 'Unthinkable that Government would enforce against a pizza restaurant, per Cheung J'],
                  ['Victualler', 'Joint London Holdings Ltd v Mount Cook Land Ltd [2005] All ER (D) 77', 'A person providing food and drink; a Pret a Manger outlet was prohibited'],
                  ['Tavern', 'Incorporated Owners of Yue Sun Mansion v Lake Side Elderly Centre Ltd LDBM 26/2015', 'Home for the elderly breached the restriction; conditional leave granted in HCMP 556/2017'],
                  ['Noisy, noisome or offensive', 'Uni-Creation Investments Ltd v Secretary for Justice [2018] HKCA 141', '"Offensive" is wide and fluid; columbarium did not infringe on the evidence'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG1', issue: 'user-covenants', label: 'Is the use in breach of the user restriction?' },
              { session: 'LG1', issue: 'block-lease-nt', label: 'New Territories land: the Watford covenant and Melhado' },
              { session: 'LG1', issue: 'good-title-no-real-risk', label: 'Does an unwaived breach defeat title?' },
              { session: 'LG3', issue: 'encumbered-or-defeasible', label: 'Encumbered and defeasible titles' },
            ],
          },
          {
            id: 'ddh-and-approvals',
            title: 'DDH clauses, alienation and other required approvals',
            summary: 'Restrictions that work by requiring someone\'s consent rather than by forbidding a use — and why refusing that consent is usually unchallengeable.',
            triggers: {
              bullets: [
                'The Conditions require the Director\'s prior written approval of the design, disposition and height before any building works start.',
                'A developer wants to build the tallest building in the world and the Director has refused approval on aviation grounds.',
                'The Government has modified the height and plot ratio restrictions and the developer assumes the DDH clause went with them.',
                'The Conditions prohibit assignment before the positive conditions are complied with, and the developer wants to pre-sell flats.',
                'Special Condition 7 forbids the purchaser assigning or underletting without the prior written consent of the Land Officer.',
                'A layout plan had to be approved and the Government refused it.',
                'The Director of Environmental Protection required a noise barrier and the developer double-glazed the windows instead.',
                'A developer wants to judicially review a refusal of approval under a clause in the Conditions.',
              ],
              routes: [
                { when: 'The client wants the restriction changed rather than approved', session: 'LG1', issue: 'modification', label: 'Modifying the lease or the Conditions' },
                { when: 'The restriction is a user covenant rather than an approval clause', session: 'LG1', issue: 'user-covenants', label: 'Is the use in breach of the user restriction?' },
                { when: 'The question is whether compliance has been certified at all', session: 'LG1', issue: 'certificate-of-compliance', label: 'Proving compliance and the 1 January 1970 divide' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Working through an approval or consent clause',
                steps: [
                  {
                    label: 'Identify the clause and whose approval it requires',
                    detail: 'These clauses do not forbid anything outright; they transfer a decision to a named official. A design, disposition and height clause makes the building subject to the Director\'s prior written approval, a restriction on alienation makes any disposal subject to his consent, and other clauses require an approved layout plan or compliance with measures a named Director considers necessary.',
                    why: 'These clauses do not forbid anything outright; they transfer a decision to a named official. So the first question is not "is this permitted?" but "who decides, and have they decided?".',
                    exam: {
                      write: 'The Conditions provide that [the design, disposition and height of the building] shall be subject to the prior written approval of [the Director], and no building works may commence until that approval is given.',
                      trap: 'Reading an approval clause as a prohibition. The answer is usually about the exercise of a discretion, not about construction of a restriction.',
                    },
                    points: [
                      'A typical design, disposition and height clause provides that the design, disposition and height of the building to be erected on the lot shall be subject to the prior written approval of the Director, and no building works shall be commenced until such approval has been given.',
                      'A restriction on alienation typically prevents the grantee or developer alienating the land without the consent of the Director of Lands until the positive conditions have been complied with.',
                      'Other clauses require approval of a layout plan, or compliance with measures a named Director considers necessary.',
                    ],
                  },
                  {
                    label: 'For a DDH clause, apply Ying Ho and note its independence',
                    detail: 'A design, disposition and height clause gives the Director a discretion of his own, exercisable on grounds that need have nothing to do with the statutory building controls. Ying Ho shows how far that goes: a proposal for the highest building in the world was refused under it.',
                    why: 'Ying Ho is the case that shows how much a DDH clause is worth to the Government: it defeated a proposal for the highest building in the world on grounds that had nothing to do with the height figure in the Conditions. United Bright then confirmed the clause survives a modification of the numerical restrictions.',
                    exam: {
                      write: 'The Director was entitled to refuse approval under the design, disposition and height clause, and the Court of Final Appeal in Ying Ho Co Ltd v Secretary for Justice held that the discretion had been properly exercised.',
                      trap: 'Assuming a modification of the height and plot ratio restrictions relaxes the DDH clause. United Bright holds it operates independently.',
                    },
                    points: [
                      'Ying Ho Co Ltd v Secretary for Justice [2005] 1 HKLRD 135, CFA: a developer wished to build the highest building in the world in Tsuen Wan; the Director refused to approve the design because it would interfere with the airport landing system at Chek Lap Kok; the CFA held the Government had properly exercised its discretion under the DDH clause.',
                      'United Bright v Secretary for Justice [2015] 4 HKC 12, [2015] 2 HKLRD 633, CA: a DDH clause together with restrictions on height; the restrictions were later modified by the Government; the modification did not affect the DDH clause, which operated independently of them.',
                    ],
                  },
                  {
                    label: 'For a restriction on alienation, connect it to the Consent Scheme',
                    detail: 'A restriction on alienation stops a developer disposing of the land, or of flats in it, before the positive conditions have been performed. Where the developer wants to pre-sell, that is what brings the Consent Scheme into play.',
                    why: 'The restriction exists to stop a developer selling flats in a building it has not yet built on land whose conditions it has not yet performed. The Consent Scheme is the regulated route by which pre-sale nonetheless happens.',
                    exam: {
                      write: 'The Conditions restrict alienation without the consent of the Director of Lands until the positive conditions have been complied with, which invokes the Consent Scheme where the developer wishes to pre-sell flats.',
                      trap: 'Missing that the restriction bites only until compliance. After compliance, the restriction has done its work.',
                    },
                    points: [
                      'Where Government grants land for development there will usually be a restriction on alienation without the consent of the Director of Lands until the positive conditions have been complied with.',
                      'This invokes the operation of the Consent Scheme where the developer wishes to pre-sell flats in the property.',
                      'The Appendix II specimen shows the drafting: Special Condition 7 forbids assigning, underletting, parting with possession, mortgaging or charging, and requires every alienation to be registered at the Land Office.',
                    ],
                  },
                  {
                    label: 'Ask whether the refusal is amenable to judicial review — usually it is not',
                    detail: 'In administering its own grant the Government acts as a private landlord, so the usual public-law grounds do not run against a refusal of approval. Secan adds the qualification that a landlord must nonetheless act in good faith.',
                    why: 'The same reasoning as for modification: when the Government administers its own grant it is acting as a landlord. Secan adds an important qualification, though — even a landlord must act in good faith.',
                    exam: {
                      write: 'The Director\'s decision under the clause is not amenable to judicial review, as he is not performing a public duty; but he must still act in good faith: Secan Ltd v Attorney General.',
                      trap: 'Stating the no-review rule without Secan\'s good-faith qualification, which is the part a well-advised client will want to hear about.',
                    },
                    points: [
                      'Secan Ltd v Attorney General [1995] 2 HKC 629, CA: Conditions required the approval of the Director of Environmental Protection and compliance with measures he deemed necessary; the Director required a noise barrier and the developer double-glazed instead; the decision was not amenable to judicial review since the Director was not performing a public duty — although even so he still had to act in good faith, and the developer was obliged to comply.',
                      'Canadian Overseas Development Co Ltd v Attorney-General [1991] 1 HKC 288: Conditions stated that a layout plan had to be approved; the decision was held not subject to judicial review.',
                      'The same reasoning as for modification decisions: the Government is acting as a private landlord.',
                    ],
                  },
                  {
                    label: 'Separate the lease question from the building-control question',
                    detail: 'Approval of building plans and the issue of an occupation permit come from the Building Authority under the Buildings Ordinance. They say nothing about the Government\'s rights as lessor, and do not estop the Lands Department from enforcing a covenant in the grant.',
                    why: 'A developer with an approved set of building plans and an occupation permit naturally assumes he is in the clear. He is not: the Building Authority administers the Buildings Ordinance, and the Lands Department administers the lease, and neither binds the other.',
                    exam: {
                      write: 'Approval of building plans or the issue of an occupation permit by the Building Authority does not estop the Lands Department from enforcing a breach of a restrictive covenant in the Government lease: Hang Wah Chong.',
                      trap: 'Treating an occupation permit as evidence that the lease has been complied with. Lee To Ming is the case where a five-storey building had an OP and the lease permitted four.',
                    },
                    points: [
                      'Approval to build, or the issue of an occupation permit, does not estop the Lands Department from enforcing any restrictive covenant in the Government lease: Hang Wah Chong Investment Co Ltd v Attorney-General [1981] HKLR 336, PC.',
                      'Lee To Ming v Tam Kim Sum William [1999] 2 HKC 865: a restrictive covenant provided that no building exceeding four storeys should be erected; an occupation permit was issued for a five-storey building; the Government could still re-enter for breach of the Government lease.',
                      'The Appendix IV specimen occupation permit is issued under s21 of the Buildings Ordinance (Cap. 123) by the Building Authority, which is a different authority answering a different question.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'A DDH clause survives a modification of the numerical height and plot ratio restrictions. That independence is the whole point of United Bright.',
                'Secan is the case to cite when the client asks whether the Government can be arbitrary: no review, but good faith is still required.',
                'The alienation restriction and the Consent Scheme are the bridge from this lecture into pre-sale practice.',
                'Hang Wah Chong appears twice in this lecture — for the no-judicial-review point on modification and for the no-estoppel point here. Cite it for the one you mean.',
              ],
            },
            skeleton: {
              bullets: [
                'Identify the clause and the official whose approval it requires.',
                'For a DDH clause: Ying Ho on the discretion, United Bright on independence.',
                'For alienation: the restriction until compliance, and the Consent Scheme.',
                'Advise that a refusal is generally not reviewable, subject to good faith per Secan.',
                'Keep the Buildings Ordinance question separate: Hang Wah Chong and Lee To Ming.',
              ],
            },
            mistakes: {
              bullets: [
                'Treating a modification of the height restriction as relaxing the DDH clause.',
                'Advising that an occupation permit cures a lease breach.',
                'Omitting Secan\'s good-faith qualification when stating the no-review rule.',
                'Forgetting that the alienation restriction falls away once the positive conditions are complied with.',
              ],
            },
            authorities: {
              table: {
                headers: ['Clause', 'Authority', 'What it establishes'],
                rows: [
                  ['DDH clause', 'Ying Ho Co Ltd v Secretary for Justice [2005] 1 HKLRD 135, CFA', 'The Director properly exercised his discretion in refusing approval'],
                  ['DDH independence', 'United Bright v Secretary for Justice [2015] 4 HKC 12, [2015] 2 HKLRD 633, CA', 'A modification of the height restrictions does not affect the DDH clause'],
                  ['Other approvals', 'Secan Ltd v Attorney General [1995] 2 HKC 629, CA', 'Not amenable to judicial review, but the Director must act in good faith'],
                  ['Layout plans', 'Canadian Overseas Development Co Ltd v Attorney-General [1991] 1 HKC 288', 'Refusal to approve a layout plan not subject to judicial review'],
                  ['Occupation permit', 'Hang Wah Chong Investment Co Ltd v Attorney-General [1981] HKLR 336, PC', 'Building Authority approval does not estop the Lands Department'],
                  ['Worked example', 'Lee To Ming v Tam Kim Sum William [1999] 2 HKC 865', 'OP for five storeys did not prevent re-entry under a four-storey covenant'],
                  ['Occupation permits generally', 's21, Buildings Ordinance (Cap. 123)', 'The Building Authority issues a permit to occupy a new building'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG1', issue: 'modification', label: 'Modifying the lease or the Conditions' },
              { session: 'LG1', issue: 'lease-or-conditions', label: 'Government lease or Conditions? Legal estate or equitable interest' },
              { session: 'LG1', issue: 'waiver', label: 'Has the Government waived the breach?' },
            ],
          },
          {
            id: 'covenants-running-and-spent',
            title: 'Does the covenant run, and is it spent?',
            summary: 'Two separate questions that have to be answered in order before a covenant can be enforced against anybody but the original grantee.',
            triggers: {
              bullets: [
                'The original developer complied with the building covenant in 1965 and the present owner says nothing is left of it.',
                'A covenant said the lessee would not erect any building except domestic houses, and a domestic house was duly built.',
                'The pavilion required by the Conditions was built in 1937, demolished in 2000, and a new complex put up in its place.',
                'The Government is enforcing a covenant against a purchaser who bought from the developer twenty years ago.',
                'The covenant is in a Government lease and the client asks whether the CPO provisions apply to it at all.',
                'The grantee argues the covenant was exhausted by initial compliance.',
                'The lease was renewed by statute and the covenant is said not to have survived the renewal.',
                'The Director refused consent to a replacement building and the owner says consent was only ever needed for the first one.',
              ],
              routes: [
                { when: 'The question is whether the use breaches the covenant in the first place', session: 'LG1', issue: 'user-covenants', label: 'Is the use in breach of the user restriction?' },
                { when: 'The covenant is admittedly breached and the issue is non-enforcement', session: 'LG1', issue: 'waiver', label: 'Has the Government waived the breach?' },
                { when: 'The lease has been renewed or extended', session: 'LG1', issue: 'term-renewal-extension', label: 'Term, renewal and extension' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Testing whether a covenant still binds this owner',
                steps: [
                  {
                    label: 'Separate the two questions before answering either',
                    detail: 'Two distinct questions are in play, and they fail in different ways. First, does the covenant run with the land so as to bind successors in title at all? Only if it does is it worth asking the second, whether it has been spent by initial compliance.',
                    why: 'They fail in different ways and at different stages. A covenant that does not run never reaches the present owner at all; a covenant that runs but is spent reaches him and then does nothing. Running them together produces an answer that cannot be checked.',
                    exam: {
                      write: 'Two issues arise: first, whether the covenant runs with the land so as to bind successors in title; and secondly, whether, as a matter of construction, it has been spent by initial compliance.',
                      trap: 'Answering "the covenant is spent" without first establishing that it ran. If it never ran, the spent question does not arise.',
                    },
                    points: [
                      'First: does the covenant run with the land so as to bind the covenantor and his successors in title?',
                      'Secondly: has the covenant been spent upon initial compliance, or does it continue to bind?',
                      'The order matters — the second question only arises if the first is answered yes.',
                    ],
                  },
                  {
                    label: 'Apply s41 of the Conveyancing and Property Ordinance to the running question',
                    detail: 'Sections 41(1) and 41(2) of the Conveyancing and Property Ordinance provide that the burden of a covenant runs with the land and binds the covenantor\'s successors in title and those claiming under or through him. Two requirements must both be met: the covenant must be a land covenant, and it must be expressed or intended to run.',
                    why: 'Section 41 replaces the old common law learning with a two-limb statutory test. Both limbs must be satisfied: being a land covenant is not enough if nothing shows it was meant to run.',
                    exam: {
                      write: 'By ss41(1) and 41(2) of the Conveyancing and Property Ordinance, the burden of a covenant runs with the land and binds successors in title of the covenantor, and persons claiming under or through them, if the covenant is a land covenant and is expressed or intended to run with the land.',
                      trap: 'Citing s41 for the benefit rather than the burden. The provision the lecture is using is the burden limb, which is what binds the successor you are advising.',
                    },
                    points: [
                      'Sections 41(1) and 41(2) provide that the burden of a covenant runs with the land and binds successors in title of the covenantor, and persons claiming under or through the covenantor and his successors, if the covenant is a land covenant and is expressed or intended to run with the land.',
                      'Two requirements: it must be a land covenant, and it must be expressed or intended to run.',
                      'The provisions of s41 apply with equal force to covenants in Government leases as to covenants in deeds of mutual covenant.',
                    ],
                  },
                  {
                    label: 'Then construe the covenant to see whether it is spent',
                    detail: 'Whether a covenant is spent is a matter of construing that covenant. As a general principle a restrictive covenant is not spent once initially complied with and continues to bind the land; a positive covenant to do a defined act by a defined date is the natural candidate for exhaustion.',
                    why: 'A positive covenant to build within three years genuinely can be exhausted by building. A restrictive covenant about what may stand on the land is a different creature — it describes a continuing state of affairs, and initial compliance is the beginning of the obligation rather than the end of it.',
                    exam: {
                      write: 'As a general principle a restrictive covenant is not spent once it has been initially complied with but continues to bind the land; whether it is spent is a matter of construction of the particular covenant.',
                      trap: 'Announcing a rule that covenants are never spent. The general principle favours continuation, but the question is always one of construction.',
                    },
                    points: [
                      'As a general principle a restrictive covenant will not be spent once initially complied with; it continues to bind the land.',
                      'Whether a covenant is spent is a matter of construction of that covenant.',
                      'A positive covenant to do a defined act by a defined date is the natural candidate for being spent; a restriction on what may stand or happen on the land is not.',
                    ],
                  },
                  {
                    label: 'Test the construction against Expressluck and Gold Shine',
                    detail: 'In both cases a grantee argued that the covenant was directed at the first building only, and in both the court read it as governing the land thereafter. Together they show how hard it is to persuade a court that a restriction on what may stand on the land has been used up.',
                    why: 'Both cases involve a grantee arguing that the covenant was aimed at the first building only, and in both the court read the covenant as governing the land thereafter. Together they show how strongly the construction runs against the "spent" argument.',
                    exam: {
                      write: 'In Expressluck the words "and keep for domestic use" were implied into a covenant that the lessee would not erect any building except domestic houses, so the restriction affected future use once a domestic building had been erected.',
                      trap: 'Reading Gold Shine as being about the pavilion. The decisive words were the second limb — that the lessee should not without consent erect any building on the lot — and they covered the replacement as well as the original.',
                    },
                    points: [
                      'Expressluck Development Ltd v Secretary for Justice HCMP 1432/2005, 26/07/2007: a covenant that the lessee would not be allowed to erect any building except domestic houses; the question was whether it affected future use once a domestic building had been erected; held that it did, the words "and keep for domestic use" being implied into the covenant.',
                      {
                        text: 'Gold Shine Investment Ltd v Secretary for Justice [2010] 1 HKC 212 — the replacement of the Lido Complex at Repulse Bay.',
                        points: [
                          'Land was granted at a reduced premium under Conditions of Exchange; special condition (4) required the lessee to remove the existing bungalows and erect a pavilion in lieu, and provided that save as aforesaid the lessee should not without the consent of the Governor erect any building on the lot.',
                          'The pavilion was built in 1937; in 2000 the plaintiff demolished it and erected a new complex, and the Director of Lands refused consent.',
                          'Held, per To J, that a reasonable reader would take "any building" in the second limb to refer to any building to be built immediately after the grant and to any building built in its place thereafter; consent was required for a replacement.',
                        ],
                      },
                    ],
                  },
                  {
                    label: 'Check what a renewal or extension of the lease did to the covenant',
                    detail: 'If covenants died on renewal, every statutory extension would quietly deregulate the land it extended. The Ordinance provides the opposite: a covenant relating to the land continues to have effect on renewal or replacement unless a contrary intention appears.',
                    why: 'If covenants died on renewal, every statutory extension would have quietly deregulated the land it extended. The Ordinance says the opposite, and puts the burden on anyone asserting the contrary to point to an expressed contrary intention.',
                    exam: {
                      write: 'By s42(3) of the Conveyancing and Property Ordinance the covenant continued to have effect after the lease was renewed, no contrary intention having been expressed.',
                      trap: 'Forgetting that s42(3) also protects the other side of the bargain: easements and other benefits survive too, as Lam Pau Ho shows.',
                    },
                    points: [
                      'Where a Government lease expires and is renewed or replaced by a new Government lease relating to the same land, any covenant relating to that land continues to have effect unless the contrary intention is expressed: s42(3), Conveyancing and Property Ordinance.',
                      'Lam Pau Ho v Cheung Kam Ming HCMP 2026/97, 21/11/1997 shows the same logic applied to a benefit: an easement granted for the residue of the term continued to the end of the extended term.',
                    ],
                  },
                  {
                    label: 'Do not forget the maintenance covenant, which is a running obligation by nature',
                    detail: 'Many Government leases and Conditions contain a general covenant to maintain the land granted. A duty to keep something in repair is a state rather than an act, so it is the clearest example of an obligation that cannot be spent.',
                    why: 'A maintenance covenant is the clearest example of an obligation that cannot be spent — the duty is to keep something in repair, which is a state rather than an act. The litigation is instead about how far the thing to be maintained extends.',
                    exam: {
                      write: 'The general maintenance covenant requires the grantee and his successors in title to maintain [the land / the slope / the access road], the scope of which is a question of construction of the grant.',
                      trap: 'Assuming a maintenance covenant extends to everything adjacent. The 2017 Court of Appeal decision turned on the slopes having been built by the Government before the grant.',
                    },
                    points: [
                      'Many Government leases and Conditions contain a general maintenance covenant requiring the grantee to maintain the land granted.',
                      'Building Authority v Appeal Tribunal (Buildings) HCAL 14/2014: the covenant required the grantee and successors in title to maintain a slope adjacent to the land.',
                      'Building Authority v Appeal Tribunal (Buildings) [2017] 4 HKLRD 510, CA: a grantee required to maintain and repair a paved access road and everything pertaining to it was not responsible for a dangerous adjacent slope, because the man-made slopes had been constructed by the Government before the grant and it could not have been the common intention that the grantee would maintain them.',
                      'The Appendix I specimen shows the traditional drafting: the lessee is to repair, uphold, support, maintain, pave, purge, scour, cleanse, empty, amend and keep the premises and all walls, banks, cuttings, hedges, ditches, rails, lights, pavements, sinks, drains and watercourses belonging to them.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The general principle favours continuation, but every one of these cases was decided by construing the actual words. Quote them.',
                'Section 41 is the running question and s42(3) is the survival-on-renewal question. They are easy to conflate and do different jobs.',
                'A covenant that binds successors still has to be breached before anything follows — running is a precondition, not a conclusion.',
                'Where the facts give a two-limb special condition, read the second limb carefully: in Gold Shine it was the second limb that decided the case.',
              ],
            },
            skeleton: {
              bullets: [
                'State the two questions and take them in order.',
                'Apply ss41(1) and 41(2): land covenant, expressed or intended to run.',
                'Construe the covenant on the spent question, starting from the general principle.',
                'Compare Expressluck and Gold Shine on the words used here.',
                'Apply s42(3) if the lease has been renewed or extended.',
                'Conclude whether the present owner is bound.',
              ],
            },
            mistakes: {
              bullets: [
                'Concluding that a covenant is spent because it was once complied with.',
                'Skipping the running question and going straight to construction.',
                'Using s42(3) as though it answered whether a covenant runs to successors — it answers whether it survives renewal.',
                'Assuming a maintenance covenant covers adjoining Government-built slopes.',
              ],
            },
            authorities: {
              table: {
                headers: ['Question', 'Authority', 'What it establishes'],
                rows: [
                  ['Does the burden run?', 'ss41(1) and 41(2), Conveyancing and Property Ordinance (Cap. 219)', 'Burden runs and binds successors if it is a land covenant expressed or intended to run'],
                  ['Is it spent?', 'General principle', 'A restrictive covenant is generally not spent on initial compliance; it is a matter of construction'],
                  ['Worked construction', 'Expressluck Development Ltd v Secretary for Justice HCMP 1432/2005', '"And keep for domestic use" implied; restriction affected future use'],
                  ['Replacement buildings', 'Gold Shine Investment Ltd v Secretary for Justice [2010] 1 HKC 212', 'Consent required for a building erected in place of the original'],
                  ['Survival on renewal', 's42(3), Conveyancing and Property Ordinance', 'Covenants continue after renewal or replacement unless a contrary intention is expressed'],
                  ['Benefits survive too', 'Lam Pau Ho v Cheung Kam Ming HCMP 2026/97', 'Easement for the residue of the term continued to the end of the extended term'],
                  ['Maintenance covenants', 'Building Authority v Appeal Tribunal (Buildings) HCAL 14/2014; [2017] 4 HKLRD 510, CA', 'Scope is a question of construction; pre-existing Government slopes not included in the later case'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG1', issue: 'user-covenants', label: 'Is the use in breach of the user restriction?' },
              { session: 'LG1', issue: 'term-renewal-extension', label: 'Term, renewal and extension' },
              { session: 'LG1', issue: 'waiver', label: 'Has the Government waived the breach?' },
              { session: 'LG2', issue: 'enforceability-s41', label: 'Does the covenant run? Section 41 of the Conveyancing and Property Ordinance' },
            ],
          },
          {
            id: 'waiver',
            title: 'Has the Government waived the breach?',
            summary: 'Three kinds of express waiver, plus implied waiver by acquiescence — and the objective test that tells them apart.',
            triggers: {
              bullets: [
                'A covenant restricted building to one detached residence, a block of flats went up, and the Government wrote that it was "current policy" not to enforce.',
                'A height restriction was waived by correspondence so that one particular block of flats could be built, and that block has since been demolished.',
                'The District Land Office wrote that under current policy a block of flats could be erected, and LACO later confirmed after construction that the covenant would not be enforced.',
                'A waiver was granted subject to conditions and one of those conditions has since been breached.',
                'Terraced houses were built before 1939 on land restricted to villa residences, a six-storey block followed in 1958, and neighbouring lots under similar covenants now carry high-rise buildings.',
                'The ground floor of a five-storey building has been used as a shop for over fifty years and the Government has never objected.',
                'The Government has taken no enforcement action for decades and the owner says the covenant has gone.',
                'The Government did nothing about a past breach for fifty years and is now objecting to a proposed new development.',
                'The Government is actively enforcing and the owner raises waiver as a defence.',
              ],
              routes: [
                { when: 'The dispute is between a vendor and a purchaser rather than with the Government', session: 'LG1', issue: 'good-title-no-real-risk', label: 'Does an unwaived breach defeat title?' },
                { when: 'The owner wants the covenant changed rather than forgiven', session: 'LG1', issue: 'modification', label: 'Modifying the lease or the Conditions' },
                { when: 'It is not yet established that the covenant binds this owner', session: 'LG1', issue: 'covenants-running-and-spent', label: 'Does the covenant run, and is it spent?' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Analysing a waiver argument',
                steps: [
                  {
                    label: 'Ask first whether the waiver is express or implied',
                    detail: 'The two are proved in completely different ways. An express waiver is something the Government has said, to be construed; an implied waiver, or acquiescence, is an inference drawn from inaction in the face of a breach the Government knew or must be taken to have known about.',
                    why: 'The two are proved completely differently. An express waiver is a document to be construed; an implied waiver is an inference from years of inaction. Mixing the evidence for one with the test for the other is the commonest way to go wrong here.',
                    exam: {
                      write: 'The waiver relied on is [express, arising from the Government\'s letter of [date] / implied, arising from the Government\'s inaction over [period]].',
                      trap: 'Treating a letter saying it is "current policy" not to enforce as an implied waiver. It is an express one — and the question then is which of the three kinds.',
                    },
                    points: [
                      'Express waiver: the Government has said something. Construe what it said.',
                      'Implied waiver or acquiescence: the Government has done nothing, with actual or constructive knowledge of the breach.',
                      'Restrictive covenants in agricultural leases in the New Territories were often waived expressly by the Government in the past.',
                    ],
                  },
                  {
                    label: 'If express, decide which of the three kinds it is',
                    detail: 'An express waiver may be temporary, limited or permanent, and the three differ in how long the forgiveness lasts. A temporary waiver can be withdrawn, a limited one is spent with the building it permitted, and a permanent one releases the covenant for good.',
                    why: 'The three kinds differ in how long the forgiveness lasts, and that is the only thing the client cares about. A temporary waiver can be pulled; a limited one dies with the building; a permanent one settles the title.',
                    exam: {
                      write: 'The waiver is [temporary / limited / permanent], because the words used show an intention to [suspend enforcement for the time being / permit this particular building only / abandon the covenant].',
                      trap: 'Treating "current policy" language as permanent. Citiward holds that it is temporary and may be withdrawn on reasonable notice.',
                    },
                    points: [
                      'Temporary waiver: Citiward Ltd v Tai Ping Wing [1995] 2 HKC 181 (Rogers J). A covenant restricted building to no more than one detached residence; a block of flats was erected, and the Government wrote that it was "current policy" not to enforce; held only a temporary waiver, withdrawable on reasonable notice. What is reasonable depends on the nature of the covenant, and on the facts a temporary and a limited waiver may merge.',
                      'Limited waiver: Real Honest Investment Ltd v Attorney-General [1997] 2 HKC 436, PC. A height restriction was waived through correspondence to permit construction of a block of flats; held the waiver applied only to that particular block and not to future construction. A limited waiver comes to an end when the building is demolished.',
                      'Permanent waiver: Peter and Angeli Wong Co Ltd v Silverera Ltd [1995] 3 HKC 411 (Wesley Wong Dty J). A similar covenant to Citiward; following a letter from the District Land Office saying that under current policy a block of flats could be erected, the developers built; a further letter from LACO after construction confirmed the policy of non-enforcement; held the Government had permanently waived the right to enforce and the title was good.',
                    ],
                  },
                  {
                    label: 'Apply the objective test that distinguishes them',
                    detail: 'Which kind of waiver was given is decided by the intention of the parties as evidenced by the words used, objectively — the same test that governs the boundary cases earlier in this lecture.',
                    why: 'The same test runs through this whole lecture: intention as evidenced by the words used. It appears in the boundary cases and it appears here, and saying so shows the examiner you have seen the pattern rather than memorised three cases.',
                    exam: {
                      write: 'To distinguish temporary, limited and permanent waiver the test is the intention of the parties as evidenced by the words used — an objective test.',
                      trap: 'Arguing from what the owner understood or relied on. The test is objective and looks at the words.',
                    },
                    points: [
                      'The test is to identify the intention of the parties as evidenced by the words used — objectively.',
                      'Compare Citiward and Peter and Angeli Wong: similar covenants and similar policy letters, different outcomes, and the difference lies in what was written and when.',
                      'In Peter and Angeli Wong the confirmation came after construction, which is part of why the waiver was permanent.',
                    ],
                  },
                  {
                    label: 'Check whether the express waiver was conditional',
                    detail: 'A waiver may be granted on terms, and a waiver granted subject to conditions ceases to have effect if those conditions are later breached.',
                    why: 'A waiver granted on terms is a bargain, and a party who breaks his side of it cannot keep the benefit. Missing this turns a conditional reprieve into a supposed permanent one.',
                    exam: {
                      write: 'Even where the Government has waived its right to enforce, the waiver may cease to have effect if it was granted subject to conditions which have since been breached: Favourable Issue Co Ltd v Secretary for Justice.',
                      trap: 'Concluding on the kind of waiver without checking the terms on which it was given.',
                    },
                    points: [
                      'Favourable Issue Co Ltd v Secretary for Justice [2014] 1 HKC 453, CA: a waiver granted subject to conditions ceased to have effect when those conditions were subsequently breached.',
                    ],
                  },
                  {
                    label: 'If implied, ask what the Government knew and what it failed to do',
                    detail: 'Acquiescence is not mere delay. It requires inaction with actual or constructive knowledge of the breach, which is why the cases turn on whether the breach was open and notorious enough that the Government must be taken to have known of it.',
                    why: 'Acquiescence is not mere delay. It is inaction in the face of a breach so open that the Government must be taken to have known of it — which is why "open and notorious" is the operative phrase in the cases.',
                    exam: {
                      write: 'Inaction with actual or constructive knowledge of the breach may constitute implied waiver or acquiescence; here the breach was open and notorious over [period] and the Government took no enforcement action.',
                      trap: 'Inferring waiver from silence alone. Expressluck holds that waiver cannot be lightly inferred and acquiescence must be clear and unambiguous.',
                    },
                    points: [
                      'Inaction, with actual or constructive knowledge of a breach, may constitute implied waiver or acquiescence.',
                      'Fairfax Ltd v Attorney General [1997] 1 HKC 17, PC: a covenant limited construction to one or more villa residences; terraced houses were built before 1939 and a six-storey block in 1958, and high-rise buildings stood on neighbouring plots subject to similar covenants; held there was implied waiver — "notorious and avowed acquiescence" — and a declaration was granted that the covenant was no longer enforceable.',
                      'Cheermark Investment Ltd v Director of Lands [2018] 1 HKLRD 79, CA: the ground floor of a five-storey building had been used as a shop for many years against a dwelling-house designation; the use of one floor was not sufficiently significant to breach the covenant in the conditions then prevailing, and in any event the Government had acquiesced with constructive knowledge over more than fifty years; compensation on resumption was assessed on commercial user, and the Court of Appeal agreed.',
                      'Expressluck Development Ltd v Secretary for Justice HCMP 1432/2005, 26/7/2007: waiver cannot be lightly inferred and acquiescence must be clear and unambiguous; inaction over fifty years might have waived a past breach but did not abandon the covenant for a proposed new development.',
                    ],
                  },
                  {
                    label: 'Distinguish waiving a past breach from abandoning the covenant',
                    detail: 'Waiving existing past breaches is not the same as waiving the whole covenant through non-enforcement. A client who has got away with a breach for decades has not thereby acquired a licence to commit a larger one.',
                    why: 'This is the distinction Expressluck turns on and it is the one that decides most real disputes. A client who has got away with a breach for decades has not thereby acquired a licence to do it again on a larger scale.',
                    exam: {
                      write: 'The Government\'s inaction may have waived the past breach, but it did not abandon the covenant for the purposes of the proposed new development.',
                      trap: 'Sliding from "they never enforced" to "the covenant is gone". The two are different findings on different evidence.',
                    },
                    points: [
                      'Waiving existing past breaches is not the same as waiving the entire covenant through non-enforcement.',
                      'A developer relying on historic non-enforcement to justify a new and larger breach is making the argument that failed in Expressluck.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'Citiward and Peter and Angeli Wong involve very similar covenants and letters. The outcomes differ, so the comparison has to be on the words and the timing.',
                'A limited waiver dies with the building. If the facts mention a demolition, that is the point being tested.',
                'Cheermark is doing two things at once — partial breach and acquiescence — and either may be the route to the answer.',
                'The waiver question and the "real risk" question are different tests for different disputes. Do not merge them.',
              ],
            },
            skeleton: {
              bullets: [
                'Classify the waiver as express or implied.',
                'If express: temporary, limited or permanent, applying the objective test to the words used.',
                'Check whether the waiver was conditional, per Favourable Issue.',
                'If implied: knowledge plus inaction, and whether the breach was open and notorious.',
                'Distinguish waiver of the past breach from abandonment of the covenant.',
                'Conclude on whether the covenant remains enforceable.',
              ],
            },
            mistakes: {
              bullets: [
                'Reading a "current policy" letter as a permanent waiver.',
                'Inferring implied waiver from delay alone.',
                'Forgetting that a limited waiver ends when the building it permitted is demolished.',
                'Treating a waiver of past breaches as abandonment of the covenant for the future.',
              ],
            },
            authorities: {
              table: {
                headers: ['Kind', 'Authority', 'Outcome'],
                rows: [
                  ['Temporary', 'Citiward Ltd v Tai Ping Wing [1995] 2 HKC 181', '"Current policy" not to enforce was temporary only; withdrawable on reasonable notice'],
                  ['Limited', 'Real Honest Investment Ltd v Attorney-General [1997] 2 HKC 436, PC', 'Waiver applied to that block of flats only; ends when the building is demolished'],
                  ['Permanent', 'Peter and Angeli Wong Co Ltd v Silverera Ltd [1995] 3 HKC 411', 'Policy letters before and after construction amounted to permanent waiver; title good'],
                  ['Conditional waiver', 'Favourable Issue Co Ltd v Secretary for Justice [2014] 1 HKC 453, CA', 'Waiver ceased to have effect when its conditions were breached'],
                  ['Implied — found', 'Fairfax Ltd v Attorney General [1997] 1 HKC 17, PC', '"Notorious and avowed acquiescence"; declaration that the covenant was unenforceable'],
                  ['Implied — found', 'Cheermark Investment Ltd v Director of Lands [2018] 1 HKLRD 79, CA', 'Over fifty years of open and notorious use without enforcement; upheld on appeal'],
                  ['Implied — not found', 'Expressluck Development Ltd v Secretary for Justice HCMP 1432/2005', 'Waiver not lightly inferred; past breach possibly waived, covenant not abandoned'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG1', issue: 'good-title-no-real-risk', label: 'Does an unwaived breach defeat title?' },
              { session: 'LG1', issue: 'user-covenants', label: 'Is the use in breach of the user restriction?' },
              { session: 'LG1', issue: 'covenants-running-and-spent', label: 'Does the covenant run, and is it spent?' },
              { session: 'LG2', issue: 'acquiescence', label: 'Acquiescence after Centre Chase' },
              { session: 'LG3', issue: 'purchaser-waiver', label: 'Waiver by the purchaser of his right to object' },
            ],
          },
          {
            id: 'good-title-no-real-risk',
            title: 'Does an unwaived breach defeat title?',
            summary: 'The conveyancing payoff: between vendor and purchaser the question is not whether there was a breach but whether there is any real risk of enforcement.',
            triggers: {
              bullets: [
                'A Crown lease restricted the height to 35 feet, the building exceeds it, and the Government has done nothing for forty years.',
                'The purchaser raises a requisition asking whether the vendor has shown good title given a longstanding breach.',
                'The vendor says the Government would never enforce and the purchaser wants to rescind.',
                'The Government is already taking enforcement action and the owner argues waiver.',
                'The premises were granted under Conditions restricting use to industrial purposes and have been a flower shop for some years.',
                'There is no evidence that the Government has been aware of the breach for any significant period.',
                'The breach is open, the neighbours have committed the same breach, and completion is next week.',
                'The purchaser\'s solicitor must decide whether to advise completion notwithstanding an unwaived breach.',
              ],
              routes: [
                { when: 'The Government itself is the party enforcing', session: 'LG1', issue: 'waiver', label: 'Has the Government waived the breach?' },
                { when: 'Whether there is a breach at all is still in issue', session: 'LG1', issue: 'user-covenants', label: 'Is the use in breach of the user restriction?' },
                { when: 'The missing document is a certificate of compliance', session: 'LG1', issue: 'certificate-of-compliance', label: 'Proving compliance and the 1 January 1970 divide' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Advising on title where a breach is unwaived',
                steps: [
                  {
                    label: 'Identify who is arguing with whom — this decides the test',
                    detail: 'Two different tests apply depending on the parties. Where the Government is enforcing, the Fairfax approach asks whether it knew of the breach and delayed. Where the dispute is between private parties and the Government is not before the court, Jumbo Gold asks whether there is a real risk of enforcement.',
                    why: 'The single most important move in this issue type. Fairfax and Jumbo Gold apply different tests, and Pak Wai Ching exists precisely because a litigant tried to borrow the wrong one.',
                    exam: {
                      write: 'This is a dispute between [the Government and the owner / a vendor and a purchaser], so the applicable approach is [Fairfax / Jumbo Gold].',
                      trap: 'Applying the "no real risk" test where the Government is already enforcing. Barma J held in Pak Wai Ching that the real risk test is clearly inapplicable in that situation.',
                    },
                    points: [
                      'Where the Government is involved in enforcement, the Fairfax approach applies: waiver only where the Government had knowledge of the breach and delayed in taking enforcement action.',
                      'Where the action is between private individuals and the Government is not a party, the Jumbo Gold approach applies: is there a real risk of enforcement?',
                      'Pak Wai Ching v Secretary for Justice HCMP 255/2003, 12/11/2003: Barma J discussed which test applied and held that the real risk test in Jumbo Gold is clearly inapplicable where the Government is already taking enforcement action.',
                    ],
                  },
                  {
                    label: 'On a sale, accept that there may well be an unwaived breach',
                    detail: 'Jumbo Gold does not require the vendor to prove that there was no breach, or that any right of re-entry has gone. It assumes the right exists and asks the practical question instead: would the Government ever exercise it?',
                    why: 'The elegance of Jumbo Gold is that it does not require the vendor to prove there was no breach. It accepts the breach may be live and asks a different, practical question — which is why it can produce good title on facts where the covenant has plainly been broken.',
                    exam: {
                      write: 'The evidence does not exclude a reasonable possibility of an unwaived breach of condition giving the Government a right of re-entry; the question is therefore whether there is any real risk that it would enforce.',
                      trap: 'Trying to argue the breach away. On these facts you usually cannot, and you do not need to.',
                    },
                    points: [
                      'Jumbo Gold Investment Ltd v Warren Yuen Cheong Leung (2000) 3 HKCFAR 52, CFA: height restricted to 35 feet in a Crown lease and the height was exceeded; the Government had taken no action for some forty years; when the vendor came to sell, the purchaser raised a requisition as to title.',
                      'Held that the vendor had shown good title since there was no real risk of enforcement by the Government.',
                      'The court assumed the right of re-entry existed rather than deciding it did not.',
                    ],
                  },
                  {
                    label: 'Apply the real risk test to the facts you are given',
                    detail: 'The test rests on an assumption about how government behaves — that it will not take the drastic step of re-entry to the detriment of innocent owners. So the age of the breach, how open it has been, and how many neighbouring owners are in the same position are what the argument is built from.',
                    why: 'The test rests on an assumption about how government behaves — that it will not take a drastic step against innocent owners. That is why the age of the breach, its openness, and the presence of innocent purchasers all matter to the answer.',
                    exam: {
                      write: 'Assuming the Government has a right of re-entry, there is no real risk that it would take the drastic step of enforcing it to the detriment of innocent owners, so the vendor has shown good title.',
                      trap: 'Treating "no real risk" as a rule that all old breaches are safe. It is a conclusion from the facts about this breach, this land and these owners.',
                    },
                    points: [
                      'The factors that mattered in Jumbo Gold: a long period without enforcement, the drastic nature of re-entry, and the detriment to innocent owners.',
                      'Where there is no evidence that the Government has been aware of the breach for any significant period, the analysis is different — that was the position in Pak Wai Ching, where no waiver was established on the Fairfax test.',
                      'Neighbouring properties in similar breach without enforcement support the argument, as they did in Fairfax.',
                    ],
                  },
                  {
                    label: 'Check that no other approval has been mistaken for a cure',
                    detail: 'Purchasers routinely produce an occupation permit or a certificate of compliance as though it answered the lease question. Neither does: the first comes from a different authority under a different Ordinance, and the second is expressed to be without prejudice to the Government\'s rights.',
                    why: 'Purchasers and their solicitors routinely produce an occupation permit as though it answered the lease question. It does not, and a title opinion that relies on it is wrong.',
                    exam: {
                      write: 'The occupation permit issued by the Building Authority does not estop the Lands Department from enforcing the covenant: Hang Wah Chong Investment Co Ltd v Attorney-General.',
                      trap: 'Letting an approved building plan or an occupation permit do work in the title opinion that it cannot do.',
                    },
                    points: [
                      'Approval of building plans, permission to commence construction and the issue of an occupation permit are all Building Authority matters and do not bind the Lands Department: Hang Wah Chong Investment Co Ltd v Attorney-General [1981] HKLR 336, PC.',
                      'Lee To Ming v Tam Kim Sum William [1999] 2 HKC 865 is the worked example: an occupation permit for five storeys did not prevent re-entry under a four-storey covenant.',
                      'Nor does a certificate of compliance forgive a breach: it is expressed to be without prejudice to the Government\'s rights.',
                    ],
                  },
                  {
                    label: 'Give the advice the client actually needs',
                    detail: 'The purchaser is not asking for a ruling on the covenant; he is asking whether to complete. The answer has to say whether good title has been shown, what he may do about it, and what changes if the risk turns out to be real rather than theoretical.',
                    why: 'This is where the whole lecture lands. The purchaser is not asking for a ruling on the covenant; he is asking whether to complete, and the answer has to be expressed as advice with its risk stated.',
                    exam: {
                      write: 'The vendor has shown good title notwithstanding the breach, and the purchaser is not entitled to rescind; the requisition should be answered by reference to Jumbo Gold.',
                      trap: 'Answering the legal question and leaving the purchaser without advice on whether to complete.',
                    },
                    points: [
                      'State whether the vendor has shown good title.',
                      'State whether the purchaser may raise the requisition, or refuse to complete.',
                      'Where the risk is real rather than theoretical, the answer changes: the purchaser may be entitled to insist on rectification, a modification, or a reduction in price.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The first question is always the identity of the parties, because it selects the test. Write that sentence before anything else.',
                'Jumbo Gold does not decide there was no breach. It decides the breach does not defeat title, which is a different and more useful holding.',
                'Pak Wai Ching is the case that keeps the two tests apart and is worth citing whenever both are in play.',
                'A breach that the Government has only just discovered is a poor candidate for either test.',
              ],
            },
            skills: {
              bullets: [
                'Frame the answer as a title opinion: the requisition, the answer, and the advice on completion.',
                'Set out the facts that bear on risk — how long, how open, how many innocent owners.',
                'Say what would change your advice, since a title opinion that admits no contingency is not much use.',
              ],
            },
            skeleton: {
              bullets: [
                'Identify the parties to the dispute and select the test.',
                'Accept, if necessary, that an unwaived breach may exist.',
                'Apply the real risk test with the facts that bear on it.',
                'Rule out any false cure — occupation permit, approved plans, certificate of compliance.',
                'Conclude on good title and advise on completion.',
              ],
            },
            mistakes: {
              bullets: [
                'Applying Jumbo Gold where the Government is already enforcing.',
                'Applying Fairfax to a vendor-and-purchaser dispute to which the Government is not a party.',
                'Treating an occupation permit as evidence of lease compliance.',
                'Concluding on the law without advising whether to complete.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'In my view, the evidence in this case did not exclude a reasonable possibility of an unwaived breach of condition which gives the Government a right of re-entry. The question is therefore whether, assuming that the Government has that right, there is any real risk that it would actually take the drastic step of enforcing it to the detriment of innocent owners. I entirely agree with Mr Justice Litton PJ that the correct answer is in the negative. It is simply not in the nature of good government to harm innocent people unnecessary like that. Accordingly it is safe to proceed on the basis that the Government would never do so.', cite: 'Jumbo Gold Investment Ltd v Warren Yuen Cheong Leung (2000) 3 HKCFAR 52, as reproduced in the LG1 slides' },
              ],
              table: {
                headers: ['Dispute', 'Test', 'Authority'],
                rows: [
                  ['Government enforcing against the owner', 'Waiver: knowledge of the breach plus delay in enforcing', 'Fairfax Ltd v Attorney General [1997] 1 HKC 17, PC'],
                  ['Vendor and purchaser, Government not a party', 'Is there a real risk of enforcement?', 'Jumbo Gold Investment Ltd v Warren Yuen Cheong Leung (2000) 3 HKCFAR 52, CFA'],
                  ['Which test applies', 'Real risk is inapplicable where the Government is already enforcing', 'Pak Wai Ching v Secretary for Justice HCMP 255/2003'],
                  ['Building approvals are no cure', 'No estoppel against the Lands Department', 'Hang Wah Chong Investment Co Ltd v Attorney-General [1981] HKLR 336, PC; Lee To Ming v Tam Kim Sum William [1999] 2 HKC 865'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG1', issue: 'waiver', label: 'Has the Government waived the breach?' },
              { session: 'LG1', issue: 'user-covenants', label: 'Is the use in breach of the user restriction?' },
              { session: 'LG1', issue: 'certificate-of-compliance', label: 'Proving compliance and the 1 January 1970 divide' },
              { session: 'LG2', issue: 'predecessor-breaches', label: 'Liability for a predecessor in title\'s breach' },
              { session: 'LG3', issue: 'what-is-good-title', label: 'What constitutes a good title?' },
            ],
          },
          {
            id: 'government-implied-covenants',
            title: 'The Government\'s own covenants',
            summary: 'The grant runs both ways: quiet enjoyment and non-derogation from grant are implied in every Government lease and set of Conditions.',
            triggers: {
              bullets: [
                'Government works have demolished the wall of the tenant\'s bedroom.',
                'The electricity to the premises has been cut off by the grantor.',
                'Renovations to the building have blocked access to the client\'s restaurant and profits have fallen.',
                'An easement over Government land included vehicular use and Government works have made the road impassable to vehicles.',
                'A latrine has been erected on the land next door to the client\'s lot.',
                'The Conditions required part of the land to be used as a public car park, and rezoning has since made the car park commercially worthless.',
                'The grantee cannot get plant onto the site because no reasonable access has been provided.',
                'The interference complained of lasted a few weeks and has since stopped.',
              ],
              routes: [
                { when: 'The complaint is that the Government refused an approval', session: 'LG1', issue: 'ddh-and-approvals', label: 'DDH clauses, alienation and other required approvals' },
                { when: 'The complaint is about a refusal to modify a covenant', session: 'LG1', issue: 'modification', label: 'Modifying the lease or the Conditions' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Running an implied covenant argument against the Government',
                steps: [
                  {
                    label: 'Identify which of the two implied covenants is engaged',
                    detail: 'A covenant for quiet enjoyment and a covenant against derogation from grant are implied in all Government leases and Conditions of Grant. They overlap but are not the same: the first is about interference with the land granted, the second about the grantor\'s use of land it kept back.',
                    why: 'They overlap but are not the same. Quiet enjoyment is about interference with the grantee\'s use of the land granted; derogation from grant is about the grantor using land it kept back in a way that frustrates the purpose of the grant.',
                    exam: {
                      write: 'Two covenants on the part of the Government as grantor are implied in all Government leases and Conditions: a covenant for quiet enjoyment and a covenant not to derogate from the grant.',
                      trap: 'Pleading only quiet enjoyment where the complaint is really about what the Government did with adjoining land it retained.',
                    },
                    points: [
                      'A covenant for quiet enjoyment.',
                      'A covenant as to non-derogation from grant.',
                      'Both are implied in all Government leases and Conditions of Grant.',
                    ],
                  },
                  {
                    label: 'For quiet enjoyment, ask whether the interference was substantial',
                    detail: 'The covenant is not a guarantee of undisturbed comfort. The cases draw the line at substantial interference, so acts that make the premises unusable breach it while temporary interference does not.',
                    why: 'The covenant is not a guarantee of undisturbed comfort. The cases draw the line at substantial interference, which is why demolishing a wall breaches it and a few weeks of building works does not.',
                    exam: {
                      write: 'The interference complained of [was / was not] substantial, and temporary interference will not constitute a breach of the covenant for quiet enjoyment.',
                      trap: 'Treating every inconvenience as a breach. Wing On Properties is the case where a restaurant\'s loss of profits during renovations was held not to be substantial interference.',
                    },
                    points: [
                      'Yeung Wah James v Alfa Sea Ltd HCA 426/1992: demolition of a tenant\'s bedroom wall.',
                      'Pereira v Vandiyar [1953] 1 WLR 672: cutting off electricity.',
                      'Temporary interference will not constitute a breach: Manchester, Sheffield and Lincolnshire Railway Co Ltd v Anderson [1898] 2 Ch 394.',
                      'Wing On Properties and Securities Co Ltd v Create Wealth Development Ltd HCA 632/2004: a restaurant tenant claimed the landlord had blocked access and caused loss of profits through renovations; held there was no substantial interference.',
                    ],
                  },
                  {
                    label: 'For derogation, ask what the grant was for and whether the Government has frustrated it',
                    detail: 'The principle is that a grantor may not give with one hand and take away with the other. It bites where a later act of the Government destroys the very purpose for which the land was granted, and the cases turn on how tightly that purpose was defined.',
                    why: 'The principle is that a grantor may not give with one hand and take away with the other. It bites where the Government\'s later act destroys the very purpose for which it granted the land — but it does not guarantee that the surrounding conditions will stay as they were.',
                    exam: {
                      write: 'The Government granted [the land / the easement] for [purpose], and by [act] has rendered that grant [incapable of use / worthless], which constitutes a derogation from grant.',
                      trap: 'Arguing that any adverse change derogates from the grant. Rank Profit holds that the maintenance of a scheme of development throughout the term is not implicit in the grant.',
                    },
                    points: [
                      'Lam Kwok Leung v Attorney General [1978] HKLR 145: erection of an adjacent latrine did not breach the obligation.',
                      'Wisename Ltd v Secretary for Justice [1998] 1 HKC 128, CA: the Government granted an easement over Government land which included vehicular use, then carried out developments which rendered the road incapable of use for vehicles; held to constitute derogation from grant.',
                      'Rank Profit Industries Ltd v Secretary for Justice [2007] 4 HKC 61, CA: land granted under Conditions requiring part to be used as a public car park; the area was later rezoned from industrial to commercial with extensive provision for new car parks, and the lessee said its car parks had been made a white elephant; held it could not be regarded as necessarily implicit in the grant that the scheme of development would be maintained throughout its duration, zoning was a matter for the Town Planning Board, and nothing prevented the car park from still being built; the action was struck out.',
                    ],
                  },
                  {
                    label: 'Consider whether any other term should be implied',
                    detail: 'The two named covenants are not a closed list. Where the grant would be unworkable without something further, the court has been willing to imply it.',
                    why: 'The two named covenants are not a closed list. Where the grant would be unworkable without something, the court has been willing to imply it — access to the site being the obvious example.',
                    exam: {
                      write: 'A duty to provide reasonable access to the site to permit development has also been implied: Hang Tak Co Ltd v Attorney General.',
                      trap: 'Presenting quiet enjoyment and non-derogation as the only implied terms available.',
                    },
                    points: [
                      'Hang Tak Co Ltd v Attorney General HCA 2567/1983: a duty to provide reasonable access to the site to permit development.',
                    ],
                  },
                  {
                    label: 'Then place the claim against the public-law route',
                    detail: 'A grantee aggrieved by the Government usually wants judicial review and usually cannot have it, because the Government administers its grants as a private landlord. The implied covenants are the contractual route that remains open.',
                    why: 'A grantee aggrieved by the Government usually wants judicial review and usually cannot have it. The implied covenants are the contractual route that remains open, which is why they matter more here than they would against a private landlord.',
                    exam: {
                      write: 'Since decisions administering the grant are generally not amenable to judicial review, the grantee\'s remedy lies in contract, on the implied covenants.',
                      trap: 'Offering judicial review as the answer. On the modification and approval cases it is not available, which is what makes the implied covenants the live argument.',
                    },
                    points: [
                      'The Government acts as a private landlord in administering its grants, so the usual public-law grounds do not run.',
                      'The implied covenants are contractual and are enforced as such.',
                      'Even where a decision is not reviewable, the decision-maker must still act in good faith.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'Substantial interference is the threshold for quiet enjoyment, and the reported outcomes on it are unforgiving.',
                'Wisename and Rank Profit are the two ends of derogation: destroying the subject matter of the grant on one side, changing the commercial environment on the other.',
                'Rank Profit also makes the zoning point — the Town Planning Board, not the Government as landlord, decides zoning.',
                'These covenants are implied in Conditions of Grant as well as in Government leases.',
              ],
            },
            skeleton: {
              bullets: [
                'Identify which implied covenant is engaged, or both.',
                'For quiet enjoyment: characterise the interference and ask whether it is substantial or merely temporary.',
                'For derogation: identify the purpose of the grant and ask whether the Government has frustrated it.',
                'Consider any further implied term, such as reasonable access.',
                'Note that this is the contractual route where judicial review is unavailable.',
              ],
            },
            mistakes: {
              bullets: [
                'Treating temporary disruption as a breach of quiet enjoyment.',
                'Arguing derogation from a change in the surrounding development scheme.',
                'Confining the implied covenants to leases when they are implied in Conditions too.',
                'Reaching for judicial review when the contractual claim is the one that is open.',
              ],
            },
            authorities: {
              table: {
                headers: ['Covenant', 'Authority', 'Outcome'],
                rows: [
                  ['Quiet enjoyment — breach', 'Yeung Wah James v Alfa Sea Ltd HCA 426/1992; Pereira v Vandiyar [1953] 1 WLR 672', 'Demolition of a bedroom wall; cutting off electricity'],
                  ['Quiet enjoyment — no breach', 'Manchester, Sheffield and Lincolnshire Railway Co Ltd v Anderson [1898] 2 Ch 394; Wing On Properties HCA 632/2004', 'Temporary interference; renovations causing loss of profits were not substantial'],
                  ['Derogation — no breach', 'Lam Kwok Leung v Attorney General [1978] HKLR 145', 'Adjacent latrine did not breach the obligation'],
                  ['Derogation — breach', 'Wisename Ltd v Secretary for Justice [1998] 1 HKC 128, CA', 'Developments rendering a granted vehicular easement unusable derogated from the grant'],
                  ['Derogation — no breach', 'Rank Profit Industries Ltd v Secretary for Justice [2007] 4 HKC 61, CA', 'Maintenance of the development scheme not implicit in the grant; action struck out'],
                  ['Other implied terms', 'Hang Tak Co Ltd v Attorney General HCA 2567/1983', 'Duty to provide reasonable access to the site to permit development'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG1', issue: 'ddh-and-approvals', label: 'DDH clauses, alienation and other required approvals' },
              { session: 'LG1', issue: 'modification', label: 'Modifying the lease or the Conditions' },
            ],
          },
        ],
      },
    },

    LG2: {
      kind: 'LG',
      date: '2026-09-11',
      time: '13:00-15:30',
      mode: 'Face-to-face',
      authors: ['Alwin Chan'],
      objectives: [
        'Trace the stages by which a developer turns a lot into a multi-storey building of separately owned flats, and say what each stage contributes to title.',
        'Construe a deed of mutual covenant and a first assignment to decide what is a common part and what the developer reserved.',
        'Advise whether a co-owner is in breach of the Building Management Ordinance\'s overriding duties or of the express covenants in the deed of mutual covenant.',
        'Identify the proper plaintiff for a given breach, and the remedies available to it.',
        'Apply section 41 of the Conveyancing and Property Ordinance to decide whether the benefit and burden of a covenant have run to the parties before you.',
      ],
      topicsCovered: [
        'The eight stages from lot to registered deed of mutual covenant, and the Consent and Non-Consent Schemes',
        'Construction of the deed of mutual covenant and the first assignment: Jumbo King and Donora',
        'Sub-deeds of mutual covenant and the division of shares by deed poll',
        'Undivided shares, tenancy in common, and whether the shares are sufficiently delineated to give good title',
        'Common parts: section 2 and the First Schedule to the Building Management Ordinance',
        'External walls, advertising signs and reserved rights; internal, load-bearing and partition walls',
        'The overriding duties in sections 34H and 34I of the Building Management Ordinance',
        'Express covenants: structural alterations, external appearance, nuisance and annoyance',
        'Adverse possession by and against co-owners, and of the common parts',
        'The proper plaintiff: incorporated owners, manager, owners\' committee and the individual co-owner',
        'The duties and liabilities of an owners\' corporation, including to third parties',
        'Acquiescence after Centre Chase, and section 18(1)(c) of the Building Management Ordinance',
        'Remedies: injunction, damages including loss of bargain, and the charge for management fees',
        'Running of the benefit and the burden of covenants under sections 39 to 41 of the Conveyancing and Property Ordinance',
        'Liability for a predecessor in title\'s breach, and continuing breaches',
      ],
      examNotes: {
        intro: 'Almost every flat in Hong Kong is an undivided share in a lot plus a contractual right to occupy one part of a building, and the deed of mutual covenant is what makes that arrangement work. Two questions run through the issue types below. First, construction: what do the DMC and the first assignment actually say about this part of the building? Second, enforcement: who may sue on that covenant, against whom, and with what remedy?',
        issueTypes: [
          {
            id: 'developer-sequence',
            title: 'The stages from lot to registered deed of mutual covenant',
            summary: 'Eight steps turn one lot into many separately owned flats. Knowing which step is missing is usually the answer.',
            triggers: {
              bullets: [
                'A developer bought the lot under Conditions of Sale, built a block of twenty flats and twenty car parking spaces, and now wants to sell them one by one.',
                'Flats are being sold before the occupation permit has issued and the purchaser asks what authority the developer needed.',
                'The assignment to the first purchaser transfers 31 undivided shares of and in the lot together with the exclusive right to occupy Flat 5B and car space 12.',
                'The deed of mutual covenant was executed by the developer, the first purchaser and a management company that is a subsidiary of the developer.',
                'A later assignment from the developer says the flat is sold "together with the benefit of and subject to the burdens and obligations set out in the deed of mutual covenant".',
                'The deed of mutual covenant was executed but never lodged at the Land Registry, and the second purchaser now wants to sue the fifth purchaser on a covenant in it.',
                'The lot was divided into 620 shares, 30 to each flat and one to each car space, and the penthouse purchaser complains that she has no more shares than anyone else.',
                'The developer allocated no undivided shares at all to the staircases, lifts and gardens.',
                'The first purchaser wants to know why the assignment gives her shares in the lot rather than ownership of the flat itself.',
              ],
              routes: [
                { when: 'The dispute is about what the developer kept back for itself when it assigned to the first purchaser', session: 'LG2', issue: 'construing-the-dmc', label: 'Construing the DMC and the first assignment' },
                { when: 'The complaint is that the shares attached to a particular flat cannot be identified', session: 'LG2', issue: 'undivided-shares-and-good-title', label: 'Undivided shares, tenancy in common and good title' },
                { when: 'The question is whether an owner further divided his own shares after the event', session: 'LG2', issue: 'sub-dmc', label: 'Sub-deeds of mutual covenant' },
                { when: 'The lot is being cut up horizontally into sections rather than into undivided shares', session: 'LG1', issue: 'sectioning-and-subdivision', label: 'Dividing a lot: sectioning and undivided shares' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Walking the development through its stages',
                steps: [
                  {
                    label: 'Stage (a): the developer acquires the lot and builds',
                    detail: 'The developer takes the land either from the Government, by Government lease or Conditions of Grant, Sale or Exchange, or from a previous owner, and then puts up the block.',
                    why: 'Everything that follows is carved out of this one title. The flat owners are not grantees from the Government; they are co-owners of the developer\'s interest in the lot, which is why a breach of the Government grant is still their problem years later.',
                    exam: {
                      write: 'The developer holds the lot under [the Government lease / Conditions of Sale dated [date]], and every interest in the building below is carved out of that one title.',
                      trap: 'Forgetting that the flat owners take subject to the Government grant. A user restriction in the Conditions binds the twentieth purchaser exactly as it bound the developer.',
                    },
                    points: [
                      'Identify the source of the developer\'s own title: a Government lease, Conditions of Grant or Sale, or an assignment from a previous owner.',
                      'The co-owners will hold their interest subject to the terms of both the Government lease or Conditions and the DMC.',
                    ],
                  },
                  {
                    label: 'Stage (b): comply with the Consent or Non-Consent Scheme before any pre-sale',
                    detail: 'A pre-sale is a sale before the flat is completed and the occupation permit issued. If the sale falls under either Scheme, the Scheme\'s rules must be complied with first.',
                    why: 'The Schemes exist because a purchaser paying for an unbuilt flat has handed over money against nothing he can inspect. The regulation is a substitute for the thing he would normally be buying.',
                    exam: {
                      write: 'The sale of Flat [x] on [date] was a pre-sale, the occupation permit not having issued until [date], so the requirements of the [Consent / Non-Consent] Scheme had to be satisfied first.',
                      trap: 'Saying "consent scheme" without identifying whose consent. Under the Consent Scheme it is the consent of the Director of Lands to the pre-sale.',
                    },
                    points: [
                      'A pre-sale is a sale before completion of the flat and before the occupation permit is issued.',
                      'Under the Consent Scheme the consent of the Director of Lands to the pre-sale must be obtained.',
                      'Where a developer pre-sells in a multi-storey building in accordance with the Consent Scheme, there is no obligation to allocate shares to the common parts.',
                    ],
                  },
                  {
                    label: 'Stage (c): divide the whole building and the land notionally into undivided shares',
                    detail: 'The lot and the building on it are divided into a number of undivided shares representing the units intended to be created, with a number of shares allocated to each flat and each car parking space.',
                    why: 'The division is notional, not physical. Hong Kong has no statutory strata title, so the only way to give a flat buyer a legal estate is to give him a fraction of the whole lot and add a contractual right to occupy one part of it.',
                    exam: {
                      write: 'The lot and the building were notionally divided into [n] undivided shares, of which [m] were allocated to Flat [x].',
                      trap: 'Describing the shares as shares in the flat. They are undivided shares of and in the lot.',
                    },
                    points: [
                      {
                        text: 'The shares need not be equal between flats.',
                        points: [
                          'A worked example from the lecture: a block of 20 flats and 20 car parking spaces divided into 620 shares, 30 per flat and one per car space.',
                          'A large penthouse may be allocated more shares than a smaller lower flat.',
                        ],
                      },
                      'Shares must be allocated to the common parts — the staircases, lifts, gardens, tennis courts and roads — save in the Consent Scheme pre-sale case at stage (b).',
                      'The division is notional: nothing is physically partitioned.',
                    ],
                  },
                  {
                    label: 'Stage (d): the first assignment, and what the developer reserves',
                    detail: 'The developer agrees to sell one flat with a specified car space to the first purchaser and assigns it. The first purchaser receives undivided shares of and in the lot as tenant in common, together with the right to exclusive occupation, use and enjoyment of his flat and car space.',
                    why: 'The reservation in the first assignment is doing a great deal of work. Once the developer has assigned shares in the lot, it is a co-owner like anyone else, so without an express reservation it has no better right to the rest of the building than the purchaser of Flat 5B has.',
                    exam: {
                      write: 'By the assignment dated [date] the first purchaser took [m] undivided shares of and in the lot as tenant in common, together with the exclusive right to occupy Flat [x] and car space [y], the vendor reserving the rest of the building to itself.',
                      trap: 'Writing that the purchaser bought "the flat". He bought shares in the lot plus a right of exclusive occupation — which is exactly why the number of shares matters so much.',
                    },
                    points: [
                      'Shares are of and in the LOT, not in the flat.',
                      'The purchaser takes as tenant in common, so there is no right of survivorship between co-owners.',
                      'In the assignment the developer reserves for itself and its successors the exclusive right to occupy the rest of the building, other than the common parts, to the exclusion of the first purchaser.',
                    ],
                  },
                  {
                    label: 'Stage (e): execute the deed of mutual covenant for the whole development',
                    detail: 'The developer and the first purchaser execute the DMC in respect of the whole development. The management company, which may be a subsidiary of the developer, may also be a party.',
                    why: 'Only two or three people ever sign the DMC, yet it has to bind hundreds. That gap is the reason section 41 of the Conveyancing and Property Ordinance matters so much later in this lecture: the DMC works on everyone else through the running of covenants, not through signature.',
                    exam: {
                      write: 'The deed of mutual covenant was executed on [date] by the developer, the first purchaser and [the manager], and it governs the whole development notwithstanding that no later purchaser is a party to it.',
                      trap: 'Assuming every owner signed the DMC. The only parties are the developer, the first purchaser and perhaps the management company.',
                    },
                    points: [
                      'The DMC is executed for the whole development, not for the one flat being sold.',
                      'The manager is commonly a party, which is what lets it enforce the covenants directly.',
                      'Because later purchasers are not parties, the general law must be used to make the DMC bind them.',
                    ],
                  },
                  {
                    label: 'Stage (f): register the assignment and the deed of mutual covenant',
                    detail: 'Both instruments are registered at the Land Registry. Failure to register might render the covenants in the DMC unenforceable by and against the successors in title of the parties.',
                    why: 'Registration supplies the notice that equity would otherwise require, which is why section 41(9) of the Conveyancing and Property Ordinance can bind a successor whether or not he searched.',
                    exam: {
                      write: 'The deed of mutual covenant was registered on [date] and bears memorial number [n]; by s41(9) of the Conveyancing and Property Ordinance successors in title are bound by its covenants whether or not they searched the register.',
                      trap: 'Treating registration as a formality. An unregistered DMC is the fact that decides an enforceability question against a successor in title.',
                    },
                    points: [
                      'Registration gives the DMC a memorial number, which later assignments refer to.',
                      'Failure to register may make the covenants unenforceable by and against successors in title.',
                    ],
                  },
                  {
                    label: 'Stage (g): the developer assigns the remaining flats',
                    detail: 'Each later assignment should be expressly made "together with the benefit of and subject to the burdens and obligations set out in the deed of mutual covenant", now identified by its memorial number. These assignments are registered.',
                    why: 'The express words are belt and braces. Sections 39 to 41 of the Conveyancing and Property Ordinance would run most of these covenants anyway, but a clause that expressly assigns benefit and burden removes the argument.',
                    exam: {
                      write: 'The assignment to [purchaser] dated [date] was expressly made together with the benefit of and subject to the burdens and obligations set out in the deed of mutual covenant registered under memorial no. [n].',
                      trap: 'Ignoring this clause when the question is whether a covenant binds a later purchaser. It is the first thing to point to.',
                    },
                    points: [
                      'Look for the express benefit-and-burden clause in the assignment before reaching for s41.',
                      'The DMC is now identified by its memorial number.',
                    ],
                  },
                  {
                    label: 'Stage (h): a purchaser resells, and the covenants pass again',
                    detail: 'On a resale the flat is assigned together with and subject to the benefit and burden provided for in the DMC, so that both the benefits and the burdens bind successors in title of the covenantor and covenantee.',
                    why: 'The chain has to be unbroken. A single assignment that omits the clause does not necessarily break it, because s39 and s40 of the Conveyancing and Property Ordinance imply annexation unless a contrary intention is expressed — but the omission is what a requisition will be raised on.',
                    exam: {
                      write: 'On the resale to [purchaser] the property was assigned together with the benefit of and subject to the burdens in the deed of mutual covenant, so that both pass to the successor in title.',
                      trap: 'Stopping at the express clause without asking whether the covenant is one whose burden can run at all — a positive covenant does not run against a lessee or occupier: s41(5) of the Conveyancing and Property Ordinance.',
                    },
                    points: [
                      'The purpose of the clause is to bind successors in title of both covenantor and covenantee.',
                      'Whether it succeeds still depends on s41 of the Conveyancing and Property Ordinance.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The number of shares allocated to a flat is not just accounting. It fixes the owner\'s share of management expenses and his voting weight, and if it cannot be identified the title is called into question.',
                'The management company is often a subsidiary of the developer. That is a commercial point worth noticing where the question is about the manager\'s enforcement decisions.',
                'A developer who pre-sells under the Consent Scheme need not allocate shares to the common parts — so the absence of shares attached to the common parts is not by itself a defect.',
                'Common parts include the staircases, lifts, gardens, tennis courts and roads, not merely the lobby and the lift.',
              ],
            },
            skeleton: {
              bullets: [
                'Identify the developer\'s own title to the lot and any restriction in it.',
                'Ask whether the sale in question was a pre-sale and, if so, whether the Scheme was complied with.',
                'Set out the notional division into undivided shares and what was allocated to the unit in issue.',
                'State what the first assignment gave and what it reserved.',
                'Identify the parties to the DMC and the date of its registration.',
                'Trace the clause by which benefit and burden were passed on each later assignment.',
                'Say what the missing or defective stage means for the transaction in front of you.',
              ],
            },
            mistakes: {
              bullets: [
                'Saying the purchaser buys the flat. He buys undivided shares in the lot plus a right of exclusive occupation, and every later question turns on that.',
                'Forgetting that the DMC is executed for the whole development on the first sale, long before most of the owners exist.',
                'Assuming that because a purchaser was not a party to the DMC he is not bound by it.',
                'Treating unequal share allocations between flats as an irregularity. They are normal and usually reflect size.',
              ],
            },
            authorities: {
              table: {
                headers: ['Stage', 'Source', 'What it establishes'],
                rows: [
                  ['Pre-sale', 'Consent Scheme; Non-Consent Scheme', 'The Scheme\'s rules must be complied with before a flat can be pre-sold; under the Consent Scheme the Director of Lands must consent'],
                  ['Division into shares', 'The DMC', 'The lot and building are notionally divided into undivided shares allocated to each flat and car space, and to the common parts'],
                  ['First assignment', 'The assignment', 'Shares of and in the lot as tenant in common, plus the exclusive right to occupy; the rest of the building reserved to the developer'],
                  ['Failure to reserve', 'Jumbo King Ltd v Faithful Properties Ltd (1999) 2 HKCFAR 279, [1999] 3 HKLRD 707, CFA', 'On construction the developer retained exclusive occupation of the rest of the property save the common parts'],
                  ['Followed', 'Wui Fung Lee Investment Co Ltd v Hong Kong Mansion, Causeway Bay (IO) [2021] 1 HKLRD 408', 'Jumbo King applied'],
                  ['Registration', 's41(9), Conveyancing and Property Ordinance (Cap. 219)', 'On registration of the DMC successors in title are bound irrespective of whether they searched the register'],
                  ['Passing benefit and burden', 'The express clause in each assignment', 'Assignment "together with the benefit of and subject to the burdens" in the DMC'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG2', issue: 'construing-the-dmc', label: 'Construing the DMC and the first assignment' },
              { session: 'LG2', issue: 'enforceability-s41', label: 'Does the covenant run? Section 41 of the Conveyancing and Property Ordinance' },
              { session: 'LG1', issue: 'sectioning-and-subdivision', label: 'Dividing a lot: sectioning and undivided shares' },
              { session: 'LG4', issue: 'raising-requisitions', label: 'Raising requisitions: the time limits' },
              { session: 'LG2', issue: 'common-parts-definition', label: 'Is it a common part?' },
              { session: 'LG3', issue: 'documents-of-title', label: 'Which documents are documents of title?' },
            ],
          },
          {
            id: 'construing-the-dmc',
            title: 'Construing the DMC and the first assignment',
            summary: 'What did the developer keep? A question of construction in which the DMC now has the primacy — and the shares tell you more than the words.',
            triggers: {
              bullets: [
                'The developer sold the lower commercial floors and the purchaser now says the roofs and utility rooms, to which no shares were allocated, must be common parts.',
                'The DMC defines the common parts by listing them and simply does not mention the external walls at all.',
                'The first assignment reserved to the vendor the exclusive use, occupation and enjoyment of the outer walls of the building unless otherwise specifically included in the property.',
                'The first assignment reserved the exclusive right to affix and maintain chimneys or flue pipes on the external walls, and to use them for advertising.',
                'The DMC allows other owners to use the external wall with the manager\'s consent and makes the manager responsible for its maintenance and repair.',
                'No undivided shares were ever attached to the part of the building now in dispute.',
                'The DMC purports to designate the main roof as a common part, but the developer later assigned the exclusive right to part of it to the plaintiff\'s predecessor.',
                'A requisition is raised asking whether roofs and utility rooms retained by the developer are common parts.',
                'The developer\'s retained rights over a part of the building are so extensive that the other owners argue no use is left for them.',
              ],
              routes: [
                { when: 'The specific question is whether the external wall is a common part', session: 'LG2', issue: 'external-walls', label: 'External walls, signs and reserved rights' },
                { when: 'The question is what counts as a common part in the first place', session: 'LG2', issue: 'common-parts-definition', label: 'Is it a common part?' },
                { when: 'The complaint is that shares attached to the disputed part cannot be identified', session: 'LG2', issue: 'undivided-shares-and-good-title', label: 'Undivided shares, tenancy in common and good title' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Construing the DMC and the assignment together',
                steps: [
                  {
                    label: 'Read the DMC first, and give it primacy',
                    detail: 'In Donora Co Ltd v IO of Tsuen Kam Centre [2023] HKCA 33, [2024] HKCFA 3, the Court of Final Appeal treated the first assignment as merely part of the context in the construction of the DMC, and the making of the DMC and the first assignment as one transaction.',
                    why: 'The DMC is the document every later purchaser is told to read, and the only one he can find by its memorial number. Giving it primacy means an owner in 2026 is not caught by a reservation buried in a 1970s assignment he has never seen.',
                    exam: {
                      write: 'Following Donora, the deed of mutual covenant is the primary document and the first assignment is part of the context in which it falls to be construed, the two being treated as one transaction.',
                      trap: 'Starting with the reservation in the first assignment and treating the DMC as a gloss on it. Donora puts it the other way round.',
                    },
                    points: [
                      'Identify the DMC\'s own definition of the common parts and see whether the disputed part is in it.',
                      'Then read the first assignment as context, not as the governing instrument.',
                      'Treat the DMC and the first assignment as one transaction.',
                    ],
                  },
                  {
                    label: 'Ask whether any undivided shares were attached to the disputed part',
                    detail: 'In Donora the Court of Final Appeal discussed a number of factors, of which perhaps the most important was that no undivided shares were attached specifically to the external walls.',
                    why: 'Shares are the currency of ownership in this system. A part of the building to which nobody\'s shares are attached cannot be anybody\'s exclusive property, because there is no share to carry the right of exclusive occupation.',
                    exam: {
                      write: 'No undivided shares were attached to [the disputed part], which in Donora was treated as perhaps the most important factor pointing towards its being a common part.',
                      trap: 'Missing the contrast with SPM Ltd v Appeal Tribunal (Buildings Ordinance) [2023] HKCA 275, where an undivided share had been assigned to the external wall and reserved by the developer, and the wall was held to be exclusively owned.',
                    },
                    points: [
                      'No shares attached to the disputed part points strongly towards common part.',
                      'A share assigned to the part and reserved by the developer points the other way: SPM Ltd v Appeal Tribunal (Buildings Ordinance) [2023] HKCA 275.',
                      'A right of exclusive use cannot be assigned or mortgaged without shares attached to it.',
                    ],
                  },
                  {
                    label: 'Apply Jumbo King: construction is not a game of words',
                    detail: 'In Jumbo King Ltd v Faithful Properties Ltd (1999) 2 HKCFAR 279, [1999] 3 HKLRD 707, CFA, the developer sold the lower commercial floors; the property was described as including roofs and utility rooms, to which no shares had been allocated, and the DMC referred only to "offices and shops" retained by the developer and was otherwise silent.',
                    why: 'Lord Hoffmann\'s point was that the DMC is a mutual document, unlike an assignment between two parties, and the context of the first purchase was a residential unit. Construction has to serve what the parties were obviously doing, not reward whoever finds the better verbal hook.',
                    exam: {
                      write: 'Applying Jumbo King, the construction of a deed of mutual covenant is not a game of words; it is a mutual document and falls to be construed in the context of the transaction as a whole.',
                      trap: 'Citing Jumbo King as authority that unreserved parts are always common parts. It decided the opposite on its facts — the developer was held to have retained the commercial unit.',
                    },
                    points: [
                      'The DMC is a mutual document, unlike an assignment.',
                      'The context of the first purchase in Jumbo King was a residential unit, and the parties plainly intended the developer to keep the commercial unit.',
                      'Held: on construction the developer had retained the right of exclusive occupation over the rest of the property, save the common parts.',
                      'Followed in Wui Fung Lee Investment Co Ltd v Hong Kong Mansion, Causeway Bay (IO) [2021] 1 HKLRD 408.',
                    ],
                  },
                  {
                    label: 'Check whether a later designation has already settled the point',
                    detail: 'In Chong Chi Ting Chris v Kin On Building (IO) [2023] HKLRD 284, the DMC had effectively designated the main roof, including the part main roof, as a common part of the building.',
                    why: 'Designation is an event with a date. Once the DMC and first assignment have designated a part as common, the developer has nothing left to assign, so everything downstream fails for want of title rather than for want of construction.',
                    exam: {
                      write: 'The deed of mutual covenant having designated [the part] as a common part, the developer lost its exclusive right on the execution of the DMC and the first assignment, and the purported later assignments of that right were null and void for lack of title.',
                      trap: 'Advising the client that he has a poor title when in truth he has none at all. In Chong Chi Ting the purported assignments were void, not merely defective.',
                    },
                    points: [
                      'The developer lost its exclusive right to the part main roof after the execution of the DMC and the first assignment.',
                      'All the purported assignments of that exclusive right to the plaintiff\'s predecessor in title were null and void and of no legal effect for lack of title.',
                    ],
                  },
                  {
                    label: 'Say what follows for the transaction in front of you',
                    detail: 'The construction exercise only matters for what it does to the client. Once the part is classified, three things follow at once: whether anyone can give title to it, who may sue on a breach affecting it, and who carries the duty to keep it in repair.',
                    why: 'A construction exercise that stops at "it is a common part" has answered half the question. The client is buying, selling or suing, and the label only matters for what it does to that.',
                    exam: {
                      write: 'It follows that [the part] is [a common part / retained by the developer], so that [the vendor cannot give title to it / the purchaser takes subject to the manager\'s control / only the incorporated owners may sue on a breach affecting it].',
                      trap: 'Forgetting that once the part is a common part, the proper plaintiff for a breach affecting it is usually the incorporated owners alone, under s16 of the Building Management Ordinance.',
                    },
                    points: [
                      'If it is a common part, a purported assignment of exclusive rights over it is void for want of title.',
                      'If it is a common part, enforcement of a breach affecting it is generally exclusive to the incorporated owners: s16, Building Management Ordinance (Cap. 344).',
                      'If it was validly retained, the retaining owner carries the maintenance duty under s34H, Building Management Ordinance (Cap. 344).',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'Donora is a Court of Appeal decision at [2023] HKCA 33 affirmed at [2024] HKCFA 3 — cite the level you are relying on.',
                'The primacy of the DMC is expressed cautiously in the lecture materials: the Court of Final Appeal "appears to be" asserting it. Present it as the direction of travel rather than a settled rule.',
                'A reservation that is extensive is not for that reason a reservation of exclusive possession. In Kong Wai Hsien v IO of Tai Wai Glamour Garden [2019] HKCA 1229 the argument that the developer\'s rights left no use for the other owners was rejected.',
                'Buildings predating 19 June 1970 are outside s2 and Schedule 1 of the Building Management Ordinance, so construction of the DMC is all you have: Shine Empire Ltd v IO of San Po Kong Mansion HCA 3444/2001, 3/12/2004, paras 87-103.',
              ],
            },
            skeleton: {
              bullets: [
                'Set out the DMC\'s definition of the common parts and whether the disputed part falls within it.',
                'Read the first assignment as context and identify precisely what was reserved.',
                'State whether undivided shares were attached to the disputed part.',
                'Apply Jumbo King and Donora and reach a conclusion on construction.',
                'Check whether the part has already been designated, with the consequences in Chong Chi Ting.',
                'State the consequence for title, enforcement or maintenance.',
              ],
            },
            mistakes: {
              bullets: [
                'Reading the first assignment as the governing document. After Donora the DMC has the primacy and the assignment is context.',
                'Treating Jumbo King as a rule about roofs. It is a rule about how to construe a mutual document.',
                'Concluding that a part is exclusively owned because the developer reserved extensive rights over it, without asking whether shares were attached.',
                'Advising on construction without saying who may sue on the answer.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Authority', 'What it establishes'],
                rows: [
                  ['Construction of a DMC', 'Jumbo King Ltd v Faithful Properties Ltd (1999) 2 HKCFAR 279, [1999] 3 HKLRD 707, CFA', 'Not a game of words; the DMC is a mutual document; on the facts the developer retained the rest of the property save the common parts'],
                  ['Jumbo King applied', 'Wui Fung Lee Investment Co Ltd v Hong Kong Mansion, Causeway Bay (IO) [2021] 1 HKLRD 408', 'Followed on failure to reserve'],
                  ['Primacy of the DMC', 'Donora Co Ltd v IO of Tsuen Kam Centre [2023] HKCA 33, [2024] HKCFA 3', 'The first assignment is part of the context; the DMC and first assignment are one transaction; no shares attached to the external walls'],
                  ['Share attached and reserved', 'SPM Ltd v Appeal Tribunal (Buildings Ordinance) [2023] HKCA 275', 'External wall exclusively owned where an undivided share was assigned to it and reserved by the developer'],
                  ['Extensive reserved rights', 'Kong Wai Hsien v IO of Tai Wai Glamour Garden [2019] HKCA 1229', 'Still common parts; the argument that no use was left for other owners was rejected'],
                  ['Designation exhausts title', 'Chong Chi Ting Chris v Kin On Building (IO) [2023] HKLRD 284', 'Main roof designated a common part; later purported assignments of exclusive rights void for lack of title'],
                  ['Pre-1970 buildings', 'Shine Empire Ltd v IO of San Po Kong Mansion HCA 3444/2001, 3/12/2004', 'Buildings predating 19 June 1970 not governed by s2 and Schedule 1 of the BMO'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG2', issue: 'common-parts-definition', label: 'Is it a common part?' },
              { session: 'LG2', issue: 'external-walls', label: 'External walls, signs and reserved rights' },
              { session: 'LG2', issue: 'undivided-shares-and-good-title', label: 'Undivided shares, tenancy in common and good title' },
              { session: 'LG4', issue: 'raising-requisitions', label: 'Raising requisitions: the time limits' },
            ],
          },
          {
            id: 'sub-dmc',
            title: 'Sub-deeds of mutual covenant',
            summary: 'A co-owner may cut up his own shares by deed poll — but new units need new shares, a new plan and, where new common parts appear, a sub-DMC.',
            triggers: {
              bullets: [
                'The owner of the whole 35th floor wants to divide it into eight separate units and sell them.',
                '227 undivided shares were allocated to a floor, the floor was later divided into flats, and no shares were ever allocated to the individual flats.',
                'The head DMC is silent on whether an assignee may further divide his shares.',
                'A purchaser of one of the new units asks what he is liable to pay by way of management fees under the head DMC.',
                'The sole owner of three floors of a commercial building executed a sub-DMC converting them into shops and appointed a manager for those three floors.',
                'The incorporated owners of the building are trying to dismiss the manager appointed under a sub-deed for three floors.',
                'New corridors and lift lobbies have been created inside a subdivided floor and nobody has said whose they are.',
                'Only one of several new co-owners under the sub-deed has been sued on a covenant in the head deed.',
                'The division of the shares was effected by an assignment rather than by deed poll.',
              ],
              routes: [
                { when: 'The question is whether the shares attached to the unit can be identified at all', session: 'LG2', issue: 'undivided-shares-and-good-title', label: 'Undivided shares, tenancy in common and good title' },
                { when: 'The dispute is about who manages the new common areas', session: 'LG2', issue: 'proper-plaintiff', label: 'Who is the proper plaintiff?' },
                { when: 'The lot itself is being cut up rather than a floor within a building', session: 'LG1', issue: 'sectioning-and-subdivision', label: 'Dividing a lot: sectioning and undivided shares' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Dividing shares and drawing a sub-deed',
                steps: [
                  {
                    label: 'Check whether the head DMC permits further division',
                    detail: 'The developer and each assignee from the developer can further divide up its or his undivided shares, by deed poll, unless such division is prohibited in the deed of mutual covenant: Kwong Ka Hung v Lai Wah Development Co Ltd HCA 10566/94. So can any subsequent assignee: Hinex Universal Design Consultants Co Ltd v Chan Lai Hing [1998] 1 HKC 317.',
                    why: 'The default is freedom, because a co-owner is dealing with his own shares. The prohibition has to be found in the DMC; it is not implied from the scheme.',
                    exam: {
                      write: 'Unless prohibited by the deed of mutual covenant, [the owner] may further divide his undivided shares by deed poll: Kwong Ka Hung v Lai Wah Development Co Ltd HCA 10566/94.',
                      trap: 'Assuming only the developer may subdivide. Any subsequent assignee may: Hinex Universal Design Consultants Co Ltd v Chan Lai Hing [1998] 1 HKC 317.',
                    },
                    points: [
                      'The right exists unless the head DMC prohibits it.',
                      'It belongs to the developer, to assignees from the developer, and to any subsequent assignee.',
                      'The division is effected by deed poll, not by assignment.',
                    ],
                  },
                  {
                    label: 'Do the three things a division requires',
                    detail: 'A co-owner dividing his shares — for example the owner of a floor who wishes to divide it into several units — must draw up a new floor plan, allocate undivided shares to the new units, and draw up a sub-deed of mutual covenant, at least where new common parts are to be created.',
                    why: 'Each of the three answers a different question a later purchaser will ask: where is my unit, what is my share, and who looks after the corridor outside my door.',
                    exam: {
                      write: 'On subdividing the floor the owner had to draw up a new floor plan, allocate undivided shares to each new unit, and execute a sub-deed of mutual covenant, new common parts having been created.',
                      trap: 'Treating the sub-DMC as always required. The lecture puts it as required at least where new common parts are to be created.',
                    },
                    points: [
                      'Draw up a new floor plan.',
                      'Allocate undivided shares to those new units.',
                      'Draw up a sub-deed of mutual covenant, at least where new common parts are to be created.',
                    ],
                  },
                  {
                    label: 'Deal in the sub-deed with liability under the head deed',
                    detail: 'The sub-DMC should, among other things, deal with the new co-owners\' liability under the head DMC, for example by identifying their share of the management fees.',
                    why: 'The head DMC knows only the original share. If the sub-deed does not apportion it, the new owners are left jointly and severally exposed on an obligation none of them can control.',
                    exam: {
                      write: 'The sub-deed of mutual covenant apportions the [n] shares formerly attached to the floor between the new units, and with them the liability for management fees under the head deed.',
                      trap: 'Thinking the sub-deed can reduce what the head deed demands of the floor as a whole. It apportions the liability; it does not shrink it.',
                    },
                    points: [
                      'Identify each new co-owner\'s share of the management fees.',
                      'The new co-owners are liable to observe the land covenants in the head DMC.',
                      'In Incorporated Owners of San Po Kong Mansion v Island Management Services Ltd [2007] 1 HKC 206 the parties to the sub-DMC were held jointly and severally bound to observe and perform the land covenants in the head DMC, with a corresponding right of indemnity between them if only one were sued.',
                    ],
                  },
                  {
                    label: 'Recognise that the sub-deed creates its own management regime',
                    detail: 'A new management regime is created within the sub-DMC: Incorporated Owners of Po Lok Building v Leung Koon [2006] 3 HKLRD 877.',
                    why: 'The new common areas serve only the new units, so it makes sense that they are common parts only as between those owners. That is precisely why the building-wide manager has no say over them.',
                    exam: {
                      write: 'The sub-deed of mutual covenant created a separate management regime for the [three] floors; the new common areas are common parts only as between the owners of those units and fall outside the jurisdiction of the manager of the building.',
                      trap: 'Letting the incorporated owners of the whole building interfere with the sub-deed manager. In Po Lok Building they had no right to do so and could not dismiss him.',
                    },
                    points: [
                      'The owner of the floors had the right to draw up a sub-DMC for his floors, and its terms were valid provided they did not conflict with the head DMC.',
                      'The new common areas were common parts only as against the owners of the shops on those floors.',
                      'They fell outside the jurisdiction of the building\'s manager, who was responsible only for the common areas identified in the head DMC.',
                      'The owners\' corporation therefore had no right to interfere and could not dismiss the sub-deed manager.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'A sub-deed that conflicts with the head deed is to that extent bad. Po Lok Building upheld the sub-deed expressly on the footing that its terms did not conflict.',
                'The failure to execute a sub-deed is a title problem, not merely an administrative one: Lee Tak Chun v East Weal International Ltd [1994] 1 HKC 722 held the owner\'s title defective, though that decision was criticised in Hinex.',
                'Division is by deed poll because the owner is dealing with his own shares — there is no other party to the instrument.',
                'Where a sub-deed creates new common parts, the building\'s incorporated owners lose control of them, which has consequences for who may sue on a breach affecting them.',
              ],
            },
            skeleton: {
              bullets: [
                'Check the head DMC for a prohibition on further division.',
                'Identify whether new units, and new common parts, are being created.',
                'Set out the three requirements: plan, allocation of shares, sub-deed.',
                'Deal with the new owners\' liability under the head deed, particularly management fees.',
                'Identify who manages the new common parts, and who may sue on a breach affecting them.',
              ],
            },
            mistakes: {
              bullets: [
                'Describing the division as an assignment. It is effected by deed poll.',
                'Assuming the building\'s incorporated owners or manager control the new common areas created by a sub-deed.',
                'Forgetting the indemnity in San Po Kong Mansion when only one of several new co-owners has been sued.',
                'Treating Lee Tak Chun as settled. It was criticised in Hinex, and Marking and Goldjet went the other way on similar facts.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Authority', 'What it establishes'],
                rows: [
                  ['Right to divide', 'Kwong Ka Hung v Lai Wah Development Co Ltd HCA 10566/94', 'Developer and assignees may further divide their shares by deed poll unless the DMC prohibits it'],
                  ['Subsequent assignees too', 'Hinex Universal Design Consultants Co Ltd v Chan Lai Hing [1998] 1 HKC 317', 'Any subsequent assignee may also divide'],
                  ['Liability under the head deed', 'Incorporated Owners of San Po Kong Mansion v Island Management Services Ltd [2007] 1 HKC 206', 'Sub-deed parties jointly and severally bound by the head deed\'s land covenants, with a right of indemnity between them'],
                  ['Separate management regime', 'Incorporated Owners of Po Lok Building v Leung Koon [2006] 3 HKLRD 877', 'Sub-deed valid if not in conflict with the head deed; new common areas outside the building manager\'s jurisdiction; owners\' corporation cannot dismiss the sub-deed manager'],
                  ['Failure to subdivide shares', 'Lee Tak Chun v East Weal International Ltd [1994] 1 HKC 722', 'Title defective where no shares allocated to individual flats after a floor was divided (criticised in Hinex)'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG2', issue: 'undivided-shares-and-good-title', label: 'Undivided shares, tenancy in common and good title' },
              { session: 'LG2', issue: 'proper-plaintiff', label: 'Who is the proper plaintiff?' },
              { session: 'LG3', issue: 'documents-of-title', label: 'Which documents are documents of title?' },
              { session: 'LG2', issue: 'common-parts-definition', label: 'Is it a common part?' },
            ],
          },
          {
            id: 'undivided-shares-and-good-title',
            title: 'Undivided shares, tenancy in common and good title',
            summary: 'What the owner actually owns, what he may sell separately, and when the shares are too vague to give title.',
            triggers: {
              bullets: [
                'The vendor purports to assign the exclusive right to occupy the roof without assigning any undivided shares with it.',
                'A mortgage was taken over the flat and the shares, but the entrance hall and staircase were mortgaged separately with no shares attached.',
                'The mortgagee has exercised its power of sale over a flat together with an entrance hall to which no shares were ever attached.',
                'The sale and purchase agreement sells 12/3,100th shares together with the exclusive right to use unit 912, but the DMC allocated 138 shares to the ninth floor and none to individual units.',
                'The Land Registry control card shows 12 shares against unit 912 and there is a share apportionment document for the development.',
                'The vendor agreed to sell a 1/108 share, the DMC allocated no shares, but subdivision registers were opened on the assignments of the flats.',
                'A purchaser requisitions the title on the ground that the vendor has not shown how many shares are allocated to the other flats in the building.',
                'Two co-owners of a flat have died and the survivor claims the whole by survivorship.',
                'The exclusive right to occupy a part of the building is being sold on its own, unaccompanied by any share.',
              ],
              routes: [
                { when: 'The shares were never apportioned because a floor was divided without a sub-deed', session: 'LG2', issue: 'sub-dmc', label: 'Sub-deeds of mutual covenant' },
                { when: 'The argument is about what the developer reserved rather than about shares', session: 'LG2', issue: 'construing-the-dmc', label: 'Construing the DMC and the first assignment' },
                { when: 'The real question is whether the item is "land" at all', session: 'LG1', issue: 'what-is-land', label: 'Is it "land"? Fixtures, chattels and fittings' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Testing what the owner owns and whether he can sell it',
                steps: [
                  {
                    label: 'State the nature of the interest: tenancy in common plus a right of exclusive occupation',
                    detail: 'Each owner receives a number of undivided shares in the multi-storey building and becomes a co-owner with the others: Kung Ming Tak Tong v Park Solid Enterprise (2008) 11 HKCFAR 403. The co-ownership is a tenancy in common with the other co-owners and the developer, until the developer has disposed of all the flats and hence all his interest.',
                    why: 'Tenancy in common is the only form of co-ownership that can carry this system. Joint tenancy would mean each owner\'s interest passed to the others on death, which is unthinkable for a block of strangers.',
                    exam: {
                      write: '[Owner] holds [n] undivided shares of and in the lot as tenant in common with the other co-owners, together with the right granted by the deed of mutual covenant to the exclusive occupation, use and enjoyment of Flat [x].',
                      trap: 'Applying the right of survivorship. Jus accrescendi applies only to joint tenants and does not apply to tenants in common.',
                    },
                    points: [
                      'Co-ownership in Hong Kong is a legal interest which can be assigned and mortgaged.',
                      'Jus accrescendi, the right of survivorship, applies only to joint tenants, not to tenants in common.',
                      'The DMC grants the right to exclusive occupation, use and enjoyment of a particular flat and perhaps a car space.',
                      'The co-owner holds subject to the terms of the DMC and of the Government lease or Conditions.',
                    ],
                  },
                  {
                    label: 'Check that any dealing carries shares with it',
                    detail: 'Every co-owner has the right to sell or mortgage his shares. The right to exclusive use and occupation cannot be assigned or mortgaged except together with an assignment of a share in the land: Lai Wing-ho v Chan Siu-fong [1993] 1 HKLR 319.',
                    why: 'The right of exclusive occupation is contractual, given by the DMC; the share is the proprietary interest. Detach one from the other and there is nothing for the purchaser\'s title to hang on.',
                    exam: {
                      write: 'The purported [assignment / mortgage] of the exclusive right to occupy [the part] was ineffective, no undivided shares having been attached to it at the time: Lai Wing-ho v Chan Siu-fong [1993] 1 HKLR 319.',
                      trap: 'Stating Lai Wing-ho as a prohibition on selling parts of a building. Jumbo King held that an owner may assign the right to exclusive use of any part provided he assigns some shares at the same time.',
                    },
                    points: [
                      'Lai Wing-ho: assignment of the exclusive right to occupy a roof without any assignment of shares was ineffective.',
                      'Jumbo King Ltd v Faithful Properties Ltd (1999) 2 HKCFAR 279, [1999] 3 HKLRD 757, CFA: an owner may assign the right to exclusive use and occupation over any part of the building provided that at the same time he assigns some shares in the building.',
                      {
                        text: 'Goldenwick Ltd v Standard Chartered Bank (Hong Kong) Ltd [2008] 3 HKLRD 266 works the point through a mortgage.',
                        points: [
                          'The vendor owned shares plus the exclusive right to occupy a flat and an entrance hall and staircase.',
                          'He mortgaged the shares together with the flat, but without mentioning the hall and staircase, and later mortgaged the hall and staircase to the same mortgagee.',
                          'On a sale under the power of sale the purchaser did not get good title to the hall and staircase, the purported mortgage of them being ineffective because no shares were attached to them at the time of the mortgage (per Poon J).',
                        ],
                      },
                    ],
                  },
                  {
                    label: 'Ask whether the shares attached to this unit are clearly designated',
                    detail: 'The number of shares to be assigned must be clearly designated. If no clear delineation of the number of shares attached to the flat has been made, the owner cannot give good title to it.',
                    why: 'A share is a fraction, and a fraction of nothing identifiable cannot be conveyed. This is the routine title objection in an older subdivided building, and it is the practical reason sub-deeds exist.',
                    exam: {
                      write: 'The number of undivided shares attached to Flat [x] [is / is not] clearly designated, [the DMC allocating [m] shares to it / no allocation having been made to individual units on that floor].',
                      trap: 'Requiring the vendor to account for the whole building. There is no requirement to show how many shares have been allocated to the other flats, provided it is clear how many are allocated to the one in question: Sheenip Industries Ltd v Champion Billion Development Ltd HCMP 1390/1995, 4/7/1995.',
                    },
                    points: [
                      'Lee Tak Chun v East Weal International Ltd [1994] 1 HKC 722: 227 shares allocated to a floor, the floor then divided into flats and no further allocation made; title held defective. The decision was criticised in Hinex Universal Design Consultants Co Ltd v Chan Lai Hing [1998] 1 HKC 317.',
                      'Marking Ltd v Cheerifat Ltd HCMP 2727/1995: no allocation to units on the ninth floor by sub-deed, but the Land Registry control card showed 12 shares against unit 912 and a share apportionment document did too; sufficient evidence that 12 shares had been assigned.',
                      'Goldjet International Investment Ltd v Ling Ki Wai [1997] 3 HKC 503: no allocation in the DMC, but subdivision registers had been opened based on the assignments and the control card showed the allocation; good title shown. Same conclusion in Hinex.',
                      'No requirement to show the allocation to other flats: Sheenip Industries Ltd v Champion Billion Development Ltd HCMP 1390/1995, 4/7/1995.',
                    ],
                  },
                  {
                    label: 'Confirm the right to use the common parts',
                    detail: 'Every owner has the right to use the common parts. This right is granted by the DMC; if no such grant is made the courts may imply it.',
                    why: 'The implied right cannot be an easement, because a co-owner cannot have an easement over his own property. It has to be contractual — a term implied into the DMC — which is why it is described as a quasi-easement.',
                    exam: {
                      write: 'In the absence of an express grant, a term is implied into the deed of mutual covenant entitling each co-owner to pass along the common parts: Chui Shu-choi v Merrilong Dyeing Works Ltd [1990] 1 HKLR 385, CA.',
                      trap: 'Calling it an easement. Co-owners cannot enjoy easements over their own property; the right arises by virtue of contract, as a quasi-easement.',
                    },
                    points: [
                      'The right is normally granted expressly by the DMC.',
                      'If not, a right to pass along the common parts arises by necessary implication as a quasi-easement, not an easement: Chui Shu-choi v Merrilong Dyeing Works Ltd [1990] 1 HKLR 385, CA.',
                    ],
                  },
                  {
                    label: 'State the consequence for the transaction',
                    detail: 'Every one of the cases above was a conveyancing dispute. What the client needs to know is whether the vendor can give good title, and that turns on whether the defect is one of title or merely of evidence.',
                    why: 'Every one of the cases above was a conveyancing dispute, not an abstract one. The answer the client needs is whether he must complete, and that turns on whether the defect is one of title or merely of evidence.',
                    exam: {
                      write: 'It follows that the vendor [can / cannot] give good title to [the unit], and the purchaser [must complete / is entitled to raise a requisition and, if it is not answered, to rescind].',
                      trap: 'Treating Lee Tak Chun as the last word. Marking, Goldjet and Hinex all found other evidence of the allocation sufficient, so look for the control card and the subdivision register before advising that title is bad.',
                    },
                    points: [
                      'Evidence outside the DMC — control cards, share apportionment documents, subdivision registers — can establish the allocation.',
                      'A purported dealing with a right of exclusive occupation unaccompanied by shares gives no title at all.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'Jumbo King is reported at [1999] 3 HKLRD 707 in the lecture notes\' treatment of construction and at [1999] 3 HKLRD 757 in the treatment of assignment of exclusive rights. Use the page reference that matches the proposition you are citing.',
                'Lai Wing-ho and Jumbo King are not contradictory once the rule is stated properly: shares must accompany the right, but any part of the building may be dealt with if they do.',
                'A mortgagee is a successor in title only when in possession — a distinction that matters for s41(5) of the Conveyancing and Property Ordinance later in the lecture.',
                'The developer remains a co-owner, and bound by the DMC, until it has disposed of all the flats.',
              ],
            },
            skeleton: {
              bullets: [
                'State the interest: undivided shares held as tenant in common, plus the DMC right of exclusive occupation.',
                'Identify precisely what is being assigned or mortgaged and whether shares accompany it.',
                'Test whether the shares attached to the unit are clearly designated, and look outside the DMC for evidence if not.',
                'Deal with the right to use the common parts, express or implied.',
                'Conclude on title and on what the purchaser may do about it.',
              ],
            },
            mistakes: {
              bullets: [
                'Applying survivorship to co-owners of a flat. They are tenants in common.',
                'Saying a right of exclusive occupation can never be dealt with separately. It can, provided shares go with it.',
                'Requisitioning the share allocation of the whole building when only the subject flat is in question.',
                'Describing the right to use the common parts as an easement.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Authority', 'What it establishes'],
                rows: [
                  ['Nature of co-ownership', 'Kung Ming Tak Tong v Park Solid Enterprise (2008) 11 HKCFAR 403', 'Each owner becomes a co-owner with the others; tenancy in common'],
                  ['Shares must accompany the right', 'Lai Wing-ho v Chan Siu-fong [1993] 1 HKLR 319', 'Assignment of the exclusive right to occupy a roof without shares ineffective'],
                  ['But any part may be dealt with', 'Jumbo King Ltd v Faithful Properties Ltd (1999) 2 HKCFAR 279, [1999] 3 HKLRD 757, CFA', 'An owner may assign the right to exclusive use of any part provided he assigns shares at the same time'],
                  ['Mortgage without shares', 'Goldenwick Ltd v Standard Chartered Bank (Hong Kong) Ltd [2008] 3 HKLRD 266', 'Mortgage of hall and staircase ineffective, no shares attached; purchaser under the power of sale took no title'],
                  ['Shares not delineated', 'Lee Tak Chun v East Weal International Ltd [1994] 1 HKC 722', 'Title defective where a divided floor\'s units had no allocation (criticised in Hinex)'],
                  ['Other evidence sufficed', 'Marking Ltd v Cheerifat Ltd HCMP 2727/1995', 'Control card and share apportionment document showed 12 shares against unit 912'],
                  ['Other evidence sufficed', 'Goldjet International Investment Ltd v Ling Ki Wai [1997] 3 HKC 503', 'Subdivision registers and control card established the allocation; good title'],
                  ['No need to show other flats', 'Sheenip Industries Ltd v Champion Billion Development Ltd HCMP 1390/1995, 4/7/1995', 'Only the shares attached to the subject flat need be shown'],
                  ['Right to use common parts', 'Chui Shu-choi v Merrilong Dyeing Works Ltd [1990] 1 HKLR 385, CA', 'Implied right to pass along the common parts as a quasi-easement, arising by contract'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG2', issue: 'sub-dmc', label: 'Sub-deeds of mutual covenant' },
              { session: 'LG2', issue: 'construing-the-dmc', label: 'Construing the DMC and the first assignment' },
              { session: 'LG2', issue: 'common-parts-definition', label: 'Is it a common part?' },
              { session: 'LG3', issue: 'what-is-good-title', label: 'What constitutes a good title?' },
            ],
          },
          {
            id: 'common-parts-definition',
            title: 'Is it a common part?',
            summary: 'Section 2 and the First Schedule start from the whole building and subtract what has been designated for exclusive use. Everything turns on that designation.',
            triggers: {
              bullets: [
                'A co-owner has built a structure on a part of the building and says it was never anybody\'s common part.',
                'The DMC lists the common parts and the part in dispute is not on the list, but nothing says it was retained either.',
                'The building was completed in 1965 and the DMC is silent about the disputed part.',
                'The DMC assigned 20 undivided shares to the common parts and the definition of common parts includes the external walls.',
                'A part of the building has been specified in an instrument registered in the Land Registry as being for the exclusive use of one owner.',
                'The manager is responsible under the DMC for maintaining and repairing the disputed part, and other owners may use it with his consent.',
                'The staircase and lift lobby are being used by one owner as storage and the other owners want them back.',
                'A pipe running through one owner\'s flat serves the whole building and the owner objects to the manager entering to repair it.',
                'The developer never specified or designated the disputed part in any registered instrument.',
              ],
              routes: [
                { when: 'The part in dispute is an external wall', session: 'LG2', issue: 'external-walls', label: 'External walls, signs and reserved rights' },
                { when: 'The part in dispute is an internal or partition wall', session: 'LG2', issue: 'internal-walls', label: 'Internal, load-bearing and partition walls' },
                { when: 'The answer turns on construing the developer\'s reservation', session: 'LG2', issue: 'construing-the-dmc', label: 'Construing the DMC and the first assignment' },
                { when: 'The part is a common part and the complaint is that someone has taken it over', session: 'LG2', issue: 'bmo-overriding-duties', label: 'The BMO\'s overriding duties: sections 34H and 34I' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Deciding whether a part is a common part',
                steps: [
                  {
                    label: 'Check the date of the building before anything else',
                    detail: 'The predecessor of the Building Management Ordinance was enacted on 19 June 1970. In Shine Empire Ltd v IO of San Po Kong Mansion HCA 3444/2001, 3/12/2004, at paragraphs 87 to 103, it was held that buildings predating the ordinance would not be governed by s2 and Schedule 1 of the BMO.',
                    why: 'The statutory definition operates by subtracting designated parts from the whole building, which only makes sense if the designation regime was in force when the building was carved up. For an older block there is nothing to subtract from, so the DMC is all there is.',
                    exam: {
                      write: 'The building having been completed in [year], before 19 June 1970, s2 and Schedule 1 of the Building Management Ordinance do not apply and the question is one of construction of the deed of mutual covenant alone: Shine Empire Ltd v IO of San Po Kong Mansion HCA 3444/2001, 3/12/2004.',
                      trap: 'Applying Schedule 1 to a pre-1970 building. It is the first thing to check and the easiest mark to lose.',
                    },
                    points: [
                      'The predecessor ordinance was enacted on 19 June 1970.',
                      'For a pre-1970 building, work from the DMC and the assignments alone.',
                    ],
                  },
                  {
                    label: 'Apply the two limbs of the s2 definition',
                    detail: 'Section 2 of the Building Management Ordinance defines common parts as (a) the whole of a building except such parts as have been specified or designated in an instrument registered in the Land Registry as being for the exclusive use, occupation and enjoyment of an owner; and (b) unless so specified or designated, those parts specified in Schedule 1.',
                    why: 'The definition works by subtraction, and the burden that follows from that is the point: the starting position is that everything is common, and it is for whoever claims a part exclusively to point to the registered designation.',
                    exam: {
                      write: 'By s2 of the Building Management Ordinance (Cap. 344), the common parts are the whole of the building except such parts as are specified or designated in a registered instrument as being for the exclusive use, occupation and enjoyment of an owner; and, unless so specified or designated, the parts listed in Schedule 1.',
                      trap: 'Reading limb (b) as an exhaustive list. Schedule 1 supplements limb (a); it does not replace it.',
                    },
                    points: [
                      'Limb (a) — the whole of the building, less parts specified or designated in an instrument registered in the Land Registry for the exclusive use, occupation and enjoyment of an owner.',
                      'Limb (b) — unless so specified or designated, those parts specified in Schedule 1.',
                      'The instrument must be registered in the Land Registry.',
                      'The designation must be for exclusive use, occupation AND enjoyment.',
                    ],
                  },
                  {
                    label: 'Test whether the part has been "specified or designated"',
                    detail: 'Whether a part has been specified or designated can be difficult, as Jumbo King Ltd v Faithful Properties Ltd (1999) 2 HKCFAR 279, [1999] 3 HKLRD 707, CFA, shows.',
                    why: 'Designation is a question of substance, not of finding the word. A DMC that hands a developer maintenance-free exclusive rights over a part without saying so in terms may still not have designated it, because designation has to be visible to the later purchaser reading the register.',
                    exam: {
                      write: 'The [part] [has / has not] been specified or designated in a registered instrument as being for the exclusive use, occupation and enjoyment of an owner, and accordingly [is not / is] a common part.',
                      trap: 'Treating silence in the DMC as designation in the developer\'s favour. Silence usually leaves the part within limb (a) of s2.',
                    },
                    points: [
                      'Where the DMC designates the part as common, the developer loses its exclusive right on execution of the DMC and the first assignment: Chong Chi Ting Chris v Kin On Building (IO) [2023] HKLRD 284.',
                      'A purported later assignment of an exclusive right over a designated common part is null and void for lack of title.',
                      'Reserved rights of use, however extensive, are not the same as designation of exclusive possession.',
                    ],
                  },
                  {
                    label: 'Check Schedule 1 for the parts the statute lists',
                    detail: 'Schedule 1 to the Building Management Ordinance lists parts that are common parts unless specified or designated otherwise. It includes external walls and internal load-bearing walls.',
                    why: 'Schedule 1 is a default, not a trump. It supplies the answer only where the DMC and the registered instruments have not spoken — which is why the construction exercise always comes first.',
                    exam: {
                      write: 'External walls fall within Schedule 1 to the Building Management Ordinance and are therefore common parts unless specifically designated as being for the exclusive use of an owner.',
                      trap: 'Assuming Schedule 1 settles the point. In IO Westlands Garden v Oey Chiou Ling [2011] 2 HKC 460 the expert evidence took the wall outside the Schedule 1 description.',
                    },
                    points: [
                      'External walls are common parts unless specifically designated for the exclusive use of an owner.',
                      'Internal load-bearing walls are included in the Schedule 1 definition.',
                      'Whether a particular wall answers the Schedule 1 description may itself need evidence.',
                    ],
                  },
                  {
                    label: 'Say what follows once the part is classified',
                    detail: 'The classification is never the client\'s question. It decides who may use the part, who repairs it, who may sue about it, and whether the owner who has taken it over is in breach of the Ordinance as well as of the deed of mutual covenant.',
                    why: 'The classification is never the client\'s question. It decides who repairs the part, who may sue about it, and whether the owner who has taken it over is in breach of the Ordinance as well as of the DMC.',
                    exam: {
                      write: 'The [part] being a common part, [the owner\'s conversion of it is a breach of s34I(1)(a) of the Building Management Ordinance and, by s34I(2), a deemed breach of the deed of mutual covenant / the proper plaintiff is the incorporated owners under s16 of that Ordinance].',
                      trap: 'Stopping at the classification. The marks are in the consequence.',
                    },
                    points: [
                      'Every owner has a right to use the common parts, express under the DMC or implied as a quasi-easement.',
                      'Converting a common part to one\'s own use engages s34I(1)(a), Building Management Ordinance (Cap. 344).',
                      'Enforcement of a breach affecting the common parts is generally exclusive to the incorporated owners: s16 of that Ordinance.',
                      'The owner with full and exclusive rights over a part carries the maintenance duty under s34H of that Ordinance.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'Part VIA of the Building Management Ordinance, which contains ss34C to 34L, is universally applicable — it applies whether or not the owners have incorporated.',
                'Section 2 works by subtraction. Do not start by asking whether the part is "common"; ask whether it has been designated out.',
                'Designation must be in an instrument registered in the Land Registry. An unregistered side agreement will not do it.',
                'Chong Chi Ting shows designation is one-way: once the DMC has designated a part as common, the developer has nothing left to assign.',
              ],
            },
            skeleton: {
              bullets: [
                'Check the building\'s date against 19 June 1970.',
                'Read the DMC\'s own definition of the common parts.',
                'Apply limb (a) of s2: has the part been specified or designated in a registered instrument for exclusive use, occupation and enjoyment?',
                'If not, check Schedule 1.',
                'State the classification and then the consequence for repair, enforcement and remedy.',
              ],
            },
            mistakes: {
              bullets: [
                'Applying s2 and Schedule 1 to a building completed before 19 June 1970.',
                'Treating a reservation of extensive rights of use as a designation of exclusive possession.',
                'Forgetting that the designation has to cover use, occupation and enjoyment.',
                'Classifying the part and then failing to say who may sue about it.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Provision or case', 'What it establishes'],
                rows: [
                  ['Definition', 's2 and Schedule 1, Building Management Ordinance (Cap. 344)', 'The whole building less parts designated in a registered instrument for exclusive use, occupation and enjoyment; and, unless so designated, the Schedule 1 parts'],
                  ['Universal application', 'Part VIA (ss34C-34L), Building Management Ordinance (Cap. 344)', 'Applies whether or not the owners have incorporated'],
                  ['Pre-1970 buildings', 'Shine Empire Ltd v IO of San Po Kong Mansion HCA 3444/2001, 3/12/2004, paras 87-103', 'Buildings predating 19 June 1970 not governed by s2 and Schedule 1'],
                  ['Difficulty of designation', 'Jumbo King Ltd v Faithful Properties Ltd (1999) 2 HKCFAR 279, [1999] 3 HKLRD 707, CFA', '"Specified or designated" can be difficult; construction of the DMC is not a game of words'],
                  ['Designation exhausts title', 'Chong Chi Ting Chris v Kin On Building (IO) [2023] HKLRD 284', 'DMC designated the main roof a common part; later purported assignments of exclusive rights void'],
                  ['Right to pass', 'Chui Shu-choi v Merrilong Dyeing Works Ltd [1990] 1 HKLR 385, CA', 'Implied right to pass along the common parts, a quasi-easement arising by contract'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG2', issue: 'external-walls', label: 'External walls, signs and reserved rights' },
              { session: 'LG2', issue: 'internal-walls', label: 'Internal, load-bearing and partition walls' },
              { session: 'LG2', issue: 'bmo-overriding-duties', label: 'The BMO\'s overriding duties: sections 34H and 34I' },
              { session: 'LG2', issue: 'undivided-shares-and-good-title', label: 'Undivided shares, tenancy in common and good title' },
            ],
          },
          {
            id: 'external-walls',
            title: 'External walls, signs and reserved rights',
            summary: 'The commonest fight in the building. A reserved right to advertise is not a reservation of the wall — unless a share went with it.',
            triggers: {
              bullets: [
                'An owner has erected an unauthorised structure on an outside wall and the DMC never delineated the external walls as anyone\'s.',
                'The DMC distinguishes between "exterior side walls" and the facade, and the dispute is over the wall at the back of the building.',
                'The developer reserved the exclusive right to use the external walls for advertising purposes and to affix chimneys and flue pipes to them.',
                'The DMC assigned 20 undivided shares to the common parts and included the external walls in the definition of common parts.',
                'The DMC allows other owners to use the external wall with the manager\'s consent, and makes the manager responsible for its maintenance.',
                'An undivided share was assigned specifically to the external wall and reserved by the developer.',
                'A co-owner has affixed a large trade name sign advertising a pre-school to the external wall.',
                'The developer says its reserved rights over the external wall are so extensive that no use is left for the other owners.',
                'The incorporated owners are being sued over a defective air grille in the external wall and say the wall is the developer\'s.',
              ],
              routes: [
                { when: 'The general question is what counts as a common part', session: 'LG2', issue: 'common-parts-definition', label: 'Is it a common part?' },
                { when: 'The wall is internal rather than external', session: 'LG2', issue: 'internal-walls', label: 'Internal, load-bearing and partition walls' },
                { when: 'The complaint is that the sign alters the external appearance in breach of the DMC', session: 'LG2', issue: 'structural-alterations', label: 'Structural alterations and external appearance' },
                { when: 'The breach is conceded and the argument is that the incorporated owners let it happen', session: 'LG2', issue: 'acquiescence', label: 'Acquiescence after Centre Chase' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Working out who owns the external wall',
                steps: [
                  {
                    label: 'Start from the presumption: external walls are common parts',
                    detail: 'Section 2 and Schedule 1 to the Building Management Ordinance provide that external walls are common parts unless specifically designated as being for the exclusive use of an owner.',
                    why: 'Au JA\'s reasoning in Kong Wai Hsien explains why the presumption is strong: the external walls hold and support the building and prevent damage to its interior. A part that serves every flat is naturally common to all of them.',
                    exam: {
                      write: 'By s2 and Schedule 1 of the Building Management Ordinance (Cap. 344) the external walls are common parts unless specifically designated as being for the exclusive use of an owner.',
                      trap: 'Forgetting the 19 June 1970 cut-off. For an older building the presumption does not apply and construction of the DMC is all you have.',
                    },
                    points: [
                      'Snowland Ltd v Topland Holdings Ltd [2006] 4 HKC 188: unauthorised structures on an outside wall were on a common part, the DMC not having specifically delineated the external walls as within any owner\'s exclusive occupation or enjoyment.',
                      'The external walls hold and support the building and prevent damage to its interior: Au JA in Kong Wai Hsien v IO of Tai Wai Glamour Garden [2019] HKCA 1229.',
                    ],
                  },
                  {
                    label: 'Construe the words the DMC actually uses',
                    detail: 'In Sino Channel Holdings Ltd v Vast Faith Investment Ltd [2020] HKCA 311, the Court of Appeal held it was clear from the relevant provisions of the DMC that the parties intended to differentiate between exterior walls facing the street, that is the facade, and "exterior side walls". "Exterior side walls" referred only to the laterals and not to the front or back.',
                    why: 'The draftsman\'s choice of word carries weight because a DMC is drafted once for the whole life of the building. Using "side" when "external" was available is a deliberate narrowing, not carelessness.',
                    exam: {
                      write: 'The deed of mutual covenant refers to "[the phrase used]", which on the reasoning in Sino Channel is to be read as [narrower / wider] than "external walls", the draftsman having had the wider phrase available.',
                      trap: 'Treating all the phrases as synonyms. The use of "side" was a strong indication of a reference to something different from "external walls", "exterior walls" or "exterior".',
                    },
                    points: [
                      '"Exterior side walls" meant the laterals only, not the front or back.',
                      'The draftsman\'s use of "side" was a strong indication of a reference to something different from "external walls", "exterior walls" or "exterior".',
                    ],
                  },
                  {
                    label: 'Separate the right to use from the right to possess',
                    detail: 'It is very common in Hong Kong for external walls to be common parts, or owned by another party, while a particular owner, usually the developer, has a right to erect advertising signs. The wording may lead to confusion about whether the developer retained exclusive possession or only the exclusive right to erect signs.',
                    why: 'This is the whole battleground. A right to hang something on a wall is a right over somebody else\'s wall; it presupposes that the wall is not yours. The drafting invites the opposite reading, which is why the courts have had to say so repeatedly.',
                    exam: {
                      write: 'The reservation confers the exclusive right to use the external walls for [advertising / pipes and machinery], which is a right of use over a common part and not a reservation of exclusive possession of the wall itself.',
                      trap: 'Accepting the argument that rights so extensive leave no use for the other owners. It was rejected in Kong Wai Hsien.',
                    },
                    points: [
                      {
                        text: 'Kong Wai Hsien v IO of Tai Wai Glamour Garden [2019] HKCA 1229 is the worked example.',
                        points: [
                          'The DMC\'s definition of common parts included the external walls, and 20 undivided shares were assigned to the common parts.',
                          'The developer retained exclusive rights to place pipes, wires and machinery on the walls, and the exclusive right to use or allow others to use them for advertising.',
                          'Held: common parts despite the exclusive rights granted to the developer; the argument that the rights were so extensive that no use was left for other owners was rejected.',
                        ],
                      },
                      'IO of Goa Building v Wui Tat Co Ltd [2004] 1 HKC 348, CA: reserving a right to erect signs, signboards and flue pipes was not "full and exclusive rights" under s34H of the Building Management Ordinance, so the repairing duty did not fall on the developer; the words were not sufficient to find that it had retained ownership of the wall, being not all the rights associated with it.',
                    ],
                  },
                  {
                    label: 'Ask whether any undivided share was attached to the wall',
                    detail: 'In Donora Co Ltd v IO of Tsuen Kam Centre [2023] HKCA 33, [2024] HKCFA 3, a number of factors were discussed, of which perhaps the most important was that no undivided shares were attached to the external walls specifically.',
                    why: 'This is the one factor that cuts cleanly, because it is a matter of record rather than of construction. SPM is the mirror image and shows the test working in the developer\'s favour.',
                    exam: {
                      write: 'No undivided share having been attached to the external wall, it is a common part notwithstanding the rights reserved over it: Donora Co Ltd v IO of Tsuen Kam Centre [2024] HKCFA 3.',
                      trap: 'Citing Donora for a general rule that external walls are always common parts. SPM Ltd v Appeal Tribunal (Buildings Ordinance) [2023] HKCA 275 is an example of the courts finding the opposite where a share had been assigned to the wall.',
                    },
                    points: [
                      {
                        text: 'The Donora facts repay reading closely.',
                        points: [
                          'The first assignment reserved to the vendor and its successors the right to the exclusive use, occupation and enjoyment of the outer walls of the building unless otherwise specifically included in the property.',
                          'It also reserved the exclusive right to use, affix to and maintain on the external walls one or more chimneys or flue pipes, and the exclusive right to use the external walls for advertising purposes.',
                          'The DMC\'s definition of common areas did not include the walls, but did not say they were retained by the developer either.',
                          'The DMC allowed other owners to use the external wall with the consent of the manager, and made the manager responsible for its maintenance and repair.',
                        ],
                      },
                      'The Court of Final Appeal treated the first assignment as merely part of the context in the construction of the DMC.',
                      'Contrast SPM Ltd v Appeal Tribunal (Buildings Ordinance) [2023] HKCA 275: an undivided share was assigned to the external wall and reserved by the developer, and the wall was exclusively owned.',
                    ],
                  },
                  {
                    label: 'Draw the consequences for breach, repair and remedy',
                    detail: 'Once the external wall is a common part, three consequences follow together: affixing anything to it is a breach of the deed of mutual covenant and of s34I of the Building Management Ordinance, the incorporated owners are the proper plaintiff under s16, and the incorporated owners also carry the exposure if the wall injures someone.',
                    why: 'Once the wall is a common part, three things follow at once, and an answer that gives only one of them is incomplete: the sign is a breach, the incorporated owners are the plaintiff, and the incorporated owners also carry the risk if the wall injures someone.',
                    exam: {
                      write: 'The external wall being a common part, the affixing of the sign is a breach of the deed of mutual covenant and of s34I of the Building Management Ordinance, and by s16 of that Ordinance the proper plaintiff is the incorporated owners.',
                      trap: 'Forgetting the exposure that runs the other way. In Leung Tsang Hung v IO of Kwok Wing House [2007] 5 HKC 227, [2007] 4 HKLRD 654, CFA the incorporated owners were liable in public nuisance for a piece of concrete that fell from a balcony attached to the external wall.',
                    },
                    points: [
                      'IO KK Mansion v Jade Water Group Ltd [2010] 3 HKLRD 195, DC: mandatory injunction to remove signs erected on the external wall; breach of both the DMC and s34I of the Building Management Ordinance.',
                      'The common parts being the incorporated owners\' responsibility, the exposure to third parties runs with it.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'Goa Building is about s34H, not about the common parts definition: the question was whether the developer had "full and exclusive rights" such that the repairing duty fell on it.',
                'Kong Wai Hsien and Donora are both examples of external walls held to be common parts; SPM is the counter-example. Have all three, and know which way each went.',
                'The Donora DMC made the manager responsible for maintaining and repairing the external wall, which is a powerful indication against the developer owning it.',
                'A right "to use or allow others to use" a wall is a licensing right, and licensing presupposes that the licensor does not own what he licenses.',
              ],
            },
            skeleton: {
              bullets: [
                'State the s2 and Schedule 1 presumption and check the building\'s date.',
                'Set out the DMC\'s own words and construe them, distinguishing facade, sides and external walls if the drafting does.',
                'Separate the reserved right of use from a reservation of possession.',
                'Ask whether any undivided share was attached to the wall.',
                'Conclude, and state the consequences for breach, the proper plaintiff and repair.',
              ],
            },
            mistakes: {
              bullets: [
                'Treating a reserved advertising right as ownership of the wall.',
                'Accepting the "no use left for anyone else" argument, which Kong Wai Hsien rejected.',
                'Reading "exterior side walls" as covering the front and back of the building.',
                'Citing Donora as a rule rather than as a decision on the factors, of which the absence of attached shares was the most important.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Authority', 'What it establishes'],
                rows: [
                  ['Presumption', 's2 and Schedule 1, Building Management Ordinance (Cap. 344)', 'External walls are common parts unless specifically designated for an owner\'s exclusive use'],
                  ['No delineation in the DMC', 'Snowland Ltd v Topland Holdings Ltd [2006] 4 HKC 188', 'Unauthorised structures on an outside wall were on a common part'],
                  ['Drafting distinctions', 'Sino Channel Holdings Ltd v Vast Faith Investment Ltd [2020] HKCA 311', '"Exterior side walls" meant the laterals only, not the facade'],
                  ['Extensive reserved rights', 'Kong Wai Hsien v IO of Tai Wai Glamour Garden [2019] HKCA 1229', 'Still common parts; walls hold and support the building; "no use left" argument rejected'],
                  ['Primacy of the DMC', 'Donora Co Ltd v IO of Tsuen Kam Centre [2023] HKCA 33, [2024] HKCFA 3', 'First assignment merely context; no undivided shares attached to the walls; manager responsible for their upkeep'],
                  ['Share attached', 'SPM Ltd v Appeal Tribunal (Buildings Ordinance) [2023] HKCA 275', 'External wall exclusively owned where a share was assigned to it and reserved'],
                  ['Repairing duty', 'IO of Goa Building v Wui Tat Co Ltd [2004] 1 HKC 348, CA', 'A right to erect signs and flue pipes is not "full and exclusive rights" under s34H'],
                  ['Remedy', 'IO KK Mansion v Jade Water Group Ltd [2010] 3 HKLRD 195, DC', 'Mandatory injunction to remove signs; breach of the DMC and of s34I'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG2', issue: 'common-parts-definition', label: 'Is it a common part?' },
              { session: 'LG2', issue: 'bmo-overriding-duties', label: 'The BMO\'s overriding duties: sections 34H and 34I' },
              { session: 'LG2', issue: 'io-duties-and-liability', label: 'The owners\' corporation: duties and liabilities' },
              { session: 'LG2', issue: 'undivided-shares-and-good-title', label: 'Undivided shares, tenancy in common and good title' },
            ],
          },
          {
            id: 'internal-walls',
            title: 'Internal, load-bearing and partition walls',
            summary: 'Schedule 1 catches load-bearing walls, but an ordinary partition between two flats belongs to the owners either side.',
            triggers: {
              bullets: [
                'The owner of two adjacent flats has cut a doorway through the wall between them for access.',
                'A partition wall divides two flats and neither assignment says the wall is for the exclusive use of either owner.',
                'The DMC and the other title deeds are silent about the wall now being demolished.',
                'Expert evidence is called to say that the wall in question does not in fact bear any load.',
                'An owner wants to know whether he may demolish a wall wholly inside his own flat.',
                'The incorporated owners say the wall is a common part and the owner replies that a common area inside his own flat is an unattractive idea.',
                'The assignment of the flat says nothing about the wall, and the argument is about what the assignor had power to assign.',
                'The demolition is said to be both a conversion of a common part and a structural alteration.',
                'The wall being altered runs between two flats in the same ownership.',
              ],
              routes: [
                { when: 'The wall is an external one', session: 'LG2', issue: 'external-walls', label: 'External walls, signs and reserved rights' },
                { when: 'The complaint is that the works are structural alterations in breach of the DMC', session: 'LG2', issue: 'structural-alterations', label: 'Structural alterations and external appearance' },
                { when: 'The complaint is that a common part has been taken over', session: 'LG2', issue: 'bmo-overriding-duties', label: 'The BMO\'s overriding duties: sections 34H and 34I' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Classifying an internal wall',
                steps: [
                  {
                    label: 'Ask first whether the wall is load-bearing',
                    detail: 'Internal load-bearing walls are included in the definition of common parts in the Building Management Ordinance. Load-bearing walls form part of Schedule 1, so if the DMC and other title deeds are silent the wall would be a common part: IO Westlands Garden v Oey Chiou Ling [2011] 2 HKC 460, [2011] 2 HKLRD 421, CA.',
                    why: 'A wall that holds the building up serves every owner in it, which is the same reasoning that makes the external walls common. Take it away and everyone above is affected.',
                    exam: {
                      write: 'Internal load-bearing walls fall within Schedule 1 to the Building Management Ordinance, so the wall is a common part unless the deed of mutual covenant or the title deeds provide otherwise.',
                      trap: 'Assuming the label settles it. In Westlands Garden the expert evidence suggested the wall did not bear a load, and it was held to fall outside the Schedule 1 definition; similarly in Tam Sze Man v IO Shan Tsui Court [2011] 5 HKLRD 434.',
                    },
                    points: [
                      'Schedule 1 to the Building Management Ordinance includes internal load-bearing walls.',
                      'Whether a particular wall is load-bearing is a question of fact, usually for expert evidence.',
                      'Expert evidence that the wall bears no load takes it outside Schedule 1: IO Westlands Garden v Oey Chiou Ling [2011] 2 HKC 460, CA; Tam Sze Man v IO Shan Tsui Court [2011] 5 HKLRD 434.',
                    ],
                  },
                  {
                    label: 'If it is not load-bearing, work out who owns it under the assignments',
                    detail: 'In Metro City Management Ltd v Tsui Fee Hung Vincent HCA 4327/2003, 13/1/2005, the partition wall did not form part of the common parts but was owned by the owners of the two flats; the judge observed that "the idea of having a common area within one\'s property is an unattractive one".',
                    why: 'Section 17 of the Conveyancing and Property Ordinance does the work here: an assignment carries everything the assignor had and had power to assign, unless a contrary intention is expressed. The developer had the wall, said nothing about it, and so passed it on.',
                    exam: {
                      write: 'The wall not being load-bearing, and no contrary intention being expressed in the assignment, s17 of the Conveyancing and Property Ordinance operates to pass the assignor\'s interest in it, so that it is owned by the owners of the two flats it divides.',
                      trap: 'Forgetting to cite s17. It is the provision that turns "the assignment is silent" into an answer rather than a gap.',
                    },
                    points: [
                      'Section 17 of the Conveyancing and Property Ordinance: unless a contrary intention is expressed, an assignment operates to assign all the estate, right and interest in the land assigned which the assignor has and has power to assign.',
                      'Per Tang Ag CJHC in CACV 328/2005, 6/6/2006: an internal partition wall does not form part of the common parts and may be demolished by the owner provided it is not load-bearing.',
                    ],
                  },
                  {
                    label: 'Check whether the assignment designated the wall to one owner',
                    detail: 'In Chi Fu Fa Yuen Ltd v Cho Wai Man Raymond [2008] 1 HKC 59 the owner of two adjacent flats constructed a door in the wall between them. Since the assignments of the two units had not stated that the wall was for the exclusive use and enjoyment of the owner, the wall remained part of the common parts; it was also load-bearing.',
                    why: 'This is s2 limb (a) applied to a wall. Without a designation in a registered instrument, the subtraction never happens and the wall stays within the common parts.',
                    exam: {
                      write: 'The assignments of the two units not having stated that the wall was for the exclusive use and enjoyment of the owner, the wall remains part of the common parts.',
                      trap: 'Thinking that owning the flats on both sides of a wall means owning the wall. In Chi Fu Fa Yuen it did not.',
                    },
                    points: [
                      'The designation has to appear in the instrument; common ownership of both flats does not supply it.',
                      'A load-bearing wall inside one\'s own flats can still be a common part.',
                    ],
                  },
                  {
                    label: 'Identify every breach the works give rise to',
                    detail: 'In Chi Fu Fa Yuen the owner was held both to have converted part of the common parts to his own use in breach of s34I of the Building Management Ordinance, and to have made structural alterations in breach of the DMC. A mandatory injunction to reinstate the wall was granted.',
                    why: 'The two breaches have different sources and different plaintiffs, so pleading only one may put the case in the wrong hands. The conversion is statutory and deemed a DMC breach by s34I(2); the structural alteration is an express covenant.',
                    exam: {
                      write: 'The works constitute both a conversion of a common part to the owner\'s own use, contrary to s34I(1)(a) of the Building Management Ordinance and so a deemed breach of the deed of mutual covenant under s34I(2), and a breach of the express covenant against structural alterations.',
                      trap: 'Pleading the express covenant alone and losing the statutory route, or vice versa. Chi Fu Fa Yuen shows a single set of works triggering both.',
                    },
                    points: [
                      'Conversion of a common part: s34I(1)(a), Building Management Ordinance (Cap. 344).',
                      'Deemed breach of the DMC: s34I(2) of that Ordinance.',
                      'Breach of the express covenant against structural alterations in the DMC.',
                      'Demolition of load-bearing walls will amount to structural alterations, and may also be conversion of common parts.',
                      'A mandatory injunction to reinstate the wall may be granted.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'Westlands Garden and Tam Sze Man both went the owner\'s way on the evidence, so do not assume an internal wall is common merely because it is thick.',
                'Metro City is the authority for the s17 route, and is worth having because it explains why a common area inside a private flat is an unattractive result.',
                'Chi Fu Fa Yuen went the other way because the wall was load-bearing and the assignments contained no designation — two independent reasons.',
                'The classification decides who may sue. If the wall is a common part, the incorporated owners are generally the only plaintiff: s16, Building Management Ordinance (Cap. 344).',
              ],
            },
            skeleton: {
              bullets: [
                'Establish whether the wall is load-bearing, on the evidence.',
                'If it is, apply Schedule 1 and check whether the DMC or the title deeds say otherwise.',
                'If it is not, apply s17 of the Conveyancing and Property Ordinance to see what the assignments carried.',
                'Look for a designation of exclusive use in the assignments.',
                'List every breach the works give rise to, statutory and contractual.',
                'Identify the proper plaintiff and the remedy.',
              ],
            },
            mistakes: {
              bullets: [
                'Treating all internal walls as common parts because Schedule 1 mentions load-bearing walls.',
                'Assuming the owner of both flats either side of a wall owns the wall.',
                'Omitting s17 of the Conveyancing and Property Ordinance when the assignment is silent.',
                'Pleading only one of the two breaches a demolition typically gives rise to.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Authority', 'What it establishes'],
                rows: [
                  ['Load-bearing walls', 'Schedule 1, Building Management Ordinance (Cap. 344)', 'Internal load-bearing walls are within the common parts definition'],
                  ['Evidence can displace it', 'IO Westlands Garden v Oey Chiou Ling [2011] 2 HKC 460, [2011] 2 HKLRD 421, CA', 'Expert evidence put the wall outside the Schedule 1 description'],
                  ['Same result', 'Tam Sze Man v IO Shan Tsui Court [2011] 5 HKLRD 434', 'Wall outside Schedule 1 on the evidence'],
                  ['Partition walls', 'Metro City Management Ltd v Tsui Fee Hung Vincent HCA 4327/2003, 13/1/2005; CACV 328/2005, 6/6/2006', 'Partition wall owned by the owners either side; s17 CPO applied; may be demolished if not load-bearing'],
                  ['What an assignment carries', 's17, Conveyancing and Property Ordinance (Cap. 219)', 'Unless a contrary intention is expressed, an assignment passes all the estate, right and interest the assignor has and can assign'],
                  ['Two breaches at once', 'Chi Fu Fa Yuen Ltd v Cho Wai Man Raymond [2008] 1 HKC 59', 'Load-bearing wall with no designation remained a common part; conversion under s34I and structural alteration in breach of the DMC; mandatory injunction to reinstate'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG2', issue: 'common-parts-definition', label: 'Is it a common part?' },
              { session: 'LG2', issue: 'structural-alterations', label: 'Structural alterations and external appearance' },
              { session: 'LG2', issue: 'bmo-overriding-duties', label: 'The BMO\'s overriding duties: sections 34H and 34I' },
            ],
          },
          {
            id: 'bmo-overriding-duties',
            title: 'The BMO\'s overriding duties: sections 34H and 34I',
            summary: 'Two statutory duties that override anything the DMC says: repair what you exclusively occupy, and keep off the common parts.',
            triggers: {
              bullets: [
                'A co-owner has converted part of the lobby into a shop and installed a large vending machine elsewhere in the common parts.',
                'A co-owner has put surveillance cameras up in the common corridor without asking anybody.',
                'The DMC expressly permits the very conduct that the Ordinance prohibits.',
                'The owners\' committee passed a resolution approving one owner\'s conversion of part of the common parts.',
                'The owners\' committee refused consent to a conversion and the owner complains that the refusal was unreasonable.',
                'A meeting of all the owners, rather than the owners\' committee, purported to approve the conversion.',
                'A stranger to the DMC, who owns nothing in the building, has taken over part of the common parts.',
                'The developer reserved a right to erect signs and flue pipes on the external wall and now denies any duty to repair it.',
                'Storage of personal belongings in the common area next to the car park is said to be unlawful.',
              ],
              routes: [
                { when: 'The prior question is whether the part taken over is a common part at all', session: 'LG2', issue: 'common-parts-definition', label: 'Is it a common part?' },
                { when: 'The works are alterations to the fabric rather than a taking of common parts', session: 'LG2', issue: 'structural-alterations', label: 'Structural alterations and external appearance' },
                { when: 'The breach is admitted and the defence is that it was allowed to continue', session: 'LG2', issue: 'acquiescence', label: 'Acquiescence after Centre Chase' },
                { when: 'The question is who may bring the claim', session: 'LG2', issue: 'proper-plaintiff', label: 'Who is the proper plaintiff?' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Applying sections 34H and 34I',
                steps: [
                  {
                    label: 'Note that these duties override the DMC and apply to every building',
                    detail: 'The Building Management Ordinance stipulates two duties which must be observed by owners and which override any express provision in the deed of mutual covenant: s34C(2). Part VIA of the Ordinance, containing ss34C-34L, is universally applicable, so Schedules 7 and, where applicable, 8 are implied into all DMCs.',
                    why: 'Without an override, a developer drafting the DMC for a building it wholly owns could simply write the duties out. Making them statutory and universal is what stops the standard of building management being set by whoever held the pen first.',
                    exam: {
                      write: 'Sections 34H and 34I of the Building Management Ordinance (Cap. 344) impose duties on owners which, by s34C(2), override any express provision of the deed of mutual covenant.',
                      trap: 'Treating these duties as applying only to incorporated buildings. Part VIA applies whether or not the owners have incorporated.',
                    },
                    points: [
                      'Section 34C(2) makes these duties override express provisions of the DMC.',
                      'Part VIA (ss34C-34L) is universally applicable.',
                      'Schedules 7 and 8 are implied into all DMCs — Schedule 7 always, Schedule 8 where applicable.',
                    ],
                  },
                  {
                    label: 'Section 34H: you own it exclusively, so you repair it',
                    detail: 'Section 34H of the Building Management Ordinance provides that an owner who has the exclusive use and occupation of a unit has a duty to maintain that unit in good repair and condition.',
                    why: 'The duty follows exclusivity because nobody else can get at the unit to repair it. That is also why the threshold is "full and exclusive rights" rather than merely extensive ones.',
                    exam: {
                      write: 'By s34H of the Building Management Ordinance, [owner], having the exclusive use and occupation of [the unit / the part], is under a duty to maintain it in good repair and condition.',
                      trap: 'Assuming reserved rights amount to exclusivity. In IO of Goa Building v Wui Tat Co Ltd [2004] 1 HKC 348, CA, a right to erect signs, signboards and flue pipes on the external wall was not "full and exclusive rights", so the developer did not have to repair the wall.',
                    },
                    points: [
                      'The question in Goa Building was whether the developer\'s reserved rights were "full and exclusive rights" under s34H.',
                      'Held: no. The words were not sufficient to find that the developer had retained ownership of the external wall; they were not all the rights associated with the wall.',
                      'So the repairing duty for the wall did not fall on the developer.',
                    ],
                  },
                  {
                    label: 'Section 34I(1)(a): no conversion of common parts without a resolution',
                    detail: 'Section 34I(1)(a) of the Building Management Ordinance provides that no person may convert any part of the common parts of a building to his own use unless such conversion is approved by a resolution of the owners\' committee.',
                    why: 'The consent is collective because the loss is collective: what one owner takes, every other owner loses. That is also why the section does not import a reasonableness standard on refusal — it is not a licensing scheme, it is a veto held by the people being deprived.',
                    exam: {
                      write: 'By s34I(1)(a) of the Building Management Ordinance, no person may convert any part of the common parts to his own use unless the conversion is approved by a resolution of the owners\' committee; no such resolution having been passed, [owner] is in breach.',
                      trap: 'Arguing that consent was unreasonably refused. The section does not impose a requirement of reasonableness on the grant or refusal of consent by resolution: Incorporated Owners of Bonham Crest v Lai Felix Ltd [2019] HKLdT 29.',
                    },
                    points: [
                      'The approval must be by a resolution of the owners\' committee.',
                      'No requirement of reasonableness attaches to the grant or refusal of that consent: Incorporated Owners of Bonham Crest v Lai Felix Ltd [2019] HKLdT 29.',
                      'There will often also be an express DMC covenant prohibiting conversion, which is enforceable alongside the section.',
                    ],
                  },
                  {
                    label: 'Section 34I(1)(b): no unreasonable interference, no nuisance or hazard',
                    detail: 'Section 34I(1)(b)(i) prohibits using or permitting the common parts to be used in such a manner as unreasonably to interfere with their use and enjoyment by any owner or occupier of the building.',
                    why: 'Limb (b) catches what limb (a) misses. Putting a vending machine in a corridor is not taking the corridor for yourself, but it degrades everyone else\'s use of it just the same.',
                    exam: {
                      write: 'The [vending machine / camera / structure] does not convert the common part to [owner]\'s own use but unreasonably interferes with the other co-owners\' use and enjoyment of it, contrary to s34I(1)(b)(i) of the Building Management Ordinance.',
                      trap: 'Thinking a resolution can cure a limb (b) breach. The management committee or owners\' committee cannot pass a resolution to allow unreasonable interference.',
                    },
                    points: [
                      'Gallium Development Ltd v Winning Properties Management Ltd CACV 400/2003, 17/9/2004: a co-owner converted part of the common parts into a shop and installed a large vending machine in other common parts; held a breach of s34I.',
                      'IO Ning Fung Court v Ho Mei Tak LDBM 110/2009, 20/7/2010: surveillance cameras in the common parts.',
                      'A management committee or owners\' committee cannot pass a resolution to allow unreasonable interference.',
                    ],
                  },
                  {
                    label: 'Check who "no person" catches',
                    detail: 'It was held in Yeung Mau Cheung v IO of Ka Ming Court, Castle Peak Road [2013] 4 HKLRD 211 that "no person" in s34I(1) is confined to those who are bound by the DMC.',
                    why: 'Section 34I(2) deems a contravention a breach of the DMC, and a deemed breach of a document that does not bind you is meaningless. The limit on "no person" follows from the remedy the section creates.',
                    exam: {
                      write: '"No person" in s34I(1) is confined to those bound by the deed of mutual covenant: Yeung Mau Cheung v IO of Ka Ming Court, Castle Peak Road [2013] 4 HKLRD 211, so [the defendant] [is / is not] within the section.',
                      trap: 'Using s34I against a complete stranger to the building. Common-area DMC breaches can only be committed between co-owners, residents and others bound by the DMC.',
                    },
                    points: [
                      'Breaches of the common areas provisions can only be committed by those bound by the DMC — co-owners, residents and the like.',
                      'A person outside that class must be sued on some other basis, such as trespass or nuisance.',
                    ],
                  },
                  {
                    label: 'Use s34I(2) to turn the statutory breach into a DMC breach, and choose the remedy',
                    detail: 'By s34I(2) of the Building Management Ordinance, a person who contravenes s34I(1) is deemed to be in breach of an obligation imposed on him by the deed of mutual covenant in respect of the building.',
                    why: 'The deeming provision is what gives the section teeth. It imports the whole DMC enforcement machinery — the proper plaintiff, the injunction, the damages — instead of creating a standalone statutory claim.',
                    exam: {
                      write: 'By s34I(2) of the Building Management Ordinance the contravention is deemed a breach of an obligation imposed by the deed of mutual covenant, so that the [incorporated owners / manager] may sue upon it and seek an injunction.',
                      trap: 'Forgetting the injunction. The applicant may also, of course, obtain an injunction, and in this area that is usually what the client wants.',
                    },
                    points: [
                      'Breach of these implied terms is deemed a breach of the DMC: s34I(2).',
                      'The applicant may obtain an injunction, including a mandatory injunction to reinstate.',
                      'Storage of personal belongings in the common area next to a car park was held unlawful, though not illegal, in 好安樓業主立案法團 v Leung Kam Chung Kenneth [2023] HKLdT 26.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'Section 34I(1)(a) requires a resolution of the owners\' committee specifically. In the Gallium line of reasoning, a meeting of all the owners may in theory have greater authority, but the statutory mechanism has not been employed.',
                'Bonham Crest is the answer to "the refusal was unreasonable": s34I imposes no reasonableness requirement on the grant or refusal of consent.',
                'The distinction between limb (a) conversion and limb (b) interference matters for acquiescence — see Freder Centre and, now, Centre Chase.',
                'The lecture flags the distinction between unlawful and illegal: storing belongings in a common area was unlawful but not illegal.',
              ],
            },
            skeleton: {
              bullets: [
                'State that Part VIA applies to every building and that s34C(2) makes these duties override the DMC.',
                'Identify whether the complaint is about repair (s34H) or the common parts (s34I).',
                'For s34I, decide whether the conduct is conversion under limb (a) or interference or nuisance under limb (b).',
                'Check whether an owners\' committee resolution approved it, and that the approver was the right body.',
                'Check that the defendant is a person bound by the DMC.',
                'Apply s34I(2) and identify the proper plaintiff and the remedy.',
              ],
            },
            mistakes: {
              bullets: [
                'Applying these sections only to incorporated buildings. Part VIA is universally applicable.',
                'Arguing unreasonable refusal of consent under s34I(1)(a).',
                'Assuming an owners\' committee can authorise unreasonable interference under limb (b). It cannot.',
                'Using s34I against someone who is not bound by the DMC.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Provision or case', 'What it establishes'],
                rows: [
                  ['Override', 's34C(2), Building Management Ordinance (Cap. 344)', 'The two duties override any express provision of the DMC'],
                  ['Universal application', 'Part VIA (ss34C-34L), Building Management Ordinance (Cap. 344)', 'Applies whether or not the owners have incorporated; Schedules 7 and 8 implied into all DMCs'],
                  ['Duty to repair', 's34H, Building Management Ordinance (Cap. 344)', 'An owner with exclusive use and occupation must maintain the unit in good repair and condition'],
                  ['What exclusivity means', 'IO of Goa Building v Wui Tat Co Ltd [2004] 1 HKC 348, CA', 'A right to erect signs and flue pipes is not "full and exclusive rights"; developer not liable to repair the external wall'],
                  ['Conversion', 's34I(1)(a), Building Management Ordinance (Cap. 344)', 'No conversion of common parts to one\'s own use without a resolution of the owners\' committee'],
                  ['No reasonableness requirement', 'Incorporated Owners of Bonham Crest v Lai Felix Ltd [2019] HKLdT 29', 'The section imposes no requirement of reasonableness on the grant or refusal of consent by resolution'],
                  ['Unreasonable interference', 's34I(1)(b)(i), Building Management Ordinance (Cap. 344); Gallium Development Ltd v Winning Properties Management Ltd CACV 400/2003, 17/9/2004', 'Shop in the common parts and a vending machine elsewhere in them; breach of s34I'],
                  ['Cameras', 'IO Ning Fung Court v Ho Mei Tak LDBM 110/2009, 20/7/2010', 'Surveillance cameras in the common parts'],
                  ['Who is caught', 'Yeung Mau Cheung v IO of Ka Ming Court, Castle Peak Road [2013] 4 HKLRD 211', '"No person" confined to those bound by the DMC'],
                  ['Deemed DMC breach', 's34I(2), Building Management Ordinance (Cap. 344)', 'Contravention of s34I(1) is deemed a breach of an obligation imposed by the DMC'],
                  ['Unlawful but not illegal', '好安樓業主立案法團 v Leung Kam Chung Kenneth [2023] HKLdT 26', 'Storage of belongings in a common area adjacent to a car park was unlawful but not illegal'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG2', issue: 'common-parts-definition', label: 'Is it a common part?' },
              { session: 'LG2', issue: 'acquiescence', label: 'Acquiescence after Centre Chase' },
              { session: 'LG2', issue: 'proper-plaintiff', label: 'Who is the proper plaintiff?' },
            ],
          },
          {
            id: 'structural-alterations',
            title: 'Structural alterations and external appearance',
            summary: 'An express covenant in every DMC, construed more liberally than the Buildings Ordinance — and one set of works often breaches two covenants.',
            triggers: {
              bullets: [
                'An owner has constructed a new window in the outside wall of his flat.',
                'An owner demolished part of the outside wall so that the unit could be used as a garage, and produced an architect\'s certificate saying the structure was unaffected.',
                'Air conditioners have been installed in the outside wall of a flat.',
                'An owner has enlarged the window in the outside wall of his flat.',
                'An owner has affixed his trade name to the outside wall of the building.',
                'Concrete plinths and gondolas have been installed on the roof of the building.',
                'A door has been cut through a load-bearing wall between two flats in the same ownership.',
                'The works are said to be structural under the DMC although they would not be under the Buildings Ordinance.',
                'The alterations are visible from the street and the DMC forbids altering the external appearance of the building.',
              ],
              routes: [
                { when: 'The works take a common part for the owner\'s own use', session: 'LG2', issue: 'bmo-overriding-duties', label: 'The BMO\'s overriding duties: sections 34H and 34I' },
                { when: 'The wall in question is an internal one and the argument is whether it is load-bearing', session: 'LG2', issue: 'internal-walls', label: 'Internal, load-bearing and partition walls' },
                { when: 'The works were done by a previous owner', session: 'LG2', issue: 'predecessor-breaches', label: 'Liability for a predecessor in title\'s breach' },
                { when: 'The incorporated owners knew of the works and did nothing for years', session: 'LG2', issue: 'acquiescence', label: 'Acquiescence after Centre Chase' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Testing works against the structural alterations covenant',
                steps: [
                  {
                    label: 'Find the express covenant and read it as a DMC covenant, not a statutory one',
                    detail: 'A covenant against structural alterations is an express covenant in all DMCs. The meaning of "structural alterations" in the context of a prohibition in a DMC may be construed more liberally than when used in the Buildings Ordinance.',
                    why: 'The two regimes are asking different questions. The Buildings Ordinance is a criminal statute concerned with safety; the DMC is a bargain between co-owners who also care what the building looks like and what their neighbours do to it.',
                    exam: {
                      write: 'The covenant against structural alterations in clause [x] of the deed of mutual covenant falls to be construed more liberally than the same phrase in the Buildings Ordinance.',
                      trap: 'Answering a DMC question with Buildings Ordinance cases alone. The criminal and civil regimes are distinct, though the Buildings Ordinance cases may still help.',
                    },
                    points: [
                      'The criminal regime is the Buildings Ordinance; the civil regime is the DMC.',
                      'There is commonly also an express covenant not to alter the external appearance of the building or to affix any trade name or advertisement to the external wall, and the two overlap.',
                    ],
                  },
                  {
                    label: 'Apply the cases: "structural" is read widely',
                    detail: 'In Incorporated Owners of Elite Garden v Profit More Company Ltd [2002] 2 HKLRD 518 the construction of a window in an outside wall was a structural alteration, "structural" including visual aspects.',
                    why: 'Reading "structural" to include appearance makes sense of the covenant\'s place in a mutual document: the other owners\' interest in the wall is precisely that they have to look at it and live behind it.',
                    exam: {
                      write: 'The [construction of a window / demolition of the wall / installation of the air conditioner] is a structural alteration within the meaning of the covenant, "structural" being construed to include visual aspects: Incorporated Owners of Elite Garden v Profit More Company Ltd [2002] 2 HKLRD 518.',
                      trap: 'Accepting an architect\'s certificate as an answer. In Incorporated Owners of Tuen Mun Hun Cheung Industrial Centre v United Hong Kong Ltd HCMP 2991/1998, 22/11/1999, demolition of an outside wall was a structural alteration despite a certificate that the structure was unaffected — "structural" was to be interpreted literally.',
                    },
                    points: [
                      'Elite Garden: a window constructed in an outside wall; "structural" includes visual aspects.',
                      'Tuen Mun Hun Cheung Industrial Centre: demolition of an outside wall to permit use as a garage; structural despite an architect\'s certificate.',
                      'Incorporated Owners of Jing Hui Garden v Ng Kei Sang LDBM 155/2005, 14/5/2007: installation of air conditioners in an outside wall was a breach.',
                      'Incorporated Owners of Shan Kwong Towers Phase II v Li Suet Ching [2007] 4 HKLRD 567: enlargement of a window in an outside wall was a breach.',
                    ],
                  },
                  {
                    label: 'Use the Buildings Ordinance cases for what they are worth',
                    detail: 'It may still be helpful to consider Buildings Ordinance breaches, as in Mariner International Hotels Ltd v Atlas Ltd (2007) 10 HKCFAR 1.',
                    why: 'Mariner is useful because it reasons about what makes something structural rather than merely listing examples, and that reasoning transfers even though the regime does not.',
                    exam: {
                      write: 'Although decided under the Buildings Ordinance, Mariner International Hotels Ltd v Atlas Ltd (2007) 10 HKCFAR 1 is of assistance on whether works involve the structure of the building.',
                      trap: 'Presenting Mariner as deciding the DMC question. It does not; it informs it.',
                    },
                    points: [
                      'Works involve the structure if they serve a structural function or are capable of affecting integrity.',
                      'A purposive approach was taken to "in" the building: items on the roof, not exposed to the elements if inside.',
                      'Concrete plinths and gondolas were not within the exemption.',
                    ],
                  },
                  {
                    label: 'Ask whether the works are also a conversion of common parts',
                    detail: 'Demolition of load-bearing walls will amount to structural alterations, but may also be a conversion of common parts: Chi Fu Fa Yuen Ltd v Cho Wai Man Raymond [2008] 1 HKC 59.',
                    why: 'Two breaches are better than one, and they have different escape routes: the conversion can in principle be approved by resolution under s34I(1)(a), the express covenant cannot unless the DMC says so.',
                    exam: {
                      write: 'The works breach both the express covenant against structural alterations and s34I(1)(a) of the Building Management Ordinance, the wall being a common part.',
                      trap: 'Forgetting the overlap with the covenant not to alter the external appearance. A sign on an external wall may breach that covenant, the structural alterations covenant, and s34I all at once.',
                    },
                    points: [
                      'Conversion of common parts: s34I(1)(a), Building Management Ordinance (Cap. 344), deemed a DMC breach by s34I(2).',
                      'Some overlap with the express covenant not to alter the external appearance of the building.',
                      'IO of Freder Centre v Gringo Ltd [2016] 4 HKC 346, [2016] 2 HKLRD 190, CA: a trade name affixed to an outside wall, a common part, in breach of the DMC.',
                    ],
                  },
                  {
                    label: 'Identify the plaintiff and the remedy, and check for a defence',
                    detail: 'The remedy sought in these cases is almost always a mandatory injunction to reinstate, which is drastic. Who may seek it depends on whether the building is incorporated, and whether it will be granted depends on the discretionary defences.',
                    why: 'The remedy in these cases is almost always a mandatory injunction to reinstate, which is drastic. That is why the defences — acquiescence, delay, the gravity of the breach — do so much work here and so little elsewhere.',
                    exam: {
                      write: 'The building being incorporated, the proper plaintiff is the incorporated owners, who seek a mandatory injunction requiring reinstatement of [the wall / the window].',
                      trap: 'Overlooking acquiescence. In Freder Centre the incorporated owners were held to have acquiesced in the breach.',
                    },
                    points: [
                      'For an incorporated building the proper plaintiff is the incorporated owners; for an unincorporated one, the manager.',
                      'The usual remedy is a mandatory injunction to reinstate.',
                      'Consider acquiescence, and the gravity of the breach, as defences.',
                      'Consider whether the present owner inherited the works from a predecessor in title.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'An architect\'s certificate that the structure is unaffected does not answer a DMC covenant: Tuen Mun Hun Cheung Industrial Centre.',
                'The Elite Garden reading of "structural" as including visual aspects and the Tuen Mun reading of it "literally" pull in slightly different directions — both produce a wide covenant, but say which you are relying on.',
                'Works to an external wall raise the common parts question as well, because the external walls are within Schedule 1 to the Building Management Ordinance.',
                'Mariner is a Buildings Ordinance case at Court of Final Appeal level and is persuasive here rather than binding on the DMC point.',
              ],
            },
            skeleton: {
              bullets: [
                'Set out the express covenant relied on and the works complained of.',
                'Construe "structural alterations" in its DMC context, more liberally than under the Buildings Ordinance.',
                'Apply the closest decided case on the type of works.',
                'Check the overlap with the external appearance covenant and with s34I.',
                'Identify the plaintiff and the remedy sought.',
                'Consider acquiescence and any predecessor-in-title point.',
              ],
            },
            mistakes: {
              bullets: [
                'Treating the Buildings Ordinance meaning of "structural" as decisive of the DMC covenant.',
                'Accepting an expert certificate as conclusive.',
                'Pleading the structural alterations covenant alone when the works also take a common part.',
                'Assuming a mandatory injunction follows automatically. The defences matter, and Freder Centre shows one succeeding.',
              ],
            },
            authorities: {
              table: {
                headers: ['Works', 'Authority', 'Outcome'],
                rows: [
                  ['New window in an outside wall', 'Incorporated Owners of Elite Garden v Profit More Company Ltd [2002] 2 HKLRD 518', 'Structural alteration; "structural" includes visual aspects'],
                  ['Demolition of outside wall for a garage', 'Incorporated Owners of Tuen Mun Hun Cheung Industrial Centre v United Hong Kong Ltd HCMP 2991/1998, 22/11/1999', 'Structural despite an architect\'s certificate; "structural" interpreted literally'],
                  ['Air conditioners in an outside wall', 'Incorporated Owners of Jing Hui Garden v Ng Kei Sang LDBM 155/2005, 14/5/2007', 'Breach'],
                  ['Enlargement of a window', 'Incorporated Owners of Shan Kwong Towers Phase II v Li Suet Ching [2007] 4 HKLRD 567', 'Breach'],
                  ['Buildings Ordinance guidance', 'Mariner International Hotels Ltd v Atlas Ltd (2007) 10 HKCFAR 1', 'Structural if serving a structural function or capable of affecting integrity; purposive reading of "in" the building; plinths and gondolas not exempt'],
                  ['Load-bearing wall', 'Chi Fu Fa Yuen Ltd v Cho Wai Man Raymond [2008] 1 HKC 59', 'Structural alteration and conversion of common parts; mandatory injunction to reinstate'],
                  ['Trade name on an outside wall', 'IO of Freder Centre v Gringo Ltd [2016] 4 HKC 346, [2016] 2 HKLRD 190, CA', 'Breach of the DMC, but the incorporated owners had acquiesced'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG2', issue: 'bmo-overriding-duties', label: 'The BMO\'s overriding duties: sections 34H and 34I' },
              { session: 'LG2', issue: 'acquiescence', label: 'Acquiescence after Centre Chase' },
              { session: 'LG2', issue: 'predecessor-breaches', label: 'Liability for a predecessor in title\'s breach' },
              { session: 'LG2', issue: 'common-parts-definition', label: 'Is it a common part?' },
            ],
          },
          {
            id: 'nuisance-and-annoyance',
            title: 'Nuisance, annoyance, and entry to abate',
            summary: 'Annoyance is easier to prove than nuisance, so read the covenant\'s exact words — and know how to get into the offending flat.',
            triggers: {
              bullets: [
                'A co-owner has erected antennae on the roof and other owners fear the radiation is harming their health.',
                'The DMC forbids any act which may be or become "a nuisance or annoyance or cause damage" to the other owners.',
                'The DMC forbids only the commission of "a nuisance" and says nothing about annoyance.',
                'Water is seeping from one unit in a multi-storey building into the co-owner\'s unit below.',
                'An air-conditioning condenser has been erected which blocks the view to the display window of the shop next door.',
                'Residents complain of loud and disturbing noise from a neighbouring unit but no expert evidence is available.',
                'An owner refuses to let the incorporated owners\' workmen into his flat to replace a defective air grille in the external wall.',
                'A pipe inside one owner\'s flat is affecting the common parts and the management committee wants to inspect it.',
                'No scientific proof of a health hazard is available and the respondent applies for further and better particulars.',
              ],
              routes: [
                { when: 'The complaint is about the common parts being taken or obstructed', session: 'LG2', issue: 'bmo-overriding-duties', label: 'The BMO\'s overriding duties: sections 34H and 34I' },
                { when: 'The complaint is about alterations to the fabric or appearance of the building', session: 'LG2', issue: 'structural-alterations', label: 'Structural alterations and external appearance' },
                { when: 'The question is who may bring the claim', session: 'LG2', issue: 'proper-plaintiff', label: 'Who is the proper plaintiff?' },
                { when: 'The remedy is in issue rather than the breach', session: 'LG2', issue: 'remedies-and-charge', label: 'Remedies: injunction, damages and the charge' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Running a nuisance or annoyance complaint',
                steps: [
                  {
                    label: 'Read the covenant\'s exact words before anything else',
                    detail: 'Annoyance is easier to establish than nuisance, so a covenant that forbids only a nuisance is much narrower than one that forbids a nuisance or annoyance.',
                    why: 'This is a covenant, not a tort, so the words are the whole of the obligation. The pair of antennae cases turns entirely on which words the two DMCs used.',
                    exam: {
                      write: 'Clause [x] of the deed of mutual covenant prohibits [any act which may be or become a nuisance or annoyance to / anything which should become a nuisance to] the other co-owners, and the question is whether the [conduct] falls within those words.',
                      trap: 'Arguing nuisance when the covenant gives you annoyance, which is easier. Plead the wider limb if the covenant provides one.',
                    },
                    points: [
                      'Annoyance is easier to prove than nuisance.',
                      'Set out the covenant verbatim and identify which limb is engaged.',
                    ],
                  },
                  {
                    label: 'Compare the two antennae cases, which turn on exactly that',
                    detail: 'Incorporated Owners of Fanling Centre v Wong Yu Ting Terence HCMP 1979/2014, 11/11/2014, CA, and Incorporated Owners of Kadoorie Avenue Mansion v Rising Dragon International Ltd LDBM 201/2013, 22/12/2014, both concerned antennae, and went opposite ways.',
                    why: 'In Fanling Centre the covenant caught anything which may "be or become a nuisance or annoyance", and peace of mind was enough. In Kadoorie the covenant required a nuisance, and anxiety without scientific proof was not one. The facts were close; the drafting was not.',
                    exam: {
                      write: 'The covenant here being in the [Fanling Centre / Kadoorie] form, the [anxiety and loss of peace of mind suffered by the co-owners suffices / claimant must establish a nuisance, for which the evidence of anxiety alone is insufficient].',
                      trap: 'Citing Fanling Centre for the proposition that fear of radiation is actionable. It was actionable there because the covenant covered annoyance.',
                    },
                    points: [
                      {
                        text: 'Fanling Centre: the DMC provided that no owner do cause or permit or suffer to be done any act or thing which may be or become a nuisance or annoyance or cause damage to the other owners or occupiers.',
                        points: [
                          'A co-owner had erected antennae on the roof; the daughter of another co-owner had suffered a brain tumour.',
                          'No expert evidence was adduced to prove causation between the antennae and the tumour.',
                          'The incorporated owners nevertheless obtained mandatory orders for removal, the peace of mind of the co-owners having been adversely affected, which sufficed as a breach of the "no nuisance or annoyance" provision.',
                        ],
                      },
                      {
                        text: 'Kadoorie Avenue Mansion: the covenant was "not to commit or suffer to be committed on the premises anything which should become a nuisance to the other co-owners".',
                        points: [
                          'Antennae and radio base stations on the roof; the incorporated owners contended the co-owners suffered anxiety through a belief in harmful radiation.',
                          'There was no scientific proof of the alleged health hazards.',
                          'Fanling Centre at first instance was readily distinguishable, the antennae there having caused an annoyance; this covenant required a nuisance. The respondent\'s application was granted and the claim rejected.',
                        ],
                      },
                    ],
                  },
                  {
                    label: 'Match the conduct to the decided examples',
                    detail: 'Creating loud and disturbing noise might constitute a nuisance; so might leaking pipes and obstructions.',
                    why: 'This is a covenant applied to everyday building life, so the value of the cases is in the range they cover rather than in any principle: noise, water, and an obstruction that hurts a neighbour\'s trade.',
                    exam: {
                      write: 'The [seepage / obstruction / noise] is of the kind held in [case] to constitute a breach of the covenant against nuisance or annoyance.',
                      trap: 'Assuming noise is always a nuisance. In Tam Wai Cheung Roger v Goodwell Property Management Ltd DCCJ 2262/2013, 11/1/2016, no nuisance was found on the evidence.',
                    },
                    points: [
                      'Noise: Tam Wai Cheung Roger v Goodwell Property Management Ltd DCCJ 2262/2013, 11/1/2016 — no nuisance found on the evidence.',
                      'Obstruction of a shop display: Felan Investment Ltd v Sarwin Industries Ltd LDBM 7/2015 — an air-conditioning condenser blocking the view to a display window was a breach.',
                      'Water seepage: Putai Ltd v Yau Lee Ho DCCJ 2666/2013 — allowing water to seep into a co-owner\'s unit was a breach.',
                    ],
                  },
                  {
                    label: 'Get into the flat: the DMC power and s40 of the Building Management Ordinance',
                    detail: 'The DMC may contain powers for co-owners to enter individual flats to inspect and repair damage caused to their own flats. In addition, s40(1) of the Building Management Ordinance gives a member of a management committee, and any other person authorised by the committee, a power of entry.',
                    why: 'A nuisance coming from inside someone else\'s flat is useless to complain about if you cannot get at it. Section 40 is the practical half of the duty in s34H.',
                    exam: {
                      write: 'By s40(1) of the Building Management Ordinance a member of the management committee, or a person authorised by it, may on reasonable notice enter the flat at a reasonable time to [inspect and repair the common parts there / abate the hazard or nuisance affecting the common parts or other owners].',
                      trap: 'Forgetting the notice and timing conditions: the entry must be on reasonable notice to the owner or occupier and at a reasonable time.',
                    },
                    points: [
                      {
                        text: 'Section 40(1) permits entry, on reasonable notice to the owner or occupier and at a reasonable time, for two purposes.',
                        points: [
                          'Paragraph (a) — inspecting, repairing, maintaining or renewing (i) any common parts in the flat, or (ii) any other property in the flat the condition of which does or may affect adversely the common parts or other owners.',
                          'Paragraph (b) — abating any hazard or nuisance which does or may adversely affect the common parts or other owners.',
                        ],
                      },
                      'Section 40(2): the management committee can apply to a magistrate for a warrant to break into the offending flat.',
                      'Section 40(3): the incorporated owners may recover the costs and expenses so incurred.',
                      'Incorporated Owners of Grenville House v Wong Tak Keung Stanley [2012] 1 HKLRD 315: an owner refused entry to replace a defective air grille; a warrant was granted under s40(2) and the court ordered him to pay the costs and expenses under s40(3).',
                    ],
                  },
                  {
                    label: 'Check where the nuisance is, and who may sue',
                    detail: 'Whether the nuisance affects the common parts or the complainant\'s own flat matters, and s40(1) of the Building Management Ordinance is framed by reference to that distinction.',
                    why: 'The location decides the plaintiff. A nuisance affecting the common parts is the incorporated owners\' business under s16; a nuisance affecting one owner\'s flat and nobody else\'s is his own.',
                    exam: {
                      write: 'The nuisance affecting [the common parts / the plaintiff\'s own flat alone], the proper plaintiff is [the incorporated owners under s16 of the Building Management Ordinance / the affected co-owner].',
                      trap: 'Sending an individual co-owner to court over a common parts nuisance when the building is incorporated.',
                    },
                    points: [
                      'A nuisance affecting the common parts engages the incorporated owners\' exclusive jurisdiction: s16, Building Management Ordinance (Cap. 344).',
                      'An individual co-owner who suffers specific damage may sue: IO of One Beacon Hill v Match Power Investment Ltd [2012] 6 HKC 200, CA.',
                      'The incorporated owners may also distrain for rent owing: s24 of that Ordinance.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'Fanling Centre is reported as a Court of Appeal decision; the Kadoorie judge distinguished the Fanling Centre ruling at first instance. Be precise about which you are citing.',
                'Peace of mind was enough for annoyance in Fanling Centre even without proof of causation — a striking point worth stating explicitly.',
                'Section 40 entry requires reasonable notice and a reasonable time. A forced entry without a s40(2) warrant is itself unlawful.',
                'The costs of a s40 entry are recoverable under s40(3), which is often the practical point for a management committee client.',
              ],
            },
            skeleton: {
              bullets: [
                'Set out the covenant and identify whether it covers annoyance as well as nuisance.',
                'Characterise the conduct and match it to the closest decided case.',
                'Deal with the evidence, including the absence of expert proof if that is the position.',
                'If entry is needed, set out the s40(1) power and its conditions, and the s40(2) warrant.',
                'Identify the proper plaintiff by reference to where the nuisance bites.',
                'State the remedy sought.',
              ],
            },
            mistakes: {
              bullets: [
                'Treating nuisance and annoyance as interchangeable. They are not, and the covenant may give you only one.',
                'Assuming proof of causation is required where the covenant catches annoyance.',
                'Advising a client to force entry without the s40(2) warrant.',
                'Overlooking that an individual co-owner with specific damage can sue even where the common parts are affected.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Authority', 'What it establishes'],
                rows: [
                  ['Annoyance covenant', 'Incorporated Owners of Fanling Centre v Wong Yu Ting Terence HCMP 1979/2014, 11/11/2014, CA', 'Antennae on the roof; peace of mind adversely affected sufficed, without proof of causation; mandatory orders for removal'],
                  ['Nuisance-only covenant', 'Incorporated Owners of Kadoorie Avenue Mansion v Rising Dragon International Ltd LDBM 201/2013, 22/12/2014', 'Anxiety without scientific proof insufficient where the covenant required a nuisance; Fanling Centre distinguished'],
                  ['Noise', 'Tam Wai Cheung Roger v Goodwell Property Management Ltd DCCJ 2262/2013, 11/1/2016', 'No nuisance found on the evidence'],
                  ['Obstruction', 'Felan Investment Ltd v Sarwin Industries Ltd LDBM 7/2015', 'Air-conditioning condenser blocking a shop display window was a breach'],
                  ['Water seepage', 'Putai Ltd v Yau Lee Ho DCCJ 2666/2013', 'Seepage into a co-owner\'s unit was a breach of the covenant'],
                  ['Power of entry', 's40(1), Building Management Ordinance (Cap. 344)', 'Entry on reasonable notice at a reasonable time to inspect or repair, or to abate a hazard or nuisance affecting the common parts or other owners'],
                  ['Warrant and costs', 'ss40(2) and 40(3), Building Management Ordinance (Cap. 344)', 'Warrant from a magistrate to break in; costs and expenses recoverable'],
                  ['Warrant in practice', 'Incorporated Owners of Grenville House v Wong Tak Keung Stanley [2012] 1 HKLRD 315', 'Warrant reasonably applied for; owner ordered to pay the incorporated owners\' costs under s40(3)'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG2', issue: 'bmo-overriding-duties', label: 'The BMO\'s overriding duties: sections 34H and 34I' },
              { session: 'LG2', issue: 'proper-plaintiff', label: 'Who is the proper plaintiff?' },
              { session: 'LG2', issue: 'remedies-and-charge', label: 'Remedies: injunction, damages and the charge' },
              { session: 'LG2', issue: 'common-parts-definition', label: 'Is it a common part?' },
            ],
          },
          {
            id: 'adverse-possession',
            title: 'Adverse possession in a multi-storey building',
            summary: 'A co-owner is entitled to use the whole lot, so nothing short of ousting everyone will do — and whether the common parts can be possessed at all is still open.',
            triggers: {
              bullets: [
                'One co-owner has used part of the building exclusively for twenty-five years and now claims a possessory title.',
                'A co-owner has collected and kept all the rent from the land since 1978 without accounting to the other co-owners.',
                'The claimant expressly disavows any intention to eject the other co-owners from the land.',
                'One of the paper title owners occasionally entered the land and parked his car there without paying.',
                'The wall of one shop encroaches on part of the neighbouring shop and has done so for the limitation period.',
                'The area claimed was separated from the neighbour\'s shop by a concrete wall and has formed part of the claimant\'s shop.',
                'The defendants asserted no title over the area until after the action was commenced.',
                'The incorporated owners have built a management office on part of the roof and claim it by possession.',
                'The area said to be adversely possessed is a common part of the building rather than anyone\'s unit.',
              ],
              routes: [
                { when: 'The question is whether the disputed part is a common part in the first place', session: 'LG2', issue: 'common-parts-definition', label: 'Is it a common part?' },
                { when: 'The claim is that a squatter is bound by the covenants in the DMC', session: 'LG2', issue: 'enforceability-s41', label: 'Does the covenant run? Section 41 of the Conveyancing and Property Ordinance' },
                { when: 'The claimant is asserting an exclusive right under the DMC rather than by possession', session: 'LG2', issue: 'undivided-shares-and-good-title', label: 'Undivided shares, tenancy in common and good title' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Testing an adverse possession claim between co-owners',
                steps: [
                  {
                    label: 'Start from the co-owner\'s own entitlement',
                    detail: 'Since a co-owner as tenant in common is entitled to use the whole of the land and buildings, he may not successfully claim a possessory title by long exclusive usage of any part of it. Any such usage is attributable to ownership and is not adverse to the other owners, because they and the claimant have consented to the claimant\'s use: IO of Kwan Sen Mansion v So Kwai Chor HCMP 134/1994, 6/6/2002.',
                    why: 'Adverse possession works by contradiction: the possession has to be inconsistent with the paper owner\'s title. A tenant in common already has a right to use the whole, so his use contradicts nothing.',
                    exam: {
                      write: '[Claimant] is a tenant in common entitled to use the whole of the lot, so his exclusive use of [the area] is attributable to his ownership and is not adverse to the other co-owners: IO of Kwan Sen Mansion v So Kwai Chor HCMP 134/1994, 6/6/2002.',
                      trap: 'Starting with factual possession and animus possidendi. Between co-owners the prior question is whether the possession can be adverse at all.',
                    },
                    points: [
                      'The claimant\'s use is attributable to his own ownership.',
                      'The other co-owners are taken to have consented to it.',
                    ],
                  },
                  {
                    label: 'Require an actual ouster of all the other co-owners',
                    detail: 'To assert adverse possession successfully, a co-owner has to oust all other co-owners entirely from possession of the whole of the land: Tang Tak Sum v Tang Kai Fong [2015] 1 HKLRD 286, CA. It will therefore be rare for adverse possession to succeed in respect of part of a large building with many owners.',
                    why: 'The Court of Appeal in Tang Tak Sum disapproved the idea of a presumed ouster that is not about physical eviction. If consent is the obstacle, only something that plainly revokes the consent can get past it.',
                    exam: {
                      write: 'Following Tang Tak Sum v Tang Kai Fong [2015] 1 HKLRD 286, CA, [claimant] must prove an actual ouster of all the other co-owners from the whole of the land, which on these facts he cannot do.',
                      trap: 'Relying on the collection of all the rent. In Tang Tak Sum that was held not to be enough, and the claimant had in any event disavowed any intention to eject the plaintiffs.',
                    },
                    points: [
                      'It is necessary to prove actual ouster or dispossession where a co-owner claims against another co-owner.',
                      'Collecting and keeping all the rent without accounting is not by itself an ouster.',
                      'A presumed actual ouster is concerned with physical eviction, contrary to the judge\'s view below in Tang Tak Sum.',
                    ],
                  },
                  {
                    label: 'Weigh the paper title owner\'s acts, which count for very little',
                    detail: 'In respect of possession by the paper title owner, the slightest acts done by him will be found to negative discontinuance of possession, because an owner who has the right to possession of land will be readily assumed to have the requisite intention to possess unless the contrary is clearly proved.',
                    why: 'The asymmetry is deliberate. The law is reluctant to take land away from its owner, so the evidential burden sits almost entirely on the claimant.',
                    exam: {
                      write: '[Paper owner]\'s [visits to the land / parking of his car there without payment] are slight acts, but the slightest acts by the paper title owner negative discontinuance of possession.',
                      trap: 'Dismissing occasional visits as de minimis. In Tang Tak Sum the plaintiff\'s visits and parking were the important evidence.',
                    },
                    points: [
                      'The owner is readily assumed to have the requisite intention to possess unless the contrary is clearly proved.',
                      'The principle is drawn from Powell at p.472, as applied in Tang Tak Sum.',
                    ],
                  },
                  {
                    label: 'Note the cases where a co-owner has succeeded against another co-owner\'s unit',
                    detail: 'In principle the doctrine applies to occupation by one co-owner of part of another co-owner\'s unit, and there have been instances of courts allowing it.',
                    why: 'The exclusive-use area of another owner is not land the claimant has any right to use, so the consent reasoning does not apply to it. That is the distinction that lets Foremost Hill sit alongside Kwan Sen Mansion.',
                    exam: {
                      write: 'The area claimed forms part of [another co-owner]\'s exclusive use area rather than the common parts, so the objection that the claimant was entitled to use it as a co-owner does not arise: Foremost Hill Ltd v Bank of China (HK) Ltd HCA 2555/2013, 5/4/2017.',
                      trap: 'Requiring the claimant to show that the incorporated owners were ousted too. In Foremost Hill the area had never formed part of the common parts and neither the DMC nor the general law gave the incorporated owners any title to it.',
                    },
                    points: [
                      'Foremost Hill Ltd v Bank of China (HK) Ltd HCA 2555/2013, 5/4/2017: the wall of the plaintiff\'s shop encroached on part of the defendant\'s shop.',
                      'The subject area had never formed part of the common parts, so no question of ousting the incorporated owners arose.',
                      'Part of a unit can be adversely possessed provided the part is sufficiently well defined and the act of ouster is adequately demonstrated.',
                      'See also Wong Chow Yun DCMP 1752/2015, 1/3/2017.',
                    ],
                  },
                  {
                    label: 'Deal carefully with the common parts, where the point is still open',
                    detail: 'Whether a co-owner can adversely possess the common parts is unsettled. Some practitioners relied on IO of Man Hong Apartments v Kwong Yu Ching [2001] 3 HKC 116 for the proposition that co-owners cannot dispossess fellow co-owners because they are bound by the DMC and the BMO, but the Court of Appeal there did not rule out co-owners establishing adverse possession in the common areas.',
                    why: 'The materials are explicit that it remains technically open at Court of Appeal and Court of Final Appeal level, and they set two sources against each other. Presenting it as settled either way is the error.',
                    exam: {
                      write: 'Whether the common parts can be adversely possessed remains open at appellate level; the Law Reform Commission Report on Adverse Possession at paragraph 6.10 and the Court of Appeal\'s reasoning point in different directions.',
                      trap: 'Citing IO of Kam Luk Building v Poon Mui Sang [2018] HKDC 1493 as settling the point. It is a District Court decision in which HH Andrew Li accepted the position as binding on him, following Wong King Lim v The Incorporated Owners of Peony House [2013] 4 HKC 295, CA.',
                    },
                    points: [
                      'LRC Report on Adverse Possession, paragraph 6.10, citing IO of Chungking Mansions v Shamdasani [1991] 2 HKC 342, points one way; the practitioner literature at 7.85 the other.',
                      'IO of Kam Luk Building v Poon Mui Sang [2018] HKDC 1493: HH Andrew Li accepted, as bound by the Court of Appeal, that adverse possession of the common parts is possible.',
                      'Wong King Lim v The Incorporated Owners of Peony House [2013] 4 HKC 295, CA, per Yuen JA at paragraphs 14 to 15.2: the law did not adopt a position that so long as the subject property had been designated a common part there could be no adverse possession at all, whether by a co-owner or a stranger to the DMC.',
                      'It is open to the incorporated owners themselves to assert adverse possession: IO of San Po Kong Mansion v Shine Empire Ltd (2007) 10 HKCFAR 588, though on the facts it was not established.',
                    ],
                  },
                  {
                    label: 'Remember that a squatter is still bound by the restrictive covenants',
                    detail: 'Where a squatter has occupied part of a multi-storey building, he will still be bound by the restrictive, but not the positive, covenants in the DMC: Incorporated Owners of Man Hong Apartments v Kwong Yuk Ching [2001] 3 HKC 116, CA.',
                    why: 'A possessory title is still a title to land within the scheme, so the negative obligations that regulate how the land is used bind whoever holds it. Positive covenants do not, because s41(5) of the Conveyancing and Property Ordinance keeps them off occupiers.',
                    exam: {
                      write: 'Even if the claim to a possessory title succeeds, [claimant] remains bound by the restrictive covenants in the deed of mutual covenant, though not by the positive ones.',
                      trap: 'Thinking a successful squatter escapes the DMC. He escapes the positive covenants only.',
                    },
                    points: [
                      'Restrictive covenants bind the squatter; positive covenants do not.',
                      'See also Incorporated Owners of Mountain View Mansion v Heart Cuisine CACV 235/2011.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The lecture flags that it is technically still open at Court of Appeal and Court of Final Appeal level whether adverse possession applies to the common areas, or even to exclusively owned units in multi-storey buildings. Say so rather than choosing a side.',
                'Man Hong Apartments appears twice in this topic on different points — as the case relied on for the no-dispossession proposition, and as authority that a squatter is bound by the restrictive covenants.',
                'Foremost Hill turned on the subject area never having been a common part. Check that before importing its reasoning.',
                'Tang Tak Sum is a Court of Appeal decision correcting a first-instance approach; the correction, not the outcome, is what you cite.',
              ],
            },
            skeleton: {
              bullets: [
                'Identify whether the area claimed is a common part, another co-owner\'s exclusive use area, or the claimant\'s own.',
                'State the co-ownership objection: use attributable to ownership, consented to by the others.',
                'Apply the ouster requirement in Tang Tak Sum and test the evidence against it.',
                'Weigh the paper owner\'s acts, remembering that the slightest suffice.',
                'If the area is the common parts, present the point as open and give both sides.',
                'Deal with what the squatter remains bound by if he succeeds.',
              ],
            },
            mistakes: {
              bullets: [
                'Running a standard limitation analysis without addressing the co-ownership objection first.',
                'Treating the receipt of all the rent as an ouster.',
                'Stating as settled that a co-owner can, or cannot, possess the common parts.',
                'Assuming a squatter who succeeds takes free of the DMC.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Authority', 'What it establishes'],
                rows: [
                  ['Use attributable to ownership', 'IO of Kwan Sen Mansion v So Kwai Chor HCMP 134/1994, 6/6/2002', 'A co-owner entitled to use the whole cannot gain a possessory title by long exclusive use'],
                  ['Ouster required', 'Tang Tak Sum v Tang Kai Fong [2015] 1 HKLRD 286, CA', 'Actual ouster of all co-owners from the whole; the slightest acts of the paper owner negative discontinuance'],
                  ['Part of another\'s unit', 'Foremost Hill Ltd v Bank of China (HK) Ltd HCA 2555/2013, 5/4/2017', 'Encroaching wall; part of a unit may be possessed if well defined and ouster demonstrated; area never a common part'],
                  ['Same', 'Wong Chow Yun DCMP 1752/2015, 1/3/2017', 'Adverse possession of another co-owner\'s exclusive use area'],
                  ['Common parts: open', 'LRC Report on Adverse Possession, para 6.10; IO of Chungking Mansions v Shamdasani [1991] 2 HKC 342', 'The question whether the common parts can be possessed remains unsettled'],
                  ['Common parts: accepted below', 'IO of Kam Luk Building v Poon Mui Sang [2018] HKDC 1493; Wong King Lim v The Incorporated Owners of Peony House [2013] 4 HKC 295, CA', 'Designation as a common part does not of itself exclude adverse possession, whether by a co-owner or a stranger to the DMC'],
                  ['IO may possess', 'IO of San Po Kong Mansion v Shine Empire Ltd (2007) 10 HKCFAR 588', 'An owners\' corporation may acquire a possessory title over the common parts; not established on the facts'],
                  ['Squatter still bound', 'Incorporated Owners of Man Hong Apartments v Kwong Yuk Ching [2001] 3 HKC 116, CA; Incorporated Owners of Mountain View Mansion v Heart Cuisine CACV 235/2011', 'A squatter is bound by the restrictive, but not the positive, covenants in the DMC'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG2', issue: 'common-parts-definition', label: 'Is it a common part?' },
              { session: 'LG2', issue: 'enforceability-s41', label: 'Does the covenant run? Section 41 of the Conveyancing and Property Ordinance' },
            ],
          },
          {
            id: 'proper-plaintiff',
            title: 'Who is the proper plaintiff?',
            summary: 'Three kinds of building, three answers. Get this wrong and the action is struck out however good the breach.',
            triggers: {
              bullets: [
                'A co-owner has commenced an action over a structural alteration to the common parts and the building is incorporated.',
                'A co-owner applies for a declaration that another co-owner\'s signboard on the exterior wall breaches the DMC.',
                'The building has a DMC and an owners\' committee but the owners have never incorporated.',
                'The building has no DMC at all and one owner wants to stop another\'s works.',
                'Water is seeping from the roof, a common part, into one owner\'s flat and nobody else\'s.',
                'The DMC empowers the manager to enforce its covenants and the manager has declined to take action.',
                'The client wants to know whether to complain to the owner, the manager or the incorporated owners.',
                'The owners\' committee has resolved to sue in its own name.',
                'Only some of the co-owners are affected by the breach and they have suffered specific damage.',
              ],
              routes: [
                { when: 'The claim is one the incorporated owners have declined to bring', session: 'LG2', issue: 'io-duties-and-liability', label: 'The owners\' corporation: duties and liabilities' },
                { when: 'The new common parts were created by a sub-deed for particular floors', session: 'LG2', issue: 'sub-dmc', label: 'Sub-deeds of mutual covenant' },
                { when: 'The defence is that the breach was allowed to continue', session: 'LG2', issue: 'acquiescence', label: 'Acquiescence after Centre Chase' },
                { when: 'The question is what remedy to seek once the plaintiff is identified', session: 'LG2', issue: 'remedies-and-charge', label: 'Remedies: injunction, damages and the charge' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Identifying the proper plaintiff',
                steps: [
                  {
                    label: 'Classify the building: no DMC, DMC with an owners\' committee, or incorporated',
                    detail: 'There are three types of building. In the first there is no DMC and everybody must agree. In the second there is a DMC and often an owners\' committee, but no incorporation. In the third the owners have incorporated under the Building Management Ordinance.',
                    why: 'Each type has a different decision-making body and a different legal personality, and only the third has a body that can sue in its own name. That is the whole reason incorporation is worth doing.',
                    exam: {
                      write: 'The building [has no deed of mutual covenant / has a deed of mutual covenant and an owners\' committee but the owners have not incorporated / is incorporated under the Building Management Ordinance], so the proper plaintiff is [x].',
                      trap: 'Confusing an owners\' committee with a management committee. The committee of an unincorporated building is an owners\' committee with no separate legal personality; the incorporated owners act through a management committee.',
                    },
                    points: [
                      'Type 1, no DMC: everybody must agree.',
                      {
                        text: 'Type 2, DMC and owners\' committee but no incorporation.',
                        points: [
                          'The DMC will usually refer to a committee that may be set up, exercising the powers the DMC stipulates.',
                          'The BMO\'s mandatory implied covenants apply, and so does Part VIA (ss34C-34L).',
                          'Resolutions and decisions follow the DMC and Schedule 8, so far as consistent with the DMC.',
                          'Enforcement is by the manager, if the DMC allows, or by individual owners: the owners\' committee is not a separate legal body.',
                        ],
                      },
                      {
                        text: 'Type 3, incorporated.',
                        points: [
                          'The incorporated owners are a separate legal body.',
                          'The BMO\'s mandatory covenants apply, plus many more of its provisions.',
                          'A management committee makes decisions for the incorporated owners, sometimes requiring owners\' votes, under Schedule 3 and the rest of the Ordinance.',
                          'Enforcement of common parts breaches is exclusive to the incorporated owners under s16.',
                        ],
                      },
                    ],
                  },
                  {
                    label: 'If the building is incorporated, apply s16 to anything affecting the common parts',
                    detail: 'Upon registration of the owners\' corporation, the rights and powers of the owners in relation to the common parts must be exercised and performed by the owners\' corporation: s16, Building Management Ordinance.',
                    why: 'Exclusivity avoids a building with two hundred owners producing two hundred actions over the same lift lobby. The price is that an owner who wants something done must persuade the corporation, or go to the Lands Tribunal.',
                    exam: {
                      write: 'The breach affecting the common parts, s16 of the Building Management Ordinance vests the owners\' rights and powers in relation to them in the incorporated owners, who are the only competent plaintiff.',
                      trap: 'Forgetting that s16 works both ways: any liability of the owners in relation to the common parts must likewise be enforced against the corporation.',
                    },
                    points: [
                      'See Wah Fan v Incorporated Owners of Ki Tat Garden [2003] 3 HKLRD 1, CA: an action by a co-owner over a structural alteration to the common parts was struck out; it should have been commenced by the owners\' corporation.',
                      'Snowland Ltd v Topland Holdings Ltd [2006] 4 HKC 188: only the owners\' corporation, not a co-owner, could bring proceedings in respect of the common parts.',
                      'An owner who wants action taken may apply to the Lands Tribunal for an order compelling the owners\' corporation to take the necessary enforcement action.',
                      'Liability in relation to the common parts must be enforced against the corporation: s16.',
                    ],
                  },
                  {
                    label: 'Check the One Beacon Hill exception: specific damage to particular owners',
                    detail: 'Where all the co-owners are not affected by the breach to the common parts but only one or more are affected, and suffer specific damage, that or those co-owners are entitled to sue: IO of One Beacon Hill v Match Power Investment Ltd [2012] 6 HKC 200, CA.',
                    why: 'Section 16 vests the owners\' collective rights in the corporation. A claim founded on damage peculiar to one owner is not a collective right at all, so there is nothing for s16 to have taken away.',
                    exam: {
                      write: 'Only [owner] is affected by the [seepage / obstruction], and has suffered specific damage, so notwithstanding s16 he is entitled to sue in his own name: IO of One Beacon Hill v Match Power Investment Ltd [2012] 6 HKC 200, CA.',
                      trap: 'Treating s16 as covering everything the incorporated owners might do. The lecture notes that s18 does not necessarily carry the same exclusivity.',
                    },
                    points: [
                      'The exception requires that not all co-owners be affected AND that the claimant suffer specific damage.',
                      'Section 18 of the Ordinance does not necessarily carry the same exclusivity as s16.',
                    ],
                  },
                  {
                    label: 'If the building is not incorporated, look to the manager and the DMC',
                    detail: 'In the absence of a management committee and incorporation, the building is managed under the express terms of the DMC, or occasionally a separate management agreement, as augmented by the terms implied into all DMCs by the seventh and eighth Schedules to the Building Management Ordinance.',
                    why: 'The manager can sue because it is a party to the DMC, not because of any statutory standing. That is why its enforcement powers have to be found in the deed.',
                    exam: {
                      write: 'The building not being incorporated, the manager, as a party to the deed of mutual covenant, is empowered by clause [x] to enforce its covenants, and is the proper plaintiff.',
                      trap: 'Assuming the manager must sue on every breach. Its duty is to act reasonably in enforcing the covenants, not absolutely.',
                    },
                    points: [
                      'The manager is typically a party to the DMC and is empowered by it to enforce.',
                      'Long Source Industrial Ltd v Guardian Property Management Ltd [2016] 2 HKC 199, LT: the manager\'s duty is not absolute, only a duty to act reasonably in enforcing the DMC; it acted reasonably in not taking enforcement action where the owners had already sought permission from the Building Authority to remedy unauthorised works.',
                      'DMCs often allow owners to form an owners\' committee to supervise the manager and make decisions about the building.',
                    ],
                  },
                  {
                    label: 'Check whether the claim reaches beyond the building',
                    detail: 'An owners\' corporation has the right to enforce rights extending to land outside the building itself: IO of Block F1-F7 Pearl Island Holiday Flats v IO Pearl Island Garden [1997] 4 HKC 424, CA.',
                    why: 'The corporation exists to exercise the owners\' rights in relation to the common parts, and those rights may include easements over neighbouring land. Confining it to the footprint of the block would leave those rights unenforceable.',
                    exam: {
                      write: 'The incorporated owners may enforce [the right of way over the road outside the property], their capacity extending to land situated beyond the building itself.',
                      trap: 'Assuming the corporation\'s standing stops at the boundary of the lot.',
                    },
                    points: [
                      'Pearl Island: the incorporated owners could enforce a right of way over a road outside the property.',
                      'They may also acquire a possessory title over the common parts: IO of San Po Kong Mansion v Shine Empire Ltd (2007) 10 HKCFAR 588.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'Incorporation is voluntary. It is for the co-owners to decide, and many buildings never do it.',
                'Whether incorporated or not, Part VIA of the Building Management Ordinance applies, which means s34H, s34I and Schedules 7 and 8 are in play in every building.',
                'The lecture describes a management committee as akin to the board of directors of a limited company, the incorporated owners being the legal person.',
                'Where a sub-deed has created new common parts for particular floors, the building\'s incorporated owners have no jurisdiction over them: Po Lok Building.',
              ],
            },
            skeleton: {
              bullets: [
                'Classify the building into one of the three types.',
                'Identify whether the breach affects the common parts.',
                'If incorporated and the common parts are affected, apply s16 and its exclusivity.',
                'Test the One Beacon Hill exception on the facts.',
                'If unincorporated, find the manager\'s enforcement power in the DMC and consider the reasonableness of its decision.',
                'Name the plaintiff and say what happens to an action brought by the wrong one.',
              ],
            },
            mistakes: {
              bullets: [
                'Letting an individual co-owner sue on a common parts breach in an incorporated building. The action will be struck out: See Wah Fan.',
                'Treating the owners\' committee of an unincorporated building as capable of suing. It is not a separate legal body.',
                'Assuming the manager has an absolute duty to enforce every breach.',
                'Extending s16 exclusivity to s18.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Provision or case', 'What it establishes'],
                rows: [
                  ['Exclusive jurisdiction', 's16, Building Management Ordinance (Cap. 344)', 'On registration of the corporation, the owners\' rights and powers in relation to the common parts are exercised by it; liability likewise enforced against it'],
                  ['Struck out', 'See Wah Fan v Incorporated Owners of Ki Tat Garden [2003] 3 HKLRD 1, CA', 'Co-owner\'s action over a structural alteration to the common parts struck out; remedy is to apply to the Lands Tribunal to compel the corporation'],
                  ['Same', 'Snowland Ltd v Topland Holdings Ltd [2006] 4 HKC 188', 'Only the corporation could sue in respect of the exterior wall, a common part'],
                  ['Specific damage exception', 'IO of One Beacon Hill v Match Power Investment Ltd [2012] 6 HKC 200, CA', 'Where not all co-owners are affected and the claimant suffers specific damage, he may sue'],
                  ['Unincorporated buildings', 'Schedules 7 and 8, Building Management Ordinance (Cap. 344)', 'Terms implied into all DMCs; Schedule 8 governs meeting and voting procedure so far as consistent with the DMC'],
                  ['Manager\'s duty', 'Long Source Industrial Ltd v Guardian Property Management Ltd [2016] 2 HKC 199, LT', 'The manager must act reasonably in enforcing the DMC; the duty is not absolute'],
                  ['Beyond the building', 'IO of Block F1-F7 Pearl Island Holiday Flats v IO Pearl Island Garden [1997] 4 HKC 424, CA', 'The corporation may enforce rights over land outside the building'],
                  ['Possessory title', 'IO of San Po Kong Mansion v Shine Empire Ltd (2007) 10 HKCFAR 588', 'The corporation may acquire a possessory title over the common parts'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG2', issue: 'io-duties-and-liability', label: 'The owners\' corporation: duties and liabilities' },
              { session: 'LG2', issue: 'sub-dmc', label: 'Sub-deeds of mutual covenant' },
              { session: 'LG2', issue: 'remedies-and-charge', label: 'Remedies: injunction, damages and the charge' },
              { session: 'LG2', issue: 'common-parts-definition', label: 'Is it a common part?' },
            ],
          },
          {
            id: 'io-duties-and-liability',
            title: 'The owners\' corporation: duties and liabilities',
            summary: 'A legal person with a statutory job description — and, because it controls the common parts, an occupier\'s exposure to anyone the building hurts.',
            triggers: {
              bullets: [
                'Water has seeped from the roof, a common part, into the flat below and the owner sues the incorporated owners and the management company.',
                'The incorporated owners were told of a defect months ago and did nothing about it.',
                'A concrete canopy over the pavement collapsed, killing a pedestrian and injuring others.',
                'A piece of concrete fell from a balcony illegally extended thirty-five years ago and killed a hawker below.',
                'Most of the co-defendants held liable for the accident are insolvent and the incorporated owners are not.',
                'The incorporated owners themselves installed a water pipe in breach of the DMC.',
                'The management committee has employed a manager, insured the building and opened a bank account, and an owner questions its authority.',
                'An owner argues that s18(1) makes the incorporated owners automatically liable for any disrepair in the common parts.',
                'The incorporated owners have engaged independent contractors to carry out the repairs.',
              ],
              routes: [
                { when: 'The question is who may bring the claim rather than what the corporation must do', session: 'LG2', issue: 'proper-plaintiff', label: 'Who is the proper plaintiff?' },
                { when: 'The corporation has declined to enforce and the issue is whether it had to', session: 'LG2', issue: 'acquiescence', label: 'Acquiescence after Centre Chase' },
                { when: 'The dispute is about the charge for unpaid management fees', session: 'LG2', issue: 'remedies-and-charge', label: 'Remedies: injunction, damages and the charge' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Working out what the corporation owed and to whom',
                steps: [
                  {
                    label: 'Identify the corporation\'s duties under ss16 and 18',
                    detail: 'Section 16 vests the owners\' rights and powers in relation to the common parts in the corporation. Section 18(1) requires it to do all things reasonably necessary for the enforcement of the obligations contained in the DMC for the control, management and administration of the building.',
                    why: 'The two sections do different jobs. Section 16 is about the common parts and is exclusive; s18 is about enforcing the DMC generally, and the lecture is careful to say it is not necessarily to the exclusion of the owners.',
                    exam: {
                      write: 'By s18(1) of the Building Management Ordinance the incorporated owners must do all things reasonably necessary for the enforcement of the obligations in the deed of mutual covenant for the control, management and administration of the building.',
                      trap: 'Reading s18 as exclusive in the way s16 is. The incorporated owners must deal with these matters, but not necessarily to the exclusion of the owners.',
                    },
                    points: [
                      'Section 16: rights and powers in relation to the common parts; exclusive jurisdiction.',
                      'Section 18(1): all things reasonably necessary to enforce the DMC obligations for control, management and administration.',
                      'Section 18 covers all co-owners\' obligations, not only those relating to the common parts.',
                    ],
                  },
                  {
                    label: 'Note that the corporation is itself bound by the DMC',
                    detail: 'The owners\' corporation is bound by the terms of the DMC: Wing Ming Garment Factory Ltd v Incorporated Owners of Wing Ming Industrial Centre [1994] 2 HKC 748.',
                    why: 'The corporation is the owners collectively, not a regulator standing over them. A body that could ignore the deed it exists to enforce would be an odd creature.',
                    exam: {
                      write: 'The incorporated owners are themselves bound by the deed of mutual covenant, and their installation of [the pipe] was in breach of it: Wing Ming Garment Factory Ltd v Incorporated Owners of Wing Ming Industrial Centre [1994] 2 HKC 748.',
                      trap: 'Assuming a breach by the corporation produces an injunction automatically. In Wing Ming the mandatory injunction was refused in the exercise of the court\'s discretion.',
                    },
                    points: [
                      'A breach by the corporation is actionable like any other.',
                      'The remedy remains discretionary: in Wing Ming a mandatory injunction was refused.',
                    ],
                  },
                  {
                    label: 'Apply Lee Ming Yueh to a disrepair claim by an owner',
                    detail: 'In Lee Ming Yueh v Broadway-Nassau Investments Ltd [2015] 5 HKLRD 208, CA, water seeped from the roof, a common part, into the owner\'s flat below. Section 18(1) does not render the incorporated owners automatically liable if some part of the common parts falls into disrepair.',
                    why: 'Automatic liability would make the corporation an insurer of the fabric, funded by the very owners suing it. Fault-based liability keeps the incentive where it belongs — on responding once you know.',
                    exam: {
                      write: 'Section 18(1) does not render the incorporated owners automatically liable for disrepair in the common parts; liability arises if they were at fault, or if, having been made aware of a defect requiring remedy, they failed to take appropriate steps.',
                      trap: 'Ignoring the defence. In Lee Ming Yueh the incorporated owners had taken reasonable steps by employing independent contractors to carry out the necessary repairs, and were not liable.',
                    },
                    points: [
                      'Liability arises if the corporation was at fault.',
                      'Liability also arises if, having been made aware of a defect which required remedy, it failed to take appropriate steps: Lau Chun Wing v IO Po On Building CACV 20/2007, 1/11/2007.',
                      'Employing independent contractors to carry out the necessary repairs may be reasonable steps.',
                    ],
                  },
                  {
                    label: 'Deal with liability to third parties, which is where the exposure is largest',
                    detail: 'An owners\' corporation may be liable for injuries suffered by third parties.',
                    why: 'The corporation controls the common parts, and control is what founds an occupier\'s duty. The Court of Final Appeal in Leung Tsang Hung put it as a category closely analogous to that of an occupier.',
                    exam: {
                      write: 'The incorporated owners, by reason of their powers and duties in respect of the common parts and particularly their degree of control, fall into a category closely analogous to that of an occupier, and owed a duty to inspect and neutralise the hazard.',
                      trap: 'Forgetting the contribution point. In Aberdeen Winner the solvent co-defendants had to shoulder the insolvent ones\' shares under s19(2) of the Law Amendment and Reform (Consolidation) Ordinance, so the co-owners were jointly liable to contribute.',
                    },
                    points: [
                      {
                        text: 'Aberdeen Winner Investments Ltd v Incorporated Owners of Albert House [2004] 3 HKLRD 910, CA — the collapsed canopy.',
                        points: [
                          'A concrete canopy, a common part, collapsed, killing one pedestrian and injuring others.',
                          'Liability was apportioned: developer 15%, incorporated owners 15%, restaurant operator 50%, contractor 5%, building management company 15%.',
                          'Most co-defendants were insolvent; by s19(2) of the Law Amendment and Reform (Consolidation) Ordinance those not bankrupt had to share responsibility for the outstanding damages.',
                          'The co-owners were accordingly jointly liable to contribute to the award.',
                        ],
                      },
                      {
                        text: 'Leung Tsang Hung v Incorporated Owners of Kwok Wing House [2007] 5 HKC 227, [2007] 4 HKLRD 654, CFA — the falling concrete.',
                        points: [
                          'Concrete fell from a balcony illegally extended thirty-five years earlier and attached to the external wall, a common part, killing a hawker below.',
                          'The judge and the Court of Appeal held only the flat owner and the tenant liable.',
                          'The Court of Final Appeal held the corporation\'s powers, duties and degree of control put it in a category closely analogous to an occupier; it ought to have known of the illegal modifications, had a duty to inspect and neutralise the hazard, plainly had the resources to do so, and its failure caused the death.',
                          'The corporation was liable in public nuisance to the hawker\'s estate.',
                        ],
                      },
                    ],
                  },
                  {
                    label: 'Identify the body that acts: the management committee',
                    detail: 'Section 29 of the Building Management Ordinance provides that the powers and duties of the owners\' corporation are exercised by the management committee.',
                    why: 'The corporation is a legal person and needs an organ to act through, exactly as a company needs a board. That is also why a decision not to enforce is the committee\'s decision to make.',
                    exam: {
                      write: 'By s29 of the Building Management Ordinance the powers and duties of the incorporated owners are exercised by the management committee, which [employed the manager / effected the insurance / resolved not to take proceedings].',
                      trap: 'Naming the management committee as defendant. The legal person is the incorporated owners; the committee acts for it.',
                    },
                    points: [
                      'Maintaining and insuring the common parts: s18(1).',
                      'Engaging a manager, property management company or other professional to assist the corporation: s18(2).',
                      'Establishing a general fund and, if it chooses to, a contingency fund: s20(1)-(2); opening and maintaining an interest-bearing bank account: s20(3).',
                      'Preparing the annual budget: Schedule 5.',
                      'Keeping proper books and records of account and preparing the financial statements: s27(1).',
                      'Procuring supplies, goods or services, including the mandatory duty to invite tenders above the value threshold the section specifies: s20A(2).',
                      'Determining and recovering the owners\' contributions to the funds — this is what the DMC\'s management-fee machinery is enforced through: s22(1)-(3).',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'Incorporation is voluntary, but once it happens the corporation acquires both the exclusive right to enforce and the exposure that goes with control.',
                'Leung Tsang Hung reversed the courts below, which had held only the flat owner and the tenant liable. The reversal is the point.',
                'Aberdeen Winner is the case for insolvency among co-defendants, which is what turned a 15% apportionment into a much larger bill for the owners.',
                'The lecture treats management as not the focus of this course, but expects you to know who the proper plaintiff is and to whom a client should complain.',
              ],
            },
            skeleton: {
              bullets: [
                'Identify whether the building is incorporated and set out ss16 and 18(1).',
                'If the claim is by an owner for disrepair, apply Lee Ming Yueh: no automatic liability, fault or failure to act after notice.',
                'If the claim is by a third party, apply Leung Tsang Hung and the analogy with an occupier.',
                'Consider apportionment and the effect of insolvent co-defendants.',
                'Identify the management committee as the acting organ and the relevant statutory powers.',
              ],
            },
            mistakes: {
              bullets: [
                'Treating s18(1) as imposing automatic liability for disrepair.',
                'Suing the management committee rather than the incorporated owners.',
                'Forgetting that the corporation is itself bound by the DMC.',
                'Ignoring the contribution consequences where other defendants are insolvent.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Provision or case', 'What it establishes'],
                rows: [
                  ['Common parts vested', 's16, Building Management Ordinance (Cap. 344)', 'The owners\' rights, powers and liabilities in relation to the common parts are exercised by and enforced against the corporation'],
                  ['Duty to enforce', 's18(1), Building Management Ordinance (Cap. 344)', 'All things reasonably necessary for the enforcement of the DMC obligations for control, management and administration'],
                  ['Corporation bound', 'Wing Ming Garment Factory Ltd v Incorporated Owners of Wing Ming Industrial Centre [1994] 2 HKC 748', 'The corporation is bound by the DMC; mandatory injunction refused in the court\'s discretion'],
                  ['No automatic liability', 'Lee Ming Yueh v Broadway-Nassau Investments Ltd [2015] 5 HKLRD 208, CA', 'Section 18(1) does not make the corporation automatically liable for disrepair; liability on fault or failure to act after notice; contractors engaged was reasonable'],
                  ['Failure after notice', 'Lau Chun Wing v IO Po On Building CACV 20/2007, 1/11/2007', 'Liability where aware of a defect requiring remedy and no appropriate steps taken'],
                  ['Third parties: canopy', 'Aberdeen Winner Investments Ltd v Incorporated Owners of Albert House [2004] 3 HKLRD 910, CA', 'Apportionment across five defendants; s19(2) Law Amendment and Reform (Consolidation) Ordinance made solvent defendants share the insolvent ones\' liability'],
                  ['Third parties: falling concrete', 'Leung Tsang Hung v Incorporated Owners of Kwok Wing House [2007] 5 HKC 227, [2007] 4 HKLRD 654, CFA', 'Corporation closely analogous to an occupier; duty to inspect and neutralise; liable in public nuisance'],
                  ['Acting organ', 's29, Building Management Ordinance (Cap. 344)', 'The powers and duties of the corporation are exercised by the management committee'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG2', issue: 'proper-plaintiff', label: 'Who is the proper plaintiff?' },
              { session: 'LG2', issue: 'acquiescence', label: 'Acquiescence after Centre Chase' },
              { session: 'LG2', issue: 'remedies-and-charge', label: 'Remedies: injunction, damages and the charge' },
              { session: 'LG2', issue: 'common-parts-definition', label: 'Is it a common part?' },
            ],
          },
          {
            id: 'acquiescence',
            title: 'Acquiescence after Centre Chase',
            summary: 'The Court of Final Appeal has swept away the rule that an incorporated owners cannot acquiesce. What is left is proprietary estoppel — and the question whether it binds successors.',
            triggers: {
              bullets: [
                'An owner demolished the external wall on the basis of an approval, and the incorporated owners took no action for four years afterwards.',
                'A huge advertising sign was erected on an external canopy and the DMC gave the developer liberty to permit such signs.',
                'An owner affixed his trade name to a common part and the incorporated owners knew about it and did nothing.',
                'Fung shui window frames were affixed on top of the existing window frames on an external wall.',
                'The breach complained of is an unreasonable interference with the common parts rather than a conversion of them.',
                'The incorporated owners say they were duty bound to enforce and so could not have acquiesced.',
                'The owner who is said to have acquiesced has since sold the flat, and the new owner now sues.',
                'The breach was committed before the owners incorporated and the incorporated owners now object to it.',
                'An owner spent a large sum on works after the manager indicated that no objection would be taken.',
              ],
              routes: [
                { when: 'The breach in issue is a conversion of or interference with common parts', session: 'LG2', issue: 'bmo-overriding-duties', label: 'The BMO\'s overriding duties: sections 34H and 34I' },
                { when: 'The question is whether the corporation had to enforce at all', session: 'LG2', issue: 'io-duties-and-liability', label: 'The owners\' corporation: duties and liabilities' },
                { when: 'The breach was committed by a predecessor in title', session: 'LG2', issue: 'predecessor-breaches', label: 'Liability for a predecessor in title\'s breach' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Running an acquiescence defence',
                steps: [
                  {
                    label: 'State what acquiescence now is: a form of proprietary estoppel',
                    detail: 'Acquiescence is a form of proprietary estoppel that requires proof of representation, reliance and detriment: Wong Koon Wah v All Persons in Occupation of Lot No. 775 in D.D. 216 & Anor [2023] HKCA 1279, at paragraphs 98 to 102.',
                    why: 'Once acquiescence is classified as proprietary estoppel, everything else follows from the classification — the elements you must prove, and, later, whether the resulting equity can bind a successor.',
                    exam: {
                      write: 'Acquiescence is a form of proprietary estoppel requiring representation or inaction, detrimental reliance and unconscionability: Wong Koon Wah v All Persons in Occupation of Lot No. 775 in D.D. 216 & Anor [2023] HKCA 1279 at [98]-[102].',
                      trap: 'Pleading acquiescence as mere delay. Delay without reliance and detriment is not acquiescence; it may go to laches or to the court\'s discretion instead.',
                    },
                    points: [
                      'Representation, or inaction.',
                      'Detrimental reliance.',
                      'Unconscionability.',
                    ],
                  },
                  {
                    label: 'Start from where the law was before Centre Chase',
                    detail: 'Practitioners had taken the view that an owners\' corporation could not acquiesce in a breach of the DMC where it was under a statutory duty to enforce its terms. That belief stemmed from Incorporated Owners of Hoi Luen Industrial Centre v Ohashi Chemical Industries (Hong Kong) Ltd [1995] 2 HKC 11 and Hollywood Shopping Centre Owners Committee Ltd v IO Wing Wah Building Mongkok Kowloon [2011] 4 HKLRD 623.',
                    why: 'The old rule had an internal logic: the corporation could not acquiesce in acts which in law it could not do. Knowing that logic is what makes it possible to say precisely what the Court of Final Appeal has now rejected.',
                    exam: {
                      write: 'Before Centre Chase the position was governed by Hoi Luen: whether acquiescence was available depended on the nature of the breach, and it was unavailable where the breach was beyond the corporation\'s power to permit.',
                      trap: 'Presenting the old rule as still good law. Centre Chase holds that the reasoning in Hoi Luen cannot be sustained.',
                    },
                    points: [
                      {
                        text: 'The Hollywood Shopping Centre principles, per Rimsky Yuen SC, upheld on appeal.',
                        points: [
                          'Whether acquiescence could be set up depended on the nature or type of breach in question.',
                          'If the breach was within the corporation\'s power to acquiesce in, acquiescence could be a valid defence provided the requisite elements were established.',
                          'If it was beyond the corporation\'s power, the defence was unavailable, because the corporation could not acquiesce in acts which in law it could not do.',
                          'On the facts the corporation had the right under the DMC to permit such advertising signs, so it was within its power, and acquiescence was established.',
                        ],
                      },
                      'IO of Freder Centre v Gringo Ltd [2016] 4 HKC 346, [2016] 2 HKLRD 190, CA: it was implicit in s34I(1)(a) of the Building Management Ordinance that the incorporated owners could approve a conversion of a common part, so they could acquiesce in the breach.',
                    ],
                  },
                  {
                    label: 'Apply Centre Chase',
                    detail: 'In Centre Chase Investment Limited v The Incorporated Owners of Castle Peak Road International Industrial Building and Another [2026] HKCFA 26, the Court of Final Appeal held that the reasoning in Hoi Luen cannot be sustained. The incorporated owners may acquiesce in breaches of the DMC, and of s34I of the Building Management Ordinance, as long as it is not illegal to do so.',
                    why: 'The Court\'s point was that it makes no sense to distinguish between interference with the common parts and conversion of them, permitting acquiescence in one and not the other. The purpose of the corporation is the control, management and administration of the building, which is a managerial function, not a duty to litigate every breach.',
                    exam: {
                      write: 'Following Centre Chase Investment Ltd v The Incorporated Owners of Castle Peak Road International Industrial Building [2026] HKCFA 26, the incorporated owners may acquiesce in a breach of the deed of mutual covenant and of s34I provided it is not illegal to do so, and it is unnecessary to examine the wording of the covenant to see whether the breach is totally precluded.',
                      trap: 'Still asking whether the breach was one the corporation had power to permit. Centre Chase removes that inquiry.',
                    },
                    points: [
                      'The facts: fung shui window frames affixed on top of existing window frames on an external wall, in breach of the common parts provisions in the DMC and of s34I.',
                      'It makes no sense to differentiate between interference with common parts under s34I(1)(b) and conversion of them under s34I(1)(a).',
                      'In considering acquiescence, it is not necessary to examine the wording of the covenant to see whether the breach is totally precluded.',
                      'Section 18(1)(c) does not impose an inflexible duty on the corporation to enforce the DMC: the corporation may take into account practical considerations such as the legal costs of suing, and may consider waiving rights to reach an amicable settlement (see paragraphs 53 to 55).',
                      'The purpose of the corporation is the control, management and administration of the building; it need not take legal action over every breach.',
                    ],
                  },
                  {
                    label: 'Then prove acquiescence as a matter of fact',
                    detail: 'Even where acquiescence is available in law, it has to be made out on the evidence, and the cases go both ways.',
                    why: 'The lecture makes the point that before Centre Chase many judgments concluded there could be no acquiescence as a matter of law, so the factual reasoning in the old cases still has to be handled with care — it was often reached in the alternative.',
                    exam: {
                      write: 'The incorporated owners had knowledge of the breach when the works began and took no action for [four] years thereafter, which on the reasoning in IO of Tuen Mun Hung Cheung Industrial Centre HCMP 2991/1998, 22/11/1999, amounts to acquiescence.',
                      trap: 'Ignoring the gravity of the breach. It was a relevant factor in Hon Hing Enterprises Ltd v Honolulu Land Investment Co Ltd HCA 3557/1991, 31/7/1992.',
                    },
                    points: [
                      'Contrast IO of Dragon View v Nalpak Ltd [1989] 1 HKC 549 with IO of Hoi Luen Industrial Centre v Ohashi Chemical Industries (HK) Ltd [1995] 2 HKC 11.',
                      'Basis of approval, and knowledge of the breach followed by four years\' inaction: IO of Tuen Mun Hung Cheung Industrial Centre HCMP 2991/1998, 22/11/1999.',
                      'Gravity of the breach: Hon Hing Enterprises Ltd v Honolulu Land Investment Co Ltd HCA 3557/1991, 31/7/1992.',
                      'Acquiescence by the co-owners themselves can defeat the remedy: Cheung Yuet v Incorporated Owners of Oriental Gardens [1979] HKLR 536.',
                      'Before Centre Chase many judgments concluded there could be no acquiescence as a matter of law, but to obtain an injunction one still had to show it was not inequitable.',
                    ],
                  },
                  {
                    label: 'Ask whether the acquiescence binds successors',
                    detail: 'Even if acquiescence is readily available, there may be other barriers, of which the most important is whether it is purely personal in nature.',
                    why: 'Proprietary estoppel produces a remedy, and the nature of that remedy decides whether a successor is bound. A personal right cannot bind a purchaser of the land; a proprietary one prima facie can.',
                    exam: {
                      write: 'Acquiescence and waiver give rise to defences personal to the person who acquiesced and his heirs, and do not run with the land, so [the new owner] is not bound by them.',
                      trap: 'Stating the personal-in-nature rule without the exception. Proprietary estoppel is excluded from it, and the question is what remedy the court would grant.',
                    },
                    points: [
                      'Per Au JA in IO of Kam Luk Building v 吳靜燕 [2022] HKCA 1896, applying Grand Power International Ltd v Chan Sing Hoi Enterprises Ltd [2020] 3 HKC 451 at [47]: the defences of acquiescence, waiver, laches and estoppel, except proprietary estoppel, are all personal in nature and do not run with the land.',
                      'An estoppel binds a successor to property only if it is one the court will satisfy by the grant of a right in the property.',
                      'If the antecedent equity is not satisfied by the grant of a proprietary interest, the equity was purely personal and will not bind successors, even with notice, unless their consciences are affected.',
                      'The lecture asks whether IO of Kam Luk Building caused a misunderstanding: see 富嘉花園業主立案法團 v In Smart Ltd [2025] HKLdT 18 at [187].',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'Centre Chase is very recent. State clearly what it displaced — the Hoi Luen reasoning — because an answer that simply asserts the new rule shows less than one that shows the shift.',
                'The "not illegal" limit is the boundary Centre Chase left in place. An incorporated owners still cannot acquiesce in something unlawful in the sense of being illegal.',
                'Acquiescence before incorporation was always possible; the controversy was only about the corporation.',
                'The "personal in nature" line is quoted in the materials from Grand Power at [47] per Kwan VP, and applied by Au JA in Kam Luk Building. Attribute it correctly.',
              ],
            },
            skills: {
              bullets: [
                'Where the defence is run against an incorporated owners, plead Centre Chase first and the factual elements second: the old law would have stopped the defence before the facts mattered.',
                'Set out the representation or inaction, the reliance and the detriment separately, with dates and sums, rather than asserting acquiescence as a conclusion.',
                'If your client is the successor in title of the party who acquiesced, take the point that the defence is personal before arguing the facts.',
              ],
            },
            skeleton: {
              bullets: [
                'Identify the breach and who is said to have acquiesced.',
                'State the old law and what Centre Chase did to it.',
                'Apply the "not illegal" limit.',
                'Prove the elements: representation or inaction, detrimental reliance, unconscionability.',
                'Deal with s18(1)(c) and the corporation\'s discretion not to sue.',
                'Ask whether the resulting equity binds successors in title.',
              ],
            },
            mistakes: {
              bullets: [
                'Applying Hoi Luen as if it were still good law.',
                'Asking whether the covenant totally precludes the breach. Centre Chase says that inquiry is unnecessary.',
                'Treating mere delay as acquiescence.',
                'Assuming an acquiescence binds the next purchaser.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'Acquiescence and waiver can only give rise to defences which are personal in nature to the person who acquiesced and his heirs. Except in special circumstances, they cannot give rise to any proprietary interest capable of binding successors in title in that a personal contract relating to land does not run with the land', cite: 'Grand Power International Ltd v Chan Sing Hoi Enterprises Ltd [2020] 3 HKC 451 at [47], per Kwan VP, as reproduced in the LG2 slides' },
              ],
              table: {
                headers: ['Point', 'Authority', 'What it establishes'],
                rows: [
                  ['What acquiescence is', 'Wong Koon Wah v All Persons in Occupation of Lot No. 775 in D.D. 216 & Anor [2023] HKCA 1279 at [98]-[102]', 'A form of proprietary estoppel: representation, reliance, detriment'],
                  ['The old rule', 'Incorporated Owners of Hoi Luen Industrial Centre v Ohashi Chemical Industries (Hong Kong) Ltd [1995] 2 HKC 11', 'A corporation under a duty to enforce could not acquiesce'],
                  ['The old rule applied', 'Hollywood Shopping Centre Owners Committee Ltd v IO Wing Wah Building Mongkok Kowloon [2011] 4 HKLRD 623', 'Availability depended on the nature of the breach and whether it was within the corporation\'s power to permit; acquiescence established on the facts'],
                  ['Conversion could be approved', 'IO of Freder Centre v Gringo Ltd [2016] 4 HKC 346, [2016] 2 HKLRD 190, CA', 'Implicit in s34I(1)(a) that the corporation could approve a conversion, so it could acquiesce'],
                  ['The new rule', 'Centre Chase Investment Ltd v The Incorporated Owners of Castle Peak Road International Industrial Building [2026] HKCFA 26', 'Hoi Luen cannot be sustained; the corporation may acquiesce so long as it is not illegal; no need to examine whether the covenant totally precludes the breach'],
                  ['No inflexible duty to sue', 's18(1)(c), Building Management Ordinance (Cap. 344); Centre Chase at [53]-[55]', 'Practical considerations, including legal costs, may be taken into account; waiver to reach an amicable settlement is open'],
                  ['Facts: four years\' inaction', 'IO of Tuen Mun Hung Cheung Industrial Centre HCMP 2991/1998, 22/11/1999', 'Knowledge of the breach at the outset and four years without action'],
                  ['Facts: gravity', 'Hon Hing Enterprises Ltd v Honolulu Land Investment Co Ltd HCA 3557/1991, 31/7/1992', 'The gravity of the breach is relevant'],
                  ['Facts: contrast', 'IO of Dragon View v Nalpak Ltd [1989] 1 HKC 549', 'Contrasted with Hoi Luen on the facts'],
                  ['By the co-owners', 'Cheung Yuet v Incorporated Owners of Oriental Gardens [1979] HKLR 536', 'Owners, and hence the manager, may lose the remedy by acquiescing'],
                  ['Personal in nature', 'Grand Power International Ltd v Chan Sing Hoi Enterprises Ltd [2020] 3 HKC 451 at [47]; IO of Kam Luk Building v 吳靜燕 [2022] HKCA 1896', 'Acquiescence, waiver, laches and estoppel other than proprietary estoppel are personal and do not run with the land'],
                  ['The remedy decides', '富嘉花園業主立案法團 v In Smart Ltd [2025] HKLdT 18 at [187]', 'Whether a successor is bound depends on the nature of the right the court would grant'],
                ],
              },
            },
            notes: [
              {
                heading: 'Why the remedy decides whether a successor is bound',
                statutes: [
                  { text: 'If C acquires A\'s land, or a right in relation to A\'s land, after a court order has been made in B\'s favour, the effect of B\'s right on C will depend simply on the nature of that right: if it is a proprietary right, it is capable of binding C; if it is a personal right it cannot, in itself, bind C. It should make no difference, it is submitted, that B\'s right arose through proprietary estoppel, rather than by any other means.', cite: 'Snell\'s Equity at 12-053, as reproduced in the LG2 slides' },
                ],
                bullets: [
                  'So an order that A pay B a sum of money, or allow B a licence, gives C no duty to B merely because C acquired a right in the land.',
                  'An order that A grant B a property right, such as an easement, prima facie binds C, subject to the priority and registration rules.',
                  'This is the reasoning the lecture uses to ask whether IO of Kam Luk Building v 吳靜燕 [2022] HKCA 1896 has been misunderstood.',
                ],
              },
            ],
            crossRefs: [
              { session: 'LG2', issue: 'bmo-overriding-duties', label: 'The BMO\'s overriding duties: sections 34H and 34I' },
              { session: 'LG2', issue: 'io-duties-and-liability', label: 'The owners\' corporation: duties and liabilities' },
              { session: 'LG2', issue: 'structural-alterations', label: 'Structural alterations and external appearance' },
              { session: 'LG1', issue: 'waiver', label: 'Has the breach been waived?' },
              { session: 'LG2', issue: 'common-parts-definition', label: 'Is it a common part?' },
            ],
          },
          {
            id: 'remedies-and-charge',
            title: 'Remedies: injunction, damages and the charge',
            summary: 'A negative covenant deliberately broken gets an injunction as of course; and unpaid management fees get a charge, but only if the DMC provides for one.',
            triggers: {
              bullets: [
                'The owner erected a structure in breach of a negative covenant with his eyes open and now argues the balance of convenience.',
                'The developer converted part of the common parts to its own use and the question is how damages are to be assessed.',
                'An owner has occupied part of the common parts for six years and the incorporated owners want to be paid for it.',
                'Noise levels from a unit are in breach of the DMC and the plaintiff wants the activity stopped.',
                'Management fees have gone unpaid for two years and the manager wants to impose a charge on the flat.',
                'The incorporated owners purported to impose a charge and the manager purported to impose one personally as well.',
                'The DMC contains no provision at all empowering the imposition of a charge for unpaid management fees.',
                'A charge was imposed but never registered, and the flat has been sold to a bona fide purchaser.',
                'A mandatory injunction is sought requiring the removal of structures already built.',
              ],
              routes: [
                { when: 'The question is who may seek the remedy', session: 'LG2', issue: 'proper-plaintiff', label: 'Who is the proper plaintiff?' },
                { when: 'The defendant says the breach was allowed to continue', session: 'LG2', issue: 'acquiescence', label: 'Acquiescence after Centre Chase' },
                { when: 'The unpaid fees relate to a period before the defendant bought the flat', session: 'LG2', issue: 'predecessor-breaches', label: 'Liability for a predecessor in title\'s breach' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Choosing and securing the remedy',
                steps: [
                  {
                    label: 'For a negative covenant, start with Doherty v Allman',
                    detail: 'Where parties for valuable consideration and with their eyes open contract that a particular thing shall not be done, a court of equity says by way of injunction what the parties have already said by way of covenant.',
                    why: 'The injunction is not a discretionary balancing exercise but the specific performance of a negative bargain. That is why the usual equitable arguments about convenience and the scale of the damage fall away.',
                    exam: {
                      write: 'The covenant being negative and deliberately broken, the grant of an injunction is the specific performance by the court of the negative bargain the parties made, and it is not a question of the balance of convenience: Doherty v Allman (1878) 3 App Cas 709 at 720.',
                      trap: 'Letting the defendant argue balance of convenience on a negative covenant. Doherty v Allman shuts that down.',
                    },
                    points: [
                      'The injunction gives the sanction of the court\'s process to what is already the contract between the parties.',
                      'It is not a question of the balance of convenience or inconvenience, nor of the amount of damage or injury.',
                    ],
                  },
                  {
                    label: 'Pick the right form of injunction',
                    detail: 'A mandatory injunction may be granted to remove structures or objects; a prohibitory injunction to cease certain activities.',
                    why: 'The distinction matters because a mandatory injunction is the more drastic and the more likely to attract the discretionary defences — which is why acquiescence cases so often concern structures already built.',
                    exam: {
                      write: 'The plaintiff seeks a [mandatory injunction requiring the removal of [the structure] / prohibitory injunction restraining [the activity]].',
                      trap: 'Forgetting that the discretion survives. In Wing Ming Garment Factory Ltd v Incorporated Owners of Wing Ming Industrial Centre [1994] 2 HKC 748 a mandatory injunction was refused in the exercise of the court\'s discretion.',
                    },
                    points: [
                      'Mandatory: Hong Yip Service Co Ltd v Ng Wai-man CACV 159/1988, 22/3/1989.',
                      'Prohibitory: Realty Harvest Ltd v Gold Margin Development Ltd [2001] 1 HKLRD 506, on noise levels.',
                    ],
                  },
                  {
                    label: 'Consider damages on a loss of bargain basis',
                    detail: 'Other than the normal measure, damages may be measured on the basis of loss of bargain, that is the sum which might reasonably have been demanded for the use in question.',
                    why: 'Between co-owners the ordinary rule is that one does not pay rent to another, so without this route a developer occupying the common parts would pay nothing for years of use. The contract between them is what displaces the rule.',
                    exam: {
                      write: 'Damages fall to be assessed as compensation for the wrongful occupation of the common parts, representing the sum of money which might reasonably have been demanded for their use for the relevant period.',
                      trap: 'Applying the no-rent-between-co-owners rule. It does not apply where there is a contract between the parties, which the DMC is.',
                    },
                    points: [
                      'IO of Percival House v Fusion Advertising Solution Ltd [2012] 5 HKC 95.',
                      'Wing Ming Garment Factory Ltd v IO Wing Ming Industrial Centre [2014] 4 HKLRD 52: the developer had converted part of the common parts to its own use in breach of s34I(1); the general principle that one co-owner should not be required to pay rent to another did not apply where there was a contract between the parties.',
                      'Mesne profits are also available.',
                    ],
                  },
                  {
                    label: 'For unpaid management fees, find the power to charge in the DMC',
                    detail: 'Section 19(1) of the Building Management Ordinance provides that where a DMC empowers the manager to impose a charge on the property for the payment of management fees, an owners\' corporation may instead impose the charge.',
                    why: 'Section 19 does not create the power; it transfers it. The DMC has to have given the manager the power in the first place, which is why the first thing to read is the deed, not the Ordinance.',
                    exam: {
                      write: 'Clause [x] of the deed of mutual covenant empowers the manager to impose a charge for unpaid management fees, so by s19(1) of the Building Management Ordinance the incorporated owners may impose it instead.',
                      trap: 'Letting the manager impose the charge personally once the owners have incorporated. In Incorporated Owners of Kingsford Industrial Centre v Austria Pty Management Co [1997] 3 HKC 735 only the corporation, through the management committee, could do so.',
                    },
                    points: [
                      'Section 19 applies only if there is a provision in the DMC.',
                      'Where there is none, no charge may be imposed: Fu Tor Loy Sun Chuen Stage I v Foeng Houw Liam Steven [2016] 2 HKLRD 339. The corporation would have to secure judgment for the outstanding sum, then a charging order and an order for sale.',
                      'Once incorporated, only the corporation through the management committee may impose the charge: Incorporated Owners of Kingsford Industrial Centre v Austria Pty Management Co [1997] 3 HKC 735.',
                    ],
                  },
                  {
                    label: 'Deal with the formality objection, and then register',
                    detail: 'Sections 5(1) and 44(1) of the Conveyancing and Property Ordinance require, among other things, that a charge be by deed and signed by the chargor, that is the person to be charged, the owner. Notwithstanding those requirements, a provision in the DMC empowering the imposition of a charge has been held to be effective.',
                    why: 'The owner is bound by the DMC, and the DMC is a deed he or his predecessor executed or took subject to. The formality is treated as satisfied by the deed that authorises the charge rather than by a fresh instrument.',
                    exam: {
                      write: 'Although ss5(1) and 44(1) of the Conveyancing and Property Ordinance require a charge to be by deed and signed by the chargor, a provision in the deed of mutual covenant empowering the imposition of a charge is effective: Beacon Heights (Management) Ltd v Leung Ping Hung, Antonio [1995] 1 HKC 181.',
                      trap: 'Stopping at the imposition. A written charge must be prepared and registered to be effective against a bona fide purchaser: Wise Wave Investments Ltd v TKF Services Ltd [2007] 4 HKLRD 762.',
                    },
                    points: [
                      'Beacon Heights (Management) Ltd v Leung Ping Hung, Antonio [1995] 1 HKC 181.',
                      'Wise Wave Investments Ltd v TKF Services Ltd [2007] 4 HKLRD 762: a written charge must be prepared and registered by the management committee to be effective against a bona fide purchaser.',
                      'Register the charge in the Land Registry for the purposes of priority.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'Doherty v Allman applies to a negative covenant. For a positive one, and for a mandatory injunction, the discretion is real.',
                'Wing Ming Garment Factory appears twice in this topic at different citations: [1994] 2 HKC 748 on the corporation being bound by the DMC, and [2014] 4 HKLRD 52 on loss of bargain damages.',
                'Section 19 of the Building Management Ordinance only transfers a power the DMC has already given the manager. Read the DMC first.',
                'The charge must be registered, or a bona fide purchaser will take free of it.',
              ],
            },
            skeleton: {
              bullets: [
                'Identify the covenant and whether it is negative or positive.',
                'For a negative covenant, apply Doherty v Allman (1878) 3 App Cas 709. Then state the form of injunction sought.',
                'Consider damages, including loss of bargain and mesne profits.',
                'For management fees, find the charging power in the DMC and apply s19.',
                'Address the ss5(1) and 44(1) formality objection.',
                'Register the charge and explain the priority consequence.',
              ],
            },
            mistakes: {
              bullets: [
                'Conceding balance of convenience on a deliberately broken negative covenant.',
                'Applying the no-rent-between-co-owners rule where there is a DMC.',
                'Letting the manager impose a charge personally after incorporation.',
                'Imposing a charge without registering it.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'If parties for valuable consideration, with their eyes open, contract that a particular thing shall not be done, all that a court of equity has to do is to say, by way of injunction, that which the parties have already said by way of covenant, that the thing shall not be done and, in such a case, the injunction does nothing more than give the sanction of the process of the court to that which already is the contract between the parties. It is not then a question of the balance of convenience or inconvenience, or of the amount of damage or of injury', cite: 'Doherty v Allman (1878) 3 App Cas 709 at 720, as reproduced in the LG2 notes' },
              ],
              table: {
                headers: ['Remedy', 'Authority', 'What it establishes'],
                rows: [
                  ['Injunction as of course', 'Doherty v Allman (1878) 3 App Cas 709 at 720', 'Specific performance of a negative bargain; not a question of the balance of convenience'],
                  ['Mandatory injunction', 'Hong Yip Service Co Ltd v Ng Wai-man CACV 159/1988, 22/3/1989', 'Removal of structures or objects'],
                  ['Prohibitory injunction', 'Realty Harvest Ltd v Gold Margin Development Ltd [2001] 1 HKLRD 506', 'Cessation of activities; noise levels'],
                  ['Discretion survives', 'Wing Ming Garment Factory Ltd v Incorporated Owners of Wing Ming Industrial Centre [1994] 2 HKC 748', 'Mandatory injunction refused in the exercise of the court\'s discretion'],
                  ['Loss of bargain', 'IO of Percival House v Fusion Advertising Solution Ltd [2012] 5 HKC 95; Wing Ming Garment Factory Ltd v IO Wing Ming Industrial Centre [2014] 4 HKLRD 52', 'Damages as the sum reasonably demandable for the use of the common parts; the no-rent rule between co-owners displaced by contract'],
                  ['The charge', 's19(1), Building Management Ordinance (Cap. 344)', 'Where the DMC empowers the manager to charge for management fees, the corporation may impose it instead'],
                  ['Only the corporation', 'Incorporated Owners of Kingsford Industrial Centre v Austria Pty Management Co [1997] 3 HKC 735', 'Only the corporation through the management committee may impose it; not the manager personally'],
                  ['Formalities', 'ss5(1) and 44(1), Conveyancing and Property Ordinance (Cap. 219); Beacon Heights (Management) Ltd v Leung Ping Hung, Antonio [1995] 1 HKC 181', 'Charge by deed signed by the chargor, yet a DMC provision empowering a charge is effective'],
                  ['Registration', 'Wise Wave Investments Ltd v TKF Services Ltd [2007] 4 HKLRD 762', 'A written charge must be prepared and registered to bind a bona fide purchaser'],
                  ['No DMC provision', 'Fu Tor Loy Sun Chuen Stage I v Foeng Houw Liam Steven [2016] 2 HKLRD 339', 'No charge may be imposed; judgment, charging order and order for sale instead'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG2', issue: 'proper-plaintiff', label: 'Who is the proper plaintiff?' },
              { session: 'LG2', issue: 'acquiescence', label: 'Acquiescence after Centre Chase' },
              { session: 'LG2', issue: 'predecessor-breaches', label: 'Liability for a predecessor in title\'s breach' },
              { session: 'LG2', issue: 'common-parts-definition', label: 'Is it a common part?' },
            ],
          },
          {
            id: 'enforceability-s41',
            title: 'Does the covenant run? Section 41 of the Conveyancing and Property Ordinance',
            summary: 'Benefit and burden run by different routes. Test them separately, and remember positive covenants do not bind tenants or occupiers.',
            triggers: {
              bullets: [
                'The plaintiff is the fifth purchaser of a flat and was never a party to the DMC, which was executed in 1978.',
                'The defendant is a tenant of a co-owner and the covenant sued on requires money to be spent on repairs.',
                'The covenant relied on gives one owner the right to name the building.',
                'The covenant is to repay a tenant\'s deposit and the landlord has assigned the reversion.',
                'The DMC says the covenants are made "for the benefit of the land of the covenantee and his successors in title".',
                'The DMC is silent on whether the covenants are for the benefit of successors in title.',
                'There is no DMC at all, but the development was laid out and sold as a single scheme.',
                'One house on a small-house development never executed the DMC and a purchaser raises a requisition about it.',
                'The covenantee has sold every unit he owned and now wants to enforce the covenant.',
                'A squatter in part of the building is sued on a covenant in the DMC.',
              ],
              routes: [
                { when: 'The breach was committed by the defendant\'s predecessor in title', session: 'LG2', issue: 'predecessor-breaches', label: 'Liability for a predecessor in title\'s breach' },
                { when: 'The question is who may bring the action rather than whether the covenant runs', session: 'LG2', issue: 'proper-plaintiff', label: 'Who is the proper plaintiff?' },
                { when: 'The covenant in issue is in a Government lease rather than a DMC', session: 'LG1', issue: 'covenants-running-and-spent', label: 'Does the covenant run, and is it spent?' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Testing the running of benefit and burden',
                steps: [
                  {
                    label: 'Identify the covenantor, the covenantee, and who is suing whom',
                    detail: 'Every covenant in the DMC has a covenantor, who bears the burden, and a covenantee, who has the benefit. The running of benefit and burden must be dealt with separately, since the rules differ slightly. Ascertain whether the benefit has run in favour of the plaintiff and whether the burden has run against the defendant.',
                    why: 'The only parties to a DMC are the developer, the first purchaser and perhaps the manager, so in almost every real dispute both halves have to run. Testing only one half is the commonest structural error in this topic.',
                    exam: {
                      write: 'The plaintiff must show that the benefit of the covenant has run to him and that its burden has run against the defendant; the two are governed by different limbs of s41(2) of the Conveyancing and Property Ordinance.',
                      trap: 'Distinguish successors in title from persons claiming under or through them. Successors in title include assignees and mortgagees, but only when in possession; persons claiming under or through include tenants, mortgagees not in possession, and squatters.',
                    },
                    points: [
                      'Section 41 applies to express and implied covenants alike: s41(1).',
                      'Successors in title: assignees; mortgagees only when in possession.',
                      'Persons claiming under or through: tenants, mortgagees not in possession, squatters.',
                      'Section 41 is only a partial codification: a covenant falling outside its terms may still be governed by the common law, including the building scheme rules — Sky Heart Ltd v Lee Hysan Co Ltd [1999] 1 HKLRD 100, [1999] 1 HKC 18, CFA, per Lord Hoffmann.',
                    ],
                  },
                  {
                    label: 'Ask whether the covenant relates to the land of the covenantor',
                    detail: 'This is required for both benefit and burden: s41(2)(a). It is the same as the old test whether the covenant touched and concerned the land: Supreme Honour Development Ltd v Lamaya Ltd [1991] 1 HKC 198, CA, at 203, per Cons JA.',
                    why: 'A covenant that does not affect the land is a personal bargain between two people, and there is no reason a purchaser of the land should inherit it. The test is what makes a land covenant proprietary rather than contractual.',
                    exam: {
                      write: 'The covenant [to pay management fees / not to make structural alterations] is a land covenant: it affects the nature, quality, mode of user or value of the land, per Lord Oliver in P & A Swift Investments (A Firm) v Combined English Stores Group PLC [1989] 1 AC 633 at 642.',
                      trap: 'Forgetting the exception the lecture flags twice: practically everything in a DMC runs with the land, the notable exception being the right to name a building — Supreme Honour.',
                    },
                    points: [
                      {
                        text: 'Held to be land covenants:',
                        points: [
                          'To pay rent, including Government rent: Parker v Webb (1693) 3 Salk 5; and guaranteeing payment of that rent: Rolling Development Ltd v Ease King Ltd CACV 128/1997.',
                          'To pay management fees: Hang Yick Properties Management Ltd v Incorporated Owners of Tuen Mun Kar Wah Building [2005] 2 HKLRD 499, CA, per Woo V-P.',
                          'Prohibiting the keeping of dogs and other pets in a flat: Lee Yin Hong v Incorporated Owners of Serenade Cove DCCJ 4861/2008.',
                          'To repair: Williams v Earle (1868) LR 3 QB 739; and to insure against fire: Vernon v Smith (1821) 5 B & Ald 1.',
                          'Not to make structural alterations: Incorporated Owners of Marina Cove v Chu Kam Tai [2012] 2 HKLRD 107, CA; Incorporated Owners of Wah Fai Court v Lee Man Ho Joseph LDBM 60/2010.',
                          'Not to commit nuisance or annoyance: Putai Ltd v Yau Lee Ho DCCJ 2666/2013; Felan Investment Ltd v Sarwin Industries Ltd LDBM 7/2015.',
                          'To use the land for agricultural purposes only: Marten v Flight Refuelling Ltd [1962] Ch 115; or only as a private dwelling house: Wilkinson v Rogers (1864) 2 De GJ & S 62.',
                          'Not to use a roof other than for erecting signs: Incorporated Owners of Mirador Mansions v Tecowin Development Ltd [1999] 4 HKC 113; not to build on adjoining land: Ricketts v Enfield Churchwardens [1909] 1 Ch 544.',
                          'To abide by House Rules: Tsang Chi Ming v Broadway-Nassau Investments Ltd [2008] 1 HKLRD 96, DC.',
                        ],
                      },
                      {
                        text: 'Held NOT to be land covenants, that is personal covenants:',
                        points: [
                          'To repay the tenant\'s deposit: Hua Chiao Commercial Bank Ltd v Chiaphua Industries Ltd [1987] 2 WLR 179, [1987] 1 HKC 60, PC (not binding on a mortgagee from the landlord); Crocodile Garments Ltd v Prudential Enterprise Ltd [1989] 1 HKC 474 (not binding on an assignee from the landlord).',
                          'Giving the right to name a building: Supreme Honour Development Ltd v Lamaya Ltd [1991] 1 HKC 198, applied in Incorporated Owners of Nine Queen\'s Road Central v Minkind Development Ltd MP 3979/1996 and Pak Fah Yeow Investment (Hong Kong) Co Ltd v Proper Invest Group Ltd [2009] 3 HKC 285, CA.',
                        ],
                      },
                    ],
                  },
                  {
                    label: 'For the BENEFIT, require that it be expressed AND intended to benefit the covenantee\'s land',
                    detail: 'By ss41(2)(a) and (3), the benefit of a covenant, positive or restrictive, can be enforced by successors in title of the covenantee and persons deriving title under or through them, provided the covenant relates to the covenantor\'s land and is expressed and intended to benefit the land of the covenantee and his successors in title: s41(2)(c).',
                    why: 'There are two elements, and the lecture is explicit that both must be satisfied. "Expressed" is about annexation, express or implied; "intended" is about purpose, and is readily inferred once the covenant relates to the land.',
                    exam: {
                      write: 'The covenant is expressed to benefit the covenantee\'s land [by the express annexation in clause [x] / by the deemed annexation under s39(1) of the Conveyancing and Property Ordinance], and, relating to the land, is likely actually to benefit it, so the intention requirement is satisfied.',
                      trap: 'Missing that annexation can be implied. Section 39(1) deems a covenant relating to land of the covenantee to be made with the covenantee and his successors in title, unless a contrary intention is expressed.',
                    },
                    points: [
                      'Express annexation: the DMC provides that the covenants are made for the benefit of the land of the covenantee and his successors in title — Sky Heart Ltd v Lee Hysan Estate Co Ltd [1997] 1 HKC 313, upheld [1999] 1 HKC 18, CFA.',
                      'Implied or deemed annexation: s39(1) of the Conveyancing and Property Ordinance, applied in Incorporated Owners of Mirador Mansion v Tecowin Development Ltd [1999] 4 HKC 113, where a covenant not stated to be for the benefit of successors was held not intended to be personal.',
                      'Where there is no DMC, annexation may arise from a building scheme: Elliston v Reacher [1908] 2 Ch 374; Sky Heart Ltd v Lee Hysan Estate Ltd [1999] 1 HKLRD 100, CFA, where common intention was implied.',
                      'Intention: provided the covenant relates to the land, it is likely actually to benefit it — Supreme Honour Development Ltd v Lamaya Ltd [1991] 1 HKC 198, CA.',
                    ],
                  },
                  {
                    label: 'Check that the covenantee has retained land to be benefited',
                    detail: 'Since a covenant is an interest in land, similar to an easement, the covenantee in whose favour it was given must retain land to be benefited in order to enforce it: Sky Heart Ltd v Lee Hysan Estate Co Ltd [1999] 1 HKLRD 100, [1999] 1 HKC 18, CFA.',
                    why: 'A covenant with no dominant land left is a right in gross, and land law does not recognise one here. The requirement is what keeps the covenant tied to land rather than floating free as a saleable right.',
                    exam: {
                      write: '[The covenantee] retains [the remaining units / the common parts] to be benefited, so the covenant remains enforceable by it.',
                      trap: 'Forgetting that predecessors in title cannot enforce. The benefit runs to successors in title and those claiming under or through them, not backwards.',
                    },
                    points: [
                      'The covenantee must retain land to be benefited.',
                      'The benefit runs to successors in title and to persons claiming under or through them, but not to predecessors in title.',
                    ],
                  },
                  {
                    label: 'For the BURDEN, require only that it be expressed OR intended to run',
                    detail: 'Section 41(2)(b) and (3) provides that the burden can be enforced against the occupiers of the land, the covenantor and his successors in title and persons deriving title under or through him, provided the covenant relates to the covenantor\'s land and the burden is expressed or intended to run with that land.',
                    why: 'This is the difference from the benefit side, and it is easy to miss: annexation, express or implied, suffices without a separate requirement of intention to benefit. Section 40(1) supplies the implication.',
                    exam: {
                      write: 'The burden is expressed or intended to run with the covenantor\'s land, s40(1) of the Conveyancing and Property Ordinance deeming a covenant relating to the covenantor\'s land to be made on behalf of himself and his successors in title and those deriving title through them, no contrary intention being expressed.',
                      trap: 'Importing the benefit side\'s two-element test. On the burden side annexation alone suffices; there is no added requirement of intention to benefit the land.',
                    },
                    points: [
                      'Implied annexation follows from s40(1) of the Conveyancing and Property Ordinance.',
                      'The burden reaches occupiers, the covenantor, his successors in title and those deriving title under or through him — subject always to s41(5).',
                    ],
                  },
                  {
                    label: 'Apply the s41(5) limit: positive covenants do not reach lessees or occupiers',
                    detail: 'A positive covenant is one to expend money, do something, or which is otherwise positive in nature: s41(6). Section 41(5) provides that a positive covenant shall not be enforceable against three classes.',
                    why: 'A positive covenant costs money, and it would be harsh to impose that on someone with a limited interest who took no benefit from the bargain. The line is drawn at those who hold the land rather than merely use it.',
                    exam: {
                      write: 'The covenant [to repair / to contribute to the management expenses] is a positive covenant within s41(6) of the Conveyancing and Property Ordinance and so, by s41(5), is not enforceable against [the tenant / the occupier].',
                      trap: 'Extending the exemption to owners and mortgagees. Tenants, subtenants, squatters and perhaps mortgagees not in possession escape positive covenants; owners and mortgagees do not.',
                    },
                    points: [
                      'A lessee from the covenantor, or from a successor in title of the covenantor, or from any person deriving title under or through the covenantor or such a successor.',
                      'Any person deriving title under or through such a lessee.',
                      'Any person merely because he is an occupier of land: Discovery Bay Services Management Ltd v David Buxhaum [1995] HKDCLR 7, where the defendant was not liable as occupier.',
                      'Owners and mortgagees remain bound by positive covenants.',
                    ],
                  },
                  {
                    label: 'Finish with registration and its effect on notice',
                    detail: 'Section 41(9) provides that, on the registration of the DMC, successors in title are bound by its covenants irrespective of whether or not they have searched the register.',
                    why: 'In equity the burden of a restrictive covenant runs only against a successor with notice. Registration supplies that notice as a matter of law, which is why registering the DMC is a stage in the development sequence rather than an afterthought.',
                    exam: {
                      write: 'The deed of mutual covenant having been registered, s41(9) of the Conveyancing and Property Ordinance binds successors in title to its covenants irrespective of whether they searched the register.',
                      trap: 'Applying s41(9) to any covenant in the deed. By the s41(2) definition, the covenants within s41(9) must be land covenants whose burden is expressed or intended to run and which are expressed and intended to benefit the covenantee\'s land.',
                    },
                    points: [
                      'Registration supplies the notice equity would otherwise require.',
                      'The covenant must still satisfy the s41(2) conditions to be within s41(9).',
                      'A squatter is bound by the restrictive, but not the positive, covenants: Incorporated Owners of Man Hong Apartments v Kwong Yuk Ching [2001] 3 HKC 116, CA; Incorporated Owners of Mountain View Mansion v Heart Cuisine CACV 235/2011.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'Section 41 is a partial codification only. Sky Heart is the authority that the common law building scheme rules survive alongside it, and they are what you need when there is no DMC.',
                'Fortune Link Ltd v Grand House Ltd [2010] 1 HKC 253 is worth having for a small-house development: there was no element of co-ownership, the DMC was not a document of title, and the absence of one owner\'s signature was not a title defect or an impediment to completion — a person cannot take the benefits of a building scheme without accepting its burdens.',
                'The distinction between successors in title and persons claiming under or through them is what s41(5) turns on. Write it down before applying the subsection.',
                'A mortgagee is a successor in title only when in possession. That single qualification decides whether it is caught by a positive covenant.',
              ],
            },
            skills: {
              bullets: [
                'Set the analysis out in two columns, benefit and burden, rather than as one narrative. The rules differ and an examiner is looking for both.',
                'Classify the covenant as positive or restrictive early, using the s41(6) definition, because it decides s41(5).',
                'When advising a purchaser, say what the answer means for completion: whether the requisition is a good one, and whether title is defective.',
              ],
            },
            skeleton: {
              bullets: [
                'Identify the parties and classify each as covenantor, covenantee, successor in title, or person claiming under or through.',
                'Establish that the covenant relates to the covenantor\'s land.',
                'Run the benefit: expressed to benefit, by annexation express, implied under s39(1), or by building scheme; and intended to benefit.',
                'Check the covenantee has retained land to be benefited.',
                'Run the burden: expressed or intended to run, with s40(1) supplying the implication.',
                'Classify the covenant as positive or restrictive and apply s41(5).',
                'Deal with registration and s41(9), and conclude.',
              ],
            },
            mistakes: {
              bullets: [
                'Running one composite test for benefit and burden. They are governed by different limbs and the benefit side has the extra intention requirement.',
                'Enforcing a positive covenant against a tenant, subtenant, squatter or occupier.',
                'Forgetting that the covenantee must retain land to be benefited.',
                'Treating s41 as a complete code and overlooking the common law building scheme.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Provision or case', 'What it establishes'],
                rows: [
                  ['Partial codification', 'Sky Heart Ltd v Lee Hysan Co Ltd [1999] 1 HKLRD 100, [1999] 1 HKC 18, CFA', 'Section 41 does not prevent a covenant outside its terms being governed by the common law; building scheme rules apply in Hong Kong; the covenantee must retain land to be benefited'],
                  ['Relates to the land', 's41(2)(a), Conveyancing and Property Ordinance (Cap. 219); Supreme Honour Development Ltd v Lamaya Ltd [1991] 1 HKC 198, CA', 'Same as the old touching-and-concerning test, per Cons JA at 203'],
                  ['The test', 'P & A Swift Investments (A Firm) v Combined English Stores Group PLC [1989] 1 AC 633 at 642', 'Does the covenant affect the nature, quality, mode of user or value of the land, per Lord Oliver'],
                  ['Personal covenant', 'Supreme Honour Development Ltd v Lamaya Ltd [1991] 1 HKC 198', 'The right to name a building is not a land covenant'],
                  ['Personal covenant', 'Hua Chiao Commercial Bank Ltd v Chiaphua Industries Ltd [1987] 2 WLR 179, [1987] 1 HKC 60, PC', 'A covenant to repay the tenant\'s deposit does not bind a mortgagee from the landlord'],
                  ['Management fees', 'Hang Yick Properties Management Ltd v Incorporated Owners of Tuen Mun Kar Wah Building [2005] 2 HKLRD 499, CA', 'A covenant to pay management fees is a land covenant, per Woo V-P'],
                  ['Benefit', 'ss41(2)(a), 41(2)(c) and 41(3), Conveyancing and Property Ordinance (Cap. 219)', 'Enforceable by successors in title and those deriving title under or through them, if expressed AND intended to benefit the covenantee\'s land'],
                  ['Deemed annexation of benefit', 's39(1), Conveyancing and Property Ordinance (Cap. 219); Incorporated Owners of Mirador Mansion v Tecowin Development Ltd [1999] 4 HKC 113', 'A covenant relating to the covenantee\'s land is deemed made with him and his successors unless a contrary intention is expressed'],
                  ['Building scheme', 'Elliston v Reacher [1908] 2 Ch 374; Fortune Link Ltd v Grand House Ltd [2010] 1 HKC 253', 'Annexation by scheme where there is no DMC; a person cannot take the benefits of a scheme without its burdens'],
                  ['Burden', 's41(2)(b) and (3), Conveyancing and Property Ordinance (Cap. 219)', 'Enforceable against occupiers, the covenantor, his successors in title and those deriving title under or through him, if the burden is expressed or intended to run'],
                  ['Deemed annexation of burden', 's40(1), Conveyancing and Property Ordinance (Cap. 219)', 'A covenant relating to the covenantor\'s land is deemed made on behalf of himself and his successors unless a contrary intention is expressed'],
                  ['Positive covenants limited', 'ss41(5) and 41(6), Conveyancing and Property Ordinance (Cap. 219); Discovery Bay Services Management Ltd v David Buxhaum [1995] HKDCLR 7', 'A positive covenant is unenforceable against a lessee, a person deriving title under a lessee, or a person merely because he is an occupier'],
                  ['Registration', 's41(9), Conveyancing and Property Ordinance (Cap. 219)', 'On registration, successors in title are bound irrespective of whether they searched the register'],
                  ['Squatters', 'Incorporated Owners of Man Hong Apartments v Kwong Yuk Ching [2001] 3 HKC 116, CA; Incorporated Owners of Mountain View Mansion v Heart Cuisine CACV 235/2011', 'Bound by the restrictive but not the positive covenants'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG2', issue: 'predecessor-breaches', label: 'Liability for a predecessor in title\'s breach' },
              { session: 'LG2', issue: 'developer-sequence', label: 'The stages from lot to registered deed of mutual covenant' },
              { session: 'LG1', issue: 'covenants-running-and-spent', label: 'Does the covenant run, and is it spent?' },
              { session: 'LG4', issue: 'chain-of-title', label: 'The chain of title and registration of title documents' },
              { session: 'LG2', issue: 'common-parts-definition', label: 'Is it a common part?' },
            ],
          },
          {
            id: 'predecessor-breaches',
            title: 'Liability for a predecessor in title\'s breach',
            summary: 'A positive covenant breach dies with the seller; a restrictive one may not, if the breach continues and the buyer has adopted it.',
            triggers: {
              bullets: [
                'The previous owner erected an iron gate blocking the common parts and the present owner has left it there.',
                'Structural alterations were made to the external wall of the house by the previous owner and the incorporated owners now want it reinstated.',
                'Part of the common parts was converted by a predecessor in title and the present owner continues to use it.',
                'The vendor left management fees unpaid for two years and the purchaser is now asked to pay them.',
                'The DMC provides that the "owner for the time being" is liable for past and present management charges.',
                'The defendant received the property from his father as a gift rather than by purchase.',
                'A party to the DMC has sold his interest and is being sued for something he did before he sold.',
                'A purchaser raises a requisition on unauthorised works erected by the vendor\'s predecessor.',
                'The works were done before the present owner bought, and he has done nothing to remove them.',
              ],
              routes: [
                { when: 'The prior question is whether the covenant runs to the defendant at all', session: 'LG2', issue: 'enforceability-s41', label: 'Does the covenant run? Section 41 of the Conveyancing and Property Ordinance' },
                { when: 'The works complained of are structural alterations', session: 'LG2', issue: 'structural-alterations', label: 'Structural alterations and external appearance' },
                { when: 'The defence is that the incorporated owners allowed the works to stand', session: 'LG2', issue: 'acquiescence', label: 'Acquiescence after Centre Chase' },
                { when: 'The claim is for the charge securing the unpaid fees', session: 'LG2', issue: 'remedies-and-charge', label: 'Remedies: injunction, damages and the charge' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Deciding whether the present owner answers for the past',
                steps: [
                  {
                    label: 'Deal first with the outgoing party\'s own liability',
                    detail: 'At common law the parties remained liable under the covenants even after they had disposed of their interests: Thursby v Plant (1670) 1 WMS Saund 230. Section 41(8) of the Conveyancing and Property Ordinance changed that: parties are no longer bound by a covenant when they have ceased to hold any estate or interest in the land, except in respect of a breach committed by them before they ceased to have an interest.',
                    why: 'The exception is what keeps the seller in the frame. He escapes the covenant but not the consequences of having broken it, which is why a claimant should look at him before arguing that the buyer inherited anything.',
                    exam: {
                      write: 'By s41(8) of the Conveyancing and Property Ordinance, [the previous owner], having ceased to hold any estate or interest in the land, is no longer bound by the covenant, but remains liable for the breach he committed before he ceased to have an interest.',
                      trap: 'Forgetting to sue the person who actually did it. The previous owner or tenant who committed the breach remains liable to the covenantee.',
                    },
                    points: [
                      'The common law position is displaced by s41(8).',
                      'Liability survives for breaches committed while the party still held an interest.',
                    ],
                  },
                  {
                    label: 'Classify the covenant: positive or restrictive',
                    detail: 'The rules for a predecessor\'s breach differ according to the nature of the covenant, and the classification is the one in s41(6) of the Conveyancing and Property Ordinance.',
                    why: 'A positive covenant demands an act, and one cannot sensibly be in breach today of a failure to act that was somebody else\'s years ago. A restrictive covenant forbids a state of affairs, which is why a structure left standing is still a breach now.',
                    exam: {
                      write: 'The covenant [to contribute to the management expenses / not to make structural alterations] is [positive within s41(6) / restrictive], which determines whether the present owner answers for the breach.',
                      trap: 'Treating unpaid management fees as a continuing breach. They are a positive covenant breach, and the answer comes from the exception below, not from the continuing-breach doctrine.',
                    },
                    points: [
                      'A positive covenant is one to expend money, do something, or otherwise positive in nature: s41(6).',
                      'Everything else is restrictive.',
                    ],
                  },
                  {
                    label: 'For a POSITIVE covenant, the general rule is that the successor is not liable',
                    detail: 'Successors in title of a covenantor and persons claiming under or through them will not, as a matter of principle, be liable for any breach of a positive covenant committed by their predecessors in title where they purchased the property: Discovery Bay Services Management Ltd v David Buxhaum [1995] HKDCLR 7.',
                    why: 'The successor takes the covenant, not the history. A purchaser prices the property on what it is, and cannot be expected to price in a debt he had no way of quantifying.',
                    exam: {
                      write: 'The covenant being positive, [the present owner] is not liable for the breach committed by his predecessor in title, from whom he purchased the property: Discovery Bay Services Management Ltd v David Buxhaum [1995] HKDCLR 7.',
                      trap: 'Ignoring the gift exception. A successor IS liable for a predecessor\'s breach of a positive covenant where he received the property by way of gift.',
                    },
                    points: [
                      'The rule applies where the successor purchased the property.',
                      'It does not apply where he received it by way of gift.',
                      'Liabilities accrued before the sale will not pass to a successor in title under s41(5) of the Conveyancing and Property Ordinance.',
                    ],
                  },
                  {
                    label: 'Watch the outstanding management fees exception',
                    detail: 'Outstanding management fees, or contribution notices, owed are an exception, and the present owner may also be liable where the DMC so provides.',
                    why: 'The covenant to pay management fees is a land covenant, and a DMC that makes the "owner for the time being" liable is doing expressly what the general law would not. Read the deed before advising the purchaser he is safe.',
                    exam: {
                      write: 'The deed of mutual covenant provides that the owner for the time being is liable for past and present management charges, so [the present owner] is liable for the arrears notwithstanding that they accrued before he bought.',
                      trap: 'Advising a purchaser without reading the DMC\'s own words on arrears. This is a routine and expensive point on completion.',
                    },
                    points: [
                      'Hang Yick Properties v IO of Tuen Mun Kar Wah Building [2005] 2 HKLRD 499: outstanding management fees are an exception.',
                      'Wise Wave Investments Ltd v TKF Services Ltd [2007] 4 HKLRD 762: the DMC provided that the "owner for the time being" was liable for past and present management charges.',
                    ],
                  },
                  {
                    label: 'For a RESTRICTIVE covenant, ask whether the breach continues and has been adopted',
                    detail: 'Failure to remedy a predecessor\'s breach of a restrictive covenant might, where the breach is a continuing one and the present owner has adopted it, render the present owner\'s title defective or defeasible.',
                    why: 'This is why the point matters on a conveyance rather than only in litigation. A continuing breach the buyer inherits is a title problem, and it is his own inaction that converts the predecessor\'s wrong into his.',
                    exam: {
                      write: 'The breach is a continuing breach of a restrictive covenant which [the present owner] has adopted by [leaving the gate in place / continuing to use the converted area], so he is liable to rectify it and a mandatory injunction may be granted.',
                      trap: 'Missing the conveyancing consequence. The lecture puts it as rendering the present owner\'s title defective or defeasible, which is what a purchaser\'s solicitor is really asking about.',
                    },
                    points: [
                      'Incorporated Owners of Fortune Mansion, Tsuen Wan v Chiu Ng Ling [2010] 2 HKC 67, CA: conversion of part of the common parts by a predecessor in title; the present owner was liable to rectify, the breach being continuing.',
                      'Incorporated Owners of Marina Cove v Chu Kam Tai [2012] 2 HKLRD 107, CA: an iron gate blocking the common parts erected by the predecessor; the present owner had adopted the breach and a mandatory injunction to demolish was granted.',
                      'Incorporated Owners of Wah Fai Court v Lee Man Ho Joseph LDBM 60/2010: structural alterations to an external wall by a predecessor; a continuing breach and the present owner liable to reinstate.',
                      'Incorporated Owners of Kam Tao, Ngan Tao and Hoi Tao Building v Durap-Rogress Ltd LDBM 300/2015.',
                    ],
                  },
                  {
                    label: 'Advise on the transaction, not merely the litigation',
                    detail: 'These disputes reach the court as a claim by the incorporated owners against an owner, but they reach a solicitor as a requisition on title. The advice has to cover both: what the present owner is liable for, and what that does to a sale.',
                    why: 'Nearly every case in this topic reaches the court as a dispute between the incorporated owners and an owner, but it reaches a solicitor as a requisition on title. The advice has to cover both.',
                    exam: {
                      write: 'On a sale, the [continuing breach / arrears] renders the vendor\'s title [defective / defeasible], and the purchaser is entitled to raise a requisition requiring [reinstatement / payment] before completion.',
                      trap: 'Forgetting that the present owner has no answer merely because he did not do the works. Adoption is inferred from leaving them in place.',
                    },
                    points: [
                      'Consider whether the breach can be remedied before completion.',
                      'Consider a retention or an undertaking for arrears of management charges.',
                      'Consider whether the incorporated owners have acquiesced, which after Centre Chase is a live defence.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The positive and restrictive covenant rules pull in opposite directions on identical facts, so classify the covenant before anything else.',
                'The gift exception to the positive covenant rule is easy to miss and is exactly the kind of fact an examiner plants.',
                'Marina Cove is cited in the lecture both as a land covenant case and as a continuing-breach case. Know which proposition you are using it for.',
                'A negative covenant breach by a predecessor is described in the slides as something to be careful of precisely because it may be a continuing breach.',
              ],
            },
            skeleton: {
              bullets: [
                'Identify who committed the breach and when, and whether they still hold an interest.',
                'Apply s41(8) to the outgoing party.',
                'Classify the covenant as positive or restrictive under s41(6).',
                'For a positive covenant, apply the Discovery Bay rule and check for gift or a DMC provision about arrears.',
                'For a restrictive covenant, ask whether the breach continues and whether the present owner has adopted it.',
                'State the consequence for the litigation and for the transaction.',
              ],
            },
            mistakes: {
              bullets: [
                'Applying the continuing-breach doctrine to unpaid management fees.',
                'Forgetting that a donee, unlike a purchaser, inherits a positive covenant breach.',
                'Advising that the present owner is safe without reading the DMC\'s own words about arrears.',
                'Stopping at liability without saying what it does to title on a sale.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Provision or case', 'What it establishes'],
                rows: [
                  ['Outgoing party', 's41(8), Conveyancing and Property Ordinance (Cap. 219); Thursby v Plant (1670) 1 WMS Saund 230', 'A party ceases to be bound on parting with all interest, except for breaches committed before he did so'],
                  ['Positive covenant defined', 's41(6), Conveyancing and Property Ordinance (Cap. 219)', 'A covenant to expend money, do something, or otherwise positive in nature'],
                  ['Successor not liable', 'Discovery Bay Services Management Ltd v David Buxhaum [1995] HKDCLR 7; s41(5) of that Ordinance', 'A purchaser is not liable for a predecessor\'s breach of a positive covenant; liabilities accrued before sale do not pass'],
                  ['Gift exception', 'Lecture note on s41(5)', 'A successor who received the property by gift IS liable for the predecessor\'s breach of a positive covenant'],
                  ['Management fees exception', 'Hang Yick Properties v IO of Tuen Mun Kar Wah Building [2005] 2 HKLRD 499', 'Outstanding management fees and contribution notices are an exception'],
                  ['DMC may so provide', 'Wise Wave Investments Ltd v TKF Services Ltd [2007] 4 HKLRD 762', '"Owner for the time being" liable for past and present management charges'],
                  ['Continuing breach: conversion', 'Incorporated Owners of Fortune Mansion, Tsuen Wan v Chiu Ng Ling [2010] 2 HKC 67, CA', 'Present owner liable to rectify a predecessor\'s conversion of common parts'],
                  ['Continuing breach: gate', 'Incorporated Owners of Marina Cove v Chu Kam Tai [2012] 2 HKLRD 107, CA', 'Gate erected by the predecessor; present owner had adopted the breach; mandatory injunction to demolish'],
                  ['Continuing breach: wall', 'Incorporated Owners of Wah Fai Court v Lee Man Ho Joseph LDBM 60/2010; Incorporated Owners of Kam Tao, Ngan Tao and Hoi Tao Building v Durap-Rogress Ltd LDBM 300/2015', 'Structural alterations by a predecessor; continuing breach; present owner liable to reinstate'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG2', issue: 'enforceability-s41', label: 'Does the covenant run? Section 41 of the Conveyancing and Property Ordinance' },
              { session: 'LG2', issue: 'structural-alterations', label: 'Structural alterations and external appearance' },
              { session: 'LG2', issue: 'acquiescence', label: 'Acquiescence after Centre Chase' },
              { session: 'LG1', issue: 'good-title-no-real-risk', label: 'Does the breach defeat title? The "no real risk" approach' },
              { session: 'LG4', issue: 'investigating-title', label: 'Investigating title: what the purchaser\'s solicitor must do' },
              { session: 'LG2', issue: 'common-parts-definition', label: 'Is it a common part?' },
              { session: 'LG3', issue: 'encumbered-or-defeasible', label: 'Encumbered and defeasible titles' },
            ],
          },
        ],
      },
    },
    LG3: {
      kind: 'LG',
      date: '2026-09-15',
      time: '09:00-11:30',
      mode: 'Face-to-face',
      authors: ['Alwin Chan'],
      objectives: [
        'Place any question about title at the right stage of a conveyancing transaction, from the preliminary agreement to the sending of the accounts.',
        'Distinguish the duty to GIVE good title from the duty to SHOW title, and say which one the facts engage.',
        'State what a good title is, and apply the "no real risk" standard to an alleged defect.',
        'Decide whether an exclusion or limiting clause protects the vendor, and whether the purchaser has waived his right to object.',
        'Classify a defect as making the title encumbered or defeasible, and identify what the vendor must hand over to give title.',
      ],
      topicsCovered: [
        'The stages of a simple conveyancing transaction, from the preliminary agreement to completion and registration',
        'The twin duties of giving and showing good title',
        'What constitutes a good title: MEPC, Kan Wing Yau and the willing purchaser in Mexon',
        'The duty to give good title: express term, implied term, and whether the legal estate must pass',
        'Excluding or limiting the duty: contra proferentem, Jumbo King and the misleading purchaser',
        'The "as is" clause, and a limiting clause added after a binding preliminary agreement',
        'Waiver by the purchaser of his right to object to a defective title',
        'Encumbered and defeasible titles distinguished',
        'Title must be in the vendor; no third-party consent required; assignment free from encumbrances',
        'Registrable encumbrances that are unregistered, and why the purchaser\'s knowledge is irrelevant',
        'Encumbrances expressly subject to, and patent grounds of defeasibility',
        'Original title deeds: the common law after De Monsa, and s13A of the Conveyancing and Property Ordinance',
        'Which documents are documents of title',
      ],
      examNotes: {
        intro: 'LG3 and LG4 are one body of law split across two lectures: LG3 is about GIVING good title, LG4 about SHOWING it. Keep the two apart, because the whole of this topic turns on the fact that they are separate and independent duties — a vendor with a perfect title can still lose the sale by answering a requisition badly, and a purchaser who never raised a requisition can still refuse to complete.',
        issueTypes: [
          {
            id: 'conveyancing-stages',
            title: 'The stages of a simple conveyancing transaction',
            summary: 'Twenty-odd steps from the estate agent\'s office to the sending of the accounts. Most title questions are really "which stage is this?".',
            triggers: {
              bullets: [
                'A preliminary agreement was signed in the estate agent\'s office and a preliminary deposit paid.',
                'The purchaser wants to know whether the preliminary agreement he signed a fortnight ago needs stamping.',
                'One firm of solicitors proposes to act for both the vendor and the purchaser.',
                'Title deeds have been sent to the purchaser\'s solicitors against an undertaking to return them on demand.',
                'On execution of the formal agreement a further tranche of deposit brings the total paid to 10 per cent of the price.',
                'The assignment has been executed in escrow by the purchaser and sent to the vendor.',
                'Completion is to take place by mutual undertakings between the two firms of solicitors.',
                'The purchase price less the deposits was sent by cashier order against an undertaking to send the executed assignment and title deeds within 21 days of completion.',
                'The property being sold is already subject to a mortgage the vendor has not yet discharged.',
              ],
              routes: [
                { when: 'The question is what the vendor must hand over at completion', session: 'LG3', issue: 'original-title-deeds', label: 'Original title deeds: common law and section 13A' },
                { when: 'The question is what the vendor must produce by way of proof of title', session: 'LG4', issue: 'statutory-period-s13', label: 'The statutory period for showing title' },
                { when: 'The question is whether the vendor is obliged to give good title at all', session: 'LG3', issue: 'duty-to-give-title', label: 'The duty to give good title' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Placing the facts in the transaction',
                steps: [
                  {
                    label: 'Note the assumption, and check whether it holds',
                    detail: 'The stages below assume that the property owned by the vendor is not presently subject to a mortgage. If it is, additional steps have to be taken to have the mortgage discharged so that the vendor may assign the property free from it.',
                    why: 'A subsisting mortgage is an encumbrance, and the vendor must be able to assign free of it. That is why the discharge, and its registration, appear again at the end of the sequence.',
                    exam: {
                      write: 'The property [is / is not] presently subject to a mortgage, so [the additional steps to obtain a discharge before completion arise / the simple sequence applies].',
                      trap: 'Forgetting that the discharge itself must be registered, along with the assignment and the purchaser\'s own mortgage.',
                    },
                    points: [
                      'A subsisting mortgage must be discharged so the vendor can assign free from it.',
                      'The discharge is registered at the end, with the assignment and the purchaser\'s mortgage.',
                    ],
                  },
                  {
                    label: 'Stage 1: the preliminary sale and purchase agreement',
                    detail: 'The preliminary agreement is signed in the estate agent\'s office, with a licensed estate agent, in compliance with s45 of the Estate Agents Ordinance (Cap. 511). It is customary in Hong Kong for the purchaser to pay a preliminary deposit at this time.',
                    why: 'The preliminary agreement is where the bargain is actually struck, which is why so much later argument is about whether the formal agreement may depart from it.',
                    exam: {
                      write: 'The preliminary agreement was signed on [date] in compliance with s45 of the Estate Agents Ordinance (Cap. 511), the purchaser paying a preliminary deposit of [sum].',
                      trap: 'Treating the preliminary agreement as a mere formality. Three questions arise on it, and the lecture flags them for later: is it binding, does it need stamping, does it need registration?',
                    },
                    points: [
                      'Is the agreement binding?',
                      'Does it require stamping? Yes — unless followed within 14 days by a formal sale and purchase agreement.',
                      'Does it require registration?',
                    ],
                  },
                  {
                    label: 'Stages 2 to 3: solicitors are retained and the vendor\'s side checks title',
                    detail: 'The parties retain solicitors, jointly or separately, under rule 5C of the Solicitors Practice Rules (Cap. 159H). The vendor\'s solicitors acquire the title deeds, originals or certified copies, and carry out their own Land Registry search.',
                    why: 'The vendor\'s solicitors check title first so that any defect can be provided for in the formal agreement, while there is still a document to write it into. After the formal agreement is signed it is too late.',
                    exam: {
                      write: 'The vendor\'s solicitors should have acquired the title deeds and searched the Land Registry before the formal agreement, so that any defect could be provided for in that agreement.',
                      trap: 'Missing the joint-representation point. Rule 5C of the Solicitors Practice Rules (Cap. 159H) governs whether one firm may act for both.',
                    },
                    points: [
                      'If defects are found, provision must be made for them in the formal agreement if at all possible.',
                      'The vendor\'s solicitors should check whether any consent to sell is needed — for example under the Consent Scheme for the pre-sale of flats in a multi-storey building — and obtain it before the time for completion.',
                    ],
                  },
                  {
                    label: 'Stages 4 to 7: deeds go over, finance is arranged, the formal agreement is drafted',
                    detail: 'Title deeds, originals or certified copies, are sent to the purchaser\'s solicitors against an undertaking to return them on demand. The purchaser arranges finance. The vendor\'s solicitors draft the formal agreement and send it with any remaining title deeds.',
                    why: 'The undertaking to return the deeds matters: without one, the purchaser has a lien on the deeds supplied for the return of his deposit — which is only useful if what was supplied were the originals.',
                    exam: {
                      write: 'The title deeds were sent to the purchaser\'s solicitors against their undertaking to return them on demand.',
                      trap: 'Overlooking what is being negotiated at this stage — the fixtures and fittings to be included, and the completion date.',
                    },
                    points: [
                      'Without an undertaking, the purchaser has a lien on the deeds supplied for the return of the deposit.',
                      'Negotiation of the formal agreement covers, among other things, the fixtures and fittings included and the completion date.',
                    ],
                  },
                  {
                    label: 'Stages 8 to 12, in parallel: the purchaser investigates',
                    detail: 'The purchaser\'s solicitors peruse the title deeds, check the user provisions, make inquiries, and the purchaser or his solicitors visit and inspect the property. The lecture notes that these steps take place in parallel.',
                    why: 'They run in parallel because each answers a different question and none of them can wait: the deeds show the paper title, the visit shows who is in occupation, and the inspection shows what has been built.',
                    exam: {
                      write: 'The purchaser\'s solicitors perused the title deeds, checked the user provisions in the [Government lease / Conditions / deed of mutual covenant / Outline Zoning Plan / occupation permit], and the purchaser inspected the property.',
                      trap: 'Forgetting the site visit. It is what reveals an occupier with a resulting-trust interest, and unauthorised building works of a structural nature.',
                    },
                    points: [
                      {
                        text: 'The common defects to look for, which the later lectures detail:',
                        points: [
                          'Missing title deeds — originals under s13A of the Conveyancing and Property Ordinance, or certified copies under s13.',
                          'Defective execution of title deeds, by companies or under powers of attorney.',
                          'Discrepancies in names, signatures and the like on the title deeds.',
                          'Encumbrances: mortgages, trusts, rights of way, restrictive covenants, easements.',
                          'Grounds for rendering title defeasible: arrears of management fees, notices of resumption, demolition, repair, re-entry, charging orders.',
                          'Unregistrable interests such as resulting and constructive trusts and short-term tenancies.',
                        ],
                      },
                      'Check the user provisions in the Government lease or Conditions of Grant, the deed of mutual covenant, the Outline Zoning Plan and the occupation permit.',
                      'Visit to ensure no occupant has an interest by way of resulting trust.',
                      'Inspect, perhaps with a surveyor, for unauthorised building works of a structural nature.',
                    ],
                  },
                  {
                    label: 'Stages 13 to 14: execution, stamping and registration of the formal agreement',
                    detail: 'The formal agreement is usually executed in duplicate. The purchaser pays a further tranche of deposit which, with the preliminary deposit, equals 10 per cent of the purchase price. The purchaser executes first and sends it to the vendor, who returns one set on execution. The agreement is then stamped and registered.',
                    why: 'The purchaser signs first because he is the one paying; the vendor\'s counterpart comes back as confirmation that the bargain is closed.',
                    exam: {
                      write: 'The formal agreement was executed in duplicate, the purchaser paying a further deposit bringing the total to 10 per cent of the price, and was then stamped and registered.',
                      trap: 'Reversing the order of execution. The purchaser executes first and sends to the vendor, not the other way round.',
                    },
                    points: [
                      'Usually executed in duplicate.',
                      'The deposits together equal 10 per cent of the purchase price.',
                      'The vendor returns one set to the purchaser on execution.',
                    ],
                  },
                  {
                    label: 'Stages 15 to 19: the assignment, the undertakings, the money',
                    detail: 'The assignment is drafted by the purchaser\'s solicitors and approved by the vendor\'s, usually executed in escrow by the purchaser first. The method of completion is agreed, normally by mutual undertakings. A completion statement is sent, the mortgage is finalised, and the purchaser inspects for vacant possession.',
                    why: 'Completion by undertakings exists because neither side will part with its half of the exchange first. The undertakings are what make the simultaneous exchange work across two offices.',
                    exam: {
                      write: 'Completion was to take place by way of mutual undertakings given by the parties\' solicitors, both sides having approved the draft completion undertakings.',
                      trap: 'Forgetting that the purchaser inspects again, shortly before completion, to ensure vacant possession.',
                    },
                    points: [
                      'The assignment is drafted by the purchaser\'s solicitors and approved by the vendor\'s.',
                      'It is usually executed in escrow by the purchaser first and sent to the vendor.',
                      'Both parties must approve the draft completion undertakings.',
                      'A completion statement is sent by the vendor\'s solicitors to the purchaser\'s.',
                      'The mortgage is finalised and executed, and the cheque for the loan sum is sent to the purchaser\'s solicitors.',
                    ],
                  },
                  {
                    label: 'Stages 20 to 23: completion, the deeds, registration and the accounts',
                    detail: 'On the completion date the balance of the purchase price is sent by cashier order, usually by messenger, against the vendor\'s solicitors\' undertaking to send the executed assignment together with the title deeds within a stated period, typically 21 days. The vendor usually provides the keys at this point.',
                    why: 'The 21 days exist because the assignment has to be stamped before it can be registered and handed over. The undertaking bridges that gap for the purchaser.',
                    exam: {
                      write: 'On completion the balance of [sum] was paid by cashier order against the vendor\'s solicitors\' undertaking to send the executed assignment and title deeds within 21 days.',
                      trap: 'Assuming payment may be by ordinary cheque. It is by cashier order unless a cheque is expressly agreed.',
                    },
                    points: [
                      'Original title deeds relating exclusively to the property are sent in accordance with s13A of the Conveyancing and Property Ordinance, or under the common law (De Monsa) if so expressly provided.',
                      'The assignment, any discharge of the vendor\'s mortgage, and the purchaser\'s mortgage are registered.',
                      'The solicitors for the parties send their accounts for payment.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The preliminary agreement requires stamping unless followed within 14 days by a formal agreement — a date worth checking on any fact pattern that gives you both dates.',
                'Whether one firm may act for both parties is governed by rule 5C of the Solicitors Practice Rules (Cap. 159H), not by general principle.',
                'Consent to sell, where one is needed, must be obtained before the time for completion — not at it.',
                'The purchaser\'s own inspection does real work later: it is what decides whether a defect was patent, and whether a requisition could have been raised earlier with due diligence.',
              ],
            },
            skeleton: {
              bullets: [
                'Identify the stage the facts have reached.',
                'Say what should have happened by that stage and what has not.',
                'Identify which duty is engaged — giving title or showing it.',
                'State the consequence: a requisition, a refusal to complete, or a claim in negligence against the solicitor.',
              ],
            },
            mistakes: {
              bullets: [
                'Treating the preliminary agreement as non-binding. Whether it binds is a live question, and a limiting clause cannot be added later if it does.',
                'Putting the purchaser\'s investigations after the formal agreement. Stages 8 to 12 run in parallel and before execution.',
                'Forgetting that the mortgage discharge is an additional sequence, not part of the simple one.',
                'Describing completion as an exchange of documents. It is an exchange of undertakings.',
              ],
            },
            authorities: {
              table: {
                headers: ['Stage', 'Source', 'What it establishes'],
                rows: [
                  ['Preliminary agreement', 's45, Estate Agents Ordinance (Cap. 511)', 'The agreement with the licensed estate agent must comply with it'],
                  ['Stamping the preliminary agreement', 'Lecture note', 'Required unless followed within 14 days by a formal sale and purchase agreement'],
                  ['Joint or separate representation', 'rule 5C, Solicitors Practice Rules (Cap. 159H)', 'Governs whether one firm may act for both parties'],
                  ['Consent to sell', 'The Consent Scheme', 'Where consent is needed it must be obtained before the time for completion'],
                  ['Delivery of originals', 's13A, Conveyancing and Property Ordinance (Cap. 219)', 'What the vendor must deliver at completion, unless the common law is expressly adopted'],
                  ['The common law alternative', 'De Monsa Investments Ltd v Whole Win Management Fund Ltd (2013) 16 HKCFAR 419', 'Applies where the parties expressly so provide'],
                  ['Proof of title', 's13, Conveyancing and Property Ordinance (Cap. 219)', 'What must be produced by way of showing title'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG3', issue: 'twin-duties', label: 'The twin duties of giving and showing title' },
              { session: 'LG3', issue: 'original-title-deeds', label: 'Original title deeds: common law and section 13A' },
              { session: 'LG4', issue: 'investigating-title', label: 'Investigating title: what the purchaser\'s solicitor must do' },
              { session: 'LG3', issue: 'encumbered-or-defeasible', label: 'Encumbered and defeasible titles' },
              { session: 'LG3', issue: 'documents-of-title', label: 'Which documents are documents of title?' },
            ],
          },
          {
            id: 'twin-duties',
            title: 'The twin duties of giving and showing title',
            summary: 'Two separate and independent duties. Breach of either lets the purchaser rescind, and a good title is no answer to a bad requisition answer.',
            triggers: {
              bullets: [
                'The vendor in fact has a perfect title but has answered the purchaser\'s requisition with a bare assertion.',
                'The purchaser never raised a requisition at all, and at completion the vendor cannot give good title.',
                'A requisition was raised out of time and the vendor was entitled to refuse to answer it.',
                'The purchaser refuses to complete on the ground that the vendor has not produced a document the agreement required.',
                'The vendor says he has answered every requisition and so must be taken to have given good title.',
                'The agreement requires the vendor to give title in accordance with s13A and to prove title in accordance with s13.',
                'The purchaser purports to rescind at completion over a defect he knew about all along.',
                'The vendor has removed the defect but has produced no evidence that it has gone.',
                'The dispute is whether the breach is repudiatory or sounds only in damages.',
              ],
              routes: [
                { when: 'The question is the content of the duty to give good title', session: 'LG3', issue: 'duty-to-give-title', label: 'The duty to give good title' },
                { when: 'The question is what must be produced by way of proof of title', session: 'LG4', issue: 'statutory-period-s13', label: 'The statutory period for showing title' },
                { when: 'The complaint is about the quality of the answer to a requisition', session: 'LG4', issue: 'answering-requisitions', label: 'Answering requisitions with candour' },
                { when: 'The question is whether the title is good at all', session: 'LG3', issue: 'what-is-good-title', label: 'What constitutes a good title?' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Separating the two duties',
                steps: [
                  {
                    label: 'State the twin duties',
                    detail: 'Unless the sale and purchase agreement provides otherwise, the vendor has the twin duties of showing and giving title.',
                    why: 'They answer different questions. Showing title is evidential — can the purchaser satisfy himself? Giving title is substantive — is the thing being sold actually free of defects? A vendor can succeed at one and fail at the other.',
                    exam: {
                      write: 'Unless the sale and purchase agreement provides otherwise, the vendor is under the twin duties of showing and giving title, which are separate and independent.',
                      trap: 'Running the two together. Almost every question in this topic is testing whether you keep them apart.',
                    },
                    points: [
                      {
                        text: 'The duty to SHOW good title has two limbs.',
                        points: [
                          'Producing to the purchaser the required documents of title.',
                          'Answering any requisitions reasonably raised.',
                        ],
                      },
                      {
                        text: 'The duty to GIVE (or make) good title is to prove the title.',
                        points: [
                          'Removing any title defect.',
                          'Providing any necessary conveyancing evidence to establish that the title is not defective as being either encumbered or defeasible.',
                        ],
                      },
                      'The parties may exclude or modify these duties in the agreement.',
                    ],
                  },
                  {
                    label: 'Confirm they are separate and distinct',
                    detail: 'The duty to give good title and the duty to show title, usually in compliance with s13 of the Conveyancing and Property Ordinance, are separate and distinct. The applicable case law on whether a good title has been given or shown was summarised in Hui Kwok Hau v Hui Mei Mei [2023] HKCFI 1654.',
                    why: 'Independence is what produces the two counter-intuitive results below. If the duties were one, a good title would answer everything and a waived requisition would end the matter.',
                    exam: {
                      write: 'The duties to give and to show good title are separate and distinct: Hui Kwok Hau v Hui Mei Mei [2023] HKCFI 1654.',
                      trap: 'Treating compliance with s13 as discharging the duty to give title. Section 13 is about showing.',
                    },
                    points: [
                      'Showing is usually in compliance with s13 of the Conveyancing and Property Ordinance.',
                      'Giving is usually in compliance with s13A of that Ordinance, or the common law.',
                    ],
                  },
                  {
                    label: 'Result one: a good title is no answer to a failure to show it',
                    detail: 'A purchaser is entitled to rescind where the vendor has failed to show good title — for example by failing adequately to answer the purchaser\'s requisitions — even if the vendor actually has a good title: Active Keen Industries Ltd v Fok Chi Keung [1994] 1 HKLR 396.',
                    why: 'The purchaser bargained for a title he could be satisfied about, not merely for one that would survive litigation. A vendor who will not explain himself has not delivered that.',
                    exam: {
                      write: 'Although the vendor may in fact have a good title, his failure adequately to answer the requisition is a failure to SHOW title, and the purchaser may rescind: Active Keen Industries Ltd v Fok Chi Keung [1994] 1 HKLR 396.',
                      trap: 'Letting the vendor argue that the defect turned out to be harmless. That goes to giving title, not showing it.',
                    },
                    points: [
                      'The failure is in the answering, not in the title.',
                      'It is no excuse that the vendor actually had a good title: Kok Chong Ho v Double Value Developments Ltd [1993] 2 HKLR 423, CA.',
                    ],
                  },
                  {
                    label: 'Result two: no requisition, or a late one, does not save the vendor',
                    detail: 'A purchaser is entitled to rescind even where he has failed to raise a requisition, or has raised it out of time so that the vendor is entitled to refuse to answer, where the vendor does not establish a good title at or before completion: Profit World Trading Ltd v Ho So Yung [2011] 2 HKC 473, CA.',
                    why: 'Le Pichon JA\'s reasoning is that the contrary rule would reverse the legal burden of giving good title, handing the vendor a windfall for the purchaser\'s inaction. The vendor either can give good title at completion or he cannot; requisitions cannot alter the nature of that obligation.',
                    exam: {
                      write: 'The purchaser\'s failure to raise the requisition in time does not constitute acceptance of the vendor\'s title; the vendor either was in a position to give good title at completion or he was not: Profit World Trading Ltd v Ho So Yung [2011] 2 HKC 473, CA.',
                      trap: 'Confusing this with waiver. Failing to raise a requisition is not a waiver, but a purchaser who knows of the defect and its legal significance and acts unequivocally may still waive.',
                    },
                    points: [
                      'There is no obligation on a purchaser to raise any requisition.',
                      'The contrary rule would impose a positive obligation to raise requisitions timeously and would reverse the legal burden of giving good title: Flywin Co Ltd v Strong & Associates Ltd (2002) 5 HKCFAR, CFA.',
                      'Requisitions provide the vendor with the opportunity to extricate himself by returning the deposit if the requisitions throw up defects that cannot be cleared in time.',
                    ],
                  },
                  {
                    label: 'Classify the breach, and state the remedy',
                    detail: 'Breach of either duty may constitute a repudiatory breach entitling the purchaser to rescind: Big Most Ltd v Chau Wa Hung [2012] 4 HKLRD 599.',
                    why: 'Not every defect ends the contract. Whether the breach is repudiatory, or merely a breach of warranty sounding in damages, depends on the significance of the breach — which is why the classification comes last, after the defect has been identified.',
                    exam: {
                      write: 'The vendor\'s failure [to deliver the originals required by s13A / to answer the requisition adequately] is a repudiatory breach entitling the purchaser to rescind: Big Most Ltd v Chau Wa Hung [2012] 4 HKLRD 599.',
                      trap: 'Asserting rescission without addressing significance. An encumbered title constitutes a repudiatory breach only if the encumbrance is significant.',
                    },
                    points: [
                      'Failure to provide the originals in compliance with s13A of the Conveyancing and Property Ordinance is a repudiatory breach: Big Most Ltd v Chau Wa Hung [2012] 4 HKLRD 599.',
                      'Whether a defect makes the breach repudiatory, or a breach of warranty sounding only in damages, depends on the significance of the breach.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The duties can be excluded or modified by the agreement — so read the agreement before stating either of them.',
                'Section 13 is showing; section 13A is giving. The one-letter difference carries the whole distinction.',
                'Active Keen is about the answer to a requisition; Profit World is about the absence of one. Do not cite them for each other.',
                'A requisition the vendor may lawfully refuse to answer still does not cure a failure to give good title at completion.',
              ],
            },
            skeleton: {
              bullets: [
                'State the twin duties and their content.',
                'Identify which duty the facts engage — or both.',
                'For showing: was the document produced, and was the requisition adequately answered?',
                'For giving: was the title free of encumbrance and defeasibility at completion?',
                'Say whether the breach is repudiatory, and state the remedy.',
              ],
            },
            mistakes: {
              bullets: [
                'Holding that a vendor with a good title cannot be in breach.',
                'Holding that a purchaser who raised no requisition has accepted the title.',
                'Citing s13 for the duty to give title.',
                'Jumping to rescission without asking whether the breach was significant.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Authority', 'What it establishes'],
                rows: [
                  ['Separate and distinct', 'Hui Kwok Hau v Hui Mei Mei [2023] HKCFI 1654', 'Summarises the case law on whether good title has been given or shown'],
                  ['Good title is no answer', 'Active Keen Industries Ltd v Fok Chi Keung [1994] 1 HKLR 396', 'Purchaser may rescind for failure to show title even though the vendor had a good title'],
                  ['Same', 'Kok Chong Ho v Double Value Developments Ltd [1993] 2 HKLR 423, CA', 'It is no excuse that the vendor actually had a good title'],
                  ['No requisition needed', 'Profit World Trading Ltd v Ho So Yung [2011] 2 HKC 473, CA', 'Failure to raise a requisition, or raising it late, does not constitute acceptance of the title'],
                  ['Burden not reversed', 'Flywin Co Ltd v Strong & Associates Ltd (2002) 5 HKCFAR, CFA', 'The legal burden of giving good title rests on the vendor'],
                  ['Repudiatory breach', 'Big Most Ltd v Chau Wa Hung [2012] 4 HKLRD 599', 'Failure to provide originals under s13A is a repudiatory breach; either duty may be breached repudiatorily'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG3', issue: 'what-is-good-title', label: 'What constitutes a good title?' },
              { session: 'LG3', issue: 'duty-to-give-title', label: 'The duty to give good title' },
              { session: 'LG4', issue: 'showing-vs-giving', label: 'Showing title: production and requisitions' },
              { session: 'LG3', issue: 'encumbered-or-defeasible', label: 'Encumbered and defeasible titles' },
            ],
          },
          {
            id: 'what-is-good-title',
            title: 'What constitutes a good title?',
            summary: 'Not a perfect title. The test is whether there is a real risk the title is encumbered or defeasible, or whether the risk is merely illusory.',
            triggers: {
              bullets: [
                'A purchaser refuses to complete over a possibility of an encumbrance that nobody has ever asserted.',
                'A title document dating from the 1920s is missing and the Government has no record of it either.',
                'The vendor says the risk of the alleged encumbrance being asserted is fanciful.',
                'An unauthorised cockloft has stood in a shop in an older district for decades without any enforcement action.',
                'The purchaser demands that every conceivable blemish be cleared before he will complete.',
                'A deed of mutual covenant executed twenty years ago may have been invalidly executed, and nobody has ever complained.',
                'The court is asked to declare in favour of good title on a vendor and purchaser summons.',
                'The alleged defect is one of defeasibility — a right of re-entry — rather than an encumbrance.',
                'Both sides are said to have intended to see the transaction through to completion on the terms of their bargain.',
              ],
              routes: [
                { when: 'The argument is that the defect makes the title liable to be taken away', session: 'LG3', issue: 'encumbered-or-defeasible', label: 'Encumbered and defeasible titles' },
                { when: 'The defect is a breach of a Government lease covenant', session: 'LG1', issue: 'good-title-no-real-risk', label: 'Does the breach defeat title? The "no real risk" approach' },
                { when: 'The complaint is that the vendor answered the requisition with a bare assertion', session: 'LG4', issue: 'answering-requisitions', label: 'Answering requisitions with candour' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Applying the good title standard',
                steps: [
                  {
                    label: 'State the standard: a title the purchaser can hold against any challenger',
                    detail: 'A good title is such as will enable the purchaser to hold the property against any challenger. It need not be a perfect title.',
                    why: 'Perfection is unattainable in a system of deeds registration where documents go back a century and can be lost. A standard of perfection would make most Hong Kong property unsaleable.',
                    exam: {
                      write: 'A good title is one that will enable the purchaser to hold the property against any challenger; it need not be a perfect title free from every possible blemish.',
                      trap: 'Stating the standard as "free from defect". The degree of imperfection tolerated is the whole question.',
                    },
                    points: [
                      'The title need not be perfect.',
                      'The degree of imperfection tolerated was explained by Lord Russell in MEPC Ltd v Christian Edwards [1981] AC 205, HL.',
                    ],
                  },
                  {
                    label: 'Apply MEPC: beyond reasonable doubt, no risk of successful assertion',
                    detail: 'In MEPC Ltd v Christian Edwards [1981] AC 205, HL, Lord Russell held that if the facts and circumstances are so compelling to the mind of the court that it concludes beyond reasonable doubt that the purchaser will not be at risk of a successful assertion against him of the encumbrance, the court should declare in favour of a good title.',
                    why: 'Note what the test is about: the risk of a SUCCESSFUL assertion, not the existence of an argument. Somebody may always be able to make a claim; the question is whether it would get anywhere.',
                    exam: {
                      write: 'Applying MEPC Ltd v Christian Edwards [1981] AC 205, HL, the facts are so compelling that beyond reasonable doubt the purchaser will not be at risk of a successful assertion against him of [the encumbrance], and the court should declare in favour of a good title.',
                      trap: 'Confining MEPC to encumbrances. The lecture extends the test to embrace the concept that there is no real risk of the title being held defeasible, not merely encumbered.',
                    },
                    points: [
                      'The test is directed at the risk of a successful assertion.',
                      'It is extended to cover defeasibility as well as encumbrance.',
                    ],
                  },
                  {
                    label: 'Apply Kan Wing Yau: an illusory risk may be ignored',
                    detail: 'Godfrey J said in Kan Wing Yau v Hong Kong Housing Society HCMP 2436/1987, 1/12/1987, that if in a particular case the facts and circumstances are so compelling that, beyond any reasonable doubt, the risk is for all practical purposes illusory, the court can and should be prepared to ignore it and dismiss any objections to title founded upon it.',
                    why: 'This is the practical formulation the Hong Kong cases actually use. It puts the emphasis where a conveyancer needs it — on what could happen in practice, not on what is theoretically arguable.',
                    exam: {
                      write: 'The risk is, for all practical purposes, illusory, and the court can and should be prepared to ignore it and dismiss the objection to title founded upon it: Kan Wing Yau v Hong Kong Housing Society HCMP 2436/1987, 1/12/1987.',
                      trap: 'Asserting that the risk is illusory without setting out the facts that make it so. Polyson shows a bald assertion failing for exactly this reason.',
                    },
                    points: [
                      'Set out the facts and circumstances that make the risk illusory; do not simply assert it.',
                      'Kingdom Miles Ltd v Ever Crystal Ltd [2019] 1 HKLRD 643 is the worked example: two letters from the Director of Public Works dated 1923 to 1930 were missing and the Government had no record of them; it was unimaginable that the Government would assert further terms, and the risk of successful assertion of unknown encumbrances and obligations was nil.',
                    ],
                  },
                  {
                    label: 'Apply Mexon: the willing vendor and willing purchaser',
                    detail: 'In Mexon Holdings Ltd v Silver Bay International Ltd [2000] 1 HKLRD 935, CFA, Litton PJ held that title defects must be approached from the standpoint of a willing vendor and a willing purchaser, both possessed of reasonably robust common sense, both intending to see the transaction through to completion in terms of their own bargain.',
                    why: 'The standpoint is a device for keeping the analysis commercial. It rules out both the purchaser looking for an excuse to escape a bad bargain and the vendor hoping the purchaser will not look closely.',
                    exam: {
                      write: 'The question is to be approached from the standpoint of a willing vendor and a willing purchaser, both possessed of reasonably robust common sense, both intending to see the transaction through to completion in terms of their own bargain: Mexon Holdings Ltd v Silver Bay International Ltd [2000] 1 HKLRD 935, CFA, per Litton PJ.',
                      trap: 'Using Mexon only on good title. It does the same work on the time within which requisitions must be raised, and on whether a purchaser who suspects a defect should raise one.',
                    },
                    points: [
                      'The standard is robust common sense, not maximum caution.',
                      'Mexon is also used on the reasonableness of the time for raising requisitions: Goldmex Ltd v Edward Wong Finance Co Ltd [2006] 2 HKLRD 795.',
                    ],
                  },
                  {
                    label: 'Put the question in the form the lecture gives it',
                    detail: 'Everything above reduces to a single question that can be applied to any alleged defect, and reducing it that way is what makes the topic usable under exam conditions.',
                    why: 'Reducing the topic to one question is what makes it usable under exam conditions: everything above feeds into a single sentence that can be applied to any alleged defect.',
                    exam: {
                      write: 'The question is whether there is a real risk that the vendor\'s title is defective by reason of being encumbered or defeasible, or whether the risk is merely illusory.',
                      trap: 'Answering the question without naming which kind of defect is alleged. Encumbered and defeasible are different, and the consequences differ.',
                    },
                    points: [
                      'Is there a real risk that the title is encumbered?',
                      'Is there a real risk that the title is defeasible?',
                      'Or is the risk merely illusory?',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'MEPC is a House of Lords decision on encumbrances; the extension to defeasibility is made in the Hong Kong materials, so present it as such.',
                'Kingdom Miles shows the standard applied to a document nearly a century old — the age of the missing document and the Government\'s own lack of a record were both material.',
                'The willing-purchaser standpoint cuts both ways: it also means a purchaser who suspects a defect and stays silent is not behaving as a willing purchaser.',
                'Whether a defect goes to the root of the vendor\'s title, for late requisitions, is a related but distinct question — see the separate issue type.',
              ],
            },
            skeleton: {
              bullets: [
                'Identify the alleged defect precisely.',
                'Classify it as an encumbrance or a ground of defeasibility.',
                'State the MEPC standard and the Kan Wing Yau formulation.',
                'Set out the facts and circumstances bearing on the risk of successful assertion.',
                'Apply the willing vendor and willing purchaser standpoint.',
                'Conclude whether the risk is real or illusory.',
              ],
            },
            mistakes: {
              bullets: [
                'Requiring a perfect title.',
                'Asserting that a risk is illusory without the supporting facts.',
                'Applying MEPC to encumbrances only, and ignoring defeasibility.',
                'Treating the standard as a subjective one for the particular purchaser rather than the robust-common-sense standpoint.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'In my opinion, if the facts and circumstances of a case are so compelling to the mind of the court that the court concludes beyond reasonable doubt that the purchaser will not be at risk of a successful assertion against him of the incumbrance, the court should declare in favour of a good title.', cite: 'MEPC Ltd v Christian Edwards [1981] AC 205, HL, per Lord Russell, as reproduced in the LG3 notes' },
                { text: 'A good title does not mean a perfect title, free from every possible blemish. Whenever a question like this arises, it must be approached from the standpoint of a willing purchaser and a willing vendor, both possessed of reasonably robust common sense, both intending to see the transaction through to completion in terms of their own bargain.', cite: 'Mexon Holdings Ltd v Silver Bay International Ltd [2000] 1 HKLRD 935 at 942, per Litton PJ, as reproduced in the LG3 slides' },
              ],
              table: {
                headers: ['Point', 'Authority', 'What it establishes'],
                rows: [
                  ['The standard', 'MEPC Ltd v Christian Edwards [1981] AC 205, HL', 'No risk beyond reasonable doubt of a successful assertion of the encumbrance; extended in Hong Kong to defeasibility'],
                  ['Illusory risk', 'Kan Wing Yau v Hong Kong Housing Society HCMP 2436/1987, 1/12/1987', 'A risk that is for all practical purposes illusory may be ignored, per Godfrey J'],
                  ['The standpoint', 'Mexon Holdings Ltd v Silver Bay International Ltd [2000] 1 HKLRD 935, CFA', 'Willing vendor and willing purchaser with robust common sense, per Litton PJ'],
                  ['Applied to an ancient document', 'Kingdom Miles Ltd v Ever Crystal Ltd [2019] 1 HKLRD 643', 'Letters of 1923-1930 missing and unrecorded by Government; risk of successful assertion nil'],
                  ['Bald assertion insufficient', 'Polyson Jewellery Co Ltd v Liu Song Carlos [2002] 2 HKC 183, CA', 'All the surrounding circumstances must be taken into account; the key points must at least be referred to in the correspondence'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG3', issue: 'encumbered-or-defeasible', label: 'Encumbered and defeasible titles' },
              { session: 'LG4', issue: 'answering-requisitions', label: 'Answering requisitions with candour' },
              { session: 'LG1', issue: 'good-title-no-real-risk', label: 'Does the breach defeat title? The "no real risk" approach' },
            ],
          },
          {
            id: 'duty-to-give-title',
            title: 'The duty to give good title',
            summary: 'No rule of law compels it — the agreement does. And where it does, ask whether the legal estate or only the equitable interest must pass.',
            triggers: {
              bullets: [
                'The agreement adopts condition 9 of Part A of the Second Schedule to the Conveyancing and Property Ordinance.',
                'The sale and purchase agreement says nothing at all about title.',
                'The vendor argues that he never promised good title, only such title as he happens to have.',
                'The vendor can assign only an equitable interest because no certificate of compliance has yet issued.',
                'An uncompleted unit in a development is being sold under the Consent Scheme after consent to assign but before the certificate of compliance.',
                'The purchaser insists on being assigned the legal estate and the vendor says the equitable interest is enough.',
                'The agreement is an open contract with no express provision about the vendor\'s obligations.',
                'A pre-sale under the Consent Scheme is in issue and the developer has not yet had the legal estate vested in it.',
                'The parties dispute what was in their contemplation about the legal estate when the Government gave consent to assign.',
              ],
              routes: [
                { when: 'The vendor relies on a clause cutting the duty down', session: 'LG3', issue: 'exclusion-clauses', label: 'Excluding or limiting the duty to give title' },
                { when: 'The question is what standard a good title has to meet', session: 'LG3', issue: 'what-is-good-title', label: 'What constitutes a good title?' },
                { when: 'The question is what the vendor must physically hand over', session: 'LG3', issue: 'original-title-deeds', label: 'Original title deeds: common law and section 13A' },
                { when: 'The missing document is the certificate of compliance itself', session: 'LG1', issue: 'certificate-of-compliance', label: 'Proving compliance and the 1 January 1970 divide' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Finding and sizing the duty to give title',
                steps: [
                  {
                    label: 'Start from the proposition that the duty is contractual, not legal',
                    detail: 'There is no rule of law that requires a vendor to give good title. The extent of the obligation depends upon the terms of the sale and purchase agreement.',
                    why: 'Everything else in this issue type follows from that. If the duty comes from the contract, then the contract can enlarge it, cut it down, or be silent and let a term be implied — and the first job is always to read the document.',
                    exam: {
                      write: 'There is no rule of law requiring a vendor to give good title; the extent of the obligation depends on the terms of the sale and purchase agreement.',
                      trap: 'Asserting the duty as a matter of general law and never looking at the agreement.',
                    },
                    points: [
                      'Read the agreement before stating the duty.',
                      'The duty may be express, implied, excluded or limited.',
                    ],
                  },
                  {
                    label: 'Look for an express clause requiring good title',
                    detail: 'It is very common for the agreement to contain an express clause requiring the vendor to give good title, and such a term may perhaps be incorporated by adopting condition 9 of Part A of the Second Schedule to the Conveyancing and Property Ordinance, headed "GOOD TITLE": "The vendor shall give title to the property in accordance with section 13A of the Conveyancing and Property Ordinance."',
                    why: 'Condition 9 does two things at once: it imposes the duty and it chooses the statutory standard over the common law one. That second choice matters, because after De Monsa the common law duty may be the lighter of the two.',
                    exam: {
                      write: 'By clause [x], adopting condition 9 of Part A of the Second Schedule to the Conveyancing and Property Ordinance, the vendor is to give title to the property in accordance with s13A of that Ordinance.',
                      trap: 'Missing that the express clause fixes WHICH duty applies, not merely THAT one applies. The parties may instead contract for the common law duty.',
                    },
                    points: [
                      'Condition 9 of Part A of the Second Schedule points the duty at s13A of the Conveyancing and Property Ordinance.',
                      'The parties may instead expressly adopt the common law duty.',
                    ],
                  },
                  {
                    label: 'If the agreement is silent, imply the term',
                    detail: 'Where the agreement is silent as to title, as in an open contract, there will be an implied term that the vendor must give good title: Timmins v Moreland Street Property Co Ltd [1958] 1 Ch 110, confirmed in De Monsa Investments Ltd v Whole Win Management Fund Ltd (2013) 16 HKCFAR 419.',
                    why: 'The implication reflects what a purchaser is obviously buying. Nobody pays a market price for whatever title the vendor happens to have.',
                    exam: {
                      write: 'The agreement being silent as to title, there is an implied term that the vendor must give good title: Timmins v Moreland Street Property Co Ltd [1958] 1 Ch 110, confirmed in De Monsa Investments Ltd v Whole Win Management Fund Ltd (2013) 16 HKCFAR 419.',
                      trap: 'Treating silence as the absence of a duty. Silence produces the implied duty, not no duty.',
                    },
                    points: [
                      'Silence produces an implied term to give good title.',
                      'De Monsa confirmed the position in Hong Kong.',
                    ],
                  },
                  {
                    label: 'Ask whether the legal estate, or only the equitable interest, must pass',
                    detail: 'Whether an agreement to give good title means an agreement to pass the legal estate as distinct from merely the equitable interest depends upon the intention of the parties as evidenced by the terms of the agreement — an objective test — taking into account the context in which the transaction is to have effect.',
                    why: 'The agreement is invariably silent on this, so the intention has to be inferred from extrinsic circumstances. The default inference is the legal estate; the exception is where the context shows the parties knew it could not yet be vested.',
                    exam: {
                      write: 'Normally a vendor who agrees to give good title is construed as having agreed to assign the legal estate: Chen Paul v Lord Energy [1999] 1 HKC 1, [1999] 1 HKLRD 205, CFA.',
                      trap: 'Noting without qualification that Chen Paul decides the point. The Court of Final Appeal so held albeit on a concession by counsel.',
                    },
                    points: [
                      'The test is objective, on the terms of the agreement in context.',
                      'The agreement will invariably be silent, so the intention is inferred from extrinsic circumstances.',
                      'Normally the vendor is construed as having agreed to pass the legal estate.',
                      'Chen Paul v Lord Energy [1999] 1 HKC 1, [1999] 1 HKLRD 205, CFA, so held, albeit on a concession by counsel; the same conclusion was reached by Recorder Edward Chan SC in Tin Shui Wai Development Ltd v Polykin Ltd HCA 561/2004, 9/5/2006.',
                    ],
                  },
                  {
                    label: 'Check whether the context displaces the legal-estate inference',
                    detail: 'In Tin Shui Wai Development Ltd v Polykin Ltd HCA 561/2004, 9/5/2006, it was held that, where an uncompleted unit in a development is sold under the Consent Scheme following consent to assign but before the certificate of compliance has been issued, it would be in the contemplation of the parties that, when Government gave its consent to assign, the legal estate might not yet be vested in the developer.',
                    why: 'The inference is about what the parties must have meant, and parties who know a certificate of compliance has not issued cannot have meant the legal estate. The Consent Scheme timing is what supplies that knowledge.',
                    exam: {
                      write: 'The sale being of an uncompleted unit under the Consent Scheme following consent to assign but before the certificate of compliance, it was in the parties\' contemplation that the legal estate might not yet be vested in the developer, which therefore gave good title by assigning the equitable interest.',
                      trap: 'Confining this to sales by a developer of an uncompleted unit. That is where the two decisions arose, so do not extend it further than the facts support.',
                    },
                    points: [
                      'The developer would give good title even where it was only in a position to assign the equitable interest.',
                      'The same conclusion was reached by the Court of Appeal on a pre-sale under the Consent Scheme in Pang Moon Kwan v Concord Property Development Ltd CACV 55/2006, 30/11/2006.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'Condition 9 of Part A of the Second Schedule is the standard route to an express good-title clause, and it selects s13A rather than the common law.',
                'Chen Paul was decided on a concession by counsel on this point — say so rather than presenting it as full argument.',
                'Where the vendor holds only an equitable interest because positive conditions have not been complied with, there may be no intermediate root document at all, which has consequences for showing title.',
                'A vendor who knows his title is defective should exclude or limit the duty rather than rely on argument later.',
              ],
            },
            skeleton: {
              bullets: [
                'Read the agreement for an express good-title clause, and identify which standard it selects.',
                'If silent, imply the duty under Timmins and De Monsa.',
                'Decide whether the legal estate or the equitable interest must pass, objectively and in context.',
                'Check whether a Consent Scheme timing point displaces the ordinary inference.',
                'Then apply the good title standard to the alleged defect.',
              ],
            },
            mistakes: {
              bullets: [
                'Stating the duty to give good title as a rule of law.',
                'Ignoring the choice condition 9 makes between s13A and the common law.',
                'Assuming the equitable interest always suffices, or never does.',
                'Forgetting that a vendor with only an equitable interest may have no intermediate root to produce.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Source', 'What it establishes'],
                rows: [
                  ['No rule of law', 'Lecture note', 'The extent of the duty depends on the terms of the sale and purchase agreement'],
                  ['Express clause', 'Condition 9, Part A, Second Schedule, Conveyancing and Property Ordinance (Cap. 219)', '"The vendor shall give title to the property in accordance with section 13A"'],
                  ['Implied term', 'Timmins v Moreland Street Property Co Ltd [1958] 1 Ch 110; De Monsa Investments Ltd v Whole Win Management Fund Ltd (2013) 16 HKCFAR 419', 'Where the agreement is silent, good title is an implied term'],
                  ['Legal estate normally', 'Chen Paul v Lord Energy [1999] 1 HKC 1, [1999] 1 HKLRD 205, CFA', 'A vendor who agrees to give good title has an obligation to assign the legal estate (on a concession by counsel)'],
                  ['Same', 'Tin Shui Wai Development Ltd v Polykin Ltd HCA 561/2004, 9/5/2006', 'Recorder Edward Chan SC reached the same conclusion'],
                  ['Context may displace it', 'Tin Shui Wai Development Ltd v Polykin Ltd', 'Consent Scheme sale of an uncompleted unit before the certificate of compliance; equitable interest sufficed'],
                  ['Same on a pre-sale', 'Pang Moon Kwan v Concord Property Development Ltd CACV 55/2006, 30/11/2006', 'Court of Appeal, pre-sale under the Consent Scheme'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG3', issue: 'exclusion-clauses', label: 'Excluding or limiting the duty to give title' },
              { session: 'LG3', issue: 'original-title-deeds', label: 'Original title deeds: common law and section 13A' },
              { session: 'LG1', issue: 'certificate-of-compliance', label: 'Proving compliance and the 1 January 1970 divide' },
              { session: 'LG4', issue: 'intermediate-root', label: 'The intermediate root of title' },
              { session: 'LG1', issue: 'ddh-and-approvals', label: 'DDH clauses, alienation and other required approvals' },
            ],
          },
          {
            id: 'exclusion-clauses',
            title: 'Excluding or limiting the duty to give title',
            summary: 'Contra proferentem, and a clause that would let the vendor mislead the purchaser will not be construed to do it.',
            triggers: {
              bullets: [
                'The agreement says the purchaser will accept the title of the vendor and agrees to raise no requisitions thereon.',
                'The agreement says the vendor agrees to sell only such title as he holds.',
                'The purchaser is deemed to purchase with full knowledge of all defects and to assume that a named power of attorney was valid and unrevoked.',
                'The clause excludes defects in the condition of the property and the defect complained of is one of title.',
                'The vendor\'s solicitors knew of the defect and the purchaser did not.',
                'The purchaser was acting for a professional speculator and bought several houses in the same development.',
                'The vendor gave no warranty as to unauthorised structures and the purchaser now complains of illegal structures.',
                'An occupation permit restricted the premises to office use and they were plainly being run as a karaoke bar.',
                'The formal agreement contains a limiting clause that the binding preliminary agreement did not.',
                'The agreement contains an "as is" clause and the complaint is about unauthorised building works.',
              ],
              routes: [
                { when: 'The question is whether the purchaser accepted the defect after the contract', session: 'LG3', issue: 'purchaser-waiver', label: 'Waiver by the purchaser of his right to object' },
                { when: 'The question is whether there is a duty to give good title at all', session: 'LG3', issue: 'duty-to-give-title', label: 'The duty to give good title' },
                { when: 'The argument is that the defect was visible on inspection', session: 'LG3', issue: 'patent-defects', label: 'Encumbrances expressly subject to, and patent defects' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Testing an exclusion or limiting clause',
                steps: [
                  {
                    label: 'Identify the clause and read it contra proferentem',
                    detail: 'It is a matter of construction whether a particular exclusion or limiting clause has been drafted with sufficient width and clarity to limit the title that a vendor must show and give. Exclusion clauses are construed contra proferentem, against the party seeking to rely upon them.',
                    why: 'The vendor wrote the clause and takes the benefit of it, so any looseness in the drafting is his problem. That is also why a clause about the condition of the property will not stretch to cover title.',
                    exam: {
                      write: 'Clause [x] falls to be construed contra proferentem against the vendor, who seeks to rely upon it.',
                      trap: 'Letting a condition clause do the work of a title clause. An exclusion clause which embraces defects in the condition of the property will not be construed as extending to defects in the title, and vice versa.',
                    },
                    points: [
                      'The words must be of sufficient ambit and precision to limit the title the vendor is contractually bound to give.',
                      'A clause about the condition of the property does not extend to title, and vice versa.',
                    ],
                  },
                  {
                    label: 'Ask whether the clause would allow the purchaser to be misled',
                    detail: 'The courts may decide that the limiting clause does not, as a matter of construction, extend to protect the vendor, notwithstanding the ambit of the words used, on the ground that the purchaser has been misled: Jumbo King Ltd v Faithful Properties Ltd [1999] 3 HKLRD 757, [1999] 4 HKC 707, CFA.',
                    why: 'Lord Hoffmann put it as construction rather than as a rule of public policy: no purchaser would sign a contract bare-faced enough to stipulate that the vendor need not disclose serious defects of which he had actual knowledge, so the clause is not read that way.',
                    exam: {
                      write: 'Following Jumbo King, the only rule of construction is that the courts will avoid construing a contract so as to enable a purchaser to be misled; the question is whether the purchaser would have been aware of the risk he was being asked to take.',
                      trap: 'Presenting this as a rule invalidating the clause. It is a rule of construction — the clause is read as not covering the case, not struck down.',
                    },
                    points: [
                      'The vendor must not mislead the purchaser in any way; a sufficient indication of the risk must be given before the contract is made.',
                      'It is inconceivable that a term will be construed as enabling a vendor to impose upon a purchaser a serious defect in title of which he actually knew.',
                      'The position is different if the vendor did not actually know of the defect but had the means of knowledge, or if the matter was technically a defect but something a purchaser might reasonably accept.',
                      'If the vendor relies on the contract to shift the risk of a defect to the purchaser, the language must clearly do so.',
                    ],
                  },
                  {
                    label: 'Work out what each party knew',
                    detail: 'Knowledge may be actual, constructive (Becker v Partridge [1966] 2 QB 155) or imputed — knowledge held by one\'s agent or servant. The sophistication of the parties in conveyancing matters may be relevant to whether a party has constructive knowledge.',
                    why: 'The inquiry is comparative. What matters is not that the vendor knew, but that he knew and the purchaser did not — because that is what makes the clause a means of misleading.',
                    exam: {
                      write: 'The vendor had [actual / constructive / imputed] knowledge of [the defect] which the purchaser did not share, so the limiting clause is not, as a matter of construction, effective against the purchaser.',
                      trap: 'Ignoring the purchaser\'s own sophistication. An experienced dealer in real estate is likely to have constructive knowledge of unauthorised building works where an inexperienced buyer is not.',
                    },
                    points: [
                      'Constructive knowledge: Becker v Partridge [1966] 2 QB 155.',
                      'Imputed knowledge: Rignall Developments Ltd v Halil [1987] 3 All ER 170 — the vendor\'s solicitors knew of a defect unknown to the purchaser, and the purchaser was not bound by the limiting clause.',
                      'Ip Kam Wah v Fair City Group Ltd [2005] 4 HKLRD 168: the purchaser acted for a professional speculator; the limiting clause was clear and the purchaser an experienced dealer in real estate, so it was effective — though it would be good practice for the vendor to list all possible illegal structures.',
                      'Kamos Ltd v Chan Chun Chung Howard HCA 9184/2000, 30/12/2004: "purchaser accepts such title as vendor has" was effective, the parties being capable adults who should look after their own interests, per Reyes J.',
                    ],
                  },
                  {
                    label: 'Note that there is no free-standing duty of disclosure',
                    detail: 'In Join Union Investment Ltd v China Tree Investment Ltd [2016] 2 HKLRD 901, Anderson Chow J observed that the issue of the vendor\'s knowledge of a defect only became relevant when the vendor sought to rely on a contractual provision limiting the title to be proved or given.',
                    why: 'This is the tidy statement of the whole topic: knowledge is not a duty, it is a filter on the clause. Without the clause, the vendor\'s knowledge is beside the point, because he must give good title regardless.',
                    exam: {
                      write: 'There is no implied term that a vendor who agrees to give good title must make full and frank disclosure of all latent defects; the vendor\'s knowledge matters only where he seeks to rely on a limiting provision: Join Union Investment Ltd v China Tree Investment Ltd [2016] 2 HKLRD 901.',
                      trap: 'Allowing the vendor to plead his own ignorance. Where a vendor agrees to give good title, it is no defence that he did not know of any defects when the contract was made.',
                    },
                    points: [
                      'No implied term of full and frank disclosure of latent defects where the vendor agrees to give good title.',
                      'It is no defence that the vendor did not know of the defects at the time of contracting.',
                      'Where the vendor relies on an exclusion or limiting provision, his knowledge — actual and perhaps constructive — may affect whether he can rely on it.',
                      'The proper inquiry is whether, on the true construction of the limitation provision, it was intended to apply to the relevant defect notwithstanding the vendor\'s knowledge of it: Jumbo King Ltd v Faithful Properties Ltd (1999) 2 HKCFAR 279 at 299.',
                    ],
                  },
                  {
                    label: 'Check the two clauses that do not work',
                    detail: 'A limiting clause may not be added to the formal agreement where there is already a binding preliminary agreement in which the vendor has expressly or impliedly agreed to give good title, unless the purchaser agrees. And an "as is" clause is not a limiting clause at all.',
                    why: 'Both are the same point in different clothes: the vendor cannot improve his position unilaterally after the bargain is struck, and a clause about the state of the property was never about title in the first place.',
                    exam: {
                      write: 'The binding preliminary agreement having contained an [express / implied] obligation to give good title, the limiting clause could not be added to the formal agreement without the purchaser\'s agreement: DH Shuttlecocks Ltd v Keung Shiu Tang [1994] 1 HKC 286, CA.',
                      trap: 'Reading an "as is" clause as an exclusion of title obligations. It simply means the vendor is not required to improve the property before sale.',
                    },
                    points: [
                      'Chu Wing Ning v Ngan Hing Cheung HCA 9409/1991, 6/11/1992; DH Shuttlecocks Ltd v Keung Shiu Tang [1994] 1 HKC 286, CA.',
                      '"As is" means only that the vendor need not improve the property prior to sale: Leung Wing Fai v Onlink Investment Ltd [2000] 1 HKLRD 725.',
                      'It has no effect as an exclusion clause in respect of unauthorised building works: All Ports Holdings Ltd v Grandfix Ltd [2001] 2 HKLRD 630.',
                    ],
                  },
                  {
                    label: 'Advise the vendor on what to do about it',
                    detail: 'At bottom this is a drafting problem with a short drafting answer: identify the defect in the agreement, or before it. That is what turns a clause the court will read down into one it will enforce.',
                    why: 'The topic is at bottom a drafting problem, and the drafting answer is short: identify the defect in the contract or before it. That is what turns a clause the court will read down into one it will enforce.',
                    exam: {
                      write: 'To render the exclusion clause effective, the vendor should bring [the defect] to the purchaser\'s attention either in the sale and purchase agreement or before the agreement is concluded.',
                      trap: 'Advising a general exclusion where the vendor knows of a specific defect. Specificity is what defeats the misleading argument.',
                    },
                    points: [
                      'Where the vendor has actual knowledge of a defect, he should bring it to the purchaser\'s attention in or before the agreement.',
                      'It is good practice, though not a rule of law, to list all possible illegal structures where that is the defect relied on: Ip Kam Wah v Fair City Group Ltd [2005] 4 HKLRD 168.',
                      'Consider whether removing the unauthorised structure before completion would remedy the defect instead.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'Jumbo King appears in this course in two quite different roles — construing a deed of mutual covenant in LG2, and construing a limiting clause here. The reports differ too: [1999] 3 HKLRD 757, [1999] 4 HKC 707 for the limiting-clause point.',
                'Billion Profit Enterprises Ltd v Global Fly Development Ltd HCA 712/1999, 4/8/1999: the limiting clause worked even though the vendor had not told the purchaser of the change of use, because use as a karaoke bar was patent.',
                'Wah Ying Properties Ltd v Sound Cash [1994] 1 HKC 786 is the other way: the clause was ineffective where a remedial order had been issued by the Building Authority, known to the vendor and not the purchaser.',
                'Exclusion clauses in respect of misrepresentation or misstatement are a separate topic, dealt with later in the course.',
              ],
            },
            skills: {
              bullets: [
                'Set out the clause verbatim before construing it. The argument is always about its exact words.',
                'Deal with the two limbs in order: is the clause wide enough, and would it mislead? A clause can fail on either.',
                'When advising a vendor, draft the disclosure into the agreement rather than relying on a general exclusion.',
              ],
            },
            skeleton: {
              bullets: [
                'Set out the clause and identify what it purports to exclude.',
                'Construe it contra proferentem and test its ambit against the defect alleged.',
                'Establish the vendor\'s knowledge — actual, constructive or imputed.',
                'Establish the purchaser\'s knowledge and sophistication.',
                'Ask whether the purchaser would have been aware of the risk he was being asked to take.',
                'Check for a binding preliminary agreement and for an "as is" clause.',
                'Conclude on whether the clause protects the vendor.',
              ],
            },
            mistakes: {
              bullets: [
                'Treating the misleading point as a rule of law rather than of construction.',
                'Applying a condition-of-property clause to a title defect.',
                'Allowing a limiting clause to be introduced for the first time in the formal agreement.',
                'Treating an "as is" clause as an exclusion of title obligations.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'it is inconceivable that a term will be construed as enabling a vendor to impose upon a purchaser a serious defect in title of which he actually knew. No purchaser would sign a contract which was bare-faced enough to stipulate expressly that the vendor need not disclose serious defects in title of which he had actual knowledge and, even if there was no objection on grounds of public policy, nothing less than the most express language would do.', cite: 'Jumbo King Ltd v Faithful Properties Ltd, as reproduced in the LG3 slides' },
              ],
              table: {
                headers: ['Point', 'Authority', 'What it establishes'],
                rows: [
                  ['Construction against the vendor', 'Contra proferentem', 'The words must be of sufficient ambit and precision; a condition clause does not cover title'],
                  ['Misleading the purchaser', 'Jumbo King Ltd v Faithful Properties Ltd [1999] 3 HKLRD 757, [1999] 4 HKC 707, CFA', 'The clause is construed so as not to let the purchaser be misled; the test is whether he would have been aware of the risk'],
                  ['Constructive knowledge', 'Becker v Partridge [1966] 2 QB 155', 'Knowledge includes constructive knowledge'],
                  ['Imputed knowledge', 'Rignall Developments Ltd v Halil [1987] 3 All ER 170', 'The vendor\'s solicitor\'s knowledge imputed to the client; purchaser not bound'],
                  ['Sophisticated purchaser', 'Ip Kam Wah v Fair City Group Ltd [2005] 4 HKLRD 168', 'Clear clause plus an experienced dealer in real estate; clause effective'],
                  ['Capable adults', 'Kamos Ltd v Chan Chun Chung Howard HCA 9184/2000, 30/12/2004', '"Purchaser accepts such title as vendor has" effective, per Reyes J'],
                  ['Vendor knew, purchaser did not', 'Wah Ying Properties Ltd v Sound Cash [1994] 1 HKC 786', 'Clause ineffective where a Building Authority remedial order was known only to the vendor'],
                  ['Patent change of use', 'Billion Profit Enterprises Ltd v Global Fly Development Ltd HCA 712/1999, 4/8/1999', 'Clause effective despite non-disclosure, the karaoke use being patent'],
                  ['No duty of disclosure', 'Join Union Investment Ltd v China Tree Investment Ltd [2016] 2 HKLRD 901', 'No implied term of full and frank disclosure; knowledge matters only when relying on a limiting provision'],
                  ['Not in the formal agreement alone', 'Chu Wing Ning v Ngan Hing Cheung HCA 9409/1991, 6/11/1992; DH Shuttlecocks Ltd v Keung Shiu Tang [1994] 1 HKC 286, CA', 'A limiting clause cannot be added where a binding preliminary agreement already imposed the duty'],
                  ['"As is"', 'Leung Wing Fai v Onlink Investment Ltd [2000] 1 HKLRD 725; All Ports Holdings Ltd v Grandfix Ltd [2001] 2 HKLRD 630', 'Not a limiting clause; means only that the vendor need not improve the property; no effect on unauthorised building works'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG3', issue: 'purchaser-waiver', label: 'Waiver by the purchaser of his right to object' },
              { session: 'LG3', issue: 'patent-defects', label: 'Encumbrances expressly subject to, and patent defects' },
              { session: 'LG4', issue: 'requisitions-out-of-time', label: 'Raising requisitions out of time' },
              { session: 'LG3', issue: 'documents-of-title', label: 'Which documents are documents of title?' },
            ],
          },
          {
            id: 'purchaser-waiver',
            title: 'Waiver by the purchaser of his right to object',
            summary: 'Three requirements: knowledge of the defect, knowledge of its legal significance, and an unequivocal act. Not raising a requisition is none of them.',
            triggers: {
              bullets: [
                'The purchaser, knowing of the defect, sent the draft assignment to the vendor for execution.',
                'Clear words in correspondence between the parties show the purchaser accepting the title notwithstanding the defect.',
                'The purchaser had been informed of the alterations and the contractual time limit for raising requisitions had passed.',
                'The purchaser wrote letters that did not raise the cockloft point but reserved the right to raise further requisitions.',
                'The purchaser inspected the flat before entering into the agreement and only later raised a requisition about unauthorised partitioning.',
                'An experienced buyer signed the provisional agreement knowing the cockloft was an irremovable unauthorised structure.',
                'The purchaser never raised any requisition and the vendor says he has thereby accepted the title.',
                'The purchaser knew the facts but says he did not understand their legal consequences.',
                'The vendor argues that the purchaser elected to affirm the contract with full knowledge of his right to rescind.',
              ],
              routes: [
                { when: 'The argument is about a clause in the contract rather than conduct after it', session: 'LG3', issue: 'exclusion-clauses', label: 'Excluding or limiting the duty to give title' },
                { when: 'The argument is that the vendor waived his objection to a late requisition', session: 'LG4', issue: 'requisitions-out-of-time', label: 'Raising requisitions out of time' },
                { when: 'The question is whether there is a defect at all', session: 'LG3', issue: 'what-is-good-title', label: 'What constitutes a good title?' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Testing a waiver by the purchaser',
                steps: [
                  {
                    label: 'State the three requirements',
                    detail: 'To constitute waiver: the purchaser must have knowledge of the defect in title; he must have knowledge of the legal significance of that defect; and he must unequivocally, by words or conduct, waive his right to rescind based upon it.',
                    why: 'The middle requirement is what makes waiver hard to establish and is the one candidates drop. A purchaser can see a cockloft without knowing that it is a blot on title he could rescind for.',
                    exam: {
                      write: 'Waiver requires (i) knowledge of the defect in title, (ii) knowledge of its legal significance, and (iii) an unequivocal waiver, by words or conduct, of the right to rescind based upon it.',
                      trap: 'Establishing knowledge of the facts and stopping there. Regent Summit requires the purchaser to have understood the legal consequences of those facts.',
                    },
                    points: [
                      'The act must show that the purchaser has unequivocally accepted the vendor\'s title notwithstanding the defect.',
                      'This is a question of fact in each case: Chan Kin Leung v Lok Kar Cheong HCMP 3993/1997, 14/5/1998.',
                    ],
                  },
                  {
                    label: 'Apply Regent Summit on the knowledge requirement',
                    detail: 'In Regent Summit (Hong Kong) Ltd v Smart Business (Asia) Ltd [1998] 2 HKC 718 it was held that there was no waiver by the purchaser until he not only knew of the alleged facts which might give rise to a requisition but understood the legal consequences of those facts. The holding was not disturbed on appeal, CACV 138/1998.',
                    why: 'Without the second limb, a purchaser would lose his rights simply by being told something he did not understand. The requirement keeps waiver an election rather than an accident.',
                    exam: {
                      write: 'The purchaser knew of [the facts], but there is no evidence that he understood their legal consequences, so there is no waiver: Regent Summit (Hong Kong) Ltd v Smart Business (Asia) Ltd [1998] 2 HKC 718.',
                      trap: 'Missing that the knowledge in question presumably includes constructive and imputed knowledge — the lecture flags both limbs as open on that point.',
                    },
                    points: [
                      'In Regent Summit the purchaser had been informed of the alterations and the contractual time limit for raising requisitions had passed, yet the evidence of understanding of the legal implications was insufficient.',
                      'Poon Mee Kuen v Luk Yuk Chun HCMP 1431/2004, 18/1/2005: the purchaser had inspected a partitioned flat before contracting; before his knowledge of the facts could prejudice his position he must also be aware of the legal consequences, per Arjan Sakhrani J.',
                    ],
                  },
                  {
                    label: 'Apply the election analysis from The Kanchenjunga',
                    detail: 'In Large Land Investments Ltd v Cheung Siu Kwai Pansy [2003] 1 HKLRD 313, Yuen JA approved the tests for waiver laid down by the House of Lords in Motor Oil Hellas (Corinth) Refineries SA v Shipping Corpn of India ("The Kanchenjunga") [1990] 1 Lloyd\'s Rep 391, HL, at 397, per Lord Goff.',
                    why: 'Framing waiver as election explains why communication matters: a party who abandons a right has to tell the other side, in clear and unequivocal terms, or the other side cannot order its affairs.',
                    exam: {
                      write: 'Applying The Kanchenjunga as approved in Large Land Investments Ltd v Cheung Siu Kwai Pansy [2003] 1 HKLRD 313, the purchaser [has / has not] communicated an election to abandon his right in clear and unequivocal terms.',
                      trap: 'Forgetting that a reservation defeats the unequivocal element. In Large Land the letters did not raise the cockloft point but reserved the right to raise further requisitions, and that was not waiver.',
                    },
                    points: [
                      'A waiver by election occurs when a state of affairs comes into existence in which one party becomes entitled, under the contract or the general law, to exercise a right and must decide whether to do so.',
                      'It is a prerequisite that the party electing is first aware of the facts giving rise to the right.',
                      'It may be that he must also be aware of his legal right of affirming or rescinding where there has been repudiation by the other party.',
                      'Since a party who elects not to exercise a right is abandoning it, he will only be held to have done so if he communicated his election to the other party in clear and unequivocal terms.',
                    ],
                  },
                  {
                    label: 'Look for conduct that is unequivocal',
                    detail: 'Waiver may occur, for example, where the purchaser in full knowledge of a defect sends the draft assignment to the vendor for execution: Chan Kam Hung v Light Ltd DCCJ 16919/1992, 1/6/1993.',
                    why: 'Sending the assignment for execution is a step that only makes sense if you intend to complete. That is what makes it unequivocal in a way that silence never is.',
                    exam: {
                      write: 'By sending the draft assignment to the vendor for execution with full knowledge of [the defect], the purchaser unequivocally accepted the vendor\'s title.',
                      trap: 'Inferring waiver from correspondence that merely notes an answer. "Noted" is an acknowledgment, not an abandonment.',
                    },
                    points: [
                      'Clear words in correspondence may suffice: Chan Kin Leung v Lok Kar Cheong HCMP 3993/1997, 14/5/1998.',
                      'Sending the draft assignment for execution with knowledge of the defect: Chan Kam Hung v Light Ltd DCCJ 16919/1992, 1/6/1993.',
                      'Billion Best (Hong Kong) Ltd v Amity Investment Co Ltd HCMP 2263/1998 is also cited on waiver.',
                    ],
                  },
                  {
                    label: 'Note how easily the requirements can be met in practice',
                    detail: 'The lecture warns that these requirements can be easily satisfied in the conveyancing context. In Cheer Sky Ltd v Chan Yuet Sheung [2019] HKCFI 606, DHCJ A. To held that a waiver was inferred from the purchaser\'s conduct of entering into a provisional agreement with knowledge of an irrevocable defect caused by unauthorised building works.',
                    why: 'Cheer Sky is the counterweight to Regent Summit. Where the purchaser is experienced and the defect is plainly irremovable, the court will infer both limbs of knowledge from the decision to contract at all.',
                    exam: {
                      write: 'The purchaser, with his experience, must have known that the [cockloft] was unauthorised building works and that the defect was irremovable, and by entering into the provisional agreement with that knowledge waived the implied obligation to give good title arising out of it.',
                      trap: 'Treating Cheer Sky as inconsistent with Regent Summit. The difference is the experience of the purchaser and the obviousness that the defect could not be cured.',
                    },
                    points: [
                      'The structures stood no chance of being legalised by the Building Authority, and the defect could not be removed by the parties to the provisional agreement.',
                      'By inference, with his experience, the purchaser must have known the defect was irremovable.',
                      'The waiver was of the implied obligation on the vendor to give good title arising out of the structures.',
                    ],
                  },
                  {
                    label: 'Rule out the two things that are NOT waiver',
                    detail: 'There is no duty upon a purchaser to raise a requisition, and failure to do so will not constitute a waiver of his right to object to the vendor\'s title at completion and rescind: Profit World Trading Ltd v Ho So Yung [2011] 2 HKC 473, CA.',
                    why: 'The contrary rule would reverse the legal burden of giving good title. That is the same reasoning that keeps the duties of giving and showing title independent.',
                    exam: {
                      write: 'The purchaser\'s failure to raise a requisition is not a waiver of his right to object to the title at completion: Profit World Trading Ltd v Ho So Yung [2011] 2 HKC 473, CA.',
                      trap: 'Overlooking the tension the lecture itself notes: a purchaser who suspects a defect and stays silent may not be behaving as a willing purchaser under Mexon, which may be a repudiatory breach or a waiver.',
                    },
                    points: [
                      'Failure to raise a requisition is not a waiver.',
                      'A reservation of the right to raise further requisitions is not a waiver: Large Land Investments Ltd v Cheung Siu Kwai Pansy [2003] 1 HKLRD 313.',
                      'But no willing purchaser would remain silent suspecting a defect and refuse to complete; such conduct might be a repudiatory breach or a waiver: Mexon Holdings Ltd v Silver Bay International Ltd [2000] 1 HKLRD 935, CFA.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'Construction and waiver are different questions. Construction asks what the clause means; waiver asks whether, there being a breach, the purchaser has decided to complete anyway.',
                'The lecture leaves open whether the knowledge required is actual only, or includes constructive and imputed knowledge — flag it rather than assuming.',
                'Regent Summit and Cheer Sky are the two poles. The purchaser\'s experience and the curability of the defect are what separate them.',
                'Waiver by the purchaser and waiver by the vendor of a late requisition are separate topics with different tests.',
              ],
            },
            skeleton: {
              bullets: [
                'Identify the defect and when the purchaser learned of the facts.',
                'Establish knowledge of the legal significance, not merely of the facts.',
                'Identify the act or words said to constitute waiver and test them for unequivocality.',
                'Apply the election analysis and the requirement of communication.',
                'Rule out the non-waivers: failure to raise a requisition, a reservation of rights.',
                'Conclude, and say what the purchaser can still do at completion.',
              ],
            },
            mistakes: {
              bullets: [
                'Treating knowledge of the facts as enough.',
                'Inferring waiver from silence or from failure to raise a requisition.',
                'Reading a reservation of the right to raise further requisitions as an acceptance.',
                'Confusing waiver by the purchaser of a defect with waiver by the vendor of a late requisition.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'On my finding by inference, Luk Yu Wa knew that the cockloft constituted unauthorised building works which is a blot in title. This defect in title cannot be removed by the parties to the Provisional Agreement. It can only be removed by removing the Structures which was part of what the parties had contracted to buy and sell or by seeking approval from the Building Authority to have the Structure "legalized".', cite: 'Cheer Sky Ltd v Chan Yuet Sheung [2019] HKCFI 606 at [114], as reproduced in the LG3 notes' },
              ],
              table: {
                headers: ['Point', 'Authority', 'What it establishes'],
                rows: [
                  ['The three requirements', 'Lecture conclusion', 'Knowledge of the defect, knowledge of its legal significance, unequivocal waiver'],
                  ['Question of fact', 'Chan Kin Leung v Lok Kar Cheong HCMP 3993/1997, 14/5/1998', 'Waiver by clear words in correspondence'],
                  ['Sending the assignment', 'Chan Kam Hung v Light Ltd DCCJ 16919/1992, 1/6/1993', 'Sending the draft assignment for execution with knowledge of the defect'],
                  ['Legal consequences required', 'Regent Summit (Hong Kong) Ltd v Smart Business (Asia) Ltd [1998] 2 HKC 718; CACV 138/1998', 'No waiver until the purchaser understood the legal consequences of the facts'],
                  ['Same', 'Poon Mee Kuen v Luk Yuk Chun HCMP 1431/2004, 18/1/2005', 'Knowledge of facts insufficient without awareness of legal consequences, per Arjan Sakhrani J'],
                  ['Election', 'Large Land Investments Ltd v Cheung Siu Kwai Pansy [2003] 1 HKLRD 313; The Kanchenjunga [1990] 1 Lloyd\'s Rep 391, HL at 397', 'Awareness of the facts, and communication of the election in clear and unequivocal terms'],
                  ['Inferred waiver', 'Cheer Sky Ltd v Chan Yuet Sheung [2019] HKCFI 606', 'Waiver inferred from entering the provisional agreement with knowledge of an irremovable defect'],
                  ['Not a waiver', 'Profit World Trading Ltd v Ho So Yung [2011] 2 HKC 473, CA', 'Failure to raise a requisition is not a waiver'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG3', issue: 'exclusion-clauses', label: 'Excluding or limiting the duty to give title' },
              { session: 'LG3', issue: 'twin-duties', label: 'The twin duties of giving and showing title' },
              { session: 'LG4', issue: 'requisitions-out-of-time', label: 'Raising requisitions out of time' },
            ],
          },
          {
            id: 'encumbered-or-defeasible',
            title: 'Encumbered and defeasible titles',
            summary: 'An encumbrance is a third-party interest in the land; defeasibility is a real risk the title will be taken away. Different labels, different consequences.',
            triggers: {
              bullets: [
                'A third party claims an equitable interest in the flat under a resulting trust.',
                'An uncompleted sale and purchase agreement is registered against the title.',
                'The original title deeds were deposited with a lender and nothing was registered.',
                'The Government has served a notice of re-entry for breach of a covenant in the Conditions of Grant.',
                'The Building Authority has remedied unauthorised building works and may sell the property to recover its expenses.',
                'The incorporated owners are threatening enforcement action over a significant breach of the deed of mutual covenant.',
                'A mortgagee is exercising its power of sale over the property being sold.',
                'The assignment to the present owner is liable to be set aside as a conveyance to defraud creditors.',
                'A right of way and a restrictive covenant are both registered against the property.',
              ],
              routes: [
                { when: 'The question is the standard the title must meet', session: 'LG3', issue: 'what-is-good-title', label: 'What constitutes a good title?' },
                { when: 'The interest complained of was registrable and was never registered', session: 'LG3', issue: 'unregistered-encumbrances', label: 'Registrable encumbrances that are unregistered' },
                { when: 'The sale is expressly subject to the interest, or it is visible on inspection', session: 'LG3', issue: 'patent-defects', label: 'Encumbrances expressly subject to, and patent defects' },
                { when: 'The vendor could remove the interest himself before completion', session: 'LG4', issue: 'mere-conveyance', label: 'Matters of mere conveyance' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Classifying the defect',
                steps: [
                  {
                    label: 'Identify the interest or risk complained of',
                    detail: 'There are very many factors that might cause a title to be defective. The distinction between an encumbered and a defeasible title must be understood at the outset.',
                    why: 'The label is not decorative. An encumbrance leaves the owner with the land but burdened; defeasibility means he may lose it altogether. The second is far more likely to be repudiatory.',
                    exam: {
                      write: 'The defect alleged is [the equitable interest of X / the right of re-entry / the mortgagee\'s power of sale], which renders the title [encumbered / defeasible].',
                      trap: 'Using "defect" as the whole answer. Both encumbered and defeasible titles are defective; the question is which.',
                    },
                    points: [
                      'All titles which are either encumbered or defeasible are defective, that is not good titles.',
                      'Classify first, then ask about significance.',
                    ],
                  },
                  {
                    label: 'Test for an encumbrance: a third party has an interest in the land',
                    detail: 'A title is encumbered where, for example, a third party has an equitable interest in the property by way of an express, resulting or constructive trust; or there is an uncompleted sale and purchase agreement or right of way registered against the title; or there is a restrictive covenant or lease affecting the title. An equitable mortgage by deposit of original title deeds will also render the title encumbered.',
                    why: 'An encumbrance is something the purchaser would take subject to. The list is a list of interests that survive a sale and bind the buyer.',
                    exam: {
                      write: '[X] has an interest in the property by way of [a resulting trust / a registered right of way / an equitable mortgage by deposit of title deeds], so the title is encumbered.',
                      trap: 'Calling every encumbrance a defeasibility. An encumbrance that leaves no real risk of the title being taken away is an encumbrance, not a defeasibility.',
                    },
                    points: [
                      'Express, resulting or constructive trusts.',
                      'An uncompleted sale and purchase agreement registered against the title.',
                      'A right of way, restrictive covenant or lease affecting the title.',
                      'An equitable mortgage by deposit of original title deeds.',
                    ],
                  },
                  {
                    label: 'Test for defeasibility: a real risk the title will be taken away',
                    detail: 'A title is rendered defeasible where it can be taken away from the owner by some other person.',
                    why: 'The consequence is what separates the two: an encumbered owner keeps the land, a defeasible owner may not. That is why the lecture insists the encumbrance must NOT carry a real risk of the title being taken away, or it is defeasibility instead.',
                    exam: {
                      write: 'The [right of re-entry / power of sale / risk that the assignment be set aside] means the title may be taken away from the owner, and is accordingly defeasible rather than merely encumbered.',
                      trap: 'Forgetting the "real risk" qualifier. A theoretical right of re-entry that will never be exercised is the "no real risk" case from LG1.',
                    },
                    points: [
                      'Re-entry by the Government for breach of covenant in a Government lease or condition in Conditions of Grant.',
                      'Sale by the Building Authority to recover expenses incurred in remedying unauthorised building works.',
                      'A right of enforcement action by the manager or incorporated owners in respect of a significant breach of the deed of mutual covenant.',
                      'A right of sale by a mortgagee.',
                      'Title set aside because there has been a conveyance to defraud creditors.',
                    ],
                  },
                  {
                    label: 'Draw the boundary between the two',
                    detail: 'To be merely encumbered, the encumbrance must be such as will not lead to the consequence that there is a real risk that title will be taken away. If it does, the title is not encumbered but defeasible.',
                    why: 'The two categories are exclusive, not cumulative, and the test that separates them is the same "real risk" standard that governs good title generally. One coherent question runs through the whole topic.',
                    exam: {
                      write: 'The encumbrance [does not / does] carry a real risk that the title will be taken away, so the title is [encumbered only / defeasible].',
                      trap: 'Labelling a DMC charge for arrears as a mere encumbrance. A right of enforcement action for a significant breach is listed as a ground of defeasibility.',
                    },
                    points: [
                      'The dividing line is the real risk that the title will be taken away.',
                      'That is the same standard as the good title test in MEPC and Kan Wing Yau.',
                    ],
                  },
                  {
                    label: 'Assess significance, and state the remedy',
                    detail: 'An encumbered title may render the title defective and constitute a repudiatory breach if the encumbrance is significant. Whether the defect renders the breach repudiatory, or merely a breach of warranty entitling the innocent party only to damages, depends upon the significance of the breach.',
                    why: 'Classification decides what kind of defect it is; significance decides what the purchaser can do about it. Skipping the second step gets the remedy wrong.',
                    exam: {
                      write: 'The [encumbrance / defeasibility] being significant, the vendor\'s failure to give good title is a repudiatory breach and the purchaser may rescind; otherwise the purchaser is confined to damages.',
                      trap: 'Assuming every defect entitles the purchaser to rescind.',
                    },
                    points: [
                      'A significant encumbrance may be a repudiatory breach.',
                      'An insignificant one may sound only in damages.',
                      'Ask also whether the defect is one the vendor can remove himself before completion, which makes it a matter of mere conveyance.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'An equitable mortgage by deposit of original title deeds is the encumbrance that lies behind the whole missing-deeds topic — it is why the absence of originals matters at all.',
                'A registrable encumbrance that was never registered is usually void against a purchaser, so it is not an encumbrance at all: see the separate issue type.',
                'A defect the vendor can cure on his own before completion is a matter of mere conveyance and does not make the title defective.',
                'The vendor may sell expressly subject to identified encumbrances such as the deed of mutual covenant, which is why every multi-storey sale is.',
              ],
            },
            skeleton: {
              bullets: [
                'Identify the interest or risk precisely and say who holds it.',
                'Classify it as an encumbrance or a ground of defeasibility.',
                'Apply the real-risk boundary between the two.',
                'Check whether it is a registrable interest that was never registered.',
                'Check whether it is a matter of mere conveyance.',
                'Assess significance and state the remedy.',
              ],
            },
            mistakes: {
              bullets: [
                'Treating "defective" as a single category.',
                'Calling a right of re-entry an encumbrance.',
                'Forgetting that an unregistered registrable interest is generally void against a purchaser.',
                'Concluding with rescission without addressing significance.',
              ],
            },
            authorities: {
              table: {
                headers: ['Category', 'Examples from the lecture', 'Consequence'],
                rows: [
                  ['Encumbered', 'Express, resulting or constructive trust; uncompleted sale and purchase agreement; registered right of way; restrictive covenant; lease; equitable mortgage by deposit of title deeds', 'A third party has an interest in the property; repudiatory only if significant'],
                  ['Defeasible', 'Re-entry by Government for breach of a Government lease covenant or Condition; sale by the Building Authority to recover expenses of remedying unauthorised building works; enforcement by the manager or incorporated owners for a significant DMC breach; mortgagee\'s power of sale; conveyance to defraud creditors', 'The title can be taken away from the owner'],
                  ['The boundary', 'Real risk that title will be taken away', 'An encumbrance carrying that risk is defeasibility, not encumbrance'],
                  ['Both', 'Defective title', 'Not a good title; remedy depends on the significance of the breach'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG3', issue: 'what-is-good-title', label: 'What constitutes a good title?' },
              { session: 'LG3', issue: 'unregistered-encumbrances', label: 'Registrable encumbrances that are unregistered' },
              { session: 'LG4', issue: 'mere-conveyance', label: 'Matters of mere conveyance' },
              { session: 'LG2', issue: 'remedies-and-charge', label: 'Remedies: injunction, damages and the charge' },
            ],
          },
          {
            id: 'title-in-vendor',
            title: 'Title in the vendor, consents, and assigning the whole interest',
            summary: 'Three checks before anything else: does he own it, may he sell it without asking anyone, and can he pass it free of third-party interests?',
            triggers: {
              bullets: [
                'The land the vendor has agreed to assign is still in the ownership of a t\'so.',
                'No consent of the Land Officer has been obtained under s15 of the New Territories Ordinance.',
                'The property is owned by a company rather than by the vendor, but the vendor controls the company absolutely.',
                'The consent of a t\'so is required before the manager may sell.',
                'The property is being sold under the Consent Scheme and the Director of Lands has not yet consented.',
                'The vendor has agreed to sell land he does not own but says he can compel the owner to assign.',
                'The purchaser asks whether the vendor can assign free from all encumbrances.',
                'A third party\'s consent is needed before the assignment can be executed at all.',
                'The sale includes adjoining land held in a different ownership from the flat itself.',
              ],
              routes: [
                { when: 'The encumbrance was registrable and never registered', session: 'LG3', issue: 'unregistered-encumbrances', label: 'Registrable encumbrances that are unregistered' },
                { when: 'The sale is expressly made subject to the interest', session: 'LG3', issue: 'patent-defects', label: 'Encumbrances expressly subject to, and patent defects' },
                { when: 'The consent needed is a Government consent to assign under the Consent Scheme', session: 'LG3', issue: 'duty-to-give-title', label: 'The duty to give good title' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Three preliminary checks on the vendor\'s position',
                steps: [
                  {
                    label: 'Check that the title is in the vendor, or in someone he can compel',
                    detail: 'Title must be in the vendor or some other person whom the vendor can compel to assign in accordance with his instructions.',
                    why: 'A vendor who can direct the owner is in substance able to convey, so the law looks at control rather than at the name on the assignment.',
                    exam: {
                      write: 'Title [is / is not] in the vendor, [nor is it in a person whom the vendor can compel to assign in accordance with his instructions].',
                      trap: 'Treating separate legal ownership as fatal. In Harold Elliott v Pierson [1948] Ch 452 the property was owned by a company and not the vendor, but the vendor had sole and absolute control of the company and the title was good.',
                    },
                    points: [
                      'Enway Development Ltd v Light Ocean Investments Ltd [1994] 3 HKC 31, CA: other land the vendor had agreed to assign was still in the ownership of a t\'so and no consent of the Land Officer had been obtained as required by s15 of the New Territories Ordinance.',
                      'Contrast Harold Elliott v Pierson [1948] Ch 452: sole and absolute control of the owning company sufficed.',
                    ],
                  },
                  {
                    label: 'Check that no third party\'s consent is needed to execute the assignment',
                    detail: 'The vendor must be entitled to assign the property without the necessary consent of any third person. The most obvious case is a sale where the property is subject to the Consent Scheme.',
                    why: 'A consent that has not been obtained is a condition the vendor does not control. Until it is given, he cannot promise to complete on the contractual date.',
                    exam: {
                      write: 'The assignment cannot be executed without the consent of [the Director of Lands under the Consent Scheme / the t\'so / the Land Officer under s15 of the New Territories Ordinance], which has not been obtained.',
                      trap: 'Leaving the consent to be obtained at completion. The vendor\'s solicitors should identify the need for consent early and obtain it in good time, before the time for completion.',
                    },
                    points: [
                      'Tang Yau Yi Tong v Tang Mou Shau Tso [1996] 2 HKLR 212, CA: consent of the t\'so required before the manager could sell.',
                      'Section 15 of the New Territories Ordinance: consent of the Land Officer.',
                      'The Consent Scheme: the consent of the Director of Lands.',
                    ],
                  },
                  {
                    label: 'Check that the whole interest can be assigned free from encumbrances',
                    detail: 'The general principle where the vendor agrees to give good title is that he must be able to assign the property free from all encumbrances.',
                    why: 'This is the positive statement of the encumbrance rule, and everything in the next two issue types is an exception to it.',
                    exam: {
                      write: 'The vendor having agreed to give good title must be able to assign the property free from all encumbrances, subject to the three recognised exceptions.',
                      trap: 'Stating the rule without the exceptions. Three of them are recognised, and a well-drafted agreement relies on at least one.',
                    },
                    points: [
                      {
                        text: 'The three exceptions:',
                        points: [
                          'Registrable encumbrances which are unregistered, and therefore void against a bona fide purchaser for valuable consideration.',
                          'Encumbrances to which the sale is made expressly subject.',
                          'Patent grounds of defeasibility and patent encumbrances.',
                        ],
                      },
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'Enway is cited twice in this topic: for title being in a t\'so rather than the vendor, and for the missing s15 consent. Both points are live on the same facts.',
                'The Consent Scheme appears at two different stages — consent to pre-sell and consent to assign. Identify which one the facts are about.',
                'Control of the owning company is a question of fact. "Sole and absolute control" is the language Harold Elliott used.',
                'Where the vendor holds only an equitable interest, this check becomes the question whether he can nonetheless give good title — see the duty to give title.',
              ],
            },
            skeleton: {
              bullets: [
                'Identify who holds the legal title to each parcel being sold.',
                'If it is not the vendor, ask whether he can compel that person to assign.',
                'Identify any consent required and whether it has been obtained in good time.',
                'State the free-from-encumbrances rule and the three exceptions.',
                'Apply whichever exception the facts raise.',
              ],
            },
            mistakes: {
              bullets: [
                'Assuming that a vendor who does not hold the legal title cannot give good title.',
                'Overlooking a required consent because the assignment itself looks straightforward.',
                'Stating the free-from-encumbrances rule as absolute.',
                'Confusing consent to pre-sell with consent to assign.',
              ],
            },
            authorities: {
              table: {
                headers: ['Check', 'Authority', 'What it establishes'],
                rows: [
                  ['Title in the vendor', 'Enway Development Ltd v Light Ocean Investments Ltd [1994] 3 HKC 31, CA', 'Land still owned by a t\'so and no s15 New Territories Ordinance consent obtained'],
                  ['Or in someone he controls', 'Harold Elliott v Pierson [1948] Ch 452', 'Property owned by a company the vendor controlled absolutely; title good'],
                  ['Consent required', 'Tang Yau Yi Tong v Tang Mou Shau Tso [1996] 2 HKLR 212, CA', 'Consent of the t\'so required before the manager could sell'],
                  ['Consent required', 's15, New Territories Ordinance', 'Consent of the Land Officer'],
                  ['Consent required', 'The Consent Scheme', 'Consent of the Director of Lands'],
                  ['Free from encumbrances', 'General principle', 'Subject to three exceptions: unregistered registrable encumbrances; encumbrances expressly subject to; patent defects'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG3', issue: 'unregistered-encumbrances', label: 'Registrable encumbrances that are unregistered' },
              { session: 'LG3', issue: 'patent-defects', label: 'Encumbrances expressly subject to, and patent defects' },
              { session: 'LG1', issue: 'ddh-and-approvals', label: 'DDH clauses, alienation and other required approvals' },
            ],
          },
          {
            id: 'unregistered-encumbrances',
            title: 'Registrable encumbrances that are unregistered',
            summary: 'Void against a purchaser for value under s3(2) of the Land Registration Ordinance — and his knowledge of them is irrelevant.',
            triggers: {
              bullets: [
                'A five-year lease was granted and never registered, and the reversion has now been sold.',
                'A declaration of trust in writing was never registered against the property.',
                'An option to renew in a tenancy agreement was not registered and the reversion has been assigned.',
                'The assignment of the reversion was expressly stated to be subject to tenancies the landlord had failed to register.',
                'A right to exclusive use and occupation of the roof was omitted from the memorial on registration.',
                'The purchaser knew about the unregistered tenancy before he bought and the tenant says that defeats him.',
                'A written tenancy for two years was granted at a rent 15 per cent below market.',
                'A tenancy for three years or less was created orally and the landlord never registered anything.',
                'The purchaser and vendor are alleged to have connived to evict a tenant whose lease was unregistered.',
              ],
              routes: [
                { when: 'The interest was registered and the complaint is that the vendor has not produced the document', session: 'LG4', issue: 'chain-of-title', label: 'The chain of title and registration of title documents' },
                { when: 'The sale was expressly made subject to the interest', session: 'LG3', issue: 'patent-defects', label: 'Encumbrances expressly subject to, and patent defects' },
                { when: 'The question is how to classify the interest in the first place', session: 'LG3', issue: 'encumbered-or-defeasible', label: 'Encumbered and defeasible titles' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Testing an unregistered interest',
                steps: [
                  {
                    label: 'Ask whether the interest was registrable',
                    detail: 'Registrable encumbrances which are not registered are void as against a bona fide purchaser or mortgagee for valuable consideration: s3(2) of the Land Registration Ordinance. They therefore do not constitute encumbrances.',
                    why: 'The Ordinance makes the register the place to look. An interest that could have been put there and was not cannot be allowed to ambush someone who did look.',
                    exam: {
                      write: 'The [lease / option / declaration of trust] was registrable and was not registered, and is accordingly void as against a bona fide purchaser for valuable consideration: s3(2) of the Land Registration Ordinance (Cap. 128).',
                      trap: 'Calling the unregistered interest an encumbrance the vendor must clear. It is not an encumbrance at all as against the purchaser.',
                    },
                    points: [
                      'Kwok Siu Lau v Kang Yang Chee [1913] HKLR 52: a five-year unregistered lease void against a bona fide purchaser.',
                      'Chu Yam On v Li Tam Toi Hing (1956) 40 HKLR 250: a declaration of trust in writing, not registered.',
                      'Markfaith Investment Ltd v Chiap Hua Flashlights Ltd [1990] AC 76, PC: an option to renew void when unregistered.',
                      'Fast Forward Ltd v Magicsound Co Ltd [1991] 2 HKLR 529: a right to exclusive use of a roof omitted from the memorial on registration; the first purchaser lost the right when the property was sold to another.',
                    ],
                  },
                  {
                    label: 'Note that the purchaser\'s knowledge is irrelevant',
                    detail: 'Knowledge of the existence of the unregistered interest on the part of the purchaser is irrelevant unless fraud is involved — for example connivance between vendor and purchaser to evict a tenant.',
                    why: 'Section 3(2) is not a doctrine of notice. As the lecture puts it, it is not referring to equity\'s darling: the register governs, so what the purchaser happened to know does not.',
                    exam: {
                      write: 'The purchaser\'s knowledge of the unregistered [tenancy] is irrelevant, no fraud being alleged: Keep Point Development Ltd v Chan Chi Yim [2000] 2 HKC 53.',
                      trap: 'Thinking an express reference in the assignment saves the interest. In Creator (HK) Ltd the property was expressly assigned subject to the tenancies and they were still void.',
                    },
                    points: [
                      'Keep Point Development Ltd v Chan Chi Yim [2000] 2 HKC 53: unless fraud is involved, the purchaser is conferred a complete and unfettered title by an assignment even if he had notice of a prior unregistered interest.',
                      'Creator (HK) Ltd v Kwong Wing Food Industries Stainless Steel Engineering Ltd [2008] 2 HKC 245, [2008] 2 HKLRD 475, CA: tenancies of more than 3 years were void against the purchaser even though he was aware of them and the property was expressly assigned subject to them.',
                      'Wellmake Investments Ltd v Chan Yiu Tong [1996] 1 HKC 528, CA: an unregistered option to renew; the purchaser of the reversion took free even though the assignment was stated to be subject to it.',
                    ],
                  },
                  {
                    label: 'Check the short-term tenancy exemption',
                    detail: 'The principle does not apply to short-term tenancies, because tenancies for 3 years or less are exempted from registration and excluded from the effect of s3(2) of the Land Registration Ordinance.',
                    why: 'Short tenancies are too numerous and too ephemeral for a deeds register to cope with. The exemption is the price of keeping the register usable.',
                    exam: {
                      write: 'The tenancy being for [2] years, it is a short-term tenancy exempt from registration and is not avoided by s3(2) of the Land Registration Ordinance.',
                      trap: 'Applying the exemption to a tenancy at a discounted rent. The exemption requires a rack rent under s3(2), or the best rent reasonably obtainable under s6(2).',
                    },
                    points: [
                      'A written short-term tenancy must be granted at a "rack rent" (s3(2)) or "the best rent reasonably obtainable" (s6(2)).',
                      'Tse Siu Hoi v Lee Dick Gold and Jewellery Ltd LDPE 1132/2014, 27/8/2015: a two-year tenancy at $57,000 per month was, on expert evidence, 15 per cent below market rent; falling below a rack rent, it required writing or a deed and fell outside the exceptions in ss6(2) and 3(2).',
                      'A short-term tenancy created orally must additionally take effect in possession.',
                    ],
                  },
                  {
                    label: 'State the consequence for the transaction',
                    detail: 'An unregistered registrable interest is one requisition the purchaser need not raise and one defect the vendor need not clear. The interests s3(2) does not touch are a different matter, and are why the site visit exists.',
                    why: 'The point of the exercise is practical: an unregistered registrable interest is one requisition the purchaser does not need to raise, and one defect the vendor does not need to clear.',
                    exam: {
                      write: 'The interest being void against the purchaser, the vendor\'s title is not encumbered by it and no requisition on it needs to be answered.',
                      trap: 'Overlooking the unregistrable interests that are NOT cured this way — resulting and constructive trusts, and short-term tenancies. Those are why the site visit matters.',
                    },
                    points: [
                      'Unregistrable interests such as resulting and constructive trusts are not caught by s3(2) and remain a risk.',
                      'Leases, easements and similar interests would usually be expressly identified in the sale and purchase agreement.',
                      'That is why the purchaser or his solicitors visit the property to check for occupiers with interests.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'Section 3(2) protects a bona fide purchaser or mortgagee for valuable consideration — a volunteer is not protected.',
                'Fraud is the only exception the lecture gives, and the example is connivance between vendor and purchaser to evict a tenant.',
                'Fast Forward shows the danger runs the other way too: an interest omitted from the memorial on registration may be lost even though the instrument was lodged.',
                'Registration is dealt with in detail in its own later set of notes; here it is only the effect on the vendor\'s duty that matters.',
              ],
            },
            skeleton: {
              bullets: [
                'Identify the interest and whether it was registrable.',
                'Check the register: was it registered, and does the memorial describe it?',
                'If unregistered, apply s3(2) and state that it is void against the purchaser.',
                'Deal with knowledge, and with fraud if alleged.',
                'Check the short-term tenancy exemption, including the rack rent condition.',
                'State the consequence for the vendor\'s duty and for any requisition.',
              ],
            },
            mistakes: {
              bullets: [
                'Treating the purchaser\'s notice as decisive. Section 3(2) is not about equity\'s darling.',
                'Assuming an express "subject to" in the assignment revives an unregistered interest.',
                'Applying the short-term exemption without checking the rent.',
                'Forgetting the interests s3(2) does not touch, which are the ones a site visit is for.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Authority', 'What it establishes'],
                rows: [
                  ['The rule', 's3(2), Land Registration Ordinance (Cap. 128)', 'Registrable but unregistered instruments are void against a bona fide purchaser or mortgagee for valuable consideration'],
                  ['Unregistered lease', 'Kwok Siu Lau v Kang Yang Chee [1913] HKLR 52', 'Five-year unregistered lease void against a bona fide purchaser'],
                  ['Unregistered trust', 'Chu Yam On v Li Tam Toi Hing (1956) 40 HKLR 250', 'Declaration of trust in writing, unregistered'],
                  ['Unregistered option', 'Markfaith Investment Ltd v Chiap Hua Flashlights Ltd [1990] AC 76, PC', 'Option to renew void when unregistered'],
                  ['Defective memorial', 'Fast Forward Ltd v Magicsound Co Ltd [1991] 2 HKLR 529', 'Right to exclusive use of a roof omitted from the memorial; first purchaser lost the right'],
                  ['Knowledge irrelevant', 'Keep Point Development Ltd v Chan Chi Yim [2000] 2 HKC 53', 'Unless fraud, notice of a prior unregistered interest does not bind the purchaser'],
                  ['Express "subject to" does not save it', 'Creator (HK) Ltd v Kwong Wing Food Industries Stainless Steel Engineering Ltd [2008] 2 HKC 245, [2008] 2 HKLRD 475, CA; Wellmake Investments Ltd v Chan Yiu Tong [1996] 1 HKC 528, CA', 'Tenancies and an option void against the purchaser despite express reference in the assignment'],
                  ['Short-term exemption', 'ss3(2) and 6(2), Land Registration Ordinance (Cap. 128)', 'Tenancies of 3 years or less exempt, if at a rack rent or the best rent reasonably obtainable'],
                  ['Rack rent condition', 'Tse Siu Hoi v Lee Dick Gold and Jewellery Ltd LDPE 1132/2014, 27/8/2015', 'A rent 15 per cent below market fell below a rack rent; exemption unavailable'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG3', issue: 'encumbered-or-defeasible', label: 'Encumbered and defeasible titles' },
              { session: 'LG3', issue: 'patent-defects', label: 'Encumbrances expressly subject to, and patent defects' },
              { session: 'LG4', issue: 'chain-of-title', label: 'The chain of title and registration of title documents' },
              { session: 'LG4', issue: 'raising-requisitions', label: 'Raising requisitions: the time limits' },
            ],
          },
          {
            id: 'patent-defects',
            title: 'Encumbrances expressly subject to, and patent defects',
            summary: 'The other two exceptions: what the contract names, and what anyone could see by looking.',
            triggers: {
              bullets: [
                'The Schedule to the formal agreement identifies the deed of mutual covenant, a right of way and a restrictive covenant.',
                'Every sale of a unit in the multi-storey building is made expressly subject to the covenants in the deed of mutual covenant.',
                'A light well has been converted into actual structure, visible to anyone who looks at the building.',
                'A right of passage over a staircase and hallway inside a multi-storey building is in dispute.',
                'The vendor did not tell the purchaser about a defect he says was obvious.',
                'The premises were plainly being run as a karaoke bar although the occupation permit allowed only office use.',
                'The purchaser says he could not have been expected to notice the encroachment.',
                'The encumbrance was disclosed in the agreement and the purchaser now objects to it.',
                'The vendor relies on the defect being "patent to the eye".',
              ],
              routes: [
                { when: 'The interest was registrable and never registered', session: 'LG3', issue: 'unregistered-encumbrances', label: 'Registrable encumbrances that are unregistered' },
                { when: 'The vendor relies on a clause rather than on the defect being obvious', session: 'LG3', issue: 'exclusion-clauses', label: 'Excluding or limiting the duty to give title' },
                { when: 'The argument is that the purchaser should have raised the requisition earlier', session: 'LG4', issue: 'requisitions-out-of-time', label: 'Raising requisitions out of time' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Applying the second and third exceptions',
                steps: [
                  {
                    label: 'Look for encumbrances the sale is expressly made subject to',
                    detail: 'The vendor can sell expressly subject to identified encumbrances such as the deed of mutual covenant, rights of way and restrictive covenants. These are properly identified in the Schedule to the formal sale and purchase agreement and in the assignment.',
                    why: 'An encumbrance the purchaser has agreed to take is not a defect: he has priced it in. The requirement that it be identified is what makes the agreement real rather than a blanket disclaimer.',
                    exam: {
                      write: 'The sale is expressly made subject to [the deed of mutual covenant / the right of way registered by memorial no. [n]], which is identified in the Schedule to the agreement and in the assignment, so the purchaser cannot object to it.',
                      trap: 'Confusing this with an exclusion clause. Here the encumbrance is identified and accepted; an exclusion clause tries to cover defects that are not.',
                    },
                    points: [
                      'The encumbrances must be properly identified in the Schedule to the formal agreement and in the assignment.',
                      'Every sale of a unit in a multi-storey building will be made expressly subject to the covenants in the deed of mutual covenant, which are encumbrances.',
                    ],
                  },
                  {
                    label: 'Ask whether the defect was patent',
                    detail: '"Patent to the eye" means clear, or easily seen by looking: Yandle & Sons v Sutton [1922] 2 Ch 199 at 210.',
                    why: 'A purchaser who could have seen the defect by looking cannot complain that he was not told about it. The test is what an inspection would reveal, not what a title search would.',
                    exam: {
                      write: '[The conversion of the light well into structure] was patent to the eye, that is clear or easily seen by looking: Yandle & Sons v Sutton [1922] 2 Ch 199 at 210.',
                      trap: 'Assuming unauthorised building works are always patent. Whether they are is a question of fact, and the two decisions below went opposite ways.',
                    },
                    points: [
                      'Perhaps certain rights of way and unauthorised building works might be included.',
                      'Kensel Ltd v Charmfast Investment Ltd HCMP 6890/1999, 22/9/2001: unauthorised building works comprising the conversion of a light well into actual structure were a patent defect, so there was no obligation on the vendor to bring it to the purchaser\'s attention if he wished to rely on an exclusion clause.',
                      'Goldenwick Ltd v Standard Chartered Bank (Hong Kong) Ltd [2008] 3 HKLRD 266: a right of passage over a staircase and hallway within a multi-storey building was NOT patent.',
                    ],
                  },
                  {
                    label: 'Connect the patency point to the exclusion clause argument',
                    detail: 'Where the defect is patent, the vendor need not bring it to the purchaser\'s attention in order to rely on an exclusion clause.',
                    why: 'The misleading argument in Jumbo King depends on the purchaser being unaware of the risk. A patent defect gives him the awareness without anyone having to tell him.',
                    exam: {
                      write: 'The defect being patent, the purchaser cannot say he was misled, and the vendor may rely on the exclusion clause notwithstanding that he did not disclose it.',
                      trap: 'Forgetting that the same reasoning bears on late requisitions: a defect the purchaser could have seen is one he should have raised in time, exercising due diligence.',
                    },
                    points: [
                      'Billion Profit Enterprises Ltd v Global Fly Development Ltd HCA 712/1999, 4/8/1999: a limiting clause could be relied upon despite the vendor not informing the purchaser of the change of use, the use as a karaoke bar being patent.',
                      'A patent defect also bears on whether a requisition could have been raised earlier with due diligence.',
                    ],
                  },
                  {
                    label: 'Stand back and check which of the three exceptions applies',
                    detail: 'The three exceptions to the free-from-encumbrances rule do different work and are pleaded differently: the first is a matter of the register, the second of the contract, the third of the facts on the ground.',
                    why: 'The three exceptions do different work and are pleaded differently: the first is a matter of the register, the second of the contract, the third of the facts on the ground. Naming the wrong one wastes the point.',
                    exam: {
                      write: 'The vendor is able to assign free from all encumbrances save [the encumbrance], which falls within the [first / second / third] exception because [it is registrable but unregistered / the sale is expressly made subject to it / it is patent].',
                      trap: 'Running the three together as a single "the purchaser knew about it" argument. They rest on different sources.',
                    },
                    points: [
                      'Exception one: registrable encumbrances which are unregistered — a matter of the register and s3(2) of the Land Registration Ordinance.',
                      'Exception two: encumbrances to which the sale is expressly made subject — a matter of the contract.',
                      'Exception three: patent grounds of defeasibility and patent encumbrances — a matter of what can be seen.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'Goldenwick is the case for a defect inside a building not being patent, and it is worth having precisely because so much of the case law concerns visible external works.',
                'The lecture hedges: "perhaps certain rights of way and unauthorised building works might be included". Do not state patency as a category rule.',
                'An identified encumbrance in the Schedule is an agreed term, not an exclusion clause, so contra proferentem does not bite on it in the same way.',
                'The vendor who wants to rely on patency should still consider whether removing the structure before completion is the safer course.',
              ],
            },
            skeleton: {
              bullets: [
                'Identify the encumbrance or ground of defeasibility.',
                'Check the Schedule to the agreement and the assignment for an express subjection.',
                'If not, ask whether the defect was patent, on the Yandle test.',
                'Apply the closest decided case on the type of defect.',
                'Connect the conclusion to the exclusion clause and late requisition arguments.',
              ],
            },
            mistakes: {
              bullets: [
                'Treating all unauthorised building works as patent.',
                'Confusing an express subjection with an exclusion clause.',
                'Forgetting that a patent defect also undermines a late requisition.',
                'Applying the patency test to something only a title search would reveal.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Authority', 'What it establishes'],
                rows: [
                  ['Expressly subject to', 'The Schedule to the formal agreement and the assignment', 'Identified encumbrances such as the DMC, rights of way and restrictive covenants'],
                  ['Meaning of patent', 'Yandle & Sons v Sutton [1922] 2 Ch 199 at 210', '"Patent to the eye" means clear, or easily seen by looking'],
                  ['Patent works', 'Kensel Ltd v Charmfast Investment Ltd HCMP 6890/1999, 22/9/2001', 'Conversion of a light well into structure was patent; no duty to disclose it to rely on an exclusion clause'],
                  ['Not patent', 'Goldenwick Ltd v Standard Chartered Bank (Hong Kong) Ltd [2008] 3 HKLRD 266', 'Right of passage over a staircase and hallway within a building not patent'],
                  ['Patent use', 'Billion Profit Enterprises Ltd v Global Fly Development Ltd HCA 712/1999, 4/8/1999', 'Karaoke use patent despite an occupation permit restricted to office use; limiting clause effective'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG3', issue: 'exclusion-clauses', label: 'Excluding or limiting the duty to give title' },
              { session: 'LG3', issue: 'unregistered-encumbrances', label: 'Registrable encumbrances that are unregistered' },
              { session: 'LG4', issue: 'requisitions-out-of-time', label: 'Raising requisitions out of time' },
              { session: 'LG3', issue: 'documents-of-title', label: 'Which documents are documents of title?' },
            ],
          },
          {
            id: 'original-title-deeds',
            title: 'Original title deeds: common law and section 13A',
            summary: 'Handing over the originals is part of GIVING title. De Monsa cut the common law duty down; s13A cut it down by period instead.',
            triggers: {
              bullets: [
                'The vendor can produce certified copies but not the originals of several assignments in the chain.',
                'The sale and purchase agreement was signed before 11 July 2008.',
                'The agreement expressly provides that the vendor shall give title in accordance with the common law rather than s13A.',
                'A statutory declaration has been made by the vendor\'s solicitor saying that after extensive searches he cannot explain how the documents came to be missing.',
                'The purchaser says the missing originals may have been deposited to secure an equitable mortgage.',
                'Two registered sale and purchase agreements on the register were never completed and both purchasers were finance companies.',
                'The property is a Home Ownership Scheme flat subject to alienation restrictions.',
                'Originals of pre-intermediate root documents are missing and the vendor says he need not account for them.',
                'The vendor offers a certified copy of a certified copy, and the purchaser objects.',
              ],
              routes: [
                { when: 'The question is what must be PRODUCED as proof of title rather than delivered', session: 'LG4', issue: 'statutory-period-s13', label: 'The statutory period for showing title' },
                { when: 'The question is which documents count as documents of title at all', session: 'LG3', issue: 'documents-of-title', label: 'Which documents are documents of title?' },
                { when: 'The originals and certified copies are all missing', session: 'LG4', issue: 'missing-deeds-re-halifax', label: 'Missing title deeds and the rule in Re Halifax' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Working out what originals must be handed over',
                steps: [
                  {
                    label: 'Decide which regime applies',
                    detail: 'Handing over the original title deeds which relate exclusively to the property forms part of the vendor\'s duty to GIVE good title. The statutory duty in s13A of the Conveyancing and Property Ordinance applies unless excluded or modified.',
                    why: 'The two regimes now cut the duty down in different directions — De Monsa by purpose, s13A by period — so which applies can change the answer on the same facts.',
                    exam: {
                      write: 'The agreement having been made on [date], [s13A of the Conveyancing and Property Ordinance applies / the common law applies, the agreement pre-dating 11 July 2008 / the parties have expressly adopted the common law duty].',
                      trap: 'Applying s13A to an old agreement. Section 13A does not have retrospective effect and applies only to agreements signed after 11 July 2008: Donpower Trading Ltd v Apexcom [2010] 1 HKLRD 915, CA.',
                    },
                    points: [
                      'The common law applies where the agreement pre-dated 11 July 2008.',
                      'It also applies where the parties expressly agree to give title in accordance with the common law, thereby excluding the statutory provision.',
                      'Otherwise s13A governs.',
                    ],
                  },
                  {
                    label: 'State the old understanding, and what De Monsa did to it',
                    detail: 'There used to be a widely held understanding, thought to emanate from Yiu Ping Fong v Lam Lai Hing Lana [1998] 4 HKC 476, that a vendor had to deliver the originals of all title deeds relating exclusively to the property right back to the ultimate root, and to make a statutory declaration under Re Halifax for any that were missing.',
                    why: 'The old duty was unworkable in Hong Kong, where originals were lost in the Japanese invasion or simply to weather and storage. That practical problem is what produced both the legislation and the Court of Final Appeal\'s reinterpretation.',
                    exam: {
                      write: 'The former understanding, that all originals back to the ultimate root had to be delivered or accounted for under Re Halifax, has been overruled by De Monsa Investments Ltd v Whole Win Management Fund Ltd [2013] 5 HKC 350, CFA.',
                      trap: 'Saying flatly that De Monsa overruled Yiu Ping Fong. The Court of Final Appeal explained that Yuen J was not concerned with pre-intermediate root documents and that later decisions had taken her judgment out of context.',
                    },
                    points: [
                      'The old duty was massively onerous, especially where originals had been lost or destroyed.',
                      'Loyal Hope Ltd v Leung Pui Ming HCA 136/2007 had applied that understanding.',
                      'De Monsa explained that all judgments must be read bearing in mind the question the court had to decide.',
                    ],
                  },
                  {
                    label: 'Apply the common law as restated in De Monsa',
                    detail: 'The Court of Final Appeal ruled that the vendor has a duty to deliver at completion the original title documents which relate exclusively to the property, because the purchaser has a proprietary right to them: Re Williams and Newcastle\'s Contract [1897] 2 Ch 144.',
                    why: 'The right is proprietary, so it extends only to what the vendor actually has. For what he does not have, the question becomes one of risk, not of ownership.',
                    exam: {
                      write: 'At common law the vendor must hand over at completion the originals of the title deeds relating exclusively to the property that are actually in his possession or power.',
                      trap: 'Requiring an explanation for every missing original. The duty to explain arises only where the absence would indicate the realistic possibility of some transaction affecting the land which could affect the purchaser if he took title.',
                    },
                    points: [
                      'A purchaser is entitled to receive the originals of title documents relating exclusively to the property at completion, by virtue of his proprietary right to them.',
                      'The vendor need normally only supply the originals in his possession or power.',
                      'As regards missing originals in both the pre- and post-intermediate root period, the vendor must explain their absence only where that absence would indicate the realistic possibility of some transaction affecting the land which could affect the purchaser.',
                      'It follows that resort to Re Halifax will at best be rare and may never be necessary.',
                    ],
                  },
                  {
                    label: 'Deal with the equitable mortgage risk, which is what the rule is about',
                    detail: 'Litton NPJ observed in De Monsa that an equitable mortgage or charge can be created by deposit of original title deeds accompanied by a memorandum of deposit, or by deposit unaccompanied by one.',
                    why: 'The whole worry about missing originals is a lender emerging from the dark with the deeds in his hands. Litton NPJ\'s analysis shows why that worry is usually unfounded — and Zhang shows when it is not.',
                    exam: {
                      write: 'Any memorandum of deposit would be a registrable instrument which, if unregistered, would be void against a subsequent bona fide purchaser under s3(2) of the Land Registration Ordinance, so there is no realistic risk to the purchaser\'s title.',
                      trap: 'Presenting that analysis as settled. Zhang Xueshuai queried whether it holds where the memorandum only EVIDENCED the equitable mortgage rather than created it, since s3(2) avoids the instrument, not the underlying transaction.',
                    },
                    points: [
                      'With a memorandum: registrable, and void against a subsequent bona fide purchaser if unregistered, so no realistic risk.',
                      'Without a memorandum: nothing can be registered, but there is no instance in the law reports of equitable mortgagees by deposit defeating the title of purchasers.',
                      'It is difficult to imagine a person lending a substantial sum on nothing more than an oral commitment and a deposit of deeds when he could have taken and registered a memorandum.',
                      'The risk is that of a lender emerging from the dark with an original title deed in his hands and registering a memorandum of deposit ahead of the purchaser; whether the degree of risk is fanciful depends on the circumstances.',
                    ],
                  },
                  {
                    label: 'Apply s13A where it governs',
                    detail: 'Section 13A of the Conveyancing and Property Ordinance was enacted in June 2008. Under it, unless a contrary intention is expressed, the purchaser is entitled to require delivery of only two things: the Government lease if it relates exclusively to the land, and any document that relates exclusively to the land and is required to be produced under s13(1)(a) and (c).',
                    why: 'The cut is temporal rather than purposive: it stops the duty at the intermediate root. Since the Government lease or Conditions will not usually relate exclusively to the property being sold, all that is left in practice are the chain-of-title documents.',
                    exam: {
                      write: 'Under s13A(1) of the Conveyancing and Property Ordinance the vendor need deliver only the Government lease, if it relates exclusively to the land, and the documents relating exclusively to the land required to be produced under s13(1)(a) and (c) — that is, those in the chain of title period.',
                      trap: 'Forgetting the three remaining subsections. Section 13A(2) preserves the common law, s13A(3) removes the purchaser\'s proprietary right to documents not deliverable, and s13A(4) preserves third parties\' rights.',
                    },
                    points: [
                      'Originals of title deeds falling within the pre-intermediate root period need not be supplied.',
                      'The Government lease or Conditions of Grant will not usually relate exclusively to the property being sold.',
                      'Section 13A(3) removes the common law right to the ownership of title deeds recognised in Re Duthy and Jesson\'s Contract [1898] 1 Ch 419, save for those that must be produced under s13A.',
                      'Section 13A(4) preserves rights of third persons, such as an equitable mortgagee holding the original deeds.',
                      'Section 13A does not have retrospective effect: Donpower Trading Ltd v Apexcom [2010] 1 HKLRD 915, CA.',
                      'Failure to provide the originals in compliance with s13A is a repudiatory breach: Big Most Ltd v Chau Wa Hung [2012] 4 HKLRD 599.',
                    ],
                  },
                  {
                    label: 'Address the unresolved question: does De Monsa apply to a s13A duty?',
                    detail: 'Section 13A(2) states that s13A(1) does not affect any rule of common law under which the vendor may discharge his obligation to give title otherwise than by delivering the Government lease or document.',
                    why: 'This is genuinely open, and the lecture presents both sides rather than one. Saying so, and saying why it matters, is worth more than picking a side.',
                    exam: {
                      write: 'Whether the De Monsa common law approach may be relied on where the parties have contracted for title in accordance with s13A turns on s13A(2); Chu Yin Fan v Inter Rivers Ltd held that it may, though the contrary view is that De Monsa\'s purposive restriction should not be read into the statutory duty.',
                      trap: 'Presenting the "back door" result as settled. It rests on a District Court decision and a remark in De Monsa that the lecture itself calls mysterious.',
                    },
                    points: [
                      'Ribeiro PJ and Gleeson NPJ noted in De Monsa "for future reference that section 13A(2) allows recourse to the common law if the specified originals cannot be delivered".',
                      'Chu Yin Fan v Inter Rivers Ltd DCCJ 4314/2012, 19/8/2016, [2017] HKEC 789: s13A(2) preserved the De Monsa common law rule, which should be applied where the parties agreed to give title in accordance with s13A.',
                      'The alternative view is that De Monsa\'s purposive approach does not apply to the statutory duty, so that the common law duty may now be LESS onerous than the statutory one.',
                      'On that view solicitors may be well advised to contract for the common law duty instead — provided that does not contradict the preliminary agreement or the purchaser agrees.',
                    ],
                  },
                  {
                    label: 'Test the answer against Zhang, where the vendor lost',
                    detail: 'In Zhang Xueshuai v Lai Chan Wing [2015] 2 HKC 125, [2015] 2 HKLRD 246, CA, the vendor agreed to give title in accordance with s13A but could supply only certified copies, with a statutory declaration by his solicitor that after extensive searches he could not explain how the documents came to be missing.',
                    why: 'Zhang is the reminder that the De Monsa approach is not a blanket excuse. Where every original is gone and the property carries alienation restrictions, the equitable mortgage risk becomes real rather than fanciful.',
                    exam: {
                      write: 'The statutory declaration spoke only to the period after [the declarant] took over and could not properly explain the loss of the original title documents; all the deeds being missing, the risk of an equitable mortgage is real, and the requisition was properly raised but not satisfactorily answered.',
                      trap: 'Overlooking why the alienation restrictions mattered. The flat was a Home Ownership Scheme flat under s17B of the Housing Ordinance, and an equitable mortgage over it would be void unless the Director of Housing had approved.',
                    },
                    points: [
                      'Two registered sale and purchase agreements had not been completed and both purchasers were financial lending institutions, raising a suspicion that they were disguised lending transactions.',
                      'The possibility that the then owner had used the original title documents for borrowing could not be excluded.',
                      'The statutory declaration could not properly speak to the reason for the loss.',
                      'Cheung CJHC queried whether Litton NPJ\'s analysis applies where the memorandum only evidenced the equitable mortgage rather than creating it, since s3(2) of the Land Registration Ordinance renders null and void a registrable but unregistered instrument, not the underlying transaction insofar as it can survive without the instrument.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'Delivery of originals is part of GIVING title; production of originals or certified copies is part of SHOWING it. The same documents, two different duties.',
                'A certified copy must be of the original or of a certified copy — never of a plain copy: De Monsa Investments Ltd v Whole Win Management Fund Ltd [2013] 5 HKC 350, CFA.',
                'The De Monsa restriction is purposive (is there a realistic possibility of a transaction affecting the land?); the s13A restriction is temporal (does the document fall within the chain of title period?). They are different cuts.',
                'Where no undertaking to return the deeds is taken, the purchaser has a lien on the deeds supplied for the return of the deposit — useful only if the originals were sent.',
              ],
            },
            skills: {
              bullets: [
                'State the date of the agreement first. It decides the regime, and the regime decides the rest.',
                'When advising a vendor with missing originals, consider whether contracting for the common law duty is safer than the statutory one, and whether the preliminary agreement allows it.',
                'When answering a requisition about a missing original, identify the specific transaction that is feared and explain why it is fanciful — a bare statutory declaration will not do.',
              ],
            },
            skeleton: {
              bullets: [
                'Date the agreement and identify the governing regime.',
                'Identify which documents relate exclusively to the property.',
                'Under the common law: which originals are in the vendor\'s possession or power?',
                'For those that are not, is there a realistic possibility of a transaction affecting the land?',
                'Under s13A: are the documents within the chain of title period?',
                'Address the equitable mortgage risk specifically.',
                'Conclude on whether good title has been given, and on the remedy.',
              ],
            },
            mistakes: {
              bullets: [
                'Applying s13A to a pre-11 July 2008 agreement.',
                'Requiring a Re Halifax statutory declaration for every missing original.',
                'Treating the Chu Yin Fan back door as settled law.',
                'Forgetting that the Government lease and Conditions do not usually relate exclusively to the property.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'Unless the contrary intention is expressed, a purchaser of land shall be entitled to require the vendor to deliver to him, for the purpose of giving title to that land, the original of both of the following only: (a) if there is a Government lease that relates exclusively to the land, the lease; and (b) any document that relates exclusively to the land and is required to be produced by the vendor as proof of title to that land under s 13(1)(a) and (c).', cite: 's13A(1), Conveyancing and Property Ordinance (Cap. 219), as reproduced in the LG3 notes and slides' },
                { text: 'The vendor\'s inability to produce an original document of title rather than a certified copy and to account for the absence of the original to a standard of proof required for secondary evidence, would only have justified refusal to complete where the absence of the original would indicate the realistic possibility of some transaction affecting the land which could affect the purchaser if he took title.', cite: 'De Monsa Investments Ltd v Whole Win Management Fund Ltd [2013] 5 HKC 350, CFA, per Ribeiro PJ and Gleeson NPJ, as reproduced in the LG3 notes' },
              ],
              table: {
                headers: ['Point', 'Authority', 'What it establishes'],
                rows: [
                  ['The old understanding', 'Yiu Ping Fong v Lam Lai Hing Lana [1998] 4 HKC 476; Loyal Hope Ltd v Leung Pui Ming HCA 136/2007', 'Thought to require all originals back to the ultimate root, with Re Halifax declarations for those missing'],
                  ['Restated', 'De Monsa Investments Ltd v Whole Win Management Fund Ltd [2013] 5 HKC 350, CFA', 'Originals in possession or power; explanation only where absence indicates a realistic possibility of a transaction affecting the land'],
                  ['Proprietary right', 'Re Williams and Newcastle\'s Contract [1897] 2 Ch 144', 'The purchaser has a proprietary right to the documents relating exclusively to the property'],
                  ['Certified copies', 'De Monsa Investments Ltd v Whole Win Management Fund Ltd [2013] 5 HKC 350, CFA', 'A certified copy of a certified copy is acceptable; a certified copy of a plain copy is not'],
                  ['The statute', 's13A, Conveyancing and Property Ordinance (Cap. 219)', 'Government lease relating exclusively to the land, plus documents required under s13(1)(a) and (c)'],
                  ['No retrospective effect', 'Donpower Trading Ltd v Apexcom [2010] 1 HKLRD 915, CA', 'Section 13A applies only to agreements signed after 11 July 2008'],
                  ['Breach', 'Big Most Ltd v Chau Wa Hung [2012] 4 HKLRD 599', 'Failure to provide originals under s13A is a repudiatory breach'],
                  ['Ownership of deeds', 'Re Duthy and Jesson\'s Contract [1898] 1 Ch 419; s13A(3)', 'The common law right to the deeds, removed save for those deliverable under s13A'],
                  ['Common law preserved', 's13A(2); Chu Yin Fan v Inter Rivers Ltd DCCJ 4314/2012, 19/8/2016, [2017] HKEC 789', 'Held that De Monsa applies even to a s13A duty; the contrary view is also arguable'],
                  ['Where it failed', 'Zhang Xueshuai v Lai Chan Wing [2015] 2 HKC 125, [2015] 2 HKLRD 246, CA', 'All originals missing; HOS flat under s17B Housing Ordinance; equitable mortgage risk real; requisition not satisfactorily answered'],
                ],
              },
            },
            notes: [
              {
                heading: 'Untangling three different duties: s13, s13A, and the common law',
                bullets: [
                  'All three answer a different question, and running them together is the single most common mistake on this topic.',
                  's13 governs SHOWING title: an evidential, production duty. The vendor lets the purchaser see the paper trail, and s13(2) lets a certified copy do that job — nothing needs to change hands.',
                  's13A and the common law both govern GIVING title: a physical, delivery duty. The vendor must actually hand over documents at completion, and only the original will do — a certified copy cannot discharge either duty, however good a job it does for showing title.',
                  's13A and the common law are ALTERNATIVES, not two layers of the same duty on top of each other. Which one applies turns on the date of the agreement, or an express choice — never both at once on the same document.',
                ],
                table: {
                  headers: ['', 's13 — showing title', 's13A — giving title', 'Common law — giving title'],
                  rows: [
                    ['What it is', 'Production: let the purchaser see the documents', 'Delivery: hand over the originals', 'Delivery: hand over the originals'],
                    ['Form that satisfies it', 'Original or a certified copy: s13(2)', 'Only the original — a certified copy will not do', 'Only the original — a certified copy will not do'],
                    ['What must be produced or delivered', 'Everything from the intermediate root forward, i.e. within the s13(1) period', 'Only two things: the Government lease if it relates exclusively to the land, and the s13(1)(a) and (c) documents: s13A(1)', 'Everything relating exclusively to the property that is actually in the vendor\'s possession or power, as restated in De Monsa'],
                    ['When it applies', 'Always, subject to the agreement', 'Agreements made on or after 11 July 2008, unless the parties adopt the common law instead: s13A(2)', 'Agreements made before 11 July 2008, or where the parties expressly adopt it instead of s13A'],
                    ['A missing document', 'Not in issue — a certified copy is all s13 ever asked for', 'No duty to deliver anything outside those two categories at all, so there is nothing to explain', 'Explain only where the absence indicates a realistic possibility of a transaction affecting the land, e.g. an equitable mortgage by deposit'],
                  ],
                },
              },
            ],
            crossRefs: [
              { session: 'LG3', issue: 'documents-of-title', label: 'Which documents are documents of title?' },
              { session: 'LG4', issue: 'statutory-period-s13', label: 'The statutory period for showing title' },
              { session: 'LG4', issue: 'missing-deeds-re-halifax', label: 'Missing title deeds and the rule in Re Halifax' },
              { session: 'LG4', issue: 'raising-requisitions', label: 'Raising requisitions: the time limits' },
              { session: 'LG4', issue: 'ultimate-root', label: 'The ultimate root of title' },
              { session: 'LG4', issue: 'chain-of-title', label: 'The chain of title and registration of title documents' },
            ],
          },
          {
            id: 'documents-of-title',
            title: 'Which documents are documents of title?',
            summary: 'A working list, and the question that runs through it: does this document relate exclusively to the property, and could it affect the purchaser?',
            triggers: {
              bullets: [
                'The vendor refuses to produce the occupation permit for a building constructed in 1950.',
                'The deed of mutual covenant for a small house development deals only with common areas and allocates no shares.',
                'A sub-deed of mutual covenant exists for the floor on which the unit sits.',
                'The certificate of compliance relates to Conditions dated before 1 January 1970.',
                'The land was sectioned by deed poll and the purchaser asks for it.',
                'The vendor offers a grant of probate and the purchaser says he wants letters of administration.',
                'A car park layout plan has been superseded by an amended plan.',
                'An instrument is registered only in the deeds pending registration section of the land register.',
                'A permit was issued by Government allowing a balcony to overhang Government land.',
                'The occupation permit does not mention the car parking space being sold.',
              ],
              routes: [
                { when: 'The question is whether the ORIGINAL must be handed over', session: 'LG3', issue: 'original-title-deeds', label: 'Original title deeds: common law and section 13A' },
                { when: 'The question is the period over which title must be shown', session: 'LG4', issue: 'statutory-period-s13', label: 'The statutory period for showing title' },
                { when: 'The document is the Government lease, a modification or a surrender', session: 'LG4', issue: 'ultimate-root', label: 'The ultimate root of title' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Deciding whether a document must be produced',
                steps: [
                  {
                    label: 'Ask whether the document relates exclusively to the property',
                    detail: 'The following will normally NOT relate exclusively to the property: the Government lease and Conditions of Grant, the deed of mutual covenant, the occupation permit and the certificate of compliance. The following will normally relate exclusively to it: assignments, mortgages and discharges. Powers of attorney may fall into either category.',
                    why: 'Exclusivity is the gate for the DELIVERY duty, not for production. A document can be a document of title that must be produced while not being one whose original must be handed over.',
                    exam: {
                      write: 'The [assignment / mortgage / discharge] relates exclusively to the property, so its original must be delivered; the [deed of mutual covenant / occupation permit] does not, and need only be produced.',
                      trap: 'Merging the two duties. Goldmex Ltd v Edward Wong Finance Co Ltd [2006] 2 HKLRD 795 holds there is no duty to provide the ORIGINALS of title deeds which do not relate exclusively to the property sold.',
                    },
                    points: [
                      'Not exclusive: Government lease, Conditions of Grant, deed of mutual covenant, occupation permit, certificate of compliance.',
                      'Exclusive: assignments, mortgages, discharges.',
                      'Powers of attorney may fall into either category.',
                    ],
                  },
                  {
                    label: 'Apply the prima facie test for a registered instrument',
                    detail: 'In Wong Bik Ching v Yu Hon Cheung [1997] 4 HKC 38, Recorder Edward Chan QC said that prima facie, where an instrument was registered against the property and it was not apparent from the land search that it had ceased to affect the property, the document ought to be treated as part of the title deeds which the vendor should make available.',
                    why: 'The reasoning is practical: without actually seeing the document, how can the purchaser know in what way, if at all, he would be affected by it? The burden of showing it is harmless falls on the party who has it.',
                    exam: {
                      write: 'The instrument being registered against the property, and it not being apparent from the land search that it has ceased to affect it, it is prima facie part of the title deeds the vendor should make available: Wong Bik Ching v Yu Hon Cheung [1997] 4 HKC 38.',
                      trap: 'Stating the test as absolute. Li CJ in Chen Paul emphasised that the matter is only prima facie and may be displaced on examination, and that the approach applies to instruments properly registrable under the Land Registration Ordinance.',
                    },
                    points: [
                      'The approach was quoted with approval by Li CJ in Chen Paul v Lord Energy Ltd [1999] 1 HKC 1, [1999] 1 HKLRD 205, CFA.',
                      'It is only prima facie and may be displaced on examination.',
                      'It applies to registered instruments that are properly registrable under the Land Registration Ordinance.',
                    ],
                  },
                  {
                    label: 'Work through the list, document by document',
                    detail: 'The lecture gives a worked list of the documents most commonly argued about.',
                    why: 'Each entry carries its own qualification, and it is the qualification that the examiner is testing — the DMC only where it subdivides ownership, the certificate of compliance only for post-1970 Conditions, and so on.',
                    exam: {
                      write: 'The [document] is a document of title which the vendor must produce, [subject to the qualification that ...].',
                      trap: 'Producing the list without its qualifications. Nearly every entry has one.',
                    },
                    points: [
                      {
                        text: 'Deed of mutual covenant, and any sub-deed.',
                        points: [
                          'Required: Lim Sui Chun v Billion Light Investment Ltd [2000] 2 HKC 621; sub-deeds, Silver Pioneer International Ltd v Good Onwards Co Ltd HCMP 4807/2003.',
                          'But only where the deed involves the subdivision of ownership: Fortune Link Ltd v Grand House Ltd [2010] 1 HKC 253, where a small house development\'s DMC dealt only with common areas and no division of shares, and was held not a document of title, per Reyes J.',
                        ],
                      },
                      {
                        text: 'Certificate of compliance.',
                        points: [
                          'Chen Paul v Lord Energy Ltd [1999] 1 HKC 1, [1999] 1 HKLRD 205, CFA.',
                          'It must be registered to provide evidence of the conversion of the equitable interest into a legal estate: Tai Wai Kin v Cheung Wan Wah [2004] 3 HKC 198, applying s14(3)(a) of the Conveyancing and Property Ordinance.',
                          'A certificate in respect of Conditions dated before 1 January 1970 need not be produced: Minchest Ltd v Lau Tsui Kwai [2008] 2 HKC 283, CFA, s14(2) providing that it need not be produced for the purpose of the deemed conversion.',
                        ],
                      },
                      {
                        text: 'Deeds poll whereby land was sectioned.',
                        points: [
                          'Choy Son Fai v Yeung Miu Kwan Brendy DCMP 1972/2013, 28/1/2015: deeds poll show how the land was physically sub-divided, and deeds of surrender how land was carved out and surrendered; it may not be necessary in every transaction to produce the deed poll, and there was no obligation on the facts because the identification of the land was not in challenge.',
                          'Contrast Chan Ka Ching v Yiu Sui Fong DCCJ 4434/2014, 26/6/2015, where HH Judge Levy ruled that a deed poll, a deed of rectification of it and a building licence fell within the definition of "Crown lease" in s3(2) of the Interpretation and General Clauses Ordinance (Cap. 1).',
                        ],
                      },
                      {
                        text: 'Occupation permit.',
                        points: [
                          'No building may be occupied unless the Building Authority has issued one: s21 of the Buildings Ordinance; it confirms compliance with that Ordinance in construction: Lui Kwok Wai v Chan Yiu Hing [1995] 1 HKC 197.',
                          'Not needed for a building constructed before the present Buildings Ordinance came into force in 1956, which was governed by the former Buildings Ordinance 1935, and where there is no real risk of enforcement: Forever Business Ltd v Long Surplus International [2007] 3 HKC 462, [2007] 2 HKLRD 700, CA.',
                          'That the permit does not mention a car parking space does not render the title defective: Goldmex Ltd v Edward Wong Finance Co Ltd [2006] 2 HKLRD 795.',
                        ],
                      },
                      {
                        text: 'Certificate of exemption, for exempted small houses in the New Territories.',
                        points: [
                          'Issued under s5 of the Buildings Ordinance (Application to the New Territories) Ordinance (Cap. 121).',
                          'Choy Son Fai v Yeung Miu Kwan Brendy DCMP 1972/2013, 28/1/2015: the vendor had a duty to supply the certificates for the building works, site formation works and drainage works.',
                        ],
                      },
                      {
                        text: 'Consents and permits.',
                        points: [
                          'Consent to alienate granted under the Consent Scheme, and any permit issued by Government.',
                          'Lam Chung Yan v Wu Yuk Ying HCMP 1011/2005, 9/9/2005: a Government permit allowing a balcony to overhang Government land had to be provided by way of showing title.',
                        ],
                      },
                      {
                        text: 'Grants of representation.',
                        points: [
                          'A grant of probate is probably NOT a document of title: Chu Wing Yip v Leung Siu Yuk [1997] HKLRD 29, CA.',
                          'Letters of administration ARE title documents.',
                        ],
                      },
                      {
                        text: 'Plans.',
                        points: [
                          'Plans mentioned in the Government lease, Conditions of Grant or deed of mutual covenant must be properly colour coded: Tai Wai Kin v Cheung Wan Wah [2004] 3 HKC 198.',
                          'Non-correspondence of the actual building with the plans might render the title defective: Fan Tony v Incorporated Owners of Kung Lok Building [2006] 3 HKC 240.',
                          'Car park layout plans must be produced unless replaced by subsequent plans: Chen Paul v Lord Energy Ltd; Sunlink Group (HK) Co Ltd v Sorrayo Investments Ltd [1999] 2 HKLRD 468, followed in Chau So Man Sue v Chow Wai Fong Alice [2022] HKCE 793 and Ample Happiness Ltd v Sunrise Enterprises Holdings Ltd [2022] HKDC 1007.',
                        ],
                      },
                      {
                        text: 'Sale and purchase agreements in the chain of title period.',
                        points: [
                          'A vexed question. Kong King Ong Alexander v Kan Heung Wing [2013] 1 HKLRD 1136 held they must be produced so the purchaser can check whether all the terms have merged into the consequent assignments.',
                        ],
                      },
                      {
                        text: 'Documents pending registration.',
                        points: [
                          'An instrument registered against the title must be produced even where it is registered only in the deeds pending registration section: Wong Kum Chi v Lee Tit Ying [2003] 1 HKLRD 594; Goldenwick Ltd v Standard Chartered Bank (Hong Kong) Ltd [2008] 3 HKLRD 266.',
                        ],
                      },
                    ],
                  },
                  {
                    label: 'Remember the pre-intermediate root documents Godfrey JA had in mind',
                    detail: 'In the Court of Appeal in Chen Paul v Lord Energy Ltd [1998] 1 HKC 702, Godfrey JA said that documents such as occupation permits, certificates of compliance and other documents of that sort in the pre-intermediate root period, which demonstrate that the vendor was entitled to a legal estate and that his title was not defeasible, were instruments by which the premises might be affected and ought to be produced when the purchaser asked for them.',
                    why: 'This keeps the list from being read as confined to the chain of title period. Many such documents will in any event have to be produced because the intermediate root refers to them, under s13(1)(b).',
                    exam: {
                      write: 'Although in the pre-intermediate root period, the [occupation permit / certificate of compliance] demonstrates that the vendor was entitled to a legal estate and that his title is not defeasible, and ought to be produced on request.',
                      trap: 'Forgetting the s13(1)(b) route. Many such documents are required anyway because they are mentioned in the intermediate root of title document.',
                    },
                    points: [
                      'The documents demonstrate the vendor\'s entitlement to a legal estate and that the title is not defeasible.',
                      'Many will be required under s13(1)(b) of the Conveyancing and Property Ordinance as documents referred to in the intermediate root.',
                    ],
                  },
                  {
                    label: 'Check whether the document has been superseded',
                    detail: 'The Court of Appeal ruled in De Monsa Investments Ltd v Whole Win Management Fund Ltd [2011] 4 HKLRD 478 that there is no obligation on a vendor to produce certified copies of title documents which have been replaced by subsequent title documents duly produced.',
                    why: 'A superseded document cannot affect the purchaser, so producing it would serve no purpose. The principle also disposes of the car park plan point where an amended plan exists.',
                    exam: {
                      write: 'The [1979 pump pit agreement / earlier car park layout plan] has been replaced by the [1988 agreement / amended plan], which has been duly produced, so there is no obligation to produce the earlier document.',
                      trap: 'Confining this to chain of title documents. It applies both within the chain of title period and to pre-intermediate root documents in respect of which a requisition has been raised.',
                    },
                    points: [
                      'The facts were a pump pit agreement dated 1979 replaced by one dated 1988.',
                      'The principle may well apply to car park layout plans replaced by amended plans.',
                      'It applies to documents within the chain of title period and to pre-intermediate root documents alike.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'A deed of mutual covenant is a document of title only where it involves the subdivision of ownership — Fortune Link is the exception and it is a small house development.',
                'Probate is probably not a title document but letters of administration are. The distinction is small and examinable.',
                'A certificate of compliance for pre-1 January 1970 Conditions need not be produced, which dovetails with the deemed conversion point in LG1.',
                'Goldmex does double duty here: no originals for non-exclusive documents, and no defect where the occupation permit omits a car space.',
              ],
            },
            skeleton: {
              bullets: [
                'Identify the document and what it does.',
                'Ask whether it relates exclusively to the property, for the delivery duty.',
                'Ask whether it is registered against the property and not shown to have ceased to affect it.',
                'Apply the specific authority on that class of document, with its qualification.',
                'Check whether it has been superseded by a later document duly produced.',
                'Conclude whether it must be produced, delivered, or neither.',
              ],
            },
            mistakes: {
              bullets: [
                'Requiring the original of a document that does not relate exclusively to the property.',
                'Treating every deed of mutual covenant as a document of title.',
                'Producing the list without the qualifications attached to each entry.',
                'Requiring a superseded plan or agreement once the replacement has been produced.',
              ],
            },
            authorities: {
              table: {
                headers: ['Document', 'Authority', 'Position'],
                rows: [
                  ['Non-exclusive documents', 'Goldmex Ltd v Edward Wong Finance Co Ltd [2006] 2 HKLRD 795', 'No duty to provide originals of title deeds which do not relate exclusively to the property'],
                  ['Registered instruments', 'Wong Bik Ching v Yu Hon Cheung [1997] 4 HKC 38; Chen Paul v Lord Energy Ltd [1999] 1 HKC 1, CFA', 'Prima facie part of the title deeds if not shown to have ceased to affect the property; displaceable on examination'],
                  ['Deed of mutual covenant', 'Lim Sui Chun v Billion Light Investment Ltd [2000] 2 HKC 621; Silver Pioneer International Ltd v Good Onwards Co Ltd HCMP 4807/2003; Fortune Link Ltd v Grand House Ltd [2010] 1 HKC 253', 'Required, including sub-deeds, but only where it involves subdivision of ownership'],
                  ['Certificate of compliance', 'Chen Paul v Lord Energy Ltd; Tai Wai Kin v Cheung Wan Wah [2004] 3 HKC 198; Minchest Ltd v Lau Tsui Kwai [2008] 2 HKC 283, CFA', 'Required and must be registered; not needed for pre-1 January 1970 Conditions'],
                  ['Deed poll', 'Choy Son Fai v Yeung Miu Kwan Brendy DCMP 1972/2013, 28/1/2015; Chan Ka Ching v Yiu Sui Fong DCCJ 4434/2014, 26/6/2015', 'Shows physical sub-division; not required in every case; may fall within the "Crown lease" definition'],
                  ['Occupation permit', 's21, Buildings Ordinance; Lui Kwok Wai v Chan Yiu Hing [1995] 1 HKC 197; Forever Business Ltd v Long Surplus International [2007] 3 HKC 462, CA', 'Required; not for buildings constructed before 1956 with no real risk of enforcement'],
                  ['Certificate of exemption', 's5, Buildings Ordinance (Application to the New Territories) Ordinance (Cap. 121)', 'Required for exempted small houses: building works, site formation works and drainage works'],
                  ['Government permit', 'Lam Chung Yan v Wu Yuk Ying HCMP 1011/2005, 9/9/2005', 'A permit for a balcony overhanging Government land had to be provided'],
                  ['Probate and letters of administration', 'Chu Wing Yip v Leung Siu Yuk [1997] HKLRD 29, CA', 'Probate probably not a document of title; letters of administration are'],
                  ['Plans', 'Tai Wai Kin v Cheung Wan Wah [2004] 3 HKC 198; Fan Tony v IO of Kung Lok Building [2006] 3 HKC 240', 'Must be properly colour coded; non-correspondence with the building may render title defective'],
                  ['Car park layout plans', 'Chen Paul v Lord Energy Ltd; Sunlink Group (HK) Co Ltd v Sorrayo Investments Ltd [1999] 2 HKLRD 468', 'Must be produced unless replaced by subsequent plans'],
                  ['Sale and purchase agreements', 'Kong King Ong Alexander v Kan Heung Wing [2013] 1 HKLRD 1136', 'Must be produced so the purchaser can check merger into the assignments'],
                  ['Deeds pending registration', 'Wong Kum Chi v Lee Tit Ying [2003] 1 HKLRD 594; Goldenwick Ltd v Standard Chartered Bank (Hong Kong) Ltd [2008] 3 HKLRD 266', 'Must be produced even though registered only in that section'],
                  ['Superseded documents', 'De Monsa Investments Ltd v Whole Win Management Fund Ltd [2011] 4 HKLRD 478, CA', 'No obligation to produce a document replaced by a later one duly produced'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG3', issue: 'original-title-deeds', label: 'Original title deeds: common law and section 13A' },
              { session: 'LG4', issue: 'ultimate-root', label: 'The ultimate root of title' },
              { session: 'LG4', issue: 'intermediate-root', label: 'The intermediate root of title' },
              { session: 'LG2', issue: 'sub-dmc', label: 'Sub-deeds of mutual covenant' },
              { session: 'LG4', issue: 'raising-requisitions', label: 'Raising requisitions: the time limits' },
              { session: 'LG3', issue: 'encumbered-or-defeasible', label: 'Encumbered and defeasible titles' },
              { session: 'LG4', issue: 'chain-of-title', label: 'The chain of title and registration of title documents' },
              { session: 'LG1', issue: 'ddh-and-approvals', label: 'DDH clauses, alienation and other required approvals' },
            ],
          },
        ],
      },
    },
    LG4: {
      kind: 'LG',
      date: '2026-09-24',
      time: '09:00-11:30',
      mode: 'Face-to-face',
      authors: ['Alwin Chan'],
      objectives: [
        'Identify the period over which a vendor must show title, and the documents that period requires.',
        'Locate the ultimate and intermediate roots of title on a given set of facts, and say what each brings with it.',
        'Prove a link in the chain of title where a document is missing, using secondary evidence or a recital.',
        'Advise a purchaser on raising a requisition, including whether a late one may still be raised.',
        'Advise a vendor on answering a requisition adequately, with candour, and in time.',
      ],
      topicsCovered: [
        'Showing title distinguished from giving title, and what production means',
        'The statutory period under s13(1) of the Conveyancing and Property Ordinance, and varying it by agreement',
        'The ultimate root of title: the Government lease, letters of modification, deeds of surrender, illegibility and marginal notes',
        'The intermediate root of title, and the documents referred to in it under s13(1)(b)',
        'The chain of title, proving each link, and which title documents must be registered',
        'Pre-intermediate root title defects',
        'Powers of attorney under s13(1)(c)',
        'Originals and certified copies under s13(2), and missing deeds under the rule in Re Halifax',
        'Recitals in proving title: ss13(3) and 13(4)',
        'Matters of mere conveyance',
        'Investigation of title by the purchaser\'s solicitor',
        'Requisitions: time limits, express and implied',
        'Raising requisitions out of time, and the "root of the vendor\'s title" exception',
        'The subject matter of requisitions: specific, not speculative',
        'The vendor\'s duty to answer with candour, and the time for answering',
      ],
      examNotes: {
        intro: 'LG4 is the second half of one topic: LG3 was about GIVING good title, this is about SHOWING it. The duty has two limbs — producing the documents, and answering the requisitions — and the issue types below follow that split. Keep in mind throughout that a vendor who fails here loses the sale even if his title is in fact perfect.',
        issueTypes: [
          {
            id: 'showing-vs-giving',
            title: 'Showing title: production and requisitions',
            summary: 'Two limbs: produce the documents, and answer the requisitions. A perfect title is no defence to failing either.',
            triggers: {
              bullets: [
                'The vendor has produced every document the agreement required but has answered a requisition with a bare assertion.',
                'The purchaser rescinded at completion although the vendor could in fact have proved a perfect title.',
                'A requisition was raised out of time and the vendor refused to answer it; at completion the title was still not good.',
                'The vendor says he has discharged his obligations because he complied with s13 of the Conveyancing and Property Ordinance.',
                'The purchaser wants to know whether he must accept certified copies rather than originals.',
                'The agreement requires proof of title in accordance with s13 and the giving of title in accordance with s13A.',
                'The purchaser says the vendor must both produce the deeds and explain the gap in the chain.',
                'The vendor asks whether answering a requisition cures a defect in the title itself.',
                'A document produced by way of showing title turns out to reveal a defect in the title.',
              ],
              routes: [
                { when: 'The question is the content of the duty to GIVE good title', session: 'LG3', issue: 'twin-duties', label: 'The twin duties of giving and showing title' },
                { when: 'The question is the period over which title must be shown', session: 'LG4', issue: 'statutory-period-s13', label: 'The statutory period for showing title' },
                { when: 'The complaint is about the adequacy of an answer', session: 'LG4', issue: 'answering-requisitions', label: 'Answering requisitions with candour' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Working through the duty to show title',
                steps: [
                  {
                    label: 'State the two limbs',
                    detail: 'The applicable duty of the vendor to show title involves the production of title documents, originals or certified copies, and the satisfactory answering of requisitions reasonably raised.',
                    why: 'Both limbs are about satisfying the purchaser rather than about the state of the land. That is why a vendor with a perfect title can fail this duty and lose the sale.',
                    exam: {
                      write: 'The vendor\'s duty to show title requires him both to produce the title documents, originals or certified copies, and to answer satisfactorily any requisitions reasonably raised.',
                      trap: 'Treating production alone as discharging the duty. Half the litigation in this area is about the second limb.',
                    },
                    points: [
                      'Limb one: production of title documents, originals or certified copies.',
                      'Limb two: satisfactory answering of requisitions reasonably raised.',
                      'The extent of the duty depends on the agreement; s13 of the Conveyancing and Property Ordinance supplies the default.',
                    ],
                  },
                  {
                    label: 'Keep the duty separate from the duty to give title',
                    detail: 'The duty to give good title and the duty to show title, usually in compliance with s13 of the Conveyancing and Property Ordinance, are separate and distinct: Hui Kwok Hau v Hui Mei Mei [2023] HKCFI 1654.',
                    why: 'Their independence is what produces the results below. If they were one duty, a good title would cure a bad answer and a late requisition would end the matter.',
                    exam: {
                      write: 'The duties to show and to give good title are separate and distinct: Hui Kwok Hau v Hui Mei Mei [2023] HKCFI 1654.',
                      trap: 'Citing s13 for the duty to give title. It governs proof of title, which is showing.',
                    },
                    points: [
                      'Showing: s13 of the Conveyancing and Property Ordinance.',
                      'Giving: s13A of that Ordinance, or the common law.',
                    ],
                  },
                  {
                    label: 'Result one: failing to show it is enough, even with a good title',
                    detail: 'A purchaser is entitled to rescind where the vendor has failed to show good title — for example by failing adequately to answer requisitions — even if the vendor actually has a good title: Active Keen Industries Ltd v Fok Chi Keung [1994] 1 HKLR 396.',
                    why: 'The purchaser bought a title he could satisfy himself about, and the vendor who will not explain has not delivered that.',
                    exam: {
                      write: 'Although the vendor may have a good title, his failure adequately to answer the requisition is a failure to show title and the purchaser may rescind: Active Keen Industries Ltd v Fok Chi Keung [1994] 1 HKLR 396.',
                      trap: 'Letting the vendor argue, after the event, that the defect turned out to be harmless.',
                    },
                    points: [
                      'It is no excuse that the vendor actually had a good title: Kok Chong Ho v Double Value Developments Ltd [1993] 2 HKLR 423, CA.',
                    ],
                  },
                  {
                    label: 'Result two: no requisition, or a late one, does not save the vendor',
                    detail: 'A purchaser is entitled to rescind even where he has failed to raise a requisition, or raised it out of time so that the vendor was entitled to refuse to answer, where the vendor does not establish a good title at or before completion: Profit World Trading Ltd v Ho So Yung [2011] 2 HKC 473, CA.',
                    why: 'Requisitions are the vendor\'s opportunity to extricate himself by returning the deposit if defects emerge that cannot be cleared in time. They are not a mechanism for shifting the burden of title onto the purchaser.',
                    exam: {
                      write: 'The vendor either was in a position to give good title at completion or he was not; requisitions cannot alter the nature of that obligation: Profit World Trading Ltd v Ho So Yung [2011] 2 HKC 473, CA.',
                      trap: 'Treating a refusal to answer a late requisition as the end of the matter. It is not: the duty to give title survives.',
                    },
                    points: [
                      'There is no obligation on a purchaser to raise any requisition.',
                      'The contrary rule would reverse the legal burden of giving good title: Flywin Co Ltd v Strong & Associates Ltd (2002) 5 HKCFAR, CFA.',
                    ],
                  },
                  {
                    label: 'Classify the breach and state the remedy',
                    detail: 'Breach of either the duty to give good title or the duty to show title may constitute a repudiatory breach entitling the purchaser to rescind: Big Most Ltd v Chau Wa Hung [2012] 4 HKLRD 599.',
                    why: 'Rescission is not automatic. The significance of the breach is what decides between rescission and damages, and it is the step candidates skip.',
                    exam: {
                      write: 'The vendor\'s failure [to produce the document / to answer the requisition adequately] is a repudiatory breach entitling the purchaser to rescind.',
                      trap: 'Confusing rescission here with rescission ab initio. The purchaser terminates for repudiatory breach.',
                    },
                    points: [
                      'Either duty may be breached repudiatorily.',
                      'Whether it is repudiatory depends on the significance of the breach.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The agreement governs. Section 13 applies "unless the contrary intention is expressed", so the express terms come first.',
                'Section 13(2) lets the vendor produce a certified copy in place of an original for the purpose of SHOWING title — which is a different question from what must be DELIVERED.',
                'Active Keen is about the answer; Profit World is about the absence of a requisition. Keep them apart.',
                'Hui Kwok Hau [2023] HKCFI 1654 is the convenient modern summary of the case law on both duties.',
              ],
            },
            skeleton: {
              bullets: [
                'State the two limbs of the duty to show title.',
                'Read the agreement for express terms, then fall back on s13.',
                'Identify which limb has been breached.',
                'State that the duty is independent of the duty to give title.',
                'Classify the breach and state the remedy.',
              ],
            },
            mistakes: {
              bullets: [
                'Treating compliance with s13 as discharging the duty to give title.',
                'Assuming a good title answers a complaint about showing.',
                'Assuming a purchaser who raised no requisition has accepted the title.',
                'Rescinding without asking whether the breach was significant.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Authority', 'What it establishes'],
                rows: [
                  ['Separate duties', 'Hui Kwok Hau v Hui Mei Mei [2023] HKCFI 1654', 'Summarises the case law on giving and showing good title'],
                  ['Good title no answer', 'Active Keen Industries Ltd v Fok Chi Keung [1994] 1 HKLR 396', 'Rescission for failure to show title although the vendor had good title'],
                  ['Same', 'Kok Chong Ho v Double Value Developments Ltd [1993] 2 HKLR 423, CA', 'It is no excuse that the vendor actually had a good title'],
                  ['No requisition needed', 'Profit World Trading Ltd v Ho So Yung [2011] 2 HKC 473, CA', 'Failure to raise, or lateness in raising, a requisition does not accept the title'],
                  ['Burden', 'Flywin Co Ltd v Strong & Associates Ltd (2002) 5 HKCFAR, CFA', 'The legal burden of giving good title rests on the vendor'],
                  ['Repudiatory breach', 'Big Most Ltd v Chau Wa Hung [2012] 4 HKLRD 599', 'Either duty may be breached repudiatorily'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG3', issue: 'twin-duties', label: 'The twin duties of giving and showing title' },
              { session: 'LG4', issue: 'statutory-period-s13', label: 'The statutory period for showing title' },
              { session: 'LG4', issue: 'answering-requisitions', label: 'Answering requisitions with candour' },
            ],
          },
          {
            id: 'statutory-period-s13',
            title: 'The statutory period for showing title',
            summary: 'Fifteen years, or since the grant if the grant is younger. Section 13(1) is the default; the agreement may lengthen or shorten it.',
            triggers: {
              bullets: [
                'The Government lease was granted in 2018 and the sale and purchase agreement is dated 2026.',
                'The Conditions of Grant date from 1962 and the vendor proposes to start the title at an assignment of 2007.',
                'The agreement says the vendor shall prove title in accordance with s13 "commencing with the Government lease of the said premises".',
                'The purchaser insists on being shown title back beyond the intermediate root.',
                'A document is referred to in the intermediate root assignment and has not been produced.',
                'A power of attorney was used to execute an assignment eleven years ago.',
                'The vendor refuses to produce any document dating from before the intermediate root.',
                'The vendor offers a certified copy of a certified copy of an assignment.',
                'The vendor offers a certified copy of a plain photocopy of an assignment.',
              ],
              routes: [
                { when: 'The question is which single document is the ultimate root', session: 'LG4', issue: 'ultimate-root', label: 'The ultimate root of title' },
                { when: 'The question is which document is the intermediate root', session: 'LG4', issue: 'intermediate-root', label: 'The intermediate root of title' },
                { when: 'The question is which ORIGINALS must be delivered at completion', session: 'LG3', issue: 'original-title-deeds', label: 'Original title deeds: common law and section 13A' },
                { when: 'The defect complained of is in the pre-intermediate root period', session: 'LG4', issue: 'pre-intermediate-defects', label: 'Pre-intermediate root title defects' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Fixing the period and the documents',
                steps: [
                  {
                    label: 'Read the agreement first',
                    detail: 'The vendor\'s duty to show title depends upon the terms of the sale and purchase agreement. In the absence of any express term, the extent of the duty is determined by s13(1) of the Conveyancing and Property Ordinance, which applies "unless the contrary intention is expressed".',
                    why: 'Section 13 is a default, not a floor or a ceiling. The parties can agree a longer or a shorter period, and a purchaser with bargaining power will often want a longer one.',
                    exam: {
                      write: 'The agreement [is silent, so s13(1) of the Conveyancing and Property Ordinance applies / provides expressly that title shall be proved [as stated], displacing the statutory period].',
                      trap: 'Reciting s13 without checking the agreement. The statutory period yields to an express term either way.',
                    },
                    points: [
                      'The statutory period is subject to any express term, longer or shorter.',
                      'C & W Watch Co Ltd v Chu Kwok Tai [2005] 4 HKC 78: the vendor agreed to prove title in accordance with s13 "commencing with the Government lease of the said premises", which showed an intention to prove title by providing originals or certified copies of all title documents back to the Government lease.',
                    ],
                  },
                  {
                    label: 'Fix the period under s13(1)(a)',
                    detail: 'Unless the contrary intention is expressed, a purchaser is entitled to require from the vendor, as proof of title, only production of the Government lease relating to the land sold, plus proof of title extending either since the grant (where the grant was less than 15 years before the contract of sale) or not less than 15 years before the contract (in any other case), commencing with an assignment, a mortgage by assignment or a legal charge, each dealing with the whole estate and interest in the land.',
                    why: 'The 15 years is a compromise between certainty and workability: long enough that most hidden interests would have surfaced, short enough that the search is possible. The lecture notes the period used to be sixty years.',
                    exam: {
                      write: 'The Government lease having been granted [more / less] than 15 years before the contract of sale dated [date], the vendor must show title [from the intermediate root, being the [assignment] dated [date] / for the whole period since the grant].',
                      trap: 'Forgetting that "Government lease" includes Conditions: s3 of the Interpretation and General Clauses Ordinance (Cap. 1).',
                    },
                    points: [
                      'Grant less than 15 years before the contract: the period runs since the grant.',
                      'In any other case: not less than 15 years before the contract, commencing with the intermediate root.',
                      'The intermediate root must be an assignment, a mortgage by assignment or a legal charge, each dealing with the whole estate and interest in the land.',
                      'The present period is generous; it used to be 60 years.',
                    ],
                  },
                  {
                    label: 'Add the documents s13(1)(b) brings with the intermediate root',
                    detail: 'Section 13(1)(b) requires production of any document referred to in the intermediate root assignment, mortgage or charge, creating or disposing of an interest, power or obligation, which is not shown to have ceased or expired, and subject to which any part of the land is disposed of.',
                    why: 'The intermediate root is a doorway, not a wall. Whatever it names as still affecting the land comes through with it, however old that document is.',
                    exam: {
                      write: 'The intermediate root assignment refers to [the deed registered by memorial no. [n]], which is not shown to have ceased or expired, so it must be produced under s13(1)(b) of the Conveyancing and Property Ordinance.',
                      trap: 'Refusing to produce a document merely because it is older than the intermediate root. If the root refers to it, s13(1)(b) requires it.',
                    },
                    points: [
                      'It applies, for example, to a deed creating an easement or restrictive covenant referred to in the intermediate root.',
                      'The intermediate root may mention the first assignment, the deed of mutual covenant and the certificate of compliance.',
                      'Greatek Investments Ltd v Lam Kit Sum HCA 8817/1998, 7/11/2000: an assignment and plan referred to in the intermediate root were not provided and the vendor had failed to show good title.',
                    ],
                  },
                  {
                    label: 'Add the powers of attorney under s13(1)(c)',
                    detail: 'Section 13(1)(c) requires production of any power of attorney under which any document produced is executed, where that document was executed less than 15 years before the contract of sale.',
                    why: 'A document executed under a power is only as good as the power. Within the last 15 years the power is close enough to matter and recent enough to be findable.',
                    exam: {
                      write: 'The [assignment] dated [date] was executed under a power of attorney less than 15 years before the contract of sale, so the power must be produced under s13(1)(c) of the Conveyancing and Property Ordinance.',
                      trap: 'Demanding the power of attorney under which the purchaser executes. The duty is on the vendor\'s side.',
                    },
                    points: [
                      'See the separate issue type for the exceptions and the present transaction.',
                    ],
                  },
                  {
                    label: 'Confirm what form the documents may take under s13(2)',
                    detail: 'Section 13(2) of the Conveyancing and Property Ordinance provides that the vendor may produce either the original or a certified copy — or an attested copy pre-1 November 1984 — of any title deed required to be produced by way of showing title.',
                    why: 'Showing title is an evidential exercise, so a reliable copy will do. That is precisely why the delivery duty under s13A is a separate question about originals.',
                    exam: {
                      write: 'By s13(2) of the Conveyancing and Property Ordinance the vendor may produce the original or a certified copy of any title deed required by way of showing title.',
                      trap: 'Accepting a certified copy of a plain copy. A certified copy must be of the original, or of a certified copy: De Monsa Investments Ltd v Whole Win Management Fund Ltd [2013] 5 HKC 350, CFA.',
                    },
                    points: [
                      'A certified copy of an original: acceptable.',
                      'A certified copy of a certified copy: acceptable.',
                      'A certified copy of a plain copy: not acceptable.',
                      'For pre-1 November 1984 documents, an attested copy.',
                    ],
                  },
                  {
                    label: 'Note what the vendor need NOT produce',
                    detail: 'There is no duty upon a vendor to produce title documents prior to the date fixed by s13 of the Ordinance: Dawson Properties Ltd v Hong Kong Niiroku Ltd [1997] 2 HKC 800.',
                    why: 'The whole point of a statutory period is that it ends. Without this rule the 15 years would be advisory.',
                    exam: {
                      write: 'The vendor is under no duty to produce title documents prior to the date fixed by s13: Dawson Properties Ltd v Hong Kong Niiroku Ltd [1997] 2 HKC 800.',
                      trap: 'Reading that as immunity from pre-intermediate root requisitions. Where the purchaser discovers a pre-intermediate root defect from his own checking, the vendor must answer the requisition.',
                    },
                    points: [
                      'The limit is on production, not on the duty to answer requisitions.',
                      'See the separate issue type on pre-intermediate root defects.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                '"Government lease" includes Conditions by virtue of s3 of the Interpretation and General Clauses Ordinance (Cap. 1) — and, as the ultimate root issue type shows, letters of modification and deeds of surrender too.',
                'The intermediate root must deal with the WHOLE estate and interest, so an equitable mortgage or charge will not do, nor will a discharge.',
                'A vendor holding only an equitable interest may have no qualifying intermediate root at all, and should insert a limiting clause.',
                'Section 13 is about showing; s13A is about giving. The overlap between them is the commonest confusion in this topic.',
              ],
            },
            skeleton: {
              bullets: [
                'Read the agreement for an express term on proof of title.',
                'Date the Government lease or Conditions against the contract of sale.',
                'Fix the period and identify the qualifying intermediate root.',
                'Add the documents referred to in the root under s13(1)(b).',
                'Add any power of attorney under s13(1)(c).',
                'Confirm the form of the documents under s13(2).',
              ],
            },
            mistakes: {
              bullets: [
                'Applying 15 years mechanically where the grant is more recent.',
                'Accepting an equitable mortgage or a discharge as the intermediate root.',
                'Refusing a document referred to in the intermediate root because it is older than the root.',
                'Accepting a certified copy of a plain copy.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'Unless the contrary intention is expressed, a purchaser of land shall be entitled to require from the vendor, as proof of title to that land, only production of the Government lease relating to the land sold and: (a) proof of title to that land (i) where the grant of the Government lease was less than 15 years before the contract of sale of that land, extending for the period since that grant; or (ii) in any other case, extending not less than 15 years before the contract of sale of that land commencing with an assignment, a mortgage by assignment or a legal charge, each dealing with the whole estate and interest in that land', cite: 's13(1)(a), Conveyancing and Property Ordinance (Cap. 219), as reproduced in the LG4 notes and slides' },
              ],
              table: {
                headers: ['Point', 'Provision or case', 'What it establishes'],
                rows: [
                  ['The period', 's13(1)(a), Conveyancing and Property Ordinance (Cap. 219)', 'Since the grant if less than 15 years old; otherwise not less than 15 years, from a qualifying intermediate root'],
                  ['What counts as a root', 's13(1)(a)(ii)', 'An assignment, a mortgage by assignment or a legal charge dealing with the whole estate and interest'],
                  ['Documents in the root', 's13(1)(b); Greatek Investments Ltd v Lam Kit Sum HCA 8817/1998, 7/11/2000', 'Documents referred to in the root, not shown to have ceased or expired, must be produced'],
                  ['Powers of attorney', 's13(1)(c)', 'Any power under which a produced document was executed less than 15 years before the contract'],
                  ['Form of production', 's13(2); De Monsa Investments Ltd v Whole Win Management Fund Ltd [2013] 5 HKC 350, CFA', 'Original or certified copy; a certified copy of a certified copy is acceptable, of a plain copy is not'],
                  ['Varying the period', 'C & W Watch Co Ltd v Chu Kwok Tai [2005] 4 HKC 78', 'An express term may lengthen the period, here back to the Government lease'],
                  ['No duty beyond the period', 'Dawson Properties Ltd v Hong Kong Niiroku Ltd [1997] 2 HKC 800', 'No duty to produce documents prior to the s13 date'],
                  ['"Government lease"', 's3, Interpretation and General Clauses Ordinance (Cap. 1)', 'Includes Conditions'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG4', issue: 'ultimate-root', label: 'The ultimate root of title' },
              { session: 'LG4', issue: 'intermediate-root', label: 'The intermediate root of title' },
              { session: 'LG4', issue: 'powers-of-attorney', label: 'Powers of attorney under section 13(1)(c)' },
              { session: 'LG3', issue: 'original-title-deeds', label: 'Original title deeds: common law and section 13A' },
              { session: 'LG4', issue: 'raising-requisitions', label: 'Raising requisitions: the time limits' },
              { session: 'LG1', issue: 'certificate-of-compliance', label: 'Proving compliance and the 1 January 1970 divide' },
            ],
          },
          {
            id: 'ultimate-root',
            title: 'The ultimate root of title',
            summary: 'The Government lease or Conditions — plus anything the Interpretation Ordinance folds into that definition, including modifications, surrenders and marginal notes.',
            triggers: {
              bullets: [
                'A letter of modification varying the Conditions of Grant has not been produced.',
                'A deed of surrender was executed in 1978 and the vendor says it is outside the title period.',
                'Two letters from the Director of Public Works dated 1923 to 1930 which contained terms of the Conditions of Grant are missing.',
                'The Lands Department has no record of the missing letters either.',
                'The certified copy of the Crown lease produced by the vendor omits a marginal note.',
                'A marginal note refers to a licence granted after the lease which varied its terms.',
                'The Government lease is illegible and the vendor has produced the illegible copy.',
                'The agreement expressly required the vendor to provide a legible copy of the Conditions.',
                'The Government lease itself cannot be found at all.',
              ],
              routes: [
                { when: 'The question is which document starts the 15-year period', session: 'LG4', issue: 'intermediate-root', label: 'The intermediate root of title' },
                { when: 'The document is missing and the question is how to prove it', session: 'LG4', issue: 'missing-deeds-re-halifax', label: 'Missing title deeds and the rule in Re Halifax' },
                { when: 'A recital in a later document refers to the missing one', session: 'LG4', issue: 'recitals', label: 'Using recitals in proving title' },
                { when: 'The question is whether the missing terms create a real risk', session: 'LG3', issue: 'what-is-good-title', label: 'What constitutes a good title?' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Identifying and proving the ultimate root',
                steps: [
                  {
                    label: 'Identify the ultimate root and everything the definition sweeps in',
                    detail: 'The Government lease or Conditions of Grant constitute the ultimate root of title. Any letters of modification or deeds of surrender must also be produced, since they fall within the definition of "Government lease" in s3 of the Interpretation and General Clauses Ordinance (Cap. 1).',
                    why: 'The statutory definition includes any instrument by which the term may have been extended or the provisions varied. So the "ultimate root" is not one document but everything that has altered the grant.',
                    exam: {
                      write: 'The ultimate root is the [Government lease / Conditions of Grant] dated [date], together with the letter of modification dated [date] and the deed of surrender dated [date], each falling within the definition of "Government lease" in s3 of the Interpretation and General Clauses Ordinance (Cap. 1).',
                      trap: 'Producing the grant alone. A modification or surrender is part of the ultimate root, however old.',
                    },
                    points: [
                      'Letters of modification: Earning Code Ltd v Lau King Lin HCA 3874/1991, 28/7/1995.',
                      'Deeds of surrender: Grand Money Ltd v Tang Tak Shun HCA 7791/1995, 14/5/1996.',
                      'The definition covers instruments whereby the term may have been extended and the provisions varied.',
                    ],
                  },
                  {
                    label: 'Deal with marginal notes on the grant',
                    detail: 'In Kan Yui Man Allen v Ng Hiu Nam DCMP 174/2011, 14/10/2011, a vendor produced a certified copy of a Crown lease from which a marginal note was omitted; the note referred to a licence varying the terms of the lease.',
                    why: 'A marginal note that varies the grant is part of the grant, so a copy without it is not a copy of the lease at all. That is the reasoning even though the vendor had separately supplied a certified copy of the licence.',
                    exam: {
                      write: 'The certified copy produced omits the marginal note, which forms part of the [Crown lease] and which the purchaser is entitled to see, so the vendor has failed to show good title: Kan Yui Man Allen v Ng Hiu Nam DCMP 174/2011, 14/10/2011.',
                      trap: 'Stating Kan Yui Man without its qualification. The lecture says the decision needs to be qualified by Kingdom Miles Ltd v Ever Crystal Ltd [2019] 1 HKLRD 643.',
                    },
                    points: [
                      'The vendor had supplied a certified copy of the licence separately, and that was still not enough.',
                      'The purchaser was entitled to know the full terms of the lease, including anything provided by way of a marginal note.',
                      'Dty Judge Lo relied on the s3(2) Interpretation and General Clauses Ordinance definition.',
                      'The decision needs to be qualified by Kingdom Miles Ltd v Ever Crystal Ltd [2019] 1 HKLRD 643.',
                    ],
                  },
                  {
                    label: 'Apply Kingdom Miles where part of the root is missing',
                    detail: 'In Kingdom Miles Ltd v Ever Crystal Ltd [2019] 1 HKLRD 643, two letters from the Director of Public Works dated 1923 to 1930 which contained terms and conditions relating to the Conditions of Grant were missing, and formed part of the Conditions by reason of the s3 definition.',
                    why: 'The Court of Appeal did not dispute that the letters were part of the root. It held the risk was nil — which is the good title standard doing the work, not a rule about roots.',
                    exam: {
                      write: 'It is unimaginable that the Government would assert, almost a century later, that there were further terms not set out in the Conditions of Grant based on the two letters, especially when the Government has no record of them; the risk of successful assertion of unknown encumbrances and obligations is nil: Kingdom Miles Ltd v Ever Crystal Ltd [2019] 1 HKLRD 643.',
                      trap: 'Treating Kingdom Miles as dispensing with the ultimate root. It is an application of the no-real-risk standard to particular missing documents.',
                    },
                    points: [
                      'The Government itself had no record of the two letters.',
                      'The age of the documents and the absence of any Government record were both material.',
                      'Kingdom Miles is also authority on recitals under s13(4).',
                    ],
                  },
                  {
                    label: 'Deal with an illegible ultimate root',
                    detail: 'If the Government lease or Conditions are illegible, the illegible copy must be produced and secondary evidence will be admissible as to its contents: Wong Wai Man v Tang Tat Chi [1993] HKCFI 166.',
                    why: 'An illegible document is not a missing one. Producing it, however unreadable, is what allows secondary evidence of its contents to be received.',
                    exam: {
                      write: 'The Conditions being illegible, the vendor must produce the illegible copy, and secondary evidence of its contents is admissible: Wong Wai Man v Tang Tat Chi [1993] HKCFI 166.',
                      trap: 'Applying that where the vendor has contracted to provide a LEGIBLE copy. Then secondary evidence will not be admitted: Mak Yiu Hei Karl v Ho Chi Ming HCMP 1177/1998.',
                    },
                    points: [
                      'The illegible copy must still be produced.',
                      'Secondary evidence is admissible as to its contents.',
                      'Not where the vendor has expressly contracted to provide a legible copy.',
                    ],
                  },
                  {
                    label: 'Deal with a missing ultimate root',
                    detail: 'In Wu Wing Kuen v Leung Kwai Lin Cindy [2001] 1 HKLRD 212, it was held that s13(1) was enacted to facilitate conveyancing: it is an enabling provision and does not preclude clear and cogent evidence of the existence, due execution and contents of a document referred to in s13(1), such as a power of attorney, nor the production of secondary evidence.',
                    why: 'The section fixes how far back the vendor must go; it does not say that only the document itself will prove the title. Reading it otherwise would defeat the purpose the legislature had.',
                    exam: {
                      write: 'A failure to produce a document referred to in s13(1) is not necessarily fatal; clear and cogent secondary evidence of its existence, due execution and contents may suffice, unless a contrary intention is expressed in the contract of sale.',
                      trap: 'Forgetting the contractual override. If the agreement expressly requires the document itself, secondary evidence will not do.',
                    },
                    points: [
                      'Section 13(1) is an enabling provision to facilitate conveyancing.',
                      'It does not preclude secondary evidence.',
                      'The rule in Re Halifax Commercial Banking Co Ltd and Wood (1898) 79 LT 536, CA, supplies the procedure.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'Letters of modification and deeds of surrender are part of the ultimate root and are outside the 15-year period — do not assume the period excuses them.',
                'Kan Yui Man and Kingdom Miles pull in different directions on a missing part of the root. Cite the later one as qualifying the earlier.',
                'The illegibility rule and the missing-document rule are different: one produces the document and adds evidence, the other replaces the document with evidence.',
                'Kingdom Miles appears in this topic twice — on the good title standard here, and on s13(4) recitals later.',
              ],
            },
            skeleton: {
              bullets: [
                'Identify the Government lease or Conditions and their date.',
                'Add every instrument within the s3 definition: modifications, surrenders, and marginal notes.',
                'Say which parts are missing or illegible.',
                'For illegibility: produce the copy and adduce secondary evidence.',
                'For missing parts: apply Wu Wing Kuen, Re Halifax and, if available, a recital.',
                'Apply the no-real-risk standard to what remains unproved.',
              ],
            },
            mistakes: {
              bullets: [
                'Producing the grant and stopping there.',
                'Treating a marginal note as extraneous to the lease.',
                'Reading Kingdom Miles as a rule that ancient documents need not be produced.',
                'Offering secondary evidence where the contract required the document itself, or a legible copy.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Authority', 'What it establishes'],
                rows: [
                  ['What the root is', 'The Government lease or Conditions of Grant', 'The ultimate root of title'],
                  ['The definition', 's3, Interpretation and General Clauses Ordinance (Cap. 1)', 'Includes instruments extending the term or varying the provisions'],
                  ['Letters of modification', 'Earning Code Ltd v Lau King Lin HCA 3874/1991, 28/7/1995', 'Must be produced as part of the root'],
                  ['Deeds of surrender', 'Grand Money Ltd v Tang Tak Shun HCA 7791/1995, 14/5/1996', 'Must be produced as part of the root'],
                  ['Marginal notes', 'Kan Yui Man Allen v Ng Hiu Nam DCMP 174/2011, 14/10/2011', 'A certified copy omitting a marginal note that varied the lease did not show good title; qualified by Kingdom Miles'],
                  ['Missing part of the root', 'Kingdom Miles Ltd v Ever Crystal Ltd [2019] 1 HKLRD 643', 'Letters of 1923-1930 missing and unrecorded; risk of successful assertion nil'],
                  ['Illegible root', 'Wong Wai Man v Tang Tat Chi [1993] HKCFI 166', 'Produce the illegible copy; secondary evidence admissible as to contents'],
                  ['Contract for a legible copy', 'Mak Yiu Hei Karl v Ho Chi Ming HCMP 1177/1998', 'Secondary evidence not admitted where the vendor contracted to provide a legible copy'],
                  ['Missing root', 'Wu Wing Kuen v Leung Kwai Lin Cindy [2001] 1 HKLRD 212', 'Section 13(1) is enabling; clear and cogent secondary evidence may suffice'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG4', issue: 'intermediate-root', label: 'The intermediate root of title' },
              { session: 'LG4', issue: 'missing-deeds-re-halifax', label: 'Missing title deeds and the rule in Re Halifax' },
              { session: 'LG4', issue: 'recitals', label: 'Using recitals in proving title' },
              { session: 'LG1', issue: 'lease-or-conditions', label: 'Government lease or Conditions? Legal estate or equitable interest' },
            ],
          },
          {
            id: 'intermediate-root',
            title: 'The intermediate root of title',
            summary: 'An assignment, a mortgage by assignment or a legal charge, each dealing with the whole estate and interest. Nothing less will do.',
            triggers: {
              bullets: [
                'The vendor proposes to start the title at a discharge of mortgage dated just over 15 years before the contract.',
                'The only document more than 15 years old dealing with the property is an equitable mortgage.',
                'The vendor holds only an equitable interest because the positive conditions have never been complied with.',
                'There is no document in existence that could serve as an intermediate root.',
                'The intermediate root assignment refers to a deed of assignment registered by a memorial number and that deed is missing.',
                'All the chain of title assignments say the shop is sold subject to exceptions and reservations set out in an earlier assignment.',
                'The intermediate root mentions the first assignment, the deed of mutual covenant and the certificate of compliance.',
                'The Government lease is only eight years old and the purchaser asks for an intermediate root anyway.',
                'The vendor refuses to explain why s13(1)(b) does not apply to a document referred to in the root.',
              ],
              routes: [
                { when: 'The question is the Government lease and everything folded into it', session: 'LG4', issue: 'ultimate-root', label: 'The ultimate root of title' },
                { when: 'The defect complained of predates the intermediate root', session: 'LG4', issue: 'pre-intermediate-defects', label: 'Pre-intermediate root title defects' },
                { when: 'The question is the period itself rather than the root document', session: 'LG4', issue: 'statutory-period-s13', label: 'The statutory period for showing title' },
                { when: 'The missing document may be cured by a recital', session: 'LG4', issue: 'recitals', label: 'Using recitals in proving title' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Finding the intermediate root',
                steps: [
                  {
                    label: 'Ask whether an intermediate root is needed at all',
                    detail: 'Where the Government lease is less than 15 years old, measured from the date of the present agreement, only the Government lease and all the more recent documents of title need be produced. Where it is more than 15 years old, the vendor must produce the Government lease and also the intermediate root of title: s13(1)(a)(ii).',
                    why: 'The intermediate root exists to spare the vendor proving a century of dealings. If the grant is recent enough, there is nothing to spare him from.',
                    exam: {
                      write: 'The Government lease dating from [year], more than 15 years before the agreement dated [date], the vendor must produce both the ultimate root and an intermediate root under s13(1)(a)(ii) of the Conveyancing and Property Ordinance.',
                      trap: 'Measuring the 15 years from completion. It runs from the contract of sale.',
                    },
                    points: [
                      'Less than 15 years: the Government lease and everything since the grant.',
                      'More than 15 years: the Government lease plus the intermediate root and the chain from it.',
                    ],
                  },
                  {
                    label: 'Test the candidate document against the statutory description',
                    detail: 'The intermediate root document must be either an assignment, a mortgage or a charge dealing with the whole of the estate and interest in the land.',
                    why: 'A root has to be a document that could only have been executed by someone with the entire title. That is what makes it safe to start from, and it is why part-interest documents are excluded.',
                    exam: {
                      write: 'The [assignment] dated [date] deals with the whole estate and interest in the land and is accordingly a qualifying intermediate root under s13(1)(a)(ii).',
                      trap: 'Accepting an equitable mortgage. It does not deal with the whole estate or interest in the property, and nor will a discharge of a mortgage or charge.',
                    },
                    points: [
                      'An assignment, a mortgage by assignment, or a legal charge.',
                      'Each must deal with the whole estate and interest in the land.',
                      'An equitable mortgage or charge will not satisfy the requirement.',
                      'Nor will a discharge of a mortgage or charge.',
                    ],
                  },
                  {
                    label: 'Deal with the vendor who has only an equitable interest',
                    detail: 'Where the vendor holds only an equitable title — for example because his interest under Conditions of Grant has never been converted into a legal estate for want of compliance with the positive conditions — there will be no title document dealing with the whole of the estate and interest, that is both the legal estate and the equitable interest, other than the Conditions of Grant.',
                    why: 'The definition of a root assumes a legal estate. Where there is none, the statutory shortcut simply does not engage, and the vendor is back at the ultimate root.',
                    exam: {
                      write: 'The vendor holding only an equitable interest, there is no document dealing with the whole estate and interest other than the Conditions of Grant, so he must presumably show title right back to the ultimate root.',
                      trap: 'Leaving the vendor there. A prudent vendor should insert an appropriate limiting clause, or argue that the purchaser must have agreed to accept an intermediate root dealing only with the equitable interest since the agreement shows only an equitable interest to be sold.',
                    },
                    points: [
                      'Presumably title must be shown back to the ultimate root.',
                      'A prudent vendor should insert an appropriate limiting clause.',
                      'Alternatively the vendor may argue that the purchaser agreed to accept a root dealing only with the equitable interest, the agreement showing only an equitable interest to be sold.',
                      'Where no intermediate root document exists at all, the vendor should insert a special term limiting his duty under s13: Chan Chu Hang Arden v Man Yun Sau [1997] 2 HKC 144.',
                    ],
                  },
                  {
                    label: 'Produce the documents the root refers to, under s13(1)(b)',
                    detail: 'Section 13(1)(b) requires, subject to any expressed contrary intention, production of any document referred to in the intermediate root document, creating or disposing of an interest, power or obligation, which is not shown to have ceased or expired and subject to which any part of the land is disposed of.',
                    why: 'As Greatek puts it, the vendor is deemed to know the conditions of his own title. A document his own root names as still binding the land is one he must explain or produce.',
                    exam: {
                      write: 'The intermediate root refers to [the assignment registered by memorial no. [n]], which is not shown to have ceased or expired, so the vendor is obliged to produce it under s13(1)(b) of the Conveyancing and Property Ordinance.',
                      trap: 'Refusing production without explanation. In Greatek no attempt was made to explain why sub-section (b) did not apply, and the vendor failed to show good title.',
                    },
                    points: [
                      'It applies to a deed creating an easement or restrictive covenant referred to in the root.',
                      'The root may mention the first assignment, the deed of mutual covenant and the certificate of compliance.',
                      'Greatek Investments Ltd v Lam Kit Sum HCA 8817/1998, 7/11/2000: all the chain of title assignments and the intermediate root said the shop was subject to exceptions, reservations, easements and other appurtenant rights set out in a deed registered by memorial no. 392952, which was missing; the vendor had failed to show good title.',
                      'The vendor is deemed to know the conditions of his own title.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'Do not confuse "root of title" in this sense with a requisition going to "the root of the vendor\'s title", which is the test for raising a requisition out of time. The slides flag exactly this confusion.',
                'Where the root refers to a missing document, the vendor cannot simply decline; he must explain why s13(1)(b) does not apply.',
                'The intermediate root is the source of much of the rest of the title bundle, which is why the first assignment, the DMC and the certificate of compliance so often come in through it.',
                'For a vendor with only an equitable interest, the limiting clause has to be in place before the formal agreement — and cannot be added if the preliminary agreement already binds.',
              ],
            },
            skeleton: {
              bullets: [
                'Date the Government lease against the contract of sale.',
                'If more than 15 years, identify the candidate intermediate root.',
                'Test it: assignment, mortgage by assignment or legal charge, dealing with the whole estate and interest.',
                'If the vendor has only an equitable interest, address the limiting clause.',
                'List the documents the root refers to and require them under s13(1)(b).',
                'Say what follows if one of them is missing.',
              ],
            },
            mistakes: {
              bullets: [
                'Accepting an equitable mortgage or a discharge as the intermediate root.',
                'Measuring the 15 years from completion rather than the contract of sale.',
                'Missing the s13(1)(b) documents that the root brings with it.',
                'Confusing the intermediate root with a requisition going to the root of the vendor\'s title.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'production of any document referred to in the assignment, mortgage or charge mentioned in paragraph (a) creating or disposing of an interest, power or obligation, which is not shown to have ceased or expired and subject to which any part of that land is disposed of', cite: 's13(1)(b), Conveyancing and Property Ordinance (Cap. 219), as reproduced in the LG4 slides' },
              ],
              table: {
                headers: ['Point', 'Provision or case', 'What it establishes'],
                rows: [
                  ['When needed', 's13(1)(a)(ii), Conveyancing and Property Ordinance (Cap. 219)', 'Where the Government lease is more than 15 years old at the contract of sale'],
                  ['What qualifies', 's13(1)(a)(ii)', 'An assignment, mortgage by assignment or legal charge dealing with the whole estate and interest'],
                  ['What does not', 'Lecture note', 'An equitable mortgage or charge; a discharge of a mortgage or charge'],
                  ['No root in existence', 'Chan Chu Hang Arden v Man Yun Sau [1997] 2 HKC 144', 'The vendor should insert a special term limiting his duty under s13'],
                  ['Documents in the root', 's13(1)(b)', 'Production of documents referred to in the root and not shown to have ceased or expired'],
                  ['Failure to produce', 'Greatek Investments Ltd v Lam Kit Sum HCA 8817/1998, 7/11/2000', 'Missing assignment referred to in the root; no explanation offered; vendor failed to show good title'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG4', issue: 'ultimate-root', label: 'The ultimate root of title' },
              { session: 'LG4', issue: 'chain-of-title', label: 'The chain of title and registration of title documents' },
              { session: 'LG4', issue: 'pre-intermediate-defects', label: 'Pre-intermediate root title defects' },
              { session: 'LG3', issue: 'documents-of-title', label: 'Which documents are documents of title?' },
              { session: 'LG4', issue: 'raising-requisitions', label: 'Raising requisitions: the time limits' },
            ],
          },
          {
            id: 'chain-of-title',
            title: 'The chain of title and registration of title documents',
            summary: 'Produce every document in the period, prove every link — and make sure the ones that pass title have actually been registered.',
            triggers: {
              bullets: [
                'The assignment to the present vendor remains in the Land Registry as a deed pending registration.',
                'A discharge of charge in the chain of title was never registered.',
                'A sale and purchase agreement in the chain was never registered but a properly registered assignment followed it.',
                'An unregistered mortgage appears among the documents supplied.',
                'The vendor has produced the documents but has not explained how the property passed from one owner to the next.',
                'A 1979 pump pit agreement has been replaced by a 1988 agreement, and the purchaser demands both.',
                'A car park layout plan has been amended and the purchaser wants the superseded version.',
                'The certificate of compliance is unregistered and the purchaser questions the conversion of the equitable interest.',
                'The deed of mutual covenant is unregistered and the purchaser questions the enforceability of its covenants.',
              ],
              routes: [
                { when: 'The question is where the chain starts', session: 'LG4', issue: 'intermediate-root', label: 'The intermediate root of title' },
                { when: 'A link cannot be proved because a document is missing', session: 'LG4', issue: 'missing-deeds-re-halifax', label: 'Missing title deeds and the rule in Re Halifax' },
                { when: 'The unregistered instrument is a third party\'s interest rather than the vendor\'s own title', session: 'LG3', issue: 'unregistered-encumbrances', label: 'Registrable encumbrances that are unregistered' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Proving the chain',
                steps: [
                  {
                    label: 'Identify the chain of title period',
                    detail: 'Unless otherwise agreed, the vendor must produce the original or certified copies of all documents affecting title, whether registered or not, in the chain of title period — from the ultimate root where that is less than 15 years old, or otherwise from the intermediate root, to the present agreement.',
                    why: 'The chain is the story of how the title reached the vendor. Producing the root without the chain proves that somebody once owned the land, not that this vendor does.',
                    exam: {
                      write: 'The chain of title period runs from [the intermediate root dated [date]] to the present agreement, and the vendor must produce originals or certified copies of all documents affecting title in that period, registered or not.',
                      trap: 'Producing only the registered documents. The obligation covers documents affecting title whether registered or not.',
                    },
                    points: [
                      'From the ultimate root, where it is less than 15 years before the agreement.',
                      'Otherwise from the intermediate root.',
                      'All documents affecting title, whether registered or not.',
                    ],
                  },
                  {
                    label: 'Prove each link by proper conveyancing evidence',
                    detail: 'In addition to providing the documents, the vendor must prove by proper conveyancing evidence each link in the chain of title during that period. This involves the complex task of proving that each transfer of title in the period has been validly effected.',
                    why: 'A stack of documents does not by itself show that the person who signed each one was entitled to. Execution, capacity, authority and identity all have to hold at every step.',
                    exam: {
                      write: 'The vendor must prove by proper conveyancing evidence that each transfer of title in the chain of title period was validly effected.',
                      trap: 'Forgetting what the LG3 stage list flagged as common defects: defective execution by companies or under powers of attorney, and discrepancies in names and signatures.',
                    },
                    points: [
                      'Check execution, including by companies and under powers of attorney.',
                      'Check for discrepancies in names and signatures across the documents.',
                      'Check that any power of attorney used within the last 15 years has been produced.',
                    ],
                  },
                  {
                    label: 'Check that the documents which pass title are registered',
                    detail: 'There is little authority on whether a vendor fails to prove good title because documents provided by way of showing title are unregistered. The answer depends on the nature and function of the title deed: those which directly affect the passing of title must be registered.',
                    why: 'Registration is what gives an assignment priority. An unregistered assignment leaves open the possibility that an encumbrance could have been registered ahead of it, which is a defect in the vendor\'s own title rather than a documentary gap.',
                    exam: {
                      write: 'The vendor must ensure that the assignment to him has been duly registered, so that no encumbrance has or could have gained priority over it; it having remained a deed pending registration, the vendor has failed to show good title: Chan Wing Nga v Chung Chi Wai DCCJ 5656/2005, 4/8/2006.',
                      trap: 'Treating every unregistered document as fatal. An unregistered charge or encumbrance would clearly not adversely affect the vendor\'s title — it is void against him.',
                    },
                    points: [
                      'Assignments in the chain of title must be registered.',
                      'The same reasoning applies to a discharge of a charge.',
                      'Failure to register a sale and purchase agreement in the chain may not matter where it has been superseded by a properly registered assignment.',
                      'An unregistered charge or encumbrance would clearly not adversely affect the vendor\'s title.',
                    ],
                  },
                  {
                    label: 'Check the other documents it is prudent to have registered',
                    detail: 'It is also prudent for other documents of title to be registered.',
                    why: 'Each has a different reason. The certificate of compliance may need registration for the deemed conversion to operate at all, and the DMC needs it for the covenants to bind successors.',
                    exam: {
                      write: 'The certificate of compliance should be registered to effect the deemed conversion of the equitable interest into the legal estate: Tai Wai Kin v Cheung Wan Wah [2004] 3 HKC 198.',
                      trap: 'Forgetting the DMC. It should be registered to ensure the enforceability of its covenants against successors — the s41(9) point from LG2.',
                    },
                    points: [
                      'Certificate of compliance: may need registration to effect the deemed conversion: Tai Wai Kin v Cheung Wan Wah [2004] 3 HKC 198.',
                      'The occupation permit and any required consents should be registered.',
                      'Deeds of mutual covenant should be registered to ensure the enforceability of their covenants.',
                    ],
                  },
                  {
                    label: 'Exclude what has been superseded',
                    detail: 'There is no obligation on a vendor to produce certified copies of title documents which have been replaced by subsequent title documents duly produced: De Monsa Investments Ltd v Whole Win Management Fund Ltd [2011] 4 HKLRD 478, CA.',
                    why: 'A superseded document can no longer affect the purchaser, so requiring it serves no purpose. This is the practical answer to a requisition about an old plan or agreement.',
                    exam: {
                      write: 'The [1979 pump pit agreement] having been replaced by the [1988] agreement, which has been duly produced, there is no obligation to produce the earlier document: De Monsa Investments Ltd v Whole Win Management Fund Ltd [2011] 4 HKLRD 478, CA.',
                      trap: 'Confining the principle to the chain of title period. It applies to pre-intermediate root documents in respect of which a requisition has been raised as well.',
                    },
                    points: [
                      'The facts were a 1979 pump pit agreement replaced by one of 1988.',
                      'The principle may well apply to car park layout plans replaced by amended plans.',
                      'It applies both within the chain of title period and to pre-intermediate root documents.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The obligation covers documents whether registered or not, so the vendor cannot limit himself to what a land search throws up.',
                'Chan Wing Nga is about the vendor\'s OWN assignment sitting in the deeds pending registration section — a defect in his title, not merely in his paperwork.',
                'A document registered only in the deeds pending registration section must still be produced: Wong Kum Chi and Goldenwick.',
                'Proving each link is where powers of attorney, company execution and name discrepancies actually bite — they are later topics in the course.',
              ],
            },
            skeleton: {
              bullets: [
                'Fix the chain of title period.',
                'List every document affecting title in it, registered or not.',
                'Prove each link by proper conveyancing evidence.',
                'Check registration of the documents that pass title, and of the prudent extras.',
                'Exclude any document superseded by one duly produced.',
                'Identify any link that cannot be proved and turn to the missing-deeds rules.',
              ],
            },
            mistakes: {
              bullets: [
                'Producing documents without proving the links between them.',
                'Treating every unregistered instrument as a defect.',
                'Overlooking the vendor\'s own assignment sitting as a deed pending registration.',
                'Requiring a superseded document once its replacement has been produced.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Authority', 'What it establishes'],
                rows: [
                  ['The period', 'Lecture note on the chain of title', 'From the ultimate or intermediate root to the present agreement; all documents affecting title, registered or not'],
                  ['Proving the links', 'Lecture note', 'Each transfer in the period must be proved validly effected by proper conveyancing evidence'],
                  ['Registration of assignments', 'Chan Wing Nga v Chung Chi Wai DCCJ 5656/2005, 4/8/2006', 'Assignment left as a deed pending registration; vendor failed to show good title'],
                  ['Certificate of compliance', 'Tai Wai Kin v Cheung Wan Wah [2004] 3 HKC 198', 'Registration may be needed to effect the deemed conversion of the equitable interest'],
                  ['Superseded documents', 'De Monsa Investments Ltd v Whole Win Management Fund Ltd [2011] 4 HKLRD 478, CA', 'No obligation to produce a document replaced by a later one duly produced'],
                  ['Deeds pending registration', 'Wong Kum Chi v Lee Tit Ying [2003] 1 HKLRD 594; Goldenwick Ltd v Standard Chartered Bank (Hong Kong) Ltd [2008] 3 HKLRD 266', 'Must be produced even where registered only in that section'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG4', issue: 'intermediate-root', label: 'The intermediate root of title' },
              { session: 'LG4', issue: 'missing-deeds-re-halifax', label: 'Missing title deeds and the rule in Re Halifax' },
              { session: 'LG3', issue: 'unregistered-encumbrances', label: 'Registrable encumbrances that are unregistered' },
              { session: 'LG2', issue: 'enforceability-s41', label: 'Does the covenant run? Section 41 of the Conveyancing and Property Ordinance' },
              { session: 'LG4', issue: 'raising-requisitions', label: 'Raising requisitions: the time limits' },
              { session: 'LG4', issue: 'ultimate-root', label: 'The ultimate root of title' },
              { session: 'LG3', issue: 'documents-of-title', label: 'Which documents are documents of title?' },
            ],
          },
          {
            id: 'pre-intermediate-defects',
            title: 'Pre-intermediate root title defects',
            summary: 'The vendor need not produce documents before the root — but if the purchaser finds a defect there, the vendor must still answer for it.',
            triggers: {
              bullets: [
                'The purchaser obtained pre-intermediate root documents from the Land Registry himself.',
                'During the pre-intermediate root period an attorney wrongfully made a gift of the property.',
                'A deed in the pre-intermediate root period was executed by only one director of a company.',
                'The vendor says he need not answer because the defect falls outside the statutory period.',
                'The vendor argues that the burden is on the purchaser to prove the pre-intermediate root defect first.',
                'The purchaser raises a requisition on a document the vendor was never obliged to supply.',
                'A severance of a joint tenancy in the pre-intermediate root period cannot be proved.',
                'The occupation permit from the pre-intermediate root period is missing.',
                'A recital in a later assignment refers to the pre-intermediate root document in issue.',
              ],
              routes: [
                { when: 'The question is what the vendor must produce in the first place', session: 'LG4', issue: 'statutory-period-s13', label: 'The statutory period for showing title' },
                { when: 'The defect may be cured by a recital in a later document', session: 'LG4', issue: 'recitals', label: 'Using recitals in proving title' },
                { when: 'The requisition was raised outside the contractual time limit', session: 'LG4', issue: 'requisitions-out-of-time', label: 'Raising requisitions out of time' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Handling a defect before the root',
                steps: [
                  {
                    label: 'Confirm that the vendor need not PRODUCE those documents',
                    detail: 'A vendor is not required, unless he has otherwise agreed, to show title prior to the period stipulated in s13(1) of the Conveyancing and Property Ordinance.',
                    why: 'The statutory period would be meaningless if the purchaser could simply requisition his way behind it. The limit is real — but it is a limit on production, not on answering.',
                    exam: {
                      write: 'The vendor is not obliged to produce title documents prior to the s13 period: Dawson Properties Ltd v Hong Kong Niiroku Ltd [1997] 2 HKC 800.',
                      trap: 'Treating that as the end of the argument. The duty to show good title includes answering a requisition on a defect the purchaser has found for himself.',
                    },
                    points: [
                      'The limit is on the obligation to produce.',
                      'It yields to an express agreement to show title for a longer period.',
                    ],
                  },
                  {
                    label: 'But require the vendor to answer a requisition on a defect the purchaser finds',
                    detail: 'Where the purchaser discovers from his own checking of the title that there is a pre-intermediate root title defect, he should raise a requisition on it and the vendor must, by virtue of his obligation to show good title, answer it satisfactorily: Lo Hung Biu v Lo Shea Chung [1997] 2 HKC 723, CA.',
                    why: 'The purchaser is expected to obtain the title documents back to the ultimate root himself. Having done so, he cannot be told that what he found is none of his business.',
                    exam: {
                      write: 'The purchaser having obtained the pre-intermediate root documents himself, there is nothing to prevent him raising proper requisitions upon them, and the vendor must answer satisfactorily: Lo Hung Biu v Lo Shea Chung [1997] 2 HKC 723, CA at 730.',
                      trap: 'Accepting the burden-of-proof argument. It was rejected: if the purchaser had to prove the defect first there would hardly be any point to a requisition.',
                    },
                    points: [
                      'The purchaser\'s solicitor should obtain from the Land Registry copies of the title deeds going back to the ultimate root, not merely those the vendor supplies.',
                      'The vendors were obliged to show good title; the burden does not shift to the purchaser to prove the defect first.',
                    ],
                  },
                  {
                    label: 'Identify the kind of defect, and look for a cure',
                    detail: 'The lecture gives two worked examples of pre-intermediate root defects the vendor had to answer for.',
                    why: 'Both are defects in the passing of title rather than encumbrances — which is why they survive the intermediate root at all. A break in the chain before the root can still mean the root itself was executed by someone without title.',
                    exam: {
                      write: 'The [wrongful gift by the attorney / execution by one director alone] in the pre-intermediate root period is a defect the vendor must answer for, and he has [not] responded adequately to the requisition.',
                      trap: 'Forgetting that ss13(3) and 13(4) of the Conveyancing and Property Ordinance exist precisely for this situation — a recital may prove the missing pre-intermediate root document.',
                    },
                    points: [
                      'Lo Hung Biu v Lo Shea Chung [1997] 2 HKC 723, CA: during the pre-intermediate root period an attorney had wrongfully made a gift of the property; the vendor failed to respond adequately to the requisition.',
                      'Ho So Yung v Lei Chon Un [1998] 2 HKC 697: a requisition as to a pre-intermediate root defect relating to the execution of a deed by one director had to be answered.',
                      'Section 13(3) creates a rebuttable presumption from a recital of a pre-intermediate root document.',
                      'Section 13(4) makes a recital of fact in a pre-intermediate root document sufficient evidence of the truth of that recital.',
                    ],
                  },
                  {
                    label: 'Apply the good title standard to what remains',
                    detail: 'A pre-intermediate root defect is still only a defect if it carries a real risk. Once the recitals and any secondary evidence have been exhausted, what is left falls to be measured against the ordinary good title standard.',
                    why: 'A pre-intermediate root defect is still only a defect if it carries a real risk. Kingdom Miles is the worked example of an ancient gap that carried none.',
                    exam: {
                      write: 'Even taking the pre-intermediate root [gap] at its highest, there is no real risk of a successful assertion against the purchaser, and the title is good.',
                      trap: 'Answering the requisition with the bare point that the document is outside the statutory period. That is a refusal, not an answer, and the purchaser may rescind for failure to show title.',
                    },
                    points: [
                      'Apply MEPC and Kan Wing Yau to the residual risk.',
                      'Set out the facts and circumstances; a bald assertion will not do: Polyson Jewellery Co Ltd v Liu Song Carlos [2002] 2 HKC 183, CA.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The purchaser\'s solicitor is expected to obtain pre-intermediate root documents from the Land Registry himself — failure to search at all may be negligence.',
                'Lo Hung Biu at 730 is the passage that rejects the burden-shifting argument. It is short and worth quoting.',
                'A pre-intermediate root defect is where the recital provisions in ss13(3) and 13(4) earn their keep.',
                'The superseded-document principle in De Monsa (CA) applies to pre-intermediate root documents in respect of which a requisition has been raised.',
              ],
            },
            skeleton: {
              bullets: [
                'Confirm that production is not required for the pre-intermediate root period.',
                'Establish that the purchaser found the defect from his own checking.',
                'State the duty to answer the requisition satisfactorily.',
                'Reject any burden-shifting argument.',
                'Look for a recital under s13(3) or s13(4) to cure the gap.',
                'Apply the no-real-risk standard to what is left, with the facts set out.',
              ],
            },
            mistakes: {
              bullets: [
                'Treating the statutory period as excusing the vendor from answering.',
                'Accepting that the purchaser must prove the defect before the vendor need respond.',
                'Overlooking the recital provisions.',
                'Answering with the bare assertion that the document is too old to matter.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Authority', 'What it establishes'],
                rows: [
                  ['No duty to produce', 'Dawson Properties Ltd v Hong Kong Niiroku Ltd [1997] 2 HKC 800', 'No duty to produce documents prior to the s13 period'],
                  ['But must answer', 'Lo Hung Biu v Lo Shea Chung [1997] 2 HKC 723, CA at 730', 'Nothing prevents proper requisitions on pre-intermediate root documents the purchaser holds; the burden does not shift to him'],
                  ['Worked example', 'Lo Hung Biu v Lo Shea Chung [1997] 2 HKC 723, CA', 'Attorney wrongfully made a gift of the property; vendor failed to respond adequately'],
                  ['Worked example', 'Ho So Yung v Lei Chon Un [1998] 2 HKC 697', 'Requisition as to execution of a deed by one director had to be answered'],
                  ['Cure by recital', 'ss13(3) and 13(4), Conveyancing and Property Ordinance (Cap. 219)', 'Presumptions from recitals of and in pre-intermediate root documents'],
                  ['Bald assertion insufficient', 'Polyson Jewellery Co Ltd v Liu Song Carlos [2002] 2 HKC 183, CA', 'The surrounding circumstances must be referred to in the correspondence'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG4', issue: 'recitals', label: 'Using recitals in proving title' },
              { session: 'LG4', issue: 'investigating-title', label: 'Investigating title: what the purchaser\'s solicitor must do' },
              { session: 'LG4', issue: 'answering-requisitions', label: 'Answering requisitions with candour' },
              { session: 'LG4', issue: 'ultimate-root', label: 'The ultimate root of title' },
              { session: 'LG3', issue: 'documents-of-title', label: 'Which documents are documents of title?' },
            ],
          },
          {
            id: 'powers-of-attorney',
            title: 'Powers of attorney under section 13(1)(c)',
            summary: 'Produce any power under which a produced document was executed in the last 15 years — the vendor\'s side, and the present assignment too.',
            triggers: {
              bullets: [
                'An assignment in the chain of title was executed under a power of attorney eleven years ago.',
                'The present assignment is to be executed by the vendor\'s attorney.',
                'The purchaser demands the power of attorney under which he himself is executing.',
                'Conditions of Grant were executed by way of a power of attorney on behalf of a purchaser.',
                'A power of attorney used sixteen years ago is the only one in the chain.',
                'The purchaser is asked to assume, by a limiting clause, that a named power of attorney was valid and unrevoked.',
                'The vendor cannot locate the power under which an assignment in the chain was signed.',
                'A power of attorney relates exclusively to the property and the question is whether the original must be handed over.',
                'The attorney who executed a pre-intermediate root document is said to have exceeded his authority.',
              ],
              routes: [
                { when: 'The question is the period and documents generally', session: 'LG4', issue: 'statutory-period-s13', label: 'The statutory period for showing title' },
                { when: 'The purchaser is asked to assume the power was valid', session: 'LG3', issue: 'exclusion-clauses', label: 'Excluding or limiting the duty to give title' },
                { when: 'The defect in the power is in the pre-intermediate root period', session: 'LG4', issue: 'pre-intermediate-defects', label: 'Pre-intermediate root title defects' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Applying section 13(1)(c)',
                steps: [
                  {
                    label: 'State the rule',
                    detail: 'The vendor must produce any power of attorney under which any document has been executed in the last 15 years: s13(1)(c) of the Conveyancing and Property Ordinance.',
                    why: 'A document executed by an attorney is only as good as the attorney\'s authority. Within 15 years the power is recent enough to be traceable and close enough to the present title to matter.',
                    exam: {
                      write: 'The [assignment] dated [date] having been executed under a power of attorney less than 15 years before the contract of sale, s13(1)(c) of the Conveyancing and Property Ordinance requires the vendor to produce the power.',
                      trap: 'Measuring the 15 years from the date of the power. The subsection looks at when the DOCUMENT was executed.',
                    },
                    points: [
                      'The trigger is the execution of a produced document less than 15 years before the contract of sale.',
                      'The duty is to produce the power itself.',
                    ],
                  },
                  {
                    label: 'Note the exclusion for the purchaser\'s side',
                    detail: 'The duty excludes any Conditions of Grant or assignment executed by way of a power of attorney on behalf of a purchaser: Lau Kwok Cheong Dinnes & Anor v Tse Ming Chiu [2001] 3 HKC 196.',
                    why: 'The title being proved is the vendor\'s. How a past purchaser signed does not bear on whether title passed to him, because the assignor\'s execution is what conveys.',
                    exam: {
                      write: 'The power of attorney was used on the purchaser\'s side, and is accordingly outside the duty: Lau Kwok Cheong Dinnes & Anor v Tse Ming Chiu [2001] 3 HKC 196.',
                      trap: 'Applying the exclusion to the vendor\'s attorney. The duty is very much alive on that side.',
                    },
                    points: [
                      'Excluded: Conditions of Grant or an assignment executed by power of attorney on behalf of a purchaser.',
                      'The duty is on the vendor\'s side.',
                    ],
                  },
                  {
                    label: 'Include the power for the present assignment',
                    detail: 'A vendor has a duty to produce any power of attorney under which the present assignment will be executed: Big Boss Investment Ltd v So Lai Kei [2010] 1 HKLRD 793.',
                    why: 'The present assignment is the one that actually conveys to this purchaser. A defect in the authority to execute it defeats the conveyance itself.',
                    exam: {
                      write: 'The present assignment being executed by the vendor\'s attorney, the power under which it will be executed must be produced: Big Boss Investment Ltd v So Lai Kei [2010] 1 HKLRD 793.',
                      trap: 'Thinking the duty is confined to historic documents. Big Boss extends it to the assignment about to be executed.',
                    },
                    points: [
                      'The duty covers the power for the present transaction.',
                    ],
                  },
                  {
                    label: 'Consider whether the original must be delivered as well as produced',
                    detail: 'Powers of attorney may fall into either category for the purposes of the exclusivity test — they may or may not relate exclusively to the property.',
                    why: 'A general power covering a person\'s whole affairs plainly does not relate exclusively to one flat; a power granted for a single sale may. The classification decides whether s13A requires the original to be handed over.',
                    exam: {
                      write: 'The power of attorney [does / does not] relate exclusively to the property, so its original [must / need not] be delivered under s13A(1)(b) of the Conveyancing and Property Ordinance.',
                      trap: 'Assuming powers of attorney never relate exclusively to the property. The lecture expressly says they may fall into either category.',
                    },
                    points: [
                      'Section 13A(1)(b) requires delivery of documents relating exclusively to the land and required under s13(1)(a) and (c).',
                      'Powers of attorney may fall into either category.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'A limiting clause deeming the purchaser to assume a named power was valid and unrevoked is one of the standard examples of an exclusion clause — the two topics meet here.',
                'Defective execution under a power of attorney is one of the common defects the LG3 stage list flags for the purchaser\'s solicitor to look for.',
                'The subject is dealt with more fully in the later notes on execution of documents; here only the s13(1)(c) duty is in play.',
                'The exclusion in Lau Kwok Cheong covers both Conditions of Grant and an assignment, so long as the power was used on the purchaser\'s side.',
              ],
            },
            skeleton: {
              bullets: [
                'Identify every produced document executed under a power of attorney.',
                'Date each execution against the contract of sale.',
                'Exclude powers used on the purchaser\'s side.',
                'Include the power for the present assignment.',
                'Decide whether the power relates exclusively to the property for delivery purposes.',
              ],
            },
            mistakes: {
              bullets: [
                'Dating the 15 years from the power rather than from the document executed under it.',
                'Demanding the power under which the purchaser executes.',
                'Overlooking the power for the present assignment.',
                'Assuming a power of attorney can never relate exclusively to the property.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Authority', 'What it establishes'],
                rows: [
                  ['The duty', 's13(1)(c), Conveyancing and Property Ordinance (Cap. 219)', 'Production of any power under which a produced document was executed less than 15 years before the contract'],
                  ['Purchaser\'s side excluded', 'Lau Kwok Cheong Dinnes & Anor v Tse Ming Chiu [2001] 3 HKC 196', 'Excludes Conditions of Grant or an assignment executed by power on behalf of a purchaser'],
                  ['The present assignment', 'Big Boss Investment Ltd v So Lai Kei [2010] 1 HKLRD 793', 'The vendor must produce the power under which the present assignment will be executed'],
                  ['Delivery of the original', 's13A(1)(b), Conveyancing and Property Ordinance (Cap. 219)', 'Depends on whether the power relates exclusively to the land'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG4', issue: 'statutory-period-s13', label: 'The statutory period for showing title' },
              { session: 'LG3', issue: 'exclusion-clauses', label: 'Excluding or limiting the duty to give title' },
              { session: 'LG3', issue: 'documents-of-title', label: 'Which documents are documents of title?' },
              { session: 'LG4', issue: 'chain-of-title', label: 'The chain of title and registration of title documents' },
            ],
          },
          {
            id: 'missing-deeds-re-halifax',
            title: 'Missing title deeds and the rule in Re Halifax',
            summary: 'Three things: a statutory declaration explaining the loss, secondary evidence of the contents, and proof of due execution.',
            triggers: {
              bullets: [
                'Neither the original nor a certified copy of an assignment in the chain can be found.',
                'The vendor offers the old form memorial as a substitute for the missing title document.',
                'The Government lease itself has been lost and the vendor proposes secondary evidence.',
                'A statutory declaration has been made by someone who has no personal knowledge of how the documents were lost.',
                'Original title deeds were lost in the Japanese invasion or destroyed by damp and storage.',
                'The vendor produces a statutory declaration but no evidence of due execution.',
                'The purchaser accepts the contents of the missing deed but disputes that it was properly executed.',
                'The vendor says De Monsa means he need not account for the missing originals at all.',
                'The absence of the original suggests a deposit of title deeds to secure a loan.',
              ],
              routes: [
                { when: 'The question is whether the ORIGINAL had to be delivered in the first place', session: 'LG3', issue: 'original-title-deeds', label: 'Original title deeds: common law and section 13A' },
                { when: 'A recital in a later document refers to the missing one', session: 'LG4', issue: 'recitals', label: 'Using recitals in proving title' },
                { when: 'The missing document is the Government lease or part of it', session: 'LG4', issue: 'ultimate-root', label: 'The ultimate root of title' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Proving a missing document',
                steps: [
                  {
                    label: 'Confirm that a memorial will not do as a substitute',
                    detail: 'The originals or certified copies of all title documents falling within the scope of s13 of the Conveyancing and Property Ordinance must be produced, and a memorial of a missing title document will not suffice as a substitute: Lai Chung Yue v Chau Shing [1987] 3 HKC 406.',
                    why: 'A memorial is a summary prepared for the register, not a record of the instrument\'s terms. It can serve as secondary evidence of the contents, but it is not the document.',
                    exam: {
                      write: 'The memorial is not a substitute for the missing title document: Lai Chung Yue v Chau Shing [1987] 3 HKC 406, though it may serve as secondary evidence of its contents.',
                      trap: 'Treating those two roles as the same. The memorial fails as a substitute and succeeds as evidence — the lecture says both.',
                    },
                    points: [
                      'A memorial is not a substitute for the document.',
                      'The old form memorial will often suffice as secondary evidence of the contents.',
                    ],
                  },
                  {
                    label: 'Do the three things the rule requires',
                    detail: 'If the originals and certified copies cannot be found, the vendor may do three things, in the procedure first approved in Re the Halifax Commercial Banking Co Ltd and Wood (1898) 79 LT 536, CA.',
                    why: 'Each limb answers a different objection: why is it gone, what did it say, and was it validly made. Leaving one out leaves an objection unanswered.',
                    exam: {
                      write: 'The vendor should (a) establish by statutory declaration how the documents came to be lost, (b) produce secondary evidence of their contents, and (c) produce proof of their due execution: Re the Halifax Commercial Banking Co Ltd and Wood (1898) 79 LT 536, CA.',
                      trap: 'Letting anyone make the declaration. It should be made by the person with the best knowledge of how the document came to be missing.',
                    },
                    points: [
                      'Establish by statutory declaration, made by the person with the best knowledge of how the document came to be missing, explaining how it was lost.',
                      'Produce secondary evidence of the contents; often the old form memorial will suffice.',
                      'Produce proof of due execution.',
                    ],
                  },
                  {
                    label: 'Note the Hong Kong adoption and the standard required',
                    detail: 'The procedure was adopted in Hong Kong in Wu Wing Kuen v Leung Kwai Lin Cindy [2001] 1 HKLRD 212, and in Ip Foo Keung Michael v Chan Pak Kai [1999] 3 HKLRD 738, [1999] 4 HKC 565, CA, where Godfrey JA observed that s13(1) was intended simply to facilitate conveyancing by reducing the length of time for which the vendor has to prove his title.',
                    why: 'Godfrey JA\'s point is that the section shortens the period, not the standard. Within the period the vendor still has to prove what he is producing.',
                    exam: {
                      write: 'The vendor must start with the Government lease from which he derives his title; if it is lost or cannot be found, he must produce clear and cogent secondary evidence of its contents and due execution: Ip Foo Keung Michael v Chan Pak Kai [1999] 3 HKLRD 738, CA, per Godfrey JA.',
                      trap: 'Applying a lower standard than "clear and cogent". That is the phrase the Court of Appeal used and the Court of Final Appeal endorsed.',
                    },
                    points: [
                      'Endorsed by the Court of Final Appeal in Leung Kwai Lin Cindy v Wu Wing Kuen [2001] 1 HKLRD 212, CFA.',
                      'Section 13(1) reduces the period, not the standard of proof.',
                    ],
                  },
                  {
                    label: 'Ask whether the rule needs to be invoked at all',
                    detail: 'After De Monsa Investments Ltd v Whole Win Management Fund Ltd [2013] 5 HKC 350, CFA, resort to Re Halifax will at best be rare and may never be necessary.',
                    why: 'The rule was invoked so often because the old understanding required every original back to the root. Once the duty is restricted to originals in the vendor\'s possession or power, plus those whose absence indicates a realistic risk, there is far less to account for.',
                    exam: {
                      write: 'The absence of the original [not indicating] the realistic possibility of some transaction affecting the land which could affect the purchaser, no Re Halifax explanation is required.',
                      trap: 'Assuming the rule is dead. Zhang Xueshuai shows it alive where every original is missing and the property carries alienation restrictions.',
                    },
                    points: [
                      'De Monsa restricted the duty to explain to cases where the absence indicates a realistic possibility of a transaction affecting the land.',
                      'The rule remains relevant where that condition is met.',
                      'A statutory declaration that cannot properly speak to the reason for the loss is not enough: Zhang Xueshuai v Lai Chan Wing [2015] 2 HKC 125, [2015] 2 HKLRD 246, CA.',
                    ],
                  },
                  {
                    label: 'Consider whether a recital will do the work instead',
                    detail: 'Sections 13(3) and 13(4) of the Conveyancing and Property Ordinance assist a vendor in proving his title by means of recitals in conveyancing documents.',
                    why: 'A recital is evidence already in the chain, so it costs nothing to use and is not vulnerable to the objection that a declarant lacks personal knowledge.',
                    exam: {
                      write: 'The [assignment] of [year] recites [the missing document], so by s13([3]/[4]) of the Conveyancing and Property Ordinance the purchaser must assume the recital correct / it is sufficient evidence of the truth of that fact.',
                      trap: 'Reaching for a statutory declaration before checking the recitals. Chan Kin Leung and Chu Wai Ming both turned on a recital curing a missing document.',
                    },
                    points: [
                      'See the separate issue type for the detail of ss13(3) and 13(4).',
                      'Chan Kin Leung v Lok Kar Cheong HCMP 3993/97, 7/5/1998: a recital in a pre-intermediate root document as to a missing Crown lease sufficed.',
                      'Chu Wai Ming Alexander v Ng Yau Yee Connie DCMP 2449/2007, 14/11/2007: a missing distribution agreement cured by a recital in a subsequent assignment.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The declaration must come from the person with the best knowledge. In Zhang the solicitor\'s declaration could speak only to the period after his client took over, and that was fatal.',
                'The memorial does double duty in this topic — useless as a substitute, useful as secondary evidence.',
                'Wu Wing Kuen appears both as a first-instance decision and in the Court of Final Appeal as Leung Kwai Lin Cindy v Wu Wing Kuen [2001] 1 HKLRD 212. Cite the level you need.',
                'The rule applies to showing title; whether an ORIGINAL had to be delivered at all is the separate s13A question.',
              ],
            },
            skeleton: {
              bullets: [
                'Identify the missing document and what it does in the chain.',
                'Ask whether its absence indicates a realistic possibility of a transaction affecting the land.',
                'Check for a recital in a later document under ss13(3) and 13(4).',
                'If the rule is needed, do all three limbs and identify the right declarant.',
                'State the standard: clear and cogent secondary evidence of contents and due execution.',
                'Conclude on whether title has been shown.',
              ],
            },
            mistakes: {
              bullets: [
                'Offering a memorial as a substitute for the document.',
                'Doing the declaration and stopping, without evidence of contents or of due execution.',
                'Having the declaration sworn by someone without the best knowledge.',
                'Treating Re Halifax as obsolete after De Monsa.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Authority', 'What it establishes'],
                rows: [
                  ['Memorial not a substitute', 'Lai Chung Yue v Chau Shing [1987] 3 HKC 406', 'A memorial of a missing document will not suffice as a substitute'],
                  ['The procedure', 'Re the Halifax Commercial Banking Co Ltd and Wood (1898) 79 LT 536, CA', 'Statutory declaration as to the loss, secondary evidence of contents, and proof of due execution'],
                  ['Adopted in Hong Kong', 'Wu Wing Kuen v Leung Kwai Lin Cindy; Ip Foo Keung Michael v Chan Pak Kai [1999] 3 HKLRD 738, [1999] 4 HKC 565, CA', 'Clear and cogent secondary evidence of contents and due execution, per Godfrey JA'],
                  ['Endorsed', 'Leung Kwai Lin Cindy v Wu Wing Kuen [2001] 1 HKLRD 212, CFA', 'The Court of Final Appeal endorsed that view'],
                  ['Rarely needed now', 'De Monsa Investments Ltd v Whole Win Management Fund Ltd [2013] 5 HKC 350, CFA', 'Resort to Re Halifax will at best be rare and may never be necessary'],
                  ['Still alive', 'Zhang Xueshuai v Lai Chan Wing [2015] 2 HKC 125, [2015] 2 HKLRD 246, CA', 'A declaration that could not speak to the reason for the loss was insufficient'],
                  ['Recital as an alternative', 'Chan Kin Leung v Lok Kar Cheong HCMP 3993/97, 7/5/1998; Chu Wai Ming Alexander v Ng Yau Yee Connie DCMP 2449/2007, 14/11/2007', 'Recitals cured a missing Crown lease and a missing distribution agreement'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG4', issue: 'recitals', label: 'Using recitals in proving title' },
              { session: 'LG4', issue: 'ultimate-root', label: 'The ultimate root of title' },
              { session: 'LG3', issue: 'original-title-deeds', label: 'Original title deeds: common law and section 13A' },
              { session: 'LG4', issue: 'intermediate-root', label: 'The intermediate root of title' },
            ],
          },
          {
            id: 'recitals',
            title: 'Using recitals in proving title',
            summary: 'Two provisions, two different jobs: s13(3) presumes a recited pre-root document; s13(4) proves a fact recited in one.',
            triggers: {
              bullets: [
                'An assignment in the chain recites a Crown lease that cannot be found.',
                'A recital in a subsequent assignment refers to a distribution agreement which is missing.',
                'A deed of mutual covenant of 1931 and an assignment of 1932 recite that the terms of the Grant were duly accepted and deposited in the Land Office.',
                'Two letters referred to in a pre-intermediate root document cannot be located.',
                'A severance of a joint tenancy in the pre-intermediate root period cannot be directly proved.',
                'The occupation permit from the pre-intermediate root period is missing but is recited in a later deed.',
                'The purchaser says a recital proves nothing because the underlying document has never been seen.',
                'The vendor relies on a recital and the purchaser offers no evidence to the contrary.',
                'The document containing the recital is itself more than 15 years old.',
              ],
              routes: [
                { when: 'The document is missing and there is no recital to rely on', session: 'LG4', issue: 'missing-deeds-re-halifax', label: 'Missing title deeds and the rule in Re Halifax' },
                { when: 'The missing document is part of the ultimate root', session: 'LG4', issue: 'ultimate-root', label: 'The ultimate root of title' },
                { when: 'The defect the recital addresses lies before the intermediate root', session: 'LG4', issue: 'pre-intermediate-defects', label: 'Pre-intermediate root title defects' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Using a recital to fill a gap',
                steps: [
                  {
                    label: 'Identify the recital and which subsection it engages',
                    detail: 'Recitals may be narrative or introductory and are introduced by the word "WHEREAS". Two provisions of the Conveyancing and Property Ordinance assist a vendor in proving his title by means of them.',
                    why: 'The two subsections look alike but do different work: one is about a recited DOCUMENT, the other about a recited FACT. Picking the wrong one means proving the wrong thing.',
                    exam: {
                      write: 'The [assignment] of [year] recites [the document / the fact], engaging s13([3]/[4]) of the Conveyancing and Property Ordinance.',
                      trap: 'Using s13(3) for a recited fact. Section 13(3) is about a recital OF a pre-intermediate root document; s13(4) is about a recital of fact IN one.',
                    },
                    points: [
                      'Section 13(3): a recital, in a document produced as proof of title, of a document dated or made before the date from which the vendor must prove title.',
                      'Section 13(4): a recital of fact in a pre-intermediate root document.',
                    ],
                  },
                  {
                    label: 'Apply s13(3): three presumptions about the recited document',
                    detail: 'Section 13(3) provides that where any document produced as proof of title contains a recital of a document dated or made before the date from which the vendor is required to prove title, the purchaser must assume, unless the contrary is proved, three things.',
                    why: 'The presumptions are rebuttable, which is what keeps them fair: the purchaser is relieved of proving a negative, but may still displace the recital with evidence.',
                    exam: {
                      write: 'By s13(3) of the Conveyancing and Property Ordinance the purchaser must assume, unless the contrary is proved, that the recital is correct, that it gives all the material contents of the document recited, and that the document recited was duly executed.',
                      trap: 'Treating the presumption as irrebuttable. It applies "unless the contrary is proved".',
                    },
                    points: [
                      'That the recital is correct.',
                      'That the recital gives all the material contents of the document recited.',
                      'That the document recited was duly executed.',
                      'The presumption assists where an important pre-intermediate root document is missing — proof of severance of a joint tenancy, a missing occupation permit, a certificate of compliance.',
                    ],
                  },
                  {
                    label: 'Apply s13(4): a recital of fact is sufficient evidence of its truth',
                    detail: 'Section 13(4) provides that a recital of fact in a pre-intermediate root document shall be sufficient evidence of the truth of that recital.',
                    why: 'As the Court of Appeal put it in Kingdom Miles, the purpose is to facilitate proof of title by enabling conveyancers to rely on recitals in a document of title more than 15 years old, unless the contrary is proved.',
                    exam: {
                      write: 'The recital in the [deed of 1931] that the terms and conditions of the Grant were duly accepted and deposited in the Land Office as the Conditions of Grant is, by s13(4), sufficient evidence of the truth of that fact unless the contrary is proved.',
                      trap: 'Treating the absence of the recited document as evidence to the contrary. In Kingdom Miles the mere fact that the two letters were missing could not be evidence to the contrary.',
                    },
                    points: [
                      'The document containing the recital must be a pre-intermediate root document, that is more than 15 years before the contract of sale.',
                      'Kingdom Miles Ltd v Ever Crystal Ltd [2019] 1 HKLRD 643: the vendor was entitled to rely on s13(4) as to the recitals in a deed of covenants of 1931 and an assignment of 1932.',
                      'The mere fact that the recited documents were missing could not be evidence to the contrary.',
                    ],
                  },
                  {
                    label: 'Check the decided examples of recitals curing a gap',
                    detail: 'Both worked examples involve exactly the sort of document that goes missing — a Crown lease and a distribution agreement on an intestacy — and in each the recital in a later deed was accepted as proof of title.',
                    why: 'Both worked examples involve exactly the sort of document that goes missing: a Crown lease and a distribution agreement on an intestacy. That is the pattern to recognise.',
                    exam: {
                      write: 'The missing [Crown lease / distribution agreement] is cured by the recital in the [pre-intermediate root document / subsequent assignment], which is sufficient proof of title.',
                      trap: 'Forgetting to look for the recital at all. It is cheaper and more robust than a statutory declaration and should be the first resort.',
                    },
                    points: [
                      'Chan Kin Leung v Lok Kar Cheong HCMP 3993/97, 7/5/1998: a recital in a pre-intermediate root document as to a missing Crown lease sufficed by way of proof of title.',
                      'Chu Wai Ming Alexander v Ng Yau Yee Connie DCMP 2449/2007, 14/11/2007: a missing distribution agreement cured by a recital in a subsequent assignment.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'Kingdom Miles is the case where s13(4) was the real answer and the argument had been run on s13(3) — the Court of Appeal noted the Recorder had not grappled with sub-section (4).',
                'Both provisions operate only on pre-intermediate root material. They will not help with a gap inside the chain of title period.',
                'A recital is not a substitute for production where the document exists and can be obtained. It fills a gap; it does not excuse laziness.',
                'The recital route sits alongside Re Halifax, not instead of it — check the recitals first, then fall back.',
              ],
            },
            skeleton: {
              bullets: [
                'Identify the missing document or unproved fact.',
                'Search the produced documents for a recital of it.',
                'Classify the recital: of a document (s13(3)) or of a fact (s13(4)).',
                'Apply the relevant presumption and state that it is rebuttable.',
                'Say why the absence of the recited document is not itself evidence to the contrary.',
              ],
            },
            mistakes: {
              bullets: [
                'Using s13(3) where the recital is of a fact rather than a document.',
                'Applying either subsection to a document inside the chain of title period.',
                'Treating the presumptions as conclusive.',
                'Arguing that the loss of the recited document rebuts the recital.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'The purpose of sub-s.(4) is to facilitate the proof of title by enabling conveyancers to rely on recitals in a document of title of more than 15 years before the contract of sale. Its effect is to treat such recitals as sufficient evidence of the truth of any fact or matter contained in the recitals unless the contrary is proved.', cite: 'Kingdom Miles Ltd v Ever Crystal Ltd [2019] 1 HKLRD 643 at [125], as reproduced in the LG4 slides' },
              ],
              table: {
                headers: ['Point', 'Provision or case', 'What it establishes'],
                rows: [
                  ['Recital of a document', 's13(3), Conveyancing and Property Ordinance (Cap. 219)', 'Rebuttable presumptions that the recital is correct, gives all material contents, and that the document was duly executed'],
                  ['Recital of a fact', 's13(4), Conveyancing and Property Ordinance (Cap. 219)', 'A recital of fact in a pre-intermediate root document is sufficient evidence of its truth'],
                  ['Purpose of s13(4)', 'Kingdom Miles Ltd v Ever Crystal Ltd [2019] 1 HKLRD 643', 'Recitals in documents more than 15 years old are sufficient evidence unless the contrary is proved; a missing recited document is not evidence to the contrary'],
                  ['Missing Crown lease', 'Chan Kin Leung v Lok Kar Cheong HCMP 3993/97, 7/5/1998', 'A recital in a pre-intermediate root document sufficed'],
                  ['Missing distribution agreement', 'Chu Wai Ming Alexander v Ng Yau Yee Connie DCMP 2449/2007, 14/11/2007', 'Cured by a recital in a subsequent assignment'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG4', issue: 'missing-deeds-re-halifax', label: 'Missing title deeds and the rule in Re Halifax' },
              { session: 'LG4', issue: 'pre-intermediate-defects', label: 'Pre-intermediate root title defects' },
              { session: 'LG4', issue: 'ultimate-root', label: 'The ultimate root of title' },
              { session: 'LG4', issue: 'intermediate-root', label: 'The intermediate root of title' },
              { session: 'LG4', issue: 'chain-of-title', label: 'The chain of title and registration of title documents' },
              { session: 'LG1', issue: 'certificate-of-compliance', label: 'Proving compliance and the 1 January 1970 divide' },
              { session: 'LG3', issue: 'documents-of-title', label: 'Which documents are documents of title?' },
            ],
          },
          {
            id: 'mere-conveyance',
            title: 'Matters of mere conveyance',
            summary: 'A defect the vendor can remove on his own, without anyone else\'s concurrence, does not make the title defective.',
            triggers: {
              bullets: [
                'The property is still subject to a mortgage which the vendor intends to discharge before completion.',
                'Trespassers are occupying the land the vendor has agreed to sell with vacant possession.',
                'Licensees are on the land and the vendor says he can remove them.',
                'Trespassers occupy wall stalls outside a shop in a multi-storey building.',
                'The occupants of the property are tenants under a registered lease rather than trespassers.',
                'The purchaser refuses to complete because of a subsisting charge the vendor has undertaken to discharge.',
                'The vendor says the defect will be gone by completion and the purchaser says that is too late.',
                'The vendor needs a third party\'s cooperation to remove the defect.',
                'An unauthorised structure could be demolished before completion.',
              ],
              routes: [
                { when: 'The defect cannot be removed without a third party\'s concurrence', session: 'LG3', issue: 'encumbered-or-defeasible', label: 'Encumbered and defeasible titles' },
                { when: 'The vendor proposes to remedy the defect AFTER completion', session: 'LG4', issue: 'answering-requisitions', label: 'Answering requisitions with candour' },
                { when: 'The question is whether a required consent has been obtained', session: 'LG3', issue: 'title-in-vendor', label: 'Title in the vendor, consents, and assigning the whole interest' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Testing whether a defect is a matter of mere conveyance',
                steps: [
                  {
                    label: 'State the test',
                    detail: 'Matters of mere conveyance will not render a title defective. They are defects which the vendor can remove independently of the concurrence of any other person: Re Jackson & Oakshot (1880) 14 Ch D 851.',
                    why: 'A defect the vendor controls is not a risk to the purchaser at all: by the time he takes the property it will be gone. The independence requirement is what makes that safe to assume.',
                    exam: {
                      write: 'The [subsisting mortgage] is a matter of mere conveyance, being a defect the vendor can remove independently of the concurrence of any other person: Re Jackson & Oakshot (1880) 14 Ch D 851.',
                      trap: 'Applying the label to something the vendor cannot in fact remove alone. Independence from any other person is the whole test.',
                    },
                    points: [
                      'The paradigm example is the discharge of a mortgage prior to completion.',
                      'The defect must be removable independently of anyone else\'s concurrence.',
                    ],
                  },
                  {
                    label: 'Apply it to occupiers, where the line is drawn',
                    detail: 'In Sharneyford Supplies Ltd v Edge [1985] 1 All ER 976, there was a duty on the vendor to give vacant possession and there were trespassers or licensees present on the land to be sold; since it was within the vendor\'s power to remove them, this was a matter of mere conveyance.',
                    why: 'A trespasser has no right the purchaser could be bound by, and a licensee\'s permission can be withdrawn. A tenant is different because the tenancy is an interest in the land.',
                    exam: {
                      write: 'The occupants being [trespassers / licensees], their removal is within the vendor\'s power and is a matter of mere conveyance; the conclusion would be different if they were tenants.',
                      trap: 'Extending it to tenants. Sharneyford expressly reaches a different conclusion where the occupants are tenants.',
                    },
                    points: [
                      'Applied in Ip Fai Man v Lui Kit Man HCA 13661/1998.',
                      'City Chain Properties Ltd v Speedy Port Ltd HCA 2221/1998: trespassers occupying wall stalls outside a shop constituted a matter of mere conveyance and did not adversely affect the vendor\'s title.',
                      'A different conclusion follows if the occupants are tenants.',
                    ],
                  },
                  {
                    label: 'Distinguish it from an undertaking to remedy after completion',
                    detail: 'In the absence of an express agreement to that effect, it will not usually be a sufficient answer to a requisition that the vendor undertakes to remedy the defect after completion: Liu Tak Kin v Chan Yiu Kai [1998] 4 HKC 362.',
                    why: 'A matter of mere conveyance is cured BEFORE completion; an undertaking pushes the risk past the moment the purchaser pays. The two look similar and are not.',
                    exam: {
                      write: 'The vendor\'s undertaking to remedy the defect after completion is not a sufficient answer to the requisition, absent express agreement: Liu Tak Kin v Chan Yiu Kai [1998] 4 HKC 362.',
                      trap: 'Ignoring the exception. In Hu Mei Yu Anastasia v King Best Enterprise Ltd HCA 9317/1998, 10/7/2000, a s27A Buildings Ordinance order to investigate and repair a slope was an encumbrance, but an undertaking by the vendor to pay his share should have satisfied a purchaser with robust common sense — though he could properly be asked to give security to fortify the undertaking.',
                    },
                    points: [
                      'Mere conveyance: cured before completion, independently.',
                      'An undertaking: a promise about the future, generally insufficient.',
                      'Hu Mei Yu Anastasia is the exception, on facts involving an investigation and repair order rather than a charge.',
                    ],
                  },
                  {
                    label: 'State the consequence for the transaction',
                    detail: 'Classifying a defect as a matter of mere conveyance is how a vendor defeats a requisition without doing anything more than he was always going to do at completion.',
                    why: 'Classifying a defect as a matter of mere conveyance is how a vendor defeats a requisition without doing anything more than he was always going to do at completion.',
                    exam: {
                      write: 'The defect being a matter of mere conveyance, the title is not defective and the purchaser is not entitled to refuse to complete on account of it.',
                      trap: 'Forgetting that the vendor still has to actually do it. The classification assumes the removal happens by completion.',
                    },
                    points: [
                      'The title is not rendered defective.',
                      'The vendor must still effect the removal or discharge by completion.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The doctrine turns on the vendor\'s power, not on the size of the defect. A large mortgage is a matter of mere conveyance; a small tenancy is not.',
                'Where a consent is required from a third party, the defect is by definition not within the vendor\'s sole power.',
                'Removal of an unauthorised structure before completion is the version of this point that arises on unauthorised building works, dealt with in the later notes.',
                'Hu Mei Yu Anastasia is confined to an order under s27A of the Buildings Ordinance for investigation and repair, and the charge stage under s33 had not been reached.',
              ],
            },
            skeleton: {
              bullets: [
                'Identify the defect and who controls its removal.',
                'Ask whether the vendor can remove it without anyone else\'s concurrence.',
                'For occupiers, classify them as trespassers, licensees or tenants.',
                'Distinguish an undertaking to remedy after completion.',
                'Conclude on whether the title is defective.',
              ],
            },
            mistakes: {
              bullets: [
                'Treating a tenancy as a matter of mere conveyance.',
                'Accepting an undertaking to remedy after completion as equivalent.',
                'Applying the doctrine where a third party\'s consent is needed.',
                'Assuming the classification excuses the vendor from actually clearing the defect.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Authority', 'What it establishes'],
                rows: [
                  ['The test', 'Re Jackson & Oakshot (1880) 14 Ch D 851', 'A defect the vendor can remove independently of anyone else\'s concurrence, such as a discharge of mortgage before completion'],
                  ['Occupiers', 'Sharneyford Supplies Ltd v Edge [1985] 1 All ER 976', 'Trespassers or licensees removable by the vendor; a different conclusion for tenants'],
                  ['Applied', 'Ip Fai Man v Lui Kit Man HCA 13661/1998; City Chain Properties Ltd v Speedy Port Ltd HCA 2221/1998', 'Trespassers occupying wall stalls did not adversely affect the vendor\'s title'],
                  ['Not an undertaking', 'Liu Tak Kin v Chan Yiu Kai [1998] 4 HKC 362', 'An undertaking to remedy after completion is generally not a sufficient answer'],
                  ['The exception', 'Hu Mei Yu Anastasia v King Best Enterprise Ltd HCA 9317/1998, 10/7/2000', 's27A Buildings Ordinance order; undertaking to pay a share should have satisfied a purchaser with robust common sense, with security to fortify it'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG3', issue: 'encumbered-or-defeasible', label: 'Encumbered and defeasible titles' },
              { session: 'LG4', issue: 'answering-requisitions', label: 'Answering requisitions with candour' },
              { session: 'LG3', issue: 'title-in-vendor', label: 'Title in the vendor, consents, and assigning the whole interest' },
            ],
          },
          {
            id: 'investigating-title',
            title: 'Investigating title: what the purchaser\'s solicitor must do',
            summary: 'Two searches, documents back to the ultimate root, a site visit, the plans — then reasonable requisitions. Failing to search may be negligence.',
            triggers: {
              bullets: [
                'A lis pendens was registered against the property and the purchaser\'s solicitor never searched.',
                'Only one Land Registry search was carried out, three months before completion.',
                'The solicitor relied on the documents the vendor supplied and obtained nothing from the Land Registry himself.',
                'An encumbrance was registered in the week before completion.',
                'The plans annexed to the Government lease are not colour coded.',
                'Nobody has visited the property to see who is in occupation.',
                'A purchaser is suing his own solicitor for failing to discover a defect before completion.',
                'The solicitor did not check whether there was a right of way giving access to the property.',
                'No structural survey was arranged before the agreement was signed.',
              ],
              routes: [
                { when: 'The defect found lies before the intermediate root', session: 'LG4', issue: 'pre-intermediate-defects', label: 'Pre-intermediate root title defects' },
                { when: 'The question is when the requisition must be raised', session: 'LG4', issue: 'raising-requisitions', label: 'Raising requisitions: the time limits' },
                { when: 'The argument is that the purchaser should have found the defect earlier', session: 'LG4', issue: 'requisitions-out-of-time', label: 'Raising requisitions out of time' },
              ],
            },
            answering: {
              flowchart: {
                title: 'The purchaser\'s investigation, step by step',
                steps: [
                  {
                    label: 'Search the Land Registry at least twice',
                    detail: 'In checking title the solicitor for the purchaser should conduct at least two searches in the Land Registry, historical rather than current; the second should be carried out just before completion, to check for encumbrances recently registered.',
                    why: 'Priority in a deeds system is a race. A search at the time of the agreement says nothing about what was lodged the following month, which is why the second search sits immediately before completion.',
                    exam: {
                      write: 'The purchaser\'s solicitor should have conducted at least two historical searches in the Land Registry, the second just before completion, to check for recently registered encumbrances.',
                      trap: 'Conducting a current search. The lecture specifies historical rather than current searches.',
                    },
                    points: [
                      'Historical, not current.',
                      'The second search just before completion.',
                      'Failure to conduct such a search may give rise to an action in negligence: Wong Chick Keung v Woo Man Sang HCMP 3490/1991, 13/2/2001, where the solicitor was negligent in failing to carry out a search which would have revealed a registered lis pendens.',
                    ],
                  },
                  {
                    label: 'Obtain the documents back to the ultimate root yourself',
                    detail: 'The purchaser\'s solicitor should obtain from the Land Registry copies of the title deeds going back to the ultimate root of title, and not merely those provided by the vendor from the intermediate root to the present.',
                    why: 'The vendor is only obliged to produce from the intermediate root. Anything wrong before that is the purchaser\'s to find — and, once found, the vendor\'s to answer for.',
                    exam: {
                      write: 'The purchaser\'s solicitor should obtain copies of the title deeds going back to the ultimate root, and not rely on what the vendor has supplied from the intermediate root.',
                      trap: 'Assuming the vendor\'s bundle is the whole title. The pre-intermediate root period is where several of the reported defects were found.',
                    },
                    points: [
                      'The vendor need only produce from the intermediate root.',
                      'A pre-intermediate root defect the purchaser finds must still be answered: Lo Hung Biu v Lo Shea Chung [1997] 2 HKC 723, CA.',
                    ],
                  },
                  {
                    label: 'Note the defects on the title',
                    detail: 'The solicitor should note any defects on title: missing title documents, encumbrances, reasons why the title might be defeasible, improper execution of documents, signature discrepancies and occupiers\' rights.',
                    why: 'Each of these is a category rather than a single check, and each corresponds to a later topic in the course. Missing them at this stage is what produces a late requisition.',
                    exam: {
                      write: 'On investigating title the purchaser\'s solicitor should note [the missing assignment / the unregistered discharge / the signature discrepancy], and raise a reasonable requisition upon it.',
                      trap: 'Requisitioning the execution of documents that do not matter. Improper execution is usually checked on the title documents but not on sale and purchase agreements, nor on execution by purchasers.',
                    },
                    points: [
                      'Missing title documents.',
                      'Encumbrances.',
                      'Reasons why the title might be defeasible — including a site visit to check for unauthorised building works.',
                      'Improper execution of documents, but not usually of sale and purchase agreements nor execution by purchasers.',
                      'Signature discrepancies.',
                      'Occupiers\' rights — a visit is necessary.',
                    ],
                  },
                  {
                    label: 'Check the plans and the access',
                    detail: 'The solicitor should check the plans carefully: are they properly colour coded? He should also check rights of way for the purchaser to enter his property.',
                    why: 'A plan that is not colour coded may not identify what is being sold, and a property with no right of access is worth a great deal less than one with it. Both have produced reported requisitions.',
                    exam: {
                      write: 'The plans annexed to the [Government lease / deed of mutual covenant] must be properly colour coded: Tai Wai Kin v Cheung Wan Wah [2004] 3 HKC 198, and the right of way giving access to the property must be checked.',
                      trap: 'Treating the access point as minor. A requisition as to whether there was a right of way permitting ingress and egress has been held to go to the root of the vendor\'s title.',
                    },
                    points: [
                      'Plans must be properly colour coded.',
                      'Non-correspondence of the actual building with the plans might render the title defective.',
                      'Check the rights of way giving the purchaser access.',
                    ],
                  },
                  {
                    label: 'Then raise reasonable requisitions',
                    detail: 'The investigation exists in order to produce requisitions. Everything before this step is preparation for the one step that actually protects the purchaser — and a defect that could have been found at this stage is one that cannot support a late requisition.',
                    why: 'The investigation exists to produce requisitions. Everything above is preparation for the one step that actually protects the purchaser.',
                    exam: {
                      write: 'Having investigated the title, the purchaser\'s solicitor should raise reasonable requisitions on the defects identified, within the time the agreement allows.',
                      trap: 'Forgetting the due diligence consequence. A defect that could have been identified at this stage may not be requisitioned late, even if it goes to the root of the vendor\'s title.',
                    },
                    points: [
                      'Requisitions must be raised within the time the agreement allows.',
                      'A defect discoverable at this stage may not support a late requisition: Tread East Ltd v Hillier Development Ltd [1993] 1 HKC 285, CA.',
                      'What amounts to due diligence is judged against usual Hong Kong practice: Billion Best (Hong Kong) Ltd v Amity Investment Co Ltd [2002] 1 HKLRD 392.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The two-search rule is a professional standard with a negligence consequence attached, not merely good practice.',
                'Dty Judge Wooley in Billion Best observed how rarely purchasers in Hong Kong arrange a structural survey, and concluded that a purchaser following the usual procedure has not failed in due diligence.',
                'The site visit does double work: occupiers\' interests, and unauthorised building works.',
                'The purchaser is expected to go behind the vendor\'s bundle to the ultimate root — which is why the pre-intermediate root issue type exists at all.',
              ],
            },
            skills: {
              bullets: [
                'Time the second search to the day before completion, not to the week of it.',
                'Record what the site visit showed, with dates. It is the evidence that later decides patency and due diligence.',
                'Draft each requisition to identify the defect and suggest how it should be remedied, rather than asking an open question.',
              ],
            },
            skeleton: {
              bullets: [
                'Conduct at least two historical Land Registry searches, the second just before completion.',
                'Obtain the title deeds back to the ultimate root.',
                'Note the defects, by category.',
                'Visit the property for occupiers and unauthorised works.',
                'Check the plans and the access.',
                'Raise reasonable requisitions within time.',
              ],
            },
            mistakes: {
              bullets: [
                'Relying solely on the documents supplied by the vendor.',
                'Conducting a single search at the outset.',
                'Skipping the site visit because the title looks clean on paper.',
                'Raising general requisitions instead of specific ones on the defects identified.',
              ],
            },
            authorities: {
              table: {
                headers: ['Step', 'Authority', 'What it establishes'],
                rows: [
                  ['Two searches', 'Lecture note', 'At least two historical searches, the second just before completion'],
                  ['Negligence', 'Wong Chick Keung v Woo Man Sang HCMP 3490/1991, 13/2/2001', 'Solicitor negligent in failing to search; a registered lis pendens would have been revealed'],
                  ['Back to the ultimate root', 'Lo Hung Biu v Lo Shea Chung [1997] 2 HKC 723, CA', 'The purchaser may raise requisitions on pre-intermediate root documents he obtains himself'],
                  ['Plans', 'Tai Wai Kin v Cheung Wan Wah [2004] 3 HKC 198; Fan Tony v IO of Kung Lok Building [2006] 3 HKC 240', 'Plans must be colour coded; non-correspondence may render title defective'],
                  ['Due diligence', 'Tread East Ltd v Hillier Development Ltd [1993] 1 HKC 285, CA; Billion Best (Hong Kong) Ltd v Amity Investment Co Ltd [2002] 1 HKLRD 392', 'A defect discoverable with due diligence may not be requisitioned late; usual Hong Kong practice sets the standard'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG4', issue: 'raising-requisitions', label: 'Raising requisitions: the time limits' },
              { session: 'LG4', issue: 'pre-intermediate-defects', label: 'Pre-intermediate root title defects' },
              { session: 'LG3', issue: 'conveyancing-stages', label: 'The stages of a simple conveyancing transaction' },
              { session: 'LG3', issue: 'encumbered-or-defeasible', label: 'Encumbered and defeasible titles' },
              { session: 'LG4', issue: 'intermediate-root', label: 'The intermediate root of title' },
              { session: 'LG4', issue: 'ultimate-root', label: 'The ultimate root of title' },
            ],
          },
          {
            id: 'raising-requisitions',
            title: 'Raising requisitions: the time limits',
            summary: 'No duty to raise one — but if you do, do it within the express time, or within a reasonable time if the agreement is silent.',
            triggers: {
              bullets: [
                'The agreement adopts condition 7 of Part A of the Second Schedule to the Conveyancing and Property Ordinance.',
                'The agreement requires requisitions to be raised within 7 days after receipt of the title deeds.',
                'Title deeds arrived in three batches and the purchaser waited for the last before raising anything.',
                'The agreement allowed 9 days from agreement to completion and the title deeds arrived 7 days before completion.',
                'The agreement is silent as to when requisitions must be raised.',
                'The vendor supplied the title deeds two months before completion and the requisitions were raised 9 days before it.',
                'A requisition was properly raised two days before the completion date.',
                'The purchaser suspects a defect and is minded to say nothing until completion.',
                'The purchaser was six minutes late completing because the vendor gave directions for split cheques at 11:13 am.',
              ],
              routes: [
                { when: 'The requisition is outside the time limit and the purchaser wants to raise it anyway', session: 'LG4', issue: 'requisitions-out-of-time', label: 'Raising requisitions out of time' },
                { when: 'The question is what a requisition may properly be about', session: 'LG4', issue: 'subject-matter-of-requisitions', label: 'The subject matter of requisitions' },
                { when: 'The complaint is about the vendor\'s answer rather than the purchaser\'s timing', session: 'LG4', issue: 'answering-requisitions', label: 'Answering requisitions with candour' },
                { when: 'The purchaser is said to have accepted the title by his conduct', session: 'LG3', issue: 'purchaser-waiver', label: 'Waiver by the purchaser of his right to object' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Timing a requisition',
                steps: [
                  {
                    label: 'Start from the duty, and the absence of a duty on the purchaser',
                    detail: 'The vendor\'s duty to show title includes a duty to answer requisitions reasonably raised by the purchaser, either from the documents produced by the vendor or from his own investigation of the title: Lo Hung Biu v Lo Shea Chung [1997] 2 HKC 723, CA. There is no duty on the purchaser to raise one.',
                    why: 'The asymmetry is deliberate: the burden of title is on the vendor, so the purchaser\'s failure to ask cannot relieve him of it.',
                    exam: {
                      write: 'The vendor must answer requisitions reasonably raised, whether arising from the documents he produced or from the purchaser\'s own investigation; there is no duty on the purchaser to raise any.',
                      trap: 'Forgetting the counterweight. No willing purchaser would remain silent suspecting a defect and refuse to complete; such conduct might be a repudiatory breach, or a waiver: Mexon Holdings Ltd v Silver Bay International Ltd [2000] 1 HKLRD 935, CFA.',
                    },
                    points: [
                      'The duty covers requisitions arising from the purchaser\'s own investigation.',
                      'No failure to raise a requisition constitutes a waiver of the right to object at completion: Profit World Trading Ltd v Ho So Yung [2011] 2 HKC 473, CA.',
                      'But playing games and staying silent is not the conduct of a willing purchaser.',
                    ],
                  },
                  {
                    label: 'Find the express time limit',
                    detail: 'There is usually an express term giving the purchaser the right to raise requisitions up to a specified number of days before completion — see condition 7 of Part A of the Second Schedule to the Conveyancing and Property Ordinance, under which a requisition must be raised not later than 14 days prior to completion.',
                    why: 'The limit exists so the vendor has time to answer and, if he cannot, to return the deposit. A requisition landing on the completion date defeats that purpose.',
                    exam: {
                      write: 'By [clause [x] / condition 7 of Part A of the Second Schedule to the Conveyancing and Property Ordinance] the requisition had to be raised [not later than 14 days prior to completion / within 7 days after receipt of the title deeds].',
                      trap: 'Reading a "within 7 days of receipt of the title deeds" clause as running from the last batch. It does not.',
                    },
                    points: [
                      'Ko Lan v Hoo Man Kuen Martin HCMP 4416/1998, 19/1/1999: where the term provides for requisitions within 7 days after receipt of the title deeds, the purchaser may not wait until all the deeds have been supplied; he must raise those requisitions relevant from the documents supplied within 7 days of receipt of the first documents.',
                      'First Shanghai Enterprises Ltd v Dahlia Properties Pte Ltd [2002] 3 HKLRD 461, CA: requisitions to be delivered as soon as practicable within 7 working days after receipt; the deeds were received only 7 days before completion; the provision was binding, the parties having clearly contemplated a very speedy completion.',
                    ],
                  },
                  {
                    label: 'If the agreement is silent, imply a reasonable time',
                    detail: 'Where the agreement is silent as to the time within which requisitions must be raised, the court will imply a term that the requisition must be raised within a reasonable time before completion: Goldmex Ltd v Edward Wong Finance Co Ltd [2006] 2 HKLRD 795.',
                    why: 'Reasonableness is measured against the willing purchaser standard, which is what turns an open-ended implied term into a workable one.',
                    exam: {
                      write: 'The agreement being silent, a term is implied that requisitions be raised within a reasonable time before completion, assessed on the footing of a willing purchaser and a willing vendor possessed of robust common sense.',
                      trap: 'Assuming a long gap before completion gives the purchaser latitude. In Goldmex the deeds came two months before completion and requisitions raised 9 days before it were out of time.',
                    },
                    points: [
                      'What is reasonable depends on the circumstances of each case.',
                      'The court assumes a willing purchaser and a willing vendor with robust common sense: Mexon Holdings Ltd v Silver Bay International Ltd [2000] 1 HKLRD 935, CFA.',
                      'In Goldmex the purchaser was held not to be a willing purchaser and the requisitions need not be answered.',
                    ],
                  },
                  {
                    label: 'Deal with the completion date where a requisition lands late but in time',
                    detail: 'Where a requisition has been properly raised just before the completion date, the time for completion should be extended for a reasonable period to permit the vendor to answer it: Regent Summit (HK) Ltd v Smart Business (Asia) Ltd [1998] 2 HKC 718.',
                    why: 'A properly raised requisition is the purchaser exercising a contractual right. He should not lose the benefit of it because the calendar is tight.',
                    exam: {
                      write: 'The requisition having been properly raised on [date], the time for completion should be extended for a reasonable period to permit the vendor to answer it: Regent Summit (HK) Ltd v Smart Business (Asia) Ltd [1998] 2 HKC 718.',
                      trap: 'Assuming the extension is automatic. First Shanghai shows a tight timetable the parties chose being enforced against a purchaser who could have acted quicker.',
                    },
                    points: [
                      'Kensland Realty Ltd v Whale View Investment Ltd (2001) 4 HKCFAR 381: a person is not permitted to take advantage of his own wrong; the purchaser was six minutes late because the vendor gave directions for split cheques only at 11:13 am, although no deadline for such directions was stipulated.',
                      'In First Shanghai the purchaser raised requisitions one day before completion and, given the tight schedule the parties had chosen, could have acted quicker.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'Condition 7 of Part A of the Second Schedule is the standard 14-day formula, and is what an agreement adopting the Second Schedule brings in.',
                'A clause tied to receipt of the title deeds bites on each batch as it arrives, not on the last.',
                'The willing-purchaser standard cuts both ways: it is used against a purchaser who sits on a requisition and against a vendor who manufactures delay.',
                'Even a requisition out of time does not relieve the vendor of the duty to give good title at completion.',
              ],
            },
            skeleton: {
              bullets: [
                'Find the express time limit in the agreement, or condition 7 if the Second Schedule is adopted.',
                'Identify when the title deeds were received, batch by batch.',
                'If silent, imply a reasonable time on the willing-purchaser standard.',
                'Date the requisition and test it against the limit.',
                'If properly raised close to completion, consider an extension of the completion date.',
              ],
            },
            mistakes: {
              bullets: [
                'Running a "7 days from receipt" clause from the final batch of deeds.',
                'Assuming a long run-up to completion makes a late requisition reasonable.',
                'Treating an extension of the completion date as automatic.',
                'Advising a purchaser to stay silent about a suspected defect.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Authority', 'What it establishes'],
                rows: [
                  ['Duty to answer', 'Lo Hung Biu v Lo Shea Chung [1997] 2 HKC 723, CA', 'Requisitions arising from the documents or from the purchaser\'s own investigation'],
                  ['No duty to raise', 'Profit World Trading Ltd v Ho So Yung [2011] 2 HKC 473, CA', 'Failure to raise a requisition is not a waiver'],
                  ['But not silence either', 'Mexon Holdings Ltd v Silver Bay International Ltd [2000] 1 HKLRD 935, CFA', 'No willing purchaser would stay silent suspecting a defect and refuse to complete'],
                  ['Standard express limit', 'Condition 7, Part A, Second Schedule, Conveyancing and Property Ordinance (Cap. 219)', 'Not later than 14 days prior to completion'],
                  ['Batch by batch', 'Ko Lan v Hoo Man Kuen Martin HCMP 4416/1998, 19/1/1999', 'Requisitions relevant from documents supplied must be raised within 7 days of the first documents'],
                  ['Tight timetables enforced', 'First Shanghai Enterprises Ltd v Dahlia Properties Pte Ltd [2002] 3 HKLRD 461, CA', 'A 7-working-day clause binding where the parties contemplated a very speedy completion'],
                  ['Silent agreement', 'Goldmex Ltd v Edward Wong Finance Co Ltd [2006] 2 HKLRD 795', 'A reasonable time is implied; deeds two months early and requisitions 9 days before completion were too late'],
                  ['Extension', 'Regent Summit (HK) Ltd v Smart Business (Asia) Ltd [1998] 2 HKC 718', 'Completion should be extended a reasonable period to allow the vendor to answer'],
                  ['No advantage from one\'s own wrong', 'Kensland Realty Ltd v Whale View Investment Ltd (2001) 4 HKCFAR 381', 'Purchaser six minutes late because of the vendor\'s late directions'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG4', issue: 'requisitions-out-of-time', label: 'Raising requisitions out of time' },
              { session: 'LG4', issue: 'answering-requisitions', label: 'Answering requisitions with candour' },
              { session: 'LG4', issue: 'investigating-title', label: 'Investigating title: what the purchaser\'s solicitor must do' },
            ],
          },
          {
            id: 'requisitions-out-of-time',
            title: 'Raising requisitions out of time',
            summary: 'The exception is a requisition going to the root of the vendor\'s title — and the exception to that is one the purchaser should have raised with due diligence.',
            triggers: {
              bullets: [
                'The Government lease is missing and the purchaser raises the point after the contractual deadline.',
                'A cockloft in a shop in an older district is the subject of a requisition raised late.',
                'An illegal staircase has been demolished and a cockloft converted into an additional storey.',
                'There is significant encroachment over a public street.',
                'The purchaser asks late whether there is a right of way giving him ingress and egress.',
                'A co-owner has sued over demolition of part of an external wall to create an additional building entrance used for 30 years.',
                'An unauthorised swimming pool has been built and there is no real risk of re-entry by Government.',
                'The purchaser repeats an earlier requisition in different words after the deadline.',
                'The defect could have been spotted from the title deeds supplied weeks earlier.',
                'The vendor answers a late requisition without saying anything about his right to refuse.',
              ],
              routes: [
                { when: 'The requisition was raised in time', session: 'LG4', issue: 'raising-requisitions', label: 'Raising requisitions: the time limits' },
                { when: 'The purchaser is said to have accepted the defect rather than merely been late', session: 'LG3', issue: 'purchaser-waiver', label: 'Waiver by the purchaser of his right to object' },
                { when: 'The argument is that the defect was obvious on inspection', session: 'LG3', issue: 'patent-defects', label: 'Encumbrances expressly subject to, and patent defects' },
                { when: 'The question is whether the defect makes the title bad at all', session: 'LG3', issue: 'what-is-good-title', label: 'What constitutes a good title?' },
              ],
            },
            answering: {
              flowchart: {
                title: 'The rule, the exception, and the exception to the exception',
                steps: [
                  {
                    label: 'State the rule',
                    detail: 'The principal rule is that contracts must be abided by and requisitions must be raised within the time agreed — often within 7 days of receipt of the title deeds.',
                    why: 'The time limit is a term of the contract the purchaser signed. Starting anywhere else inverts the analysis.',
                    exam: {
                      write: 'The requisition was raised on [date], outside the [7-day / 14-day] period the agreement allows, and the vendor is prima facie entitled to refuse to answer it.',
                      trap: 'Going straight to the exception. Set out the rule first; the exception has to be argued for.',
                    },
                    points: [
                      'The vendor is prima facie entitled to refuse to answer.',
                      'But refusal does not cure a failure to give good title at completion.',
                    ],
                  },
                  {
                    label: 'Apply the exception: does the requisition go to the root of the vendor\'s title?',
                    detail: 'Notwithstanding a time limitation, requisitions may be raised out of time where the subject matter goes to the root of the vendor\'s title. According to Emmet and Farrand on Title at paragraph 5.064, if the requisition goes to the root of the title — that is, the power of the vendor to sell or to give the purchaser what is intended by the contract he shall have — a condition limiting the time will not preclude the purchaser from making it after the time has expired.',
                    why: 'A time limit cannot convert a vendor who cannot sell into one who can. Perhaps the test means requisitions in respect of matters which would constitute a repudiatory breach.',
                    exam: {
                      write: 'The requisition goes to the root of the vendor\'s title, being directed at [his power to sell / whether the purchaser will get what the contract intended], and may accordingly be raised out of time.',
                      trap: 'Confusing this "root of title" with the ultimate or intermediate root. The slides flag the confusion expressly.',
                    },
                    points: [
                      {
                        text: 'Held TO go to the root:',
                        points: [
                          'Gold Check Investments Ltd v Star Investment Ltd HCMP 592/1992, 8/4/1992: a missing Government lease, the vendor being obliged under s13(1) to deliver it.',
                          'Lucky Dragon Corpn Ltd v Speedy Vantage Ltd [2009] 5 HKLRD 501, CA: demolition of an illegal staircase and conversion of a cockloft into an additional storey, applying the test in Spark Rich v Valrose [2006] 2 HKC 589.',
                          'Yes Profit Investment Ltd v Mainly Tone Co Ltd [2013] 4 HKLRD 570: significant encroachment over Government land, a public street.',
                          'Cheung Fuk Yu Danny v Vu Poi Van DCCJ 2817/2013, 19/3/2015: whether there was a right of way permitting ingress and egress to the property.',
                          'Recall International Ltd v Panten Ltd HCA 1896/2012, 23/1/2017: a co-owner\'s action alleging that part of an external wall, a common part, had been demolished in breach of the deed of mutual covenant to provide an additional exit, used as a common entrance for 30 years; the extent of the common areas defined by the DMC goes to title.',
                        ],
                      },
                      {
                        text: 'Held NOT to go to the root:',
                        points: [
                          'Mexon Holdings Ltd v Silver Bay International Ltd [2000] 2 HKC 1, CFA: unauthorised partitioning.',
                          'Leung Yun On v Popular Investments Ltd HCA 3970/1998: an unauthorised swimming pool, there being no real risk of re-entry by Government.',
                          'Join Union Investment Ltd v China Tree Investment Ltd [2016] 2 HKLRD 901: a minor cockloft; unauthorised building works in retail premises in older districts are commonplace and do not appear significantly to affect market or capital values, so it would be contrary to market reality to treat it as going to the root.',
                        ],
                      },
                      'Big Foundation Development Ltd v Wong Shu Kei HCMP 4536/1997, 16/6/1998, per Recorder Ribeiro SC: where it is only a minor unauthorised building work which can be readily removed and properly reinstated, the defect does not go to the root of the title.',
                    ],
                  },
                  {
                    label: 'Apply the exception to the exception: due diligence',
                    detail: 'The right is lost if the purchaser should, from the documents of title supplied to him or from his own inspection of the documents and premises, have been aware of the need for the particular requisition to be raised within the time agreed: Tread East Ltd v Hillier Development Ltd [1993] 1 HKC 285, CA.',
                    why: 'The exception exists for defects that could not reasonably have been found in time, not as a second bite for a purchaser who did not look.',
                    exam: {
                      write: 'The defect could have been identified from [the title deeds supplied on [date] / the purchaser\'s own inspection], so the requisition should have been raised within time notwithstanding that it goes to the root.',
                      trap: 'Setting the due diligence bar too high. Dty Judge Wooley in Billion Best found it difficult to say a purchaser had not used due diligence where he merely followed the usual Hong Kong procedure of not arranging a structural survey.',
                    },
                    points: [
                      'The question is whether the defect could have been identified earlier using due diligence: Billion Best (Hong Kong) Ltd v Amity Investment Co Ltd [2002] 1 HKLRD 392.',
                      'Purchasers in Hong Kong rarely arrange a structural survey, and following the usual procedure is not a failure of due diligence.',
                    ],
                  },
                  {
                    label: 'Check whether the "new" requisition is new at all',
                    detail: 'A repetition of, or request for clarification or mere elaboration of, a previously raised requisition will not constitute a fresh requisition and will not be out of time if the earlier requisition was raised within the time prescribed: So Ka Hung Sam v Leung Chee Yin [2012] 1 HKLRD 465, DC.',
                    why: 'Requisition and answer are a correspondence, not a single exchange. Treating every follow-up letter as a fresh requisition would make the process unworkable.',
                    exam: {
                      write: 'The letter of [date] is a request for clarification or elaboration of the requisition raised on [date], not a fresh requisition, and is therefore not out of time.',
                      trap: 'Conceding lateness for a follow-up letter that merely presses an answered point.',
                    },
                    points: [
                      'The earlier requisition must itself have been raised within time.',
                    ],
                  },
                  {
                    label: 'Ask whether the vendor has waived his objection by answering',
                    detail: 'The vendor might waive his right to object to a requisition being raised out of time by purporting to answer it.',
                    why: 'The authorities are not uniform, and the later view puts the burden on the purchaser. That is the safer statement of the law and the one Goldmex approved.',
                    exam: {
                      write: 'The vendor answered the late requisition [without prejudice / without qualification]; the burden rests on the purchaser to show that the vendor intended unequivocally to waive his right to object on the ground that it was out of time.',
                      trap: 'Citing Ultra Eternal as settled. Recorder Ribeiro disagreed with it in Big Foundation, and that approach was approved in Goldmex.',
                    },
                    points: [
                      'Ultra Eternal Ltd v Liu Tai Cheong [1997] 1 HKC 258: a purported answer operated as a waiver of the objection; Century Legend Ltd v Chu Chung Shing Investment Co Ltd HCMP 606/1998, 2/8/1999, to the same effect.',
                      'An answer given expressly "without prejudice" will not constitute a waiver: Goldmex Ltd v Edward Wong Finance Co Ltd [2006] 2 HKLRD 795.',
                      'Big Foundation Development Ltd v Wong Shu Kei HCMP 4536/1997, 16/6/1998: giving answers, even not without prejudice, does not automatically constitute a waiver; the burden is on the purchaser. Approved in Goldmex.',
                      'The practical advice is for the vendor to answer without prejudice to his objection, since he must give good title at completion in any event.',
                    ],
                  },
                  {
                    label: 'Remember the vendor is not home yet',
                    detail: 'A purchaser may still reject the vendor\'s title for failure to give good title at completion where he failed to raise a requisition at all, or raised one out of time which the vendor was entitled to refuse to answer.',
                    why: 'Profit World is the case that makes this whole issue type less decisive than it looks: winning the timing argument does not win the transaction.',
                    exam: {
                      write: 'Although the requisition was out of time and could have been raised earlier with due diligence, the vendor\'s obligations to show and to give good title are separate and independent; the vendor has breached the latter and the purchaser may rescind: Profit World Trading Ltd v Ho So Yung [2011] 2 HKC 473, CA.',
                      trap: 'Ending the answer once lateness is established. Profit World is exactly that fact pattern and the purchaser still won.',
                    },
                    points: [
                      'In Profit World the requisition went to the root but should have been raised in time with due diligence; the purchaser nevertheless succeeded on the duty to give title.',
                      'Requisitions provide the vendor with the opportunity to extricate himself by returning the deposit if defects emerge that cannot be cleared in time.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                '"Root of the vendor\'s title" here has nothing to do with the ultimate or intermediate root of title. The slides flag the confusion expressly.',
                'The unauthorised building works cases split on scale and removability: a minor, readily removable cockloft does not go to the root; a converted storey or a demolished staircase does.',
                'Join Union reasons from market reality — that such works are commonplace in older retail districts and do not significantly affect value.',
                'Recall International shows a DMC dispute going to the root, because the extent of the common areas defined by the DMC goes to title.',
              ],
            },
            skills: {
              bullets: [
                'Set out the rule, the exception and the exception to the exception in that order. Each has its own authority and its own facts.',
                'For a vendor, answer a late requisition expressly without prejudice to the objection — it costs nothing and preserves the point.',
                'Do not stop at lateness. Address the duty to give good title at completion separately.',
              ],
            },
            skeleton: {
              bullets: [
                'Date the requisition against the contractual limit.',
                'Ask whether the subject matter goes to the root of the vendor\'s title.',
                'Match the facts to the decided cases on either side of the line.',
                'Ask whether the purchaser could have raised it in time with due diligence.',
                'Check whether it is a fresh requisition or an elaboration.',
                'Consider whether the vendor waived the objection by answering.',
                'Deal separately with the duty to give good title at completion.',
              ],
            },
            mistakes: {
              bullets: [
                'Confusing the root of the vendor\'s title with the root of title in the s13 sense.',
                'Treating all unauthorised building works the same way.',
                'Ending the answer once lateness is established.',
                'Citing Ultra Eternal as though Big Foundation and Goldmex had not qualified it.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'If the requisition goes to the root of the title, that is the power of the vendor to sell or to give to the purchaser what is intended by the contract he shall have, a condition limiting the time will not preclude the purchaser from making it after the time has expired.', cite: 'Emmet and Farrand on Title at para 5.064, as reproduced in the LG4 notes' },
              ],
              table: {
                headers: ['Point', 'Authority', 'What it establishes'],
                rows: [
                  ['The rule', 'Lecture note', 'Requisitions must be raised within the time agreed'],
                  ['The exception', 'Emmet and Farrand on Title, para 5.064', 'A requisition going to the root of the vendor\'s title may be raised out of time'],
                  ['Goes to the root', 'Gold Check Investments Ltd v Star Investment Ltd HCMP 592/1992, 8/4/1992', 'Missing Government lease'],
                  ['Goes to the root', 'Lucky Dragon Corpn Ltd v Speedy Vantage Ltd [2009] 5 HKLRD 501, CA; Spark Rich v Valrose [2006] 2 HKC 589', 'Demolished illegal staircase and cockloft converted into an additional storey'],
                  ['Goes to the root', 'Yes Profit Investment Ltd v Mainly Tone Co Ltd [2013] 4 HKLRD 570', 'Significant encroachment over a public street'],
                  ['Goes to the root', 'Cheung Fuk Yu Danny v Vu Poi Van DCCJ 2817/2013, 19/3/2015', 'Whether there was a right of way permitting ingress and egress'],
                  ['Goes to the root', 'Recall International Ltd v Panten Ltd HCA 1896/2012, 23/1/2017', 'Extent of the common areas under the DMC; external wall demolished for an additional exit used for 30 years'],
                  ['Does not', 'Mexon Holdings Ltd v Silver Bay International Ltd [2000] 2 HKC 1, CFA', 'Unauthorised partitioning'],
                  ['Does not', 'Leung Yun On v Popular Investments Ltd HCA 3970/1998', 'Unauthorised swimming pool; no real risk of re-entry'],
                  ['Does not', 'Join Union Investment Ltd v China Tree Investment Ltd [2016] 2 HKLRD 901; Big Foundation Development Ltd v Wong Shu Kei HCMP 4536/1997, 16/6/1998', 'Minor cockloft readily removable; contrary to market reality to treat it as going to the root'],
                  ['Due diligence', 'Tread East Ltd v Hillier Development Ltd [1993] 1 HKC 285, CA; Billion Best (Hong Kong) Ltd v Amity Investment Co Ltd [2002] 1 HKLRD 392', 'The right is lost if the purchaser should have been aware of the need in time; usual Hong Kong practice sets the standard'],
                  ['Not a fresh requisition', 'So Ka Hung Sam v Leung Chee Yin [2012] 1 HKLRD 465, DC', 'Repetition, clarification or elaboration of an in-time requisition'],
                  ['Waiver by answering', 'Ultra Eternal Ltd v Liu Tai Cheong [1997] 1 HKC 258; Century Legend Ltd v Chu Chung Shing Investment Co Ltd HCMP 606/1998, 2/8/1999', 'A purported answer operated as a waiver of the objection'],
                  ['Qualified', 'Big Foundation Development Ltd v Wong Shu Kei HCMP 4536/1997, 16/6/1998; Goldmex Ltd v Edward Wong Finance Co Ltd [2006] 2 HKLRD 795', 'No automatic waiver; the burden is on the purchaser; an answer without prejudice is not a waiver'],
                  ['Still must give title', 'Profit World Trading Ltd v Ho So Yung [2011] 2 HKC 473, CA', 'The duties to show and give title are separate; the purchaser may rescind at completion regardless'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG4', issue: 'raising-requisitions', label: 'Raising requisitions: the time limits' },
              { session: 'LG4', issue: 'answering-requisitions', label: 'Answering requisitions with candour' },
              { session: 'LG3', issue: 'what-is-good-title', label: 'What constitutes a good title?' },
              { session: 'LG3', issue: 'purchaser-waiver', label: 'Waiver by the purchaser of his right to object' },
              { session: 'LG4', issue: 'intermediate-root', label: 'The intermediate root of title' },
            ],
          },
          {
            id: 'subject-matter-of-requisitions',
            title: 'The subject matter of requisitions',
            summary: 'Matters of title, specific and precisely formulated. Not speculative, not fishing, and not about the state of the building.',
            triggers: {
              bullets: [
                'The purchaser asks whether the vendor knows of anything which might adversely affect his title.',
                'The purchaser asks whether there have been any breaches of the height restriction applicable to the building.',
                'The purchaser asks the vendor to advise whether there are any unauthorised or illegal structures or alterations in the property.',
                'The requisition complains of a leaking roof and defective electrics.',
                'The requisition is framed in general terms without identifying any specific defect.',
                'The requisition identifies the defect but does not suggest how it should be remedied.',
                'The vendor refuses to answer on the ground that the requisition is frivolous.',
                'The purchaser raises a long list of questions hoping one will produce something.',
                'The requisition relates to dry rot rather than to anything on the title.',
              ],
              routes: [
                { when: 'The question is when the requisition may be raised', session: 'LG4', issue: 'raising-requisitions', label: 'Raising requisitions: the time limits' },
                { when: 'The question is the quality of the vendor\'s answer', session: 'LG4', issue: 'answering-requisitions', label: 'Answering requisitions with candour' },
                { when: 'The complaint is really that the title is defective', session: 'LG3', issue: 'encumbered-or-defeasible', label: 'Encumbered and defeasible titles' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Testing a requisition\'s subject matter',
                steps: [
                  {
                    label: 'Confirm it is about title',
                    detail: 'Requisitions must relate to matters of title. Requisitions relating to the condition of the property agreed to be sold — a leaking roof, dry rot, defective electrics — should not be raised, as those are not matters of title.',
                    why: 'The vendor warrants his title, not the state of the building. The purchaser buys the physical condition as he finds it, which is what an "as is" clause restates.',
                    exam: {
                      write: 'The requisition relates to [the condition of the property], which is not a matter of title, and need not be answered.',
                      trap: 'Missing the overlap. Unauthorised building works ARE a title matter, because of the risk of enforcement; a leaking roof is not.',
                    },
                    points: [
                      'Condition of the property: not a matter of title.',
                      'Unauthorised building works are a title matter, because of the defeasibility risk.',
                    ],
                  },
                  {
                    label: 'Require specificity, not generality',
                    detail: 'Requisitions must be specific, not general: it would not be permissible to raise a requisition saying "Does the vendor know of anything which might adversely affect the title of the purchaser?"',
                    why: 'A general question shifts the whole investigation onto the vendor. The purchaser is expected to investigate the title himself and then ask about what he found.',
                    exam: {
                      write: 'The requisition is framed generally and does not identify any specific defect, and is accordingly not one the vendor need answer.',
                      trap: 'Forgetting that the vendor must still give good title at completion. A general requisition being unanswerable does not make the title good.',
                    },
                    points: [
                      'A general requisition is not permissible.',
                      'Requisitions must be precisely formulated: Chan Chik-sum v Great Pearl Industries Ltd [1997] 1 HKC 27, CA.',
                      'Ideally a requisition should identify the defect and suggest how it should be remedied.',
                    ],
                  },
                  {
                    label: 'Rule out the speculative or fishing requisition',
                    detail: 'Nor should requisitions be speculative.',
                    why: 'Fishing shifts the burden of the purchaser\'s own inquiry onto the vendor, and the willing-purchaser standard is against it: the parties are not there to trick each other.',
                    exam: {
                      write: 'The requisition asking whether there are any unauthorised or illegal structures in the property is speculative and fishing, and requires no answer: Continental Zone Ltd v More Glory International Ltd HCMP 446/2012, 18/4/2013.',
                      trap: 'Treating a specific question about a known structure as fishing. The vice is asking whether anything exists, not asking about something identified.',
                    },
                    points: [
                      'Goldmex Ltd v Edward Wong Finance Co Ltd [2006] 2 HKLRD 795: a requisition asking whether there had been any breaches of the height restriction applicable to the building was a fishing requisition and, being speculative, required no answer.',
                      'Continental Zone Ltd v More Glory International Ltd HCMP 446/2012, 18/4/2013: "Please take instructions from your client and advise us whether there is/are any unauthorised or illegal structures or alterations of and in the property" was speculative.',
                    ],
                  },
                  {
                    label: 'Note what the vendor need not answer at all',
                    detail: 'There is no duty to answer requisitions which are unnecessary, frivolous or vexatious: Queen Energy Ltd v Chan Shu Keung [2000] 3 HKLRD 152.',
                    why: 'The duty is to answer requisitions REASONABLY raised. Unreasonable ones fall outside the duty altogether rather than being answered badly.',
                    exam: {
                      write: 'The requisition being [unnecessary / frivolous / vexatious], the vendor is under no duty to answer it: Queen Energy Ltd v Chan Shu Keung [2000] 3 HKLRD 152.',
                      trap: 'Using this as a general excuse. A vendor who wrongly characterises a proper requisition as frivolous has failed to show title.',
                    },
                    points: [
                      'Unnecessary, frivolous or vexatious requisitions need not be answered.',
                      'The duty is to answer requisitions reasonably raised.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'The best requisition identifies the defect AND suggests the remedy — that is the standard Chan Chik-sum sets and it is also good practice.',
                'Goldmex does a great deal of work in this topic: fishing requisitions, reasonable time, and waiver by answering are all in it.',
                'The line between condition and title is not always obvious: unauthorised building works look like condition but are title, because of enforcement risk.',
                'A vendor who declines to answer takes a risk. If the requisition was proper, he has failed to show title.',
              ],
            },
            skeleton: {
              bullets: [
                'Classify the subject matter: title or condition?',
                'Test the requisition for specificity.',
                'Test it for speculation or fishing.',
                'Ask whether it is unnecessary, frivolous or vexatious.',
                'If proper, say what an adequate answer would look like.',
              ],
            },
            mistakes: {
              bullets: [
                'Requisitioning the physical state of the property.',
                'Asking an open question about anything that might affect title.',
                'Treating a specific question about a known structure as fishing.',
                'Refusing to answer a proper requisition on the ground that it is vexatious.',
              ],
            },
            authorities: {
              table: {
                headers: ['Point', 'Authority', 'What it establishes'],
                rows: [
                  ['Matters of title only', 'Lecture note', 'Condition of the property — leaking roof, dry rot, defective electrics — is not a matter of title'],
                  ['Specific not general', 'Lecture note', '"Does the vendor know of anything which might adversely affect the title?" is impermissible'],
                  ['Precisely formulated', 'Chan Chik-sum v Great Pearl Industries Ltd [1997] 1 HKC 27, CA', 'Ideally identify the defect and suggest how it should be remedied'],
                  ['Fishing', 'Goldmex Ltd v Edward Wong Finance Co Ltd [2006] 2 HKLRD 795', 'A requisition as to breaches of the height restriction was speculative and required no answer'],
                  ['Speculative', 'Continental Zone Ltd v More Glory International Ltd HCMP 446/2012, 18/4/2013', 'Asking whether there are any unauthorised or illegal structures required no answer'],
                  ['No duty at all', 'Queen Energy Ltd v Chan Shu Keung [2000] 3 HKLRD 152', 'No duty to answer unnecessary, frivolous or vexatious requisitions'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG4', issue: 'answering-requisitions', label: 'Answering requisitions with candour' },
              { session: 'LG4', issue: 'raising-requisitions', label: 'Raising requisitions: the time limits' },
              { session: 'LG4', issue: 'investigating-title', label: 'Investigating title: what the purchaser\'s solicitor must do' },
            ],
          },
          {
            id: 'answering-requisitions',
            title: 'Answering requisitions with candour',
            summary: 'Adequately, with candour, in time, and with the facts set out. A bald assertion is a failure to show title even if the title is good.',
            triggers: {
              bullets: [
                'The occupation permit shows seven flats and there are nine on the floor.',
                'The vendor began responding four days before completion and sent an authorised person\'s certificate two days before it.',
                'The vendor says a possible invalidity in the execution of a deed of mutual covenant is not a defect because the deed is over 20 years old.',
                'The vendor replies that he has removed the unauthorised structure but produces no evidence of removal.',
                'The vendor did not check the Conditions of Grant before answering a requisition about the number of storeys.',
                'The vendor suggests that the point be resolved by a vendor and purchaser summons.',
                'The vendor undertakes to remedy the defect after completion.',
                'A certificate the agreement required was provided at 6.07 pm on the completion date.',
                'The purchaser wrote "noted" in response to the vendor\'s answer.',
                'The purchaser extended time for answering by enclosing the draft assignment subject to compliance by completion.',
              ],
              routes: [
                { when: 'The question is whether the requisition was properly raised in the first place', session: 'LG4', issue: 'subject-matter-of-requisitions', label: 'The subject matter of requisitions' },
                { when: 'The requisition was raised outside the contractual limit', session: 'LG4', issue: 'requisitions-out-of-time', label: 'Raising requisitions out of time' },
                { when: 'The defect is one the vendor can clear himself before completion', session: 'LG4', issue: 'mere-conveyance', label: 'Matters of mere conveyance' },
                { when: 'The question is whether the title is good at all', session: 'LG3', issue: 'what-is-good-title', label: 'What constitutes a good title?' },
              ],
            },
            answering: {
              flowchart: {
                title: 'Answering a requisition properly',
                steps: [
                  {
                    label: 'State the standard: adequately and with candour',
                    detail: 'Requisitions must be answered adequately and with candour: Active Keen Industries Ltd v Fok Chi Keong [1994] 1 HKLR 396, CA, per Litton JA. Failure to answer adequately entitles the purchaser to rescind, and it is no excuse that the vendor actually had a good title: Kok Chong Ho v Double Value Developments Ltd [1993] 2 HKLR 423, CA.',
                    why: 'The contractual duty to answer properly is not an onerous one: all that is required is candour and common sense. The purchaser is not an adversary.',
                    exam: {
                      write: 'Requisitions must be answered adequately and with candour: Active Keen Industries Ltd v Fok Chi Keong [1994] 1 HKLR 396, CA; it is no excuse that the vendor in fact had a good title.',
                      trap: 'Treating the standard as demanding. The Court of Appeal described the duty as not onerous — candour and common sense.',
                    },
                    points: [
                      'The vendor\'s duty is to bring forward facts and circumstances known to him which might be material to the title.',
                      'In Active Keen the vendor began responding four days before completion and sent an authorised person\'s certificate two days before it, which merely said the unit was self-contained and the walls were not illegal structures.',
                      'The Court of Appeal held there was good title because there was no real risk of enforcement, a demolition order not being lawfully available under s24(1) of the Buildings Ordinance — but the vendor had not SHOWN good title.',
                    ],
                  },
                  {
                    label: 'Set out the facts, not a bald proposition',
                    detail: 'In Polyson Jewellery Co Ltd v Liu Song Carlos [2002] 2 HKC 183, CA, the vendor met a requisition about the possible invalidity of the execution of a deed of mutual covenant by asserting that this was not a defect since the deed had been in existence for more than 20 years.',
                    why: 'Rogers V-P\'s point is that the no-real-risk conclusion depends on all the surrounding circumstances, so the key points have to be in the correspondence. A conclusion asserted without its premises is not an answer.',
                    exam: {
                      write: 'It is not sufficient simply to assert a bald proposition; all the surrounding circumstances leading to the conclusion that there is no realistic possibility of successful litigation must be taken into consideration, and the key points at least referred to in the correspondence.',
                      trap: 'Relying on the passage of time alone. In Polyson a 20-year gap, on its own, was not sufficient.',
                    },
                    points: [
                      'One relevant factor in Polyson would have been whether the form of execution of the deed of mutual covenant had caused difficulties in the past.',
                      'The approach follows MEPC Ltd v Christian-Edwards [1981] AC 205, HL, per Lord Russell.',
                    ],
                  },
                  {
                    label: 'Do the research before answering',
                    detail: 'In order to reply adequately, the vendor must carry out thorough research by checking the title deeds.',
                    why: 'An answer given without checking is an assertion about something the vendor has not looked at. Lai Ke Bin is the case where the check would have supplied the complete answer.',
                    exam: {
                      write: 'The vendor failed to check the Conditions of Grant; had he done so he would have discovered that the ground floor car park was excluded from calculating the permitted number of storeys, and he has not responded adequately to the requisition.',
                      trap: 'Answering a requisition about removal without evidence. Where the vendor replies that he has removed the structure, he should provide evidence that it has been properly removed: Cashew Holdings Ltd v Pacific Success Enterprise Ltd [2004] 2 HKC 594.',
                    },
                    points: [
                      'Lai Ke Bin v Capital Project Development Ltd [2009] 1 HKC 93, [2009] 2 HKLRD 49: requisition as to the wrong number of storeys; the vendor had not checked the Conditions of Grant.',
                      'Cashew Holdings Ltd v Pacific Success Enterprise Ltd [2004] 2 HKC 594: evidence of proper removal must be provided.',
                    ],
                  },
                  {
                    label: 'Rule out the two answers that are not answers',
                    detail: 'A vendor who responds merely by suggesting that the matter should be resolved by an application to the court by way of vendor and purchaser summons might be held to have answered inadequately: Yeung Yun Choi v Lam Pa Kin HCMP 554/2016, 23/6/2016. And an undertaking to remedy the defect after completion will not usually suffice.',
                    why: 'Both push the problem past the moment the purchaser has to decide whether to pay. Neither tells him whether the title is good now.',
                    exam: {
                      write: 'Suggesting a vendor and purchaser summons is not an adequate answer, nor, absent express agreement, is an undertaking to remedy the defect after completion: Liu Tak Kin v Chan Yiu Kai [1998] 4 HKC 362.',
                      trap: 'Overlooking the Hu Mei Yu exception, and the security point in it: the vendor could properly be asked to give security to fortify his undertaking.',
                    },
                    points: [
                      'Hu Mei Yu Anastasia v King Best Enterprise Ltd HCA 9317/1998, 10/7/2000: a building order under s27A of the Buildings Ordinance requiring investigation and repair of a slope was an encumbrance, but the vendor\'s undertaking to pay his share should have satisfied a purchaser with robust common sense, subject to security to fortify the undertaking.',
                      'The parties may agree that completion be delayed until a vendor and purchaser summons has been concluded: Chan Siu Keung v Yu Tai Wai [2003] 3 HKLRD 237.',
                    ],
                  },
                  {
                    label: 'Answer in time, and leave the purchaser time to consider',
                    detail: 'If there is an express provision as to the time for answering, it must be complied with. If not, requisitions must be answered within a reasonable time after being received and sufficiently long in advance of the completion date to allow the purchaser to consider them.',
                    why: 'An answer that arrives too late to be considered is worth little more than no answer. The purchaser\'s solicitor should not be required to make a snap decision.',
                    exam: {
                      write: 'The [certificate / answer] was provided only [at 6.07 pm on the completion date], which did not allow the purchaser\'s solicitors a reasonable time to consider it before proceeding to completion, and was a repudiatory breach.',
                      trap: 'Confusing the midnight rule with the reasonable-time rule. In Guo Jianjun the midnight rule meant the certificate was in time, but it was still not provided a reasonable time before completion.',
                    },
                    points: [
                      'Tang Wing Lam David v Chung Chi Keung Frederick [1999] 3 HKC 553: where answers are given very close to the completion date, the date should be extended by common agreement; applied in Smart Max Enterprise Ltd v Speedy Way Ltd [2011] 4 HKC 29, [2011] 3 HKLRD 675, CA, and Summit Link Ltd v Sunlink Group (HK) Co Ltd [2000] 2 HKLRD 724, CA.',
                      {
                        text: 'Guo Jianjun v Dragon Fame Investment Ltd CACV 131/2014, 23/9/2015, is the worked example.',
                        points: [
                          'Four office units; the vendor had expressly agreed to provide a certificate from an authorised person proving the legality of re-partitioning.',
                          'The certificate was provided only at 6.07 pm on the date of completion; the midnight rule applied so it was in time.',
                          'The purchaser\'s solicitor nevertheless needed to check whether it was a proper certificate having the required effect, and should not have been required to make a snap decision.',
                          'The principle applied even though the certificate was not a document of title.',
                        ],
                      },
                    ],
                  },
                  {
                    label: 'Watch the purchaser\'s response, and what it does or does not waive',
                    detail: 'Where the agreement grants the purchaser a specific time to respond to the vendor\'s answer, he must be allowed the time agreed: Smart Max Enterprise Ltd v Speedy Way Ltd [2011] 4 HKC 29, [2011] 3 HKLRD 675, CA.',
                    why: 'The correspondence runs both ways, and the purchaser can lose rights by how he replies — or, as Donpower shows, can fail to lose them despite an ambiguous word.',
                    exam: {
                      write: 'The purchaser\'s [enclosure of the draft assignment subject to satisfactory compliance by completion] granted an extension of time for answering the requisition until the completion date.',
                      trap: 'Reading "noted" as a waiver. In Donpower Trading Ltd v Apexcom [2010] 1 HKLRD 915 the Court of Appeal held it was no more than an acknowledgment.',
                    },
                    points: [
                      'In Smart Max no time had been agreed for answering, so a reasonable time applied; but the purchaser had written enclosing the draft assignment for approval subject to satisfactory compliance with the requisition by completion, and had thereby granted an extension until the completion date.',
                      'Donpower Trading Ltd v Apexcom [2010] 1 HKLRD 915: the purchaser responded "noted"; held at first instance to be a waiver, reversed on appeal — the purchaser had consistently insisted on the document and there was no abandonment.',
                    ],
                  },
                ],
              },
            },
            lookOut: {
              bullets: [
                'Active Keen is the case where the vendor HAD good title and still lost, because he had not shown it. That is the whole topic in one decision.',
                'Litton JA\'s formulation is worth remembering: candour and common sense, and the purchaser is not an adversary.',
                'The midnight rule can make an answer technically in time and still leave it too late to be a proper answer.',
                'A vendor\'s answer given "without prejudice" preserves an objection to lateness without becoming a waiver: Goldmex.',
              ],
            },
            skills: {
              bullets: [
                'Answer with the facts, not the conclusion: name the provision, the dates and the documents checked.',
                'Where the answer is that the structure has been removed, attach the evidence of removal rather than asserting it.',
                'Send answers early enough that the purchaser\'s solicitor can consider them without a snap decision — and if that is impossible, propose an extension.',
              ],
            },
            skeleton: {
              bullets: [
                'Confirm the requisition was properly raised and in time.',
                'Research the title deeds before answering.',
                'Set out the facts and circumstances supporting the conclusion, not the conclusion alone.',
                'Avoid a vendor and purchaser summons or a post-completion undertaking as the answer.',
                'Answer within the express or a reasonable time, leaving time to consider.',
                'Conclude on whether title has been shown, and on the remedy.',
              ],
            },
            mistakes: {
              bullets: [
                'Asserting that the risk is illusory without giving the surrounding circumstances.',
                'Answering without checking the Conditions of Grant or the title deeds.',
                'Claiming removal of a structure without evidence.',
                'Providing the answer so late that the purchaser must make a snap decision.',
              ],
            },
            authorities: {
              statutes: [
                { text: 'The contractual duty to answer requisitions properly is not an onerous one. All that is required of the vendor is candour and commonsense. The purchaser is not an adversary.', cite: 'Active Keen Industries Ltd v Fok Chi Keong [1994] 1 HKLR 396, CA, as reproduced in the LG4 slides' },
              ],
              table: {
                headers: ['Point', 'Authority', 'What it establishes'],
                rows: [
                  ['The standard', 'Active Keen Industries Ltd v Fok Chi Keong [1994] 1 HKLR 396, CA', 'Adequately and with candour, per Litton JA; the vendor had good title but had not shown it'],
                  ['No excuse', 'Kok Chong Ho v Double Value Developments Ltd [1993] 2 HKLR 423, CA', 'It is no excuse that the vendor actually had a good title'],
                  ['Facts, not assertion', 'Polyson Jewellery Co Ltd v Liu Song Carlos [2002] 2 HKC 183, CA', 'All the surrounding circumstances must be taken into account and the key points referred to in the correspondence'],
                  ['Research required', 'Lai Ke Bin v Capital Project Development Ltd [2009] 1 HKC 93, [2009] 2 HKLRD 49', 'Vendor had not checked the Conditions of Grant; inadequate answer'],
                  ['Evidence of removal', 'Cashew Holdings Ltd v Pacific Success Enterprise Ltd [2004] 2 HKC 594', 'Evidence must be provided that the structure has been properly removed'],
                  ['Not a summons', 'Yeung Yun Choi v Lam Pa Kin HCMP 554/2016, 23/6/2016', 'Suggesting a vendor and purchaser summons may be an inadequate answer'],
                  ['Not an undertaking', 'Liu Tak Kin v Chan Yiu Kai [1998] 4 HKC 362; Hu Mei Yu Anastasia v King Best Enterprise Ltd HCA 9317/1998, 10/7/2000', 'Generally insufficient, save on the s27A facts of Hu Mei Yu, with security to fortify'],
                  ['No duty to answer', 'Queen Energy Ltd v Chan Shu Keung [2000] 3 HKLRD 152', 'Unnecessary, frivolous or vexatious requisitions'],
                  ['Time to answer', 'Tang Wing Lam David v Chung Chi Keung Frederick [1999] 3 HKC 553; Smart Max Enterprise Ltd v Speedy Way Ltd [2011] 3 HKLRD 675, CA; Summit Link Ltd v Sunlink Group (HK) Co Ltd [2000] 2 HKLRD 724, CA', 'A reasonable time, sufficiently in advance for the purchaser to consider'],
                  ['Too late to consider', 'Guo Jianjun v Dragon Fame Investment Ltd CACV 131/2014, 23/9/2015', 'Certificate at 6.07 pm on the completion date; in time under the midnight rule but not a reasonable time before completion'],
                  ['Purchaser\'s response', 'Smart Max Enterprise Ltd v Speedy Way Ltd [2011] 3 HKLRD 675, CA; Donpower Trading Ltd v Apexcom [2010] 1 HKLRD 915', 'An extension may be granted by the purchaser\'s conduct; "noted" is an acknowledgment, not a waiver'],
                  ['Delay by agreement', 'Chan Siu Keung v Yu Tai Wai [2003] 3 HKLRD 237', 'The parties may agree to delay completion until a vendor and purchaser summons has concluded'],
                ],
              },
            },
            crossRefs: [
              { session: 'LG4', issue: 'subject-matter-of-requisitions', label: 'The subject matter of requisitions' },
              { session: 'LG4', issue: 'requisitions-out-of-time', label: 'Raising requisitions out of time' },
              { session: 'LG3', issue: 'what-is-good-title', label: 'What constitutes a good title?' },
              { session: 'LG4', issue: 'mere-conveyance', label: 'Matters of mere conveyance' },
              { session: 'LG3', issue: 'documents-of-title', label: 'Which documents are documents of title?' },
            ],
          },
        ],
      },
    },
    // SG1-SG6. The small group materials had not been distributed when the
    // coordinators' memorandum was written, so these entries deliberately
    // carry only what that memorandum actually states -- the standing
    // written-submission requirement common to all six sessions, and each
    // session's own deadline. Topics, fact patterns and notes go in as and
    // when the real materials land; nothing here is guessed at.
    SG1: {
      kind: 'SG',
      mode: 'Small group — written submission e-mailed to your tutor before class',
      skills: 'Interpreting and analysing case law, statutes, transaction documents and fact scenarios; researching and applying the relevant legal principles to the facts and documents',
      activities: [
        { title: 'Write on the legal and/or ethical issues involved in the SG1 fact scenario, and e-mail it to your tutor', deadlineId: 'PCLL8030-hw-sg1' },
      ],
    },
    SG2: {
      kind: 'SG',
      mode: 'Small group — written submission e-mailed to your tutor before class',
      skills: 'Interpreting and analysing case law, statutes, transaction documents and fact scenarios; researching and applying the relevant legal principles to the facts and documents',
      activities: [
        { title: 'Write on the legal and/or ethical issues involved in the SG2 fact scenario, and e-mail it to your tutor', deadlineId: 'PCLL8030-hw-sg2' },
      ],
    },
    SG3: {
      kind: 'SG',
      mode: 'Small group — written submission e-mailed to your tutor before class',
      skills: 'Interpreting and analysing case law, statutes, transaction documents and fact scenarios; researching and applying the relevant legal principles to the facts and documents',
      activities: [
        { title: 'Write on the legal and/or ethical issues involved in the SG3 fact scenario, and e-mail it to your tutor', deadlineId: 'PCLL8030-hw-sg3' },
      ],
    },
    SG4: {
      kind: 'SG',
      mode: 'Small group — written submission e-mailed to your tutor before class',
      skills: 'Interpreting and analysing case law, statutes, transaction documents and fact scenarios; researching and applying the relevant legal principles to the facts and documents',
      activities: [
        { title: 'Write on the legal and/or ethical issues involved in the SG4 fact scenario, and e-mail it to your tutor', deadlineId: 'PCLL8030-hw-sg4' },
      ],
    },
    SG5: {
      kind: 'SG',
      mode: 'Small group — written submission e-mailed to your tutor before class',
      skills: 'Interpreting and analysing case law, statutes, transaction documents and fact scenarios; researching and applying the relevant legal principles to the facts and documents',
      activities: [
        { title: 'Write on the legal and/or ethical issues involved in the SG5 fact scenario, and e-mail it to your tutor', deadlineId: 'PCLL8030-hw-sg5' },
      ],
    },
    SG6: {
      kind: 'SG',
      mode: 'Small group — written submission e-mailed to your tutor before class',
      skills: 'Interpreting and analysing case law, statutes, transaction documents and fact scenarios; researching and applying the relevant legal principles to the facts and documents',
      activities: [
        { title: 'Write on the legal and/or ethical issues involved in the SG6 fact scenario, and e-mail it to your tutor', deadlineId: 'PCLL8030-hw-sg6' },
      ],
    },
  },
};
