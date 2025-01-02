"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [0, distance]);
}

export default function ParallaxComponent() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useParallax(scrollYProgress, 100);
  const astronautY = useParallax(scrollYProgress, 4000);

  return (
    <div>
      {/* Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/Bakgrunn.webp')",
          y: backgroundY,
        }}
      ></motion.div>

      {/* Astronaut */}
      <motion.div
        className="absolute top-6"
        style={{ y: astronautY }}
      >
        <Image
          src="/Astronaut.png"
          alt="Astronaut"
          width={300}
          height={300}
        />
      </motion.div>

      {/* Content */}
      <div className="h-[200vh]">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to the Parallax Page</h1>
          <p className="text-lg mt-4">Scroll down to see the effect in action!</p>
        </div>

    </div>
    </div>
  );
}