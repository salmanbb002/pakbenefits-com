import fs from 'fs';
import path from 'path';

const contentFilePath = path.resolve('src/data/content.ts');
let content = fs.readFileSync(contentFilePath, 'utf8');

const slug = "punjab-solar-housing-updates-2026";

if (content.includes(`slug: "${slug}"`)) {
  console.log(`Article with slug "${slug}" already exists in content.ts!`);
  process.exit(0);
}

const articleObjectString = `  {
    slug: "${slug}",
    title: "Punjab Solar & Housing Updates 2026: Schemes Status, Eligibility & Online Check",
    excerpt: "Get verified October 2026 Punjab Solar & Housing updates. Check CM Free Solar Panel balloting status, Apni Chhat Apna Ghar interest-free loans & official portals.",
    showExcerpt: true,
    metaTitle: "Punjab Solar & Housing Updates (October 2026): Status & Loan Details",
    metaDescription: "Get verified October 2026 Punjab Solar & Housing updates. Check CM Free Solar Panel balloting status, Apni Chhat Apna Ghar interest-free loans & official portals.",
    focusKeyword: "punjab solar & housing updates",
    lsiKeywords: [
      "cm punjab solar panel scheme 2026 online apply",
      "apni chhat apna ghar scheme loan status check by cnic",
      "cmsolarscheme punjab gov pk result check",
      "punjab solar tubewell scheme 80 subsidy",
      "apna ghar mehfooz ghar renovation loan",
      "punjab socio economic registry pser portal login"
    ],
    entities: [
      "Government of Punjab",
      "Maryam Nawaz Sharif",
      "Chief Minister Free Solar Panel Scheme",
      "Apni Chhat Apna Ghar Scheme",
      "Punjab Socio-Economic Registry",
      "UN-Habitat Scroll of Honour Award",
      "Punjab Information Technology Board",
      "Solar Tubewell Scheme"
    ],
    primaryCategory: "housing-welfare-schemes",
    categorySlugs: [
      "housing-welfare-schemes",
      "provincial-regional-schemes",
      "other-schemes"
    ],
    date: "October 6, 2026",
    publishedDate: "October 6, 2026",
    lastChecked: "October 6, 2026",
    readTime: "8 min read",
    image: "/images/cm-punjab-solar-panel-scheme.jpg",
    imageAlt: "Punjab Solar and Housing Updates 2026 Status Guide",
    author: contributors.muhammadSalman,
    officialLinks: [
      { label: "CM Free Solar Panel Scheme Official Portal", href: "https://cmsolarscheme.punjab.gov.pk/" },
      { label: "Apni Chhat Apna Ghar (ACAG) Housing Loan Portal", href: "https://acag.punjab.gov.pk/" },
      { label: "Punjab Socio-Economic Registry (PSER) Portal", href: "https://pser.punjab.gov.pk/" },
      { label: "Government of Punjab Official Portal", href: "https://www.punjab.gov.pk/" }
    ],
    sections: [
      {
        title: "What is the Current Status of Punjab Solar & Housing Schemes in October 2026?",
        paragraphs: [
          "The Government of Punjab, under Chief Minister Maryam Nawaz Sharif, has accelerated public delivery across its premier social welfare programs as of October 2026. The Chief Minister Free Solar Panel Scheme (Roshan Gharana) has progressed from initial registration to phased, district-wide equipment distribution. Meanwhile, the Apni Chhat Apna Ghar Scheme (ACAG) recently received global recognition by winning the 2026 UN-Habitat Scroll of Honour Award for its digital-first affordable housing finance model.",
          "Over 122,000 housing units have been completed across Punjab under the ACAG scheme, with an additional 59,000 units currently under active construction. The provincial administration has established centralized digital portals to maintain transparency and streamline online status tracking for all registered applicants."
        ],
        links: [
          { label: "Apni Chhat Apna Ghar Scheme 2026 Complete Guide", href: "/apni-chhat-apna-ghar-scheme-online-apply-2026/" },
          { label: "Housing & Social Cards Punjab Complete List", href: "/housing-social-cards-punjab/" },
          { label: "BISP & PSER Registration Updates 2026", href: "/bisp-pser-updates/" }
        ]
      },
      {
        title: "How Does the CM Punjab Free Solar Panel Scheme Work?",
        paragraphs: [
          "The Chief Minister Free Solar Panel Scheme targets low-income domestic households across Punjab to reduce monthly electricity bill stress. Managed technically by the Punjab Information Technology Board (PITB), the program utilizes computerized balloting to allocate fully funded solar systems to eligible families."
        ],
        subsections: [
          {
            title: "Who is Eligible for the 0-200 Unit Free Solar Systems?",
            paragraphs: [
              "Eligibility for the free solar system depends strictly on domestic electricity usage history and verified property records. Households with a single-phase electricity meter consuming between 0 and 200 units per month over the past 12 billing cycles qualify for consideration. The connected single-phase meter must have a sanctioned power load limit of 2 kW or lower. Applicants must possess a valid CNIC and an official Punjab domicile. Selected beneficiaries receive a complete solar setup including high-efficiency solar panels, a grid-tied inverter, wiring, safety breakers, mounting frames, and a lithium-ion battery & inverter kit."
            ]
          },
          {
            title: "How to Check Your CM Solar Application Result by CNIC",
            paragraphs: [
              "Applicants who registered during the official application window can verify their selection status directly through the dedicated provincial web portal cmsolarscheme.punjab.gov.pk. Step 1: Visit cmsolarscheme.punjab.gov.pk. Step 2: Click on the Application Status / Result tab. Step 3: Enter your 13-digit CNIC number along with your electricity consumer reference number. Step 4: Submit the form to view your current status (Selected for Physical Verification, Approved, or Under Review). Local distribution companies (DISCOs) perform a physical verification process at the applicant's residence before equipment delivery."
            ]
          }
        ],
        links: [
          { label: "CM Punjab Solar Panel Scheme Online Apply Guide", href: "/cm-punjab-solar-panel-scheme-2026-online-apply/" },
          { label: "Punjab Solar Tube Well Scheme 80% Subsidy", href: "/punjab-solar-tube-well-scheme-2026-online-apply/" }
        ]
      },
      {
        title: "What Are the Key Features of the Apni Chhat Apna Ghar Housing Scheme?",
        paragraphs: [
          "The Apni Chhat Apna Ghar Scheme provides accessible housing finance to low- and middle-income families who own small plots of land but lack capital for home construction. Designed as Pakistan's first interest-free micro-housing loan facility, the project eliminates banking markups entirely."
        ],
        subsections: [
          {
            title: "Loan Amount, Repayment Plan, and Tranche Milestones",
            paragraphs: [
              "Eligible landholders receive a PKR 1.5 Million interest-free loan disbursed in 3 structured tranches: Tranche 1 (25% / PKR 375,000) upon Layout Verification, Tranche 2 (35% / PKR 525,000) upon Lintel/Roof level completion, and Tranche 3 (40% / PKR 600,000) for finishing and plumbing. Borrowers repay the principal amount over a 7-year repayment period with a fixed PKR 14,000 monthly installment. Urban applicants must hold legal ownership of 5 Marla plots, while rural applicants qualify with plots up to 10 Marlas."
            ]
          },
          {
            title: "What is the 'Apna Ghar Mehfooz Ghar' Extension?",
            paragraphs: [
              "Chief Minister Maryam Nawaz Sharif expanded the provincial housing portfolio with the Apna Ghar Mehfooz Ghar initiative. This program provides home renovation loans of up to PKR 500,000 and structural extension funding of up to PKR 1 Million under zero-interest terms via acag.punjab.gov.pk."
            ]
          }
        ],
        links: [
          { label: "Wazir-e-Azam & CM Apna Ghar Program Details", href: "/wazir-e-azam-apna-ghar-program-2026/" },
          { label: "Apni Zameen Apna Ghar Balloting Result", href: "/apni-zameen-apna-ghar-balloting-result-2026/" }
        ]
      },
      {
        title: "What is the Punjab Solar Tubewell Scheme for Farmers?",
        paragraphs: [
          "To relieve agricultural sector operational costs, the Punjab Department of Agriculture runs the Solar Tubewell Scheme. Under this scheme, the Government of Punjab covers an 80% subsidy on total installation costs for solar tubewell systems ranging from 10 HP to 20 HP capacity. Farmers owning up to 12.5 acres of agricultural land receive priority, helping lower crop irrigation overheads across rural districts."
        ]
      },
      {
        title: "How to Safely Check Status and Avoid Online 8171 Scams",
        paragraphs: [
          "With high public demand for provincial relief programs, unauthorized agents and fraudulent web portals frequently attempt to deceive citizens. (1) Verify Portal Extensions: Official Punjab government websites strictly use .punjab.gov.pk. Never enter CNIC numbers on unofficial websites. (2) Understand 8171 Boundary: The 8171 BISP Helpline handles federal cash transfers under BISP and is NOT an active channel for Punjab provincial solar or housing schemes. (3) Zero Registration Fees: The Punjab government does not charge registration fees or agent charges. Report third-party fee fraud to authorities. (4) PSER Validation: Keep household details updated on pser.punjab.gov.pk."
        ],
        links: [
          { label: "Fake 8171 SMS Check & BISP Lottery Scam Alert", href: "/fake-8171-sms-check-complaint-pta-bisp-lottery-fraud-alert-2026/" }
        ]
      }
    ],
    faqs: [
      {
        question: "Is registration currently open for the CM Punjab Free Solar Panel Scheme in 2026?",
        answer: "Official registration for the initial phase of the CM Free Solar Panel Scheme closed in early 2025. As of October 2026, the provincial government is executing phased equipment distribution for applicants selected in the computerized ballot, while preparations for subsequent phases remain under provincial review."
      },
      {
        question: "How do I check my CM Solar Panel application status by CNIC?",
        answer: "Visit cmsolarscheme.punjab.gov.pk, select the Application Result option, and enter your 13-digit CNIC along with your electricity reference number. The portal will display whether your application is approved, under review, or assigned for physical verification."
      },
      {
        question: "What is the monthly installment for the Apni Chhat Apna Ghar loan?",
        answer: "The monthly installment for the Apni Chhat Apna Ghar housing loan is fixed at PKR 14,000. Beneficiaries repay the PKR 1.5 Million interest-free loan over a seven-year repayment period without any bank profit or hidden charges."
      },
      {
        question: "Can I apply for the Punjab Solar Scheme through 8171 SMS?",
        answer: "No, the 8171 SMS service belongs exclusively to the federal Benazir Income Support Programme (BISP) and cannot be used for Punjab Solar Scheme registration or status checks. All solar updates must be checked via cmsolarscheme.punjab.gov.pk."
      },
      {
        question: "What size solar system is provided under the CM Solar Scheme?",
        answer: "The CM Free Solar Panel Scheme provides eligible households consuming up to 200 units monthly with a complete solar energy system ranging between 1 kW and 3 kW capacity, complete with solar panels, grid inverter, and a lithium-ion battery."
      },
      {
        question: "Who qualifies for the Apni Chhat Apna Ghar housing scheme loan?",
        answer: "Pakistani citizens residing in Punjab who own a 5 Marla plot in urban areas or up to a 10 Marla plot in rural areas, possess a valid CNIC, and pass the Punjab Socio-Economic Registry eligibility criteria qualify for the scheme."
      },
      {
        question: "What land size is required to build a home under the ACAG scheme?",
        answer: "The scheme requires applicants to hold verified land title rights for up to 5 Marla in urban municipal areas or up to 10 Marla in rural union councils across Punjab districts."
      },
      {
        question: "What is the Punjab Solar Tubewell Scheme subsidy percentage?",
        answer: "The Government of Punjab provides an 80% cost subsidy for the Solar Tubewell Scheme, requiring eligible agricultural landholders to pay only the remaining 20% cost for 10 HP to 20 HP solar pumping systems."
      },
      {
        question: "What is the official website for Punjab solar and housing schemes?",
        answer: "The official web portal for the solar scheme is cmsolarscheme.punjab.gov.pk, while the housing scheme portal operates at acag.punjab.gov.pk. Both portals are hosted under the Government of Punjab domain structure."
      },
      {
        question: "Are there any registration fees or agent charges for Punjab welfare schemes?",
        answer: "No, the Punjab government does not charge registration or application fees for any of its solar or housing schemes. Citizens should report any unauthorized agent soliciting funds for scheme selection to local law enforcement."
      }
    ],
    relatedSlugs: [
      "apni-chhat-apna-ghar-scheme-online-apply-2026",
      "cm-punjab-solar-panel-scheme-2026-online-apply",
      "housing-social-cards-punjab",
      "bisp-pser-updates",
      "provincial-regional-schemes",
      "punjab-solar-tube-well-scheme-2026-online-apply"
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
  "cm-punjab-solar-panel-scheme-2026-online-apply",
  "housing-social-cards-punjab",
  "bisp-pser-updates",
  "provincial-regional-schemes",
  "punjab-solar-tube-well-scheme-2026-online-apply"
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
