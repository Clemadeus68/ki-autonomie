// Alle Texte der Landingpage an einem Ort.
//
// Zum Ändern: Text zwischen den Anführungszeichen ("...") ersetzen, die
// Anführungszeichen selbst und Kommas am Zeilenende nicht anfassen.
// Wichtig: Braucht der Text selbst Anführungszeichen (z.B. ein Zitat), NICHT
// "..." benutzen, sondern die deutschen „...", sonst bricht der Code.
// Beispiel richtig: "Sie sagte „So geht das nicht“ und ging."
// Beispiel falsch:  "Sie sagte "So geht das nicht" und ging."
// Zeilenumbrüche in langen Absätzen sind nur fürs Lesen im Editor da, sie
// haben auf der Seite keine Wirkung (Leerzeichen statt Umbruch).
// Manche Texte (z.B. sieItems/ichItems) erlauben **Wort** für fette
// Hervorhebung einzelner Wörter, genau wie in WhatsApp.
//
// Änderung speichern (auf GitHub: "Commit changes") deployt die Seite
// automatisch neu, meist innerhalb einer Minute live.

// Partner-Link für den Multi-LLM-Trial (Anymize). An mehreren Stellen der
// Seite verlinkt (Hero-CTA, Leadership-CTA, "Zentrales KI-Management"),
// deshalb hier einmal zentral gepflegt statt an jeder Stelle einzeln.
const ANYMIZE_URL = "https://anymize.ai/partner/nice-network";

