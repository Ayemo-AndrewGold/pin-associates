"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Target, Award } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Exam-Intelligent Teaching",
    body: "We teach how examiners think not just what the syllabus says. Every class is built around how to score maximum marks.",
  },
  {
    icon: Users,
    title: "Practitioner-Led Faculty",
    body: "Every tutor is an active finance, tax, or audit professional. Real practice experience comes into every session.",
  },
  {
    icon: BookOpen,
    title: "Structured Learning Paths",
    body: "Clear progression from Foundation through Professional levels, with continuous assessment and mock exams at every stage.",
  },
  {
    icon: Award,
    title: "Flexible & Accessible",
    body: "Weekday, weekend, and fully online classes designed for students and working professionals alike.",
  },
];

const highlights = [
  { value: "2009", label: "Founded" },
  { value: "87%",  label: "Pass Rate" },
  { value: "9",    label: "Programmes" },
];

export default function AboutSection() {
  return (
    <section className="section-py bg-white overflow-hidden">
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
            About PIN Consultancy
          </span>
          <div className="h-px flex-1 bg-[#E9ECEF]" />
        </motion.div>

        {/* ── Main two-column grid ───────────────── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ══ LEFT — Image panel ════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/*
              Outer box: fixed height so image always fills it fully.
              Using padding-top percentage trick keeps it responsive.
              position:relative + overflow:hidden = perfect crop.
            */}
            <div
              className="relative w-full rounded-3xl overflow-hidden"
              style={{
                /* 5:6 ratio on mobile, slightly taller on lg */
                paddingTop: "clamp(380px, 62%, 620px)",
                boxShadow: "0 23px 64px rgba(30,58,138,0.14), 0 8px 24px rgba(0,0,0,0.08)",
              }}
            >
              {/* Image — position:absolute fills the padding-top box 100% */}
              <img
                src="https://res.cloudinary.com/yaovkmpi/image/upload/v1784423630/IMG-20260716-WA0007_r0isob.jpg"
                alt="PIN Consultancy professional class in session"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 30%",
                }}
              />

              {/* Dark gradient — bottom third only so face/content area stays bright */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, transparent 45%, rgba(11,20,45,0.78) 100%)",
                }}
              />

              {/* Caption card inside image — bottom left */}
              <div
                style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.75rem" }}
              >
                <p
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "10px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    marginBottom: "0.35rem",
                  }}
                >
                  Our Approach
                </p>
                <p
                  style={{
                    color: "#ffffff",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
                    lineHeight: 1.35,
                  }}
                >
                  Practitioner-led teaching.<br />
                  Exam-intelligent preparation.
                </p>
              </div>

              {/* Years badge — top right, inside the image, so it can't overflow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.4 }}
                style={{
                  position: "absolute",
                  top: "1.25rem",
                  right: "1.25rem",
                  background: "rgba(11,20,45,0.82)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "16px",
                  padding: "1rem 1.25rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.12)",
                  minWidth: "84px",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 800,
                    color: "#F4C430",
                    fontSize: "1.75rem",
                    lineHeight: 1,
                  }}
                >
                  16+
                </span>
                <span
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "11px",
                    fontWeight: 500,
                    marginTop: "4px",
                    lineHeight: 1.3,
                  }}
                >
                  Years of<br />Excellence
                </span>
              </motion.div>
            </div>

            {/* Gold corner accent behind the card — purely decorative */}
            <div
              className="absolute -bottom-3 -left-3 w-16 h-16 rounded-2xl bg-[#F4C430] -z-10 hidden sm:block"
            />
          </motion.div>

          {/* ══ RIGHT — Copy ══════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            {/* Headline */}
            <h2
              className="font-heading font-extrabold leading-tight mb-6"
              style={{ fontSize: "clamp(1.85rem, 3.5vw, 2.75rem)", color: "#1E3A8A" }}
            >
              Nigeria&rsquo;s Trusted<br />
              <span style={{ color: "#222222" }}>Professional Examination</span><br />
              Tuition Provider.
            </h2>

            {/* Quick highlight strip */}
            {/* <div className="flex items-center gap-6 py-5 border-y border-[#F1F3F5] mb-7">
              {highlights.map(({ value, label }, i) => (
                <div key={label} className="flex flex-col items-center text-center flex-1">
                  <span
                    className="font-heading font-extrabold text-[#1E3A8A] leading-none"
                    style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
                  >
                    {value}
                  </span>
                  <span className="text-[#ADB5BD] text-xs font-medium mt-1">{label}</span>
                  {i < highlights.length - 1 && (
                    <div className="hidden sm:block absolute" />
                  )}
                </div>
              ))}
            </div> */}

            {/* Body copy */}
            <div className="space-y-4 mb-9">
              <p className="text-[#495057] text-base leading-relaxed">
                Founded in 2009,{" "}
                <strong className="text-[#1E3A8A] font-semibold">PIN Consultancy Services</strong>{" "}
                known as Pass It Now Associates has become one of Nigeria&rsquo;s most
                respected professional examination tuition organisations.
              </p>
              <p className="text-[#495057] text-base leading-relaxed">
                Our teaching philosophy is rooted in exam intelligence understanding not
                just the curriculum, but how examiners think, what they test, and how to
                score maximum marks under pressure.
              </p>
            </div>

            {/* 2×2 Pillar grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {pillars.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#F8F9FA] border border-[#F1F3F5]
                             hover:border-[#DBEAFE] hover:bg-[#EFF4FF]/50 transition-all duration-200 group"
                >
                  <div
                    className="w-8 h-8 rounded-lg bg-[#EFF4FF] flex items-center justify-center
                               flex-shrink-0 group-hover:bg-[#1E3A8A] transition-colors duration-200"
                  >
                    <Icon
                      className="w-4 h-4 text-[#1E3A8A] group-hover:text-white transition-colors duration-200"
                      strokeWidth={1.75}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[#222222] text-sm mb-0.5">{title}</p>
                    <p className="text-[#6C757D] text-xs leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white font-semibold
                           text-sm px-6 py-3.5 rounded-xl hover:bg-[#152D6E] transition-colors shadow-sm"
              >
                Our Full Story
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about#team"
                className="inline-flex items-center gap-2 text-[#1E3A8A] font-semibold text-sm
                           hover:text-[#152D6E] transition-colors group"
              >
                Meet the Tutors
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
