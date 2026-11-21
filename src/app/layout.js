import { Geist, Instrument_Serif } from "next/font/google";
import "./redesign.css";

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-geist",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata = {
  title: "Billingskog — Webb & AI för lokala företag i Stockholm",
  description:
    "Fler kunder hittar er lokalt. Mindre tid går åt till administration. Jag bygger moderna sajter och hjälper er att få AI att göra jobbet i vardagen.",
  metadataBase: new URL("https://billingskog.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Billingskog — Webb & AI för lokala företag",
    description:
      "Jag hjälper småföretag i Stockholm att synas lokalt och automatisera admin med smart AI-stöd.",
    url: "https://billingskog.com",
    siteName: "Billingskog",
    locale: "sv_SE",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Billingskog",
    image: "https://billingskog.com/images/goran-portratt.webp",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Stockholm",
      addressCountry: "SE",
    },
    url: "https://billingskog.com",
    description:
      "Hjälper lokala företag i Stockholm med webbdesign, lokal SEO och AI-integrationer i vardagen.",
  };

  return (
    <html
      lang="sv"
      className={`${geist.variable} ${instrumentSerif.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
