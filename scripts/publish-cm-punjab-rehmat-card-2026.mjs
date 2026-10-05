import fs from 'fs';
import path from 'path';

const root = process.cwd();
const contentFilePath = path.resolve(root, 'src/data/content.ts');
let content = fs.readFileSync(contentFilePath, 'utf8');

const slug = 'cm-punjab-rehmat-card-2026';

if (content.includes(`slug: "${slug}"`)) {
  console.log(`Article with slug "${slug}" already exists in content.ts!`);
  process.exit(0);
}

const articleObject = {
  slug: slug,
  relatedSlugs: [
    "provincial-regional-schemes",
    "cm-punjab-himmat-card-online-apply-2026",
    "cm-punjab-dhee-rani-program-2026-online-apply",
    "bisp-benazir-kafaalat-8171-check"
  ],
  title: "CM Punjab Rehmat Card 2026: Online Registration, Eligibility & Status Check",
  excerpt: "The CM Punjab Rehmat Card 2026 provides Rs. 100,000 financial aid to eligible widows and parentless orphans across Punjab. Learn eligibility criteria, required documents, online application steps at rahmatcard.punjab.gov.pk, and status tracking via CNIC or 1077 helpline.",
  showExcerpt: true,
  metaTitle: "CM Punjab Rehmat Card 2026: Apply Online & Status Check (Rs. 100,000)",
  metaDescription: "Learn how to apply online for the CM Punjab Rehmat Card 2026. Step-by-step guide for widows and orphans to check eligibility, track status, and receive Rs. 100,000 aid.",
  focusKeyword: "cm punjab rehmat card 2026",
  lsiKeywords: [
    "cm punjab rehmat card 2026 online apply",
    "cm punjab rahmat card status check by cnic",
    "rehmat card eligibility criteria 100000",
    "cm punjab rahmat card app download",
    "bewa sahara card punjab zakat 2026",
    "pser registration for rehmat card 2026",
    "cm punjab rehmat card helpline 1077"
  ],
  entities: [
    "CM Punjab Rehmat Card",
    "Maryam Nawaz Sharif",
    "Government of Punjab",
    "Zakat & Ushr Department",
    "Punjab Information Technology Board",
    "Punjab Socio-Economic Registry",
    "NADRA"
  ],
  primaryCategory: "Provincial Schemes",
  categorySlugs: [
    "provincial-schemes",
    "8171"
  ],
  date: "October 5, 2026",
  publishedDate: "October 5, 2026",
  lastChecked: "October 5, 2026",
  readTime: "8 min read",
  image: "/images/cm-punjab-rehmat-card-2026.jpg",
  imageAlt: "CM Punjab Rehmat Card 2026 Rs 100,000 Financial Grant Eligibility and Online Registration Guide",
  author: "CONTRIBUTOR_PLACEHOLDER",
  officialLinks: [
    { label: "Official Rehmat Card Web Portal", href: "https://rahmatcard.punjab.gov.pk/" },
    { label: "Zakat & Ushr Department Punjab", href: "https://zakat.punjab.gov.pk/" },
    { label: "PSER Punjab Registration Portal", href: "https://pser.punjab.gov.pk/" }
  ],
  sections: [
    {
      title: "What Is the CM Punjab Rehmat Card 2026?",
      paragraphs: [
        "The CM Punjab Rehmat Card (officially registered as the CM Punjab Rahmat Card) is a targeted social protection initiative created by the Government of Punjab under the leadership of Chief Minister Maryam Nawaz Sharif. Administered directly through the Zakat & Ushr Department in partnership with the Punjab Information Technology Board (PITB), the program is designed to deliver immediate economic relief to vulnerable citizens who lack a primary financial provider.",
        "Unlike recurring cash stipend schemes that offer small monthly payments, the Rehmat Card program focuses on empowering marginalized families through substantial financial support. By establishing a digital verification framework, the provincial government ensures that funds reach deserving beneficiaries directly without political interference or intermediary delays."
      ],
      subsections: [
        {
          title: "Core Objectives of the Rahmat Card Welfare Program",
          paragraphs: [
            "The primary objective of the Rehmat Card scheme is to restore financial dignity and stability to low-income households headed by widows or caring for double-parent orphans. Inflation and rising cost-of-living challenges across Pakistan have severely affected vulnerable populations who fall outside standard employment networks.",
            "Through this scheme, the Punjab government addresses acute poverty by linking social protection directly with verified demographic records. The initiative also aims to streamline Zakat distribution, ensuring full compliance with Islamic Shariah guidelines while leveraging modern digital technology for transparent administration."
          ]
        },
        {
          title: "Key Financial Aid Amounts and Payment Distribution Methods",
          paragraphs: [
            "Approved beneficiaries under the CM Punjab Rehmat Card program receive a financial grant of PKR 100,000 (Rs. 1 Lakh). This amount is distributed as a dedicated financial assistance allocation meant to cover emergency living expenses, shelter, healthcare, and educational needs for dependent children.",
            "To guarantee zero leakage and eliminate fraudulent collection claims, payment distribution is executed through electronic channels. Beneficiaries receive their funds directly via verified mobile digital wallets such as JazzCash or through biometric withdrawal points at designated partner banks across all 36 districts of Punjab."
          ]
        }
      ]
    },
    {
      title: "Who Is Eligible for the CM Punjab Rehmat Card?",
      paragraphs: [
        "Eligibility for the Rehmat Card is strictly governed by transparent socio-economic criteria established by the Zakat & Ushr Department and cross-checked against official state registries."
      ],
      table: {
        caption: "CM Punjab Rehmat Card Eligibility & Document Verification Matrix",
        headers: ["Applicant Category", "Key Eligibility Requirement", "Primary Verification Source"],
        rows: [
          ["Widows (Bewa)", "Verified widowhood status on CNIC; Zakat-eligible household", "NADRA CNIC & PSER Database"],
          ["Parentless Orphans (Yateem)", "Children who have lost both parents; under 18 years of age", "Deceased Parents' Death Certificates & NADRA B-Form"],
          ["Residency", "Permanent residency in Punjab province", "Original NADRA CNIC / Domicile"],
          ["Financial Threshold", "Must meet Zakat eligibility criteria; non-Sahib-e-Nisab", "PSER Poverty Score & Local Survey"]
        ]
      },
      subsections: [
        {
          title: "Eligibility Requirements for Widows (Bewa)",
          paragraphs: [
            "To qualify as an eligible widow under the Rehmat Card scheme, the applicant must be a citizen of Pakistan with permanent residency in Punjab. The applicant must be officially registered as a widow in the National Database and Registration Authority (NADRA) records, meaning her marital status on her Computerized National Identity Card (CNIC) must reflect her widowed status.",
            "Furthermore, the applicant's household must be classified as needy and eligible for Zakat support under Islamic principles. The household income and assets are evaluated using data from the Punjab Socio-Economic Registry (PSER) to confirm that the family lives below the state poverty baseline."
          ]
        },
        {
          title: "Eligibility Requirements for Parentless Orphans (Yateem)",
          paragraphs: [
            "The program extends dedicated coverage to double-parent orphans—children who have tragically lost both their mother and father. To apply on behalf of an orphan child, the legal guardian must present valid proof of parentage and death certificates for both deceased parents issued by Union Councils or NADRA.",
            "The child must be registered on an official NADRA B-Form (Child Registration Certificate). The guardian must also demonstrate that the orphan family lacks sustainable financial means and requires government welfare to ensure basic upkeep and schooling."
          ]
        },
        {
          title: "Who Is Ineligible? (Exclusion Criteria & Sahib-e-Nisab Rules)",
          paragraphs: [
            "The Government of Punjab enforces strict exclusion rules to prevent misuse of Zakat welfare resources. The following categories are explicitly disqualified from receiving the Rehmat Card grant:",
            "1. Government Employees & Pensioners: Serving or retired employees of federal, provincial, or semi-government organizations, as well as their direct dependents, cannot apply.\n2. Sahib-e-Nisab Individuals: Anyone possessing gold, silver, commercial property, or savings exceeding the prescribed Islamic Nisab threshold is strictly ineligible.\n3. Habitual Beggars & Unverified Applicants: Individuals whose identity details cannot be verified through NADRA or PSER are excluded.\n4. Beneficiaries of Duplicate Regular Grants: Households receiving full parallel provincial Zakat grants that exceed allowable welfare thresholds."
          ]
        }
      ]
    },
    {
      title: "How to Apply Online for the CM Punjab Rehmat Card 2026?",
      paragraphs: [
        "Applying for the CM Punjab Rehmat Card is completely free of cost. The Government of Punjab has established multiple digital and physical registration channels to accommodate urban and rural applicants alike."
      ],
      subsections: [
        {
          title: "Method 1: Online Registration via Official Web Portal",
          paragraphs: [
            "The official web portal rahmatcard.punjab.gov.pk serves as the primary online platform for registration. Applicants can complete their application by following these steps:",
            "1. Open your internet browser and navigate to the official portal at rahmatcard.punjab.gov.pk.\n2. Click on the New Registration / Apply Online button on the homepage.\n3. Input your 13-digit NADRA CNIC number without hyphens, along with an active mobile phone number registered in your own name.\n4. Enter the One-Time Password (OTP) sent to your mobile phone to verify your account session.\n5. Fill in the required socio-economic details, including family member counts, household address, and PSER survey reference number.\n6. Upload scanned copies of required documents (CNIC, death certificates, B-Form).\n7. Review your information carefully and click Submit Application. Save the displayed tracking reference number for future checks."
          ]
        },
        {
          title: "Method 2: Registration via the CM Punjab Rahmat Card App",
          paragraphs: [
            "For applicants using smartphones, the Punjab Information Technology Board (PITB) developed the dedicated CM Punjab Rahmat Card mobile application, available on the Google Play Store.",
            "After installing the app, users create a profile using their CNIC and mobile number. The app features a simplified user interface available in Urdu and English. Applicants can capture document photos directly using their smartphone camera and upload them to the central verification server instantly."
          ]
        },
        {
          title: "Method 3: Registration through PSER & Local Zakat Offices",
          paragraphs: [
            "Applicants who face technical barriers or lack internet access can complete their registration through physical support channels across Punjab:",
            "- PSER Registration Counters: Visit the nearest Assistant Commissioner (AC) office or dedicated PSER center in your tehsil to complete your household socio-economic survey.\n- District Zakat Committees: Visit your local District Zakat & Ushr office, where designated welfare officers assist widows and guardians in submitting online applications directly into the system."
          ]
        }
      ]
    },
    {
      title: "Required Documents for CM Punjab Rehmat Card Application",
      paragraphs: [
        "Preparing the correct documentation before starting the application process prevents delays and administrative rejections. Ensure all documents are clear, legible, and updated at NADRA:",
        "- Original NADRA CNIC: Valid Computerized National Identity Card of the widow or guardian, displaying updated marital/legal status.\n- Official Death Certificate(s): Computerized death certificate of the deceased husband (for widow applications) or death certificates of both parents (for parentless orphan applications) issued by NADRA or the local Union Council.\n- NADRA B-Form (CRC): Official Child Registration Certificate listing all dependent orphan children under 18 years of age.\n- Registered Mobile Number: SIM card registered legally under the applicant's own CNIC to receive official SMS notifications and wallet verification codes.\n- Proof of Residency: Domicile certificate of Punjab or utility bill establishing permanent residence within the province."
      ]
    },
    {
      title: "How to Check CM Punjab Rehmat Card Status Online?",
      paragraphs: [
        "Once an application is submitted, candidates can monitor their verification progress online using official tracking portals."
      ],
      subsections: [
        {
          title: "Tracking Status by CNIC on rahmatcard.punjab.gov.pk",
          paragraphs: [
            "Tracking application status online requires only a valid CNIC number:",
            "1. Visit the portal at rahmatcard.punjab.gov.pk.\n2. Click on the Track Status / Check Application Status tab.\n3. Enter the 13-digit CNIC number of the applicant in the designated field.\n4. Click Check Status.\n5. The system will display your current status: Under Review, Verified/Approved, Action Required, or Rejected."
          ]
        },
        {
          title: "Checking Application Status via Helpline 1077",
          paragraphs: [
            "Applicants who cannot check their status online can dial the official Punjab Government helpline at 1077.",
            "When calling 1077, keep your CNIC number and application tracking ID ready. Support representatives verify caller credentials and provide real-time updates regarding application approval, PSER audit status, or payment release schedules."
          ]
        }
      ]
    },
    {
      title: "Troubleshooting Common Rehmat Card Application Issues",
      paragraphs: [
        "During the verification phase, applicants may encounter technical or administrative errors. Understanding how to resolve these issues ensures timely grant approval."
      ],
      subsections: [
        {
          title: "Biometric Verification Failures & NADRA Record Mismatches",
          paragraphs: [
            "If the portal displays a 'NADRA Mismatch' error, it typically means the applicant's marital status is not updated in the central registry. Widows must visit the nearest NADRA Registration Center (NRC) with their original marital contract and husband's death certificate to update their CNIC status to widowed before re-applying.",
            "If biometric verification fails during digital wallet payout at retail centers, beneficiaries can request re-verification using NADRA e-Sahulat counters or visit designated bank branches for direct account verification."
          ]
        },
        {
          title: "Pending PSER Survey Status & Wallet Transfer Delays",
          paragraphs: [
            "Applications flagged with 'PSER Verification Pending' indicate that the household's poverty survey record is either missing or incomplete in the provincial database. Applicants must visit pser.punjab.gov.pk or visit their local tehsil PSER counter to complete the household survey.",
            "If your status shows 'Approved' but payment is delayed, verify that your mobile wallet account (e.g., JazzCash) is active, fully upgraded to Level-1 biometric status, and registered under the exact CNIC used during application."
          ]
        }
      ]
    },
    {
      title: "CM Punjab Rehmat Card 2026 Phase 2 Updates",
      paragraphs: [
        "Following the initial disbursement cycle, Chief Minister Maryam Nawaz Sharif announced plans to expand the program's scope. Phase 2 of the CM Punjab Rehmat Card is scheduled to launch in late 2026 to onboard newly registered eligible widows and orphans across all divisions of Punjab.",
        "Applicants who missed the initial window or whose PSER surveys were pending are encouraged to update their NADRA records and complete PSER registration promptly to ensure smooth processing when Phase 2 enrollment opens."
      ]
    }
  ],
  faqs: [
    {
      question: "What is the CM Punjab Rehmat Card 2026?",
      answer: "The CM Punjab Rehmat Card 2026 is a specialized social welfare program launched by Chief Minister Maryam Nawaz Sharif through the Zakat & Ushr Department. It provides a financial grant of PKR 100,000 to deserving widows and parentless orphans across Punjab."
    },
    {
      question: "How much financial assistance is provided under the Rehmat Card?",
      answer: "Eligible beneficiaries receive a grant of PKR 100,000 (Rs. 1 Lakh). Funds are transferred directly to verified digital wallets or biometric bank accounts to ensure transparent delivery."
    },
    {
      question: "Who is eligible to apply for the CM Punjab Rahmat Card?",
      answer: "Eligible applicants must be permanent residents of Punjab who are deserving widows with CNIC status updated at NADRA or double-parent orphans (lacking both parents) with valid B-Forms. Applicants must also meet Zakat eligibility criteria and cannot be government employees or pensioners."
    },
    {
      question: "What is the official website for Rehmat Card online registration?",
      answer: "The official website for online application and status tracking is rahmatcard.punjab.gov.pk. Applicants can also use the official CM Punjab Rahmat Card mobile app developed by PITB."
    },
    {
      question: "Are government employees or pensioners eligible for the Rehmat Card?",
      answer: "No, government employees, government pensioners, and individuals categorized as Sahib-e-Nisab (financially self-sufficient) are strictly excluded from receiving Rehmat Card assistance."
    },
    {
      question: "What is the official helpline number for Rehmat Card queries?",
      answer: "The official government helpline number for the CM Punjab Rehmat Card is 1077. Applicants can call 1077 for assistance regarding application status, portal issues, and eligibility criteria."
    },
    {
      question: "Is PSER registration required before applying for the Rehmat Card?",
      answer: "Yes, household verification via the Punjab Socio-Economic Registry (PSER) database is mandatory. Applicants should ensure their household profile is complete on pser.punjab.gov.pk."
    },
    {
      question: "What documents are required for orphan children to apply?",
      answer: "Orphan applicants require a valid NADRA B-Form, official death certificates for both mother and father, and the guardian's verified CNIC and active mobile number."
    },
    {
      question: "How are Rehmat Card payments disbursed to approved applicants?",
      answer: "Approved grant payments of PKR 100,000 are disbursed digitally through registered mobile wallets (such as JazzCash) or biometric verification centers across Punjab."
    },
    {
      question: "When does Phase 2 registration open for the Rehmat Card in 2026?",
      answer: "Phase 2 registration and portal reopening for the CM Punjab Rehmat Card are scheduled for late 2026 following the completion of initial Phase 1 disbursements."
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
  "provincial-regional-schemes",
  "cm-punjab-himmat-card-online-apply-2026",
  "cm-punjab-dhee-rani-program-2026-online-apply",
  "bisp-benazir-kafaalat-8171-check"
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
