import { useTheme } from "../context/ThemeContext";
import {
  FaJava,
  FaPython,
  FaJs,
  FaReact,
  FaNode,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaExternalLinkAlt,
  FaFileExcel,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiTailwindcss,
  SiExpress,
  SiSupabase,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";
import { motion } from "framer-motion";
import "../styles/Work.css";
import {
  FaComment,
  FaUsers,
  FaGlobe,
  FaPuzzlePiece,
  FaSyncAlt,
} from "react-icons/fa";

export default function Work() {
  const { darkMode } = useTheme();

  const projects = [
    {
      title: "AI Directory Manager",
      description:
        "A Python-Flask application that scans a directory, analyzes files, and provides insights on file types, sizes, and counts. It features a user-friendly interface for easy navigation and file management.",
      tags: ["Python", "Flask", "AI", "File Management"],
      github: "https://github.com/AaravKashyap12/AI-Directory-Manager",
      live: "https://ai-directory-manager.vercel.app/",
      image: "https://fuelyourdigital.com/wp-content/uploads/2025/01/ai-file-and-folder-name-software-1.webp",
      accentColor: "#6366f1",
    },
    {
      title: "Smart Closet Manager",
      description:
        "A weather-aware fashion assistant that suggests outfits based on current weather conditions. Built with JavaScript, it integrates Gemini and Weather APIs to provide real-time outfit recommendations.",
      tags: ["JavaScript", "Gemini API", "Weather API", "Fashion"],
      github: "https://github.com/AaravKashyap12/Smart-Closet-Manager",
      live: "https://smart-closet-manager.vercel.app/",
      image:"/image1.png",
      accentColor: "#f97316",
     
    },
    {
      title: "CPU Scheduler Visualizer",
      description:
        "A Python-Flask application that visualizes core OS scheduling algorithms like FCFS, SJF, RR, and Priority. It provides an interactive interface to simulate and understand CPU scheduling processes.",
      tags: ["Python", "Flask", "OS Scheduling", "Visualization"],
      github: "https://github.com/AaravKashyap12/CPU-Scheduling-simulator",
      live: "#",
      image:"/image.png",
      accentColor: "#3b82f6",
    },
  ];

  const techSkills = [
    {
      name: "Java",
      level: 50,
      icon: <FaJava />,
      category: "language",
      color: "#f89820",
    },
    {
      name: "C++",
      level: 60,
      icon: <SiCplusplus />,
      category: "language",
      color: "#00599c",
    },
    {
      name: "C",
      level: 60,
      icon: <div className="c-icon">C</div>,
      category: "language",
      color: "#555555",
    },
    {
      name: "Python",
      level: 60,
      icon: <FaPython />,
      category: "language",
      color: "#3776ab",
    },
    {
      name: "Excel",
      level: 80,
      icon: <FaFileExcel />,
      category: "language",
      color: "#f7df1e",
    },
   
    {
      name: "HTML",
      level: 60,
      icon: <FaHtml5 />,
      category: "frontend",
      color: "#e34f26",
    },
    {
      name: "CSS",
      level: 50,
      icon: <FaCss3Alt />,
      category: "frontend",
      color: "#1572b6",
    },



    {
      name: "MySQL",
      level: 65,
      icon: <SiMysql />,
      category: "database",
      color: "#4479a1",
    },

    
    {
      name: "Git",
      level: 60,
      icon: <FaGitAlt />,
      category: "tool",
      color: "#f05032",
    },
  ];

  const softSkills = [
    { name: "Communication", level: 90, icon: <FaComment /> },
    { name: "Teamwork", level: 90, icon: <FaUsers /> },
    { name: "Networking", level: 80, icon: <FaGlobe /> },
    { name: "Problem Solving", level: 80, icon: <FaPuzzlePiece /> },
    { name: "Adaptability", level: 100, icon: <FaSyncAlt /> },
  ];

  return (
    <main className={`work-container ${darkMode ? "dark" : ""}`}>
      <div className="intro-content">
        <h1 className="intro-heading">Hey, I'm Aarav!</h1>
        <h2 className="intro-subheading">
          Just a <span className="highlight2">CS major</span> who enjoys
          building <span className="highlight4">cool stuff</span> and turning{" "}
          <span className="highlight1">random ideas</span> into working{" "}
          <span className="highlight3">code.</span>
        </h2>
      </div>

      <div className="projects-section">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="project-card"
              style={{ "--accent": project.accentColor }}
            >
              <div className="project-image-container">
                <div
                  className="project-image"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
              </div>

              <div className="project-content">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-links">
                  <a
                    href={project.github}
                    className="project-link"
                    aria-label="GitHub repository"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.live}
                    className="project-link"
                    aria-label="Live demo"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="skills-section">
        <h2 className="skills-title">Skills</h2>

        <div className="skills-categories">
          <div className="technical-skills">
            <h3 className="skills-subtitle">Technical Skills</h3>
            <div className="skills-grid">
              {techSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="skill-card"
                  style={{
                    "--skill-color": skill.color,
                    "--card-bg": darkMode
                      ? "rgba(30, 30, 30, 0.7)"
                      : "rgba(255, 255, 255, 0.9)",
                  }}
                >
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-level-container">
                      <span className="skill-percent">{skill.level}%</span>
                      <div className="skill-level-bar">
                        <motion.div
                          className="skill-level-fill"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          style={{ backgroundColor: skill.color }}
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="soft-skills">
            <h3 className="skills-subtitle">Soft Skills</h3>
            <div className="soft-skills-container">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05 + techSkills.length * 0.05,
                  }}
                  className="soft-skill-item"
                >
                  <div
                    className="soft-skill-icon"
                    style={{ color: "var(--accent-color)" }}
                  >
                    {skill.icon}
                  </div>
                  <div className="soft-skill-content">
                    <span className="soft-skill-name">{skill.name}</span>
                    <div className="skill-dots">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`dot ${
                            i < Math.floor(skill.level / 20) ? "filled" : ""
                          }`}
                          style={{
                            background:
                              i < Math.floor(skill.level / 20)
                                ? `var(--accent-color)`
                                : `var(--skill-dot-empty)`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
