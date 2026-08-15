"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaHeart,
} from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    href: "https://github.com/ovijet",
    icon: <FaGithub />,
    hover: "hover:bg-[#06b6d4]",
  },
  {
    href: "https://www.linkedin.com/in/ovijit-halder-1b26a9252/",
    icon: <FaLinkedinIn />,
    hover: "hover:bg-[#0A66C2]",
  },
  {
    href: "https://www.facebook.com/ovijit143/",
    icon: <FaFacebookF />,
    hover: "hover:bg-[#1877F2]",
  },
];

const Footer = () => {
  return (
    <footer className="bg-zinc-50 dark:bg-black border-t border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Logo & Bio */}
          <div>
            <h2 className="text-3xl font-bold">
              Ovijit Halder<span className="text-[#06b6d4]">.</span>
            </h2>

            <p className="mt-4 text-zinc-500 dark:text-gray-400 leading-7">
              Frontend Developer passionate about building modern,
              responsive, and user-friendly web applications with React,
              Next.js, and Tailwind CSS.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-zinc-500 dark:text-gray-400 hover:text-[#06b6d4] transition-all duration-300 hover:translate-x-2 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <p className="text-zinc-500 dark:text-gray-400">
              📧 ovijethalder143@gmail.com
            </p>

            <p className="text-zinc-500 dark:text-gray-400 mt-2">
              📞 +8801857979055
            </p>

            <div className="flex gap-4 mt-6">
              {socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  className={`w-11 h-11 rounded-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-transparent ${social.hover}`}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-200 dark:border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ovijet Halder. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-gray-500 text-sm">
            Made with
            <FaHeart className="text-red-500 animate-pulse" />
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;