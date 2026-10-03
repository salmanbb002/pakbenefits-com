const fs = require('fs');
const path = require('path');

const briefData = {
  "hero-support.jpg": "Pakistani mother and daughter receiving clear public welfare scheme guidance at a community desk",
  "registration-guide.jpg": "Pakistani woman safely checking government scheme eligibility on a mobile device at home",
  "8171-number-verification.jpg": "Pakistani beneficiary checking 8171 SMS status code on a mobile phone for BISP eligibility",
  "8171-portal-troubleshooting.jpg": "Information desk staff assisting a citizen with 8171 web portal troubleshooting and CNIC check errors",
  "8171-register.jpg": "Pakistani family submitting household verification documents at an 8171 registration center",
  "apna-khet-apna-rozgar-scheme.jpg": "Pakistani farmer inspecting green agricultural crops under the Apna Khet Apna Rozgar farming scheme",
  "apni-chhat-apna-ghar-scheme.jpg": "Newly constructed family home under the CM Punjab Apni Chhat Apna Ghar housing loan program",
  "apni-zameen-apna-ghar-balloting-result-2026.jpg": "Architectural housing blueprints and land survey records for Apni Zameen Apna Ghar balloting result",
  "benazir-form.jpg": "Pakistani woman completing household information forms for BISP Benazir Kafaalat registration",
  "benazir-kafaalat-case-paused.jpg": "Service desk staff explaining BISP Kafaalat paused status resolution and biometric update steps",
  "benazir-kafaalat.jpg": "Pakistani beneficiary holding official receipt after receiving Benazir Kafaalat quarterly cash stipend",
  "benazir-mazdoor-card-registration-online-2026.jpg": "Pakistani industrial worker holding worker registration card under Benazir Mazdoor Card scheme",
  "benazir-nashonuma-program.jpg": "Healthcare worker offering nutritional support to mother and baby in Benazir Nashonuma clinic program",
  "bisp-8171-balance-check-online.jpg": "Pakistani woman performing biometric verification at bank ATM for BISP 8171 balance check",
  "bisp-agent-deduction-complaint.jpg": "BISP helpline representative recording complaint against unauthorized agent fee deductions",
  "bisp-and-ehsaas-difference.jpg": "Comparative documentation folders illustrating differences between BISP and Ehsaas government welfare programs",
  "bisp-atm-se-paise-nikalwane-ka-tarika.jpg": "Beneficiary completing biometric thumb verification at ATM machine for BISP cash withdrawal",
  "bisp-atm-withdrawal.jpg": "Biometric ATM dispensing quarterly BISP Kafaalat cash stipend to beneficiary",
  "bisp-benazir-kafaalat-8171-check.jpg": "Citizen verifying 8171 CNIC eligibility status for BISP Benazir Kafaalat online",
  "bisp-biometric-verification-failed.jpg": "Biometric thumbprint verification device used for resolving BISP fingerprint matching failures",
  "bisp-cnic-status-check.jpg": "Checking BISP eligibility status using CNIC number on mobile portal",
  "bisp-deceased-beneficiary-payment-transfer-procedure.jpg": "Official legal heir paperwork for transferring deceased beneficiary BISP stipend",
  "bisp-direct-bank-account-transfer.jpg": "Bank teller handing account documents to beneficiary for BISP direct bank transfer system",
  "bisp-dynamic-survey-documents.jpg": "Required household verification documents for BISP NSER dynamic survey registration",
  "bisp-dynamic-survey-token-required-documents-guide.jpg": "Citizens holding survey registration tokens at BISP Tehsil center waiting area",
  "bisp-helpline-complaint.jpg": "Helpline support headset and desk setup for submitting BISP complaints",
  "bisp-login.jpg": "Secure digital portal login screen representation for BISP official portal guidance",
  "bisp-office-rawalpindi.jpg": "Exterior facade of public service center in Rawalpindi offering BISP dynamic survey desks",
  "bisp-online-registration-mistakes.jpg": "Reviewing and correcting common errors on BISP registration forms",
  "bisp-registration-check-by-cnic.jpg": "Checking BISP online registration status using CNIC card details",
  "bisp-registration.jpg": "Survey officer conducting household registration for BISP program at Tehsil desk",
  "bisp-taleemi-wazaif-70-attendance-rule-verification.jpg": "School teacher checking student attendance record for BISP Taleemi Wazaif stipend eligibility",
  "bisp-taleemi-wazaif-stipend-rates-2026.jpg": "School textbooks and educational supplies representing BISP Taleemi Wazaif quarterly stipend rates",
  "bisp-tehsil-office-faisalabad.jpg": "Front entrance of Faisalabad Tehsil office location for BISP survey and registration",
  "bisp-tehsil-office-karachi.jpg": "Public facilitation facility building in Karachi serving BISP registration applicants",
  "bisp-tehsil-office-lahore.jpg": "Lahore Tehsil registration office building for BISP survey and beneficiary assistance",
  "bisp-tehsil-office-multan.jpg": "Multan public service administrative building offering BISP dynamic survey registration",
  "bisp-tehsil-office-peshawar-kpk.jpg": "Peshawar Tehsil registration facility for BISP applicants and KPK beneficiaries",
  "check-bisp-account-status.jpg": "Pakistani beneficiary checking BISP account status and payment release on mobile phone",
  "cm-balochistan-youth-skills-scheme-2026-online-apply.jpg": "Youth in Balochistan participating in vocational skills training program under CM scheme",
  "cm-punjab-apni-chhat-apna-ghar-loan.jpg": "Homeowner discussing construction layout for CM Punjab Apni Chhat Apna Ghar house loan",
  "cm-punjab-dhee-rani-program.jpg": "Bridal assistance gift packages and household items for CM Punjab Dhee Rani program",
  "cm-punjab-e-bike-scheme-updates.jpg": "Lineup of new electric bikes for students under CM Punjab E-Bike scheme",
  "cm-punjab-e-bikes-scheme-phase-2.jpg": "Female student standing beside electric scooty under CM Punjab Pink Scooty Phase 2",
  "cm-punjab-electric-bike-scheme.jpg": "University student with electric motor bike subsidized by CM Punjab E-Bike scheme",
  "cm-punjab-free-laptop-scheme.jpg": "Meritorious university student working on a laptop provided under CM Punjab Free Laptop Scheme",
  "cm-punjab-green-credit-program-2026.jpg": "Solar powered agricultural irrigation system funded by CM Punjab Green Credit Program",
  "cm-punjab-green-tractor-scheme.jpg": "Brand new green agricultural tractor delivered under CM Punjab Green Tractor Scheme",
  "cm-punjab-honhaar-scholarship.jpg": "Pakistani university scholars benefiting from CM Punjab Honhaar Merit Scholarship Program",
  "cm-punjab-kisan-card.jpg": "Pakistani farmer displaying Kisan Card used for purchasing agricultural fertilizers and seeds",
  "cm-punjab-livestock-card-scheme.jpg": "Cattle farmer tending to livestock funded through CM Punjab Livestock Card scheme",
  "cm-punjab-rehmat-card-2026.jpg": "Family learning about welfare assistance through CM Punjab Rehmat Card program",
  "cm-punjab-solar-panel-scheme.jpg": "Rooftop solar panel system installed on home under CM Punjab Solar Panel Scheme",
  "cm-punjab-youth-games-2026.jpg": "Young athletes participating in sports competitions at CM Punjab Youth Games",
  "e-bike-guide.jpg": "Electric bike charging point illustrating government e-bike subsidy guide",
  "ehsaas-kafalat-invalid-cnic-nser-update.jpg": "Updating invalid CNIC status and marital records for Ehsaas Kafalat eligibility",
  "ehsaas-loan-vs-saving-wallet.jpg": "Small business owner utilizing Ehsaas microfinance loan for retail enterprise growth",
  "ehsaas-payment-tracking.jpg": "Tracking quarterly payment release status for Ehsaas program stipend",
  "ehsaas-tracking-news.jpg": "Reading latest news updates on Ehsaas tracking portal and policy announcements",
  "ehsaas-undergraduate-scholarship.jpg": "Undergraduate university students benefiting from Ehsaas tuition scholarship",
  "fake-8171-sms-check-complaint-pta-bisp-lottery-fraud-alert.jpg": "Cybersecurity warning representation against fake 8171 lottery SMS fraud schemes",
  "farmer-support.jpg": "Pakistani farmers receiving agricultural welfare support and crop subsidies",
  "federal-contributory-pension-scheme.jpg": "Retired government employee reviewing Federal Contributory Pension Scheme documents",
  "fuel-relief-scheme.jpg": "Motorcycle commuter refueling at petrol pump under fuel relief subsidy scheme",
  "himmat-card-eligibility-check-guide.jpg": "Social worker guiding applicant on Himmat Card disability stipend eligibility",
  "how-to-apply-cm-punjab-e-bike-scheme-2026.jpg": "Student completing online application step for CM Punjab E-Bike Scheme portal",
  "kisan-card-8070-pin-verification.jpg": "Farmer verifying Kisan Card 8070 PIN code at authorized agricultural dealer POS",
  "national-savings-profit-rates.jpg": "Financial savings papers and calculator representing National Savings profit rate updates",
  "national-savings-profit-rates.webp": "Official National Savings Profit Rates comparison chart and return rates reference",
  "nigehban-card-check-guide.jpg": "Ration distribution package provided under Nigehban Rashan scheme",
  "pave-electric-bike-scheme.jpg": "Electric bike parked in eco-friendly surroundings for PAVE electric bike scheme",
  "pink-scooty-scheme-2026.jpg": "Female students riding pink scooties provided under government mobility scheme",
  "pm-petrol-relief-scheme-updates.jpg": "Drivers lined up at fuel pump receiving PM Petrol Relief Scheme subsidy",
  "pm-youth-loan-scheme.jpg": "Young Pakistani entrepreneur in workshop established through PM Youth Business Loan",
  "pmt-score-above-32-bisp-re-survey.jpg": "Family consulting welfare officer for BISP PMT score re-survey and appeal process",
  "punjab-land-record-check-guide.jpg": "Property land ownership documents for Punjab Land Record Arazi online check",
  "punjab-solar-tube-well-scheme.jpg": "Solar powered agricultural tube well dispensing water into farm channels under Punjab scheme",
  "scholarship-guide.jpg": "Graduation mortarboard cap and academic scrolls representing educational scholarship guides",
  "sehat-card-plus-kpk.jpg": "Doctor providing medical care to patient under KPK Sehat Card Plus free hospital treatment scheme",
  "sindh-hari-card-scheme.jpg": "Sindhi farmer holding Hari Card in agricultural field for farmer subsidies",
  "taleemi-wazaif.jpg": "Pakistani school children walking to school supported by Benazir Taleemi Wazaif stipends",
  "transport-fuel-relief-options.jpg": "Urban public transport buses and electric mobility options under fuel relief schemes",
  "wazir-e-azam-apna-ghar-program.jpg": "Modern residential apartment building constructed under Wazir-e-Azam housing program"
};

let contentTs = fs.readFileSync('src/data/content.ts', 'utf8');

let count = 0;
for (const [filename, newAlt] of Object.entries(briefData)) {
  const imgPath = `/images/${filename}`;
  // Find article entry block with this image path and update imageAlt
  const regex = new RegExp(`(image:\\s*"${imgPath.replace(/\//g, '\\/')}",\\s*\\n\\s*imageAlt:\\s*")[^"]+(")`, 'g');
  if (regex.test(contentTs)) {
    contentTs = contentTs.replace(regex, `$1${newAlt}$2`);
    count++;
  }
}

fs.writeFileSync('src/data/content.ts', contentTs);
console.log(`Updated ${count} imageAlt fields in src/data/content.ts`);
