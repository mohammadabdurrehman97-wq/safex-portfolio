export default function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Firebase",
    "Git & GitHub",
  ];

  return (
    <section
  id="skills"
  className="bg-slate-950 text-white py-24 px-6"
>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          My Skills
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Technologies I use to build modern web applications.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800 hover:bg-blue-600 transition duration-300 rounded-2xl p-6 text-center shadow-lg hover:scale-105"
            >
              <h3 className="font-semibold text-lg">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}