"use client";

import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiVercel,
  SiPostman,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      { name: "Next.js", icon: <SiNextdotjs size={36} /> },
      { name: "React.js", icon: <FaReact size={36} className="text-cyan-400" /> },
      { name: "JavaScript", icon: <FaJsSquare size={36} className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript size={36} className="text-blue-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={36} className="text-sky-400" /> },
      { name: "HTML5", icon: <FaHtml5 size={36} className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt size={36} className="text-blue-600" /> },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <FaNodeJs size={36} className="text-emerald-500" /> },
      { name: "Express.js", icon: <SiExpress size={36} className="text-zinc-800 dark:text-zinc-200" /> },
    ],
  },
  {
    title: "Database & Cloud",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql size={36} className="text-blue-400" /> },
      { name: "Prisma ORM", icon: <SiPrisma size={36} className="text-cyan-600 dark:text-cyan-400" /> },
      { name: "MongoDB", icon: <SiMongodb size={36} className="text-emerald-600" /> },
    ],
  },

  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", icon: <FaGitAlt size={36} className="text-red-500" /> },
      { name: "GitHub", icon: <FaGithub size={36} /> },
      { name: "Vercel", icon: <SiVercel size={36} /> },
      { name: "Postman", icon: <SiPostman size={36} className="text-orange-600" /> },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white py-24 overflow-hidden relative">
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
            Technical Proficiency
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3">
            My <span className="text-gradient">Skills</span>
          </h2>
          <motion.div
            className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
              <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 tracking-wide">
                {group.title}
              </h3>
            </div>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4"
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
                    y: -6,
                    scale: 1.04,
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="glass-card glass-card-hover rounded-2xl p-5 flex flex-col items-center justify-center gap-3 cursor-pointer group shadow-sm"
                >
                  <motion.div
                    className="p-3 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 group-hover:border-cyan-500/50 transition-colors"
                  >
                    {skill.icon}
                  </motion.div>

                  <h4 className="text-xs font-semibold text-center text-zinc-700 dark:text-zinc-300 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </h4>
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