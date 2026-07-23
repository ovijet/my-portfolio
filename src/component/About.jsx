"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Projects Completed" },
  { value: "1+", label: "Years Learning" },
  { value: "15+", label: "Technologies" },
  { value: "100%", label: "Passionate" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const About = () => {
  return (
    <section id="about" className="bg-[#2d2b34] text-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold">
            About <span className="text-[#B48A83]">Me</span>
          </h2>
          <motion.div
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#B48A83]"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Learn more about my journey, passion, and the technologies I work with.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-[#8D6F69] blur-[100px] opacity-30 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Image
                  src="/ovi.jpg"
                  alt="Ovijet Halder"
                  width={400}
                  height={400}
                  className="relative rounded-3xl border-4 border-[#8D6F69]"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="text-3xl font-bold mb-6">Frontend Developer</h3>

            <p className="text-gray-400 leading-8 mb-6">
              I'm Ovijet Halder, a passionate Frontend Developer from Bangladesh.
              I enjoy building responsive, user-friendly, and modern web applications
              using React, Next.js, Tailwind CSS, and JavaScript.
            </p>

            <p className="text-gray-400 leading-8 mb-6">
              My programming journey started with HTML and CSS, and gradually I
              learned JavaScript, React, and full-stack development. I enjoy solving
              real-world problems through clean code and intuitive user interfaces.
            </p>

            <p className="text-gray-400 leading-8">
              Outside of programming, I enjoy learning new technologies, watching
              tech content, and continuously improving my development skills.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-5 mt-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#46434d",
                    boxShadow: "0 8px 30px rgba(141,111,105,0.25)",
                  }}
                  className="bg-[#3b3943] rounded-2xl p-6 text-center cursor-default transition-colors duration-300"
                >
                  <motion.h4
                    className="text-4xl font-bold text-[#B48A83]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 + i * 0.1 }}
                  >
                    {stat.value}
                  </motion.h4>
                  <p className="text-gray-400 mt-2">{stat.label}</p>
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