import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container">
          <div className="logo">
            Billingskog<span className="logo-dot"></span>
          </div>
          <div className="nav-links">
            <a href="#branscher" className="nav-link">Branscher</a>
            <a href="#ai-vardag" className="nav-link">AI i vardagen</a>
            <a href="#tjanster" className="nav-link">Tjänster</a>
            <a href="#bevis" className="nav-link">Egna produkter</a>
            <a href="#om-mig" className="nav-link">Om mig</a>
            <a href="#kontakt" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>Boka samtal</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="section container hero">
        <div className="hero-content">
          <span className="eyebrow">Webb & AI för lokala företag</span>
          <h1 className="hero-title">Syns bättre. Fler bokningar.</h1>
          <p className="hero-text">
            Jag hjälper svenska företag att bli hittade lokalt och automatiserar rutinerna som äter er tid — bokningar, offerter och uppföljning. Smart teknik när den hjälper, aldrig för sakens skull.
          </p>
          <div className="hero-actions">
            <a href="#kontakt" className="btn btn-primary">Boka ett kostnadsfritt samtal</a>
            <a href="#branscher" className="btn btn-secondary">Se hur det fungerar</a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <Image
            src="/hero_illustration.jpg"
            alt="Illustrationsbild som visar ett lokalt företag integrerat med AI-processer, kalender och klocka"
            width={600}
            height={450}
            className="hero-image"
            priority
          />
        </div>
      </header>

      {/* Sektion 2 — Branscher */}
      <section id="branscher" className="section section-bg-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Målgrupper</span>
            <h2 className="section-title">Jag jobbar med företag som ert</h2>
            <p>Varje bransch har unika utmaningar. Här är hur vi anpassar webb och AI efter era behov.</p>
          </div>
          
          <div className="grid-4">
            <div className="card">
              <div className="card-icon">1</div>
              <h3 className="card-title">
                <a href="https://battrehy.se" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>
                  Hudvårdskliniker <span style={{ fontSize: '0.85em' }}>↗</span>
                </a>
              </h3>
              <p className="card-text">
                Full kalender börjar med att rätt kunder hittar er och kan boka på sekunder. Jag bygger sajter som fyller tiderna och AI som svarar på förfrågningar direkt — även efter stängning.
              </p>
              <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                <a href="https://battrehy.se" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  Besök battrehy.se &rarr;
                </a>
              </div>
            </div>
            
            <div className="card">
              <div className="card-icon">2</div>
              <h3 className="card-title">
                <a href="https://stadtorget.se" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>
                  Städföretag <span style={{ fontSize: '0.85em' }}>↗</span>
                </a>
              </h3>
              <p className="card-text">
                Fler RUT-kunder utan mer tid vid datorn. En sajt som drar in förfrågningar och AI som skickar offerter och bokar in jobb åt er.
              </p>
              <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                <a href="https://stadtorget.se" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  Besök stadtorget.se &rarr;
                </a>
              </div>
            </div>
            
            <div className="card">
              <div className="card-icon">3</div>
              <h3 className="card-title">Laddstolpar & Solceller</h3>
              <p className="card-text">
                Marknaden växer snabbt — den som syns först vinner affären. Jag ser till att ni hamnar överst lokalt och att inga förfrågningar blir liggande.
              </p>
              <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Lokal SEO & Leads
                </span>
              </div>
            </div>

            <div className="card">
              <div className="card-icon">4</div>
              <h3 className="card-title">
                <a href="https://nakima.se/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>
                  Kliniker & Behandlare <span style={{ fontSize: '0.85em' }}>↗</span>
                </a>
              </h3>
              <p className="card-text">
                <strong>För patienter:</strong> Personer i Sverige som vill hitta och jämföra naprapat, kiropraktor, massage eller fysioterapi nära sig.<br /><br />
                <strong>För kliniker:</strong> Behandlare och kliniker som vill nå nya patienter via en sökbar, lokal profil.
              </p>
              <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                <a href="https://nakima.se/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  Besök nakima.se &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sektion 3 — AI i vardagen */}
      <section id="ai-vardag" className="section">
        <div className="container grid-2">
          <div>
            <span className="eyebrow">AI som faktiskt gör nytta — inte hype</span>
            <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
              Praktisk automatisering för småföretag
            </h2>
            <p style={{ marginBottom: '32px' }}>
              De flesta småföretag vet att AI är här men inte var man börjar. Jag översätter det till konkreta saker som sparar er tid från dag ett. Vi börjar med det som ger er mest tid tillbaka först.
            </p>
            <div className="features-list">
              <div className="feature-item">
                <h4 className="feature-title">Svara dygnet runt</h4>
                <p className="feature-text">AI som tar emot och besvarar offert- och bokningsförfrågningar på minuter, inte dagar.</p>
              </div>
              <div className="feature-item">
                <h4 className="feature-title">Automatisk uppföljning</h4>
                <p className="feature-text">Inga kunder som glöms bort. AI påminner, följer upp och bokar in.</p>
              </div>
              <div className="feature-item">
                <h4 className="feature-title">Snabbare offerter</h4>
                <p className="feature-text">Beskriv jobbet kortfattat, få ett utkast på sekunder som ni bara justerar och skickar iväg.</p>
              </div>
              <div className="feature-item">
                <h4 className="feature-title">Mindre admin</h4>
                <p className="feature-text">Sammanfattningar av möten, e-post och återkommande rutinuppgifter som sköter sig själva.</p>
              </div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <Image
              src="/ai_features.jpg"
              alt="Minimalistisk illustration av tidseffektivitet, kalendrar, meddelandebubblor och kugghjul som styrs med AI"
              width={500}
              height={500}
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* Sektion 4 — Så hjälper jag */}
      <section id="tjanster" className="section section-bg-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Tjänster & Paket</span>
            <h2 className="section-title">Allt på ett ställe — från strategi till färdig lösning</h2>
            <p>Hitta det samarbete som passar din nuvarande fas bäst.</p>
          </div>
          
          <div className="grid-3">
            <div className="card">
              <h3 className="card-title">Ny eller uppfräschad webb</h3>
              <p className="card-text" style={{ marginBottom: '24px' }}>
                En modern, mobilanpassad sajt byggd för att bli hittad lokalt och förvandla besökare till kunder. Inkluderar lokal SEO och Google-företagsprofil.
              </p>
              <a href="#kontakt" className="btn btn-secondary" style={{ width: '100%' }}>Läs mer</a>
            </div>
            
            <div className="card" style={{ border: '2px solid var(--primary)', transform: 'scale(1.02)' }}>
              <span className="eyebrow" style={{ fontSize: '0.8rem', marginBottom: '8px' }}>Populärast</span>
              <h3 className="card-title">AI i verksamheten</h3>
              <p className="card-text" style={{ marginBottom: '24px' }}>
                Vi kartlägger var ni lägger mest tid och sätter in AI där det gör störst skillnad — bokning, offerter, kundtjänst eller uppföljning.
              </p>
              <a href="#kontakt" className="btn btn-primary" style={{ width: '100%' }}>Läs mer</a>
            </div>
            
            <div className="card">
              <h3 className="card-title">Webb + AI + Marknadsföring</h3>
              <p className="card-text" style={{ marginBottom: '24px' }}>
                Hela paketet. Jag bygger, sätter upp AI-stöd och ser till att rätt kunder hittar er på Google. En partner, ett ansvar.
              </p>
              <a href="#kontakt" className="btn btn-secondary" style={{ width: '100%' }}>Läs mer</a>
            </div>
          </div>
        </div>
      </section>

      {/* Sektion 5 — Bevis */}
      <section id="bevis" className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Förmåga i praktiken</span>
            <h2 className="section-title">Jag bygger egna AI-produkter — inte bara pratar om det</h2>
            <p>Det jag rekommenderar er har jag redan gjort själv. Vid sidan av kunduppdrag utvecklar och driver jag egna AI-verktyg.</p>
          </div>
          
          <div className="proofs-grid">
            <div className="proof-card">
              <div>
                <h3 className="card-title" style={{ color: 'var(--primary)', marginBottom: '16px' }}>Citara.ai</h3>
                <p>
                  En SaaS-plattform som spårar när AI-modeller (så som ChatGPT, Claude och Gemini) nämner och rekommenderar produkter och tjänster på nätet. Ett bevis på djup teknisk förståelse för framtidens AI-sök.
                </p>
              </div>
              <div className="proof-meta">
                <span>Egenutvecklad SaaS</span>
                <a href="https://citara.ai" target="_blank" rel="noopener noreferrer" className="proof-link">Besök citara.ai &rarr;</a>
              </div>
            </div>
            
            <div className="proof-card">
              <div>
                <h3 className="card-title" style={{ color: 'var(--primary)', marginBottom: '16px' }}>Bättre Hy (battrehy.se)</h3>
                <p>
                  En intelligent webbkatalog med över 500 verifierade hudvårdssalonger i Sverige. Plattformen kombinerar automatiserad datainsamling med avancerad lokal SEO-prestanda.
                </p>
              </div>
              <div className="proof-meta">
                <span>Söktjänst & SEO-case</span>
                <a href="https://battrehy.se" target="_blank" rel="noopener noreferrer" className="proof-link">Besök battrehy.se &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sektion 6 — Om mig */}
      <section id="om-mig" className="section section-bg-alt">
        <div className="container grid-2">
          <div>
            <span className="eyebrow">Om Billingskog</span>
            <h2 className="section-title">Design, bygge och marknadsföring — i samma person</h2>
            <p style={{ marginBottom: '20px' }}>
              De flesta som bygger hemsidor kan inte marknadsföring. De flesta som kan marknadsföring kan inte bygga. Jag gör alla tre — och lägger till AI. Det betyder att ni får en partner som ser helheten: hur sajten ser ut, hur den hittas, och hur AI kan avlasta er vardag.
            </p>
            <p>
              Med över 15 års erfarenhet inom design och art direction, fokuserar jag idag på att hjälpa lokala, icke-tekniska småföretag i Stockholm att ta nästa steg in i den digitala eran.
            </p>
          </div>
          <div style={{ padding: '40px', background: 'var(--card-bg)', borderRadius: 'var(--radius-md)', border: '1px solid var(--card-border)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>Goran Billingskog</h3>
            <p style={{ fontSize: '1rem', color: 'var(--accent)', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '24px' }}>
              Grundare & Webb-/AI-Konsult
            </p>
            <p style={{ fontSize: '1rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
              \"Målet är att göra avancerad teknik busenkel för lokala företagare så att de kan fokusera på det de är bäst på.\"
            </p>
          </div>
        </div>
      </section>

      {/* Sektion 7 — Så går det till */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Process</span>
            <h2 className="section-title">Enkelt att komma igång</h2>
            <p>Inga krångliga avtal eller långdragna processer.</p>
          </div>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3 className="step-title">Kartläggning</h3>
              <p>Vi pratar igenom era mål och var ni tappar tid och kunder idag. Helt kostnadsfritt.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <h3 className="step-title">Bygge</h3>
              <p>Jag bygger er sajt och sätter upp era AI-integrationer där de gör allra mest nytta direkt.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <h3 className="step-title">Marknadsföring & drift</h3>
              <p>Ni börjar synas på Google, förfrågningarna rullar in och AI sköter administrationen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Sektion */}
      <section className="section section-bg-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title">Vanliga frågor</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">Vad kostar det att komma igång?</h3>
              <p>Kartläggningen är alltid gratis. Därefter arbetar jag till fasta priser per projekt eller månad beroende på omfattning av webb och AI-integrationer.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Hur vet jag var AI gör nytta i mitt företag?</h3>
              <p>Det listar vi ut tillsammans! Ofta handlar det om att automatisera manuella steg som att svara på offert-mail, boka möten eller skicka påminnelser.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Måste jag byta ut mina befintliga bokningssystem?</h3>
              <p>Nej, i de allra flesta fall kan vi bygga smarta AI-bryggor som integrerar direkt med era nuvarande system via enkla API:er.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sektion 8 — Kontakt */}
      <section id="kontakt" className="section">
        <div className="container contact-container">
          <div className="contact-info">
            <div>
              <span className="eyebrow">Kontakt</span>
              <h2 className="section-title" style={{ fontSize: '3rem', lineHeight: '1.1' }}>Ta första steget — det kostar ingenting</h2>
              <p style={{ marginTop: '24px' }}>
                Har ni ett projekt i åtanke eller vill bara veta var ni ska börja med AI? Boka ett kostnadsfritt samtal så hör jag av mig inom 24 timmar.
              </p>
            </div>
            
            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-icon">📍</div>
                <div>
                  <strong>Företag:</strong> Billingskog<br />
                  Stockholm, Sverige
                </div>
              </div>
              
              <div className="contact-detail">
                <div className="contact-icon">📞</div>
                <div>
                  <strong>Telefon:</strong> <a href="tel:0760694010">0760694010</a>
                </div>
              </div>
              
              <div className="contact-detail">
                <div className="contact-icon">✉️</div>
                <div>
                  <strong>E-post:</strong> <a href="mailto:goran@billingskog.com">goran@billingskog.com</a>
                </div>
              </div>
            </div>
          </div>
          
          <form className="contact-form" action="#" method="POST">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Namn</label>
              <input type="text" id="name" name="name" className="form-input" placeholder="Ditt namn" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">E-post</label>
              <input type="email" id="email" name="email" className="form-input" placeholder="din.epost@foretag.se" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="company" className="form-label">Företag</label>
              <input type="text" id="company" name="company" className="form-input" placeholder="Företagsnamn" />
            </div>
            
            <div className="form-group">
              <label htmlFor="industry" className="form-label">Bransch</label>
              <select id="industry" name="industry" className="form-select">
                <option value="hudvard">Hudvårdsklinik</option>
                <option value="stad">Städföretag</option>
                <option value="solceller">Laddstolpar & Solceller</option>
                <option value="annat">Annat lokalt företag</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Meddelande</label>
              <textarea id="message" name="message" rows="4" className="form-textarea" placeholder="Berätta lite om vad du vill ha hjälp med..." required></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Skicka förfrågan</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">
                Billingskog<span className="logo-dot"></span>
              </div>
              <p className="footer-text">
                En lokal partner i Stockholm som gör avancerad webb och AI enkelt att förstå och använda för småföretagare.
              </p>
            </div>
            <div>
              <h4 className="footer-title">Genvägar</h4>
              <ul className="footer-links">
                <li><a href="#branscher">Branscher</a></li>
                <li><a href="#ai-vardag">AI i vardagen</a></li>
                <li><a href="#tjanster">Tjänster</a></li>
                <li><a href="#bevis">Egna AI-produkter</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-title">Kontakta</h4>
              <ul className="footer-links">
                <li>Telefon: 0760694010</li>
                <li>E-post: goran@billingskog.com</li>
                <li>Ort: Stockholm, Sverige</li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div>&copy; {new Date().getFullYear()} Billingskog. Alla rättigheter reserverade.</div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <a href="https://linkedin.com/in/gbillingskog" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/gbillingskog" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

