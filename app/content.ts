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

export const content = {
  nav: {
    byline: "Clemens Gutmann | be nice Managementberatung",
    eyebrow: "KI-AUTONOMIE",
  },

  partnerBanner: {
    // {partner} wird automatisch durch den Namen aus dem Empfehlungslink ersetzt
    text: "Diese Seite wurde durch {partner} empfohlen",
  },

  hero: {
    eyebrow: "IHR KI-STRATEGIEBERATER FÜR DEN MITTELSTAND",
    // "jedem Arbeitsplatz" wird in page.tsx aus diesem Satz herausgetrennt und
    // grün eingefärbt (ersetzt die frühere separate titleAccent-Zeile). Wird
    // der Wortlaut dieser Stelle geändert, muss der exakt gleiche Text auch
    // in page.tsx angepasst werden, sonst greift die Einfärbung nicht mehr.
    titleLine1: "Endlich KI einführen - mit voller Kontrolle an jedem Arbeitsplatz.",
    sub: "Als Ihr KI-Strategieberater berate ich Ihre Geschäftsführung, nehme Ihre Mitarbeitenden mit und sorge als Volljurist für DSGVO- und AI-Act-konforme Kontrolle über Kosten und Sicherheit an jedem Arbeitsplatz.",
    ctaLabel: "Unverbindliches Erstgespräch buchen →",
    ctaMeta: "30 Minuten, ohne Verkaufsdruck",
    ctaLabel2: "in 3 Minuten Ihre KI-Readiness messen →",
    ctaMeta2: "Kostenfrei und unverbindlich",
    ctaUrl2: "https://ki-readiness.nice-network.de/",
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
    headingRest: "ist Führungssache, nicht IT-Projekt",
    paragraphs: [
      "Ich berate strategisch und moderiere das Thema, wenn gewünscht, mit dem gesamten Unternehmen. KI ist eine Führungsaufgabe, keine IT-Beschaffung. Workshops, 1:1-Begleitung, Impulsvorträge, Gruppenarbeit - was zu Ihrem Unternehmen passt, setzen wir ein.",
      "Parallel dazu identifiziere ich zusammen mit Ihren Mitarbeitenden konkrete Anwendungsfälle. Die Menschen, die die Arbeit jeden Tag machen, wissen meist am genauesten, wo KI wirklich etwas verändert.",
    ],
  },

  benefits: {
    headingAccent: "Was",
    headingRest: "die Zusammenarbeit mit mir sicherstellt",
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
        title: "Umsetzung mit Partnernetzwerk",
        text: "Workflow- und Prozessdesign inklusive Schnittstellen, bis hin zur Prompting School.",
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
      "Ich bin Volljurist und Managementberater mit fast drei Jahrzehnten Praxis in Management, Beratung und Unternehmertum - mehrfach gegründet, Unternehmen und Agenturen geleitet, Aufbauphasen bei Mittelstandsunternehmen und Startups mitgestaltet.",
      "KI ist für mich kein IT-Thema, sondern ein Führungs-, Compliance- und Datensicherheitsthema - deshalb sollte es meist als Erstes angegangen werden, weil alle anderen Prozessverbesserungen davon abhängen. Technisch arbeite ich bei Bedarf mit Spezialisten aus meinem Netzwerk und setze konsequent auf kuratierte Multi-LLM-Plattformen mit Sitz und Hosting in Deutschland.",
      "Von der Strategie bis zur Umsetzung: Implementierung, Schulung, Prompting School - inklusive staatlicher Förderung von bis zu 80% für Transformationsprojekte. Schreiben Sie mir kurz, wir klären alles Weitere im Gespräch.",
    ],
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
        quote: "„Wir arbeiten seit Jahren mit be nice. Das breite Erfahrungsspektrum, die Fähigkeit zuzuhören und pragmatische Lösungen in Rekordzeit zu entwickeln, beeindruckt mich an Clemens Gutmann und seinem Team immer wieder auf's Neue.“",
        name: "Albrecht Biffar",
        role: "CEO BIFFAR Energie",
      },
      {
        avatar: "/assets/avatar-scholl.png",
        quote: "„Clemens Gutmann und be nice vereinen Erfahrung, souveräne und kreative Beratung sowie Einfühlungsvermögen in Branchen und Ideen. Dazu kommt hervorragende und unkomplizierte Umsetzung. Eine klare Empfehlung!“",
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
  },

  footer: {
    tagline: "In guten Phasen, in schwierigen und in denen dazwischen.",
    copyright: "© be nice 2026 · be nice Managementberatung",
  },
};
