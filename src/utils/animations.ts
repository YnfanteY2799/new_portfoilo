import { commonAnimationDispatcher } from "./functions.ts";

import type { Transition, Variants } from "framer-motion";

export const SpringNavbarAnimation: Transition = {
  damping: 9,
  bounce: 0.25,
  duration: 0.3,
  type: "spring",
  stiffness: 130,
};

export const TextVariants: Variants = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay: 0,
    },
  },
};

export const DACVariants: Variants = {
  initial: {
    x: 0,
  },
  exit: {
    x: 0,
    y: 0,
  },
  top: {
    y: 20,
  },
  bottom: {
    y: -20,
  },
  left: {
    x: 20,
  },
  right: {
    x: -20,
  },
};

export const DACtextVariants: Variants = {
  initial: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  exit: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  top: {
    y: -20,
    opacity: 1,
  },
  bottom: {
    y: 2,
    opacity: 1,
  },
  left: {
    x: -2,
    opacity: 1,
  },
  right: {
    x: 20,
    opacity: 1,
  },
};

/** Spawn from right Variant */
export const spawnFromRight: Variants = commonAnimationDispatcher(
  { direction: "right", type: "spring", delay: 0.5 * 1, duration: 0.75 },
  "fadein"
);

export const delayedSpawnFromRight = (idx: number): Variants =>
  commonAnimationDispatcher({ direction: "right", delay: 0.5 * idx, type: "spring", duration: 0.75 }, "fadein");

/** Text Reveal Variants */
export const textRevealVariant: Variants = commonAnimationDispatcher(
  { direction: "", type: "", delay: 0.1, duration: 1 },
  "fadeIn"
);
