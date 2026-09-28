import fs from 'fs';
import path from 'path';

const contentPath = path.resolve('src/data/content.ts');
let contentStr = fs.readFileSync(contentPath, 'utf8');

console.log('Adding internal contextual links between the target articles...');

// 1. Add links to ehsaas-interest-free-loan-vs-saving-wallet
const ehsaasNeedle = 'slug: "ehsaas-interest-free-loan-vs-saving-wallet",';
const ehsaasIndex = contentStr.indexOf(ehsaasNeedle);

if (ehsaasIndex !== -1) {
  // Find Section 3 inside this article
  const sec3Title = 'title: "Who Should Apply for an Ehsaas Interest-Free Loan?",';
  const sec3Index = contentStr.indexOf(sec3Title, ehsaasIndex);
  
  if (sec3Index !== -1) {
    const sec3End = contentStr.indexOf('},', sec3Index);
    const sec3Chunk = contentStr.substring(sec3Index, sec3End);
    if (!sec3Chunk.includes('links:')) {
      const updatedSec3 = sec3Chunk + ',\n        links: [\n          { label: "Apni Chhat Apna Ghar 15 Lakh Loan tracking guide", href: "/cm-punjab-apni-chhat-apna-ghar-loan-installment-tracking/" },\n          { label: "CM Balochistan Youth Skills Scheme 2026 registration guide", href: "/cm-balochistan-youth-skills-scheme-2026-online-apply/" }\n        ]';
      contentStr = contentStr.substring(0, sec3Index) + updatedSec3 + contentStr.substring(sec3End);
      console.log('Added internal links to Section 3 of ehsaas-interest-free-loan-vs-saving-wallet');
    }
  }

  // Find Section 6 (Safety Alert)
  const sec6Title = 'title: "Public Safety Alert: Avoiding Fake Loan Apps and WhatsApp Processing Scams",';
  const sec6Index = contentStr.indexOf(sec6Title, ehsaasIndex);
  if (sec6Index !== -1) {
    const sec6End = contentStr.indexOf('}', sec6Index);
    const sec6Chunk = contentStr.substring(sec6Index, sec6End);
    if (!sec6Chunk.includes('links:')) {
      const updatedSec6 = sec6Chunk + ',\n        links: [\n          { label: "Fake 8171 SMS check and PTA fraud complaint guide", href: "/fake-8171-sms-check-complaint-pta-bisp-lottery-fraud-alert/" }\n        ]\n      ';
      contentStr = contentStr.substring(0, sec6Index) + updatedSec6 + contentStr.substring(sec6End);
      console.log('Added internal links to Section 6 of ehsaas-interest-free-loan-vs-saving-wallet');
    }
  }
}

// 2. Add link to cm-punjab-apni-chhat-apna-ghar-loan-installment-tracking
const acagNeedle = 'slug: "cm-punjab-apni-chhat-apna-ghar-loan-installment-tracking",';
const acagIndex = contentStr.indexOf(acagNeedle);
if (acagIndex !== -1) {
  const acagSecTitle = 'title: "CM Punjab Apni Chhat Apna Ghar Loan Installment Tracking Overview",';
  const acagSecIndex = contentStr.indexOf(acagSecTitle, acagIndex);
  if (acagSecIndex !== -1) {
    const acagSecEnd = contentStr.indexOf('}', acagSecIndex);
    const acagChunk = contentStr.substring(acagSecIndex, acagSecEnd);
    if (!acagChunk.includes('links:')) {
      const updatedAcag = acagChunk + ',\n        links: [\n          { label: "Compare Ehsaas Interest-Free Loans vs Saving Wallets", href: "/ehsaas-interest-free-loan-vs-saving-wallet/" }\n        ]\n      ';
      contentStr = contentStr.substring(0, acagSecIndex) + updatedAcag + contentStr.substring(acagSecEnd);
      console.log('Added internal link to cm-punjab-apni-chhat-apna-ghar-loan-installment-tracking');
    }
  }
}

// 3. Add link to cm-balochistan-youth-skills-scheme-2026-online-apply
const balochNeedle = 'slug: "cm-balochistan-youth-skills-scheme-2026-online-apply",';
const balochIndex = contentStr.indexOf(balochNeedle);
if (balochIndex !== -1) {
  const balochSecTitle = 'title: "CM Balochistan Youth Skills Scheme 2026 Overview",';
  const balochSecIndex = contentStr.indexOf(balochSecTitle, balochIndex);
  if (balochSecIndex !== -1) {
    const balochSecEnd = contentStr.indexOf('}', balochSecIndex);
    const balochChunk = contentStr.substring(balochSecIndex, balochSecEnd);
    if (!balochChunk.includes('links:')) {
      const updatedBaloch = balochChunk + ',\n        links: [\n          { label: "Ehsaas Interest-Free Loan vs. Saving Wallet guide", href: "/ehsaas-interest-free-loan-vs-saving-wallet/" }\n        ]\n      ';
      contentStr = contentStr.substring(0, balochSecIndex) + updatedBaloch + contentStr.substring(balochSecEnd);
      console.log('Added internal link to cm-balochistan-youth-skills-scheme-2026-online-apply');
    }
  }
}

// 4. Add link to fake-8171-sms-check-complaint-pta-bisp-lottery-fraud-alert
const fakeNeedle = 'slug: "fake-8171-sms-check-complaint-pta-bisp-lottery-fraud-alert",';
const fakeIndex = contentStr.indexOf(fakeNeedle);
if (fakeIndex !== -1) {
  const fakeSecTitle = 'title: "Fake 8171 SMS Check & BISP Lottery Fraud Overview",';
  const fakeSecIndex = contentStr.indexOf(fakeSecTitle, fakeIndex);
  if (fakeSecIndex !== -1) {
    const fakeSecEnd = contentStr.indexOf('}', fakeSecIndex);
    const fakeChunk = contentStr.substring(fakeSecIndex, fakeSecEnd);
    if (!fakeChunk.includes('links:')) {
      const updatedFake = fakeChunk + ',\n        links: [\n          { label: "Ehsaas Interest-Free Loan vs Saving Wallet comparative guide", href: "/ehsaas-interest-free-loan-vs-saving-wallet/" }\n        ]\n      ';
      contentStr = contentStr.substring(0, fakeSecIndex) + updatedFake + contentStr.substring(fakeSecEnd);
      console.log('Added internal link to fake-8171-sms-check-complaint-pta-bisp-lottery-fraud-alert');
    }
  }
}

fs.writeFileSync(contentPath, contentStr, 'utf8');
console.log('Successfully updated content.ts with internal contextual links!');
