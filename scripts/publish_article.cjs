const fs = require('fs');
const path = require('path');

const contentTsPath = path.join(__dirname, '../src/data/content.ts');

if (!fs.existsSync(contentTsPath)) {
  console.error("Could not find content.ts!");
  process.exit(1);
}

let contentTs = fs.readFileSync(contentTsPath, 'utf8');

const slug = "major-government-schemes-updates-september-october-2026";

if (contentTs.includes(`slug: "${slug}"`)) {
  console.log("Article already present in content.ts!");
  process.exit(0);
}

const targetMarker = 'export const articles: Article[] = [';
const markerPos = contentTs.indexOf(targetMarker);

if (markerPos === -1) {
  console.error("Could not find articles array marker in content.ts!");
  process.exit(1);
}

const newArticleCode = `  {
    slug: "${slug}",
    relatedSlugs: [
      "bisp-benazir-kafaalat-8171-check",
      "pm-fuel-relief-scheme-updates",
      "punjab-solar-housing-updates-2026",
      "national-savings-profit-rates"
    ],
    title: "Major Government Schemes Updates (September/October 2026): Key Policy Changes, New Funds & Beneficiary Guidelines",
    excerpt: "Discover major government scheme updates for September/October 2026, including the ₹10,000 Cr SME Growth Fund, Ayushman Bharat 70+ Vay Vandana Card, BHAVYA Rasayan guidelines, PM-Kisan & PM Surya Ghar.",
    showExcerpt: true,
    metaTitle: "Major Government Schemes Updates (Sept/Oct 2026): Key Changes & Guide",
    metaDescription: "Discover major government scheme updates for September/October 2026, including the ₹10,000 Cr SME Growth Fund, Ayushman Bharat 70+ Vay Vandana Card, BHAVYA Rasayan guidelines, PM-Kisan & PM Surya Ghar.",
    focusKeyword: "Major Government Schemes Updates (September/October 2026)",
    lsiKeywords: [
      "major government schemes updates september october 2026",
      "sme growth fund 10000 crore cabinet approval",
      "bhavya rasayan scheme chemical park guidelines",
      "ayushman bharat 70 plus vay vandana card registration",
      "pm kisan 24th installment status e-kyc",
      "pm surya ghar muft bijli yojana subsidy 2026",
      "seva sankalp abhiyan people's plan campaign 2026"
    ],
    entities: [
      "Cabinet Committee on Economic Affairs",
      "SME Growth Fund",
      "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana",
      "BHAVYA Rasayan Scheme",
      "PM Surya Ghar: Muft Bijli Yojana",
      "Pradhan Mantri Kisan Samman Nidhi",
      "myScheme Portal"
    ],
    primaryCategory: "Other Schemes",
    categorySlugs: [
      "other-schemes",
      "news"
    ],
    date: "October 7, 2026",
    publishedDate: "October 7, 2026",
    readTime: "10 min read",
    image: "/images/major-government-schemes-updates-2026.jpg",
    imageAlt: "Official policy update infographic detailing September and October 2026 central government schemes, outlays, and beneficiary portals",
    author: contributors.muhammadSalman,
    reviewer: contributors.ayeshaMalik,
    officialLinks: [
      { label: "Official myScheme National Portal", href: "https://www.myscheme.gov.in/" },
      { label: "Prime Minister's Office India", href: "https://www.pmindia.gov.in/" },
      { label: "NHA Ayushman Beneficiary Portal", href: "https://beneficiary.nha.gov.in/" },
      { label: "PM-Kisan Official Portal", href: "https://pmkisan.gov.in/" },
      { label: "PM Surya Ghar Solar Portal", href: "https://pmsuryaghar.gov.in/" }
    ],
    sections: [
      {
        title: "What Are the Key Government Scheme Updates Approved in September and October 2026?",
        paragraphs: [
          "The Cabinet Committee on Economic Affairs (CCEA), chaired by Prime Minister Narendra Modi, approved landmark financial outlays and policy updates across industrial growth, healthcare expansion, and energy infrastructure during September and October 2026. These updates prioritize long-term equity financing for manufacturing enterprises, domestic chemical infrastructure, and universal social security for vulnerable demographics.",
          "Citizens and business owners can track eligibility across more than 5,056 central and state schemes through the official myScheme portal (myscheme.gov.in). The latest decisions signal a strategic shift toward empowering regional industrial clusters while ensuring seamless direct benefit transfers (DBT) for agricultural and healthcare beneficiaries."
        ],
        links: [
          { label: "BISP 8171 Kafaalat status check guide", href: "/bisp-benazir-kafaalat-8171-check/" }
        ],
        subsections: [
          {
            title: "How Does the ₹10,000 Crore SME Growth Fund Support Small & Medium Manufacturers?",
            paragraphs: [
              "The SME Growth Fund provides patient growth equity capital to high-potential small and medium enterprises seeking to expand manufacturing capacity, adopt clean technology, and access global markets. Approved by the Union Cabinet on October 6, 2026, under Union Budget 2026-27 (Para 28), this initiative addresses a critical structural gap where traditional equity vehicles primarily funded early-stage micro startups rather than scaling established firms.",
              "Channelled through SEBI-registered Alternative Investment Funds (AIFs), the ₹10,000 crore government commitment targets manufacturing hubs situated in Tier-II and Tier-III cities. By anchoring private capital, the fund assists medium enterprises in scaling operations and entering international supply chains, helping transform competitive regional firms into global industry leaders.",
              "Small and medium business owners operating in industrial clusters should consult their local MSME-Development Institutes or empanelled AIF venture managers to review investment criteria and growth funding frameworks."
            ],
            links: [
              { label: "National Savings & Government Profit Rates 2026", href: "/national-savings-profit-rates/" }
            ]
          },
          {
            title: "What Are the BHAVYA Rasayan Scheme Guidelines and State Proposal Deadlines?",
            paragraphs: [
              "The BHAVYA Rasayan (Bharat Audyogik Vikas Yojana Rasayan) scheme establishes three state-of-the-art chemical and petrochemical parks across India to reduce reliance on imported specialty chemicals and battery precursors. Following Cabinet sanction, the Department of Chemicals and Petrochemicals released detailed implementation guidelines specifying a total scheme outlay of ₹3,030 crore.",
              "Under the financial framework, the Central Government provides a direct grant of up to ₹1,000 crore per approved chemical park, contingent upon the host state contributing a minimum co-funding commitment of ₹500 crore. Participating state governments must submit their comprehensive project proposals by November 30, 2026, ahead of final site selections planned during the India Chem 2026 summit.",
              "State industrial development corporations should finalize environmental clearances and land allocation blueprints before the November 30 deadline to qualify for central infrastructure grants."
            ]
          }
        ]
      },
      {
        title: "How Can Senior Citizens Claim the ₹5 Lakh Cover Under Ayushman Bharat 70+?",
        paragraphs: [
          "All Indian citizens aged 70 and above qualify for universal healthcare coverage of up to ₹5 lakh per year under the expanded Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB PM-JAY). Formally active across participating states, this scheme eliminates income caps, ensuring that senior citizens receive cashless secondary and tertiary hospital care on a dedicated family floater basis.",
          "For elderly individuals belonging to families already covered under standard PM-JAY card structures, the ₹5 lakh senior citizen cover operates as a distinct top-up reserve exclusively allocated for the individual user. Seniors enrolled in private commercial insurance or government health plans like CGHS can elect to transition to Ayushman Bharat 70+.",
          "Eligible seniors should apply for their registration immediately to avoid out-of-pocket medical expenditure during emergency hospitalizations."
        ],
        subsections: [
          {
            title: "How Do You Apply for the Vay Vandana Card on the NHA Portal?",
            paragraphs: [
              "Senior citizens aged 70+ can obtain their health card by registering for the Vay Vandana Card through the National Health Authority portal (beneficiary.nha.gov.in) or the official Ayushman Mobile App. The digital application requires mandatory Aadhaar e-KYC authentication to verify age criteria and identity details.",
              "Upon completing e-KYC via mobile OTP or biometric verification, applicants receive a distinct color-coded Vay Vandana Card that grants instant cashless access at all empanelled public and private hospitals nationwide. Family members or local Ayushman Mitra desks at hospital helpdesks can assist elderly applicants in completing online submissions.",
              "Download and print a physical copy of the Vay Vandana Card immediately after digital approval to present at hospital admission desks when seeking treatment."
            ]
          }
        ]
      },
      {
        title: "What Are the Latest Updates on PM-Kisan 24th Installment and PM Surya Ghar Subsidies?",
        paragraphs: [
          "Direct benefit transfers under agricultural support programs and residential renewable energy incentives received crucial administrative updates during the September/October 2026 operational cycle. Beneficiaries under the Pradhan Mantri Kisan Samman Nidhi and PM Surya Ghar: Muft Bijli Yojana must ensure compliance with updated digital verification protocols to receive uninterrupted financial transfers.",
          "The Central Government confirmed the long-term extension of PM-Kisan through 2031, reinforcing direct financial assistance for eligible landholding farmer families across India."
        ],
        links: [
          { label: "Punjab Solar & Housing Schemes Updates 2026", href: "/punjab-solar-housing-updates-2026/" }
        ],
        subsections: [
          {
            title: "When Will the PM-Kisan 24th Installment Be Released and How to Verify e-KYC Status?",
            paragraphs: [
              "The 24th installment of the PM-Kisan Samman Nidhi is scheduled for release in October 2026, delivering ₹2,000 directly into the bank accounts of over 11 crore eligible farmers. To prevent payment failures, the Ministry of Agriculture mandates that all beneficiaries complete Aadhaar-based e-KYC and ensure their bank accounts are actively linked to Aadhaar (NPCI seeding).",
              "Farmers can verify their eligibility status by visiting the official PM-Kisan portal (pmkisan.gov.in) under the 'Beneficiary Status' tab. Entering a registered registration number or Aadhaar ID displays real-time confirmation of land seeding, e-KYC clearance, and bank account readiness.",
              "Complete missing e-KYC verifications via biometric facial authentication on the PM-Kisan mobile app or at local Common Service Centres (CSC) before the October disbursal window closes."
            ]
          },
          {
            title: "What Are the Latest Subsidy Rates and Progress for PM Surya Ghar: Muft Bijli Yojana?",
            paragraphs: [
              "PM Surya Ghar: Muft Bijli Yojana provides direct central financial assistance of up to ₹78,000 to urban and rural households installing rooftop solar power systems. State distribution companies (DISCOMs) reported record installations during September 2026, led by Uttar Pradesh, while Andhra Pradesh achieved its target of installing 100,000 solar systems for SC/ST consumers within six months.",
              "The central subsidy structure grants ₹30,000 for 1 kW rooftop capacity, ₹60,000 for 2 kW capacity, and a maximum of ₹78,000 for systems rated at 3 kW or higher, designed to deliver up to 300 units of free monthly electricity. DISCOMs are executing block-level outreach drives to process pending residential applications and release net-metering approvals.",
              "Homeowners seeking to reduce household power bills should register on the national portal (pmsuryaghar.gov.in) to book authorized vendor installation and secure state subsidy credits."
            ]
          }
        ]
      },
      {
        title: "What Nationwide Campaigns and Rural Welfare Programs Launched in October 2026?",
        paragraphs: [
          "Two major nationwide public service campaigns launched between late September and early October 2026 to enhance grassroots welfare delivery and decentralized rural planning. These public drives engage Gram Sabhas, municipal bodies, and youth groups in expanding awareness for flagship central initiatives."
        ],
        links: [
          { label: "PM Fuel Relief & Welfare Scheme Updates", href: "/pm-fuel-relief-scheme-updates/" }
        ],
        subsections: [
          {
            title: "What Is the Seva Sankalp Abhiyan and People’s Plan Campaign 2026-27?",
            paragraphs: [
              "Seva Sankalp Abhiyan is a month-long nationwide welfare drive running from September 17 to October 17, 2026, organizing blood donation camps, school competitions focused on Viksit Bharat 2047, and block-level Seva Setu camps. Simultaneously, the Ministry of Panchayati Raj launched the People’s Plan Campaign 2026-27 under the banner of 'Sabki Yojana, Sabka Vikas.'",
              "The campaign convenes special Gram Sabhas in rural panchayats to formulate participatory development plans, audit local welfare distribution, and ensure eligible villagers register for housing, sanitation, and health benefits.",
              "Rural residents should attend scheduled Gram Sabha meetings in October 2026 to verify their inclusion in Gram Panchayat Development Plans (GPDP)."
            ]
          },
          {
            title: "What Milestones Were Achieved Under Swachhata Hi Seva 2026 and Jal Jeevan Mission?",
            paragraphs: [
              "The Swachhata Hi Seva (SHS) 2026 campaign concluded its intensive fortnight of Shramdaan activities in October 2026, mobilizing central ministries and local communities to clear legacy waste sites and recognize sanitation workers (Safai Mitras). Concurrently, updates from Swachh Bharat Mission-Urban (SBM-U 2.0) and Jal Jeevan Mission highlighted significant progress in achieving 100% tap water connectivity in rural districts.",
              "These combined efforts reinforce public health infrastructure, providing sustainable solid-waste processing facilities and clean drinking water access across rural and semi-urban habitations.",
              "Citizens can participate in local waste-segregation drives organized by municipal bodies to support long-term urban sanitation targets."
            ]
          }
        ]
      },
      {
        title: "Information-Gain Section: September/October 2026 Scheme Approval & Beneficiary Action Matrix",
        paragraphs: [
          "To assist citizens, exam aspirants, and enterprise owners in navigating recent policy announcements, the following matrix summarizes the financial outlays, objectives, and key deadlines for major schemes updated in September and October 2026."
        ],
        table: {
          caption: "Major September/October 2026 Government Schemes Master Summary Matrix",
          headers: ["Scheme Name", "Nodal Ministry / Body", "Financial Outlay / Benefit", "Core Target Beneficiaries", "Key Sept/Oct 2026 Update & Deadline"],
          rows: [
            ["SME Growth Fund (SGF)", "Ministry of Finance / Cabinet Committee", "₹10,000 Crore Growth Equity", "Manufacturing SMEs in Tier-II/III Cities", "Approved Oct 6, 2026; AIF equity channel."],
            ["BHAVYA Rasayan Scheme", "Dept of Chemicals & Petrochemicals", "₹3,030 Crore (Up to ₹1,000 Cr/Park)", "Industrial Chemical & Petrochemical Hubs", "State proposals due by November 30, 2026."],
            ["Ayushman Bharat 70+", "National Health Authority (NHA)", "₹5 Lakh Annual Universal Cover", "All Senior Citizens Aged 70+", "Vay Vandana Card live on beneficiary.nha.gov.in."],
            ["PM-Kisan Samman Nidhi", "Ministry of Agriculture", "₹6,000/Year (₹2,000 Installment)", "Small & Marginal Farmers", "24th Installment Oct 2026; e-KYC mandatory."],
            ["PM Surya Ghar: Muft Bijli", "Ministry of New & Renewable Energy", "Up to ₹78,000 Central Subsidy", "Residential Electricity Consumers", "UP ranks 1st; AP hits 100k SC/ST solar target."],
            ["Seva Sankalp Abhiyan", "Central Welfare Ministries", "Nationwide Service Outreach Drives", "Rural & Urban Scheme Beneficiaries", "Active Sept 17 – Oct 17, 2026 with Seva Setu camps."],
            ["People’s Plan Campaign", "Ministry of Panchayati Raj", "Gram Sabha Participatory Budgeting", "Rural Panchayats & Villagers", "Theme: Sabki Yojana, Sabka Vikas."],
            ["myScheme Portal", "Ministry of Electronics & IT (MeitY)", "Integrated Information Portal", "All Citizens Seeking Welfare", "Hosts 5,056+ central & state schemes."]
          ]
        }
      }
    ],
    faqs: [
      {
        question: "What major government schemes were approved by the Union Cabinet in October 2026?",
        answer: "On October 6, 2026, the Union Cabinet approved a ₹10,000 crore commitment for the SME Growth Fund to provide long-term growth equity to small and medium manufacturing enterprises, alongside operational guidelines for the ₹3,030 crore BHAVYA Rasayan chemical parks scheme."
      },
      {
        question: "Who is eligible for the Ayushman Bharat 70+ Vay Vandana Card?",
        answer: "All Indian citizens aged 70 and above are eligible for the Vay Vandana Card under Ayushman Bharat PM-JAY regardless of income status, receiving an annual family floater health cover of ₹5 lakh."
      },
      {
        question: "When will the PM-Kisan 24th installment be released?",
        answer: "The PM-Kisan 24th installment is expected in October 2026 following the standard four-month disbursal cycle. Beneficiaries must complete e-KYC and Aadhaar bank account seeding on pmkisan.gov.in."
      },
      {
        question: "What is the maximum subsidy available under PM Surya Ghar Muft Bijli Yojana in 2026?",
        answer: "Under PM Surya Ghar: Muft Bijli Yojana, eligible households receive a maximum central financial subsidy of ₹78,000 for rooftop solar capacity of 3 kW or higher, with ₹30,000 provided for 1 kW and ₹60,000 for 2 kW systems."
      },
      {
        question: "What is the proposal submission deadline for states under the BHAVYA Rasayan scheme?",
        answer: "State governments must submit project proposals for the establishment of 3 dedicated chemical parks under the BHAVYA Rasayan scheme by November 30, 2026, to qualify for central grants of up to ₹1,000 crore per park."
      },
      {
        question: "What is the objective of the Seva Sankalp Abhiyan running in Sept-Oct 2026?",
        answer: "Running from September 17 to October 17, 2026, Seva Sankalp Abhiyan is a nationwide outreach campaign delivering blood donation drives, Viksit Bharat 2047 youth programs, and block-level Seva Setu camps for direct scheme enrolment."
      },
      {
        question: "How does the SME Growth Fund deliver equity capital to MSMEs?",
        answer: "The SME Growth Fund channels its ₹10,000 crore government commitment through SEBI-registered Alternative Investment Funds (AIFs) to invest patient growth equity into scaling manufacturing SMEs in Tier-II and Tier-III cities."
      },
      {
        question: "How can citizens search for all active central and state welfare schemes in one place?",
        answer: "Citizens can use the national myScheme portal at myscheme.gov.in, which hosts over 5,056 central and state government schemes with automated eligibility checking based on demographic profile."
      },
      {
        question: "Is income limit a criterion for senior citizens joining Ayushman Bharat 70+?",
        answer: "No, income limit is not a criterion for Ayushman Bharat 70+; all senior citizens aged 70 and above receive universal health coverage of ₹5 lakh annually."
      },
      {
        question: "What is the theme of the People's Plan Campaign 2026-27 launched in October 2026?",
        answer: "The People's Plan Campaign 2026-27 operates under the theme Sabki Yojana Sabka Vikas, focusing on special Gram Sabhas to create decentralized rural development plans."
      }
    ]
  },
`;

const updatedContentTs = contentTs.slice(0, markerPos + targetMarker.length) + "\n" + newArticleCode + contentTs.slice(markerPos + targetMarker.length);

fs.writeFileSync(contentTsPath, updatedContentTs, 'utf8');
console.log("Successfully inserted article into content.ts!");
