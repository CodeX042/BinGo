import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  // Glitch effect
  const glitchVariants = {
    animate: {
      textShadow: [
        "0px 0px 5px #ff0000",
        "0px 0px 5px #00ff00",
        "0px 0px 5px #0000ff",
        "0px 0px 0px #000000",
      ],
      transition: {
        duration: 0.1,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  // Slide-out and glitch animation for h2 and p
  const slideOutVariants = {
    initial: { opacity: 0, y: 0 },
    animateH2: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, type: "spring", bounce: 0.5 },
    },
    animateP: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, type: "spring", bounce: 0.5, delay: 0.2 },
    },
    exitUp: {
      y: "-100%",
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exitDown: {
      y: "100%",
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence>
      <div className="flex flex-col items-center justify-center w-[80%] max-w-xl gap-4 md:gap-8">
        <motion.h2
          className="text-4xl md:text-[70px] font-bold tracking-widest text-center"
          initial="initial"
          animate="animateH2"
          exit="exitUp"
          variants={slideOutVariants}
          whileHover="animate"
          whileHover="glitch"
          style={{ overflow: "hidden" }}
        >
          <span className="text-white">ZERO</span>{" "}
          <span className="text-[#C1E64E]">WASTE,</span>{" "}
          <span className="text-white">MORE</span>{" "}
          <span className="text-[#C1E64E]">REWARDS</span>
        </motion.h2>
        <motion.div
          className="w-16 md:w-[200px] h-[3px] bg-[#C1E64E]"
          initial={{ width: "0px" }}
          animate={{
            width: "100%",
            transition: { duration: 1.2, ease: "easeOut" },
          }}
        ></motion.div>
        <motion.p
          className="text-lg md:text-[36px] text-center"
          initial="initial"
          animate="animateP"
          exit="exitDown"
          variants={slideOutVariants}
          whileHover="glitch"
          style={{ overflow: "hidden" }}
        >
          Turn Trash into Cash!
        </motion.p>
      </div>
    </AnimatePresence>
  );
};

export default HeroSection;
