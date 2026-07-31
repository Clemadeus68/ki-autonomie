"use client";

import { useState } from "react";
import ShareButtons from "./ShareButtons";

export default function ContactForm({
  partnerSlug,
  baseUrl,
}: {
  partnerSlug: string | null;
  baseUrl: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (!data.get("einwilligung")) {
      setStatus("error");
      setErrorMsg("Bitte der Datenverarbeitung zustimmen, sonst kann ich mich nicht bei Ihnen melden.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          telefon: data.get("telefon"),
          nachricht: data.get("nachricht"),
          website: data.get("website"),
          partnerSlug,
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Senden fehlgeschlagen.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Senden fehlgeschlagen.");
    }
  }

  if (status === "sent") {
    return (
      <div className="lead-form-thanks">
        <p className="status">Danke, Ihre Nachricht ist angekommen. Ich melde mich zeitnah.</p>
        <p className="share-prompt">Kennen Sie noch jemanden, für den das interessant wäre?</p>
        <ShareButtons partnerSlug={partnerSlug} baseUrl={baseUrl} />
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      {/* Honeypot gegen Formular-Bots: für Menschen unsichtbar, echte Nutzer lassen es leer */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hp-field"
      />
      <input type="text" name="name" placeholder="Name" required />
      <input type="email" name="email" placeholder="E-Mail-Adresse" required />
      <input type="tel" name="telefon" placeholder="Telefonnummer (optional)" />
      <textarea name="nachricht" placeholder="Kurz zu Ihrem Anliegen (optional)" rows={3} />
      <label className="consent">
        <input type="checkbox" name="einwilligung" />
        <span>
          Ich stimme der Speicherung und Verarbeitung meiner eingegebenen Daten gemäß der{" "}
          <a href="/datenschutz" target="_blank" rel="noopener">
            Datenschutzerklärung
          </a>{" "}
          zur Beantwortung meiner Anfrage zu.
        </span>
      </label>
      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Wird gesendet…" : "Nachricht senden"}
      </button>
      {status === "error" && <p className="status error">{errorMsg}</p>}
    </form>
  );
}
