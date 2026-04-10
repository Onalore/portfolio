"use client";

import { motion } from "framer-motion";
import { Mail, Download, Linkedin, MessageCircle } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  const contacts = [
    {
      label: "WhatsApp",
      value: "Chat directo",
      icon: MessageCircle,
      href: "https://wa.me/393508219639",
      primary: true,
    },
    {
      label: "Email",
      value: "Enviar correo",
      icon: Mail,
      href: "mailto:ona.lore5@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "Perfil profesional",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/ona-lore/",
    },
    {
      label: "CV",
      value: "Descargar CV",
      icon: Download,
      href: "/cv.pdf",
    },
  ];

  return (
    <section
      id="contact"
      data-nav="dark"
      className="relative py-40 px-6 bg-background overflow-hidden w-full"
    >
      <div className="max-w-6xl mx-auto lg:px-20">
        {/* title */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-title mb-4">
            Let's build something together
          </h2>

          <p className="opacity-70 max-w-xl mx-auto">
            Disponible para proyectos freelance, colaboraciones o posiciones
            frontend / UI.
          </p>
        </motion.div>

        {/* cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                download={item.label === "CV"}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="
                group relative
                p-8 rounded-3xl
                bg-white/40
                backdrop-blur-xl
                border border-white/50
                shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                transition-all duration-500
                hover:-translate-y-1
                "
              >
                {/* glow */}

                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                </div>

                <Icon className="mb-4" size={26} />

                <h3 className="text-lg mb-1">{item.label}</h3>

                <p className="text-sm opacity-70">{item.value}</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
