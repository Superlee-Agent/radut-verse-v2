import Navigation from "../components/Navigation";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Team from "../components/Team";
import BlockchainFeatures from "../components/BlockchainFeatures";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

import BackToTop from "../components/BackToTop";

export default function Index() {
  return (
    <div id="top" className="min-h-screen bg-radut-black">
      <Navigation />
      <Hero />
      <div id="about">
        <Features />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="news">
        <BlockchainFeatures />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
}
