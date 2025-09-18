import { motion } from "framer-motion";
import PlaceholderPage from "../components/PlaceholderPage";

export default function News() {
  return (
    <motion.div initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.4, ease: "easeOut" }}>
      <PlaceholderPage
        title="Latest News"
        description="Stay updated with the latest developments in blockchain technology, Web3 innovations, and Radutverse announcements. Be the first to know about our progress."
      />
    </motion.div>
  );
}
