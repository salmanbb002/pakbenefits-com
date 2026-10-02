import fs from 'fs';
import path from 'path';

const contentTsPath = 'D:/Work ~ SEO-Projects/pakbenefits-com/src/data/content.ts';
let content = fs.readFileSync(contentTsPath, 'utf8');

const targetSlug = 'maryam-nawaz-electric-bike-scheme-2026';

if (content.includes(`slug: "${targetSlug}"`)) {
  console.log(`Article with slug "${targetSlug}" already exists in content.ts.`);
} else {
  const targetMarker = 'export const articles: Article[] = [';
  const markerPos = content.indexOf(targetMarker);

  if (markerPos === -1) {
    console.error("Could not find target marker in content.ts!");
    process.exit(1);
  }

  const insertPos = markerPos + targetMarker.length;

  const newArticle = `
  {
    slug: "maryam-nawaz-electric-bike-scheme-2026",
    title: "Maryam Nawaz Electric Bike Scheme 2026: Online Registration, Eligibility & Installment Plan",
    excerpt: "The Maryam Nawaz Electric Bike Scheme 2026 provides 125,000+ interest-free electric motorbikes and scooties to college and university students across Punjab. Financed by the Bank of Punjab with zero down payment and a Rs 90,000 government subsidy, applicants pay Rs 3,028 monthly over 3 years. Applications close on October 4, 2026, at bikes.punjab.gov.pk.",
    showExcerpt: true,
    metaTitle: "Maryam Nawaz Electric Bike Scheme 2026: Apply Online & Eligibility",
    metaDescription: "Apply online for the Maryam Nawaz Electric Bike Scheme 2026 via bikes.punjab.gov.pk. Check Phase 2 eligibility, zero down payment, Rs 3,000/mo BOP plan & last date.",
    focusKeyword: "Maryam Nawaz Electric Bike Scheme 2026",
    lsiKeywords: [
      "CM Punjab E-Bike Scheme Phase 2",
      "bikes.punjab.gov.pk online apply",
      "Bank of Punjab e-bike monthly installment",
      "Punjab student electric bike scheme eligibility",
      "female electric scooty scheme Punjab"
    ],
    entities: [
      "Maryam Nawaz Electric Bike Scheme 2026",
      "Maryam Nawaz Sharif",
      "bikes.punjab.gov.pk",
      "Bank of Punjab",
      "Higher Education Commission Pakistan",
      "Punjab Information Technology Board"
    ],
    primaryCategory: "CM Punjab Schemes",
    categorySlugs: ["8171"],
    date: "October 02, 2026",
    publishedDate: "2026-10-02",
    lastChecked: "October 02, 2026",
    readTime: "7 min read",
    image: "/images/cm-punjab-e-bikes-scheme-phase-2.jpg",
    imageAlt: "Maryam Nawaz Electric Bike Scheme 2026 Registration Portal",
    author: contributors.muhammadSalman,
    reviewer: contributors.ayeshaMalik,
    officialLinks: [
      { label: "Official Punjab E-Bikes Registration Portal", href: "https://bikes.punjab.gov.pk/" },
      { label: "Official Government of Punjab Portal", href: "https://punjab.gov.pk/cm-ebikes-scheme" },
      { label: "Bank of Punjab E-Bike Financing Guidelines", href: "https://bop.com.pk/" }
    ],
    sections: [
      {
        title: "What is the Maryam Nawaz Electric Bike Scheme 2026?",
        paragraphs: [
          "The Chief Minister's Youth Initiative E-Bike Scheme Phase 2 is a flagship green mobility welfare program launched by Chief Minister Maryam Nawaz Sharif. Administered by the Punjab Transport Department and the Punjab Information Technology Board, the initiative aims to reduce travel expenses for students while promoting eco-friendly urban transportation throughout Punjab.",
          "Under this expanded 2026 phase, the Government of Punjab distributes high-efficiency electric two-wheelers to enrolled male and female students across all 36 districts. The program replaces conventional petrol motorcycles with zero-emission battery vehicles, easing the financial burden of soaring fuel prices on academic households."
        ],
        links: [
          { label: "CM Punjab E-Bikes Scheme Phase 2 Details", href: "/cm-punjab-e-bikes-scheme-phase-2/" },
          { label: "How to Apply for CM Punjab E-Bike Scheme 2026", href: "/how-to-apply-cm-punjab-e-bike-scheme-2026/" }
        ]
      },
      {
        title: "Key Features, Government Subsidies, and Total E-Bike Allocation",
        paragraphs: [
          "Phase 2 scales the provincial fleet to over 125,000 electric motorbikes and scooties. The total retail value of each standard e-bike is set at PKR 199,000, but student beneficiaries receive substantial government-backed relief.",
          "The Punjab Government provides an immediate capital subsidy of Rs 90,000 per vehicle. Furthermore, the provincial treasury absorbs 100% of the bank interest markup, registration fees, annual token tax, and full vehicle insurance costs, leaving students to pay only the subsidized principal balance."
        ]
      },
      {
        title: "Who is Eligible for the Punjab CM E-Bike Scheme Phase 2?",
        paragraphs: [
          "To qualify for the Phase 2 allocation, applicants must satisfy strict provincial residence, academic enrollment, and legal driving criteria established by the Punjab Transport Department.",
          "Only regular, full-time students currently enrolled in degree programs are eligible. Distance-learning students, casual diploma course participants, and non-enrolled individuals cannot apply under the university student quota."
        ],
        links: [
          { label: "CM Punjab Honhaar Scholarship Program 2026", href: "/cm-punjab-honhaar-scholarship-program-2026/" },
          { label: "BISP Taleemi Wazaif Stipend Rates 2026", href: "/bisp-taleemi-wazaif-stipend-rates-2026/" }
        ],
        subsections: [
          {
            title: "Age, Institution, Domicile, and Learner Permit Requirements",
            paragraphs: [
              "Applicants must meet mandatory eligibility benchmarks: (1) Regular student at an HEC-recognized public or private degree college/university in Punjab; (2) Valid Punjab CNIC or domicile certificate; (3) Minimum age of 18 years; (4) Valid motorcycle driving license or official learner permit issued by Punjab Traffic Police; (5) Family limit of one student per household."
            ]
          }
        ]
      },
      {
        title: "What are the Monthly Installment and Payment Terms with Bank of Punjab?",
        paragraphs: [
          "Financing for the Maryam Nawaz Electric Bike Scheme is exclusively managed by the Bank of Punjab (BOP). The credit arrangement operates as a soft loan structure designed for student budgets.",
          "The total loan period is spread over 36 months (3 years). Because the Punjab government subsidizes the entire interest markup, successful applicants pay an equal, interest-free monthly installment without hidden bank service charges."
        ],
        subsections: [
          {
            title: "Zero Down Payment Waiver, Subsidy Breakdown, and Installment Structure",
            paragraphs: [
              "Following direct directives from Chief Minister Maryam Nawaz Sharif for Phase 2, the mandatory advance down payment has been completely waived. Students pay Rs 0 down payment, followed by equal monthly installments of approximately Rs 3,000 to Rs 3,028 per month over 36 months at 0% markup."
            ]
          }
        ]
      },
      {
        title: "How to Apply Online at bikes.punjab.gov.pk (Step-by-Step Guide)",
        paragraphs: [
          "All applications for the 2026 scheme must be completed electronically through the official web portal operated by PITB: bikes.punjab.gov.pk. Manual paper applications submitted at bank branches or government offices are not accepted.",
          "Applicants should complete their registration well before the strict deadline of October 4, 2026."
        ],
        subsections: [
          {
            title: "Document Checklist, Portal Account Creation, and Application Submission",
            paragraphs: [
              "Step 1: Access bikes.punjab.gov.pk and click Register. Step 2: Enter CNIC, mobile number, email, and district. Step 3: Fill in student academic details. Step 4: Upload CNIC, Punjab Domicile, Learner Permit, Student ID, and Guarantor CNIC/Income Proof. Step 5: Select vehicle preference and submit."
            ]
          }
        ]
      },
      {
        title: "How Does the Computerized E-Balloting and Verification Process Work?",
        paragraphs: [
          "Once the registration window closes on October 4, 2026, the Punjab Information Technology Board (PITB) conducts a transparent computerized e-balloting process to select beneficiaries from eligible applications.",
          "The digital draw is audited independently to ensure equal distribution across all 36 Punjab districts and gender quotas."
        ],
        subsections: [
          {
            title: "BOP Guarantor Verification, Merit Lists, and Vehicle Distribution",
            paragraphs: [
              "Selected candidates receive confirmation via SMS and online merit lists. The designated parent/guardian guarantor visits a BOP branch to complete biometric verification and sign loan documents before vehicle delivery."
            ]
          }
        ]
      },
      {
        title: "What Special Provisions and Safety Features are Reserved for Female Students?",
        paragraphs: [
          "The Maryam Nawaz Electric Bike Scheme Phase 2 incorporates targeted gender-equity policies to ensure female students benefit equally from provincial mobility initiatives.",
          "A dedicated percentage of the 125,000 vehicle fleet is strictly reserved for female applicants competing in a separate allotment pool."
        ],
        links: [
          { label: "Pink Scooty Scheme 2026 Registration & Eligibility", href: "/pink-scooty-scheme-2026-registration-eligibility-documents-balloting/" }
        ],
        subsections: [
          {
            title: "Female Quota, Electric Scooty Options, and Free Safety Training",
            paragraphs: [
              "Female applicants can select lightweight pink electric scooties powered by LiFePO4 battery technology (60-80 km range). Every female recipient receives a free safety helmet, leg-protection rods, and mandatory 2-day driving safety training."
            ]
          }
        ]
      },
      {
        title: "Phase 1 vs Phase 2 Comparison: What Changed in 2026?",
        paragraphs: [
          "Phase 2 expands the fleet from 20,000 to 125,000+ electric vehicles, waives the 20% down payment requirement to Rs 0, lowers monthly installments to Rs 3,028, and upgrades battery technology to LiFePO4 long-life cells."
        ],
        table: {
          caption: "Phase 1 vs Phase 2 E-Bike Scheme Comparison (2026 Update)",
          headers: ["Feature / Metric", "Phase 1 (Initial Release)", "Phase 2 (2026 Active Release)"],
          rows: [
            ["Total Vehicle Allocation", "19,000 Petrol & 1,000 Electric", "125,000+ Electric Motorbikes & Scooties"],
            ["Down Payment Requirement", "20% Mandatory Advance Payment", "Rs 0 (100% Waived by CM Punjab)"],
            ["Monthly Installment Rate", "Rs 5,000 to Rs 10,000 / month", "Rs 3,000 to Rs 3,028 / month"],
            ["Battery Technology", "Standard Lead-Acid / Basic Lithium", "LiFePO4 (Lithium Iron Phosphate) High Life"],
            ["Registration & Token Tax", "Paid by Student", "100% Subsidized by Punjab Government"],
            ["Safety Gear Included", "Helmet Only", "Free Helmet, Safety Rods & 2-Day Riding Course"],
            ["Application Deadline", "Closed", "October 4, 2026"]
          ]
        }
      },
      {
        title: "How to Troubleshoot Portal Errors and Track Application Status",
        paragraphs: [
          "If the portal shows CNIC already registered, click Forgot Password to reset via mobile. For upload errors, compress files below 2MB in JPG or PDF. Track live status via your CNIC on the PITB portal dashboard."
        ],
        links: [
          { label: "8171 Web Portal Troubleshooting Guide", href: "/8171-web-portal-not-working/" },
          { label: "CM Punjab Green Credit Program 2026", href: "/cm-punjab-green-credit-program-2026-online-apply/" }
        ]
      }
    ],
    faqs: [
      {
        question: "What is the last date to apply online for the Maryam Nawaz Electric Bike Scheme Phase 2?",
        answer: "The last date to submit online applications for Phase 2 is October 4, 2026. All registration forms and document uploads must be completed on the official portal bikes.punjab.gov.pk before midnight on this date."
      },
      {
        question: "Is a down payment required for the 2026 Punjab E-Bike Scheme?",
        answer: "No down payment is required for Phase 2. Chief Minister Maryam Nawaz Sharif completely waived the advance payment requirement, allowing eligible students to receive e-bikes with zero upfront capital."
      },
      {
        question: "Can students apply with a motorcycle learner's permit instead of a full driving license?",
        answer: "Yes, students can apply using a valid motorcycle learner's permit. The Punjab Transport Department accepts official learner permits issued by Traffic Police alongside full motorcycle driving licenses."
      },
      {
        question: "What is the monthly installment amount for the Bank of Punjab e-bike loan?",
        answer: "The monthly installment amount is approximately Rs 3,028 per month over a 36-month repayment period. The loan is interest-free, as the Government of Punjab subsidizes 100% of the bank markup."
      },
      {
        question: "How many total electric bikes are being distributed in Phase 2?",
        answer: "Over 125,000 electric motorbikes and scooties are being distributed in Phase 2 across all 36 districts of Punjab. This represents a major expansion from the initial phase of the initiative."
      },
      {
        question: "Are female students eligible for electric scooties under the scheme?",
        answer: "Yes, female students can explicitly choose electric scooties during online portal registration. Female applicants also compete within a dedicated reserved quota pool."
      },
      {
        question: "Who can act as a guarantor for the Bank of Punjab e-bike application?",
        answer: "A parent, legal guardian, or immediate family member with verifiable monthly income can act as a guarantor. The co-borrower must provide CNIC documentation and income proof during Bank of Punjab processing."
      },
      {
        question: "What is the official website portal to apply for the CM Punjab E-Bike Scheme?",
        answer: "The only official application portal is bikes.punjab.gov.pk. Students should avoid third-party websites or unofficial agencies claiming to process applications."
      },
      {
        question: "Does the Punjab government cover insurance and token tax for the e-bikes?",
        answer: "Yes, the Punjab government covers 100% of vehicle insurance, token tax, and vehicle registration fees for the initial period, relieving students of extra administrative costs."
      },
      {
        question: "How will the final winners be selected if applicant numbers exceed the quota?",
        answer: "Selection is conducted through a transparent computerized e-balloting system managed by PITB. Results are published directly on the official portal and communicated to shortlisted applicants via SMS."
      }
    ],
    relatedSlugs: [
      "cm-punjab-e-bikes-scheme-phase-2",
      "how-to-apply-cm-punjab-e-bike-scheme-2026",
      "pink-scooty-scheme-2026-registration-eligibility-documents-balloting",
      "cm-punjab-green-credit-program-2026-online-apply",
      "cm-punjab-honhaar-scholarship-program-2026"
    ]
  },`;

  content = content.slice(0, insertPos) + newArticle + content.slice(insertPos);

  // Now add bidirectional relatedSlugs linking in existing e-bike & scheme articles
  const relatedSlugsToUpdate = [
    'cm-punjab-e-bikes-scheme-phase-2',
    'how-to-apply-cm-punjab-e-bike-scheme-2026',
    'pink-scooty-scheme-2026-registration-eligibility-documents-balloting',
    'cm-punjab-green-credit-program-2026-online-apply'
  ];

  relatedSlugsToUpdate.forEach(slug => {
    const slugIdx = content.indexOf(`slug: "${slug}"`);
    if (slugIdx !== -1) {
      const relatedIdx = content.indexOf('relatedSlugs: [', slugIdx);
      if (relatedIdx !== -1 && relatedIdx - slugIdx < 1500) {
        const insertRelPos = relatedIdx + 'relatedSlugs: ['.length;
        content = content.slice(0, insertRelPos) + `\n      "${targetSlug}",` + content.slice(insertRelPos);
        console.log(`Updated relatedSlugs for ${slug}`);
      }
    }
  });

  fs.writeFileSync(contentTsPath, content, 'utf8');
  console.log(`Successfully added "${targetSlug}" to content.ts with bidirectional internal links!`);
}
