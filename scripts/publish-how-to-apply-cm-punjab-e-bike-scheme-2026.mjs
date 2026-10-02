import fs from 'fs';
import path from 'path';

const contentFilePath = path.resolve('src/data/content.ts');
let content = fs.readFileSync(contentFilePath, 'utf8');

const slug = "how-to-apply-cm-punjab-e-bike-scheme-2026";

if (content.includes(`slug: "${slug}"`)) {
  console.log("Article already exists in content.ts!");
  process.exit(0);
}

const articleObjectString = `  {
    slug: "${slug}",
    title: "How To Apply CM Punjab E-Bike Scheme 2026 Registration Complete Process",
    excerpt: "Complete 2026 step-by-step online application guide for the CM Punjab E-Bike Scheme at bikes.punjab.gov.pk. Learn eligibility for students, teachers, and government staff, required documents, guarantor rules, zero down payment, and Rs 3,000 monthly installments.",
    showExcerpt: true,
    metaTitle: "How to Apply CM Punjab E-Bike Scheme 2026: Complete Registration Guide",
    metaDescription: "Learn how to apply for CM Punjab E-Bike Scheme 2026 online at bikes.punjab.gov.pk. Check eligibility, documents, zero down payment & step-by-step registration.",
    focusKeyword: "how to apply cm punjab e-bike scheme 2026 registration complete process",
    lsiKeywords: [
      "how to apply online for cm punjab e-bike scheme 2026",
      "bikes punjab gov pk student registration portal",
      "cm punjab e-bike scheme eligibility criteria 2026",
      "punjab e-bike scheme documents required for online apply",
      "bank of punjab e-bike guarantor income proof requirement",
      "cm punjab e-bike monthly installment calculation"
    ],
    entities: [
      "CM Punjab E-Bike Scheme 2026",
      "Government of the Punjab",
      "The Bank of Punjab",
      "bikes.punjab.gov.pk",
      "Higher Education Commission (HEC)",
      "Punjab Teachers Foundation",
      "Rs 90,000 Capital Subsidy",
      "Zero Down Payment",
      "36 Monthly Installments (Rs 3,000/month)",
      "Driving Learner Permit / License"
    ],
    primaryCategory: "punjab-schemes",
    categorySlugs: [
      "punjab-schemes",
      "other-schemes"
    ],
    date: "October 2, 2026",
    publishedDate: "October 2, 2026",
    lastChecked: "October 2, 2026",
    readTime: "10 min read",
    image: "/images/how-to-apply-cm-punjab-e-bike-scheme-2026.jpg",
    imageAlt: "How to Apply CM Punjab E-Bike Scheme 2026 Complete Online Registration Guide",
    author: contributors.muhammadSalman,
    officialLinks: [
      { label: "Punjab E-Bikes Student Portal", href: "https://bikes.punjab.gov.pk/" },
      { label: "The Bank of Punjab (BOP)", href: "https://www.bop.com.pk/" },
      { label: "Punjab Information Technology Board", href: "https://pitb.gov.pk/" },
      { label: "Punjab Teachers Foundation Portal", href: "https://ptf.punjab.gov.pk/" },
      { label: "DLIMS License Verification", href: "https://dlims.punjab.gov.pk/" }
    ],
    relatedSlugs: [
      "cm-punjab-e-bikes-scheme-phase-2",
      "cm-punjab-electric-bike-scheme",
      "cm-punjab-e-bike-scheme-updates",
      "pink-scooty-scheme-2026-registration-eligibility-documents-balloting",
      "pave-scheme-2026-eligibility-electric-bike-subsidy-online-apply"
    ],
    sections: [
      {
        title: "What Is the CM Punjab E-Bike Scheme 2026?",
        paragraphs: [
          "The CM Punjab E-Bike Scheme 2026 is a major provincial initiative launched by the Government of the Punjab under the Chief Minister Youth Initiative. Designed to facilitate eco-friendly urban mobility for youth, the scheme provides electric motorbikes to regular college and university students, school teachers, and BPS 1-16 government workers across Punjab through an interest-free financing structure.",
          "Through a partnership between the Transport & Mass Transit Department, the Punjab Information Technology Board (PITB), and The Bank of Punjab (BOP), the program removes traditional upfront financial barriers, enabling youth to access clean transport with zero interest burden."
        ],
        subsections: [
          {
            title: "Key Features, Subsidy Amount, and BOP Financing Terms",
            paragraphs: [
              "The Government of the Punjab provides a direct capital subsidy of Rs. 90,000 for every electric bike distributed under this scheme. Financing is executed through The Bank of Punjab under a 0% interest (zero markup) arrangement. Successful applicants pay zero down payment upfront and repay the remaining bike cost across 36 monthly installments of approximately Rs. 3,000 per month. Additionally, the provincial government covers 100% of the cost for bike registration, token tax, comprehensive insurance, and provides a free safety helmet and protective rods with every vehicle."
            ]
          }
        ],
        links: [
          { label: "Check CM Punjab E-Bikes Phase 2 updates & balloting", href: "/cm-punjab-e-bikes-scheme-phase-2/" },
          { label: "Learn about CM Punjab Electric Bike Scheme overall terms", href: "/cm-punjab-electric-bike-scheme/" }
        ]
      },
      {
        title: "Who Is Eligible to Apply for the CM Punjab E-Bike Scheme in 2026?",
        paragraphs: [
          "Eligibility for the CM Punjab E-Bike Scheme requires applicants to be at least 18 years of age, hold a valid Punjab domicile or provincial CNIC, and belong to an approved institutional category. The scheme operates primarily on a first-come, first-served basis across designated male and female quotas."
        ],
        subsections: [
          {
            title: "Eligibility Requirements for Students, Teachers, and Government Employees",
            paragraphs: [
              "Student applicants must be enrolled as full-time regular students in a degree college or university located in Punjab that is recognized by the Higher Education Commission (HEC). Distance learning, part-time, and evening program students are ineligible. For school teachers, registration is channeled through the Punjab Teachers Foundation (PTF) portal. Government employees serving in basic pay scales BPS 1 through BPS 16 are also eligible provided they submit an official NOC from their respective administrative department."
            ]
          },
          {
            title: "Can You Apply with a Driving Learner’s Permit?",
            paragraphs: [
              "Yes, applicants can register for the CM Punjab E-Bike Scheme using either a permanent driving license or a valid driving learner’s permit issued by the Punjab Police Traffic Department. Having a physical learner’s permit number is sufficient to complete the portal application. However, applicants must ensure their learner permit remains active throughout the bank verification and vehicle delivery stages."
            ]
          }
        ],
        links: [
          { label: "Read CM Punjab Honhaar Scholarship eligibility criteria", href: "/cm-punjab-honhaar-scholarship-program-2026/" },
          { label: "Pink Scooty Scheme registration for female students", href: "/pink-scooty-scheme-2026-registration-eligibility-documents-balloting/" }
        ]
      },
      {
        title: "What Documents Are Required for Online E-Bike Registration?",
        paragraphs: [
          "Applicants must upload clear scanned copies or clear digital photos of all required credentials before submitting their online registration form. Missing or illegible documents lead to immediate portal rejection during initial scrutiny."
        ],
        subsections: [
          {
            title: "Student Identification and Educational Proofs",
            paragraphs: [
              "Students need their original CNIC or NADRA B-Form, Punjab domicile certificate, valid driving license or learner permit, a recent passport-sized photograph with a blue background, and an official Bonafide Student Certificate signed and stamped by their college principal or university registrar."
            ]
          },
          {
            title: "Guarantor Income and CNIC Requirements",
            paragraphs: [
              "The Bank of Punjab requires every applicant to nominate a co-borrower or financial guarantor, typically a parent, working spouse, or immediate relative. The guarantor must provide their CNIC, active mobile number registered in their own name, proof of monthly income (salary slip, bank statement, or certified business income certificate), and pass a credit check ensuring their existing monthly debt obligations do not exceed 40% of their net income."
            ]
          }
        ]
      },
      {
        title: "Step-by-Step Process: How to Apply Online at bikes.punjab.gov.pk",
        paragraphs: [
          "Follow these step-by-step instructions to register your application correctly on the official Punjab E-Bike portal at bikes.punjab.gov.pk."
        ],
        subsections: [
          {
            title: "Step 1: User Account Creation and Portal Registration",
            paragraphs: [
              "Navigate to bikes.punjab.gov.pk on your mobile or desktop browser. Click on the 'Register' button to open the account creation window. Enter your full name exactly as printed on your CNIC, select your gender, enter your 13-digit CNIC number without dashes, provide an active email address, and enter a mobile number registered to your CNIC. Create a strong password, accept the terms and conditions, and click 'Submit' to receive a verification OTP code via SMS."
            ]
          },
          {
            title: "Step 2: Filling Personal, Academic, and Guarantor Details",
            paragraphs: [
              "Log into your newly created account and select your applicant category (Student, Teacher, or Govt Employee). Fill in your personal details including permanent address, postal address, and driving permit issue number. Under the institutional section, select your district, university or college name, campus, and roll number. Next, open the Guarantor Information section and accurately enter your guarantor's CNIC, monthly salary or business income, relationship to applicant, and current employer details."
            ]
          },
          {
            title: "Step 3: Document Upload and Final Application Submission",
            paragraphs: [
              "Upload scanned PDF or JPEG files for your CNIC (front and back), student Bonafide Certificate, driving learner permit, and guarantor income proof (maximum file size 2 MB per document). Select your preferred electric bike brand and model from the dropdown menu. Review all entered fields carefully to ensure no typing errors exist. Click the check box confirming that all details are true, and press 'Final Submit.' Download and save your computer-generated application tracking slip containing your unique Application ID."
            ]
          }
        ]
      },
      {
        title: "CM Punjab Electric Bike Payment & Monthly Installment Schedule",
        paragraphs: [
          "The Punjab E-Bike Scheme eliminates the upfront financial barrier for students by removing down payments and absorbing interest charges through government subsidies."
        ],
        subsections: [
          {
            title: "Zero Down Payment and Rs. 90,000 Subsidy Breakdown",
            paragraphs: [
              "The total cost of an electric motorbike is shared between the Government of the Punjab and the applicant. The government pays an upfront capital subsidy of Rs. 90,000 directly to the manufacturer and covers full vehicle registration, first-year insurance, and token tax costs. The remaining balance of the bike price is converted into a 3-year interest-free loan managed by The Bank of Punjab, requiring zero down payment from the applicant at the time of delivery."
            ]
          }
        ],
        table: {
          caption: "E-Bike vs Petrol Bike Cost & Repayment Comparison",
          headers: ["Financial Parameter", "CM Punjab Electric Bike Scheme", "Standard 70cc Petrol Bike (Market)"],
          rows: [
            ["Upfront Down Payment", "Rs. 0 (Zero Down Payment)", "Rs. 35,000 – Rs. 50,000"],
            ["Government Capital Subsidy", "Rs. 90,000 (Paid by GoPb)", "Rs. 0"],
            ["Bank Interest Rate (Markup)", "0% Interest (Zero Markup)", "18% – 26% Commercial Interest"],
            ["Monthly Bank Installment", "Approx. Rs. 3,000 / month", "Rs. 6,500 – Rs. 8,500 / month"],
            ["Repayment Tenure", "36 Months (3 Years)", "12 to 24 Months"],
            ["Monthly Fuel / Charging Cost", "Rs. 800 – Rs. 1,200 (Electricity)", "Rs. 7,000 – Rs. 10,000 (Petrol)"],
            ["Free Included Accessories", "Helmet, Safety Rods, Insurance", "None"]
          ]
        },
        links: [
          { label: "Explore Federal PAVE Electric Bike Scheme details", href: "/pave-scheme-2026-eligibility-electric-bike-subsidy-online-apply/" }
        ]
      },
      {
        title: "How to Track CM Punjab E-Bike Application Status Online",
        paragraphs: [
          "Applicants can monitor their registration progress in real-time by accessing the application tracking portal at bikes.punjab.gov.pk."
        ],
        subsections: [
          {
            title: "Understanding Verification Stages: Scrutiny, Physical Audit, and BOP Loan Clearance",
            paragraphs: [
              "After online submission, applications move through three distinct clearance stages: 1) Under Scrutiny (Portal Level) where CNIC, domicile, and driving permit authenticity are checked with NADRA and Traffic Police databases; 2) Institutional Verification where university/college heads verify active student status; 3) BOP Loan Approval where The Bank of Punjab completes financial credit checks on the guarantor."
            ]
          }
        ]
      },
      {
        title: "Common Reasons for E-Bike Application Rejection and How to Fix Them",
        paragraphs: [
          "Understanding common portal errors ensures your application is processed smoothly without unnecessary delays or rejections."
        ],
        table: {
          caption: "Common Portal Rejection Errors & Fixes",
          headers: ["Common Rejection Error", "Root Cause", "Exact Solution & Fix"],
          rows: [
            ["CNIC / Name Mismatch", "Name spelled differently on portal vs NADRA records", "Re-register using exact CNIC spelling as printed on smart card"],
            ["Institution Roll Number Failed", "Student listed as evening or private candidate", "Obtain an updated Bonafide Certificate from regular campus registrar"],
            ["Guarantor Rejected by BOP", "Guarantor debt burden exceeds 40% of income", "Replace guarantor with another employed parent/relative with clear bank record"],
            ["Invalid Learner Permit", "Expired or fake learner permit number entered", "Renew learner permit online via DLIMS Punjab portal and re-upload valid slip"],
            ["Document Upload Error", "File size exceeds 2 MB or image is blurry", "Compress files under 1 MB in JPEG/PDF format before re-uploading"]
          ]
        }
      }
    ],
    faqs: [
      {
        question: "What is the official website to apply for the CM Punjab E-Bike Scheme 2026?",
        answer: "The official website to register for the CM Punjab E-Bike Scheme 2026 is bikes.punjab.gov.pk. Applicants should use only this official portal and avoid unauthorized third-party websites or agents charging registration fees."
      },
      {
        question: "Is down payment required for the CM Punjab electric bike scheme?",
        answer: "No, the CM Punjab E-Bike Scheme requires zero down payment. Successful applicants receive their electric bike without paying any advance upfront cash, as the Punjab government covers the initial down payment and insurance expenses."
      },
      {
        question: "Can students with a learner driving permit apply for the E-Bike scheme?",
        answer: "Yes, students holding a valid driving learner's permit issued by the Punjab Traffic Police are fully eligible to apply. A full permanent driving license is not mandatory during the initial registration phase."
      },
      {
        question: "What is the monthly installment amount for the Punjab E-Bike scheme?",
        answer: "The monthly installment for the electric bike is approximately Rs. 3,000 per month. The total balance is spread evenly across 36 equal monthly installments with zero interest markup."
      },
      {
        question: "Who can act as a guarantor for the E-Bike application?",
        answer: "A parent, guardian, working spouse, or relative with a verifiable regular income source can act as a financial guarantor. The guarantor must possess a valid CNIC and have an active credit record with no bank defaults."
      },
      {
        question: "Are private university students in Punjab eligible for the E-Bike scheme?",
        answer: "Yes, regular full-time students enrolled in HEC-recognized private universities in Punjab are eligible to apply alongside public sector university students."
      },
      {
        question: "How many years is the installment plan for the CM Punjab electric bike?",
        answer: "The installment repayment plan spans 3 years (36 consecutive months). Payments are deposited directly into designated Bank of Punjab accounts or collected via automated monthly bank deductions."
      },
      {
        question: "Are government employees and school teachers eligible for Phase 2 E-Bikes?",
        answer: "Yes, government school teachers can apply through the dedicated Punjab Teachers Foundation (PTF) portal, while BPS 1 to BPS 16 provincial government employees are eligible under dedicated workplace quotas."
      },
      {
        question: "What accessories are provided free of cost with the CM E-Bike?",
        answer: "Every electric bike comes with a free safety helmet, protective side rods, 100% free vehicle registration, token tax exemption, and comprehensive insurance coverage for the first year."
      },
      {
        question: "How can I check if my E-Bike application has been approved by BOP?",
        answer: "Log into your user account on bikes.punjab.gov.pk using your CNIC and password. Navigate to the Dashboard tab to view your current application status, which will display BOP Loan Approved once final clearance is granted."
      }
    ]
  },
`;

