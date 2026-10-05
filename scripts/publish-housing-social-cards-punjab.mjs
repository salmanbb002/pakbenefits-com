import fs from 'fs';
import path from 'path';

const contentFilePath = path.resolve('src/data/content.ts');
let content = fs.readFileSync(contentFilePath, 'utf8');

const slug = "housing-social-cards-punjab";

if (content.includes(`slug: "${slug}"`)) {
  console.log(`Article with slug "${slug}" already exists in content.ts!`);
  process.exit(0);
}

const articleObjectString = `  {
    slug: "${slug}",
    title: "Housing & Social Cards (Punjab) 2026: Complete List, Eligibility & Online Apply Guide",
    excerpt: "Complete guide to Punjab Housing & Social Cards 2026 (Apni Chhat Apna Ghar, Himmat Card, Kisan Card, Mazdoor Card). Learn eligibility, PSER status check & online apply steps.",
    showExcerpt: true,
    metaTitle: "Housing & Social Cards (Punjab) 2026: Complete List & Apply Guide",
    metaDescription: "Complete guide to Punjab Housing & Social Cards 2026 (Apni Chhat Apna Ghar, Himmat Card, Kisan Card, Mazdoor Card). Learn eligibility, PSER status check & online apply steps.",
    focusKeyword: "housing & social cards (punjab)",
    lsiKeywords: [
      "apni chhat apna ghar registration acag punjab gov pk",
      "himmat card apply online bop",
      "kissan card online check 8070",
      "punjab socio economic registry pser portal login",
      "maryam nawaz social welfare card list 2026",
      "mazdoor card pessi benefits"
    ],
    entities: [
      "Government of Punjab",
      "Maryam Nawaz Sharif",
      "Apni Chhat Apna Ghar",
      "Himmat Card",
      "Punjab Socio-Economic Registry",
      "Punjab Kisan Card",
      "PESSI Mazdoor Card",
      "Bank of Punjab",
      "Punjab Social Protection Authority",
      "Dhee Rani Program",
      "Honahar Scholarship Card"
    ],
    primaryCategory: "housing-welfare-schemes",
    categorySlugs: [
      "housing-welfare-schemes",
      "provincial-regional-schemes",
      "other-schemes"
    ],
    date: "October 5, 2026",
    publishedDate: "October 5, 2026",
    lastChecked: "October 5, 2026",
    readTime: "7 min read",
    image: "/images/housing-and-remittance-initiatives.jpg",
    imageAlt: "Housing and Social Cards Punjab 2026 Guide",
    author: contributors.muhammadSalman,
    officialLinks: [
      { label: "Punjab Socio-Economic Registry (PSER) Official Portal", href: "https://pser.punjab.gov.pk/" },
      { label: "Apni Chhat Apna Ghar (ACAG) Housing Loan Portal", href: "https://acag.punjab.gov.pk/" },
      { label: "Punjab Social Protection Authority (PSPA) Official Portal", href: "https://pspa.punjab.gov.pk/" },
      { label: "Disability Management Information System (DPMIS) Himmat Card Portal", href: "https://dpmis.punjab.gov.pk/" }
    ],
    sections: [
      {
        title: "What Are Punjab Housing & Social Cards?",
        paragraphs: [
          "Punjab Housing and Social Cards are provincial social protection initiatives established by the Government of Punjab under Chief Minister Maryam Nawaz Sharif to provide structured financial relief, affordable housing loans, agricultural subsidies, and social security payments. Unlike short-term emergency cash hand-outs, these specialized cards deliver direct electronic disbursements, interest-free credit, and verified welfare benefits through official banking channels and state registries."
        ],
        subsections: [
          {
            title: "Role of Punjab Socio-Economic Registry (PSER) & PSPA",
            paragraphs: [
              "The Punjab Socio-Economic Registry (PSER) operates as the primary digital database managed by the Punjab Social Protection Authority (PSPA) to determine household eligibility for all provincial welfare cards. By evaluating household demographics, monthly earnings, asset holdings, and utility consumption, PSER assigns each family a Proxy Means Test (PMT) score. A valid PSER survey registration on pser.punjab.gov.pk is mandatory before applying for any housing loan or social welfare card in Punjab."
            ]
          }
        ],
        links: [
          { label: "PSER Survey Online Registration 2026", href: "/pser-survey-registration/" },
          { label: "Apni Chhat Apna Ghar Scheme 2026 Guide", href: "/apni-chhat-apna-ghar-scheme-online-apply-2026/" },
          { label: "CM Punjab Welfare Schemes Complete List", href: "/provincial-regional-schemes/" }
        ]
      },
      {
        title: "Punjab Housing Schemes: Apni Chhat Apna Ghar (ACAG) Details",
        paragraphs: [
          "The Apni Chhat Apna Ghar (ACAG) program is Punjab's flagship housing initiative designed to address shelter deprivation by offering interest-free housing loans to low- and middle-income families. Administered directly through dedicated district housing committees and state-backed financial partners, ACAG eliminates commercial bank interest burdens for first-time homeowners constructing residences across all 36 districts of Punjab."
        ],
        subsections: [
          {
            title: "Loan Amount, Repayment Terms & Property Criteria",
            paragraphs: [
              "Under the 2026 framework of Apni Chhat Apna Ghar, eligible applicants receive interest-free loans up to PKR 1.5 million for house construction, alongside sub-schemes offering PKR 500,000 for roof repairs and PKR 1.0 million for home extension. The loan features a flexible 9-year repayment plan with monthly installments ranging between PKR 4,700 and PKR 9,300, without any hidden service charges or markup. Urban applicants must own a plot up to 5 Marlas, while rural applicants are eligible with plots up to 10 Marlas in designated residential areas."
            ]
          },
          {
            title: "How to Apply Online for ACAG Housing Loan (acag.punjab.gov.pk)",
            paragraphs: [
              "Applicants can complete the online application process for Apni Chhat Apna Ghar by accessing the official portal acag.punjab.gov.pk. The steps require creating an account using a 13-digit CNIC number, submitting verified land ownership documents (Fard Malkiyat), providing income details, and selecting the desired loan structure. Once submitted, district housing officers verify property title deeds within 14 working days before loan approval and initial installment release via Bank of Punjab."
            ]
          }
        ]
      },
      {
        title: "Punjab Social Welfare Cards 2026: Complete Breakdown",
        paragraphs: [
          "Punjab's social protection model deploys specialized welfare cards customized for targeted demographic segments including vulnerable citizens, smallholder farmers, industrial laborers, and low-income families. Each card operates on a dedicated verification mechanism, ensuring transparent quarterly disbursements and subsidized essential goods across the province."
        ],
        subsections: [
          {
            title: "CM Punjab Himmat Card for Persons with Disabilities (PWDs)",
            paragraphs: [
              "The Himmat Card provides a quarterly financial stipend of PKR 10,500 to certified Persons with Disabilities (PWDs) who are evaluated as unfit for employment by the Social Welfare Department. Payments are disbursed directly to beneficiary accounts through Bank of Punjab (BOP) ATMs using biometric verification. Applicants must hold a Special CNIC with a wheelchair logo, maintain a PSER PMT score of 45 or below, and maintain active registration on the Disability Management Information System (dpmis.punjab.gov.pk)."
            ]
          },
          {
            title: "CM Punjab Kisan Card for Agricultural Support",
            paragraphs: [
              "The Punjab Kisan Card delivers interest-free agricultural credit ranging from PKR 30,000 to PKR 150,000 per crop cycle for farmers cultivating up to 12.5 acres of land. Farmers use the card at authorized dealers to purchase quality seeds, fertilizers, and crop protection chemicals at subsidized prices. Landowners and tenant farmers can check their eligibility by sending their 13-digit CNIC number via SMS to 8070 or visiting their local Agriculture Department office."
            ]
          },
          {
            title: "CM Punjab Mazdoor Card & Rashan Card",
            paragraphs: [
              "The PESSI Mazdoor Card issued by the Punjab Employees' Social Security Institution serves as a smart identity and healthcare debit card for industrial and registered domestic workers. It grants full medical coverage at social security hospitals and dispensaries, alongside access to the Maryam Nawaz Rashan Card program which provides PKR 3,000 monthly grocery relief. Employers can register eligible workers through the PESSI online portal or the official Domestic Workers mobile application."
            ]
          },
          {
            title: "Dhee Rani & Honahar Scholarship Programs",
            paragraphs: [
              "The Dhee Rani Program supports deserving low-income families by organizing collective marriage ceremonies and providing a PKR 100,000 financial grant alongside essential household items to newly married brides. Concurrently, the Honahar Scholarship Card provides 100% tuition coverage for bright undergraduate students enrolled in public universities and colleges across Punjab. Registration for both initiatives remains open on cmp.punjab.gov.pk and honaharscholarship.punjab.gov.pk."
            ]
          }
        ]
      },
      {
        title: "Step-by-Step Guide: How to Apply Online & Check Status by CNIC",
        paragraphs: [
          "Citizens residing in Punjab can complete card applications and verify eligibility status online without visiting government offices or paying third-party agent fees."
        ],
        subsections: [
          {
            title: "Registering on PSER Portal (pser.punjab.gov.pk)",
            paragraphs: [
              "Step 1: Navigate to the official Punjab Socio-Economic Registry web portal at pser.punjab.gov.pk. Step 2: Click on 'Register New Account' and enter your full name, mobile number, district, and 13-digit CNIC number. Step 3: Log into your dashboard using the SMS verification OTP sent to your registered mobile SIM. Step 4: Complete the multi-step household survey by filling in family member details, monthly household income, housing condition, and utility bill consumer numbers. Step 5: Review the entered data and submit your application to generate a unique PSER Registration Tracking ID."
            ]
          },
          {
            title: "Checking Card Status via SMS & Helplines",
            paragraphs: [
              "Applicants can check their eligibility status for provincial cards by sending their 13-digit CNIC number without hyphens via SMS to 8070 for Kisan Card and agricultural packages. For Apni Chhat Apna Ghar housing loan inquiries, citizens can contact the official toll-free helpline at 0800-09100. For social protection and disability card assistance, the Punjab Social Protection Authority helpline is reachable at 1221."
            ]
          }
        ]
      },
      {
        title: "Key Differences: Punjab Social Cards vs. Federal BISP 8171",
        paragraphs: [
          "It is vital to distinguish Punjab provincial social protection schemes from the federal Benazir Income Support Programme (BISP). (1) Jurisdictional Scope: Punjab Cards apply exclusively to Punjab province, while BISP covers all Pakistan. (2) Governing Body: Managed by Punjab Government / PSPA vs. Federal BISP Board. (3) Verification: PSER portal (pser.punjab.gov.pk) & 8070 SMS vs. 8171 portal & 8171 SMS. (4) Primary Cards: ACAG, Himmat Card, Kisan Card, Mazdoor Card vs. BISP Kafalat & Taleemi Wazaif. (5) Disbursement: Bank of Punjab (BOP) ATMs vs. HBL / Bank Alfalah retail agents."
        ]
      },
      {
        title: "Common Problems & How to Solve PSER Verification Delays",
        paragraphs: [
          "Applicants encountering 'CNIC Not Registered' or 'PMT Score Exceeds Limit' status errors should verify that their NADRA record correctly reflects their marital and family status. If household data updated recently, applicants should visit their local Assistant Commissioner (AC) office or District Social Welfare Office to request a physical PSER re-survey. Always ensure mobile SIMs are registered under the applicant's own CNIC to receive official SMS security PINs."
        ]
      }
    ],
    faqs: [
      {
        question: "What is the official portal to apply for Apni Chhat Apna Ghar housing scheme?",
        answer: "The official portal for the Apni Chhat Apna Ghar scheme is acag.punjab.gov.pk. Applicants can log in using their 13-digit CNIC number to upload property ownership documents and track loan status."
      },
      {
        question: "How much quarterly financial assistance does the Himmat Card provide?",
        answer: "The Himmat Card provides a quarterly cash stipend of PKR 10,500 to eligible Persons with Disabilities in Punjab. Disbursements are made through Bank of Punjab ATMs using biometric verification."
      },
      {
        question: "How can farmers check their eligibility for the Punjab Kisan Card?",
        answer: "Farmers can check their Kisan Card eligibility by sending their 13-digit CNIC number via SMS to 8070. Alternatively, status details can be verified through local Tehsil Agriculture Department offices."
      },
      {
        question: "What plot sizes qualify for the Apni Chhat Apna Ghar housing loan?",
        answer: "Urban residential plots up to 5 Marlas and rural plots up to 10 Marlas qualify for the interest-free housing loan. Applicants must hold clear legal land title (Fard Malkiyat)."
      },
      {
        question: "What is the maximum loan amount under Apni Chhat Apna Ghar?",
        answer: "The maximum interest-free housing construction loan amount under Apni Chhat Apna Ghar is PKR 1.5 million. Repayment is structured over a 9-year tenure with monthly installments between PKR 4,700 and PKR 9,300."
      },
      {
        question: "Is PSER registration required to qualify for Punjab welfare cards?",
        answer: "Yes, PSER registration on pser.punjab.gov.pk is compulsory for all Punjab welfare cards. The registry evaluates household poverty levels and calculates PMT scores required for eligibility."
      },
      {
        question: "How do industrial workers register for the PESSI Mazdoor Card?",
        answer: "Industrial workers can register for the Mazdoor Card through their registered employers on the PESSI online portal. Domestic workers can apply directly via the official Domestic Workers mobile app."
      },
      {
        question: "What assistance does the Dhee Rani Program offer?",
        answer: "The Dhee Rani Program provides PKR 100,000 cash grant, essential household dowry items, and formal collective marriage arrangements for deserving brides in Punjab."
      },
      {
        question: "What is the difference between SMS shortcode 8070 and 8171?",
        answer: "SMS 8070 is the official Punjab provincial government shortcode for Kisan Card and provincial relief schemes. SMS 8171 belongs to the federal Benazir Income Support Programme (BISP)."
      },
      {
        question: "Are there any application fees for Punjab housing and social security cards?",
        answer: "No, all government card applications and PSER survey registrations are completely free. Citizens should never pay agent fees or unauthorized service charges to third parties."
      }
    ],
    relatedSlugs: [
      "apni-chhat-apna-ghar-scheme-online-apply-2026",
      "housing-and-remittance-initiatives",
      "cm-punjab-rehmat-card-2026",
      "housing-welfare-schemes",
      "provincial-regional-schemes"
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
  "apni-chhat-apna-ghar-scheme-online-apply-2026",
  "housing-and-remittance-initiatives",
  "cm-punjab-rehmat-card-2026",
  "housing-welfare-schemes",
  "provincial-regional-schemes"
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
console.log(`Successfully published "${slug}" into content.ts and established internal links with ${linkedCount} related articles.`);
