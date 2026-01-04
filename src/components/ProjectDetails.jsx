import { motion, AnimatePresence } from "framer-motion";
import { Particles } from "./Particles"; 

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  category,
  time, 
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeModal}
        className="absolute inset-0 bg-black/90 backdrop-blur-xl" 
      />

      <motion.div
        className="relative w-full max-w-6xl h-full md:h-[85vh] overflow-hidden flex flex-col md:flex-row bg-[#0a0a0a] border border-white/10 md:rounded-3xl shadow-2xl"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {/* LEFT SIDE: Visual Showcase with Particles */}
        <div className="relative w-full md:w-3/5 h-[400px] md:h-full bg-neutral-900 border-b md:border-b-0 md:border-r border-white/10 flex flex-col items-center justify-center p-8 md:p-12 overflow-hidden">
          
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#050505] to-[#111] z-0" />
          
          <Particles
            className="absolute inset-0 z-0"
            quantity={150}
            ease={80}
            color={"#ffffff"} 
            refresh
          />

          <img 
            src={image} 
            alt={title} 
            className="relative z-10 object-contain w-auto h-auto max-w-full max-h-[65%] md:max-h-[75%] pb-10
                       opacity-95 rounded-2xl 
                       border border-white/10 
                       shadow-[0_0_50px_-10px_rgba(255,255,255,0.1)]" 
          />
          
          {/* TECH STACK - SINGLE LINE, PURPLE */}
          <div 
            className="absolute z-20 flex items-center flex-wrap gap-x-5 gap-y-3 px-1
                       bottom-8 left-8 md:bottom-12 md:left-12 
                       text-sm md:text-base font-mono font-medium"
          >
            {tags && tags.map((tag, index) => (
              <div key={tag.id} className="flex items-center gap-2.5 group">
                <img 
                  src={tag.path} 
                  alt={tag.name} 
                  className="w-5 h-5 transition-all duration-300 group-hover:scale-110" 
                />
                <span className="text-purple-400 group-hover:text-purple-300 whitespace-nowrap transition-colors tracking-tight">
                  {tag.name}
                </span>
                {index < tags.length - 1 && (
                  <span className="text-neutral-700 ml-2 font-light">/</span>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={closeModal}
            className="absolute z-50 flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all border rounded-full top-6 left-6 bg-black/60 border-white/10 backdrop-blur-md hover:bg-white/10"
          >
             ← Back to Gallery
          </button>
        </div>

        {/* RIGHT SIDE: Information */}
        <div className="flex flex-col w-full h-full md:w-2/5">
          <div className="flex-1 p-8 overflow-y-auto custom-scrollbar md:p-12">
            
            <div className="mb-10">
              <span className="text-[10px] uppercase tracking-[0.3em] text-purple-500 font-bold">Project Spotlight</span>
              <h2 className="mt-2 text-4xl font-bold tracking-tight text-white md:text-5xl">
                {title}
              </h2>
            </div>

            <div className="space-y-8">
              <section>
                <h4 className="text-[11px] uppercase tracking-widest text-neutral-500 mb-3 font-mono">/ Description</h4>
                <p className="text-lg leading-relaxed text-neutral-300">
                  {description}
                </p>
              </section>

              {subDescription && subDescription.length > 0 && (
                <section>
                  <h4 className="text-[11px] uppercase tracking-widest text-neutral-500 mb-3 font-mono">/ Key Features</h4>
                  <ul className="space-y-3">
                    {subDescription.map((subDesc, index) => (
                      <li key={index} className="flex gap-3 text-sm leading-relaxed text-neutral-400">
                        <span className="text-purple-500">▹</span> {subDesc}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </div>

          {/* PROJECT METADATA GRID */}
          <div className="p-8 border-t border-white/5 bg-white/[0.02] backdrop-blur-md">
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1 font-mono">Role</h4>
                <p className="text-sm text-neutral-200">Designer & Developer</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1 font-mono">Status</h4>
                <p className="text-sm text-purple-400 flex items-center gap-2">
                   Active Dev <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                </p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1 font-mono">Year</h4>
                <p className="text-sm text-neutral-200">{time}</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1 font-mono">Category</h4>
                <p className="text-sm text-neutral-200">{category}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;