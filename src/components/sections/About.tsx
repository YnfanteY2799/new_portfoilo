"use client";
import { commonAnimationDispatcher as cad } from "@/utils";
import { SectionWrapper } from "@/components";
import { motion } from "framer-motion";
import SectionHeader from "./headers";

import type { ICommonSectionProps } from "@/types";
import type { ReactElement } from "react";

export default function AboutSection({ text = "" }: ICommonSectionProps): ReactElement {
  return (
    <SectionWrapper id="About">
      <SectionHeader head="About Me" subHead="Intro" moreDetails="/About" />
      <motion.p
        className="mt-4 text-primary text-[17px] max-w-3xl leading-[30px]"
        variants={cad({ direction: "", type: "", delay: 0.1, duration: 1 }, "fadeIn")}
      >
        {text}
      </motion.p>
    </SectionWrapper>
  );
}
