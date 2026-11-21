export default function Hero() {
  return (
    <section className="hero">
      <div
        className="sculpt-scroll"
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      >
        <div className="sculpt" aria-hidden="true">
          <div className="layer">
            <div className="ring" />
            <div className="ring" />
          </div>
          <div className="layer soft">
            <div className="b b1" />
            <div className="b b2" />
            <div className="b b3" />
            <div className="b b4" />
          </div>
          <div className="layer dots">
            <div className="b b1" />
            <div className="b b2" />
            <div className="b b3" />
            <div className="b b4" />
          </div>
          <div className="layer fine">
            <div className="b b1" />
            <div className="b b3" />
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="hero-copy">
          <p className="kicker">
            Webb, synlighet och AI för lokala företag i{" "}
            <span className="ticker">
              <span className="ticker-in">
                <span>Stockholm</span>
                <span>Göteborg</span>
                <span>Malmö</span>
                <span>Uppsala</span>
                <span>Västerås</span>
                <span>Stockholm</span>
              </span>
            </span>
          </p>
          <h1 className="display" style={{ fontWeight: 400 }}>
            <span className="ln">
              <span>Syns bättre.</span>
            </span>
            <span className="ln">
              <span>
                <em>Fler bokningar.</em>
              </span>
            </span>
          </h1>
          <p className="lede">
            Jag hjälper svenska företag att hittas lokalt på Google och i
            AI-sök, och automatiserar bokningar, offerter och uppföljning så att
            ni kan fokusera på kunderna.
          </p>
          <div className="ctas">
            <a className="btn btn-ink" href="#kontakt">
              Boka ett gratis samtal
            </a>
            <a className="btn btn-ghost" href="#process">
              Se hur det går till
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
