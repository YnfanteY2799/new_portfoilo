import { GenerableChars } from "./constants.ts";

import type { CommonAnimationProps } from "@/types";
import type { Variants } from "framer-motion";

export function commonAnimationDispatcher(config: CommonAnimationProps, str: string): Variants {
  switch (str.toLocaleLowerCase()) {
    case "fadein":
      return {
        hidden: {
          opacity: 0,
          x: config.direction === "left" ? 100 : config.direction === "right" ? -100 : 0,
          y: config.direction === "up" ? 100 : config.direction === "down" ? -100 : 0,
        },
        show: {
          x: 0,
          y: 0,
          opacity: 1,
          transition: {
            ease: "easeOut",
            type: config.type,
            delay: config.delay,
            duration: config.duration,
          },
        },
      };
    case "slidein":
      return {
        hidden: {
          x: config.direction === "left" ? "-100%" : config.direction === "right" ? "100%" : 0,
          y: config.direction === "up" ? "100%" : config.direction === "down" ? "100%" : 0,
        },
        show: {
          x: 0,
          y: 0,
          transition: {
            ease: "easeOut",
            type: config.type,
            delay: config.delay,
            duration: config.duration,
          },
        },
      };
    default:
      return {};
  }
}

export function staggerContainer(staggerChildren?: any, delayChildren?: any): Variants {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
}

export function getHash(): string | undefined {
  return typeof window !== "undefined" ? decodeURIComponent(window.location.hash.replace("#", "")) : undefined;
}

/* PENDING: Improve this function */
export function generateRandomString(length: number): string {
  let result = "";
  for (let i = 0; i < length; i++) result += GenerableChars.charAt(Math.floor(Math.random() * GenerableChars.length));
  return result;
}
