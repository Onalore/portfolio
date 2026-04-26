"use client";

import { motion } from "framer-motion";
import { Project } from "@/types/project";
import { useTranslations } from "next-intl";

type ProjectCardProps = {
  project: Project;
  onClick: () => void;
};

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const t = useTranslations("projects");

  return (
    <motion.div
      layoutId={`card-${project.id}`}
      onClick={onClick}
      className="
    w-full max-w-[540px] mx-auto
    h-[280px] sm:h-[320px] lg:h-[300px]
    relative overflow-hidden
    cursor-pointer group
    rounded-2xl lg:rounded-3xl
  "
    >
      <img
        src={project.image}
        alt={project.title}
        className="
      absolute inset-0
      w-full h-full
      object-cover
      scale-[1.15]
      transition duration-700
      group-hover:scale-[1.22]
    "
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/50" />

      {/* contenido */}
      <div className="absolute bottom-0 p-6 text-white">
        <h3 className="text-xl font-title">{project.title}</h3>
        <p className="text-sm opacity-80">
          {t(`${project.translationKey}.description`)}
        </p>
      </div>
    </motion.div>
  );
}
