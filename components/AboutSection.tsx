"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const MotionImage = motion(Image);

export default function AboutSection() {
  const t = useTranslations("about");
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.97, 1],
    [1, 1, 1, 0],
  );

  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <>
      {/* Imagen */}
      <section
        id="about"
        data-nav="dark"
        ref={sectionRef}
        className="relative w-full min-h-[92vh] bg-primary"
      >
        {/* Imagen fija */}
        <motion.div
          style={{ scale, opacity }}
          className="
            fixed
            top-0
            left-0
            h-screen
            w-1/2
            z-0
            hidden lg:block
            "
        >
          <Image
            src="/about-photo.jpeg"
            alt="Ona Loré en Italia"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Layout real */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2">
          {/* Columna izquierda vacía para reservar espacio */}
          <div className="hidden lg:block" />

          {/* Columna derecha con texto */}
          <div className="bg-background px-12 py-32">
            <div className="flex items-center">
              <div className="px-10 py-24 max-w-xl">
                <motion.h2
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-4xl font-light tracking-wide mb-8 text-primary title-font"
                >
                  {t("title")}
                </motion.h2>

                {["p1", "p2", "p3"].map((key, i) => (
                  <motion.p
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-black"
                  >
                    {t(`paragraphs.${key}`)}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
