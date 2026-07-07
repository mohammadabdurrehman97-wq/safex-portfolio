"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaCode, FaRocket } from "react-icons/fa";

export default function About() {
  const stats = [
    {
      icon: <FaGraduationCap className="text-4xl text-blue-400" />,
      title: "Education",
      value: "BSCS - NUML",
    },
    {
      icon: <FaLaptopCode className="text-4xl text-blue-400" />,
      title: "Experience",
      value: "Web Development",
    },
    {
      icon: <FaCode className="text-4xl text-blue-400" />,
      title: "Tech Stack",
      value: "React • Next.js • Firebase",
    },
    {
      icon: <FaRocket className="text-4xl text-blue-400" />,
      title: "Goal",
      value: "Full Stack Developer",
    },
  ];

  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-5"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-gray-400 max-w-3xl mx-auto mb-16 text-lg"
        >
          I am a BSCS student at NUML with a passion for building modern,
          responsive and user-friendly web applications using React, Next.js,
          Tailwind CSS and Firebase.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-blue-400">
              Who am I?
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              Hi! I'm <span className="text-white font-semibold">Muhammad Abdur Rehman</span>,
              a Computer Science student at NUML who enjoys building clean,
              responsive and modern web applications.

              <br /><br />

              I have worked with React, Next.js, Tailwind CSS and Firebase
              to develop projects such as a Smart Transport Management System,
              Student Guidance Portal and this personal portfolio.

              <br /><br />

              I enjoy learning new technologies and solving real-world
              problems through software development. My goal is to become
              a professional Full Stack Developer.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="grid sm:grid-cols-2 gap-6"
          >

            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 hover:-translate-y-2 transition duration-300 shadow-xl"
              >
                <div className="mb-5">
                  {item.icon}
                </div>

                <h4 className="text-xl font-bold mb-2">
                  {item.title}
                </h4>

                <p className="text-gray-400">
                  {item.value}
                </p>
              </div>
            ))}

          </motion.div>

        </div>

      </div>
    </section>
  );
}