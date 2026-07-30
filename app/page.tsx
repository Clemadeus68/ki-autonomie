export const dynamic = "force-dynamic";

import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";
import ContactForm from "./ContactForm";
import FooterBadges from "./Lightbox";

function sanitizeSlug(raw: string | string[] | undefined): string | null {
  if (typeof raw !== "string") return null;
  const slug = raw.trim().toLowerCase().replace(/[^a-z0-9-]/g, "");
  return slug.length > 0 && slug.length <= 40 ? slug : null;
}

async function resolvePartner(slug: string | null) {
  if (!slug) return null;
  const partner = await prisma.partner.upsert({
    where: { slug },
    update: {},
    create: { slug, name: slug },
  });
  return partner;
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const partnerSlug = sanitizeSlug(params.ref);
  const partner = await resolvePartner(partnerSlug);

  const hdrs = await headers();
  await prisma.klick.create({
    data: {
      partner_slug: partner?.slug ?? null,
      pfad: "/",
      referrer: hdrs.get("referer"),
      user_agent: hdrs.get("user-agent"),
    },
  });

  return (
    <>
      <header className="site-header pad-64">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/logo.png" alt="be nice" />
        <span className="eyebrow-nav">KI-AUTONOMIE</span>
      </header>

      {partner && (
        <div className="partner-banner">
          <div className="inner">
            Diese Seite wurde durch <span className="name">{partner.name}</span> empfohlen
          </div>
        </div>
      )}

      <section className="hero pad-64">
        <span className="eyebrow">KI-EINFÜHRUNG FÜR DEN MITTELSTAND</span>
        <h1 className="hero-title">
          KI-Einführung, die Ihrem Unternehmen gehört.
          <br />
          <span className="accent">Nicht dem Anbieter.</span>
        </h1>
        <div className="hero-sub-grid">
          <p>
            Ob Sie noch ganz am Anfang stehen oder längst wissen, wo KI ansetzen soll: Ich sorge dafür,
            dass Ihr Unternehmen dabei die Kontrolle behält. Über Kosten, über Daten, über die
            Entscheidungen selbst.
          </p>
          <div className="cta-stack">
            <a className="btn" href="#kontakt">
              Unverbindliches Erstgespräch buchen →
            </a>
            <span className="cta-meta">30 Minuten, ohne Verkaufsdruck</span>
          </div>
        </div>
      </section>

      <section className="split-photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/clemens.png" alt="Clemens Gutmann" />
        <div className="text">
          <p className="lede">
            Der Anstoß kommt selten aus der IT-Abteilung. Meistens ist es eine Mitarbeiterin, die morgens
            erzählt, was ChatGPT über Nacht für sie erledigt hat. Ein Wettbewerber, der plötzlich
            schneller wirkt. Oder ein Satz beim Abendessen: <em>„Papa, das macht doch heute die KI."</em>{" "}
            Der Auslöser ist fast egal. Entscheidend ist, was danach passiert.
          </p>
          <p className="sub">
            Und danach passiert in den meisten Unternehmen: nichts Geordnetes. Einzelne probieren
            ChatGPT auf eigene Faust aus. Niemand weiß genau, welche Daten dabei wohin wandern. Genau an
            diesem Punkt steige ich ein.
          </p>
        </div>
      </section>

      <section className="block block-dark">
        <div className="wrap-1200">
          <h2>
            <span style={{ color: "var(--green)" }}>Wo</span> auch immer Sie stehen
          </h2>
          <div>
            <p className="copy">
              Ich gehe zieloffen in das erste Gespräch, weil Unternehmen an ganz unterschiedlichen
              Punkten stehen. Manche wollen erst einmal grundsätzlich verstehen, wo KI im eigenen Betrieb
              überhaupt etwas bringt. Andere haben längst entschieden, dass alle Mitarbeitenden KI-Zugang
              bekommen sollen, und suchen jemanden, der das sauber umsetzt.
            </p>
            <p className="copy">
              Wieder andere haben ganz konkrete Anwendungsfälle vor Augen, oder sie treibt ein diffuses
              Gefühl, den Anschluss zu verlieren. Der Grund entscheidet nicht darüber, ob ich helfen kann.
              Er entscheidet nur, wo wir anfangen.
            </p>
          </div>
        </div>
      </section>

      <section className="block block-light">
        <div className="wrap-1200">
          <h2>
            <span style={{ color: "var(--teal)" }}>KI</span> ist Führungssache, nicht IT-Projekt
          </h2>
          <div>
            <p className="copy">
              Ich berate strategisch und moderiere das Thema, wenn gewünscht, mit dem gesamten
              Unternehmen. KI ist eine Führungsaufgabe, keine IT-Beschaffung. Workshops, 1:1-Begleitung,
              Impulsvorträge, Gruppenarbeit — was zu Ihrem Unternehmen passt, setzen wir ein.
            </p>
            <p className="copy">
              Parallel dazu identifiziere ich zusammen mit Ihren Mitarbeitenden konkrete Anwendungsfälle.
              Die Menschen, die die Arbeit jeden Tag machen, wissen meist am genauesten, wo KI wirklich
              etwas verändert.
            </p>
          </div>
        </div>
      </section>

      <section className="block block-dark">
        <div className="wrap-1200">
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ marginBottom: 12 }}>
              <span style={{ color: "var(--green)" }}>Was</span> die Zusammenarbeit mit mir sicherstellt
            </h2>
            <p className="lead">
              Die Einführung läuft technisch auf einer Multi-LLM-Plattform statt an einen einzelnen
              Anbieter gebunden zu sein.
            </p>
          </div>
          <div>
            <div className="row-label">
              <h3>Volle Kostenkontrolle</h3>
              <p>Zentrales KI-Management statt verstreuter Einzel-Lizenzen und unklarer Abrechnung.</p>
            </div>
            <div className="row-label">
              <h3>Datenschutz & Datenautonomie</h3>
              <p>Kein geistiges Eigentum fließt in fremde Modelle. Keine Lock-in-Effekte, Ihre Daten bleiben Ihre eigenen.</p>
            </div>
            <div className="row-label">
              <h3>Umsetzung mit Partnernetzwerk</h3>
              <p>Workflow- und Prozessdesign inklusive Schnittstellen, bis hin zur Prompting School.</p>
            </div>
            <div className="row-label">
              <h3>Für besonders sensible Fälle</h3>
              <p>Private-LLM-Lösungen auf eigenen, abgesicherten Cloud-Serverinstanzen.</p>
            </div>
            <div className="row-label">
              <h3>2nd-Brain für Schlüsselmitarbeiter</h3>
              <p>RAG-basierte Systeme als Informations-Booster und Absicherung bei Ausfall.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="block block-light bio-section">
        <div className="wrap-1200">
          <h2>
            <span style={{ color: "var(--teal)" }}>Warum</span> das ausgerechnet ich mache
          </h2>
          <div>
            <p className="copy">
              Ich bin Volljurist und Managementberater mit fast drei Jahrzehnten unternehmerischer
              Praxis — Vertriebe für Business-Software (SAP, Oracle), Agenturen, mehrfach gegründet,
              Mittelstandsunternehmen in entscheidenden Phasen begleitet, als Berater, Anwalt und
              Aufsichtsrat.
            </p>
            <p className="copy">
              Meine Haltung zu KI ist nicht die eines Technikers. KI ist ein organisatorisches,
              menschliches Führungsthema, und eines der Compliance. Für die reine Technik arbeite ich mit
              Spezialisten aus meinem Netzwerk.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-form-section" id="kontakt">
        <div className="cta-form-grid">
          <div>
            <h2>Lassen Sie uns unverbindlich sprechen.</h2>
            <div className="intro-text">
              <p>30 Minuten reichen, um zu sehen, wo Ihr Unternehmen steht und ob es passt. Kein Pitch, kein Verkaufsdruck.</p>
            </div>
            <a
              className="btn"
              href="https://calendly.com/meeting_mit_clemens/auf-kanal-deiner-wahl"
              target="_blank"
              rel="noopener"
            >
              Termin auf Calendly wählen →
            </a>
            <div className="contact-line">
              Oder direkt: <a href="tel:+4962133937106">0621 33 93 71 06</a> ·{" "}
              <a href="https://www.linkedin.com/in/clemens-gutmann/" target="_blank" rel="noopener">
                LinkedIn
              </a>
            </div>
          </div>
          <ContactForm partnerSlug={partner?.slug ?? null} />
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <div className="stack">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/logo-cropped.png" alt="be nice" />
            <span>In guten Phasen, in schwierigen und in denen dazwischen.</span>
          </div>
        </div>
        <FooterBadges />
        <div className="footer-bottom">
          <span>© be nice 2026 · be nice Managementberatung</span>
          <div className="links">
            <a href="https://www.nice-network.de">nice-network.de</a>
            <a href="/impressum">Impressum</a>
            <a href="/datenschutz">Datenschutzerklärung</a>
          </div>
        </div>
      </footer>
    </>
  );
}
