import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    title: "Mi App de Clima",
    description: "Aplicación web para consultar el clima en tiempo real.",
    image: "/project1.jpg",
    link: "https://github.com/tuusuario/app-clima",
  },
  {
    title: "Gestor de Tareas",
    description: "App para organizar proyectos y tareas con React y Node.js.",
    image: "/project1.jpg",
    link: "https://github.com/tuusuario/gestor-tareas",
  },
];

export default function ProjectsPage() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center">Proyectos</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
