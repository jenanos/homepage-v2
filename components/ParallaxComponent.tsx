"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [0, distance]);
}

export default function ParallaxComponent() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useParallax(scrollYProgress, 800);
  const mountainsY = useParallax(scrollYProgress, 100);
  const astronautYDesktop = useParallax(scrollYProgress, 1200);
  const astronautYMobile = useParallax(scrollYProgress, 4000);
  const astronautX = useParallax(scrollYProgress, -700); // Move left along X-axis
  const textY = useParallax(scrollYProgress, 2800);

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1025px)" });

  return (
    <div
      id="home"
      className="w-full h-screen overflow-hidden relative place-items-center"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/background.jpg')",
          y: backgroundY,
        }}
      ></motion.div>

      {/* Mountains */}
      <motion.div
        className="absolute inset-0 z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/mountains.png')",
          y: mountainsY,
        }}
      ></motion.div>

      {/* Astronaut */}
      <motion.div
        className="absolute z-10 top-[10%] right-[5%] md:top-[30%] md:right-[30%]"
        style={{
          y: isMobile ? astronautYMobile : astronautYDesktop,
          x: astronautX,
        }}
      >
        <Image
          src="/astronaut.png"
          className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96"
          alt="Astronaut"
          width={300}
          height={300}
        />
      </motion.div>

      {/* Text-content */}
      <motion.div
        className="absolute z-10 top-[30%] md:left-[5%] lg:left[20%] md:top-[10%] text-white drop-shadow-lg p-4 bg-black bg-opacity-10 rounded-xl text-center"
        style={{ y: textY }}
      >
        <h1 className="text-6xl font-bold text-wrap">
          Welcome to my personal space!
        </h1>
        {isTablet ? (
          <h2 className="text-2xl mt-4">
            Lawyer and computer scientist by day, guitarist and coder by night
          </h2>
        ) : (
          <TypewriterEffectSmooth
            words={[
              {
                text: "Lawyer and computer scientist by day, guitarist and coder by night",
                className: "text-white text-2xl mt-4",
              },
            ]}
          />
        )}
      </motion.div>
    </div>
  );
}
