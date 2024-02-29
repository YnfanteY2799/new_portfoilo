"use client";

import { SocialsIcons } from "@/components";
import { socials } from "@/utils";

import type { IHeroSectionProps } from "@/types";
import type { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@nextui-org/react";

export default function HeroSection({ cv = "" }: IHeroSectionProps): ReactNode {
  return (
    <section className="pt-10 mx-auto pb-14 body-font hero bg-base-100" id="Hero">
      <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 text-3xl font-local title-font sm:text-4xl">Hi, I'm Yassett J. Ynfante</h1>
          <p className="mb-8 leading-relaxed">Js FullStack Developer</p>
          <div className="flex justify-center gap-6">
            <Link href={cv} target="_blank">
              <Button size="md" color="primary" variant="bordered">Get My CV !</Button>
            </Link>
            <a className="btn btn-outline" href="#Contact">
              Contact Me !
            </a>
          </div>
          <div className="flex gap-3 pt-8 lg:gap-6">
            {socials.map(({ link, icon }, idx) => (
              <div className="pb-1 tooltip tooltip-bottom" data-tip={icon} key={idx}>
                <a href={link} rel="noopener noreferrer" target="_blank" className="btn btn-outline ">
                  <SocialsIcons name={icon} />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <img
            src="dudul.svg"
            className="border rounded-lg "
            alt="Profile Pic"
            width="auto"
            height="auto"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
