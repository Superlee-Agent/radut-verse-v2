import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Features from "../components/Features";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-radut-black">
      <Navigation />
      <motion.main
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Features />
      </motion.main>
      <Footer />
    </div>
  );
}
