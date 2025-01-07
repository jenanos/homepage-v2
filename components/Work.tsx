"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export default function Work() {
  const { scrollYProgress } = useScroll();
  const astronautXDesktop = useTransform(scrollYProgress, [0, 1], [-400, 100]);
  const astronautXMobile = useTransform(scrollYProgress, [0, 1], [-400, 600]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 3]);

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div
      id="work"
      className="min-h-screen md:min-h-fit w-screen md:py-10 flex flex-col items-center justify-center bg-gradient-to-b from-[#060606] to-[#001122]"
    >
      <h1 className="p-4 text-4xl text-white">About me</h1>
      <div className="flex w-screen flex-row justify-evenly text-center flex-wrap">
        <motion.div
          className="max-w-xs"
          style={{
            x: isMobile ? astronautXMobile : astronautXDesktop,
            opacity,
          }}
        >
          <Image
            src="/Astronaut.png"
            width={300}
            height={300}
            alt="Astronaut"
          />
        </motion.div>
        <div className="max-w-xs py-3 text-white">
          <p className="py-3">
            I am a lawyer with a masters degree in law and developer with
            bachelors degree in programming and system architecture, both from
            the University of Oslo.
          </p>
          <p className="py-3">
            I am currently working with AI policy and regulation at the
            Norwegian Digitalization Agency{" "}
          </p>
          <p className="py-3">
            I also have extensive experience with privacy, data protection,
            automation-friendly regulation, cloud, and information security.
          </p>
        </div>
      </div>
    </div>
  );
}
