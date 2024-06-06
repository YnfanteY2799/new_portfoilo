import { TiltRevealCard, SectionWrapper } from "@/components";
import { SectionHeader, SectionText } from "./parts";
import { textRevealVariant } from "@/utils";

import type { ReactNode } from "react";
import { useTranslations } from "next-intl";

export default function AboutSection(): ReactNode {
  const t = useTranslations("About");

  return (
    <SectionWrapper id="About">
      <SectionHeader head={t("mainTitle")} subHead={t("subTitle")} moreDetails="About" />
      <SectionText className="mt-4 text-primary text-[17px] max-w-3xl leading-[30px]" variants={textRevealVariant}>
        About
      </SectionText>
      <div className="flex flex-wrap mt-10 gap-4">
        {[1, 2, 3, 4].map((_) => (
          <TiltRevealCard key={_} />
        ))}
      </div>
    </SectionWrapper>
  );
}
