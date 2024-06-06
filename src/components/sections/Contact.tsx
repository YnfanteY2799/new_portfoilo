import { SectionHeader, SectionText } from "./parts";
import { SectionWrapper } from "@/components";
import { useTranslations } from "next-intl";

import type { ReactElement } from "react";

export default function ContactSection(): ReactElement {
  // Hooks
  const t = useTranslations("Contact");

  return (
    <SectionWrapper id="Contact_Me">
      <SectionHeader head={t("mainTitle")} subHead={t("subTitle")} />
      <SectionText>Contact</SectionText>
    </SectionWrapper>
  );
}
