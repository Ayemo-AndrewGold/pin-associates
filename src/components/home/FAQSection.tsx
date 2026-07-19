"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";

const faqs = [
  {
    q: "Who can enrol in PIN's professional examination programmes?",
    a: "Our programmes are open to university students, polytechnic graduates, HND holders, degree holders, and working professionals. Entry requirements vary by programme ICAN Foundation requires a minimum of five O'Level credits, while ACCA Applied Knowledge has similar academic prerequisites. Our admissions team can advise you on the right entry point.",
  },
  {
    q: "Do you offer online classes or only in-person tuition?",
    a: "We offer both. Students can choose from weekday in-person classes, weekend intensive sessions, or live online classes conducted via our digital platform. All students regardless of mode have access to recorded sessions, study materials, and the CBT practice portal.",
  },
  {
    q: "What study materials are provided?",
    a: "All enrolled students receive comprehensive study packs including textbooks, past question compilations with detailed solutions, revision summaries, and access to the PIN digital study portal. Study materials are updated each diet to reflect current syllabi and examiner reports.",
  },
  {
    q: "How long does it take to complete the ICAN qualification?",
    a: "The ICAN qualification spans three levels: Foundation, Skills, and Professional. Each level typically takes two to three examination diets to complete. Full qualification can be achieved in three to five years depending on your study pace, prior exemptions, and examination performance.",
  },
  {
    q: "Can I sit ICAN exams while working full-time?",
    a: "Absolutely — the majority of our students are working professionals. Our evening, weekend, and online class options are specifically designed to accommodate full-time employment. Many of our most successful graduates balanced demanding careers with their studies.",
  },
  {
    q: "Does PIN help with ICAN, ACCA, and CITN student registration?",
    a: "Yes. Our admissions team provides guidance on registering with ICAN, ACCA, and CITN as a student member, selecting exemptions, and understanding the examination structure. We do not register students on their behalf, but we make the process straightforward.",
  },
  {
    q: "Are instalment payment plans available?",
    a: "Yes. We offer flexible payment plans to make tuition accessible. Students can pay in instalments across the study period. Contact our admissions team to discuss the options available for your chosen programme.",
  },
  {
    q: "What makes PIN's pass rates so high?",
    a: "Our results are driven by exam-intelligent teaching, small class sizes, continuous assessment, and a culture of accountability. Tutors are active professionals who teach to the exam not just the curriculum. Mock examinations, question analysis sessions, and personalised feedback are core parts of every programme.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-py bg-white">
      <div className="container-pin">
        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-14 lg:gap-20 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <SectionHeader
              label="FAQ"
              title="Questions We Hear Most Often"
              highlight="Most Often"
              description="Everything you need to know before enrolling. Can't find your answer here? Our team is happy to help."
              align="left"
            />

            <div className="mt-8 p-4 sm:p-6 bg-[#EFF4FF] rounded-2xl border border-[#DBEAFE]">
              <p className="font-heading font-bold text-[#1E3A8A] text-base mb-2">
                Still have questions?
              </p>
              <p className="text-[#495057] text-sm leading-relaxed mb-4">
                Our admissions advisors are available Monday to Friday 8am – 6pm,
                and Saturday 9am – 3pm.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#F4C430] text-[#152D6E] font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-[#152D6E] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Right — accordion */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-[#1E3A8A]/20 bg-[#EFF4FF]/60 shadow-sm"
                      : "border-[#E9ECEF] bg-white hover:border-[#DBEAFE]"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-4 sm:px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-heading font-semibold text-base leading-snug transition-colors ${
                        isOpen ? "text-[#1E3A8A]" : "text-[#222222]"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                        isOpen
                          ? "bg-[#1E3A8A] text-white"
                          : "bg-[#F1F3F5] text-[#6C757D]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <p className=" px-4 sm:px-6 pb-5 text-[#495057] text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
