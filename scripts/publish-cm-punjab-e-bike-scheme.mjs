import fs from 'fs';
import path from 'path';

const contentFilePath = path.resolve('src/data/content.ts');
let content = fs.readFileSync(contentFilePath, 'utf8');

const slug = "cm-punjab-e-bike-scheme-updates";

if (content.includes(`slug: "${slug}"`)) {
  console.log("Article already exists in content.ts!");
  process.exit(0);
}

const articleObjectString = `  {
    slug: "${slug}",
    title: "CM Punjab E-Bike Scheme Updates 2026: Phase 2 Portal, Balloting Results & BOP Installment Plan",
    excerpt: "Verified CM Punjab E-Bike Scheme Phase 2 updates: 100,000 electric bikes quota, Rs 90,000 Punjab Govt subsidy, zero down payment waiver, Rs 3,028/month Bank of Punjab installment, bikes.punjab.gov.pk registration steps, and balloting lists.",
    showExcerpt: true,
    metaTitle: "CM Punjab E-Bike Scheme Updates 2026: Balloting, BOP Installment & Portal",
    metaDescription: "Verified CM Punjab E-Bike Scheme updates: Phase 2 deadline (Oct 4, 2026), bikes.punjab.gov.pk login, BOP 0% markup installment, and balloting lists.",
    focusKeyword: "cm punjab e-bike scheme updates",
    lsiKeywords: [
      "cm punjab e bike scheme phase 2 last date",
      "bikes punjab gov pk online apply portal",
      "punjab e bike balloting merit list by cnic",
      "bank of punjab e-bike monthly installment calculation",
      "punjab electric bike scheme eligibility criteria 2026",
      "maryam nawaz e bike scheme phase 2 zero down payment"
    ],
    entities: [
      "Chief Minister Youth Initiative: E-Bike Scheme",
      "Maryam Nawaz Sharif",
      "The Bank of Punjab",
      "Punjab Information Technology Board",
      "bikes.punjab.gov.pk",
      "Rs. 90,000 Capital Subsidy",
      "Zero Down Payment",
      "Rs. 3,028 Monthly Installment",
      "100,000 Electric Bikes",
      "October 4, 2026 Registration Cutoff",
      "DLIMS Motorcycle Driving License"
    ],
    primaryCategory: "punjab-schemes",
    categorySlugs: [
      "punjab-schemes",
      "other-schemes"
    ],
    date: "September 29, 2026",
    publishedDate: "September 29, 2026",
    lastChecked: "September 29, 2026",
    readTime: "9 min read",
    image: "/images/cm-punjab-e-bike-scheme-updates.jpg",
    imageAlt: "CM Punjab E-Bike Scheme Updates 2026 Phase 2 Portal Balloting and BOP Installments",
    author: contributors.muhammadSalman,
    reviewer: contributors.ayeshaMalik,
    officialLinks: [
      { label: "Punjab E-Bikes Student Portal", href: "https://bikes.punjab.gov.pk/" },
      { label: "The Bank of Punjab (BOP)", href: "https://www.bop.com.pk/" },
      { label: "Punjab Information Technology Board", href: "https://pitb.gov.pk/" },
      { label: "DLIMS License Verification", href: "https://dlims.punjab.gov.pk/" }
    ],
    relatedSlugs: [
      "pink-scooty-scheme-2026-registration-eligibility-documents-balloting",
      "cm-punjab-honhaar-scholarship-program-2026",
      "cm-punjab-free-laptop-scheme-2026-online-apply",
      "apni-chhat-apna-ghar-scheme-online-apply-2026-2026-09-21"
    ],
    sections: [
      {
        title: "What Are the Latest Updates on the CM Punjab E-Bike Scheme Phase 2?",
        paragraphs: [
          "Under the latest CM Punjab E-Bike Scheme updates, Phase 2 provides 100,000 electric bikes to college and university students across all 36 Punjab districts. The Punjab Government provides a Rs. 90,000 capital subsidy, waives 100% of the down payment, and sponsors interest-free financing through The Bank of Punjab at Rs. 3,028 monthly over 36 months. Online registration remains open at bikes.punjab.gov.pk until October 4, 2026, followed by computerized electronic balloting.",
          "Under the direct supervision of Chief Minister Maryam Nawaz Sharif, the provincial cabinet restructured the program's financial mechanics to eliminate student entry barriers. Rather than requiring families to arrange upfront cash deposits during inflationary pressures, the provincial treasury absorbs the complete initial capital outlay, registration levies, number plate charges, and mandatory first-year comprehensive Takaful insurance coverage."
        ],
        subsections: [
          {
            title: "100,000 Electric Bikes Allocation Across All 36 Punjab Districts",
            paragraphs: [
              "The vehicle volume for Phase 2 stands at 100,000 electric bikes distributed across every tehsil and district of Punjab based on accredited student population ratios. Unlike Phase 1, which restricted access to Lahore, Faisalabad, Rawalpindi, Multan, and Bahawalpur, Phase 2 ensures that degree colleges and universities in rural, southern, and western Punjab receive proportionate vehicle quotas.",
              "District quotas prevent metropolitan centers from consuming the entire provincial vehicle pool. Institutional quotas are subdivided into male and female categories, ensuring equitable regional distribution whether an applicant studies at a major university in Lahore or a postgraduate degree college in Rajanpur, Bhakkar, or Layyah."
            ]
          },
          {
            title: "Total Down Payment Waiver & Rs. 90,000 Government Capital Subsidy",
            paragraphs: [
              "The Government of the Punjab directly disburses a non-repayable capital subsidy of Rs. 90,000 toward the ex-factory retail invoice of every electric motorbike issued under the scheme. Furthermore, the provincial government has completely eliminated the student down payment, meaning selected applicants incur zero upfront acquisition cost prior to vehicle delivery.",
              "In standard commercial asset financing, electric two-wheelers require a 20% to 30% advance deposit alongside security margin retention. By absorbing both the Rs. 90,000 capital cost and the initial equity margin, the Punjab Government reduces the total financed loan principal to a manageable level that low- and middle-income families can easily amortize."
            ]
          }
        ],
        links: [
          { label: "Pink Scooty Scheme 2026: Female Quota & Balloting", href: "/pink-scooty-scheme-2026-registration-eligibility-documents-balloting" },
          { label: "CM Punjab Honhaar Scholarship Program 2026", href: "/cm-punjab-honhaar-scholarship-program-2026" }
        ]
      },
      {
        title: "How Does the Bank of Punjab (BOP) Installment Plan Work?",
        paragraphs: [
          "The Bank of Punjab (BOP) executes the financing facility as an interest-free, asset-backed soft loan structured over a 36-month (3-year) repayment tenure at 0% markup. The Punjab Government directly compensates BOP for all commercial borrowing markups and administrative processing costs, guaranteeing that students repay only the net principal amount.",
          "Installment recovery is managed through digital collection channels, automated direct debit mandates linked to student or parent accounts, and over-the-counter payments at any BOP branch across Pakistan. Repayments commence only after the physical handover of the electric motorbike and verification of the official delivery challan."
        ],
        table: {
          caption: "CM Punjab E-Bike Scheme Phase 2 Financing Terms vs. Commercial Market",
          headers: ["Financial Parameter", "Commercial EV Purchase", "CM Punjab E-Bike Scheme Phase 2", "Student Savings / Benefit"],
          rows: [
            ["Upfront Down Payment", "Rs. 40,000 – Rs. 65,000", "Rs. 0 (100% Waived)", "Save up to Rs. 65,000 upfront"],
            ["Provincial Capital Subsidy", "Rs. 0 (No Government Grant)", "Rs. 90,000 (Direct Grant)", "Direct asset value discount"],
            ["Financing Markup / Interest", "18% – 24% KIBOR Spread", "0% Markup (Govt Absorbed)", "Save Rs. 45,000+ in interest"],
            ["Monthly Installment", "Rs. 8,500 – Rs. 12,000", "Rs. 3,028 / month (Fixed)", "Predictable micro-installments"],
            ["Repayment Tenure", "12 to 24 Months", "36 Months (3 Years)", "Extended flexible schedule"],
            ["Registration & Token Tax", "Rs. 6,500 – Rs. 9,000", "100% Covered by Punjab Govt", "Free official registration"],
            ["1st Year Comprehensive Takaful", "Rs. 8,000 – Rs. 14,000", "100% Covered by Punjab Govt", "Free comprehensive insurance"]
          ]
        },
        subsections: [
          {
            title: "Guarantor, e-CIB & Debt Burden Ratio (DBR) Requirements",
            paragraphs: [
              "To comply with State Bank of Pakistan consumer lending regulations, BOP requires each student applicant to designate an eligible co-borrower or guarantor, typically a parent, legal guardian, spouse, or employed sibling. The co-borrower must possess a valid Computerized National Identity Card (CNIC) and demonstrate sufficient monthly cash flow to support the micro-installment.",
              "BOP conducts an automated electronic Credit Information Bureau (e-CIB) inquiry to ensure the co-borrower is not an active financial defaulter on existing banking facilities. Under SBP guidelines, the co-borrower's combined Debt Burden Ratio (DBR) must not exceed 40% of their verifiable net household income, ensuring that family debt servicing remains sustainable throughout the 3-year term."
            ]
          }
        ]
      },
      {
        title: "Who Is Eligible for the Punjab E-Bike Scheme Phase 2?",
        paragraphs: [
          "Eligibility for the CM Punjab E-Bike Scheme Phase 2 requires applicants to be regular, enrolled students at an HEC-recognized degree college or university located within the territorial jurisdiction of Punjab. Applicants must hold a verified Punjab domicile certificate or Punjab-addressed CNIC and meet statutory transport licensing requirements.",
          "The scheme excludes private candidates, distance-learning students, and casual diploma enrollees to ensure that publicly subsidized vehicles directly alleviate daily inter-city and intra-city academic transit burdens."
        ],
        subsections: [
          {
            title: "Academic Criteria for Regular College and University Students",
            paragraphs: [
              "Applicants must be enrolled in full-time morning or evening degree programs, including intermediate (in select recognized public colleges), undergraduate (BS, BA, BSc), postgraduate (MS, MPhil, MSc), or doctoral programs. Institutional registrars and college principals verify student enrollment electronically through the Higher Education Department (HED) and PITB integration.",
              "Students must provide their active institutional roll number, department designation, student identity card number, and current semester or academic session details during portal submission. Suspended students or individuals with terminated academic standings are automatically flagged and disqualified during data cross-matching."
            ]
          },
          {
            title: "Mandatory DLIMS Driving License and Learner Permit Rules",
            paragraphs: [
              "Every applicant must possess a valid motorcycle driving license or an active motorcycle learner driving permit issued by the Driving License Issuance Management System (DLIMS) of the Punjab Police. Applications submitted without a valid DLIMS computerized registration tracking number are rejected at the initial database validation stage.",
              "Students holding a learner's permit can successfully apply and participate in the electronic ballot. However, selected candidates must maintain their learner permit in valid status and are strongly advised to secure their permanent computerized driving license before final vehicle delivery to avoid insurance endorsement complications."
            ]
          },
          {
            title: "Gender Quotas: 50% Allocation for Female Students and Pink Scooty Options",
            paragraphs: [
              "Phase 2 mandates an unprecedented 50% quota reserved exclusively for female students across all 36 districts of Punjab. Female applicants have the choice between standard commuter electric motorbikes and specially configured step-through electric scooties (often referred to colloquially as Pink Scooties), designed for comfortable daily riding in modest attire.",
              "This affirmative gender allocation addresses urban mobility hurdles that frequently force young women to discontinue higher education due to prohibitive van fares or overcrowded public transport routes. Female students also receive dedicated priority slots in post-balloting delivery schedules."
            ]
          }
        ],
        links: [
          { label: "CM Punjab Free Laptop Scheme 2026 Online Apply", href: "/cm-punjab-free-laptop-scheme-2026-online-apply" },
          { label: "Apni Chhat Apna Ghar Housing Scheme", href: "/apni-chhat-apna-ghar-scheme-online-apply-2026-2026-09-21" }
        ]
      },
      {
        title: "How to Apply Online at bikes.punjab.gov.pk Before the October 4, 2026 Deadline?",
        paragraphs: [
          "Online application submission for Phase 2 is conducted exclusively through the centralized digital portal bikes.punjab.gov.pk, developed and managed by the Punjab Information Technology Board. The portal remains active 24 hours a day until the strict application deadline of October 4, 2026.",
          "Manual paper forms, bank counter submissions, and third-party franchise registrations are strictly prohibited. Applicants should avoid unverified third-party websites claiming to offer registration shortcuts, as these platforms are unaccredited and compromise personal identity security."
        ],
        bullets: [
          "Step 1: Access the portal at https://bikes.punjab.gov.pk and click Register.",
          "Step 2: Enter full legal name, 13-digit CNIC, mobile number, and set an account password.",
          "Step 3: Enter the 6-digit SMS verification code (OTP) to activate your student dashboard.",
          "Step 4: Select your accredited college or university from the provincial institutional directory.",
          "Step 5: Choose vehicle preference: Standard Electric Bike or Step-Through Electric Scooty.",
          "Step 6: Input your valid DLIMS learner permit number or permanent driving license tracking code.",
          "Step 7: Provide co-borrower (parent/guardian/sibling) particulars, CNIC, and monthly income details.",
          "Step 8: Upload scanned copies of CNIC, student ID, DLIMS permit, and submit to receive your Application Tracking ID."
        ]
      },
      {
        title: "How Will the Electronic Balloting (E-Balloting) and Merit Lists Be Conducted?",
        paragraphs: [
          "The selection of beneficiaries across all 36 Punjab districts is conducted through automated, computerized electronic balloting designed, coded, and monitored by the Punjab Information Technology Board. The balloting process eliminates human discretion, third-party recommendations, or manual quotas, guaranteeing total transparency.",
          "The e-balloting draw takes place shortly following the closure of the registration window on October 4, 2026. Representatives from the Punjab Transport Department, Higher Education Department, civil society observers, and media personnel witness the computerized script execution in Lahore."
        ],
        subsections: [
          {
            title: "PITB Computerized Draw Mechanism & District-Wise Quota Balancing",
            paragraphs: [
              "The PITB balloting algorithm segregates the applicant database into distinct district, gender, and institutional buckets before running randomized selection routines. This ensures that every district's allocated quota is fulfilled independently, preventing students from smaller tehsils from competing directly against candidates from high-density cities like Lahore or Rawalpindi.",
              "Once the primary quota for a specific district is exhausted, the algorithm automatically generates a secondary computerized Waiting List (Reserve List). If an initially selected applicant fails bank credit scrutiny, withdraws voluntarily, or provides unverifiable academic credentials, the system immediately promotes the next student in sequence from the official reserve queue."
            ]
          },
          {
            title: "How to Check Selected Applicant Status on the bikes.punjab.gov.pk Dashboard",
            paragraphs: [
              "Applicants can independently verify their selection status within seconds once the official balloting concludes by logging into bikes.punjab.gov.pk with their CNIC and password. The system displays one of three clear flags: Selected (Approved in E-Ballot), Waiting List (Reserve Status with numerical standing), or Not Selected.",
              "In addition to online dashboards, the Punjab Government publishes full downloadable PDF merit lists categorized by district and gender, searchable via keyboard shortcut (Ctrl + F). Selected candidates also receive an automated official SMS alert from the government gateway."
            ]
          }
        ]
      },
      {
        title: "Post-Selection Procedure: BOP Branch Verification, Takaful & Delivery Timeline",
        paragraphs: [
          "Being selected in the electronic balloting marks the completion of the preliminary stage; final vehicle ownership requires successful asset financing approval through The Bank of Punjab. Successful candidates must complete document verification at designated BOP branches within 10 to 14 business days following the balloting announcement.",
          "Under directives issued by CM Maryam Nawaz Sharif, the Punjab Transport Department bundles every electric vehicle with a comprehensive, complimentary Rider Safety Kit including an internationally certified helmet, steel crash leg guards, and a mandatory free two-day motorcycle safety orientation organized by City Traffic Police academies."
        ]
      },
      {
        title: "Phase 1 vs. Phase 2 Comparison: Key Policy Upgrades",
        paragraphs: [
          "The table below outlines the structural policy transformations introduced in the 2026 expansion compared to the initial pilot rollout:"
        ],
        table: {
          caption: "Comparison Between Phase 1 Pilot and Phase 2 Full Rollout",
          headers: ["Policy Dimension", "Phase 1 (Pilot 2024–2025)", "Phase 2 (2026 Expansion)", "Student Impact"],
          rows: [
            ["Geographic Scope", "Limited to 5 major cities", "All 36 Districts of Punjab", "Universal access for rural & urban youth"],
            ["Fleet Size & Type", "20,000 (19,000 Petrol + 1,000 EV)", "100,000 Electric Bikes Exclusively", "100% green transit; zero petrol costs"],
            ["Student Down Payment", "Rs. 20,000 – Rs. 25,000 required", "Rs. 0 (100% Waived by Punjab Govt)", "Zero upfront financial hurdle"],
            ["Provincial Equity Subsidy", "Partial subsidy on markup only", "Rs. 90,000 Direct Capital Subsidy", "Substantial direct invoice discount"],
            ["Monthly Amortization", "~Rs. 5,000 (Petrol) / ~Rs. 10,000 (EV)", "~Rs. 3,028 / month (Fixed EV)", "Over 65% reduction in monthly payments"],
            ["Female Allocation", "Standard general quota (~25%)", "50% Dedicated Female Quota", "Guaranteed equality & pink scooties"],
            ["Safety Equipment", "Standard vehicle only", "Free Certified Helmet & Safety Guards", "Enhanced safety without personal expense"],
            ["Application Deadline", "Closed", "October 4, 2026 (Active Window)", "Immediate application at bikes.punjab.gov.pk"]
          ]
        }
      }
    ],
    faqs: [
      {
        question: "What is the official deadline to apply for CM Punjab E-Bike Scheme Phase 2?",
        answer: "The official deadline for online application submission under Phase 2 is October 4, 2026. All eligible college and university students must complete their digital registrations at bikes.punjab.gov.pk before midnight on this date."
      },
      {
        question: "How much monthly installment do selected students have to pay?",
        answer: "Selected students pay a fixed monthly installment of approximately Rs. 3,028 over a 36-month repayment tenure. Because the Government of the Punjab provides a Rs. 90,000 capital subsidy and absorbs all interest charges, the loan carries 0% markup."
      },
      {
        question: "Is there any down payment or advance deposit required?",
        answer: "No down payment is required from students under Phase 2. Chief Minister Maryam Nawaz Sharif has completely waived the initial equity deposit, enabling selected students to receive their electric bikes with zero upfront cash outlay."
      },
      {
        question: "Can students holding only a motorcycle learner's permit apply?",
        answer: "Yes, students holding a valid motorcycle learner's permit issued by DLIMS Punjab are fully eligible to apply and participate in the electronic ballot. However, candidates must keep their permit active and are encouraged to acquire a full computerized license prior to final vehicle delivery."
      },
      {
        question: "How can I check my name in the Punjab E-Bike balloting merit list?",
        answer: "You can verify your balloting result by logging into your personalized applicant dashboard at bikes.punjab.gov.pk using your 13-digit CNIC and password. The Punjab Government also publishes official district-wise downloadable PDF merit lists that can be searched using your CNIC number."
      },
      {
        question: "Are petrol motorcycles available in the Phase 2 registration?",
        answer: "No petrol motorcycles are offered in Phase 2. To combat urban smog and promote clean environmental energy, the Government of the Punjab has made Phase 2 an exclusively electric vehicle program comprising 100,000 e-bikes."
      },
      {
        question: "Who can serve as a guarantor (co-borrower) for The Bank of Punjab?",
        answer: "A parent, legal guardian, spouse, or employed sibling can act as a guarantor or co-borrower for the Bank of Punjab financing. The guarantor must possess a valid CNIC, a clean credit history free from active banking defaults, and verifiable monthly household income."
      },
      {
        question: "Are students from private universities and degree colleges eligible?",
        answer: "Yes, regular students enrolled in private universities and private degree colleges recognized by the Higher Education Commission (HEC) and Punjab Higher Education Commission (PHEC) are fully eligible to apply alongside public-sector students."
      },
      {
        question: "What happens if an applicant fails the Bank of Punjab verification?",
        answer: "If a selected candidate fails the BOP credit appraisal, provides unverifiable academic documentation, or fails to visit the branch within the designated timeframe, their allocation is cancelled. The vacant seat is then immediately offered to the next candidate on the computerized waiting list."
      },
      {
        question: "Does the Punjab Government cover insurance and vehicle registration costs?",
        answer: "Yes, the Government of the Punjab covers 100% of the vehicle registration fees, computerized number plate charges, token tax, and the complete first-year comprehensive Takaful insurance premium."
      },
      {
        question: "Can female students apply for electric scooties instead of standard motorbikes?",
        answer: "Yes, female applicants can specifically select electric scooties (scooters) with a step-through frame design on the application portal. The Punjab Government has reserved a dedicated 50% quota for female students to enhance mobility and female higher-education enrollment across the province."
      }
    ]
  },
`;

