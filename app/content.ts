// Alle Texte der Landingpage an einem Ort.
//
// Zum Ändern: Text zwischen den Anführungszeichen ("...") ersetzen, die
// Anführungszeichen selbst und Kommas am Zeilenende nicht anfassen.
// Zeilenumbrüche in langen Absätzen sind nur fürs Lesen im Editor da, sie
// haben auf der Seite keine Wirkung (Leerzeichen statt Umbruch).
//
// Änderung speichern (auf GitHub: "Commit changes") deployt die Seite
// automatisch neu, meist innerhalb einer Minute live.

export const content = {
  nav: {
    eyebrow: "KI-AUTONOMIE",
  },

  partnerBanner: {
    // {partner} wird automatisch durch den Namen aus dem Empfehlungslink ersetzt
    text: "Diese Seite wurde durch {partner} empfohlen",
  },

  hero: {
    eyebrow: "KI-EINFÜHRUNG FÜR DEN MITTELSTAND",
    titleLine1: "KI-Einführung, die Ihrem Unternehmen gehört.",
    titleAccent: "Nicht dem Anbieter.",
    sub: "Ob Sie noch ganz am Anfang stehen oder längst wissen, wo KI ansetzen soll: Ich sorge dafür, dass Ihr Unternehmen dabei die Kontrolle behält. Über Kosten, über Daten, über die Entscheidungen selbst.",
    ctaLabel: "Unverbindliches Erstgespräch buchen →",
    ctaMeta: "30 Minuten, ohne Verkaufsdruck",
  },

  photoSection: {
    ledeBefore: "Der Anstoß kommt selten aus der IT-Abteilung. Meistens ist es eine Mitarbeiterin, die morgens erzählt, was ChatGPT über Nacht für sie erledigt hat. Ein Wettbewerber, der plötzlich schneller wirkt. Oder ein Satz beim Abendessen: ",
    ledeQuote: "„Papa, das macht doch heute die KI.“",
    ledeAfter: " Der Auslöser ist fast egal. Entscheidend ist, was danach passiert.",
    sub: "Und danach passiert in den meisten Unternehmen: nichts Geordnetes. Einzelne probieren ChatGPT auf eigene Faust aus. Niemand weiß genau, welche Daten dabei wohin wandern. Genau an diesem Punkt steige ich ein.",
  },

  whereYouStand: {
    headingAccent: "Wo",
    headingRest: "auch immer Sie stehen",
    paragraphs: [
      "Ich gehe zieloffen in das erste Gespräch, weil Unternehmen an ganz unterschiedlichen Punkten stehen. Manche wollen erst einmal grundsätzlich verstehen, wo KI im eigenen Betrieb überhaupt etwas bringt. Andere haben längst entschieden, dass alle Mitarbeitenden KI-Zugang bekommen sollen, und suchen jemanden, der das sauber umsetzt.",
      "Wieder andere haben ganz konkrete Anwendungsfälle vor Augen, oder sie treibt ein diffuses Gefühl, den Anschluss zu verlieren. Der Grund entscheidet nicht darüber, ob ich helfen kann. Er entscheidet nur, wo wir anfangen.",
    ],
  },

  leadership: {
    headingAccent: "KI",
    headingRest: "ist Führungssache, nicht IT-Projekt",
    paragraphs: [
      "Ich berate strategisch und moderiere das Thema, wenn gewünscht, mit dem gesamten Unternehmen. KI ist eine Führungsaufgabe, keine IT-Beschaffung. Workshops, 1:1-Begleitung, Impulsvorträge, Gruppenarbeit — was zu Ihrem Unternehmen passt, setzen wir ein.",
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
        text: "Zentrales KI-Management statt verstreuter Einzel-Lizenzen und unklarer Abrechnung.",
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
        title: "2nd-Brain für Schlüsselmitarbeiter",
        text: "RAG-basierte Systeme als Informations-Booster und Absicherung bei Ausfall.",
      },
    ],
  },

  bio: {
    headingAccent: "Warum",
    headingRest: "das ausgerechnet ich mache",
    paragraphs: [
      "Ich bin Volljurist und Managementberater mit fast drei Jahrzehnten unternehmerischer Praxis — Vertriebe für Business-Software (SAP, Oracle), Agenturen, mehrfach gegründet, Mittelstandsunternehmen in entscheidenden Phasen begleitet, als Berater, Anwalt und Aufsichtsrat.",
      "Meine Haltung zu KI ist nicht die eines Technikers. KI ist ein organisatorisches, menschliches Führungsthema, und eines der Compliance. Für die reine Technik arbeite ich mit Spezialisten aus meinem Netzwerk.",
    ],
  },

  contact: {
    heading: "Lassen Sie uns unverbindlich sprechen.",
    intro: "30 Minuten reichen, um zu sehen, wo Ihr Unternehmen steht und ob es passt. Kein Pitch, kein Verkaufsdruck.",
    calendlyLabel: "Termin auf Calendly wählen →",
    calendlyUrl: "https://calendly.com/meeting_mit_clemens/auf-kanal-deiner-wahl",
    phoneLabel: "0621 33 93 71 06",
    phoneHref: "tel:+4962133937106",
    linkedinUrl: "https://www.linkedin.com/in/clemens-gutmann/",
  },

  footer: {
    tagline: "In guten Phasen, in schwierigen und in denen dazwischen.",
    copyright: "© be nice 2026 · be nice Managementberatung",
  },
};
