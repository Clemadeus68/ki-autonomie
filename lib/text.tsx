// Erlaubt einzelne **fett** markierte Wörter in content.ts-Texten, ohne dass
// dort echtes HTML/JSX steht (das wäre für Nicht-Entwickler leichter kaputt
// zu editieren als die vertraute **...**-Markdown-Konvention).
export function Boldify({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*\*(.+?)\*\*/g).map((part, i) => (i % 2 === 1 ? <b key={i}>{part}</b> : part))}
    </>
  );
}

// Färbt einzelne, exakt genannte Wörter im Text grün ein (Klasse accent-green).
// Wörter, die nicht im Text vorkommen, werden einfach ignoriert. Wird der
// Wortlaut im Content geändert, greift die Einfärbung nur, wenn die Wörter
// hier weiterhin exakt passen.
export function Highlight({ text, words }: { text: string; words: string[] }) {
  const escaped = words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const parts = text.split(new RegExp(`(${escaped.join("|")})`, "g"));
  return (
    <>
      {parts.map((part, i) =>
        words.includes(part) ? (
          <span className="accent-green" key={i}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}
