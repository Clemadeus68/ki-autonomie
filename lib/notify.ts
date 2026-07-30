const NOTIFY_TO = "clemens@nice-network.de";
// onboarding@resend.dev funktioniert ohne Domain-Verifizierung bei Resend.
// Sobald nice-network.de dort verifiziert ist, kann hier z.B. auf
// "KI-Autonomie <noreply@nice-network.de>" umgestellt werden.
const NOTIFY_FROM = "KI-Autonomie <onboarding@resend.dev>";

export async function notifyNewLead(lead: {
  name: string;
  email: string;
  telefon: string | null;
  nachricht: string | null;
  partner_slug: string | null;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY fehlt, überspringe E-Mail-Benachrichtigung.");
    return;
  }

  const lines = [
    `Name: ${lead.name}`,
    `E-Mail: ${lead.email}`,
    `Telefon: ${lead.telefon ?? "—"}`,
    `Partner (PID): ${lead.partner_slug ?? "—"}`,
    "",
    "Nachricht:",
    lead.nachricht ?? "—",
    "",
    "Admin: https://ki-autonomie.nice-network.de/admin",
  ];

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: NOTIFY_FROM,
        to: NOTIFY_TO,
        reply_to: lead.email,
        subject: `Neue Anfrage über KI-Autonomie${lead.partner_slug ? ` (${lead.partner_slug})` : ""}`,
        text: lines.join("\n"),
      }),
    });
    if (!res.ok) {
      console.error("Resend-Fehler:", res.status, await res.text());
    }
  } catch (err) {
    console.error("E-Mail-Benachrichtigung fehlgeschlagen:", err);
  }
}
