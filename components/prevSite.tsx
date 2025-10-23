"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function PrevSite() {
  return (
    <CardContainer>
      <CardBody className="bg-gradient-to-br from-[#001122] to-[#002244] relative group/card hover:shadow-2xl hover:shadow-white/70 border-[#13acb6]/20 w-auto sm:w-120 h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-white">
          My previous homepage
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-white text-sm max-w-sm mt-2 "
        >
          In a previous version of this website, I experimented with 3D design
          using Blender and Three.js to create an interactive 3D environment.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/prev-site.jpg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-5">
          <CardItem
            translateZ={20}
            as={"p"}
            href="https://homepage-seven-lyart.vercel.app/"
            target="__blank"
            className="px-4 pb-2 rounded-xl text-s font-normal text-white"
          >
            That version is still live and can be viewed here →
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://homepage-seven-lyart.vercel.app/"
            target="__blank"
            className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
          >
            My 3D world
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
