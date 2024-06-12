"use client";
import { BaseTiltWrapper } from "@/components";
import { cn, spawnFromRight } from "@/utils";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

export default function TiltRevealCard(): ReactNode {
  return (
    <BaseTiltWrapper>
      <motion.div variants={spawnFromRight} className={cn("bg-primary h-[250px] w-[250px]")}>
        TiltRevealCard
      </motion.div>
    </BaseTiltWrapper>
  );
}
