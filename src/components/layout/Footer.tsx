"use client";

import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap, MapPin, Phone, Mail, Clock,
  Globe, MessageCircle, Camera, Briefcase, PlayCircle,
  ArrowRight,
} from "lucide-react";

const programs = [
  { label: "ICAN",               href: "/courses/ican" },
  { label: "ACCA",               href: "/courses/acca" },
  { label: "CITN",               href: "/courses/citn" },
  { label: "ATS",                href: "/courses/ats" },
  { label: "CISA",               href: "/courses/cisa" },
  { label: "Diploma in IFRS",    href: "/courses/ifrs-diploma" },
  { label: "Corporate Training", href: "/courses/corporate" },
];

const quickLinks = [
  { label: "About PIN",          href: "/about" },
  { label: "Our Tutors",         href: "/about#team" },
  { label: "Success Stories",    href: "/testimonials" },
  { label: "Corporate Services", href: "/corporate" },
  { label: "Blog & Insights",    href: "/blog" },
  { label: "Contact Us",         href: "/contact" },
  { label: "Apply Now",          href: "/apply" },
];

const resources = [
  { label: "Student Portal",     href: "/portal/student" },
  { label: "Study Materials",    href: "/portal/student/materials" },
  { label: "CBT Practice",       href: "/portal/student/cbt" },
  { label: "Exam Timetable",     href: "/portal/student/timetable" },
  { label: "FAQs",               href: "/#faq" },
  { label: "Privacy Policy",     href: "/privacy" },
  { label: "Terms of Use",       href: "/terms" },
];

