"use client";
import { commonSectionTextCN, textRevealVariant } from "@/utils";
import { motion } from "framer-motion";

import type { ISectionTextProps } from "@/types";
import type { ReactNode } from "react";

export default function SectionText(props: ISectionTextProps): ReactNode {
  // Syntactic Sugar
  const { className = commonSectionTextCN, variants = textRevealVariant , children } = props;

  return (
    <motion.p className={className} variants={variants}>
      {children}
    </motion.p>
  );
}
