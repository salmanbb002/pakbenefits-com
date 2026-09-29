import fs from 'fs';
import path from 'path';

const contentFilePath = path.resolve('src/data/content.ts');
let content = fs.readFileSync(contentFilePath, 'utf8');

const slug = "cm-punjab-youth-games-2026-online-registration";

if (content.includes(`slug: "${slug}"`)) {
  console.log("Article already exists in content.ts!");
  process.exit(0);
}

const articleObjectString = `  {
    slug: "cm-punjab-youth-games-2026-online-registration",
    title: "CM Punjab Youth Games 2026 – Online Registration, Eligibility, Sports & Cash Prizes Guide",
    excerpt: "Complete guide to the CM Punjab Youth Games 2026 organized by Sports Board Punjab (youthgames.punjab.gov.pk). Explore age criteria (U-16, U-19, U-25), 19 sports disciplines, online registration steps, and Rs 500M prize pool.",
    showExcerpt: true,
    metaTitle: "CM Punjab Youth Games 2026: Online Registration & Sports List",
    metaDescription: "Apply online for CM Punjab Youth Games 2026 at youthgames.punjab.gov.pk. Check age criteria (U-16, U-19, U-25), 19 sports disciplines, and Rs 500M prize pool.",
    focusKeyword: "cm punjab youth games 2026",
    lsiKeywords: [
      "youth games punjab gov pk online registration",
      "cm punjab youth games eligibility criteria age limit",
      "punjab youth games sports disciplines list",
      "punjab youth games cash prize breakdown",
      "sports board punjab khelta punjab youth games 2026"
    ],
    entities: [
      "CM Punjab Youth Games 2026",
      "Sports Board Punjab",
      "youthgames.punjab.gov.pk",
      "Under-16 School Level",
      "Under-19 College Level",
      "Under-25 University Level",
      "19 Sports Disciplines",
      "Rs 500 Million Prize Pool",
      "Khelta Punjab",
      "Youth Affairs and Sports Department"
    ],
    primaryCategory: "punjab-schemes",
    categorySlugs: [
      "punjab-schemes",
      "other-schemes"
    ],
    date: "September 29, 2026",
    publishedDate: "September 29, 2026",
    lastChecked: "September 29, 2026",
    readTime: "8 min read",
    image: "/images/cm-punjab-youth-games-2026.jpg",
    imageAlt: "CM Punjab Youth Games 2026 Online Registration Eligibility Sports and Prizes Guide",
    author: contributors.muhammadSalman,
    officialLinks: [
      { label: "Youth Games Portal", href: "https://youthgames.punjab.gov.pk/" },
      { label: "Sports Board Punjab", href: "https://sportsboard.punjab.gov.pk/" }
    ],
    sections: [
      {
        title: "What are the CM Punjab Youth Games 2026?",
        paragraphs: [
          "The CM Punjab Youth Games 2026 is a flagship sports initiative launched by Chief Minister Maryam Nawaz Sharif to discover, nurture, and elevate athletic talent across Punjab. Executed under the umbrella of the Khelta Punjab vision, the tournament engages millions of students across all 36 districts and 9 administrative divisions.",
          "By establishing structured grassroots athletic competitions, the Punjab Government seeks to steer youth toward positive physical activities while preparing promising competitors for national and international arenas. The games bridge public and private educational sectors, ensuring equal sporting access regardless of socio-economic background."
        ],
        subsections: [
          {
            title: "Khelta Punjab Vision and Sports Board Punjab (SBP) Mandate",
            paragraphs: [
              "The Sports Board Punjab (SBP) and the Youth Affairs and Sports Department Punjab jointly administer the tournament's technical operations. Under the directive of Chief Minister Maryam Nawaz Sharif, the board modernized competition logistics by deploying a centralized digital portal (youthgames.punjab.gov.pk).",
              "This digital ecosystem automates registration, validates student documents via NADRA databases, assigns neutral national referees, and publishes digitized trial results. Unlike traditional ad-hoc athletic trials, every enrolled participant receives an official registration credential that tracks their tournament statistics and performance progression."
            ]
          },
          {
            title: "Tournament Structure: From Tehsil Grounds to Provincial Championships",
            paragraphs: [
              "The championship follows a decentralized five-tier pyramid structure designed to scout authentic grassroots athletes across the province:"
            ],
            bullets: [
              "Union Council & Tehsil Trials: Initial screening and trials organized across rural and urban tehsil sports complexes.",
              "District Championships: Tehsil winners convene at district headquarters to form composite district teams.",
              "Divisional Playoffs: The 9 administrative divisions of Punjab (Lahore, Rawalpindi, Faisalabad, Multan, Gujranwala, Bahawalpur, Sargodha, Sahiwal, and Dera Ghazi Khan) compete for inter-divisional supremacy.",
              "Provincial Grand Finale: Top-seeded athletes and teams assemble in Lahore's premier sporting venues (including Nishter Park Sports Complex and Punjab Stadium) for the televised championship finals."
            ]
          }
        ]
      },
      {
        title: "Competition Levels & Age Eligibility (U-16, U-19 & U-25)",
        paragraphs: [
          "To guarantee fair play and eliminate age fraud, the Sports Board Punjab stratifies the games into three strict age-defined tiers. Every competitor's date of birth is verified against NADRA records and institutional admission registers.",
          "The matrix below outlines eligibility parameters across each educational level for 2026:"
        ],
        table: {
          caption: "CM Punjab Youth Games 2026 Competition Tiers and Eligibility Matrix",
          headers: ["Competition Tier", "Age Bracket", "Eligible Institutions", "Sports Disciplines", "Document Proof"],
          rows: [
            ["School Level", "Under-16 (U-16)", "Public & Private Middle/High Schools", "6 Disciplines", "NADRA B-Form + School ID"],
            ["College Level", "Under-19 (U-19)", "Intermediate Colleges & Higher Secondary Schools", "14 Disciplines", "CNIC / Smart Card + College Card"],
            ["University Level", "Under-25 (U-25)", "HEC-Recognized Universities & Degree Colleges", "19 Disciplines", "CNIC + Valid University Enrollment Slip"],
            ["Madaris & Non-Formal", "Stratified by Age", "Registered Deeni Madaris & Literacy Centers", "Level-Appropriate Disciplines", "NADRA B-Form / CNIC + Sanad Slip"],
            ["Special Athletes", "Open Age Brackets", "Special Education Centres & Para-Athletes", "Adapted Paralympic Disciplines", "Disability Certificate / Special CNIC"]
          ]
        },
        subsections: [
          {
            title: "School Level Category (Under-16)",
            paragraphs: [
              "The Under-16 division targets emerging school students born on or after the specified cutoff date. Athletes in this category represent their respective government high schools, comprehensive schools, or registered private educational institutions. Events at this tier emphasize core physical fundamentals, hand-eye coordination, and athletics."
            ]
          },
          {
            title: "College Level Category (Under-19)",
            paragraphs: [
              "The Under-19 bracket caters to intermediate students enrolled in FA, FSc, ICS, I.Com, and A-Level streams across public colleges and private higher secondary campuses. Competition at the college level intensifies, incorporating advanced tactical coaching and team disciplines."
            ]
          },
          {
            title: "University & Degree College Category (Under-25)",
            paragraphs: [
              "The premier Under-25 division showcases top-tier collegiate talent from public sector universities, sub-campuses, and private degree-awarding institutions. Students enrolled in undergraduate and postgraduate programs compete under full national federation rules, serving as prime scouting grounds for Pakistan's national sports federations."
            ]
          },
          {
            title: "Special Inclusions: Madaris, TEVTA & Para-Athletes",
            paragraphs: [
              "Reflecting a commitment to complete social inclusion, the Punjab Government introduced dedicated quotas and competitive pathways for diverse student groups:",
              "Deeni Madaris (Religious Seminaries): Seminary students compete in mainstream football, volleyball, athletics, and tug-of-war tournaments under their regional Wafaq boards.",
              "TEVTA Technical Institutes: Apprentices and vocational trainees enrolled in technical colleges have designated tournament brackets.",
              "Athletes with Disabilities (Special Education): Tailored para-sports events (wheelchair racing, blind cricket, adaptive table tennis) feature dedicated cash awards matching mainstream prize tiers.",
              "Students from these sectors can also explore academic and assistive grants through the CM Punjab Himmat Card and CM Punjab Honhaar Scholarship Program."
            ],
            links: [
              { label: "CM Punjab Himmat Card", href: "/cm-punjab-himmat-card-online-apply-2026/" },
              { label: "CM Punjab Honhaar Scholarship Program", href: "/cm-punjab-honhaar-scholarship-program-2026/" }
            ]
          }
        ]
      },
      {
        title: "Level-by-Level Sports Disciplines Breakdown",
        paragraphs: [
          "The CM Punjab Youth Games 2026 feature a progressive menu of 19 sports disciplines, scaled proportionally across educational tiers to match facilities and physical maturity:"
        ],
        subsections: [
          {
            title: "1. School Level (6 Core Disciplines)",
            paragraphs: [
              "School athletes compete across 6 high-engagement disciplines designed for young competitors:"
            ],
            bullets: [
              "Athletics: 100m sprint, 200m sprint, 400m race, long jump, and 4x100m relay.",
              "Football: 7-a-side and 11-a-side junior inter-school tournaments.",
              "Cricket: Tape-ball and hard-ball inter-school matches.",
              "Badminton: Singles and doubles knockouts.",
              "Table Tennis: Junior boys and girls singles championships.",
              "Volleyball: Traditional court volleyball for school squads."
            ]
          },
          {
            title: "2. College Level (14 Expanded Disciplines)",
            paragraphs: [
              "College athletes compete in all 6 school disciplines plus 8 additional sports disciplines:"
            ],
            bullets: [
              "Basketball: Full-court inter-college tournament.",
              "Hockey: National sport revival matches on synthetic astroturf grounds.",
              "Kabaddi: Circle-style and Asian-style traditional matches.",
              "Weightlifting & Powerlifting: Categorized by standardized bodyweight classes.",
              "Wrestling (Dangal / Freestyle): Traditional mat wrestling for young grapplers.",
              "Taekwondo: Sparring (Kyorugi) and forms (Poomsae).",
              "Karate: WKF-rules kata and kumite contests.",
              "Tug of War: Inter-institutional physical strength competitions."
            ]
          },
          {
            title: "3. University Level (All 19 Official Disciplines)",
            paragraphs: [
              "University athletes compete across the complete 19-discipline roster, incorporating Olympic team and individual sports:",
              "Additional collegiate disciplines include Handball, Lawn Tennis, Cycling road and endurance trials, Amateur Boxing under Olympic weight divisions, and Archery & Target Shooting.",
              "University students actively participating in these sports disciplines can complement their academic routine by checking eligibility for the CM Punjab Free Laptop Scheme or mobility support under the Pink Scooty Scheme 2026."
            ],
            links: [
              { label: "CM Punjab Free Laptop Scheme", href: "/cm-punjab-free-laptop-scheme-2026-online-apply/" },
              { label: "Pink Scooty Scheme 2026", href: "/pink-scooty-scheme-2026-registration-eligibility-documents-balloting/" }
            ]
          }
        ]
      },
      {
        title: "Required Documents for Online Registration",
        paragraphs: [
          "Before initiating registration on the sports board portal, athletes and institutional coordinators should gather the following authentic credentials:"
        ],
        bullets: [
          "NADRA Identity Document: Original Computerized NADRA B-Form for Under-16 students, or valid CNIC/Smart Card for Under-19 and Under-25 athletes.",
          "Institutional Proof: Active Student ID card issued by the respective school, college, university, or madrasa, alongside official admission confirmation slip.",
          "Passport-Sized Photograph: Digital color photograph with blue or white background (maximum file size 500 KB, JPG/PNG format).",
          "Punjab Domicile Proof: Candidate or father/guardian Punjab domicile certificate (or verified permanent residence in a Punjab district).",
          "Medical Fitness Declaration: Basic physical fitness certificate or signed parental consent form (mandatory for contact sports such as boxing, wrestling, and martial arts)."
        ]
      },
      {
        title: "How to Register Online for CM Punjab Youth Games 2026 Step-by-Step (youthgames.punjab.gov.pk)",
        paragraphs: [
          "Online registration for the CM Punjab Youth Games 2026 is conducted through the Sports Board Punjab's centralized cloud portal. The process takes less than 10 minutes to complete:"
        ],
        subsections: [
          {
            title: "Step 1: Institutional Portal Access & Account Setup",
            paragraphs: [
              "Launch an updated web browser and visit the official portal: youthgames.punjab.gov.pk. On the homepage, select your registration category: School Registration, College Registration, or University Registration.",
              "School and college sports masters register their educational institution using their official EMIS, BISE, or HED institutional code. Individual student athletes can also register directly under their institution by selecting their district, tehsil, and affiliated school or college from the dropdown menu."
            ]
          },
          {
            title: "Step 2: Athlete Profile Creation & CNIC/B-Form Verification",
            paragraphs: [
              "Enter your 13-digit NADRA CNIC or B-Form number without dashes (e.g., 3520112345671). The portal interfaces with digital verification services to ensure unique profile creation.",
              "Input your full legal name, father's name, date of birth, and gender as recorded with NADRA. Provide an active mobile phone number to receive SMS alerts regarding trial dates, venues, and team rosters."
            ]
          },
          {
            title: "Step 3: Sport Discipline Selection & Team Roster Submission",
            paragraphs: [
              "Choose your desired sporting category from the 19 available sports disciplines (e.g., Athletics, Football, Badminton, Cricket). Select your specific event or playing role (e.g., 100m sprint, goalkeeper, middleweight wrestling).",
              "If applying as part of an institutional team (e.g., football 11-member squad), the team captain or institutional sports director adds all participating member CNICs under the unified team profile."
            ]
          },
          {
            title: "Step 4: Verification by Head of Institution & Download Registration Slip",
            paragraphs: [
              "Upload your clear passport-sized photo and scanned copy of your student ID card or B-Form. Carefully review the entered data to prevent disqualification during in-person trials, then click Submit Application.",
              "The portal instantly generates an official CM Punjab Youth Games 2026 Registration Slip featuring a unique QR tracking code. Print two copies and have them stamped by your school headmaster, college principal, or university sports director."
            ]
          }
        ]
      },
      {
        title: "Rs 500 Million Cash Prize Pool & Athlete Incentives",
        paragraphs: [
          "Chief Minister Maryam Nawaz Sharif allocated an unprecedented Rs 500 Million (50 Crore PKR) cumulative prize and incentive fund for the 2026 Youth Games. This purse represents the largest financial disbursement in Pakistan's provincial sports history.",
          "The prize distribution spans all tournament stages, rewarding grassroots participants alongside provincial medal winners:"
        ],
        bullets: [
          "Provincial Champions (Gold Medalists): Lucrative cash prizes ranging from Rs 500,000 to Rs 2,500,000 for winning teams, plus Rs 100,000 to Rs 300,000 for individual event gold medalists.",
          "Runners-Up (Silver Medalists): Substantial cash grants alongside commemorative plaques and professional equipment vouchers.",
          "Third Place (Bronze Medalists): Cash prizes and merit certificates recognized by Punjab's higher education boards for sports quota admissions.",
          "High-Performance Sports Scholarships: Top 500 emerging athletes scouted during the championship earn monthly training stipends, specialized nutritional allowances, and professional coaching at Sports Board Punjab high-performance centres.",
          "Complimentary Sports Kits: Every qualified athlete advancing to district and divisional rounds receives official tracksuits, specialized playing kits, footwear, and protective sports gear free of charge."
        ]
      },
      {
        title: "Tournament Schedule, Trial Dates & Selection Process",
        paragraphs: [
          "The Sports Board Punjab executes the games according to a phased seasonal calendar across all 36 districts:"
        ],
        table: {
          caption: "CM Punjab Youth Games 2026 Phased Tournament Calendar",
          headers: ["Tournament Phase", "Activity & Milestones", "Venue / Location", "Administrative Oversight"],
          rows: [
            ["Phase 1", "Online Registration & Roster Verification", "youthgames.punjab.gov.pk", "PITB & SBP Technical Committee"],
            ["Phase 2", "Tehsil Ground Trials & Talent Scouting", "Tehsil Sports Complexes & School Grounds", "Tehsil Sports Officers (TSOs)"],
            ["Phase 3", "District Championships & Squad Finalization", "District Sports Gymnasiums", "District Sports Officers (DSOs)"],
            ["Phase 4", "Divisional Championships", "Divisional Headquarters (e.g., Nishtar Park)", "Divisional Commissioners & SBP Directors"],
            ["Phase 5", "Provincial Grand Finale & Closing Ceremony", "Punjab Stadium & Nishtar Sports Complex Lahore", "Chief Minister Punjab & Sports Minister"]
          ]
        },
        subsections: [
          {
            title: "Transparent Selection & Anti-Doping Protocols",
            paragraphs: [
              "To guarantee genuine merit, all trials feature biometric attendance where participants authenticate using thumbprints or facial scans before entering playing arenas.",
              "In-person NADRA verification desks confirm athlete ages at district arenas, disqualifying over-age competitors immediately. Furthermore, qualified match officials from certified sports associations referee all matches, and SBP medical officers enforce strict anti-doping regulations."
            ]
          }
        ]
      }
    ],
    faqs: [
      {
        question: "What is the official website for CM Punjab Youth Games 2026 registration?",
        answer: "The official website for CM Punjab Youth Games 2026 registration is youthgames.punjab.gov.pk, managed directly by Sports Board Punjab."
      },
      {
        question: "Who is eligible to participate in the CM Punjab Youth Games 2026?",
        answer: "Regular male and female students enrolled in public and private schools, colleges, universities, TEVTA institutes, and registered madaris across Punjab are eligible to participate."
      },
      {
        question: "What are the age limits for School, College, and University levels?",
        answer: "The age limits are Under-16 (U-16) for school students, Under-19 (U-19) for college students, and Under-25 (U-25) for university and degree college athletes."
      },
      {
        question: "Can private school and college students participate in the games?",
        answer: "Yes, students enrolled in registered private schools, private degree colleges, and chartered private universities can participate alongside public institution athletes."
      },
      {
        question: "Is there any registration fee for the CM Punjab Youth Games?",
        answer: "No, registration for the CM Punjab Youth Games 2026 is 100% free with zero fees charged by the Punjab Government or Sports Board Punjab."
      },
      {
        question: "How many sports disciplines are included in the Punjab Youth Games 2026?",
        answer: "There are 19 official sports disciplines in total, including 6 disciplines for school students, 14 for college athletes, and all 19 for university participants."
      },
      {
        question: "Can students from religious seminaries (Madaris) take part?",
        answer: "Yes, students from registered religious seminaries (Deeni Madaris) are fully eligible to compete in designated individual and team sports disciplines."
      },
      {
        question: "What documents are required to register for the youth games?",
        answer: "Required documents include a valid NADRA B-Form or CNIC, active student ID card or institutional enrollment proof, a passport-sized photograph, and Punjab domicile."
      },
      {
        question: "What is the total cash prize pool for the CM Punjab Youth Games?",
        answer: "The total cumulative prize pool allocated by Chief Minister Maryam Nawaz Sharif for the 2026 Youth Games is Rs 500 Million (50 Crore PKR)."
      },
      {
        question: "How can athletes check their trial schedule and match fixtures?",
        answer: "Athletes can check trial schedules, match fixtures, and ground locations by logging into youthgames.punjab.gov.pk with their CNIC or B-Form number."
      }
    ]
  },
`;

const articlesMarker = 'export const articles: Article[] = [';
const insertPos = content.indexOf(articlesMarker);

if (insertPos === -1) {
  console.error("Could not find articles marker in content.ts");
  process.exit(1);
}

const updatedContent = content.slice(0, insertPos + articlesMarker.length) + "\n" + articleObjectString + content.slice(insertPos + articlesMarker.length);

fs.writeFileSync(contentFilePath, updatedContent, 'utf8');
console.log("Successfully inserted CM Punjab Youth Games 2026 article into content.ts!");
