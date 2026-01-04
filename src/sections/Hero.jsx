import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import Astronaut from "../components/Astronaut";
import { OrbitControls, Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import Loader from "../components/Loader";
import { Suspense, useState } from "react";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="home"
      className="relative flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space"
    >
      {/* TEXT */}
      <div className="relative z-10">
        <HeroText />
      </div>

      {/* 3D SCENE – DESKTOP ONLY */}
      {!isMobile && (
        <figure className="absolute inset-0 w-screen h-screen z-20">
          <Canvas camera={{ position: [0, 1, 3] }}>
            <Suspense fallback={<Loader />}>
              <Float>
                <group position={[0.6, 0, 0]}>
                  <Astronaut
                    onPointerOver={(e) => {
                      e.stopPropagation();
                      setHovered(true);
                    }}
                    onPointerOut={(e) => {
                      e.stopPropagation();
                      setHovered(false);
                    }}
                  />
                </group>
              </Float>
              <Rig />
            </Suspense>

            <OrbitControls
              enableZoom={hovered}
              enableRotate={hovered}
              enablePan={false}
              minDistance={2}
              maxDistance={5}
            />
          </Canvas>
        </figure>
      )}
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.7,
      delta
    );
  });
}

export default Hero;