const articlesMarker = 'export const articles: Article[] = [';
const insertPos = content.indexOf(articlesMarker);
if (insertPos === -1) {
  console.error('Could not find articles marker in content.ts');
  process.exit(1);
}

content = content.slice(0, insertPos + articlesMarker.length) + '\n' + articleObjectString + content.slice(insertPos + articlesMarker.length);

// Bidirectional internal links: append this slug to each related article's relatedSlugs array.
const relatedTargets = [
  "cm-punjab-e-bikes-scheme-phase-2",
  "cm-punjab-electric-bike-scheme",
  "cm-punjab-e-bike-scheme-updates",
  "pink-scooty-scheme-2026-registration-eligibility-documents-balloting",
  "pave-scheme-2026-eligibility-electric-bike-subsidy-online-apply"
];

let linkedCount = 0;
for (const target of relatedTargets) {
  const slugIdx = content.indexOf(`slug: "${target}"`);
  if (slugIdx === -1) continue;
  const rsIdx = content.indexOf('relatedSlugs: [', slugIdx);
  if (rsIdx === -1) continue;
  const closeIdx = content.indexOf(']', rsIdx);
  if (closeIdx === -1) continue;
  if (content.slice(rsIdx, closeIdx).includes(`"${slug}"`)) continue;
  content = content.slice(0, closeIdx) + `,\n      "${slug}"` + content.slice(closeIdx);
  linkedCount++;
}

fs.writeFileSync(contentFilePath, content, 'utf8');
console.log(`Successfully published ${slug} into content.ts and added incoming links in ${linkedCount} related articles.`);
