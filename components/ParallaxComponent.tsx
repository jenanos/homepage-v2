"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [0, distance]);
}

export default function ParallaxComponent() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useParallax(scrollYProgress, 800);
  const mountainsY = useParallax(scrollYProgress, 100);
  const astronautY = useParallax(scrollYProgress, 1200);

  return (
    <div className="w-full h-screen overflow-hidden relative place-items-center">
      {/* Background */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Bakgrunn.webp')",
          y: backgroundY,
        }}
      ></motion.div>

      {/* Mountains */}
      <motion.div
        className="absolute inset-0 z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Mountains.png')",
          y: mountainsY,
        }}
      ></motion.div>

      {/* Astronaut */}
      <motion.div className="absolute z-10" style={{ y: astronautY }}>
        <Image src="/Astronaut.png" alt="Astronaut" width={200} height={200} />
      </motion.div>

      {/* Content */}
      <div className="z-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to the Parallax Page</h1>
          <p className="text-lg mt-4">
            Scroll down to see the effect in action!
          </p>
        </div>
      </div>
    </div>
  );
}
