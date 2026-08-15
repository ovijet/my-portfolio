"use client";

import { motion } from "framer-motion";

const educations = [
  {
    period: "2019 - 2024",
    degree: "Diploma in Computer Science & Engineering",
    institute: "Jessore Polytechnic Institute",
    result: "CGPA: 3.25 / 4.00",
    desc: "Completed a Diploma in Computer Science & Engineering, where I gained practical knowledge in programming, web development, database management, networking, and software development. I also built several frontend and full-stack projects using modern web technologies.",
  },
  {
    period: "2017 - 2019",
    degree: "Secondary School Certificate (SSC)",
    institute: "Noapara Government High School",
    result: "GPA: 4.25 / 5.00",
    desc: "Successfully completed SSC with a strong academic foundation in science, developing problem-solving skills and an interest in technology that inspired me to pursue Computer Science & Engineering.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-[#06b6d4]">Education</span>
          </h2>
          <motion.div
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#06b6d4]"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-8">
          {/* Vertical line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#06b6d4] via-[#3b82f6] to-transparent hidden md:block"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          />

          {educations.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className="md:pl-20 relative"
            >
              {/* Dot */}
              <motion.div
                className="hidden md:flex absolute left-5 top-8 w-6 h-6 rounded-full bg-[#06b6d4] border-4 border-zinc-50 dark:border-black items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, delay: i * 0.15 + 0.3 }}
              />

              <motion.div
                whileHover={{
                  borderColor: "#06b6d4",
                  boxShadow: "0 8px 30px rgba(180,138,131,0.15)",
                  x: 6,
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-zinc-200 dark:border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <span className="text-[#06b6d4] font-semibold">{edu.period}</span>

                <h3 className="text-3xl font-bold mt-2">{edu.degree}</h3>

                <h4 className="text-xl text-zinc-600 dark:text-gray-300 mt-2">{edu.institute}</h4>

                <p className="mt-2 text-zinc-500 dark:text-gray-400">
                  <span className="font-semibold text-zinc-900 dark:text-white">
                    {edu.result.split(":")[0]}:
                  </span>{" "}
                  {edu.result.split(":")[1]}
                </p>

                <p className="mt-5 text-zinc-500 dark:text-gray-400 leading-8">{edu.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;