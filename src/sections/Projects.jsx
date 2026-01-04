import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { damping: 20, stiffness: 150 });
  const springY = useSpring(y, { damping: 20, stiffness: 150 });

  const handleMouseMove = (e) => {
    // Reduced offset to 20px to match the smaller window size
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  const [preview, setPreview] = useState(null);

  return (
    <section
      id="projects"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-[#613bcf]/40 to-transparent mt-12 h-[1px] w-full" />
      
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}

      <AnimatePresence>
        {preview && (
          <motion.img
            key={preview}
            src={preview}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed top-0 left-0 z-50 pointer-events-none rounded-lg bg-neutral-900/50 backdrop-blur-sm
              
              /* NEW SMALLER SIZING */
              w-auto h-auto 
              max-w-[180px] md:max-w-[320px] 
              max-h-[45vh] 
              object-contain

              /* GLOWING BORDER */
              border-[1.5px] border-[#613bcf]/60 
              shadow-[0_0_20px_rgba(97,59,207,0.5)] 
              "
            style={{ 
              x: springX, 
              y: springY 
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;