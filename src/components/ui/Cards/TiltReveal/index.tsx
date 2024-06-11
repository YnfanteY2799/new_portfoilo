"use client";
import { BaseTiltWrapper } from "@/components";
import { cn, spawnFromRight } from "@/utils";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

export default function TiltRevealCard(): ReactNode {
  return (
    <BaseTiltWrapper>
      <motion.div variants={spawnFromRight} className={cn("bg-primary h-full w-full")}>
        TiltRevealCard
      </motion.div>
    </BaseTiltWrapper>
  );
}
