"use client";
import { type ReactNode, type MouseEvent, useState, useEffect } from "react";
import { cn, generateRandomString } from "@/utils";
import CardPattern from "./PatternBaseCard.tsx";
import { useMotionValue } from "framer-motion";

import type { IEverVaultCardProps } from "@/types";

export default function EvervaultCard({ text, className }: IEverVaultCardProps): ReactNode {
  // State
  const [randomString, setRandomString] = useState<string>("");

  // Constants
  const mouseX = useMotionValue<number>(0);
  const mouseY = useMotionValue<number>(0);

  // Functions
  function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent): void {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    setRandomString(generateRandomString(1500));
  }

  // Effects
  useEffect(() => setRandomString(generateRandomString(1500)), []);

  return (
    <div className={cn("p-0.5 bg-transparent aspect-square flex items-center justify-center relative", className)}>
      <div
        onMouseMove={onMouseMove}
        className="group/card rounded-3xl w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
      >
        <CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} />
        <div className="relative z-10 flex items-center justify-center">
          <div className="relative h-44 w-44  rounded-full flex items-center justify-center text-white font-bold text-4xl">
            <div className="absolute w-full h-full bg-white/[0.8] dark:bg-black/[0.8] blur-sm rounded-full" />
            <span className="dark:text-white text-black z-20">{text}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