export const content = {
  anymizeUrl: ANYMIZE_URL,

  nav: {
    byline: "Clemens Gutmann | be nice Managementberatung",
    eyebrow: "LOTSE & MACHER",
  },

  partnerBanner: {
    // {partner} wird automatisch durch den Namen aus dem Empfehlungslink ersetzt
    text: "Diese Seite wurde durch {partner} empfohlen",
  },

  hero: {
    eyebrow: "LOTSE & MACHER FÜR DEN MITTELSTAND",
    // "Haftungsfrage" (H1) und "Volljurist" (subParagraphs) werden in
    // page.tsx aus dem Satz herausgetrennt und eingefärbt (Beere bzw. Grün).
    // Wird der Wortlaut dieser Stellen geändert, muss der exakt gleiche Text
    // auch in page.tsx angepasst werden, sonst greift die Einfärbung nicht mehr.
    titleLine1: "KI einführen ist kein IT-Projekt. Es ist eine Führungs- und Haftungsfrage.",
    subParagraphs: [
      "KI-Einführung ist ein Führungsthema: Wo beginnen? Was sind sinnvolle (und auch messbare) Ziele? Wie können wir die - durchaus bestehenden - Ängste mancher Mitarbeitenden abbauen, ohne dass der Schwung verlorengeht? Wie schaffen wir eine Sicherheitszone für Daten, sodass die Mitarbeitenden experimentieren und kreativ sein können, um Prozesse zu verbessern. Ohne dass Gefahr von Datenschutzverstößen oder sonstigem „Ärger“ droht?",
      "Ich lotse Sie durch die KI-Landschaft, berate bezüglich der ersten Schritte und gebe Ihnen strategischen wie praktischen Rat. Ich organisiere passende Schulungen und Trainings ab dem niedrigsten Niveau und baue allseits Sorgen und Ängste ab. Hierbei arbeite ich empathisch und hands-on.",
      "Als Volljurist halte ich dabei DSGVO und AI-Act im Blick, damit kein Bedienfehler zum teuren Problem wird.",
    ],
    ctaLabel: "Unverbindliches Erstgespräch mit 2 Klicks →",
    ctaMeta: "30 Minuten, ohne Verkaufsdruck",
    fundingBadge: "Das Erstgespräch ist kostenlos. Ihr Projekt danach ist über BAFA und INQA förderfähig, bis zu 80% der Kosten. Die Antragstellung übernehme ich.",
  },

  photoSection: {
    photoCredit: "Clemens Gutmann 2026",
    sieLabel: "Ihre Situation",
    sieItems: [
      "Ein **Vortrag**, der Ihre Phantasie in Gang bringt.",
      "Ein **Wettbewerber**, der zeigt, was schon geht.",
      "Eine **Standardsoftware**, die an ihre Grenzen kommt - eine Ablösung kommt trotzdem nicht infrage.",
    ],
    ichLabel: "Meine Beobachtung",
    ichItems: [
      "Sie wissen nicht, wo Sie **anfangen** sollen - Zeit dafür ist ohnehin knapp.",
      "Sie wollen nicht einfach **jedem** Zugang geben, aus Sorge, dass die **Tokenkosten** explodieren.",
      "**DSGVO** und **AI-Act** wirken wie ein Fass ohne Boden - einen extra Anwalt wollen Sie dafür nicht bezahlen.",
      "Nicht jede und jeder im Team ist gleich technikaffin - Sie wissen nicht, wer die Einführung wirklich mitgehen kann.",
      "Ihr Team arbeitet bereits am Limit, und die Sorge ist, dass eine schlecht eingeführte KI diesen Druck weiter verschärft.",
    ],
    close: "Genau an diesem Punkt steige ich ein.",
  },

  leadership: {
    headingAccent: "KI",
    headingRest: "gehört gemanagt, nicht nur genutzt",
    paragraphs: [
      "Alle reden über Agentic Workflows und Metaprompts. Und übersehen dabei das Naheliegende: KI muss gemanagt werden, so nüchtern wie jedes andere Unternehmenssystem auch.",
      "Meistens beginnt das erste Gespräch aber ganz woanders: bei Prozessen und Workflows, die nicht mehr rundlaufen. Genau das ist oft der eigentliche Grund, warum KI im Unternehmen zum strategischen Thema wird. Ich schaue mir diese Prozesse an, finde die Potenziale und entwickle mit Ihnen einen Leitfaden, wie Sie innerhalb Ihrer bestehenden Systeme mit minimalem Aufwand mehr Leistung und mehr Komfort herausholen, auch im Umgang mit Ihren Daten.",
    ],
    trialNote:
      "Für den technischen Unterbau bin ich Partner von Anymize, dem Multi-LLM-System, das ich einsetze. Sie können es 28 Tage kostenfrei testen.",
    ctaLabel: "Unverbindliches Erstgespräch →",
  },

  enablement: {
    headingAccent: "Onboarding",
    headingRest: "& Training, damit KI im Alltag ankommt",
    paragraphs: [
      "KI ausrollen ist der einfache Teil. Der Wert entsteht erst, wenn Ihre Leute sie wirklich nutzen - und zwar alle, nicht nur die drei, die sich ohnehin dafür interessieren.",
      "Ich schule Ihre Teams strukturiert, auf dem Niveau, auf dem sie stehen: von der ersten Berührungsangst bis zur Prompting School für die, die tiefer wollen. Nach dem Go-live bleibe ich als Ansprechpartner dabei, bis es sitzt.",
      "Über verschiedene KMU-Förderprogramme sind bis zu 80% meiner Kosten staatlich gefördert. Die Formalitäten übernehme ich für Sie.",
      "Sollen Mitarbeitende gezielt für digitale Aufgaben weiterqualifiziert werden, berate ich Sie außerdem zum Qualifizierungschancengesetz - darüber können Sie bis zu 100% des Bruttolohns für den Schulungszeitraum ersetzt bekommen.",
    ],
  },

  benefits: {
    headingAccent: "Was",
    headingRest: "ich für Sie sicherstelle",
    lead: "Die Einführung läuft technisch auf einer Multi-LLM-Plattform statt an einen einzelnen Anbieter gebunden zu sein.",
    rows: [
      {
        title: "Volle Kostenkontrolle",
        text: "Zentrales KI-Management statt verstreuter Einzel-Lizenzen und unklarer Abrechnung. Kostenrisiken durch Preissteigerung einzelner Modelle werden durch jederzeitige Möglichkeit des Modellwechsels optimal begrenzt",
      },
      {
        title: "Datenschutz & Datenautonomie",
        text: "Kein geistiges Eigentum fließt in fremde Modelle. Keine Lock-in-Effekte, Ihre Daten bleiben Ihre eigenen.",
      },
      {
        title: "Art-4-Pflichtschulung erledigt",
        text: "Eigenes Tool mit Zertifikatsausgabe, das auf Wunsch auch Ihre KI-Richtlinie an die Mitarbeitenden schult. Noch keine Richtlinie? Erstelle ich für Sie.",
      },
      {
        title: "Umsetzung mit Partnernetzwerk",
        text: "Anbindungen von bestehenden Systemen und Tools mittels Schnittstellen, komplexe Automatisierungen.",
      },
      {
        title: "Für besonders sensible Fälle",
        text: "Private-LLM-Lösungen auf eigenen, abgesicherten Cloud-Serverinstanzen.",
      },
      {
        title: "Staatlich gefördert",
        text: "Bis zu 80% meiner Kosten über KMU-Förderprogramme, dazu bis zu 100% Lohnersatz für Weiterbildung über das QCG. Die Formalitäten übernehme ich.",
        highlight: true,
      },
      {
        title: "Keine Rechtsberatung",
        text: "Für rechtsverbindliche Aussagen arbeite ich mit Partnerkanzleien auf Basis fairer Pauschalen zusammen.",
      },
    ],
  },

  funding: {
    headingAccent: "Zwei",
    headingRest: "Wege, wie der Staat mitzahlt",
    paragraphs: [
      "Das BAFA-Förderprogramm übernimmt 50% meiner Beratungskosten für die Ausgangsanalyse und Erarbeitung der Umsetzungsplanung. Das ist ein kurzfristiges Projekt und auf EUR 3.500,00 gedeckelt (davon werden 50% gefördert).",
      "Das INQA-KMU-Coaching fördert 80% Ihrer Kosten für digitale Transformationsprojekte, also die Umsetzung gemeinsam mit Ihrem Team.",
      "Die Prüfung der Voraussetzungen und Antragstellung ist Teil meiner Leistung, ich übernehme sie mit meinem Backoffice für Sie.",
    ],
  },

  bio: {
    headingAccent: "Warum",
    headingRest: "das ausgerechnet ich mache",
    paragraphs: [
      "Ich bin Volljurist und Managementberater mit fast drei Jahrzehnten Praxis in Management, Beratung und Unternehmertum, dazu Führungspositionen bis hin zur Entwicklung und zum internationalen Vertrieb von Sales-Prozessverbesserungen im SAP-Umfeld und zwanzig Jahre Digitalisierungserfahrung. Ich habe mehrfach gegründet, Unternehmen und Agenturen geleitet, Mittelstandsunternehmen in entscheidenden Phasen begleitet und als Anwalt, Berater und Aufsichtsrat unterstützt.",
      "KI ist für mich ein organisatorisches, menschliches Führungsthema, eines der Compliance und der Datensicherheit. Für die Technik arbeite ich nahtlos mit Spezialisten aus meinem Netzwerk zusammen. Ich setze konsequent auf Multi-LLM-Plattformen mit Eigentümerschaft, Sitz und Hosting in Deutschland, die ich sorgfältig kuratiere und die ein ergänzendes, hervorragendes Serviceangebot mitbringen.",
    ],
    ctaLabel: "Gerne führen wir ein unverbindliches Gespräch über KI-Strategie →",
    moreInfoUrl: "https://www.nice-network.de",
    manifestoText:
      "Mein Bekenntnis zu einer KI-Nutzung, die Rücksicht auf uns Menschen nimmt, war der Auslöser dafür, dass ich das Human-First AI Manifesto mitinitiiert habe.",
    manifestoBadge: "/assets/badge-humanfirst-ai.png",
    manifestoUrl: "https://www.humanfirstaimanifesto.com/",
  },

  testimonials: {
    heading: "Was sagen Unternehmer über uns?",
    items: [
      {
        avatar: "/assets/avatar-biffar.png",
        quote: "„Wir arbeiten seit Jahren mit Clemens Gutmann. Breitestes Erfahrungsspektrum aus Vertrieb und Marketing, Management und dazu Volljurist. Die Fähigkeit zuzuhören und pragmatische Lösungen in Rekordzeit zu entwickeln und sein starkes technisches Expertennetzwerk, das er bei Bedarf einbindet und führt, beeindrucken immer wieder auf's Neue.“",
        name: "Albrecht Biffar",
        role: "CEO BIFFAR Energie",
      },
      {
        avatar: "/assets/avatar-scholl.png",
        quote: "„Clemens Gutmann vereint strategische Erfahrung, modernstes Wissen und kreative Beratung mit Einfühlungsvermögen in Branchen und Ideen. Immer markt- und erfolgsbezogen. Dazu kommt hervorragende und unkomplizierte Umsetzung und Projektmanagement, das bei Bedarf sogar unsere bestehenden Dienstleister und unser internes Team einbindet. Eine klare Empfehlung!“",
        name: "Aljoscha Scholl",
        role: "Managing Director Scholl Real Estate Solutions",
      },
    ],
  },

  clients: {
    sub: "Auszug aus unserer Kundenliste",
    logos: [
      { src: "/assets/logo-baufritz.png", alt: "Baufritz", url: "https://www.baufritz.com/de", height: 40 },
      { src: "/assets/logo-biffar.png", alt: "Biffar Energie", url: "https://biffar-energie.de/", height: 58 },
      { src: "/assets/logo-scholl.png", alt: "Scholl Real Estate Solutions", url: "https://www.scholl-solutions.de", height: 58 },
      { src: "/assets/logo-klimawirtschaft.png", alt: "Stiftung KlimaWirtschaft", url: "https://klimawirtschaft.org", height: 40 },
      { src: "/assets/logo-wwf.png", alt: "WWF", url: "https://www.wwf.de", height: 100 },
      { src: "/assets/logo-studioapplaus.png", alt: "Studio Applaus", url: "https://www.studioapplaus.de", height: 64 },
      { src: "/assets/logo-musealis.png", alt: "Musealis", url: "https://www.musealis.net", height: 40 },
      { src: "/assets/logo-mannheim.png", alt: "Stadt Mannheim", url: "https://www.mannheim.de/de", height: 40 },
    ],
  },

  contact: {
    heading: "Lassen Sie uns unverbindlich sprechen.",
    intro: "30 Minuten reichen, um zu sehen, wo Ihr Unternehmen steht und ob es passt. Kein Pitch, kein Verkaufsdruck.",
    calendlyLabel: "Termin auf Calendly wählen →",
    calendlyUrl: "https://calendly.com/meeting_mit_clemens/auf-kanal-deiner-wahl?month=2026-07",
    phoneLabel: "0621 33 93 71 06",
    phoneHref: "tel:+4962133937106",
    linkedinUrl: "https://www.linkedin.com/in/clemens-gutmann/",
    emailLabel: "letstalk@nice-network.de",
    emailHref: "mailto:letstalk@nice-network.de",
  },

  footer: {
    tagline: "In guten Phasen, in schwierigen und in denen dazwischen.",
    copyright: "© be nice 2026 · be nice Managementberatung",
  },
};
