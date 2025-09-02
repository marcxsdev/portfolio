import { useState } from "react";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <section className="flex flex-col items-center">
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
    </section>
  );
};

export default Projects;
