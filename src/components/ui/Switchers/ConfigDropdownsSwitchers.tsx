"use client";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";

import type { ReactNode } from "react";

export default function ConfigDropdownsSwitchers(): ReactNode {
  // Hooks
  const t = useTranslations("Dropdown");

  return (
    <Dropdown as="button">
      <DropdownTrigger>
        <Button variant="flat" isIconOnly size="sm" color="primary" className="mt-1">
          <CaretDown size={18} fill="gray" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="flat" aria-label="Web App Config Dropdown">
        <DropdownItem key="new" shortcut="⌘ + SHIFT + L">
          {t("change")}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
