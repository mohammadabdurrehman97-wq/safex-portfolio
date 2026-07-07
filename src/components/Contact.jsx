"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      icon: <FaEnvelope className="text-4xl text-blue-400" />,
      title: "Email",
      value: "mohammadabdurrehman97@gmail.com",
      link: "mailto:mohammadabdurrehman97@gmail.com",
    },
    {
      icon: <FaGithub className="text-4xl text-blue-400" />,
      title: "GitHub",
      value: "github.com/mohammadabdurrehman97-wq",
      link: "https://github.com/mohammadabdurrehman97-wq",
    },
    {
      icon: <FaLinkedin className="text-4xl text-blue-400" />,
      title: "LinkedIn",
      value: "linkedin.com/Mohammad AbdurRehman",
      link: "https://linkedin.com/in/mohammad-abdur-rehman-84b8b1355",
    },
    {
      icon: <FaMapMarkerAlt className="text-4xl text-blue-400" />,
      title: "Location",
      value: "Islamabad, Pakistan",
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-4"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-gray-400 mb-14 text-lg"
        >
          Let's connect and build something amazing together.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {contacts.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center hover:border-blue-500 transition shadow-xl"
            >
              <div className="flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-4 break-words">
                {item.value}
              </p>
            </motion.a>
          ))}

        </div>

      </div>
    </section>
  );
}