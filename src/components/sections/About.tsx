"use client";

import { commonAnimationDispatcher as cad } from "@/utils";
import { TiltCard, SectionWrapper } from "@/components";
import SectionHeader from "../providers/Headers.tsx";
import { motion } from "framer-motion";

import type { ReactNode } from "react";

export default function AboutSection(): ReactNode {
  return (
    <SectionWrapper id="About">
      <SectionHeader head="About Me" subHead="Intro" moreDetails="About" />
      <motion.p
        className="mt-4 text-primary text-[17px] max-w-3xl leading-[30px]"
        variants={cad({ direction: "", type: "", delay: 0.1, duration: 1 }, "fadeIn")}
      >
        XDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
        XDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
        XDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
        XDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
        XDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
      </motion.p>
      <div className="flex flex-wrap mt-10 gap-4">
        {[1, 2, 3, 4].map((_) => (
          <TiltCard key={_} />
        ))}
      </div>
    </SectionWrapper>
  );
}
