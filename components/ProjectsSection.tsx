"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import ProjectShowcase from "./ProjectShowcase";

const projects = [
  {
    id: 1,
    title: "Foodie",
    image: "/screen-scene.jpg",
    translationKey: "foodie",
    techs: [
      "Kotlin",
      "Node.js",
      "Express",
      "Gemini AI",
      "Firebase",
      "Sequelize",
      "MySQL",
    ],
    buttons: [
      {
        label: "Mockup",
        href: "https://xd.adobe.com/view/eb3ead16-7c9e-46fc-b5de-95b32473ca8d-be6d/",
      },
      { label: "Frontend", href: "https://github.com/Onalore/Foodie-Frontend" },
      {
        label: "Backend",
        href: "https://github.com/Mauropestarino/Foodie-back",
      },
    ],
  },
  {
    id: 2,
    title: "Petinder",
    image: "/screen-scene.jpg",
    translationKey: "petinder",
    techs: [
      "React Native",
      "Expo",
      "Firebase",
      "Maps",
      "Node.js",
      "Express",
      "Sequelize",
      "Firebase",
      "Sequelize",
      "MySQL",
    ],
    buttons: [
      {
        label: "Mockup",
        href: "https://xd.adobe.com/view/eb3ead16-7c9e-46fc-b5de-95b32473ca8d-be6d/",
      },
      {
        label: "Frontend",
        href: "https://github.com/Onalore/PNT2_petinder_frontend",
      },
      {
        label: "Backend",
        href: "https://github.com/Onalore/TP2_petinder_backend",
      },
    ],
  },
  {
    id: 3,
    title: "ERP",
    image: "/screen-scene.jpg",
    translationKey: "erp",
    techs: ["C#", ".NET", "ASP.NET MVC", "SQL Server"],
    buttons: [
      {
        label: "Live Demo",
        href: "",
      },
      {
        label: "GitHub",
        href: "https://github.com/marianolongoort/NT1-2023-1C-C-G4",
      },
    ],
  },
  {
    id: 4,
    title: "Personal Page",
    image: "/screen-scene.jpg",
    translationKey: "personalPage",
    techs: [
      "Next.js",
      "Typescript",
      "Tailwind",
      "Framer Motion",
      "responsive-first",
    ],
    buttons: [
      {
        label: "Mockup",
        href: "https://www.figma.com/proto/rrl80pIfREJ8l3NU80z07G/Personal-page?page-id=0%3A1&node-id=126-664&viewport=-3435%2C206%2C0.32&t=JqLZLDgXhYUkO6cP-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=126%3A664",
      },
    ],
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("projects");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="projects"
      data-nav="dark"
      ref={sectionRef}
      className="
      relative
      w-full
      py-40
      overflow-hidden
      bg-[linear-gradient(to_bottom,#9d182b_0%,#f2e0d2_10%,#f2e0d2_100%)]
      "
    >
      {/* RADIAL BACKGROUND BLOBS */}

      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="
          absolute
          top-[-200px]
          left-[10%]
          w-[600px]
          h-[600px]
          bg-[radial-gradient(circle,rgba(255,150,170,0.35)_0%,transparent_70%)]
          blur-3xl
          "
        />

        <div
          className="
          absolute
          bottom-[-150px]
          right-[5%]
          w-[500px]
          h-[500px]
          bg-[radial-gradient(circle,rgba(255,120,160,0.35)_0%,transparent_70%)]
          blur-3xl
          "
        />
      </div>

      {/* SVG LINE */}

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none -z-10"
        viewBox="0 0 1200 1800"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M1100 0 
             C900 200 1000 400 800 600
             C600 800 900 1000 700 1200
             C500 1400 900 1600 700 1800"
          fill="none"
          stroke="#d4a96a"
          strokeWidth="3"
          style={{ pathLength }}
          initial={{ pathLength: 0 }}
        />
      </svg>

      {/* TITLE */}

      <div className="max-w-6xl mx-auto text-center mb-32">
        <h2
          className="
          text-3xl
          tracking-[0.2em]
          text-[#6a4b4b]
          font-light
          font-title
          "
        >
          {t("title")}
        </h2>
      </div>

      {/* PROJECTS */}

      <div className="max-w-6xl mx-auto">
        <ProjectShowcase projects={projects} />
      </div>
    </section>
  );
}
