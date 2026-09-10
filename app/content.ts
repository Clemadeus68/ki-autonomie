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
    eyebrow: "KI-SPARRINGSPARTNER",
  },

  partnerBanner: {
    // {partner} wird automatisch durch den Namen aus dem Empfehlungslink ersetzt
    text: "Diese Seite wurde durch {partner} empfohlen",
  },

  hero: {
    eyebrow: "KI-STRATEGIE, DIE HAFTUNGSRISIKEN MITDENKT - FÜR DEN MITTELSTAND",
    identity: "KI-Sparringspartner und Volljurist in einem.",
    // "jedem Arbeitsplatz" wird in page.tsx aus diesem Satz herausgetrennt und
    // grün eingefärbt (ersetzt die frühere separate titleAccent-Zeile). Wird
    // der Wortlaut dieser Stelle geändert, muss der exakt gleiche Text auch
    // in page.tsx angepasst werden, sonst greift die Einfärbung nicht mehr.
    titleLine1: "KI im Unternehmen - mit voller Kontrolle an jedem Arbeitsplatz.",
    sub: "Als Ihr KI-Strategieberater berate ich Ihre Geschäftsführung, nehme Ihre Mitarbeitenden mit und sorge als Volljurist für DSGVO- und AI-Act-konforme Kontrolle über Kosten und Sicherheit an jedem Arbeitsplatz.",
    ctaLabel: "Unverbindliches Erstgespräch mit 2 Klicks →",
    ctaMeta: "30 Minuten, ohne Verkaufsdruck",
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
    ],
    close: "Genau an diesem Punkt steige ich ein.",
  },

  whereYouStand: {
    headingAccent: "Wo",
    headingRest: "auch immer Sie stehen",
    paragraphs: [
      "Ich gehe zieloffen in das erste Gespräch, weil Unternehmen an ganz unterschiedlichen Punkten stehen. Manche wollen erst einmal grundsätzlich verstehen, wo KI im eigenen Betrieb überhaupt etwas bringt. Andere haben längst entschieden, dass alle Mitarbeitenden KI-Zugang bekommen sollen, und suchen jemanden, der das sauber umsetzt.",
      "Wieder andere haben ganz konkrete Anwendungsfälle vor Augen, oder sie treibt ein diffuses Gefühl, den Anschluss zu verlieren. Der konkrete Grund ist gar nicht so wichtig. Hauptsache, wir kommen ins Gespräch. Ich begleite Sie auf dem gesamten Weg, bis zu 80% staatlich gefördert",
    ],
  },

  leadership: {
    headingAccent: "KI",
    headingRest: "gehört gemanagt, nicht nur genutzt",
    paragraphs: [
      "Alle reden über Agentic Workflows und Metaprompts. Und übersehen dabei das Naheliegende: KI muss gemanagt werden, so nüchtern wie jedes andere Unternehmenssystem auch.",
      "Ich vermittle Ihnen dafür ein einsatzbereites, sehr gut referenziertes System, mit dem Sie alle relevanten KI-Modelle zu den Kosten eines einzigen Modell-Abos nutzen, testbar in einem 28-tägigen Trial, der auch die Nutzungskosten der Modelle selbst einschließt. Eine vorgelagerte automatische Pseudonymisierung sorgt fast auf Knopfdruck für DSGVO-Sicherheit und schützt Sie vor Haftungsrisiken. Ein eigenes Tool wickelt die Pflichtschulung nach Art. 4 AI-Act automatisiert für Sie ab.",
      "Meistens beginnt das erste Gespräch aber ganz woanders: bei Prozessen und Workflows, die nicht mehr rundlaufen. Genau das ist oft der eigentliche Grund, warum KI im Unternehmen zum strategischen Thema wird. Ich schaue mir diese Prozesse an, finde die Potenziale und entwickle mit Ihnen einen Leitfaden, wie Sie innerhalb Ihrer bestehenden Systeme mit minimalem Aufwand mehr Leistung und mehr Komfort herausholen, auch im Umgang mit Ihren Daten.",
    ],
    trialNote:
      "Für den technischen Unterbau bin ich Partner von Anymize, dem Multi-LLM-System, das ich einsetze. Sie können es 28 Tage kostenfrei testen.",
    ctaLabel: "Unverbindliches Erstgespräch →",
  },

  benefits: {
    headingAccent: "Was",
    headingRest: "die Zusammenarbeit mit mir sicherstellt",
    lead: "Die Einführung läuft technisch auf einer Multi-LLM-Plattform statt an einen einzelnen Anbieter gebunden zu sein.",
    rows: [
      {
        title: "Volle Kostenkontrolle",
        text: "Zentrales KI-Management statt verstreuter Einzel-Lizenzen und unklarer Abrechnung. Kostenrisiken durch Preissteigerung einzelner Modelle werden durch jederzeitige Möglichkeit des Modellwechsels optimal begrenzt",
        link: { text: "Zentrales KI-Management", url: ANYMIZE_URL },
      },
      {
        title: "Datenschutz & Datenautonomie",
        text: "Kein geistiges Eigentum fließt in fremde Modelle. Keine Lock-in-Effekte, Ihre Daten bleiben Ihre eigenen.",
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
        title: "Bis zu 80% staatliche Förderung",
        text: "Beratungs- und Umsetzungsprojekte werden gefördert. Wir kümmern uns um die Formalitäten und prüfen die Voraussetzungen für Sie. Kostenfrei!",
        highlight: true,
      },
      {
        title: "Weiterbildung 100% gefördert",
        text: "Schulungs- und Weiterbildungsmaßnahmen nach dem Qualifizierungschancengesetz (QCG) - zu 100% des Gehalts der teilnehmenden Mitarbeitenden, über meine Partnerakademien.",
        highlight: true,
      },
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
