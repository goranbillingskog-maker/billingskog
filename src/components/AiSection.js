export default function AiSection() {
  return (
    <section className="sec" id="ai">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2 className="h2">
            Öppet dygnet runt, utan att du jobbar <em>mer.</em>
          </h2>
          <p className="side">
            Praktisk automation som kopplas på det ni redan använder. Inget nytt
            system att lära sig.
          </p>
        </div>
        <div className="ai">
          <div className="ai-cell">
            <svg
              className="glyph"
              viewBox="0 0 44 44"
              fill="none"
              stroke="#5B5BFF"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <circle cx="22" cy="22" r="17" />
              <path d="M22 12v10l7 5" />
            </svg>
            <div>
              <h3>Svar dygnet runt</h3>
              <p>
                Offert- och bokningsförfrågningar besvaras direkt, även klockan
                23 en söndag.
              </p>
            </div>
          </div>
          <div className="ai-cell">
            <svg
              className="glyph"
              viewBox="0 0 44 44"
              fill="none"
              stroke="#C13CFF"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M8 22a14 14 0 0 1 24-9.9M36 22a14 14 0 0 1-24 9.9" />
              <path d="M32 6v6.5h-6.5M12 38v-6.5h6.5" />
            </svg>
            <div>
              <h3>Automatisk uppföljning</h3>
              <p>
                Påminnelser och uppföljningar går ut av sig själva, så att ingen
                kund tappas bort.
              </p>
            </div>
          </div>
          <div className="ai-cell">
            <svg
              className="glyph"
              viewBox="0 0 44 44"
              fill="none"
              stroke="#FF4D6D"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <rect x="10" y="6" width="24" height="32" rx="4" />
              <path d="M16 15h12M16 21h12M16 27h7" />
            </svg>
            <div>
              <h3>Snabbare offerter</h3>
              <p>AI skriver utkastet. Du granskar, justerar och skickar.</p>
            </div>
          </div>
          <div className="ai-cell">
            <svg
              className="glyph"
              viewBox="0 0 44 44"
              fill="none"
              stroke="#FF9A3C"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M8 12h28M8 22h20M8 32h12" />
              <circle cx="33" cy="30" r="5" />
            </svg>
            <div>
              <h3>Mindre admin</h3>
              <p>
                Sammanfattningar av möten och mejl, så att du slipper sitta kvar
                efter jobbet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
