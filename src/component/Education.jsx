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
    <section id="education" className="py-24 bg-[#2d2b34] text-white overflow-hidden">
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
            My <span className="text-[#B48A83]">Education</span>
          </h2>
          <motion.div
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#B48A83]"
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
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#B48A83] via-[#8D6F69] to-transparent hidden md:block"
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
                className="hidden md:flex absolute left-5 top-8 w-6 h-6 rounded-full bg-[#B48A83] border-4 border-[#2d2b34] items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, delay: i * 0.15 + 0.3 }}
              />

              <motion.div
                whileHover={{
                  borderColor: "#B48A83",
                  boxShadow: "0 8px 30px rgba(180,138,131,0.15)",
                  x: 6,
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-[#3b3943] rounded-3xl p-8 border border-white/10 transition-colors duration-300"
              >
                <span className="text-[#B48A83] font-semibold">{edu.period}</span>

                <h3 className="text-3xl font-bold mt-2">{edu.degree}</h3>

                <h4 className="text-xl text-gray-300 mt-2">{edu.institute}</h4>

                <p className="mt-2 text-gray-400">
                  <span className="font-semibold text-white">
                    {edu.result.split(":")[0]}:
                  </span>{" "}
                  {edu.result.split(":")[1]}
                </p>

                <p className="mt-5 text-gray-400 leading-8">{edu.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;