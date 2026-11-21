import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import BranchBand from "@/components/BranchBand";
import Branscher from "@/components/Branscher";
import AiSection from "@/components/AiSection";
import Tjanster from "@/components/Tjanster";
import Produkter from "@/components/Produkter";
import OmMig from "@/components/OmMig";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="site">
      <Nav />
      <main id="top">
        <Hero />
        <BranchBand />
        <Branscher />
        <AiSection />
        <Tjanster />
        <Produkter />
        <OmMig />
        <Process />
        <Faq />
        <Kontakt />
      </main>
      <Footer />
    </div>
  );
}
