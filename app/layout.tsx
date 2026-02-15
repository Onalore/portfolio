import "./globals.css";
import Navbar from "@/components/Navbar";
import { LayoutGroup } from "framer-motion";

export const metadata = {
  title: "Portfolio | Tu Nombre",
  description: "Portfolio personal creado con Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-800">{children}</body>
    </html>
  );
}
