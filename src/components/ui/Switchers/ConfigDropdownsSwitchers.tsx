"use client";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import type { ICDSProps } from "@/types";
import type { ReactNode } from "react";

export default function ConfigDropdownsSwitchers({ className }: ICDSProps): ReactNode {
  // Hooks
  const t = useTranslations("Dropdown");
  const { theme, setTheme } = useTheme();

  // Functions
  function onThemeChange() {
    setTheme(theme === "light" ? "dark" : "light");
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
          <DropdownItem key="Lang">{t("change")}</DropdownItem>
          <DropdownItem key="Theme" shortcut="⌘ + SHIFT + L" onPress={onThemeChange}>
            {t("changeTheme")}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
