import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaFileAlt,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const navItems = [
  { id: "home", label: "Home", icon: <FaHome /> },
  { id: "about", label: "About", icon: <FaUser /> },
  { id: "skills", label: "Skills", icon: <FaCode /> },
  { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
  { id: "resume", label: "Resume", icon: <FaFileAlt /> },
  { id: "contact", label: "Contact", icon: <FaEnvelope /> },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section.id);
        }
      });

      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Animated logo text */}
        <h1 className="text-xl md:text-2xl font-extrabold tracking-wide text-blue-600 dark:text-white animate-pulse">
          Gauri Sharma
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map(({ id, label, icon }) => (
            <Link
              key={id}
              to={id}
              spy={true}
              smooth={true}
              duration={500}
              className={`group flex items-center gap-1 capitalize cursor-pointer text-sm md:text-base transition-all ${
                activeSection === id
                  ? "text-blue-600 dark:text-white font-semibold"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <span className="text-base">{icon}</span>
              {label}
              <span className="block w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Hamburger Toggle */}
        <div className="md:hidden text-2xl text-blue-600 dark:text-white cursor-pointer" onClick={handleToggle}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-4">
          <nav className="flex flex-col gap-4">
            {navItems.map(({ id, label, icon }) => (
              <Link
                key={id}
                to={id}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2 text-base transition-all ${
                  activeSection === id
                    ? "text-blue-600 dark:text-white font-semibold"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                <span className="text-base">{icon}</span>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
