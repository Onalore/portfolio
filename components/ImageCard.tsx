"use client";

import Image from "next/image";
import clsx from "clsx";
import { useParallaxTilt } from "@/hooks/useParallaxTilt";

export default function ImageCard({
  src,
  alt = "",
  className,
}: {
  src: string;
  alt?: string;
  className?: string;
}) {
  const tilt = useParallaxTilt();

  return (
    <div
      {...tilt}
      style={tilt.style}
      className={clsx(
        "relative rounded-[28px]",
        "transition-transform duration-300 ease-out",
        "will-change-transform",
        className,
      )}
    >
      {/* sombra base (profundidad) */}
      <div
        className="
          absolute inset-0 rounded-[28px]
          shadow-[0_30px_80px_rgba(0,0,0,0.35)]
        "
      />

      {/* glow sutil */}
      <div
        className="
          absolute inset-0 rounded-[28px]
          opacity-0 group-hover:opacity-100
          transition duration-500
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]
          pointer-events-none
        "
      />

      {/* imagen */}
      <div className="relative overflow-hidden rounded-[28px] group">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={600}
          className="
            w-full h-full object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-105
          "
        />

        {/* overlay oscuro elegante */}
        <div
          className="
            absolute inset-0
            bg-black/10
            group-hover:bg-black/30
            transition duration-500
          "
        />
      </div>
    </div>
  );
}
