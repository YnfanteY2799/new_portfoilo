"use client";
import { MoonStars, SunHorizon } from "@phosphor-icons/react";
import { type ReactNode, useEffect, useState } from "react";
import { Button } from "@heroui/react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher(): ReactNode {
  // Hooks
  const { theme, setTheme } = useTheme();

  // State
  const [mounted, setMounted] = useState(false);

  // Functions
  function handleToggle() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  // Simulate Server Render
  useEffect(() => setMounted(true), []);

  // Inmediate Return due to non mount (Simple Client Side Validation)
  if (!mounted) return null;

  return (
    <Button variant="light" onPress={handleToggle} isIconOnly size="md" color="primary">
      {theme === "light" ? <SunHorizon fill="#8B8000" size={20} /> : <MoonStars fill="cyan" size={20} />}
    </Button>
  );
}
