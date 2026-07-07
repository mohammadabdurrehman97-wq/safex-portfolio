"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl bottom-0 right-0"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 text-lg mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Muhammad
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Abdur Rehman
            </span>
          </h1>

          <div className="text-2xl md:text-3xl font-semibold text-blue-400 mt-6 h-12">
            <TypeAnimation
              sequence={[
                "Web Developer",
                1500,
                "React Developer",
                1500,
                "Next.js Developer",
                1500,
                "Frontend Developer",
                1500,
              ]}
              speed={40}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-400 mt-6 leading-8 max-w-xl">
            Passionate about building modern, responsive and user-friendly web
            applications using React, Next.js, Tailwind CSS and Firebase.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition shadow-lg shadow-blue-500/30"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="border border-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600 transition"
            >
              Download Resume
            </a>
          </div>

          <div className="flex gap-6 mt-8 text-3xl">
            <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-blue-500 hover:scale-110 transition" />
            </a>

            <a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-blue-500 hover:scale-110 transition" />
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 blur-3xl opacity-30 rounded-full"></div>

            <Image
              src="/profile.jpg"
              alt="Profile"
              width={380}
              height={380}
              priority
              className="rounded-full border-4 border-blue-500 shadow-2xl shadow-blue-500/40 hover:scale-105 transition duration-500"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}