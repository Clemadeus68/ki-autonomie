import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { notifyNewLead } from "@/lib/notify";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_WINDOW_MIN = 10;
const RATE_LIMIT_MAX = 3;

function clientIp(req: NextRequest): string | null {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Honeypot: unsichtbares Feld, das nur Bots ausfüllen. Absichtlich ein
    // Erfolg ohne echtes Speichern, damit Bots nicht lernen, dass sie
    // aufgeflogen sind.
    if (typeof body.website === "string" && body.website.trim() !== "") {
      return NextResponse.json({ id: 0 });
    }

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    if (!name || !email) {
      return NextResponse.json({ error: "Name und E-Mail sind erforderlich." }, { status: 400 });
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Bitte eine gültige E-Mail-Adresse angeben." }, { status: 400 });
    }

    const ip = clientIp(req);
    if (ip) {
      const since = new Date(Date.now() - RATE_LIMIT_WINDOW_MIN * 60 * 1000);
      const recentCount = await prisma.lead.count({ where: { ip, created_at: { gte: since } } });
      if (recentCount >= RATE_LIMIT_MAX) {
        return NextResponse.json(
          { error: "Zu viele Anfragen. Bitte versuchen Sie es in ein paar Minuten erneut." },
          { status: 429 },
        );
      }
    }

    const partnerSlug = typeof body.partnerSlug === "string" ? body.partnerSlug : null;

    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        telefon: typeof body.telefon === "string" && body.telefon.trim() ? body.telefon.trim() : null,
        nachricht: typeof body.nachricht === "string" && body.nachricht.trim() ? body.nachricht.trim() : null,
        partner_slug: partnerSlug,
        ip,
      },
    });

    await notifyNewLead(lead);

    return NextResponse.json({ id: lead.id });
  } catch (err: unknown) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Fehler" }, { status: 500 });
  }
}
