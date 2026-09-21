import "./globals.css";

export const metadata = {
  title: "Billingskog — Webb & AI för lokala företag i Stockholm",
  description: "Fler kunder hittar er lokalt. Mindre tid går åt till administration. Jag bygger moderna sajter och hjälper er att få AI att göra jobbet i vardagen.",
  metadataBase: new URL("https://billingskog.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Billingskog — Webb & AI för lokala företag",
    description: "Jag hjälper småföretag i Stockholm att synas lokalt och automatisera admin med smart AI-stöd.",
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
    "name": "Billingskog",
    "image": "https://billingskog.com/hero_illustration.jpg",
    "telephone": "0760694010",
    "email": "goran@billingskog.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Stockholm",
      "addressCountry": "SE"
    },
    "url": "https://billingskog.com",
    "description": "Hjälper lokala företag i Stockholm med webbdesign, lokal SEO och AI-integrationer i vardagen."
  };

  return (
    <html lang="sv">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

