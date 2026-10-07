import fs from 'fs';
import path from 'path';

const contentFilePath = path.resolve('src/data/content.ts');
let content = fs.readFileSync(contentFilePath, 'utf8');

const slug = "pm-fuel-relief-scheme-updates";

if (content.includes(`slug: "${slug}"`)) {
  console.log(`Article with slug "${slug}" already exists in content.ts!`);
  process.exit(0);
}

// Prepare the new article data
const newArticle = `  {
    slug: "${slug}",
    relatedSlugs: [
      "fuel-scheme-rs-100-per-litre-petrol-relief-guide",
      "pm-petrol-relief-scheme-updates-2026",
      "transport-fuel-relief-options-2026",
      "bisp-balance-check-by-cnic-2026"
    ],
    title: "PM Fuel Relief Scheme Updates: 9771 SMS Registration, Subsidy Rates & Eligibility Guide",
    excerpt: "Get the latest PM Fuel Relief Scheme updates for 2026. Learn how to register via 9771 SMS, verify vehicle eligibility (motorcycles & 800cc cars), and claim your fuel token.",
    showExcerpt: true,
    metaTitle: "PM Fuel Relief Scheme Updates 2026: 9771 SMS Registration & Eligibility",
    metaDescription: "Get the latest PM Fuel Relief Scheme updates for 2026. Learn how to register via 9771 SMS, verify vehicle eligibility (motorcycles & 800cc cars), and claim your fuel token.",
    focusKeyword: "PM Fuel Relief Scheme Updates",
    lsiKeywords: [
      "pm fuel relief scheme updates 2026",
      "pm fuel relief scheme registration sms format",
      "pm petrol relief scheme status check",
      "9771 sms format pm fuel relief",
      "9772 retailer helpline control room",
      "rs 500 weekly motorcycle fuel subsidy",
      "rs 100 per litre 800cc car fuel discount",
      "tok fuel token code 9771"
    ],
    entities: [
      "Prime Minister's Fuel Relief Scheme",
      "9771 SMS Gateway",
      "Ministry of Energy (Petroleum Division)",
      "National Database and Registration Authority",
      "Computerized National Identity Card",
      "Benazir Income Support Programme",
      "State Bank of Pakistan"
    ],
    primaryCategory: "Other Schemes",
    categorySlugs: [
      "other-schemes",
      "news"
    ],
    date: "October 7, 2026",
    publishedDate: "October 7, 2026",
    readTime: "10 min read",
    image: "/images/pm-petrol-relief-scheme-updates.jpg",
    imageAlt: "Official editorial banner showing PM Fuel Relief Scheme updates with 9771 SMS registration syntax and eligibility rules",
    author: contributors.muhammadSalman,
    officialLinks: [
      {
        label: "Ministry of Information & Broadcasting Fuel Scheme Notice",
        href: "https://moib.gov.pk/"
      },
      {
        label: "Ministry of Energy Petroleum Division",
        href: "https://petroleum.gov.pk/"
      }
    ],
    sections: [
      {
        title: "What is the PM Fuel Relief Scheme in 2026?",
        paragraphs: [
          "The Prime Minister’s Fuel Relief Scheme is a targeted social assistance initiative administered by the Ministry of Energy (Petroleum Division) to shield vulnerable citizens from fluctuating global oil prices. Unlike broad subsidies that benefit high-income commuters, this targeted mechanism transfers financial relief directly to low-income vehicle owners across all four provinces, Islamabad, Azad Jammu & Kashmir, and Gilgit-Baltistan.",
          "By integrating real-time identity verification through the National Database and Registration Authority (NADRA), the government ensures that subsidies reach genuine vehicle owners while mitigating ghost claims and retail leakages."
        ],
        subsections: [
          {
            title: "Key Objectives of the Petrol Subsidy Program",
            paragraphs: [
              "The central objective of the program is reducing daily transport expenditure for commercial commuters and low-wage workers. The scheme operates via direct point-of-sale digital discount tokens rather than blanket cash distributions."
            ],
            links: [
              {
                label: "read full Rs 100/litre fuel relief registration guide",
                href: "/fuel-scheme-rs-100-per-litre-petrol-relief-guide/"
              }
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
              {
                label: "how PMT scores affect government welfare eligibility",
                href: "/what-counts-as-a-good-pmt-score/"
              }
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
              "To apply, compose a text message: REG [CNIC Number] [Vehicle Plate Number] [Province Code] [Registration Date in DDMMYYYY] and send to 9771.",
              "Example: REG 6110114620675 ADV811 P 16052017 (for a vehicle registered on May 16, 2017 in Punjab)."
            ]
          },
          {
            title: "List of Official Province Codes for Registration",
            paragraphs: [
              "Use the single-letter capital code matching your registration authority: P (Punjab), S (Sindh), K (Khyber Pakhtunkhwa), B (Balochistan), I (Islamabad), A (Azad Kashmir), and G (Gilgit-Baltistan)."
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
        links: [
          {
            label: "check general 8171 CNIC balance and welfare eligibility online",
            href: "/bisp-balance-check-by-cnic-2026/"
          }
        ]
      },
      {
        title: "What are the Monthly Subsidy Rates and Quotas?",
        paragraphs: [
          "Motorcycles, Rickshaws, and Qingqis receive Rs 500 flat discount per token (1 token per week, totaling Rs 2,000 monthly). Small cars up to 800cc receive Rs 100 per litre discount on up to 30 litres per month (3 tokens of 10 litres every 10 days, saving Rs 3,000 monthly)."
        ],
        table: {
          caption: "Vehicle Category Subsidy & Quota Breakdown",
          headers: ["Vehicle Category", "Subsidy Structure", "Token Frequency", "Monthly Quota / Savings"],
          rows: [
            ["Motorcycles & Rickshaws", "Rs 500 flat discount", "1 token / week", "4 tokens (Rs 2,000 / month)"],
            ["Qingqis", "Rs 500 flat discount", "1 token / week", "4 tokens (Rs 2,000 / month)"],
            ["Small Cars (Up to 800cc)", "Rs 100/litre discount", "1 token / 10 days", "30 Litres (Rs 3,000 / month)"]
          ]
        }
      },
      {
        title: "What is the Difference Between PM Fuel Relief (9771) and BISP (8171)?",
        paragraphs: [
          "The PM Fuel Relief Scheme is an independent initiative administered by the Ministry of Energy (Petroleum Division) and is not part of the Benazir Income Support Programme (BISP 8171). While BISP provides direct quarterly cash transfers (Rs 13,500) based on PMT poverty scores, 9771 provides vehicle-specific point-of-sale discounts."
        ],
        links: [
          {
            label: "understanding BISP Kafalat status and CNIC checking",
            href: "/bisp-status-cnic-online/"
          }
        ]
      },
      {
        title: "How to Fix 9771 Registration Errors and Rejections?",
        paragraphs: [
          "Common issues include mobile SIM ownership mismatches (SIM must match CNIC),hyphens included in CNIC, or invalid date formats. Ensure date is in DDMMYYYY format. Petrol pump operators facing terminal errors can contact helpline 9772."
        ]
      },
      {
        title: "Safety Warning: How to Avoid Fuel Subsidy Scams",
        paragraphs: [
          "Registration via 9771 is 100% free. Never pay money to third-party registration agents, download unofficial APK files, or share your banking passwords."
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
  },`;

// Find where "export const articles: Article[] = [" is defined
const targetMarker = 'export const articles: Article[] = [';

if (!content.includes(targetMarker)) {
  console.error('Could not find targetMarker in content.ts!');
  process.exit(1);
}

content = content.replace(targetMarker, `${targetMarker}\n${newArticle}`);

// Also add reciprocal internal link to existing related article if found
const reciprocalTarget = 'slug: "pm-petrol-relief-scheme-updates-2026",';
if (content.includes(reciprocalTarget)) {
  content = content.replace(
    /slug:\s*"pm-petrol-relief-scheme-updates-2026",\s*relatedSlugs:\s*\[/,
    `slug: "pm-petrol-relief-scheme-updates-2026",\n    relatedSlugs: [\n      "${slug}",`
  );
  console.log('Added reciprocal relatedSlug link to pm-petrol-relief-scheme-updates-2026');
}

fs.writeFileSync(contentFilePath, content, 'utf8');
console.log(`Successfully published "${slug}" to src/data/content.ts!`);
