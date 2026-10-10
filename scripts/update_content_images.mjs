import fs from 'fs';
import path from 'path';
import ts from 'typescript';

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const articleImageUpdates = {
  "youth-loans-financing-drive-2026": {
    image: "/images/youth-loans-financing-drive-tiers-guide.webp",
    imageAlt: "Youth Loans and Financing Drive 2026 tier 1 tier 2 tier 3 eligibility and online apply portal"
  },
  "prime-minister-fuel-relief-scheme-2026": {
    image: "/images/prime-minister-fuel-relief-scheme-9771-sms.webp",
    imageAlt: "Prime Minister Fuel Relief Scheme 9771 SMS registration format and fuel subsidy rates"
  },
  "pm-fuel-relief-scheme-updates": {
    image: "/images/pm-fuel-relief-scheme-updates-token-status.webp",
    imageAlt: "PM Fuel Relief Scheme updates showing 9771 SMS token verification and quota check"
  },
  "punjab-solar-housing-updates-2026": {
    image: "/images/punjab-solar-housing-updates-roshan-gharana.webp",
    imageAlt: "Punjab solar and housing updates for CM Roshan Gharana rooftop solar installation"
  },
  "housing-social-cards-punjab": {
    image: "/images/housing-social-cards-punjab-online-apply.webp",
    imageAlt: "Housing and social cards Punjab 2026 Apni Chhat Apna Ghar and Himmat Card online apply"
  },
  "bisp-pser-updates": {
    image: "/images/bisp-pser-updates-dynamic-survey-form.webp",
    imageAlt: "BISP PSER updates dynamic registry survey form and 8171 online status check"
  },
  "pave-scheme-2026-eligibility-electric-bike-subsidy-online-apply": {
    image: "/images/pave-scheme-electric-bike-subsidy-online-apply.webp",
    imageAlt: "PAVE scheme 2026 electric bike subsidy application portal at pave.gov.pk"
  },
  "apna-ghar-social-welfare-guide": {
    image: "/images/apna-ghar-social-welfare-services.webp",
    imageAlt: "Apna Ghar and social welfare shelter support and affordable housing loan criteria"
  },
  "ehsaas-program-balance-check": {
    image: "/images/ehsaas-program-balance-check-cnic.webp",
    imageAlt: "Ehsaas program balance check by CNIC online status and biometric payment withdrawal"
  },
  "ramzan-package-check-guide": {
    image: "/images/ramzan-package-check-8171-ration-relief.webp",
    imageAlt: "Ramzan package check 8171 and 9999 CNIC eligibility verification for free ration relief"
  },
  "what-is-pmt-score": {
    image: "/images/what-is-pmt-score-bisp-formula-calculator.webp",
    imageAlt: "What is PMT score explanation and BISP poverty score cut off threshold"
  },
  "how-to-check-bisp-eligibility-guide": {
    image: "/images/how-to-check-bisp-eligibility-portal-sms-office.webp",
    imageAlt: "How to check BISP eligibility through 8171 web portal, SMS code and tehsil office"
  },
  "8171-check-online-kaise-karein": {
    image: "/images/8171-check-online-official-web-portal-cnic.webp",
    imageAlt: "8171 online portal cnic check status official green web portal UI maloom karein"
  },
  "bisp-balance-check-by-cnic-2026": {
    image: "/images/bisp-balance-check-by-cnic-2026-online.webp",
    imageAlt: "BISP 8171 online check balance by CNIC showing payment release and biometric status"
  },
  "bisp-payment-approved-but-no-cash-received": {
    image: "/images/bisp-payment-approved-no-cash-received-complaint.webp",
    imageAlt: "BISP payment approved but no cash received troubleshooting and campsite agent complaint"
  },
  "bisp-biometric-verification-failed": {
    image: "/images/bisp-biometric-verification-failed-nadra-device-fix.webp",
    imageAlt: "BISP biometric verification failed thumb impression error fix at NADRA e-Sahulat"
  },
  "benazir-income-support-programme-bisp-8171-guide": {
    image: "/images/benazir-income-support-programme-bisp-8171-official-guide.webp",
    imageAlt: "Benazir Income Support Programme BISP 8171 payment eligibility and registration guide"
  },
  "check-bisp-eligibility-8171": {
    image: "/images/check-bisp-eligibility-8171-portal-steps.webp",
    imageAlt: "Check BISP eligibility 8171 web portal input fields and captcha code verification"
  },
  "taleemi-wazaif-registration-guide": {
    image: "/images/taleemi-wazaif-registration-checklist-school.webp",
    imageAlt: "Taleemi Wazaif registration checklist showing child B-form and school admission slip"
  },
  "avoid-bisp-fraud": {
    image: "/images/avoid-bisp-fraud-scam-alert-red-flags.webp",
    imageAlt: "BISP scam alert recognizing fake WhatsApp lottery messages and fee demands"
  },
  "nser-survey-not-found": {
    image: "/images/nser-survey-not-found-bisp-no-record-solution.webp",
    imageAlt: "NSER survey not found resolution and dynamic registry desk token appointment"
  },
  "nser-pmt-score-check-guide": {
    image: "/images/nser-pmt-score-check-survey-desk.webp",
    imageAlt: "PMT score check through official NSER records and tehsil registration counter"
  },
  "benazir-kafaalat-registration-cnic-check-guide": {
    image: "/images/benazir-kafaalat-registration-cnic-check-walkthrough.webp",
    imageAlt: "Benazir Kafaalat registration CNIC check walkthrough and 8171 status verification"
  },
  "benazir-kafaalat-payment-guide": {
    image: "/images/benazir-kafaalat-payment-guide-atm-camp.webp",
    imageAlt: "Benazir Kafaalat payment guide for biometric ATM withdrawal and campsite collection"
  },
  "documents-for-bisp-registration": {
    image: "/images/documents-for-bisp-registration-checklist.webp",
    imageAlt: "Documents for BISP registration original CNIC Nadra child B-form and electricity bill"
  },
  "cnic-verification-guide": {
    image: "/images/cnic-check-online-verification-across-programmes.webp",
    imageAlt: "CNIC check online verification across BISP Ehsaas and provincial welfare databases"
  },
  "what-is-bisp": {
    image: "/images/what-is-bisp-meaning-programmes-overview.webp",
    imageAlt: "BISP Benazir Income Support Programme overview structure and social protection grants"
  },
  "nashonuma-program": {
    image: "/images/nashonuma-program-nutrition-stipend-registration.webp",
    imageAlt: "Nashonuma program specialized nutrition food and pregnant mother health stipend registration"
  },
  "zakat-and-bisp-eligibility": {
    image: "/images/zakat-in-pakistan-bisp-eligibility-comparison.webp",
    imageAlt: "Zakat Pakistan and BISP eligibility criteria comparison for Guzara grant assistance"
  },
  "bisp-eligibility-criteria-guide": {
    image: "/images/bisp-eligibility-criteria-qualifying-rules.webp",
    imageAlt: "Eligibility criteria for BISP Benazir Kafaalat poverty score limits and exclusions"
  },
  "what-counts-as-a-good-pmt-score": {
    image: "/images/what-counts-as-a-good-pmt-score-ranges.webp",
    imageAlt: "What counts as a good PMT score for BISP 32 cut off benchmark and dynamic survey"
  },
  "cm-punjab-himmat-card-online-apply-2026": {
    image: "/images/cm-punjab-himmat-card-dpmis-online-apply.webp",
    imageAlt: "CM Punjab Himmat Card online apply portal DPMIS registration for Rs 10500 stipend"
  },
  "ehsaas-emergency-cash-program-guide": {
    image: "/images/ehsaas-emergency-cash-programme-disbursement.webp",
    imageAlt: "Ehsaas emergency cash programme qualification criteria and biometric cash collection"
  },
  "ehsaas-rashan-program-guide": {
    image: "/images/ehsaas-rashan-programme-karyana-subsidy.webp",
    imageAlt: "Ehsaas Rashan programme subsidized flour ghee and pulses at registered karyana stores"
  },
  "pm-youth-business-loan-guide": {
    image: "/images/pm-youth-business-loan-guide-bank-kamyab.webp",
    imageAlt: "PM Youth Business Loan and agriculture financing application checklist and markup rate"
  },
  "ehsaas-interest-free-loan-saving-wallets-guide": {
    image: "/images/ehsaas-saving-wallets-programme-interest-free-loan.webp",
    imageAlt: "Ehsaas saving wallets programme mobile banking and interest-free loan partner centers"
  },
  "punjab-rozgar-scheme-guide": {
    image: "/images/punjab-rozgar-scheme-business-finance-psic.webp",
    imageAlt: "Punjab Rozgar Scheme subsidized credit limit and business loan application on PSIC portal"
  },
  "fuel-relief-scheme-guide": {
    image: "/images/fuel-relief-scheme-pakistan-petrol-subsidy.webp",
    imageAlt: "Fuel relief scheme Pakistan Rs 100 per litre petrol subsidy eligibility for bike owners"
  },
  "bisp-id-card-check": {
    image: "/images/bisp-id-card-check-blocked-cnic-fix.webp",
    imageAlt: "BISP ID card check fixing blocked CNIC with NADRA family tree and marital record update"
  },
  "bisp-payment-method": {
    image: "/images/bisp-payment-method-atm-biometric-safe-guide.webp",
    imageAlt: "BISP payment method biometric cash withdrawal at HBL Alfalah ATM and receipt verification"
  },
  "benazir-sim-card": {
    image: "/images/benazir-sim-card-free-wallet-sim-guide.webp",
    imageAlt: "Benazir SIM card free mobile wallet SIM registration and biometric issuance for BISP"
  },
  "bisp-card-check": {
    image: "/images/bisp-card-check-active-blocked-replacement.webp",
    imageAlt: "BISP card check debit card replacement and transition to biometric cash withdrawal"
  },
  "benazir-taleemi-wazaif-form-download-tarika": {
    image: "/images/benazir-taleemi-wazaif-form-download-school-slip.webp",
    imageAlt: "Benazir Taleemi Wazaif form download aur jama karne ka tarika school admission slip verification"
  },
  "bisp-8171-paise-check-karne-ka-tarika": {
    image: "/images/bisp-8171-paise-check-karne-ka-tarika-atm-cash.webp",
    imageAlt: "BISP 8171 paise check karne ka tarika ATM biometric cash withdrawal aur payment slip sample"
  }
};

