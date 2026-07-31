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
    const data: { erledigt?: boolean; partner_slug?: string | null } = {};

    if (typeof body.erledigt === "boolean") {
      data.erledigt = body.erledigt;
    }

    if ("partner_slug" in body) {
      const partnerSlug = sanitizeSlug(body.partner_slug);
      if (partnerSlug) {
        await prisma.partner.upsert({
          where: { slug: partnerSlug },
          update: {},
          create: { slug: partnerSlug, name: partnerSlug },
        });
      }
      data.partner_slug = partnerSlug;
    }

    if (Object.keys(data).length === 0) {
      return NextResponse.json({ error: "erledigt oder partner_slug ist erforderlich." }, { status: 400 });
    }

    const lead = await prisma.lead.update({
      where: { id: Number(id) },
      data,
      include: { partner: true },
    });
    return NextResponse.json({
      id: lead.id,
      erledigt: lead.erledigt,
      partner_slug: lead.partner_slug,
      partner: lead.partner ? { name: lead.partner.name } : null,
    });
  } catch (err: unknown) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Fehler" }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await prisma.lead.delete({ where: { id: Number(id) } });
    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Fehler" }, { status: 500 });
  }
}
