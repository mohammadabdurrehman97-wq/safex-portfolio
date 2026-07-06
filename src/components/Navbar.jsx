export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold text-blue-500">
          AR
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
  <li><a href="#home" className="hover:text-blue-400">Home</a></li>
  <li><a href="#about" className="hover:text-blue-400">About</a></li>
  <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
  <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
  <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
</ul>
        <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg">
          Resume
        </button>

      </div>
    </nav>
  );
}