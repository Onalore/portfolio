"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTransition } from "react";

const locales = ["es", "en", "it"];

export default function LanguageDropdown() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const currentLocale = pathname.split("/")[1] || "es";

  function changeLocale(newLocale: string) {
    const segments = pathname.split("/");
    segments[1] = newLocale;

    startTransition(() => {
      router.push(segments.join("/"));
    });

    setIsOpen(false);
  }

  return (
    <div className="relative">
      {/* Botón */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex items-center gap-2
          text-primary
          px-4 py-1.5
          text-sm tracking-wide
          transition-all duration-300
        "
      >
        <span className="uppercase">{currentLocale}</span>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={16} strokeWidth={1.5} />
        </motion.div>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="
              absolute right-0 mt-3
              w-14
              rounded-2xl
              backdrop-blur-xl
              bg-black/10
              shadow-lg
              overflow-hidden
            "
          >
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => changeLocale(locale)}
                className="
                  w-full
                  px-4 py-2
                  text-sm
                  uppercase
                  hover:bg-primary/20
                  transition-colors
                "
              >
                {locale}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
