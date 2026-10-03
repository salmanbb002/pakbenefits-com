import fs from 'fs';
import path from 'path';

const root = process.cwd();
const contentFilePath = path.resolve(root, 'src/data/content.ts');
let content = fs.readFileSync(contentFilePath, 'utf8');

const slug = 'provincial-regional-schemes';

if (content.includes(`slug: "${slug}"`)) {
  console.log(`Article ${slug} already exists in content.ts!`);
  process.exit(0);
}

const articleObject = {
  slug: "provincial-regional-schemes",
  title: "Provincial & Regional Schemes: Complete List, Eligibility & Application Guide (2026)",
  excerpt: "Discover all 2026 Provincial & Regional Schemes across Punjab, Sindh, KP, and Balochistan. Learn eligibility rules, PSER CNIC online verification, and application steps.",
  showExcerpt: true,
  metaTitle: "Provincial & Regional Schemes 2026: Complete List, Eligibility & Online Check",
  metaDescription: "Discover all 2026 Provincial & Regional Schemes across Punjab, Sindh, KP, and Balochistan. Learn eligibility rules, PSER CNIC online verification, and application steps.",
  focusKeyword: "provincial & regional schemes",
  lsiKeywords: [
    "provincial and regional schemes online check",
    "pser registration 8123 online check",
    "cm punjab schemes pser 2026",
    "sindh pink scooty scheme online apply",
    "kpk ehsaas umeed programme cnic check",
    "balochistan regional development initiative adp",
    "pdwp project approval process pakistan"
  ],
  entities: [
    "Provincial & Regional Schemes",
    "Punjab Socio-Economic Registry (PSER)",
    "Annual Development Programme (ADP)",
    "Planning & Development (P&D) Department",
    "Himmat Card",
    "Kisan Card",
    "Sindh Pink Scooty Scheme",
    "Ehsaas Umeed Programme",
    "Sehat Card Plus",
    "CNIC Verification",
    "Provincial Development Working Party (PDWP)",
    "Bank of Punjab (BoP)"
  ],
  primaryCategory: "other-schemes",
  categorySlugs: ["punjab-schemes", "other-schemes"],
  date: "October 3, 2026",
  publishedDate: "2026-10-03",
  lastChecked: "October 3, 2026",
  readTime: "9 min read",
  image: "/images/provincial-regional-schemes.jpg",
  imageAlt: "Provincial and Regional Schemes Complete Eligibility and Registration Guide Pakistan 2026",
  sections: [
    {
      title: "What Are Provincial and Regional Schemes in Pakistan?",
      paragraphs: [
        "Provincial and regional schemes are sub-national development, financial grant, and social protection programs created and executed directly by provincial governments. These initiatives address targeted economic disparities, regional infrastructure deficits, agricultural subsidies, and localized social safety requirements across Punjab, Sindh, Khyber Pakhtunkhwa, Balochistan, Gilgit-Baltistan, and Azad Jammu & Kashmir.",
        "While national socio-economic policies establish general governance standards, provincial government schemes tailor public funding to the immediate priorities of regional populations. For example, rain-fed barani agricultural regions receive specialized irrigation and solar pump grants, while dense urban centers receive targeted municipal sanitation and zero-emission transit solutions. Each province operates its own administrative machinery to appraise projects, register beneficiaries, and disburse cash stipends or soft loans under its Annual Development Programme (ADP).",
        "Sub-national governance frameworks rely on specialized provincial authorities to execute these projects. Entities like the Punjab Social Protection Authority (PSPA) and the Sindh Social Protection Authority (SSPA) partner with financial institutions like the Bank of Punjab to manage beneficiary databases and digital fund transfers directly to citizens' verified bank accounts or mobile wallets."
      ]
    },
    {
      title: "How Do Provincial Schemes Differ from Federal PSDP Programs?",
      paragraphs: [
        "Provincial schemes are funded entirely through provincial Annual Development Programmes (ADPs), whereas federal initiatives derive their funding from the national Public Sector Development Programme (PSDP). This financial distinction dictates which government body holds administrative approval authority, how beneficiary eligibility is determined, and which digital registry tracks applicant records.",
        "Federal welfare frameworks, such as the Benazir Income Support Programme (BISP 8171), operate across all provinces using a unified central database accessible via the 8171 SMS service and National Socio-Economic Registry (NSER) poverty scores. In contrast, provincial initiatives utilize specialized regional databases, such as the Punjab Socio-Economic Registry (PSER), accessed via distinct web portals or provincial shortcodes like 8123."
      ],
      table: {
        caption: "Federal PSDP vs Provincial ADP Schemes Comparison",
        headers: ["Feature / Dimension", "Federal Schemes (PSDP / BISP)", "Provincial & Regional Schemes (ADP)"],
        rows: [
          ["Primary Funding Source", "Federal PSDP Budget Allocation", "Annual Development Programme (ADP)"],
          ["Sanctioning Body", "Central Development Working Party (CDWP) / ECNEC", "Provincial Development Working Party (PDWP)"],
          ["Primary Database", "National Socio-Economic Registry (NSER / BISP)", "Punjab Socio-Economic Registry (PSER) / Provincial Portals"],
          ["Verification Code", "BISP 8171 SMS Gateway", "PSER 8123 / Provincial Official Portals (.gov.pk)"],
          ["Geographic Scope", "Nationwide (All Provinces & Territories)", "Province-Specific (e.g., Punjab, Sindh, KP, Balochistan)"],
          ["Key Operational Objective", "Macro economic development & national safety net", "Regional economic uplift, targeted local welfare & youth support"]
        ]
      }
    },
    {
      title: "What Are the Key Provincial & Regional Schemes by Province in 2026?",
      paragraphs: [
        "In the 2025-2026 fiscal cycle, provincial governments in Pakistan expanded their targeted welfare portfolios to mitigate inflation and promote youth empowerment. Each province manages flagship programs tailored to its specific demographic and economic priorities."
      ],
      subsections: [
        {
          title: "Punjab Provincial Schemes (PSER, Himmat Card, Kisan Card & Housing)",
          paragraphs: [
            "Punjab leads sub-national social protection spending through its unified Punjab Socio-Economic Registry (PSER) portal. PSER acts as a single-window registration system for all Chief Minister initiatives, eliminating redundant poverty surveys across multiple departments."
          ],
          bullets: [
            "CM Punjab Himmat Card: Provides an updated quarterly financial grant of Rs 10,500 to certified persons with disabilities through specialized Bank of Punjab ATM cards.",
            "CM Punjab Kisan Card: Offers interest-free agricultural credit up to Rs 150,000 per crop season to small landholders for purchasing high-yield seeds and fertilizers.",
            "Apni Zameen Apna Ghar Programme: Allocates free housing plots and subsidized building loans to low-income families verified through the PSER database.",
            "Youth Mobility Initiatives: Programs such as the CM Punjab Electric Bike Scheme provide subsidized e-bikes to university students, while the CM Punjab Green Credit Program finances small-scale environmental projects."
          ]
        },
        {
          title: "Sindh Regional Welfare & Empowerment Schemes (Pink Scooty & SSPA)",
          paragraphs: [
            "The Government of Sindh executes its regional welfare agenda through the Sindh Social Protection Authority (SSPA), focusing on maternal healthcare, female education, and gender-inclusive transportation options."
          ],
          bullets: [
            "Sindh Pink Scooty Scheme: Provides zero-interest financial assistance and subsidies for electric scooters to female college students, working women, and healthcare workers.",
            "Mother & Child Support Programme: Delivers direct cash stipends to pregnant and lactating mothers in underdeveloped rural districts upon completing healthcare visits.",
            "Benazir Women Agricultural Workers Support Program: Provides financial grants and micro-equipment subsidies to female tenant farmers and livestock handlers."
          ]
        },
        {
          title: "Khyber Pakhtunkhwa Social Support Initiatives (Ehsaas Umeed & Sehat Card)",
          paragraphs: [
            "Khyber Pakhtunkhwa (KP) prioritizes universal healthcare coverage, vocational training, and social assistance for vulnerable households through its Planning & Development Department and Social Welfare Board."
          ],
          bullets: [
            "Sehat Card Plus: Provides universal health insurance up to Rs 1,000,000 per family annually for inpatient hospital treatments across empaneled hospitals.",
            "Ehsaas Umeed Programme: Delivers monthly financial stipends to special persons, widows, and senior citizens verified through KP social welfare centers.",
            "Workers Welfare Board Scholarships: Grants 100% educational fee waivers and living stipends to children of registered industrial workers."
          ]
        },
        {
          title: "Balochistan Regional Development Initiatives & Arid Area Grants",
          paragraphs: [
            "Balochistan’s regional schemes focus on water management, rural infrastructure, solarization, and localized poverty relief managed under the Balochistan Special Development Initiative."
          ],
          bullets: [
            "Solar Agricultural Pump Conversion Scheme: Provides heavy subsidies to farmers in arid and rain-fed zones to transition diesel tube wells to solar power.",
            "Balochistan Youth Skills & Entrepreneurship Grant: Offers interest-free micro-loans and vocational training grants to youth in remote districts.",
            "Barani Area Infrastructure Package: Allocates dedicated ADP funding for constructing mini-dams, water storage ponds, and rural connectivity roads."
          ]
        }
      ]
    },
    {
      title: "How to Check Eligibility for Provincial Schemes via CNIC and PSER?",
      paragraphs: [
        "Eligibility verification for provincial schemes requires citizens to navigate official digital portals using their 13-digit Computerised National Identity Card (CNIC) number. Following official registration procedures ensures your data is accurately recorded in government registries without exposure to security risks."
      ],
      bullets: [
        "Step 1: Access the Official Provincial Portal: Open your web browser and navigate directly to verified URLs such as pser.punjab.gov.pk for Punjab or sspa.sindh.gov.pk for Sindh.",
        "Step 2: Create a User Profile: Register a secure account using your mobile phone number registered under your own CNIC.",
        "Step 3: Submit Your 13-Digit CNIC: Enter your 13-digit CNIC number without hyphens or spaces into the identity verification form.",
        "Step 4: Complete the Socio-Economic Survey: Provide accurate details regarding family size, monthly household income, land ownership, and utility bill averages.",
        "Step 5: Verify and Save Application Reference: Submit your completed profile and save the digital reference number generated by the portal to track approval status."
      ]
    },
    {
      title: "What Are the Approval Forums for Regional Schemes (PDWP & ADP)?",
      paragraphs: [
        "Provincial and regional schemes undergo rigorous technical appraisal and financial evaluation before inclusion in the Annual Development Programme (ADP). The governance framework ensures public funds are allocated efficiently according to regional priorities and statutory spending limits.",
        "The Departmental Development Working Party (DDWP) evaluates smaller regional projects up to Rs 200 Million. The Provincial Development Working Party (PDWP), chaired by the Planning and Development Board Chairman, appraises schemes costing up to Rs 10 Billion. Regional schemes exceeding Rs 10 Billion are referred to the federal Central Development Working Party (CDWP) and ECNEC for final sanctioning."
      ]
    },
    {
      title: "2026 Provincial & Regional Schemes Comparison Matrix",
      paragraphs: [
        "The matrix below provides a quick comparative overview of flagship 2026 provincial schemes, detailing target beneficiaries, financial benefits, and official access points:"
      ],
      table: {
        caption: "2026 Flagship Provincial & Regional Schemes Overview Matrix",
        headers: ["Scheme Name", "Province / Region", "Target Beneficiaries", "Key Financial / Material Benefit", "Official Portal / Access"],
        rows: [
          ["CM Punjab Himmat Card", "Punjab", "Certified Persons with Disabilities", "Rs 10,500 quarterly stipend via BoP card", "pser.punjab.gov.pk"],
          ["CM Punjab Kisan Card", "Punjab", "Small Farmers & Landholders", "Rs 150,000 interest-free crop loan", "agripunjab.gov.pk"],
          ["Apni Zameen Apna Ghar", "Punjab", "Low-Income Homeless Families", "Free plots & subsidized housing loans", "pser.punjab.gov.pk"],
          ["Sindh Pink Scooty Scheme", "Sindh", "Female Students & Working Women", "Subsidized / zero-interest electric scooters", "sspa.sindh.gov.pk"],
          ["Mother & Child Support", "Sindh", "Pregnant & Lactating Mothers", "Direct health & nutrition cash grants", "sspa.sindh.gov.pk"],
          ["Sehat Card Plus", "Khyber Pakhtunkhwa", "All Resident Families in KP", "Rs 1,000,000 annual inpatient health coverage", "sehatcardkp.pg.gov.pk"],
          ["Ehsaas Umeed Programme", "Khyber Pakhtunkhwa", "Widows, Orphans & PWDs", "Monthly social protection allowance", "swkpk.gov.pk"],
          ["Solar Water Pump Scheme", "Balochistan", "Farmers in Arid / Barani Zones", "Subsidized solar tube-well conversion", "balochistan.gov.pk"],
          ["WWF Talent Scholarship", "Federal / Provincial", "Children of Industrial Workers", "100% tuition coverage & living stipend", "wwf.gov.pk"]
        ]
      }
    },
    {
      title: "What Are Common Application Errors and Scam Warnings for Government Schemes?",
      paragraphs: [
        "The popularity of provincial government schemes has led to an increase in fraudulent SMS messages, phishing websites, and unauthorized agents claiming to offer guaranteed approvals. Protecting your personal identity and financial assets requires strict adherence to official security guidelines."
      ],
      bullets: [
        "Zero Registration Fee Rule: Official government schemes never charge application fees or registration costs. Anyone asking for money via EasyPaisa, JazzCash, or bank transfer is attempting a scam.",
        "Verify Domain Suffixes: Ensure you only enter sensitive CNIC details on websites ending with .gov.pk. Ignore unofficial third-party blogs or .pk sites claiming to register you directly.",
        "SMS Gateway Authenticity: Official provincial messages arrive from registered shortcodes such as 8123 (PSER) or official departmental sender IDs, never personal 11-digit mobile numbers.",
        "Report Scams to FIA Cybercrime: Report fraudulent phone numbers or fake web links to the Federal Investigation Agency (FIA) Cybercrime Wing via helpline 1991."
      ]
    }
  ],
  faqs: [
    {
      question: "What are provincial and regional schemes in Pakistan?",
      answer: "Provincial and regional schemes are sub-national development, social welfare, and financial support initiatives funded by provincial governments through their Annual Development Programmes (ADPs). These programs target specific regional needs, such as local infrastructure, disability allowances, agricultural loans, and provincial health coverage."
    },
    {
      question: "How do provincial schemes differ from the federal BISP programme?",
      answer: "Provincial schemes are funded through provincial ADPs and managed by regional departments using databases like PSER, whereas BISP is a federal safety net funded through the federal PSDP budget using the 8171 central database."
    },
    {
      question: "What is PSER and how does it relate to Punjab provincial schemes?",
      answer: "The Punjab Socio-Economic Registry (PSER) is the unified official portal used by the Government of Punjab to assess household eligibility for CM welfare programs, including the Himmat Card, Kisan Card, and Apni Zameen Apna Ghar housing scheme."
    },
    {
      question: "Can I apply for provincial schemes if I am already registered in BISP 8171?",
      answer: "Yes, but registration in BISP does not automatically enroll you in provincial schemes. You must submit a separate application on official provincial portals like pser.punjab.gov.pk to qualify for province-specific benefits."
    },
    {
      question: "What is the monthly stipend provided under the CM Punjab Himmat Card in 2026?",
      answer: "Under the 2026 disbursement cycle, the CM Punjab Himmat Card provides a quarterly cash allowance of Rs 10,500 (equivalent to Rs 3,500 per month) to certified persons with disabilities through Bank of Punjab ATM cards."
    },
    {
      question: "Who is eligible for the Sindh Pink Scooty Scheme?",
      answer: "The Sindh Pink Scooty Scheme is open to female university students, working women, and female healthcare professionals holding a valid Sindh CNIC and enrolled in or employed at recognized institutions within the province."
    },
    {
      question: "What healthcare benefits does the Khyber Pakhtunkhwa Sehat Card Plus provide?",
      answer: "KP Sehat Card Plus provides up to Rs 1,000,000 per family annually in free inpatient medical treatment across designated public and empaneled private hospitals across Khyber Pakhtunkhwa."
    },
    {
      question: "How does the Provincial Development Working Party (PDWP) approve schemes?",
      answer: "The PDWP is the provincial sanctioning body chaired by the Planning and Development Board Chairman that reviews, appraises, and grants administrative approval for regional development projects costing up to Rs 10 Billion."
    },
    {
      question: "Is there any registration fee for provincial government schemes?",
      answer: "No, all official government registration portals and CNIC eligibility checks are 100% free of charge. Any agent or website demanding payment for registration is operating an illegal fraud scheme."
    },
    {
      question: "Where can I safely check my application status for regional schemes?",
      answer: "You can safely check your status only on official government websites ending in .gov.pk, such as pser.punjab.gov.pk (Punjab), sspa.sindh.gov.pk (Sindh), or pndkp.gov.pk (KP)."
    }
  ],
  officialLinks: [
    { label: "Punjab Socio-Economic Registry (PSER)", href: "https://pser.punjab.gov.pk" },
    { label: "Punjab Planning & Development Board", href: "https://pnd.punjab.gov.pk" },
    { label: "Sindh Social Protection Authority (SSPA)", href: "https://sspa.sindh.gov.pk" },
    { label: "Khyber Pakhtunkhwa P&D Department", href: "https://pndkp.gov.pk" },
    { label: "Government of Balochistan Official Portal", href: "https://balochistan.gov.pk" }
  ],
  relatedSlugs: [
    "cm-punjab-green-credit-program",
    "cm-punjab-e-bikes-scheme-phase-2",
    "wazir-e-azam-apna-ghar-program",
    "national-savings-profit-rates"
  ]
};

