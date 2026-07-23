"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const projects = [
  {
    id: "studynook",
    title: "StudyNook",
    image: "/study.png",
    description:
      "A full-stack study room booking platform where users can browse, book, and manage study rooms.",
    tech: "Next.js • React • Tailwind CSS • Node.js • Express.js • MongoDB",
    live: "https://a9-study-nook.vercel.app/",
    github: "https://github.com/ovijet/studynook-client",
  },
  {
    id: "digital-life-lessons",
    title: "Digital Life Lessons",
    image: "/projects/lifelessons.png",
    description:
      "A premium life lessons platform with authentication, Stripe payment, and role-based dashboard.",
    tech: "Next.js • Better Auth • Stripe • Express • MongoDB",
    live: "https://your-live-link.com",
    github: "https://github.com/yourusername/digital-life-lessons-client",
  },
  {
    id: "hireloop",
    title: "HireLoop",
    image: "/projects/hireloop.png",
    description:
      "A modern job portal where companies post jobs and candidates can apply online.",
    tech: "Next.js • React • Tailwind CSS • Node.js • MongoDB",
    live: "https://your-live-link.com",
    github: "https://github.com/yourusername/hireloop-client",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="bg-[#2d2b34] py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold">
            Featured <span className="text-[#B48A83]">Projects</span>
          </h2>
          <motion.div
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#B48A83]"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects built with modern web technologies.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 50px rgba(141,111,105,0.2)",
              }}
              className="bg-[#3b3943] rounded-3xl overflow-hidden border border-white/10 hover:border-[#B48A83]/40 transition-colors duration-300"
            >
              <div className="overflow-hidden relative group">
                <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.5 }}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={350}
                    className="w-full h-56 object-cover"
                  />
                </motion.div>
                {/* Overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-[#8D6F69]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

                <p className="text-gray-400 leading-7">{project.description}</p>

                <p className="text-sm text-[#B48A83] mt-5">{project.tech}</p>

                <div className="flex flex-wrap gap-3 mt-8">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-2 bg-[#8D6F69] px-5 py-3 rounded-full hover:bg-[#a27d76] transition"
                    >
                      <FiExternalLink />
                      Live
                    </Link>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 border border-gray-500 px-5 py-3 rounded-full hover:bg-white hover:text-black transition"
                    >
                      <FaGithub />
                      GitHub
                    </Link>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href={`/projects/${project.id}`}
                      className="border border-[#8D6F69] px-5 py-3 rounded-full hover:bg-[#8D6F69] transition"
                    >
                      Details
                    </Link>
                  </motion.div>
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