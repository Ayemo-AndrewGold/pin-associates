"use client";

import { useState } from "react";

interface TeamCardProps {
  name: string;
  role: string;
  quals: string;
  bio: string;
  initials: string;
  color: string;
  image?: string;
}

export default function TeamCard({
  name, role, quals, bio, initials, color, image,
}: TeamCardProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = image && !imgFailed;

  return (
    <div
      className="group relative bg-white rounded-3xl overflow-hidden
                 border border-[#E9ECEF]
                 hover:border-transparent
                 hover:shadow-[0_20px_60px_rgba(30,58,138,0.13)]
                 transition-all duration-400"
    >
      {/* ── Photo / fallback panel ─────────────── */}
      <div className="relative w-full overflow-hidden" style={{ height: 260 }}>

        {showImage ? (
          <img
            src={image}
            alt={name}
            onError={() => setImgFailed(true)}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 15%",
              transition: "transform 0.5s ease",
            }}
            className="group-hover:scale-105"
          />
        ) : (
          /* Fallback: geometric pattern + large initials */
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: `linear-gradient(145deg, ${color}22 0%, ${color}44 100%)`,
            }}
          >
            {/* Subtle dot grid */}
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #1E3A8A 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div
              className="relative w-24 h-24 rounded-3xl flex items-center justify-center shadow-lg"
              style={{ backgroundColor: color }}
            >
              <span
                className="font-heading font-extrabold text-white select-none"
                style={{ fontSize: "2rem", letterSpacing: "-0.04em" }}
              >
                {initials}
              </span>
            </div>
          </div>
        )}

        {/* Bottom scrim — text always readable */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, transparent 30%, rgba(10,15,35,0.75) 100%)",
          }}
        />

        {/* Name + role overlaid on the photo */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
          <p
            className="font-heading font-bold text-white leading-tight mb-0.5"
            style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)" }}
          >
            {name}
          </p>
          <p className="text-[#F4C430] text-xs font-semibold tracking-wide">
            {role}
          </p>
        </div>
      </div>

      {/* ── Content panel ──────────────────────── */}
      <div className="p-5 pt-4">

        {/* Quals pill */}
        <span
          className="inline-block text-[10px] font-bold uppercase tracking-widest
                     px-3 py-1 rounded-full mb-4"
          style={{
            backgroundColor: `${color}14`,
            color: color,
            border: `1px solid ${color}30`,
          }}
        >
          {quals}
        </span>

        {/* Bio */}
        <p className="text-[#6C757D] text-xs leading-relaxed line-clamp-3">
          {bio}
        </p>
      </div>

      {/* ── Hover accent — left edge bar ────────── */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] scale-y-0
                   group-hover:scale-y-100 transition-transform duration-400 origin-bottom rounded-r-full"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}
