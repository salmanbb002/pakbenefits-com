import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright-core';

const root = process.cwd();
const contentFilePath = path.resolve(root, 'src/data/content.ts');

async function generateHeroImage() {
  console.log('Generating 1200x675 hero banner for Provincial Bike & Transport Schemes...');
  try {
    const browser = await chromium.launch({ channel: 'msedge', headless: true });
    const page = await browser.newPage({
      viewport: { width: 1200, height: 675 }
    });

    const b = {
      theme: 'linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #047857 100%)',
      badgeText: 'Provincial Transport Schemes 2026',
      yearBadge: 'Punjab • Sindh • KPK • Federal',
      title: 'Provincial Bike & Transport Schemes',
      desc: 'Complete 2026 Guide to CM Punjab E-Bikes, Sindh Pink Scooty, KP EV Policy, and Federal PAVE Subsidies',
      stats: [
        { label: 'Punjab E-Bikes', val: '100,000 Quota' },
        { label: 'Financing Rate', val: '0% Interest' },
        { label: 'Monthly Payment', val: 'Rs. 3,028 / mo' },
        { label: 'Repayment Plan', val: '3 Years (36 Mo)' }
      ]
    };

    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
        body {
          width: 1200px;
          height: 675px;
          background: ${b.theme};
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 56px 64px;
          position: relative;
          overflow: hidden;
        }
        .bg-circle1 {
          position: absolute;
          width: 650px;
          height: 650px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(0,0,0,0) 70%);
          top: -200px;
          right: -150px;
          pointer-events: none;
        }
        .bg-circle2 {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(0,0,0,0) 70%);
          bottom: -150px;
          left: -100px;
          pointer-events: none;
        }
        .header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 10;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .brand-icon {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: #10b981;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 24px;
          color: #064e3b;
        }
        .brand-name {
          font-size: 20px;
          font-weight: 700;
          letter-spacing: -0.5px;
          color: #f1f5f9;
        }
        .badges {
          display: flex;
          gap: 12px;
        }
        .badge {
          padding: 8px 16px;
          border-radius: 9999px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .badge-category {
          background: rgba(16, 185, 129, 0.25);
          color: #6ee7b7;
          border: 1px solid rgba(52, 211, 153, 0.4);
        }
        .badge-year {
          background: rgba(255, 255, 255, 0.12);
          color: #e2e8f0;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .content {
          z-index: 10;
          max-width: 980px;
          margin-top: 10px;
        }
        .title {
          font-size: 48px;
          line-height: 1.15;
          font-weight: 900;
          letter-spacing: -1.5px;
          color: #ffffff;
          margin-bottom: 18px;
          text-shadow: 0 4px 12px rgba(0,0,0,0.4);
        }
        .desc {
          font-size: 21px;
          line-height: 1.45;
          color: #cbd5e1;
          font-weight: 400;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          z-index: 10;
        }
        .stat-card {
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(52, 211, 153, 0.25);
          border-radius: 14px;
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .stat-val {
          font-size: 22px;
          font-weight: 800;
          color: #34d399;
          margin-bottom: 4px;
        }
        .stat-label {
          font-size: 13px;
          font-weight: 500;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
      </style>
    </head>
    <body>
      <div class="bg-circle1"></div>
      <div class="bg-circle2"></div>

      <div class="header-row">
        <div class="brand">
          <div class="brand-icon">&#10003;</div>
          <div class="brand-name">PakBenefits.com</div>
        </div>
        <div class="badges">
          <div class="badge badge-category">${b.badgeText}</div>
          <div class="badge badge-year">${b.yearBadge}</div>
        </div>
      </div>

      <div class="content">
        <h1 class="title">${b.title}</h1>
        <p class="desc">${b.desc}</p>
      </div>

      <div class="stats-grid">
        ${b.stats.map(s => `
          <div class="stat-card">
            <div class="stat-val">${s.val}</div>
            <div class="stat-label">${s.label}</div>
          </div>
        `).join('')}
      </div>
    </body>
    </html>
    `;

    await page.setContent(html);
    await page.waitForTimeout(400);

    const outPathWebp = path.resolve('public/images/provincial-bike-transport-schemes.webp');
    const outPathJpg = path.resolve('public/images/provincial-bike-transport-schemes.jpg');

    await page.screenshot({ path: outPathWebp, type: 'webp', quality: 90 });
    await page.screenshot({ path: outPathJpg, type: 'jpeg', quality: 90 });

    console.log(`Saved hero images to ${outPathWebp} and ${outPathJpg}`);
    await browser.close();
  } catch (err) {
    console.error('Error generating image via chromium:', err.message);
  }
}

async function main() {
  await generateHeroImage();

  let content = fs.readFileSync(contentFilePath, 'utf8');
  const slug = 'provincial-bike-transport-schemes';

  if (content.includes(`slug: "${slug}"`)) {
    console.log(`Article ${slug} already exists in content.ts!`);
    return;
  }

  const articleCode = `  {
    slug: "provincial-bike-transport-schemes",
    relatedSlugs: [
      "cm-punjab-e-bike-scheme-updates",
      "pink-scooty-scheme-2026-registration-eligibility-documents-balloting",
      "pave-electric-bike-scheme",
      "provincial-regional-schemes",
      "how-to-apply-cm-punjab-e-bike-scheme-2026"
    ],
    title: "Provincial Bike & Transport Schemes in Pakistan: 2026 Guide to Punjab, Sindh & KPK Initiatives",
    excerpt: "Discover all 2026 Provincial Bike & Transport Schemes in Pakistan. Compare CM Punjab E-Bikes, Sindh Pink Scooty, KP EV policy, and federal PAVE programs across eligibility, 0% interest monthly installments, and online portal links.",
    showExcerpt: true,
    metaTitle: "Provincial Bike & Transport Schemes 2026: Apply Online & Eligibility",
    metaDescription: "Complete guide to active Provincial Bike & Transport Schemes in Pakistan for 2026. Compare eligibility, 0% interest monthly installments, and online portals for Punjab, Sindh, KPK, and federal PAVE.",
    focusKeyword: "provincial bike & transport schemes",
    lsiKeywords: [
      "punjab e-bike scheme 2026 online apply",
      "sindh pink scooty scheme registration 2026",
      "kpk electric bike scheme for female students",
      "bop bike scheme monthly installment calculator",
      "pave electric bike scheme application portal",
      "bike scheme eligibility by cnic 2026"
    ],
    entities: [
      "Chief Minister Punjab E-Bike Scheme",
      "Government of Punjab Transport Department",
      "Bank of Punjab (BOP)",
      "bikes.punjab.gov.pk",
      "Sindh Mass Transit Authority (SMTA)",
      "Sindh Pink Scooty Scheme",
      "KP Transport & Mass Transit Department",
      "Pakistan Accelerated Vehicle Electrification (PAVE)",
      "Valid Driving License / Learner Permit",
      "CNIC Verification (NADRA)",
      "0% Interest Financing",
      "9771 Fuel Relief SMS Service"
    ],
    primaryCategory: "Other Schemes",
    categorySlugs: ["punjab-schemes", "other-schemes"],
    date: "October 4, 2026",
    publishedDate: "October 4, 2026",
    lastChecked: "October 4, 2026",
    readTime: "10 min read",
    image: "/images/provincial-bike-transport-schemes.jpg",
    imageAlt: "Provincial Bike and Transport Schemes 2026 Complete Eligibility and Online Application Guide Pakistan",
    author: contributors.muhammadSalman,
    sections: [
      {
        title: "What Are the Active Provincial Bike and Transport Schemes in 2026?",
        paragraphs: [
          "Provincial governments across Pakistan have launched targeted urban transit and two-wheeler schemes to reduce commuting costs and foster green energy adoption. These initiatives combine interest-free banking loans, capital subsidies, and gender-focused transport grants to support higher education students and female professionals."
        ],
        subsections: [
          {
            title: "CM Punjab E-Bike Scheme: Features, Subsidy & Quotas",
            paragraphs: [
              "The Chief Minister Punjab E-Bike Scheme provides 100,000 electric and petrol motorbikes to bonafide college and university students across Punjab. Administered by the Government of Punjab Transport Department alongside the Punjab Information Technology Board (PITB), the program covers full registration fees, token taxes, and initial insurance costs. Financed through the Bank of Punjab (BOP), the provincial government pays a capital subsidy exceeding Rs. 20,000 per vehicle while absorbing all bank interest markups. Official applications are processed exclusively online through bikes.punjab.gov.pk."
            ]
          },
          {
            title: "Sindh Pink Scooty Scheme: Free EV Transport for Women",
            paragraphs: [
              "The Sindh Female EV Mobility Initiative, commonly known as the Pink Scooty Scheme, delivers electric scooters to working women and female university students in major urban centers. Managed by the Sindh Mass Transit Authority (SMTA) under the Transport & Mass Transit Department, Government of Sindh, the scheme offers free or heavily subsidized EV two-wheelers in Karachi, Hyderabad, Sukkur, Larkana, and Shaheed Benazirabad. Beneficiaries receive driving instruction support and helmet packages, provided they possess a valid motorcycle driving license verified on the SMTA portal (smta.gos.pk)."
            ]
          },
          {
            title: "KPK Electric Bike & Urban Transport Policy",
            paragraphs: [
              "The Khyber Pakhtunkhwa Transport & Mass Transit Department operates a merit-based electric bike program aimed at female students and government office workers. The policy provides electric scooters with zero carbon emissions to lessen the financial burden of daily transit in Peshawar, Abbottabad, and Mardan. Selected candidates receive subsidized electric bikes alongside dedicated battery charging access points in public institutions."
            ]
          },
          {
            title: "Federal PAVE Scheme & National Fuel Relief Program",
            paragraphs: [
              "The Pakistan Accelerated Vehicle Electrification (PAVE) initiative serves as a federal umbrella framework supporting electric two-wheeler and three-wheeler manufacturing. Operated via pave.gov.pk, PAVE partners with commercial banks to offer standardized 0% interest installment loans nationwide. Additionally, the federal government maintains the 9771 SMS Fuel Relief Service, enabling registered motorcycle and rickshaw owners to check monthly targeted fuel subsidies by texting their CNIC and vehicle registration numbers to 9771."
            ]
          }
        ],
        links: [
          { label: "CM Punjab E-Bike Scheme 2026 Details", href: "/cm-punjab-e-bike-scheme-updates/" },
          { label: "Sindh Pink Scooty Registration Guide", href: "/pink-scooty-scheme-2026-registration-eligibility-documents-balloting/" }
        ]
      },
      {
        title: "Who Is Eligible for Provincial Bike Schemes in Pakistan?",
        paragraphs: [
          "Eligibility criteria for provincial transport programs enforce strict educational, age, and identity standards to ensure resources reach intended beneficiaries."
        ],
        subsections: [
          {
            title: "Age, Student Enrollment & Income Requirements",
            paragraphs: [
              "Applicants for the Punjab E-Bike scheme must be active students enrolled in regular degree programs at recognized public or private universities or graduate colleges. Candidates must be between 18 and 60 years old and present a verified CNIC issued by NADRA. For female-specific initiatives in Sindh and KPK, applicants must submit proof of employment or current academic enrollment along with household income declarations."
            ]
          },
          {
            title: "Driving License and Learner Permit Mandates",
            paragraphs: [
              "A mandatory prerequisite across all provincial bike schemes is holding a valid driving license or a traffic police learner permit. Applicants must upload a digital copy of their valid motorcycle license or learner permit during portal registration. Candidates applying without a verified license or permit face immediate application disqualification during the automated verification phase."
            ]
          }
        ],
        links: [
          { label: "How to Apply for CM Punjab E-Bike Scheme", href: "/how-to-apply-cm-punjab-e-bike-scheme-2026/" }
        ]
      },
      {
        title: "How Do You Apply Online for Provincial Bike & Transport Schemes?",
        paragraphs: [
          "Applying for provincial transport schemes requires submitting verified documents through designated government portals."
        ],
        subsections: [
          {
            title: "Step-by-Step Registration on bikes.punjab.gov.pk",
            paragraphs: [
              "Visit the official Punjab bike portal at bikes.punjab.gov.pk and create an applicant account using your CNIC number and mobile phone.",
              "Select your institution category (Public or Private) and choose your preferred vehicle type (Electric Bike or Petrol Bike).",
              "Fill in academic details, including your university roll number and current semester status.",
              "Upload required scanned attachments: CNIC front/back, student ID card, recent photograph, and driving license/learner permit.",
              "Review the legal affidavit regarding loan repayment and submit the online application before the announced deadline."
            ]
          },
          {
            title: "Registering for the Sindh Pink Scooty via SMTA",
            paragraphs: [
              "Female applicants in Sindh must navigate to smta.gos.pk/pink-scooty-registration to register. After entering basic personal information and district selection, candidates submit proof of residence (domicile/PRC) and workplace or university verification. Successful applicants are shortlisted based on district quotas and notified via official SMS for physical document verification."
            ]
          },
          {
            title: "Documents Required for CNIC and Bank Verification",
            paragraphs: [
              "Before beginning the online application, ensure you have clear digital copies of the following documents ready:"
            ],
            bullets: [
              "Valid NADRA CNIC or Smart Card of the applicant.",
              "Active Student ID Card or formal Employment Certificate.",
              "Valid Traffic Police Driving License or Learner Permit.",
              "Guardian/Parent CNIC (required for student bank guarantors).",
              "Recent passport-sized photograph with a light background.",
              "Utility bill (electricity or gas) corresponding to your home address."
            ]
          }
        ],
        links: [
          { label: "Federal PAVE Electric Bike Scheme Guide", href: "/pave-electric-bike-scheme/" }
        ]
      },
      {
        title: "What Are the Financial Terms and Monthly Installments?",
        paragraphs: [
          "Provincial schemes incorporate subsidized financial structures designed to keep monthly payments affordable for students and low-income workers."
        ],
        subsections: [
          {
            title: "Bank of Punjab (BOP) 0% Interest Payment Plan",
            paragraphs: [
              "Financing for the Punjab CM E-Bike program is structured over a 36-month (3-year) repayment cycle administered by the Bank of Punjab (BOP). Under this arrangement, electric bike monthly installments are capped at approximately Rs. 3,028 per month, while petrol bike installments average Rs. 5,000 per month. The Government of Punjab pays all bank interest markups directly to BOP, ensuring beneficiaries pay zero interest markup over the loan tenure."
            ]
          },
          {
            title: "Subsidies Covered by Provincial Governments",
            paragraphs: [
              "Provincial governments absorb significant upfront vehicle charges to minimize out-of-pocket costs for applicants."
            ],
            table: {
              caption: "Government Subsidies Breakdown",
              headers: ["Expense Category", "Beneficiary Cost", "Government Subsidy Portion"],
              rows: [
                ["Bank Interest Markup", "Rs. 0 (0% Markup)", "100% paid by Provincial Government"],
                ["Vehicle Down Payment", "Rs. 0 (Zero Down)", "100% covered by Capital Subsidy (Rs. 20k+)"],
                ["Registration & License Plate", "Rs. 0", "Fully subsidized by Excise Department"],
                ["First-Year Comprehensive Insurance", "Rs. 0", "Fully paid by Provincial Government"],
                ["Annual Token Tax", "Rs. 0", "Covered for the entire 3-year loan period"]
              ]
            }
          }
        ]
      },
      {
        title: "Provincial Bike Schemes 2026 Comparison Matrix",
        paragraphs: [
          "The table below outlines key operational differences across Pakistan's active provincial and federal bike programs:"
        ],
        table: {
          caption: "Provincial Bike Schemes 2026 Comparison Matrix",
          headers: ["Scheme Name", "Target Audience", "Primary Sponsor / Bank", "Vehicle Type", "Monthly Installment", "License Mandate", "Official Portal"],
          rows: [
            ["CM Punjab E-Bike Scheme", "University & College Students", "Punjab Govt / BOP / PITB", "Electric & Petrol Bikes", "~Rs. 3,028 / mo (0% Interest)", "Driving License or Learner Permit", "bikes.punjab.gov.pk"],
            ["Sindh Pink Scooty Scheme", "Working Women & Female Students", "Sindh Govt / SMTA", "Electric Scooters", "Free / Fully Subsidized", "Motorcycle Driving License", "smta.gos.pk"],
            ["KPK EV Bike Initiative", "Female Students & Public Workers", "KP Transport Dept", "Electric Scooters", "Subsidized Installments", "Learner Permit / License", "kp.gov.pk"],
            ["Federal PAVE Scheme", "General Public & EV Buyers", "Federal Govt / Commercial Banks", "EV 2-Wheelers & 3-Wheelers", "Bank-Specific (0% Markup)", "Valid CNIC & License", "pave.gov.pk"]
          ]
        },
        links: [
          { label: "Provincial & Regional Schemes Master List", href: "/provincial-regional-schemes/" }
        ]
      },
      {
        title: "Common Application Errors & How to Avoid Online Scams",
        paragraphs: [
          "With high demand for government transport schemes, applicants must guard against official missteps and fraudulent online portals."
        ],
        bullets: [
          "Avoid Unofficial Payment Requests: Government bike portals do not request application submission fees via personal JazzCash, EasyPaisa, or private bank accounts. All processing fees, if any, are paid directly at authorized bank branches (e.g., Bank of Punjab).",
          "Verify .gov.pk Web Domain: Only submit personal details on websites ending in .gov.pk. Fake portals often use .com, .org, or .net extensions to harvest CNIC data.",
          "Double-Check License Expiry: Ensure your learner permit or driving license is active throughout the verification window. Expired permits lead to instant portal rejection.",
          "Maintain Accurate Guarantor Info: Student applications require a parent or guardian as a co-borrower/guarantor. Ensure your guarantor has a clean credit history with no active bank defaults."
        ]
      }
    ],
    faqs: [
      {
        question: "Who is eligible to apply for the Punjab CM E-Bike Scheme?",
        answer: "Eligible applicants must be bonafide students enrolled in a recognized public or private university or graduate college in Punjab, aged 18 to 60, holding a valid CNIC and an active driving license or traffic police learner permit."
      },
      {
        question: "What is the monthly installment for an electric bike under the Punjab scheme?",
        answer: "The monthly installment for an electric bike is approximately Rs. 3,028 per month spread over a 3-year (36-month) repayment plan, with zero interest markup and zero down payment."
      },
      {
        question: "Can female students apply for petrol bikes in Punjab?",
        answer: "Yes, female students can choose between electric bikes and petrol bikes. Special quotas are reserved for female applicants in both categories."
      },
      {
        question: "How do working women apply for the Sindh Pink Scooty Scheme?",
        answer: "Working women in Sindh can register online through the Sindh Mass Transit Authority portal at smta.gos.pk by providing proof of employment, residence (domicile), and a valid driving license."
      },
      {
        question: "Is a driving license mandatory to receive a bike?",
        answer: "Yes, holding a valid driving license or an official traffic police learner permit is compulsory across all provincial schemes before vehicle delivery."
      },
      {
        question: "What happens if applicant demand exceeds the available bike quota?",
        answer: "If total eligible applications exceed the provincial quota (e.g., 100,000 bikes in Punjab), a transparent electronic balloting process is conducted by PITB to select final beneficiaries."
      },
      {
        question: "Does the government cover vehicle insurance and registration taxes?",
        answer: "Yes, provincial governments cover upfront costs including registration fees, token taxes, and first-year comprehensive insurance."
      },
      {
        question: "What is the federal 9771 SMS Fuel Relief service?",
        answer: "The 9771 service allows registered motorcycle owners to text their CNIC and vehicle registration details to 9771 to check eligibility for federal monthly fuel subsidies."
      },
      {
        question: "Can students with an existing bank loan default apply?",
        answer: "No, applicants or their financial guarantors (parents/guardians) with active credit defaults on the e-CIB credit database will not qualify for bank loan approval."
      },
      {
        question: "Where can applicants track their application status online?",
        answer: "Applicants can track their status by logging into their respective portal accounts at bikes.punjab.gov.pk for Punjab or smta.gos.pk for Sindh using their CNIC number."
      }
    ],
    officialLinks: [
      { label: "Punjab E-Bikes Official Portal", href: "https://bikes.punjab.gov.pk/" },
      { label: "Sindh Mass Transit Authority (SMTA)", href: "https://smta.gos.pk/" },
      { label: "KP Transport & Mass Transit Department", href: "https://kp.gov.pk/" },
      { label: "Federal PAVE Electric Vehicle Portal", href: "https://pave.gov.pk/" }
    ]
  },
`;

  // Insert article into articles array in content.ts
  const insertPos = content.indexOf('export const articles: Article[] = [');
  if (insertPos === -1) {
    console.error('Could not find articles array start!');
    process.exit(1);
  }

  const bracketPos = content.indexOf('[', insertPos);
  content = content.slice(0, bracketPos + 1) + '\n' + articleCode + content.slice(bracketPos + 1);

  // Interlink: add internal links to provincial-bike-transport-schemes inside related articles
  const interlinkTargets = [
    'slug: "cm-punjab-e-bike-scheme-updates"',
    'slug: "pink-scooty-scheme-2026-registration-eligibility-documents-balloting"',
    'slug: "pave-electric-bike-scheme"',
    'slug: "provincial-regional-schemes"',
    'slug: "how-to-apply-cm-punjab-e-bike-scheme-2026"'
  ];

  let interlinkCount = 0;
  for (const targetStr of interlinkTargets) {
    const pos = content.indexOf(targetStr);
    if (pos !== -1) {
      const linksPos = content.indexOf('links: [', pos);
      if (linksPos !== -1 && linksPos < pos + 5000) {
        const linkInsert = `\n          { label: "Provincial Bike & Transport Schemes 2026 Guide", href: "/provincial-bike-transport-schemes/" },`;
        const insertAfter = content.indexOf('[', linksPos) + 1;
        content = content.slice(0, insertAfter) + linkInsert + content.slice(insertAfter);
        interlinkCount++;
      } else {
        // If article has no links array yet, add one under the first section
        const sectionPos = content.indexOf('paragraphs: [', pos);
        if (sectionPos !== -1) {
          const insertAfterPara = content.indexOf(']', sectionPos) + 1;
          const linkCode = `,\n        links: [\n          { label: "Provincial Bike & Transport Schemes 2026 Guide", href: "/provincial-bike-transport-schemes/" }\n        ]`;
          content = content.slice(0, insertAfterPara) + linkCode + content.slice(insertAfterPara);
          interlinkCount++;
        }
      }
    }
  }

  fs.writeFileSync(contentFilePath, content, 'utf8');
  console.log(`Successfully added article ${slug} and interlinked in ${interlinkCount} articles!`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
