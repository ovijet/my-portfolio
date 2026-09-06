"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import Data from "../../public/Data";
import { IoCode } from "react-icons/io5";
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

const techIcons = {
  "Next.js": <SiNextdotjs />,
  React: <SiReact className="text-cyan-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
  "Node.js": <SiNodedotjs className="text-emerald-500" />,
  "Express.js": <SiExpress />,
  Express: <SiExpress />,
  MongoDB: <SiMongodb className="text-emerald-600" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  Stripe: <SiStripe className="text-indigo-400" />,
  "Better Auth": <MdSecurity className="text-rose-400" />,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-zinc-50 dark:bg-black py-24 text-zinc-900 dark:text-white overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-500 bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-500/20">
            Portfolio Showcase
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <motion.div
            className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <p className="text-zinc-600 dark:text-zinc-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Explore my latest production-ready web applications built with full-stack technologies.
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {Data.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Project Image & Overlay */}
                <div className="overflow-hidden relative group h-56 bg-zinc-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                  
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-semibold text-cyan-400">
                    Full Stack
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-500 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs font-medium text-zinc-700 dark:text-zinc-300"
                      >
                        {techIcons[tech]}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-3 border-t border-zinc-200/50 dark:border-white/5 mt-4">
                <Link
                  href={`/project/${project.id}`}
                  className="flex items-center gap-1.5 text-xs font-bold text-cyan-500 hover:text-cyan-400 transition"
                >
                  <span>Details</span>
                  <span>→</span>
                </Link>

                <div className="flex items-center gap-2">
                  <Link
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-md shadow-cyan-500/20 transition"
                  >
                    <span>Demo</span>
                  </Link>

                  <Link
                    href={project.github}
                    target="_blank"
                    aria-label="GitHub Code"
                    className="p-2 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-cyan-500 text-zinc-800 dark:text-white transition"
                  >
                    <IoCode size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

