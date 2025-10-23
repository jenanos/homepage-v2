"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function MealPlanner() {
    return (
        <CardContainer>
            <CardBody className="bg-[#001122] relative group/card hover:shadow-2xl hover:shadow-white border-white/20 w-auto sm:w-120 h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-white">
                    Meal Planner
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-white text-sm max-w-sm mt-2"
                >
                    Meal Planner is a pnpm-powered Turborepo monorepo that combines a
                    Fastify+tRPC API, Prisma/PostgreSQL data layer, and Next.js frontend
                    to manage recipes, weekly dinner plans, shopping lists, and ingredient
                    tracking in one place.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src="/meals.png"
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="Meal Planner app screenshot"
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-5">
                    <CardItem
                        translateZ={20}
                        as={"p"}
                        className="px-4 pb-2 rounded-xl text-s font-normal text-white"
                    >
                        Manage your meals and recipes →
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href="https://meal-planner-web.vercel.app/"
                        target="_blank"
                        className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
                    >
                        Visit app
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
