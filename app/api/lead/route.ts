import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    if (!name || !email) {
      return NextResponse.json({ error: "Name und E-Mail sind erforderlich." }, { status: 400 });
    }

    const partnerSlug = typeof body.partnerSlug === "string" ? body.partnerSlug : null;

    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        telefon: typeof body.telefon === "string" && body.telefon.trim() ? body.telefon.trim() : null,
        nachricht: typeof body.nachricht === "string" && body.nachricht.trim() ? body.nachricht.trim() : null,
        partner_slug: partnerSlug,
      },
    });

    return NextResponse.json({ id: lead.id });
  } catch (err: unknown) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Fehler" }, { status: 500 });
  }
}
