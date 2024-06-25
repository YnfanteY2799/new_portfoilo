import { TooltipedButton, Button, SecuencialText, InterviewedSection } from "@/components";
import { useTranslations } from "next-intl";
import { socials, cv } from "@/utils";
import Image from "next/image";
import Link from "next/link";

import type { ReactNode } from "react";

export default function HeroSection(): ReactNode {
  // Hooks
  const t = useTranslations("Hero");

  return (
    <InterviewedSection className="pt-10 mx-auto pb-14" id="Hero">
      <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center transition-all lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 text-4xl title-font font-local sm:text-5xl">
            <SecuencialText words={t("welcome")} duration={1} />
          </h1>
          <p className="mb-8 leading-relaxed text-2xl">{t("dev_title")}</p>
          <div className="flex justify-center gap-6">
            <Link href={cv} target="_blank">
              <Button size="lg" radius="md" color="primary" variant="ghost">
                {t("get_cv")}
              </Button>
            </Link>
            <a href="#Contact">
              <Button size="lg" radius="md" color="default" variant="ghost">
                {t("get_contact")}
              </Button>
            </a>
          </div>
          <div className="flex gap-3 pt-8 lg:gap-6 ml-2">
            {socials.map(({ link, icon }, ix) => (
              <TooltipedButton
                key={ix}
                isIconOnly
                link={link}
                name={icon}
                variant="ghost"
                position="bottom"
                tooltipColor="foreground"
              />
            ))}
          </div>
        </div>

        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <Image
            width={1200}
            height={200}
            loading="eager"
            alt="Profile Pic"
            src="/doodle/dudul.svg"
            style={{ height: "auto", width: "auto" }}
            className="border rounded-lg border-foreground"
          />
        </div>
      </div>
    </InterviewedSection>
  );
}
