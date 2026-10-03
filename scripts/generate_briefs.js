const fs = require('fs');
const path = require('path');
const { articles } = require('./parse_content.js');
const fullAuditData = JSON.parse(fs.readFileSync('scripts/full_audit_data.json', 'utf8'));

// Build mapping of filename -> topic description & focus keyword
const briefDefinitions = {
  "hero-support.jpg": {
    topic: "Homepage Hero - Public Service Information & Social Support Desk in Pakistan",
    aspect: "1600x1000 (16:10 / 1.6 ratio)",
    prompt: "Realistic editorial photo of a respectful, well-lit public information desk in a modest Pakistani community center. A friendly female advisor wearing a plain emerald green dupatta gently explains official guidance papers to a mother and adult daughter. On the desk are clean paper folders, a modern smartphone, and a desk lamp. Soft natural lighting, warm indoor atmosphere, shallow depth of field. Strictly no text overlays, no government logos, no seals, no real politicians, and no identifiable famous people.",
    alt: "Pakistani mother and daughter receiving clear public welfare scheme guidance at a community desk"
  },
  "registration-guide.jpg": {
    topic: "Homepage Trust Section - Privacy-First Digital & Mobile Registration Guidance",
    aspect: "1600x1000 (16:10 / 1.6 ratio)",
    prompt: "Realistic editorial photograph of a young Pakistani woman seated at a wooden desk at home, reviewing a tablet and taking notes in a clean notebook. Sunlight filtering through a window, simple cozy interior, glass of water and pen on desk. High details, authentic everyday scene. Strictly no text overlays, no government logos, no seals, no real politicians.",
    alt: "Pakistani woman safely checking government scheme eligibility on a mobile device at home"
  },
  "8171-number-verification.jpg": {
    topic: "8171 SMS Code Verification & Official Mobile Query Desk",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photograph showing a close-up of a hands holding a smartphone displaying an outgoing SMS screen in a clean setting, while a helpful clerk at an information counter assists. Soft ambient lighting, shallow depth of field. No text overlays, no government seals, no real politicians.",
    alt: "Pakistani beneficiary checking 8171 SMS status code on a mobile phone for BISP eligibility"
  },
  "8171-portal-troubleshooting.jpg": {
    topic: "8171 Web Portal Error & Technical Troubleshooting Desk",
    aspect: "16:9 (1600x900)",
    prompt: "Realistic photo of an information desk technical assistant pointing helpfully to a clean laptop computer screen while explaining portal navigation to a citizen. Professional, reassuring setting, warm interior daylight. No text overlays, no official logos or seals.",
    alt: "Information desk staff assisting a citizen with 8171 web portal troubleshooting and CNIC check errors"
  },
  "8171-register.jpg": {
    topic: "8171 Registration Process & NSER Survey Information",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photography of a registration desk where a female clerk in a modest navy blue shalwar kameez scans document papers for a family. Reassuring customer service environment, natural daylight, soft focus background. No text overlays, no government logos.",
    alt: "Pakistani family submitting household verification documents at an 8171 registration center"
  },
  "apna-khet-apna-rozgar-scheme.jpg": {
    topic: "Apna Khet Apna Rozgar Agricultural Farm Support Scheme",
    aspect: "16:9 (1600x900)",
    prompt: "Realistic editorial photo of a Pakistani farmer standing proudly in a vibrant green agricultural field at sunrise, looking at a healthy crop of wheat. Golden morning sunlight, lush green field, serene countryside view. No text overlays, no government logos or seals.",
    alt: "Pakistani farmer inspecting green agricultural crops under the Apna Khet Apna Rozgar farming scheme"
  },
  "apni-chhat-apna-ghar-scheme.jpg": {
    topic: "CM Punjab Apni Chhat Apna Ghar Housing Scheme & Low-Cost Home Loan",
    aspect: "16:9 (1600x900)",
    prompt: "Realistic photo of a newly constructed single-story brick residential house in suburban Punjab, with a happy family standing near the doorway. Bright daylight, clean blue sky, modest housing architectural design. No text overlays, no government logos or seals.",
    alt: "Newly constructed family home under the CM Punjab Apni Chhat Apna Ghar housing loan program"
  },
  "apni-zameen-apna-ghar-balloting-result-2026.jpg": {
    topic: "Apni Zameen Apna Ghar Plot Balloting & Housing Land Records",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photograph of land survey maps and home building blueprints neatly laid out on a table with house keys alongside. Soft indoor lighting, professional planning concept. No text overlays, no government logos.",
    alt: "Architectural housing blueprints and land survey records for Apni Zameen Apna Ghar balloting result"
  },
  "benazir-form.jpg": {
    topic: "BISP Benazir Kafaalat Household Form & Registration Documents",
    aspect: "16:9 (1600x900)",
    prompt: "Close-up editorial photo of a woman's hands neatly filling out paper application forms with a pen on a wooden table, next to a clean folder. Warm natural indoor light, soft depth of field. No text overlays, no government seals.",
    alt: "Pakistani woman completing household information forms for BISP Benazir Kafaalat registration"
  },
  "benazir-kafaalat-case-paused.jpg": {
    topic: "BISP Case Paused & Biometric Re-verification Assistance Desk",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photography showing an empathetic customer service desk representative talking with an elderly woman, explaining verification steps with paper documents. Warm ambient lighting, supportive environment. No text overlays, no official logos.",
    alt: "Service desk staff explaining BISP Kafaalat paused status resolution and biometric update steps"
  },
  "benazir-kafaalat.jpg": {
    topic: "Benazir Kafaalat Quarterly Cash Grant & Financial Support Program",
    aspect: "16:9 (1600x900)",
    prompt: "Realistic editorial photo of a Pakistani mother holding a cash stipend receipt securely after receiving quarterly financial assistance at an authorized center. Respectful atmosphere, natural daylight. No text overlays, no official government seals.",
    alt: "Pakistani beneficiary holding official receipt after receiving Benazir Kafaalat quarterly cash stipend"
  },
  "benazir-mazdoor-card-registration-online-2026.jpg": {
    topic: "Benazir Mazdoor Card & Workers Welfare Registration",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo of a hard-working Pakistani industrial worker wearing a safety vest and helmet, holding a digital registration card outside a clean factory setting. Daylight, authentic documentary feel. No text overlays, no government logos.",
    alt: "Pakistani industrial worker holding worker registration card under Benazir Mazdoor Card scheme"
  },
  "benazir-nashonuma-program.jpg": {
    topic: "Benazir Nashonuma Maternal & Child Nutrition Cash Support Program",
    aspect: "16:9 (1600x900)",
    prompt: "Realistic editorial photo of a caring healthcare worker in a clean clinic offering a healthy nutritional package and advice to a young mother with her infant child. Bright, hygienic clinic interior, soft lighting. No text overlays, no government seals.",
    alt: "Healthcare worker offering nutritional support to mother and baby in Benazir Nashonuma clinic program"
  },
  "bisp-8171-balance-check-online.jpg": {
    topic: "BISP 8171 Online Balance Check & ATM Withdrawal Guidance",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial close-up photo of a woman using a modern biometric ATM machine in daylight, touching the finger scanner securely. Clean urban setting, crisp focus on hands and ATM interface. No text overlays, no bank or government logos.",
    alt: "Pakistani woman performing biometric verification at bank ATM for BISP 8171 balance check"
  },
  "bisp-agent-deduction-complaint.jpg": {
    topic: "BISP Agent Illegal Deduction Complaint & Official Helpline Guidance",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo of a customer support agent sitting at a desk with a headset, taking notes while addressing a telephone helpline complaint. Professional office background, calm mood. No text overlays, no government logos.",
    alt: "BISP helpline representative recording complaint against unauthorized agent fee deductions"
  },
  "bisp-and-ehsaas-difference.jpg": {
    topic: "Comparative Overview of BISP vs Ehsaas Social Welfare Programs",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo showing two organized reference folders side-by-side on a wooden office desk next to a pen and eyeglasses. Clear daylight, professional comparative concept. No text overlays, no government logos.",
    alt: "Comparative documentation folders illustrating differences between BISP and Ehsaas government welfare programs"
  },
  "bisp-atm-se-paise-nikalwane-ka-tarika.jpg": {
    topic: "BISP ATM Biometric Cash Withdrawal Step-by-Step Procedure",
    aspect: "16:9 (1600x900)",
    prompt: "Detailed editorial photo of a beneficiary placing her thumb on an ATM biometric reader, with cash dispensed safely below. Daylight, high resolution, clean background. No text overlays, no brand logos.",
    alt: "Beneficiary completing biometric thumb verification at ATM machine for BISP cash withdrawal"
  },
  "bisp-atm-withdrawal.jpg": {
    topic: "Biometric ATM Cash Dispensing for Benazir Kafaalat Beneficiaries",
    aspect: "16:9 (1600x900)",
    prompt: "Realistic photo of currency notes being dispensed safely from an ATM machine slot into hands. Crisp detail, clean lighting. No text overlays, no government seals.",
    alt: "Biometric ATM dispensing quarterly BISP Kafaalat cash stipend to beneficiary"
  },
  "bisp-benazir-kafaalat-8171-check.jpg": {
    topic: "BISP 8171 Online CNIC Status & Payment Verification Guide",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photography of a young adult checking CNIC details on a mobile smartphone while sitting at a desk with reference documents nearby. Natural light, comfortable room setting. No text overlays, no government logos.",
    alt: "Citizen verifying 8171 CNIC eligibility status for BISP Benazir Kafaalat online"
  },
  "bisp-biometric-verification-failed.jpg": {
    topic: "Biometric Verification Failure Resolution & NADRA Fingerprint Update",
    aspect: "16:9 (1600x900)",
    prompt: "Close-up editorial photograph of a biometric fingerprint scanner on a wooden counter with a hand resting gently beside it. Soft lighting, clean focus. No text overlays, no official seals.",
    alt: "Biometric thumbprint verification device used for resolving BISP fingerprint matching failures"
  },
  "bisp-cnic-status-check.jpg": {
    topic: "BISP CNIC Status Check & Family Eligibility Guide",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo showing hands holding an official identity card sample next to a smartphone displaying a status page. Soft studio lighting, clear focus. No text overlays, no government logos.",
    alt: "Checking BISP eligibility status using CNIC number on mobile portal"
  },
  "bisp-deceased-beneficiary-payment-transfer-procedure.jpg": {
    topic: "BISP Deceased Beneficiary Payment Transfer & NADRA Legal Heir Process",
    aspect: "16:9 (1600x900)",
    prompt: "Respectful editorial photo of legal documents and family relations paperwork organized inside a clean folder on a wooden desk. Soft ambient light, somber professional tone. No text overlays, no official seals.",
    alt: "Official legal heir paperwork for transferring deceased beneficiary BISP stipend"
  },
  "bisp-direct-bank-account-transfer.jpg": {
    topic: "BISP Shift to Commercial Bank Account Direct Transfers",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photograph of a modern bank counter teller handing a savings account passbook and debit card to a female customer in a hijab. Bright professional bank interior. No text overlays, no bank logos.",
    alt: "Bank teller handing account documents to beneficiary for BISP direct bank transfer system"
  },
  "bisp-dynamic-survey-documents.jpg": {
    topic: "BISP NSER Dynamic Survey Required Documents & Family Registration Desk",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo of household birth certificates, family registration certificates, and utility bills neatly organized on a table. Clean daylight shot, sharp detail. No text overlays, no official logos.",
    alt: "Required household verification documents for BISP NSER dynamic survey registration"
  },
  "bisp-dynamic-survey-token-required-documents-guide.jpg": {
    topic: "BISP Dynamic Survey Token System & Desk Queue Guide",
    aspect: "16:9 (1600x900)",
    prompt: "Realistic photo of citizens sitting orderly in a shaded, well-ventilated waiting hall at a public facilitation center, receiving numbered guidance tokens. Daylight, clean civic setting. No text overlays, no government seals.",
    alt: "Citizens holding survey registration tokens at BISP Tehsil center waiting area"
  },
  "bisp-helpline-complaint.jpg": {
    topic: "BISP Official Helpline 0800-26477 & Complaint Resolution Desk",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photography of a modern phone headset lying beside a notepad with phone numbers written down, on a brightly lit office desk. Clean corporate atmosphere. No text overlays, no government seals.",
    alt: "Helpline support headset and desk setup for submitting BISP complaints"
  },
  "bisp-login.jpg": {
    topic: "BISP Official Staff & Field Officer Login Portal Information",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial image of a computer keyboard and secure login prompt on a screen in a clean office setting, with a notebook beside it. Soft focus background. No text overlays, no government logos.",
    alt: "Secure digital portal login screen representation for BISP official portal guidance"
  },
  "bisp-office-rawalpindi.jpg": {
    topic: "BISP Tehsil & Regional Office Rawalpindi Location Guide",
    aspect: "16:9 (1600x900)",
    prompt: "Realistic outdoor editorial photo of a neat public office building facade in Rawalpindi with clean glass entrance and visitors walking in daylight. Clear sunny sky, respectable civic architectural view. No text overlays, no official seals.",
    alt: "Exterior facade of public service center in Rawalpindi offering BISP dynamic survey desks"
  },
  "bisp-online-registration-mistakes.jpg": {
    topic: "Common BISP Registration Mistakes & Form Correction Guide",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo showing a person highlighting mistakes on a draft form with a red pen on a light wooden table. Clear lighting, detailed shot. No text overlays, no government logos.",
    alt: "Reviewing and correcting common errors on BISP registration forms"
  },
  "bisp-registration-check-by-cnic.jpg": {
    topic: "BISP Registration Verification Online by CNIC",
    aspect: "16:9 (1600x900)",
    prompt: "Close-up editorial photo of hands holding an identity card while typing on a laptop keyboard. Clean workstation background, natural daylight. No text overlays, no official logos.",
    alt: "Checking BISP online registration status using CNIC card details"
  },
  "bisp-registration.jpg": {
    topic: "BISP Dynamic Center Household Registration & Desk Process",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo of a female survey officer entering household details into a digital tablet while talking to a female applicant across a clean counter. Professional, well-lit indoor environment. No text overlays, no government seals.",
    alt: "Survey officer conducting household registration for BISP program at Tehsil desk"
  },
  "bisp-taleemi-wazaif-70-attendance-rule-verification.jpg": {
    topic: "BISP Taleemi Wazaif 70% School Attendance Compliance Rule",
    aspect: "16:9 (1600x900)",
    prompt: "Realistic editorial photo of a school teacher reviewing an attendance register book with students engaged neatly in a bright classroom background. Warm morning classroom sunlight. No text overlays, no official seals.",
    alt: "School teacher checking student attendance record for BISP Taleemi Wazaif stipend eligibility"
  },
  "bisp-taleemi-wazaif-stipend-rates-2026.jpg": {
    topic: "BISP Taleemi Wazaif Class-Wise Quarterly Stipend Rates",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo of elementary and secondary school textbooks, notebooks, and pencils stacked neatly on a wooden desk next to a calculator. Bright educational setting. No text overlays, no logos.",
    alt: "School textbooks and educational supplies representing BISP Taleemi Wazaif quarterly stipend rates"
  },
  "bisp-tehsil-office-faisalabad.jpg": {
    topic: "BISP Tehsil Office Faisalabad Directory & Center Locations",
    aspect: "16:9 (1600x900)",
    prompt: "Exterior editorial photo of a modern civic public administration building entrance in Faisalabad with visitors arriving in daylight. Clean urban surroundings. No text overlays, no government seals.",
    alt: "Front entrance of Faisalabad Tehsil office location for BISP survey and registration"
  },
  "bisp-tehsil-office-karachi.jpg": {
    topic: "BISP Tehsil Office Karachi District List & Survey Centers",
    aspect: "16:9 (1600x900)",
    prompt: "Realistic exterior shot of a clean civic service facility building in Karachi under bright blue sky with palm trees and visitors entering. Urban daylight editorial photography. No text overlays, no official logos.",
    alt: "Public facilitation facility building in Karachi serving BISP registration applicants"
  },
  "bisp-tehsil-office-lahore.jpg": {
    topic: "BISP Tehsil Office Lahore Verified Registration Desks",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photography of a modern public administrative building entrance in Lahore with clear signage post and citizens walking indoors safely. Crisp lighting, authentic urban shot. No text overlays, no government seals.",
    alt: "Lahore Tehsil registration office building for BISP survey and beneficiary assistance"
  },
  "bisp-tehsil-office-multan.jpg": {
    topic: "BISP Tehsil Office Multan & South Punjab Locations",
    aspect: "16:9 (1600x900)",
    prompt: "Exterior photo of a well-maintained government service building in Multan with traditional brick elements, clean courtyard, and sunlight. Professional architectural photography. No text overlays, no logos.",
    alt: "Multan public service administrative building offering BISP dynamic survey registration"
  },
  "bisp-tehsil-office-peshawar-kpk.jpg": {
    topic: "BISP Tehsil Office Peshawar & KPK Service Centers",
    aspect: "16:9 (1600x900)",
    prompt: "Exterior photo of a civic center in Peshawar under sunny sky, clean paved courtyard with citizens walking toward guidance desks. Natural daylight, respectable atmosphere. No text overlays, no seals.",
    alt: "Peshawar Tehsil registration facility for BISP applicants and KPK beneficiaries"
  },
  "check-bisp-account-status.jpg": {
    topic: "Check BISP Account Status & CNIC Payment Verification",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo of a woman checking account details on a mobile screen while seated at a dining table with household records nearby. Soft natural light, realistic domestic setup. No text overlays, no official seals.",
    alt: "Pakistani beneficiary checking BISP account status and payment release on mobile phone"
  },
  "cm-balochistan-youth-skills-scheme-2026-online-apply.jpg": {
    topic: "CM Balochistan Youth Skills Development & Technical Training Program",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo of young Baloch students in a modern technical lab learning computer engineering and robotics under supervision. Bright workshop interior, hopeful atmosphere. No text overlays, no government logos.",
    alt: "Youth in Balochistan participating in vocational skills training program under CM scheme"
  },
  "cm-punjab-apni-chhat-apna-ghar-loan.jpg": {
    topic: "CM Punjab Apni Chhat Apna Ghar Housing Loan Installment Plan",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photograph showing an architect holding house drawings and discussing construction progress with a homeowner in front of a new home brick structure. Daylight, professional construction scene. No text overlays, no official seals.",
    alt: "Homeowner discussing construction layout for CM Punjab Apni Chhat Apna Ghar house loan"
  },
  "cm-punjab-dhee-rani-program.jpg": {
    topic: "CM Punjab Dhee Rani Program Collective Wedding & Bridal Financial Aid",
    aspect: "16:9 (1600x900)",
    prompt: "Respectful editorial photo of traditional wedding gift boxes, embroidered bridal attire, and household items arranged elegantly for a ceremony. Warm ambient festive lighting, soft focus. No text overlays, no government logos.",
    alt: "Bridal assistance gift packages and household items for CM Punjab Dhee Rani program"
  },
  "cm-punjab-e-bike-scheme-updates.jpg": {
    topic: "CM Punjab Electric Bike Scheme Latest Balloting & Delivery Updates",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo of sleek modern green and white electric motorcycles parked in an organized row outside a showroom in daytime. Bright sunshine, clean automotive photography. No text overlays, no commercial or government brand logos.",
    alt: "Lineup of new electric bikes for students under CM Punjab E-Bike scheme"
  },
  "cm-punjab-e-bikes-scheme-phase-2.jpg": {
    topic: "CM Punjab Electric Bikes & Pink Scooty Scheme Phase 2",
    aspect: "16:9 (1600x900)",
    prompt: "Realistic photo of a female college student wearing a helmet and backpack, standing proudly next to a modern pastel pink electric scooter on campus. Daylight, bright educational backdrop. No text overlays, no logos.",
    alt: "Female student standing beside electric scooty under CM Punjab Pink Scooty Phase 2"
  },
  "cm-punjab-electric-bike-scheme.jpg": {
    topic: "CM Punjab Electric Bike Scheme for Students",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photography of a male university student smiling while adjusting his helmet next to an electric motorbike in front of a modern university building. Sunny afternoon. No text overlays, no seals.",
    alt: "University student with electric motor bike subsidized by CM Punjab E-Bike scheme"
  },
  "cm-punjab-free-laptop-scheme.jpg": {
    topic: "CM Punjab Free Laptop Scheme for Higher Education Students",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo of a high-achieving university student opening a sleek modern silver laptop at a library study desk surrounded by books. Soft overhead library lighting, focused academic expression. No text overlays, no brand logos.",
    alt: "Meritorious university student working on a laptop provided under CM Punjab Free Laptop Scheme"
  },
  "cm-punjab-green-credit-program-2026.jpg": {
    topic: "CM Punjab Green Credit Program & Eco-Friendly Agricultural Financing",
    aspect: "16:9 (1600x900)",
    prompt: "Realistic photo of modern solar panels powering a clean drip irrigation system in a lush vegetable field. Daylight, bright environmental technology photography. No text overlays, no government logos.",
    alt: "Solar powered agricultural irrigation system funded by CM Punjab Green Credit Program"
  },
  "cm-punjab-green-tractor-scheme.jpg": {
    topic: "CM Punjab Green Tractor Scheme Subsidized Farm Tractors",
    aspect: "16:9 (1600x900)",
    prompt: "Realistic editorial photo of a brand new bright green farm tractor parked in a fertile brown soil field, with a proud farmer standing nearby in morning sunlight. High quality agricultural photography. No text overlays, no commercial or government seals.",
    alt: "Brand new green agricultural tractor delivered under CM Punjab Green Tractor Scheme"
  },
  "cm-punjab-honhaar-scholarship.jpg": {
    topic: "CM Punjab Honhaar Merit Scholarship 100% Tuition Fee Award",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo of diverse university scholars sitting together in a modern lecture auditorium, reviewing academic papers and smiling. Warm indoor auditorium lighting. No text overlays, no official seals.",
    alt: "Pakistani university scholars benefiting from CM Punjab Honhaar Merit Scholarship Program"
  },
  "cm-punjab-kisan-card.jpg": {
    topic: "CM Punjab Kisan Card Interest-Free Fertilizer & Seed Loan Card",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial close-up of a farmer holding a smart financial debit card securely in front of a vibrant green wheat field. Crisp focus on card and background harvest field. No text overlays, no official seals.",
    alt: "Pakistani farmer displaying Kisan Card used for purchasing agricultural fertilizers and seeds"
  },
  "cm-punjab-livestock-card-scheme.jpg": {
    topic: "CM Punjab Livestock Card Cattle Farmer Financing Scheme",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo of a livestock farmer tending to healthy dairy cattle inside a modern, clean rural livestock shed. Soft daylight, authentic rural scene. No text overlays, no government seals.",
    alt: "Cattle farmer tending to livestock funded through CM Punjab Livestock Card scheme"
  },
  "cm-punjab-rehmat-card-2026.jpg": {
    topic: "CM Punjab Rehmat Card Financial Welfare Card",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo of a family receiving financial advisory support in a community hall. Respectful atmosphere, daylight. No text overlays, no government logos.",
    alt: "Family learning about welfare assistance through CM Punjab Rehmat Card program"
  },
  "cm-punjab-solar-panel-scheme.jpg": {
    topic: "CM Punjab Solar Panel Scheme Roshan Gharana Rooftop Solar Installation",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo of high-efficiency rooftop solar panels installed on a residential house in Punjab, capturing bright golden afternoon sunshine. Crisp sky, clean green energy photography. No text overlays, no commercial or government logos.",
    alt: "Rooftop solar panel system installed on home under CM Punjab Solar Panel Scheme"
  },
  "cm-punjab-youth-games-2026.jpg": {
    topic: "CM Punjab Youth Games & Sports Talent Support",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo of young athletic athletes running on a modern red outdoor running track in a stadium at sunset. Dynamic motion blur, dramatic sports photography. No text overlays, no brand logos.",
    alt: "Young athletes participating in sports competitions at CM Punjab Youth Games"
  },
  "e-bike-guide.jpg": {
    topic: "Electric Bike Scheme Application & Subsidy Guide",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo of an electric motorcycle charging cable plugged into a bike, with green battery indicator lit up. Clean daylight. No text overlays, no logos.",
    alt: "Electric bike charging point illustrating government e-bike subsidy guide"
  },
  "ehsaas-kafalat-invalid-cnic-nser-update.jpg": {
    topic: "Ehsaas Kafalat Invalid CNIC & Marital Status NSER Update Guide",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo of a woman updating family records at a registration desk, showing document papers to an official. Warm daylight, supportive setting. No text overlays, no seals.",
    alt: "Updating invalid CNIC status and marital records for Ehsaas Kafalat eligibility"
  },
  "ehsaas-loan-vs-saving-wallet.jpg": {
    topic: "Ehsaas Interest-Free Micro Loan vs Savings Wallet Scheme",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo of small shopkeeper receiving microfinance assistance to expand a small grocery store shelf. Warm lighting, authentic small business setting. No text overlays, no logos.",
    alt: "Small business owner utilizing Ehsaas microfinance loan for retail enterprise growth"
  },
  "ehsaas-payment-tracking.jpg": {
    topic: "Ehsaas Payment Tracking & Stipend Distribution Status",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial close-up photo of a woman holding cash payment receipt carefully near a digital counter. Daylight, clean focus. No text overlays, no seals.",
    alt: "Tracking quarterly payment release status for Ehsaas program stipend"
  },
  "ehsaas-tracking-news.jpg": {
    topic: "Ehsaas Tracking News, Announcements & Policy Updates Desk",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo of a person reading news update articles on a digital tablet at a wooden desk with a cup of tea. Soft indoor morning daylight. No text overlays, no government logos.",
    alt: "Reading latest news updates on Ehsaas tracking portal and policy announcements"
  },
  "ehsaas-undergraduate-scholarship.jpg": {
    topic: "Ehsaas Undergraduate Scholarship Program for University Students",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photograph of undergraduate university students walking across campus quadrangle with books and notebooks, smiling in afternoon sun. Academic atmosphere. No text overlays, no seals.",
    alt: "Undergraduate university students benefiting from Ehsaas tuition scholarship"
  },
  "fake-8171-sms-check-complaint-pta-bisp-lottery-fraud-alert.jpg": {
    topic: "Fake 8171 SMS Fraud Warning & PTA Fraud Complaint Guidance",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial image of a smartphone displaying a red warning shield graphic on desk next to a notebook, representing cyber fraud alertness. Crisp, professional warning concept. No text overlays, no logos.",
    alt: "Cybersecurity warning representation against fake 8171 lottery SMS fraud schemes"
  },
  "farmer-support.jpg": {
    topic: "Agricultural Support & Farmer Welfare Subsidy Initiatives",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo of two farmers shaking hands warmly in a golden wheat field during harvest season. Bright natural daylight, inspiring rural atmosphere. No text overlays, no government seals.",
    alt: "Pakistani farmers receiving agricultural welfare support and crop subsidies"
  },
  "federal-contributory-pension-scheme.jpg": {
    topic: "Federal Contributory Pension Scheme for Government Employees",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photograph of a retired civil employee sitting comfortably in a well-lit living room, holding pension plan documentation happily with family nearby. Reassuring tone. No text overlays, no logos.",
    alt: "Retired government employee reviewing Federal Contributory Pension Scheme documents"
  },
  "fuel-relief-scheme.jpg": {
    topic: "Fuel & Subsidy Relief Scheme for Motorcycle & Rickshaw Drivers",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo of a motorcycle commuter refueling at a modern clean gas station in daylight. Clear focus, authentic street scene. No text overlays, no commercial fuel brand logos.",
    alt: "Motorcycle commuter refueling at petrol pump under fuel relief subsidy scheme"
  },
  "himmat-card-eligibility-check-guide.jpg": {
    topic: "Himmat Card Eligibility Check & Disability Welfare Stipend Guide",
    aspect: "16:9 (1600x900)",
    prompt: "Respectful editorial photo of a person with special physical needs receiving assistance from a social worker in an accessible office. Soft ambient lighting, empowering mood. No text overlays, no seals.",
    alt: "Social worker guiding applicant on Himmat Card disability stipend eligibility"
  },
  "how-to-apply-cm-punjab-e-bike-scheme-2026.jpg": {
    topic: "How to Apply CM Punjab E-Bike Scheme 2026 Step-by-Step Portal Guide",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo of a student sitting at a laptop computer desk submitting an application form online, with an electric bike photo on a nearby note board. Daylight, clean room setup. No text overlays, no government logos.",
    alt: "Student completing online application step for CM Punjab E-Bike Scheme portal"
  },
  "kisan-card-8070-pin-verification.jpg": {
    topic: "Kisan Card 8070 PIN Verification & BOP Activation Process",
    aspect: "16:9 (1600x900)",
    prompt: "Close-up editorial photograph of a farmer's hands holding a Kisan Card next to a POS payment terminal at an authorized fertilizer depot. Sharp focus, daylight. No text overlays, no bank logos.",
    alt: "Farmer verifying Kisan Card 8070 PIN code at authorized agricultural dealer POS"
  },
  "national-savings-profit-rates.jpg": {
    topic: "National Savings Certificates Profit Rates Comparison",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photography of financial savings papers, a pen, and a calculator arranged neatly on a polished wooden desk. Warm professional lighting. No text overlays, no logos.",
    alt: "Financial savings papers and calculator representing National Savings profit rate updates"
  },
  "national-savings-profit-rates.webp": {
    topic: "National Savings Certificates & Prize Bond Profit Rates Table 2026",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo showing savings passbooks, clean financial tables, and coins on a light background. Crisp lighting, clean detail. No text overlays, no logos.",
    alt: "Official National Savings Profit Rates comparison chart and return rates reference"
  },
  "nigehban-card-check-guide.jpg": {
    topic: "Nigehban Free Rashan Card & Ration Distribution Scheme",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo of clean ration packages containing flour, oil, and pulses being presented to a family at a relief center. Warm daylight, respectful atmosphere. No text overlays, no government seals.",
    alt: "Ration distribution package provided under Nigehban Rashan scheme"
  },
  "pave-electric-bike-scheme.jpg": {
    topic: "PAVE Electric Bike Scheme Subsidy & Green Mobility",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo of an electric scooter parked near green trees on a suburban road, showing clean design. Morning sunlight. No text overlays, no logos.",
    alt: "Electric bike parked in eco-friendly surroundings for PAVE electric bike scheme"
  },
  "pink-scooty-scheme-2026.jpg": {
    topic: "Pink Scooty Scheme 2026 for Female Students & Working Women",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo of two female college friends wearing helmets, getting ready to ride pink scooties parked outside a university building. Daylight, cheerful empowering scene. No text overlays, no brand logos.",
    alt: "Female students riding pink scooties provided under government mobility scheme"
  },
  "pm-petrol-relief-scheme-updates.jpg": {
    topic: "PM Petrol Relief Scheme Updates, Quotas & Token Status",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo of rickshaw and motorcycle drivers lined up orderly at a fuel pump under clear morning sky. High detail, authentic daily life. No text overlays, no commercial fuel brand logos.",
    alt: "Drivers lined up at fuel pump receiving PM Petrol Relief Scheme subsidy"
  },
  "pm-youth-loan-scheme.jpg": {
    topic: "PM Youth Business & Agriculture Loan Scheme 2026",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photograph of a young male entrepreneur standing inside his new tech repair workshop, smiling confidently. Bright workshop interior, modern tools visible. No text overlays, no government logos.",
    alt: "Young Pakistani entrepreneur in workshop established through PM Youth Business Loan"
  },
  "pmt-score-above-32-bisp-re-survey.jpg": {
    topic: "BISP PMT Poverty Score Above 32 Re-Survey & Appeal Guidance",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo of a family meeting with a welfare advisor at an office desk to discuss household dynamic survey appeal. Respectful indoor setting, warm lighting. No text overlays, no official seals.",
    alt: "Family consulting welfare officer for BISP PMT score re-survey and appeal process"
  },
  "punjab-land-record-check-guide.jpg": {
    topic: "Punjab Land Records Arazi Record Center Online Check",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo of official property land documents with red stamp impression on desk alongside a computer monitor. Clear focus, professional legal setup. No text overlays, no government logos.",
    alt: "Property land ownership documents for Punjab Land Record Arazi online check"
  },
  "punjab-solar-tube-well-scheme.jpg": {
    topic: "Punjab Solar Tube Well Scheme Subsidized Agricultural Pumps",
    aspect: "16:9 (1600x900)",
    prompt: "Realistic editorial photo of a high-flow solar powered water tube well pumping clean fresh water into a farmland canal in Punjab. Golden sunlight, vibrant agricultural shot. No text overlays, no commercial brand logos.",
    alt: "Solar powered agricultural tube well dispensing water into farm channels under Punjab scheme"
  },
  "scholarship-guide.jpg": {
    topic: "Pakistan Educational Scholarships & Student Financial Aid Guide",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo of a graduation cap sitting on top of university diploma scrolls on a library study table. Soft library lighting, inspiring academic focus. No text overlays, no logos.",
    alt: "Graduation mortarboard cap and academic scrolls representing educational scholarship guides"
  },
  "sehat-card-plus-kpk.jpg": {
    topic: "KPK Sehat Card Plus 10 Lakh Free Hospital Treatment Coverage",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photography of a compassionate doctor in a white coat consulting a senior patient inside a modern hospital room. Clean healthcare lighting, reassuring professional scene. No text overlays, no hospital or government brand logos.",
    alt: "Doctor providing medical care to patient under KPK Sehat Card Plus free hospital treatment scheme"
  },
  "sindh-hari-card-scheme.jpg": {
    topic: "Sindh Hari Card Farmer Subsidy & Financial Assistance Scheme",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo of a Sindhi farmer wearing a traditional Ajrak shoulder cloth standing in a green agricultural crop field, holding a smart card. Daylight, proud cultural documentary feel. No text overlays, no government seals.",
    alt: "Sindhi farmer holding Hari Card in agricultural field for farmer subsidies"
  },
  "taleemi-wazaif.jpg": {
    topic: "Benazir Taleemi Wazaif Primary & Secondary School Stipends",
    aspect: "16:9 (1600x900)",
    prompt: "Realistic editorial photo of smiling school children walking together with backpacks outside a clean brick school building in morning sunshine. Cheerful, natural educational scene. No text overlays, no official government seals.",
    alt: "Pakistani school children walking to school supported by Benazir Taleemi Wazaif stipends"
  },
  "transport-fuel-relief-options.jpg": {
    topic: "Comparison of Transport & Fuel Relief Options in Pakistan",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photo showing green public buses and electric scooters on a clean urban road in Pakistan during daytime. Bright daylight, modern transit scene. No text overlays, no brand logos.",
    alt: "Urban public transport buses and electric mobility options under fuel relief schemes"
  },
  "wazir-e-azam-apna-ghar-program.jpg": {
    topic: "Wazir-e-Azam PM Housing Program & Affordable Apartments",
    aspect: "16:9 (1600x900)",
    prompt: "Editorial photography of a modern multi-story affordable residential apartment building under blue sky, with landscaped garden in front. Crisp architectural shot. No text overlays, no seals.",
    alt: "Modern residential apartment building constructed under Wazir-e-Azam housing program"
  }
};

