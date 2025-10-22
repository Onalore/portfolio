import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const ProjectCard = ({ title, description, image, link }: ProjectCardProps) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
    <Image src={image} alt={title} width={500} height={300} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={link} className="text-indigo-600 font-medium hover:underline" target="_blank">
        Ver en GitHub →
      </Link>
    </div>
  </div>
);
