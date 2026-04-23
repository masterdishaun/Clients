export type Practice = {
  slug: string;
  number: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  closing?: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  admitted: string;
  bio: string;
  photo: string;
};

export const team: TeamMember[] = [
  {
    slug: "ozzie-agho",
    name: "Ozzie Osaze Agho",
    role: "Principal Partner",
    admitted: "Admitted as a solicitor in 2005",
    bio: "Ozzie leads Bridges Solicitors as Principal Partner. He is responsible for client care across the firm and is the named contact for urgent matters and the complaints procedure.",
    photo: "/team/ozzie-agho.jpg",
  },
  {
    slug: "victor-obasogie",
    name: "Victor Bobby Obasogie",
    role: "Solicitor / Partner",
    admitted: "Admitted as a solicitor in 2016",
    bio: "Victor is a Partner at Bridges Solicitors and is responsible for handling any complaints about the Principal Partner, Mr Ozzie Agho.",
    photo: "/team/victor-obasogie.jpg",
  },
];

export const practices: Practice[] = [
  {
    slug: "crime",
    number: "01",
    title: "Crime",
    short: "Robust criminal defence at every level — from police station to the Court of Appeal.",
    description:
      "Bridges Solicitors has wealth of experience in defending clients charged with a wide range of criminal offences, including motoring offences, sexual offences, identity fraud and financial fraud. Our job is not to judge but to fight your corner. We work closely with excellent barristers who have wealth of experience in this area of law and you can be rest assured that with us, you will receive the best legal advice and service. Our solicitors are gentle enough to empathise with you and yet robustly handle your various needs.",
    bullets: ["Police station", "Magistrates Court", "Youth Court", "Crown Court", "Court of Appeal"],
    closing:
      "Contact us on 020 7732 9633 or visit our office, open Monday – Friday 9am – 5pm. In emergency contact Mr Ozzie Agho on 078 321 65488.",
  },
  {
    slug: "conveyancing",
    number: "02",
    title: "Conveyancing",
    short: "Commercial and residential property expertise — London and across the UK.",
    description:
      "Bridges Solicitors is known and established in providing a wide range of advice to clients in London, throughout the UK and abroad relating to commercial and residential property issues. Instructing specialist property solicitors results in a faster transaction, often with costs savings, as the focus is on the fundamental issues and advising clients in a commercial, practical manner.",
    bullets: [
      "All aspects of commercial leases",
      "Freehold commercial sale, purchase or re-mortgage",
      "Drafting and negotiating assignments of existing leases",
      "Short term lease or licence arrangements",
      "Residential sales, purchases and re-mortgage",
      "Transfer of equity",
    ],
    closing: "Contact us on 020 7732 9633 for an immediate quote and advice.",
  },
  {
    slug: "litigation",
    number: "03",
    title: "Litigation & Debt Recovery",
    short: "A civil litigation team equipped to resolve high-value and complex disputes.",
    description:
      "At Bridges Solicitors we have a highly experienced Civil Litigation team capable of handling a wide range of disputes, including property and construction litigation, contractual disputes, professional negligence, insurance, intellectual property, consumer protection issues, partnership and shareholder disputes, defamation and insolvency. We have good personnel, first class legal tools and resources enabling us to respond quickly to demands from our clients.",
    bullets: [
      "Landlord and tenant cases",
      "Commercial disputes",
      "Mortgage repossessions",
      "Consumer protection issues",
      "Breach of contract",
      "Money claims",
      "Debt recovery",
    ],
  },
  {
    slug: "immigration",
    number: "04",
    title: "Immigration & Nationality",
    short: "Customised immigration representation with a record-breaking success rate.",
    description:
      "Bridges Solicitors' years of experience in immigration solutions provide services in a number of areas, including all aspects of the new points-based system. We understand our clients very well, knowing that they come from diverse multicultural and multi-religious backgrounds. Our success rate at the Home Office and on appeal before the Immigration & Asylum Chambers (First-Tier and Upper Tribunal) is at an all-time record high.",
    bullets: [
      "Asylum and human rights applications",
      "Marriage / unmarried partner applications",
      "Extension and variation of leave",
      "Settlement applications",
      "Entry clearance for family members",
      "Visit / tourist / medical visas",
      "Family reunion, EU Settlement Scheme",
      "Tier 1, 2, 4 & 5 (Points Based System)",
      "Naturalisation, British nationality and citizenship",
      "UK ancestry applications",
      "Judicial Review, reconsideration, in-country and entry clearance appeals",
    ],
  },
  {
    slug: "employment-law",
    number: "05",
    title: "Employment Law",
    short: "Pragmatic representation for employees and employers, Tribunal to boardroom.",
    description:
      "Our employment law team resolves queries and disputes by the swiftest and most cost-effective means possible. We are experienced in internal disciplinary and grievance processes and ACAS procedure, and our solicitors regularly conduct their own advocacy for clients before Employment Tribunals and the Employment Appeal Tribunal.",
    bullets: [
      "Boardroom disputes",
      "Discrimination and harassment",
      "Equal pay",
      "Maternity and paternity rights",
      "Disciplinary procedures",
      "Unfair dismissal",
      "Redundancy",
      "Whistleblowing",
      "Employee transfers (TUPE)",
      "Breaches of restrictive covenants",
      "Settlement agreements (formerly compromise agreements)",
    ],
  },
  {
    slug: "family",
    number: "06",
    title: "Family Law",
    short: "Compassionate counsel through divorce, children and domestic proceedings.",
    description:
      "The breakdown of a relationship is a difficult time for you and your family. Our specialists' knowledge and compassion will help you work towards concluding a host of family issues, from divorce to emergency applications, whilst keeping stress and cost levels low. You can be sure that our team will focus on what is best for you and your family at all times.",
    bullets: [
      "Divorce and separation",
      "Pre-nuptial agreements",
      "Financial settlements on relationship breakdown",
      "Arrangements for children on relationship breakdown",
      "Protection from domestic abuse",
      "Children being taken into local authority care and adoption",
    ],
  },
  {
    slug: "landlord-tenant",
    number: "07",
    title: "Landlord & Tenant",
    short: "Impartial advice for landlords and tenants, residential or commercial.",
    description:
      "Bridges Solicitors has wealth of experience in providing legal advice on property law matters. Whether the help you require concerns a residential property or business premises, we are more than happy to assist. If you are a landlord, our experienced team will be able to advise you on your obligations to your tenants, property maintenance including planning and environment issues, and all aspects of debt recovery including property repossession. We will outline our costs to you at the outset, and the fixed fee structures available.",
    bullets: [
      "Lease extensions",
      "Landlord and tenant disputes",
      "Arrears recovery — rent & service charges",
      "Possession proceedings",
    ],
  },
  {
    slug: "road-traffic",
    number: "08",
    title: "Road Traffic Offences",
    short: "Specialist advice for motoring cases, licence retention and prosecutions.",
    description:
      "Bridges Solicitors has a wealth of experience advising motorists facing prosecution, from speeding and totting-up cases to more serious charges. We focus on protecting your licence, your livelihood, and your reputation.",
    bullets: [
      "Speeding and totting-up cases",
      "Driving without due care & attention",
      "Drink & drug driving",
      "Failing to provide a specimen",
      "Dangerous driving",
    ],
  },
];

