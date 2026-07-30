import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json();
    if (typeof body.erledigt !== "boolean") {
      return NextResponse.json({ error: "erledigt (boolean) ist erforderlich." }, { status: 400 });
    }
    const lead = await prisma.lead.update({
      where: { id: Number(id) },
      data: { erledigt: body.erledigt },
    });
    return NextResponse.json({ id: lead.id, erledigt: lead.erledigt });
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
