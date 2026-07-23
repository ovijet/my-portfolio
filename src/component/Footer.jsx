'use client'
import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaHeart,
} from "react-icons/fa";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { href: "https://github.com/ovijet", icon: <FaGithub />, hover: "hover:bg-[#B48A83]" },
  { href: "https://www.linkedin.com/in/ovijit-halder-1b26a9252/", icon: <FaLinkedinIn />, hover: "hover:bg-[#0A66C2]" },
  { href: "https://www.facebook.com/ovijit143/", icon: <FaFacebookF />, hover: "hover:bg-[#1877F2]" },
];

const Footer = () => {
  return (
    <motion.footer
      className="bg-[#25232b] border-t border-white/10 text-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo & Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold">
              Ovijet halder<span className="text-[#B48A83]">.</span>
            </h2>
            <p className="mt-4 text-gray-400 leading-7">
              Frontend Developer passionate about building modern, responsive
              and user-friendly web applications with React, Next.js and Tailwind CSS.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-5">Quick Links</h3>
            <div className="flex flex-col gap-3 text-gray-400">
              {quickLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                  whileHover={{ x: 6, color: "#B48A83" }}
                  className="hover:text-[#B48A83] transition-colors duration-200 w-fit"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-5">Contact</h3>
            <p className="text-gray-400">📧 ovijethalder143@gmail.com</p>
            <p className="text-gray-400 mt-2">📞 +8801857979055</p>

            <div className="flex gap-4 mt-6">
              {socials.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={s.href}
                    target="_blank"
                    className={`w-11 h-11 rounded-full bg-[#3b3943] flex items-center justify-center ${s.hover} transition`}
                  >
                    {s.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ovijet Halder. All Rights Reserved.
          </p>
          <p className="flex items-center gap-2 text-gray-500 text-sm">
            Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
            >
              <FaHeart className="text-red-500" />
            </motion.span>{" "}
            using Next.js & Tailwind CSS
          </p>
        </motion.div>

      </div>
    </motion.footer>
  );
};

export default Footer;