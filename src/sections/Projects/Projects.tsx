import { projects } from "../../data/projects";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <section className="min-h-screen bg-slate-800 text-white px-8 py-20">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">
          Projects
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-300 text-center max-w-2xl mx-auto">
          Some of the full-stack projects I've built to strengthen my development skills.
        </p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">

          {projects.map((project) => (

            <div
              key={project.title}
              className="bg-slate-900 border border-slate-700 rounded-xl p-7 transition duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-xl"
            >

              {/* Project Title */}
              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-gray-300 leading-7">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mt-6">

                {project.techStack.map((tech) => (

                  <span
                    key={tech}
                    className="bg-slate-700 px-4 py-2 rounded-full text-sm transition-all duration-300 hover:bg-sky-500 hover:scale-105"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-8">

                <a
                  href={project.github}
                  className="flex items-center gap-2 border border-slate-600 px-5 py-3 rounded-lg hover:border-sky-500 transition"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.live}
                  className="flex items-center gap-2 bg-sky-500 px-5 py-3 rounded-lg hover:bg-sky-600 transition"
                >
                  <FiExternalLink />
                  Live Demo
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;