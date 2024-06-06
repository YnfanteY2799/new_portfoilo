import { TiltRevealCard, SectionWrapper } from "@/components";
import { SectionHeader, SectionText } from "./parts";
import { useTranslations } from "next-intl";

import type { ReactNode } from "react";

export default function AboutSection(): ReactNode {
  // Hooks
  const t = useTranslations("About");

  return (
    <SectionWrapper id="About">
      <SectionHeader head={t("mainTitle")} subHead={t("subTitle")} moreDetails="About" />
      <SectionText>About</SectionText>
      <div className="flex flex-wrap mt-10 gap-4">
        {[1, 2, 3, 4].map((_) => (
          <TiltRevealCard key={_} />
        ))}
      </div>
    </SectionWrapper>
  );
}
