import { commonAnimationDispatcher } from "./functions";

export const SpringNavbarAnimation = {
  damping: 9,
  bounce: 0.25,
  duration: 0.3,
  type: "spring",
  stiffness: 130,
};

export const TextVariants = {
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

export const DACVariants = {
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

export const DACtextVariants = {
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

/* Spawn from right Variants */
export const spawnFromRight = commonAnimationDispatcher(
  { direction: "right", type: "spring", delay: 0.5 * (1 ?? 1), duration: 0.75 },
  "fadein"
);
/* Spawn from right Variants */

/* Text Reveal Variants */
export const textRevealVariant = commonAnimationDispatcher({ direction: "", type: "", delay: 0.1, duration: 1 }, "fadeIn");
/* Text Reveal Variants */
