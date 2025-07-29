// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaReact,
  FaGitAlt,
  FaHtml5,
  FaLock,
  FaCuttlefish,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiMysql,
  SiScikitlearn,
  SiFlask,
} from "react-icons/si";

const skillList = [
  { name: "Java", icon: <FaJava className="text-orange-500 text-3xl" />, title: "Object-Oriented, Backend Development" },
  { name: "Python", icon: <FaPython className="text-blue-600 text-3xl" />, title: "Scripting, Data Science, AI" },
  { name: "C++", icon: <FaCuttlefish className="text-violet-700 text-3xl" />, title: "Competitive Programming, System Programming" },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600 text-3xl" />, title: "Semantic Markup, Web Structure" },
  { name: "React.js", icon: <FaReact className="text-cyan-400 text-3xl" />, title: "Frontend Framework - UI Building" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-500 text-3xl" />, title: "Utility-first CSS framework" },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-3xl" />, title: "Authentication, Firestore, Hosting" },
  { name: "Machine Learning", icon: <SiScikitlearn className="text-orange-400 text-3xl" />, title: "Modeling & Prediction with scikit-learn" },
  { name: "SQL", icon: <SiMysql className="text-blue-500 text-3xl" />, title: "MySQL & Relational Databases" },
  { name: "Flask", icon: <SiFlask className="text-gray-700 text-3xl" />, title: "Lightweight Python Web Framework" },
  { name: "Cryptography", icon: <FaLock className="text-rose-500 text-3xl" />, title: "Encryption, Security Protocols" },
  { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500 text-3xl" />, title: "Version Control & Collaboration" },
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="relative py-20 px-6 bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background Glows */}
      <div className="absolute w-72 h-72 bg-indigo-400 opacity-20 rounded-full blur-3xl top-0 left-[-60px] z-0"></div>
      <div className="absolute w-72 h-72 bg-pink-300 opacity-10 rounded-full blur-2xl bottom-0 right-[-60px] z-0"></div>

      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-12 relative z-10">
        My <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
      </h2>

      {/* Skill Cards */}
      <div className="relative z-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skillList.map((skill, index) => (
          <motion.div
            key={index}
            title={skill.title}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center transition duration-300 transform hover:scale-105 hover:shadow-xl dark:hover:shadow-indigo-500/20 border border-gray-200 dark:border-gray-700 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="group-hover:animate-pulse">{skill.icon}</div>
            <p className="mt-3 font-semibold text-sm sm:text-base">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
