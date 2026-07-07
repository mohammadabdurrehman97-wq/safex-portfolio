"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-orange-500 text-5xl" />,
      level: "Advanced",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-blue-500 text-5xl" />,
      level: "Advanced",
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400 text-5xl" />,
      level: "Intermediate",
    },
    {
      name: "React.js",
      icon: <FaReact className="text-cyan-400 text-5xl" />,
      level: "Intermediate",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-white text-5xl" />,
      level: "Intermediate",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-400 text-5xl" />,
      level: "Advanced",
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-yellow-500 text-5xl" />,
      level: "Intermediate",
    },
    {
      name: "Git & GitHub",
      icon: <FaGitAlt className="text-orange-600 text-5xl" />,
      level: "Intermediate",
    },
  ];

  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-4"
        >
          My Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 mb-14 text-lg"
        >
          Technologies I use to build modern and responsive web applications.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center hover:border-blue-500 transition shadow-xl"
            >
              <div className="flex justify-center mb-5">
                {skill.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {skill.name}
              </h3>

              <p className="text-gray-400 mt-2">
                {skill.level}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}