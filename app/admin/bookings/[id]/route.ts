import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function sanitizeSlug(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const slug = raw.trim().toLowerCase().replace(/[^a-z0-9-]/g, "");
  return slug.length > 0 && slug.length <= 40 ? slug : null;
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json();
    const partnerSlug = sanitizeSlug(body.partner_slug);

    // Leeres Feld = PID wieder entfernen, ist ein gültiger Zustand.
    if (partnerSlug) {
      await prisma.partner.upsert({
        where: { slug: partnerSlug },
        update: {},
        create: { slug: partnerSlug, name: partnerSlug },
      });
    }

    const booking = await prisma.booking.update({
      where: { id: Number(id) },
      data: { partner_slug: partnerSlug },
    });

    return NextResponse.json({ id: booking.id, partner_slug: booking.partner_slug });
  } catch (err: unknown) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Fehler" }, { status: 500 });
  }
}
