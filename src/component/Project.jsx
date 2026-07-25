"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
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

const Projects = () => {
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
  const techIcons = {
    "Next.js": <SiNextdotjs />,
    React: <SiReact className="text-cyan-400" />,
    "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
    "Node.js": <SiNodedotjs className="text-green-500" />,
    "Express.js": <SiExpress />,
    Express: <SiExpress />,
    MongoDB: <SiMongodb className="text-green-600" />,
    JavaScript: <SiJavascript className="text-yellow-400" />,
    Stripe: <SiStripe className="text-indigo-400" />,
    "Better Auth": <MdSecurity className="text-red-400" />,
  };
  return (
    <section
      id="projects"
      className="bg-[#2d2b34] py-24 text-white overflow-hidden"
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
            Here are some of my recent projects built with modern web
            technologies.
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
          {Data.map((project) => (
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
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={350}
                    className="w-full h-56 object-cover"
                  />
                </motion.div>
                {/* Overlay on hover */}
                <motion.div className="absolute inset-0 bg-[#8D6F69]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

                <p className="text-gray-400 leading-7">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2f2d36] border border-white/10 text-sm text-gray-200 hover:border-[#B48A83] transition"
                    >
                      {techIcons[tech]}
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-3 flex-wrap md:flex-nowrap">
                  {/* View Details */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={`/project/${project.id}`}
                      className="flex items-center gap-2 bg-[#8D6F69] px-5 py-3 rounded-full hover:bg-[#a27d76] transition whitespace-nowrap"
                    >
                      View Details →
                    </Link>
                  </motion.div>

                  {/* Demo */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-2 px-5 py-3 rounded-full transition whitespace-nowrap"
                    >
                      <FiExternalLink />
                      Demo
                    </Link>
                  </motion.div>

                  {/* GitHub */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 border border-gray-500 px-5 py-3 rounded-full hover:bg-white hover:text-black transition whitespace-nowrap"
                    >
                      <IoCode />
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
