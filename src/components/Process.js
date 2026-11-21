export default function Process() {
  return (
    <section className="sec" id="process">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2 className="h2">
            Så går det <em>till.</em>
          </h2>
          <p className="side">
            Tre steg, inga överraskningar. Du vet alltid vad nästa steg kostar
            innan vi tar det.
          </p>
        </div>
        <div className="steps">
          <span className="steps-line line-draw" aria-hidden="true" />
          <div className="step">
            <span className="step-n">1</span>
            <h3>Kartläggning</h3>
            <p>
              Vi pratar om era mål och var ni tappar tid och kunder i dag.
            </p>
            <span className="free">Gratis</span>
          </div>
          <div className="step">
            <span className="step-n">2</span>
            <h3>Bygge</h3>
            <p>
              Webbplats och AI-integrationer, placerade där de gör mest nytta.
            </p>
          </div>
          <div className="step">
            <span className="step-n">3</span>
            <h3>Synlighet och drift</h3>
            <p>
              Google-synlighet, inkommande förfrågningar och AI som tar hand om
              adminen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
