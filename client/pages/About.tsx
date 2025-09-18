import PlaceholderPage from "../components/PlaceholderPage";

import { motion } from "framer-motion";
import PlaceholderPage from "../components/PlaceholderPage";

export default function About() {
  return (
    <motion.div initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.4, ease: "easeOut" }}>
      <PlaceholderPage
        title="About Radutverse"
        description="Learn more about our mission to revolutionize Web3 finance through secure, scalable, and decentralized solutions. Discover the future of financial freedom."
      />
    </motion.div>
  );
}
