import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Developer", "Photo grapher", "Visual Editor", "Designer"];

  const variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    /* pl-0 ensures the text is tight to the left edge. 
       overflow-x-hidden prevents accidental horizontal scroll bars.
    */
    <div className="relative z-10 flex flex-col justify-center min-h-screen text-left pl-0 overflow-x-hidden">
      
      {/* "Hi, I am" in purple with Cursive "Paawan" */}
      <motion.h1
        className="text-xl md:text-2xl font-medium text-purple-500 mb-2 flex items-center gap-2"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
      >
        Hi, I am <span className="font-allura text-white text-4xl md:text-6xl">Paawan</span>
      </motion.h1>

      {/* FIX: The max-width below ensures the text stops before the astronaut.
          md:max-w-[55%] is the safe zone for desktop screens to avoid the graphic.
      */}
      <div className="flex flex-col leading-[1.1] md:leading-[0.85] w-full max-w-[90%] md:max-w-[55%]">
        
        <motion.p
          className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter text-neutral-500 whitespace-nowrap"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          I AM A
        </motion.p>

        <motion.div
          className="py-1 md:py-2"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {/* Fluid font sizing (text-4xl to text-9xl) helps keep words 
              from getting too wide on smaller desktop monitors. 
          */}
          <FlipWords
            words={words}
            className="text-4xl sm:text-6xl md:text-9xl font-black text-white uppercase tracking-tighter"
          />
        </motion.div>

        <motion.p
          className="text-2xl sm:text-2xl md:text-3xl font-black uppercase tracking-tighter text-neutral-500 whitespace-nowrap"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          "Trying"
        </motion.p>
      </div>

      <motion.div
        className="mt-6 md:mt-8 max-w-sm md:max-w-md border-l-2 border-purple-500/50 pl-4"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <p className="text-neutral-400 text-sm md:text-lg font-normal leading-relaxed">
          Also a Software Developer specialized in building production-ready
          applications with a focus on UI/UX and system efficiency.
        </p>
      </motion.div>
    </div>
  );
};

export default HeroText;