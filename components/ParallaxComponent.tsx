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
  const textY = useParallax(scrollYProgress, 2800);

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
      <motion.div
        className="absolute z-10 top-[10%] right-[5%] md:top-[30%] md:right-[10%]"
        style={{ y: astronautY }}
      >
        <Image
          src="/Astronaut.png"
          className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96"
          alt="Astronaut"
          width={300}
          height={300}
        />
      </motion.div>

      {/* Text-content */}
      <motion.div
        className="absolute z-10 top-[30%] md:left-[40%] md:top-[10%]"
        style={{ y: textY }}
      >
        <h1 className="text-4xl font-bold text-white drop-shadow-lg p-4 bg-black bg-opacity-50 rounded-xl text-center">
          Welcome to my personal space!
        </h1>
        <p className="text-lg mt-4 text-white drop-shadow-lg p-4 bg-black bg-opacity-50 rounded-xl text-center">
          Jens Osberg - lawyer and computer scientist by day, guitarist and
          coder by night
        </p>
      </motion.div>
    </div>
  );
}
