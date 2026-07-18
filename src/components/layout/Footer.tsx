"use client";

import Link from "next/link";
import {
  GraduationCap, MapPin, Phone, Mail, Clock,
  Globe, MessageCircle, Camera, Briefcase, PlayCircle,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
const programs = [
  { label: "ICAN",              href: "/courses/ican" },
  { label: "ACCA",              href: "/courses/acca" },
  { label: "CITN",              href: "/courses/citn" },
  { label: "ATS",               href: "/courses/ats" },
  { label: "CISA",              href: "/courses/cisa" },
  { label: "Diploma in IFRS",   href: "/courses/ifrs-diploma" },
  { label: "Corporate Training",href: "/courses/corporate" },
];

const quickLinks = [
  { label: "About PIN",         href: "/about" },
  { label: "Our Tutors",        href: "/about#team" },
  { label: "Success Stories",   href: "/testimonials" },
  { label: "Corporate Services",href: "/corporate" },
  { label: "Blog & Insights",   href: "/blog" },
  { label: "Contact Us",        href: "/contact" },
  { label: "Apply Now",         href: "/apply" },
];

const resources = [
  { label: "Student Portal",    href: "/portal/student" },
  { label: "Study Materials",   href: "/portal/student/materials" },
  { label: "CBT Practice",      href: "/portal/student/cbt" },
  { label: "Exam Timetable",    href: "/portal/student/timetable" },
  { label: "FAQs",              href: "/#faq" },
  { label: "Privacy Policy",    href: "/privacy" },
  { label: "Terms of Use",      href: "/terms" },
];

const socials = [
  { Icon: Globe,         href: "#", label: "Facebook" },
  { Icon: MessageCircle, href: "#", label: "Twitter / X" },
  { Icon: Camera,        href: "#", label: "Instagram" },
  { Icon: Briefcase,     href: "#", label: "LinkedIn" },
  { Icon: PlayCircle,    href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white">
      {/* Thin gold divider at the very top */}
      <div className=" bg-gradient-to-r from-transparent via-[#F4C430] to-transparent" />

      {/* CTA band */}
      <div className="bg-[#F4C430]">
        <div className="container-pin py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-bold text-2xl text-[#152D6E] leading-tight">
              Ready to start your journey?
            </h3>
            <p className="text-[#1E3A8A] text-sm mt-1 font-medium">
              Join thousands of professionals who passed their exams with PIN.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/apply"
              className="bg-[#1E3A8A] text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#152D6E] transition-colors shadow-sm flex items-center gap-2"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/30 text-[#152D6E] font-semibold text-sm px-6 py-3 rounded-xl hover:bg-white/50 transition-colors"
            >
              Speak to an Advisor
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-pin py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <div className="w-9 h-9 bg-[#F5F5F5] rounded-xl flex items-center justify-center shadow-sm group-hover:bg-[#152D6E] transition-colors">
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
                <span className="block text-[10px] font-medium text-white/50 tracking-wider uppercase">
                  Pass It Now Associates
                </span>
              </div>
            </Link>

            <p className="text-[#C8D6E5] text-sm leading-relaxed max-w-xs mb-8">
              Nigeria&apos;s trusted professional examination tuition provider.
              We prepare students and working professionals to pass ICAN, ACCA,
              CITN, CISA, ATS, and more on their first attempt.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3 text-sm text-[#C8D6E5]">
                <MapPin className="w-4 h-4 text-[#F4C430] flex-shrink-0 mt-0.5" />
                <span>12 Professional Drive, Victoria Island, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#C8D6E5]">
                <Phone className="w-4 h-4 text-[#F4C430] flex-shrink-0" />
                <a href="tel:+2348000000000" className="hover:text-white transition-colors">
                  +234 800 000 0000
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#C8D6E5]">
                <Mail className="w-4 h-4 text-[#F4C430] flex-shrink-0" />
                <a href="mailto:info@pinassociates.com.ng" className="hover:text-white transition-colors">
                  info@pinassociates.com.ng
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#C8D6E5]">
                <Clock className="w-4 h-4 text-[#F4C430] flex-shrink-0 mt-0.5" />
                <span>Mon – Fri: 8am – 6pm | Sat: 9am – 3pm</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#F4C430] hover:text-[#152D6E] transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Programmes */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-5">
              Programmes
            </h4>
            <ul className="space-y-3">
              {programs.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-sm text-[#C8D6E5] hover:text-[#F4C430] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C8D6E5]/50 group-hover:bg-[#F4C430] transition-colors flex-shrink-0" />
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[#C8D6E5] hover:text-[#F4C430] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C8D6E5]/50 group-hover:bg-[#F4C430] transition-colors flex-shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-5">
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="text-sm text-[#C8D6E5] hover:text-[#F4C430] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C8D6E5]/50 group-hover:bg-[#F4C430] transition-colors flex-shrink-0" />
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <p className="text-sm font-semibold text-white mb-2">Stay Updated</p>
              <p className="text-xs text-white/50 mb-3">Get exam schedules & study tips</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#F4C430] transition-colors min-w-0"
                />
                <button
                  type="submit"
                  className="bg-[#F4C430] text-[#152D6E] font-bold text-xs px-3 py-2 rounded-lg hover:bg-[#D4A820] transition-colors flex-shrink-0"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.07]">
        <div className="container-pin py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} PIN Consultancy Services (Pass It Now Associates). All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/35">
            <Link href="/privacy" className="hover:text-[#F4C430] transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-[#F4C430] transition-colors">Terms of Use</Link>
            <span>·</span>
            <Link href="/sitemap.xml" className="hover:text-[#F4C430] transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
