"use client";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const TimelineBullet = ({ progress, range }) => {
  const color = useTransform(progress, range, ["#262626", "#a855f7"]);
  const scale = useTransform(progress, range, [1, 1.4]);
  const boxShadow = useTransform(
    progress,
    range,
    ["0px 0px 0px rgba(168, 85, 247, 0)", "0px 0px 15px rgba(168, 85, 247, 0.8)"]
  );

  return (
    <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[18px] z-50">
      <motion.div
        style={{ backgroundColor: color, scale, boxShadow, borderColor: "#404040" }}
        className="w-4 h-4 border-2 rounded-full"
      />
    </div>
  );
};

export const Timeline = ({ data = [] }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 90%"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const inputPoints = data.map((_, i) => i / (data.length - 1));
  const outputHeights = data.map((_, i) => (i / (data.length - 1)) * height);

  const heightTransform = useTransform(smoothProgress, inputPoints, outputHeights);
  const opacityTransform = useTransform(smoothProgress, [0, 0.05], [0, 1]);

  if (!data.length) return null;

  return (
    /* ADDED: pb-20 (mobile) and md:pb-40 (desktop) for bottom space */
    <div className="c-space section-spacing pb-20 md:pb-40" ref={containerRef}>
      <h2 className="text-heading mb-1">My Work Experience</h2>
      
      <div ref={ref} className="relative">
        {data.map((item, index) => {
          const totalItems = data.length - 1;
          const startTrigger = Math.max(0, (index / totalItems) - 0.02);
          const endTrigger = Math.min(1, (index / totalItems) + 0.05);

          return (
            <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
              <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
                <TimelineBullet 
                  progress={smoothProgress} 
                  range={[startTrigger, endTrigger]} 
                />
                <div className="hidden md:flex flex-col gap-2 pl-20 text-neutral-300">
                  <h3 className="text-xl font-bold">{item.date}</h3>
                  <h3 className="text-3xl font-semibold">{item.title}</h3>
                  <h3 className="text-2xl text-neutral-500">{item.job}</h3>
                </div>
              </div>

              <div className="relative w-full pl-20 pr-4 md:pl-4">
                <div className="block mb-4 md:hidden text-neutral-300">
                  <h3 className="text-lg font-bold">{item.date}</h3>
                  <h3 className="text-xl font-semibold">{item.job}</h3>
                </div>
                {item.contents?.map((content, idx) => (
                  <p key={idx} className="mb-4 text-lg font-normal text-neutral-400 max-w-2xl leading-relaxed">
                    {content}
                  </p>
                ))}
              </div>
            </div>
          );
        })}

        {/* TRACK LINE */}
        <div
          style={{ height }}
          className="absolute left-[1px] top-0 w-[2px] bg-gradient-to-b from-transparent via-neutral-800 to-neutral-800"
        />

        {/* PROGRESS LINE */}
        <div
          style={{ height }}
          className="absolute left-[1px] top-0 w-[2px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute top-0 w-[2px] bg-gradient-to-b from-transparent via-purple-500 to-purple-500 rounded-full shadow-[0_0_15px_#a855f7]"
          />
        </div>
      </div>
    </div>
  );
};