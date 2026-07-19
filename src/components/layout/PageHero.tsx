"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Slide = { id: number; src: string; alt: string };

interface PageHeroProps {
  label: string;
  title: string;
  description: string;
  slides: Slide[];
}

export default function PageHero({ label, title, description, slides }: PageHeroProps) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (i: number) => setIdx(((i % slides.length) + slides.length) % slides.length),
    [slides.length]
  );

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => goTo(idx + 1), 6000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, idx]);

  return (
    <section
      className="relative w-full overflow-hidden flex items-center"
      style={{ minHeight: "clamp(420px, 60vh, 640px)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background image carousel — explicit inline sizing guarantees
          full coverage regardless of parent/motion wrapper quirks */}
      <div
        className="absolute inset-0"
        style={{ width: "100%", height: "100%" }}
        aria-hidden="true"
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={slides[idx].id}
            className="absolute inset-0"
            style={{ width: "100%", height: "100%" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <img
              src={slides[idx].src}
              alt={slides[idx].alt}
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

        {/* Dark overlay — keeps text readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(11,20,45,0.82) 0%, rgba(15,32,85,0.72) 50%, rgba(11,20,45,0.80) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container-pin relative z-10 text-center pt-16 pb-16">
        <span className="section-label section-label-gold mb-6 inline-flex">{label}</span>
        <h1 className="font-heading font-extrabold text-white text-4xl md:text-5xl leading-tight mb-6">
          {title}
        </h1>
        <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">{description}</p>
      </div>

      {/* Pagination dots — only shown if more than one slide */}
      {slides.length > 1 && (
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2.5"
          role="tablist"
          aria-label="Slide indicators"
        >
          {slides.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={i === idx}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === idx ? "w-7 h-2 bg-[#F4C430]" : "w-2 h-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      )}

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10" aria-hidden="true">
        <svg viewBox="0 0 1440 40" fill="none" className="w-full">
          <path d="M0 40 L0 20 Q720 0 1440 20 L1440 40 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}