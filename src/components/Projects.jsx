// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaLock, FaBrain } from "react-icons/fa";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "AutoCryptGuard",
    description:
      "A hybrid cybersecurity toolkit with AES/RSA encryption, intrusion detection, and real-time logging. UI built using PyQt5 and React dashboard.",
    tech: ["Python", "AES/RSA", "PyQt5", "PostgreSQL", "React"],
    github: "https://github.com/Gauri-14/AutoCryptGuard.git",
    live: "", // Optional live URL
    icon: <FaLock className="text-rose-500 text-3xl" />,
  },
  {
    title: "Student Creditworthiness Predictor",
    description:
      "A machine learning model using scikit-learn to predict student creditworthiness based on academic and behavioral data. Built for OneBanc.",
    tech: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
    github: "https://github.com/Gauri-14/student_worthiness_prediction.git",
    live: "", // Optional live URL
    icon: <FaBrain className="text-indigo-500 text-3xl" />,
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="relative py-20 px-6 bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Glows */}
      <div className="absolute w-72 h-72 bg-indigo-300 opacity-10 rounded-full blur-3xl top-0 left-[-80px] z-0"></div>
      <div className="absolute w-72 h-72 bg-pink-400 opacity-10 rounded-full blur-2xl bottom-0 right-[-80px] z-0"></div>

      <h2 className="text-4xl font-bold text-center mb-12 relative z-10">
        Featured <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
      </h2>

      <div className="relative z-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-6 flex flex-col gap-3 transition duration-300 transform hover:scale-105 hover:shadow-xl dark:hover:shadow-indigo-500/20 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              {project.icon}
              <h3 className="text-xl font-semibold">{project.title}</h3>
            </div>

            <p className="text-sm text-gray-700 dark:text-gray-300">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-white text-xs font-medium px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition"
                >
                  <FiGithub /> GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white transition"
                >
                  <FiExternalLink /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
