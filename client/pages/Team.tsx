import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TeamSection from "../components/Team";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-radut-black">
      <Navigation />
      <motion.main
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <TeamSection />
      </motion.main>
      <Footer />
    </div>
  );
}
