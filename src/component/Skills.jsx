"use client";

import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiTypescript,
} from "react-icons/si";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", icon: <SiNextdotjs size={40} /> },
      { name: "React.js", icon: <FaReact size={40} className="text-cyan-400" /> },
      { name: "JavaScript", icon: <FaJsSquare size={40} className="text-yellow-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-sky-400" /> },
      { name: "TypeScript", icon: <SiTypescript size={40} className="text-blue-500" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress size={40} /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-600" /> },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white py-24 overflow-hidden">
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
            My <span className="text-[#06b6d4]">Skills</span>
          </h2>
          <motion.div
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#06b6d4]"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <p className="text-zinc-500 dark:text-gray-400 mt-4">
            Technologies I use to build modern web applications.
          </p>
        </motion.div>

        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            className="mb-14"
            initial={{ opacity: 0, x: gi % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-3xl font-semibold mb-8 text-[#06b6d4]">
              {group.title}
            </h3>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {group.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={cardVariants}
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                    backgroundColor: "#46434d",
                    boxShadow: "0 12px 35px rgba(6,182,212,0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 backdrop-blur-sm hover:bg-white/10 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 cursor-default transition-colors duration-300"
                >
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  >
                    {skill.icon}
                  </motion.div>

                  <h4 className="text-lg font-semibold">{skill.name}</h4>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;