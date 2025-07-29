import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg";

const listVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1 },
  }),
};

const About = () => {
  const highlights = [
    "🎓 Final Year B.Tech Student @ Dr. A.P.J. Abdul Kalam Technical University, Lucknow",
    "🧠 Intern at DRDO (Cybersecurity & AI/ML)",
    "🧠 Strong understanding of DSA, OOP, DBMS, OS, System Design",
    "💻 Skilled in HTML, CSS, Java, Python, C++, MySQL, React.js, JavaScript",
    "🛠️ Experienced with TailwindCSS, Bootstrap, Node.js, REST APIs",
    "🧰 Hands-on with Git, GitHub, Firebase, Postman, VS Code, Figma, Wireshark",
    "🎯 Goal: Create secure, scalable, and smart applications",
  ];

  return (
    <motion.section
      id="about"
      className="relative min-h-screen py-20 px-6 bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Glow Circles */}
      <div className="absolute w-72 h-72 bg-indigo-400 opacity-30 rounded-full blur-3xl top-0 left-[-60px] z-0"></div>
      <div className="absolute w-72 h-72 bg-pink-300 opacity-20 rounded-full blur-2xl bottom-0 right-[-60px] z-0"></div>

      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-12 relative z-10">
        About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
      </h2>

      {/* Content Card */}
      <div className="relative z-10 max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
        {/* Profile Picture */}
        <motion.img
          src={profilePic}
          alt="Gauri Sharma"
          className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover shadow-md border-4 border-indigo-500 hover:scale-105 transition-transform"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Bio Section */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg leading-relaxed mb-4">
            I'm{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Gauri Sharma
            </span>
            , a final-year B.Tech Computer Science student with a passion for{" "}
            <span className="font-medium">AI/ML, web development,</span> and
            solving real-world problems through tech. I enjoy crafting smart,
            secure, and user-friendly applications.
          </p>

          <ul className="list-disc list-inside space-y-2 text-left text-sm sm:text-base">
            {highlights.map((point, index) => (
              <motion.li
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={listVariants}
              >
                {point}
              </motion.li>
            ))}
          </ul>

          {/* LinkedIn Button */}
          <div className="mt-6 flex justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/gauri-sharma-20041214jc/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-medium shadow-md hover:bg-indigo-700 transition"
            >
              🔗 Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
