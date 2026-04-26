"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import ProjectShowcase from "./ProjectShowcase";

const projects = [
  {
    id: 1,
    title: "Foodie",
    image: "/screen-scene-44.png",
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
    image: "/screen-scene-22.png",
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
    image: "/screen-scene-5.png",
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
    image: "/screen-scene-6.png",
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
      py-10
      overflow-hidden
      bg-background
      "
    >
      {/* RADIAL BACKGROUND BLOBS */}

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="
          absolute
          top-[-0px]
          left-[10%]
          w-[420px]
          h-[420px]
          bg-[radial-gradient(circle,rgba(255,150,170,0.35)_0%,transparent_70%)]
          blur-3xl
          "
        />

        <div
          className="
          absolute
          bottom-[60px]
          right-[0%]
          w-[520px]
          h-[420px]
          bg-[radial-gradient(circle,rgba(255,120,160,0.35)_0%,transparent_70%)]
          blur-3xl
          "
        />
      </div>

      {/* SVG LINE */}

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 1200 1800"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M1895 163.651C1708.18 514.119 1731.24 2.49992 1576.24 2.49996C1421.24 2.5 1452.24 163.652 1355.74 213.143C1259.25 262.634 1078.34 98.864 816.364 98.8656C554.39 98.8671 1023.33 917.037 1023.33 671.892C1023.33 426.747 621.308 980.775 689.017 1303.1C756.727 1625.43 608.242 1863.52 575.495 1716.73C542.748 1569.94 375.786 1696.25 231.435 1686.46C151.192 1641.85 -6.84665 1596.4 2.93381 1771.54C12.7143 1946.67 298.965 1969.61 440.868 1959.18C568.654 1932.79 728.837 1983.8 575.495 2160.95C275.824 2507.16 1480.91 2343.05 1581.77 2226.53C1650.76 2160.95 1705.95 2174.68 1650.76 2376.85C1595.57 2579.02 1682.19 2513.55 1738.95 2402.57C1762.82 2339.35 1824.1 2189.61 1839.82 2314.3"
          fill="none"
          stroke="#DABFB5"
          strokeWidth="3"
          style={{ pathLength }}
          initial={{ pathLength: 0 }}
        />
      </svg>

      {/* TITLE */}

      <div className="max-w-6xl mx-auto text-center mb-12 relative">
        <h2
          className="
          text-3xl
          tracking-[0.2em]
          text-[#6a4b4b]
          font-light
          font-title
          z-10
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
