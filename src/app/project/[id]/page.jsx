import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub, FaArrowLeft } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Data from "../../../../public/Data";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiStripe,
} from "react-icons/si";
import { MdSecurity } from "react-icons/md";

export default async function ProjectDetails({ params }) {
  const { id } = await params;

  const project = Data.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  const techIcons = {
    "Next.js": <SiNextdotjs className="text-xl" />,
    React: <SiReact className="text-xl text-cyan-400" />,
    "Tailwind CSS": <SiTailwindcss className="text-xl text-sky-400" />,
    "Node.js": <SiNodedotjs className="text-xl text-green-500" />,
    "Express.js": <SiExpress className="text-xl" />,
    Express: <SiExpress className="text-xl" />,
    MongoDB: <SiMongodb className="text-xl text-green-600" />,
    JavaScript: <SiJavascript className="text-xl text-yellow-400" />,
    Stripe: <SiStripe className="text-xl text-indigo-400" />,
    "Better Auth": <MdSecurity className="text-xl text-red-400" />,
  };

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
        <div className="rounded-2xl overflow-hidden mt-5 mb-12 border border-white/10">
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
        <div className="flex flex-wrap gap-4 mt-10">
          {project.tech.map((tech) => (
            <div
              key={tech}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#3B3943] border border-white/10 hover:border-[#B48A83] hover:scale-105 transition-all duration-300"
            >
              {techIcons[tech]}
              <span className="text-gray-200">{tech}</span>
            </div>
          ))}
        </div>

        {/* Overview */}
        <div className="mt-20 bg-[#3B3943] rounded-3xl p-8 border border-white/10">
          <h2 className="text-3xl font-bold mb-5">Project Overview</h2>

          <p className="text-gray-400 leading-8">{project.description}</p>
        </div>
        {/* Challenges */}
        <div className="mt-20 bg-[#3B3943] rounded-3xl p-8 border border-white/10">
          <h2 className="text-3xl font-bold mb-5">
            Challenges Faced While Developing the Project
          </h2>

          <ul className="list-disc list-inside space-y-3 text-gray-400 leading-8">
            {project.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>

        {/* Future Plans */}
        <div className="mt-10 bg-[#3B3943] rounded-3xl p-8 border border-white/10">
          <h2 className="text-3xl font-bold mb-5">
            Potential Improvements & Future Plans
          </h2>

          <ul className="list-disc list-inside space-y-3 text-gray-400 leading-8">
            {project.futurePlans.map((plan, index) => (
              <li key={index}>{plan}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
