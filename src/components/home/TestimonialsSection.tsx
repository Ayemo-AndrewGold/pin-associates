"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";

const testimonials = [
  {
    id: 1,
    name: "Adaeze Okonkwo",
    role: "Chartered Accountant, ICAN Fellow",
    company: "EY Nigeria",
    programme: "ICAN",
    result: "Passed Professional Level First Attempt",
    initials: "AO",
    color: "#1E3A8A",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80",
    quote:
      "I had tried the ICAN professional level twice with another tuition provider. When I enrolled at PIN, everything changed. The tutors broke down complex topics with clinical precision. The mock exams alone were worth the entire tuition fee. I passed all three papers in one diet. PIN does exactly what it says you pass.",
    stars: 5,
    year: "2024",
  },
  {
    id: 2,
    name: "Emeka Nwosu",
    role: "Tax Manager",
    company: "KPMG Nigeria",
    programme: "CITN",
    result: "Passed with Distinction",
    initials: "EN",
    color: "#16A34A",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
    quote:
      "The CITN programme at PIN is exceptionally well structured. The tax law lectures were the best I have attended detailed, practical, and directly exam-relevant. My tutor had actual tax practice experience which made a real difference. I passed with distinction and I credit PIN entirely.",
    stars: 5,
    year: "2024",
  },
  {
    id: 3,
    name: "Chisom Ejike",
    role: "ACCA Affiliate",
    company: "Deloitte Nigeria",
    programme: "ACCA",
    result: "All Strategic Level Papers Cleared",
    initials: "CE",
    color: "#7C3AED",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&q=80",
    quote:
      "Balancing work and ACCA studies is genuinely difficult. PIN's weekend and evening classes were designed for people like me. The online resources especially the question bank and CBT practice tests were available whenever I needed them. The support from the tutors was consistent and personal. Highly recommended.",
    stars: 5,
    year: "2023",
  },
  {
    id: 4,
    name: "Oluwafemi Adeleke",
    role: "Financial Controller",
    company: "Access Bank Plc",
    programme: "ICAN",
    result: "ICAN Fellow Fully Qualified",
    initials: "OA",
    color: "#0891B2",
    image: "",
    quote:
      "I have been a student at PIN from ATS through to ICAN Fellowship. The consistency in quality, the approachability of tutors, and the structured resources have been remarkable across every level. PIN is genuinely invested in student success not just at exam time, but throughout the professional journey.",
    stars: 5,
    year: "2023",
  },
  {
    id: 5,
    name: "Ngozi Ibe",
    role: "IT Audit Specialist",
    company: "Zenith Bank Plc",
    programme: "CISA",
    result: "CISA Certified First Attempt",
    initials: "NI",
    color: "#D97706",
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=200&q=80",
    quote:
      "The CISA programme content can be overwhelming without the right guidance. PIN's structured study plan and the quality of the practice tests ensured I arrived at the exam fully prepared. The tutor's industry experience in IT governance added real depth to every session.",
    stars: 5,
    year: "2024",
  },
];

const passStats = [
  { value: "87%", label: "First-Attempt Pass Rate" },
  { value: "5,000+", label: "Graduates" },
  { value: "16+", label: "Years of Track Record" },
  { value: "9", label: "Programmes Offered" },
];

/* ── Avatar: shows photo if available, initials otherwise ── */
function Avatar({
  image,
  initials,
  color,
  size = 64,
}: {
  image?: string;
  initials: string;
  color: string;
  size?: number;
}) {
  const [failed, setFailed] = useState(false);

  if (image && !failed) {
    return (
      <div
        className="rounded-2xl overflow-hidden shadow-md flex-shrink-0"
        style={{ width: size, height: size }}
      >
        <img
          src={image}
          alt={initials}
          width={size}
          height={size}
          className="w-full h-full object-cover object-center"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div
      className="rounded-2xl flex items-center justify-center text-white font-heading font-bold shadow-md flex-shrink-0"
      style={{ width: size, height: size, backgroundColor: color, fontSize: size * 0.3 }}
    >
      {initials}
    </div>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const t = testimonials[active];

  const next = useCallback(
    () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1)),
    []
  );
  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));

  /* Auto-advance every 5 s — pauses on hover */
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, next]);

  return (
    <section
      className="section-py bg-[#F8F9FA]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-pin">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            label="Student Success"
            title="Thousands of Professionals. One Proven Path."
            highlight="Proven Path"
            description="Our students are chartered accountants, tax managers, auditors, and finance leaders at Nigeria's leading organisations. These are their stories."
            align="center"
          />
        </motion.div>

        {/* Main testimonial card */}
        <div className="mt-12 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-3xl shadow-lg border border-[#E9ECEF] overflow-hidden"
            >
              <div className="grid md:grid-cols-[1fr_2fr] divide-y md:divide-y-0 md:divide-x divide-[#F1F3F5]">
                {/* Left — profile */}
                <div className="p-8 md:p-10 flex flex-col justify-between bg-[#F8F9FA]">
                  <div>
                    {/* Avatar / Photo */}
                    <div className="mb-5">
                      <Avatar
                        image={t.image}
                        initials={t.initials}
                        color={t.color}
                        size={64}
                      />
                    </div>

                    <h3 className="font-heading font-bold text-[#222222] text-xl leading-tight mb-1">
                      {t.name}
                    </h3>
                    <p className="text-[#495057] text-sm font-medium mb-0.5">{t.role}</p>
                    <p className="text-[#ADB5BD] text-xs mb-4">{t.company}</p>

                    {/* Stars */}
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: t.stars }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#F4C430] text-[#F4C430]" />
                      ))}
                    </div>

                    <Badge variant="blue" size="sm">{t.programme}</Badge>
                  </div>

                  {/* Result */}
                  <div className="mt-6 bg-[#DCFCE7] border border-[#BBF7D0] rounded-xl px-4 py-3">
                    <p className="text-xs font-semibold text-[#ADB5BD] uppercase tracking-wide mb-1">
                      Outcome
                    </p>
                    <p className="text-sm font-bold text-[#16A34A] leading-snug">{t.result}</p>
                    <p className="text-xs text-[#ADB5BD] mt-1">{t.year} Diet</p>
                  </div>
                </div>

                {/* Right — quote */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <Quote className="w-10 h-10 text-[#DBEAFE] mb-5" />
                  <blockquote className="font-body text-[#343A40] text-lg leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-7 flex items-center justify-between">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`View testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-200 ${
                    i === active
                      ? "w-6 h-2 bg-[#1E3A8A]"
                      : "w-2 h-2 bg-[#DEE2E6] hover:bg-[#ADB5BD]"
                  }`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-xl border border-[#E9ECEF] bg-white flex items-center justify-center text-[#495057] hover:bg-[#EFF4FF] hover:border-[#1E3A8A] hover:text-[#1E3A8A] transition-all duration-200 shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-xl border border-[#E9ECEF] bg-white flex items-center justify-center text-[#495057] hover:bg-[#EFF4FF] hover:border-[#1E3A8A] hover:text-[#1E3A8A] transition-all duration-200 shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <a
            href="/testimonials"
            className="inline-flex items-center gap-2 text-[#1E3A8A] font-semibold text-sm hover:text-[#152D6E] transition-colors"
          >
            Read More Success Stories →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
