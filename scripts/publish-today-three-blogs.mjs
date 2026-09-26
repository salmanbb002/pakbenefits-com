import fs from 'fs';
import path from 'path';

const contentFilePath = path.resolve('src/data/content.ts');
let content = fs.readFileSync(contentFilePath, 'utf8');

const article1 = `  {
    slug: "bisp-taleemi-wazaif-70-attendance-rule-verification",
    title: "BISP Taleemi Wazaif 70% Attendance Rule & Verification Procedure",
    excerpt: "The Benazir Taleemi Wazaif 70% attendance rule requires registered students to maintain at least 70% classroom attendance per quarter to receive cash stipends. Learn how to verify and clear blocked wazaif at BISP Tehsil Offices.",
    showExcerpt: true,
    metaTitle: "BISP Taleemi Wazaif 70 Attendance Rule Verification Guide (2026)",
    metaDescription: "Facing stipend stoppage due to the BISP Taleemi Wazaif 70% attendance rule? Learn why wazaif get blocked and step-by-step verification slip resubmission.",
    focusKeyword: "bisp taleemi wazaif 70 attendance rule verification",
    lsiKeywords: [
      "bisp wazaif band hone ki waja",
      "bisp 70 attendance rule verification",
      "taleemi wazaif school slip resubmission",
      "bisp school headmaster verification slip",
      "bisp taleemi wazaif compliance monitoring system",
      "bisp wazaif blocked stipend restoration"
    ],
    entities: [
      "Benazir Taleemi Wazaif",
      "Benazir Income Support Programme",
      "National Database and Registration Authority",
      "8171 Web Portal",
      "BISP Tehsil Office",
      "BISP Compliance Monitoring System"
    ],
    primaryCategory: "taleemi-wazaif",
    categorySlugs: [
      "taleemi-wazaif",
      "bisp-registration",
      "8171"
    ],
    date: "September 26, 2026",
    publishedDate: "September 26, 2026",
    lastChecked: "September 26, 2026",
    readTime: "8 min read",
    image: "/images/bisp-taleemi-wazaif-70-attendance-rule-verification.jpg",
    imageAlt: "School student presenting BISP Taleemi Wazaif attendance verification slip to school headmaster",
    author: contributors.muhammadSalman,
    reviewer: contributors.ayeshaMalik,
    sections: [
      {
        title: "What Is the BISP Taleemi Wazaif 70 Attendance Rule?",
        paragraphs: [
          "The Benazir Taleemi Wazaif 70 attendance rule is a mandatory conditional cash transfer requirement established by the Benazir Income Support Programme (BISP) for active Kafaalat beneficiary families. Under this policy, enrolled primary, secondary, and higher secondary students must attend school for a minimum of 70% of total academic days in each quarterly cycle. Official school holidays, gazetted breaks, and verified medical leaves endorsed by the institution head are excluded from missing days calculations.",
          "The policy aims to reduce school dropout rates across Pakistan while ensuring that cash transfers translate into active educational engagement. When a child is enrolled via the official BISP Wazaif Admission Slip, the BISP Compliance Monitoring System tracks attendance logs uploaded by school headteachers or collected by regional compliance monitors. If a student's verified attendance falls below the 70% threshold during a quarterly evaluation, the system automatically marks the stipend status as paused or stopped for that specific quarter."
        ],
        links: [
          {
            label: "Benazir Taleemi Wazaif registration guide",
            href: "/benazir-taleemi-wazaif-check-online-by-cnic/"
          },
          {
            label: "Download BISP Wazaif admission slip",
            href: "/benazir-taleemi-wazaif-form-download-tarika/"
          }
        ]
      },
      {
        title: "Why Are BISP Wazaif Suspended or Stopped Due to Attendance?",
        paragraphs: [
          "BISP wazaif are suspended when the quarterly compliance audit detects attendance below 70% or when school attendance records fail to upload before the system disbursement deadline. The primary causes of stipend stoppage include prolonged unexcused school absences, unverified student transfers between schools, delays by school administration in submitting quarterly attendance registers, or duplicate B-Form entry errors in the NADRA database.",
          "When the BISP Compliance Monitoring System runs its automated quarterly batch processing, any student lacking a verified 70% attendance record is flagged. The mother's BISP Kafaalat core cash payment (Rs 13,500) continues normally, but the child's educational stipend add-on (ranging from Rs 1,500 to Rs 4,000 depending on gender and education level) is put on hold until verified attendance documentation is re-submitted."
        ]
      },
      {
        title: "How to Verify and Fix 70% Attendance Rule Stoppage (Step-by-Step)",
        paragraphs: [
          "Resolving a Taleemi Wazaif payment stoppage requires obtaining an official BISP School Verification Slip, securing the school principal's stamp, and submitting it to the nearest BISP Tehsil Office. Beneficiaries can restore blocked stipends and receive retroactive quarterly payments within 14 to 21 working days by following this verified procedure:"
        ],
        bullets: [
          "Step 1: Obtain the Official BISP Wazaif Verification Slip — Visit your local BISP Tehsil Office or download the verification slip from the 8171 portal displaying your child's full name, B-Form number, and school registration.",
          "Step 2: Present the Slip to the School Headmaster — Request the headmaster or class teacher to record the exact attendance percentage for the preceding quarter and apply the official school rubber stamp and signature.",
          "Step 3: Submit Document to BISP Tehsil Office Desk — Bring the stamped verification slip along with the mother's original CNIC and child's original NADRA B-Form to the BISP Tehsil compliance desk.",
          "Step 4: Verify Status on 8171 Web Portal — After 7 to 10 working days, check the mother's CNIC on the 8171 portal or via 8171 SMS to confirm status restoration."
        ],
        links: [
          {
            label: "Check BISP 8171 balance and status online",
            href: "/bisp-8171-balance-check-online-kaise-karein/"
          }
        ]
      },
      {
        title: "70% Attendance Verification & Recovery Summary 2026",
        paragraphs: [
          "The table below outlines key parameters for monitoring and clearing BISP Taleemi Wazaif attendance compliance:"
        ],
        table: {
          caption: "70% Attendance Verification & Recovery Summary 2026",
          headers: ["Step / Parameter", "Required Action / Specification", "Document Needed", "Processing Timeline"],
          rows: [
            ["Minimum Attendance Threshold", "70% of total official school working days", "School Attendance Register Log", "Calculated Quarterly"],
            ["Primary Stoppage Reason", "Attendance < 70% or delayed school register upload", "BISP Compliance Audit Report", "Immediate System Hold"],
            ["School Endorsement", "Principal signature & school stamp on slip", "BISP Wazaif Verification Slip", "Same-Day at School"],
            ["BISP Desk Clearance", "Data entry and scanner upload at Tehsil Office", "Mother CNIC + Child B-Form", "15–30 Minutes"],
            ["Stipend Restoration", "Status updated from 'Pending' to 'Active'", "Digital Receipt Tracking ID", "14 to 21 Working Days"]
          ]
        }
      }
    ],
    faqs: [
      {
        question: "What happens if my child's attendance is exactly 69%?",
        answer: "If attendance is below 70%, the BISP automated system automatically blocks the quarterly stipend. You must obtain a school headmaster statement showing total working days excluding authorized leaves to reach the 70% threshold before resubmitting the verification slip."
      },
      {
        question: "How can I check BISP Taleemi Wazaif attendance status online?",
        answer: "You can check stipend eligibility by entering the mother's 13-digit CNIC on the official 8171 web portal (8171.bisp.gov.pk) or by sending the CNIC number via SMS to 8171."
      },
      {
        question: "Are school summer and winter vacations counted against the 70% rule?",
        answer: "No, official government school vacations, gazetted holidays, and emergency closures are excluded from total academic days."
      },
      {
        question: "Will I get previous unpaid wazaif after attendance verification?",
        answer: "Yes, once the school verification slip is cleared and approved at the BISP Tehsil Office, all retroactive arrears for the paused quarters are disbursed alongside the next quarterly BISP Kafaalat payment."
      },
      {
        question: "What is the quarterly stipend amount for Taleemi Wazaif in 2026?",
        answer: "As of 2026, quarterly stipends are Rs 1,500 for primary boys, Rs 2,000 for primary girls, Rs 2,500 for secondary boys, Rs 3,000 for secondary girls, Rs 3,500 for higher secondary boys, and Rs 4,000 for higher secondary girls, with a bonus Rs 3,000 graduation stipend for girls completing primary education."
      }
    ],
    officialLinks: [
      {
        label: "Official BISP 8171 Web Portal",
        href: "https://8171.bisp.gov.pk/"
      },
      {
        label: "Benazir Income Support Programme Official Website",
        href: "https://www.bisp.gov.pk/"
      }
    ]
  },`;

