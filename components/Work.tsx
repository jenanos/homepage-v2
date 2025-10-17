"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useMediaQuery } from "@/lib/hooks/use-media-query";

export default function Work() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 767px)");

  const xInputRange = shouldReduceMotion ? [0, 1] : [0, isMobile ? 0.2 : 0.6];
  const xOutputRange = shouldReduceMotion ? [0, 0] : [-200, 0];
  const astronautX = useTransform(scrollYProgress, xInputRange, xOutputRange);
  const opacityOutput = shouldReduceMotion ? [1, 1] : [0, 1];
  const opacity = useTransform(scrollYProgress, [0, 1], opacityOutput);

  return (
    <section
      id="work"
      className="min-h-screen md:min-h-fit w-screen pt-24 flex flex-col items-center justify-center bg-gradient-to-b from-[#060606] to-[#001122]"
      aria-labelledby="work-heading"
    >
      <h2 id="work-heading" className="p-4 text-4xl text-white">
        About me
      </h2>
      <div className="flex w-3/4 flex-row justify-evenly text-center flex-wrap">
        <motion.div
          className="max-w-xs"
          style={{
            x: astronautX,
            opacity,
          }}
          aria-hidden
        >
          <Image
            src="/astronaut.png"
            width={300}
            height={300}
            alt="Astronaut"
          />
        </motion.div>
        <div className="max-w-xs py-3 text-white text-left md:text-center">
          <p className="py-3">
            I am a lawyer with a master’s degree in law and a developer with a
            bachelor’s degree in programming and system architecture, both from
            the University of Oslo.
          </p>
          <p className="py-3">
            Currently, I work on AI policy and regulation at the Norwegian
            Digitalization Agency.
          </p>
          <p className="py-3">
            I also have extensive experience in privacy, data protection,
            automation-friendly regulation, cloud technology, and information
            security.
          </p>
        </div>
      </div>
    </section>
  );
}
