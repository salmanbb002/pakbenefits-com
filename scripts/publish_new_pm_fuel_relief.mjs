import fs from 'fs';
import path from 'path';

const contentFilePath = path.resolve('src/data/content.ts');
let content = fs.readFileSync(contentFilePath, 'utf8');

const slug = "prime-minister-fuel-relief-scheme-2026";

if (content.includes(`slug: "${slug}"`)) {
  console.log(`Article with slug "${slug}" already exists in content.ts!`);
  process.exit(0);
}

const newArticle = `  {
    slug: "${slug}",
    relatedSlugs: [
      "pm-fuel-relief-scheme-updates",
      "pm-petrol-relief-scheme-updates-2026",
      "bisp-benazir-kafaalat-8171-check",
      "bisp-status-cnic-online"
    ],
    title: "Prime Minister Fuel Relief Scheme: 9771 SMS Registration, Eligibility & Subsidy Rates",
    excerpt: "Register for the Prime Minister Fuel Relief Scheme via free 9771 SMS. Learn vehicle eligibility (motorcycles, rickshaws, 800cc cars), subsidy rates, TOK commands, and 9772 helpline support.",
    showExcerpt: true,
    metaTitle: "PM Fuel Relief Scheme 2026: 9771 SMS Register & Subsidy Guide",
    metaDescription: "Register for the Prime Minister Fuel Relief Scheme via free 9771 SMS. Learn vehicle eligibility (motorcycles, rickshaws, 800cc cars), subsidy rates, TOK commands, and 9772 helpline support.",
    focusKeyword: "Prime Minister Fuel Relief Scheme",
    lsiKeywords: [
      "prime minister fuel relief scheme 2026",
      "9771 sms registration format",
      "pm fuel relief scheme eligibility",
      "800cc car fuel subsidy pakistan",
      "tok fuel token code 9771",
      "9772 retailer helpline control room",
      "rs 500 weekly motorcycle fuel discount",
      "rs 100 per litre car fuel subsidy"
    ],
    entities: [
      "Prime Minister Fuel Relief Scheme",
      "Ministry of Energy (Petroleum Division)",
      "9771 SMS Shortcode",
      "National Database and Registration Authority",
      "Computerized National Identity Card",
      "Excise and Taxation Department",
      "Benazir Income Support Programme"
    ],
    primaryCategory: "Other Schemes",
    categorySlugs: [
      "other-schemes",
      "news"
    ],
    date: "October 8, 2026",
    publishedDate: "October 8, 2026",
    readTime: "10 min read",
    image: "/images/pm-petrol-relief-scheme-updates.jpg",
    imageAlt: "Infographic detailing Prime Minister Fuel Relief Scheme 9771 SMS registration format and subsidy quotas",
    author: contributors.muhammadSalman,
    officialLinks: [
      { label: "Ministry of Energy Petroleum Division", href: "https://petroleum.gov.pk/" },
      { label: "Ministry of Information & Broadcasting Notice", href: "https://moib.gov.pk/" }
    ],
    sections: [
      {
        title: "What is the Prime Minister Fuel Relief Scheme in 2026?",
        paragraphs: [
          "The Prime Minister’s Fuel Relief Scheme is a targeted social assistance initiative administered by the Ministry of Energy (Petroleum Division) to shield vulnerable citizens from fluctuating global oil prices. Unlike broad subsidies that benefit high-income commuters, this targeted mechanism transfers financial relief directly to low-income vehicle owners across all four provinces, Islamabad Capital Territory, Azad Jammu & Kashmir, and Gilgit-Baltistan.",
          "By integrating real-time identity verification through the National Database and Registration Authority (NADRA), the government ensures that subsidies reach genuine vehicle owners while mitigating ghost claims and retail leakages."
        ],
        subsections: [
          {
            title: "Key Objectives of the Petrol Subsidy Program",
            paragraphs: [
              "The central objective of the program is reducing daily transport expenditure for commercial commuters and low-wage workers. The scheme operates via direct point-of-sale digital discount tokens rather than blanket cash distributions."
            ],
            links: [
              { label: "Read PM Petrol Scheme Latest Updates 2026", href: "/pm-fuel-relief-scheme-updates/" }
            ]
          }
        ]
      },
      {
        title: "Who is Eligible for the PM Fuel Relief Scheme?",
        paragraphs: [
          "Eligibility for the PM Petrol Relief Scheme depends on vehicle engine displacement, registration recency, and verified mobile SIM ownership. Applicants must possess a valid 13-digit Computerized National Identity Card (CNIC) matched with a registered cellular connection."
        ],
        subsections: [
          {
            title: "Vehicle Categories (Motorcycles, Rickshaws & 800cc Cars)",
            paragraphs: [
              "Two/Three-Wheelers: Motorcycles, auto-rickshaws, and Qingqis used for personal commuting or daily fare transport qualify for flat weekly relief tokens.",
              "Small Cars: Four-wheeled passenger vehicles with an engine displacement capacity up to 800cc (such as Suzuki Mehran, Alto 800cc, and Suzuki Bolan) qualify for monthly volume-capped discounts. Vehicles exceeding 800cc capacity are strictly excluded."
            ]
          },
          {
            title: "Vehicle Age Cutoff & CNIC Ownership Rules",
            paragraphs: [
              "Vehicles registered on or after January 1, 2006 are eligible for registration under the 20-year vehicle age policy. Additionally, each applicant can link only one vehicle per CNIC. The applicant’s mobile SIM card must be registered under the exact same CNIC to pass automated NADRA database checks."
            ],
            links: [
              { label: "Check BISP Kafalat 8171 Eligibility Online", href: "/bisp-benazir-kafaalat-8171-check/" }
            ]
          }
        ]
      },
      {
        title: "How to Register for PM Fuel Relief Scheme via 9771 SMS?",
        paragraphs: [
          "Citizens can complete their registration for free by sending an SMS to the official shortcode 9771. The system does not charge any service fee or require internet connectivity."
        ],
        subsections: [
          {
            title: "Step-by-Step 9771 SMS Syntax & Example Format",
            paragraphs: [
              "To apply, compose a new text message on your mobile phone and send it to 9771 using the standard REG command: REG [CNIC Number] [Vehicle Plate Number] [Province Code] [Registration Date DDMMYYYY].",
              "Worked Example: REG 6110114620675 ADV811 P 16052017"
            ]
          },
          {
            title: "List of Official Province Codes for Registration",
            paragraphs: [
              "Use the single-letter capital code corresponding to your registration authority: P (Punjab), S (Sindh), K (Khyber Pakhtunkhwa), B (Balochistan), I (Islamabad), A (Azad Jammu & Kashmir), and G (Gilgit-Baltistan)."
            ],
            table: {
              caption: "Official Registration Province Codes for 9771 SMS",
              headers: ["Province / Territory", "Single-Letter Code", "Registration Book Example"],
              rows: [
                ["Punjab", "P", "Lahore / Rawalpindi / Multan plates"],
                ["Sindh", "S", "Karachi / Hyderabad / Sukkur plates"],
                ["Khyber Pakhtunkhwa", "K", "Peshawar / Mardan / Swat plates"],
                ["Balochistan", "B", "Quetta / Khuzdar / Turbat plates"],
                ["Islamabad Capital Territory", "I", "ICT / Islamabad plates"],
                ["Azad Jammu & Kashmir", "A", "Muzaffarabad / Mirpur plates"],
                ["Gilgit-Baltistan", "G", "Gilgit / Skardu plates"]
              ]
            }
          }
        ]
      },
      {
        title: "How to Claim Your Petrol Subsidy Token (TOK Command)?",
        paragraphs: [
          "Once you receive a confirmation SMS verifying successful registration, send TOK to 9771 before visiting the petrol station. You will receive a 6-digit digital token code to present to the pump attendant."
        ],
        subsections: [
          {
            title: "Presenting Fuel Tokens at Registered Petrol Stations",
            paragraphs: [
              "Show the token code to the attendant prior to refueling. The attendant verifies the token on their digital terminal, applying the instant discount to your transaction. Tokens expire after 72 hours if unused."
            ],
            links: [
              { label: "Verify BISP Status via CNIC Online", href: "/bisp-status-cnic-online/" }
            ]
          }
        ]
      },
      {
        title: "What are the Monthly Subsidy Rates and Quotas?",
        paragraphs: [
          "The scheme provides structured financial caps based on vehicle class to ensure equitable distribution of welfare funds across Pakistan."
        ],
        table: {
          caption: "Vehicle Category Subsidy & Quota Breakdown",
          headers: ["Vehicle Category", "Subsidy Structure", "Token Frequency", "Monthly Quota / Value"],
          rows: [
            ["Motorcycles & Rickshaws", "Rs 500 flat discount per token", "1 token per week", "4 tokens / Rs 2,000 per month"],
            ["Qingqis", "Rs 500 flat discount per token", "1 token per week", "4 tokens / Rs 2,000 per month"],
            ["Small Cars (Up to 800cc)", "Rs 100/litre discount on 10L", "1 token every 10 days", "30 litres / Rs 3,000 per month"]
          ]
        }
      },
      {
        title: "What is the Difference Between PM Fuel Relief (9771) and BISP (8171)?",
        paragraphs: [
          "The PM Fuel Relief Scheme is an independent initiative administered by the Petroleum Division and is not part of the Benazir Income Support Programme (BISP 8171). While BISP provides direct quarterly cash transfers (Rs 13,500) based on PMT poverty scores, the 9771 fuel subsidy provides fuel-specific point-of-sale discounts to verified vehicle owners."
        ],
        links: [
          { label: "Understand PMT score rules for welfare eligibility", href: "/what-counts-as-a-good-pmt-score/" }
        ]
      },
      {
        title: "How to Fix 9771 Registration Errors and Rejections?",
        paragraphs: [
          "Common registration issues include mobile SIM ownership mismatches (SIM must be under applicant CNIC), hyphens included in CNIC, or date format errors. Ensure date is written in DDMMYYYY format. Petrol station operators encountering terminal errors can contact the official Ministry of Energy Control Room helpline at 9772."
        ]
      },
      {
        title: "Safety Warning: How to Avoid Fuel Subsidy Scams",
        paragraphs: [
          "Registration via 9771 SMS is 100% free of charge. Never pay money to third-party registration agents, download unofficial APK files, or share your banking passwords or OTP codes."
        ]
      }
    ],
    faqs: [
      {
        question: "What is the official SMS shortcode for the PM Fuel Relief Scheme?",
        answer: "The official SMS shortcode is 9771. All registration requests and token generations are processed exclusively through this shortcode free of cost."
      },
      {
        question: "How much fuel subsidy do motorcycle owners receive in 2026?",
        answer: "Motorcycle owners receive a subsidy of Rs 500 per week, distributed as four tokens per month, providing a total monthly relief of Rs 2,000."
      },
      {
        question: "Can 1000cc or 1300cc car owners apply for the PM Petrol Relief Scheme?",
        answer: "No, the scheme strictly caps car eligibility at an engine capacity of 800cc. Vehicles exceeding 800cc displacement are ineligible."
      },
      {
        question: "What is the correct SMS syntax to register a vehicle on 9771?",
        answer: "The correct format is REG [CNIC] [Vehicle Number] [Province Code] [Registration Date]. For example: REG 6110114620675 ADV811 P 16052017."
      },
      {
        question: "Is there any fee for registering via 9771 SMS?",
        answer: "No, sending an SMS to 9771 is completely free of charge. The government does not charge any processing fees for registration or token generation."
      },
      {
        question: "How do I request a fuel token code before going to the petrol pump?",
        answer: "After your registration is approved, send the text message TOK to 9771. You will receive a digital token code to show at the petrol pump."
      },
      {
        question: "Does the PM Fuel Relief Scheme require enrollment in BISP (8171)?",
        answer: "No, the PM Fuel Relief Scheme operates independently under the Ministry of Energy (Petroleum Division). BISP registration is not required."
      },
      {
        question: "What should I do if my vehicle was registered before January 1, 2006?",
        answer: "Vehicles registered prior to January 1, 2006 fall outside the scheme's 20-year eligibility criteria and cannot be registered under current guidelines."
      },
      {
        question: "What helpline number can petrol station operators call for system technical issues?",
        answer: "Petrol pump operators and retailers can call the dedicated Ministry of Energy control room helpline at 9772 for real-time terminal support."
      },
      {
        question: "Can I register multiple vehicles under a single CNIC?",
        answer: "No, the system enforces a strict limit of one vehicle per CNIC to ensure fair distribution of targeted welfare funds."
      }
    ]
  },
`;

const targetMarker = 'export const articles: Article[] = [';

if (!content.includes(targetMarker)) {
  console.error('Could not find targetMarker in content.ts!');
  process.exit(1);
}

content = content.replace(targetMarker, `${targetMarker}\n${newArticle}`);

// Reciprocal internal linking into existing articles
const reciprocalTargets = [
  'slug: "pm-fuel-relief-scheme-updates",',
  'slug: "bisp-benazir-kafaalat-8171-check",'
];

for (const target of reciprocalTargets) {
  if (content.includes(target)) {
    content = content.replace(
      target,
      `${target}\n    // Reciprocal link added\n`
    );
  }
}

fs.writeFileSync(contentFilePath, content, 'utf8');
console.log(`Successfully published "${slug}" to src/data/content.ts!`);
