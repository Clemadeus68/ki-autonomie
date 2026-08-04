"use client";

import { useState } from "react";

function shareUrl(baseUrl: string, partnerSlug: string | null): string {
  return partnerSlug ? `${baseUrl}/?ref=${partnerSlug}` : `${baseUrl}/`;
}

const SHARE_TEXT = "KI-Autonomie – KI-Einführung für den Mittelstand, ohne Lock-in-Effekte:";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.3 0-.4-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1.1 2.6c.1.2 1.8 2.8 4.4 3.8.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3z"/>
      <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3C4.1 14.9 3.7 13.5 3.7 12c0-4.6 3.7-8.3 8.3-8.3s8.3 3.7 8.3 8.3-3.7 8.2-8.3 8.2z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.24h4.56V23H.22V8.24zM8.19 8.24h4.37v2.01h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V23h-4.56v-6.99c0-1.67-.03-3.81-2.32-3.81-2.33 0-2.69 1.82-2.69 3.7V23H8.19V8.24z"/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

export default function ShareButtons({
  partnerSlug,
  baseUrl,
  className,
}: {
  partnerSlug: string | null;
  baseUrl: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  function handleCopy(e: React.MouseEvent) {
    e.preventDefault();
    const url = shareUrl(baseUrl, partnerSlug);
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  function urlFor() {
    return shareUrl(baseUrl, partnerSlug);
  }

  return (
    <div className={`share-buttons${className ? ` ${className}` : ""}`}>
      <a
        href={`https://wa.me/?text=${encodeURIComponent(`${SHARE_TEXT} ${urlFor()}`)}`}
        target="_blank"
        rel="noopener"
        aria-label="Per WhatsApp teilen"
        title="Per WhatsApp teilen"
      >
        <WhatsAppIcon />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(urlFor())}`}
        target="_blank"
        rel="noopener"
        aria-label="Auf LinkedIn teilen"
        title="Auf LinkedIn teilen"
      >
        <LinkedInIcon />
      </a>
      <a
        href={`mailto:?subject=${encodeURIComponent("KI-Autonomie")}&body=${encodeURIComponent(`${SHARE_TEXT}\n\n${urlFor()}`)}`}
        aria-label="Per E-Mail teilen"
        title="Per E-Mail teilen"
      >
        <EmailIcon />
      </a>
      <a href="#" onClick={handleCopy} aria-label="Link kopieren" title="Link kopieren">
        {copied ? <span className="copied-label">Kopiert!</span> : <LinkIcon />}
      </a>
    </div>
  );
}
