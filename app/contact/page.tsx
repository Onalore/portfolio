"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Enviando...");

    // Aquí luego integras EmailJS o tu propio endpoint
    setTimeout(() => setStatus("¡Mensaje enviado con éxito!"), 1500);
  };

  return (
    <section className="max-w-md mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Contacto</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Tu nombre"
          required
          className="w-full border rounded-lg p-2"
        />
        <input
          type="email"
          placeholder="Tu correo"
          required
          className="w-full border rounded-lg p-2"
        />
        <textarea
          placeholder="Tu mensaje"
          rows={5}
          required
          className="w-full border rounded-lg p-2"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
        >
          Enviar
        </button>
        <p className="text-sm text-gray-600">{status}</p>
      </form>
    </section>
  );
}
