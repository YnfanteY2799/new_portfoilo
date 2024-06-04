"use client";

import { commonAnimationDispatcher as cad } from "@/utils";
import SectionHeader from "../providers/SectionHeaders.tsx";
import { SectionWrapper } from "@/components";
import { motion } from "framer-motion";

import type { ReactElement } from "react";

export default function ContactSection(): ReactElement {
  return (
    <SectionWrapper id="Contact_Me">
      <SectionHeader head="About Me" subHead="Intro" />
      <motion.p
        className="mt-4 text-primary text-[17px] max-w-3xl leading-[30px]"
        variants={cad({ direction: "", type: "", delay: 0.1, duration: 1 }, "fadeIn")}
      ></motion.p>
    </SectionWrapper>
  );
}
