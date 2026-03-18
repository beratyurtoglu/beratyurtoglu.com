import { motion } from "framer-motion";

export default function SayfaGecis({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="min-h-screen bg-red-500"
    >
      {children}
    </motion.div>
  );
}
