"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Play, Award, Users, TrendingUp,
  Calendar, ChevronLeft, ChevronRight,
} from "lucide-react";

const badges = [
  { icon: Users,      value: "5,000+", label: "Students Trained" },
  { icon: TrendingUp, value: "87%",    label: "Pass Rate" },
  { icon: Award,      value: "15+",    label: "Expert Tutors" },
  { icon: Calendar,   value: "2009",   label: "Est. Year" },
];

const floatingCards = [
  { id: 1, name: "Adaeze Okonkwo", exam: "ICAN Final Level",  result: "Passed First Attempt", initials: "AO", color: "bg-[#1E3A8A]" },
  { id: 2, name: "Emeka Nwosu",    exam: "ACCA Professional", result: "Distinction",             initials: "EN", color: "bg-[#16A34A]" },
];

const bgSlides = [
  { id: 1, src: "https://res.cloudinary.com/yaovkmpi/image/upload/v1784488319/pexels-rdne-7821702_1_1_xq4cuh.jpg", alt: "Professional accounting class" },
  { id: 2, src: "https://res.cloudinary.com/yaovkmpi/image/upload/v1784484978/wmremove-transformed_1_1_el1lye.jpg", alt: "Corporate learning session" },
  { id: 3, src: "https://res.cloudinary.com/yaovkmpi/image/upload/v1784489637/pexels-rdne-7821685_1_1_pitkbm.jpg", alt: "Graduation and professional success" },
  { id: 4, src: "https://res.cloudinary.com/yaovkmpi/image/upload/v1784488680/pexels-pavel-danilyuk-7654129_1_1_l7olra.jpg", alt: "Professionals reviewing documents" },
];

