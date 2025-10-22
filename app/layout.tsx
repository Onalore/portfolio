import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "Portfolio | Tu Nombre",
  description: "Portfolio personal creado con Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-800">
        <Navbar />
        <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
