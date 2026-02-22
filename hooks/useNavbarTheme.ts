// hooks/useNavbarTheme.ts
import { useEffect, useState } from "react";

export function useNavbarTheme() {
  const [navMode, setNavMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-nav]");

    const observer = new IntersectionObserver(
      (entries) => {
        // Buscamos la sección más visible
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          const value = visibleSection.target.getAttribute("data-nav") as
            | "light"
            | "dark";

          setNavMode(value);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return navMode;
}
