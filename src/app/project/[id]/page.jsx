import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub, FaArrowLeft } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Data from "../../../../public/Data";

export default async function ProjectDetails({ params }) {
  const { id } = await params;

  const project = Data.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <section className="min-h-screen bg-[#2E2D35] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 mt-10">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#3B3943] border border-white/10 hover:bg-[#4a4754] transition"
        >
          <FaArrowLeft />
          Back to Portfolio
        </Link>

        {/* Category */}
        <p className="uppercase tracking-[4px] text-[#B48A83] text-sm mt-12">
          Full Stack
        </p>

        {/* Title */}
        <h1 className="text-4xl font-black mt-3">{project.title}</h1>

        {/* Description */}
        <p className="max-w-3xl text-gray-400 text-lg leading-8 mt-6">
          {project.description}
        </p>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden mb-12 border border-white/10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[450px] object-center "
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-10">
          <Link
            href={project.live}
            target="_blank"
            className="flex items-center gap-2 bg-[#8D6F69] hover:bg-[#a27d76] px-6 py-3 rounded-xl transition"
          >
            <FiExternalLink />
            Live Demo
          </Link>

          <Link
            href={project.github}
            target="_blank"
            className="flex items-center gap-2 border border-white/10 bg-[#3B3943] hover:bg-[#4a4754] px-6 py-3 rounded-xl transition"
          >
            <FaGithub />
            GitHub Repo
          </Link>
        </div>

        {/* Tech Stack */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>

          <div className="flex flex-wrap gap-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2 rounded-full bg-[#3B3943] border border-white/10 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Overview */}
        <div className="mt-20 bg-[#3B3943] rounded-3xl p-8 border border-white/10">
          <h2 className="text-3xl font-bold mb-5">Project Overview</h2>

          <p className="text-gray-400 leading-8">{project.description}</p>
        </div>
      </div>
    </section>
  );
}
