import React, { useState } from "react";

const Projects = () => {
  const [projects] = useState([
    {
      _id: "1",
      title: "Portfolio",
      description: "A modern personal portfolio showcasing skills and projects.",
      techStack: ["React", "Tailwind", "Node.js"],
      image: "portfolio.png",
    },
    {
      _id: "2",
      title: "Currency Converter",
      description: "A real-time currency converter with exchange rate API integration.",
      techStack: ["React", "API", "JavaScript"],
      image: "currency-converter.png",
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-black/60 to-purple-800/35 text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-500">
        My Projects
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project._id}
            className="relative bg-gradient-to-r from-black/60 to-purple-800/35 p-5 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={`/images/${project.image}`}
              alt={project.title}
              className="w-full h-48 rounded-lg object-cover"
            />

            <div className="p-4">
              <h2 className="text-2xl font-semibold text-purple-400">
                {project.title}
              </h2>
              <p className="text-gray-300 text-sm mt-2">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-purple-600 px-3 py-1 text-sm rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