let content = fs.readFileSync('src/data/content.ts', 'utf8');

// Load articles to get their order
const compiled = ts.transpileModule(content, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const contentModule = { exports: {} };
new Function('exports', 'module', compiled)(contentModule.exports, contentModule);
const { articles } = contentModule.exports;

console.log(`Processing ${articles.length} articles...`);

// For each article, locate its object in content.ts
for (let i = 0; i < articles.length; i++) {
  const art = articles[i];
  const slug = art.slug;
  
  // Find where this slug is defined in content
  const slugRegex = new RegExp(`(["']?slug["']?\\s*:\\s*["']${escapeRegExp(slug)}["'])`);
  const match = slugRegex.exec(content);
  if (!match) {
    console.error(`ERROR: Slug ${slug} not found in content!`);
    continue;
  }
  
  const slugIndex = match.index;
  // End of this article block is either the next slug or the end of articles array
  let nextArticleIndex = content.length;
  if (i < articles.length - 1) {
    const nextSlug = articles[i + 1].slug;
    const nextMatch = new RegExp(`(["']?slug["']?\\s*:\\s*["']${escapeRegExp(nextSlug)}["'])`).exec(content.slice(slugIndex + 10));
    if (nextMatch) {
      nextArticleIndex = slugIndex + 10 + nextMatch.index;
    }
  }
  
  // Extract block for this article
  let block = content.slice(slugIndex, nextArticleIndex);
  
  if (articleImageUpdates[slug]) {
    // Apply specific update
    const spec = articleImageUpdates[slug];
    block = block.replace(/(["']?image["']?\s*:\s*["'])[^"']+["']/, `$1${spec.image}"`);
    block = block.replace(/(["']?imageAlt["']?\s*:\s*["'])[^"']+["']/, `$1${spec.imageAlt}"`);
  } else {
    // Convert existing image from .jpg to .webp
    block = block.replace(/(["']?image["']?\s*:\s*["']\/images\/[^"']+)\.jpg(["'])/, '$1.webp$2');
  }
  
  // Replace block in content
  content = content.slice(0, slugIndex) + block + content.slice(nextArticleIndex);
}

// Ensure there are no remaining .jpg references in any article images in content.ts
content = content.replace(/(["']?image["']?\s*:\s*["']\/images\/[^"']+)\.jpg(["'])/g, '$1.webp$2');

fs.writeFileSync('src/data/content.ts', content, 'utf8');
console.log('Successfully updated src/data/content.ts!');

// Validate
const updatedCompiled = ts.transpileModule(content, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const updatedModule = { exports: {} };
new Function('exports', 'module', updatedCompiled)(updatedModule.exports, updatedModule);
const updatedArticles = updatedModule.exports.articles;

console.log(`Validation: Loaded ${updatedArticles.length} updated articles.`);

const imageCounts = new Map();
let duplicatesFound = 0;
let missingFiles = 0;

for (const a of updatedArticles) {
  if (!a.image.endsWith('.webp')) {
    console.error(`Article ${a.slug} does not end with .webp: ${a.image}`);
  }
  const relPath = path.join('public', a.image.replace(/^\//, ''));
  if (!fs.existsSync(relPath)) {
    console.error(`Missing image file on disk: ${relPath} for article ${a.slug}`);
    missingFiles++;
  }
  imageCounts.set(a.image, (imageCounts.get(a.image) || 0) + 1);
}

for (const [img, count] of imageCounts.entries()) {
  if (count > 1) {
    console.error(`Duplicate image still found: ${img} used ${count} times!`);
    duplicatesFound++;
  }
}

console.log(`Validation summary:`);
console.log(`  - Total articles: ${updatedArticles.length}`);
console.log(`  - Unique images: ${imageCounts.size}`);
console.log(`  - Duplicate image groups: ${duplicatesFound}`);
console.log(`  - Missing image files: ${missingFiles}`);
