"use client";
import { staggerContainer, useEnterView } from "@/utils";
import { motion } from "framer-motion";

import { useEffect, useRef, type ReactNode } from "react";

import type { ICommonSectionWrapperProps } from "@/types";

export default function SectionWrapper(props: ICommonSectionWrapperProps): ReactNode {
  // Direct manip of props
  const { id } = props;

  // Ref's
  const baseRef = useRef<HTMLDivElement>(null);

  //  Hooks
  const isInView = useEnterView(baseRef);

  // Effects
  useEffect(() => {
    console.log("is In View", id);
  }, [isInView]);

  return (
    <motion.section
      {...props}
      ref={baseRef}
      initial="hidden"
      whileInView="show"
      variants={staggerContainer()}
      viewport={{ once: true, amount: 0.35 }}
      className="relative px-6 py-10 mx-auto max-w-7xl sm:px-16 sm:py-16"
    />
  );
}
