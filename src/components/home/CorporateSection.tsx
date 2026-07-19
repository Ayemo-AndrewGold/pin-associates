"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, Users, TrendingUp, FileText, Scale, Presentation, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  {
    icon: Users,
    title: "Workforce Development Training",
    body: "Structured professional development programmes for finance, accounting, and audit teams. Delivered on-site or online.",
  },
  {
    icon: TrendingUp,
    title: "Accounting & Financial Consulting",
    body: "Expert advisory on financial reporting, internal controls, IFRS compliance, and management accounting.",
  },
  {
    icon: Scale,
    title: "Tax Advisory Services",
    body: "Corporate tax planning, compliance support, transfer pricing, and regulatory advisory for businesses across sectors.",
  },
  {
    icon: Building2,
    title: "Business Strategy Advisory",
    body: "Practical business advisory for SMEs and growing organisations from financial modelling to strategic planning.",
  },
  {
    icon: FileText,
    title: "Regulatory Compliance",
    body: "Ensuring your organisation meets FIRS, ICAN, SEC, CBN, and other regulatory body requirements with confidence.",
  },
  {
    icon: Presentation,
    title: "Corporate Workshops",
    body: "Bespoke short-course workshops on IFRS updates, tax law changes, audit standards, and financial analysis.",
  },
];

const clients = ["Dangote Group", "GTBank", "Nestlé Nigeria", "MTN Nigeria", "First Bank", "Flour Mills", "Lagos State Govt.", "NNPC"];

export default function CorporateSection() {
  return (
    <section className="section-py bg-[#F8F9FA]">
      <div className="container-pin">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-14 lg:gap-20 items-start">

          {/* Left — header & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <SectionHeader
              label="Corporate Services"
              title="Training & Advisory Services for Organisations"
              highlight="Organisations"
              description="We work with leading Nigerian organisations to develop their finance teams, improve compliance, and deliver practical business advisory."
              align="left"
            />

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#E9ECEF]">
                <span className="text-2xl mt-0.5">🏆</span>
                <div>
                  <p className="font-semibold text-[#222222] text-sm">Trusted by Leading Organisations</p>
                  <p className="text-xs text-[#6C757D] mt-0.5">
                    From multinationals to government agencies, our corporate clients trust PIN for professional development.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#E9ECEF]">
                <span className="text-2xl mt-0.5">📋</span>
                <div>
                  <p className="font-semibold text-[#222222] text-sm">Fully Customised Programmes</p>
                  <p className="text-xs text-[#6C757D] mt-0.5">
                    Every corporate engagement is tailored to your organisation's specific needs, industry, and regulatory context.
                  </p>
                </div>
              </div>
            </div>

            {/* Client logos strip */}
            <div className="mt-8">
              <p className="text-xs font-semibold text-[#ADB5BD] uppercase tracking-wider mb-3">
                Organisations We Have Worked With
              </p>
              <div className="flex flex-wrap gap-2">
                {clients.map((c) => (
                  <span key={c} className="text-xs font-medium text-[#495057] bg-white border border-[#E9ECEF] px-3 py-1.5 rounded-lg">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/corporate"
                className="inline-flex items-center gap-2 bg-[#F4C430] text-[#152D6E] font-semibold text-sm px-6 py-3.5 rounded-xl hover:bg-[#EFF4FF] transition-colors shadow-sm"
              >
                Corporate Services
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact?type=corporate"
                className="inline-flex items-center gap-2 text-[#1E3A8A] font-semibold text-sm px-6 py-3.5 rounded-xl border border-[#1E3A8A]/20 hover:bg-[#EFF4FF] transition-all"
              >
                Request a Proposal
              </Link>
            </div>
          </motion.div>

          {/* Right — services grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {services.map(({ icon: Icon, title, body }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-white rounded-2xl border border-[#E9ECEF] p-4 sm:p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-[#EFF4FF] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#1E3A8A] transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#1E3A8A] group-hover:text-white transition-colors duration-300" strokeWidth={1.75} />
                </div>
                <h3 className="font-heading font-bold text-[#222222] text-base mb-2 leading-snug">
                  {title}
                </h3>
                <p className="text-[#6C757D] text-sm leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
