"use client";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { useRouter, usePathname } from "@/utils";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useTheme } from "next-themes";

import type { ICDSProps } from "@/types";
import type { ReactNode } from "react";
import { NortAmericanFlag, SpainFlagIcon } from "@/components";

export default function ConfigDropdownsSwitchers({ className }: ICDSProps): ReactNode {
  // Hooks
  const t = useTranslations("Dropdown");
  const { theme, setTheme } = useTheme();
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
      <Dropdown as="button">
        <DropdownTrigger>
          <Button variant="flat" isIconOnly size="sm" color="primary">
            <CaretDown size={18} fill="gray" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu variant="flat" aria-label="Web App Config Dropdown">
          <DropdownItem
            key="Lang"
            onPress={onLangChange}
            shortcut={currLocale === "es" ? <SpainFlagIcon /> : <NortAmericanFlag />}
          >
            {t("change")}
          </DropdownItem>
          <DropdownItem key="Theme" shortcut="⌘ + SHIFT + L" onPress={onThemeChange}>
            {t("changeTheme")}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
