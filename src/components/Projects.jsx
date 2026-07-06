export default function Projects() {
  const projects = [
    {
      title: "Transport Operations & Safety Management System",
      description:
        "A smart transport management system with route tracking, vehicle rental, and student management.",
      tech: "React Native • Firebase • Next.js",
    },
    {
      title: "Student Guidance Portal",
      description:
        "A web-based academic guidance system that helps students with course planning and academic information.",
      tech: "Next.js • Tailwind CSS • Firebase",
    },
    {
      title: "SafeX Portfolio Website",
      description:
        "A modern portfolio website developed during the SafeX Internship using Next.js and Tailwind CSS.",
      tech: "Next.js • Tailwind CSS",
    },
  ];

  return (
    <section
  id="projects"
  className="bg-slate-900 text-white py-24 px-6"
>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          My Projects
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Some of my recent work.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-6 hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-6">
                {project.description}
              </p>

              <span className="text-sm text-gray-400">
                {project.tech}
              </span>

              <div className="mt-6">
                <button className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}