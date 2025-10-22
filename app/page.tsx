import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="text-center mt-20">
      <Image
        src="/profile.jpg"
        alt="Foto de perfil"
        width={140}
        height={140}
        className="rounded-full mx-auto mb-6 shadow-md"
      />
      <h1 className="text-4xl font-bold mb-3">¡Hola! Soy [Tu Nombre]</h1>
      <p className="text-gray-600 text-lg mb-6">
        Desarrolladora web enfocada en construir experiencias simples, limpias y funcionales.
      </p>
      <div className="space-x-4">
        <Link href="/projects" className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
          Ver proyectos
        </Link>
        <Link href="/contact" className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg">
          Contacto
        </Link>
      </div>
    </section>
  );
}
