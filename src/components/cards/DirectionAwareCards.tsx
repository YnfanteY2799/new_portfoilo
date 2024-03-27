"use client";
import { type MouseEvent, type ReactNode, useRef, useState } from "react";
import { DACVariants, DACtextVariants, cn } from "@/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import type { IDACard, TCommonDirections } from "@/types";

export default function DirectionAwareHoverCard({ imageUrl, children, classNames }: IDACard): ReactNode {
  // Props
  const { className, imageClassName, childrenClassName } = classNames ?? {};

  // Ref's
  const ref = useRef<HTMLDivElement>(null);

  // State
  const [direction, setDirection] = useState<TCommonDirections>("left");

  function handleMouseEnter(event: MouseEvent): void {
    if (!ref.current) return;
    const direction = getDirection(event, ref.current);
    switch (direction) {
      case 0:
        setDirection("top");
        break;
      case 1:
        setDirection("right");
        break;
      case 2:
        setDirection("bottom");
        break;
      case 3:
        setDirection("left");
        break;
      default:
        setDirection("left");
        break;
    }
  }

  function getDirection(ev: MouseEvent, obj: HTMLElement): number {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return d;
  }

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      className={cn("md:h-96 w-60 h-60 md:w-96 bg-transparent rounded-lg overflow-hidden group/card relative", className)}
    >
      <AnimatePresence mode="wait">
        <motion.div className="relative h-full w-full" initial="initial" whileHover={direction} exit="exit">
          <motion.div className="group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500" />
          <motion.div
            variants={DACVariants}
            className="h-full w-full relative"
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Image
              alt="image"
              width="200"
              height="200"
              src={imageUrl}
              className={cn("h-full w-full object-cover scale-[1.15]", imageClassName)}
            />
          </motion.div>
          <motion.div
            variants={DACtextVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn("absolute bottom-4 left-4 z-40", childrenClassName)}
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
