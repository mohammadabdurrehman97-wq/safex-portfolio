import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
  id="home"
  className="min-h-screen bg-slate-950 text-white flex items-center"
>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <p className="text-blue-400 text-lg mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Muhammad
            <br />
            <span className="text-blue-500">
              Abdur Rehman
            </span>
          </h1>

          <h2 className="text-2xl text-gray-300 mt-6">
            Web Developer | BSCS Student
          </h2>

          <p className="text-gray-400 mt-6 leading-8">
            Passionate about building modern and responsive web applications
            using React, Next.js and Tailwind CSS.
          </p>

          <div className="flex gap-4 mt-8">
            <a
  href="#projects"
  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold"
>
  View Projects
</a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="border border-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600 transition"
            >
              Resume
            </a>
          </div>

          <div className="flex gap-5 mt-8 text-3xl">
            <a href="#">
              <FaGithub className="hover:text-blue-500 transition" />
            </a>

            <a href="#">
              <FaLinkedin className="hover:text-blue-500 transition" />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="relative">

            <div className="absolute inset-0 bg-blue-600 blur-3xl opacity-30 rounded-full"></div>

            <Image
              src="/profile.jpg"
              alt="Profile"
              width={380}
              height={380}
              className="rounded-full border-4 border-blue-500 relative"
            />

          </div>
        </div>

      </div>
    </section>
  );
}