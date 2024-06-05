import { SectionHeader, SectionText } from "./parts";
import { SectionWrapper } from "@/components";
import { textRevealVariant } from "@/utils";

import type { ReactElement } from "react";

export default function TechStacksSection(): ReactElement {
  return (
    <SectionWrapper id="Tech">
      <SectionHeader head="About Me" subHead="Intro" />
      <SectionText className="mt-4 text-primary text-[17px] max-w-3xl leading-[30px]" variants={textRevealVariant}>
        Stack
      </SectionText>
    </SectionWrapper>
  );
}
