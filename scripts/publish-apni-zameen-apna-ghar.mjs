import fs from 'fs';
import path from 'path';

const contentFilePath = path.resolve('src/data/content.ts');
let content = fs.readFileSync(contentFilePath, 'utf8');

const slug = "apni-zameen-apna-ghar-balloting-result-2026";

if (content.includes(`slug: "${slug}"`)) {
  console.log("Article already exists in content.ts!");
  process.exit(0);
}

// Copy image to public/images if not present
const srcImg = path.resolve('public/images/cm-punjab-apni-chhat-apna-ghar-loan.jpg');
const destImg = path.resolve('public/images/apni-zameen-apna-ghar-balloting-result-2026.jpg');

if (fs.existsSync(srcImg) && !fs.existsSync(destImg)) {
  fs.copyFileSync(srcImg, destImg);
  console.log("Copied image to public/images/apni-zameen-apna-ghar-balloting-result-2026.jpg");
}

const articleObjectString = `  {
    slug: "apni-zameen-apna-ghar-balloting-result-2026",
    title: "Apni Zameen Apna Ghar Balloting Result 2026: How to Check CNIC Status & Plot Rules",
    excerpt: "Check the Apni Zameen Apna Ghar balloting result 2026 online by CNIC. Guide on Phase 1 winner status, 3-marla plot allocation, and rules after selection.",
    showExcerpt: true,
    metaTitle: "Apni Zameen Apna Ghar Balloting Result 2026: CNIC Check Online",
    metaDescription: "Check the Apni Zameen Apna Ghar balloting result 2026 online by CNIC. Guide on Phase 1 winner status, 3-marla plot allocation, and rules after selection.",
    focusKeyword: "apni zameen apna ghar balloting result 2026",
    lsiKeywords: [
      "apni zameen apna ghar balloting result 2026 cnic check",
      "azag punjab gov pk ballot result online",
      "apni zameen apna ghar Phase 1 winner list",
      "how to check 3 marla plot ballot result punjab",
      "apni zameen apna ghar 5 year sale ban"
    ],
    entities: [
      "Apni Zameen Apna Ghar Program",
      "Government of Punjab",
      "Maryam Nawaz Sharif",
      "CNIC Number",
      "Punjab Housing and Town Planning Agency",
      "3 Marla Free Plot"
    ],
    primaryCategory: "punjab-schemes",
    categorySlugs: [
      "punjab-schemes",
      "schemes"
    ],
    date: "September 28, 2026",
    publishedDate: "September 28, 2026",
    lastChecked: "September 28, 2026",
    readTime: "6 min read",
    image: "/images/apni-zameen-apna-ghar-balloting-result-2026.jpg",
    imageAlt: "Apni Zameen Apna Ghar Balloting Result 2026 CNIC Check Online",
    author: contributors.muhammadSalman,
    reviewer: contributors.saadHassan,
    officialLinks: [
      { label: "AZAG Official Result Portal", href: "https://azag.punjab.gov.pk/ballot/result" },
      { label: "Official AZAG Portal", href: "https://azag.punjab.gov.pk/" }
    ],
    sections: [
      {
        title: "How Do You Check the Apni Zameen Apna Ghar Balloting Result Online by CNIC?",
        paragraphs: [
          "To check your Apni Zameen Apna Ghar (AZAG) balloting result online, visit the official government web portal azag.punjab.gov.pk/ballot/result, enter your 13-digit CNIC number without dashes or spaces, solve the security Captcha image, and click Submit. Your status will display instantly on screen."
        ],
        subsections: [
          {
            title: "What Information Is Required on the Official AZAG Portal?",
            paragraphs: [
              "Checking your status on the official portal requires only your 13-digit Computerized National Identity Card (CNIC) number issued by NADRA. You do not need a password or registration tracking number. Ensure you enter the CNIC digits continuously (for example, 3520212345671) and complete the visual Captcha code correctly. The service is completely free, and no fee is charged for checking your result online."
            ]
          },
          {
            title: "What Do the Different Balloting Statuses Mean?",
            paragraphs: [
              "When you submit your CNIC on the portal, system records return one of three official status classifications. Selected means your CNIC won a free 3-marla plot in Phase 1; Not Selected means your application was eligible but not drawn; and Pending / Under Verification means documents or residency details are currently undergoing audit."
            ],
            table: {
              caption: "AZAG CNIC Balloting Result Status Decoder 2026",
              headers: ["Portal Status Output", "Meaning of Result", "Immediate Required Action"],
              rows: [
                ["Selected / Successful", "Your CNIC won a free 3-marla plot in the Phase 1 balloting.", "Await official SMS/call; collect your Allotment Letter from PHATA."],
                ["Not Selected", "Your application was eligible but not drawn in the Phase 1 allotment.", "Retain your application records for Phase 2 or sister housing schemes."],
                ["Pending / Under Verification", "Documents or residency verification are currently undergoing audit.", "Contact the official helpline at 0800-09100 or visit your local PHATA office."]
              ]
            }
          }
        ]
      },
      {
        title: "What Is the Apni Zameen Apna Ghar (AZAG) Scheme Quota for Phase 1?",
        paragraphs: [
          "The Phase 1 quota of the Apni Zameen Apna Ghar scheme comprises 2,000 free 3-marla residential plots allocated across low-income families in Punjab. Initiated by Chief Minister Maryam Nawaz Sharif and executed by the Punjab Housing and Town Planning Agency (PHATA), the program targets homeless and landless citizens."
        ],
        subsections: [
          {
            title: "Which 19 Districts Are Included in the 2,000-Plot Distribution?",
            paragraphs: [
              "The 2,000 free plots in Phase 1 are distributed across 19 designated districts in Punjab where state land was cleared and developed by PHATA. Key participating districts include Lahore, Rawalpindi, Faisalabad, Sargodha, Gujranwala, Sialkot, Kasur, Multan, Bahawalpur, Dera Ghazi Khan, Rahim Yar Khan, Muzaffargarh, Sahiwal, Jhang, Okara, Sheikhupura, Attock, Chakwal, and Mianwali."
            ]
          },
          {
            title: "Who Was Eligible to Participate in the Balloting?",
            paragraphs: [
              "Eligibility for the AZAG balloting required applicants to be permanent residents and CNIC holders of Punjab with a verified family income below Rs. 60,000 per month. Applicants could not own any residential property anywhere in Pakistan and had to be registered in the Punjab Socio-Economic Registry (PSER). Only one application per household unit was permitted to maintain social equity."
            ]
          }
        ]
      },
      {
        title: "What Should You Do If Selected in the AZAG Balloting Result?",
        paragraphs: [
          "If your CNIC is marked as Selected in the Apni Zameen Apna Ghar balloting result, you must follow official post-selection protocols to claim physical possession of your 3-marla plot. Winners must obtain their Allotment Letter from PHATA and comply with strict state construction guidelines."
        ],
        subsections: [
          {
            title: "What Are the Possession and Allotment Letter Procedures?",
            paragraphs: [
              "Selected applicants must visit their designated district PHATA office or e-Khidmat Markaz with their original CNIC, original domicile certificate, and two passport-sized photographs. Upon biometric verification, PHATA issues the physical Allotment Letter specifying your scheme location, block number, and exact 3-marla plot number."
            ]
          },
          {
            title: "How Does the 6-Month Construction Rule Apply to Winners?",
            paragraphs: [
              "Under Section 14 of the scheme framework, every successful beneficiary must initiate house construction within 6 months of taking physical plot possession. This rule prevents speculative land holding and ensures that allocated plots serve immediate family housing needs. Failure to start construction within the stipulated timeframe without valid justification can lead to cancellation of the allotment."
            ]
          },
          {
            title: "Can You Sell or Transfer Your Allotted 3-Marla Plot Before 5 Years?",
            paragraphs: [
              "No, beneficiaries cannot sell, transfer, rent, or mortgage their allotted plot for a mandatory period of 5 years from the date of allotment. The Government of Punjab retains underlying title conditions during this non-transferable window to prevent property dealers and commercial investors from exploiting low-income beneficiaries."
            ]
          }
        ]
      },
      {
        title: "Can AZAG Plot Winners Apply for the Apni Chhat Apna Ghar (ACAG) Construction Loan?",
        paragraphs: [
          "Yes, winners of free plots under the Apni Zameen Apna Ghar (AZAG) program are fully eligible to apply for the Apni Chhat Apna Ghar (ACAG) interest-free construction loan scheme.",
          "Once you possess your 3-marla plot allotment letter, you can apply through acag.punjab.gov.pk for an interest-free loan of up to Rs. 1,500,000 (15 Lac PKR) to construct your home. The loan carries 0% interest, a 7-year repayment tenure, and monthly installments of approximately Rs. 14,000 starting after first disbursement."
        ]
      },
      {
        title: "What Should You Do If Your Balloting Result Shows Not Selected or Pending?",
        paragraphs: [
          "If your result shows Not Selected, your application remains registered in the housing database for potential future phases or supplementary allotments. If your status shows Pending, submit an inquiry to the Punjab Information Technology Board (PITB) helpline at 0800-09100 or visit the nearest e-Khidmat Markaz to clear document discrepancies."
        ]
      },
      {
        title: "How Can You Avoid Scams and Verify Official AZAG Communications?",
        paragraphs: [
          "All official communications regarding the Apni Zameen Apna Ghar program are conducted exclusively through official government domains (.punjab.gov.pk) and official SMS handles (such as 8171 or 8070).",
          "The Government of Punjab never asks for processing fees, cash deposits, or bank transfers over phone calls or WhatsApp to issue allotment letters. Report any suspicious demands to the official helpline 0800-09100 immediately."
        ]
      }
    ],
    faqs: [
      {
        question: "Is the 3-marla plot in the Apni Zameen Apna Ghar scheme completely free?",
        answer: "Yes, the 3-marla residential plot awarded through the AZAG balloting is 100% free of land cost for successful eligible applicants. Winners are not required to pay land purchase fees to the government."
      },
      {
        question: "Where can I check the Apni Zameen Apna Ghar balloting result online?",
        answer: "You can check your balloting result online by visiting the official Punjab Government portal at azag.punjab.gov.pk/ballot/result and entering your 13-digit CNIC number."
      },
      {
        question: "Can I check the AZAG balloting result by sending an SMS?",
        answer: "Currently, official web verification at azag.punjab.gov.pk/ballot/result is the primary real-time method. Official SMS notifications are sent directly by the government to selected winners on their registered mobile numbers."
      },
      {
        question: "What should I do if the result portal displays Invalid CNIC?",
        answer: "Double-check that you entered all 13 digits of your CNIC correctly without hyphens or spaces. If the message persists, verify whether your initial application was successfully submitted during the open registration window."
      },
      {
        question: "Can a selected applicant sell the plot immediately after winning?",
        answer: "No, successful applicants cannot sell, lease, or transfer their plot for at least 5 years from the date of receiving possession."
      },
      {
        question: "How much time is given to start constructing a house on the allotted plot?",
        answer: "Beneficiaries are legally required to begin house construction within 6 months of obtaining physical possession of their plot."
      },
      {
        question: "Can I get a loan to build a house on my newly allotted 3-marla plot?",
        answer: "Yes, AZAG plot winners can apply for the Apni Chhat Apna Ghar (ACAG) interest-free construction loan scheme to receive up to Rs. 15 Lacs for building their house."
      },
      {
        question: "Which department oversees plot allotments under the AZAG scheme?",
        answer: "The Punjab Housing and Town Planning Agency (PHATA), under the Housing, Urban Development & Public Health Engineering Department (HUD&PHED), manages plot allotments and physical handovers."
      },
      {
        question: "Are there any application or processing fees to collect the Allotment Letter?",
        answer: "No, official allotment processing is transparent and free of illegal surcharge fees. Only standard civic documentation verification is required at PHATA offices."
      },
      {
        question: "Who can I contact for official help regarding my AZAG balloting status?",
        answer: "You can call the official Punjab Government toll-free helpline at 0800-09100 or visit your district e-Khidmat Markaz for direct administrative support."
      }
    ]
  },
`;

// Insert right after "export const articles: Article[] = ["
const articlesMarker = 'export const articles: Article[] = [';
const insertPos = content.indexOf(articlesMarker);

if (insertPos === -1) {
  console.error("Could not find articles marker in content.ts");
  process.exit(1);
}

const updatedContent = content.slice(0, insertPos + articlesMarker.length) + "\n" + articleObjectString + content.slice(insertPos + articlesMarker.length);

fs.writeFileSync(contentFilePath, updatedContent, 'utf8');
console.log("Successfully inserted Apni Zameen Apna Ghar Balloting Result 2026 article into content.ts!");
