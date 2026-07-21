import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/home/ContactSection";
import { Globe, MessageCircle, Camera, Briefcase, PlayCircle } from "lucide-react";
import PageHero from "@/components/layout/PageHero";

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

        <PageHero
          // label="Get in Touch"
          title="We&apos;d Love to Hear From You"
          description=" Whether you&apos;re ready to enrol, have a question about a programme, or want to discuss
                      corporate training our team is here and responsive."
          slides={[
            { id: 1, src: "https://res.cloudinary.com/yaovkmpi/image/upload/v1784613463/8_xzeshb.png", alt: "University students studying together" },
            { id: 2, src: "https://res.cloudinary.com/yaovkmpi/image/upload/v1784557870/Purple_Abstract_Graphic_Design_LinkedIn_Article_Cover_Image_1_lle3mb.png", alt: "Professional accounting class" },
            { id: 3, src: "https://res.cloudinary.com/yaovkmpi/image/upload/v1784613463/7_czosms.png", alt: "Corporate learning session" },
          ]}
        />

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
