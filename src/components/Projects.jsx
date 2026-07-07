"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Transport Operations & Safety Management System",
      description:
        "A smart transport management system with route tracking, vehicle rental, student management and real-time Firebase integration.",
      tech: ["React Native", "Firebase", "Next.js"],
      github: "#",
      live: "#",
    },
    {
      title: "Student Guidance Portal",
      description:
        "An academic guidance platform that helps students with degree planning, course selection and university information.",
      tech: ["Next.js", "Tailwind CSS", "Firebase"],
      github: "#",
      live: "#",
    },
    {
      title: "SafeX Portfolio Website",
      description:
        "A modern responsive portfolio website built during the SafeX Internship using Next.js, Tailwind CSS and Framer Motion.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/mohammadabdurrehman97-wq/safex-portfolio",
      live: "https://safex-portfolio.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-4"
        >
          My Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 mb-14 text-lg"
        >
          Here are some projects I have built using modern web technologies.
        </motion.p>

        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{ y: -10 }}
              className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-xl hover:border-blue-500 transition"
            >
              {/* Project Header */}
              <div className="h-40 bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white text-center px-4">
                  {project.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-400 leading-7">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="bg-blue-600/20 text-blue-400 border border-blue-500 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-slate-800 hover:bg-blue-600 transition px-4 py-2 rounded-xl"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-xl"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}