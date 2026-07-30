# ki-autonomie

Landingpage für die neue Berateridentität „KI-Autonomie" (KI-Einführung mit Fokus Kontrolle/Souveränität), geplant unter einer Subdomain von nice-network.de (Name noch zu bestätigen).

Stack identisch zu `be-nice-crm`: Next.js 16 (App Router), React 19, Prisma 7 + Postgres (Neon), Tailwind 4.

## Was schon da ist

- Landingpage (`app/page.tsx`) mit Positionierung „Souveränität & Kontrolle"
- Empfehlungslinks: `?ref=<slug>` (z. B. `?ref=ralfberg`) wird gesäubert, als `Partner` upserted, jeder Aufruf als `Klick` geloggt, die Seite zeigt eine Personalisierungszeile „Empfohlen von …"
- Kontaktformular (`app/ContactForm.tsx` + `app/api/lead/route.ts`) mit Einwilligungs-Checkbox, Leads werden dem Partner zugeordnet, sofern über dessen Link aufgerufen
- `/admin` (`app/admin/page.tsx`): Übersicht Partner (Klicks/Leads), Lead-Liste mit Kontaktdaten, letzte 20 Klicks. Geschützt per HTTP Basic Auth über `proxy.ts` (`ADMIN_USER`/`ADMIN_PASSWORD`, siehe `.env.example`). Reicht für Einzel-Nutzung; bei mehreren Admins oder höherem Anspruch später auf echtes Login-System (z. B. Auth.js) umstellen.
- Impressum (`app/impressum`) mit **offener Flagge**: das bestehende Impressum von nice-network.de nennt „nice network initiative circular economy e.V.“ als verantwortliche Stelle, nicht „Clemens Gutmann Managementberatung“. Für eine Seite, die eine kostenpflichtige Beratungsleistung verkauft, muss geklärt werden, welcher Rechtsträger tatsächlich haftet, bevor das live geht.
- Datenschutzerklärung (`app/datenschutz`) mit **offener Flagge**: enthält nur die neuen Verarbeitungen (Klick-Logging, Partner-Zuordnung), noch nicht den vollständigen Text der bestehenden Erklärung — der war zu lang, um ihn blind zu übernehmen, ohne das Risiko einzugehen, etwas Unvollständiges als fertig auszugeben.
- **Kein Cookie-Banner**: bewusst nicht gebaut, weil die Seite aktuell keine Cookies setzt (Attribution läuft über die Datenbank, nicht über Client-Cookies; Admin-Login ist zustandslos per Basic Auth). Sobald Google Analytics, ein Ads-Pixel o. Ä. dazukommt, wird ein Banner pflicht — dann baue ich einen einfachen eigenen (Accept/Decline, Skripte erst nach Zustimmung laden), ein externes Tool ist dafür nicht nötig.

## Bewusst noch nicht gebaut

- **Provisionslogik/Auszahlung**: aktuell reines Tracking (Partner, Klicks, Leads), keine Berechnung — so wie entschieden.
- **Logo**: `assets/logo.png` aus dem be-nice-Skill-Ordner wurde nicht übernommen, Header zeigt aktuell nur den Schriftzug „be·nice". Geplant: nach dem ersten Deploy, sobald GitHub/Vercel/Neon stehen.

## Lokal starten

```bash
npm install
cp .env.example .env   # DATABASE_URL eintragen
npx prisma migrate dev --name init
npm run dev
```

## Bis zum Livegang fehlt noch

1. Neon-Datenbank anlegen (neues Projekt oder neue Database im bestehenden be-nice-crm-Neon-Projekt) und `DATABASE_URL` setzen.
2. Vercel-Projekt anlegen, Repo verbinden, `DATABASE_URL` als Env-Var setzen.
3. DNS: `A ki-autonomie.nice-network.de → 76.76.21.21` bei United Domains setzen.
4. Impressum/Datenschutz mit echtem Text befüllen.
5. Logo einbinden.

Schritte 1–3 sind bewusst nicht automatisch passiert, weil sie Produktiv-Infrastruktur (DNS auf der bestehenden Domain, ggf. neue Datenbank) berühren.
