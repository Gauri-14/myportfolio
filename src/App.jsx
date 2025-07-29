import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";
import { motion } from "framer-motion";
import NavBar from "./components/NavBar";
function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen"
    >
      <header className="flex justify-end p-4">
        <ThemeToggle />
      </header>
      <main>
        <NavBar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </motion.div>
  );
}

export default App;
