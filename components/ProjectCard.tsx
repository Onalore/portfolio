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
      className="cursor-pointer group relative lg:rounded-3xl overflow-hidden will-change-transform"
      initial={{ borderRadius: 24 }}
      animate={{ borderRadius: 24 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-[300px] object-cover transition duration-700 group-hover:scale-105"
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
