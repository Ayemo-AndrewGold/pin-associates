"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/* ─── Data ──────────────────────────────────────────── */
const stats = [
  { value: 5000, suffix: "+", label: "Students Trained",        desc: "Since our founding in 2009" },
  { value: 87,   suffix: "%", label: "First-Attempt Pass Rate", desc: "Across all programmes" },
  { value: 9,    suffix: "",  label: "Programmes Offered",      desc: "From ATS to CISA" },
  { value: 15,   suffix: "+", label: "Expert Tutors",           desc: "Active industry practitioners" },
  { value: 16,   suffix: "+", label: "Years of Excellence",     desc: "Established 2009" },
];

const bodies = [
  { abbr: "ICAN",  name: "Inst. of Chartered Accountants of Nigeria", favicon: "https://www.ican.org.ng/favicon.ico" },
  { abbr: "ACCA",  name: "Association of Chartered Certified Accountants", favicon: "https://www.accaglobal.com/favicon.ico" },
  { abbr: "CITN",  name: "Chartered Institute of Taxation of Nigeria", favicon: "https://www.citn.org/favicon.ico" },
  { abbr: "ISACA", name: "Information Systems Audit & Control Assoc.", favicon: "https://www.isaca.org/favicon.ico" },
  { abbr: "ATS",   name: "Accounting Technicians Scheme West Africa",  favicon: "https://www.ican.org.ng/favicon.ico" },
  { abbr: "IASB",  name: "International Accounting Standards Board",   favicon: "https://www.ifrs.org/favicon.ico" },
];

/* ─── CountUp ───────────────────────────────────────── */
function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref  = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const step  = target / (1800 / 16);
    const timer = setInterval(() => {
      cur += step;
      if (cur >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(cur));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

/* ─── StatItem — inline, no border-box, editorial feel ─ */
function StatItem({ value, suffix, label, desc, isLast }: (typeof stats)[0] & { isLast: boolean }) {
  return (
    <div
      className={`flex-shrink-0 flex flex-col justify-center
                  px-8 sm:px-10 py-8
                  ${!isLast ? "border-r border-[#E9ECEF]" : ""}`}
      style={{ minWidth: "clamp(160px, 18vw, 220px)" }}
    >
      {/* Big number */}
      <div
        className="font-heading font-extrabold text-[#1E3A8A] leading-none mb-2 tabular-nums"
        style={{ fontSize: "clamp(2.25rem, 4vw, 3rem)" }}
      >
        <CountUp target={value} suffix={suffix} />
      </div>

      {/* Gold underscore — 24 px wide, 3 px tall */}
      <div className="w-6 h-[3px] bg-[#F4C430] rounded-full mb-3" />

      {/* Label */}
      <p className="font-heading font-semibold text-[#222222] text-sm leading-snug mb-0.5">
        {label}
      </p>

      {/* Desc */}
      <p className="text-[#ADB5BD] text-xs font-normal leading-snug">{desc}</p>
    </div>
  );
}

/* ─── Logo pill ─────────────────────────────────────── */
function LogoPill({ abbr, name, favicon }: (typeof bodies)[0]) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex-shrink-0 flex items-center gap-3 px-5 py-3 mx-3 cursor-default group">
      {/* Icon */}
      <div className="w-8 h-8 rounded-lg bg-white border border-[#E9ECEF] shadow-sm
                      flex items-center justify-center flex-shrink-0
                      group-hover:border-[#1E3A8A]/20 transition-colors">
        {!failed ? (
          <img
            src={favicon}
            alt={abbr}
            width={18}
            height={18}
            className="object-contain"
            onError={() => setFailed(true)}
          />
        ) : (
          <span className="text-[9px] font-bold text-[#1E3A8A]">{abbr.slice(0, 2)}</span>
        )}
      </div>

      {/* Text */}
      <div className="leading-tight">
        <p className="text-sm font-bold text-[#343A40] group-hover:text-[#1E3A8A] transition-colors leading-none">
          {abbr}
        </p>
        <p className="text-[11px] text-[#ADB5BD] mt-0.5 max-w-[160px] truncate">{name}</p>
      </div>

      {/* Soft separator dot */}
      <span className="ml-3 w-1 h-1 rounded-full bg-[#DEE2E6] flex-shrink-0" />
    </div>
  );
}

/* ─── Section ───────────────────────────────────────── */
export default function StatsSection() {
  const tripleStats  = [...stats,  ...stats,  ...stats];
  const triplebodies = [...bodies, ...bodies, ...bodies];

  return (
    <section className="bg-white border-b border-[#F1F3F5] overflow-hidden">

      {/* ══════════════════════════════════════
          STATS ROW — scrolls right, no cards,
          just large editorial numbers separated
          by hairline vertical rules
          ══════════════════════════════════════ */}
      <div
        className="overflow-hidden border-b border-[#F1F3F5]"
        style={{
          maskImage: "linear-gradient(to right,transparent,black 5%,black 95%,transparent)",
          WebkitMaskImage: "linear-gradient(to right,transparent,black 5%,black 95%,transparent)",
        }}
      >
        <div className="flex items-stretch w-max animate-scroll-right">
          {tripleStats.map((s, i) => (
            <StatItem
              key={`s-${i}`}
              {...s}
              isLast={(i + 1) % stats.length === 0}
            />
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          TRUST BAR — scrolls left
          minimal, no background on pills,
          just logo + name + dot separator
          ══════════════════════════════════════ */}
      <div
        className="py-5 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right,transparent,black 8%,black 92%,transparent)",
          WebkitMaskImage: "linear-gradient(to right,transparent,black 8%,black 92%,transparent)",
        }}
      >
        {/* Label — fades into the scroll naturally */}
        <div className="flex items-center w-max animate-scroll-left">
          {/* Inline label only once at the very start of the triple run */}
          <span className="flex-shrink-0 text-[11px] font-semibold text-[#ADB5BD] uppercase
                           tracking-widest px-6 mr-2 whitespace-nowrap">
            Graduates certified by
          </span>
          {triplebodies.map((b, i) => (
            <LogoPill key={`b-${i}`} {...b} />
          ))}
        </div>
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes scroll-right {
          from { transform: translateX(-33.333%); }
          to   { transform: translateX(0); }
        }
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        .animate-scroll-right {
          animation: scroll-right 28s linear infinite;
        }
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
        .animate-scroll-left {
          animation: scroll-left 34s linear infinite;
        }
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
