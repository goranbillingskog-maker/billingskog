"use client";

import { useState, useSyncExternalStore } from "react";

const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "[WEB3FORMS_ACCESS_KEY]";

const subscribe = () => () => {};

function getInitialSubmitted() {
  const params = new URLSearchParams(window.location.search);
  return params.get("tack") === "1" || params.get("success") === "true";
}

function getRedirectUrl() {
  return `${window.location.origin}/?tack=1#kontakt`;
}

export default function Kontakt() {
  const urlSubmitted = useSyncExternalStore(
    subscribe,
    getInitialSubmitted,
    () => false
  );
  const redirectUrl = useSyncExternalStore(
    subscribe,
    getRedirectUrl,
    () => "https://billingskog.com/?tack=1#kontakt"
  );
  const [dismissed, setDismissed] = useState(false);

  const submitted = urlSubmitted && !dismissed;

  return (
    <section className="sec" id="kontakt">
      <div className="wrap">
        <div className="contact">
          <span className="contact-glow" aria-hidden="true" />
          <div>
            <h2 className="h2">Boka ett gratis samtal.</h2>
            <p className="side" style={{ marginTop: "24px" }}>
              Berätta kort om ert företag, så återkommer jag inom 24 timmar.
            </p>
            <div className="info">
              <span>Billingskog, Stockholm</span>
            </div>
          </div>

          {submitted ? (
            <div className="form-thanks" role="status" aria-live="polite">
              <h3>Tack för din förfrågan.</h3>
              <p>
                Ditt meddelande har skickats. Jag återkommer till dig inom 24
                timmar.
              </p>
              <div>
                <a
                  className="btn btn-light"
                  href="#kontakt"
                  onClick={(e) => {
                    e.preventDefault();
                    setDismissed(true);
                    window.history.replaceState({}, "", "/#kontakt");
                  }}
                >
                  Skicka ett nytt meddelande
                </a>
              </div>
            </div>
          ) : (
            <form
              className="f"
              action="https://api.web3forms.com/submit"
              method="POST"
              aria-label="Kontaktformulär"
            >
              <input
                type="hidden"
                name="access_key"
                value={WEB3FORMS_ACCESS_KEY}
              />
              <input
                type="hidden"
                name="subject"
                value="Ny förfrågan från billingskog.com"
              />
              <input type="hidden" name="from_name" value="Billingskog.com" />
              <input type="hidden" name="redirect" value={redirectUrl} />
              <input
                type="checkbox"
                name="botcheck"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <label className="fld">
                Namn
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                />
              </label>
              <label className="fld">
                E-post
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                />
              </label>
              <label className="fld">
                Företag
                <input
                  type="text"
                  name="company"
                  autoComplete="organization"
                />
              </label>
              <label className="fld">
                Bransch
                <select name="industry">
                  <option value="Hudklinik">Hudklinik</option>
                  <option value="Städföretag">Städföretag</option>
                  <option value="Djuromsorg">Djuromsorg</option>
                  <option value="Klinik och terapeut">
                    Klinik och terapeut
                  </option>
                  <option value="Elektriker och eljour">
                    Elektriker och eljour
                  </option>
                  <option value="Annat lokalt företag">
                    Annat lokalt företag
                  </option>
                </select>
              </label>
              <label className="fld full">
                Meddelande
                <textarea name="message" required />
              </label>
              <div className="send">
                <span>Svar inom 24 timmar.</span>
                <button className="btn btn-light" type="submit">
                  Skicka förfrågan
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
