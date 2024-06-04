"use client";
import { motion } from "framer-motion";

import type { ISectionTextProps } from "@/types";
import type { ReactNode } from "react";

export default function SectionText({ className, variants }: ISectionTextProps): ReactNode {
  return (
    <motion.p className={className} variants={variants}>
      SectionText
    </motion.p>
  );
}
