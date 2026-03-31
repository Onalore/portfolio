"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef, useLayoutEffect, useState, useEffect } from "react";
import clsx from "clsx";
import { Aboreto, Work_Sans } from "next/font/google";
import useMediaQuery from "@mui/material/useMediaQuery";

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-aboreto",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

const experiences = [
  { key: "exp1" },
  { key: "exp2" },
  { key: "exp3" },
  { key: "exp4" },
  { key: "exp5" },
  { key: "exp6" },
];

const LAST_POINT_OFFSET_DESKTOP = 80;
const LAST_POINT_OFFSET_MOBILE = 120;

export default function TimelineSection() {
  const t = useTranslations("timeline");
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [pointPositions, setPointPositions] = useState<number[]>([]);
  const [lineHeight, setLineHeight] = useState(0);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const calculatePositions = () => {
    if (!sectionRef.current) return;

    const sectionRect = sectionRef.current.getBoundingClientRect();

    const positions = cardRefs.current.map((card) => {
      if (!card) return 0;

      const rect = card.getBoundingClientRect();

      return rect.top - sectionRect.top + 24;
    });

    setPointPositions(positions);
  };

  useLayoutEffect(() => {
    calculatePositions();

    const resizeObserver = new ResizeObserver(calculatePositions);

    if (sectionRef.current) {
      resizeObserver.observe(sectionRef.current);
    }

    window.addEventListener("resize", calculatePositions);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", calculatePositions);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      calculatePositions();

      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top + window.scrollY;

      const startOffset = window.innerHeight * 0.5;
      const rawProgress = window.scrollY - sectionTop + startOffset;

      const maxHeight =
        pointPositions.length > 0
          ? pointPositions[pointPositions.length - 1] -
            (isMobile ? LAST_POINT_OFFSET_MOBILE : LAST_POINT_OFFSET_DESKTOP)
          : 0;

      const clamped = Math.max(0, Math.min(rawProgress, maxHeight));

      setLineHeight(clamped);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pointPositions]);

  return (
    <section
      id="timeline"
      data-nav="light"
      ref={sectionRef}
      className="relative w-full bg-primary pb-40"
    >
      {/* Línea vertical */}
      <motion.div
        style={{ height: lineHeight }}
        className="
          origin-top absolute
          left-1/2 
          -translate-x-1/2
          w-[2px]
          bg-gradient-to-b from-background via-background/80 to-background/40
          z-10
        "
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ marginTop: 60 }}
        className="text-center text-white font-title mb-10 relative z-20"
      >
        <div className="bg-primary px-8 py-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-light tracking-wide">
            {t("title")}
          </h2>

          <p className="text-lg sm:text-xl font-light opacity-80">
            {t("subtitle")}
          </p>
        </div>
      </motion.div>

      {pointPositions.map((top, index) => {
        const isLast = index === pointPositions.length - 1;
        const isVisible =
          lineHeight >=
          top -
            (isMobile ? LAST_POINT_OFFSET_MOBILE : LAST_POINT_OFFSET_DESKTOP);

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0, x: "-50%" }}
            animate={
              isVisible ? { opacity: 1, scale: 1, x: "-50%" } : { x: "-50%" }
            }
            transition={{ duration: 0.4 }}
            className="
              absolute 
              left-1/2
              w-4 h-4 rounded-full
              bg-background
              z-20
              shadow-[0_4px_20px_rgba(0,0,0,0.7)]
            "
            style={{
              top: !isMobile && isLast ? top - LAST_POINT_OFFSET_DESKTOP : top,
            }}
          />
        );
      })}

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 auto-rows-[minmax(80px,auto)] lg:gap-y-4 gap-y-14 items-start">
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;
          const total = experiences.length;
          const isLast = index === total - 1;

          return (
            <motion.div
              key={exp.key}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className={clsx(
                "relative flex px-5",
                isLast
                  ? "lg:col-span-2 flex justify-center"
                  : isLeft
                    ? "lg:col-start-1 flex justify-end"
                    : "lg:col-start-2 flex justify-start",
              )}
            >
              {/* Card */}
              <div
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={clsx(
                  "group relative z-20",
                  "bg-black/10",
                  "backdrop-blur-md transform-gpu will-change-transform",
                  "rounded-3xl",
                  "shadow-[0_25px_60px_-10px_rgba(0,0,0,0.45)] hover:shadow-[0_35px_80px_-10px_rgba(0,0,0,0.6)]",
                  "transition-all duration-500 ease-out",
                  "p-7 w-full",
                  activeCard === index &&
                    "bg-black/25 backdrop-blur-lg -translate-y-1",
                  "hover:bg-black/25 hover:backdrop-blur hover:-translate-y-1",
                  isLast
                    ? "lg:justify-center lg:mt-10 lg:w-[55%]"
                    : isLeft
                      ? "lg:justify-start lg:pl-15 lg:ml-5 lg:mr-8"
                      : "lg:justify-end lg:pr-15 lg:mr-5 lg:ml-8",

                  index === 0 && "lg:w-[100%]",
                  index === 1 && "lg:w-[85%] lg:top-20",
                  index === 2 && "lg:w-[75%]",
                  index === 3 && "lg:w-[75%] lg:top-40",
                  index === 4 && "lg:w-[85%]",
                )}
              >
                <h3
                  className={clsx(
                    "text-xl mb-3 text-white font-text",
                    isLast
                      ? "lg:text-center"
                      : isLeft
                        ? "lg:text-end"
                        : "lg:text-start",
                  )}
                >
                  {t(`${exp.key}.title`)}
                </h3>
                <p
                  className={clsx(
                    "text-white leading-relaxed font-text",
                    isLast
                      ? "lg:text-center"
                      : isLeft
                        ? "lg:text-end"
                        : "lg:text-start",
                  )}
                >
                  {t(`${exp.key}.description`)}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ staggerChildren: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 w-full"
      >
        {[1, 2, 3].map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="group relative rounded-2xl overflow-hidden"
          >
            <Image
              src={`/timeline-${i + 1}.jpg`}
              alt=""
              width={500}
              height={500}
              className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-500" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
