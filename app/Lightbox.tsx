"use client";

import { useState } from "react";

export function LightboxImage({
  src,
  alt,
  className,
  onOpen,
}: {
  src: string;
  alt: string;
  className?: string;
  onOpen: (src: string) => void;
}) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className} onClick={() => onOpen(src)} />;
}

export default function FooterBadges() {
  const [full, setFull] = useState<string | null>(null);

  return (
    <>
      <div className="footer-badges">
        <LightboxImage
          src="/assets/badge-inqa.jpg"
          alt="Autorisierter INQA-Coach 2026-2027"
          className="badge-inqa"
          onOpen={setFull}
        />
        <LightboxImage
          src="/assets/badge-alchimedus-master.jpg"
          alt="Alchimedus Master"
          className="badge-alchimedus"
          onOpen={setFull}
        />
        <LightboxImage
          src="/assets/logo-alchimedus-network.png"
          alt="Alchimedus Consulting Network"
          className="badge-network"
          onOpen={setFull}
        />
      </div>
      <div className={`lightbox-overlay${full ? " open" : ""}`} onClick={() => setFull(null)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {full && <img src={full} alt="" />}
      </div>
    </>
  );
}