const articlesMarker = 'export const articles: Article[] = [';
const insertPos = content.indexOf(articlesMarker);

if (insertPos === -1) {
  console.error("Could not find articles marker in content.ts");
  process.exit(1);
}

content = content.slice(0, insertPos + articlesMarker.length) + "\n" + articleObjectString + content.slice(insertPos + articlesMarker.length);

// Add bidirectional internal links across related articles
const targetSlug = slug;
const replaceTargets = [
  {
    find: 'slug: "pink-scooty-scheme-2026-registration-eligibility-documents-balloting"',
    linkText: `\n        links: [\n          { label: "CM Punjab E-Bike Scheme Updates 2026: Phase 2 Portal & BOP Installment", href: "/${targetSlug}" }\n        ],`
  },
  {
    find: 'slug: "cm-punjab-honhaar-scholarship-program-2026"',
    linkText: `\n        links: [\n          { label: "CM Punjab E-Bike Scheme Phase 2 Updates 2026", href: "/${targetSlug}" }\n        ],`
  },
  {
    find: 'slug: "cm-punjab-free-laptop-scheme-2026-online-apply"',
    linkText: `\n        links: [\n          { label: "CM Punjab E-Bike Scheme Phase 2 Registration", href: "/${targetSlug}" }\n        ],`
  },
  {
    find: 'slug: "pave-scheme-2026-eligibility-electric-bike-subsidy"',
    linkText: `\n        links: [\n          { label: "CM Punjab E-Bike Scheme Updates 2026", href: "/${targetSlug}" }\n        ],`
  }
];

let linkedCount = 0;
for (const target of replaceTargets) {
  const pos = content.indexOf(target.find);
  if (pos !== -1) {
    const sectionPos = content.indexOf('paragraphs: [', pos);
    if (sectionPos !== -1) {
      const insertAfterPara = content.indexOf(']', sectionPos) + 1;
      content = content.slice(0, insertAfterPara) + `,` + target.linkText + content.slice(insertAfterPara);
      linkedCount++;
    }
  }
}

fs.writeFileSync(contentFilePath, content, 'utf8');
console.log(`Successfully published ${slug} into content.ts and established internal links in ${linkedCount} related articles!`);
