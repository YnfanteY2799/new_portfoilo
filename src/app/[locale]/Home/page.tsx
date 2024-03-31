import { AboutSection, BeamsBackground, HeroSection, FloatingNavbar } from "@/components";
import { homeSections } from "@/utils";

import type { ReactNode } from "react";

export default function Home(): ReactNode {
  return (
    <BeamsBackground>
      <HeroSection />
      <AboutSection />
      <FloatingNavbar sections={homeSections} />
    </BeamsBackground>
  );
}
