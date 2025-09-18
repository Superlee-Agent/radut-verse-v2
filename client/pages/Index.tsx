import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function Index() {
  return (
    <div id="top" className="min-h-screen bg-radut-black">
      <Navigation />
      <Hero />
      <Footer />
      <BackToTop />
    </div>
  );
}
