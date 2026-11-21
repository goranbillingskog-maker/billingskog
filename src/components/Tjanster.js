export default function Tjanster() {
  return (
    <section className="sec" id="tjanster">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2 className="h2">
            Tre sätt att <em>börja.</em>
          </h2>
          <p className="side">
            Fasta priser per projekt eller per månad, beroende på omfattning.
            Kartläggningen är alltid gratis.
          </p>
        </div>
        <div className="svc">
          <article className="card">
            <h3>Ny eller uppfräschad webbplats</h3>
            <p>
              En snabb, mobilvänlig sajt som är byggd för att hittas lokalt.
            </p>
            <ul>
              <li>Mobilanpassad design</li>
              <li>Lokal SEO från start</li>
              <li>Google-företagsprofil på plats</li>
              <li>Synlig i AI-sök</li>
            </ul>
            <div className="foot">
              <span>Fast projektpris</span>
              <a className="btn btn-ghost" href="#kontakt">
                Fråga om pris
              </a>
            </div>
          </article>
          <article className="card dark">
            <span className="card-orb" aria-hidden="true" />
            <span className="badge">Mest vald</span>
            <h3>AI i verksamheten</h3>
            <p>
              Vi kartlägger var tiden försvinner, och sätter AI där den gör mest
              nytta.
            </p>
            <ul>
              <li>Bokning och offert</li>
              <li>Kundsupport och uppföljning</li>
              <li>Kopplas till era befintliga system</li>
              <li>Du godkänner alltid innan något skickas</li>
            </ul>
            <div className="foot">
              <span>Fast pris per månad</span>
              <a className="btn btn-ink" href="#kontakt">
                Boka kartläggning
              </a>
            </div>
          </article>
          <article className="card">
            <h3>Webb, AI och marknadsföring</h3>
            <p>
              Hela paketet med en partner. Från sajt till synlighet till
              automation.
            </p>
            <ul>
              <li>Allt i de två andra paketen</li>
              <li>Löpande SEO och GEO</li>
              <li>Månadsrapport du förstår</li>
              <li>En kontaktperson</li>
            </ul>
            <div className="foot">
              <span>Fast pris per månad</span>
              <a className="btn btn-ghost" href="#kontakt">
                Fråga om pris
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
