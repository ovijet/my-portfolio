"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";


const links = [
  { name: "Home", href: "/#home", id: "home" },
  { name: "About", href: "/#about", id: "about" },
  { name: "Skills", href: "/#skills", id: "skills" },
  { name: "Projects", href: "/#projects", id: "projects" },
  { name: "Education", href: "/#education", id: "education" },
  { name: "Contact", href: "/#contact", id: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll styling background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for updating active state on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    links.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 dark:bg-black/95 backdrop-blur-2xl shadow-lg border-b border-zinc-200 dark:border-white/10 py-3"
          : "bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-zinc-200 dark:border-white/5 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold text-zinc-900 dark:text-white tracking-wide"
          >
            <motion.span
              className="text-[#06b6d4]"
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
            >
              &lt; 
            </motion.span>
            OVIJIT
         
             <motion.span
              className="text-[#06b6d4]"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
            >
                /&gt;
            </motion.span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-zinc-100/80 dark:bg-white/5 border border-zinc-200 dark:border-white/10 backdrop-blur-md rounded-full p-1.5 shadow-inner">
          {links.map((item, index) => {
            const isActive = activeSection === item.id;
            return (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 + 0.2, duration: 0.4 }}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 ${
                  isActive ? "text-white" : "text-zinc-600 dark:text-gray-300 hover:text-zinc-900 dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#3b82f6] rounded-full -z-10 shadow-md shadow-[#3b82f6]/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.name}
              </motion.a>
            );
          })}
        </nav>

        {/* Resume Button */}
        {/* <motion.a
          href="/Ovi-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileHover={{ scale: 1.03, backgroundColor: "#2563eb" }}
          whileTap={{ scale: 0.97 }}
          className="hidden lg:flex items-center gap-2 bg-[#3b82f6] text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-[0_0_15px_rgba(6,182,212,0.5)] transition hover:shadow-[0_0_25px_rgba(6,182,212,0.8)]"
        >
          <Download size={18} />
          Resume
        </motion.a> */}

        {/* Theme Toggle Desktop */}
        <div className="hidden lg:block ml-2">
          <ThemeToggle />
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <motion.button
            onClick={() => setOpen(!open)}
            className="text-zinc-800 dark:text-white p-2 rounded-lg bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle navigation menu"
          >
            <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-zinc-200 dark:border-white/10 mt-3"
          >
            <div className="bg-white/95 dark:bg-black/95 backdrop-blur-2xl px-6 py-6 flex flex-col gap-3">
              {links.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleNavClick(item.id)}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? "bg-[#3b82f6] text-white font-semibold shadow-md shadow-[#3b82f6]/20"
                        : "text-zinc-600 dark:text-gray-300 hover:bg-zinc-100 dark:hover:bg-white/10 hover:text-zinc-900 dark:hover:text-white"
                    }`}
                  >
                    {item.name}
                  </motion.a>
                );
              })}

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex justify-center items-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] py-3 mt-2 rounded-xl text-white font-semibold shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.8)]"
              >
                <Download size={18} />
                Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;