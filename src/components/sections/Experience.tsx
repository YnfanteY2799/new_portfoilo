import { SectionHeader, SectionText } from "./parts";
import { SectionWrapper } from "@/components";
import { textRevealVariant } from "@/utils";

import type { ReactElement } from "react";

export default function ExperienceSection(): ReactElement {
  return (
    <SectionWrapper id="Experience">
      <SectionHeader head="About Me" subHead="Intro" />
      <SectionText>Experience</SectionText>
    </SectionWrapper>
  );
}