const article2 = `  {
    slug: "benazir-mazdoor-card-registration-online-2026",
    title: "Benazir Mazdoor Card Registration Online 2026: Sindh SESSI Apply & Benefits",
    excerpt: "Complete guide to Benazir Mazdoor Card registration online 2026 in Sindh. Learn SESSI worker registration, free healthcare, education grants, and biometric verification.",
    showExcerpt: true,
    metaTitle: "Benazir Mazdoor Card Registration Online 2026 (Sindh SESSI Guide)",
    metaDescription: "Complete guide to Benazir Mazdoor Card registration online 2026 in Sindh. Learn SESSI worker registration, free healthcare, education grants, and biometric verification.",
    focusKeyword: "benazir mazdoor card registration online 2026",
    lsiKeywords: [
      "sindh sessi mazdoor card online apply",
      "benazir mazdoor card benefits sindh",
      "sessi worker registration portal 2026",
      "mazdoor card online apply sindh sessi",
      "sessi biometric verification counter",
      "sindh labor department mazdoor card"
    ],
    entities: [
      "Benazir Mazdoor Card",
      "Sindh Employees' Social Security Institution",
      "Government of Sindh",
      "NADRA Biometric Verification",
      "SESSI Hospitals",
      "Sindh Workers Welfare Board"
    ],
    primaryCategory: "other-schemes",
    categorySlugs: [
      "other-schemes",
      "bisp-registration"
    ],
    date: "September 26, 2026",
    publishedDate: "September 26, 2026",
    lastChecked: "September 26, 2026",
    readTime: "8 min read",
    image: "/images/benazir-mazdoor-card-registration-online-2026.jpg",
    imageAlt: "Worker scanning Benazir Mazdoor Card smart identity card at SESSI hospital registration desk",
    author: contributors.muhammadSalman,
    reviewer: contributors.ayeshaMalik,
    sections: [
      {
        title: "What Is the Benazir Mazdoor Card in Sindh?",
        paragraphs: [
          "The Benazir Mazdoor Card is a smart social security card issued by the Government of Sindh in technical partnership with NADRA and the Sindh Employees' Social Security Institution (SESSI). Designed for registered industrial, commercial, and informal workers across Sindh, the digital card consolidates worker identity, family medical coverage, and cash welfare grants under a unified biometric database.",
          "Unlike general poverty alleviation initiatives like BISP Kafaalat or provincial agricultural cards like the Benazir Hari Card, the Benazir Mazdoor Card specifically caters to formal and semi-formal labor personnel. By replacing paper-based social security cards with chip-enabled biometric cards, Sindh SESSI ensures that workers and their verified dependents can claim cashless medical treatments at designated SESSI hospitals and dispensaries without administrative delays."
        ],
        links: [
          {
            label: "Sindh Hari Card online registration guide",
            href: "/sindh-hari-card-scheme-2026-online-apply-eligibility/"
          }
        ]
      },
      {
        title: "Benefits of the Benazir Mazdoor Card in 2026",
        paragraphs: [
          "The Benazir Mazdoor Card grants comprehensive social security coverage to registered workers and their immediate family members. Key benefits managed by SESSI and the Sindh Workers Welfare Board (SWWB) include:"
        ],
        bullets: [
          "Free Medical Treatment: Full cashless inpatient and outpatient medical care across all SESSI dispensaries, specialty hospitals, and empanelled private health centers.",
          "Worker Education Grants: Full tuition fee coverage, free textbooks, and monthly stipends for workers' children under the Sindh Workers Welfare Board.",
          "Marriage Grant (Jahez/Wedlock Grant): A financial grant of Rs 400,000 paid to registered workers upon the marriage of each daughter.",
          "Death Grant (Financial Compensation): Immediate financial aid of Rs 700,000 provided to legal heirs in the event of an active worker's natural or workplace death.",
          "Maternity and Sickness Benefits: Cash compensation for female workers during maternity leave and cash sickness allowances for incapacitated workers."
        ]
      },
      {
        title: "How to Apply for Benazir Mazdoor Card Online in 2026 (Step-by-Step)",
        paragraphs: [
          "Applying for the Benazir Mazdoor Card in 2026 involves a two-stage process: employer registration on the official SESSI portal followed by worker biometric verification at a SESSI field office counter:"
        ],
        bullets: [
          "Step 1: Employer Registration on SESSI Web Portal — The employer logs into their SESSI portal account (sessi.gov.pk) and submits worker details.",
          "Step 2: Download & Submit Worker Form R-2 — Workers fill Form R-2 with exact details matching their NADRA CNIC and family dependent list.",
          "Step 3: Biometric Verification at SESSI Counter — Visit the nearest SESSI District Office or NADRA Biometric Counter carrying original CNIC and employer endorsement letter.",
          "Step 4: Card Issuance and Activation — The printed smart Benazir Mazdoor Card is activated immediately for medical services at SESSI healthcare centers."
        ]
      },
      {
        title: "Benazir Mazdoor Card Welfare Benefits & Eligibility Matrix 2026",
        paragraphs: [
          "The matrix below outlines key welfare benefits and verification requirements under Sindh SESSI:"
        ],
        table: {
          caption: "Benazir Mazdoor Card Welfare Benefits & Eligibility Matrix 2026",
          headers: ["Benefit Category", "Welfare Grant Amount", "Eligible Beneficiaries", "Verification Requirement"],
          rows: [
            ["Medical Healthcare", "100% Free Outpatient & Inpatient", "Worker, Spouse & Children", "Benazir Mazdoor Card Scan"],
            ["Daughter Marriage Grant", "Rs 400,000 per daughter", "Registered Industrial Workers", "SWWB Marriage Verification"],
            ["Worker Death Grant", "Rs 700,000 lump-sum aid", "Legal Heirs / Family Dependents", "NADRA Death Certificate + SESSI Audit"],
            ["Education Scholarship", "Full Tuition + Monthly Allowance", "Enrolled Workers' Children", "School / University Bonafide Certificate"],
            ["Sickness Allowance", "75% to 100% of daily wage", "Temporarily Disabled Workers", "SESSI Medical Board Certificate"]
          ]
        }
      }
    ],
    faqs: [
      {
        question: "Can an individual worker apply for the Benazir Mazdoor Card independently?",
        answer: "No, registration requires verification through an employer registered with SESSI. However, self-employed or informal workers can apply through recognized labor unions or informal sector registration drives launched by the Sindh Labour Department."
      },
      {
        question: "Is the Benazir Mazdoor Card valid outside Sindh?",
        answer: "The card is primarily valid across all SESSI healthcare facilities and social security offices within Sindh province."
      },
      {
        question: "How can I check my Benazir Mazdoor Card online status?",
        answer: "You can verify your registration status by visiting the official SESSI portal (sessi.gov.pk) and entering your 13-digit CNIC number in the Mazdoor Status Verification tool."
      },
      {
        question: "What is the difference between Benazir Mazdoor Card and Benazir Hari Card?",
        answer: "The Benazir Mazdoor Card covers industrial, factory, and commercial labor under SESSI, while the Benazir Hari Card is designed specifically for agricultural farmers and landless tenants in Sindh."
      }
    ],
    officialLinks: [
      {
        label: "Official Sindh Employees' Social Security Institution (SESSI)",
        href: "https://sessi.gov.pk/"
      }
    ]
  },`;

