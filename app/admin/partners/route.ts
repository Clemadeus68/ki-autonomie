import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function sanitizeSlug(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const slug = raw.trim().toLowerCase().replace(/[^a-z0-9-]/g, "");
  return slug.length > 0 && slug.length <= 40 ? slug : null;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const slug = sanitizeSlug(body.slug);
    const name = typeof body.name === "string" ? body.name.trim() : "";
    if (!slug || !name) {
      return NextResponse.json({ error: "PID und Name sind erforderlich." }, { status: 400 });
    }
    const partner = await prisma.partner.upsert({
      where: { slug },
      update: { name },
      create: { slug, name },
    });
    return NextResponse.json({ slug: partner.slug, name: partner.name });
  } catch (err: unknown) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Fehler" }, { status: 500 });
  }
}
