export default function Produkter() {
  return (
    <section className="sec" id="produkter">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2 className="h2">
            Jag bygger mina egna <em>produkter</em> också.
          </h2>
          <p className="side">
            Samma verktyg och metoder som jag använder för kunder, testade
            skarpt på egna sajter först.
          </p>
        </div>
        <div className="prod">
          <article className="panel citara">
            <span className="spinner" aria-hidden="true" />
            <div className="query" aria-hidden="true">
              <div className="q">
                Vilken hudklinik i Stockholm rekommenderar du?
              </div>
              <div className="q">
                <b>Citara</b> registrerade att ditt varumärke nämndes i ChatGPT,
                Claude och Gemini i dag.
              </div>
            </div>
            <h3>Citara.ai</h3>
            <p>
              Mäter när AI-modeller som ChatGPT, Claude och Gemini nämner och
              rekommenderar din produkt. Citatbevakning för AI-eran.
            </p>
            <a
              className="more"
              href="https://citara.ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              Besök citara.ai
            </a>
          </article>
          <article className="panel hy">
            <div className="big-num">
              500+<small>verifierade hudkliniker</small>
            </div>
            <h3>Bättre Hy</h3>
            <p>
              En katalog över Sveriges hudkliniker, och mitt eget case för vad
              lokal SEO kan göra.
            </p>
            <a
              className="more"
              href="https://battrehy.se"
              target="_blank"
              rel="noopener noreferrer"
            >
              Besök battrehy.se
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
