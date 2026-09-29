# Content Entry: Federal Contributory Pension Scheme (FGDC)

Ready to splice into the `articles` array in `src/data/content.ts`. Types match the current `Article`/`ContentSection` definitions in the `pakbenefits-com` Next.js application.

```ts
  {
    slug: "federal-contributory-pension-scheme",
    relatedSlugs: [
      "prime-minister-youth-loan-scheme-2026",
      "ehsaas-interest-free-loan-vs-saving-wallet",
      "bisp-direct-bank-account-transfer-online-registration"
    ],
    title: "Federal Contributory Pension Scheme: FGDC Rules, Contributions & Benefits",
    excerpt: "Pakistan's Federal Contributory Pension Scheme (FGDC) covers federal employees hired after 1 July 2024. The employee contributes 10% and the government 12% (22% total) into an individually invested fund managed by licensed pension fund managers.",
    showExcerpt: true,
    metaTitle: "Federal Contributory Pension Scheme: FGDC Rules & Contributions",
    metaDescription: "How Pakistan's Federal Contributory Pension Scheme (FGDC) works for post-July 2024 federal employees. See the 10% + 12% contribution split, fund managers, and retirement rules.",
    focusKeyword: "federal contributory pension scheme",
    lsiKeywords: [
      "fgdc pension fund scheme rules 2024",
      "contributory pension scheme contribution rate pakistan",
      "federal employees pension july 2024",
      "defined contribution vs defined benefit pension",
      "pension fund managers pakistan secp",
      "25 percent withdrawal retirement pension",
      "24 month average pension formula"
    ],
    entities: [
      "Federal Government Defined Contribution Pension Fund Scheme",
      "Ministry of Finance (Finance Division)",
      "Accountant General Pakistan Revenues (AGPR)",
      "Securities and Exchange Commission of Pakistan (SECP)",
      "Voluntary Pension System",
      "State Bank of Pakistan",
      "International Monetary Fund"
    ],
    primaryCategory: "Other Schemes",
    categorySlugs: [
      "other-schemes"
    ],
    date: "September 30, 2026",
    publishedDate: "September 30, 2026",
    lastChecked: "September 30, 2026",
    readTime: "12 min read",
    image: "/images/federal-contributory-pension-scheme.jpg",
    imageAlt: "Editorial banner for Pakistan's Federal Contributory Pension Scheme (FGDC) 2024 showing the 10% employee and 12% government contribution split",
    author: contributors.muhammadSalman,
    sections: [
      {
        title: "What Is the Federal Contributory Pension Scheme?",
        paragraphs: [
          "Pakistan's Federal Contributory Pension Scheme, formally the Federal Government Defined Contribution (FGDC) Pension Fund Scheme, is the new retirement system for federal civil employees appointed on or after 1 July 2024. The employee contributes 10% of pensionable pay and the government contributes 12% - a combined 22% - into an individually invested fund managed by licensed pension fund managers, replacing the old non-contributory pension.",
          "The final contribution rate of 10% + 12% = 22% supersedes an earlier August 2024 directive that had set the government share at a provisional 20%. Contributions are deducted at source through the AGPR payroll and shown separately on each monthly salary slip together with the government's matching share and the running account balance."
        ],
        bullets: [
          "Scheme name: Federal Government Defined Contribution (FGDC) Pension Fund Scheme, 2024",
          "Legal basis: SRO 1728(I)/2025 dated 27 August 2025 (gazetted 8 September 2025)",
          "Employee contribution: 10% of pensionable pay; government contribution: 12% (22% total)",
          "Applicable from: 1 July 2024 (civilians) and 1 July 2025 (armed forces)",
          "Administrator: Finance Division (Ministry of Finance) with the AGPR"
        ],
        subsections: [
          {
            title: "From Non-Contributory to Defined Contribution: The Shift Explained",
            paragraphs: [
              "The scheme converts Pakistan's federal employee pension from a non-contributory, defined-benefit model into a contributory, defined-contribution model. Under the old arrangement, the state alone funded retirement and promised a fixed pension linked to final pay. Under the new scheme, both the employee and the government pay into an individual retirement account every month, and the eventual benefit depends on the accumulated contributions plus investment returns.",
              "This is the central conceptual change. In a defined-benefit pension, the employer bears the investment risk and the payout is guaranteed by formula. In a defined-contribution pension, the member owns an account balance, and that balance - not a formula - determines the retirement income."
            ]
          },
          {
            title: "Legal Basis: SRO 1728(I)/2025 and the FGDC Rules 2024",
            paragraphs: [
              "The scheme is established by the Federal Government Defined Contribution (FGDC) Pension Fund Scheme Rules, 2024, notified by the Ministry of Finance through SRO 1728(I)/2025 dated 27 August 2025 and gazetted on 8 September 2025. The rules were developed under the Public Finance Management Act 2019 and are regulated within the Voluntary Pension System Rules 2005 and the Non-Banking Finance Companies and Notified Entities Regulations 2008.",
              "The notification was circulated to every federal ministry, division and attached department through an Office Memorandum, and copied to the Auditor General of Pakistan, the Accountant General Pakistan Revenues (AGPR) and the State Bank of Pakistan."
            ]
          }
        ]
      },
      {
        title: "Why Did Pakistan Replace the Old Pension System?",
        paragraphs: [
          "The old pension system had become fiscally unsustainable, and the contributory scheme was introduced as a structural fix recommended by international lenders."
        ],
        subsections: [
          {
            title: "The Rs 1 Trillion Pension Bill Driving Reform",
            paragraphs: [
              "The federal government's pension bill for FY2024-25 was projected at Rs 1.05 trillion, a 29% jump from Rs 821 billion in FY2023-24. Armed forces pension liabilities were expected to reach Rs 742 billion in FY2025-26, up 32% from Rs 563 billion two years earlier.",
              "Because the state carried the entire liability, every new appointment added a future obligation with no matching fund behind it. The contributory scheme closes that gap by pre-funding each employee's retirement through monthly contributions."
            ]
          },
          {
            title: "An IMF and World Bank-Backed Structural Change",
            paragraphs: [
              "The reform was introduced on the recommendation of the International Monetary Fund (IMF) and the World Bank as part of the wider effort to curb Pakistan's fiscal deficit. The government backed the new system with an allocation of Rs 10 billion in the FY2024-25 federal budget and a further Rs 4.3 billion for FY2025-26 to seed and administer the fund.",
              "Like other federal financing initiatives, the goal is a self-sustaining system rather than an open-ended budget line."
            ],
            links: [
              { label: "Prime Minister Youth Loan Scheme 2026", href: "/prime-minister-youth-loan-scheme-2026/" }
            ]
          }
        ]
      },
      {
        title: "Who Is Covered by the Federal Contributory Pension Scheme?",
        paragraphs: [
          "Coverage is determined entirely by appointment date, not by pay scale or department."
        ],
        subsections: [
          {
            title: "Civil Employees Appointed On or After 1 July 2024",
            paragraphs: [
              "The scheme applies to federal civil employees appointed on a regular basis on or after 1 July 2024. This covers all civil servants of the federal government, including civilians paid from Defence Estimates, across ministries, divisions, attached departments and subordinate offices.",
              "The Finance Division's 11 August 2026 guidelines directed every ministry to prepare and verify lists of employees appointed from 1 July 2024 and update their particulars with the AGPR within 15 days. The Controller General of Accounts (CGA) then consolidates these lists by ministry, division, department and Basic Pay Scale (BPS)."
            ]
          },
          {
            title: "Armed Forces Personnel and Civilians Paid from Defence Estimates",
            paragraphs: [
              "For the armed forces, the contributory scheme takes effect for personnel appointed on a regular basis on or after 1 July 2025. At the time of the original notification, armed forces contributions were still under consideration and remained at zero. Civilian staff paid from Defence Estimates are treated with the civilian cohort and come under the 1 July 2024 date."
            ]
          },
          {
            title: "Who Stays on the Old Defined-Benefit Pension?",
            paragraphs: [
              "Every federal employee appointed before 1 July 2024 remains on the defined-benefit pension, but with the reformed calculation rules introduced alongside the new scheme. Their pension does not disappear; it is recalculated under new formulas, including the 24-month average of emoluments."
            ]
          }
        ]
      },
      {
        title: "How Much Do Employees and the Government Contribute?",
        paragraphs: [
          "The contribution structure is the single most important number for any covered employee to know."
        ],
        subsections: [
          {
            title: "The 10% Employee and 12% Government Split (22% Total)",
            paragraphs: [
              "The employee contributes 10% of pensionable pay, and the government contributes 12%, for a combined 22% credited to the employee's individual pension account each month.",
              "This 12% figure corrects an earlier announcement. In August 2024 the government had set its share at a provisional 20%; the final rules notified through SRO 1728(I)/2025 reduced it to 12%. Several older articles still cite the 20% rate, so treat 10% + 12% = 22% as the operative figure as of the final notification."
            ]
          },
          {
            title: "What Counts as Pensionable Pay?",
            paragraphs: [
              "Contributions are calculated on pensionable pay - the pay elements that count toward pension, which centre on basic pay rather than the full take-home package. Allowances and other emoluments are handled according to the notified definition in the rules.",
              "Because both contributions and, for the old scheme, the benefit formula reference pensionable emoluments, the distinction between basic pay and total salary matters: a 10% deduction on basic pay is materially smaller than 10% of gross salary."
            ]
          }
        ]
      },
      {
        title: "How Is the FGDC Pension Fund Managed and Invested?",
        paragraphs: [
          "Monthly contributions are pooled into a dedicated investment fund managed by regulated private fund managers."
        ],
        subsections: [
          {
            title: "Licensed Pension Fund Managers and the Voluntary Pension System",
            paragraphs: [
              "The fund is managed by licensed pension fund managers - Non-Banking Finance Companies (NBFCs) authorised by the Securities and Exchange Commission of Pakistan (SECP). The scheme operates within the Voluntary Pension System (VPS) Rules 2005 and the Non-Banking Finance Companies and Notified Entities Regulations 2008.",
              "On 2 August 2026 the Finance Division published the list of eligible pension fund managers that had executed agreements with the federal government. The government's portion is budgeted annually, and agreements require fund managers to support electronic transfer systems and insurance coverage against death or disability."
            ],
            links: [
              { label: "How interest-free loans and saving wallets differ", href: "/ehsaas-interest-free-loan-vs-saving-wallet/" }
            ]
          },
          {
            title: "AGPR, CGA, and the Contribution Recordkeeping Chain",
            paragraphs: [
              "The AGPR sits at the centre of the administration: it deducts the employee's contribution, records the government's matching share, and remits both to the chosen fund manager. The Controller General of Accounts (CGA) coordinates the consolidated, ministry-wise register of covered employees.",
              "Each employee's salary slip carries the individual contribution, the government contribution and the total accumulated amount, so members can track their account monthly."
            ],
            links: [
              { label: "Registering a bank account for direct government transfers", href: "/bisp-direct-bank-account-transfer-online-registration/" }
            ]
          }
        ]
      },
      {
        title: "What Do You Get at Retirement Under the Contributory Scheme?",
        paragraphs: [
          "There is no fixed-formula pension at the end of a contributory career. The payout is the accumulated account value."
        ],
        subsections: [
          {
            title: "The 25% Withdrawal Rule at Retirement",
            paragraphs: [
              "At retirement, the employee may withdraw up to 25% of the accumulated account balance as a lump sum. The balance available at that point equals every contribution made (employee plus government) plus the investment returns earned over the years.",
              "This is the most important practical difference from the old scheme: the payout is the account value, not a percentage of last salary. A longer career with steady contributions compounds into a larger balance."
            ]
          },
          {
            title: "The 20-Year / Age-80 Minimum Drawdown Period",
            paragraphs: [
              "The remaining balance - the portion not withdrawn as the 25% lump sum - must stay invested. Under the notified rules, the remainder is drawn down over a period of at least 20 years or until the member reaches age 80, whichever comes first, within the Voluntary Pension System framework.",
              "Employees cannot withdraw their contributions before retirement at all. The scheme is designed to convert the accumulated fund into retirement income rather than a single cash-out."
            ]
          }
        ]
      },
      {
        title: "Contributory vs Defined-Benefit Pension: A Side-by-Side Comparison",
        paragraphs: [
          "The table below summarises the practical differences between the two systems side by side."
        ],
        table: {
          caption: "Federal Contributory (FGDC) Scheme vs the Old Defined-Benefit Pension",
          headers: ["Feature", "Federal Contributory (FGDC) Scheme", "Old Defined-Benefit Pension"],
          rows: [
            ["Applies to", "Federal employees hired on/after 1 July 2024 (forces 1 July 2025)", "Federal employees hired before 1 July 2024"],
            ["Who pays", "Employee 10% + government 12% (22% total)", "Government alone (non-contributory)"],
            ["Benefit basis", "Accumulated account value + investment returns", "Formula on qualifying service and pay"],
            ["Calculation base", "Account balance", "24-month average emoluments (post-reform)"],
            ["Investment risk", "Member bears it (returns vary)", "Government bears it"],
            ["Withdrawal", "Up to 25% lump sum; rest drawn over 20 yrs/age 80", "Pension + commutation under rules"],
            ["Guaranteed income", "No fixed guarantee", "Fixed percentage formula"]
          ]
        },
        links: [
          { label: "Understanding PMT poverty score thresholds", href: "/what-counts-as-a-good-pmt-score/" }
        ]
      },
      {
        title: "What Changed for Pre-2024 Employees? The Reformed Old Pension",
        paragraphs: [
          "Employees who joined before the cut-off keep the old pension but under reformed calculation rules."
        ],
        subsections: [
          {
            title: "The 24-Month Average Emoluments Formula",
            paragraphs: [
              "For employees still on the defined-benefit pension, the calculation base shifted from the last drawn pay to the average of the last 24 months of pensionable emoluments. This removes the incentive to engineer a final-year pay spike and lowers the average base for most retirees.",
              "Gross pension is then computed on qualifying service (up to 30 years) as a notified percentage of that average, with commutation and family pension rules applying separately. Annual pension increases are now maintained as separate amounts rather than being compounded into the base pension."
            ]
          },
          {
            title: "The One-Pension Rule and Early-Retirement Reduction",
            paragraphs: [
              "Two further reforms apply to the old-scheme population. First, the one-pension rule: a pensioner may draw only one pension at a time, and where a person qualifies for multiple pensions they must choose the highest. Second, early retirement carries a reduction: voluntary retirement after 25 years of service is possible, but the pension is reduced on a per-year basis to discourage premature exit.",
              "Superannuation remains at age 60. These changes, like the new scheme, were notified through Finance Division office memoranda during 2024-25."
            ]
          }
        ]
      },
      {
        title: "Implementation Timeline: What Has Happened So Far",
        paragraphs: [
          "The scheme moved into its operational phase during 2025-26. The milestones below show it is live, not a proposal."
        ],
        table: {
          caption: "FGDC Pension Fund Scheme Implementation Timeline",
          headers: ["Date", "Milestone"],
          rows: [
            ["August 2024", "Provisional directive sets government contribution at 20% (later superseded)"],
            ["27 August 2025", "SRO 1728(I)/2025 notifies the FGDC Rules 2024"],
            ["8 September 2025", "Rules published in the Gazette of Pakistan"],
            ["4-5 October 2025", "Office Memorandum circulates the notification to all ministries for implementation"],
            ["2 August 2026", "Finance Division publishes the list of eligible pension fund managers"],
            ["11 August 2026", "Implementation guidelines issued: focal persons (BS-17+) and 15-day data verification"],
            ["From 2026", "Operational phase - deductions and fund remittances under the AGPR"]
          ]
        }
      }
    ],
    faqs: [
      {
        question: "What is the Federal Contributory Pension Scheme in Pakistan?",
        answer: "The Federal Contributory Pension Scheme is Pakistan's defined-contribution retirement system for federal employees appointed on or after 1 July 2024. The employee and the government both contribute to an individual invested account, and the retirement benefit is the accumulated value of that account rather than a fixed formula."
      },
      {
        question: "What is the contribution rate for the federal contributory pension scheme?",
        answer: "The employee contributes 10% of pensionable pay and the government contributes 12%, for a combined 22% credited monthly. The earlier provisional government share of 20% was superseded by the final notified rate of 12%."
      },
      {
        question: "Who is covered by the FGDC pension scheme?",
        answer: "Federal civil employees appointed on a regular basis on or after 1 July 2024 are covered, including civilians paid from Defence Estimates. Armed forces personnel appointed on or after 1 July 2025 come under the scheme from that later date."
      },
      {
        question: "Are employees hired before July 2024 affected?",
        answer: "No. Employees appointed before 1 July 2024 stay on the old defined-benefit pension, but under reformed rules - pension is now calculated on the average of the last 24 months' emoluments, and only one pension may be drawn at a time."
      },
      {
        question: "Can federal employees withdraw their contributions before retirement?",
        answer: "No. Contributions cannot be withdrawn before retirement. At retirement, the employee may withdraw up to 25% of the accumulated balance, while the remainder stays invested and is drawn over at least 20 years or until age 80, whichever comes first."
      },
      {
        question: "What happened to the old pension for existing employees?",
        answer: "The old defined-benefit pension continues for pre-2024 employees, but the calculation base moved from last-drawn pay to a 24-month average of emoluments, annual increases are maintained as separate amounts, and a one-pension rule plus an early-retirement reduction now apply."
      },
      {
        question: "Who manages the FGDC pension fund?",
        answer: "Licensed pension fund managers - Non-Banking Finance Companies authorised by the SECP - manage the fund under the Voluntary Pension System Rules 2005. The AGPR deducts and remits contributions, and the Finance Division publishes the list of eligible fund managers."
      },
      {
        question: "When did the scheme become operational?",
        answer: "The rules were notified on 27 August 2025 via SRO 1728(I)/2025. The scheme entered its operational phase in August 2026, when the Finance Division issued implementation guidelines and published the eligible pension fund manager list."
      },
      {
        question: "What is the difference between defined benefit and defined contribution pension?",
        answer: "In a defined-benefit pension, the government bears the investment risk and pays a fixed formula based on service and pay. In a defined-contribution pension, the member owns an account, and the benefit depends on contributions plus investment returns, so the member carries the investment risk."
      },
      {
        question: "Do provincial employees come under this scheme?",
        answer: "No. The FGDC scheme is for federal employees. Punjab, Sindh, Khyber Pakhtunkhwa and Balochistan have notified their own separate contributory schemes for their new entrants, with dates and rates set by each province's own notification."
      }
    ],
    officialLinks: [
      { label: "Ministry of Finance (Finance Division)", href: "https://www.finance.gov.pk/" },
      { label: "Accountant General Pakistan Revenues (AGPR)", href: "https://www.agpr.gov.pk/" },
      { label: "Securities and Exchange Commission of Pakistan (SECP)", href: "https://www.secp.gov.pk/" }
    ]
  }
```

Note: the "about" node in the rendered Article schema is auto-derived from `focusKeyword`, and `mentions` from `entities`, per the current `ArticleTemplate`. The `schema.jsonld` artifact in this folder is the full semantic model generated by the pipeline; the live site schema is produced by the template.
