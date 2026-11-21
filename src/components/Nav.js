export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a className="mark" href="#top">
          <span className="mark-dot" aria-hidden="true" />
          Billingskog
        </a>
        <nav
          className="links"
          aria-label="Huvudmeny"
          style={{ fontWeight: 700 }}
        >
          <a href="#branscher">Branscher</a>
          <a href="#ai">AI i vardagen</a>
          <a href="#tjanster">Tjänster</a>
          <a href="#produkter">Egna produkter</a>
          <a href="#om">Om mig</a>
        </nav>
        <a className="btn btn-ink" href="#kontakt">
          Boka samtal
        </a>
      </div>
    </header>
  );
}
