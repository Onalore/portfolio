"use client";

import { useNavbarTheme } from "@/hooks/useNavbarTheme";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Agbalumo } from "next/font/google";
import LanguageDropdown from "./LanguageDropdown";
import { useTranslations } from "next-intl";

const agbalumo = Agbalumo({
  subsets: ["latin"],
  weight: "400",
});

export default function Navbar({
  scrolled,
  navScrolled,
}: {
  scrolled: boolean;
  navScrolled: boolean;
}) {
  const t = useTranslations("navbar");

  const navMode = useNavbarTheme();

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full z-50 h-[55px] grid grid-cols-3 items-center px-8 transition-all duration-500",
        navScrolled
          ? "bg-background/10 backdrop-blur-md shadow-sm"
          : "bg-transparent",
        navMode === "light" ? "text-white" : "text-primary",
      )}
    >
      <div className="w-[160px] flex h-full items-center">
        {scrolled && (
          <motion.div
            layoutId="main-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative inline-block"
          >
            {/* Capa sombra / profundidad */}
            <motion.h1
              className={clsx(
                "absolute inset-0 pointer-events-none",
                agbalumo.className,
                "text-[clamp(1rem,2vw,4rem)]",
              )}
              animate={{
                color: "rgba(255,255,255,0.25)",
              }}
              style={{
                transform: "translate(1px, 1px)",
                filter: "blur(0.5px)",
              }}
            >
              Ona Loré
            </motion.h1>

            {/* Texto principal */}
            <motion.h1
              className={clsx(
                "relative",
                agbalumo.className,
                "text-[clamp(1rem,2vw,4rem)] transition-all duration-500",
              )}
              animate={{
                color: navMode === "light" ? "#ffffff" : "#9d182b",
                textShadow:
                  navMode === "light"
                    ? "0 2px 8px rgba(0,0,0,0.35)"
                    : "0 2px 6px rgba(0,0,0,0.15)",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              Ona Loré
            </motion.h1>
          </motion.div>
        )}
      </div>
      <div className="flex items-center h-full justify-center">
        <ul className="flex gap-8 text-sm uppercase tracking-widest font-title">
          <li>{t("about")}</li>
          <li>{t("projects")}</li>
          <li>{t("contact")}</li>
        </ul>
      </div>

      <div className="flex items-center h-full justify-end">
        <LanguageDropdown navMode={navMode} />
      </div>
    </nav>
  );
}
