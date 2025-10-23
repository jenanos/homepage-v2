"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function NbTranscribe() {
    return (
        <CardContainer>
            <CardBody className="bg-[#001122] relative group/card hover:shadow-2xl hover:shadow-white border-white/20 w-auto sm:w-120 h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-white">
                    NB-Transcribe
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-white text-sm max-w-sm mt-2"
                >
                    nb-transcribe combines a FastAPI backend and Next.js frontend to
                    deliver Norwegian speech-to-text with NB-Whisper and Gemma-3 powered
                    copy editing, complete with GPU-aware local development and Docker
                    Compose workflows.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src="/nb-transcribe.png"
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="NB-Transcribe app screenshot"
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-5">
                    <CardItem
                        translateZ={20}
                        as={"p"}
                        className="px-4 pb-2 rounded-xl text-s font-normal text-white"
                    >
                        Try the Norwegian speech-to-text app →
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href="https://nb-transcribe.vercel.app/"
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
