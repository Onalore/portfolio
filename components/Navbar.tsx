import Link from "next/link";

export const Navbar = () => (
  <nav className="w-full bg-white shadow-sm py-4">
    <div className="max-w-5xl mx-auto flex justify-between items-center px-6">
      <Link href="/" className="font-bold text-xl text-indigo-600">
        MiPortfolio
      </Link>
      <div className="space-x-6">
        <Link href="/">Inicio</Link>
        <Link href="/projects">Proyectos</Link>
        <Link href="/about">Sobre mí</Link>
        <Link href="/contact">Contacto</Link>
      </div>
    </div>
  </nav>
);
