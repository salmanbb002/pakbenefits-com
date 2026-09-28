import fs from 'fs';
import path from 'path';

const contentFilePath = path.resolve('src/data/content.ts');
let content = fs.readFileSync(contentFilePath, 'utf8');

const slug = "pink-scooty-scheme-2026-registration-eligibility-documents-balloting";

if (content.includes(`slug: "${slug}"`)) {
  console.log("Article already exists.");
  process.exit(0);
}

const newArticle = `  {
    slug: "${slug}",
    title: "Pink Scooty Scheme 2026 – Registration, Eligibility, Documents & Balloting Guide",
    excerpt: "Complete guide to the Pink Scooty Scheme 2026 in Punjab (bikes.punjab.gov.pk) and Sindh (smta.gos.pk). Learn eligibility criteria, required documents, portal registration steps, 0% markup terms, and computerized balloting results.",
    showExcerpt: true,
    metaTitle: "Pink Scooty Scheme 2026: Registration, Eligibility & Balloting",
    metaDescription: "Apply for the Pink Scooty Scheme 2026 in Punjab & Sindh. Learn eligibility, required documents, portal registration steps, and balloting result check.",
    focusKeyword: "pink scooty scheme 2026 registration eligibility documents balloting",
    lsiKeywords: [
      "pink scooty scheme online apply bikes punjab gov pk",
      "sindh smta pink scooty scheme online registration form",
      "pink scooty eligibility criteria for female students working women",
      "pink scooty scheme balloting result check by cnic",
      "pink scooty driving learner permit mandate"
    ],
    entities: [
      "Pink Scooty Scheme 2026",
      "Chief Minister Punjab Electric Bike Scheme",
      "Sindh Mass Transit Authority",
      "The Bank of Punjab",
      "Computerized E-Balloting",
      "Learner Driving Permit"
    ],
    primaryCategory: "schemes",
    categorySlugs: [
      "schemes",
      "punjab-schemes"
    ],
    date: "September 28, 2026",
    publishedDate: "September 28, 2026",
    lastChecked: "September 28, 2026",
    readTime: "7 min read",
    image: "/images/pink-scooty-scheme-2026.jpg",
    imageAlt: "Pink Scooty Scheme 2026 Registration Eligibility Documents & Balloting Guide",
    author: contributors.muhammadSalman,
    reviewer: contributors.saadHassan,
    officialLinks: [
      { label: "Punjab E-Bike Portal", href: "https://bikes.punjab.gov.pk/" },
      { label: "Sindh SMTA Portal", href: "https://smta.gos.pk/" }
    ],
    sections: [
      {
        title: "What is the Pink Scooty Scheme 2026 in Pakistan?",
        paragraphs: [
          "The Pink Scooty Scheme 2026 is a provincial government social mobility project aimed at empowering women by offering subsidized, eco-friendly electric motorbikes and scooters. The initiative tackles daily transportation barriers faced by female university students, working professionals, single mothers, and widows across Punjab and Sindh.",
          "By substituting expensive commercial transport with subsidized electric two-wheelers, the program reduces monthly commute expenses while fostering financial independence. Both provincial programs partner with public financial institutions and transport authorities to ensure structured distribution through transparent digital systems."
        ],
        subsections: [
          {
            title: "CM Punjab Female Student EV Bike Initiative (bikes.punjab.gov.pk)",
            paragraphs: [
              "In Punjab, Chief Minister Maryam Nawaz Sharif launched the CM Punjab Electric Bike Scheme to distribute 20,000 motorbikes, reserving a dedicated quota of pink electric scooties exclusively for female students. Partnered with The Bank of Punjab (BOP), the government covers the 0% interest markup, registration fees, token tax, and first-year insurance, alongside a capital subsidy of Rs 90,000 per vehicle.",
              "Female students enrolled in HEC-recognized public or private universities and graduate colleges across Punjab can submit online applications. Each recipient receives a safety package including a full-face helmet, protective guards, and access to mandatory riding training workshops."
            ]
          },
          {
            title: "Sindh Mass Transit Authority (SMTA) Pink EV Scooter Program (smta.gos.pk)",
            paragraphs: [
              "The Sindh Mass Transit Authority (SMTA) operates the Sindh Pink EV Scooty Scheme under the Transport & Mass Transit Department Government of Sindh. Unlike student-only initiatives, the Sindh program caters to both female students and working women across major urban centers including Karachi, Hyderabad, Sukkur, Larkana, Shaheed Benazirabad, and Mirpurkhas.",
              "The Sindh initiative focuses on heavily subsidized electric scooties to assist daily commuters facing rising fuel costs. Applicants apply directly through the official SMTA web portal, undergoing background verification prior to provincial computerized draw allocations."
            ]
          }
        ]
      },
      {
        title: "Punjab vs Sindh Pink Scooty Scheme: Side-by-Side Comparison",
        paragraphs: [
          "Navigating provincial motorcycle schemes requires selecting the correct portal based on your official domicile certificate. The matrix below outlines key differences between the Punjab and Sindh programs for 2026:"
        ],
        table: {
          caption: "Punjab vs Sindh Pink Scooty Scheme Feature Comparison 2026",
          headers: ["Feature / Criteria", "CM Punjab EV Bike Scheme", "Sindh SMTA Pink Scooty Scheme"],
          rows: [
            ["Primary Portal", "bikes.punjab.gov.pk", "smta.gos.pk"],
            ["Target Audience", "Regular Female & Male University/College Students", "Working Women, Female Students, Widows & Single Mothers"],
            ["Provincial Domicile", "Punjab Domicile Required", "Sindh Domicile Required"],
            ["Down Payment", "Zero Down Payment (Phase 2 terms)", "Highly Subsidized / Direct Grant Model"],
            ["Financial Partner", "The Bank of Punjab (BOP)", "Transport & Mass Transit Department Sindh"],
            ["Government Subsidy", "Rs 90,000 Capital Subsidy + 0% Interest Markup", "Up to 70% Direct Price Subsidy"],
            ["Estimated Monthly Payment", "Approx. Rs 3,000 / month (36-month tenure)", "Fixed Subsidized Installment / One-time Fee"],
            ["License Requirement", "Valid Learner Permit or Full Driving License", "Learner Permit or SMTA Training Registration"],
            ["Active Cities / Districts", "All 36 Punjab Districts (Lahore, Rawalpindi, Multan, etc.)", "Karachi, Hyderabad, Sukkur, Larkana, Mirpurkhas"]
          ]
        }
      },
      {
        title: "Who is Eligible for the Pink Scooty Scheme 2026?",
        paragraphs: [
          "Eligibility criteria ensure that government subsidies reach genuine female applicants who possess valid documentation and meet age and residency requirements."
        ],
        subsections: [
          {
            title: "Eligibility Criteria for Punjab Female Students",
            paragraphs: [
              "To qualify under the Punjab E-Bike initiative, female applicants must be regular, full-time students enrolled in an HEC-recognized public or private university, degree college, or graduate institution in Punjab.",
              "Applicants must be at least 18 years of age, possess a valid CNIC and Punjab domicile, hold a motorcycle driving license or learner permit, and provide a parent or guardian as financial guarantor for BOP loan security."
            ]
          },
          {
            title: "Eligibility Criteria for Sindh Working Women & Students",
            paragraphs: [
              "The Sindh Mass Transit Authority accepts applications from female working professionals (government or private sector), active university students, registered entrepreneurs, single mothers, and widows.",
              "Applicants must hold a valid CNIC and Sindh domicile (or PRC Form D). Working professionals must provide employment proof or employer verification."
            ]
          }
        ]
      },
      {
        title: "Required Documents for Pink Scooty Scheme Online Registration",
        paragraphs: [
          "Before initiating an online application on bikes.punjab.gov.pk or smta.gos.pk, prepare clear scanned digital copies (PDF or JPG format under 2MB) of the required documents."
        ],
        bullets: [
          "Applicant CNIC / B-Form (Front and back scanned copy)",
          "Provincial Domicile Certificate (Punjab or Sindh matching application)",
          "Driving License or Learner Permit (Official traffic police permit slip)",
          "Educational Proof for Students (Fee slip, student ID card, or bonafide certificate)",
          "Employment Proof for Working Women in Sindh (Job ID card or salary slip)",
          "Guarantor / Co-Borrower CNIC and Income Proof (For Bank of Punjab verification)",
          "Passport-Sized Photograph (Recent photo with blue/white background)"
        ]
      },
      {
        title: "How to Apply Online for Pink Scooty Scheme 2026 Step-by-Step",
        paragraphs: [
          "Follow these official step-by-step procedures to register your application successfully without risking data rejection."
        ],
        subsections: [
          {
            title: "Punjab Portal Registration Walkthrough (bikes.punjab.gov.pk)",
            paragraphs: [
              "Access the official portal at bikes.punjab.gov.pk, create an account using your CNIC and active mobile number, and log in to your candidate dashboard.",
              "Select Electric Bike (Pink Scooty) under the female category, enter your university details, address, and learner permit number, upload scanned documents, and submit your file for Bank of Punjab verification."
            ]
          },
          {
            title: "Sindh SMTA Portal Registration Guide (smta.gos.pk)",
            paragraphs: [
              "Visit smta.gos.pk and select the Pink EV Scooty Registration 2026 banner.",
              "Fill out the application form with your CNIC, applicant category (Student or Working Woman), and district, attach required documents, select driving training preferences, and submit the form to receive your tracking ID."
            ]
          }
        ]
      },
      {
        title: "Pink Scooty Balloting 2026: How Selection & Result Check Work",
        paragraphs: [
          "Demand for government-subsidized electric scooties frequently exceeds vehicle quotas. Both provincial governments utilize computerized e-balloting systems to ensure transparent distribution."
        ],
        subsections: [
          {
            title: "Computerized E-Balloting Mechanism & Transparency",
            paragraphs: [
              "Applications undergo dual-stage verification: institutional document check by transport/education departments, followed by Bank of Punjab guarantor credit audit.",
              "All verified applications enter an automated computerized e-balloting draw monitored by provincial oversight committees and audit firms."
            ]
          },
          {
            title: "How to Check Pink Scooty Balloting Result by CNIC",
            paragraphs: [
              "Visit bikes.punjab.gov.pk (for Punjab) or smta.gos.pk (for Sindh) and click on Balloting Results 2026.",
              "Enter your 13-digit CNIC number without hyphens to display your selection status. Successful applicants also receive official SMS notifications."
            ]
          }
        ]
      },
      {
        title: "Financial Terms, Subsidies & Monthly Installments",
        paragraphs: [
          "The total price of the electric scooty is approximately Rs 190,000 to Rs 210,000. In Punjab, the government provides a Rs 90,000 capital subsidy and covers all 0% interest markup, registration fees, and token taxes.",
          "Under Phase 2 terms, selected students pay Zero Down Payment, repaying the remaining financed principal over a 36-month tenure at an estimated monthly installment of approx. Rs 3,000 per month."
        ]
      },
      {
        title: "Common Application Mistakes & Online Scam Alerts",
        paragraphs: [
          "Apply only on official .gov.pk or .gos.pk websites (bikes.punjab.gov.pk and smta.gos.pk). Never submit personal details on unverified commercial blogs or social media forms.",
          "The registration process is 100% free of charge. Never pay agents or individuals claiming to guarantee balloting success. Ensure your learner driving permit is valid prior to the October 4, 2026 deadline."
        ]
      },
      {
        title: "Frequently Asked Questions (FAQs)",
        paragraphs: [
          "Find quick answers to common questions about Pink Scooty Scheme 2026 registration, eligibility rules, and balloting status check."
        ],
        bullets: [
          "Is a driving license mandatory? Yes, at least a valid motorcycle learner permit is required.",
          "Can male students apply? Male students can apply for black bikes under the general CM Punjab E-Bike portal; pink scooties are reserved for female applicants.",
          "What is the application deadline? The active registration deadline for Punjab Phase 2 is October 4, 2026.",
          "What is the monthly installment amount? Approximately Rs 3,000 per month over a 36-month financing term.",
          "How can I check balloting results online? Enter your 13-digit CNIC on bikes.punjab.gov.pk or smta.gos.pk.",
          "Are private university students eligible? Yes, regular students in HEC-recognized private institutions are eligible.",
          "Is down payment required for Phase 2? No, Phase 2 features zero down payment options for selected students.",
          "Who is eligible in Sindh? Female students, working women, single mothers, and widows with Sindh domicile.",
          "What if guarantor credit check fails? The Bank of Punjab will ask for an alternative guarantor.",
          "Are pink scooties electric? Yes, all 2026 models are 100% battery-powered Electric Vehicles (EVs)."
        ]
      }
    ]
  },
`;

const marker = "export const articles: Article[] = [";
const pos = content.indexOf(marker);
if (pos === -1) {
  console.error("Marker not found.");
  process.exit(1);
}

content = content.slice(0, pos + marker.length) + "\n" + newArticle + content.slice(pos + marker.length);
fs.writeFileSync(contentFilePath, content, 'utf8');
console.log("Successfully added Pink Scooty article into content.ts");
