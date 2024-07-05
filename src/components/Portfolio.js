import {
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Palmtree,
  Sun,
  X,
} from "lucide-react";
import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A brief description of Project 1",
    image: "https://via.placeholder.com/800x600",
  },
  {
    id: 2,
    title: "Project 2",
    description: "A brief description of Project 2",
    image: "https://via.placeholder.com/800x600",
  },
  {
    id: 3,
    title: "Project 3",
    description: "A brief description of Project 3",
    image: "https://via.placeholder.com/800x600",
  },
];

const skills = ["React", "JavaScript", "HTML/CSS", "Node.js", "Python", "SQL"];

const ThemeToggle = ({ currentTheme, setTheme }) => (
  <div className="flex space-x-2">
    <button
      onClick={() => setTheme("light")}
      className={`p-2 rounded-full ${
        currentTheme === "light" ? "bg-gray-200" : ""
      }`}
    >
      <Sun size={20} className="text-yellow-500" />
    </button>
    <button
      onClick={() => setTheme("dark")}
      className={`p-2 rounded-full ${
        currentTheme === "dark" ? "bg-gray-700" : ""
      }`}
    >
      <Moon size={20} className="text-blue-500" />
    </button>
    <button
      onClick={() => setTheme("vaporwave")}
      className={`p-2 rounded-full ${
        currentTheme === "vaporwave" ? "bg-pink-500" : ""
      }`}
    >
      <Palmtree size={20} className="text-teal-300" />
    </button>
  </div>
);

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const themeColors = {
    light: {
      bg: "bg-gray-50",
      text: "text-gray-900",
      accent: "text-pink-500",
      navBg: "bg-white",
      cardBg: "bg-white",
      button: "bg-pink-400 hover:bg-pink-500 text-white",
      buttonOutline:
        "border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white",
      avatarBg: "bg-pink-200",
    },
    dark: {
      bg: "bg-gray-900",
      text: "text-gray-100",
      accent: "text-blue-400",
      navBg: "bg-gray-800",
      cardBg: "bg-gray-800",
      button: "bg-blue-500 hover:bg-blue-600 text-white",
      buttonOutline:
        "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900",
      avatarBg: "bg-blue-500",
    },
    vaporwave: {
      bg: "bg-gradient-to-br from-purple-700 via-pink-500 to-teal-300",
      text: "text-white",
      accent: "text-yellow-300",
      navBg: "bg-purple-800 bg-opacity-50",
      cardBg: "bg-pink-500 bg-opacity-30 backdrop-blur-md",
      button: "bg-teal-300 hover:bg-teal-400 text-purple-900",
      buttonOutline:
        "border-teal-300 text-teal-300 hover:bg-teal-300 hover:text-purple-900",
      avatarBg: "bg-gradient-to-r from-yellow-300 via-pink-500 to-teal-300",
    },
  };

  const colors = themeColors[theme];

  return (
    <div
      className={`min-h-screen font-sans transition-all duration-300 ${colors.bg} ${colors.text}`}
    >
      <nav className={`${colors.navBg} shadow-md sticky top-0 z-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className={`font-bold text-xl ${colors.accent}`}>
                Georgi
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                {["Home", "Projects", "Skills", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${colors.text} hover:${colors.accent}`}
                  >
                    {item}
                  </a>
                ))}
                <ThemeToggle currentTheme={theme} setTheme={setTheme} />
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <ThemeToggle currentTheme={theme} setTheme={setTheme} />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`ml-2 ${colors.text} hover:${colors.accent} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${colors.accent}`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div
            className={`md:hidden absolute top-16 inset-x-0 z-10 ${colors.navBg} shadow-lg`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {["Home", "Projects", "Skills", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${colors.text} hover:${colors.accent}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section id="home" className="mb-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-6xl font-bold mb-2">Hi,</h1>
              <h2 className="text-5xl font-bold mb-4">I'm Georgi</h2>
              <p className={`text-3xl mb-6 font-light ${colors.accent}`}>
                Full Stack Developer
              </p>
              <p className="text-lg mb-8">
                Crafting elegant, efficient, and user-friendly web experiences
                with a touch of ethereal beauty. Passionate about creating
                digital solutions that inspire and delight.
              </p>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#contact"
                  className={`inline-block font-bold py-2 px-6 rounded-full transition duration-300 ${colors.button}`}
                >
                  Contact Me
                </a>
                <a
                  href="#projects"
                  className={`inline-block bg-transparent font-bold py-2 px-6 border-2 rounded-full transition duration-300 ${colors.buttonOutline}`}
                >
                  View Projects
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <img
                src="https://via.placeholder.com/600x600"
                alt="Georgi"
                className="relative z-10 rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto md:mx-0"
                style={{ marginLeft: "45px" }} // Adjust this value to move the avatar more or less to the right
              />
            </div>
          </div>
        </section>
        <section id="projects" className="mb-20">
          <h2 className={`text-4xl font-bold mb-8 ${colors.accent}`}>
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`${
                  colors.cardBg
                } rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 ${
                  theme === "vaporwave" ? "border-2 border-teal-300" : ""
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className={`font-bold text-xl mb-3 ${colors.accent}`}>
                    {project.title}
                  </h3>
                  <p className={`mb-4 ${colors.text}`}>{project.description}</p>
                  <a
                    href="#"
                    className={`inline-block font-bold py-2 px-4 rounded transition duration-300 ${colors.button}`}
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="skills" className="mb-20">
          <h2 className={`text-4xl font-bold mb-8 ${colors.accent}`}>Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`${
                  colors.cardBg
                } rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 ${
                  theme === "vaporwave" ? "border-2 border-yellow-300" : ""
                }`}
              >
                <h3
                  className={`font-bold text-xl text-center ${
                    theme === "vaporwave" ? "text-teal-300" : colors.text
                  }`}
                >
                  {skill}
                </h3>
              </div>
            ))}
          </div>
        </section>
        <section id="contact">
          <h2 className={`text-4xl font-bold mb-8 ${colors.accent}`}>
            Contact
          </h2>
          <div
            className={`${
              colors.cardBg
            } rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300 ${
              theme === "vaporwave" ? "border-2 border-pink-500" : ""
            }`}
          >
            <div className="flex justify-center space-x-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${colors.text} hover:${colors.accent} transition duration-300`}
              >
                <Github size={32} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${colors.text} hover:${colors.accent} transition duration-300`}
              >
                <Linkedin size={32} />
              </a>
              <a
                href="mailto:janedoe@example.com"
                className={`${colors.text} hover:${colors.accent} transition duration-300`}
              >
                <Mail size={32} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer
        className={`${colors.navBg} text-center py-8 mt-20 ${colors.text}`}
      >
        <p>&copy; 2024 Georgi. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
