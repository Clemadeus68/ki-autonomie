"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Partner = {
  slug: string;
  name: string;
  created_at: string;
  _count: { klicks: number; leads: number };
};

export default function AdminPartners({ partners }: { partners: Partner[] }) {
  const router = useRouter();
  const [newSlug, setNewSlug] = useState("");
  const [newName, setNewName] = useState("");
  const [names, setNames] = useState<Record<string, string>>(
    Object.fromEntries(partners.map((p) => [p.slug, p.name]))
  );
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  function linkFor(slug: string) {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    return `${origin}/?ref=${slug}`;
  }

  async function copyLink(slug: string) {
    try {
      await navigator.clipboard.writeText(linkFor(slug));
      setCopied(slug);
      setTimeout(() => setCopied((c) => (c === slug ? null : c)), 1500);
    } catch {
      setError("Kopieren nicht möglich, bitte den Link manuell markieren.");
    }
  }

  async function addPartner(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setBusy("new");
    try {
      const res = await fetch("/admin/partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: newSlug, name: newName }),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Fehler");
      setNewSlug("");
      setNewName("");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Fehler");
    } finally {
      setBusy(null);
    }
  }

  async function rename(slug: string) {
    setError("");
    setBusy(slug);
    try {
      const res = await fetch(`/admin/partners/${slug}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: names[slug] }),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Fehler");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Fehler");
    } finally {
      setBusy(null);
    }
  }

  async function remove(slug: string) {
    if (!confirm(`Partner "${slug}" unwiderruflich löschen? Klicks/Leads/Buchungen bleiben erhalten, verlieren aber die PID-Zuordnung.`)) return;
    setError("");
    setBusy(slug);
    try {
      const res = await fetch(`/admin/partners/${slug}`, { method: "DELETE" });
      if (!res.ok) throw new Error((await res.json()).error || "Fehler");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Fehler");
    } finally {
      setBusy(null);
    }
  }

  return (
    <section>
      <h2>Partner</h2>

      <form className="admin-inline-form" onSubmit={addPartner}>
        <input
          placeholder="PID (z. B. ralfberg)"
          value={newSlug}
          onChange={(e) => setNewSlug(e.target.value)}
          required
        />
        <input
          placeholder="Anzeigename (z. B. Ralf Berg)"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          required
        />
        <button type="submit" disabled={busy === "new"}>
          {busy === "new" ? "…" : "Partner anlegen"}
        </button>
      </form>
      {error && <p className="admin-error">{error}</p>}

      <table>
        <thead>
          <tr>
            <th>PID</th>
            <th>Name</th>
            <th>Klicks</th>
            <th>Leads</th>
            <th>Seit</th>
            <th>Link</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {partners.map((p) => (
            <tr key={p.slug}>
              <td>{p.slug}</td>
              <td>
                <input
                  className="admin-inline-input"
                  value={names[p.slug] ?? p.name}
                  onChange={(e) => setNames((n) => ({ ...n, [p.slug]: e.target.value }))}
                />
              </td>
              <td>{p._count.klicks}</td>
              <td>{p._count.leads}</td>
              <td>{new Intl.DateTimeFormat("de-DE", { dateStyle: "short", timeStyle: "short" }).format(new Date(p.created_at))}</td>
              <td>
                <span className="admin-link-preview">{linkFor(p.slug)}</span>
                <button onClick={() => copyLink(p.slug)}>{copied === p.slug ? "Kopiert!" : "Link kopieren"}</button>
              </td>
              <td>
                <button
                  onClick={() => rename(p.slug)}
                  disabled={busy === p.slug || (names[p.slug] ?? p.name) === p.name}
                >
                  {busy === p.slug ? "…" : "Speichern"}
                </button>
              </td>
              <td>
                <button onClick={() => remove(p.slug)} disabled={busy === p.slug}>
                  Löschen
                </button>
              </td>
            </tr>
          ))}
          {partners.length === 0 && (
            <tr>
              <td colSpan={8}>Noch keine Partner-Aufrufe.</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}
