"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Menu, X, ChevronDown, GraduationCap, BookOpen, Users,
  BarChart3, Briefcase, FileText, Phone, LogIn,
} from "lucide-react";
import Image from "next/image";

const programs = [
  { label: "ICAN",               href: "/courses/ican",          desc: "Institute of Chartered Accountants of Nigeria" },
  { label: "ACCA",               href: "/courses/acca",          desc: "Association of Chartered Certified Accountants" },
  { label: "CITN",               href: "/courses/citn",          desc: "Chartered Institute of Taxation of Nigeria" },
  { label: "ATS",                href: "/courses/ats",           desc: "Accounting Technicians Scheme" },
  { label: "CISA",               href: "/courses/cisa",          desc: "Certified Information Systems Auditor" },
  { label: "Diploma in IFRS",    href: "/courses/ifrs-diploma",  desc: "International Financial Reporting Standards" },
  { label: "Corporate Training", href: "/courses/corporate",     desc: "Tailored workforce development programmes" },
  { label: "Business Consulting",href: "/courses/consulting",    desc: "Strategic business advisory services" },
];

const navLinks = [
  { label: "Home",            href: "/" },
  { label: "About",           href: "/about" },
  { label: "Courses",         href: "/courses",    dropdown: true },
  { label: "Corporate",       href: "/corporate" },
  { label: "Success Stories", href: "/testimonials" },
  { label: "Blog",            href: "/blog" },
  { label: "Contact",         href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setCoursesOpen(false);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCoursesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E9ECEF]"
            : "bg-transparent"
        )}
      >
        {/* Top bar */}
        <div className={cn(
          "hidden lg:block border-b transition-all duration-300",
          scrolled ? "border-[#E9ECEF] bg-[#F8F9FA]" : "border-white/10 bg-[#152D6E]"
        )}>
          {/* <div className="container-pin flex items-center justify-between py-2">
            <div className="flex items-center gap-6">
              <a
                href="tel:+2348000000000"
                className={cn(
                  "flex items-center gap-1.5 text-xs font-medium transition-colors",
                  scrolled ? "text-[#495057] hover:text-[#1E3A8A]" : "text-white/70 hover:text-white"
                )}
              >
                <Phone className="w-3 h-3" />
                +234 800 000 0000
              </a>
              <span className={cn("text-xs", scrolled ? "text-[#ADB5BD]" : "text-white/40")}>|</span>
              <a
                href="mailto:info@pinassociates.com.ng"
                className={cn(
                  "text-xs font-medium transition-colors",
                  scrolled ? "text-[#495057] hover:text-[#1E3A8A]" : "text-white/70 hover:text-white"
                )}
              >
                info@pinassociates.com.ng
              </a>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className={cn("font-medium", scrolled ? "text-[#16A34A]" : "text-[#F4C430]")}>
                📢 Nov/Dec 2025 Diet Registration Now Open
              </span>
            </div>
          </div> */}
        </div>

        {/* Main nav */}
        <nav className="container-pin flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className=" bg-[#EFF4FF] rounded-xl flex items-center justify-center shadow-sm group-hover:bg-[#152D6E] transition-colors">
              <Image
                src="/images/pin-logo.png"
                alt="PIN Consultancy Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>

            <div className="leading-none">
              <span
                className={cn(
                  "block font-heading font-bold text-base tracking-tight transition-colors",
                  scrolled ? "text-[#1E3A8A]" : "text-white"
                )}
              >
                PIN
              </span>

              <span
                className={cn(
                  "block text-[10px] font-medium tracking-wider uppercase transition-colors",
                  scrolled ? "text-[#6C757D]" : "text-white/60"
                )}
              >
                Associates
              </span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.label} ref={dropdownRef} className="relative">
                  <button
                    onClick={() => setCoursesOpen(!coursesOpen)}
                    className={cn(
                      "flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors",
                      isActive(link.href)
                        ? scrolled
                          ? "text-[#1E3A8A] bg-[#EFF4FF]"
                          : "text-white bg-white/10"
                        : scrolled
                          ? "text-[#1E3A8A] hover:text-[#152D6E] hover:bg-[#F8F9FA]"
                          : "text-white hover:text-white/80 hover:bg-white/10"
                    )}
                    aria-expanded={coursesOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown
                      className={cn("w-3.5 h-3.5 transition-transform", coursesOpen && "rotate-180")}
                    />
                  </button>

                  {/* Mega Dropdown */}
                  {coursesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] bg-white rounded-2xl shadow-xl border border-[#E9ECEF] overflow-hidden z-50">
                      <div className="p-3">
                        <div className="px-3 pt-2 pb-3 border-b border-[#F1F3F5] mb-3">
                          <p className="text-xs font-semibold text-[#ADB5BD] uppercase tracking-wider">
                            Professional Examination Programmes
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                          {programs.map((p) => (
                            <Link
                              key={p.href}
                              href={p.href}
                              className="flex flex-col gap-0.5 px-3 py-2.5 rounded-xl hover:bg-[#EFF4FF] transition-colors group"
                            >
                              <span className="text-sm font-semibold text-[#1E3A8A] group-hover:text-[#152D6E]">
                                {p.label}
                              </span>
                              <span className="text-xs text-[#6C757D] leading-tight">{p.desc}</span>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-3 pt-3 border-t border-[#F1F3F5] px-3 pb-1">
                          <Link
                            href="/courses"
                            className="text-xs font-semibold text-[#1E3A8A] hover:text-[#152D6E] flex items-center gap-1.5"
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                            View all programmes &amp; fees
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      "px-3.5 py-2 rounded-lg text-sm font-medium transition-colors",
                      isActive(link.href)
                        ? scrolled
                          ? "text-[#1E3A8A] bg-[#EFF4FF]"
                          : "text-white bg-white/10"
                        : scrolled
                          ? "text-[#1E3A8A] hover:text-[#152D6E] hover:bg-[#F8F9FA]"
                          : "text-white hover:text-white/80 hover:bg-white/10"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Desktop CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/portal/login"
              className={cn(
                "flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-xl transition-colors",
                scrolled
                  ? "text-[#1E3A8A] hover:text-[#152D6E] hover:bg-[#F8F9FA]"
                  : "text-white hover:text-white/80 hover:bg-white/10"
              )}
            >
              <LogIn className="w-4 h-4" />
              Student Portal
            </Link>
            <Link
              href="/apply"
              className="flex items-center gap-1.5 bg-[#F4C430] text-[#152D6E] text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-[#D4A820] transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              scrolled
                ? "text-[#222222] hover:bg-[#F1F3F5]"
                : "text-white hover:bg-white/10"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 right-0 w-[85vw] max-w-sm h-full bg-white shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-[#F1F3F5]">
              <div className="flex items-center gap-2.5">
                <div className=" bg-[#EFF4FF] rounded-xl flex items-center justify-center shadow-sm group-hover:bg-[#152D6E] transition-colors">
                <Image
                  src="/images/pin-logo.png"
                  alt="PIN Consultancy Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                </div>
                <span className="font-heading font-bold text-[#1E3A8A]">PIN ASSOCIATES</span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg text-[#6C757D] hover:bg-[#F1F3F5]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="p-4 space-y-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-[#222222] font-medium hover:bg-[#F8F9FA] transition-colors"
                    >
                      <span className="flex items-center gap-2.5">
                        <BookOpen className="w-4 h-4 text-[#1E3A8A]" />
                        {link.label}
                      </span>
                      <ChevronDown
                        className={cn("w-4 h-4 text-[#6C757D] transition-transform", mobileCoursesOpen && "rotate-180")}
                      />
                    </button>
                    {mobileCoursesOpen && (
                      <div className="mt-1 ml-4 space-y-1 border-l-2 border-[#EFF4FF] pl-4">
                        {programs.map((p) => (
                          <Link
                            key={p.href}
                            href={p.href}
                            className="block px-3 py-2 rounded-lg text-sm text-[#495057] hover:text-[#1E3A8A] hover:bg-[#EFF4FF] transition-colors font-medium"
                          >
                            {p.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                      isActive(link.href)
                        ? "bg-[#EFF4FF] text-[#1E3A8A]"
                        : "text-[#222222] hover:bg-[#F8F9FA]"
                    )}
                  >
                    {link.href === "/" }
                    {link.href === "/about"}
                    {link.href === "/corporate"}
                    {link.href === "/testimonials"}
                    {link.href === "/blog"}
                    {link.href === "/contact"}
                    {link.label}

                    {/* {link.href === "/" && <BarChart3 className="w-4 h-4 text-[#1E3A8A]" />}
                    {link.href === "/about" && <Users className="w-4 h-4 text-[#1E3A8A]" />}
                    {link.href === "/corporate" && <Briefcase className="w-4 h-4 text-[#1E3A8A]" />}
                    {link.href === "/testimonials" && <GraduationCap className="w-4 h-4 text-[#1E3A8A]" />}
                    {link.href === "/blog" && <FileText className="w-4 h-4 text-[#1E3A8A]" />}
                    {link.href === "/contact" && <Phone className="w-4 h-4 text-[#1E3A8A]" />}
                    {link.label} */}
                  </Link>
                )
              )}
            </nav>

            <div className="p-4 space-y-3 border-t border-[#F1F3F5]">
              {/* <Link
                href="/portal/login"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl border-2 border-[#1E3A8A] text-[#1E3A8A] text-sm font-semibold hover:bg-[#EFF4FF] transition-colors"
              >
                <LogIn className="w-4 h-4" />
                Student Portal
              </Link> */}
              <Link
                href="/apply"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-[#F4C430] text-[#152D6E] text-sm font-bold hover:bg-[#D4A820] transition-colors shadow-sm"
              >
                Apply Now →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
