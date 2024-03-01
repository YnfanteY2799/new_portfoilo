"use client";
import { SectionWrapper } from "@/components";
import { motion } from "framer-motion";
import SectionHeader from "./headers";
import { fadeIn } from "@/utils";

import type { ReactElement } from "react";

export default function AboutSection({ Text = "" }): ReactElement {
  return (
    <SectionWrapper id="About">
      <SectionHeader Head="About Me" SubHead="Intro" MoreDetails="/About" />
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-primary text-[17px] max-w-3xl leading-[30px]"
      >
        {Text}
      </motion.p>
    </SectionWrapper>
  );
}
