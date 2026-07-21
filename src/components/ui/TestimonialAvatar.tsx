"use client";

import { useState } from "react";

interface Props {
  image?: string;
  initials: string;
  color: string;
  size?: number;
}

export default function TestimonialAvatar({ image, initials, color, size = 40 }: Props) {
  const [failed, setFailed] = useState(false);

  if (image && !failed) {
    return (
      <div
        className="rounded-xl overflow-hidden flex-shrink-0 border border-[#E9ECEF]"
        style={{ width: size, height: size }}
      >
        <img
          src={image}
          alt={initials}
          onError={() => setFailed(true)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />
      </div>
    );
  }

  return (
    <div
      className="rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        fontSize: size * 0.275,
      }}
    >
      {initials}
    </div>
  );
}