let briefsMd = `# Image Generation Replacement Briefs (Phase 1)

## Overview & Strict Rules for Image Generation in Phase 2
All replacement images must follow these strict editorial and technical constraints:
1. **Aspect Ratio & Dimensions**:
   - **Hero Image (\`hero-support.jpg\`)**: Exactly **1600x1000** (1.6 / 16:10 ratio, matches metadata & desktop hero aspect box).
   - **Trust Section Image (\`registration-guide.jpg\`)**: Exactly **1600x1000**.
   - **All Article Featured Images (81 images)**: Strictly **16:9 aspect ratio** (e.g. **1600x900** or **1280x720**).
2. **Filenames**: Keep exact target filenames (do NOT change extensions or filenames so code references remain 100% intact).
3. **Style**: Realistic editorial photography style (authentic Pakistani context, natural lighting, warm human presence).
4. **Strict Safety & Independence Policy**:
   - **NO text overlays** or typography burned into the image.
   - **NO government logos**, official coats of arms, BISP seals, NADRA logos, or department flags.
   - **NO real politicians**, famous public figures, or identifiable real people.
   - **NO fake currency bills** with official emblems.
5. **Alt Text**: Keyword-rich, descriptive alt text without keyword stuffing.

---

## Complete Master Replacement Briefs (83 Images)

`;

