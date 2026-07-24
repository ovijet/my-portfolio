"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#2d2b34] text-white flex items-center pt-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center w-full">

        {/* Left Side */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="text-lg text-[#B48A83] font-medium"
          >
             Hello, Im
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 leading-tight"
          >
            Ovijet{" "}
            <span className="text-[#B48A83]"> Halder</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl mt-5 text-gray-300"
          >
            <TypewriterText text="Frontend Developer" />
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-gray-400 leading-8 max-w-xl"
          >
            Passionate Frontend Developer skilled in React, Next.js,
            Tailwind CSS and JavaScript. I enjoy creating responsive,
            modern and user-friendly web applications with clean UI and
            smooth user experience.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-5 mt-10"
          >
            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(141,111,105,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#8D6F69] hover:bg-[#a07b73] flex justify-center item-center gap-2 px-8 py-4 rounded-full font-semibold transition duration-300"
            >
              <Download size={18} className="mt-1"/> Download Resume
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, backgroundColor: "white", color: "black" }}
              whileTap={{ scale: 0.95 }}
              className="border border-white px-8 flex justify-center item-center gap-2 py-4 rounded-full hover:bg-white hover:text-black transition duration-300"
            >
             <IoMdContact size={18} className="mt-1"/> Contact Me
            </motion.a>
          </motion.div>

          {/* Social Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mt-10"
          >
            {[
              { href: "https://github.com/ovijet", icon: <FaGithub />, label: "GitHub", hover: "#8D6F69" },
              { href: "https://www.linkedin.com/in/ovijit-halder-1b26a9252/", icon: <FaLinkedinIn />, label: "LinkedIn", hover: "#0A66C2" },
              { href: "https://www.facebook.com/ovijit143/", icon: <FaFacebookF />, label: "Facebook", hover: "#1877F2" },
            ].map((social, i) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.92 }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  className="flex items-center gap-2 bg-[#3b3943] px-6 py-3 rounded-full hover:bg-[#8D6F69] transition"
                >
                  {social.icon}
                  {social.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side — Profile Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <div className="relative">
            {/* Glow */}
            <motion.div
              className="absolute inset-0 bg-[#8D6F69] blur-[120px] opacity-30 rounded-full"
              animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating ring */}
            <motion.div
              className="absolute -inset-4 rounded-full border-2 border-[#8D6F69]/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Image */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/ovi.jpg"
                alt="Ovijet Halder"
                width={420}
                height={420}
                className="relative rounded-full border-[8px] border-[#8D6F69] object-cover w-[300px] h-[300px] md:w-[420px] md:h-[420px]"
              />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

/* Simple typewriter effect */
import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { IoMdContact } from "react-icons/io";

const TypewriterText = ({ text }) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setDone(true);
      }
    }, 60);
    return () => clearInterval(timer);
  }, [text]);

  return (
    <span>
      {displayed}
      {!done && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-0.5 h-8 bg-[#B48A83] ml-1 align-middle"
        />
      )}
    </span>
  );
};

export default Hero;