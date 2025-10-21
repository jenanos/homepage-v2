"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useReducedMotion,
} from "framer-motion";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { useMediaQuery } from "@/lib/hooks/use-media-query";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [0, distance]);
}

const heroMessage =
  "Lawyer and computer scientist by day, guitarist and coder by night";

export default function ParallaxComponent() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(max-width: 1025px)");

  const backgroundY = useParallax(scrollYProgress, shouldReduceMotion ? 0 : 800);
  const mountainsY = useParallax(scrollYProgress, shouldReduceMotion ? 0 : 100);
  const astronautY = useParallax(
    scrollYProgress,
    shouldReduceMotion ? 0 : isMobile ? 4000 : 1200
  );
  const astronautX = useParallax(
    scrollYProgress,
    shouldReduceMotion ? 0 : -700
  );
  const textY = useParallax(scrollYProgress, shouldReduceMotion ? 0 : 2800);

  return (
    <section
      id="home"
      className="w-full h-screen overflow-hidden relative place-items-center"
      aria-labelledby="home-heading"
    >
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/background.jpg')",
          y: backgroundY,
        }}
        aria-hidden
      />

      <motion.div
        className="absolute inset-0 z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/mountains.png')",
          y: mountainsY,
        }}
        aria-hidden
      />

      <motion.div
        className="absolute z-10 top-[10%] right-[5%] md:top-[30%] md:right-[30%]"
        style={{
          y: astronautY,
          x: astronautX,
        }}
        aria-hidden
      >
        <Image
          src="/astronaut.png"
          className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96"
          alt="Astronaut"
          width={300}
          height={300}
          priority
        />
      </motion.div>

      <motion.div
        className="absolute z-10 top-[30%] md:left-[5%] lg:left-[20%] md:top-[10%] text-white drop-shadow-lg p-4 bg-transparent rounded-xl text-center"
        style={{ y: textY }}
      >
        <h1 id="home-heading" className="text-6xl font-bold text-wrap">
          Welcome to my personal space!
        </h1>
        {shouldReduceMotion || isTablet ? (
          <div className="text-2xl mt-4">{heroMessage}</div>
        ) : (
          <TypewriterEffectSmooth
            words={[
              {
                text: heroMessage,
                className: "text-white text-2xl mt-4",
              },
            ]}
          />
        )}
      </motion.div>
    </section>
  );
}