const article3 = `  {
    slug: "bisp-deceased-beneficiary-payment-transfer-procedure",
    title: "BISP Deceased Beneficiary Payment Transfer & NADRA Cancellation Guide",
    excerpt: "Step-by-step BISP deceased beneficiary payment transfer procedure. Learn how to register NADRA death certificate, transfer head of household, and visit Tehsil office.",
    showExcerpt: true,
    metaTitle: "BISP Deceased Beneficiary Payment Transfer Procedure Guide (2026)",
    metaDescription: "Step-by-step BISP deceased beneficiary payment transfer procedure. Learn how to register NADRA death certificate, transfer head of household, and visit Tehsil office.",
    focusKeyword: "bisp deceased beneficiary payment transfer procedure",
    lsiKeywords: [
      "bisp deceased beneficiary account transfer",
      "nadra death certificate bisp payment transfer",
      "bisp deceased mother payment transfer to daughter",
      "cnic cancellation certificate bisp office",
      "bisp dynamic survey deceased case update",
      "bisp deceased account unpaid stipend recovery"
    ],
    entities: [
      "Benazir Income Support Programme",
      "National Database and Registration Authority",
      "Benazir Kafaalat",
      "BISP Tehsil Office",
      "BISP Dynamic Survey",
      "Succession Certificate"
    ],
    primaryCategory: "benazir-kafaalat",
    categorySlugs: [
      "benazir-kafaalat",
      "bisp-registration",
      "8171"
    ],
    date: "September 26, 2026",
    publishedDate: "September 26, 2026",
    lastChecked: "September 26, 2026",
    readTime: "8 min read",
    image: "/images/bisp-deceased-beneficiary-payment-transfer-procedure.jpg",
    imageAlt: "Family applicant submitting NADRA CNIC cancellation certificate at BISP Tehsil helpdesk",
    author: contributors.muhammadSalman,
    reviewer: contributors.ayeshaMalik,
    sections: [
      {
        title: "What Happens to BISP Payments Upon a Beneficiary's Death?",
        paragraphs: [
          "When a registered Benazir Kafaalat female beneficiary passes away, her BISP payments do not automatically transfer to family members or legal heirs. Because BISP operates as a conditional cash transfer program based on individual female biometric identity and household poverty score (PMT score), payments to the deceased's account must be formally closed to prevent fraud or unauthorized biometric deductions.",
          "The National Database and Registration Authority (NADRA) automatically updates its central database when a death certificate is registered. BISP cross-checks its active beneficiary rolls against NADRA cancellation records during quarterly payment processing. If a beneficiary is marked deceased in NADRA records without a formal BISP Tehsil Office household update, the BISP account is frozen, and any accumulated quarterly stipend (Rs 13,500) is held in escrow until legal heir clearance or household re-survey."
        ],
        links: [
          {
            label: "BISP Kafaalat 13500 payment check guide",
            href: "/bisp-kafaalat-13500-check-online-kaise-karein/"
          },
          {
            label: "BISP dynamic survey token & documents checklist",
            href: "/bisp-dynamic-survey-token-required-documents-guide/"
          }
        ]
      },
      {
        title: "Documents Required for BISP Deceased Beneficiary Reporting",
        paragraphs: [
          "Reporting a beneficiary's death and requesting household payment re-assignment requires presenting official government cancellation records at the BISP Tehsil Office:"
        ],
        bullets: [
          "NADRA Death Certificate: Official death certificate issued by NADRA or local Union Council.",
          "NADRA CNIC Cancellation Certificate: Formal cancellation slip issued by NADRA confirming CNIC deactivation.",
          "Original CNIC of the Deceased: Physical original CNIC (surrendered or stamped as cancelled by NADRA).",
          "Original CNIC of Applicant/Waris: Valid CNIC of the surviving family applicant (daughter, husband, or guardian).",
          "Family Registration Certificate (FRC): NADRA-issued FRC proving exact family lineage and legal relationships."
        ]
      },
      {
        title: "Step-by-Step BISP Deceased Beneficiary Transfer Procedure (2026)",
        paragraphs: [
          "Transferring household eligibility and clearing pending BISP funds requires following a strict 4-step administrative workflow:"
        ],
        bullets: [
          "Step 1: Register Death with NADRA & Obtain Cancellation Certificate — Visit NADRA Registration Center with hospital/UC death record to obtain the Death Certificate and CNIC Cancellation Certificate.",
          "Step 2: Report Death at Nearest BISP Tehsil Office — Present cancellation certificates, FRC, and applicant CNIC at the BISP Helpdesk to request a Case Update Form.",
          "Step 3: Conduct BISP Dynamic Survey (NSER Re-Evaluation) — The data entry operator will initiate a new Dynamic Survey for the family to record the surviving eldest daughter or eligible female relative as the new household head.",
          "Step 4: Claim Pending Funds & Biometric Account Activation — Present a legal heir affidavit or NADRA Succession Certificate if accrued unpaid stipends exist, then activate the new head's biometric account via 8171 SMS."
        ]
      },
      {
        title: "Deceased Beneficiary Family Transition & Re-Survey Protocol 2026",
        paragraphs: [
          "The protocol table below details each administrative phase for deceased beneficiary cases:"
        ],
        table: {
          caption: "Deceased Beneficiary Family Transition & Re-Survey Protocol 2026",
          headers: ["Procedure Phase", "Responsible Agency", "Mandatory Document", "Outcome / System Status"],
          rows: [
            ["1. Death Registration", "NADRA / Union Council", "Hospital Record / UC Slip", "Official Death Certificate"],
            ["2. CNIC Deactivation", "NADRA Registration Center", "Deceased Original CNIC", "CNIC Cancellation Certificate"],
            ["3. BISP Case Reporting", "BISP Tehsil Office Helpdesk", "Cancellation Slip + FRC", "Account Frozen / Deceased Flagged"],
            ["4. Household Re-Survey", "BISP Dynamic Survey Desk", "Applicant CNIC + Household Data", "New Household Head Nominated"],
            ["5. Stipend Re-Issuance", "BISP Partner Banks (Alfalah/HBL)", "Biometric Verification / 8171 SMS", "Payment Released to New Head"]
          ]
        }
      }
    ],
    faqs: [
      {
        question: "Can a husband receive his deceased wife's BISP Kafaalat payments?",
        answer: "A husband cannot directly receive BISP Kafaalat cash payments unless he is the sole legal guardian of minor orphan children. BISP policy prioritizes transferring household headship to an adult daughter or eligible female family member."
      },
      {
        question: "What happens to unpaid BISP stipends left in the account before death?",
        answer: "Unpaid stipends that were disbursed prior to the beneficiary's death can be claimed by the legal heirs by submitting a NADRA Succession Certificate and death verification report at the BISP Tehsil Office."
      },
      {
        question: "How long does the BISP deceased transfer procedure take?",
        answer: "The entire process—from NADRA death registration to completing the BISP Dynamic Survey and receiving approval—typically takes between 30 and 45 working days."
      },
      {
        question: "Does BISP charge any fee for updating a deceased beneficiary record?",
        answer: "No, all BISP Tehsil Office reporting, Dynamic Survey enrollment, and record updates are completely free of cost."
      }
    ],
    officialLinks: [
      {
        label: "Official BISP 8171 Web Portal",
        href: "https://8171.bisp.gov.pk/"
      },
      {
        label: "Benazir Income Support Programme Official Website",
        href: "https://www.bisp.gov.pk/"
      }
    ]
  },`;

const targetIndex = content.lastIndexOf('export const informationPages');
if (targetIndex === -1) {
  console.error("Could not find 'export const informationPages' in content.ts");
  process.exit(1);
}

const closingBracketIndex = content.lastIndexOf('];', targetIndex);
if (closingBracketIndex === -1) {
  console.error("Could not find closing bracket for articles array");
  process.exit(1);
}

const newArticlesString = "\n" + article1 + "\n" + article2 + "\n" + article3 + "\n";
const updatedContent = content.slice(0, closingBracketIndex) + newArticlesString + content.slice(closingBracketIndex);

fs.writeFileSync(contentFilePath, updatedContent, 'utf8');
console.log('Successfully published all 3 new blogs to src/data/content.ts!');
