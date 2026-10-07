import fs from 'fs';
import path from 'path';

const contentTsPath = path.resolve('src/data/content.ts');

if (!fs.existsSync(contentTsPath)) {
  console.error("Could not find content.ts!");
  process.exit(1);
}

let contentTs = fs.readFileSync(contentTsPath, 'utf8');

const slug = "other-active-financial-support";

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
      "national-savings-profit-rates",
      "major-government-schemes-updates-september-october-2026"
    ],
    title: "Other Active Financial Support: Complete Grant Disclosure & Compliance Guide",
    excerpt: "Other active financial support refers to all financial, physical, and personnel resources—whether domestic or foreign, direct cash grants, in-kind contributions, or outside consulting—currently available to research personnel. Federal agencies like NIH and NSF require full disclosure of active support to prevent scientific overlap, double-budgeting, and effort overcommitment.",
    showExcerpt: true,
    metaTitle: "Other Active Financial Support: NIH & NSF Grant Disclosure Guide (2026)",
    metaDescription: "Learn what counts as other active financial support for NIH and NSF grants. Discover in-kind rules, SciENcv reporting steps, overlap checks, and compliance guidelines.",
    focusKeyword: "Other Active Financial Support",
    lsiKeywords: [
      "other active financial support definition",
      "what counts as other active financial support",
      "nih other support format page 2026",
      "nsf current and pending support sciencv",
      "in kind support grant disclosure",
      "scientific and budgetary overlap grant compliance",
      "consequences of failing to disclose other support"
    ],
    entities: [
      "Other Support",
      "National Institutes of Health",
      "National Science Foundation",
      "SciENcv",
      "Senior/Key Personnel",
      "In-Kind Contributions",
      "Scientific and Budgetary Overlap",
      "Foreign Talent Recruitment Program"
    ],
    primaryCategory: "Financial Support",
    categorySlugs: [
      "schemes",
      "news"
    ],
    date: "October 7, 2026",
    publishedDate: "October 7, 2026",
    readTime: "9 min read",
    image: "/images/other-active-financial-support.jpg",
    imageAlt: "Other Active Financial Support Complete Grant Disclosure and Compliance Guide",
    author: contributors.muhammadSalman,
    reviewer: contributors.ayeshaMalik,
    officialLinks: [
      { label: "NIH Grants Policy Portal", href: "https://grants.nih.gov/" },
      { label: "NSF Policy Office", href: "https://www.nsf.gov/bfa/dias/policy/" },
      { label: "NCBI SciENcv System", href: "https://www.ncbi.nlm.nih.gov/sciencv/" }
    ],
    sections: [
      {
        title: "What Is Other Active Financial Support in Federal Research Grants?",
        paragraphs: [
          "Other active financial support encompasses all resources made available to researchers in direct support of their research endeavors. Federal funding agencies require senior and key personnel to disclose every active project, pending proposal, and external resource to maintain complete transparency across sponsored research programs."
        ],
        links: [
          { label: "BISP 8171 Kafaalat status check guide", href: "/bisp-benazir-kafaalat-8171-check/" }
        ],
        subsections: [
          {
            title: "Primary Purpose: Preventing Overlap and Assessing Research Capacity",
            paragraphs: [
              "Federal grant agencies enforce disclosure requirements to prevent scientific overlap, budgetary overlap, and effort overcommitment. Scientific overlap occurs when duplicate research objectives receive funding from multiple grants. Budgetary overlap occurs when identical line-item costs—such as personnel salaries or specialized reagents—are paid twice by different sponsors. Evaluating total committed effort ensures that researchers have sufficient calendar months available to carry out proposed activities without exceeding 100 percent total effort."
            ]
          },
          {
            title: "Who Qualifies as Senior or Key Personnel Subject to Disclosure?",
            paragraphs: [
              "Disclosure requirements apply to all individuals designated as senior or key personnel on a grant application. This includes Principal Investigators (PIs), Co-Principal Investigators (Co-PIs), project directors, and key collaborators who contribute meaningfully to the scientific development or execution of the project. Graduate students, postdoctoral fellows, and laboratory technicians do not submit individual disclosures unless specifically named as key personnel by the funding agency."
            ]
          }
        ]
      },
      {
        title: "What Must Be Included in Your Other Support Disclosure?",
        paragraphs: [
          "Investigators must report all active and pending resources regardless of whether funding flows directly through their home institution or through an external entity. Disclosures cover both monetary awards and non-monetary operational support."
        ],
        subsections: [
          {
            title: "Active Monetary Grants, Contracts, and Cooperative Agreements",
            paragraphs: [
              "All active research projects funded by federal agencies, state governments, private foundations, industrial sponsors, or foreign institutions must be listed. Disclosures require the award title, sponsor name, total award amount, project start and end dates, and total person-months committed for each active budget period."
            ]
          },
          {
            title: "In-Kind Contributions: Equipment, Laboratory Space, and Staffing",
            paragraphs: [
              "In-kind contributions consist of non-monetary resources provided by third parties to support research activities. Reportable in-kind support includes dedicated laboratory space, high-performance computing clusters, specialized research equipment, scientific supplies, and personnel funded by outside entities—such as visiting scholars, postdocs, or students supported by foreign grants. If an in-kind resource is designated specifically for use on the proposed project, it is budgeted within the grant proposal; if it is available for general research efforts, it must be disclosed on the Other Support form."
            ]
          },
          {
            title: "Outside Consulting Agreements and Foreign Talent Program Affiliations",
            paragraphs: [
              "Consulting activities that involve research, scientific design, data analysis, or manuscript writing must be fully reported. In addition, participation in foreign talent recruitment programs or appointment contracts with foreign universities must be disclosed. Copies of foreign contracts, employment agreements, or appointment letters must be attached to federal disclosures, accompanied by certified English translations when originally written in a foreign language."
            ]
          }
        ]
      },
      {
        title: "What Resources Are Exempt from Other Support Reporting?",
        paragraphs: [
          "Not all institutional funds or career development resources require disclosure on federal support forms. Understanding clear exemptions prevents unnecessary reporting delays during administrative reviews."
        ],
        links: [
          { label: "National Savings & Government Profit Rates 2026", href: "/national-savings-profit-rates/" }
        ],
        subsections: [
          {
            title: "Institutional Startup Packages and Internal Institutional Grants",
            paragraphs: [
              "Institutional startup packages provided by a researcher's hiring institution to establish a laboratory do not count as other active financial support. Similarly, internal seed grants awarded by a university to support preliminary data collection are exempt, provided they originate strictly from internal university accounts."
            ]
          },
          {
            title: "Unrestricted Financial Gifts and General Academic Training Awards",
            paragraphs: [
              "Unrestricted gifts made to an institution without expectations of specific research deliverables or contractual performance do not require disclosure under active support guidelines. General academic training grants, institutional indirect cost returns, and personal honoraria for scientific review panels are likewise excluded from federal support reporting."
            ]
          }
        ]
      },
      {
        title: "How Do NIH and NSF Disclosure Rules Differ?",
        paragraphs: [
          "While both the National Institutes of Health (NIH) and the National Science Foundation (NSF) mandate comprehensive disclosures, their submission timelines and terminology differ."
        ],
        subsections: [
          {
            title: "NIH Other Support Rules (JIT & RPPR Requirements)",
            paragraphs: [
              "The National Institutes of Health collects 'Other Support' documentation primarily during the Just-in-Time (JIT) procedure after a grant application receives a favorable peer-review score. NIH investigators must also update their Other Support disclosures annually within the Research Performance Progress Report (RPPR) to inform program officials of any newly awarded grants or changed effort commitments."
            ]
          },
          {
            title: "NSF Current and Pending (Other) Support Rules (PAPPG & Submission)",
            paragraphs: [
              "The National Science Foundation requires 'Current and Pending (Other) Support' disclosures at the initial time of proposal submission under the Proposal & Award Policies & Procedures Guide (PAPPG). NSF requires investigators to report both active awards and all proposals currently under review, ensuring panel reviewers evaluate effort commitments during initial proposal evaluations."
            ]
          }
        ],
        table: {
          caption: "Federal Agency Disclosure Comparison Matrix",
          headers: ["Disclosure Category", "NIH Other Support", "NSF Current & Pending Support", "Disclosure Requirement Status"],
          rows: [
            ["Active Federal Grants", "Required (JIT & RPPR)", "Required (At Submission)", "Mandatory"],
            ["Pending Grant Proposals", "Not Required at JIT", "Required at Submission", "Agency Dependent"],
            ["In-Kind Lab Space & Equipment", "Required", "Required", "Mandatory"],
            ["Outside Research Consulting", "Required", "Required", "Mandatory"],
            ["Foreign Talent Programs", "Required (With Contract Copy)", "Required", "Mandatory"],
            ["University Startup Packages", "Exempt", "Exempt", "Exempt"],
            ["Unrestricted Financial Gifts", "Exempt", "Exempt", "Exempt"]
          ]
        }
      },
      {
        title: "How Do You Submit Other Active Support via SciENcv?",
        paragraphs: [
          "Federal mandates require senior personnel to generate disclosure documents using SciENcv (Science Experts Network Curriculum Vitae)."
        ],
        subsections: [
          {
            title: "Connecting ORCID iD and Importing Active Award Metadata",
            paragraphs: [
              "Investigators create SciENcv profiles by linking their account to an ORCID iD and login.gov credentials. SciENcv integrates with NCBI and federal databases to populate active awards, project titles, award numbers, and effort allocations, eliminating manual formatting errors and producing validated Common Form PDFs."
            ]
          },
          {
            title: "Digital Signatures and Personal Certification Requirements",
            paragraphs: [
              "Each senior investigator must digitally sign their generated SciENcv disclosure document prior to institutional submission. Federal rules prohibit administrative assistants or grants officers from signing on behalf of an investigator. The personal digital signature certifies that all reported active and pending support is complete, accurate, and up to date."
            ]
          }
        ]
      },
      {
        title: "What Are the Risks and Consequences of Non-Compliance?",
        paragraphs: [
          "Failing to report active financial support or foreign affiliations exposes investigators and institutions to severe regulatory penalties."
        ],
        links: [
          { label: "Major Government Schemes & Policy Updates 2026", href: "/major-government-schemes-updates-september-october-2026/" }
        ],
        subsections: [
          {
            title: "Scientific, Budgetary, and Effort Overlap Penalties",
            paragraphs: [
              "When federal audits uncover unlisted active grants or undisclosed foreign funding, agencies can terminate active awards, demand full repayment of disbursed grant funds, or institute administrative debarment from future federal funding. Severe omissions involving fraudulent misrepresentation can trigger civil monetary penalties under the False Claims Act or criminal investigations."
            ]
          },
          {
            title: "Institutional Audit Checklist for Pre-Submission Verification",
            paragraphs: [
              "To ensure full compliance before submitting federal grant documentation, institutions and investigators should complete this five-step verification checklist:"
            ],
            bullets: [
              "1. Verify Active & Pending Portfolios: Confirm that all active grants, contracts, subawards, and submitted proposals are accurately listed with correct start/end dates and total direct costs.",
              "2. Review In-Kind Contributions: Audit laboratory space, shared instrumentation, and external personnel to confirm all non-monetary support is reported.",
              "3. Inspect Consulting & Foreign Contracts: Identify any outside consulting agreements involving research design or participation in foreign talent programs, ensuring certified English translations are attached.",
              "4. Calculate Total Person-Months: Sum all committed calendar months across active awards and the proposed grant to verify total effort does not exceed 12 person-months (100%).",
              "5. Execute Personal Digital Signature: Ensure each key person reviews their final SciENcv Common Form PDF and applies a personal digital signature before submission to the Office of Sponsored Research."
            ]
          }
        ]
      }
    ],
    faqs: [
      {
        question: "What counts as other active financial support?",
        answer: "Other active financial support includes all active research grants, contracts, cooperative agreements, in-kind resources (equipment, space, personnel), outside consulting agreements involving research, and foreign talent program affiliations available to senior key personnel."
      },
      {
        question: "Does in-kind support need to be listed under other support?",
        answer: "Yes, in-kind contributions—such as donated laboratory space, specialized equipment, computing resources, or personnel funded by outside entities—must be disclosed under other support if they are not specifically budgeted within the proposed grant application."
      },
      {
        question: "How do NIH and NSF handle other active financial support differently?",
        answer: "NIH requires 'Other Support' documentation during the Just-in-Time (JIT) phase and in annual RPPR progress reports. NSF requires 'Current and Pending (Other) Support' disclosures at the initial time of proposal submission."
      },
      {
        question: "What happens if you fail to disclose other active support?",
        answer: "Failing to disclose active support can result in grant application rejection, award termination, mandatory fund repayment, administrative debarment from federal funding, and potential civil liability under the False Claims Act."
      },
      {
        question: "Are gifts and institutional startup funds included in other support?",
        answer: "No, institutional startup funds provided by a hiring university and unrestricted financial gifts given without research deliverables are exempt from federal other support reporting."
      },
      {
        question: "How do I submit other support in SciENcv?",
        answer: "Log into SciENcv using login.gov or ORCID iD, select the appropriate NIH Other Support or NSF Current and Pending Support Common Form template, populate active project metadata, generate the PDF, and apply a personal digital signature."
      },
      {
        question: "What is scientific or budgetary overlap in grant proposals?",
        answer: "Scientific overlap occurs when duplicate research objectives receive funding from multiple sources. Budgetary overlap occurs when duplicate grant funds pay for the exact same expense item or personnel salary."
      },
      {
        question: "Who must submit an Other Support form?",
        answer: "All individuals designated as senior or key personnel on a federal grant application—including Principal Investigators, Co-PIs, and key faculty collaborators—must submit individual disclosure forms."
      },
      {
        question: "Must outside consulting contracts be provided in full?",
        answer: "For NIH awards, investigators participating in foreign consulting agreements or foreign talent programs must attach complete copies of contracts or agreements, including certified English translations."
      },
      {
        question: "Can administrative assistants sign SciENcv certifications on behalf of the PI?",
        answer: "No, federal regulations require each senior investigator to personally certify and digitally sign their own SciENcv disclosure document. Delegation of digital signatures is strictly prohibited."
      }
    ]
  },\n`;

const insertIndex = markerPos + targetMarker.length;
const updatedContentTs = contentTs.slice(0, insertIndex) + '\n' + newArticleCode + contentTs.slice(insertIndex);

fs.writeFileSync(contentTsPath, updatedContentTs, 'utf8');
console.log(`SUCCESS: Article "${slug}" successfully published in content.ts!`);
