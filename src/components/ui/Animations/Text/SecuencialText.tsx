"use client";
import { motion, stagger, useAnimate } from "framer-motion";
import { type ReactNode, useEffect } from "react";

import type { ISecuentialTextProps } from "@/types";

export default function TextGenerateEffect({ words, duration }: ISecuentialTextProps): ReactNode {
  // Hooks
  const [scope, animate] = useAnimate();

  // Consts
  const wordsArray = (words ?? "").split("");

  // Animate Destructuring
  const { current } = scope; 

  // Effects
  useEffect(() => {
    animate("span", { opacity: 1 }, { duration, delay: stagger(0.2) });
  }, [current]);

  return (
    <motion.div ref={scope}>
      {wordsArray.map((word, idx) => (
        <motion.span key={word + idx} className="opacity-0">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