fullAuditData.forEach((img, index) => {
  const filename = img.filename;
  const def = briefDefinitions[filename] || {
    topic: `Scheme Guide Image for ${filename}`,
    aspect: "16:9 (1600x900)",
    prompt: `Editorial photograph of a clean, professional scene in Pakistan related to ${filename.replace(/-/g, ' ').replace('.jpg', '').replace('.webp', '')}. Natural daylight, realistic documentary style. No text overlays, no government logos, no seals, no real politicians.`,
    alt: `Pakistani citizen participating in ${filename.replace(/-/g, ' ').replace('.jpg', '')} welfare initiative`
  };

  briefsMd += `### ${index + 1}. \`${filename}\`
- **Target Filename**: \`${filename}\`
- **Target Aspect Ratio & Resolution**: ${def.aspect}
- **Specific Scheme / Topic Illustrated**: ${def.topic}
- **Detailed AI Generation Prompt**:
  > "${def.prompt}"
- **Keyword-Rich Alt Text**: \`imageAlt="${def.alt}"\`
- **Current File Size & Status**: ${img.sizeKB} KB | Flags: **${img.flags.length > 0 ? img.flags.join(', ') : 'OK'}**

---
`;
});

fs.writeFileSync('docs/image-briefs.md', briefsMd);
console.log('Saved docs/image-briefs.md');
