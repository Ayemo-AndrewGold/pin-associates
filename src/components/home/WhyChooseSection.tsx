"use client";

import { motion } from "framer-motion";
import {
  GraduationCap, Layers, Target, BookOpen,
  BarChart2, Briefcase, CircleDollarSign, Users,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const features = [
  {
    icon: GraduationCap,
    title: "Experienced Tutors",
    body: "Every tutor at PIN is an active industry practitioner accountants, tax consultants, and auditors who understand what it takes to pass and to excel professionally.",
    accent: "#1E3A8A",
    bg: "#EFF4FF",
  },
  {
    icon: Layers,
    title: "Flexible Learning Modes",
    body: "Choose what works for you: weekday classes, weekend intensives, or fully online. Our programme adapts to your schedule, not the other way around.",
    accent: "#16A34A",
    bg: "#DCFCE7",
  },
  {
    icon: Target,
    title: "Exam-Focused Curriculum",
    body: "Our materials are meticulously aligned to current examiner patterns. We teach you to understand questions, not just memorise answers.",
    accent: "#D97706",
    bg: "#FFFBEB",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Study Resources",
    body: "Students receive textbooks, study guides, past questions with solutions, and access to our digital study portal at no extra cost.",
    accent: "#0891B2",
    bg: "#ECFEFF",
  },
  {
    icon: BarChart2,
    title: "CBT Practice Tests",
    body: "Our Computer-Based Test simulator mirrors the real exam environment. Practice under timed conditions and track your readiness before exam day.",
    accent: "#7C3AED",
    bg: "#F5F3FF",
  },
  {
    icon: Briefcase,
    title: "Career Support",
    body: "Passing your exam is the beginning. Our career team helps connect students with recruiters, internship opportunities, and professional networks.",
    accent: "#1E3A8A",
    bg: "#EFF4FF",
  },
  {
    icon: CircleDollarSign,
    title: "Affordable Tuition Fees",
    body: "Professional education should not be out of reach. We offer competitive fees, flexible payment plans, and occasional scholarship opportunities.",
    accent: "#16A34A",
    bg: "#DCFCE7",
  },
  {
    icon: Users,
    title: "Personalised Support",
    body: "Small class sizes ensure every student receives personal attention. Our tutors are accessible during class, via messaging, and at revision sessions.",
    accent: "#D97706",
    bg: "#FFFBEB",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="section-py bg-white">
      <div className="container-pin">
      {/* ── Section label ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-14"
        >
          <div className="h-px flex-1 bg-[#E9ECEF]" />
          <span className="text-xs font-bold text-[#ADB5BD] uppercase tracking-widest px-2">
            Why Choose PIN
          </span>
          <div className="h-px flex-1 bg-[#E9ECEF]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            // label="Why Choose PIN"
            title="What Makes PIN Different From the Rest"
            highlight="PIN Different"
            description="We are not just a tuition centre. We are a professional examination partner invested in your success as much as you are."
            align="center"
          />
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, body, accent, bg }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative bg-white rounded-2xl border border-[#E9ECEF] p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: bg }}
              >
                <Icon className="w-6 h-6" style={{ color: accent }} strokeWidth={1.75} />
              </div>

              {/* Number badge */}
              <span
                className="absolute top-5 right-5 font-heading font-bold text-3xl leading-none opacity-[0.07]"
                style={{ color: accent }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="font-heading font-bold text-[#222222] text-base mb-2.5 leading-snug">
                {title}
              </h3>
              <p className="text-[#6C757D] text-sm leading-relaxed">{body}</p>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ backgroundColor: accent }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
