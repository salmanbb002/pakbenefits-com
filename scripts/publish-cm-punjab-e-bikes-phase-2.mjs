import fs from 'fs';
import path from 'path';

const contentFilePath = path.resolve('src/data/content.ts');
let content = fs.readFileSync(contentFilePath, 'utf8');

const slug = "cm-punjab-e-bikes-scheme-phase-2";

if (content.includes(`slug: "${slug}"`)) {
  console.log("Article already exists in content.ts!");
  process.exit(0);
}

const articleObjectString = `  {
    slug: "${slug}",
    title: "CM Punjab E-Bikes Scheme Phase 2 2026: What Changed, Eligibility & How to Apply",
    excerpt: "The CM Punjab E-Bikes Scheme Phase 2 gives Punjab students 100,000+ electric scooties at PKR 199,000 with a Rs 90,000 subsidy, 0% interest, no down payment and ~Rs 3,000 monthly installments over 3 years. Here is what changed vs Phase 1, who is eligible, and the October 4, 2026 deadline.",
    showExcerpt: true,
    metaTitle: "CM Punjab E-Bikes Scheme Phase 2: What Changed, Eligibility & Last Date",
    metaDescription: "CM Punjab E-Bikes Scheme Phase 2: 100,000+ electric scooties, Rs 90,000 subsidy, zero down payment and ~Rs 3,000 monthly installments. Apply before October 4, 2026 at bikes.punjab.gov.pk.",
    focusKeyword: "cm punjab e-bikes scheme phase 2",
    lsiKeywords: [
      "cm punjab e-bikes scheme phase 2 apply online",
      "punjab e-bike phase 2 eligibility criteria",
      "cm punjab e-bike phase 2 price subsidy installment",
      "punjab e-bike scheme phase 2 last date october 4 2026",
      "maryam nawaz e-bike scheme phase 2 2026",
      "punjab e-bike phase 1 vs phase 2 difference"
    ],
    entities: [
      "CM Punjab E-Bikes Scheme (Phase 2)",
      "Maryam Nawaz Sharif",
      "The Bank of Punjab",
      "Punjab Information Technology Board",
      "Transport & Mass Transit Department",
      "bikes.punjab.gov.pk",
      "Rs 90,000 Capital Subsidy",
      "PKR 199,000 E-Bike Price",
      "100,000 Electric Scooties",
      "October 4, 2026 Deadline"
    ],
    primaryCategory: "punjab-schemes",
    categorySlugs: [
      "punjab-schemes",
      "other-schemes"
    ],
    date: "September 30, 2026",
    publishedDate: "September 30, 2026",
    lastChecked: "September 30, 2026",
    readTime: "9 min read",
    image: "/images/cm-punjab-e-bikes-scheme-phase-2.jpg",
    imageAlt: "CM Punjab E-Bikes Scheme Phase 2 2026 electric scooty banner showing the PKR 199,000 price, Rs 90,000 Punjab subsidy and October 4, 2026 last date",
    author: contributors.muhammadSalman,
    officialLinks: [
      { label: "Punjab E-Bikes Student Portal", href: "https://bikes.punjab.gov.pk/" },
      { label: "The Bank of Punjab (BOP)", href: "https://www.bop.com.pk/" },
      { label: "Punjab Information Technology Board", href: "https://pitb.gov.pk/" },
      { label: "Federal PAVE Portal", href: "https://pave.gov.pk/" }
    ],
    relatedSlugs: [
      "cm-punjab-electric-bike-scheme",
      "cm-punjab-e-bike-scheme-updates",
      "pave-scheme-2026-eligibility-electric-bike-subsidy-online-apply",
      "pink-scooty-scheme-2026-registration-eligibility-documents-balloting",
      "transport-fuel-relief-options"
    ],
    sections: [
      {
        title: "What Is Phase 2 of the CM Punjab E-Bikes Scheme?",
        paragraphs: [
          "Phase 2 is the second and much larger round of the CM Punjab E-Bikes Scheme, launched by Chief Minister Maryam Nawaz Sharif under the CM Youth Initiative and run by the Transport & Mass Transit Department. After a small pilot in Phase 1, the provincial government opened a province-wide window in September 2026 so students can acquire a subsidised electric scooty through interest-free instalments instead of paying the full PKR 199,000 up front.",
          "The machinery is shared across three institutions. The Bank of Punjab (BOP) finances each bike and verifies applicants and guarantors, while the Punjab Information Technology Board (PITB) runs the portal and the transparent computerised e-balloting. Because the provincial government pays the markup, the applicant never carries an interest burden."
        ],
        subsections: [
          {
            title: "The Phase 2 Timeline",
            paragraphs: [
              "Phase 2 moved quickly. Chief Minister Maryam Nawaz chaired a review meeting on September 2, 2026, where the expanded terms were approved, and the portal opened to applications on September 4, 2026. The Chief Minister also directed that eligible students receive their bikes within six weeks of the portal opening, with applications closing on October 4, 2026."
            ]
          }
        ],
        links: [
          { label: "Full CM Punjab Electric Bike Scheme guide", href: "/cm-punjab-electric-bike-scheme/" },
          { label: "CM Punjab E-Bike Scheme Phase 2 updates and balloting", href: "/cm-punjab-e-bike-scheme-updates/" }
        ]
      },
      {
        title: "Phase 2 Price, Subsidy and Installment Plan",
        paragraphs: [
          "The electric scooty is priced at PKR 199,000, and the Government of Punjab (GoPb) contributes a capital subsidy of Rs 90,000 toward every unit. This subsidy is a grant that does not have to be repaid. The remaining balance is financed through the Bank of Punjab, and because GoPb also bears the financing's interest cost, the student repays only the principal with no markup added.",
          "One of the biggest Phase 2 changes is the removal of the down payment. The financed balance is repaid in approximately Rs 3,000 monthly installments over a 3-year (36-month) term, with no down payment required. GoPb also absorbs the insurance, registration and token-tax costs."
        ],
        table: {
          caption: "CM Punjab E-Bikes Scheme Phase 2 Cost Breakdown",
          headers: ["Cost item", "Who pays"],
          rows: [
            ["E-bike price (PKR 199,000)", "Shared: Rs 90,000 GoPb subsidy + financed balance"],
            ["Interest / markup", "Government of Punjab (0% for applicant)"],
            ["Down payment", "None required"],
            ["Insurance", "Government of Punjab"],
            ["Registration & token tax", "Government of Punjab"],
            ["Monthly installment (~Rs 3,000 x 36 months)", "Student"]
          ]
        }
      },
      {
        title: "Who Is Eligible for Phase 2?",
        paragraphs: [
          "The applicant must be a bonafide student enrolled in an educational institution registered or recognised by the relevant Government of Punjab authority, and both public-sector and private-sector institutions qualify. Students must provide proof of enrolment together with the latest paid fee slip.",
          "Phase 2 also keeps two rules that trip up applicants. First, a student must not already own a registered vehicle at the time of application. Second, only one bike is issued per household, even if more than one sibling applies and wins the ballot. Students of federally chartered institutes are not eligible under this provincial scheme and should look at the federal PAVE programme instead."
        ],
        subsections: [
          {
            title: "Age and Driving-License Requirements",
            paragraphs: [
              "The minimum age for Phase 2 is 16 years at the time of submission, and the applicant must hold a valid driving license, learner's driving permit, or juvenile driving permit. The portal's own older overview text still says 18, but the live Phase 2 eligibility and FAQ set the floor at 16. Applicants aged 16 who need a juvenile permit can obtain one by visiting their nearest Sahulat Center with a guardian."
            ]
          }
        ],
        links: [
          { label: "PAVE Scheme 2026: eligibility and electric bike subsidy", href: "/pave-scheme-2026-eligibility-electric-bike-subsidy-online-apply/" },
          { label: "Pink Scooty Scheme 2026: female quota and balloting", href: "/pink-scooty-scheme-2026-registration-eligibility-documents-balloting/" }
        ]
      },
      {
        title: "Phase 2 Documents and Guarantor Requirements",
        paragraphs: [
          "Before opening the portal, gather clear copies of every document. Blurred scans, expired licences or name mismatches are the most common reason for rejection or delay."
        ],
        subsections: [
          {
            title: "Documents You Must Prepare",
            paragraphs: [
              "The student set includes a valid CNIC (or B-Form/CRC where allowed for the age bracket), a student card or bonafide/enrolment certificate, the latest paid fee slip, a motorcycle learner's permit or driving license, and a recent passport-size photograph."
            ]
          },
          {
            title: "The Guarantor and PKR 40,000 Income Rule",
            paragraphs: [
              "The scheme requires a guarantor, normally a parent or legal guardian, with a valid CNIC and a minimum monthly income of PKR 40,000 supported by a recent bank statement. The mobile number entered on the application must be registered in the guarantor's own name against their CNIC. This threshold is a financing and verification requirement applied by the Bank of Punjab after selection, not a cutoff that stops you from applying."
            ]
          }
        ],
        links: [
          { label: "Documents for government-programme inquiries", href: "/documents-for-bisp-registration/" }
        ]
      },
      {
        title: "How to Apply Online for Phase 2 (Step by Step)",
        paragraphs: [
          "The application is entirely digital, with no paper forms, office visits or agents. Follow these steps inside the Phase 2 window (deadline October 4, 2026)."
        ],
        bullets: [
          "Step 1: Open the official portal at https://bikes.punjab.gov.pk.",
          "Step 2: Create your account with your CNIC and an active mobile number, then verify the OTP sent by SMS.",
          "Step 3: Fill the application form with personal, academic and contact details exactly as they appear on your documents.",
          "Step 4: Upload the required documents and select your bike option from the official catalogue.",
          "Step 5: Submit and save your Application ID for tracking.",
          "Step 6: After the deadline, PITB runs the computerised e-balloting if applications exceed the allocation.",
          "Step 7: The Bank of Punjab verifies your documents and guarantor, then the bike is delivered through the assigned dealer."
        ]
      },
      {
        title: "Phase 2 Status, Balloting and Delivery Timeline",
        paragraphs: [
          "After submission, monitor progress by logging into the official portal dashboard with your Application ID or CNIC. When valid applications exceed the scooty allocation, selection is made through PITB's computerised e-balloting, a random draw that no person, agent or website can influence.",
          "Being selected in the ballot is not the final step: you must still clear the Bank of Punjab's verification and financing formalities. The Chief Minister directed that eligible students receive their bikes within six weeks of the portal opening, so treat delivery as a post-verification stage rather than an instant outcome."
        ],
        links: [
          { label: "CM Punjab E-Bike Scheme Updates 2026: Phase 2 balloting and merit lists", href: "/cm-punjab-e-bike-scheme-updates/" }
        ]
      },
      {
        title: "What's New in Phase 2 vs Phase 1?",
        paragraphs: [
          "Many readers still land on articles written about the first phase. The table below reconciles what changed so you do not act on stale numbers."
        ],
        table: {
          caption: "Comparison Between Phase 1 Pilot and Phase 2 (2026)",
          headers: ["Parameter", "Phase 1 (pilot)", "Phase 2 (2026 - current)"],
          rows: [
            ["Coverage", "5 cities", "All districts of Punjab"],
            ["Allocation", "19,000 petrol + 8,179 e-bikes", "100,000 electric scooties (announced 125,000+)"],
            ["Minimum age", "18 (legacy overview text)", "16 years"],
            ["Down payment", "Required (earlier package)", "None"],
            ["Subsidy", "Earlier Rs 70,000 package", "Rs 90,000 capital subsidy"],
            ["Monthly installment", "~Rs 2,100 (earlier package)", "~Rs 3,000"],
            ["Battery", "Not specified publicly", "LFP (Lithium Iron Phosphate)"],
            ["Training", "Not offered", "Free two-day riding training"],
            ["Extra categories", "Students only", "Teachers, employees & delivery riders announced"]
          ]
        }
      },
      {
        title: "100,000 or 125,000? Making Sense of the Phase 2 Numbers",
        paragraphs: [
          "Different official and unofficial pages quote different totals. Here is what each figure actually refers to."
        ],
        table: {
          caption: "Where Each CM Punjab E-Bikes Phase 2 Number Comes From",
          headers: ["Figure", "Where it comes from", "What it means"],
          rows: [
            ["100,000", "bikes.punjab.gov.pk (portal FAQ + banner)", "Electric scooties being provided in Phase 2"],
            ["125,000+", "punjab.gov.pk (more than 125,000)", "The announced Phase 2 plan, slightly higher than the portal's listed scooties"],
            ["8,179", "punjab.gov.pk overview", "E-bikes distributed in Phase 1 (not Phase 2)"],
            ["19,000", "punjab.gov.pk overview", "Petrol bikes distributed in Phase 1"],
            ["30,000", "an unofficial page", "Not official - a contradictory figure; ignore it"]
          ]
        }
      },
      {
        title: "Phase 2 Expansion: Teachers, Employees and Delivery Riders",
        paragraphs: [
          "Phase 2 is not only about students. The Punjab government has given in-principle approval to extend the scheme in stages. Government school teachers apply through a separate track on the Punjab Teachers Foundation portal using their PESS number, on a merit-points system rather than pure balloting.",
          "Government employees (announced for BPS 1-16) and public delivery riders are also slated for inclusion, with eligibility and repayment terms to be published on the relevant official portal. As of the current window, the student track on bikes.punjab.gov.pk is the one actively accepting applications."
        ]
      },
      {
        title: "Official Portals, Helpline and Scam Alerts",
        paragraphs: [
          "For students, the only official application portal is bikes.punjab.gov.pk. The separate teacher track uses ptf.punjab.gov.pk, and the federal PAVE programme lives at pave.gov.pk. The official helpline is 042-99212260, with email support at support@bikes.punjab.gov.pk.",
          "Registration is free across all channels. Never pay an agent or middleman, never share your CNIC image, OTP or bank PIN, and confirm the full .gov.pk domain before entering any information. Be wary of pages quoting invented figures such as a 30,000-bike allocation, an 18-45 age range, or a no-fixed-last-date claim - none of these match the official portal."
        ],
        links: [
          { label: "Recognize programme impersonation and fraud", href: "/avoid-bisp-fraud/" }
        ]
      }
    ],
    faqs: [
      {
        question: "What is the price of the e-bike in Phase 2?",
        answer: "The electric scooty is priced at PKR 199,000. The Government of Punjab contributes a Rs 90,000 capital subsidy toward this price, and the remaining balance is financed interest-free."
      },
      {
        question: "How much capital subsidy is provided in Phase 2?",
        answer: "The Government of Punjab provides a capital subsidy of Rs 90,000 per e-bike. This amount is a grant and does not have to be repaid by the student."
      },
      {
        question: "Is a down payment required in Phase 2?",
        answer: "No down payment is required. The financed balance is repaid entirely through approximately Rs 3,000 monthly installments over a 3-year term."
      },
      {
        question: "What is the financing period, and who pays the interest?",
        answer: "The financing period is 3 years, and the Government of Punjab (GoPb) pays the full interest cost. The applicant pays only the principal, at 0% markup."
      },
      {
        question: "Who pays the insurance, registration and token-tax costs?",
        answer: "The Government of Punjab bears the insurance, registration and token-tax costs of the e-bike. These charges are not added to the student's installments."
      },
      {
        question: "How many e-bikes are being provided in Phase 2?",
        answer: "Phase 2 provides 100,000 electric scooties, with the government announcing a plan of more than 125,000 across the phase. The Phase 1 totals (8,179 e-bikes and 19,000 petrol bikes) are separate and should not be confused with Phase 2."
      },
      {
        question: "What is the minimum age for Phase 2?",
        answer: "The minimum age is 16 years at the time of application. Applicants must also hold a valid driving license, learner's permit or juvenile driving permit."
      },
      {
        question: "Who can act as a guarantor, and what income is required?",
        answer: "A parent or legal guardian can act as guarantor, provided they have a valid CNIC and a verifiable monthly income of at least PKR 40,000, supported by a recent bank statement. The application's mobile number must be registered in the guarantor's own name."
      },
      {
        question: "What is the last date to apply for Phase 2?",
        answer: "The last date to apply is October 4, 2026. Applications are submitted only through bikes.punjab.gov.pk."
      },
      {
        question: "What is new in Phase 2 compared with Phase 1?",
        answer: "Phase 2 removes the down payment, lowers the minimum age to 16, expands coverage to all Punjab districts, uses an LFP battery, and adds a free helmet, safety rods and free two-day riding training, with delivery targeted within six weeks."
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

// Bidirectional internal links: add the new slug to relatedSlugs of the two existing e-bike articles.
const relatedLinkTargets = [
  { find: '      "cm-punjab-e-bike-scheme-updates",\n      "pave-scheme-2026-eligibility-electric-bike-subsidy-online-apply",\n      "electric-bike-scheme-guide",' },
  { find: '      "cm-punjab-electric-bike-scheme",\n      "pink-scooty-scheme-2026-registration-eligibility-documents-balloting",\n      "cm-punjab-honhaar-scholarship-program-2026",' }
];

let linkedCount = 0;
for (const target of relatedLinkTargets) {
  if (content.includes(target.find)) {
    content = content.replace(target.find, target.find + '\n      "cm-punjab-e-bikes-scheme-phase-2",');
    linkedCount++;
  }
}

fs.writeFileSync(contentFilePath, content, 'utf8');
console.log(`Published ${slug} into content.ts. Added relatedSlugs backlinks in ${linkedCount} related articles.`);
