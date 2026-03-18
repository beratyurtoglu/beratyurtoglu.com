import { motion } from "framer-motion";

const Gecis = (OgComponent) => {
  return () => (
    <>
      <OgComponent />

      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-black z-50 flex items-center justify-center"
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src="/Logo.png" alt="Logo" className="w-24 h-24 object-contain" />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-black z-50 flex items-center justify-center"
        initial={{ y: "100%" }}
        animate={{ y: "100%" }}
        exit={{ y: "0%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src="/Logo.png"
          alt="Logo"
          className="w-24 h-24 object-contain opacity-80"
        />
      </motion.div>
    </>
  );
};

export default Gecis;
