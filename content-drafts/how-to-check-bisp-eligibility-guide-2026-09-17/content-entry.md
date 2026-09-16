Ready to splice into the `articles` array in `src/data/content.ts` (place it after the
`bisp-eligibility-criteria-guide` entry, before the closing `];`).

```ts
  {
    "slug": "how-to-check-bisp-eligibility-guide",
    "title": "How to Check BISP Eligibility: Portal, SMS & Office (2026)",
    "excerpt": "All three official BISP eligibility checks — the 8171 web portal, SMS to 8171, and a BISP Tehsil office — read the same NSER/PMT record. See what each result message means and which method to use.",
    "metaTitle": "How to Check BISP Eligibility: Portal, SMS & Office",
    "metaDescription": "Check BISP eligibility online at 8171.bisp.gov.pk, by SMS to 8171, or at a Tehsil office — see what each result message means and what to do next.",
    "focusKeyword": "how to check bisp eligibility",
    "lsiKeywords": [
      "check bisp eligibility online",
      "bisp eligibility check by sms",
      "8171 web portal eligibility check",
      "bisp eligibility check by cnic",
      "what does bisp survey required mean",
      "bisp no record found meaning"
    ],
    "entities": [
      "BISP",
      "8171 web portal",
      "CNIC",
      "NADRA",
      "NSER",
      "PMT Score"
    ],
    "primaryCategory": "8171 Check",
    "categorySlugs": [
      "8171",
      "bisp-registration",
      "nser-pmt-score"
    ],
    "date": "September 17, 2026",
    "publishedDate": "September 17, 2026",
    "readTime": "8 min read",
    "image": "/images/8171-number-verification.jpg",
    "imageAlt": "A person checking their BISP eligibility status on a mobile phone",
    "author": contributors.saadHassan,
    "reviewer": contributors.ayeshaMalik,
    "sections": [
      {
        "title": "Three Official Ways to Check Your BISP Eligibility",
        "paragraphs": [
          "You can check BISP eligibility three official ways: online at 8171.bisp.gov.pk by entering your 13-digit CNIC, by sending your CNIC via SMS to 8171, or in person at a BISP Tehsil office — all three query the same NSER record and PMT score and return the same underlying status."
        ]
      },
      {
        "title": "Check BISP Eligibility Online at the 8171 Portal",
        "paragraphs": [
          "The 8171 web portal is the fastest of the three official methods, returning a result in seconds once you submit the form correctly. Open the portal at a trusted address, type your 13-digit CNIC without dashes into the entry field, complete the image code (captcha), and submit.",
          "The response draws on NADRA's identity record to match your CNIC and on your household's NSER data to return an eligibility status — the portal itself doesn't store a separate \"yes/no\" list; it looks up whatever record already exists for that CNIC. If you've recently gotten a new CNIC or corrected a NADRA record, allow a short delay before the portal reflects it."
        ]
      },
      {
        "title": "Check BISP Eligibility by SMS to 8171",
        "paragraphs": [
          "Sending your CNIC by SMS works exactly like the portal but needs no internet connection or smartphone. Type your 13-digit CNIC without spaces or dashes and send it as a plain text message to the short code 8171 from your own registered mobile number.",
          "The service is free on Pakistan's major networks — Jazz, Telenor, Ufone, and Zong — and a reply typically arrives within a few minutes. Because the SMS route queries the same NSER/PMT record as the web portal, expect the same status either way; if the two ever disagree, that's a sign to visit a Tehsil office rather than trust one over the other."
        ]
      },
      {
        "title": "Check BISP Eligibility In Person at a Tehsil Office",
        "paragraphs": [
          "A BISP Tehsil office exists specifically for cases the portal and SMS can't resolve on their own — a missing record, a mismatched CNIC, or a status that needs a fresh survey. Staff there can look up your household directly against the NSER database and tell you which step, if any, comes next.",
          "This route takes longer than SMS or the portal, so it's best treated as the fallback when the two remote methods return \"no record\" or \"survey required\" rather than a clear yes or no. Bring your original CNIC; a photocopy alone usually isn't enough for staff to act on your case."
        ]
      },
      {
        "title": "What Each 8171 Result Message Means",
        "paragraphs": [
          "The three methods above all return one of a handful of standard messages, and knowing what each one actually means saves a wasted trip."
        ],
        "table": {
          "headers": ["Result message", "What it means", "What to do"],
          "rows": [
            ["Eligible / registered under a programme", "Your household's PMT score falls at or under BISP's current cutoff", "Follow the message's instructions for collecting your payment"],
            ["Not eligible", "Your recorded PMT score is above the cutoff", "See the eligibility criteria that decide this, not a wrong CNIC entry"],
            ["No record found", "No NSER survey has ever been completed for this CNIC/household", "Visit a Tehsil office to register, or check our registration guide"],
            ["Survey required / verification pending", "A record exists but needs an update or fresh visit", "Visit a Tehsil office with your CNIC; don't resubmit the same check repeatedly"],
            ["Under review", "A previous request or complaint is still being processed", "Wait for the stated timeframe before checking again"]
          ]
        }
      },
      {
        "title": "Portal vs. SMS vs. Office: Which Should You Use?",
        "paragraphs": [
          "Start with the portal or SMS — they cost nothing and take minutes. Only go to the Tehsil office once one of those two comes back with a result that needs a human to resolve."
        ],
        "table": {
          "headers": ["Method", "Needs", "Speed", "Best for"],
          "rows": [
            ["8171 web portal", "Internet access, a device", "Seconds", "Anyone with internet who wants the fastest check"],
            ["SMS to 8171", "Any basic mobile phone, no internet", "A few minutes", "Rural areas or no internet access"],
            ["BISP Tehsil office", "A trip in person, original CNIC", "Same visit, longer wait", "\"No record\" or \"survey required\" results the remote methods can't fix"]
          ]
        }
      },
      {
        "title": "Common Problems When Checking Eligibility",
        "paragraphs": [
          "Most failed checks come down to a handful of repeatable causes rather than a broken system."
        ],
        "bullets": [
          "Not receiving the SMS reply — confirm you sent the CNIC as digits only, with no dashes or spaces, from your own number; some networks briefly delay bulk short-code replies during high traffic.",
          "Portal not loading or timing out — this is usually server load during peak hours rather than your own connection; wait and retry, and always confirm you're on the genuine bisp.gov.pk domain before trying an alternative link.",
          "CNIC entered but no result appears — recheck for a typo in the 13 digits before assuming your household has no record; a single digit error returns \"not found\" rather than an error message."
        ]
      },
      {
        "title": "Who Actually Qualifies (and Where to Read the Full Criteria)",
        "paragraphs": [
          "Checking your status tells you the outcome, not the reasoning behind it. BISP eligibility itself runs on a household's PMT score from its NSER survey, compared against BISP's approved cutoff — not a self-reported income figure. Our dedicated guide to BISP eligibility criteria breaks down the cutoff, the common disqualifying factors, and the disability and transgender exceptions in full; this guide focuses on the checking process itself rather than repeating that here.",
          "If you haven't had an NSER survey completed yet, a \"no record found\" result is expected rather than a sign of ineligibility — see our BISP registration guide for how that record gets created."
        ],
        "links": [
          { "label": "BISP eligibility criteria: who actually qualifies", "href": "/bisp-eligibility-criteria-guide/" },
          { "label": "How to register for BISP online", "href": "/how-to-register-bisp-online-guide/" }
        ]
      },
      {
        "title": "Avoiding Fake BISP Eligibility Checkers",
        "paragraphs": [
          "BISP has repeatedly warned that 8171 is its only official number for this service, and that no legitimate check ever asks for an OTP, a bank PIN, or a \"processing fee\" to reveal a result. A message from any other short code claiming to check or unlock your BISP status should be treated as fraudulent regardless of how official it looks.",
          "Before entering a CNIC on any website, confirm the address is the genuine bisp.gov.pk domain rather than a copycat with a similar name. The check itself — by portal, SMS, or in person — is always free."
        ]
      }
    ],
    "faqs": [
      { "question": "How do I check my BISP 8171 eligibility?", "answer": "Send your 13-digit CNIC to 8171 by SMS, enter it at the 8171 web portal, or visit a BISP Tehsil office in person — all three return the same status." },
      { "question": "Can I check BISP eligibility without internet?", "answer": "Yes. Send your CNIC as a plain SMS to 8171 from your own mobile number; no data connection or smartphone is required." },
      { "question": "Is checking BISP eligibility free?", "answer": "Yes, on all three official methods. Standard SMS charges from your own network may apply to the text message itself, but the service is free." },
      { "question": "What does \"survey required\" mean when I check my status?", "answer": "It means a record exists for your household, but BISP needs to verify or update it — usually through a fresh Tehsil office visit — before a final eligibility status can be confirmed." },
      { "question": "What does \"no record found\" mean?", "answer": "No NSER survey has ever been completed for that CNIC, so there's nothing yet to check for eligibility against; you'd need to register first." },
      { "question": "Why do I get different results from the portal and SMS?", "answer": "Both draw on the same underlying NSER/PMT record, so a genuine difference is rare — if it happens, treat it as a sign to confirm your status in person at a Tehsil office rather than trusting one channel over the other." },
      { "question": "How long does an SMS eligibility reply take?", "answer": "Typically a few minutes, though it can take longer during high-traffic periods after a public announcement." },
      { "question": "Do I need my original CNIC to check online or by SMS?", "answer": "No — you only need to know the 13-digit number. An original CNIC is only needed if you visit a Tehsil office in person." },
      { "question": "Can someone else check my eligibility on my behalf?", "answer": "The portal and SMS only need the CNIC number, so technically yes, but BISP advises against sharing your CNIC with unofficial helpers given the scam risk around this service." },
      { "question": "What if the 8171 portal shows an error or won't load?", "answer": "It's usually temporary server load; wait and try again later. Confirm you're using the genuine bisp.gov.pk address rather than an unofficial copy before assuming your CNIC is the problem." },
      { "question": "Does checking my eligibility affect my application or record in any way?", "answer": "No — checking your status is a read-only lookup against your existing NSER record; it doesn't submit a new application or change your data." },
      { "question": "How do I actually find out why I'm not eligible?", "answer": "The check tells you the outcome, not the reason. See our eligibility criteria guide for the PMT cutoff and common disqualifying factors that decide the \"why.\"" }
    ],
    "officialLinks": [
      { "label": "Open the official 8171 portal", "href": "https://8171.bisp.gov.pk/" },
      { "label": "Visit the official BISP website", "href": "https://www.bisp.gov.pk/" }
    ]
  },
```
