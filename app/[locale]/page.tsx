"use client";

import AboutSection from "@/components/AboutSection";
import AccentDivider from "@/components/AccentDivider";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import TimelineSection from "@/components/TimelineSection";
import {
  motion,
  LayoutGroup,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 100);
    setNavScrolled(latest > 350);
  });

  return (
    <LayoutGroup>
      <Navbar scrolled={scrolled} navScrolled={navScrolled} />
      <main className="flex flex-col items-center">
        <Hero scrolled={scrolled} />
        <AccentDivider />
        <AboutSection />
        <TimelineSection />
        <ProjectsSection />

        <footer className="py-10 text-sm text-[#94A3B8]">
          © {new Date().getFullYear()} Ona Loré. Creado con ❤️ en React +
          Next.js.
        </footer>
      </main>
    </LayoutGroup>
  );
}
