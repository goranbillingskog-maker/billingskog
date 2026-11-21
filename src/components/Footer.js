export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <p style={{ margin: 0, maxWidth: "34ch", lineHeight: 1.6 }}>
              Webb, synlighet och AI för lokala företag i Sverige.
            </p>
          </div>
          <div>
            <h4>Sidan</h4>
            <ul>
              <li>
                <a href="#branscher">Branscher</a>
              </li>
              <li>
                <a href="#tjanster">Tjänster</a>
              </li>
              <li>
                <a href="#produkter">Egna produkter</a>
              </li>
              <li>
                <a href="#om">Om mig</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Kontakt</h4>
            <ul>
              <li>
                <a href="#kontakt">Kontakta mig</a>
              </li>
              <li>Stockholm</li>
            </ul>
          </div>
          <div>
            <h4>Följ</h4>
            <ul>
              <li>
                <a
                  href="https://linkedin.com/in/gbillingskog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/gbillingskog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <span>© 2026 Billingskog. Alla rättigheter reserverade.</span>
          <span>Stockholm, Sverige</span>
        </div>
      </div>
    </footer>
  );
}
