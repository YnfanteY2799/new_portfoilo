"use client";
import { staggerContainer } from "@/utils";
import { motion } from "framer-motion";

import type { ReactNode } from "react";
import type { ICommonSectionWrapperProps } from "@/types";

export default function SectionWrapper(props: ICommonSectionWrapperProps): ReactNode {
  return (
    <motion.section
      {...props}
      initial="hidden"
      whileInView="show"
      variants={staggerContainer()}
      viewport={{ once: true, amount: 0.25 }}
      className="relative px-6 py-10 mx-auto max-w-7xl sm:px-16 sm:py-16"
    />
  );
}
