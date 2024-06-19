"use client";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { NortAmericanFlag, SpainFlagIcon } from "@/components";
import { CaretDown, MoonStars, SunHorizon } from "@phosphor-icons/react/dist/ssr";
import { useRouter, usePathname } from "@/utils";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useTheme } from "next-themes";

import type { ICDSProps } from "@/types";
import type { ReactNode } from "react";

export default function ConfigDropdownsSwitchers({ className }: ICDSProps): ReactNode {
  // Hooks
  const { theme, setTheme } = useTheme();
  const t = useTranslations("Dropdown");
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = useParams();

  // Consts
  const currLocale = params.locale;

  // Functions
  function onThemeChange(): void {
    setTheme(theme === "light" ? "dark" : "light");
  }

  function onLangChange(): void {
    const locale = currLocale === "en" ? "es" : "en";
    // @ts-expect-error
    replace({ pathname, params }, { locale });
  }

  return (
    <div className={className}>
      <Dropdown as="button" closeOnSelect={false}>
        <DropdownTrigger>
          <Button variant="bordered" isIconOnly size="sm" color="primary">
            <CaretDown size={18} fill="gray" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu variant="flat" aria-label="Web App Config Dropdown">
          <DropdownItem
            key="Lang"
            onPress={onLangChange}
            className="transition-all"
            shortcut={currLocale === "es" ? <SpainFlagIcon /> : <NortAmericanFlag />}
          >
            {t("change")}
          </DropdownItem>
          <DropdownItem
            key="Theme"
            onPress={onThemeChange}
            className="transition-all"
            shortcut={theme === "dark" ? <MoonStars size={20} fill="cyan" /> : <SunHorizon size={20} fill="#8B8000" />}
          >
            {t("changeTheme")}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
