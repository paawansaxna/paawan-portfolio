import { motion, useScroll, useSpring, useTransform } from "motion/react";
import skyImg from "/assets/sky.png";
import mountains from "/assets/mountain.png";
import trees from "/assets/trees.png";
import rock from "/assets/rock.png";
import paawan from "/assets/paawan.png";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();

  // smooth scroll value
  const smoothScroll = useSpring(scrollYProgress, { damping: 50 });

  // vertical-only parallax layers
  const skyY = useTransform(smoothScroll, [0, 0.5], ["0%", "10%"]);
  const mountainsY = useTransform(smoothScroll, [0, 0.5], ["0%", "30%"]);
  const treesY = useTransform(smoothScroll, [0, 0.5], ["0%", "50%"]);
  const rockY = useTransform(smoothScroll, [0, 0.5], ["0%", "70%"]);
  const paawanY = useTransform(smoothScroll, [0, 0.5], ["0%", "0%"]);

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-hidden">

        {/* sky */}
        <motion.div
          className="absolute inset-0 -z-50"
          style={{
            backgroundImage: `url(${skyImg})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: skyY,
          }}
        />

        {/* mountains */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: `url(${mountains})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountainsY,
          }}
        />

        {/* trees */}
        {/* <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: `url(${trees})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: treesY,
          }}
        /> */}

        {/* rock */}
        <motion.div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: `url(${rock})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: rockY,
          }}
        />

        {/* paawan (locked) */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${paawan})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: paawanY,
          }}
        />

      </div>
    </section>
  );
};

export default ParallaxBackground;