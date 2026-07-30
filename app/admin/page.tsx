export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";

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
      <h1>KI-Souveränität — Admin</h1>

      <section>
        <h2>Partner</h2>
        <table>
          <thead>
            <tr>
              <th>Slug</th>
              <th>Name</th>
              <th>Klicks</th>
              <th>Leads</th>
              <th>Seit</th>
            </tr>
          </thead>
          <tbody>
            {partners.map((p) => (
              <tr key={p.slug}>
                <td>{p.slug}</td>
                <td>{p.name}</td>
                <td>{p._count.klicks}</td>
                <td>{p._count.leads}</td>
                <td>{fmt(p.created_at)}</td>
              </tr>
            ))}
            {partners.length === 0 && (
              <tr>
                <td colSpan={5}>Noch keine Partner-Aufrufe.</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>

      <section>
        <h2>Leads ({leads.length})</h2>
        <table>
          <thead>
            <tr>
              <th>Datum</th>
              <th>Name</th>
              <th>E-Mail</th>
              <th>Telefon</th>
              <th>Nachricht</th>
              <th>Partner</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((l) => (
              <tr key={l.id}>
                <td>{fmt(l.created_at)}</td>
                <td>{l.name}</td>
                <td>
                  <a href={`mailto:${l.email}`}>{l.email}</a>
                </td>
                <td>{l.telefon ?? "—"}</td>
                <td>{l.nachricht ?? "—"}</td>
                <td>{l.partner?.name ?? "—"}</td>
              </tr>
            ))}
            {leads.length === 0 && (
              <tr>
                <td colSpan={6}>Noch keine Leads.</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>

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
                <td>{k.partner_slug ?? "—"}</td>
                <td>{k.pfad}</td>
                <td>{k.referrer ?? "—"}</td>
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
