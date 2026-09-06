"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

const educations = [
  {
    period: "2019 - 2024",
    degree: "Diploma in Computer Science & Engineering",
    institute: "Jessore Polytechnic Institute",
    result: "CGPA: 3.25 / 4.00",
    desc: "Acquired comprehensive hands-on foundation in computer science core topics including data structures, software engineering principles, web application development, database architecture, and networking protocols.",
  },
  {
    period: "2017 - 2019",
    degree: "Secondary School Certificate (SSC)",
    institute: "Noapara Government High School",
    result: "GPA: 4.25 / 5.00",
    desc: "Built a solid academic background in science and mathematics, fostering analytical problem-solving skills and an early interest in computing technologies.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-500 bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-500/20">
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3">
            My <span className="text-gradient">Education</span>
          </h2>
          <motion.div
            className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative space-y-8">
          {/* Vertical Glowing Line */}
          <motion.div
            className="absolute left-6 top-3 bottom-3 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent hidden md:block"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          />

          {educations.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
              className="md:pl-16 relative"
            >
              {/* Timeline Icon Node */}
              <motion.div
                className="hidden md:flex absolute left-3 top-6 w-7 h-7 rounded-full bg-cyan-500 text-white items-center justify-center -translate-x-1/2 shadow-lg shadow-cyan-500/50 z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, delay: i * 0.15 + 0.2 }}
              >
                <GraduationCap size={14} />
              </motion.div>

              {/* Glass Card */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="glass-card glass-card-hover rounded-3xl p-7 border border-zinc-200 dark:border-white/10 shadow-lg"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-cyan-500 dark:text-cyan-400 font-bold text-xs">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 font-semibold text-xs flex items-center gap-1.5">
                    <Award size={13} />
                    <span>{edu.result}</span>
                  </span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                  {edu.degree}
                </h3>

                <h4 className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 mt-1">
                  {edu.institute}
                </h4>

                <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  {edu.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;