export const dynamic = "force-dynamic";

import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";
import ContactForm from "./ContactForm";

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
      <header className="site-header">
        <div className="wrap-wide">
          <div className="wordmark">
            be<span>·</span>nice
          </div>
          <div className="eyebrow-nav">KI-Souveränität</div>
        </div>
      </header>

      {partner && (
        <div className="partner-banner">
          <div className="wrap-wide">
            Diese Seite wird Ihnen empfohlen von <strong>{partner.name}</strong>.
          </div>
        </div>
      )}

      <section className="hero">
        <div className="wrap">
          <div className="eyebrow">KI-Einführung für den Mittelstand</div>
          <h1>KI-Einführung, die Ihrem Unternehmen gehört. Nicht dem Anbieter.</h1>
          <div className="underline" />
          <p className="sub">
            Ob Sie noch ganz am Anfang stehen oder längst wissen, wo KI ansetzen soll: Ich sorge dafür,
            dass Ihr Unternehmen dabei die Kontrolle behält. Über Kosten, über Daten, über die
            Entscheidungen selbst.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#kontakt">
              Unverbindliches Erstgespräch buchen
            </a>
            <span className="cta-meta">30 Minuten, ohne Verkaufsdruck</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="lede">
            Der Anstoß kommt selten aus der IT-Abteilung. Meistens ist es eine Mitarbeiterin, die morgens
            erzählt, was ChatGPT über Nacht für sie erledigt hat. Ein Wettbewerber, der plötzlich
            schneller wirkt. Oder ein Satz beim Abendessen: „Papa, das macht doch heute die KI." Der
            Auslöser ist fast egal. Entscheidend ist, was danach passiert.
          </p>
          <p>
            Und danach passiert in den meisten Unternehmen: nichts Geordnetes. Einzelne probieren
            ChatGPT auf eigene Faust aus, mit dem Firmen-Account oder ohne. Niemand weiß genau, welche
            Daten dabei wohin wandern. Die Geschäftsführung spürt den Druck, hat aber weder Zeit noch die
            Übersicht, das sauber aufzuziehen. Genau an diesem Punkt steige ich ein.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <h2>
            <span className="bar" />
            Wo auch immer Sie stehen
          </h2>
          <p>
            Ich gehe zieloffen in das erste Gespräch, weil Unternehmen an ganz unterschiedlichen Punkten
            stehen. Manche wollen erst einmal grundsätzlich verstehen, wo KI im eigenen Betrieb überhaupt
            etwas bringt. Andere haben längst entschieden, dass alle Mitarbeitenden oder ein definierter
            Kreis KI-Zugang bekommen soll, und suchen jemanden, der das sauber umsetzt.
          </p>
          <p>
            Wieder andere haben ganz konkrete Anwendungsfälle vor Augen. Oder sie treibt ein diffuses
            Gefühl, dass sie den Anschluss verlieren, befeuert durch reale oder gefühlte Konkurrenz. Und
            manchmal ist es einfach der Wunsch, als moderner Arbeitgeber wahrgenommen zu werden, ein
            allgemeines Bauchgefühl, dass sich hier etwas Grundlegendes verändert, oder eben der Satz vom
            eigenen Kind am Esstisch. Der Grund entscheidet nicht darüber, ob ich helfen kann. Er
            entscheidet nur, wo wir anfangen.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>
            <span className="bar" />
            KI ist Führungssache, nicht IT-Projekt
          </h2>
          <p>
            Ich berate strategisch und moderiere das Thema, wenn gewünscht, mit dem gesamten Unternehmen.
            Sehr gern übernehme ich Führungskräfteentwicklung nach FE1/2 und rücke dabei etwas ins
            Bewusstsein, das in vielen Betrieben noch an der falschen Stelle hängt: KI ist eine
            Führungsaufgabe, keine IT-Beschaffung. Workshops, 1:1-Begleitung, Impulsvorträge,
            Gruppenarbeit. Was zu Ihrem Unternehmen passt, setzen wir ein.
          </p>
          <p>
            Parallel dazu identifiziere ich zusammen mit Ihren Mitarbeitenden konkrete Anwendungsfälle
            und erarbeite gezielt Lösungsvorschläge dafür. Die Menschen, die die Arbeit jeden Tag machen,
            wissen meist am genauesten, wo KI wirklich etwas verändert.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap-wide">
          <h2>
            <span className="bar" />
            Was die Zusammenarbeit mit mir sicherstellt
          </h2>
          <p className="cards-intro">
            Die Einführung läuft technisch auf einer Multi-LLM-Plattform statt an einen einzelnen
            Anbieter gebunden zu sein. Was das für Ihr Unternehmen konkret bedeutet:
          </p>
          <div className="card-grid">
            <div className="card">
              <h3>Volle Kostenkontrolle</h3>
              <p>Zentrales KI-Management statt verstreuter Einzel-Lizenzen und unklarer Abrechnung.</p>
            </div>
            <div className="card">
              <h3>Datenschutz, Compliance und Datenautonomie</h3>
              <p>
                Zentrale Kontrolle über Datensicherheit und Datenschutz. Technisch abgesichert, dass kein
                geistiges Eigentum Ihres Unternehmens oder Ihrer Kunden in Modelle abfließt, erst recht
                nicht in solche, die ausländischen Durchsuchungsbeschlüssen unterliegen. Keine
                Lock-in-Effekte, Ihre Daten bleiben uneingeschränkt Ihre eigenen.
              </p>
            </div>
            <div className="card">
              <h3>Umsetzung mit Partnernetzwerk</h3>
              <p>
                Workflow- und Prozessdesign inklusive Schnittstellen wird von Partnern mit erledigt.
                Onboarding und Schulungen für Nutzer und Admins, bis hin zur Prompting School sowie
                Data-Protection- und Cost-Control-Trainings.
              </p>
            </div>
            <div className="card">
              <h3>Für besonders sensible Fälle</h3>
              <p>
                Private-LLM-Lösungen auf eigenen, abgesicherten Cloud-Serverinstanzen, direkt über
                Partner, bei denen ich Preferred-Supplier-Status habe.
              </p>
            </div>
            <div className="card wide">
              <h3>2nd-Brain für Schlüsselmitarbeiter</h3>
              <p>
                Entwicklung, Installation und Onboarding von 2nd-Brains für besonders verantwortungsvolle
                Mitarbeiterinnen und Mitarbeiter: RAG-basierte Systeme, die KI zum
                Informations-Verfügbarkeits-Booster machen und im Fall des Ausfalls von Schlüsselpersonen
                absichern.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>
            <span className="bar" />
            Warum das ausgerechnet ich mache
          </h2>
          <div className="bio">
            <div className="bio-mark">CG</div>
            <div>
              <p>
                Ich bin Volljurist und Managementberater mit fast drei Jahrzehnten unternehmerischer
                Praxis. Ich habe Vertriebe für Business-Software (SAP, Oracle) national wie international
                geleitet, Agenturen geführt, mehrfach gegründet und Mittelstandsunternehmen in
                entscheidenden Phasen begleitet, als Berater, als Anwalt, als Aufsichtsrat, auch in
                Restrukturierungen und Insolvenzsituationen.
              </p>
              <p>
                Meine Haltung zu KI ist nicht die eines Technikers. KI ist für mich ein organisatorisches,
                ein menschliches, ein Führungsthema, und eines der Compliance. Für die reine Technik
                arbeite ich mit Spezialisten aus meinem Netzwerk. Das ist der Grund, warum ich weiß, dass
                die schwierigste Frage bei einer KI-Einführung selten technisch ist.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta" id="kontakt">
        <div className="wrap">
          <h2>Lassen Sie uns unverbindlich sprechen.</h2>
          <p>30 Minuten reichen, um zu sehen, wo Ihr Unternehmen steht und ob es passt. Kein Pitch, kein Verkaufsdruck.</p>
          <a
            className="btn btn-primary"
            href="https://calendly.com/meeting_mit_clemens/auf-kanal-deiner-wahl"
            target="_blank"
            rel="noopener"
          >
            Termin auf Calendly wählen
          </a>
          <div className="contact-line">
            Oder direkt: <a href="tel:+4962133937106">0621 33 93 71 06</a> &middot;{" "}
            <a href="https://www.linkedin.com/in/clemens-gutmann/" target="_blank" rel="noopener">
              LinkedIn
            </a>
          </div>
          <ContactForm partnerSlug={partner?.slug ?? null} />
        </div>
      </section>

      <footer>
        <div className="wrap-wide">
          <div>&copy; be nice 2026 &middot; Clemens Gutmann Managementberatung</div>
          <div style={{ display: "flex", gap: 18 }}>
            <a href="https://www.nice-network.de">nice-network.de</a>
            <a href="/impressum">Impressum</a>
            <a href="/datenschutz">Datenschutzerklärung</a>
          </div>
        </div>
      </footer>
    </>
  );
}
