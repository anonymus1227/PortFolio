import React, { useState } from "react";

import portfolioImage from "/images/projects/portfolio.png";
import currencyConverterImage from "/images/projects/currency-converter.webp";
import netflixImage from "/images/projects/netflix.png";

const Projects = () => {
  const [projects] = useState([
    {
      _id: "1",
      title: "Portfolio",
      description: "A modern personal portfolio showcasing skills and projects.",
      techStack: ["React", "Tailwind", "Node.js", "Mongo-Db"],
      image: portfolioImage,
    },
    {
      _id: "2",
      title: "Currency Converter",
      description: "A real-time currency converter with exchange rate API integration.",
      techStack: ["Razor View", "API", ".Net", "SQL"],
      image: currencyConverterImage,
    },
    {
      _id: "3",
      title: "Netflix Clone",
      description: "A real-time Netflix streaming app.",
      techStack: ["React", "API", "JavaScript", "Node", "Mongo-Db"],
      image: netflixImage,
    },
  ]);

  return (
    <div className="bg-gradient-to-r from-black/60 to-purple-800/35 text-white py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-purple-500">
        My Projects
      </h1>

      {/* Grid with 3 columns always */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-gradient-to-r from-black/60 to-purple-800/35 p-4 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-2xl max-w-md mx-auto"
          >
            <img
              src={project.image} // ✅ FIXED: Removed `/images/`
              alt={project.title}
              className="w-full h-40 rounded-lg object-cover"
            />

            <div className="p-3">
              <h2 className="text-xl font-semibold text-purple-400">
                {project.title}
              </h2>
              <p className="text-gray-300 text-sm mt-2">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-purple-600 px-2 py-1 text-xs rounded-md"
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
