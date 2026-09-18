Ready to splice into the `articles` array in `src/data/content.ts` (place it after the
`himmat-card-eligibility-check-guide` entry, before the closing `];`).

```ts
  {
    "slug": "fuel-relief-scheme-guide",
    "title": "Fuel Relief Scheme Pakistan: Rs100/Litre Petrol Subsidy Explained (2026)",
    "excerpt": "The Fuel Relief Scheme gives motorcycle, three-wheeler, and small-car owners Rs100 off every litre of petrol, registered by SMS to 9771 — not through BISP, NSER, or any poverty registry. See eligibility, caps, and how to avoid fake sites.",
    "metaTitle": "Fuel Relief Scheme: Rs100/Litre Petrol Subsidy (2026)",
    "metaDescription": "The Fuel Relief Scheme is checked and registered via SMS to 9771 — a Rs100/litre petrol subsidy for motorcycles, three-wheelers, and cars up to 800cc, run by the Petroleum Division.",
    "focusKeyword": "fuel relief scheme",
    "lsiKeywords": [
      "fuel relief scheme 9771",
      "pm fuel relief scheme registration",
      "rs100 petrol relief scheme eligibility",
      "fuel pass system pakistan",
      "petrol relief scheme how to register",
      "fuel relief scheme token check"
    ],
    "entities": [
      "Petroleum Division",
      "Economic Coordination Committee",
      "Fuel Pass System",
      "State Bank of Pakistan",
      "OGRA",
      "CNIC"
    ],
    "primaryCategory": "Other Schemes",
    "categorySlugs": [
      "other-schemes",
      "news"
    ],
    "date": "September 15, 2026",
    "publishedDate": "September 15, 2026",
    "readTime": "9 min read",
    "image": "/images/e-bike-guide.jpg",
    "imageAlt": "A motorcycle rider checking fuel relief scheme registration on a phone at a petrol station",
    "author": contributors.saadHassan,
    "reviewer": contributors.ayeshaMalik,
    "sections": [
      {
        "title": "What Is the Fuel Relief Scheme, and Who Runs It?",
        "paragraphs": [
          "The Fuel Relief Scheme is a federal petrol subsidy announced under Prime Minister Shehbaz Sharif and administered day-to-day by the Petroleum Division, with funding cleared through an Economic Coordination Committee (ECC) grant. It is not a poverty-registry programme: unlike BISP's Kafaalat payment or the Ramzan Relief Package, it does not check a household's PMT score or NSER/PSER record at all. Eligibility here is tied purely to what vehicle you own, not to how poor your household is assessed to be.",
          "The ECC approved a Technical Supplementary Grant of roughly Rs76.73 billion in total — about Rs75 billion for the actual fuel subsidy and a further Rs1.73 billion to build and run the verification technology behind it. The Ministry of Information Technology and Telecommunication built the digital system, called the Fuel Pass System, that issues each user's registration and one-time fuel tokens."
        ],
        "subsections": [
          {
            "title": "Who Announced It",
            "paragraphs": [
              "Three federal officials fronted the public rollout: Shaza Fatima Khawaja (Minister of State for IT), who explained the two-step registration process; Attaullah Tarar (Minister for Information and Broadcasting); and Ali Pervaiz Malik (Minister of State for Petroleum). Their joint briefing is what most news coverage of the launch is built around, rather than a single detailed written notification published in advance."
            ]
          }
        ],
        "links": [
          { "label": "what BISP actually is", "href": "/what-is-bisp/" }
        ]
      },
      {
        "title": "How Is This Different From BISP, the Ramzan Package, or the Nigehban Card?",
        "paragraphs": [
          "The Fuel Relief Scheme is a universal subsidy for a defined vehicle class, while BISP, the Ramzan Package, and the Nigehban Card are all cash or food transfers restricted to households already flagged as low-income in a government registry. A motorcycle owner earning a middle-class salary can register for fuel relief the same way a BISP beneficiary can — vehicle ownership and registration date are the only gate, not a poverty score.",
          "A household could, in principle, qualify for more than one of these at once — the systems don't disqualify each other — but each runs on entirely separate registries and rules, so being approved for one says nothing about your status on another."
        ],
        "table": {
          "caption": "Fuel Relief Scheme vs BISP, Ramzan Package, and Nigehban Card",
          "headers": ["Scheme", "Type of benefit", "Eligibility test", "Registered via"],
          "rows": [
            ["Fuel Relief Scheme (this guide)", "Rs100/litre petrol subsidy", "Owns an eligible motorcycle, three-wheeler, or ≤800cc car", "SMS to 9771"],
            ["BISP Kafaalat", "Recurring cash payment", "BISP's own PMT score via NSER", "8171"],
            ["Ramzan Relief Package", "One-time cash package", "NSER-based, seasonal", "SMS to 9999"],
            ["Nigehban Card", "One-time cash + rashan package", "Punjab's PSER, seasonal", "SMS to 8070"]
          ]
        },
        "links": [
          { "label": "BISP's Kafaalat payment", "href": "/benazir-kafaalat/" },
          { "label": "the federal Ramzan Package's own check", "href": "/ramzan-package-check-guide/" },
          { "label": "the Punjab Nigehban Card guide", "href": "/nigehban-card-check-guide/" }
        ]
      },
      {
        "title": "Who Is Eligible for the Fuel Relief Scheme?",
        "paragraphs": [
          "Eligibility covers roughly 11.8 million users across three vehicle classes: about 10 million motorcycle owners, 800,000 three-wheeler operators (including rickshaws and Qingqis), and 1 million owners of cars with engine capacity up to 800cc. Only one vehicle can be registered per CNIC, and the mobile SIM used to register must be in the applicant's own name — a mismatch between the SIM owner and the CNIC on the registration is a documented rejection reason."
        ],
        "subsections": [
          {
            "title": "The 2011 Registration-Date Rule",
            "paragraphs": [
              "Motorcycles and three-wheelers must have been registered on or after 1 January 2011 to qualify, according to multiple outlets covering the scheme's rollout. This cutoff isn't explained in the coverage reviewed for this guide, but it functions as a rough proxy for excluding very old vehicles from the subsidy pool. Owners of older bikes registered before that date are not covered under the criteria reported so far."
            ]
          },
          {
            "title": "Petrol Only, Not Diesel",
            "paragraphs": [
              "The subsidy applies to petrol purchases only; high-speed diesel is excluded entirely. Since the eligible vehicle classes (motorcycles, three-wheelers, small cars) are almost all petrol-powered in Pakistan, this restriction has limited practical effect on most eligible users, but it does mean a diesel-converted or diesel-variant small vehicle would not qualify even if its engine size otherwise fits."
            ]
          }
        ],
        "links": [
          { "label": "CNIC verification across programmes", "href": "/cnic-verification-guide/" }
        ]
      },
      {
        "title": "How Do I Register for the Fuel Relief Scheme by SMS?",
        "paragraphs": [
          "You register by texting your CNIC number, vehicle registration number, your province's first letter, and your vehicle's registration date to 9771, then request a one-time fuel token by texting TOK to 9771 before each visit to a petrol station.",
          "That said, the exact wording of the registration message isn't fully consistent across the sources covering this launch. State broadcaster Radio Pakistan's own account describes the message as simply the CNIC number, plate number, province initial, and registration date — no extra keyword. At least one independent guide site instructs users to start the message with the word \"REG\" before those same four fields. No outlet reviewed reproduces an official SMS-format notice image or PTA circular verbatim, so this guide presents both versions rather than picking one to state as settled fact."
        ],
        "subsections": [
          {
            "title": "Step-by-Step: Registration",
            "paragraphs": [],
            "bullets": [
              "Confirm your SIM is registered in your own name and matches your CNIC.",
              "Text your CNIC number, vehicle registration number, your province's first letter, and the vehicle's registration date to 9771. (Some guides add \"REG\" as a prefix — try without it first if a plain-field message doesn't return a confirmation.)",
              "Wait for a confirmation reply from 9771 confirming your registration.",
              "Register only one vehicle per CNIC; a second registration attempt on the same CNIC is not expected to succeed."
            ]
          },
          {
            "title": "Step-by-Step: Getting a Fuel Token",
            "paragraphs": [],
            "bullets": [
              "Before visiting a petrol station, text TOK to 9771.",
              "The Fuel Pass System generates a one-time digital fuel token tied to your registration.",
              "Show the token (typically the number in the reply SMS) to the attendant at a participating petrol station.",
              "The station applies the Rs100/litre discount at the pump, up to your monthly litre cap."
            ]
          }
        ]
      },
      {
        "title": "How Much Fuel Can I Buy, and How Much Do I Save?",
        "paragraphs": [
          "Motorcycle and three-wheeler owners can buy up to 20 litres of subsidized petrol per month, saving up to Rs2,000; owners of cars up to 800cc can buy up to 30 litres per month, saving up to Rs3,000. Both caps reset monthly and apply per registered vehicle, not per household.",
          "Worked example: A rickshaw driver buying the full 20-litre monthly allowance pays Rs100 less per litre than the pump price — a Rs2,000 saving that month, provided all 20 litres are drawn through the token system rather than a mix of subsidized and regular purchases at different stations.",
          "At the national level, the government's own monthly cost estimate for the subsidy is roughly Rs24.6–25 billion, broken down as approximately Rs20 billion for motorcycles, Rs1.6 billion for three-wheelers, and Rs3 billion for cars up to 800cc — figures that, added together, are consistent with the roughly Rs75 billion, three-month total grant the ECC approved."
        ]
      },
      {
        "title": "How Does the Petrol Station Actually Get Paid Back?",
        "paragraphs": [
          "The State Bank of Pakistan reimburses participating petrol stations for the subsidized amount based on the previous day's recorded token transactions, using bank-account details that the Oil and Gas Regulatory Authority supplies into the settlement system. In practice, this means a station isn't expected to absorb the Rs100/litre discount itself while waiting for a government cheque — the daily settlement cycle is built to keep that gap short, which is also why the token system (rather than a paper form) matters: it's the transaction record SBP's reimbursement relies on."
        ]
      },
      {
        "title": "Where and When Does the Scheme Apply?",
        "paragraphs": [
          "The scheme went live in Islamabad at midnight between 14 and 15 September 2026, and expands to the rest of Pakistan, Azad Jammu and Kashmir, and Gilgit-Baltistan at midnight between 16 and 17 September 2026. It is scheduled to run for three months from its respective start date in each area, though no official end-date notification was found in the sources reviewed — treat \"three months from launch\" as the current stated duration rather than a fixed calendar date until one is published."
        ]
      },
      {
        "title": "How Do I Avoid a Fake Fuel Relief Site or Agent?",
        "paragraphs": [
          "Register only through the official 9771 SMS shortcode, and be aware that at least one look-alike web address, www.pmfuelrelief.pk, has already been flagged by an independent guide site as an unofficial domain not connected to the real programme. Since this scheme is brand-new, expect a wave of copycat pages and social-media posts claiming to \"register\" you for a fee, or asking for your CNIC image, bank PIN, or an OTP — none of which the real SMS-based process ever requires.",
          "If a message, call, or website asks you to pay to register, to \"confirm\" your token, or to send anything beyond the plain-text fields described above, treat it the same way you would any other suspicious benefits-related contact and stop the interaction."
        ],
        "links": [
          { "label": "how to spot a fake benefits site or agent", "href": "/avoid-bisp-fraud/" }
        ]
      },
      {
        "title": "What's True Right Now (September 2026)?",
        "paragraphs": [
          "As of this guide's publication, the scheme is in its first 24–48 hours of rollout: live in Islamabad, with nationwide expansion still two days away. Because the programme launched this recently, expect the exact SMS message format, any additional eligibility clarifications, and the precise end date to be refined by official channels over the coming weeks — this guide will need rechecking against an official notification once one is published, rather than treated as final."
        ]
      }
    ],
    "faqs": [
      { "question": "What is the Fuel Relief Scheme?", "answer": "It's a federal petrol subsidy of Rs100 per litre for motorcycles, three-wheelers, and cars up to 800cc, funded through an Rs75 billion ECC-approved grant and run by the Petroleum Division for three months." },
      { "question": "How do I register for the Fuel Relief Scheme?", "answer": "Text your CNIC number, vehicle registration number, your province's first letter, and your vehicle's registration date to 9771 using a SIM registered in your own name." },
      { "question": "How do I get my fuel token?", "answer": "Before visiting a petrol station, text TOK to 9771 to receive a one-time digital fuel token to show at the pump." },
      { "question": "Is the Fuel Relief Scheme the same as BISP or the Ramzan Package?", "answer": "No. BISP and the Ramzan Package are cash transfers based on a poverty-registry (NSER) score; the Fuel Relief Scheme is a universal vehicle-based subsidy with no income or PMT test at all." },
      { "question": "How much fuel can I buy under the scheme?", "answer": "Motorcycle and three-wheeler owners can buy up to 20 litres a month; owners of cars up to 800cc can buy up to 30 litres a month, both at Rs100 off per litre." },
      { "question": "Does the subsidy cover diesel?", "answer": "No. Only petrol purchases are subsidized; high-speed diesel is excluded entirely." },
      { "question": "Can I register more than one vehicle?", "answer": "No. Only one vehicle can be registered per CNIC under the criteria reported so far." },
      { "question": "My motorcycle was registered before 2011 — can I still apply?", "answer": "According to the eligibility criteria reported for this scheme, motorcycles and three-wheelers must be registered on or after 1 January 2011 to qualify." },
      { "question": "Why do some guides say to text \"REG\" and others don't?", "answer": "Sources disagree on the exact message format: a state-broadcaster account describes a plain CNIC-plate-province-date message, while some independent guides add a \"REG\" prefix. No verbatim official notification was found to settle this, so both are presented here rather than one being stated as certain." },
      { "question": "When does the scheme start in my area?", "answer": "It began in Islamabad at midnight between 14 and 15 September 2026, and expands to the rest of Pakistan, AJK, and Gilgit-Baltistan at midnight between 16 and 17 September 2026." },
      { "question": "Is there a fee to register or get a fuel token?", "answer": "No. Both steps are free via SMS; never pay anyone claiming to register you or unlock your token faster." },
      { "question": "How does the petrol station apply my discount?", "answer": "You show your digital fuel token at a participating station, which applies the Rs100/litre discount directly at the pump, up to your monthly litre cap; the station is later reimbursed by the State Bank of Pakistan." },
      { "question": "How long will the Fuel Relief Scheme run?", "answer": "It's currently stated to run for three months from each area's launch date, though no official fixed end date has been published yet." }
    ],
    "officialLinks": [
      { "label": "Radio Pakistan: Fuel Relief Scheme registration process", "href": "https://www.radio.gov.pk/14-09-2026/simplified-registration-process-introduced-for-fuel-relief-scheme" }
    ]
  },
```

Notes for the person splicing this in:
- No single official `.gov.pk` Petroleum Division / PM Office notification page was found as of
  2026-09-15 (scheme is <48 hours old) — `officialLinks` currently points only to the state
  broadcaster (Radio Pakistan) account. Swap in a Petroleum Division or PMO notification URL once
  one is published, and treat this as a known gap, not an oversight.
- The exact registration SMS format is a genuine open discrepancy across sources (see
  research-notes.md) — don't "resolve" it when editing; the piece is written to disclose both
  versions on purpose.
- Image reuses `/images/e-bike-guide.jpg` (closest existing thematic fit — vehicle/transport) per
  this site's established pattern of reusing its small image pool rather than commissioning new art.
