"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Booking = {
  id: number;
  name: string | null;
  email: string | null;
  event_type: string | null;
  start_time: string | null;
  partner_slug: string | null;
  trigger_event: string | null;
  raw_payload: unknown;
  created_at: string;
};

function fmt(d: string) {
  return new Intl.DateTimeFormat("de-DE", { dateStyle: "short", timeStyle: "short" }).format(new Date(d));
}

export default function AdminBookings({ bookings }: { bookings: Booking[] }) {
  const router = useRouter();
  const [pids, setPids] = useState<Record<number, string>>(
    Object.fromEntries(bookings.map((b) => [b.id, b.partner_slug ?? ""]))
  );
  const [busy, setBusy] = useState<number | null>(null);

  async function savePid(id: number) {
    setBusy(id);
    try {
      await fetch(`/admin/bookings/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ partner_slug: pids[id] }),
      });
      router.refresh();
    } finally {
      setBusy(null);
    }
  }

  return (
    <section>
      <h2>Cal.com-Buchungen (letzte 20)</h2>
      <p className="admin-hint">
        PID wird bei Cal.com (Free-Plan) nicht automatisch übertragen — hier von Hand eintragen, sobald du
        von der buchenden Person weißt, über welchen Partner sie gekommen ist.
      </p>
      <table>
        <thead>
          <tr>
            <th>Datum</th>
            <th>PID</th>
            <th>Name</th>
            <th>E-Mail</th>
            <th>Event</th>
            <th>Termin</th>
            <th>Trigger</th>
            <th>Rohdaten</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b.id}>
              <td>{fmt(b.created_at)}</td>
              <td>
                <input
                  className="admin-inline-input"
                  placeholder="PID eintragen"
                  value={pids[b.id] ?? ""}
                  onChange={(e) => setPids((p) => ({ ...p, [b.id]: e.target.value }))}
                  style={{ width: 110 }}
                />
                <button
                  onClick={() => savePid(b.id)}
                  disabled={busy === b.id || (pids[b.id] ?? "") === (b.partner_slug ?? "")}
                >
                  {busy === b.id ? "…" : "Speichern"}
                </button>
              </td>
              <td>{b.name ?? "-"}</td>
              <td>{b.email ?? "-"}</td>
              <td>{b.event_type ?? "-"}</td>
              <td>{b.start_time ? fmt(b.start_time) : "-"}</td>
              <td>{b.trigger_event ?? "-"}</td>
              <td>
                <details>
                  <summary>anzeigen</summary>
                  <pre className="admin-raw">{JSON.stringify(b.raw_payload, null, 2)}</pre>
                </details>
              </td>
            </tr>
          ))}
          {bookings.length === 0 && (
            <tr>
              <td colSpan={8}>Noch keine Buchungen über den Webhook eingegangen.</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}
