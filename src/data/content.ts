export type ContentSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
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
  sections: ContentSection[];
  officialLinks: { label: string; href: string }[];
};

export type Category = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  intro: string;
  icon: "badge" | "wallet" | "users" | "landmark" | "graduation" | "newspaper";
};

export type InformationPage = {
  slug: string;
  title: string;
  eyebrow: string;
  intro: string;
  sections: ContentSection[];
};

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
];

export const articles: Article[] = [
  {
    slug: "check-bisp-eligibility-8171",
    title: "How to Check BISP Eligibility Through the Official 8171 Portal",
    excerpt: "A privacy-first walkthrough of the official status check, common responses, and what to do next.",
    primaryCategory: "8171",
    categorySlugs: ["8171", "bisp-registration", "news"],
    date: "July 25, 2026",
    readTime: "5 min read",
    image: "/images/registration-guide.jpg",
    imageAlt: "Pakistani woman reviewing a registration checklist on her phone",
    sections: [
      {
        title: "Start only from the official portal",
        paragraphs: [
          "Open the official 8171 BISP portal from a trusted device. Check the address carefully before entering any information. Welfare Desk Pakistan does not provide an eligibility database and never asks you to submit a CNIC here.",
          "If the portal is temporarily unavailable, wait and try again later or contact the nearest BISP tehsil office. Avoid unofficial forms that promise instant approval.",
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
          "Visit the nearest BISP tehsil office or registration desk and ask which verification or survey step applies to your household. Take a note of the office guidance and keep any receipt or token you receive.",
        ],
      },
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
    sections: [
      {
        title: "Verify before you travel",
        paragraphs: [
          "Check your status through the official 8171 channel before visiting a payment point. Payment cycles and collection arrangements can change, so confirm current instructions from BISP rather than relying on a forwarded social-media post.",
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
          "For a biometric issue, missing payment, or unauthorized deduction, record the location and time and use the official BISP complaint route or your nearest tehsil office. Do not publish identity details on social media.",
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
    readTime: "5 min read",
    image: "/images/scholarship-guide.jpg",
    imageAlt: "Pakistani students reviewing education guidance on a laptop",
    sections: [
      {
        title: "Who should read this guide",
        paragraphs: [
          "Families already connected with an eligible BISP household can use this checklist to prepare for an official education-support enrollment visit. Final eligibility is determined by BISP, not by this website.",
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
    readTime: "4 min read",
    image: "/images/e-bike-guide.jpg",
    imageAlt: "Pakistani student beside an electric scooter checking her phone",
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
    readTime: "5 min read",
    image: "/images/farmer-support.jpg",
    imageAlt: "A farmer using a phone in a green crop field",
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
    readTime: "4 min read",
    image: "/images/registration-guide.jpg",
    imageAlt: "Woman safely checking information on her phone",
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
    readTime: "5 min read",
    image: "/images/hero-support.jpg",
    imageAlt: "A family receiving guidance from a service officer",
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
