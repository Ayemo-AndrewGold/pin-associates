import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import AboutSection from "@/components/home/AboutSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import LearningJourneySection from "@/components/home/LearningJourneySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import RegistrationSection from "@/components/home/RegistrationSection";
import CorporateSection from "@/components/home/CorporateSection";
import FAQSection from "@/components/home/FAQSection";
import BlogSection from "@/components/home/BlogSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import ContactSection from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Pass Your Professional Exams With Confidence | PIN Consultancy Services",
  description:
    "PIN Consultancy Services (Pass It Now Associates) Nigeria's trusted professional examination tuition provider for ICAN, ACCA, CITN, CISA, ATS, and Diploma in IFRS. Expert tutors. Proven results.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ProgramsSection />
        <WhyChooseSection />
        <LearningJourneySection />
        <TestimonialsSection />
        <RegistrationSection />
        <CorporateSection />
        <FAQSection />
        <BlogSection />
        <ContactSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
