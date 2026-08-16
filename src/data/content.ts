export type ContentSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  subsections?: {
    title: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  table?: {
    caption?: string;
    headers: string[];
    rows: string[][];
  };
  links?: { label: string; href: string }[];
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
  showExcerpt?: boolean;
  metaTitle?: string;
  metaDescription?: string;
  primaryCategory: string;
  categorySlugs: string[];
  date: string;
  lastChecked?: string;
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
    bio: "Saad has covered BISP, Ehsaas, and provincial welfare schemes for Live Govt Schemes & Ehsaas Programs since 2024, cross-checking every guide against the current official portal before publication.",
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
    intro: "These guides explain safe payment verification, approved messages, biometric issues, receipts, and complaint routes. Live Govt Schemes & Ehsaas Programs never checks or stores CNIC numbers.",
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
    slug: "ehsaas-tracking-check-payment-status",
    title: "Ehsaas Tracking: Check Your Payment Status",
    excerpt: "For people searching for Ehsaas tracking, the 8171 system is the main digital route for checking information related to BISP assistance.",
    showExcerpt: false,
    metaTitle: "Ehsaas Tracking: Check Your Payment Status",
    metaDescription: "For people searching for Ehsaas tracking, the 8171 system is the main digital route for checking information related to BISP assistance.",
    primaryCategory: "Payment Check",
    categorySlugs: ["payment-check", "8171", "benazir-kafaalat", "ehsaas-programs"],
    date: "August 14, 2026",
    lastChecked: "August 14, 2026",
    readTime: "24 min read",
    image: "/images/ehsaas-payment-tracking.jpg",
    imageAlt: "A Pakistani woman checking an Ehsaas and BISP payment status on her phone",
    author: contributors.saadHassan,
    reviewer: contributors.ayeshaMalik,
    sections: [
      {
        title: "Ehsaas 8171 Portal and Payment Tracking",
        paragraphs: [],
        subsections: [
          {
            title: "What the 8171 System Does",
            paragraphs: [
              "For people searching for Ehsaas tracking, the 8171 system is the main digital route for checking information related to BISP assistance. The current official 8171 web portal allows users to enter their CNIC number and verification code to check their household eligibility.",
              "Although many people still call it the Ehsaas 8171 portal, the current official system is operated by the Benazir Income Support Programme (BISP). BISP identifies 8171 as its official number and warns beneficiaries not to trust messages from other numbers.",
            ],
          },
          {
            title: "Online Status Checking",
            paragraphs: [
              "The portal provides a simple way to check your status without first visiting a BISP office. You enter your 13-digit CNIC, complete the displayed verification, and submit the request. The result can help you determine whether your household is recorded as eligible and whether you need to take another step through the official BISP system.",
            ],
          },
          {
            title: "CNIC-Based Verification",
            paragraphs: [
              "Your CNIC is central to the 8171 checking process. It is used to identify your record and connect the request with the relevant BISP eligibility information. For this reason, enter your CNIC carefully and use only the official portal when checking sensitive beneficiary information.",
            ],
          },
          {
            title: "Eligibility and Payment Information",
            paragraphs: [
              "It is useful to separate eligibility checking from actual payment collection. The 8171 portal is primarily an eligibility and status-checking channel, while BISP uses designated payment mechanisms for disbursement. For example, the Benazir Kafaalat quarterly stipend was increased to Rs. 13,500 from January 2025.",
              "For safety, always verify payment information through BISP's official channels. BISP states that 8171 is its only official number and that beneficiaries should report payment deductions or demands for fees through its official complaint channels.",
            ],
          },
        ],
        links: [{ label: "Read the latest Ehsaas tracking news for 2026", href: "/ehsaas-tracking-news/" }],
      },
      {
        title: "How to Check Ehsaas Payment Status Online",
        paragraphs: [],
        subsections: [
          {
            title: "Step 1: Open the Official 8171 Web Portal",
            paragraphs: [
              "Start by opening the official 8171 web portal rather than relying on a website shared through social media, WhatsApp, or an unknown link. The 8171 system is used for checking BISP-related eligibility information, and using the official portal helps you avoid incorrect or misleading status information.",
              "On the portal, look for the CNIC checking section. You do not need to give your CNIC to a private agent just to check your status. Keep your original 13-digit CNIC number with you and make sure the information you enter matches your identity record.",
            ],
          },
          {
            title: "Step 2: Enter Your CNIC Number",
            paragraphs: [
              "Enter your 13-digit CNIC number carefully in the required field. Check each digit before submitting because a typing mistake can prevent the system from finding the correct record. Your CNIC is used to identify your household record and retrieve the relevant eligibility information.",
              "Avoid entering your CNIC on unofficial websites that promise faster payments or guaranteed approval. A genuine status check should not require you to pay an agent or provide unnecessary sensitive information.",
            ],
          },
          {
            title: "Step 3: Complete the Verification",
            paragraphs: [
              "After entering your CNIC, complete the verification shown on the page. This may include an image or verification code designed to confirm that the request is being submitted normally. Once the required information is entered, submit the request and allow the system to process it.",
              "If the information does not load correctly, do not repeatedly submit random details. First check your internet connection, confirm the CNIC number, and try the official portal again.",
            ],
          },
          {
            title: "Step 4: Check Your Payment Status",
            paragraphs: [
              "After verification, carefully read the result shown on the screen. Depending on your record, you may see information indicating eligible, payment released, payment pending, ineligible, or no record found. Each result means something different, so do not assume that an eligibility result automatically means cash is ready for collection.",
              "If your payment is shown as released, follow the official BISP instructions for collection. If the status is pending or no record is found, recheck your information and use the appropriate BISP support channel rather than paying an agent who claims they can change the result.",
            ],
          },
        ],
      },
      {
        title: "How to Check Ehsaas Payment Through SMS",
        paragraphs: [],
        subsections: [
          {
            title: "Check Ehsaas Status Using 8171 SMS",
            paragraphs: [
              "If you do not want to use the internet, 8171 SMS provides another way to check BISP-related information. Use the 13-digit CNIC number associated with your beneficiary record and send it through SMS to 8171. BISP identifies 8171 as its official number, so be cautious if someone asks you to send your CNIC to another number.",
              "After sending the message, wait for the expected response from the official service. Depending on your record, the response may provide information about your eligibility or direct you toward the next step. Keep the SMS for reference if you need to verify the information later.",
            ],
          },
          {
            title: "What to Do If You Do Not Receive an SMS Reply",
            paragraphs: [
              "A missing response does not automatically mean that you are ineligible. Network problems, incorrect CNIC details, temporary system delays, or service congestion can prevent an immediate response. First, confirm that you entered the correct CNIC and sent the SMS to 8171.",
              "If you still do not receive a response, try rechecking through the online portal instead of repeatedly sending messages. You can also use BISP's official support channels if the issue continues. Never pay an agent who claims they can obtain a response or change your eligibility status for a fee.",
            ],
          },
        ],
      },
      {
        title: "Ehsaas Payment Amount and Installment Information",
        paragraphs: [],
        subsections: [
          {
            title: "How Much Is the Ehsaas/BISP Payment?",
            paragraphs: [
              "The payment amount depends on the specific BISP programme and the type of assistance you qualify for. For Benazir Kafaalat, the quarterly stipend is Rs. 13,500 for eligible beneficiaries. This is a quarterly payment, not a monthly payment, so beneficiaries should not assume that every BISP or Ehsaas-related programme follows the same payment schedule.",
              "Other programmes may provide different amounts or payment types. For example, education-related support and other social protection initiatives can have separate eligibility rules and payment schedules. This is why it is better to check your specific programme and current payment status rather than relying on an old amount shared on social media.",
            ],
          },
          {
            title: "When Is the Next Ehsaas Installment Due?",
            paragraphs: [
              "The Benazir Kafaalat payment follows a quarterly cycle, but the exact release and collection arrangements can vary according to official announcements and payment arrangements. Before travelling to a payment center, check your latest 8171 status and make sure your payment has actually been released.",
              "If your status shows that the installment is pending, wait for the official payment update instead of assuming that the money is already available. Checking first can save you an unnecessary trip and help you avoid unofficial agents who may claim that they can release your payment.",
            ],
          },
          {
            title: "Why Can Payment Amounts Differ Between Programs?",
            paragraphs: [
              "Not every payment associated with BISP or the broader Ehsaas ecosystem is the same. Benazir Kafaalat, Benazir Taleemi Wazaif, Benazir Nashonuma, and other assistance programmes have different purposes, eligibility requirements, and payment structures.",
              "For this reason, always identify the programme connected to your record before comparing payment amounts. The Rs. 13,500 figure specifically relates to the quarterly Benazir Kafaalat stipend and should not be presented as a universal payment for every BISP beneficiary.",
            ],
          },
        ],
      },
      {
        title: "Ehsaas Kafalat and BISP Payment Tracking",
        paragraphs: [],
        subsections: [
          {
            title: "What Is BISP Kafalat?",
            paragraphs: [],
            bullets: [
              "Benazir Kafaalat is a major BISP social protection programme.",
              "It provides cash assistance to eligible and deserving women from low-income households.",
              "The programme uses household information and eligibility assessments to identify beneficiaries.",
              "Eligible beneficiaries receive a quarterly stipend through designated payment channels.",
              "BISP Kafalat is the current official terminology, although many people still search for it as Ehsaas Kafalat.",
            ],
          },
          {
            title: "Ehsaas Kafalat vs. Benazir Kafalat",
            paragraphs: [],
            bullets: [
              "Ehsaas Kafalat is a commonly used search term connected with Pakistan's earlier Ehsaas Programme.",
              "Benazir Kafaalat is the current BISP programme name used in official communications.",
              "Both terms may appear when beneficiaries search for information about Kafaalat payments.",
              "The terminology can differ between older online information and current BISP announcements.",
              "When checking your payment, rely on the current BISP information rather than an outdated programme name.",
            ],
          },
          {
            title: "Other Programs You May See",
            paragraphs: [],
            bullets: [
              "Emergency Cash — temporary financial assistance introduced for specific emergency situations.",
              "Ehsaas Rashan — a subsidy-focused welfare initiative associated with the earlier Ehsaas framework.",
              "Scholarships — education-related financial support for eligible children and students.",
              "Benazir Taleemi Wazaif — education stipends linked to eligible BISP beneficiary families.",
              "Benazir Nashonuma — support focused on maternal and child nutrition.",
              "Other BISP/Ehsaas assistance programs may have separate eligibility requirements, payment amounts, and schedules.",
            ],
          },
        ],
      },
      {
        title: "How to Check Ehsaas Eligibility",
        paragraphs: [],
        subsections: [
          {
            title: "Who Can Qualify for Ehsaas/BISP Assistance?",
            paragraphs: [],
            bullets: [
              "Low-income households may be assessed for eligibility through the official BISP system.",
              "Eligible women are the primary beneficiaries of Benazir Kafaalat cash assistance.",
              "Vulnerable families may qualify depending on their household circumstances and official eligibility assessment.",
              "Eligibility is not based on a single factor; household information and socioeconomic conditions are considered.",
              "Your CNIC, household details, and information recorded through the BISP survey can affect the eligibility assessment.",
              "The final decision should be verified through the official 8171 system rather than an agent or unofficial website.",
            ],
          },
          {
            title: "How CNIC Verification Works",
            paragraphs: [],
            bullets: [
              "Your CNIC records help BISP identify and verify your beneficiary information.",
              "NADRA information is used as part of the identity and household verification process.",
              "Household information collected through the relevant survey helps determine socioeconomic status.",
              "The NSER database provides important information used for social protection targeting.",
              "Eligibility assessment can depend on the household data available in the official system.",
              "If your information has changed, updating your household record may be necessary before your eligibility can be assessed again.",
            ],
          },
          {
            title: "How to Register for BISP/Ehsaas",
            paragraphs: [],
            bullets: [
              "The registration process is handled through BISP's official registration and survey mechanisms.",
              "The Dynamic Registry allows household information to be collected and updated.",
              "A dynamic survey may be required when a household needs to enter or update its information.",
              "Beneficiaries should provide accurate CNIC and household information during registration.",
              "Updating household information is important when circumstances or family details change.",
              "Depending on the case, you may need documents such as an original CNIC or other relevant family information.",
              "BISP registration and survey services are free; do not pay an agent to complete the process.",
              "After registration or an update, use the official 8171 system to check whether your information has been processed.",
            ],
          },
        ],
      },
      {
        title: "Ehsaas Payment Status Messages Explained",
        paragraphs: [],
        subsections: [
          {
            title: "“Eligible”",
            paragraphs: [
              "When your 8171 result shows Eligible, it generally means your record meets the relevant programme requirements. However, eligibility does not always mean that your cash payment is immediately available. Check the result carefully to see whether a payment has also been released. If no payment is showing, wait for the official update before visiting a collection point.",
            ],
          },
          {
            title: "“Payment Released”",
            paragraphs: [
              "A Payment Released status generally means that an installment has been authorized for payment. Before travelling to a payment center, check the latest payment information and take your original CNIC with you. You may also need to complete biometric verification according to the official payment procedure. Never pay an agent to release a payment that has already been authorized.",
            ],
          },
          {
            title: "“Payment Pending”",
            paragraphs: [
              "If your status shows Payment Pending, the expected installment has not yet been made available for collection. This can happen because of payment processing, scheduled installment releases, or system updates. Check your 8171 status again after the relevant payment announcement, and avoid unnecessary visits to payment centers while the payment remains pending.",
            ],
          },
          {
            title: "“Ineligible”",
            paragraphs: [
              "An Ineligible result means your current record does not meet the relevant eligibility requirements. This may be related to household information, socioeconomic assessment, or programme criteria. If your circumstances have changed, contact BISP through an official channel to understand whether you can request reassessment or update your survey information. Never pay anyone who promises guaranteed approval.",
            ],
          },
          {
            title: "“No Record Found”",
            paragraphs: [
              "If 8171 shows No Record Found, the system could not locate the expected information using the submitted CNIC. First, check that your CNIC was entered correctly. If the information is correct, your registration or survey record may need to be completed or updated. In that situation, use an official BISP registration or support channel instead of relying on an unofficial agent.",
            ],
          },
        ],
      },
      {
        title: "How to Collect Your Ehsaas/BISP Payment",
        paragraphs: [],
        subsections: [
          {
            title: "Where Can You Collect Your Payment?",
            paragraphs: [
              "Once your BISP payment has been officially released, you should collect it only through an authorized payment center or another payment channel designated by BISP. The exact collection method can depend on the current payment arrangements in your area. Always check your latest 8171 status or official BISP instructions before travelling.",
              "Do not hand your CNIC to an unknown person or allow an unofficial agent to collect the payment on your behalf. If someone claims they can release your money faster for a fee, treat it as a warning sign.",
            ],
          },
          {
            title: "What Do You Need to Collect the Money?",
            paragraphs: [
              "You will generally need your original CNIC for identity verification. At the payment point, your identity may be confirmed through biometric verification before the payment is handed over. Keep your payment confirmation or relevant 8171 message available if required.",
              "Before leaving the payment center, make sure you receive the correct amount and do not accept unexplained deductions. If an amount is deducted without a valid reason, report the issue through the official BISP complaint mechanism.",
            ],
          },
          {
            title: "What to Do If Your Biometric Verification Fails",
            paragraphs: [
              "If your biometric verification fails, do not assume that your payment has been cancelled. Fingerprint mismatches, identity-record issues, or technical problems can sometimes prevent successful verification. Follow the instructions provided by the authorized payment channel and try the verification process again where appropriate.",
              "If the problem continues, contact BISP through its official support or complaint channels and explain the issue. Avoid paying intermediaries who claim they can bypass biometric verification or guarantee that your payment will be released.",
            ],
          },
        ],
      },
      {
        title: "Ehsaas Payment Problems and Their Solutions",
        paragraphs: [],
        subsections: [
          {
            title: "Payment Not Received",
            paragraphs: [
              "If your payment has not been received, first check your 8171 payment status to confirm whether the installment has been released. Sometimes payments are delayed because of processing schedules, system updates, or verification requirements. Make sure your eligibility is active and that you are checking information through official BISP channels.",
              "If your status shows that payment has been released but you have not received it, contact the relevant support channel instead of relying on unofficial agents. Keep your CNIC and payment information available when reporting the issue.",
            ],
          },
          {
            title: "Payment Is Showing but Money Is Not Available",
            paragraphs: [
              "In some cases, the system may show that payment exists, but the money is not yet available for collection. This can happen because of payment processing delays, technical issues at the payment center, or temporary verification problems.",
              "Wait for an official update and recheck your status through 8171 before making another visit. If the issue continues, report it through the official BISP support system and avoid anyone who asks for extra money to release the payment.",
            ],
          },
          {
            title: "CNIC Information Is Incorrect",
            paragraphs: [
              "Incorrect CNIC information can affect eligibility, payment verification, and beneficiary records. Errors may occur because of outdated information or differences between official records and household data.",
              "If your personal or household information has changed, update the relevant records through the proper official process. After the update, check your status again through 8171 to confirm that the new information has been processed correctly.",
            ],
          },
          {
            title: "BISP Survey or Registration Problems",
            paragraphs: [
              "Some beneficiaries face issues because of missing records, incomplete surveys, or outdated household information. If your registration information is incomplete, your eligibility or payment status may not appear correctly in the system.",
              "If needed, complete the required survey or update your household information through the official BISP process. After the update, use 8171 to recheck your eligibility and payment status rather than depending on unofficial sources.",
            ],
          },
        ],
      },
      {
        title: "Ehsaas Tracking Without Visiting a Government Office",
        paragraphs: [],
        subsections: [
          {
            title: "Use the 8171 Online Portal",
            paragraphs: [
              "The 8171 online portal makes it possible to check important BISP information from home. You can use the portal for online status checking, payment verification, and eligibility checking by entering your CNIC and completing the required verification. This can save time when you only need to confirm your current status and do not have a registration or documentation issue.",
            ],
          },
          {
            title: "Use 8171 SMS",
            paragraphs: [
              "If internet access is limited, 8171 SMS can be a convenient option for basic SMS-based tracking. Send your CNIC through the official 8171 service and wait for the response. This is particularly useful for beneficiaries who have limited access to the internet or find the online portal difficult to use.",
            ],
          },
          {
            title: "When You Still Need to Visit an Office",
            paragraphs: [
              "Not every issue can be resolved online or through SMS. You may need to visit a BISP office or an authorized registration center if you have registration issues, need data corrections, or face ongoing biometric problems. An office visit may also be necessary when you need to submit a complaint about a payment or resolve an unresolved case.",
              "Before travelling, check the information available through official BISP channels and take your original CNIC and relevant documents with you. This can help staff identify your record and deal with the issue more efficiently.",
            ],
          },
        ],
      },
      {
        title: "How to Avoid Ehsaas and BISP Payment Scams",
        paragraphs: [],
        subsections: [
          {
            title: "Beware of Fake Agents",
            paragraphs: [
              "Fake agents are a common risk for people trying to check or collect BISP payments. Be careful if someone claims they can increase your payment, release a pending installment, change your eligibility, or complete registration in exchange for money. Agents asking for fees, fake payment-release claims, and requests for CNIC information should be treated as warning signs.",
              "BISP states that beneficiaries should use official channels and that messages from numbers other than 8171 should not be trusted. Registration and survey services are also provided without a fee.",
            ],
          },
          {
            title: "Never Share Sensitive Information",
            paragraphs: [
              "Keep your CNIC details, PINs, OTPs, and biometric information private. A genuine BISP representative should not ask you to disclose security information simply to check your payment status. Do not send photographs of your CNIC or sensitive codes to unknown WhatsApp numbers, social media accounts, or unofficial websites.",
              "If someone asks for money before giving you access to a payment that is already showing as released, stop and verify the claim through an official BISP channel.",
            ],
          },
          {
            title: "How to Identify Official Ehsaas/BISP Information",
            paragraphs: [
              "For reliable information, look for official 8171 communication, the Government websites and official BISP announcements. Use authorized payment channels when collecting money and avoid information shared only through social media claims or unofficial websites.",
              "A simple rule is to verify before you trust: check the official BISP source, confirm that the communication comes through the recognized 8171 channel, and never pay someone merely to check your eligibility or payment status.",
            ],
          },
        ],
      },
      {
        title: "Ehsaas Tracking for Women, Senior Citizens and Rural Families",
        paragraphs: [],
        subsections: [
          {
            title: "Support for Eligible Women",
            paragraphs: [
              "Eligible women are a major beneficiary group under Benazir Kafaalat. For these beneficiaries, regular Kafaalat payments and payment verification can help confirm whether an installment has been released before travelling to a payment location. Once the payment is available, women should follow the official collection process and complete the required verification for safe collection. Checking the status through 8171 can also reduce dependence on intermediaries.",
            ],
          },
          {
            title: "Tracking Payments in Rural Areas",
            paragraphs: [
              "For people living in rural areas, online and SMS options can be especially useful when there is limited access to government offices or long travel distances. Beneficiaries can use the online and SMS options to check eligibility and payment information before travelling. When a payment has been released, use only authorized payment locations and follow the latest BISP instructions for collection.",
            ],
          },
          {
            title: "Support for Senior Citizens and Vulnerable Beneficiaries",
            paragraphs: [
              "Senior citizens and other vulnerable beneficiaries may need additional assistance when checking or collecting payments. Easier verification through official channels can help them understand their status before visiting a payment center. Family members or trusted individuals can assist with navigating the process when appropriate, but beneficiaries should remain careful with their personal information. Proper assistance with payment collection and awareness of official procedures can also help with avoiding exploitation by intermediaries.",
            ],
          },
        ],
      },
      {
        title: "Frequently Asked Questions",
        paragraphs: [],
        subsections: [
          {
            title: "How can I check my Ehsaas payment status online?",
            paragraphs: [
              "You can check your status through the official 8171 web portal by entering your 13-digit CNIC number and completing the required verification. The result can show your eligibility or relevant payment information.",
            ],
          },
          {
            title: "How can I check Ehsaas payment through 8171 SMS?",
            paragraphs: [
              "Send your CNIC number through the official 8171 SMS service and wait for the response. Be cautious of messages from other numbers claiming to represent BISP.",
            ],
          },
          {
            title: "How much is the current BISP Kafaalat payment?",
            paragraphs: [
              "The current Benazir Kafaalat quarterly stipend is Rs. 13,500 for eligible beneficiaries. Other BISP programmes can have different payment amounts.",
            ],
          },
          {
            title: "How often is the Ehsaas/BISP payment issued?",
            paragraphs: [
              "The Benazir Kafaalat stipend is issued on a quarterly basis. Always check the latest official payment announcement because release and collection arrangements can vary.",
            ],
          },
          {
            title: "What does “payment pending” mean on 8171?",
            paragraphs: [
              "Payment pending generally means that the expected installment has not yet been made available for collection. Check the status again after an official payment release announcement.",
            ],
          },
          {
            title: "What should I do if my CNIC shows no record?",
            paragraphs: [
              "First, check that you entered your CNIC correctly. If the result still shows no record, your registration or survey information may need to be completed or updated through the official BISP process.",
            ],
          },
          {
            title: "Can I check my Ehsaas payment without visiting an office?",
            paragraphs: [
              "Yes. You can use the 8171 online portal or the official 8171 SMS service to check available eligibility and payment information without first visiting a BISP office.",
            ],
          },
          {
            title: "What should I do if my biometric verification fails?",
            paragraphs: [
              "If biometric verification fails, follow the instructions provided by the authorized payment channel and try again where appropriate. If the problem continues, contact BISP through an official support or complaint channel.",
            ],
          },
          {
            title: "Is there a fee for checking Ehsaas payment status?",
            paragraphs: [
              "No. You should not pay an agent simply to check your eligibility or payment status. BISP also states that its registration and survey services are free.",
            ],
          },
          {
            title: "How can I report a fake Ehsaas or BISP agent?",
            paragraphs: [
              "Do not give the person your money or sensitive information. Keep any relevant details or evidence and report the issue through the official BISP complaint mechanism. Never share your CNIC, PIN, OTP, or biometric information with an unauthorized person.",
            ],
          },
        ],
      },
    ],
    officialLinks: [
      { label: "Open the official 8171 portal", href: "https://8171.bisp.gov.pk/" },
      { label: "BISP notice confirming the official 8171 number", href: "https://www.bisp.gov.pk/NewsDetail/Njk4ZDI0MTAtYzdiMy00MDMwLTljNTItZjI3OWM2MGQ4OWYz" },
      { label: "BISP Kafaalat Rs. 13,500 announcement", href: "https://www.bisp.gov.pk/NewsDetail/NzQ1NjM4M2ItZWY3Yy00ZDYxLWJlMzUtYTIxYWNiOWJhZjI1" },
      { label: "BISP fraud, fee, and helpline notice", href: "https://www.bisp.gov.pk/NewsDetail/M2MzZDg0ZjctYjBkMS00YzQ1LTkwMjQtMmVhZWFiZDgyZmI0" },
    ],
  },
  {
    slug: "8171-web-portal-not-working",
    title: "8171 Web Portal Not Working? 5 Checks Before You Assume It Is Down (2026)",
    excerpt: "If the official 8171 portal will not load or submit, check the address, image code, browser, and connection before using an official BISP fallback.",
    metaTitle: "8171 Web Portal Not Working? 5 Checks (2026)",
    metaDescription: "If the official 8171 portal will not load or submit, check the address, image code, browser and connection, then use an official BISP fallback.",
    primaryCategory: "8171",
    categorySlugs: ["8171", "news"],
    date: "August 14, 2026",
    lastChecked: "August 14, 2026",
    readTime: "9 min read",
    image: "/images/8171-portal-troubleshooting.jpg",
    imageAlt: "A user troubleshooting the official 8171 BISP portal on a mobile phone",
    author: contributors.saadHassan,
    reviewer: contributors.ayeshaMalik,
    sections: [
      {
        title: "If the 8171 web portal is not working, start here",
        paragraphs: [
          "If the 8171 web portal is not working, first confirm the official address, then check the CNIC and image-code fields, test another browser or connection, and distinguish a returned status from a loading error. The current public page is https://8171.bisp.gov.pk/. If it remains unavailable, use only a BISP contact route.",
          "BISP operates the service, but one failed attempt does not prove that the portal is down nationwide. A wrong address, incomplete verification code, stored browser data, or network problem can look the same to a user. Without an official BISP notice, work through the five checks before drawing a conclusion.",
          "The checked form contains a 13-digit Computerized National Identity Card (CNIC) field and an image code. Live Govt Schemes & Ehsaas Programs does not collect CNICs or check individual records.",
        ],
      },
      {
        title: "Is the 8171 portal down, or is the page failing on your device?",
        paragraphs: [
          "A page that does not load does not identify the cause. Page access, form submission, and programme status are three different stages: a blank screen or timeout is an access failure; a validation message concerns the form; and a returned eligibility or survey message means the lookup completed.",
          "Do not treat a blank page as proof of maintenance, a database update, a NADRA synchronization problem, or a national outage. Those explanations require a BISP notice. Match what you see to the issue type below.",
        ],
        table: {
          caption: "What an 8171 portal result—or lack of one—means",
          headers: ["What you see", "Issue type", "What to check next"],
          rows: [
            ["Page does not open, stays blank, or times out", "Access problem; no status was returned", "Official address, browser, and connection"],
            ["Page opens but the form will not submit", "Input or image-code validation problem", "CNIC and verification-code fields"],
            ["Page displays a status or instruction", "Completed lookup", "Read the exact response and follow its official next step"],
          ],
        },
      },
      {
        title: "Check 1: Confirm the official 8171 BISP address",
        paragraphs: [
          "The current public CNIC status page is https://8171.bisp.gov.pk/. Before entering a CNIC, confirm that the address bar shows the exact host 8171.bisp.gov.pk. A secure HTTPS connection protects data in transit, but HTTPS by itself does not prove that a website belongs to BISP; the domain must also be correct.",
          "Avoid misspellings, unrelated domains, shortened links, and pages that imitate BISP branding. Page design is easy to copy; the destination in the address bar is the stronger identity signal. Bookmark the verified page instead of returning through advertisements or forwards.",
        ],
        links: [
          { label: "Follow the complete official 8171 eligibility walkthrough", href: "/check-bisp-eligibility-8171/" },
          { label: "Verify 8171, 786, and older Ehsaas routes", href: "/8171-786-ehsaas-tracking-official-number/" },
        ],
      },
      {
        title: "Check 2: Complete the CNIC and image-code fields correctly",
        paragraphs: [
          "The public form currently asks for the relevant 13-digit CNIC number and the code displayed in the image. Enter the CNIC of the person whose programme status is being checked, review every digit, type the image code exactly as shown, and submit once. The image code—often called a CAPTCHA or verification code—helps validate the form submission; it does not determine BISP eligibility.",
          "If the image code is unreadable or does not appear, reload the official page to request a new image instead of guessing repeatedly. Messages about a required field, invalid code, or incomplete input are form-validation responses. They do not mean the CNIC is ineligible, deleted, or missing from the National Socio-Economic Registry (NSER). Avoid sharing an unredacted screenshot while asking someone to read the code.",
        ],
        links: [{ label: "See the step-by-step BISP status check by CNIC", href: "/check-bisp-status-by-cnic-online/" }],
      },
      {
        title: "Check 3: Test another browser or a private window",
        paragraphs: [
          "If the official page opens incorrectly, a second browser or private window can show whether the problem is limited to stored browser data. Open a private or incognito window, paste the verified BISP address, and try once. You can also close duplicate portal tabs and use another current browser on the same device.",
          "If that works, site-specific cache, cookies, or a previous session may have interfered. Clear only BISP site data if you understand that this ends the session; do not erase all browser history. If a clean session still fails, test the connection.",
        ],
      },
      {
        title: "Check 4: Switch between Wi-Fi and mobile data",
        paragraphs: [
          "Trying a second connection helps identify whether the 8171 website is not loading only on one network. Switch from Wi-Fi to mobile data or from mobile data to trusted Wi-Fi, then open the same verified page. If another device is available, one careful test can also separate a device problem from a broader access issue.",
          "Do not refresh continuously or submit the same CNIC many times. If the page fails across connections, browsers, and devices, retry later and check BISP for an announcement. Do not assign a cause or recovery time without one; a failed page says nothing about whether a household record changed.",
        ],
      },
      {
        title: "Check 5: Do not confuse a status response with a portal error",
        paragraphs: [
          "If a status message appears, the lookup completed. Eligibility wording, a survey instruction, or a no-record response must be read as programme information, not as proof that the portal is broken. Save the exact message privately before explaining it or taking another step; paraphrasing can remove an important instruction.",
          "A no-record response is different from a page-loading error. BISP's published Kafaalat guidance describes an in-person route for a household with no record: an adult household member may visit the nearest Benazir Registration Desk at a BISP tehsil office for a household survey. The office determines whether a new survey or record update is appropriate; this website cannot promise the result.",
        ],
        table: {
          caption: "How to route common 8171 outcomes safely",
          headers: ["Response category", "What it establishes", "Safe next step"],
          rows: [
            ["Eligible or beneficiary wording", "A positive programme-status response was returned", "Follow the exact instruction and rely on official 8171 communication where required"],
            ["No record", "The lookup completed but returned no available record", "Use the Benazir Registration Desk route at a BISP tehsil office"],
            ["Survey, recertification, or office instruction", "An administrative step is required", "Follow the stated instruction through the named official channel"],
            ["Error, blank page, or no usable result", "No programme status was returned", "Repeat Checks 1–4 or use an official fallback"],
          ],
        },
        links: [{ label: "Understand the no-record and NSER registration route", href: "/how-to-register-bisp-online-guide/" }],
      },
      {
        title: "Use an official route if the website remains unavailable",
        paragraphs: [
          "BISP identifies 8171 as its only official messaging number and publishes 0800-26477 as its helpline. If the website remains unavailable, use the SMS route only in line with current BISP instructions: enter the CNIC in the phone's messaging app, send it to 8171—not a similar-looking number—and keep the response private. Ordinary carrier charges may apply; BISP does not charge a survey fee.",
          "Use an active mobile number controlled by you, and do not expect an instant response in every case. For an unresolved programme query, contact the BISP helpline or visit the nearest BISP tehsil office. An official fallback gives you another communication route; it does not guarantee eligibility, approve a payment, or establish why the web page failed.",
        ],
        bullets: [
          "Open the phone's messaging app and enter only the relevant CNIC as instructed by BISP.",
          "Send the message to 8171 and verify the recipient before pressing send.",
          "Keep the reply and any status screenshot private.",
          "For unresolved questions, use 0800-26477 or a BISP tehsil office.",
        ],
      },
      {
        title: "Protect your CNIC while troubleshooting 8171",
        paragraphs: [
          "A portal problem is not a reason to move to a third-party checker. An unofficial form may imitate the 8171 name while collecting identity data that BISP did not request through that site. Live Govt Schemes & Ehsaas Programs never asks readers to submit a CNIC, result screenshot, OTP, bank PIN, password, card number, or mobile-wallet code.",
        ],
        bullets: [
          "Use only the BISP-hosted public portal and verify the host before typing personal data.",
          "Do not send a CNIC image through comments, social posts, email, or an unknown WhatsApp contact.",
          "Redact the CNIC and any personal details before sharing a screenshot for legitimate support.",
          "Do not pay an agent to restore, unlock, or speed up the portal or your record.",
          "Treat programme messages from a sender other than 8171 as unverified and contact BISP directly.",
        ],
        links: [{ label: "Review seven warning signs of a fake BISP message", href: "/avoid-bisp-fraud/" }],
      },
      {
        title: "8171 portal troubleshooting checklist",
        paragraphs: [
          "For an 8171 check online in 2026, follow the same safe order every time: official host, complete form, clean browser session, second connection, and accurate response interpretation. This sequence narrows the problem without making unsupported claims about service availability.",
          "If the 8171 web portal is not working after all five checks, pause and use the official BISP portal again later, the 8171 messaging channel, helpline 0800-26477, or a tehsil office. A CNIC status check belongs on an official BISP route; never trade privacy for a faster-looking third-party form.",
        ],
        bullets: [
          "Verify 8171.bisp.gov.pk in the address bar.",
          "Complete both the CNIC and image-code fields.",
          "Try a private window or another browser.",
          "Switch Wi-Fi, mobile data, or device once.",
          "Separate a returned status from a loading failure.",
          "Use 8171, 0800-26477, or a BISP tehsil office when needed.",
        ],
      },
    ],
    faqs: [
      { question: "Is the 8171 portal down right now?", answer: "One failed page cannot confirm a nationwide outage. Verify 8171.bisp.gov.pk, complete both fields, test another browser or connection, and check the official BISP website for a current notice." },
      { question: "Why is the 8171 portal not working on my phone?", answer: "The issue may involve the address, image-code validation, browser session, network connection, or temporary service availability. Work through the five checks in order instead of assuming a specific cause." },
      { question: "Why will the 8171 form not submit?", answer: "Confirm that the 13-digit CNIC field and the code shown in the image are both complete. A validation error concerns the form submission; it is not an eligibility decision." },
      { question: "Is 'no record' the same as a portal error?", answer: "No. 'No record' means the lookup returned a response. BISP guidance directs an adult household member toward the nearest Benazir Registration Desk for the relevant survey route." },
      { question: "How can I check BISP status without the website?", answer: "BISP identifies 8171 as its official messaging number and publishes helpline 0800-26477. Follow current BISP SMS instructions or use a BISP tehsil office for unresolved questions." },
      { question: "Can I use another website when 8171 is not loading?", answer: "Do not enter a CNIC on an unofficial status checker. Retry the BISP-hosted page or use an official BISP messaging, helpline, or office route." },
    ],
    officialLinks: [
      { label: "Open the official 8171 portal", href: "https://8171.bisp.gov.pk/" },
      { label: "BISP notice confirming the official 8171 number", href: "https://www.bisp.gov.pk/NewsDetail/Njk4ZDI0MTAtYzdiMy00MDMwLTljNTItZjI3OWM2MGQ4OWYz" },
      { label: "BISP fraud, fee, and helpline notice", href: "https://www.bisp.gov.pk/NewsDetail/M2MzZDg0ZjctYjBkMS00YzQ1LTkwMjQtMmVhZWFiZDgyZmI0" },
      { label: "BISP Kafaalat registration guidance", href: "https://www.bisp.gov.pk/SiteImage/Misc/files/KifalatEngUrdu_2022.pdf" },
    ],
  },
  {
    slug: "8171-786-ehsaas-tracking-official-number",
    title: "8171, 786, and Ehsaas Tracking: Which Number Should You Actually Use?",
    excerpt: "BISP says 8171 is its official messaging number. Learn how to handle 786, 5771, 7181, and older Ehsaas tracking addresses safely.",
    metaTitle: "8171, 786 & Ehsaas Tracking: The Official BISP Route",
    metaDescription: "BISP says 8171 is its official messaging number. Learn how to handle 786, 5771, 7181 and older Ehsaas tracking addresses safely.",
    primaryCategory: "8171",
    categorySlugs: ["8171", "news"],
    date: "August 14, 2026",
    lastChecked: "August 14, 2026",
    readTime: "9 min read",
    image: "/images/8171-number-verification.jpg",
    imageAlt: "A user comparing the official BISP 8171 route with unverified number and portal claims",
    author: contributors.ayeshaMalik,
    reviewer: contributors.saadHassan,
    sections: [
      {
        title: "The official answer: BISP uses 8171",
        paragraphs: [
          "BISP identifies 8171 as its official messaging number. If a 786 web portal, 5771, 7181, or another number is presented as a BISP status or payment channel, do not treat it as an alternative without confirmation from BISP. For the current public web check, use https://8171.bisp.gov.pk/. Older pass.gov.pk addresses explain some Ehsaas tracking searches but are not the current route verified for this guide.",
          "A number, sender, and web address are separate entities. 8171 can be an SMS short code; the sender field shows where a message came from; and 8171.bisp.gov.pk is a browser destination. A copied logo or familiar phrase does not connect an unknown sender or domain to BISP.",
          "Live Govt Schemes & Ehsaas Programs does not collect CNIC numbers and cannot verify a message from a screenshot alone. Use the evidence checks below before sending personal data, following a payment instruction, or visiting an office.",
        ],
      },
      {
        title: "Use 8171 for official BISP messages",
        paragraphs: [
          "BISP says 8171 is its official number and instructs beneficiaries not to trust programme messages from other numbers. In this context, 8171 is a messaging number or SMS short code—not a programme name, a payment amount, the BISP helpline, or proof that a household is eligible.",
          "The BISP web portal contains 8171 in its host, but it is still a web address rather than an SMS sender. Likewise, a message that types '8171' in its body is not necessarily sent by 8171. Check the actual sender details on the phone. Even a genuine message route cannot guarantee eligibility or payment because the outcome depends on the household's BISP and NSER programme record.",
        ],
      },
      {
        title: "8171, 786, 5771, and 7181 compared",
        paragraphs: [
          "A number appearing beside BISP or Ehsaas in a search result does not prove that BISP owns or endorses it. Current BISP guidance identifies 8171—not a family of similar numbers—as its official messaging number. The safe conclusion is limited: 786, 5771, and 7181 do not match the number BISP confirms for programme messages.",
          "This does not establish who controls every other number, and it would be inaccurate to label them all as scammer-owned. It means only that a BISP claim made through one of those numbers is unverified until BISP confirms it through its website, helpline, or office network.",
        ],
        table: {
          caption: "Which number should you use for BISP?",
          headers: ["Number or query", "Confirmed BISP status", "Safe action"],
          rows: [
            ["8171", "BISP identifies it as its official messaging number", "Use it only for the purpose described in current BISP guidance"],
            ["786 web portal", "Not BISP's stated official messaging number", "Do not enter a CNIC or pay anyone; use the BISP-hosted portal"],
            ["5771 check online", "Not BISP's stated official messaging number", "Treat a BISP claim from this number as unverified"],
            ["7181 check online", "Not BISP's stated official messaging number", "Verify through BISP instead of trying similar number combinations"],
          ],
        },
      },
      {
        title: "Do not confuse the 8171 number with the 8171 web portal",
        paragraphs: [
          "8171 is the official BISP messaging number; 8171.bisp.gov.pk is the current public web address. One is a communication channel and the other is a government-hosted web service. Verify the sender and destination independently because a genuine-looking number in a link does not prove the domain, and a genuine domain does not make a separate message sender official.",
          "In a domain, read from the end: gov.pk is the government namespace, bisp.gov.pk identifies BISP, and 8171 is the subdomain used for this public service. The checked page displays a 13-digit CNIC field and an image-code field. It does not need a public username and password for this status lookup.",
        ],
        table: {
          caption: "How to recognize each official BISP channel",
          headers: ["Channel entity", "How to recognize it", "Purpose"],
          rows: [
            ["SMS or programme message", "The actual sender is 8171", "Official beneficiary communication"],
            ["Public status check", "The address bar shows 8171.bisp.gov.pk", "CNIC and image-code status lookup"],
            ["Complaint or query", "BISP helpline 0800-26477 or a BISP tehsil office", "Official assistance and grievance route"],
          ],
        },
        links: [{ label: "Complete the official BISP CNIC status form", href: "/check-bisp-status-by-cnic-online/" }],
      },
      {
        title: "Why old Ehsaas tracking addresses still appear",
        paragraphs: [
          "Older official Ehsaas and NSER material used pass.gov.pk tracking addresses, which is why searches such as 'Ehsaas tracking pass gov pk' and 'ehsas tracking pass.gov.pk' still appear. Associated Press of Pakistan reported ehsaastracking.pass.gov.pk as the Ehsaas 8171 web portal during the earlier Ehsaas period, while BISP's 2022 NSER guide documented 8171.pass.gov.pk.",
          "Historical official use does not automatically make an old route the recommended current route. Programme administration, branding, and web infrastructure can change, while old articles, screenshots, bookmarks, and search suggestions remain visible. This guide does not claim a precise migration date because no direct migration notice was used. The current public route verified on August 14, 2026 is hosted on BISP's domain at 8171.bisp.gov.pk.",
          "Ehsaas and BISP may still appear together in searches because Ehsaas-era services and BISP programme infrastructure overlapped. That historical connection is useful context, but current status decisions should start with a present BISP source rather than an archived address.",
        ],
        table: {
          caption: "Historical Ehsaas routes versus the current BISP route",
          headers: ["Source context", "Address", "Accurate framing"],
          rows: [
            ["Earlier Ehsaas tracking", "ehsaastracking.pass.gov.pk", "Historical Ehsaas status route reported by APP"],
            ["BISP NSER guide (2022)", "8171.pass.gov.pk", "Historical government route documented in BISP guidance"],
            ["Current check (August 14, 2026)", "8171.bisp.gov.pk", "Current public BISP-hosted status portal"],
          ],
        },
      },
      {
        title: "How to verify any BISP number, message, or link",
        paragraphs: [
          "Verify the sender, destination, instruction, and requested data as four separate signals. A government logo, a video title, or a screenshot is easy to copy and is not enough. Start with the actual sender: BISP says official programme messages come from 8171. Then inspect any web destination before opening it or entering a CNIC.",
          "Confirm important instructions against bisp.gov.pk, a named BISP notice, helpline 0800-26477, or a BISP tehsil office. Finally, examine the request. Stop if an unknown person asks for an OTP, bank PIN, account password, card information, mobile-wallet code, or payment for survey, approval, or release of support.",
        ],
        bullets: [
          "Sender: check the number shown by the phone, not a number copied into the message body.",
          "Destination: confirm the full host in the address bar before entering a CNIC.",
          "Instruction: compare the claim with a current BISP source rather than a forward or old screenshot.",
          "Requested data: never disclose authentication secrets or financial credentials to an unknown contact.",
        ],
        table: {
          caption: "Official evidence versus an unverified signal",
          headers: ["Signal", "Official evidence", "Unverified signal"],
          rows: [
            ["Sender", "8171", "A personal or different number claiming to be BISP"],
            ["Web address", "Current BISP-hosted portal", "A lookalike, shortened, or unrelated domain"],
            ["Fee", "BISP states that its survey is free", "Payment requested for survey, approval, or release"],
            ["Source", "BISP portal, announcement, helpline, or office", "Forward, anonymous post, video title, or screenshot"],
          ],
        },
        links: [{ label: "Learn the seven red flags of a fake BISP message", href: "/avoid-bisp-fraud/" }],
      },
      {
        title: "What to do if you sent your CNIC to another number",
        paragraphs: [
          "Stop the conversation, share no additional credentials or payment, preserve the evidence privately, and contact BISP through an official route if the sender claimed to represent the programme. Sending a CNIC to an unknown number does not prove that a BISP record was altered, but it is still a privacy incident that should not be dismissed.",
          "Save the sender number, message text, time, suspicious link, and a screenshot. Redact the CNIC before sharing evidence for help. Call BISP at 0800-26477 for a BISP-related complaint or query. If you also revealed a bank PIN, OTP, card detail, password, or mobile-wallet code, contact the relevant bank or financial provider immediately through the number on its official website or card.",
        ],
        bullets: [
          "Do not reply or follow another link from the same conversation.",
          "Do not share an OTP, bank PIN, password, card detail, or wallet code.",
          "Preserve evidence without posting the CNIC publicly.",
          "Contact BISP or the affected financial provider through a verified route.",
        ],
      },
      {
        title: "Which BISP route should you use now?",
        paragraphs: [
          "Choose the channel that matches the task. The current 8171 web portal handles the public online status lookup; the 8171 sender identifies official programme messages; and the BISP helpline or tehsil office handles complaints and queries. These routes are related, but they are not interchangeable.",
        ],
        table: {
          caption: "The correct BISP route for each goal",
          headers: ["Your goal", "Route to use"],
          rows: [
            ["Check BISP status online", "https://8171.bisp.gov.pk/"],
            ["Recognize an official programme message", "Confirm the actual sender is 8171"],
            ["Resolve a portal-loading problem", "Use the dedicated five-check troubleshooting guide"],
            ["Complete the public CNIC form", "Use the step-by-step BISP status guide"],
            ["Ask a complaint or programme query", "Call 0800-26477 or visit a BISP tehsil office"],
          ],
        },
        links: [
          { label: "Troubleshoot a portal that will not load or submit", href: "/8171-web-portal-not-working/" },
          { label: "Check BISP status by CNIC online", href: "/check-bisp-status-by-cnic-online/" },
          { label: "Confirm a BISP payment safely", href: "/bisp-8171-payment-balance-check-guide/" },
        ],
      },
      {
        title: "The safe rule for 8171, 786, and Ehsaas tracking",
        paragraphs: [
          "The official BISP number is 8171, and the current 8171 web portal is 8171.bisp.gov.pk. Based on current BISP guidance, 786, 5771, and 7181 are not alternate BISP messaging numbers. That is a verification decision, not a claim about who owns those numbers.",
          "When an old Ehsaas tracking or pass.gov.pk result appears, treat it as historical context and return to the current BISP-hosted service. Verify the sender and destination separately, keep CNIC data private, and confirm any payment or survey instruction through BISP before acting.",
        ],
      },
    ],
    faqs: [
      { question: "Is 786 an official BISP or Ehsaas number?", answer: "BISP identifies 8171 as its official messaging number. If 786 is presented as a BISP status or payment route, do not use it as an alternative without direct BISP confirmation." },
      { question: "Are 5771 and 7181 BISP check numbers?", answer: "They do not match BISP's stated official messaging number. Verify through 8171, the BISP-hosted portal, helpline 0800-26477, or a tehsil office instead of trying number variations." },
      { question: "What is the current official 8171 website?", answer: "The public CNIC status page verified on August 14, 2026 is https://8171.bisp.gov.pk/. Check that exact host in the address bar before entering personal data." },
      { question: "Was 8171.pass.gov.pk an official address?", answer: "BISP's 2022 NSER guide documented that address. It is historical context; the current public route verified for this guide is hosted at 8171.bisp.gov.pk." },
      { question: "What was ehsaastracking.pass.gov.pk?", answer: "It was reported as an Ehsaas-era tracking portal. Readers searching that old phrase should use the current BISP-hosted public portal rather than assume an archived route is still active." },
      { question: "Can I trust a message that contains the number 8171?", answer: "Check the actual sender, not only the text inside the message. BISP programme communication should originate from 8171." },
      { question: "What should I do after sending my CNIC to an unknown number?", answer: "Stop engaging, share no OTP or financial credentials, preserve the message privately, and contact BISP at 0800-26477 if the sender claimed to represent the programme." },
    ],
    officialLinks: [
      { label: "Open the current 8171 public portal", href: "https://8171.bisp.gov.pk/" },
      { label: "BISP notice confirming 8171", href: "https://www.bisp.gov.pk/NewsDetail/Njk4ZDI0MTAtYzdiMy00MDMwLTljNTItZjI3OWM2MGQ4OWYz" },
      { label: "BISP survey-fee, fraud, and helpline notice", href: "https://www.bisp.gov.pk/NewsDetail/M2MzZDg0ZjctYjBkMS00YzQ1LTkwMjQtMmVhZWFiZDgyZmI0" },
      { label: "BISP's 2022 NSER registration guide", href: "https://www.bisp.gov.pk/SiteImage/Misc/files/NSEREngUrdu_2022.pdf" },
      { label: "Historical APP report on the Ehsaas portal", href: "https://www.app.com.pk/national/dr-sania-announces-opening-of-ehsaas-8171-web-portal/" },
    ],
  },
  {
    slug: "check-bisp-status-by-cnic-online",
    title: "How to Check Your BISP Status by CNIC Online (2026 Method)",
    excerpt: "Use the official 8171 portal to check BISP status by CNIC, understand the returned response, and follow the correct official next step.",
    metaTitle: "Check BISP Status by CNIC Online: 2026 Steps",
    metaDescription: "Use the official 8171 portal to check a BISP status by CNIC, understand the returned response, and follow the correct official next step.",
    primaryCategory: "8171",
    categorySlugs: ["8171", "bisp-registration", "news"],
    date: "August 14, 2026",
    lastChecked: "August 14, 2026",
    readTime: "10 min read",
    image: "/images/bisp-cnic-status-check.jpg",
    imageAlt: "A user entering a CNIC and image code on the official BISP 8171 portal",
    author: contributors.saadHassan,
    reviewer: contributors.ayeshaMalik,
    sections: [
      {
        title: "Check BISP status by CNIC in four steps",
        paragraphs: [
          "To check BISP status by CNIC in 2026, open https://8171.bisp.gov.pk/, enter the CNIC of the person whose status you are checking, type the code shown in the image, and submit the public form. Save the exact response privately and follow its stated next step. This lookup checks an existing status; it does not register a household or approve a payment.",
          "A BISP registration check by CNIC retrieves programme status using a Computerized National Identity Card. Final eligibility depends on the household record and programme criteria—not on how often the form is submitted.",
          "Live Govt Schemes & Ehsaas Programs does not collect or check CNICs. The routes in this guide were checked on August 14, 2026; enter personal data only on the verified BISP page.",
        ],
      },
      {
        title: "Use the official BISP CNIC-check page",
        paragraphs: [
          "The current public page is hosted at 8171.bisp.gov.pk and displays a 13-digit CNIC field plus an image-code field. Confirm that exact host in the address bar before typing personal information. Do not rely on a logo, embedded form, search advertisement, unofficial app, WhatsApp agent, or a page that only includes the phrase '8171 BISP gov pk.'",
          "The public status form does not display a BISP login username and password. A separate service at 8171validation.bisp.gov.pk is a login page for a different purpose; it is not the public two-field CNIC form described here. Do not enter credentials there to perform an 8171 check online CNIC login in 2026 unless BISP has specifically authorized you to use that separate service.",
        ],
        links: [
          { label: "Read the broader official 8171 eligibility guide", href: "/check-bisp-eligibility-8171/" },
          { label: "Why the portal has no username or password login", href: "/bisp-login-username-password/" },
        ],
      },
      {
        title: "How to check BISP registration status by CNIC online",
        paragraphs: [
          "The public BISP CNIC check requires the identity number and visible image code, not an account. Use a trusted device, submit once, and wait for the response.",
          "Enter the 13-digit CNIC of the person whose status is being checked, review every digit, then copy the CAPTCHA or verification image into the second field. The code validates the form request, not programme eligibility.",
        ],
        bullets: [
          "Open https://8171.bisp.gov.pk/ on a trusted phone or computer.",
          "Confirm that the address bar shows the official BISP host before entering personal data.",
          "Enter the 13-digit CNIC of the person whose BISP status you need to check.",
          "Type the code displayed in the image into the verification-code field.",
          "Submit once and allow the page time to return a response.",
          "Write down the exact wording or save it privately without exposing the CNIC.",
        ],
      },
      {
        title: "How to understand the 8171 response",
        paragraphs: [
          "Treat the returned wording as the instruction for that lookup; do not compress different messages into one generic label. BISP may change interface wording, so this guide groups responses by meaning instead of inventing fixed labels such as 'active,' 'pending,' or 'under verification.' Save the exact message before choosing a next step.",
        ],
        table: {
          caption: "Match the 8171 response to the correct official next step",
          headers: ["Response category", "What it establishes", "Next-step direction"],
          rows: [
            ["Eligible or beneficiary wording", "The portal returned a positive programme-status response", "Follow the exact instruction and act on payment directions only through official BISP communication"],
            ["No record", "No household or person record was returned for that lookup", "Use BISP's Benazir Registration Desk route"],
            ["Survey, recertification, or office instruction", "An administrative step is required", "Follow the exact message at a BISP tehsil office or the named official channel"],
            ["Error, blank page, or no result", "No usable status was returned", "Recheck both fields, retry later, or use the portal troubleshooting guide"],
          ],
        },
      },
      {
        title: "Status check, registration, eligibility, and payment are different",
        paragraphs: [
          "A CNIC lookup retrieves information; registration records household data; eligibility applies BISP programme criteria; and payment is a later communication and disbursement process. Keeping these entities separate prevents the common mistake of treating the public portal as a BISP 8171 online registration form or assuming that checking repeatedly can release a payment.",
          "NSER means National Socio-Economic Registry; its survey records household socioeconomic information. PMT means Proxy Means Test, which uses household indicators in welfare assessment. Benazir Kafaalat is one BISP programme, while 'Ehsaas' is not a universal current label for every response.",
          "Here, online CNIC verification means a BISP status lookup—not general identity verification by NADRA, which manages CNIC identity records.",
        ],
        table: {
          caption: "What each BISP action does—and does not do",
          headers: ["Action or entity", "What it does", "What it does not do"],
          rows: [
            ["CNIC status check", "Retrieves a portal response", "Does not create, approve, or edit a household record"],
            ["NSER survey", "Records household socioeconomic information", "Does not guarantee eligibility"],
            ["PMT and programme decision", "Applies BISP welfare and programme criteria", "Is not decided by this website or by repeated lookups"],
            ["Programme selection", "Identifies a qualifying beneficiary", "Does not itself confirm today's payment availability"],
            ["Payment communication and disbursement", "Provides collection instructions and releases support", "Is not triggered by submitting the status form again"],
          ],
        },
        links: [
          { label: "See how NSER and the PMT score relate to eligibility", href: "/nser-pmt-score-check-guide/" },
          { label: "Follow the separate BISP registration process", href: "/how-to-register-bisp-online-guide/" },
          { label: "Check your BISP account or card status", href: "/check-bisp-account-status/" },
        ],
      },
      {
        title: "What to do when the portal shows no record",
        paragraphs: [
          "A no-record response is a completed lookup, not a website outage. BISP's published Kafaalat guidance says that when the 8171 portal returns no record, an adult household member may visit the nearest Benazir Registration Desk at a BISP tehsil office for a household survey.",
          "The desk assesses whether the household needs a new NSER survey, a dynamic-registry update, or another step; this guide cannot promise the workflow or result.",
          "Take the documents requested in current BISP guidance, keep any receipt or token, and answer survey questions accurately. Use the registration guide for the full document checklist.",
        ],
        links: [
          { label: "Prepare for the no-record NSER survey route", href: "/how-to-register-bisp-online-guide/" },
          { label: "Review documents for a BISP registration-desk visit", href: "/documents-for-bisp-registration/" },
        ],
      },
      {
        title: "What to do after an eligible or beneficiary response",
        paragraphs: [
          "Follow the exact portal instruction and wait for the official 8171 communication required for payment or collection. Do not travel to a payment centre only because of a forwarded message, social-media post, old screenshot, or a positive status from a previous payment cycle.",
          "BISP identifies 8171 as its official messaging number. Confirm the actual sender and follow the current instruction. Take the original CNIC only to an authorized location and keep any receipt. Payment amounts, dates, and biometric requirements can vary by programme and cycle.",
        ],
        links: [{ label: "Check BISP payment status and collection guidance safely", href: "/bisp-8171-payment-balance-check-guide/" }],
      },
      {
        title: "Protect your CNIC during an online BISP check",
        paragraphs: [
          "Enter a CNIC only on the verified BISP-hosted public form and keep the result private. A CNIC is sensitive personal data, and a portal screenshot may reveal both the identity number and programme information. Redact those details before sharing a screenshot with legitimate support.",
          "BISP states that its survey is free and that 8171 is its only official messaging number. A fee for survey, approval, activation, or faster payment is a warning sign. Never paste a CNIC into comments, email, or chat.",
        ],
        bullets: [
          "Confirm 8171.bisp.gov.pk before entering the 13-digit CNIC.",
          "Do not share an OTP, bank PIN, account password, card detail, or mobile-wallet code.",
          "Do not post an unredacted CNIC or portal response on social media.",
          "Check the actual SMS sender rather than trusting '8171' written inside a message.",
          "Do not pay anyone for the NSER survey or a promise of programme approval.",
        ],
        links: [
          { label: "Verify 8171 versus 786 and other number claims", href: "/8171-786-ehsaas-tracking-official-number/" },
          { label: "Avoid fake CNIC checkers and BISP messages", href: "/avoid-bisp-fraud/" },
        ],
      },
      {
        title: "If the CNIC form will not load or submit",
        paragraphs: [
          "Verify the official host and both form fields first. Reload the official page if the image code is unreadable, then try a private window or another current browser. If necessary, switch once between Wi-Fi and mobile data or use another trusted device. A validation message is different from a programme-status response.",
          "If the page still fails, retry later or use 8171, helpline 0800-26477, or a BISP tehsil office. Never move the CNIC to an unofficial checker.",
        ],
        links: [{ label: "Run the five 8171 portal troubleshooting checks", href: "/8171-web-portal-not-working/" }],
      },
      {
        title: "BISP CNIC check: quick action summary",
        paragraphs: [
          "For a BISP registration check by CNIC, use the official page, complete the two visible fields, save the returned wording, and take only the official next step. The CNIC identifies the lookup subject, the BISP portal performs the check, and the image code validates submission. Registration, eligibility, and payment remain separate processes.",
          "People may also search for an Ehsaas program CNIC check online, online CNIC verification, or 8171 check online CNIC 2026. The safe current workflow is the same: start at the verified BISP host, protect the CNIC, and let the exact response—not an unofficial agent—determine the route that follows.",
        ],
        bullets: [
          "Open the verified BISP public portal.",
          "Enter the relevant 13-digit CNIC.",
          "Enter the code shown in the image.",
          "Submit once and wait for the response.",
          "Save the exact wording privately.",
          "Follow the relevant BISP status, registration, or payment route.",
        ],
      },
    ],
    faqs: [
      { question: "How can I check my BISP status by CNIC online?", answer: "Open https://8171.bisp.gov.pk/, enter the relevant 13-digit CNIC and the image code, then submit. Save the exact response privately and follow the official next step it provides." },
      { question: "Do I need a BISP username and password for the public CNIC check?", answer: "No. The current public page shows a CNIC field and an image-code field, not a public account login. Do not confuse a separate BISP login service with this status form." },
      { question: "What does the image code mean on the 8171 portal?", answer: "It is a human-verification field used to submit the form. Enter the characters shown in the image; a validation failure is not an eligibility result." },
      { question: "Does checking a CNIC online register a household for BISP?", answer: "No. The portal retrieves an available status. A new NSER survey or household update follows a separate BISP registration process." },
      { question: "What does no record mean on the BISP portal?", answer: "It means the lookup completed but did not return an available record. BISP guidance directs an adult household member toward the nearest Benazir Registration Desk for the survey route." },
      { question: "Does an eligible response mean a payment is ready?", answer: "Not necessarily. Follow the exact portal instruction and rely on official 8171 payment communication before traveling to a collection point." },
      { question: "Is the BISP CNIC check the same as NADRA verification?", answer: "No. This is a BISP programme-status lookup using a CNIC. NADRA manages identity records and is a separate entity." },
      { question: "What should I do if the public form does not load?", answer: "Verify the BISP host and both fields, test another browser or connection, and use the dedicated portal-troubleshooting guide. Never enter a CNIC on a third-party checker." },
    ],
    officialLinks: [
      { label: "Open the official 8171 public portal", href: "https://8171.bisp.gov.pk/" },
      { label: "BISP Kafaalat eligibility guidance", href: "https://www.bisp.gov.pk/SiteImage/Misc/files/KifalatEngUrdu_2022.pdf" },
      { label: "BISP NSER registration guidance", href: "https://www.bisp.gov.pk/SiteImage/Misc/files/NSEREngUrdu_2022.pdf" },
      { label: "BISP official-number, survey-fee, and helpline notice", href: "https://www.bisp.gov.pk/NewsDetail/M2MzZDg0ZjctYjBkMS00YzQ1LTkwMjQtMmVhZWFiZDgyZmI0" },
      { label: "BISP Kafaalat programme information", href: "https://www.bisp.gov.pk/Detail/YTgzNjkxM2YtN2ViMC00MjA5LWI0MDMtNzM4ZWJmMGVlNzc5" },
    ],
  },
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
        links: [{ label: "Why 8171 itself does not register you", href: "/8171-register/" }],
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
          "Open the official 8171 BISP portal from a trusted device. Check the address carefully before entering any information. Live Govt Schemes & Ehsaas Programs does not provide an eligibility database and never asks you to submit a CNIC here.",
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
  {
    slug: "ehsaas-tracking-news",
    title: "Ehsaas Tracking News 2026: The Real Changes to BISP 8171 (And What They Mean for You)",
    excerpt: "The real BISP 8171 changes in 2026 — portal updates, tighter CNIC checks, the NSER re-survey, and what a shifting payment schedule means for your status.",
    metaTitle: "Ehsaas Tracking News 2026: BISP 8171 Changes",
    metaDescription: "Latest Ehsaas tracking news for 2026: what changed on the 8171 web portal, SMS/CNIC verification, the NSER re-survey, and Kafaalat payments — and what to do next.",
    primaryCategory: "Public Service News",
    categorySlugs: ["news", "8171", "ehsaas-programs"],
    date: "August 16, 2026",
    lastChecked: "August 16, 2026",
    readTime: "11 min read",
    image: "/images/ehsaas-tracking-news.jpg",
    imageAlt: "A Pakistani woman reading updated Ehsaas and BISP 8171 news on her mobile phone",
    author: contributors.saadHassan,
    reviewer: contributors.ayeshaMalik,
    sections: [
      {
        title: "Ehsaas vs. BISP — Clearing Up the Naming, Once",
        paragraphs: [
          "Ehsaas was the umbrella government initiative; BISP is the implementing statutory body running Kafaalat and related cash transfer programs. In everyday conversation and in older news coverage, “Ehsaas” and “BISP” are often used interchangeably, but they aren’t the same thing — Ehsaas set the policy direction, while BISP (the Benazir Income Support Programme) is the organization that actually registers applicants, runs the 8171 system, and disburses payments through Benazir Kafaalat, Benazir Nashonuma, and Taleemi Wazaif. When people search for “Ehsaas tracking” today, what they’re almost always trying to do is track a BISP payment or status through the 8171 portal.",
        ],
      },
      {
        title: "Timeline of 2026 Changes",
        paragraphs: [
          "As of August 2026, several updates have rolled out across the system rather than as a single overhaul. Here’s how they break down.",
        ],
        subsections: [
          {
            title: "Portal and interface changes",
            paragraphs: [
              "The 8171 web portal interface was updated to simplify the CNIC entry and status-check flow, reducing the number of steps between entering a CNIC and receiving a status result. The portal now displays a clearer status label — Eligible, Not Eligible, Under Process, or Blocked — instead of a generic message, which has cut down on confusion for first-time users.",
            ],
          },
          {
            title: "SMS and CNIC verification changes",
            paragraphs: [
              "Verification through the 8171 shortcode still relies on texting your CNIC number, but backend checks against the NADRA database have been tightened. This means a CNIC that doesn’t match current NADRA records — due to an expired card, a name mismatch, or an unreported change — is more likely to return an error or an “under process” result than it would have previously.",
            ],
          },
          {
            title: "NSER re-survey and eligibility criteria updates",
            paragraphs: [
              "The National Socio-Economic Registry (NSER) re-survey, which recalculates each household’s Poverty Score Card (PMT score), has continued into 2026 in various districts. Households that haven’t been re-surveyed in several years may see their eligibility status change once the resurvey reaches their area, in either direction. This is one of the most common reasons someone who was previously “Eligible” now sees a different status.",
            ],
          },
          {
            title: "Disbursement schedule and installment changes",
            paragraphs: [
              "Kafaalat’s quarterly payment cycle structure has stayed in place, but installment amounts and disbursement windows have been adjusted at points during 2026 in response to budget allocations. Beneficiaries should treat the “Under Process” status as a payment-cycle indicator, not a rejection, since installments are released in phases across different regions rather than all at once.",
            ],
          },
        ],
      },
      {
        title: "Who Is Affected — and Who Isn’t",
        paragraphs: [
          "The changes above mostly affect three groups: people whose CNIC details are outdated in NADRA’s system, households in areas where the NSER re-survey is actively taking place, and beneficiaries checking status mid-cycle before that quarter’s disbursement window opens. If your CNIC is current, your area’s re-survey hasn’t reached you yet, and you’re checking status outside a disbursement window, you’re unlikely to notice much difference from last year beyond the updated portal interface.",
        ],
      },
      {
        title: "What to Do If You’re Impacted",
        paragraphs: [
          "If your status has changed or you’re getting an unexpected result, the fastest path is to check your current status directly rather than relying on last year’s information. If your CNIC details are the issue, updating your NADRA record is the first step before anything on the BISP side will resolve. If you believe your PMT score is inaccurate after a resurvey, you can request a review at your local BISP Tehsil Office.",
        ],
        links: [{ label: "Check your current BISP account or card status", href: "/check-bisp-account-status/" }],
      },
      {
        title: "“Register” vs. “Track” — Don’t Confuse the Two",
        paragraphs: [
          "A large share of the confusion around 8171 comes from mixing up two different actions: checking your existing status versus registering as a new applicant. Texting your CNIC to 8171 or checking the web portal only tells you where you currently stand — it does not register you or update your household’s information. Registration works differently.",
        ],
        links: [{ label: "See how 8171 registration actually works", href: "/8171-register/" }],
      },
    ],
    faqs: [
      {
        question: "Is Ehsaas still active in 2026?",
        answer: "Ehsaas as a standalone branding initiative is no longer the primary public-facing name; BISP continues to run the cash transfer programs — Kafaalat, Nashonuma, and Taleemi Wazaif — that Ehsaas originally introduced, and this is what “Ehsaas tracking” searches are typically looking for as of 2026.",
      },
      {
        question: "What’s the difference between Ehsaas and BISP?",
        answer: "Ehsaas was the umbrella policy initiative, while BISP is the statutory body that implements it. BISP runs the day-to-day programs, registration, and the 8171 system that people use to check their status.",
      },
      {
        question: "How do I know if my BISP payment date changed?",
        answer: "Check your current status through the 8171 SMS shortcode or web portal, since disbursement windows are released in phases by region rather than on a single fixed date. An “Under Process” result during your area’s active cycle usually means payment hasn’t been released yet, not that it’s been denied.",
      },
      {
        question: "Is the 8171 portal down right now?",
        answer: "The portal experiences occasional downtime during high-traffic periods, particularly right after a disbursement window opens. If the portal isn’t loading, the SMS shortcode is generally a reliable fallback for a quick status check.",
      },
    ],
    officialLinks: [
      { label: "Open the official 8171 portal", href: "https://8171.bisp.gov.pk/" },
      { label: "BISP official news and announcements", href: "https://www.bisp.gov.pk/" },
    ],
  },
  {
    slug: "8171-register",
    title: "8171 Register: Does Texting Your CNIC Actually Sign You Up for BISP?",
    excerpt: "No — texting your CNIC to 8171 does not register you for BISP. It only checks your existing status. Here’s how registration actually works.",
    metaTitle: "8171 Register: Does Texting Your CNIC Sign You Up?",
    metaDescription: "Texting your CNIC to 8171 checks your BISP status — it does not register you. Learn what “8171 register” really does and how to actually register for BISP.",
    primaryCategory: "BISP Registration",
    categorySlugs: ["bisp-registration", "8171", "nser-pmt-score"],
    date: "August 16, 2026",
    lastChecked: "August 16, 2026",
    readTime: "9 min read",
    image: "/images/8171-register.jpg",
    imageAlt: "A man texting his CNIC number to the 8171 SMS shortcode to check his BISP status",
    author: contributors.saadHassan,
    reviewer: contributors.ayeshaMalik,
    sections: [
      {
        title: "What 8171 Actually Is",
        paragraphs: [
          "8171 is both an SMS shortcode and a web portal, and it exists for one purpose: letting you check where you currently stand in BISP’s records. It is not an application form, an account signup process, or a registration channel. When you text your CNIC to 8171, or enter it on the web portal, you’re querying the NSER (National Socio-Economic Registry) database to see your current status — nothing more.",
        ],
      },
      {
        title: "Checking Eligibility vs. Registering — The Core Difference",
        paragraphs: [
          "This distinction is worth repeating because it’s the source of most confusion: checking your status via 8171 tells you what BISP already has on file for you; it does not add or change anything in that file. Registering is a separate, physical process that creates or updates your household’s record in the NSER database in the first place.",
          "If you get “No Record Found,” texting or checking again won’t change anything. That result specifically means you need to go through actual registration, not a repeat status check.",
        ],
        table: {
          caption: "What an 8171 check actually returns",
          headers: ["Result you might see", "What it means"],
          rows: [
            ["Eligible", "Your household is registered and currently qualifies for a program (e.g., Kafaalat)"],
            ["Not Eligible", "Your household is registered but its PMT/poverty score doesn’t currently meet the threshold"],
            ["Under Process", "Your application or resurvey is registered but hasn’t been finalized yet"],
            ["No Record Found", "Your CNIC isn’t in the NSER database — meaning you haven’t been registered at all"],
          ],
        },
      },
      {
        title: "What Real Registration Requires",
        paragraphs: [
          "Registration happens through the NSER dynamic survey process, which is separate from 8171 entirely. It requires:",
        ],
        bullets: [
          "A visit to your nearest BISP Tehsil Office, or a visit from an NSER enumerator during an active survey round in your area",
          "Your original CNIC (and CNICs of household members where applicable)",
          "Basic household information: income sources, assets, family size, and living situation",
          "In some cases, a follow-up biometric or NADRA verification step",
        ],
      },
      {
        title: "How to Register for BISP/Ehsaas, Step by Step",
        paragraphs: [],
        bullets: [
          "Confirm you’re not already registered — check your status via 8171 first, since re-registering an existing record isn’t necessary.",
          "Locate your nearest BISP Tehsil Office, or check whether an NSER dynamic survey is currently active in your area.",
          "Gather your documents — CNIC, and CNICs for household members if you’re registering a family.",
          "Complete the household survey in person, either at the office or with a visiting enumerator.",
          "Wait for your PMT/poverty score to be calculated — this determines eligibility, and it isn’t instant.",
          "Check your status via 8171 after a few weeks to see whether your registration has moved from “Under Process” to a final result.",
        ],
      },
      {
        title: "How to Check Your Status via 8171",
        paragraphs: [
          "Once you’re registered, checking status is simple: text your CNIC number to the 8171 shortcode, or enter it on the 8171 web portal. This only confirms where your existing application or record stands.",
        ],
        links: [{ label: "Full breakdown of every BISP status result", href: "/check-bisp-account-status/" }],
      },
      {
        title: "Common Mistakes People Make",
        paragraphs: [],
        bullets: [
          "Assuming a text to 8171 counts as an application — it doesn’t; it’s a status check only.",
          "Repeating the SMS check hoping the result changes — the result won’t change unless something in your actual record changes.",
          "Registering more than once — this can create duplicate or conflicting records and slow down processing.",
          "Using an outdated or unregistered mobile number for SMS-based checks, which can cause failed or delayed responses.",
          "Not updating NADRA records first if your CNIC information is outdated, since BISP verifies against NADRA before finalizing anything.",
        ],
      },
    ],
    faqs: [
      {
        question: "How can I register my name in 8171?",
        answer: "You can’t register through 8171 itself — 8171 only checks status. Registration happens through the NSER dynamic survey, either at a BISP Tehsil Office or through a household visit by an enumerator during an active survey round.",
      },
      {
        question: "Is 8171 free to use?",
        answer: "Checking your status via the 8171 SMS shortcode is free of charge for standard network rates; it isn’t a paid service. Registration through the NSER survey process is also free — you should never be asked to pay to register or to receive a result.",
      },
      {
        question: "What does “not eligible” mean on 8171?",
        answer: "It means your household is already registered in the NSER database, but your calculated poverty score (PMT) doesn’t currently meet the threshold required for the program you’re checking.",
      },
      {
        question: "Can I register without visiting an office?",
        answer: "In most cases, no — registration requires either an in-person visit to a BISP Tehsil Office or a household visit from an NSER enumerator during an active dynamic survey in your area, since the process involves collecting household-level information that can’t be verified remotely.",
      },
    ],
    officialLinks: [
      { label: "Open the official 8171 portal", href: "https://8171.bisp.gov.pk/" },
      { label: "BISP official website", href: "https://www.bisp.gov.pk/" },
    ],
  },
  {
    slug: "bisp-login-username-password",
    title: "No Username, No Password: The Truth About Logging Into the BISP 8171 Portal",
    excerpt: "There’s no username or password for the BISP 8171 portal. Access works through your CNIC and a one-time password sent to your registered mobile number.",
    metaTitle: "BISP Login: No Username or Password Needed",
    metaDescription: "The BISP 8171 portal has no username or password login. Access works with your CNIC and an OTP sent to your registered mobile number. Here’s the truth.",
    primaryCategory: "8171 Eligibility & Status",
    categorySlugs: ["8171", "payment-check", "ehsaas-programs"],
    date: "August 16, 2026",
    lastChecked: "August 16, 2026",
    readTime: "8 min read",
    image: "/images/bisp-login.jpg",
    imageAlt: "A woman entering her CNIC and one-time password on the official BISP 8171 portal",
    author: contributors.saadHassan,
    reviewer: contributors.ayeshaMalik,
    sections: [
      {
        title: "How 8171 Portal Access Actually Works",
        paragraphs: [
          "Instead of a username-and-password account system, the 8171 portal verifies you using two pieces of information you already have: your CNIC number and a mobile-based OTP.",
        ],
        subsections: [
          {
            title: "CNIC as the identifier",
            paragraphs: [
              "Your CNIC number functions as your identifier in the system, similar to a username. BISP verifies applicant identity through NADRA’s CNIC database before returning any status or allowing portal access, which is why an outdated or mismatched CNIC record can block access even if you’re entering the correct number.",
            ],
          },
          {
            title: "OTP/SMS as the verification step",
            paragraphs: [
              "Instead of a password, the portal sends a one-time password to the mobile number registered against your CNIC. This OTP acts as your login credential for that single session — there’s nothing to remember or reset, but it also means access depends entirely on having your correct, registered mobile number available.",
            ],
          },
        ],
      },
      {
        title: "Step-by-Step: Accessing Your Status",
        paragraphs: [],
        bullets: [
          "Go to the official 8171 web portal.",
          "Enter your CNIC number (no dashes, digits only, in most versions of the portal).",
          "Submit the request and wait for an OTP to arrive via SMS on your registered mobile number.",
          "Enter the OTP when prompted.",
          "View your status result — Eligible, Not Eligible, Under Process, or Blocked.",
          "If you haven’t registered with BISP yet, none of this will return a result.",
        ],
      },
      {
        title: "Why There’s No Traditional Account System",
        paragraphs: [
          "BISP’s 8171 system was built for one-time status checks rather than ongoing account management, so a persistent username-and-password login was never part of the design. Using CNIC plus OTP instead of a stored password also reduces certain security risks — there’s no password to leak or reuse, and access is tied to a mobile number that’s already linked to your identity through NADRA.",
        ],
      },
      {
        title: "Troubleshooting Access Issues",
        paragraphs: [],
        bullets: [
          "If the OTP isn’t received — wait a few minutes for network delay, then confirm your mobile number is the one currently registered with NADRA/BISP; if it’s outdated, the OTP is going to the wrong number.",
          "If your CNIC isn’t recognized — double-check for typos, and confirm your CNIC hasn’t expired, since an expired CNIC can fail NADRA verification.",
          "If your mobile number is wrong or unregistered — you’ll need to update it through NADRA or your BISP Tehsil Office before the OTP system will work for you.",
          "If the portal times out repeatedly — this is often a server load issue rather than an account problem; try the SMS shortcode as a fallback instead of the web portal.",
        ],
      },
      {
        title: "Spotting Fake or Scam “BISP” Portals",
        paragraphs: [
          "Because BISP handles cash payments, it’s a common target for phishing attempts, and it’s worth knowing the warning signs.",
        ],
        bullets: [
          "Anyone asking for your OTP over a phone call — the real system never requires you to read your OTP aloud to a person; it’s for portal entry only.",
          "Non-official domains that resemble the real portal but use unusual URLs, extra characters, or unfamiliar extensions.",
          "Requests for payment to “activate,” “speed up,” or “unlock” your status — legitimate registration and status checks are free.",
          "Links sent via WhatsApp or SMS from unknown numbers promising to update your BISP details or increase your payment amount.",
        ],
        links: [{ label: "Review the full BISP fraud warning list", href: "/avoid-bisp-fraud/" }],
      },
    ],
    faqs: [
      {
        question: "Why can’t I log into the BISP portal?",
        answer: "Most access failures come down to three things: an unregistered or outdated mobile number, a CNIC that doesn’t match current NADRA records, or a temporary server issue during high-traffic periods. Confirming your mobile number is current with NADRA resolves the majority of these cases.",
      },
      {
        question: "Is there a BISP mobile app?",
        answer: "Access is primarily through the official web portal and the 8171 SMS shortcode; always verify any app claiming to be an official BISP app against the official portal before installing it, since fake apps have circulated in the past.",
      },
      {
        question: "What if I don’t receive the OTP?",
        answer: "Wait a few minutes in case of network delay, then confirm the mobile number linked to your CNIC is still active and correctly registered — if it’s changed, the OTP is being sent to a number you no longer have access to.",
      },
      {
        question: "Can I check status without my CNIC?",
        answer: "No — CNIC is the required identifier for both the SMS shortcode and web portal methods, since it’s how the system matches you to your NSER record.",
      },
    ],
    officialLinks: [
      { label: "Open the official 8171 portal", href: "https://8171.bisp.gov.pk/" },
      { label: "BISP fraud, fee, and helpline notice", href: "https://www.bisp.gov.pk/NewsDetail/M2MzZDg0ZjctYjBkMS00YzQ1LTkwMjQtMmVhZWFiZDgyZmI0" },
    ],
  },
  {
    slug: "benazir-form",
    title: "What Is the “Benazir Form”? Every Piece of BISP Paperwork Explained Simply",
    excerpt: "There’s no single Benazir form. It usually means the NSER registration survey — plus separate Kafaalat, Taleemi Wazaif, and Nashonuma paperwork. Each one explained.",
    metaTitle: "Benazir Form Explained: BISP Paperwork Guide",
    metaDescription: "There is no single Benazir form. It usually means the NSER survey plus separate Kafaalat, Taleemi Wazaif, and Nashonuma paperwork. Every form explained simply.",
    primaryCategory: "BISP Registration",
    categorySlugs: ["bisp-registration", "nser-pmt-score", "benazir-kafaalat"],
    date: "August 16, 2026",
    lastChecked: "August 16, 2026",
    readTime: "9 min read",
    image: "/images/benazir-form.jpg",
    imageAlt: "A BISP registration form and documents being reviewed at a tehsil office desk",
    author: contributors.saadHassan,
    reviewer: contributors.ayeshaMalik,
    sections: [
      {
        title: "There’s No Single “Benazir Form” — Here’s What People Actually Mean",
        paragraphs: [
          "The confusion is understandable — “Benazir” refers broadly to the Benazir Income Support Programme, and BISP runs several distinct programs under that name, each with its own paperwork and eligibility process. Someone searching for “the Benazir form” could mean the general household registration survey, the Kafaalat cash transfer enrollment, the Taleemi Wazaif education stipend application, or the Nashonuma nutrition program form — and each of these serves a different purpose.",
        ],
      },
      {
        title: "The Different BISP-Related Forms, Explained",
        paragraphs: [],
        table: {
          caption: "Every piece of BISP paperwork at a glance",
          headers: ["Form", "Purpose", "Who Needs It"],
          rows: [
            ["NSER / Dynamic Survey Form", "General household registration that creates or updates your record in the National Socio-Economic Registry", "Anyone not yet registered, or households needing a resurvey"],
            ["Kafaalat Enrollment Form", "Enrollment into the core BISP cash transfer program", "Households whose NSER/PMT score meets the eligibility threshold"],
            ["Taleemi Wazaif Form", "Education stipend application tied to school-going children", "Kafaalat-registered families with children enrolled in school"],
            ["Nashonuma Form", "Nutrition support for pregnant/nursing women and young children", "Eligible households with a qualifying pregnant woman, nursing mother, or child under two"],
          ],
        },
      },
      {
        title: "Each Form, Explained Simply",
        paragraphs: [],
        subsections: [
          {
            title: "NSER/Dynamic Survey form (general registration)",
            paragraphs: [
              "This is the foundational form — it’s what actually gets your household into BISP’s system in the first place. Without this, none of the program-specific forms below apply, since eligibility for all of them is calculated from your NSER/PMT score.",
            ],
          },
          {
            title: "Kafaalat enrollment form",
            paragraphs: [
              "Once your household is registered and your PMT score qualifies, Kafaalat enrollment is what activates the recurring quarterly cash transfer. This isn’t automatic — it’s a distinct step after registration, not a guaranteed follow-on.",
            ],
          },
          {
            title: "Taleemi Wazaif (education stipend) form",
            paragraphs: [
              "This applies specifically to families already receiving Kafaalat who have children of school-going age. It requires proof of school enrollment, and payments are typically tied to maintaining a minimum attendance level.",
            ],
          },
          {
            title: "Nashonuma (nutrition) form, if applicable to the reader",
            paragraphs: [
              "This targets a more specific group — pregnant women, nursing mothers, and children under two — within Kafaalat-eligible households, and is aimed at nutrition support rather than general income support.",
            ],
          },
        ],
      },
      {
        title: "Documents You’ll Need",
        paragraphs: [
          "Use this as a starting checklist before visiting a BISP Tehsil Office:",
        ],
        bullets: [
          "Original CNIC (yours, and household members’ where relevant)",
          "Form-B for children without their own CNIC",
          "Proof of household income or lack thereof, where requested",
          "Proof of school enrollment (for Taleemi Wazaif specifically)",
          "Any prior BISP reference number or NSER survey ID, if you’ve been surveyed before",
          "A working, currently active mobile number for OTP and SMS verification",
        ],
      },
      {
        title: "Where and How to Get and Submit It",
        paragraphs: [
          "All of these forms are handled at your nearest BISP Tehsil Office, or through a household visit from an NSER enumerator during an active dynamic survey round in your area. There’s no need to download or print a form yourself in advance — the office manages the paperwork directly as part of the in-person process, since it involves biometric and CNIC verification that can’t be completed remotely.",
        ],
      },
      {
        title: "Common Mistakes That Get Forms Rejected",
        paragraphs: [],
        bullets: [
          "Submitting with an expired or mismatched CNIC that fails NADRA verification",
          "Applying for a program-specific form (like Taleemi Wazaif) before Kafaalat enrollment is confirmed",
          "Providing an inactive mobile number, which blocks OTP-based follow-up communication",
          "Incomplete household information, especially around income sources or family size",
          "Assuming a status check via 8171 counts as submission of any of these forms — it doesn’t",
        ],
        links: [{ label: "See how 8171 registration actually works", href: "/8171-register/" }],
      },
    ],
    faqs: [
      {
        question: "Is the Benazir form free?",
        answer: "Yes — registration and all program-specific enrollment forms (Kafaalat, Taleemi Wazaif, Nashonuma) are free. You should never be asked to pay a fee to submit, process, or expedite any of these forms.",
      },
      {
        question: "Where do I get the Benazir form?",
        answer: "You don’t download it yourself — it’s completed in person at a BISP Tehsil Office, or through an NSER enumerator during an active household survey in your area.",
      },
      {
        question: "What documents go with the form?",
        answer: "At minimum, your original CNIC, and Form-B for any children without their own CNIC. Program-specific forms like Taleemi Wazaif also require proof of school enrollment.",
      },
      {
        question: "How long does processing take?",
        answer: "Processing time varies by program and current survey activity in your district, but PMT score calculation and enrollment confirmation typically take several weeks rather than being instant — checking your BISP status via 8171 periodically is the best way to track progress.",
      },
    ],
    officialLinks: [
      { label: "BISP official website", href: "https://www.bisp.gov.pk/" },
      { label: "Open the official 8171 portal", href: "https://8171.bisp.gov.pk/" },
    ],
  },
  {
    slug: "check-bisp-account-status",
    title: "Is Your BISP Card Active? How to Check Your Account Status in Minutes",
    excerpt: "Check your BISP card or account status in minutes: 8171 SMS, the web portal, or the BISP helpline — plus what each status result really means.",
    metaTitle: "Check BISP Account Status: SMS, Portal & Helpline",
    metaDescription: "Check your BISP account or card status in minutes via 8171 SMS, the web portal, or the BISP helpline — plus what each status result actually means.",
    primaryCategory: "Payment Check Guides",
    categorySlugs: ["payment-check", "8171", "benazir-kafaalat"],
    date: "August 16, 2026",
    lastChecked: "August 16, 2026",
    readTime: "8 min read",
    image: "/images/check-bisp-account-status.jpg",
    imageAlt: "A Pakistani woman checking her BISP account and card status result on a smartphone",
    author: contributors.saadHassan,
    reviewer: contributors.ayeshaMalik,
    sections: [
      {
        title: "Three Ways to Check Your BISP Account or Card Status",
        paragraphs: [
          "The fastest ways to check your BISP account or card status right now: text your CNIC to the 8171 SMS shortcode, enter it on the 8171 web portal, or call the BISP helpline and visit your local Tehsil Office. All three pull from the same underlying record, so pick whichever is fastest for you.",
        ],
        subsections: [
          {
            title: "Via 8171 SMS",
            paragraphs: [
              "Text your CNIC number (digits only, no dashes) to 8171. You’ll receive an automated SMS reply with your current status. This works on a basic mobile network connection and doesn’t require internet access, making it the most reliable fallback option.",
            ],
          },
          {
            title: "Via the 8171 web portal",
            paragraphs: [
              "Go to the official 8171 web portal, enter your CNIC, and complete OTP verification sent to your registered mobile number. The portal typically shows more detail than the SMS reply, including which program(s) you’re associated with.",
            ],
          },
          {
            title: "Via tehsil office or helpline",
            paragraphs: [
              "If SMS and the portal aren’t giving you a clear answer — or your CNIC/mobile number is outdated — visiting your nearest BISP Tehsil Office or calling the official helpline lets staff look up your record directly and flag any underlying issue (like a NADRA mismatch) that self-service tools can’t resolve.",
            ],
          },
        ],
      },
      {
        title: "What Each Status Message Actually Means",
        paragraphs: [
          "“Under Process” should be treated as a payment-cycle indicator, not a rejection — Kafaalat installments are released in phases by region, so this status is common and often temporary during an active disbursement window.",
        ],
        table: {
          caption: "BISP status messages and what they mean",
          headers: ["Status", "What It Means"],
          rows: [
            ["Eligible", "Your household is registered and currently qualifies for the program you’re checking"],
            ["Not Eligible", "Registered, but your PMT/poverty score doesn’t currently meet the threshold"],
            ["Under Process", "Your application, resurvey, or current payment cycle hasn’t been finalized yet"],
            ["Blocked", "Your account or card has been flagged, often for a verification mismatch or a compliance hold"],
          ],
        },
      },
      {
        title: "My Card Shows Inactive or Blocked — Now What?",
        paragraphs: [
          "A blocked or inactive card usually comes down to one of a few specific causes:",
        ],
        bullets: [
          "CNIC/NADRA mismatch — your CNIC has expired or its details no longer match NADRA’s records",
          "Biometric verification failure — repeated failed attempts at an agent point or bank branch",
          "Extended inactivity — no withdrawals over a long period can trigger an automatic hold",
          "Flagged for review — as part of routine compliance checks during an NSER resurvey cycle",
        ],
        subsections: [
          {
            title: "What to bring to your Tehsil Office if this happens to you",
            paragraphs: [
              "Take your original, current CNIC; any prior BISP reference number or SMS/portal screenshot showing the blocked status; proof of your registered mobile number, in case it needs to be updated; and be prepared for a biometric re-verification on the spot.",
            ],
          },
        ],
      },
      {
        title: "How Your NSER Score Connects to Your Status",
        paragraphs: [
          "Your status result isn’t arbitrary — it’s a direct output of your household’s PMT (poverty score) in the NSER database. A resurvey that updates your score can shift your status between checks, even if nothing changed on your end. If you’ve never been registered at all, none of the status checks above will return a meaningful result — understand how registration actually works first.",
        ],
        links: [
          { label: "See how 8171 registration actually works", href: "/8171-register/" },
          { label: "Full walkthrough of the OTP portal login", href: "/bisp-login-username-password/" },
        ],
      },
    ],
    faqs: [
      {
        question: "Why is my BISP card blocked?",
        answer: "Most blocks trace back to a CNIC/NADRA mismatch, a failed biometric verification attempt, extended inactivity, or a routine compliance flag during an active resurvey cycle. Visiting your Tehsil Office with your current CNIC is the fastest way to identify the specific cause.",
      },
      {
        question: "How often is status updated?",
        answer: "Status updates aren’t on a fixed daily schedule — they change when something in your underlying record changes, such as a resurvey result, a new disbursement cycle opening, or a manual review being completed.",
      },
      {
        question: "Can I check status for someone else?",
        answer: "You need that person’s own CNIC to run a status check, since the system matches CNIC to record directly; you can check on someone else’s behalf if you have their CNIC number and, for portal access, their registered mobile number for OTP.",
      },
      {
        question: "What does “eligible” vs. “under process” mean?",
        answer: "“Eligible” means your household currently qualifies for the program based on your latest PMT score. “Under process” means your application, resurvey, or current disbursement hasn’t been finalized yet — it’s a pending state, not a denial.",
      },
    ],
    officialLinks: [
      { label: "Open the official 8171 portal", href: "https://8171.bisp.gov.pk/" },
      { label: "BISP official website", href: "https://www.bisp.gov.pk/" },
    ],
  },
];

