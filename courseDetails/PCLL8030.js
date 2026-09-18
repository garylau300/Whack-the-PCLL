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
                { when: 'The building is divided into undivided shares and governed by a deed of mutual covenant', session: 'LG2', issue: 'developer-sequence', label: 'The stages from lot to registered deed of mutual covenant' },
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
              { session: 'LG2', issue: 'developer-sequence', label: 'The stages from lot to registered deed of mutual covenant' },
              { session: 'LG2', issue: 'sub-dmc', label: 'Sub-deeds of mutual covenant' },
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
              { session: 'LG2', issue: 'acquiescence', label: 'Acquiescence after Centre Chase' },
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
              { session: 'LG2', issue: 'predecessor-breaches', label: 'Liability for a predecessor in title\'s breach' },
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
                      'Maintaining the common parts, employing a manager and insuring the building: s18.',
                      'Establishing funds and a bank account: s20.',
                      'Preparing the annual budget: Schedule 5.',
                      'Keeping accounts: s27.',
                      'Ordering supplies: s20A.',
                      'Enforcing the terms of the DMC: s22.',
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
