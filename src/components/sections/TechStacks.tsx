"use client";

import { commonAnimationDispatcher as cad } from "@/utils";
import SectionHeader from "./parts/SectionHeaders.tsx";
import { SectionWrapper } from "@/components";
import { motion } from "framer-motion";

import type { ReactElement } from "react";

export default function TechStacksSection(): ReactElement {
  return (
    <SectionWrapper id="Tech">
      <SectionHeader head="About Me" subHead="Intro" />
      <motion.p
        className="mt-4 text-primary text-[17px] max-w-3xl leading-[30px]"
        variants={cad({ direction: "", type: "", delay: 0.1, duration: 1 }, "fadeIn")}
      ></motion.p>
    </SectionWrapper>
  );
}