export const informationPages: InformationPage[] = [
  {
    slug: "about-us",
    title: "About Live Govt Schemes & Ehsaas Programs",
    eyebrow: "Our purpose",
    intro: "We translate public-service announcements into clear, practical guides and send readers back to the official source for every important action.",
    sections: [
      {
        title: "Why we built this site",
        paragraphs: [
          "Important programme information is often scattered across portals, notices, and press releases. People can lose time—or trust the wrong person—when the next step is unclear. Live Govt Schemes & Ehsaas Programs organizes that information around the questions people actually ask.",
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
          "Live Govt Schemes & Ehsaas Programs is an independent information website. It is not affiliated with BISP, NADRA, the Government of Pakistan, or any provincial department. Government names are used only to identify the programmes being discussed.",
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
          "Our guides link to government and programme websites. Their privacy practices apply after you leave Live Govt Schemes & Ehsaas Programs. Check the destination address before entering personal information.",
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
    intro: "Live Govt Schemes & Ehsaas Programs is not a government website and is not affiliated with BISP, NADRA, or any federal or provincial department.",
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
          "This website does not need your CNIC, bank account, password, PIN, biometric data, or OTP. If someone requests those details while claiming to represent Live Govt Schemes & Ehsaas Programs, stop the conversation.",
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
