"use client";

import { useState } from "react";

interface Props {
  icon: string;
  title: string;
  /** Size of the image container in px. Default: 48 */
  size?: number;
}

export default function ProgramIcon({ icon, title, size = 48 }: Props) {
  const [failed, setFailed] = useState(false);
  const isUrl = icon.startsWith("http") || icon.startsWith("/");

  if (isUrl && !failed) {
    return (
      <img
        src={icon}
        alt={`${title} logo`}
        onError={() => setFailed(true)}
        style={{ width: size, height: size, objectFit: "contain" }}
        className="rounded-sm"
      />
    );
  }

  /* Emoji / text fallback */
  return (
    <span style={{ fontSize: size * 0.6 }} className="leading-none select-none">
      {icon}
    </span>
  );
}
