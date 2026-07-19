"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Monitor, BookOpen } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";

const programs = [
  {
    id: "ican",
    title: "ICAN",
    fullName: "Institute of Chartered Accountants of Nigeria",
    overview:
      "Comprehensive tuition across all levels of the ICAN professional qualification — from Foundation to Professional.",
    duration: "12–36 months",
    mode: "In-person & Online",
    levels: ["Foundation", "Skills", "Professional"],
    badge: "Most Popular",
    badgeVariant: "gold" as const,
    accent: "#1E3A8A",
    href: "/courses/ican",
    icon: "🏛️",
  },
  {
    id: "acca",
    title: "ACCA",
    fullName: "Association of Chartered Certified Accountants",
    overview:
      "Globally recognised accounting qualification. We prepare you for Applied Knowledge, Applied Skills, and Strategic Professional levels.",
    duration: "18–48 months",
    mode: "In-person & Online",
    levels: ["Applied Knowledge", "Applied Skills", "Strategic"],
    badge: "International",
    badgeVariant: "blue" as const,
    accent: "#1E3A8A",
    href: "/courses/acca",
    icon: "🌍",
  },
  {
    id: "citn",
    title: "CITN",
    fullName: "Chartered Institute of Taxation of Nigeria",
    overview:
      "Specialised tax qualification for professionals seeking expertise in Nigerian taxation law, practice, and compliance.",
    duration: "12–24 months",
    mode: "In-person & Online",
    levels: ["Qualifying", "Professional"],
    badge: "Tax Focused",
    badgeVariant: "green" as const,
    accent: "#1E3A8A",
    href: "/courses/citn",
    icon: "⚖️",
  },
  {
    id: "ats",
    title: "ATS",
    fullName: "Accounting Technicians Scheme",
    overview:
      "An accessible entry point into professional accounting. Perfect for OND holders and school leavers building a career in finance.",
    duration: "6–18 months",
    mode: "In-person & Online",
    levels: ["Foundation", "Intermediate", "Final"],
    badge: "Entry Level",
    badgeVariant: "gray" as const,
    accent: "#1E3A8A",
    href: "/courses/ats",
    icon: "📊",
  },
  {
    id: "cisa",
    title: "CISA",
    fullName: "Certified Information Systems Auditor",
    overview:
      "IT governance and information systems audit qualification for audit and IT professionals seeking ISACA certification.",
    duration: "6–12 months",
    mode: "In-person & Online",
    levels: ["Single Level"],
    badge: "IT Audit",
    badgeVariant: "blue" as const,
    accent: "#1E3A8A",
    href: "/courses/cisa",
    icon: "💻",
  },
  {
    id: "ifrs-diploma",
    title: "Diploma in IFRS",
    fullName: "International Financial Reporting Standards",
    overview:
      "ACCA-accredited diploma covering the application of IFRS standards. Designed for accountants requiring international reporting expertise.",
    duration: "3–6 months",
    mode: "Weekends & Online",
    levels: ["Certificate", "Diploma"],
    badge: "ACCA Accredited",
    badgeVariant: "gold" as const,
    accent: "#1E3A8A",
    href: "/courses/ifrs-diploma",
    icon: "📋",
  },
  {
    id: "corporate",
    title: "Corporate Training",
    fullName: "Tailored Workforce Development",
    overview:
      "Custom training programmes for organisations. Accounting, tax, financial management, and regulatory compliance for your team.",
    duration: "Flexible",
    mode: "On-site & Online",
    levels: ["Customised"],
    badge: "For Organisations",
    badgeVariant: "gray" as const,
    accent: "#1E3A8A",
    href: "/corporate",
    icon: "🏢",
  },
  {
    id: "consulting",
    title: "Business Consulting",
    fullName: "Strategic Advisory Services",
    overview:
      "Financial advisory, business strategy, tax consulting, and regulatory compliance services for SMEs and corporates.",
    duration: "Ongoing",
    mode: "Advisory",
    levels: ["Advisory"],
    badge: "Advisory",
    badgeVariant: "blue" as const,
    accent: "#1E3A8A",
    href: "/courses/consulting",
    icon: "📈",
  },
];

export default function ProgramsSection() {
  return (
    <section className="section-py bg-[#F8F9FA]">
      <div className="container-pin">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            label="Our Programmes"
            title="Professional Qualifications We Prepare You For"
            highlight="Professional Qualifications"
            description="From entry-level accounting to internationally recognised chartered qualifications we offer structured tuition for every stage of your professional journey."
            align="center"
          /> 
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link
                href={prog.href}
                className="group flex flex-col h-full bg-white rounded-2xl border border-[#E9ECEF] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Card header */}
                <div className="p-4 sm:p-6 border-b border-[#F1F3F5]">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{prog.icon}</span>
                    <Badge variant={prog.badgeVariant} size="sm">{prog.badge}</Badge>
                  </div>
                  <h3 className="font-heading font-bold text-[#1E3A8A] text-xl mb-1 group-hover:text-[#152D6E] transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-[#6C757D] font-medium leading-tight">
                    {prog.fullName}
                  </p>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[#495057] text-sm leading-relaxed mb-5 flex-1">
                    {prog.overview}
                  </p>

                  {/* Meta info */}
                  <div className="space-y-2 mb-5">
                    <div className="flex items-center gap-2 text-xs text-[#6C757D]">
                      <Clock className="w-3.5 h-3.5 text-[#ADB5BD]" />
                      <span>{prog.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#6C757D]">
                      <Monitor className="w-3.5 h-3.5 text-[#ADB5BD]" />
                      <span>{prog.mode}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#6C757D]">
                      <BookOpen className="w-3.5 h-3.5 text-[#ADB5BD]" />
                      <span>{prog.levels.join(" · ")}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#1E3A8A] group-hover:text-[#152D6E] flex items-center gap-1.5 transition-colors">
                      Learn More
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div className="h-0.5 bg-[#1E3A8A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-[#1E3A8A] font-semibold text-sm border border-[#1E3A8A]/20 px-6 py-3 rounded-xl hover:bg-[#EFF4FF] hover:border-[#1E3A8A]/40 transition-all duration-200"
          >
            View All Programmes & Fees
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
