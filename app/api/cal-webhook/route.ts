import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";
import { notifyNewLead } from "@/lib/notify";

// Cal.com signiert den Request-Body per HMAC-SHA256 mit dem beim Erstellen
// des Webhooks hinterlegten "Secret" und schickt die Signatur im Header
// x-cal-signature-256 (hex-kodiert).
function verifySignature(rawBody: string, signature: string | null, secret: string | undefined): boolean {
  if (!secret || !signature) return false;
  const expected = crypto.createHmac("sha256", secret).update(rawBody).digest("hex");
  try {
    return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
  } catch {
    return false;
  }
}

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
  const signature = req.headers.get("x-cal-signature-256");
  const verified = verifySignature(rawBody, signature, process.env.CAL_WEBHOOK_SECRET);

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
      raw_payload: { verified, headers_signature_present: !!signature, body: json ?? rawBody },
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

  return NextResponse.json({ ok: true, id: booking.id, verified });
}
