export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import AdminPartners from "./AdminPartners";
import AdminLeads from "./AdminLeads";

function fmt(d: Date) {
  return new Intl.DateTimeFormat("de-DE", { dateStyle: "short", timeStyle: "short" }).format(d);
}

export default async function AdminPage() {
  const [partners, leads, recentClicks] = await Promise.all([
    prisma.partner.findMany({
      include: { _count: { select: { klicks: true, leads: true } } },
      orderBy: { created_at: "desc" },
    }),
    prisma.lead.findMany({
      include: { partner: true },
      orderBy: { created_at: "desc" },
      take: 100,
    }),
    prisma.klick.findMany({
      orderBy: { created_at: "desc" },
      take: 20,
    }),
  ]);

  return (
    <div className="wrap-wide admin">
      <h1>KI-Autonomie - Admin</h1>

      <AdminPartners
        partners={partners.map((p) => ({
          slug: p.slug,
          name: p.name,
          created_at: p.created_at.toISOString(),
          _count: p._count,
        }))}
      />

      <AdminLeads
        leads={leads.map((l) => ({
          id: l.id,
          name: l.name,
          email: l.email,
          telefon: l.telefon,
          nachricht: l.nachricht,
          partner_slug: l.partner_slug,
          erledigt: l.erledigt,
          created_at: l.created_at.toISOString(),
          partner: l.partner ? { name: l.partner.name } : null,
        }))}
      />

      <section>
        <h2>Letzte 20 Klicks</h2>
        <table>
          <thead>
            <tr>
              <th>Datum</th>
              <th>Partner</th>
              <th>Pfad</th>
              <th>Referrer</th>
            </tr>
          </thead>
          <tbody>
            {recentClicks.map((k) => (
              <tr key={k.id}>
                <td>{fmt(k.created_at)}</td>
                <td>{k.partner_slug ?? "-"}</td>
                <td>{k.pfad}</td>
                <td>{k.referrer ?? "-"}</td>
              </tr>
            ))}
            {recentClicks.length === 0 && (
              <tr>
                <td colSpan={4}>Noch keine Klicks.</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}
