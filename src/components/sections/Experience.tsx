import { commonAnimationDispatcher as cad } from "@/utils";
import { SectionHeader, SectionText } from "./parts";
import { SectionWrapper } from "@/components";

import type { ReactElement } from "react";

export default function ExperienceSection(): ReactElement {
  return (
    <SectionWrapper id="Experience">
      <SectionHeader head="About Me" subHead="Intro" />
      <SectionText
        className="mt-4 text-primary text-[17px] max-w-3xl leading-[30px]"
        variants={cad({ direction: "", type: "", delay: 0.1, duration: 1 }, "fadeIn")}
      ></SectionText>
    </SectionWrapper>
  );
}
