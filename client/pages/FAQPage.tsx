import { motion } from "framer-motion";
import PlaceholderPage from "../components/PlaceholderPage";

export default function FAQPage() {
  return (
    <motion.div initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.4, ease: "easeOut" }}>
      <PlaceholderPage
        title="Frequently Asked Questions"
        description="Find answers to common questions about Radutverse, blockchain technology, and Web3 finance. Get the clarity you need to start your decentralized journey."
      />
    </motion.div>
  );
}
