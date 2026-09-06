import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub, FaArrowLeft, FaCheckCircle, FaRocket } from "react-icons/fa";
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
    "Node.js": <SiNodedotjs className="text-xl text-emerald-500" />,
    "Express.js": <SiExpress className="text-xl" />,
    Express: <SiExpress className="text-xl" />,
    MongoDB: <SiMongodb className="text-xl text-emerald-600" />,
    JavaScript: <SiJavascript className="text-xl text-yellow-400" />,
    Stripe: <SiStripe className="text-xl text-indigo-400" />,
    "Better Auth": <MdSecurity className="text-xl text-rose-400" />,
  };

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-sm font-semibold hover:border-cyan-500 transition shadow-sm"
        >
          <FaArrowLeft className="text-cyan-500" />
          <span>Back to Projects</span>
        </Link>

        {/* Header */}
        <div className="mt-8">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-500 bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-500/20">
            Full Stack Application
          </span>

          <h1 className="text-4xl md:text-5xl font-black mt-4 tracking-tight">
            {project.title}
          </h1>

          <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mt-4 max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Project Hero Image */}
        <div className="rounded-3xl overflow-hidden mt-8 border border-zinc-200 dark:border-white/10 shadow-2xl relative h-[320px] md:h-[480px] bg-zinc-900">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>

        {/* Action Buttons & Tech Badges */}
        <div className="flex flex-wrap items-center justify-between gap-6 mt-8 p-6 rounded-2xl glass-card border border-zinc-200 dark:border-white/10">
          <div className="flex items-center gap-3">
            <Link
              href={project.live}
              target="_blank"
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-cyan-500/25 transition"
            >
              <FiExternalLink />
              Live Demo
            </Link>

            <Link
              href={project.github}
              target="_blank"
              className="flex items-center gap-2 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-cyan-500 text-zinc-900 dark:text-white font-bold text-sm px-6 py-3 rounded-xl transition"
            >
              <FaGithub />
              GitHub Code
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {project.tech.map((tech) => (
              <div
                key={tech}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs font-semibold"
              >
                {techIcons[tech]}
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Overview & Key Highlights */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Challenges */}
          <div className="glass-card rounded-3xl p-8 border border-zinc-200 dark:border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-500">
                <FaCheckCircle size={20} />
              </div>
              <h2 className="text-xl font-bold">Key Engineering Challenges</h2>
            </div>

            <ul className="space-y-3 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Future Plans */}
          <div className="glass-card rounded-3xl p-8 border border-zinc-200 dark:border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500">
                <FaRocket size={20} />
              </div>
              <h2 className="text-xl font-bold">Future Enhancements</h2>
            </div>

            <ul className="space-y-3 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              {project.futurePlans.map((plan, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span>{plan}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

