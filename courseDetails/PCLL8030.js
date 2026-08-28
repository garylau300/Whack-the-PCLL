// Property Transactions (PCLL8030) -- see PCLL8010.js's header for the
// conventions this file follows (courseDetails is split one file per
// course; each just extends the same window.COURSE_DETAILS).
window.COURSE_DETAILS = window.COURSE_DETAILS || {};
window.COURSE_DETAILS.PCLL8030 = {
  name: 'Property Transactions',

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
  },
};
