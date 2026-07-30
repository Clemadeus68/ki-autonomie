export default function Datenschutz() {
  return (
    <div className="wrap legal">
      <h1>Datenschutzerklärung</h1>
      <div className="placeholder-note">
        Platzhalter. Vor dem Livegang die Datenschutzerklärung von nice-network.de als Basis nehmen und um
        zwei neue Verarbeitungen ergänzen, die es auf nice-network.de so nicht gibt: (1) serverseitiges
        Klick-Logging pro Aufruf (Zeitstempel, Referrer, User-Agent, optionale Empfehlungs-Kennung aus dem
        Link) ohne Cookies, und (2) die Zuordnung von Kontaktanfragen zu einem Empfehlungspartner (z. B.
        Ralf Berg), wenn die Seite über dessen Link aufgerufen wurde.
      </div>
      <p>
        Diese Website erhebt beim Aufruf technische Daten (Zeitpunkt, verweisende Seite, Browserkennung)
        sowie, falls der Aufruf über einen Empfehlungslink erfolgt, eine Kennung des empfehlenden
        Partners. Wer über das Kontaktformular eine Anfrage stellt, übermittelt zusätzlich Name,
        E-Mail-Adresse und optional Telefonnummer und Nachricht zur Bearbeitung dieser Anfrage.
      </p>
    </div>
  );
}
