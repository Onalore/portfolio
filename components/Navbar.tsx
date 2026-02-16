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

export default function Navbar({ scrolled }: { scrolled: boolean }) {
  const isLight = useNavbarTheme();
  const t = useTranslations("navbar");

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full z-50 h-[72px]",
        "grid grid-cols-3 items-center px-8",
        "transition-colors duration-300",
        isLight ? "text-primary" : "text-primary",
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
            {/* Texto base blanca */}
            <h1
              className={`
                      absolute inset-0
                      translate-x-1 translate-y-1
                      text-white
                      opacity-80
                      pointer-events-none
                      ${agbalumo.className}
                      text-[clamp(1rem,2vw,4rem)]
                    `}
            >
              Ona Loré
            </h1>

            {/* Texto principal */}
            <h1
              className={`
                      relative
                      ${agbalumo.className}
                      text-[clamp(1rem,2vw,4rem)]
                      text-primary
                    `}
            >
              Ona Loré
            </h1>
          </motion.div>
        )}
      </div>
      <div className="flex items-center h-full justify-center">
        <ul className="flex gap-8 text-sm uppercase tracking-widest text-primary">
          <li>{t("about")}</li>
          <li>{t("projects")}</li>
          <li>{t("contact")}</li>
        </ul>
      </div>

      <div className="flex items-center h-full justify-end">
        <LanguageDropdown />
      </div>
    </nav>
  );
}
