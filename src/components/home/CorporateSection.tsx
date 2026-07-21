"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users, TrendingUp, Scale, Building2,
  FileText, Presentation, ArrowRight, CheckCircle2,
} from "lucide-react";

/* ─── Services ─────────────────────────────────────── */
const services = [
  {
    icon: Users,
    title: "Workforce Development",
    body: "Structured upskilling for finance, accounting, and audit teams on-site or online.",
    stat: "500+ staff trained",
  },
  {
    icon: TrendingUp,
    title: "Financial Consulting",
    body: "Advisory on financial reporting, IFRS compliance, internal controls, and management accounts.",
    stat: "IFRS-ready teams",
  },
  {
    icon: Scale,
    title: "Tax Advisory",
    body: "Corporate tax planning, FIRS compliance, transfer pricing documentation, and dispute support.",
    stat: "Tax-efficient outcomes",
  },
  {
    icon: Building2,
    title: "Business Strategy",
    body: "Financial modelling, feasibility studies, and strategic planning for SMEs and growing businesses.",
    stat: "Boardroom-ready insights",
  },
  {
    icon: FileText,
    title: "Regulatory Compliance",
    body: "Ensuring your organisation meets FIRS, SEC, CBN, and sector-specific regulatory requirements.",
    stat: "Zero regulatory failures",
  },
  {
    icon: Presentation,
    title: "Corporate Workshops",
    body: "Bespoke short-course workshops on IFRS updates, tax law changes, audit standards, and finance.",
    stat: "Custom-built programmes",
  },
];

/* ─── Clients ───────────────────────────────────────── */
const clients = [
  { name: "Dangote Group",     favicon: "https://www.google.com/s2/favicons?domain=dangote.com&sz=64" },
  { name: "GTBank",            favicon: "https://www.google.com/s2/favicons?domain=gtbank.com&sz=64" },
  { name: "Nestlé Nigeria",    favicon: "https://www.google.com/s2/favicons?domain=nestle.com&sz=64" },
  { name: "MTN Nigeria",       favicon: "https://res.cloudinary.com/yaovkmpi/image/upload/v1784556331/mtn_itwx4q.jpg" },
  { name: "First Bank",        favicon: "https://res.cloudinary.com/yaovkmpi/image/upload/v1784556324/First-Bank-New-Logo_x7xfgu.png" },
  { name: "Flour Mills",       favicon: "https://www.google.com/s2/favicons?domain=fmnplc.com&sz=64" },
  { name: "Lagos State Govt.", favicon: "https://res.cloudinary.com/yaovkmpi/image/upload/v1784556338/lagos-logo_kub7qs.png" },
  { name: "NNPC",              favicon: "https://res.cloudinary.com/yaovkmpi/image/upload/v1784556186/NNPC-Logo_c7frv9.jpg" },
];

