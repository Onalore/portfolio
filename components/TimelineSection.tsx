"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import clsx from "clsx";

const experiences = [
  { key: "exp1" },
  { key: "exp2" },
  { key: "exp3" },
  { key: "exp4" },
  { key: "exp5" },
  { key: "exp6" },
];

export default function TimelineSection() {
  const t = useTranslations("timeline");
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 30%"],
  });

  const lineEnd = (experiences.length - 0.5) / experiences.length;

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, lineEnd]);

  const smoothScale = useSpring(scaleY, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  return (
    <section
      data-nav="light"
      ref={sectionRef}
      className="relative w-full bg-primary pb-40"
    >
      {/* Línea vertical */}
      <motion.div
        style={{ scaleY: smoothScale }}
        className="origin-top absolute left-[50.0%] h-full w-[2px] bg-gradient-to-b from-background via-background/80 to-background/40 z-10"
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-white title-font mt-30 relative z-20"
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

      <div className="max-w-6xl mx-auto ">
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;
          const total = experiences.length;
          const isLast = index === total - 1;

          const segment = 1 / total;
          const start = segment * index + segment * 0.6;
          const end = segment * index + segment * 1;

          const pointOpacity = useTransform(
            scrollYProgress,
            [start, end],
            [0, 1],
          );

          return (
            <motion.div
              key={exp.key}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className={clsx(
                "relative flex flex-col items-center",
                !isLast && "lg:flex-row",
                isLast
                  ? "lg:flex-column"
                  : isLeft
                    ? "lg:justify-start"
                    : "lg:justify-end",
              )}
            >
              {/* Punto */}
              <motion.div
                style={{ opacity: pointOpacity, scale: pointOpacity }}
                className="hidden lg:block absolute left-[50.1%] -translate-x-1/2 w-4 h-4 rounded-full bg-background z-20"
              />

              {/* Card */}
              <div
                className={clsx(
                  "group relative z-20",
                  "bg-black/10 hover:bg-black/25",
                  "backdrop-blur-md hover:backdrop-blur-lg",
                  "rounded-3xl",
                  "shadow-[0_25px_60px_-10px_rgba(0,0,0,0.45)] hover:shadow-[0_35px_80px_-10px_rgba(0,0,0,0.6)]",
                  "transition-all duration-500 ease-out hover:-translate-y-1",
                  "p-7 w-full lg:w-[35%] border border-white/10 hover:border-white/20",
                  isLast
                    ? "lg:justify-center mt-20 lg:w-[55%]"
                    : isLeft
                      ? "lg:justify-start pl-15 lg:ml-15  space-y-32"
                      : "lg:justify-end pr-15 lg:mr-15  space-y-32",
                )}
              >
                <h3
                  className={clsx(
                    "text-xl mb-3 text-white text-font",
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
                    "text-white leading-relaxed",
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
    </section>
  );
}
