import fs from 'fs';
import path from 'path';

const root = process.cwd();
const contentFilePath = path.resolve(root, 'src/data/content.ts');
let content = fs.readFileSync(contentFilePath, 'utf8');

const slug = 'national-savings-profit-rates';

if (content.includes(`slug: "${slug}"`)) {
  console.log('Article national-savings-profit-rates already exists in content.ts!');
  process.exit(0);
}

const articleObject = {
  slug: "national-savings-profit-rates",
  title: "National Savings Profit Rates (Updated Oct 2026): Complete Profit Table, Tax Rates & Calculator",
  excerpt: "Check the latest National Savings profit rates effective Oct 1, 2026. View revised profit tables for Behbood, RIC, SSC, Defence & Sarwa Islamic schemes with net profit calculations for filers vs non-filers.",
  showExcerpt: true,
  metaTitle: "National Savings Profit Rates (Oct 2026): Latest Scheme Rates",
  metaDescription: "Check the latest National Savings profit rates effective Oct 1, 2026. View revised profit tables for Behbood, RIC, SSC, Defence & Sarwa Islamic schemes with net profit calculations for filers vs non-filers.",
  focusKeyword: "national savings profit rates",
  lsiKeywords: [
    "behbood savings certificate profit rate per month",
    "regular income certificate profit on 1 lakh",
    "special savings certificate profit rate after tax",
    "sarwa islamic savings account profit rate",
    "national savings tax deduction filer vs non filer",
    "how to calculate national savings profit per month",
    "zakat exemption form cz-50 national savings"
  ],
  entities: [
    "Central Directorate of National Savings",
    "Behbood Savings Certificates",
    "Regular Income Certificates",
    "Special Savings Certificates",
    "Pensioners Benefit Account",
    "Defence Savings Certificates",
    "Sarwa Islamic Term Account",
    "Federal Board of Revenue",
    "Active Taxpayer List",
    "Form CZ-50"
  ],
  primaryCategory: "pension",
  categorySlugs: ["pension", "financial-schemes"],
  date: "October 2, 2026",
  publishedDate: "2026-10-02",
  lastChecked: "October 2, 2026",
  readTime: "8 min read",
  image: "/images/national-savings-profit-rates.webp",
  imageAlt: "Official National Savings Profit Rates comparison chart and return rates table for Pakistan certificates",
  sections: [
    {
      title: "What Are the Revised National Savings Profit Rates Effective October 2026?",
      paragraphs: [
        "The Ministry of Finance approved upward profit rate adjustments across Central Directorate of National Savings (CDNS) instruments effective October 1, 2026. This upward revision increases yields by up to 74 basis points, reversing previous downward trends in response to monetary policy adjustments set alongside State Bank of Pakistan guidance.",
        "The government periodic notification updates return rates for both conventional savings certificates and Shariah-compliant Sarwa Islamic Term Account products. Every investment in Qaumi Bachat Bank carries a 100% sovereign guarantee from the Government of Pakistan, making it the highest-security fixed-income option for retail investors, retirees, widows, and overseas Pakistanis."
      ],
      bullets: [
        "Top Payout Scheme: Behbood Savings Certificates (BSC) and Pensioners Benefit Account (PBA) lead with a 12.72% annual yield.",
        "Highest Rate Adjustment: Special Savings Certificates (SSC) experienced the largest increase of +74 basis points to 11.82% per annum.",
        "Monthly Income Choice: Regular Income Certificates (RIC) increased by +60 basis points to 11.76% per annum.",
        "Tax Regulation: Profit payments are subject to Section 151 of the Income Tax Ordinance 2001, deducting 15% for Active Taxpayers (Filers) and 30% for Non-Filers."
      ]
    },
    {
      title: "Complete National Savings Profit Rate Table (Per Annum & Net Return per 1 Lakh PKR)",
      paragraphs: [
        "The official rate sheet released by CDNS establishes gross annual percentage returns and net monthly or bi-annual returns per Rs. 100,000 investment. Tax rates are calculated at 15% for Active Taxpayers (Filers) and 30% for Non-Filers listed on the Federal Board of Revenue (FBR) Active Taxpayer List (ATL)."
      ],
      table: {
        caption: "National Savings Profit Rates & Net Return per Rs 100,000 (Effective Oct 1, 2026)",
        headers: ["Savings Scheme / Certificate", "Profit Payout Frequency", "Gross Profit Rate (P.A.)", "Gross Return per 1 Lakh", "Net Return (Filer 15%)", "Net Return (Non-Filer 30%)", "Zakat Status"],
        rows: [
          ["Behbood Savings Certificates (BSC)", "Monthly", "12.72%", "Rs. 1,060 / mo", "Rs. 1,060 (Exempt)", "Rs. 1,060 (Exempt)", "Exempt"],
          ["Pensioners Benefit Account (PBA)", "Monthly", "12.72%", "Rs. 1,060 / mo", "Rs. 1,060 (Exempt)", "Rs. 1,060 (Exempt)", "Exempt"],
          ["Shuhada Family Welfare Account (SFWA)", "Monthly", "12.72%", "Rs. 1,060 / mo", "Rs. 1,060 (Exempt)", "Rs. 1,060 (Exempt)", "Exempt"],
          ["Regular Income Certificates (RIC)", "Monthly", "11.76%", "Rs. 980 / mo", "Rs. 833.00 / mo", "Rs. 686.00 / mo", "Subject to Rules"],
          ["Special Savings Certificates (SSC/SSA)", "Bi-Annually", "11.82%", "Rs. 5,910 / 6 mo", "Rs. 5,023.50 / 6 mo", "Rs. 4,137.00 / 6 mo", "Deductible (2.5%)"],
          ["Defence Savings Certificates (DSC)", "On Maturity (10-Yr)", "11.80%", "Rs. 305,080 total", "Net at Maturity", "Net at Maturity", "Deductible (2.5%)"],
          ["Short Term Savings Certificates (STSC)", "On Maturity (1-Yr)", "11.31%", "Rs. 11,310 / yr", "Rs. 9,613.50 / yr", "Rs. 7,917.00 / yr", "Deductible (2.5%)"],
          ["Sarwa Islamic Term Account (3-Year)", "Bi-Annually", "11.57%", "Rs. 5,785 / 6 mo", "Rs. 4,917.25 / 6 mo", "Rs. 4,049.50 / 6 mo", "Deductible (2.5%)"],
          ["Sarwa Islamic Term Account (5-Year)", "Monthly", "11.70%", "Rs. 975 / mo", "Rs. 828.75 / mo", "Rs. 682.50 / mo", "Deductible (2.5%)"],
          ["Sarwa Islamic Savings Account (SISA)", "Bi-Annually", "11.33%", "Variable", "Net after 15% WHT", "Net after 30% WHT", "Deductible (2.5%)"]
        ]
      }
    },
    {
      title: "What Is the Behbood Savings Certificate Profit Rate Per Month?",
      paragraphs: [
        "Behbood Savings Certificates (BSC) pay a gross profit rate of 12.72% per annum, providing eligible investors an exact monthly return of Rs. 1,060 for every Rs. 100,000 deposited. This scheme is fully exempt from income tax withholding and Zakat deductions.",
        "The Central Directorate of National Savings established Behbood Certificates to protect vulnerable socio-economic groups against inflation. Eligible categories include Pakistani senior citizens aged 60 years or above, widows (who have not remarried), disabled persons holding a NICOP/CNIC with the disability logo, and joint accounts of two eligible individuals."
      ],
      bullets: [
        "Monthly Profit Payout: An investment of Rs. 1,000,000 (10 Lakh PKR) yields an exact profit of Rs. 10,600 per month.",
        "Maximum Deposit Limit: Single eligible individuals can deposit up to Rs. 7.5 million (75 Lakh PKR), while joint account holders can deposit up to Rs. 15 million (1.5 Crore PKR).",
        "Tax Exemption Advantage: Unlike standard certificates, FBR does not deduct 15% or 30% tax from Behbood monthly payouts, preserving full earnings."
      ]
    },
    {
      title: "How Much Profit Does Regular Income Certificate (RIC) Pay Monthly?",
      paragraphs: [
        "Regular Income Certificates (RIC) offer a gross profit rate of 11.76% per annum, paying Rs. 980 monthly per Rs. 100,000 investment before tax. After deducting 15% withholding tax for filers, the net monthly profit is Rs. 833.",
        "RIC is structured as a 5-year medium-term sovereign bond open to all Pakistani citizens, overseas Pakistanis, and corporate entities. Profit is credited directly on a monthly basis to the investor's linked savings account or personal bank IBAN."
      ],
      bullets: [
        "Gross Monthly Profit: Rs. 980 per 1 Lakh PKR.",
        "Net Profit for Filers (15% Tax): Rs. 833.00 per month per 1 Lakh PKR (Rs. 8,330/month on 10 Lakh PKR).",
        "Net Profit for Non-Filers (30% Tax): Rs. 686.00 per month per 1 Lakh PKR (Rs. 6,860/month on 10 Lakh PKR).",
        "Encashment Rules: Early encashment within the first 1 to 4 years incurs a minor service fee deduction (0.25% to 1%), whereas premature encashment after 4 years yields full principal face value."
      ]
    },
    {
      title: "What Are the Profit Rates for Special Savings Certificates (SSC)?",
      paragraphs: [
        "Special Savings Certificates (SSC) pay an average revised profit rate of 11.82% per annum, featuring bi-annual profit distributions every 6 months over a 3-year investment tenor. Net bi-annual return for active tax filers is Rs. 5,023.50 per Rs. 100,000 deposited.",
        "SSC profit rates increase progressively across the six half-yearly periods. The first five profit payouts are paid at a fixed half-yearly rate, while the sixth and final payout includes an enhanced final coupon bonus."
      ],
      bullets: [
        "Bi-Annual Profit Mechanism: Investors collect profit twice a year directly from Qaumi Bachat Bank branches or automated bank accounts.",
        "Net Return per 1 Lakh (Filer): Rs. 5,023.50 every 6 months after deducting 15% withholding tax.",
        "Net Return per 1 Lakh (Non-Filer): Rs. 4,137.00 every 6 months after deducting 30% withholding tax."
      ]
    },
    {
      title: "What Are the Profit Rates for Pensioners Benefit Account & Defence Savings Certificates?",
      paragraphs: [
        "Pensioners Benefit Account (PBA) yields 12.72% per annum with tax-free monthly returns, while Defence Savings Certificates (DSC) offer a 10-year compound maturity rate of 11.80% per annum. PBA pays Rs. 1,060 monthly per 1 Lakh PKR, whereas DSC multiplies principal capital at maturity.",
        "Pensioners Benefit Account is exclusively reserved for retired government employees, armed forces personnel, and retired employees of state-owned autonomous bodies. DSC is a 10-year long-term growth certificate accessible to the general public."
      ],
      bullets: [
        "PBA Monthly Return: Exactly Rs. 1,060 per month per 1 Lakh PKR (Tax-Free & Zakat-Free).",
        "DSC Maturity Multiplication: A Rs. 100,000 investment in DSC grows to approximately Rs. 305,080 upon completing full 10-year maturity."
      ]
    },
    {
      title: "What Are the Rates for Sarwa Islamic Savings Account & Term Accounts (SITA/SISA)?",
      paragraphs: [
        "Sarwa Islamic Term Account (SITA) 3-year tenor yields 11.57% per annum, while the 5-year tenor yields 11.70% per annum under Shariah-compliant Mudarabah investment contracts. Sarwa Islamic Savings Account (SISA) offers an expected profit rate of 11.33% per annum.",
        "The Central Directorate of National Savings launched Sarwa Islamic products to accommodate investors seeking Riba-free investments audited by an official Shariah Advisory Board."
      ]
    },
    {
      title: "How Is Withholding Tax (15% vs 30%) Applied to National Savings Profit Rates?",
      paragraphs: [
        "The Federal Board of Revenue (FBR) mandates withholding tax deductions on National Savings profit payouts under Section 151 of the Income Tax Ordinance 2001. Active Taxpayers (Filers) pay 15% tax, while Non-Filers are penalized with a 30% tax rate.",
        "CDNS automatically verifies investor CNIC status against the online FBR Active Taxpayer List (ATL) at the exact time of profit disbursement."
      ]
    },
    {
      title: "How Can You Avoid 2.5% Zakat Deduction Using Form CZ-50?",
      paragraphs: [
        "National Savings Certificates are subject to a compulsory 2.5% Zakat deduction on the first day of Ramadan under the Zakat and Ushr Ordinance 1980, unless a valid Form CZ-50 affidavit is submitted.",
        "Submitting this declaration (stamped on Rs. 50 stamp paper and notarized) at least 30 days prior to 1st Ramadan exempts eligible account holders from automatic Zakat deductions."
      ]
    },
    {
      title: "How to Calculate Your Monthly National Savings Profit (Step-by-Step Walkthrough)",
      paragraphs: [
        "To accurately calculate net monthly profit from any National Savings scheme, investors must apply the gross rate, compute the monthly fraction, and subtract applicable FBR withholding tax."
      ],
      bullets: [
        "Step 1: Calculate Gross Annual Profit = Principal Amount * (Annual Rate / 100). Example for Rs 10 Lakh in RIC at 11.76% = Rs 117,600/year.",
        "Step 2: Convert to Gross Monthly Return = Gross Annual Profit / 12 = Rs 9,800/month.",
        "Step 3: Compute FBR Tax Deduction = 15% for Filers (Rs 1,470) or 30% for Non-Filers (Rs 2,940).",
        "Step 4: Determine Net Monthly Cash Handout = Gross Monthly Return - Tax = Rs 8,330/month net for Filers."
      ]
    }
  ],
  faqs: [
    {
      question: "What is the current profit rate of Behbood Savings Certificate in October 2026?",
      answer: "The current profit rate for Behbood Savings Certificates (BSC) is 12.72% per annum as of October 1, 2026. This translates to an exact monthly return of Rs. 1,060 for every Rs. 100,000 invested. BSC profit is completely exempt from withholding tax and Zakat deductions."
    },
    {
      question: "How much profit is paid on Rs 100,000 investment in Regular Income Certificate (RIC)?",
      answer: "Regular Income Certificates (RIC) pay a gross monthly return of Rs. 980 per Rs. 100,000 investment (11.76% per annum). After deducting 15% withholding tax for active tax filers, the net monthly profit is Rs. 833.00. Non-filers receive Rs. 686.00 per month after 30% tax deduction."
    },
    {
      question: "What is the tax rate on National Savings profit for tax filers and non-filers?",
      answer: "Under Section 151 of the Income Tax Ordinance 2001, the Federal Board of Revenue (FBR) levies a 15% withholding tax on profit payouts for Active Taxpayers (Filers). Non-filers who are not listed on the FBR Active Taxpayer List (ATL) are subject to a 30% withholding tax rate."
    },
    {
      question: "Are Behbood Savings Certificates subject to Zakat and Income Tax?",
      answer: "No, Behbood Savings Certificates (BSC), Pensioners Benefit Account (PBA), and Shuhada Family Welfare Account (SFWA) are legally exempt from both income tax withholding and 2.5% compulsory Zakat deductions under federal tax laws."
    },
    {
      question: "What is the profit payout frequency for Special Savings Certificates (SSC)?",
      answer: "Special Savings Certificates (SSC) distribute profit bi-annually every six months throughout their 3-year maturity tenure. The average profit rate is 11.82% per annum, delivering a net bi-annual return of Rs. 5,023.50 per Rs. 100,000 investment for tax filers."
    },
    {
      question: "What is the profit rate on Sarwa Islamic Term Account (SITA)?",
      answer: "As of October 1, 2026, the 3-Year Sarwa Islamic Term Account (SITA) yields 11.57% per annum with bi-annual profit distributions, while the 5-Year SITA yields 11.70% per annum with monthly profit payouts. Both operate under Shariah-compliant Mudarabah and Ijarah agreements."
    },
    {
      question: "Can non-resident Pakistanis (NRPs) invest in National Savings Schemes?",
      answer: "Yes, Non-Resident Pakistanis (NRPs) holding a valid NICOP or Overseas Pakistan Banking Channel can invest in National Savings Schemes directly or through digital channels including the Roshan Digital Account (RDA) and National Savings Digital Mobile Application."
    },
    {
      question: "How can I submit Form CZ-50 for Zakat exemption on National Savings?",
      answer: "To avoid the 2.5% automatic Zakat deduction on 1st Ramadan, investors must submit a duly executed Form CZ-50 affidavit (stamped on Rs. 50 stamp paper and notarized) to their managing National Savings branch at least 30 days prior to 1st Ramadan."
    },
    {
      question: "What is the penalty or deduction for premature encashment of certificates?",
      answer: "If certificates such as RIC or SSC are encashed before completing their full maturity tenure, CDNS applies a nominal early service fee deduction ranging between 0.25% and 1% of face value depending on the duration held. Encashment after 4 years for RIC incurs zero penalty."
    },
    {
      question: "Where can I collect monthly profit from National Savings Certificates?",
      answer: "Profits can be collected directly over the counter at any of the 375+ National Savings Centre branches across Pakistan, or automatically credited to your linked commercial bank account IBAN via RAST / Interbank Funds Transfer (IBFT)."
    }
  ],
  officialLinks: [
    {
      label: "Official National Savings Pakistan Portal",
      href: "https://savings.gov.pk/"
    },
    {
      label: "CDNS Latest Profit Rates Notification",
      href: "https://savings.gov.pk/profit-rates/"
    },
    {
      label: "FBR Active Taxpayer List (ATL) Portal",
      href: "https://e.fbr.gov.pk/"
    }
  ],
  relatedSlugs: [
    "federal-contributory-pension-scheme",
    "wazir-e-azam-apna-ghar-program",
    "cm-punjab-e-bikes-scheme-phase-2"
  ]
};

