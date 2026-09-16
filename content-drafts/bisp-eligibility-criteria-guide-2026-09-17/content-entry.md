Ready to splice into the `articles` array in `src/data/content.ts` (place it after the
`fuel-relief-scheme-guide` entry, before the closing `];`).

```ts
  {
    "slug": "bisp-eligibility-criteria-guide",
    "title": "BISP Eligibility Criteria: Who Actually Qualifies for Benazir Kafaalat",
    "excerpt": "BISP eligibility runs on a household's PMT score from the NSER survey, not a fixed income figure — the approved cutoff is 32, relaxed to 37 for households with a differently-abled member.",
    "metaTitle": "BISP Eligibility Criteria: Who Actually Qualifies",
    "metaDescription": "BISP eligibility is decided by a household's PMT score, not income: the approved cutoff is 32 (37 for a differently-abled member). See what commonly disqualifies a household.",
    "focusKeyword": "eligibility criteria for bisp",
    "lsiKeywords": [
      "how to check bisp eligibility",
      "who qualifies for bisp",
      "bisp pmt score cutoff",
      "bisp disqualification reasons",
      "bisp income limit",
      "bisp eligibility criteria 2026"
    ],
    "entities": [
      "BISP",
      "PMT Score",
      "NSER",
      "CNIC",
      "Benazir Kafaalat",
      "NADRA"
    ],
    "primaryCategory": "BISP Registration",
    "categorySlugs": [
      "bisp-registration",
      "8171",
      "nser-pmt-score"
    ],
    "date": "September 17, 2026",
    "publishedDate": "September 17, 2026",
    "readTime": "7 min read",
    "image": "/images/hero-support.jpg",
    "imageAlt": "A Pakistani family reviewing BISP eligibility guidance together at home",
    "author": contributors.saadHassan,
    "reviewer": contributors.ayeshaMalik,
    "sections": [
      {
        "title": "How BISP Actually Decides Who Qualifies",
        "paragraphs": [
          "BISP does not ask for a salary slip or a declared monthly income figure to decide who qualifies. Instead, an enumerator from the National Socio-Economic Registry (NSER) visits or registers a household at a Benazir Registration Center and records housing conditions, land or vehicle ownership, household composition, and other observable indicators. These answers feed a single number: the PMT score.",
          "That score, not a self-reported income, is what BISP compares against its approved cutoff. Two households that report similar monthly earnings can end up with different PMT scores if their recorded assets, housing quality, or number of dependents differ — which is why two neighbours with seemingly the same income sometimes get different Kafaalat outcomes."
        ]
      },
      {
        "title": "The PMT Score Cutoff: 32 (and When It Becomes 37)",
        "paragraphs": [
          "The current PMT cutoff for Benazir Kafaalat is 32 out of 100, approved by the BISP Board at its 52nd meeting on 23 September 2021. A household scoring 32 or below on the PMT scale qualifies for the quarterly Kafaalat cash transfer; a score above that line does not, regardless of how the family describes its own finances.",
          "The cutoff isn't fixed forever — BISP's own language describes it as reviewed against \"available fiscal space,\" meaning the board can move it as the programme's budget changes. One exception is already built in: households with a differently-abled member get a relaxed cutoff of 37, recognising the added cost of living with a disability. Transgender applicants face an even lighter bar — once their NSER survey is completed and NADRA validates their identity, the standard PMT restriction is waived for them entirely.",
          "No official BISP page reviewed for this guide states a rupee income limit — the PMT score is the actual mechanism, and any \"income limit\" figure circulating online is an approximation of what that score tends to reflect, not a number BISP itself publishes."
        ]
      },
      {
        "title": "What Commonly Makes a Household Ineligible",
        "paragraphs": [
          "Beyond scoring above the PMT cutoff, several disqualifying factors are consistently reported across BISP-focused guidance, though none of these were confirmed on an official BISP page in this review — treat them as commonly reported rather than an official checklist:"
        ],
        "bullets": [
          "A household member employed by government at Grade 17 or above.",
          "A household member who is a registered income tax filer.",
          "Ownership of a luxury vehicle or multiple motorcycles.",
          "Significant property or agricultural landholding."
        ],
        "subsections": [
          {
            "title": "The 2026 Filer Policy Softening",
            "paragraphs": [
              "The filer rule has reportedly softened for 2026: households where a member became a \"Filer\" for unrelated legal reasons, but whose actual monthly income sits near or below roughly Rs. 50,000, are said to be under reassessment for restoration rather than automatic permanent exclusion. This is a reported policy shift, not a confirmed rule change from BISP itself — if this applies to your household, raise it directly at a BISP Tehsil office rather than assuming it applies without confirmation."
            ]
          },
          {
            "title": "When a Previously Eligible Household Loses Status",
            "paragraphs": [
              "An expired CNIC or a newer NSER survey that pushes a household's score back above 32 are also commonly cited reasons a previously eligible family later shows as ineligible."
            ]
          }
        ]
      },
      {
        "title": "Exceptions for Disability and Transgender Applicants",
        "paragraphs": [
          "Two groups get materially different treatment under the same PMT system rather than a separate application process. A household with a certified differently-abled member is assessed against the relaxed 37 cutoff instead of 32, widening who qualifies without changing how the score itself is calculated.",
          "Transgender applicants go further: once their NSER survey is completed and NADRA confirms their identity, BISP's own stated policy is that the PMT restriction is waived for them altogether, rather than merely relaxed. Both exceptions sit inside the standard NSER/PMT process — there is no separate portal or form for either group."
        ]
      },
      {
        "title": "How to Check Whether You Meet These Criteria",
        "paragraphs": [
          "Knowing the cutoff doesn't tell you your own household's score — that requires an actual status check through BISP's official 8171 channel. Our dedicated walkthrough covers the exact steps, what each response message means, and how to avoid unofficial copycat sites — this guide won't repeat that procedure here.",
          "If you haven't yet had an NSER survey done, there's nothing to check yet — see our BISP registration guide for how that record gets created first."
        ],
        "links": [
          { "label": "How to check BISP eligibility via 8171", "href": "/check-bisp-eligibility-8171/" },
          { "label": "How to register for BISP online", "href": "/how-to-register-bisp-online-guide/" }
        ]
      },
      {
        "title": "Marked Ineligible? What to Do Next",
        "paragraphs": [
          "A \"not eligible\" result usually means one of two things: the household's PMT score sits above 32 (37 with the disability exception), or the NSER record itself needs updating. Neither outcome is final on its own. Visit the nearest BISP Tehsil office and ask specifically what the response means for your case — a paused status, a survey-update need, and a genuine score-based rejection call for different next steps, and only the office can tell you which applies.",
          "If your circumstances have changed since the last survey — a new dependant, a lost asset, a change in housing — explain the specific, factual change and ask what update or reassessment process applies. A review request does not guarantee a different score; it only ensures your current circumstances are what's actually on file."
        ],
        "links": [
          { "label": "PMT score check and record corrections", "href": "/nser-pmt-score-check-guide/" }
        ]
      },
      {
        "title": "Avoid Eligibility Scams",
        "paragraphs": [
          "No one can guarantee you a passing PMT score, and no legitimate BISP process charges a fee to \"unlock\" eligibility or move your case up a queue. Treat any call, message, or in-person offer that asks for money, an OTP, or your CNIC details outside an official BISP desk as a scam attempt. Confirm eligibility only through the official 8171 portal or a BISP Tehsil office, never through a third-party \"eligibility checker\" site."
        ],
        "links": [
          { "label": "How to avoid BISP fraud", "href": "/avoid-bisp-fraud/" }
        ]
      }
    ],
    "faqs": [
      { "question": "What is the BISP eligibility criteria?", "answer": "BISP eligibility for Benazir Kafaalat is decided by a household's PMT score from the NSER survey — a score of 32 or below qualifies (37 for households with a differently-abled member), rather than a fixed income figure." },
      { "question": "What is a good PMT score for BISP?", "answer": "A PMT score of 32 or below is the standard qualifying range for Kafaalat as of the BISP Board's 23 September 2021 decision; 37 or below applies for households with a differently-abled member." },
      { "question": "Is there an income limit for BISP?", "answer": "No official rupee income limit is published. BISP uses the PMT score, calculated from housing, assets, and household composition recorded in the NSER survey, instead of a declared income figure." },
      { "question": "Can a government employee get BISP?", "answer": "Government employees at Grade 17 or above are commonly reported as excluded from Kafaalat, though this specific rule wasn't confirmed on an official BISP page during this review — check directly with a BISP Tehsil office for your exact situation." },
      { "question": "Can an income tax filer receive BISP?", "answer": "Being a registered Filer has historically counted against eligibility, but a reported 2026 policy shift is reassessing genuinely low-income filers for restoration rather than automatic exclusion. Confirm your specific case at a BISP office." },
      { "question": "Does owning a car or land disqualify a household?", "answer": "Ownership of a luxury vehicle, multiple motorcycles, or significant agricultural land is commonly reported as a disqualifying factor, since these assets would typically also raise a household's PMT score." },
      { "question": "What happens if my PMT score is above 32?", "answer": "A score above 32 (or 37 with the disability exception) means the household does not currently qualify for Kafaalat under the approved cutoff. This can change if a later NSER survey update lowers the recorded score." },
      { "question": "Is the PMT cutoff the same for everyone?", "answer": "No. The standard cutoff is 32, but it rises to 37 for households with a differently-abled member, and the PMT requirement is waived entirely for transgender applicants once their survey and NADRA validation are complete." },
      { "question": "How do I know if my household meets these criteria?", "answer": "Run an official status check through the 8171 portal or SMS. This guide explains what the result means; the dedicated 8171 guide explains how to get the result." },
      { "question": "What if I think I was wrongly marked ineligible?", "answer": "Visit your nearest BISP Tehsil office, explain the specific circumstances you believe are inaccurate or have changed, and ask what update or reassessment process applies." },
      { "question": "Does the PMT score ever change?", "answer": "Yes — NSER is a dynamic registry, and a household's recorded circumstances can be updated through BISP's authorized process, which can shift the score in either direction at a later survey." }
    ],
    "officialLinks": [
      { "label": "Official BISP website", "href": "https://www.bisp.gov.pk/" },
      { "label": "Official 8171 status portal", "href": "https://8171.bisp.gov.pk/" }
    ]
  },
```
