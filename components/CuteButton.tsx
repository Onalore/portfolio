import clsx from "clsx";

export default function CuteButton({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <button
      className={clsx(
        "px-8 py-3 rounded-full text-sm tracking-wide transition-all duration-300",
        "border",
        "backdrop-blur-md",
        "hover:scale-[1.03]",
        variant === "primary"
          ? "bg-primary/20 border-primary text-primary hover:bg-primary/30"
          : "bg-white/20 border-white/40 text-white hover:bg-white/30",
      )}
    >
      {children}
    </button>
  );
}
