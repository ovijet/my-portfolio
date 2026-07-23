"use client";

import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

const contactInfo = [
  { icon: <FaEnvelope size={22} />, label: "Email", value: "ovijethalder143@gmail.com" },
  { icon: <FaPhoneAlt size={20} />, label: "Phone", value: "+8801857979055" },
];

const socials = [
  { href: "https://github.com/ovijet", icon: <FaGithub size={22} />, hover: "#8D6F69" },
  { href: "https://www.linkedin.com/in/ovijit-halder-1b26a9252/", icon: <FaLinkedin size={22} />, hover: "#0A66C2" },
  { href: "https://www.facebook.com/ovijit143/", icon: <FaFacebook size={22} />, hover: "#1877F2" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#2d2b34] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold">Contact <span className="text-[#B48A83]">Me</span></h2>
          <motion.div
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#B48A83]"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <p className="text-gray-400 mt-4">
            Feel free to contact me for collaboration or job opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Info */}
          <motion.div
            className="bg-[#3b3943] p-8 rounded-3xl border border-white/10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="text-3xl font-semibold mb-8">Get In Touch</h3>

            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  className="flex items-center gap-5"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                >
                  <motion.div
                    className="bg-[#8D6F69] p-4 rounded-full"
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {info.icon}
                  </motion.div>
                  <div>
                    <p className="text-gray-400">{info.label}</p>
                    <p className="font-semibold">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  className="bg-[#45434d] p-4 rounded-full hover:bg-[#8D6F69] transition"
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.5 + i * 0.1 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-[#3b3943] p-8 rounded-3xl border border-white/10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <form className="space-y-5">
              {[
                { type: "text", placeholder: "Your Name" },
                { type: "email", placeholder: "Your Email" },
              ].map((field, i) => (
                <motion.input
                  key={field.placeholder}
                  type={field.type}
                  placeholder={field.placeholder}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  whileFocus={{ scale: 1.01 }}
                  className="w-full bg-[#2d2b34] border border-gray-700 rounded-xl p-4 outline-none focus:border-[#8D6F69] transition-colors duration-300 text-white placeholder-gray-500"
                />
              ))}

              <motion.textarea
                rows={6}
                placeholder="Your Message"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.26 }}
                whileFocus={{ scale: 1.01 }}
                className="w-full bg-[#2d2b34] border border-gray-700 rounded-xl p-4 outline-none focus:border-[#8D6F69] transition-colors duration-300 text-white placeholder-gray-500 resize-none"
              />

              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 25px rgba(141,111,105,0.5)",
                }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-[#8D6F69] hover:bg-[#9d7b75] py-4 rounded-xl font-semibold transition"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;