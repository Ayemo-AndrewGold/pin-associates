export interface CourseLevel {
  name: string;
  papers: string[];
  duration: string;
}

export interface CourseFee {
  level: string;
  amount: string;
}

export interface CourseData {
  id: string;
  title: string;
  fullName: string;
  tagline: string;
  icon: string;
  overview: string;
  who: string[];
  levels: CourseLevel[];
  outcomes: string[];
  fees: CourseFee[];
  mode: string;
  badge: string;
  faq: { q: string; a: string }[];
}

export const courses: Record<string, CourseData> = {
  ican: {
    id: "ican",
    title: "ICAN",
    fullName: "Institute of Chartered Accountants of Nigeria",
    tagline: "Become a Chartered Accountant. Nigeria's Most Respected Accounting Qualification.",
    icon: "🏛️",
    overview:
      "The ICAN qualification is the gold standard of professional accountancy in Nigeria. Administered by the Institute of Chartered Accountants of Nigeria, it leads to the designatory letters ACA (Associate) and FCA (Fellow) upon full qualification. PIN has prepared ICAN students since 2009, achieving an 87% first-attempt pass rate across all levels.",
    who: [
      "University graduates with a minimum of five O'Level credits including Mathematics and English",
      "HND holders in Accounting, Finance, Business, or related disciplines",
      "Degree holders in any discipline seeking a professional accounting qualification",
      "ATS holders seeking to progress to the ICAN chartered qualification",
      "Working professionals in finance, audit, and business",
    ],
    levels: [
      {
        name: "Foundation Level",
        papers: [
          "Quantitative Techniques in Business",
          "Business & Finance",
          "Financial Accounting",
          "Business Law",
          "Management Information",
        ],
        duration: "6–12 months",
      },
      {
        name: "Skills Level",
        papers: [
          "Financial Reporting",
          "Audit & Assurance",
          "Taxation",
          "Performance Management",
          "Business Strategy & Risk",
        ],
        duration: "8–14 months",
      },
      {
        name: "Professional Level",
        papers: [
          "Corporate Reporting",
          "Advanced Taxation",
          "Advanced Audit & Assurance",
          "Case Study",
        ],
        duration: "8–14 months",
      },
    ],
    outcomes: [
      "Associate Chartered Accountant (ACA) designation",
      "Eligibility for Senior Finance, Audit, and CFO roles",
      "International reciprocity with ICAEW and other IFAC bodies",
      "Gateway to ICAN Fellowship (FCA)",
    ],
    fees: [
      { level: "Foundation Level", amount: "₦85,000 per diet" },
      { level: "Skills Level", amount: "₦95,000 per diet" },
      { level: "Professional Level", amount: "₦110,000 per diet" },
    ],
    mode: "Weekday, Weekend, and Online classes available",
    badge: "Most Popular",
    faq: [
      { q: "How long does ICAN take to complete?", a: "Typically 3–5 years depending on exemptions, study pace, and examination performance. Foundation-to-Professional completion in 3 years is achievable with consistent study." },
      { q: "Can I claim exemptions based on my degree?", a: "Yes. ICAN grants exemptions to holders of approved degrees in accounting and related fields. Our admissions team will assess your transcript and advise on exemption entitlements." },
      { q: "When are ICAN exams held?", a: "ICAN examinations are held twice yearly — typically in May/June and November/December. Specific dates are published by ICAN on their official website." },
    ],
  },

  acca: {
    id: "acca",
    title: "ACCA",
    fullName: "Association of Chartered Certified Accountants",
    tagline: "A Global Accounting Qualification Recognised in 180+ Countries.",
    icon: "🌍",
    overview:
      "ACCA is one of the world's most internationally recognised accountancy qualifications, accepted by employers in over 180 countries. The ACCA qualification equips professionals with the financial, business, and ethical skills needed to build a global career. PIN's ACCA programme covers all levels with tutors who are qualified ACCA members with Big Four experience.",
    who: [
      "University graduates with strong academic backgrounds in any discipline",
      "Accounting and finance degree holders seeking international qualification",
      "Working professionals in finance, audit, banking, and consulting",
      "ICAN members seeking international recognition",
      "Professionals targeting multinational companies or international careers",
    ],
    levels: [
      {
        name: "Applied Knowledge",
        papers: [
          "Business and Technology (BT)",
          "Management Accounting (MA)",
          "Financial Accounting (FA)",
        ],
        duration: "4–8 months",
      },
      {
        name: "Applied Skills",
        papers: [
          "Corporate & Business Law (LW)",
          "Performance Management (PM)",
          "Taxation (TX)",
          "Financial Reporting (FR)",
          "Audit & Assurance (AA)",
          "Financial Management (FM)",
        ],
        duration: "8–16 months",
      },
      {
        name: "Strategic Professional",
        papers: [
          "Strategic Business Leader (SBL)",
          "Strategic Business Reporting (SBR)",
          "Two Optional Papers (AFM, APM, ATX, AAA)",
        ],
        duration: "8–16 months",
      },
    ],
    outcomes: [
      "ACCA Affiliate status upon completing all exams and Ethics module",
      "FCCA Member upon qualifying with 3 years relevant experience",
      "Recognition by employers in 180+ countries",
      "Gateway to senior finance, CFO, and global accounting roles",
    ],
    fees: [
      { level: "Applied Knowledge", amount: "₦95,000 per sitting" },
      { level: "Applied Skills", amount: "₦105,000 per sitting" },
      { level: "Strategic Professional", amount: "₦115,000 per sitting" },
    ],
    mode: "Weekday, Weekend, and Online classes available",
    badge: "International",
    faq: [
      { q: "What exemptions can I claim for ACCA?", a: "ACCA offers exemptions based on approved degrees and professional qualifications. Accounting degree holders typically receive exemptions from several Applied Knowledge and Applied Skills papers. ICAN members may receive significant exemptions." },
      { q: "How often are ACCA exams held?", a: "ACCA exams are held four times a year — in March, June, September, and December. This frequency allows candidates to complete the qualification efficiently." },
      { q: "Is ACCA recognised by Nigerian employers?", a: "Absolutely. ACCA is recognised and valued by all major Nigerian employers — Big Four firms, banks, multinationals, and government agencies. It is particularly valued for roles with international exposure." },
    ],
  },

  citn: {
    id: "citn",
    title: "CITN",
    fullName: "Chartered Institute of Taxation of Nigeria",
    tagline: "Nigeria's Premier Tax Qualification for Professionals.",
    icon: "⚖️",
    overview:
      "The CITN qualification is the definitive professional credential for tax practitioners in Nigeria. Administered by the Chartered Institute of Taxation of Nigeria, it covers Nigerian tax law, tax planning, international tax, and compliance. PIN's CITN tutors are active tax consultants who bring current practice directly into the classroom.",
    who: [
      "Accounting and finance professionals seeking tax specialisation",
      "Tax officers in FIRS, state revenue authorities, and compliance teams",
      "Lawyers with tax practice interests",
      "Finance managers and CFOs in corporate organisations",
      "ICAN/ACCA members seeking complementary tax qualification",
    ],
    levels: [
      {
        name: "Qualifying Examination",
        papers: [
          "Principles of Nigerian Tax Law",
          "Individual & Partnership Taxes",
          "Company Income Tax",
          "Indirect Taxes (VAT, Custom Duties)",
          "Tax Accounting & Revenue Law",
        ],
        duration: "8–14 months",
      },
      {
        name: "Professional Examination",
        papers: [
          "Advanced Nigerian Tax Law",
          "Transfer Pricing & International Tax",
          "Tax Planning & Management",
          "Tax Dispute Resolution",
        ],
        duration: "8–14 months",
      },
    ],
    outcomes: [
      "Associate Taxation Member (ACTI) designation",
      "Eligibility for CITN Fellowship (FCTI)",
      "Recognition as a qualified tax professional in Nigeria",
      "Access to senior tax advisory and consulting roles",
    ],
    fees: [
      { level: "Qualifying Examination", amount: "₦90,000 per diet" },
      { level: "Professional Examination", amount: "₦100,000 per diet" },
    ],
    mode: "Weekday, Weekend, and Online classes available",
    badge: "Tax Specialist",
    faq: [
      { q: "Who should take the CITN qualification?", a: "CITN is ideal for accountants, lawyers, and finance professionals who work in or aspire to work in tax advisory, tax compliance, revenue services, or corporate tax management." },
      { q: "Does ICAN/ACCA membership grant CITN exemptions?", a: "Yes. ICAN and ACCA members are entitled to exemptions from certain CITN papers. Our admissions team can assess your eligibility." },
    ],
  },

  ats: {
    id: "ats",
    title: "ATS",
    fullName: "Accounting Technicians Scheme West Africa",
    tagline: "Your First Step Into Professional Accounting.",
    icon: "📊",
    overview:
      "The Accounting Technicians Scheme (ATS) is jointly administered by ICAN and CIBN as an entry-level professional qualification in accounting. It is the ideal starting point for OND holders, school leavers, and career changers looking to establish a solid foundation in accounting and finance. Completion of ATS also qualifies students for exemptions from the ICAN Foundation Level.",
    who: [
      "OND holders in any discipline",
      "School leavers with five O'Level credits",
      "Career changers seeking an entry to accounting",
      "Artisans and entrepreneurs seeking financial management knowledge",
      "Clerks and administrative professionals in finance roles",
    ],
    levels: [
      {
        name: "Foundation",
        papers: ["Business Mathematics", "Introduction to Accounting", "Business Communications", "Economics"],
        duration: "3–5 months",
      },
      {
        name: "Intermediate",
        papers: ["Financial Accounting", "Cost Accounting", "Business Law", "Information Technology"],
        duration: "3–5 months",
      },
      {
        name: "Final",
        papers: ["Advanced Financial Accounting", "Taxation", "Auditing", "Management Accounting"],
        duration: "3–5 months",
      },
    ],
    outcomes: [
      "Accounting Technician Certificate",
      "Exemptions from ICAN Foundation Level",
      "Bookkeeper, accounts clerk, and finance assistant roles",
      "Foundation for further professional qualification",
    ],
    fees: [
      { level: "All Three Levels", amount: "₦65,000 per level" },
    ],
    mode: "Weekday, Weekend, and Online classes available",
    badge: "Entry Level",
    faq: [
      { q: "Can ATS students progress to ICAN?", a: "Yes. Successful ATS graduates receive exemptions from the ICAN Foundation Level, allowing them to begin directly at the Skills Level of the ICAN qualification." },
      { q: "Is ATS recognised by employers?", a: "Yes. The ATS certificate is recognised by employers across the public and private sectors as evidence of solid foundational accounting competence." },
    ],
  },

  cisa: {
    id: "cisa",
    title: "CISA",
    fullName: "Certified Information Systems Auditor",
    tagline: "The Gold Standard in IT Audit and Information Security.",
    icon: "💻",
    overview:
      "The CISA (Certified Information Systems Auditor) is ISACA's globally recognised qualification for IT audit, control, and assurance professionals. It is highly valued by financial institutions, Big Four firms, technology companies, and regulators. PIN's CISA programme is taught by an active IT audit professional with over 12 years of experience in financial services.",
    who: [
      "IT auditors seeking professional certification",
      "Internal auditors with IT governance responsibilities",
      "Finance professionals in technology-intensive environments",
      "Risk and compliance professionals",
      "ICAN/ACCA members with IT audit exposure",
    ],
    levels: [
      {
        name: "CISA Examination",
        papers: [
          "Information Systems Auditing Process",
          "Governance & Management of IT",
          "Information Systems Acquisition, Development & Implementation",
          "Information Systems Operations & Business Resilience",
          "Protection of Information Assets",
        ],
        duration: "4–8 months",
      },
    ],
    outcomes: [
      "CISA Certification from ISACA",
      "IT Audit Manager and IS Governance roles",
      "Recognised by Big Four, banks, and multinationals",
      "Significant salary premium in audit and technology roles",
    ],
    fees: [
      { level: "CISA Programme", amount: "₦120,000" },
    ],
    mode: "Weekend and Online classes available",
    badge: "IT Audit",
    faq: [
      { q: "How many exams is the CISA qualification?", a: "CISA is a single examination covering five domains. The exam consists of 150 multiple-choice questions and is delivered at ISACA-approved testing centres." },
      { q: "What experience is needed to become CISA certified?", a: "You need a minimum of five years of professional IS audit, control, or security experience to apply for certification after passing the exam. Some work experience substitutions are available." },
    ],
  },

  "ifrs-diploma": {
    id: "ifrs-diploma",
    title: "Diploma in IFRS",
    fullName: "ACCA Certificate and Diploma in International Financial Reporting",
    tagline: "Master IFRS Standards. Advance Your Reporting Expertise.",
    icon: "📋",
    overview:
      "The ACCA Diploma in International Financial Reporting (DipIFR) is a globally recognised qualification for accountants who need to apply IFRS in their work. It is particularly valuable for professionals in public interest entities, multinational companies, and organisations transitioning from local GAAP to IFRS. The programme is available at Certificate and Diploma levels.",
    who: [
      "Qualified accountants (ICAN, ACCA, CITN) needing IFRS expertise",
      "Financial controllers and reporting managers in listed companies",
      "Finance professionals in organisations transitioning to IFRS",
      "Auditors reviewing IFRS-compliant financial statements",
      "Accountants in banking, insurance, and other regulated industries",
    ],
    levels: [
      {
        name: "Certificate in IFRS",
        papers: ["Conceptual Framework", "Presentation & Disclosure", "Key IFRS Standards"],
        duration: "1–2 months",
      },
      {
        name: "Diploma in IFRS",
        papers: [
          "Conceptual Framework for Financial Reporting",
          "IFRS for assets, liabilities, equity, income, and expenses",
          "Business Combinations & Consolidated Financial Statements",
          "Interpretation and Analysis of IFRS Financial Statements",
        ],
        duration: "3–5 months",
      },
    ],
    outcomes: [
      "DipIFR qualification accredited by ACCA",
      "Expert IFRS application in financial reporting",
      "Enhanced credibility in financial controller roles",
      "Exemptions from certain ACCA papers",
    ],
    fees: [
      { level: "Certificate in IFRS", amount: "₦80,000" },
      { level: "Diploma in IFRS", amount: "₦120,000" },
    ],
    mode: "Weekend and Online classes available",
    badge: "ACCA Accredited",
    faq: [
      { q: "Do I need to be an ACCA member to take the DipIFR?", a: "No. The DipIFR is open to any qualified accountant or senior accounting professional regardless of which professional body they belong to." },
      { q: "How is the DipIFR examined?", a: "The Diploma is assessed by a single three-hour examination. The Certificate is assessed by an online computer-based examination." },
    ],
  },

  consulting: {
    id: "consulting",
    title: "Business Consulting",
    fullName: "Strategic Business & Financial Advisory Services",
    tagline: "Expert Advisory to Help Your Business Perform and Comply.",
    icon: "📈",
    overview:
      "PIN Consulting provides practical business and financial advisory for SMEs, growing organisations, and institutional clients. Our consultants are qualified professionals with real-world experience in financial management, tax planning, audit, and corporate strategy. We help organisations improve financial performance, achieve compliance, and make better strategic decisions.",
    who: [
      "SMEs seeking professional financial management support",
      "Organisations requiring tax planning and compliance advisory",
      "Companies preparing for IFRS transition or financial audits",
      "Startups seeking structured financial and business advisory",
      "NGOs and public sector organisations needing governance support",
    ],
    levels: [
      {
        name: "Advisory Services",
        papers: [
          "Financial Management & Reporting",
          "Tax Planning & Compliance",
          "Business Strategy & Growth Advisory",
          "IFRS Implementation Support",
          "Internal Audit & Controls Review",
        ],
        duration: "Ongoing engagement",
      },
    ],
    outcomes: [
      "Improved financial reporting and control",
      "Tax efficiency and regulatory compliance",
      "Stronger business strategy and decision-making",
      "Audit readiness and IFRS compliance",
    ],
    fees: [
      { level: "Consulting Engagement", amount: "By scope — contact us for a proposal" },
    ],
    mode: "On-site and remote advisory available",
    badge: "Advisory",
    faq: [
      { q: "How do I engage PIN for consulting services?", a: "Contact us with a brief description of your organisation's needs. We will arrange an initial consultation to understand the scope and provide a tailored proposal." },
      { q: "What industries do you serve?", a: "We serve clients across financial services, manufacturing, technology, retail, hospitality, NGOs, and the public sector. Our multi-disciplinary team adapts to sector-specific requirements." },
    ],
  },
};
