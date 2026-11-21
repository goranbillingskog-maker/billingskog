export default function OmMig() {
  return (
    <section className="sec" id="om">
      <div className="wrap about">
        <div className="portrait photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/goran-portratt.webp"
            alt="Svartvitt porträtt av Goran Billingskog i keps och glasögon"
            width={1100}
            height={1100}
            loading="lazy"
          />
        </div>
        <div className="reveal">
          <p className="quote">
            Avancerad teknik ska vara enkel för den som driver ett lokalt
            företag.
          </p>
          <p className="body">
            Jag heter Goran Billingskog och har jobbat med design och art
            direction i över 25 år. Numera bygger jag webb och AI-lösningar för
            småföretag som inte har tid att sätta sig in i tekniken.
          </p>
          <p className="body">
            De flesta grundare kan inte designa. De flesta designers kan inte
            bygga. De flesta som bygger kan inte marknadsföra. Jag gör alla tre.
          </p>
          <p className="sig">
            <b>Goran Billingskog</b>
            <br />
            Grundare, Stockholm
          </p>
        </div>
      </div>
    </section>
  );
}
