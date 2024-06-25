import { TiltRevealCard, SectionWrapper } from "@/components";
import { SectionHeader, SectionText } from "./parts";
import { useTranslations } from "next-intl";

import type { IAboutSectProps } from "@/types";
import type { ReactNode } from "react";

export default function AboutSection({ mainText, categories, isLoading = true }: IAboutSectProps): ReactNode {
  // Hooks
  const t = useTranslations("About");

  return (
    <SectionWrapper id="About">
      <SectionHeader head={t("mainTitle")} subHead={t("subTitle")} moreDetails="About" isLoading={isLoading} />
      <SectionText>{mainText ? mainText : t("defaultAboutText")}</SectionText>
      <div className="flex flex-wrap mt-10 gap-4">
        {(categories ?? [1, 2, 3, 4]).map((data, idx) => (
          <div key={idx}>Some Says</div>
        ))}
      </div>
    </SectionWrapper>
  );
}
