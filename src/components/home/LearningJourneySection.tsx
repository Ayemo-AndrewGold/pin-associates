"use client";

import { motion } from "framer-motion";
import { Search, ClipboardList, BookOpen, Monitor, Trophy, BadgeCheck } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discover Your Programme",
    body: "Browse our range of professional qualifications and find the right fit for your background, goals, and career stage.",
    color: "#1E3A8A",
    bg: "#EFF4FF",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Register & Enrol",
    body: "Complete your application online or in person. Our admissions team will guide you through every step of the registration process.",
    color: "#0891B2",
    bg: "#ECFEFF",
  },
  {
    icon: BookOpen,
    step: "03",
    title: "Attend Expert Classes",
    body: "Join structured lectures with experienced tutors. Choose your preferred mode — weekday, weekend, or live online classes.",
    color: "#16A34A",
    bg: "#DCFCE7",
  },
  {
    icon: Monitor,
    step: "04",
    title: "Practise With CBT",
    body: "Sharpen your exam readiness with our Computer-Based Test simulator. Thousands of practice questions, timed conditions, instant feedback.",
    color: "#7C3AED",
    bg: "#F5F3FF",
  },
  {
    icon: Trophy,
    step: "05",
    title: "Sit the Examination",
    body: "Enter your exam fully prepared. Our students walk in with confidence, equipped with strategy, practice, and technical mastery.",
    color: "#D97706",
    bg: "#FFFBEB",
  },
  {
    icon: BadgeCheck,
    step: "06",
    title: "Become Certified",
    body: "Receive your professional qualification and join thousands of PIN graduates building outstanding careers across Nigeria and beyond.",
    color: "#1E3A8A",
    bg: "#EFF4FF",
  },
];

export default function LearningJourneySection() {
  return (
    <section
      className="section-py relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0F2055 0%, #1a3070 50%, #152D6E 100%)" }}
    >
      
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #F4C430 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #4B8BFF 0%, transparent 70%)" }}
        />
      </div>

      <div className="container-pin relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            label="Your Learning Journey"
            title="Six Steps From Aspiration to Certification"
            highlight="Six Steps"
            description="A clear, proven pathway from enrolment to professional qualification. Every step is designed to build your knowledge, confidence, and exam readiness."
            align="center"
            theme="dark"
            labelVariant="gold"
          />
        </motion.div>

        {/* Steps grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, step, title, body, color, bg }, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="relative group"
            >
              <div className="bg-white/[0.06] border border-white/[0.12] rounded-2xl p-7 hover:bg-white/[0.09] transition-colors duration-300 h-full">
                {/* Step number — background */}
                <span className="absolute top-5 right-6 font-heading font-extrabold text-5xl text-white/[0.05] leading-none select-none">
                  {step}
                </span>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: bg + "22" }}
                >
                  <Icon className="w-6 h-6" style={{ color: "#F4C430" }} strokeWidth={1.75} />
                </div>

                {/* Step pill */}
                {/* <span
                  className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3"
                  style={{ backgroundColor: "rgba(244,196,48,0.12)", color: "#F4C430" }}
                >
                  Step {step}
                </span> */}

                <h3 className="font-heading font-bold text-white text-lg mb-3 leading-snug">
                  {title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">{body}</p>

                {/* Connector arrow for desktop */}
                {i < steps.length - 1 && (i + 1) % 3 !== 0 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-white/10 z-10" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <a
            href="/apply"
            className="inline-flex items-center gap-2.5 bg-[#F4C430] text-[#152D6E] font-bold text-base px-10 py-4 rounded-2xl hover:bg-[#D4A820] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Start Your Journey Today
            <Trophy className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
