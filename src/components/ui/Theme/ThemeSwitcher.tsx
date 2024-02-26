"use client";

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { type ReactNode, useEffect, useState } from "react";

export default function ThemeSwitcher(): ReactNode {
  // Hooks
  const { theme, setTheme } = useTheme();

  // State
  const [mounted, setMounted] = useState(false);

  // Simulate Server Render
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Button variant="bordered" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme}
    </Button>
  );
}
