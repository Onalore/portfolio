"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-6 sm:px-12 lg:px-24">
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center">
        <motion.img
          src="/perfil.jpg"
          alt="Tu foto"
          className="w-40 h-40 rounded-full mb-6 shadow-md object-cover"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="text-4xl sm:text-5xl font-semibold text-[#1E293B]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hola, soy <span className="text-[#F4A261]">[Tu nombre]</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-lg max-w-2xl text-[#334155]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Desarrolladora web & android, diseñadora UX/UI, y amante de los
          proyectos con propósito.
        </motion.p>
      </section>

      {/* SOBRE MÍ */}
      <motion.section
        className="py-20 max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-4 text-[#1E293B]">Sobre mí</h2>
        <p className="text-[#475569] leading-relaxed">
          Soy una persona curiosa y sensible, apasionada por la tecnología, el
          diseño y el bienestar. Después de una experiencia transformadora
          trabajando en Cerdeña, decidí reconectar con mis proyectos personales
          y explorar el trabajo freelance con autenticidad y propósito.
        </p>
      </motion.section>

      {/* ENFOQUE / FILOSOFÍA */}
      <motion.section
        className="py-20 max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-4 text-[#1E293B]">
          Mi enfoque
        </h2>
        <p className="text-[#475569] leading-relaxed">
          Creo en crear soluciones digitales con alma. Mi proceso combina la
          empatía, la atención al detalle y el equilibrio entre lo técnico y lo
          humano. Escucho, imagino, construyo, refino y aprendo en cada paso.
        </p>
      </motion.section>

      {/* PROYECTOS */}
      <motion.section
        className="py-20 max-w-5xl w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-10 text-center text-[#1E293B]">
          Proyectos
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Ejemplo de proyecto */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-[#F4A261] mb-2">
              Tinder de Perritos 🐾
            </h3>
            <p className="text-[#475569]">
              App Android creada con Kotlin que permite conectar y adoptar
              mascotas. Inspirada en mi amor por los animales.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-[#F4A261] mb-2">
              ERP de Gasolina ⛽
            </h3>
            <p className="text-[#475569]">
              Proyecto React + Node.js con visualización de datos y gráficos de
              consumo, centrado en simplicidad y eficiencia.
            </p>
          </div>
        </div>
      </motion.section>

      {/* AHORA MISMO */}
      <motion.section
        className="py-20 max-w-3xl text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-4 text-[#1E293B]">
          Ahora mismo
        </h2>
        <p className="text-[#475569]">
          Actualmente en Belvedere Marittimo 🇮🇹, enfocándome en crear mi camino
          freelance, mantener una vida saludable y disfrutar del proceso.
        </p>
      </motion.section>

      {/* CONTACTO */}
      <motion.section
        className="py-20 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-4 text-[#1E293B]">Contacto</h2>
        <p className="text-[#475569] mb-6">
          Si te gustaría colaborar o saber más de mi trabajo, escribime:
        </p>
        <a
          href="mailto:tuemail@example.com"
          className="bg-[#F4A261] text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
        >
          Enviame un correo
        </a>
      </motion.section>

      <footer className="py-10 text-sm text-[#94A3B8]">
        © {new Date().getFullYear()} [Tu nombre]. Creado con ❤️ en React +
        Next.js.
      </footer>
    </main>
  );
}
