"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
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
    offset: ["start 80%", "end 60%"],
  });

  const lineEnd = (experiences.length - 0.5) / experiences.length;

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 0.85]);

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
        className="origin-top absolute  -translate-x-1/2 left-[50.0%] h-full w-[2px] bg-gradient-to-b from-background via-background/80 to-background/40 z-10"
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

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 auto-rows-[minmax(80px,auto)] gap-x-12 gap-y-8 items-start">
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
                "relative",
                isLast
                  ? "lg:col-span-2 flex justify-center"
                  : isLeft
                    ? "lg:col-start-1 flex justify-end pr-12"
                    : "lg:col-start-2 flex justify-start pl-12 lg:translate-y-20 gap-y-10",
              )}
            >
              {/* Punto */}
              <motion.div
                style={{ opacity: pointOpacity, scale: pointOpacity }}
                className={clsx(
                  "hidden lg:block absolute",
                  "left-[50.1%] -translate-x-1/2",
                  isLast
                    ? "top-0 -translate-y-1/2"
                    : "top-1/2 -translate-y-1/2",
                  "w-4 h-4 rounded-full bg-background z-20",
                )}
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
                  "p-7 w-full hover:border-white/20",
                  isLast
                    ? "lg:justify-center mt-50 lg:w-[55%]"
                    : isLeft
                      ? "lg:justify-start pl-15 lg:ml-5"
                      : "lg:justify-end pr-15 lg:mr-5",

                  index === 0 && "lg:w-[100%]",
                  index === 1 && "lg:w-[85%]",
                  index === 2 && "lg:w-[75%]",
                  index === 3 && "lg:w-[75%] lg:top-20",
                  index === 4 && "lg:w-[85%]",
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
