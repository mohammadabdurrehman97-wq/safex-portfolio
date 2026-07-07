"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto h-20 flex justify-between items-center px-6">

        <a href="#home">
          <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-600/30">
            AR
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          {links.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:text-blue-400 transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/resume.pdf"
          target="_blank"
          className="hidden md:block bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl transition"
        >
          Resume
        </a>

        {/* Mobile Button */}
        <button
  className="md:hidden text-white"
  onClick={() => setOpen(!open)}
>
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">

          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 border-b border-slate-800 hover:bg-slate-800 text-white hover:text-blue-400 transition"
            >
              {item.name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            className="block px-6 py-4 text-blue-400 hover:bg-slate-800"
          >
            Resume
          </a>

        </div>
      )}
    </nav>
  );
}