import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { notifyNewLead } from "@/lib/notify";

// Cal.com bietet auf dem Free-Plan kein "Secret"-Feld für den Webhook an,
// obwohl trotzdem ein x-cal-signature-256-Header mitgeschickt wird - eine
// Signaturprüfung ist damit nicht möglich (kein gemeinsames Geheimnis).
// Bewusste Entscheidung: Requests trotzdem verarbeiten statt zu verwerfen -
// diese Route legt nur Tracking-/Buchungsdaten an, keine sicherheitskritische
// Aktion, und die URL ist nicht öffentlich beworben. Bei einem Upgrade auf
// einen Cal.com-Plan mit Secret-Unterstützung lohnt sich eine echte Prüfung.

// Versucht, eine PID aus verschiedenen möglichen Stellen im Cal.com-Payload
// zu extrahieren. Cal.com hat keine feste Konvention dafür - je nachdem, wie
// der Buchungslink aufgebaut ist (UTM-Parameter, verstecktes Buchungsfeld,
// Routing-Formular), landet die PID an unterschiedlichen Stellen. Deshalb
// wird hier breit gesucht statt sich auf einen einzigen Pfad zu verlassen.
function extractPartnerSlug(payload: Record<string, unknown>): string | null {
  const candidates: unknown[] = [
    (payload as any)?.metadata?.ref,
    (payload as any)?.metadata?.utm_campaign,
    (payload as any)?.tracking?.utm_campaign,
    (payload as any)?.utm_campaign,
    (payload as any)?.responses?.ref?.value,
  ];
  for (const c of candidates) {
    if (typeof c === "string" && c.trim()) {
      return c.trim().toLowerCase().replace(/[^a-z0-9-]/g, "");
    }
  }
  return null;
}

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const signaturePresent = !!req.headers.get("x-cal-signature-256");

  let json: any = null;
  try {
    json = JSON.parse(rawBody);
  } catch {
    // Kein gültiges JSON - trotzdem mit 200 antworten, damit Cal.com nicht
    // wiederholt neu zustellt, aber den Rohtext zur Fehlersuche speichern.
  }

  const payload = json?.payload ?? {};
  const attendee = Array.isArray(payload.attendees) ? payload.attendees[0] : null;
  const partnerSlug = extractPartnerSlug(payload);

  if (partnerSlug) {
    await prisma.partner.upsert({
      where: { slug: partnerSlug },
      update: {},
      create: { slug: partnerSlug, name: partnerSlug },
    });
  }

  const booking = await prisma.booking.create({
    data: {
      name: attendee?.name ?? null,
      email: attendee?.email ?? null,
      event_type: payload.type ?? payload.title ?? null,
      start_time: payload.startTime ? new Date(payload.startTime) : null,
      partner_slug: partnerSlug,
      trigger_event: json?.triggerEvent ?? null,
      raw_payload: { headers_signature_present: signaturePresent, body: json ?? rawBody },
    },
  });

  if (attendee?.email) {
    await notifyNewLead({
      name: attendee.name ?? "Unbekannt",
      email: attendee.email,
      telefon: null,
      nachricht: `Neue Cal.com-Buchung${payload.title ? `: ${payload.title}` : ""}`,
      partner_slug: partnerSlug,
    });
  }

  return NextResponse.json({ ok: true, id: booking.id });
}