const cardSlides = [
  { id: 1, src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=85", alt: "Students studying at PIN Consultancy" },
  { id: 2, src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=700&q=85", alt: "Student reviewing notes before exam" },
  { id: 3, src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=700&q=85", alt: "Graduate celebrating exam success" },
];

export default function HeroSection() {
  const [bgIdx,   setBgIdx]   = useState(0);
  const [cardIdx, setCardIdx] = useState(0);
  const [paused,  setPaused]  = useState(false);

  const bgTimer   = useRef<ReturnType<typeof setInterval> | null>(null);
  const cardTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo   = useCallback((i: number) => setBgIdx(((i % bgSlides.length) + bgSlides.length) % bgSlides.length), []);
  const bgNext = useCallback(() => goTo(bgIdx + 1), [bgIdx, goTo]);
  const bgPrev = useCallback(() => goTo(bgIdx - 1), [bgIdx, goTo]);

  useEffect(() => {
    if (paused) return;
    bgTimer.current = setInterval(bgNext, 6000);
    return () => { if (bgTimer.current) clearInterval(bgTimer.current); };
  }, [paused, bgNext]);

  useEffect(() => {
    if (paused) return;
    cardTimer.current = setInterval(() => setCardIdx((i) => (i + 1) % cardSlides.length), 4500);
    return () => { if (cardTimer.current) clearInterval(cardTimer.current); };
  }, [paused]);

  return (
    <section
      className="relative w-full overflow-hidden"
      /* Fixed pixel height on mobile so background truly fills; svh on desktop */
      style={{ minHeight: "100svh" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ══════════════════════════════════════════
          BACKGROUND CAROUSEL
          position:absolute + inset-0 + w/h:100%
          guarantees full coverage on every device
          ══════════════════════════════════════════ */}
      <div
        className="absolute inset-0"
        style={{ width: "100%", height: "100%" }}
        aria-hidden="true"
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={bgSlides[bgIdx].id}
            className="absolute inset-0"
            style={{ width: "100%", height: "100%" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            {/*
              The img uses position:absolute + inset:0 + w/h:100% so it
              fills its motion.div parent regardless of the section height.
              object-cover + object-center handle portrait vs landscape.
            */}
            <img
              src={bgSlides[bgIdx].src}
              alt={bgSlides[bgIdx].alt}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
              loading="eager"
              decoding="async"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay — heavier on mobile for readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg,rgba(11,20,45,0.82) 0%,rgba(15,32,85,0.72) 50%,rgba(11,20,45,0.80) 100%)",
          }}
        />

        {/* Bottom-fade so wave blends cleanly */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            background: "linear-gradient(180deg,transparent 0%,rgba(11,20,45,0.55) 100%)",
          }}
        />
      </div>

      {/* ══════════════════════════════════════════
          CAROUSEL ARROWS  — z-20 so they sit above overlay
          ══════════════════════════════════════════ */}
      <button
        onClick={bgPrev}
        aria-label="Previous slide"
        className="absolute hidden lg:flex left-3 sm:left-5 lg:left-8 top-1/2 -translate-y-1/2 z-20
                   w-9 h-9 sm:w-11 sm:h-11 rounded-full
                   bg-white/10 border border-white/20 backdrop-blur-sm
                   flex items-center justify-center text-white
                   hover:bg-white/25 transition-all hover:scale-105"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      <button
        onClick={bgNext}
        aria-label="Next slide"
        className="absolute right-3 hidden lg:flex sm:right-5 lg:right-8 top-1/2 -translate-y-1/2 z-20
                   w-9 h-9 sm:w-11 sm:h-11 rounded-full
                   bg-white/10 border border-white/20 backdrop-blur-sm
                   flex items-center justify-center text-white
                   hover:bg-white/25 transition-all hover:scale-105"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Pagination dots */}
      <div
        className="absolute bottom-10 sm:bottom-14 left-1/2 -translate-x-1/2 z-20
                   flex items-center gap-2.5"
        role="tablist"
        aria-label="Slide indicators"
      >
        {bgSlides.map((s, i) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={i === bgIdx}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === bgIdx ? "w-7 h-2 bg-[#F4C430]" : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* ══════════════════════════════════════════
          CONTENT  —  single-column on mobile,
                      two-column on desktop (lg+)
          ══════════════════════════════════════════ */}
      <div className="container-pin relative z-10 w-full flex items-center"
           style={{ minHeight: "100svh" }}>

        <div className="w-full grid lg:grid-cols-2 gap-10 lg:gap-16 items-center
                        py-32 lg:py-28">

          {/* ── LEFT: copy ─────────────────────── */}
          <div className="text-center lg:text-left">

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-extrabold text-white leading-[1.1] tracking-tight mb-5"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
            >
              Pass Your{" "}
              <span className="relative inline-block">
                <span className="text-[#F4C430]">Professional</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8" fill="none" aria-hidden="true"
                >
                  <path
                    d="M0 6 Q50 2 100 5 Q150 8 200 4"
                    stroke="#F4C430" strokeWidth="2.5"
                    strokeLinecap="round" fill="none" opacity="0.6"
                  />
                </svg>
              </span>
              <br />
              Exams With{" "}
              <span className="text-[#F4C430]">Confidence.</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/75 text-base sm:text-lg leading-relaxed
                         max-w-xl mb-8 mx-auto lg:mx-0"
            >
              PIN Consultancy Services prepares students and working professionals
              to pass ICAN, ACCA, CITN, CISA, ATS, and IFRS exams on their{" "}
              <span className="text-white font-medium">first attempt</span> with
              expert tutors, structured programmes, and exam-focused resources.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-10"
            >
              <Link
                href="/apply"
                className="inline-flex items-center gap-2.5
                           bg-[#F4C430] text-[#152D6E] font-bold
                           text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4
                           rounded-2xl shadow-lg
                           hover:bg-[#D4A820] hover:shadow-xl hover:-translate-y-0.5
                           transition-all duration-200 active:translate-y-0"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2.5
                           bg-white/10 border border-white/25 text-white font-semibold
                           text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4
                           rounded-2xl backdrop-blur-sm
                           hover:bg-white/20 transition-all duration-200"
              >
                Explore Courses
              </Link>
              <button
                className="inline-flex items-center gap-2.5
                           text-white/80 font-medium text-sm hover:text-white transition-colors"
              >
                <span className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm
                                 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </span>
                Watch Overview
              </button>
            </motion.div>

            {/* Stat badges — 2 cols on mobile, 4 on sm+ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto lg:mx-0"
            >
              {badges.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="flex flex-col gap-1 bg-white/[0.09] border-white/[0.15]
                             rounded-2xl px-4 py-3.5 backdrop-blur-sm"
                >
                  <Icon className="w-4 h-4 text-[#F4C430] mb-0.5" />
                  <span className="font-heading font-bold text-white text-xl leading-none">
                    {value}
                  </span>
                  <span className="text-white/60 text-xs font-medium leading-tight">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: image card — desktop only ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative justify-center hidden lg:flex"
          >
            {/* Image card */}
            <div
              className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden"
              style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.5),0 8px 32px rgba(0,0,0,0.3)" }}
            >
              <AnimatePresence initial={false}>
                <motion.div
                  key={cardSlides[cardIdx].id}
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <img
                    src={cardSlides[cardIdx].src}
                    alt={cardSlides[cardIdx].alt}
                    className="w-full h-full object-cover object-center"
                  />
                </motion.div>
              </AnimatePresence>

              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg,transparent 40%,rgba(11,20,45,0.90) 100%)" }}
              />

              {/* Card dots */}
              <div className="absolute bottom-[4.5rem] left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
                {cardSlides.map((s, i) => (
                  <button
                    key={s.id}
                    aria-label={`Card image ${i + 1}`}
                    onClick={() => setCardIdx(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === cardIdx ? "w-5 h-1.5 bg-[#F4C430]" : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <p className="text-white/55 text-[11px] font-semibold uppercase tracking-wider mb-1">
                  Our Mission
                </p>
                <p className="text-white font-heading font-semibold text-base leading-snug">
                  Transforming students into certified professionals.
                </p>
              </div>
            </div>

            {/* Floating card 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -left-10 top-14 bg-white rounded-2xl p-4 shadow-xl w-52"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-9 h-9 ${floatingCards[0].color} rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                  {floatingCards[0].initials}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-[#222222] truncate">{floatingCards[0].name}</p>
                  <p className="text-[10px] text-[#6C757D] truncate">{floatingCards[0].exam}</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#16A34A] flex-shrink-0" />
                <span className="text-xs font-semibold text-[#16A34A]">{floatingCards[0].result}</span>
              </div>
            </motion.div>

            {/* Floating card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="absolute -right-8 bottom-20 bg-white rounded-2xl p-4 shadow-xl w-52"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-9 h-9 ${floatingCards[1].color} rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                  {floatingCards[1].initials}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-[#222222] truncate">{floatingCards[1].name}</p>
                  <p className="text-[10px] text-[#6C757D] truncate">{floatingCards[1].exam}</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#F4C430] flex-shrink-0" />
                <span className="text-xs font-semibold text-[#D4A820]">{floatingCards[1].result}</span>
              </div>
            </motion.div>

            {/* Gold bar */}
            <div className="absolute top-1/3 -right-5 w-3 h-20 bg-[#F4C430] rounded-full opacity-80" />
          </motion.div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60 L0 30 Q360 0 720 28 Q1080 56 1440 20 L1440 60 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
