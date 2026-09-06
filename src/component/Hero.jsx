"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Sparkles, Send } from "lucide-react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const floatingBadges = [
  { icon: <SiNextdotjs size={20} />, label: "Next.js", position: "-top-3 -left-4" },
  { icon: <FaReact size={22} className="text-cyan-400" />, label: "React", position: "top-1/4 -right-6" },
  { icon: <SiTailwindcss size={20} className="text-sky-400" />, label: "Tailwind", position: "bottom-10 -left-6" },
  { icon: <FaNodeJs size={22} className="text-emerald-400" />, label: "Node.js", position: "-bottom-2 right-8" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white flex items-center pt-28 pb-16 overflow-hidden relative"
    >
      {/* Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Side (7 cols) */}
        <motion.div
          className="lg:col-span-7"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-semibold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Hire & Freelance Projects</span>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg font-medium text-zinc-600 dark:text-zinc-400 tracking-wide"
          >
            Hello 👋, I am
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-black mt-2 tracking-tight leading-tight"
          >
            Ovijit <span className="text-gradient">Halder</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl mt-4 font-bold text-zinc-700 dark:text-zinc-300 min-h-[40px]"
          >
            <span className="text-zinc-500 dark:text-zinc-400 font-normal">Building </span>
            <TypeAnimation
              sequence={[
                "Full Stack Web Applications",
                3000,
                "Modern React & Next.js UIs",
                3000,
                "Scalable Node.js Backend APIs",
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-cyan-500 dark:text-cyan-400"
            />
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl"
          >
            Passionate Software Developer skilled in crafting high-performance full-stack web applications with Next.js, React, Node.js, and MongoDB. Focused on slick UI design, micro-interactions, and robust API architecture.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mt-8"
          >
            <motion.a
              href="/Ovi-Resume.pdf"
              download="Ovi-Resume.pdf"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 transition duration-300"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="glass-card hover:bg-zinc-100 dark:hover:bg-white/10 text-zinc-800 dark:text-white border border-zinc-300 dark:border-white/15 px-7 py-3.5 rounded-full font-bold text-sm tracking-wide flex items-center justify-center gap-2.5 transition duration-300"
            >
              <Send size={16} className="text-cyan-500" />
              <span>Get In Touch</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3 mt-8"
          >
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mr-2">
              Connect:
            </span>
            {[
              {
                href: "https://github.com/ovijet",
                icon: <FaGithub size={18} />,
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/ovijit-halder-1b26a9252/",
                icon: <FaLinkedinIn size={18} />,
                label: "LinkedIn",
              },
              {
                href: "https://www.facebook.com/ovijit143/",
                icon: <FaFacebookF size={18} />,
                label: "Facebook",
              },
            ].map((social, i) => (
              <motion.div
                key={social.label}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  className="flex items-center gap-2 bg-white/80 dark:bg-white/5 border border-zinc-200 dark:border-white/10 px-4 py-2 rounded-full text-xs font-medium hover:border-cyan-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition shadow-sm"
                >
                  {social.icon}
                  <span>{social.label}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side (5 cols) — Profile Image + Floating Tech Badges */}
        <motion.div
          className="lg:col-span-5 flex justify-center mt-6 lg:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative">
            {/* Glowing background ring */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 blur-[80px] opacity-40 rounded-full"
              animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.5, 0.35] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Decorative spinning dashed border */}
            <motion.div
              className="absolute -inset-5 rounded-full border-2 border-dashed border-cyan-500/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />

            {/* Profile Avatar Container */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full p-2 bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-600 shadow-2xl shadow-cyan-500/30">
                <div className="w-full h-full rounded-full overflow-hidden relative bg-zinc-900">
                  <Image
                    src="/ovi.jpg"
                    alt="Ovijet Halder"
                    fill
                    priority
                    sizes="(max-width: 768px) 280px, 360px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>

            {/* Floating Tech Badges */}
            {floatingBadges.map((badge, idx) => (
              <motion.div
                key={badge.label}
                className={`absolute z-20 ${badge.position} flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-white/10 shadow-lg backdrop-blur-md text-xs font-semibold`}
                animate={{ y: idx % 2 === 0 ? [0, -8, 0] : [0, 8, 0] }}
                transition={{
                  duration: 3.5 + idx * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.4,
                }}
              >
                {badge.icon}
                <span className="text-zinc-800 dark:text-zinc-200">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

