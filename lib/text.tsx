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
