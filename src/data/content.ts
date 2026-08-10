export type ContentSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Contributor = {
  name: string;
  role: string;
  bio: string;
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  primaryCategory: string;
  categorySlugs: string[];
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  author: Contributor;
  reviewer: Contributor;
  sections: ContentSection[];
  faqs?: { question: string; answer: string }[];
  officialLinks: { label: string; href: string }[];
};

export type Category = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  intro: string;
  icon: "badge" | "wallet" | "users" | "landmark" | "graduation" | "newspaper" | "coins" | "activity";
};

export type InformationPage = {
  slug: string;
  title: string;
  eyebrow: string;
  intro: string;
  sections: ContentSection[];
};

export const contributors = {
  saadHassan: {
    name: "Saad Hassan",
    role: "Public Programmes Editor",
    bio: "Saad has covered BISP, Ehsaas, and provincial welfare schemes for Welfare Desk Pakistan since 2024, cross-checking every guide against the current official portal before publication.",
  },
  ayeshaMalik: {
    name: "Ayesha Malik",
    role: "Editorial Reviewer, Social Protection",
    bio: "Ayesha reviews programme-eligibility and payment content for accuracy against BISP, NADRA NSER, and provincial notices, and flags any guide that needs an update after an official policy change.",
  },
} as const;

export const categories: Category[] = [
  {
    slug: "8171",
    name: "8171 Eligibility & Status",
    shortName: "8171 Check",
    description: "Understand the official status-check route and the next safe step.",
    intro: "Use our plain-language guides to understand the 8171 process, status messages, survey follow-ups, and the official channels that protect your personal information.",
    icon: "badge",
  },
  {
    slug: "benazir-kafaalat",
    name: "Benazir Kafaalat",
    shortName: "Kafaalat",
    description: "Payment, verification, collection, and complaint guidance.",
    intro: "Benazir Kafaalat supports eligible women through BISP. These guides explain verification, payment collection, record updates, and fraud precautions without asking for your CNIC.",
    icon: "wallet",
  },
  {
    slug: "bisp-registration",
    name: "BISP Registration",
    shortName: "Registration",
    description: "Prepare for surveys and registration-desk visits with confidence.",
    intro: "Find practical checklists for BISP registration desks, household surveys, document preparation, and safe follow-up through official offices.",
    icon: "users",
  },
  {
    slug: "other-schemes",
    name: "Other Government Schemes",
    shortName: "Other Schemes",
    description: "Explore verified education, youth, farming, and mobility opportunities.",
    intro: "Browse straightforward explainers for public opportunities beyond BISP, including youth loans, farmer support, education, and mobility initiatives.",
    icon: "landmark",
  },
  {
    slug: "taleemi-wazaif",
    name: "Taleemi Wazaif",
    shortName: "Taleemi Wazaif",
    description: "Enrollment and school-attendance guidance for eligible families.",
    intro: "Learn how the education-support process works, what documents families commonly prepare, and where to verify details before taking action.",
    icon: "graduation",
  },
  {
    slug: "news",
    name: "Public Service News",
    shortName: "News Desk",
    description: "Timely explainers, official links, and scam-awareness updates.",
    intro: "Follow important public-service announcements with context, plain-language summaries, and direct links to the responsible official organization.",
    icon: "newspaper",
  },
  {
    slug: "payment-check",
    name: "Payment Check Guides",
    shortName: "Payment Check",
    description: "Know where to verify a payment and how to avoid deductions.",
    intro: "These guides explain safe payment verification, approved messages, biometric issues, receipts, and complaint routes. Welfare Desk Pakistan never checks or stores CNIC numbers.",
    icon: "wallet",
  },
  {
    slug: "ehsaas-programs",
    name: "Ehsaas Programme Guides",
    shortName: "Ehsaas Programmes",
    description: "Emergency cash, interest-free loans, saving wallets, and registration centers.",
    intro: "Ehsaas covers more than the 8171 status check. These guides explain the emergency cash disbursement, interest-free loan and saving-wallet schemes, and how to find an official registration center near you.",
    icon: "coins",
  },
  {
    slug: "nser-pmt-score",
    name: "NSER Survey & PMT Score",
    shortName: "NSER & PMT Score",
    description: "Understand the household survey that decides your poverty score.",
    intro: "Your eligibility for BISP and Ehsaas programmes is based on a PMT (Proxy Means Test) score generated from the National Socio-Economic Registry (NSER) survey. These guides explain how the survey and score work.",
    icon: "activity",
  },
];

