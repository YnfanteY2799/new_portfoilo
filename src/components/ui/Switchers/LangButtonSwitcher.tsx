"use client";
import { NortAmericanFlag, SpainFlagIcon } from "@/components";
import { usePathname, useRouter } from "@/utils";
import { useParams } from "next/navigation";
import { Button } from "@heroui/react";

import type { ReactNode } from "react";

export default function LangSwitcher(): ReactNode {
  // Hooks
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = useParams();

  // Consts
  const currLocale = params.locale;

  // Functions
  function onLangChange(): void {
    const locale = currLocale === "en" ? "es" : "en";
    // @ts-expect-error
    replace({ pathname, params }, { locale });
  }

  return (
    <Button variant="light" onPress={onLangChange} isIconOnly size="md" color="primary">
      {currLocale === "es" ? <SpainFlagIcon size={20} /> : <NortAmericanFlag size={20} />}
    </Button>
  );
}
