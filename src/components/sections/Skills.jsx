import SkillCard from "../ui/SkillCard";
import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="py-14">
      <div className="mx-auto max-w-[1440px] px-[30px] md:px-[75px]">
        <h2 className="text-black font-raleway text-[52px] font-extrabold text-center py-5 md:text-6xl md:py-8">
          Skills
        </h2>

        <div
          className="
            flex flex-col items-center gap-10
            md:grid md:grid-cols-2 md:gap-x-[70px] md:gap-y-[34px] md:max-w-[476px] md:mx-auto md:items-start
            lg:flex lg:flex-row lg:justify-center lg:gap-[70px]
          "
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                md:flex md:justify-center
                md:[&:nth-child(5)]:col-span-2
              "
            >
              <SkillCard name={skill.name} icon={skill.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