const socials = [
  { Icon: Globe,          href: "#", label: "Facebook" },
  { Icon: MessageCircle,  href: "#", label: "Twitter / X" },
  { Icon: Camera,         href: "#", label: "Instagram" },
  { Icon: Briefcase,      href: "#", label: "LinkedIn" },
  { Icon: PlayCircle,     href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0B1F3A] text-white overflow-hidden">

      {/* ── Background image with dark overlay ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
          src="https://res.cloudinary.com/yaovkmpi/image/upload/v1784484978/wmremove-transformed_1_1_el1lye.jpg"
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 40%",
            opacity: 0.22,
          }}
        />
        {/* Overlay — dark enough to keep text readable, light enough to show image */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,31,58,0.78) 0%, rgba(11,31,58,0.65) 50%, rgba(11,31,58,0.82) 100%)",
          }}
        />
      </div>

      {/* ── Gold top divider ── */}
      <div className="relative bg-gradient-to-r from-transparent via-[#F4C430] to-transparent" />

      {/* ════════════════════════════════════════
          CTA BAND
          ════════════════════════════════════════ */}
      <div className="relative bg-[#F4C430]">
        <div className="container-pin py-8 sm:py-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#152D6E] leading-tight">
                Ready to start your journey?
              </h3>
              <p className="text-[#1E3A8A] text-sm mt-1 font-medium">
                Join thousands of professionals who passed with PIN.
              </p>
            </div>
            {/* Buttons — stack on xs, row on sm+ */}
            <div className="flex flex-col xs:flex-row sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto flex-shrink-0">
              <Link
                href="/apply"
                className="flex items-center justify-center gap-2 bg-[#1E3A8A] text-white font-bold
                           text-sm px-5 py-3 rounded-xl hover:bg-[#152D6E] transition-colors shadow-sm
                           whitespace-nowrap"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center bg-white/30 text-[#152D6E] font-semibold
                           text-sm px-5 py-3 rounded-xl hover:bg-white/50 transition-colors
                           whitespace-nowrap"
              >
                Speak to an Advisor
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
          MAIN FOOTER BODY
          ════════════════════════════════════════ */}
      <div className="relative container-pin pt-12 pb-10 sm:pt-16 sm:pb-14">

        {/* Brand row — full width on mobile, sits above the link columns */}
        <div className="mb-10 pb-10 border-b border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-start gap-8 sm:gap-12">

            {/* Logo + description */}
            <div className="flex-shrink-0 max-w-xs">
              <Link href="/" className="flex items-center gap-3 group mb-5">
                <div className="w-9 h-9 bg-[#F5F5F5] rounded-xl flex items-center justify-center
                               shadow-sm group-hover:bg-[#F4C430] transition-colors flex-shrink-0">
                  <Image
                    src="/images/pin-logo.png"
                    alt="PIN Consultancy Logo"
                    width={23}
                    height={23}
                    className="object-contain"
                  />
                </div>
                <div className="leading-none">
                  <span className="block font-heading font-bold text-white text-lg">
                    PIN Consultancy
                  </span>
                  <span className="block text-[10px] font-medium text-white/50 tracking-wider uppercase mt-0.5">
                    Pass It Now Associates
                  </span>
                </div>
              </Link>

              <p className="text-[#C8D6E5] text-sm leading-relaxed mb-5">
                Nigeria&apos;s trusted professional examination tuition provider
                ICAN, ACCA, CITN, CISA, ATS, and more, on your first attempt.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-2.5">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center
                               text-white/60 hover:bg-[#F4C430] hover:text-[#152D6E]
                               transition-all duration-200"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact info — horizontal on mobile, compact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
              {[
                { icon: MapPin,  text: "12 Professional Drive, Victoria Island, Lagos", href: undefined },
                { icon: Phone,   text: "+234 800 000 0000",               href: "tel:+2348000000000" },
                { icon: Mail,    text: "info@pinassociates.com.ng",        href: "mailto:info@pinassociates.com.ng" },
                { icon: Clock,   text: "Mon–Fri: 8am–6pm | Sat: 9am–3pm", href: undefined },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-start gap-2.5 text-sm text-[#C8D6E5]">
                  <Icon className="w-3.5 h-3.5 text-[#F4C430] flex-shrink-0 mt-0.5" />
                  {href ? (
                    <a href={href} className="hover:text-white transition-colors leading-snug">{text}</a>
                  ) : (
                    <span className="leading-snug">{text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Link columns — 2-col on mobile, 3-col on sm, keep as-is on lg */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10 mb-10">

          {/* Programmes */}
          <div>
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-widest mb-4">
              Programmes
            </h4>
            <ul className="space-y-2.5">
              {programs.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-sm text-[#C8D6E5] hover:text-[#F4C430] transition-colors
                               flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C8D6E5]/40 group-hover:bg-[#F4C430]
                                     transition-colors flex-shrink-0" />
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[#C8D6E5] hover:text-[#F4C430] transition-colors
                               flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C8D6E5]/40 group-hover:bg-[#F4C430]
                                     transition-colors flex-shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources + mini newsletter */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-widest mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 mb-7">
              {resources.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="text-sm text-[#C8D6E5] hover:text-[#F4C430] transition-colors
                               flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C8D6E5]/40 group-hover:bg-[#F4C430]
                                     transition-colors flex-shrink-0" />
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mini newsletter */}
            <div>
              <p className="text-sm font-semibold text-white mb-1">Stay Updated</p>
              <p className="text-xs text-white/50 mb-3">Get exam schedules &amp; study tips</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 min-w-0 bg-white/10 border border-white/20 rounded-lg
                             px-3 py-2 text-sm text-white placeholder-white/40
                             focus:outline-none focus:border-[#F4C430] transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#F4C430] text-[#152D6E] font-bold text-xs px-3 py-2 rounded-lg
                             hover:bg-[#D4A820] transition-colors flex-shrink-0"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="relative border-t border-white/[0.07]">
        <div className="container-pin py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} PIN Consultancy Services (Pass It Now Associates). All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-white/35">
            <Link href="/privacy"     className="hover:text-[#F4C430] transition-colors">Privacy Policy</Link>
            <span className="text-white/20">·</span>
            <Link href="/terms"       className="hover:text-[#F4C430] transition-colors">Terms of Use</Link>
            <span className="text-white/20">·</span>
            <Link href="/sitemap.xml" className="hover:text-[#F4C430] transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