// Insert into content.ts
const articlesMarker = 'export const articles: Article[] = [';
const insertPos = content.indexOf(articlesMarker);
if (insertPos === -1) {
  console.error('Could not find articles marker in content.ts');
  process.exit(1);
}

const articleString = JSON.stringify(articleObject, null, 2)
  .replace(/"author":\s*\{\}/, 'author: contributors.muhammadSalman')
  .replace(/"reviewer":\s*\{\}/, 'reviewer: contributors.ayeshaMalik');

let formattedArticle = `  {\n` +
  `    slug: "${articleObject.slug}",\n` +
  `    title: ${JSON.stringify(articleObject.title)},\n` +
  `    excerpt: ${JSON.stringify(articleObject.excerpt)},\n` +
  `    showExcerpt: true,\n` +
  `    metaTitle: ${JSON.stringify(articleObject.metaTitle)},\n` +
  `    metaDescription: ${JSON.stringify(articleObject.metaDescription)},\n` +
  `    focusKeyword: ${JSON.stringify(articleObject.focusKeyword)},\n` +
  `    lsiKeywords: ${JSON.stringify(articleObject.lsiKeywords)},\n` +
  `    entities: ${JSON.stringify(articleObject.entities)},\n` +
  `    primaryCategory: "pension",\n` +
  `    categorySlugs: ["pension", "financial-schemes"],\n` +
  `    date: "October 2, 2026",\n` +
  `    publishedDate: "2026-10-02",\n` +
  `    lastChecked: "October 2, 2026",\n` +
  `    readTime: "8 min read",\n` +
  `    image: "/images/national-savings-profit-rates.webp",\n` +
  `    imageAlt: ${JSON.stringify(articleObject.imageAlt)},\n` +
  `    author: contributors.muhammadSalman,\n` +
  `    reviewer: contributors.ayeshaMalik,\n` +
  `    sections: ${JSON.stringify(articleObject.sections, null, 6)},\n` +
  `    faqs: ${JSON.stringify(articleObject.faqs, null, 6)},\n` +
  `    officialLinks: ${JSON.stringify(articleObject.officialLinks, null, 6)},\n` +
  `    relatedSlugs: ${JSON.stringify(articleObject.relatedSlugs)}\n` +
  `  },\n`;

content = content.slice(0, insertPos + articlesMarker.length) + '\n' + formattedArticle + content.slice(insertPos + articlesMarker.length);

// Bidirectional internal links: add national-savings-profit-rates to related target articles
const relatedTargets = [
  'federal-contributory-pension-scheme',
  'wazir-e-azam-apna-ghar-program',
  'cm-punjab-e-bikes-scheme-phase-2'
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