export const articles: Article[] = [
  {
    slug: "how-to-register-bisp-online-guide",
    title: "How to Register for BISP Online: Step-by-Step 2026 Guide",
    excerpt: "The full registration route — NSER survey, tehsil desk, and the official online options — explained in order.",
    primaryCategory: "BISP Registration",
    categorySlugs: ["bisp-registration", "8171", "news"],
    date: "August 11, 2026",
    readTime: "8 min read",
    image: "/images/registration-guide.jpg",
    imageAlt: "A woman completing a BISP registration checklist step by step on a tablet",
    author: contributors.saadHassan,
    reviewer: contributors.ayeshaMalik,
    sections: [
      {
        title: "There is no single 'apply now' button",
        paragraphs: [
          "A lot of confusion around BISP registration comes from expecting a single online form, like opening a bank account. In practice, registration runs through the National Socio-Economic Registry (NSER) survey, which BISP uses to calculate a household's Proxy Means Test (PMT) score. Your household either already has a survey record, needs a new one, or needs an existing one updated — and each path uses a different official channel.",
          "This guide walks through all three paths in order, so you can identify which one applies before you travel anywhere or fill out anything.",
        ],
      },
      {
        title: "Step 1: Check if a record already exists",
        paragraphs: [
          "Before starting a fresh registration, check the official 8171 portal with the head-of-household's CNIC. A response that shows an existing NSER record means you may only need an update, not a new survey — which is a much shorter process.",
        ],
        bullets: [
          "Open the official 8171 status portal from a trusted device.",
          "Enter the CNIC of the person the household is registered under, not a different family member.",
          "Read the returned message carefully — it usually names the next step directly.",
        ],
      },
      {
        title: "Step 2: If no record exists — the NSER survey",
        paragraphs: [
          "Households without an existing record need an NSER survey visit, either through a scheduled registration drive in your union council or by visiting a BISP tehsil office to request one. An authorized enumerator or desk officer records household income, assets, and family composition; this data generates the PMT score that determines eligibility, so answer every question accurately rather than guessing at an outcome.",
        ],
      },
      {
        title: "Step 3: If details changed — request an update, not a new survey",
        paragraphs: [
          "Marriage, a new child, a change of address, or a household member's death are common reasons to request an NSER update rather than a full new survey. Bring the relevant certificate (marriage, birth, or death) along with CNICs to the tehsil office and ask specifically for a household-update request, since this is a distinct process from first-time registration.",
        ],
      },
      {
        title: "What registration does not require",
        paragraphs: [
          "No stage of BISP registration should ask you to pay a fee, download a third-party app, or hand over your original CNIC to someone outside an official desk. If a form, page, or agent asks for payment to 'confirm' or 'speed up' your registration, stop and report it through the official BISP channel.",
        ],
      },
    ],
    faqs: [
      { question: "Can I register for BISP entirely online without visiting an office?", answer: "No. The 8171 portal only checks an existing status; a new NSER survey or household update currently requires an in-person visit by an authorized enumerator or a tehsil office request." },
      { question: "How long does registration take to reflect in a status check?", answer: "Processing time varies by registration drive and case load. BISP does not publish a fixed number of days, so check the 8171 portal periodically rather than assuming a specific timeline." },
      { question: "Does registering guarantee a payment?", answer: "No. Registration records your household's PMT score. Eligibility and payment decisions are made separately by BISP based on that score and programme criteria." },
    ],
    officialLinks: [
      { label: "Open the official 8171 portal", href: "https://8171.bisp.gov.pk/" },
      { label: "BISP official website", href: "https://www.bisp.gov.pk/" },
    ],
  },
  {
    slug: "nser-pmt-score-check-guide",
    title: "NSER Survey & PMT Score Explained: How Your Eligibility Is Calculated",
    excerpt: "What the National Socio-Economic Registry survey records, how the PMT score is calculated, and what to do if it looks wrong.",
    primaryCategory: "NSER & PMT Score",
    categorySlugs: ["nser-pmt-score", "8171", "bisp-registration"],
    date: "August 9, 2026",
    readTime: "7 min read",
    image: "/images/hero-support.jpg",
    imageAlt: "An enumerator noting household details during an NSER survey visit",
    author: contributors.saadHassan,
    reviewer: contributors.ayeshaMalik,
    sections: [
      {
        title: "What the NSER survey actually measures",
        paragraphs: [
          "The National Socio-Economic Registry (NSER) is the household database BISP uses to decide who qualifies for its programmes, including Kafaalat payments. An authorized enumerator records details about household composition, housing conditions, assets (like land, livestock, or vehicles), income sources, and dependents. None of this is guesswork on your side — accuracy matters because it directly feeds the score calculation.",
        ],
      },
      {
        title: "How the PMT score works",
        paragraphs: [
          "PMT stands for Proxy Means Test. Instead of asking households to self-report income (which is hard to verify), the PMT formula estimates household welfare using the recorded indicators — housing quality, asset ownership, education, employment type, and household size among them. The result is a single score. Households below the poverty cut-off score set by BISP are classified as eligible for Kafaalat and related support.",
        ],
        bullets: [
          "The score is calculated centrally after the survey, not by the enumerator on the spot.",
          "Cut-off thresholds are set and periodically reviewed by BISP, not by this website.",
          "Two households with similar income can have different scores if their recorded assets or housing differ.",
        ],
      },
      {
        title: "Checking whether you have a survey record",
        paragraphs: [
          "The 8171 portal is the fastest way to see whether your household has an NSER record and what its current status is. If the portal indicates no record, or that a re-survey is needed, that instruction — not a forwarded message — is what to act on.",
        ],
      },
      {
        title: "If you believe your score is wrong",
        paragraphs: [
          "Households sometimes believe their circumstances have changed since their last survey, or that details were recorded incorrectly. The correct route is a re-survey or update request at your BISP tehsil office, explaining specifically what changed (income loss, an asset sold, a household split, and so on) rather than disputing the number itself, since the score is a calculated output of the recorded data.",
        ],
      },
    ],
    faqs: [
      { question: "Is the PMT score the same as an income test?", answer: "No. It is a statistical estimate based on multiple household indicators, not a direct report of monthly income." },
      { question: "Who conducts the NSER survey?", answer: "Authorized BISP enumerators or registration-drive staff conduct the survey. It should never be conducted by someone charging a fee or asking for banking details." },
      { question: "Can my PMT score change over time?", answer: "Yes, if your household is re-surveyed or you submit an update request reflecting a change in circumstances." },
    ],
    officialLinks: [
      { label: "Open the official 8171 portal", href: "https://8171.bisp.gov.pk/" },
      { label: "BISP official website", href: "https://www.bisp.gov.pk/" },
    ],
  },
  {
    slug: "benazir-kafaalat-registration-cnic-check-guide",
    title: "Benazir Kafaalat Registration & CNIC Check: A Complete Walkthrough",
    excerpt: "How Kafaalat differs from general BISP registration, how the CNIC check works, and what a positive result means next.",
    primaryCategory: "Benazir Kafaalat",
    categorySlugs: ["benazir-kafaalat", "8171", "bisp-registration"],
    date: "August 7, 2026",
    readTime: "7 min read",
    image: "/images/hero-support.jpg",
    imageAlt: "A woman reviewing her Benazir Kafaalat registration status on her phone",
    author: contributors.saadHassan,
    reviewer: contributors.ayeshaMalik,
    sections: [
      {
        title: "Kafaalat is a specific tier within BISP, not a separate programme",
        paragraphs: [
          "Benazir Kafaalat is the unconditional cash-transfer component of BISP, paid quarterly to eligible women whose households fall below the PMT cut-off score. It is not something you 'register for' independently — your household's NSER survey and score determine whether you fall into the Kafaalat tier.",
        ],
      },
      {
        title: "How the CNIC check works",
        paragraphs: [
          "The CNIC belonging to the female head of household (the person the payment is registered to) is entered on the official 8171 portal. The response confirms whether that CNIC is linked to an active Kafaalat case, shows a pending verification step, or indicates no active record.",
        ],
        bullets: [
          "Use the CNIC of the registered female beneficiary, not a male household member, when checking Kafaalat status specifically.",
          "A 'no record found' result usually means an NSER survey or update is needed first — see our NSER and PMT score guide.",
          "A pending-verification result means a biometric or documentation step is required before payments start.",
        ],
      },
      {
        title: "Common reasons a Kafaalat case is paused",
        paragraphs: [
          "Payments can pause for reasons that are administrative rather than a loss of eligibility: an expired CNIC, a biometric mismatch at the payment point, or an unconfirmed household change. Each of these has a specific fix through the tehsil office rather than a new application.",
        ],
        bullets: [
          "Expired CNIC — renew with NADRA, then ask the tehsil office to re-verify.",
          "Biometric mismatch — request a re-verification appointment; do not pay anyone offering to 'fix' this remotely.",
          "Household change (marriage, death, relocation) — submit an update request with supporting documents.",
        ],
      },
      {
        title: "After a positive result",
        paragraphs: [
          "Once a case shows active, check the current payment cycle and location instructions through the official channel before traveling — do not rely on an old screenshot or a forwarded date, since disbursement schedules are announced per cycle.",
        ],
      },
    ],
    faqs: [
      { question: "Can a man register for Benazir Kafaalat?", answer: "Kafaalat payments are made to the female head of household by design. A household's eligibility is still based on its NSER survey record." },
      { question: "Why does my CNIC show no Kafaalat record even though my household is poor?", answer: "Eligibility depends on the calculated PMT score from an NSER survey, not solely on self-assessed income. If no survey has been completed, no score exists yet." },
      { question: "Is there a separate Kafaalat application form?", answer: "No separate form exists outside the NSER survey and BISP's official verification process." },
    ],
    officialLinks: [
      { label: "Open the official 8171 portal", href: "https://8171.bisp.gov.pk/" },
      { label: "BISP official website", href: "https://www.bisp.gov.pk/" },
    ],
  },
  {
    slug: "bisp-8171-payment-balance-check-guide",
    title: "BISP 8171 Payment & Balance Check: How to Confirm Your Amount Safely",
    excerpt: "The official way to confirm a payment amount and cycle, and the deduction red flags to watch for.",
    primaryCategory: "Payment Check",
    categorySlugs: ["payment-check", "8171", "benazir-kafaalat"],
    date: "August 5, 2026",
    readTime: "6 min read",
    image: "/images/registration-guide.jpg",
    imageAlt: "A woman checking her BISP payment balance on the official portal",
    author: contributors.saadHassan,
    reviewer: contributors.ayeshaMalik,
    sections: [
      {
        title: "Where balance information actually comes from",
        paragraphs: [
          "The official 8171 portal and BISP-authorized payment points (bank branches, franchise agents, or ATMs listed by BISP) are the only sources for a real balance or payment-cycle figure. A figure shared in a WhatsApp forward, a YouTube video, or an unofficial Facebook page is not evidence of what you are owed, even if it looks specific.",
        ],
      },
      {
        title: "Before you travel to collect a payment",
        paragraphs: [
          "Check your status on the 8171 portal to confirm the current cycle is active for your case. If the portal shows a different status — such as pending verification — traveling to a payment point will not resolve it; the underlying issue needs to be fixed first.",
        ],
      },
      {
        title: "At the payment point",
        paragraphs: [
          "Complete your own biometric verification and count the amount before leaving the counter or agent. A correct disbursement should match the amount BISP has publicly announced for the current cycle for your category.",
        ],
        bullets: [
          "Ask for a printed receipt or SMS confirmation where the payment channel provides one.",
          "Do not accept a partial amount with a promise that 'the rest comes later' unless the payment point itself confirms this in writing.",
          "Report any request for a cut, commission, or 'processing fee' immediately — legitimate disbursement has no such charge.",
        ],
      },
      {
        title: "If the amount looks wrong",
        paragraphs: [
          "Note the date, location, and amount received, then raise it through the official BISP complaint channel or your tehsil office rather than a social-media post. Keep any receipt as your reference number for the follow-up.",
        ],
      },
    ],
    officialLinks: [
      { label: "Open the official 8171 portal", href: "https://8171.bisp.gov.pk/" },
      { label: "BISP official website", href: "https://www.bisp.gov.pk/" },
    ],
  },
  {
    slug: "ehsaas-emergency-cash-program-guide",
    title: "Ehsaas Emergency Cash Programme: Who Qualifies and How Disbursement Works",
    excerpt: "How emergency cash disbursements differ from routine Kafaalat payments, and how eligibility is announced.",
    primaryCategory: "Ehsaas Programmes",
    categorySlugs: ["ehsaas-programs", "payment-check", "news"],
    date: "August 3, 2026",
    readTime: "6 min read",
    image: "/images/farmer-support.jpg",
    imageAlt: "A family checking an emergency cash disbursement notice on a phone",
    author: contributors.saadHassan,
    reviewer: contributors.ayeshaMalik,
    sections: [
      {
        title: "Emergency cash is a distinct, time-bound disbursement",
        paragraphs: [
          "Unlike the quarterly Kafaalat cycle, Ehsaas emergency cash disbursements are announced for a specific situation — such as a national relief response — with their own eligibility window and disbursement period. Emergency rounds are not always open; whether one is currently active is itself something to confirm through an official source before assuming you qualify.",
        ],
      },
      {
        title: "How eligibility is typically determined",
        paragraphs: [
          "Past emergency cash rounds have generally drawn on existing NSER data (the same household database used for Kafaalat) rather than a fresh open application, sometimes combined with additional criteria announced for that specific round. This means a household's existing survey record often determines inclusion, which is one more reason to keep NSER details current.",
        ],
      },
      {
        title: "How to check if a round is active",
        paragraphs: [
          "Check the 8171 portal and official BISP announcements for any currently open emergency disbursement. Be cautious of messages naming a specific fixed amount and urgent deadline that direct you to an unfamiliar link — this is a common impersonation pattern during real relief periods.",
        ],
        bullets: [
          "Confirm any emergency round through BISP's official website or the 8171 portal, not a shared link.",
          "A genuine round does not require a processing fee, app download, or advance payment.",
          "Disbursement channels (bank, franchise, or mobile wallet) are named specifically by BISP for that round.",
        ],
      },
      {
        title: "If you were previously included but the round has closed",
        paragraphs: [
          "Emergency rounds have defined windows and do not stay open indefinitely. If a round has closed, watch official channels for the next announcement rather than pursuing a late claim through an unofficial contact.",
        ],
      },
    ],
    officialLinks: [
      { label: "Open the official 8171 portal", href: "https://8171.bisp.gov.pk/" },
      { label: "BISP official website", href: "https://www.bisp.gov.pk/" },
    ],
  },
  {
    slug: "ehsaas-registration-center-locator-guide",
    title: "Ehsaas Registration Centers: How to Find and Prepare for Your Visit",
    excerpt: "What a registration center actually handles, how to find an authorized one, and what to bring.",
    primaryCategory: "Ehsaas Programmes",
    categorySlugs: ["ehsaas-programs", "bisp-registration", "news"],
    date: "August 1, 2026",
    readTime: "5 min read",
    image: "/images/scholarship-guide.jpg",
    imageAlt: "A person looking up the nearest official registration center address online",
    author: contributors.saadHassan,
    reviewer: contributors.ayeshaMalik,
    sections: [
      {
        title: "What a registration center handles",
        paragraphs: [
          "A registration or tehsil office is where NSER survey requests, household updates, biometric re-verification, and complaint follow-ups are handled in person. It is not a place that can override an online status check or guarantee an outcome — it processes the same records the 8171 portal reads from.",
        ],
      },
      {
        title: "Finding the right one",
        paragraphs: [
          "Registration centers are organized by tehsil, so the correct office is the one covering your area of residence, not necessarily the nearest one geographically if it sits across a tehsil boundary. Confirm the current address and hours through the official BISP website before traveling, since office locations and days can change.",
        ],
      },
      {
        title: "What to bring",
        paragraphs: ["Bring originals, not just photos, and any prior reference numbers relevant to your visit."],
        bullets: [
          "Valid CNICs for the relevant household members.",
          "B-Forms for children where required.",
          "Any prior token, receipt, or SMS reference from an earlier visit or application.",
          "Supporting documents for the specific reason for your visit (marriage certificate, death certificate, and so on).",
        ],
      },
      {
        title: "Red flags at or around a center",
        paragraphs: [
          "Official staff do not charge a fee to accept a survey or update request. Anyone outside the desk offering to 'speed up' your case for payment, or asking to hold your original CNIC, is not part of the official process — report this to the office supervisor or through BISP's complaint channel.",
        ],
      },
    ],
    officialLinks: [{ label: "BISP official website", href: "https://www.bisp.gov.pk/" }],
  },
  {
    slug: "ehsaas-interest-free-loan-saving-wallets-guide",
    title: "Ehsaas Interest-Free Loans & Saving Wallets: What's on Offer",
    excerpt: "How the interest-free loan and saving-wallet components work, and what to verify before signing anything.",
    primaryCategory: "Ehsaas Programmes",
    categorySlugs: ["ehsaas-programs", "other-schemes", "news"],
    date: "July 30, 2026",
    readTime: "6 min read",
    image: "/images/e-bike-guide.jpg",
    imageAlt: "A small business owner reviewing loan terms on a smartphone",
    author: contributors.saadHassan,
    reviewer: contributors.ayeshaMalik,
    sections: [
      {
        title: "Two different components, often confused",
        paragraphs: [
          "Interest-free loans (aimed at small income-generating activity) and saving wallets (a savings mechanism tied to an Ehsaas beneficiary account, sometimes with a matched-contribution incentive) are separate components. Being eligible for one does not automatically mean you qualify for the other — check the specific criteria for each rather than assuming.",
        ],
      },
      {
        title: "How the interest-free loan component works",
        paragraphs: [
          "These loans are disbursed through partner microfinance banks under terms set by the programme, typically aimed at existing beneficiary households wanting to start or grow a small income-generating activity. The application and credit assessment happens through the partner bank, not through a third-party 'agent'.",
        ],
        bullets: [
          "Confirm the current partner bank list through BISP's official website before visiting any branch.",
          "A genuine loan officer will explain repayment terms clearly — walk away from anyone promising 'guaranteed approval' for an upfront fee.",
          "Loan size and terms can change between rounds, so treat any number from social media as unconfirmed until you see it at the partner bank.",
        ],
      },
      {
        title: "How saving wallets work",
        paragraphs: [
          "A saving wallet is generally a mobile or branchless-banking account linked to a beneficiary's payment record, sometimes with an incentive for maintaining a balance. Setup should happen through an authorized bank or franchise using your existing BISP-linked CNIC, never through a link sent by an unknown sender asking you to 'activate' a wallet.",
        ],
      },
      {
        title: "Before you commit to either",
        paragraphs: [
          "Read the full terms, ask what happens if a repayment is missed, and confirm the partner institution is named on BISP's official list. If any part of the offer arrives unsolicited by SMS or social media with pressure to act immediately, verify it independently before responding.",
        ],
      },
    ],
    officialLinks: [{ label: "BISP official website", href: "https://www.bisp.gov.pk/" }],
  },
  {
    slug: "ehsaas-rashan-program-guide",
    title: "Ehsaas Rashan Programme: Ration Support Explained",
    excerpt: "How ration-support disbursements are organized, who they typically target, and how to verify a round is genuine.",
    primaryCategory: "Ehsaas Programmes",
    categorySlugs: ["ehsaas-programs", "other-schemes", "news"],
    date: "July 28, 2026",
    readTime: "5 min read",
    image: "/images/farmer-support.jpg",
    imageAlt: "A family collecting a verified ration package at an official distribution point",
    author: contributors.saadHassan,
    reviewer: contributors.ayeshaMalik,
    sections: [
      {
        title: "What the rashan programme typically covers",
        paragraphs: [
          "Ration-support rounds provide subsidized or free essential food items to eligible households, usually during a specific relief period rather than as a year-round standing benefit. Like emergency cash, whether a round is currently active is something to confirm rather than assume based on a past cycle.",
        ],
      },
      {
        title: "Eligibility usually follows existing BISP data",
        paragraphs: [
          "Past rashan rounds have generally used existing NSER-based eligibility data to identify recipient households, sometimes narrowed further by district or category for that specific round. This is another reason accurate, up-to-date NSER records matter beyond the Kafaalat cash transfer itself.",
        ],
      },
      {
        title: "How distribution is organized",
        paragraphs: [
          "Distribution typically happens through named official points — a designated store, utility store, or distribution center — announced for that round, sometimes verified through a token or SMS. A stranger offering home delivery of a ration package in exchange for a CNIC photo or advance payment is not a verified channel.",
        ],
        bullets: [
          "Confirm a round is active and see your assigned distribution point through the official BISP channel.",
          "Bring your original CNIC and any token or SMS reference to the distribution point.",
          "Report any request for payment in exchange for a ration package — official distribution does not charge recipients.",
        ],
      },
    ],
    officialLinks: [{ label: "BISP official website", href: "https://www.bisp.gov.pk/" }],
  },
  {
    slug: "punjab-rozgar-scheme-guide",
    title: "Punjab Rozgar Scheme: Interest-Free Business Loans Explained",
    excerpt: "How the Punjab Small Industries Corporation's interest-free loan scheme works and who it targets.",
    primaryCategory: "Other Schemes",
    categorySlugs: ["other-schemes", "news"],
    date: "July 27, 2026",
    readTime: "6 min read",
    image: "/images/e-bike-guide.jpg",
    imageAlt: "A young entrepreneur reviewing Punjab Rozgar Scheme loan details on a laptop",
    author: contributors.saadHassan,
    reviewer: contributors.ayeshaMalik,
    sections: [
      {
        title: "A provincial scheme, not a BISP programme",
        paragraphs: [
          "The Punjab Rozgar Scheme is run by the Punjab Small Industries Corporation (PSIC), a provincial body — it is entirely separate from BISP, 8171, or Ehsaas. It is worth knowing this distinction because it means checking your BISP status will tell you nothing about a Rozgar application, and vice versa.",
        ],
      },
      {
        title: "What the scheme offers",
        paragraphs: [
          "The scheme provides interest-free loans intended for small business setup or expansion within Punjab, generally aimed at residents who meet the province's eligibility criteria (age, residency, and business-plan requirements). Exact loan tiers and criteria are set by PSIC and can be revised between application rounds, so treat any specific figure you see online as provisional until confirmed on the official portal.",
        ],
      },
      {
        title: "How to apply",
        paragraphs: [
          "Applications are submitted through PSIC's official Rozgar portal, where you will typically need to describe your proposed business, provide identity documents, and meet Punjab residency requirements. Read the current round's opening and closing dates carefully, since the scheme accepts applications in windows rather than continuously.",
        ],
        bullets: [
          "Confirm your eligibility criteria and required documents on the official PSIC Rozgar portal before starting.",
          "Prepare a realistic business description with an estimate of setup cost and expected repayment capacity.",
          "Keep a copy of your submission reference number.",
        ],
      },
      {
        title: "Avoiding a fake 'Rozgar agent'",
        paragraphs: [
          "As with any interest-free loan scheme, expect impersonation attempts promising guaranteed approval for a fee. PSIC does not charge an application fee to be considered, and a genuine officer will never ask you to pay to 'unlock' loan approval.",
        ],
      },
    ],
    officialLinks: [
      { label: "Official Punjab Rozgar Scheme portal", href: "https://www.rozgar.psic.punjab.gov.pk/" },
      { label: "Government of Pakistan portal", href: "https://www.pakistan.gov.pk/" },
    ],
  },
  {
    slug: "check-bisp-eligibility-8171",
    title: "How to Check BISP Eligibility Through the Official 8171 Portal",
    excerpt: "A privacy-first walkthrough of the official status check, common responses, and what to do next.",
    primaryCategory: "8171",
    categorySlugs: ["8171", "bisp-registration", "news"],
    date: "July 25, 2026",
    readTime: "6 min read",
    image: "/images/registration-guide.jpg",
    imageAlt: "Pakistani woman reviewing a registration checklist on her phone",
    author: contributors.saadHassan,
    reviewer: contributors.ayeshaMalik,
    sections: [
      {
        title: "Start only from the official portal",
        paragraphs: [
          "Open the official 8171 BISP portal from a trusted device. Check the address carefully before entering any information. Welfare Desk Pakistan does not provide an eligibility database and never asks you to submit a CNIC here.",
          "If the portal is temporarily unavailable, wait and try again later or contact the nearest BISP tehsil office. Avoid unofficial forms that promise instant approval, and be wary of copycat sites with similar-looking addresses — bookmark the official portal once you've confirmed it.",
        ],
      },
      {
        title: "What the 8171 code actually is",
        paragraphs: [
          "8171 is the short code BISP uses for its SMS and web-based status service — it is not a separate programme or a payment amount. Sending your CNIC to 8171 by SMS, or entering it on the 8171 web portal, returns the same underlying status: whether your household has an NSER record, whether it falls under an active programme tier, and what step (if any) comes next.",
        ],
      },
      {
        title: "Understand the response",
        paragraphs: [
          "A response may confirm eligibility, show that a survey or verification step is required, or indicate that no record is currently available. Treat the message as guidance for the next official step—not as a request to pay an agent.",
        ],
        bullets: [
          "Keep your original identity documents with you for an official office visit.",
          "Only trust programme messages sent from the official 8171 sender.",
          "Never share an OTP, password, or bank PIN with anyone offering assistance.",
        ],
      },
      {
        title: "If your record needs attention",
        paragraphs: [
          "Visit the nearest BISP tehsil office or registration desk and ask which verification or survey step applies to your household. Take a note of the office guidance and keep any receipt or token you receive. If the response mentioned a specific programme tier such as Kafaalat, see our dedicated Kafaalat registration guide for what happens next.",
        ],
      },
    ],
    faqs: [
      { question: "Does checking 8171 cost anything?", answer: "The official web portal is free to use. Standard SMS charges from your network may apply if you use the SMS route instead." },
      { question: "Why does the portal show 'no record found' for my CNIC?", answer: "This usually means no NSER survey has been completed for your household yet, not that you are ineligible. See our BISP registration guide for the next step." },
    ],
    officialLinks: [
      { label: "Open the official 8171 portal", href: "https://8171.bisp.gov.pk/" },
      { label: "Visit the official BISP website", href: "https://www.bisp.gov.pk/" },
    ],
  },
  {
    slug: "benazir-kafaalat-payment-guide",
    title: "Benazir Kafaalat Payment Guide: Verify, Collect, and Stay Safe",
    excerpt: "What beneficiaries should check before collecting a payment, plus safe complaint steps.",
    primaryCategory: "Benazir Kafaalat",
    categorySlugs: ["benazir-kafaalat", "payment-check", "news"],
    date: "July 23, 2026",
    readTime: "6 min read",
    image: "/images/hero-support.jpg",
    imageAlt: "A mother and daughter receiving guidance at a public service desk",
    author: contributors.saadHassan,
    reviewer: contributors.ayeshaMalik,
    sections: [
      {
        title: "Verify before you travel",
        paragraphs: [
          "Check your status through the official 8171 channel before visiting a payment point. Payment cycles and collection arrangements can change, so confirm current instructions from BISP rather than relying on a forwarded social-media post. If your last check showed a pending verification step, resolve that first — traveling to a payment point will not release a paused case.",
        ],
      },
      {
        title: "Choosing the right collection channel",
        paragraphs: [
          "Kafaalat payments are typically collected through a bank branch, an authorized franchise agent, or a designated ATM, depending on how your case is registered. Use the exact channel and location named in your official status message — a different agent nearby, even if they claim to represent BISP, is not automatically authorized.",
        ],
      },
      {
        title: "At the payment point",
        paragraphs: [
          "Use the location or payment channel named in official guidance. Complete biometric verification yourself and count the full amount before leaving.",
        ],
        bullets: [
          "Bring your original valid CNIC; do not hand it to an unauthorized agent.",
          "Ask for a receipt or payment confirmation where available.",
          "Do not accept an unexplained deduction or pay a release fee.",
        ],
      },
      {
        title: "Report a problem",
        paragraphs: [
          "For a biometric issue, missing payment, or unauthorized deduction, record the location and time and use the official BISP complaint route or your nearest tehsil office. Do not publish identity details on social media. See our payment and balance check guide for how to confirm the correct amount before you raise a complaint.",
        ],
      },
    ],
    officialLinks: [
      { label: "BISP official website", href: "https://www.bisp.gov.pk/" },
      { label: "Official 8171 status portal", href: "https://8171.bisp.gov.pk/" },
    ],
  },
  {
    slug: "taleemi-wazaif-registration-guide",
    title: "Taleemi Wazaif Registration: A Family Preparation Checklist",
    excerpt: "A simple guide to enrollment, school records, attendance, and official verification.",
    primaryCategory: "Taleemi Wazaif",
    categorySlugs: ["taleemi-wazaif", "bisp-registration", "news"],
    date: "July 21, 2026",
    readTime: "6 min read",
    image: "/images/scholarship-guide.jpg",
    imageAlt: "Pakistani students reviewing education guidance on a laptop",
    author: contributors.saadHassan,
    reviewer: contributors.ayeshaMalik,
    sections: [
      {
        title: "Who should read this guide",
        paragraphs: [
          "Families already connected with an eligible BISP household can use this checklist to prepare for an official education-support enrollment visit. Final eligibility is determined by BISP, not by this website.",
        ],
      },
      {
        title: "How Taleemi Wazaif relates to your household's BISP status",
        paragraphs: [
          "Taleemi Wazaif (education stipend) enrollment is generally offered to school-age children within an already-eligible BISP household, tied to the household's existing NSER record rather than a separate application. If your household has not yet been surveyed, start with BISP registration first — see our step-by-step registration guide — since Taleemi Wazaif enrollment builds on that record.",
        ],
      },
      {
        title: "Prepare the record set",
        paragraphs: ["Requirements can change, so confirm them with BISP before traveling. Families are commonly asked to prepare identity and school-enrollment records."],
        bullets: [
          "The beneficiary's original CNIC and active mobile number.",
          "The child's B-Form or other required identity record.",
          "School details and any enrollment slip requested by the programme.",
        ],
      },
      {
        title: "Attendance conditions",
        paragraphs: [
          "Education stipends are typically conditional on maintaining a minimum school-attendance rate, verified periodically. Ask the enrollment desk what attendance percentage applies and how it is checked, so an unexpected suspension doesn't come as a surprise.",
        ],
      },
      {
        title: "Keep school information current",
        paragraphs: [
          "If a child changes school, class, or enrollment status, ask the responsible office how to update the record. Attendance conditions may apply, so keep school details accurate and follow official notices.",
        ],
      },
    ],
    officialLinks: [{ label: "Verify with BISP", href: "https://www.bisp.gov.pk/" }],
  },
  {
    slug: "pm-youth-business-loan-guide",
    title: "PM Youth Business & Agriculture Loan: Before You Apply",
    excerpt: "Review the official eligibility rules, application route, and documents before starting.",
    primaryCategory: "Other Schemes",
    categorySlugs: ["other-schemes", "news"],
    date: "July 19, 2026",
    readTime: "7 min read",
    image: "/images/farmer-support.jpg",
    imageAlt: "Pakistani farmer checking programme guidance on a smartphone",
    author: contributors.saadHassan,
    reviewer: contributors.ayeshaMalik,
    sections: [
      {
        title: "Use the programme's own application system",
        paragraphs: [
          "The Prime Minister's Youth Business & Agriculture Loan Scheme accepts applications through its official online process. Review the latest tier, age, residency, and business requirements there before preparing an application.",
        ],
      },
      {
        title: "Prepare a credible business case",
        paragraphs: ["A clear plan helps a participating bank understand what you intend to finance and how the business can repay."],
        bullets: [
          "Describe the product, service, or agricultural activity in plain language.",
          "Estimate setup costs, monthly expenses, sales, and repayment capacity.",
          "Keep supporting quotations, licenses, or qualifications where relevant.",
        ],
      },
      {
        title: "How the participating-bank review works",
        paragraphs: [
          "After you submit an application, a participating bank reviews your business case and creditworthiness rather than the programme itself approving loans directly. Response times vary by bank and application volume, so follow up through the same bank branch rather than assuming a delay means rejection.",
        ],
      },
      {
        title: "Watch for impersonation",
        paragraphs: [
          "Do not pay an intermediary who promises approval. Banks and the programme assess applications. Confirm every request through the official portal or a participating bank.",
        ],
      },
    ],
    officialLinks: [
      { label: "Official PM Youth loan portal", href: "https://pmybals.pmyp.gov.pk/" },
      { label: "Government of Pakistan portal", href: "https://www.pakistan.gov.pk/" },
    ],
  },
  {
    slug: "electric-bike-scheme-guide",
    title: "Electric Bike Schemes: How to Check a Genuine Application Notice",
    excerpt: "A safe method for comparing eligibility, financing, and application details.",
    primaryCategory: "News",
    categorySlugs: ["other-schemes", "news"],
    date: "July 17, 2026",
    readTime: "5 min read",
    image: "/images/e-bike-guide.jpg",
    imageAlt: "Pakistani student beside an electric scooter checking her phone",
    author: contributors.saadHassan,
    reviewer: contributors.ayeshaMalik,
    sections: [
      {
        title: "Identify the responsible department",
        paragraphs: [
          "Electric-bike initiatives may be federal, provincial, student-focused, or linked to a financing partner. A genuine announcement should name the responsible department, application dates, eligibility criteria, and an official website.",
        ],
      },
      {
        title: "Check the full cost",
        paragraphs: ["Before applying, understand whether the offer is a subsidy, lottery, installment plan, or standard loan."],
        bullets: [
          "Compare the deposit, monthly installment, tenure, and any bank charges.",
          "Confirm whether insurance, registration, and delivery are included.",
          "Read the cancellation and late-payment terms.",
        ],
      },
      {
        title: "Comparing multiple provincial schemes",
        paragraphs: [
          "More than one province has run its own electric-bike or scooter initiative at different times, each with separate eligibility and financing terms. Do not assume a scheme you saw advertised in one province applies to you elsewhere — confirm the responsible provincial department for your own location.",
        ],
      },
      {
        title: "Protect your application",
        paragraphs: [
          "Apply only through the named department or partner bank. Do not send a fee to a personal wallet or share an OTP with a caller claiming to reserve your bike.",
        ],
      },
    ],
    officialLinks: [{ label: "Government services portal", href: "https://www.pakistan.gov.pk/" }],
  },
  {
    slug: "farmer-support-card-guide",
    title: "Farmer Support Cards: Five Checks Before Registration",
    excerpt: "Confirm the province, land record, benefit type, bank partner, and official deadline.",
    primaryCategory: "Other Schemes",
    categorySlugs: ["other-schemes", "news"],
    date: "July 15, 2026",
    readTime: "6 min read",
    image: "/images/farmer-support.jpg",
    imageAlt: "A farmer using a phone in a green crop field",
    author: contributors.saadHassan,
    reviewer: contributors.ayeshaMalik,
    sections: [
      {
        title: "Do not assume every card is nationwide",
        paragraphs: [
          "Many agriculture-support cards are run by a provincial department. Confirm the province and responsible agency before using any registration form shared in a message or video.",
        ],
      },
      {
        title: "Five details to verify",
        paragraphs: ["A complete announcement should make these points easy to find."],
        bullets: [
          "Who can apply and which districts are included.",
          "Which land, tenancy, or farmer record is checked.",
          "Whether the benefit is credit, subsidy, inputs, or insurance.",
          "Which bank or agriculture office is involved.",
          "The opening and closing dates on an official domain.",
        ],
      },
      {
        title: "Land and tenancy records matter more than income",
        paragraphs: [
          "Most farmer-support cards verify land ownership or documented tenancy rather than a self-reported income figure. If your land record is outdated or still in a deceased relative's name, resolve that with the relevant revenue office first — it is usually the actual blocker, not eligibility itself.",
        ],
      },
      {
        title: "Keep proof of submission",
        paragraphs: [
          "Save the official application number, receipt, or confirmation message. Never post identity documents publicly when asking about an application.",
        ],
      },
    ],
    officialLinks: [{ label: "Pakistan government portal", href: "https://www.pakistan.gov.pk/" }],
  },
  {
    slug: "avoid-bisp-fraud",
    title: "BISP Scam Alert: Seven Red Flags to Recognize",
    excerpt: "Protect your identity and payment by recognizing fake messages, fees, and portals.",
    primaryCategory: "News",
    categorySlugs: ["8171", "payment-check", "news"],
    date: "July 13, 2026",
    readTime: "5 min read",
    image: "/images/registration-guide.jpg",
    imageAlt: "Woman safely checking information on her phone",
    author: contributors.saadHassan,
    reviewer: contributors.ayeshaMalik,
    sections: [
      {
        title: "Common warning signs",
        paragraphs: ["Pause when a message creates urgency or asks you to bypass the official process."],
        bullets: [
          "A sender other than the official 8171 service claims you have been selected.",
          "Someone asks for a fee to release, increase, or restore a payment.",
          "A link uses a misspelled or unrelated website address.",
          "A caller asks for your OTP, bank PIN, password, or full card details.",
          "An agent asks to keep your original CNIC.",
          "A social account guarantees approval or a fixed payment date.",
          "A form asks you to upload identity documents to an unknown drive or chat.",
        ],
      },
      {
        title: "Why these scams work",
        paragraphs: [
          "Fraudulent messages often copy real BISP terminology — CNIC checks, 8171, Kafaalat, tehsil office — which makes them look credible at a glance. The giveaway is usually the channel: a personal WhatsApp number, an unofficial-looking link, or a request that a genuine government process would never make, like payment in exchange for approval.",
        ],
      },
      {
        title: "What to do instead",
        paragraphs: [
          "Close the suspicious page, keep a screenshot without exposing private information, and verify through BISP's official website, 8171 portal, or a tehsil office. If financial details were shared, contact the relevant bank immediately.",
        ],
      },
    ],
    officialLinks: [
      { label: "Official 8171 portal", href: "https://8171.bisp.gov.pk/" },
      { label: "Official BISP website", href: "https://www.bisp.gov.pk/" },
    ],
  },
  {
    slug: "documents-for-bisp-registration",
    title: "Documents to Prepare for a BISP Registration-Desk Visit",
    excerpt: "A practical preparation list for a smoother official office visit.",
    primaryCategory: "BISP Registration",
    categorySlugs: ["bisp-registration", "8171"],
    date: "July 10, 2026",
    readTime: "6 min read",
    image: "/images/hero-support.jpg",
    imageAlt: "A family receiving guidance from a service officer",
    author: contributors.saadHassan,
    reviewer: contributors.ayeshaMalik,
    sections: [
      {
        title: "Confirm why you are visiting",
        paragraphs: [
          "The records needed for a new survey, household update, appeal, or biometric problem may differ. Check the official message or ask the tehsil office what applies to your case.",
        ],
      },
      {
        title: "Build a simple document folder",
        paragraphs: ["Bring originals and any copies specifically requested by the official office."],
        bullets: [
          "Valid CNICs for relevant adult household members.",
          "B-Forms or required identity records for children.",
          "An active mobile number registered as required by the programme.",
          "Any official message, token, receipt, or previous survey reference.",
          "Supporting records requested for a household change or special circumstance.",
        ],
      },
      {
        title: "What to expect during the visit",
        paragraphs: [
          "A typical visit involves confirming your identity, reviewing or recording household details, and receiving a token or written reference for your case. Ask the desk officer to explain your next step in plain terms before you leave, rather than assuming the visit alone completes the process.",
        ],
      },
      {
        title: "Keep your originals in sight",
        paragraphs: [
          "Hand documents only to staff at an official desk and collect every original before leaving. Registration and survey guidance should not require payment to an outside agent.",
        ],
      },
    ],
    officialLinks: [{ label: "Find official BISP information", href: "https://www.bisp.gov.pk/" }],
  },
];

