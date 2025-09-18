import { motion } from "framer-motion";
import PlaceholderPage from "../components/PlaceholderPage";

export default function Team() {
  return (
    <motion.div initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.4, ease: "easeOut" }}>
      <PlaceholderPage
        title="Our Team"
        description="Meet the brilliant minds behind Radutverse. Our team of blockchain experts, developers, and innovators are dedicated to building the future of decentralized finance."
      />
    </motion.div>
  );
}