const articlesMarker = 'export const articles: Article[] = [';
const insertPos = content.indexOf(articlesMarker);

if (insertPos === -1) {
  console.error('Could not find articles array marker in content.ts!');
  process.exit(1);
}

const formattedArticle =
  `  {\n` +
  `    slug: ${JSON.stringify(articleObject.slug)},\n` +
  `    title: ${JSON.stringify(articleObject.title)},\n` +
  `    excerpt: ${JSON.stringify(articleObject.excerpt)},\n` +
  `    showExcerpt: true,\n` +
  `    metaTitle: ${JSON.stringify(articleObject.metaTitle)},\n` +
  `    metaDescription: ${JSON.stringify(articleObject.metaDescription)},\n` +
  `    focusKeyword: ${JSON.stringify(articleObject.focusKeyword)},\n` +
  `    lsiKeywords: ${JSON.stringify(articleObject.lsiKeywords)},\n` +
  `    entities: ${JSON.stringify(articleObject.entities)},\n` +
  `    primaryCategory: "other-schemes",\n` +
  `    categorySlugs: ["punjab-schemes", "other-schemes"],\n` +
  `    date: "October 3, 2026",\n` +
  `    publishedDate: "2026-10-03",\n` +
  `    lastChecked: "October 3, 2026",\n` +
  `    readTime: "9 min read",\n` +
  `    image: "/images/provincial-regional-schemes.jpg",\n` +
  `    imageAlt: ${JSON.stringify(articleObject.imageAlt)},\n` +
  `    author: contributors.muhammadSalman,\n` +
  `    reviewer: contributors.ayeshaMalik,\n` +
  `    sections: ${JSON.stringify(articleObject.sections, null, 6)},\n` +
  `    faqs: ${JSON.stringify(articleObject.faqs, null, 6)},\n` +
  `    officialLinks: ${JSON.stringify(articleObject.officialLinks, null, 6)},\n` +
  `    relatedSlugs: ${JSON.stringify(articleObject.relatedSlugs)}\n` +
  `  },\n`;

content = content.slice(0, insertPos + articlesMarker.length) + '\n' + formattedArticle + content.slice(insertPos + articlesMarker.length);

// Bidirectional internal links: add provincial-regional-schemes to related target articles
const relatedTargets = [
  'cm-punjab-green-credit-program',
  'cm-punjab-e-bikes-scheme-phase-2',
  'wazir-e-azam-apna-ghar-program',
  'national-savings-profit-rates'
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
console.log(`Successfully published ${slug} into content.ts with ${linkedCount} internal links!`);
