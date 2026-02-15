// hooks/useNavbarTheme.ts
import { useEffect, useState } from "react";

export function useNavbarTheme() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-theme='dark']");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsLight(true);
          else setIsLight(false);
        });
      },
      { threshold: 0.3 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return isLight;
}
