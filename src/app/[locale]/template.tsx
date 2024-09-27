"use client";
import { motion } from "framer-motion";

import type { ReactNode } from "react";
import type { ICommonRSC } from "@/types";

export default function Template({ children }: ICommonRSC): ReactNode {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.65 }}
    >
      {children}
    </motion.div>
  );
}
