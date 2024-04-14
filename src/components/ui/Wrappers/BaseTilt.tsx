"use client";
import { useMotionTemplate, useMotionValue, useSpring, motion } from "framer-motion";
import { TILT_HALF_ROTATION_RANGE, TILT_ROTATION_RANGE } from "@/utils";
import { type ReactNode, type MouseEvent, useRef } from "react";

import type { ICommonRSC } from "@/types";

export default function BaseTilt({ children, className }: ICommonRSC): ReactNode {
  // Hooks
  const x = useMotionValue<number>(0);
  const y = useMotionValue<number>(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  // Motion Templated Hook
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  // Ref's
  const ref = useRef<HTMLDivElement>(null);

  // Functions
  function handleMouseMove(e: MouseEvent): void {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * TILT_ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * TILT_ROTATION_RANGE;

    const rX = (mouseY / height - TILT_HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - TILT_HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  }

  function handleMouseLeave(): void {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      children={children}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", transform }}
    />
  );
}
