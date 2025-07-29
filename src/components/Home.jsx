import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  // Mouse-based glowing animation setup
  const mouseX = useMotionValue(window.innerWidth / 2);
  const mouseY = useMotionValue(window.innerHeight / 2);

  const glowTranslateX = useTransform(mouseX, [0, window.innerWidth], ["-50%", "50%"]);
  const glowTranslateY = useTransform(mouseY, [0, window.innerHeight], ["-50%", "50%"]);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <motion.section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative flex flex-col items-center justify-center text-center min-h-screen px-4 bg-gradient-to-br from-indigo-500 to-purple-600 text-white overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Dynamic Glow Pulse */}
      <motion.div
        style={{
          translateX: glowTranslateX,
          translateY: glowTranslateY,
        }}
        className="absolute w-72 h-72 bg-pink-500/30 rounded-full blur-2xl z-0 pointer-events-none animate-pulse"
      />

      {/* Static background circles */}
      <div className="absolute w-72 h-72 bg-pink-400 opacity-30 rounded-full blur-3xl top-10 left-[-50px] z-0"></div>
      <div className="absolute w-72 h-72 bg-yellow-300 opacity-20 rounded-full blur-2xl bottom-10 right-[-50px] z-0"></div>

      {/* Main Content */}
      <div className="z-10">
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold mb-4"
          variants={childVariants}
        >
          Hi, I'm <span className="text-yellow-300">Gauri Sharma</span>
        </motion.h1>

        <motion.div variants={childVariants}>
          <TypeAnimation
            sequence={[
              "B.Tech Final Year CSE Student 👩‍🎓",
              1500,
              "AI/ML Enthusiast 🤖",
              1500,
              "Cybersecurity & AI/ML Intern at DRDO 🔐",
              1500,
              "Loves Coding 💻",
              1500,
              "Eager Learner 📚",
              1500,
              "Problem Solver 🧠",
              1500,
            ]}
            wrapper="span"
            speed={50}
            className="text-2xl sm:text-3xl font-medium"
            repeat={Infinity}
          />
        </motion.div>

        <motion.div
          className="mt-8 flex gap-4 justify-center"
          variants={childVariants}
        >
          <a
            href="#projects"
            className="bg-white text-indigo-700 px-6 py-2 rounded-xl font-semibold shadow-md hover:scale-110 hover:shadow-lg flex items-center gap-2 transition-all duration-200"
          >
            🚀 My Work
          </a>
          <button
            onClick={() => setShowModal(true)}
            className="bg-yellow-300 text-gray-900 px-6 py-2 rounded-xl font-semibold shadow-md hover:scale-110 hover:shadow-lg flex items-center gap-2 transition-all duration-200"
          >
            📄 Quick Overview
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 text-sm text-white/70"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ↓ Scroll to know more
      </motion.div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white text-gray-900 max-w-md w-full p-6 rounded-2xl shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-4">👋 About Me!</h2>
            <p className="text-sm leading-relaxed">
              I'm a passionate final-year B.Tech Computer Science student with a strong interest in AI/ML, cybersecurity, and full-stack web development. Currently interning at DRDO, I enjoy building smart systems and secure apps. I’m a fast learner who loves turning ideas into real-world solutions using modern tech. Whether it's coding, debugging, or designing — I love it all.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </motion.section>
  );
}
