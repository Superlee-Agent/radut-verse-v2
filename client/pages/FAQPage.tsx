import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-radut-black">
      <Navigation />
      <motion.main
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <FAQ />
      </motion.main>
      <Footer />
    </div>
  );
}
