"use client";

import { Project } from "@/types/project";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  const t = useTranslations("projects");

  // ESC to close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <>
      <motion.div
        key="overlay"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 overflow-y-scroll no-scrollbar will-change-transform"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          layoutId={`card-${project.id}`}
          onClick={(e) => e.stopPropagation()}
          className="
            w-full h-full 
            lg:max-w-4xl lg:max-h-[90vh]
            overflow-y-auto
            bg-white/10 backdrop-blur-xl
            rounded-none lg:rounded-3xl
            "
          initial={{ borderRadius: 24 }}
          animate={{ borderRadius: 24 }}
          transition={{
            layout: { duration: 0.4, ease: "easeInOut" },
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 text-white text-xl opacity-70 hover:opacity-100"
          >
            <X size={28} />
          </button>

          {/* image */}
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={600}
            priority
            className="w-full h-[300px] object-cover"
          />
          <div className="p-8 text-white space-y-6">
            <h2 className="text-3xl font-title">{project.title}</h2>

            {/* tags */}
            <div className="flex flex-wrap gap-2">
              {project.techs.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* descripción */}
            <p className="opacity-90 leading-relaxed">
              {t(`${project.translationKey}.summary`)}
            </p>

            {/* secciones */}
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium mb-1">{t("myRole")}</h4>
                <p className="opacity-80">
                  {t(`${project.translationKey}.myRole`)}
                </p>
              </div>
            </div>

            {/* botones */}
            <div className="flex flex-wrap gap-4 pt-4">
              {project.buttons.map((btn) => (
                <a
                  key={btn.label}
                  href={btn.href}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className="
                    px-6 py-2 rounded-full
                    bg-white/10
                    border border-white/30
                    backdrop-blur-lg
                    text-white
                    hover:bg-white hover:text-black
                    transition-all duration-300
                    "
                >
                  {btn.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
