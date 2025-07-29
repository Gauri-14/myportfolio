import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaGithub, FaYoutube, FaInstagram, FaTwitter, FaLinkedin,
  FaUser, FaEnvelope, FaCommentDots
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";

const socials = [
  { icon: <FaGithub />, url: "https://github.com/" },
  { icon: <FaYoutube />, url: "https://youtube.com/" },
  { icon: <FaInstagram />, url: "https://instagram.com/" },
  { icon: <FaTwitter />, url: "https://twitter.com/" },
  { icon: <FaLinkedin />, url: "https://linkedin.com/" },
];

const email = "gaurijc14@gmail.com";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const formRef = useRef();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ytg5fog", "template_vmupc2w", formRef.current, "gfTazu2FdzRABrQZG")
      .then(() => {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        toast.error("Something went wrong.");
        console.error(error);
      });
  };

  return (
    <motion.section
      id="contact"
      className="relative min-h-screen py-16 px-4 md:px-20 bg-white dark:bg-black text-gray-900 dark:text-white flex flex-col justify-center overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Toaster position="top-center" />

      {/* Social Icons */}
      <div className="hidden md:flex flex-col items-center gap-5 absolute left-6 top-1/2 -translate-y-1/2 z-10">
        {socials.map((s, i) => (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-2xl transition-transform hover:scale-125"
          >
            {s.icon}
          </a>
        ))}
        <div className="w-[2px] h-16 bg-gray-300 dark:bg-gray-600 mt-2" />
      </div>

      {/* Email Right */}
      <div className="hidden md:flex flex-col items-center absolute right-6 top-1/2 -translate-y-1/2 z-10">
        <a
          href={`mailto:${email}`}
          className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm mb-6 tracking-widest"
          style={{ writingMode: "vertical-rl" }}
        >
          {email}
        </a>
        <div className="w-[2px] h-16 bg-gray-300 dark:bg-gray-600 mt-2" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center mx-auto max-w-3xl w-full z-10 relative">
        <p className="text-center text-blue-600 dark:text-blue-400 font-semibold mb-2 tracking-wide uppercase">
          Get in Touch
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
            <TypeAnimation
              sequence={["Let's Work Together", 2000, "Let's Build Together", 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="inline-block"
            />
          </span>
          <span className="absolute left-1/2 -bottom-2 w-1/2 h-1 bg-blue-500 rounded-full animate-pulse -translate-x-1/2" />
        </h2>

        <p className="text-center text-lg mb-10 text-gray-600 dark:text-gray-400">
          Whether it's a project idea or just saying hi, feel free to reach out. I love connecting with people and exploring new opportunities.
        </p>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full bg-white/60 dark:bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-xl space-y-6 border border-gray-200 dark:border-white/10"
        >
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full pl-12 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full pl-12 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <FaCommentDots className="absolute left-4 top-5 text-gray-400" />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              value={form.message}
              onChange={handleChange}
              className="w-full pl-12 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Send Message
          </motion.button>
        </form>

        <p className="md:hidden text-center mt-6 text-sm text-gray-500 dark:text-gray-400">
          Or email me at <a href={`mailto:${email}`} className="underline">{email}</a>
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-white/10 pt-6">
        <div className="mb-2 flex justify-center gap-6 md:hidden">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-xl transition-transform hover:scale-110"
            >
              {s.icon}
            </a>
          ))}
        </div>
        © {new Date().getFullYear()} Gauri Sharma. All rights reserved.
      </footer>
    </motion.section>
  );
};

export default Contact;
