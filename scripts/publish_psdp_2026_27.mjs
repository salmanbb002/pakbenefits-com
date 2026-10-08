import fs from 'fs';
import path from 'path';

const contentTsPath = path.resolve('src/data/content.ts');

if (!fs.existsSync(contentTsPath)) {
  console.error("Could not find content.ts!");
  process.exit(1);
}

let contentTs = fs.readFileSync(contentTsPath, 'utf8');

const slug = "public-sector-development-programme-psdp-2026-27";

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
      "major-government-schemes-updates-september-october-2026",
      "federal-contributory-pension-scheme",
      "national-savings-profit-rates",
      "bisp-benazir-kafaalat-8171-check",
      "other-active-financial-support"
    ],
    title: "Public Sector Development Programme (PSDP) 2026–27: Comprehensive Budget Allocation & Project Breakdown",
    excerpt: "Discover the Public Sector Development Programme (PSDP) 2026–27 outlay of Rs 3,675 billion, including Rs 1,000 billion for Federal PSDP, provincial ADPs, NHA and Water sector allocations, 5Es strategy, and Q1 fund release updates.",
    showExcerpt: true,
    metaTitle: "Public Sector Development Programme (PSDP) 2026–27: Budget Breakdown",
    metaDescription: "Explore the PSDP 2026–27 outlay of Rs 1,000 billion, provincial ADPs, NHA & Water sector allocations, 5Es strategy, and Q1 release updates.",
    focusKeyword: "Public Sector Development Programme (PSDP) 2026–27",
    lsiKeywords: [
      "psdp 2026-27 total budget allocation",
      "federal psdp 2026-27 breakdown pc gov pk",
      "nha psdp allocation 2026-27",
      "water resources division psdp release 2026-27",
      "provincial adps fy 2026-27 outlay",
      "5es strategy psdp 2026-27",
      "psdp q1 july september authorization status 2026"
    ],
    entities: [
      "Public Sector Development Programme",
      "Ministry of Planning, Development and Special Initiatives",
      "National Economic Council",
      "5Es Strategy",
      "National Highway Authority",
      "Water Resources Division",
      "Provincial Annual Development Programs",
      "URAAN Pakistan"
    ],
    primaryCategory: "News",
    categorySlugs: [
      "news",
      "other-schemes"
    ],
    date: "October 8, 2026",
    publishedDate: "October 8, 2026",
    readTime: "10 min read",
    image: "/images/public-sector-development-programme-psdp-2026-27.jpg",
    imageAlt: "Official Public Sector Development Programme PSDP 2026-27 budget outlay infographic detailing federal and provincial allocations",
    author: contributors.muhammadSalman,
    reviewer: contributors.ayeshaMalik,
    officialLinks: [
      { label: "Ministry of Planning, Development and Special Initiatives Official Portal", href: "https://pc.gov.pk/" },
      { label: "National Economic Council Secretariat", href: "https://pc.gov.pk/web/nec" },
      { label: "National Highway Authority Development Projects", href: "https://nha.gov.pk/" }
    ],
    sections: [
      {
        title: "What Is the Total Outlay and Structure of PSDP 2026–27?",
        paragraphs: [
          "The National Economic Council (NEC) approved a total National Development Outlay of Rs 3,675 billion for Fiscal Year 2026–27 to drive national infrastructure, economic stabilization, and regional development across Pakistan.",
          "Within the Rs 1,000 billion Federal PSDP allocation, Rs 682.485 billion funds federal ministries and divisions, while Rs 312.515 billion supports major state-owned corporate entities like the National Highway Authority (NHA) and power utilities. An additional Rs 4 billion covers project liabilities, and Rs 1 billion initiates special CPEC 2.0 projects.",
          "To inspect official document releases, citizens can reference the published schedules on the Ministry of Planning, Development and Special Initiatives portal."
        ],
        table: {
          caption: "PSDP 2026–27 National Development Outlay Structure",
          headers: ["Budget Development Component", "Approved Outlay (FY 2026–27)", "Share of Total Outlay (%)", "Primary Operational Focus"],
          rows: [
            ["Federal PSDP", "Rs 1,000 billion", "27.2%", "Federal ministries, strategic infrastructure & CPEC 2.0"],
            ["Provincial ADPs", "Rs 2,224 billion", "60.5%", "Provincial public works, healthcare, education & local roads"],
            ["State-Owned Enterprises (SOEs)", "Rs 451 billion", "12.3%", "Off-budget self-financed corporate utility projects"],
            ["Total National Outlay", "Rs 3,675 billion", "100.0%", "Comprehensive national capital investment program"]
          ]
        },
        links: [
          { label: "Major Government Schemes Updates 2026", href: "/major-government-schemes-updates-september-october-2026/" },
          { label: "Federal Contributory Pension Scheme Overview", href: "/federal-contributory-pension-scheme/" }
        ]
      },
      {
        title: "How Does PSDP 2026–27 Align with the 5Es Strategy and URAAN Pakistan?",
        paragraphs: [
          "The PSDP 2026–27 framework directly operationalizes the government’s URAAN Pakistan economic transformation blueprint and the 13th Five Year Plan through the targeted 5Es strategy.",
          "The 5Es framework establishes five strategic pillars designed to solve structural economic bottlenecks while maintaining strict fiscal discipline:",
          "By aligning every project approval with these five pillars, the Planning Commission ensures public capital spending creates measurable economic returns rather than unviable fiscal assets."
        ],
        bullets: [
          "Exports: Accelerating industrial productivity, export processing zones, and technological competitiveness.",
          "E-Pakistan: Digitizing public services, expanding IT infrastructure, and enhancing youth tech skills.",
          "Environment: Funding climate-resilient water storage, flood mitigation, and clean energy transitions.",
          "Energy & Infrastructure: Building power transmission lines and expanding multi-modal transport highways.",
          "Equity & Empowerment: Investing in human capital development, special geographic regions (AJK and Gilgit-Baltistan), and targeted social protection."
        ],
        links: [
          { label: "BISP 8171 Kafaalat status check guide", href: "/bisp-benazir-kafaalat-8171-check/" }
        ]
      },
      {
        title: "Which Sectors and Ministries Received the Highest PSDP Allocations?",
        paragraphs: [
          "The transport infrastructure and water management sectors secured the largest funding allocations under the Federal PSDP 2026–27 to address critical energy and logistics constraints.",
          "These allocations ensure that strategic physical assets receive sustained funding, preserving trade logistics across northern and southern corridors."
        ],
        bullets: [
          "National Highway Authority (NHA): Received the single largest corporate allocation of Rs 224.5 billion to complete motorways, national highways, and trade corridors.",
          "Water Resources Division: Earmarked Rs 103 billion overall, with Rs 74.92 billion specifically dedicated to 35 core water conservation, dam construction, and flood protection projects.",
          "Gwadar Infrastructure Projects: Allocated over Rs 14.2 billion for the M-8 corridor (Hoshab–Awaran–Khuzdar), New Gwadar International Airport operationalization, and municipal water infrastructure.",
          "Karakoram Highway (KKH) Relocation: Designated Rs 5 billion for the 102-km Thakot–Raikot section relocation to safeguard vital international trade arteries.",
          "Cabinet Division & Special Areas: Granted Rs 30 billion for local community schemes alongside Rs 22.15 billion for Azad Jammu & Kashmir (AJK) and Gilgit-Baltistan (GB)."
        ],
        links: [
          { label: "National Savings & Government Profit Rates 2026", href: "/national-savings-profit-rates/" }
        ]
      },
      {
        title: "Why Did the Government Prioritize Ongoing Schemes Over New Projects?",
        paragraphs: [
          "The federal government imposed strict caps on new development schemes during FY 2026–27 to prevent the accumulation of unsustainable throw-forward project liabilities.",
          "Faced with ministerial demands exceeding Rs 4.1 trillion against a capped Rs 1,000 billion federal budget, the Ministry of Planning established clear entry criteria for new proposals:",
          "This disciplined approach reduces project gestation periods and prevents cost overruns caused by delayed fund dispersion across thousands of underfunded schemes."
        ],
        bullets: [
          "Ongoing Project Priority: More than 85% of total PSDP funds are reserved for near-completion projects to ensure fast completion.",
          "Restriction on Unapproved Schemes: Unapproved local projects without secured funding lines were excluded from the main development portfolio.",
          "Exceptions for Critical Needs: New project inclusions were strictly restricted to national security initiatives, emergency disaster recovery, and foreign-funded commitments."
        ]
      },
      {
        title: "What Is the First Quarter (Q1) Fund Release and Utilization Status?",
        paragraphs: [
          "During the first quarter (July–September 2026) of FY 2026–27, the federal government authorized Rs 220.72 billion in development funds, representing approximately 22% of the annual Federal PSDP allocation.",
          "The low early utilization rate reflects initial procurement and verification cycles standard in public sector execution, with spending expected to accelerate sharply in Q2 and Q3."
        ],
        bullets: [
          "Total Funds Authorized: Rs 220.721 billion authorized by the Planning Commission (Rs 187.5 billion for ministries, Rs 33.216 billion for corporations).",
          "Actual Q1 Utilization: Total actual expenditure reached Rs 61.320 billion (6.13% of the total annual budget).",
          "Top Authorized Ministry: The Water Resources Division received the largest Q1 authorization of Rs 86.517 billion to maintain summer construction momentum on major dams."
        ],
        links: [
          { label: "Other Active Financial Support Compliance Guide", href: "/other-active-financial-support/" }
        ]
      },
      {
        title: "PSDP 2026–27 vs Previous Fiscal Cycles: Key Shifts & Information-Gain Matrix",
        paragraphs: [
          "The FY 2026–27 PSDP shifts national development strategy from broad political scheme expansion toward focused asset completion and climate resilience.",
          "This comparative matrix highlights Pakistan's policy pivot toward completing mega-infrastructure and water security assets before launching new unbudgeted initiatives."
        ],
        table: {
          caption: "PSDP Historical Fiscal Cycle Strategy Comparison Matrix",
          headers: ["Strategic Metric", "FY 2025–26 Cycle", "FY 2026–27 Cycle", "Key Structural Shift"],
          rows: [
            ["Federal PSDP Cap", "Rs 1,100 billion", "Rs 1,000 billion", "Strategic consolidation to control fiscal deficits"],
            ["Provincial ADPs", "Rs 2,095 billion", "Rs 2,224 billion", "Increased provincial share under 18th Amendment framework"],
            ["SOE Self-Financed Outlay", "Rs 380 billion", "Rs 451 billion", "Greater reliance on corporate off-budget capital expansion"],
            ["New Project Inclusion Rule", "Broad discretionary entries", "Restricted to defense & foreign funding", "Elimination of unfunded project throw-forward backlog"],
            ["Strategic Policy Anchor", "General Economic Framework", "URAAN Pakistan & 5Es Strategy", "Strict alignment with measurable sector benchmark targets"]
          ]
        }
      }
    ],
    faqs: [
      {
        question: "What is the total federal PSDP allocation for FY 2026–27?",
        answer: "The total federal PSDP allocation for Fiscal Year 2026–27 is Rs 1,000 billion. This forms part of the broader Rs 3,675 billion National Development Outlay approved by the National Economic Council."
      },
      {
        question: "Who approves the Public Sector Development Programme in Pakistan?",
        answer: "The National Economic Council (NEC), chaired by the Prime Minister of Pakistan and comprising provincial Chief Ministers and federal ministers, formally approves the PSDP."
      },
      {
        question: "Which sector received the highest corporate funding in PSDP 2026–27?",
        answer: "The National Highway Authority (NHA) received the highest corporate allocation of Rs 224.5 billion under the corporate development budget block for road and motorway networks."
      },
      {
        question: "What are the 5Es included in the PSDP 2026–27 strategic framework?",
        answer: "The 5Es framework consists of Exports, E-Pakistan, Environment, Energy & Infrastructure, and Equity & Empowerment."
      },
      {
        question: "How much money was authorized during Q1 (July–September 2026) of PSDP 2026–27?",
        answer: "The Planning Commission authorized Rs 220.721 billion (22% of the federal allocation) during the first quarter of FY 2026–27."
      },
      {
        question: "Why are new development projects limited in the PSDP 2026–27 budget?",
        answer: "New projects are restricted to prevent cost overruns and curb throw-forward liabilities, ensuring ongoing high-priority projects receive adequate funding to reach completion."
      },
      {
        question: "How much budget is allocated for provincial development programs (ADPs) in 2026–27?",
        answer: "Provincial Annual Development Programs (ADPs) have been allocated a total outlay of Rs 2,224 billion across all four provinces for local public development."
      },
      {
        question: "What is the role of the Planning Commission in PSDP fund releases?",
        answer: "The Planning Commission, under the Ministry of Planning, authorizes quarterly releases, monitors project execution, and conducts performance audits on public spending."
      },
      {
        question: "Are foreign-funded development projects included in PSDP 2026–27?",
        answer: "Yes, foreign-funded development projects are prioritized and granted exceptions under the new project entry criteria to ensure international commitment compliance."
      },
      {
        question: "Where can citizens download the official PSDP 2026–27 budget document?",
        answer: "Citizens can view and download the complete PSDP 2026–27 allocation document on the official website of the Ministry of Planning, Development and Special Initiatives (pc.gov.pk)."
      }
    ]
  },
`;

const updatedContentTs = contentTs.slice(0, markerPos + targetMarker.length) + "\n" + newArticleCode + contentTs.slice(markerPos + targetMarker.length);

fs.writeFileSync(contentTsPath, updatedContentTs, 'utf8');
console.log("Successfully inserted PSDP 2026-27 article into content.ts!");
