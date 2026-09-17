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
              ],
            },
            answering: {
              flowchart: {
                title: 'Working out how a lot has been divided',
                steps: [
                  {
                    label: 'First ask whether the division is physical or notional',
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
                    why: 'This is the most heavily litigated formula and the cases are strikingly restrictive — the courts have repeatedly held that a use which is residential in a loose sense is nonetheless commercial in character, and that is usually the answer a problem question is looking for.',
                    exam: {
                      write: 'Use as a [guesthouse / boarding house / home for the elderly] is commercial rather than residential in character and therefore breaches a covenant restricting user to [private residential] use.',
                      trap: 'Assuming that because people sleep there it is residential. Lau Yan Kin and the Aberdeen Shopping Plaza line say otherwise.',
                    },
                    points: [
                      'Wong Bei-nei v Attorney General [1973] HKLR 582: a covenant permitting only detached or semi-detached residential premises of a European type, to be used as a private dwelling house, prohibited the erection of a block of flats.',
                      'Fully Profit (Asia) Ltd v Secretary for Justice (2013) 6 HKCFAR 351: a covenant requiring no more than one house on the lot prohibited a multi-storey building.',
                      'Incorporated Owners of Hamilton Mansion v Yu Keim Chiu [1998] 1 HKC 112: a DMC limited to private residential use was breached by use as a photographer\'s studio and as a guesthouse.',
                      'Lau Yan Kin v Perfection (Global) Ltd LDPD 2697/2014, 4 February 2016: use of residential premises as a guesthouse was commercial, not residential.',
                      'Aberdeen Shopping Plaza Ltd v Incorporated Owners of Aberdeen Na King Mansions HCA 9319/2000, 13/5/2003, and Winland Finance Ltd v Profit Fine Ltd [2006] 1 HKC 582: a prohibition on use as a boarding house caught a home for elderly persons and a nursing home.',
                      'Caradon District Council v Paton (2000) Times May 17, CA: occupation by paying tenants on short-term lets breached a covenant not to use the property otherwise than as a private dwelling house.',
                      'Dobbs v Linford [1952] 2 All ER 827: a covenant not to use the premises for any purpose other than a private dwelling house was breached by sub-letting the top floor.',
                      'Pandix Ltd v Hui Kam Kwei LDCS 400/2009, 14/10/2010: dwelling, residential and domestic mean the same, and commercial activities are not permitted.',
                    ],
                  },
                  {
                    label: 'If the covenant is industrial, ask what the activity actually is',
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
                    why: 'Agricultural and religious-purpose covenants have produced a distinct line of recent litigation, almost all of it about storing ashes — which is both commercially important and a reliable exam fact pattern.',
                    exam: {
                      write: 'Use of the land as a columbarium breaches a covenant restricting user to [agricultural / religious] purposes: [Splendid Resources / Regal Shining].',
                      trap: 'Treating Splendid Resources as a Block Government lease case. It concerned a New Grant with agricultural user prescribed, which is why it sits alongside rather than inside the Watford/Melhado material.',
                    },
                    points: [
                      'Splendid Resources Inc v Secretary for Justice [2017] 2 HKLRD 421, [2017] 2 HKC 570: subterranean chambers for storing ashes on Po Toi Island breached a term in a New Grant restricting use to agricultural user.',
                      'Regal Shining Ltd v Secretary for Justice [2016] 3 HKC 291, CA: land permitted to be used for religious purposes; use as a columbarium breached the permitted user, the grant also providing that no grave should be made nor human remains interred or deposited on the lot in earthenware jars or otherwise.',
                      'Radford Portfolio Management Ltd v Secretary for Justice CACV 257/2009: Conditions restricting each owner to one car-parking space; a car-stacking device contravened the restriction.',
                      'Latangan Co Ltd v Chu Yip Sing DCCJ 3373/2008: Conditions specifying parking only for residents\' vehicles; parking a lorry used commercially breached the restriction.',
                    ],
                  },
                  {
                    label: 'Say what follows from the breach',
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
                  ['Car parking', 'Radford Portfolio Management CACV 257/2009; Latangan Co Ltd DCCJ 3373/2008', 'Car-stacking device and commercial lorry each breached'],
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
                    why: 'The elegance of Jumbo Gold is that it does not require the vendor to prove there was no breach. It accepts the breach may be live and asks a different, practical question — which is why it can produce good title on facts where the covenant has plainly been broken.',
                    exam: {
                      write: 'The evidence does not exclude a reasonable possibility of an unwaived breach of condition giving the Government a right of re-entry; the question is therefore whether there is any real risk that it would enforce.',
                      trap: 'Trying to argue the breach away. On these facts you usually cannot, and you do not need to.',
                    },
                    points: [
                      'Jumbo Gold Investment Ltd v Warren Yuen Cheong Leung [2000] 3 HKCFAR 52, CFA: height restricted to 35 feet in a Crown lease and the height was exceeded; the Government had taken no action for some forty years; when the vendor came to sell, the purchaser raised a requisition as to title.',
                      'Held that the vendor had shown good title since there was no real risk of enforcement by the Government.',
                      'The court assumed the right of re-entry existed rather than deciding it did not.',
                    ],
                  },
                  {
                    label: 'Apply the real risk test to the facts you are given',
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
