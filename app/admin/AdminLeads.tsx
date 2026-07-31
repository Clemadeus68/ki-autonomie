"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Lead = {
  id: number;
  name: string;
  email: string;
  telefon: string | null;
  nachricht: string | null;
  partner_slug: string | null;
  erledigt: boolean;
  created_at: string;
  partner: { name: string } | null;
};

function fmt(d: string) {
  return new Intl.DateTimeFormat("de-DE", { dateStyle: "short", timeStyle: "short" }).format(new Date(d));
}

export default function AdminLeads({ leads }: { leads: Lead[] }) {
  const router = useRouter();
  const [busy, setBusy] = useState<number | null>(null);

  async function toggleErledigt(id: number, erledigt: boolean) {
    setBusy(id);
    try {
      await fetch(`/admin/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ erledigt }),
      });
      router.refresh();
    } finally {
      setBusy(null);
    }
  }

  async function remove(id: number) {
    if (!confirm("Diesen Lead unwiderruflich löschen?")) return;
    setBusy(id);
    try {
      await fetch(`/admin/leads/${id}`, { method: "DELETE" });
      router.refresh();
    } finally {
      setBusy(null);
    }
  }

  return (
    <section>
      <h2>Leads ({leads.length})</h2>
      <table>
        <thead>
          <tr>
            <th>PID</th>
            <th>Partner</th>
            <th>Zeitstempel</th>
            <th>Nachricht</th>
            <th>E-Mail</th>
            <th>Name</th>
            <th>Telefon</th>
            <th>Erledigt</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {leads.map((l) => (
            <tr key={l.id} className={l.erledigt ? "admin-done" : undefined}>
              <td>{l.partner_slug ?? "-"}</td>
              <td>{l.partner?.name ?? "-"}</td>
              <td>{fmt(l.created_at)}</td>
              <td>{l.nachricht ?? "-"}</td>
              <td>
                <a href={`mailto:${l.email}`}>{l.email}</a>
              </td>
              <td>{l.name}</td>
              <td>{l.telefon ?? "-"}</td>
              <td>
                <input
                  type="checkbox"
                  checked={l.erledigt}
                  disabled={busy === l.id}
                  onChange={(e) => toggleErledigt(l.id, e.target.checked)}
                />
              </td>
              <td>
                <button onClick={() => remove(l.id)} disabled={busy === l.id}>
                  Löschen
                </button>
              </td>
            </tr>
          ))}
          {leads.length === 0 && (
            <tr>
              <td colSpan={9}>Noch keine Leads.</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}
