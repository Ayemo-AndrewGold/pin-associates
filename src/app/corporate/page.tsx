import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Building2, Users, TrendingUp, FileText, Scale, Presentation, CheckCircle2, ArrowRight, Phone } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import NewsletterSection from "@/components/home/NewsletterSection";

export const metadata: Metadata = {
  title: "Corporate Training & Advisory Services",
  description:
    "PIN Consultancy Services provides bespoke professional development, accounting advisory, tax consulting, and workforce training for organisations across Nigeria.",
};

const services = [
  {
    icon: Users, title: "Workforce Development Training",
    body: "Structured training programmes to upskill your finance, accounting, and audit teams. We design programmes around your organisation's specific needs, regulatory environment, and learning objectives. Delivered on-site or online.",
    features: ["Needs assessment & training design", "Certified tutor-led delivery", "Progress tracking & reporting", "Post-training certification"],
  },
  {
    icon: TrendingUp, title: "Accounting & Financial Consulting",
    body: "Expert advisory on financial reporting, IFRS implementation, management accounting, internal controls, and financial statement preparation. Our consultants are chartered accountants with Big Four and corporate finance backgrounds.",
    features: ["IFRS transition support", "Financial reporting review", "Internal controls assessment", "Management accounts preparation"],
  },
  {
    icon: Scale, title: "Tax Advisory & Compliance",
    body: "Comprehensive tax services for Nigerian corporates and SMEs. From tax planning and structuring to FIRS compliance, transfer pricing documentation, and tax dispute resolution.",
    features: ["Corporate tax planning", "VAT and indirect taxes", "Transfer pricing documentation", "FIRS audit support"],
  },
  {
    icon: Building2, title: "Business Strategy Advisory",
    body: "Practical strategic advisory for growing businesses. We help leadership teams make better financial decisions, develop robust business plans, and navigate complex regulatory and competitive environments.",
    features: ["Business plan development", "Financial modelling", "Feasibility studies", "Growth strategy advisory"],
  },
  {
    icon: FileText, title: "Regulatory Compliance",
    body: "Ensuring your organisation meets all applicable regulatory requirements — FIRS, SEC, CBN, NAICOM, CAC, and other sector-specific regulatory bodies. We identify gaps and implement compliance frameworks.",
    features: ["Regulatory gap analysis", "Compliance framework design", "Regulatory filing support", "Compliance training for staff"],
  },
  {
    icon: Presentation, title: "Corporate Workshops",
    body: "Short-format, high-impact workshops on IFRS updates, Nigerian tax law changes, audit standards, financial analysis, and governance. Delivered by experienced practitioners for teams of any size.",
    features: ["IFRS and accounting updates", "Tax law change briefings", "Audit and governance workshops", "Finance for non-financial managers"],
  },
];

const process = [
  { n: "01", title: "Initial Consultation",    body: "We meet to understand your organisation, team, and specific training or advisory needs." },
  { n: "02", title: "Proposal & Scoping",       body: "We provide a detailed proposal with programme design, delivery timeline, and investment." },
  { n: "03", title: "Customised Delivery",      body: "Our experienced practitioners deliver the programme on your schedule and terms." },
  { n: "04", title: "Measurement & Reporting",  body: "We provide post-engagement reporting on outcomes, participant performance, and recommendations." },
];

export default function CorporatePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="relative pt-40 pb-20"
          style={{ background: "linear-gradient(135deg, #0F2055 0%, #1a3070 50%, #152D6E 100%)" }}
        >
          <div className="container-pin relative z-10 text-center">
            <span className="section-label section-label-gold mb-6 inline-flex">Corporate Services</span>
            <h1 className="font-heading font-extrabold text-white text-4xl md:text-5xl leading-tight mb-5">
              Building Capable, Compliant Organisations
            </h1>
            <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              PIN Consultancy Services partners with leading Nigerian organisations to develop
              finance teams, improve compliance, and deliver strategic business advisory.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact?type=corporate" className="inline-flex items-center gap-2 bg-[#F4C430] text-[#152D6E] font-bold text-base px-8 py-4 rounded-2xl hover:bg-[#D4A820] transition-all shadow-lg">
                Request a Proposal <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+2348000000000" className="inline-flex items-center gap-2 bg-white/10 border border-white/25 text-white font-semibold text-base px-8 py-4 rounded-2xl hover:bg-white/15 transition-all">
                <Phone className="w-4 h-4" /> Call Us
              </a>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
            <svg viewBox="0 0 1440 40" fill="none" className="w-full">
              <path d="M0 40 L0 20 Q720 0 1440 20 L1440 40 Z" fill="white" />
            </svg>
          </div>
        </section>

        {/* Services */}
        <section className="section-py bg-white">
          <div className="container-pin">
            <SectionHeader label="What We Offer" title="Corporate Services Portfolio" align="center" />
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(({ icon: Icon, title, body, features }) => (
                <div key={title} className="bg-[#F8F9FA] rounded-2xl border border-[#E9ECEF] p-6 hover:shadow-md hover:-translate-y-0.5 transition-all group">
                  <div className="w-11 h-11 bg-[#EFF4FF] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#1E3A8A] transition-colors">
                    <Icon className="w-5 h-5 text-[#1E3A8A] group-hover:text-white transition-colors" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-heading font-bold text-[#222222] text-base mb-2">{title}</h3>
                  <p className="text-[#6C757D] text-sm leading-relaxed mb-4">{body}</p>
                  <ul className="space-y-1.5">
                    {features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-xs text-[#495057]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-py bg-[#F8F9FA]">
          <div className="container-pin">
            <SectionHeader label="How We Work" title="Our Engagement Process" align="center" />
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map(({ n, title, body }) => (
                <div key={n} className="relative bg-white rounded-2xl border border-[#E9ECEF] p-6">
                  <div className="w-10 h-10 bg-[#1E3A8A] rounded-xl flex items-center justify-center text-white font-bold text-sm mb-4">
                    {n}
                  </div>
                  <h3 className="font-heading font-bold text-[#222222] text-base mb-2">{title}</h3>
                  <p className="text-[#6C757D] text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "linear-gradient(135deg, #1E3A8A 0%, #152D6E 100%)" }} className="py-16">
          <div className="container-pin text-center">
            <h2 className="font-heading font-bold text-white text-3xl mb-4">Ready to Develop Your Team?</h2>
            <p className="text-white/65 text-base mb-8 max-w-xl mx-auto">
              Contact us to discuss your organisation&apos;s training and advisory needs. We provide tailored proposals within 48 hours.
            </p>
            <Link href="/contact?type=corporate"
              className="inline-flex items-center gap-2 bg-[#F4C430] text-[#152D6E] font-bold text-base px-10 py-4 rounded-2xl hover:bg-[#D4A820] transition-all shadow-lg">
              Request a Corporate Proposal <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
