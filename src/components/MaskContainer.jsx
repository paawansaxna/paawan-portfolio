"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion"; // Note: changed 'motion/react' to 'framer-motion' for standard compatibility
import { twMerge } from "tailwind-merge";

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 600,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const updateMousePosition = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    el.addEventListener("mousemove", updateMousePosition);
    return () => el.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const maskSize = isHovered ? revealSize : size;

  return (
    <motion.div
      ref={containerRef}
      /* CHANGE: Reduced height from h-[800px] to h-[500px] or h-[60vh] */
      className={twMerge("relative h-[500px] md:h-[600px] overflow-hidden", className)}
    >
      {/* MASK LAYER */}
      <motion.div
        className="absolute flex h-full w-full items-center justify-center bg-black text-6xl [mask-image:url(/mask.svg)] [mask-repeat:no-repeat] dark:bg-white"
        animate={{
          maskPosition: `${mousePosition.x - maskSize / 2}px ${
            mousePosition.y - maskSize / 2
          }px`,
          maskSize: `${maskSize}px`,
        }}
        transition={{
          maskSize: { duration: 0.3, ease: "easeInOut" },
          maskPosition: { duration: 0.1, ease: "linear" }, // Snappier movement
        }}
      >
        <div className="absolute inset-0 z-0 bg-black opacity-50 dark:bg-white" />

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative z-20 mx-auto max-w-5xl text-center"
        >
          {children}
        </div>
      </motion.div>

      {/* BASE CONTENT */}
      <div className="flex h-full w-full items-center justify-center px-4">
        {revealText}
      </div>
    </motion.div>
  );
};