"use client";

import { useNavbarTheme } from "@/hooks/useNavbarTheme";
import { motion, useScroll } from "framer-motion";
import clsx from "clsx";
import { Agbalumo } from "next/font/google";
import LanguageDropdown from "./LanguageDropdown";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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

  const [menuOpen, setMenuOpen] = useState(false);

  // Progress bar
  const { scrollYProgress } = useScroll();

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // 👈 cierra menu mobile
  };

  const links = [
    { id: "about", label: t("about") },
    { id: "projects", label: t("projects") },
    { id: "contact", label: t("contact") },
  ];

  return (
    <>
      {/* Progress indicator */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[60]"
      />
      <nav
        className={clsx(
          "fixed top-0 left-0 w-full z-50 h-[55px] px-6 transition-all duration-500",
          "flex items-center justify-between",
          "lg:grid lg:grid-cols-3 lg:px-8",
          navScrolled && !menuOpen
            ? "bg-background/10 backdrop-blur-md shadow-sm"
            : "bg-transparent",
          navMode === "light" || menuOpen ? "text-white" : "text-primary",
        )}
      >
        {/* LOGO */}
        <div className="flex items-center">
          {scrolled && (
            <motion.div>
              <motion.h1
                className={clsx(
                  agbalumo.className,
                  "absolute inset-0",
                  "text-[clamp(1.5rem,5vw,3rem)] lg:text-[clamp(1rem,2vw,4rem)]",
                )}
                animate={{
                  color: "rgba(255,255,255,0.25)",
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

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex justify-center">
          <ul className="flex gap-8 text-sm uppercase tracking-widest font-title">
            {links.map((link) => (
              <li
                key={link.id}
                className="relative cursor-pointer group"
                onClick={() => handleScrollTo(link.id)}
              >
                {link.label}

                {/* underline animado */}
                <span
                  className="
                    absolute left-0 -bottom-1 h-[2px] w-0
                    bg-current
                    transition-all duration-300
                    group-hover:w-full
                  "
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-end gap-4">
          <div className="flex items-center justify-end">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden z-50"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <div className="hidden lg:block">
              <LanguageDropdown navMode={navMode} />
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: menuOpen ? 1 : 0,
          y: menuOpen ? 0 : -20,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="
        fixed top-0 left-0 w-full h-screen
        bg-primary text-white
        flex flex-col items-center justify-center gap-10
        z-40
        "
      >
        {links.map((link) => (
          <div
            key={link.id}
            onClick={() => handleScrollTo(link.id)}
            className="text-2xl font-title cursor-pointer"
          >
            {link.label}
          </div>
        ))}

        <div className="w-12 h-[1px] bg-white/20 my-6" />

        <LanguageDropdown navMode="light" />
      </motion.div>
    </>
  );
}
