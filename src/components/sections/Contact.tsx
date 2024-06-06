import { SectionHeader, SectionText } from "./parts";
import { SectionWrapper } from "@/components";
import { textRevealVariant } from "@/utils";

import type { ReactElement } from "react";

export default function ContactSection(): ReactElement {
  return (
    <SectionWrapper id="Contact_Me">
      <SectionHeader head="About Me" subHead="Intro" />
      <SectionText>Contact</SectionText>
    </SectionWrapper>
  );
}
