import { useState } from "react";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <section id="projects" className="flex flex-col items-center py-14">
      <h2 className="text-black font-raleway text-[52px] font-extrabold text-center py-5 md:text-6xl md:py-8">
        Projects
      </h2>
      <div className="lg:hidden">
        {projects.map((projects, index) => (
          <ProjectCard
            key={index}
            image={projects.image}
            title={projects.title}
            descriptionMobile={projects.descriptionMobile}
            descriptionFull={projects.descriptionFull}
            repoLink={projects.repoLink}
          />
        ))}
      </div>

      <div className="hidden lg:flex lg:flex-row lg:items-center lg:gap-28">
        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setSelectedProject(index)}
              className="flex flex-row items-center gap-2 group transition-all duration-300 cursor-pointer"
            >
              <div
                className={`h-[5px] rounded-sm transition-all duration-500 ease-in-out ${
                  selectedProject === index
                    ? "w-[308px] bg-black"
                    : "w-[226px] bg-gray-400 group-hover:bg-gray-600"
                }`}
              />

              <span
                className={`text-xl font-raleway font-bold transition-colors duration-300 ${
                  selectedProject === index
                    ? "text-black"
                    : "text-gray-600 group-hover:text-black"
                }`}
              >
                {project.title}
              </span>
            </button>
          ))}
        </div>

        {projects.length > 0 && (
          <ProjectCard
            image={projects[selectedProject].image}
            title={projects[selectedProject].title}
            descriptionMobile={projects[selectedProject].descriptionMobile}
            descriptionFull={projects[selectedProject].descriptionFull}
            repoLink={projects[selectedProject].repoLink}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
