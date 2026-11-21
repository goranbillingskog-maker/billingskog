export default function Faq() {
  return (
    <section className="sec" id="fragor">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2 className="h2">
            Vanliga <em>frågor.</em>
          </h2>
        </div>
        <div className="faq">
          <details open>
            <summary>
              Vad kostar det?
              <span className="plus" aria-hidden="true" />
            </summary>
            <p>
              Kartläggningen är gratis. Därefter jobbar jag med fasta priser per
              projekt eller per månad, beroende på hur mycket som ska göras.
            </p>
          </details>
          <details>
            <summary>
              Hur vet vi var AI kan hjälpa oss?
              <span className="plus" aria-hidden="true" />
            </summary>
            <p>
              Det tar vi reda på tillsammans. Oftast handlar det om manuella
              steg som offertmejl, möten och påminnelser.
            </p>
          </details>
          <details>
            <summary>
              Måste vi byta bokningssystem?
              <span className="plus" aria-hidden="true" />
            </summary>
            <p>
              Nästan aldrig. AI kan kopplas till era befintliga system via API.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
