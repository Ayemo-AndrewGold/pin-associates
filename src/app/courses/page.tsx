import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Clock, Monitor, BookOpen, ArrowRight, CheckCircle2 } from "lucide-react";
import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";
import NewsletterSection from "@/components/home/NewsletterSection";
import PageHero from "@/components/layout/PageHero";
import ProgramIcon from "@/components/ui/ProgramIcon";

export const metadata: Metadata = {
  title: "Programmes & Courses",
  description:
    "Browse PIN Consultancy Services' full range of professional examination programmes: ICAN, ACCA, CITN, ATS, CISA, Diploma in IFRS, Corporate Training and Business Consulting.",
};

const programmes = [
  {
    id: "ican",
    title: "ICAN",
    fullName: "Institute of Chartered Accountants of Nigeria",
    overview: "The gold standard of accountancy qualifications in Nigeria. Comprehensive tuition across Foundation, Skills, and Professional levels with experienced ICAN examiners.",
    duration: "12–36 months", mode: "In-person & Online",
    levels: ["Foundation", "Skills", "Professional"],
    badge: "Most Popular", badgeVariant: "gold" as const,
    href: "/courses/ican",
    icon: "https://res.cloudinary.com/yaovkmpi/image/upload/v1784552599/ican-logo_tg9meu.jpg",
    outcomes: ["Chartered Accountant (ACA)", "ICAN Fellow (FCA)", "CFO & Finance Director roles"],
  },
  {
    id: "acca",
    title: "ACCA",
    fullName: "Association of Chartered Certified Accountants",
    overview: "A globally recognised accounting qualification accepted in over 180 countries. We prepare students for every level from Applied Knowledge to Strategic Professional.",
    duration: "18–48 months", mode: "In-person & Online",
    levels: ["Applied Knowledge", "Applied Skills", "Strategic Professional"],
    badge: "International", badgeVariant: "blue" as const,
    href: "/courses/acca",
    icon: "https://res.cloudinary.com/yaovkmpi/image/upload/v1784552629/ACCA_logo.svg_osfbx1.webp",
    outcomes: ["ACCA Affiliate", "FCCA Member", "International Finance Careers"],
  },
  {
    id: "citn",
    title: "CITN",
    fullName: "Chartered Institute of Taxation of Nigeria",
    overview: "Specialised taxation qualification covering Nigerian tax law, planning, and compliance. Ideal for professionals seeking expertise in tax advisory and practice.",
    duration: "12–24 months", mode: "In-person & Online",
    levels: ["Qualifying", "Professional"],
    badge: "Tax Specialist", badgeVariant: "green" as const,
    href: "/courses/citn",
    icon: "https://res.cloudinary.com/yaovkmpi/image/upload/v1784552741/CITN-logo_rqc5j5.jpg",
    outcomes: ["Associate Tax Member", "FCTI Fellow", "Tax Manager & Consultant roles"],
  },
  {
    id: "ats",
    title: "ATS",
    fullName: "Accounting Technicians Scheme West Africa",
    overview: "The foundational entry point into professional accounting. Perfect for OND holders, school leavers, and those building a career in finance and bookkeeping.",
    duration: "6–18 months", mode: "In-person & Online",
    levels: ["Foundation", "Intermediate", "Final"],
    badge: "Entry Level", badgeVariant: "gray" as const,
    href: "/courses/ats",
    icon: "https://res.cloudinary.com/yaovkmpi/image/upload/v1784553799/ATSWB-logo_pkmnpp.jpg",
    outcomes: ["Accounting Technician Certificate", "ICAN Exemptions", "Bookkeeping & Finance Roles"],
  },
  {
    id: "cisa",
    title: "CISA",
    fullName: "Certified Information Systems Auditor",
    overview: "ISACA's globally recognised qualification for IT audit, control, and security professionals. Highly valued by financial institutions, audit firms, and technology companies.",
    duration: "6–12 months", mode: "In-person & Online",
    levels: ["Single Examination"],
    badge: "IT Audit", badgeVariant: "blue" as const,
    href: "/courses/cisa",
    icon: "https://res.cloudinary.com/yaovkmpi/image/upload/v1784552746/CISA-logo_emfhdi.png",
    outcomes: ["CISA Certification", "IT Audit Manager", "IS Governance Specialist"],
  },
  {
    id: "ifrs-diploma",
    title: "Diploma in IFRS",
    fullName: "International Financial Reporting Standards",
    overview: "ACCA-accredited diploma for accountants seeking expertise in IFRS application and financial reporting. Ideal for professionals in public interest entities and multinationals.",
    duration: "3–6 months", mode: "Weekends & Online",
    levels: ["Certificate", "Diploma"],
    badge: "ACCA Accredited", badgeVariant: "gold" as const,
    href: "/courses/ifrs-diploma",
    icon: "https://res.cloudinary.com/yaovkmpi/image/upload/v1784552753/ifrs-logo_ellqno.svg",
    outcomes: ["Dip IFRS Qualification", "IFRS Reporting Expertise", "Multinational Finance Roles"],
  },
  {
    id: "corporate",
    title: "Corporate Training",
    fullName: "Tailored Workforce Development Programmes",
    overview: "Bespoke professional development for organisations. Training programmes are designed around your team's specific needs, regulatory environment, and learning objectives.",
    duration: "Flexible", mode: "On-site & Online",
    levels: ["Customised to your organisation"],
    badge: "For Organisations", badgeVariant: "gray" as const,
    href: "/corporate",
    icon: "https://res.cloudinary.com/yaovkmpi/image/upload/v1784552599/ican-logo_tg9meu.jpg",
    outcomes: ["Qualified Finance Teams", "Regulatory Compliance", "Improved Organisational Performance"],
  },
  {
    id: "consulting",
    title: "Business Consulting",
    fullName: "Strategic Business & Financial Advisory",
    overview: "Expert business and financial advisory for SMEs and growing organisations. From financial modelling to tax planning, our consultants bring deep practical expertise.",
    duration: "Ongoing", mode: "Advisory",
    levels: ["Advisory Services"],
    badge: "Advisory", badgeVariant: "blue" as const,
    href: "/courses/consulting",
    icon: "https://res.cloudinary.com/yaovkmpi/image/upload/v1784552599/ican-logo_tg9meu.jpg",
    outcomes: ["Improved Financial Performance", "Tax Efficiency", "Strategic Clarity"],
  },
];

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}

          <PageHero
            label="Our Programmes"
            title="Professional Qualifications We Prepare You For"
            description="From accounting technician to chartered accountant, international to local
        qualifications — we offer structured tuition for every stage of your professional journey."
            slides={[
              { id: 1, src: "https://res.cloudinary.com/yaovkmpi/image/upload/v1784484978/wmremove-transformed_1_1_el1lye.jpg", alt: "University students studying together" },
              { id: 2, src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=85", alt: "Professional accounting class" },
              { id: 3, src: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1600&q=85", alt: "Corporate learning session" },
            ]}
          />

        {/* Programmes list */}
        <section className="section-py bg-white">
          <div className="container-pin">
            <div className="space-y-6">
              {programmes.map((prog, i) => (
                <div
                  key={prog.id}
                  className="group bg-white rounded-3xl border border-[#E9ECEF] hover:shadow-lg hover:border-[#DBEAFE] transition-all duration-300 overflow-hidden"
                >
                  <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 p-7 items-start">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-white rounded-2xl border border-[#E9ECEF] shadow-sm flex items-center justify-center flex-shrink-0 overflow-hidden p-1">
                      <ProgramIcon icon={prog.icon} title={prog.title} />
                    </div>

                    {/* Main content */}
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h2 className="font-heading font-bold text-[#1E3A8A] text-xl">{prog.title}</h2>
                        <Badge variant={prog.badgeVariant} size="sm">{prog.badge}</Badge>
                      </div>
                      <p className="text-xs font-semibold text-[#ADB5BD] uppercase tracking-wide mb-2">{prog.fullName}</p>
                      <p className="text-[#495057] text-sm leading-relaxed mb-4 max-w-2xl">{prog.overview}</p>

                      <div className="flex flex-wrap gap-4 text-xs text-[#6C757D] mb-4">
                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#ADB5BD]" />{prog.duration}</span>
                        <span className="flex items-center gap-1.5"><Monitor className="w-3.5 h-3.5 text-[#ADB5BD]" />{prog.mode}</span>
                        <span className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5 text-[#ADB5BD]" />{prog.levels.join(" · ")}</span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {prog.outcomes.map((o) => (
                          <span key={o} className="inline-flex items-center gap-1.5 text-xs text-[#16A34A] bg-[#DCFCE7] border border-[#BBF7D0] px-3 py-1 rounded-full font-medium">
                            <CheckCircle2 className="w-3 h-3" />
                            {o}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col gap-3 flex-shrink-0">
                      <Link
                        href={prog.href}
                        className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#152D6E] transition-colors whitespace-nowrap"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        href="/apply"
                        className="inline-flex items-center justify-center text-sm font-semibold text-[#1E3A8A] px-6 py-3 rounded-xl border border-[#1E3A8A]/20 hover:bg-[#EFF4FF] transition-all whitespace-nowrap"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison CTA */}
        <section className="py-14 bg-[#F8F9FA]">
          <div className="container-pin text-center">
            <SectionHeader
              label="Not sure which programme?"
              title="Let Us Help You Choose"
              description="Our admissions advisors will assess your background, career goals, and existing qualifications to recommend the right programme and entry point for you."
              align="center"
            />
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white font-semibold text-sm px-8 py-4 rounded-xl hover:bg-[#152D6E] transition-colors shadow-sm"
              >
                Speak to an Advisor
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 bg-[#F4C430] text-[#152D6E] font-bold text-sm px-8 py-4 rounded-xl hover:bg-[#D4A820] transition-colors shadow-sm"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </section>

        {/* <NewsletterSection /> */}
      </main>
      <Footer />
    </>
  );
}
