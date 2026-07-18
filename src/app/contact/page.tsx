import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/home/ContactSection";
import { Globe, MessageCircle, Camera, Briefcase, PlayCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with PIN Consultancy Services. Our admissions team is available Monday to Friday 8am – 6pm and Saturday 9am – 3pm. Enquire about programmes, fees, or corporate training.",
};

const socials = [
  { Icon: Globe,          label: "Facebook",  href: "#" },
  { Icon: MessageCircle,  label: "Twitter",   href: "#" },
  { Icon: Camera,         label: "Instagram", href: "#" },
  { Icon: Briefcase,      label: "LinkedIn",  href: "#" },
  { Icon: PlayCircle,     label: "YouTube",   href: "#" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="relative pt-40 pb-16"
          style={{ background: "linear-gradient(135deg, #0F2055 0%, #1a3070 50%, #152D6E 100%)" }}
        >
          <div className="container-pin relative z-10 text-center">
            <span className="section-label section-label-gold mb-6 inline-flex">Get in Touch</span>
            <h1 className="font-heading font-extrabold text-white text-4xl md:text-5xl leading-tight mb-4">
              We&apos;d Love to Hear From You
            </h1>
            <p className="text-white/65 text-lg max-w-xl mx-auto leading-relaxed">
              Whether you&apos;re ready to enrol, have a question about a programme, or want to discuss
              corporate training our team is here and responsive.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
            <svg viewBox="0 0 1440 40" fill="none" className="w-full">
              <path d="M0 40 L0 20 Q720 0 1440 20 L1440 40 Z" fill="white" />
            </svg>
          </div>
        </section>

        <ContactSection />

        {/* Social links */}
        <section className="py-14 bg-[#F8F9FA]">
          <div className="container-pin text-center">
            <p className="text-sm font-semibold text-[#ADB5BD] uppercase tracking-wider mb-5">
              Follow us for exam updates, tips &amp; announcements
            </p>
            <div className="flex items-center justify-center gap-4">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-11 h-11 rounded-xl bg-white border border-[#E9ECEF] flex items-center justify-center text-[#6C757D] hover:bg-[#1E3A8A] hover:text-white hover:border-[#1E3A8A] transition-all shadow-sm"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
