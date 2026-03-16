"use client";
import { Agbalumo } from "next/font/google";
import { motion } from "framer-motion";

const agbalumo = Agbalumo({
  subsets: ["latin"],
  weight: "400",
});

type HeroProps = {
  heroVisible: boolean;
  setHeroVisible: (value: boolean) => void;
};

export default function Hero({ scrolled }: { scrolled: boolean }) {
  return (
    <section
      data-nav="dark"
      className="relative min-h-screen w-full overflow-hidden z-30"
    >
      {/* Imagen fondo */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/hero-texture.png"
          alt=""
          className="w-full h-full
            object-cover
            object-center"
        />
      </div>

      {/* Overlay suave para contraste */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />

      {/* Contenido */}

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[clamp(6rem,12vw,10rem)] flex items-center">
          {!scrolled && (
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
              text-[clamp(4rem,10vw,8rem)]
            `}
              >
                Ona Loré
              </h1>

              {/* Texto principal */}
              <h1
                className={`
              relative
              ${agbalumo.className}
              text-[clamp(4rem,10vw,8rem)]
              text-primary
            `}
              >
                Ona Loré
              </h1>
            </motion.div>
          )}
        </div>
        <div className="absolute bottom-39 w-full flex justify-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-primary
              text-base
              sm:text-lg
              font-normal
              leading-relaxed
              tracking-wide
              text-center
              drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
          >
            Full Stack Developer · UI/UX & Creative Tech
            <br />
            Analista de sistemas
          </motion.p>
        </div>
      </div>
    </section>
  );
}
