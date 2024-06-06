import { SectionHeader, SectionText } from "./parts";
import { SectionWrapper } from "@/components";
import { useTranslations } from "next-intl";

import type { ReactElement } from "react";

export default function ExperienceSection(): ReactElement {
  // Hooks
  const t = useTranslations("Experience");

  return (
    <SectionWrapper id="Experience">
      <SectionHeader head={t("mainTitle")} subHead={t("subTitle")} />
      <SectionText>Experience</SectionText>
    </SectionWrapper>
  );
}
