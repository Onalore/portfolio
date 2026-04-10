"use client";

import AboutSection from "@/components/AboutSection";
import AccentDivider from "@/components/AccentDivider";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
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
        <ContactSection />
        <Footer />
      </main>
    </LayoutGroup>
  );
}
