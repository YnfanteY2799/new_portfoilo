"use client";
import { motion, stagger, useAnimate } from "framer-motion";
import { type ReactNode, useEffect } from "react";

import type { ISecuentialTextProps } from "@/types";

export default function TextGenerateEffect({ words, className, duration }: ISecuentialTextProps): ReactNode {
  // Hooks
  const [scope, animate] = useAnimate();

  // Consts
  const wordsArray = (words ?? "").split(" ");

  // Animate Destructuring
  const { current } = scope;

  // Effects
  useEffect(() => {
    animate("span", { opacity: 1 }, { duration, delay: stagger(0.2) });
  }, [current]);

  return (
    <div className={className}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          <motion.div ref={scope}>
            {wordsArray.map((word, idx) => {
              return (
                <motion.span key={word + idx} className="dark:text-white text-black opacity-0">
                  {word}
                </motion.span>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
