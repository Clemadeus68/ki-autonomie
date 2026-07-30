"use client";

import { useState } from "react";

export default function ContactForm({ partnerSlug }: { partnerSlug: string | null }) {
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
    return <p className="status">Danke, Ihre Nachricht ist angekommen. Ich melde mich zeitnah.</p>;
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" required />
      <input type="email" name="email" placeholder="E-Mail-Adresse" required />
      <input type="tel" name="telefon" placeholder="Telefonnummer (optional)" />
      <textarea name="nachricht" placeholder="Kurz zu Ihrem Anliegen (optional)" rows={3} />
      <label className="consent">
        <input type="checkbox" name="einwilligung" />
        <span>
          Ich stimme der Speicherung und Verarbeitung meiner eingegebenen Daten gemäß der{" "}
          <a href="/datenschutz">Datenschutzerklärung</a> zur Beantwortung meiner Anfrage zu.
        </span>
      </label>
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Wird gesendet…" : "Nachricht senden"}
      </button>
      {status === "error" && <p className="status error">{errorMsg}</p>}
    </form>
  );
}
