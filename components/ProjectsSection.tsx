"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import clsx from "clsx";

const projects = [
  {
    title: "ERP",
    description:
      "Este Conseguí mi primer trabajo IT. Trabajé en: diseño de interfaces (UI), sitios web en React y WordPress, apps Android en Kotlin, mantenimiento de sistemas en C#",
    image: "/project1.png",
  },
  {
    title: "Petinder App",
    description:
      "Aplicación mobile para adopción de mascotas con backend en Node y frontend en React Native.",
    image: "/project2.png",
  },
  {
    title: "Foodie App",
    description:
      "Aplicación de recetas con sistema de favoritos y recomendaciones personalizadas.",
    image: "/project3.png",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="
      relative
      w-full
      py-40
      overflow-hidden
      bg-[linear-gradient(to_bottom,#8e2c2c_0%,#d8c9bd_20%,#d8c9bd_100%)]
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
        "
        >
          SOME PROJECTS
        </h2>
      </div>

      {/* PROJECTS */}

      <div className="max-w-6xl mx-auto flex flex-col gap-32">
        {projects.map((project, index) => {
          const reverse = index % 2 === 1;

          return (
            <div
              key={index}
              className={clsx(
                "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
                reverse && "lg:[&>*:first-child]:order-2",
              )}
            >
              {/* IMAGE CARD */}

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="
                relative
                rounded-3xl
                overflow-hidden
                bg-white/40
                backdrop-blur-xl
                shadow-[0_25px_60px_rgba(0,0,0,0.25)]
                "
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={900}
                  height={600}
                  className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                  "
                />
              </motion.div>

              {/* INFO CARD */}

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* shadow border */}

                <div
                  className="
                  absolute
                  inset-0
                  translate-x-3
                  translate-y-3
                  rounded-3xl
                  border
                  border-[#7c4c4c]
                  "
                />

                {/* card */}

                <div
                  className="
                  relative
                  rounded-3xl
                  p-10
                  bg-[#e8d8cd]
                  shadow-[0_20px_60px_rgba(0,0,0,0.2)]
                  "
                >
                  <h3
                    className="
                  text-xl
                  tracking-wide
                  mb-4
                  text-[#5a3c3c]
                  "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                  text-[#5a3c3c]
                  leading-relaxed
                  mb-8
                  "
                  >
                    {project.description}
                  </p>

                  {/* BUTTONS */}

                  <div className="flex gap-4 flex-wrap">
                    <button
                      className="
                    px-6
                    py-3
                    rounded-full
                    border
                    border-[#7d4f4f]
                    text-[#7d4f4f]
                    transition
                    hover:bg-[#7d4f4f]
                    hover:text-white
                    "
                    >
                      REPOSITORIO FRONT
                    </button>

                    <button
                      className="
                    px-6
                    py-3
                    rounded-full
                    border
                    border-[#7d4f4f]
                    bg-[#f2e6dc]
                    text-[#7d4f4f]
                    transition
                    hover:bg-[#7d4f4f]
                    hover:text-white
                    "
                    >
                      REPOSITORIO BACK
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
