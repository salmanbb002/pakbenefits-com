Ready to splice into the `articles` array in `src/data/content.ts` (place it after the
`punjab-land-record-check-guide` entry, before the closing `];`).

```ts
  {
    slug: "himmat-card-eligibility-check-guide",
    title: "How to Check Himmat Card Eligibility and Status by CNIC (2026)",
    excerpt: "Check your Himmat Card status at the official DPMIS verification page by CNIC — no login needed. See eligibility rules, PMT score, payment amount, and how to avoid fake sites.",
    metaTitle: "Himmat Card Eligibility & Status Check by CNIC (2026)",
    metaDescription: "Check your Himmat Card status at the official DPMIS portal by CNIC. See eligibility rules, PMT score, payment amount, and how to avoid fake Himmat Card sites.",
    focusKeyword: "himmat card eligibility check",
    lsiKeywords: [
      "check himmat card status by cnic",
      "himmat card check online 2026",
      "himmat card eligibility criteria",
      "himmat card balance check by cnic",
      "himmat card registration dpmis",
      "himmat card 8171",
    ],
    entities: ["DPMIS", "Punjab Social Welfare Department", "BISP", "PMT score", "Bank of Punjab", "CNIC"],
    primaryCategory: "Punjab Schemes",
    categorySlugs: ["punjab-schemes", "other-schemes"],
    date: "September 15, 2026",
    publishedDate: "September 15, 2026",
    readTime: "9 min read",
    image: "/images/bisp-cnic-status-check.jpg",
    imageAlt: "A person checking their Himmat Card eligibility status by CNIC on a phone",
    author: contributors.saadHassan,
    reviewer: contributors.ayeshaMalik,
    sections: [
      {
        title: "What Is the Himmat Card, and Who Runs It?",
        paragraphs: [
          "The Himmat Card is a quarterly cash-assistance card for persons with disabilities, issued by the Punjab Social Welfare Department and worth Rs 10,500 every three months. The department describes it on its own site as “a package of different services offered by Government to PWD's,” with the current quarterly payment as its first offering — meaning more services could be added to the same card later rather than it staying a single cash benefit indefinitely.",
          "Registration and record-keeping run through DPMIS, the Disabled Persons Management Information System, which is where a person's disability certificate, CNIC, contact details, and eligibility status all live. The card itself is limited to Punjab: only CNICs registered in Punjab qualify, which matters if you're comparing this to a federal programme.",
        ],
        subsections: [
          {
            title: "Himmat Card vs Other Punjab and BISP Support",
            paragraphs: [
              "Himmat Card is provincial and disability-specific, which sets it apart from BISP's federal Kafaalat payment and from other Punjab cards like the Kissan Card for farmers. A household can, in principle, interact with more than one of these systems, but Himmat Card explicitly excludes anyone already drawing BISP, PSPA, Zakat, or Bait ul Maal support — so it isn't a program you stack on top of those, it's built to replace overlapping payments rather than add to them.",
            ],
          },
        ],
        links: [
          { label: "what is BISP", href: "/what-is-bisp/" },
          { label: "farmer support card guide", href: "/farmer-support-card-guide/" },
        ],
      },
      {
        title: "Who Is Eligible for the Himmat Card?",
        paragraphs: [
          "Eligibility requires a Social-Welfare-certified disability assessed as “Not Fit to Work,” no government or private-sector employment, a BISP PMT score of 45 or below, and no current assistance from BISP, PSPA, Zakat, or Bait ul Maal. A child with a disability can qualify through a parent or guardian applying on their behalf, and there is no separate age cutoff written into the criteria.",
        ],
        subsections: [
          {
            title: "How the PMT Score and BISP Fit In",
            paragraphs: [
              "The Proxy Means Test score used for Himmat Card eligibility is issued by BISP, not by the Social Welfare Department itself, even though BISP recipients are excluded from the card. That is the same PMT mechanism BISP uses for its own Kafaalat eligibility — household income, assets, housing conditions, education, and employment feed into one score — so a household's existing PMT record from an NSER or BISP survey is what gets checked against the ≤45 threshold here, not a fresh disability-specific calculation.",
            ],
          },
          {
            title: "Why Applications Get Rejected",
            paragraphs: [
              "The most common rejection reasons are a PMT score above 45, current employment in the government or private sector, and already receiving BISP, PSPA, Zakat, or Bait ul Maal assistance — any one of these disqualifies an otherwise-eligible applicant. An expired CNIC or incomplete medical-board verification can also stall or reject a case that would otherwise qualify, which is a documentation problem to fix rather than a permanent disqualification.",
            ],
          },
        ],
        links: [
          { label: "NSER and PMT score explained", href: "/nser-pmt-score-check-guide/" },
          { label: "Zakat and BISP eligibility rules", href: "/zakat-and-bisp-eligibility/" },
        ],
      },
      {
        title: "How Do I Check My Himmat Card Status Online by CNIC?",
        paragraphs: [
          "Go to the official DPMIS verification page at dpmis.punjab.gov.pk, enter your 13-digit CNIC without dashes, and submit to see your current status. This check is free, requires no password or account, and takes only your CNIC number.",
        ],
        bullets: [
          "Open dpmis.punjab.gov.pk on a phone or computer.",
          "Go to the Himmat Card verification section.",
          "Type your 13-digit CNIC without dashes.",
          "Submit to view your status.",
        ],
        subsections: [
          {
            title: "Checking Without Internet Access",
            paragraphs: [
              "If you can't use the DPMIS portal, call the Himmat Card helpline at 1312 or visit your District Social Welfare Office in person with your original CNIC. Staff there can look up your status directly and tell you what, if anything, is missing from your file.",
            ],
          },
        ],
        links: [{ label: "CNIC verification across programmes", href: "/cnic-verification-guide/" }],
      },
      {
        title: "Is Himmat Card Checked Through 8171?",
        paragraphs: [
          "No — the official Punjab sources for Himmat Card name only the DPMIS verification page and the 1312 helpline, never BISP's 8171 number. One search result claims sending your CNIC to 8171 works for Himmat Card, but neither dpmis.punjab.gov.pk/faqs nor swd.punjab.gov.pk/himmatcard mentions 8171 anywhere, and 8171 is BISP's own established channel for BISP's household-eligibility check — a different agency and a different programme. Until an official Punjab notice says otherwise, treat 8171 as unrelated to your Himmat Card status and use the DPMIS portal or 1312 instead.",
        ],
        links: [{ label: "how BISP's own 8171 check works", href: "/8171/" }],
      },
      {
        title: "What Do the Status Results Mean?",
        paragraphs: [
          "A DPMIS result of “approved” or “registered” means your record exists in the system, “under review” means your data is still being processed, and “not found” usually means you haven't registered yet or your CNIC was entered incorrectly. None of these three outcomes is itself a payment date — an approved status confirms your record, but you'd still confirm the actual disbursement through the payment channels covered below.",
        ],
      },
      {
        title: "How Do I Register If I'm Not Yet in the System?",
        paragraphs: [
          "If a status check comes back “not found,” you register through the same DPMIS portal by creating an account with your CNIC, contact details, and medical-board selection, rather than through the public verification page. This is a separate flow from the CNIC-only status check above, and conflating the two is a common source of confusion in guides to this program.",
        ],
        bullets: [
          "Visit dpmis.punjab.gov.pk and select the registration option.",
          "Enter your full name, CNIC, phone number, and B-Form/NADRA details if applying for a child.",
          "Select your division, district, and medical board for the disability assessment.",
          "Set a password, complete the captcha, and submit.",
        ],
        links: [{ label: "documents needed for programme registration", href: "/documents-for-bisp-registration/" }],
      },
      {
        title: "How Much Does It Pay, and How Do I Check My Balance?",
        paragraphs: [
          "Eligible Himmat Card holders receive Rs 10,500 every three months, paid onto a Bank of Punjab ATM card rather than as a cash handout at a counter. Checking your balance is a different action from checking your eligibility status, and the two get mixed together in a lot of search results.",
          "Some sources also describe a Punjab Social Protection Authority (PSPA) balance-check route alongside the Bank of Punjab ATM option; this wasn't confirmed on either official Punjab page reviewed for this guide, so treat the ATM check as the dependable default and confirm any PSPA-branded portal through your bank card's own issuing details first.",
        ],
        table: {
          caption: "Which Himmat Card check are you actually trying to do?",
          headers: ["What you want to know", "Where to check", "What you need", "What it shows"],
          rows: [
            ["Am I eligible / registered?", "DPMIS verification page (dpmis.punjab.gov.pk)", "13-digit CNIC", "Approved, under review, or not found"],
            ["What's my card balance?", "Bank of Punjab ATM", "Physical card + PIN", "Current balance, available for withdrawal"],
            ["I can't get online", "Helpline 1312 or District Social Welfare Office", "CNIC (bring original in person)", "Status and next steps from staff"],
          ],
        },
      },
      {
        title: "What's New in the Himmat Card Program (September 2026)?",
        paragraphs: [
          "As of this update, one detail every competing guide skips: the official DPMIS FAQ page itself states the Himmat Card program was “approved until June 2025,” with an extension “pending government review” — language that has not been refreshed even as payments and new registrations continue to be discussed well into 2026. That doesn't mean the card has stopped; it means the program's current legal/funding basis, as published, is technically past its stated window, and a future funding gap is a real possibility worth watching rather than assuming away.",
          "Separately, a Phase 3 distribution of roughly 35,000 additional beneficiaries, planned for around March 2026, has been reported — following an already-completed Phase 1 (40,000) and Phase 2 (25,000). This Phase 3 figure doesn't appear on either official Punjab page checked for this guide, so treat it as a reported rollout detail to verify locally rather than a confirmed guarantee of your own inclusion.",
        ],
      },
      {
        title: "How Do I Avoid a Fake Himmat Card Site or Agent?",
        paragraphs: [
          "Stick to dpmis.punjab.gov.pk and swd.punjab.gov.pk, or the 1312 helpline, and never pay anyone claiming to speed up approval, unlock a blocked status, or release your quarterly payment early. Both checking your status and registering are free; a request for money, an OTP, or your ATM PIN over the phone is not a legitimate part of this process, regardless of how official the caller sounds.",
        ],
        links: [{ label: "how to spot a fake benefits site or agent", href: "/avoid-bisp-fraud/" }],
      },
    ],
    faqs: [
      { question: "What is the Himmat Card?", answer: "It's a Punjab Social Welfare Department card giving eligible persons with disabilities Rs 10,500 every three months, administered through the DPMIS system." },
      { question: "How do I check my Himmat Card eligibility by CNIC?", answer: "Go to dpmis.punjab.gov.pk, open the Himmat Card verification section, enter your 13-digit CNIC without dashes, and submit — no account or password is needed for this check." },
      { question: "Is Himmat Card checked through 8171?", answer: "No. Neither official Punjab source for this program mentions 8171; that number belongs to BISP's own separate household-eligibility check." },
      { question: "What PMT score do I need for the Himmat Card?", answer: "Your BISP-issued Proxy Means Test score must be 45 or below. This is the same PMT figure BISP uses for its own programmes, not a separate disability-specific score." },
      { question: "Can I get a Himmat Card if I already receive BISP or Zakat?", answer: "No. Current BISP, PSPA, Zakat, or Bait ul Maal assistance disqualifies an applicant from the Himmat Card, according to the official eligibility criteria." },
      { question: "What does “under review” mean on my status check?", answer: "It means your record has been submitted but is still being processed by the Social Welfare Department; check again after some time rather than resubmitting your CNIC repeatedly." },
      { question: "How much does the Himmat Card pay, and how is it delivered?", answer: "Rs 10,500 every three months, paid onto a Bank of Punjab ATM card rather than handed out as cash at an office." },
      { question: "How do I check my Himmat Card balance?", answer: "Use your Bank of Punjab ATM card and PIN at any Bank of Punjab ATM's balance-inquiry option; this is separate from the CNIC-based DPMIS eligibility check." },
      { question: "How do I register if my CNIC shows “not found”?", answer: "Create a new account on dpmis.punjab.gov.pk with your CNIC, contact details, and a selected medical board for your disability assessment, then submit for review." },
      { question: "Can a child with a disability get a Himmat Card?", answer: "Yes — a parent or guardian can apply and manage the card on the child's behalf; there's no separate age limit stated in the published criteria." },
      { question: "Is the Himmat Card program guaranteed to continue through 2026?", answer: "The official DPMIS FAQ describes the program as “approved until June 2025” with an extension pending review, so ongoing availability should be confirmed through official channels rather than assumed indefinitely." },
      { question: "Can I check my Himmat Card status without internet?", answer: "Yes — call the 1312 helpline or visit your District Social Welfare Office in person with your original CNIC." },
      { question: "Is there a fee to check status or register?", answer: "No. Both the status check and registration are free; never pay anyone claiming to speed up or guarantee approval." },
    ],
    officialLinks: [
      { label: "Himmat Card FAQs (DPMIS Punjab)", href: "https://dpmis.punjab.gov.pk/faqs" },
      { label: "Himmat Card — Social Welfare Department, Government of the Punjab", href: "https://swd.punjab.gov.pk/himmatcard" },
    ],
  },
```

Matches the `Article`/`ContentSection` types in `src/data/content.ts` exactly — ready to paste
as-is.
