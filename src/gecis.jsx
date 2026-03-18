import { motion } from "framer-motion";

const gecis = (Bilesen) => {
  return function GecisBileseni() {
    return (
      <motion.div
        className="relative"
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Bilesen />

        <motion.div
          className="kayma-giris pointer-events-none"
          variants={{
            initial: { scaleY: 0 },
            animate: { scaleY: 0 },
            exit: { scaleY: 1 },
          }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.div
          className="kayma-cikis pointer-events-none"
          variants={{
            initial: { scaleY: 1 },
            animate: { scaleY: 0 },
            exit: { scaleY: 0 },
          }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    );
  };
};

export default gecis;
