"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;
    const threshold = scrollHeight - clientHeight - 150; 

    if (latest > threshold) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  return (
    <motion.nav 
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: 100, opacity: 0 },
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed bottom-10 left-0 w-full z-50 pointer-events-none"
    >
      <div className="flex justify-center w-full pointer-events-auto">
        <SlideTabs />
      </div>
    </motion.nav>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="group relative mx-auto flex w-fit rounded-full border-[0.5px] border-white bg-white/10 p-1 backdrop-blur-sm"
    >
      <Tab setPosition={setPosition} href="#home">Home</Tab>
      <Tab setPosition={setPosition} href="#about">About</Tab>
      <Tab setPosition={setPosition} href="#projects">Projects</Tab>
      <Tab setPosition={setPosition} href="#work">Work</Tab>
      <Tab setPosition={setPosition} href="#contact">Contact</Tab>
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, href }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer transition-colors duration-100"
    >
      <a 
        href={href} 
        /* Classes moved to the anchor tag to ensure the entire tab is clickable 
           and the hover text color change works perfectly */
        className="block px-3 py-1.5 text-xs uppercase font-semibold text-white mix-blend-difference hover:text-black md:px-5 md:py-3 md:text-base h-full w-full"
      >
        {children}
      </a>
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-white md:h-12"
    />
  );
};

export default Navbar;