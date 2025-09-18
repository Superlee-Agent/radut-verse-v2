import { motion } from "framer-motion";
import PlaceholderPage from "../components/PlaceholderPage";

export default function ComingSoon() {
  return (
    <motion.div initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.4, ease: "easeOut" }}>
      <PlaceholderPage title="Coming Soon" description="This feature is on the way. Stay tuned!" />
    </motion.div>
  );
}
