"use client";

import React, { useId, useEffect, useState } from "react";
import { motion, useAnimation } from "motion/react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { twMerge } from "tailwind-merge";

export const SparklesCore = (props) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;

  const [init, setInit] = useState(false);
  const controls = useAnimation();
  const generatedId = useId();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: { duration: 1 },
      });
    }
  };

  return (
    <motion.div
      animate={controls}
      className={twMerge("opacity-0 h-full w-full absolute inset-0", className)}
    >
      {init && (
        <Particles
          id={id || generatedId}
          className={twMerge("h-full w-full")}
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: background || "transparent",
              },
            },
            fullScreen: {
              enable: false,
              zIndex: 1,
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: { enable: false, mode: "push" },
                onHover: { enable: false, mode: "repulse" },
                resize: true,
              },
              modes: {
                push: { quantity: 4 },
                repulse: { distance: 200, duration: 0.4 },
              },
            },
            particles: {
              number: {
                value: particleDensity || 100,
                density: {
                  enable: true,
                  width: 400,
                  height: 400,
                },
              },
              color: {
                value: particleColor || "#ffffff",
              },
              opacity: {
                value: { min: 0.1, max: 1 },
                animation: {
                  enable: true,
                  speed: speed || 4,
                  sync: false,
                },
              },
              size: {
                value: {
                  min: minSize || 0.4,
                  max: maxSize || 1.2,
                },
              },
              move: {
                enable: true,
                speed: { min: 0.05, max: 0.3 },
                direction: "none",
                outModes: { default: "out" },
              },
              shape: {
                type: "circle",
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
};