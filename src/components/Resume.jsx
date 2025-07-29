import React from "react";
import { motion } from "framer-motion";
import { FaFileDownload, FaGraduationCap, FaTrophy } from "react-icons/fa";
import { BsFillAwardFill } from "react-icons/bs";

const Resume = () => {
  const education = [
    {
      title: "IMS Engineering College, Ghaziabad",
      subtitle: "B.Tech in Computer Science Engineering",
      result: "Current SGPA: 8.26",
      year: "2022 – 2026",
    },
    {
      title: "Bhai Parmanand Vidya Mandir, Delhi",
      subtitle: "Higher Secondary (Class XII)",
      result: "Scored 87.4%",
      year: "2022",
    },
    {
      title: "Bhai Parmanand Vidya Mandir, Delhi",
      subtitle: "Secondary Education (Class X)",
      result: "Scored 92.3%",
      year: "2020",
    },
  ];

  const achievements = [
    "Completed the Data Science using Python course.",
    "Winner of Quick Hackathon Hosted by Runtime Hackers Club.",
    "Participated in Smart India Hackathon (SIH)’23 and (SIH)’24.",
    "Completed Student Technical Training Collection by Microsoft.",
    "Participated in IOSD MAIT Hackathon.",
  ];

  return (
    <motion.section
      id="resume"
      className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <h2 className="text-4xl font-extrabold text-center mb-4">
        📄 More About Me!!!
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 text-lg mb-10">
        Here's a quick overview of my{" "}
        <span className="text-indigo-600 font-medium">education</span> and{" "}
        <span className="text-indigo-600 font-medium">achievements</span>.
      </p>

      {/* Education Timeline */}
      <div className="max-w-5xl mx-auto mb-20">
        <h3 className="text-2xl font-semibold flex items-center gap-2 mb-10">
          <FaGraduationCap className="text-indigo-600" /> Education Timeline
        </h3>
        <div className="relative border-l-4 border-indigo-500 dark:border-indigo-400 ml-4 space-y-10">
          {education.map((item, index) => (
            <motion.div
              key={index}
              className="relative pl-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <span className="absolute -left-[11px] top-1 w-5 h-5 bg-indigo-600 dark:bg-indigo-400 rounded-full ring-4 ring-white dark:ring-gray-900" />
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p className="italic text-gray-700 dark:text-gray-300">
                  {item.subtitle}
                </p>
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
                  <span>{item.result}</span>
                  <span>{item.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="max-w-5xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold flex items-center gap-2 mb-6">
          <BsFillAwardFill className="text-yellow-500" /> Achievements
        </h3>
        <motion.ul
          className="grid md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {achievements.map((ach, index) => (
            <motion.li
              key={index}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex items-start gap-3">
                <FaTrophy className="mt-1 text-indigo-500" />
                <span>{ach}</span>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Download Resume Button */}
      <motion.div
        className="text-center mt-12"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <a
          href="/Gauri_Sharma_Resume.pdf"
          download
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg shadow-lg transition-all duration-300 hover:shadow-indigo-400/60 group relative overflow-hidden"
        >
          <span className="absolute w-full h-full bg-indigo-700 opacity-10 group-hover:scale-125 transition-transform duration-500 rounded-full"></span>
          <motion.span
            className="z-10"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <FaFileDownload />
          </motion.span>
          <span className="z-10">Download Resume</span>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Resume;