export const informationPages: InformationPage[] = [
  {
    slug: "about-us",
    title: "About Welfare Desk Pakistan",
    eyebrow: "Our purpose",
    intro: "We translate public-service announcements into clear, practical guides and send readers back to the official source for every important action.",
    sections: [
      {
        title: "Why we built this site",
        paragraphs: [
          "Important programme information is often scattered across portals, notices, and press releases. People can lose time—or trust the wrong person—when the next step is unclear. Welfare Desk Pakistan organizes that information around the questions people actually ask.",
          "Our pages are educational summaries. We do not decide eligibility, process applications, release payments, or represent any government department.",
        ],
      },
      {
        title: "How we work",
        paragraphs: [
          "We begin with a responsible government department or programme portal, compare the available instructions, and write a plain-language guide. We add publication dates, scam warnings, and direct official links so readers can verify details themselves.",
        ],
        bullets: [
          "Official source before summary.",
          "Clear distinction between confirmed facts and practical advice.",
          "No CNIC collection, payment processing, or approval promises.",
          "Corrections when an official process changes.",
        ],
      },
      {
        title: "Who writes and reviews our guides",
        paragraphs: [
          "Every guide is written by our public-programmes editorial team and checked by a second reviewer against the current official portal before publication. Author and reviewer names appear on each guide, and we note the last review date so you can judge how current the information is.",
        ],
      },
      {
        title: "Independent and transparent",
        paragraphs: [
          "Welfare Desk Pakistan is an independent information website. It is not affiliated with BISP, NADRA, the Government of Pakistan, or any provincial department. Government names are used only to identify the programmes being discussed.",
        ],
      },
    ],
  },
  {
    slug: "contact-us",
    title: "Contact the Editorial Desk",
    eyebrow: "Questions & corrections",
    intro: "Tell us about a broken official link, an unclear explanation, or a programme update that needs editorial review.",
    sections: [
      {
        title: "What we can help with",
        paragraphs: [
          "We welcome corrections, accessibility feedback, and suggestions for future guides. Please include the page title and a public official source where possible.",
        ],
      },
      {
        title: "What we cannot do",
        paragraphs: [
          "We cannot check individual eligibility, view a payment record, submit an application, or resolve a government case. Please use the official programme portal or office for those requests.",
        ],
        bullets: [
          "Do not email a CNIC image or number.",
          "Do not send bank details, passwords, PINs, or OTPs.",
          "Do not pay anyone claiming to be our registration agent.",
        ],
      },
      {
        title: "Email",
        paragraphs: ["This temporary public demo does not operate a live support inbox. A verified contact address should be published here only after the site owner activates and monitors it."],
      },
    ],
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    eyebrow: "Last updated July 2026",
    intro: "This policy explains the limited information an informational website may receive and the choices available to visitors.",
    sections: [
      {
        title: "Information you choose to send",
        paragraphs: [
          "You can read this website without creating an account. If you contact the editorial desk, we receive the email address and message you choose to provide. Please do not send identity numbers or financial information.",
        ],
      },
      {
        title: "Basic website data",
        paragraphs: [
          "Hosting and security providers may process standard technical records such as an IP address, browser type, requested page, and timestamp to deliver and protect the service. We do not sell personal information.",
        ],
      },
      {
        title: "External official links",
        paragraphs: [
          "Our guides link to government and programme websites. Their privacy practices apply after you leave Welfare Desk Pakistan. Check the destination address before entering personal information.",
        ],
      },
    ],
  },
  {
    slug: "terms-and-conditions",
    title: "Terms and Conditions",
    eyebrow: "Responsible use",
    intro: "By using this site, you agree to treat its content as general educational information and verify important decisions with the responsible official organization.",
    sections: [
      {
        title: "Informational purpose",
        paragraphs: [
          "Content is provided to explain public programmes in accessible language. It is not an official decision, legal advice, financial advice, or a guarantee of eligibility, payment, approval, or availability.",
        ],
      },
      {
        title: "Accuracy and changes",
        paragraphs: [
          "We aim to keep guides useful, but public programmes can change without notice. The latest official portal, notice, or department instruction controls if it differs from a summary on this site.",
        ],
      },
      {
        title: "Acceptable use",
        paragraphs: [
          "You may share links to our public guides. You may not impersonate this website, misrepresent our content as an official decision, scrape personal data, or use our name to charge people for registration assistance.",
        ],
      },
    ],
  },
  {
    slug: "disclaimer",
    title: "Independent Website Disclaimer",
    eyebrow: "Please read before acting",
    intro: "Welfare Desk Pakistan is not a government website and is not affiliated with BISP, NADRA, or any federal or provincial department.",
    sections: [
      {
        title: "No official authority",
        paragraphs: [
          "We cannot enroll a beneficiary, approve an application, change a household record, check a private payment record, or issue funds. Only the responsible programme and its authorized partners can do so.",
        ],
      },
      {
        title: "Verify before acting",
        paragraphs: [
          "Use the official links included in each guide and confirm deadlines, eligibility criteria, documents, amounts, and payment arrangements before you travel, apply, or make a financial decision.",
        ],
      },
      {
        title: "Never send private information",
        paragraphs: [
          "This website does not need your CNIC, bank account, password, PIN, biometric data, or OTP. If someone requests those details while claiming to represent Welfare Desk Pakistan, stop the conversation.",
        ],
      },
    ],
  },
];

export const allInternalSlugs = [
  ...categories.map((category) => category.slug),
  ...articles.map((article) => article.slug),
  ...informationPages.map((page) => page.slug),
];

export const getArticlesForCategory = (slug: string) =>
  articles.filter((article) => article.categorySlugs.includes(slug));
