import fs from 'fs';
import path from 'path';

const root = process.cwd();
const contentFilePath = path.resolve(root, 'src/data/content.ts');
let content = fs.readFileSync(contentFilePath, 'utf8');

const slug = 'apna-ghar-housing-scheme';

if (content.includes(`slug: "${slug}"`)) {
  console.log('Article already exists in content.ts!');
  process.exit(0);
}

const articleObject = {
  slug: "apna-ghar-housing-scheme",
  relatedSlugs: [
    "wazir-e-azam-apna-ghar-program",
    "apni-chhat-apna-ghar-scheme-online-apply-2026",
    "apni-zameen-apna-ghar-balloting-result-2026",
    "cm-punjab-apni-chhat-apna-ghar-loan-installment-tracking"
  ],
  title: "Apna Ghar Housing Scheme 2026: Online Application, Loan Limits & Eligibility Guide",
  excerpt: "The Apna Ghar Housing Scheme provides first-time Pakistani homeowners with low-cost housing finance up to PKR 10 million at a 5% subsidized markup rate for 10 years, repayable over 20 years. Learn eligibility rules and apply online via apnaghar.gov.pk or participating banks.",
  showExcerpt: true,
  metaTitle: "Apna Ghar Housing Scheme 2026: Apply Online & Eligibility",
  metaDescription: "Complete guide to the Apna Ghar Housing Scheme in 2026. Learn eligibility rules, 5% subsidized interest rates, online application at apnaghar.gov.pk, and bank processes.",
  focusKeyword: "apna ghar housing scheme",
  lsiKeywords: [
    "apna ghar housing scheme online apply 2026",
    "apna ghar housing scheme eligibility criteria",
    "apna ghar housing scheme monthly installment calculator",
    "wazir e azam apna ghar program interest rate 5%",
    "apna ghar housing scheme required documents",
    "apni chhat apna ghar vs wazir e azam housing scheme"
  ],
  entities: [
    "Wazir-e-Azam Apna Ghar Program",
    "Apni Chhat Apna Ghar Program",
    "Government of Pakistan",
    "State Bank of Pakistan",
    "apnaghar.gov.pk",
    "Meezan Bank",
    "Bank Alfalah",
    "Habib Bank Limited"
  ],
  primaryCategory: "Other Schemes",
  categorySlugs: [
    "other-schemes"
  ],
  date: "October 3, 2026",
  publishedDate: "October 3, 2026",
  lastChecked: "October 3, 2026",
  readTime: "9 min read",
  image: "/images/apna-ghar-housing-scheme.jpg",
  imageAlt: "Editorial banner for Apna Ghar Housing Scheme 2026 showing low-cost housing finance key details, 5% markup, and online application portal",
  author: "CONTRIBUTOR_PLACEHOLDER",
  sections: [
    {
      title: "What is the Wazir-e-Azam Apna Ghar Housing Scheme?",
      paragraphs: [
        "The Wazir-e-Azam Apna Ghar Program (also known as Mera Pakistan Mera Ghar or Ghar Ho Tu Apna) is a subsidized housing finance framework launched by the Government of Pakistan in collaboration with the State Bank of Pakistan. The primary objective of the scheme is to enable low- and middle-income Pakistani families to purchase constructed housing units, build houses on owned plots, or acquire land for immediate residential construction through affordable long-term credit."
      ],
      subsections: [
        {
          title: "Core Purpose and Government Vision for Affordable Housing",
          paragraphs: [
            "The program addresses Pakistan's growing residential deficit by incentivizing commercial and Islamic participating banks to extend long-term mortgage credit under standardized, subsidized terms. Under the directive of the State Bank of Pakistan, financial institutions provide risk-sharing mechanisms and subsidized profit rates, eliminating traditional barriers such as exorbitant upfront processing charges or prohibitive bank margins. This structural intervention allows families who previously relied on rented property to transition into homeownership with manageable monthly payments."
          ]
        },
        {
          title: "Federal Apna Ghar Scheme vs. Punjab Apni Chhat Apna Ghar Program",
          paragraphs: [
            "A major point of confusion for applicants in 2026 is distinguishing between the federal Wazir-e-Azam Apna Ghar Program and the provincial Apni Chhat Apna Ghar Program (ACAG) launched by Chief Minister Maryam Nawaz in Punjab. While the federal scheme offers financing up to PKR 10 Million with a 5% subsidized markup rate through major commercial banks via apnaghar.gov.pk, the Punjab ACAG scheme provides completely interest-free loans (0% markup) up to Rs 1.5 Million for plot owners through acag.punjab.gov.pk. Understanding this structural difference ensures applicants choose the correct portal and financial product for their income level and property requirements."
          ],
          links: [
            {
              label: "Wazir-e-Azam Apna Ghar Program 2026 Detailed Breakdown",
              href: "/wazir-e-azam-apna-ghar-program"
            },
            {
              label: "CM Punjab Apni Chhat Apna Ghar Scheme Online Apply",
              href: "/apni-chhat-apna-ghar-scheme-online-apply-2026"
            }
          ]
        }
      ]
    },
    {
      title: "Who is Eligible for the Apna Ghar Housing Scheme?",
      paragraphs: [
        "To qualify for financing under the federal Wazir-e-Azam Apna Ghar Program, applicants must satisfy strict national identity, property ownership, and income standards established by the State Bank of Pakistan."
      ],
      subsections: [
        {
          title: "Citizenship and First-Time Homeowner Requirements",
          paragraphs: [
            "All resident Pakistani citizens holding a valid CNIC and Non-Resident Pakistanis (NRPs) possessing a valid NICOP or Pakistan Origin Card (POC) are eligible to apply. Crucially, the applicant must be a first-time homeowner, meaning neither the primary applicant nor their spouse currently owns a housing unit or residential property in Pakistan. This rule guarantees that government subsidies directly benefit families in genuine need of shelter rather than real estate investors or commercial buyers."
          ]
        },
        {
          title: "Property Size Restrictions and Plot Limits",
          paragraphs: [
            "The scheme enforces specific ceiling limits on physical property dimensions to maintain its focus on low- and middle-cost housing: Houses or independent units up to 10 Marla (approximately 2,720 square feet), and apartments or flats with a covered area up to 1,500 square feet. Land intended for home construction must carry clear, unencumbered title deeds verified by local land revenue authorities."
          ]
        }
      ]
    },
    {
      title: "Key Features: Loan Limits, Subsidized Markup Rates, and Tenures",
      paragraphs: [
        "The federal Wazir-e-Azam Apna Ghar Program offers structured financial parameters designed to reduce early-stage debt service burdens for working-class households."
      ],
      subsections: [
        {
          title: "PKR 10 Million Loan Limit and 90:10 LTV Structure",
          paragraphs: [
            "Borrowers can access maximum housing financing up to PKR 10 Million (1 Crore) depending on their verified income capacity. The program operates on a 90:10 Loan-to-Value Ratio, requiring the borrower to contribute only a 10% down payment (equity share), while participating banks finance the remaining 90% of the total property evaluation or construction cost."
          ]
        },
        {
          title: "Subsidized 5% Fixed Rate vs. Post-10-Year KIBOR Transition",
          paragraphs: [
            "For the first 10 years of the loan tenure, the Government of Pakistan subsidizes the profit margin, locking the borrower's interest rate at a 5% subsidized rate. After the completion of Year 10, the financing rate transitions to a market-based variable structure capped at 1-Year KIBOR + 3%. Borrowers can select a flexible repayment 20-Year financing tenure, which significantly lowers monthly installment obligations compared to standard commercial mortgages."
          ]
        }
      ]
    },
    {
      title: "Federal vs. Punjab Housing Schemes: Side-by-Side Comparison",
      paragraphs: [
        "The matrix below highlights the key differences between the Federal Wazir-e-Azam Apna Ghar Program and the Punjab Provincial Apni Chhat Apna Ghar Program:"
      ],
      table: {
        caption: "Federal vs. Punjab Provincial Housing Schemes Comparison Matrix",
        headers: ["Feature / Metric", "Federal Wazir-e-Azam Apna Ghar Program", "Punjab Apni Chhat Apna Ghar Program (ACAG)"],
        rows: [
          ["Governing Authority", "Government of Pakistan & SBP", "Government of Punjab (PHATA)"],
          ["Maximum Loan Limit", "Up to PKR 10 Million (1 Crore)", "Up to Rs 1.5 Million (15 Lakh)"],
          ["Interest / Markup Rate", "5% Subsidized Rate (First 10 Years)", "0% Riba-Free / Interest-Free"],
          ["Post-Subsidy Rate", "1-Year KIBOR + 3% (Years 11–20)", "Remains 0% interest throughout"],
          ["Maximum Tenure", "Up to 20-Year Financing Tenure", "Up to 7 to 9 Years"],
          ["Official Online Portal", "apnaghar.gov.pk", "acag.punjab.gov.pk"],
          ["Target Audience", "Resident & NRP First-Time Homeowners", "Low-income Punjab residents (PMT Score <= 60)"],
          ["Financing Channels", "Commercial & Islamic Participating Banks", "PHATA & District Administration"]
        ]
      }
    },
    {
      title: "How to Apply Online for the Apna Ghar Housing Scheme?",
      paragraphs: [
        "Applying for home financing under the federal scheme involves a streamlined three-stage process combining digital registration and bank verification."
      ],
      subsections: [
        {
          title: "Step 1: Register on the Official Portal (apnaghar.gov.pk)",
          paragraphs: [
            "Applicants start by visiting the official federal housing portal at apnaghar.gov.pk. Create an online user profile using your CNIC / NICOP number, mobile phone number, and valid email address. Complete the preliminary eligibility questionnaire, providing details regarding your monthly household income, employment status, desired loan amount, and property location."
          ]
        },
        {
          title: "Step 2: Select Participating Commercial or Islamic Bank",
          paragraphs: [
            "During online registration, select your preferred financial institution from the list of participating banks. Leading institutions processing applications include Meezan Bank, Habib Bank Limited (HBL), Bank Alfalah, Bank AL Habib, and the National Bank of Pakistan (NBP). Each bank offers both conventional housing finance and Shariah-compliant Islamic financing options (such as Diminishing Musharakah)."
          ]
        },
        {
          title: "Step 3: Application Review, Verification, and Loan Disbursement",
          paragraphs: [
            "Once the digital application is submitted, the selected bank conducts physical site verification, title deed legal checks, and financial credit scoring. Upon approval, the bank issues a formal intent letter, executes mortgage agreements, and disburses funds directly to the seller or contractor according to construction milestones."
          ]
        }
      ]
    },
    {
      title: "What Documents Are Required for the Application?",
      paragraphs: [
        "Submitting a complete required documents checklist prevents processing delays and accelerates bank underwriting."
      ],
      subsections: [
        {
          title: "Salaried Applicants Document Checklist",
          paragraphs: [
            "Salaried individuals employed in private or public organizations must submit clear copies of valid CNIC / NICOP, salary slips for the last 3 consecutive months, original employment certificate showing designation, verifiable 6-month stamped bank statement, and utility bill copies."
          ]
        },
        {
          title: "Self-Employed and Business Owners Document Checklist",
          paragraphs: [
            "Business owners and self-employed professionals must provide copies of valid CNIC / NICOP, business registration or NTN certificate, 12-month business bank statement, tax returns filed for the last 2 tax years, and property title or allotment documentation."
          ]
        }
      ]
    },
    {
      title: "Monthly Installment Calculation & Repayment Structure",
      paragraphs: [
        "Understanding how monthly payments are structured helps families budget effectively over a 20-Year financing tenure."
      ],
      subsections: [
        {
          title: "Estimated Monthly Payment Breakdown",
          paragraphs: [
            "Because the Government of Pakistan subsidizes the initial markup to a 5% subsidized rate, monthly repayments remain significantly lower than market rates for the first decade. For a PKR 2 Million Loan, estimated monthly payment ranges between Rs 13,000 – Rs 15,000. For a PKR 5 Million Loan, estimated monthly payment ranges between Rs 32,000 – Rs 35,000. For Punjab ACAG (Rs 1.5M Loan), interest-free monthly installment is capped at approximately Rs 14,000."
          ]
        },
        {
          title: "Zero Prepayment Penalty and Fee Waivers",
          paragraphs: [
            "To protect low-income borrowers, the State Bank of Pakistan mandates strict consumer-friendly bank terms across all participating banks. Standard bank processing charges are waived, and borrowers can make early partial repayments or settle the full loan balance without paying early settlement fines."
          ]
        }
      ]
    }
  ],
  faqs: [
    {
      question: "Is the Apna Ghar Housing Scheme interest-free?",
      answer: "The Federal Wazir-e-Azam Apna Ghar Program is not completely interest-free; it offers a highly concessional 5% subsidized markup rate for the first 10 years, subsidized by the Government of Pakistan. Islamic participating banks offer Shariah-compliant models. For a 0% interest-free loan up to Rs 1.5 Million, apply for the Punjab Apni Chhat Apna Ghar Program."
    },
    {
      question: "How do I apply online for the Apna Ghar Housing Scheme?",
      answer: "You can apply online by registering your CNIC on the official federal portal at apnaghar.gov.pk. Fill out the personal and financial details, select your preferred bank (such as Meezan Bank or HBL), and upload your income proof."
    },
    {
      question: "What is the maximum loan amount under the Federal Apna Ghar Scheme?",
      answer: "The Federal scheme offers a maximum financing limit of PKR 10 Million (1 Crore) under a 90:10 Loan-to-Value Ratio, allowing applicants to finance up to 90% of their property value with a 10% personal equity contribution."
    },
    {
      question: "What is the difference between Federal Apna Ghar and Punjab Apni Chhat Apna Ghar?",
      answer: "The Federal scheme provides up to PKR 10 Million at a 5% subsidized rate across all provinces via commercial banks (apnaghar.gov.pk). The Punjab provincial scheme provides up to Rs 1.5 Million interest-free (0% markup) specifically for plot owners in Punjab holding a PMT Score <= 60 via acag.punjab.gov.pk."
    },
    {
      question: "Can Non-Resident Pakistanis (NRPs) apply for the scheme?",
      answer: "Yes, Non-Resident Pakistanis holding a valid NICOP or Pakistan Origin Card (POC) are fully eligible to apply for the federal housing scheme through Roshan Digital Accounts or participating bank portals."
    },
    {
      question: "What property sizes are eligible for financing?",
      answer: "Eligible residential properties include houses or plots up to 10 Marla (2,720 sq ft) and apartments/flats with a covered area of up to 1,500 sq ft."
    },
    {
      question: "What happens to the markup rate after the first 10 years?",
      answer: "After the initial 10-year subsidized period at 5% subsidized rate, the financing markup rate transitions to a market-linked floating rate capped at 1-Year KIBOR + 3% for the remaining loan tenure up to 20 Years."
    },
    {
      question: "Are there any processing fees or hidden charges?",
      answer: "No, under SBP guidelines, participating banks offer zero processing fee waivers and levy no prepayment or early settlement penalties on borrowers under this program."
    },
    {
      question: "What is the official helpline number for the Apna Ghar scheme?",
      answer: "For federal scheme inquiries, call the central helpline at 111-742-111. For the Punjab Apni Chhat Apna Ghar program, contact the toll-free helpline at 0800-09100."
    },
    {
      question: "What documents are required to prove income?",
      answer: "Salaried applicants must provide their last 3 months' salary slips and a 6-month stamped bank statement. Self-employed individuals must provide a 12-month bank statement, business proof, and tax returns for the last 2 years."
    }
  ],
  officialLinks: [
    {
      label: "Official Federal Apna Ghar Housing Portal",
      href: "https://apnaghar.gov.pk"
    },
    {
      label: "State Bank of Pakistan Subsidized Housing Guidelines",
      href: "https://www.sbp.org.pk"
    }
  ]
};

let articleStr = JSON.stringify(articleObject, null, 2);
articleStr = articleStr.replace('"author": "CONTRIBUTOR_PLACEHOLDER"', 'author: contributors.muhammadSalman');

const articlesMarker = 'export const articles: Article[] = [';
const insertPos = content.indexOf(articlesMarker);

if (insertPos === -1) {
  console.error('Could not find articles marker in content.ts');
  process.exit(1);
}

content = content.slice(0, insertPos + articlesMarker.length) + '\n  ' + articleStr + ',\n' + content.slice(insertPos + articlesMarker.length);

// Bidirectional internal links: append this slug to each related article's relatedSlugs array.
const relatedTargets = [
  'wazir-e-azam-apna-ghar-program',
  'apni-chhat-apna-ghar-scheme-online-apply-2026',
  'apni-zameen-apna-ghar-balloting-result-2026',
  'cm-punjab-apni-chhat-apna-ghar-loan-installment-tracking'
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
