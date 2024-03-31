import { homeSections } from "@/utils";
import {
  ExperienceSection,
  TechStacksSection,
  BeamsBackground,
  ProjectsSection,
  FloatingNavbar,
  ContactSection,
  AboutSection,
  HeroSection,
} from "@/components";

import type { ReactNode } from "react";

export default function Home(): ReactNode {
  return (
    <BeamsBackground>
      <HeroSection />
      <AboutSection />
      <TechStacksSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <FloatingNavbar sections={homeSections} />
    </BeamsBackground>
  );
}