export const fees = {
  hourly: [
    { role: "Solicitors 8+ years PQE", rate: "£250" },
    { role: "Solicitors 4+ years PQE", rate: "£200" },
    { role: "Other Solicitors / Lawyers", rate: "£150" },
    { role: "Paralegal / Trainee Solicitors / Caseworkers", rate: "£100" },
  ],
  note:
    "Hourly rates are plus VAT @ 20%, excluding disbursements (private fee paying / non legal-aid clients). In addition to time spent, disbursements such as court fees, land registry fees and barrister's fees may apply and are the responsibility of clients. A full breakdown of costs including disbursements is provided in our letter of engagement.",
};

export const firm = {
  name: "Bridges Solicitors",
  phone: "020 7732 9633",
  phoneHref: "tel:+442077329633",
  fax: "020 7732 0306",
  emergency: "078 321 65488",
  emergencyHref: "tel:+447832165488",
  email: "info@bridgessolicitors.co.uk",
  address: "Ground Floor, Ivy House, Bradgate Road, London SE6 4TT",
  hours: "Monday – Friday · 9:00am – 5:00pm",
  sra: "836528",
};

export const externalLinks = [
  { label: "Solicitors Regulation Authority", href: "https://www.sra.org.uk/" },
  { label: "Legal Ombudsman", href: "https://www.legalombudsman.org.uk/" },
  { label: "The Law Society", href: "https://www.lawsociety.org.uk/" },
  { label: "HM Courts & Tribunals Service", href: "https://www.gov.uk/government/organisations/hm-courts-and-tribunals-service" },
  { label: "HM Land Registry", href: "https://www.gov.uk/government/organisations/land-registry" },
];

export const regulators = [
  "SRA",
  "Law Society",
  "Lexcel",
  "Resolution",
  "Legal Ombudsman",
  "HMCTS",
  "HM Land Registry",
];
