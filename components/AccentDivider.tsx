"use client";

import { motion } from "framer-motion";

export default function AccentDivider() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      className="origin-left w-full h-[6px] bg-accent"
    />
  );
}
