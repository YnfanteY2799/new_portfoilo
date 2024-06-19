"use client";
import { NortAmericanFlag, SpainFlagIcon } from "@/components";
import { type ReactNode, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function LangSwitcher(): ReactNode {
  // Hooks
  const { replace } = useRouter();
  const params = useParams();

  // State
  const [mounted, setMounted] = useState(false);

  // Consts
  const currLocale = params.locale;

  // Functions
  function onLangChange(): void {
    const locale = currLocale === "en" ? "es" : "en";
    // @ts-expect-error
    replace({ pathname, params }, { locale });
  }

  // Simulate Server Render
  useEffect(() => setMounted(true), []);

  // Inmediate Return due to non mount (Simple Client Side Validation)
  if (!mounted) return null;

  return (
    <Button variant="light" onPress={onLangChange} isIconOnly size="md" color="primary">
      {currLocale === "es" ? <SpainFlagIcon size={20} /> : <NortAmericanFlag size={20} />}
    </Button>
  );
}
