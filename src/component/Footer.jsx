"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaHeart,
} from "react-icons/fa";
import { Code2 } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
];

const socials = [
  {
    href: "https://github.com/ovijet",
    icon: <FaGithub size={18} />,
    hover: "hover:border-cyan-500 hover:text-cyan-400",
  },
  {
    href: "https://www.linkedin.com/in/ovijit-halder-1b26a9252/",
    icon: <FaLinkedinIn size={18} />,
    hover: "hover:border-blue-500 hover:text-blue-400",
  },
  {
    href: "https://www.facebook.com/ovijit143/",
    icon: <FaFacebookF size={18} />,
    hover: "hover:border-blue-600 hover:text-blue-500",
  },
];

const Footer = () => {
  return (
    <footer className="bg-zinc-50 dark:bg-black border-t border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white relative">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-12 gap-10">
          {/* Logo & Bio (5 cols) */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/30">
                <Code2 size={18} />
              </div>
              <span>
                OVIJIT<span className="text-cyan-500">.DEV</span>
              </span>
            </Link>

            <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed max-w-sm">
              Full Stack Web Developer crafting modern, responsive, and high-performance web applications using Next.js, React, Node.js, and MongoDB.
            </p>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-4">
              Navigation
            </h3>

            <div className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-zinc-600 dark:text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 text-sm font-medium transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Socials (4 cols) */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-4">
              Direct Contact
            </h3>

            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              📧 ovijethalder143@gmail.com
            </p>

            <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2">
              📞 +8801857979055
            </p>

            <div className="flex gap-3 mt-6">
              {socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  className={`w-10 h-10 rounded-xl bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 flex items-center justify-center transition duration-300 ${social.hover}`}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-200 dark:border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-zinc-500 dark:text-zinc-500">
          <p>© {new Date().getFullYear()} Ovijit Halder. All Rights Reserved.</p>

          <p className="flex items-center gap-1.5">
            Designed & Built with
            <FaHeart className="text-rose-500 animate-pulse" />
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;