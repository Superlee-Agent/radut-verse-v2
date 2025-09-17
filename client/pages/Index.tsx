import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Team from "../components/Team";
import BlockchainFeatures from "../components/BlockchainFeatures";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-radut-black">
      <Navigation />
      <Hero />
      <Features />
      <Team />
      <BlockchainFeatures />
      <FAQ />
      <Footer />
    </div>
  );
}
