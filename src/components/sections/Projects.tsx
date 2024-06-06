import { SectionHeader, SectionText } from "./parts";
import { SectionWrapper } from "@/components";
import { useTranslations } from "next-intl";

import type { ReactElement } from "react";

export default function ProjectsSection(): ReactElement {
  // Hooks
  const t = useTranslations("Projects");

  return (
    <SectionWrapper id="Projects">
      <SectionHeader head="About Me" subHead="Intro" />
      <SectionText>Projects</SectionText>
    </SectionWrapper>
  );
}
