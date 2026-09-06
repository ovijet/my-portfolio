"use client";

import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaFacebook, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const contactInfo = [
  { icon: <FaEnvelope size={20} />, label: "Email", value: "ovijethalder143@gmail.com", href: "mailto:ovijethalder143@gmail.com" },
  { icon: <FaPhoneAlt size={18} />, label: "Phone", value: "+8801857979055", href: "tel:+8801857979055" },
];

const socials = [
  { href: "https://github.com/ovijet", icon: <FaGithub size={20} />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/ovijit-halder-1b26a9252/", icon: <FaLinkedin size={20} />, label: "LinkedIn" },
  { href: "https://www.facebook.com/ovijit143/", icon: <FaFacebook size={20} />, label: "Facebook" },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 4000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-500 bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-500/20">
            Let's Collaborate
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <motion.div
            className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <p className="text-zinc-600 dark:text-zinc-400 mt-4 text-sm md:text-base">
            Have a project in mind or want to talk? Send me a message!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">

          {/* Left Column — Info & Socials (5 cols) */}
          <motion.div
            className="lg:col-span-5 glass-card p-8 rounded-3xl border border-zinc-200 dark:border-white/10 shadow-xl flex flex-col justify-between"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-2">Get In Touch</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-8">
                Feel free to reach out via email, phone, or connect on my social channels.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-cyan-500 transition group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-zinc-400 uppercase">{info.label}</p>
                      <p className="font-bold text-sm text-zinc-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-white/10">
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">
                Follow My Socials:
              </p>
              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    target="_blank"
                    className="p-3.5 rounded-2xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-cyan-500 text-zinc-800 dark:text-white hover:text-cyan-500 transition shadow-sm"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column — Contact Form (7 cols) */}
          <motion.div
            className="lg:col-span-7 glass-card p-8 rounded-3xl border border-zinc-200 dark:border-white/10 shadow-xl"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {submitted ? (
              <div className="py-16 text-center flex flex-col items-center justify-center">
                <FaCheckCircle className="text-emerald-500 text-5xl mb-4 animate-bounce" />
                <h4 className="text-2xl font-bold">Message Sent!</h4>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2">
                  Thank you for reaching out. I'll get back to you shortly!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-white dark:bg-black/50 border border-zinc-300 dark:border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition duration-200 text-zinc-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-white dark:bg-black/50 border border-zinc-300 dark:border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition duration-200 text-zinc-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Ovijit, I'd like to discuss a project..."
                    className="w-full bg-white dark:bg-black/50 border border-zinc-300 dark:border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition duration-200 text-zinc-900 dark:text-white resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition duration-300 text-sm tracking-wide"
                >
                  <FaPaperPlane size={14} />
                  <span>Send Message</span>
                </motion.button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;