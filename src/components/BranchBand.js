const ITEMS = [
  "Hudkliniker",
  "Städföretag",
  "Djuromsorg",
  "Kliniker och terapeuter",
  "Elektriker och eljour",
  "Lokal SEO",
  "Synlighet i ChatGPT och Gemini",
];

export default function BranchBand() {
  return (
    <div className="band" aria-label="Branscher jag jobbar med">
      <div className="track">
        {ITEMS.map((item) => (
          <span key={item}>
            {item} <i aria-hidden="true" />
          </span>
        ))}
        {ITEMS.map((item) => (
          <span key={`dup-${item}`} aria-hidden="true">
            {item} <i />
          </span>
        ))}
      </div>
    </div>
  );
}
