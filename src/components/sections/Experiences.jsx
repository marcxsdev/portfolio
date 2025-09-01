import { experiences } from "../../data/experiences";
import ExperienceCard from "../ui/ExperienceCard";

const Experiences = () => {
  return (
    <section className="py-10">
      <h2 className="text-black font-raleway text-[52px] font-extrabold text-center py-5 md:text-6xl md:py-8">
        Experiences
      </h2>

      <div className="flex flex-col justify-center items-center gap-8 md:flex-row lg:flex-row">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            company={exp.company}
            logo={exp.logo}
            role={exp.role}
            description={exp.description}
            tags={exp.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
