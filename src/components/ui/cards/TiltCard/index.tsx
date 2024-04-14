"use client";
import { BaseTiltWrapper } from "@/components";
import { cn, spawnFromRight } from "@/utils";
import { motion } from "framer-motion";

import type { ReactNode } from "react";

export default function TiltCard(): ReactNode {
  return (
    <BaseTiltWrapper>
      <motion.div variants={spawnFromRight} className={cn("w-20 bg-red-600 h-20")}>
        <p style={{ transform: "translateZ(50px)" }} className="font-bold">
          XD
        </p>
      </motion.div>
    </BaseTiltWrapper>
  );
}
