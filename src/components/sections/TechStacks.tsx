import { SectionHeader, SectionText } from "./parts";
import { SectionWrapper } from "@/components";
import { useTranslations } from "next-intl";

import type { ReactElement } from "react";

export default function TechStacksSection(): ReactElement {
  const t = useTranslations("Tech");

  return (
    <SectionWrapper id="Tech">
      <SectionHeader head={t("mainTitle")} subHead={t("subTitle")} />
      <SectionText>Stack</SectionText>
    </SectionWrapper>
  );
}
