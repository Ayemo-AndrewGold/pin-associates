import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Star, Quote, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import NewsletterSection from "@/components/home/NewsletterSection";
import StatsSection from "@/components/home/StatsSection";
import PageHero from "@/components/layout/PageHero";
import TestimonialAvatar from "@/components/ui/TestimonialAvatar";

export const metadata: Metadata = {
  title: "Student Success Stories",
  description:
    "Read success stories from PIN Consultancy students who passed their ICAN, ACCA, CITN, CISA, ATS, and IFRS examinations. Real outcomes from real professionals.",
};

const testimonials = [
  {
    name: "Adaeze Okonkwo",    role: "Chartered Accountant, EY Nigeria",
    programme: "ICAN",         result: "Professional Level First Attempt",
    year: "2024",              initials: "AO", color: "#1E3A8A", stars: 5,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80",
    quote: "I had tried the ICAN professional level twice with another tuition provider. When I enrolled at PIN, everything changed. The tutors broke down complex topics with clinical precision. The mock exams alone were worth the entire tuition fee. I passed all three papers in one diet.",
  },
  {
    name: "Emeka Nwosu",       role: "Tax Manager, KPMG Nigeria",
    programme: "CITN",         result: "Passed with Distinction",
    year: "2024",              initials: "EN", color: "#16A34A", stars: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
    quote: "The CITN programme at PIN is exceptionally well structured. The tax law lectures were the best I have attended detailed, practical, and directly exam-relevant. My tutor had actual tax practice experience which made a real difference.",
  },
  {
    name: "Chisom Ejike",      role: "ACCA Affiliate, Deloitte Nigeria",
    programme: "ACCA",         result: "Strategic Level All Papers Cleared",
    year: "2023",              initials: "CE", color: "#7C3AED", stars: 5,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&q=80",
    quote: "Balancing work and ACCA studies is genuinely difficult. PIN's weekend and evening classes were designed for people like me. The online resources especially the CBT practice tests were available whenever I needed them.",
  },
  {
    name: "Oluwafemi Adeleke", role: "Financial Controller, Access Bank",
    programme: "ICAN",         result: "ICAN Fellow Fully Qualified",
    year: "2023",              initials: "OA", color: "#0891B2", stars: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    quote: "I have been a student at PIN from ATS through to ICAN Fellowship. The consistency in quality, the approachability of tutors, and the structured resources have been remarkable across every level.",
  },
  {
    name: "Ngozi Ibe",         role: "IT Audit Specialist, Zenith Bank",
    programme: "CISA",         result: "CISA Certified First Attempt",
    year: "2024",              initials: "NI", color: "#D97706", stars: 5,
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=200&q=80",
    quote: "The CISA programme content can be overwhelming without the right guidance. PIN's structured study plan and the quality of the practice tests ensured I arrived at the exam fully prepared.",
  },
  {
    name: "Kelechi Okafor",    role: "Senior Accountant, NNPC",
    programme: "ICAN",         result: "Skills Level All 5 Papers",
    year: "2024",              initials: "KO", color: "#1E3A8A", stars: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    quote: "The Financial Reporting and Performance Management classes at PIN were outstanding. The tutor's ability to connect theory with real-world applications genuinely helped me understand the material rather than just memorise it.",
  },
  {
    name: "Tolu Fashola",      role: "Finance Analyst, MTN Nigeria",
    programme: "ACCA",         result: "Applied Skills Level Complete",
    year: "2023",              initials: "TF", color: "#16A34A", stars: 5,
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&q=80",
    quote: "I chose PIN because of their track record. I was not disappointed. The study materials are comprehensive and up-to-date, the tutors are accessible, and the mock exams are genuinely challenging which is exactly what you need.",
  },
  {
    name: "Amara Diallo",      role: "Finance Controller, Nestlé Nigeria",
    programme: "Diploma IFRS",  result: "DipIFRS Distinction",
    year: "2024",              initials: "AD", color: "#0891B2", stars: 5,
    image: "https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=200&q=80",
    quote: "I enrolled in the Diploma in IFRS because our organisation was transitioning reporting standards. The programme at PIN was practical, focused, and immediately applicable. I passed with distinction.",
  },
  {
    name: "Segun Badmus",      role: "Audit Manager, PwC Nigeria",
    programme: "ICAN",         result: "Foundation to Professional Completed",
    year: "2022",              initials: "SB", color: "#7C3AED", stars: 5,
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&q=80",
    quote: "PIN was with me through every level of ICAN Foundation, Skills, and Professional. Three different tutors, same quality, same commitment. I am now a qualified chartered accountant and I credit PIN entirely for my success.",
  },
];

const stats = [
  { v: "5,000+", l: "Total Graduates" },
  { v: "87%",    l: "First-Attempt Pass Rate" },
  { v: "94%",    l: "Student Satisfaction" },
  { v: "16+",    l: "Years of Results" },
];

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <PageHero
  label="Success Stories"
  title="Thousands of Professionals. One Proven Path."
  description="PIN graduates are chartered accountants, tax managers, IT auditors, and finance
              directors at Nigeria&apos;s leading organisations. These are their stories."
  slides={[
    { id: 1, src: "https://res.cloudinary.com/yaovkmpi/image/upload/v1784557870/Purple_Abstract_Graphic_Design_LinkedIn_Article_Cover_Image_1_lle3mb.png", alt: "University students studying together" },
    { id: 2, src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=85", alt: "Professional accounting class" },
    { id: 3, src: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1600&q=85", alt: "Corporate learning session" },
  ]}
/>

        {/* Stats */}
        <StatsSection />

        {/* Testimonials grid */}
        <section className="section-py bg-[#F8F9FA]">
          <div className="container-pin">
            <SectionHeader label="Student Stories" title="In Their Own Words" align="center" />
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-white rounded-2xl border border-[#E9ECEF] p-6 hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col">
                  <Quote className="w-8 h-8 text-[#DBEAFE] mb-4" />
                  <p className="text-[#343A40] text-sm leading-relaxed italic flex-1 mb-5">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: t.stars }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#F4C430] text-[#F4C430]" />
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <TestimonialAvatar
                        image={t.image}
                        initials={t.initials}
                        color={t.color}
                        size={40}
                      />
                      <div>
                        <p className="font-semibold text-[#222222] text-sm">{t.name}</p>
                        <p className="text-[#ADB5BD] text-xs">{t.role}</p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <Badge variant="blue" size="sm">{t.programme}</Badge>
                      <span className="text-xs text-[#16A34A] font-semibold">{t.result}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="container-pin text-center">
            <h2 className="font-heading font-bold text-[#222222] text-3xl mb-4">
              Your Story Starts Here
            </h2>
            <p className="text-[#6C757D] text-base max-w-xl mx-auto mb-8">
              Join thousands of professionals who took the decision to invest in their qualification
              and transformed their careers with PIN.
            </p>
            <Link href="/apply" className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white font-bold text-base px-10 py-4 rounded-2xl hover:bg-[#152D6E] transition-colors shadow-sm">
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* <NewsletterSection /> */}
      </main>
      <Footer />
    </>
  );
}
