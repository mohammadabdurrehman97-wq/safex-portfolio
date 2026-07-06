export default function About() {
  return (
    <section
  id="about"
  className="bg-slate-900 text-white py-24 px-6"
>
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              Who am I?
            </h3>

            <p className="text-gray-300 leading-8">
              I am Muhammad Abdur Rehman, a BSCS student at NUML.
              I enjoy creating modern websites using React,
              Next.js and Tailwind CSS.

              My goal is to become a professional Full Stack Developer
              and build real-world applications that solve problems.
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8">

            <h3 className="text-2xl font-semibold mb-6">
              Quick Info
            </h3>

            <ul className="space-y-4">

              <li>🎓 BSCS - NUML</li>

              <li>💻 Web Developer</li>

              <li>📍 Pakistan</li>

              <li>🚀 React • Next.js • Tailwind CSS</li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}