"use client";

import { commonAnimationDispatcher as cad } from "@/utils";
import SectionHeader from "../providers/Headers.tsx";
import { EVCard, SectionWrapper } from "@/components";
import { motion } from "framer-motion";

import type { ReactElement } from "react";

export default function AboutSection(): ReactElement {
  return (
    <SectionWrapper id="About">
      <SectionHeader head="About Me" subHead="Intro" moreDetails="About" />
      <motion.p
        className="mt-4 text-primary text-[17px] max-w-3xl leading-[30px]"
        variants={cad({ direction: "", type: "", delay: 0.1, duration: 1 }, "fadeIn")}
      ></motion.p>
      <div className="flex flex-wrap gap-8 mt-16">
        {[1, 2, 3, 4].map((_) => (
          <EVCard key={_} text={`someone_${_}`} />
        ))}
      </div>
    </SectionWrapper>
  );
}
