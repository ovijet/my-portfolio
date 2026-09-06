"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Code, Cpu, Flame } from "lucide-react";

const stats = [
  { value: "10+", label: "Projects Completed", icon: <Code className="text-cyan-500" size={24} /> },
  { value: "1+", label: "Years Learning & Coding", icon: <Award className="text-blue-500" size={24} /> },
  { value: "15+", label: "Tech Stack & Tools", icon: <Cpu className="text-indigo-500" size={24} /> },
  { value: "100%", label: "Dedication & Passion", icon: <Flame className="text-amber-500" size={24} /> },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const About = () => {
  return (
    <section id="about" className="bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white py-24 overflow-hidden relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-500 bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-500/20">
            Get To Know Me
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3">
            About <span className="text-gradient">Me</span>
          </h2>
          <motion.div
            className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column — Image & Decorative Backdrop (5 cols) */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-25 -rotate-3" />
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/10 shadow-2xl bg-zinc-900"
              >
                <Image
                  src="/ovi.jpg"
                  alt="Ovijet Halder"
                  width={450}
                  height={500}
                  className="w-full h-[440px] object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/15">
                  <p className="text-white font-bold text-base">Ovijit Halder</p>
                  <p className="text-cyan-400 text-xs font-mono">Full Stack Web Developer</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column — Narrative & Stats (7 cols) */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-tight">
              Passionate Web Developer & Creative Problem Solver
            </h3>

            <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed mb-4">
              I'm Ovijet Halder, a Web Developer based in Bangladesh with a passion for building clean, user-centric, and scalable web applications. My tech journey began with raw HTML & CSS, evolving into full-stack JavaScript development using React, Next.js, Express, and MongoDB.
            </p>

            <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed mb-8">
              I specialize in creating pixel-perfect responsive user interfaces with Tailwind CSS and Framer Motion, while architecting secure backends with JWT, MongoDB, and Next.js Server Actions.
            </p>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass-card rounded-2xl p-5 border border-zinc-200 dark:border-white/10 transition-all duration-300 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10">
                      {stat.icon}
                    </div>
                    <span className="text-3xl font-black text-zinc-900 dark:text-white">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;