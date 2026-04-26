import clsx from "clsx";

export default function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "relative rounded-[28px] p-10",
        "bg-white/10 backdrop-blur-xl",
        "border border-white/20",
        "shadow-[0_20px_60px_rgba(0,0,0,0.25)]",
        "overflow-hidden",
        className,
      )}
    >
      {/* gradiente interno sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-40 pointer-events-none" />

      {children}
    </div>
  );
}