/* ─── ClientLogo ────────────────────────────────────── */
function ClientLogo({ name, favicon }: { name: string; favicon: string }) {
  const [failed, setFailed] = useState(false);
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();

  return (
    <div
      className="flex-shrink-0 flex items-center gap-1 mx-4 px-5 py-4
                 hover:border-[#1E3A8A]/25 hover:shadow-md cursor-default
                 transition-all duration-200 group"
    >
      <div
        className="w-20 h-20 rounded-xl overflow-hidden bg-[#F8F9FA]
                   border border-[#E9ECEF] flex items-center justify-center flex-shrink-0"
      >
        {!failed ? (
          <img
            src={favicon}
            alt={name}
            width={40}
            height={40}
            className="w-full h-full object-contain"
            onError={() => setFailed(true)}
          />
        ) : (
          <span className="text-[11px] font-bold text-[#1E3A8A]">{initials}</span>
        )}
      </div>
      <span
        className="text-sm font-semibold text-[#343A40] whitespace-nowrap
                   group-hover:text-[#1E3A8A] transition-colors"
      >
        {name}
      </span>
    </div>
  );
}

/* ─── Section ───────────────────────────────────────── */
export default function CorporateSection() {
  const triple = [...clients, ...clients, ...clients];

  return (
    <section className="bg-white overflow-hidden">

      {/* ══════════════════════════════════════════════
          TOP BAND — dark navy, editorial header
          ══════════════════════════════════════════════ */}
      <div
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0B1F3A 0%, #1a3070 60%, #152D6E 100%)" }}
      >
        {/* Decorative circle */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(244,196,48,0.07) 0%, transparent 70%)" }}
        />

        <div className="container-pin py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left — label + headline + body */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20
                               rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430]" />
                <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">
                  Corporate Services
                </span>
              </span>

              <h2
                className="font-heading font-extrabold text-white leading-tight mb-5"
                style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.875rem)" }}
              >
                Professional Training &amp;<br />
                <span className="text-[#F4C430]">Advisory for Organisations</span>
              </h2>

              <p className="text-white/65 text-base leading-relaxed max-w-lg">
                We partner with leading Nigerian corporations, government agencies, and SMEs
                to develop finance teams, ensure regulatory compliance, and deliver
                practical business advisory that drives measurable results.
              </p>
            </motion.div>

            {/* Right — quick proof points */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { v: "500+",  l: "Staff Trained" },
                { v: "50+",   l: "Organisations Served" },
                { v: "16+",   l: "Years of Practice" },
                { v: "100%",  l: "Custom Programmes" },
              ].map(({ v, l }) => (
                <div
                  key={l}
                  className="bg-white/[0.07] border border-white/[0.12]
                             rounded-2xl px-5 py-5 backdrop-blur-sm"
                >
                  <p className="font-heading font-extrabold text-[#F4C430] text-2xl leading-none mb-1">
                    {v}
                  </p>
                  <p className="text-white/60 text-xs font-medium">{l}</p>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          LOGO CAROUSEL — trust band
          ══════════════════════════════════════════════ */}
      <div className="bg-[#F8F9FA] border-y border-[#E9ECEF] py-6">
        <p className="text-center text-[11px] font-bold text-[#ADB5BD] uppercase tracking-widest mb-5">
          Organisations We Have Worked With
        </p>
        <div
          className="overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right,transparent,black 8%,black 92%,transparent)",
            WebkitMaskImage: "linear-gradient(to right,transparent,black 8%,black 92%,transparent)",
          }}
        >
          <div className="flex items-center w-max corp-marquee">
            {triple.map((c, i) => (
              <ClientLogo key={`${c.name}-${i}`} {...c} />
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          SERVICES GRID
          ══════════════════════════════════════════════ */}
      <div className="container-pin py-16 lg:py-20">

        {/* Grid label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="h-px flex-1 bg-[#E9ECEF]" />
          <span className="text-xs font-bold text-[#ADB5BD] uppercase tracking-widest px-2">
            What We Deliver
          </span>
          <div className="h-px flex-1 bg-[#E9ECEF]" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E9ECEF] rounded-2xl overflow-hidden shadow-sm">
          {services.map(({ icon: Icon, title, body, stat }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="bg-white p-7 group hover:bg-[#EFF4FF]/60 transition-colors duration-300"
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl bg-[#EFF4FF] flex items-center justify-center mb-5
                           group-hover:bg-[#1E3A8A] transition-colors duration-300"
              >
                <Icon
                  className="w-5 h-5 text-[#1E3A8A] group-hover:text-white transition-colors duration-300"
                  strokeWidth={1.75}
                />
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-[#1E3A8A] text-base mb-2 leading-snug">
                {title}
              </h3>

              {/* Body */}
              <p className="text-[#6C757D] text-sm leading-relaxed mb-4">{body}</p>

              {/* Stat pill */}
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] flex-shrink-0" />
                <span className="text-xs font-semibold text-[#16A34A]">{stat}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5
                     bg-[#F8F9FA] border border-[#E9ECEF] rounded-2xl px-7 py-6"
        >
          <div>
            <p className="font-heading font-bold text-[#1E3A8A] text-lg mb-0.5">
              Ready to develop your team?
            </p>
            <p className="text-[#6C757D] text-sm">
              We provide tailored proposals within 48 hours.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/contact?type=corporate"
              className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white font-semibold
                         text-sm px-6 py-3.5 rounded-xl hover:bg-[#152D6E] transition-colors shadow-sm"
            >
              Request a Proposal
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/corporate"
              className="inline-flex items-center gap-2 text-[#1E3A8A] font-semibold
                         text-sm px-6 py-3.5 rounded-xl border border-[#1E3A8A]/20
                         hover:bg-[#EFF4FF] transition-all"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Keyframe */}
      <style>{`
        @keyframes corp-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        .corp-marquee {
          animation: corp-scroll 22s linear infinite;
        }
        .corp-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
