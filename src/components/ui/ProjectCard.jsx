import Button from "../common/Button";
import { Github } from "lucide-react";

const ProjectCard = ({
  image,
  title,
  descriptionMobile,
  descriptionFull,
  repoLink,
}) => {
  return (
    <div className="flex flex-col md:flex-row-reverse w-73 md:w-[684px] lg:w-[720px] rounded-xl border border-black/20 overflow-hidden my-16">
      <div className="flex-none w-full h-75 md:w-[310px] md:h-[570px] lg:w-[344px] lg:h-[600px] overflow-hidden flex justify-center items-center">
        <img
          src={image}
          alt={`${title} logo`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-between">
        <div className="">
          <div className="flex flex-col px-6 pt-6 md:gap-6 md:pl-6 md:pr-14 md:pt-16">
            <h3 className="text-black font-raleway text-[26px] font-bold md:text-4xl">
              {title}
            </h3>
            <p className="md:hidden text-[#666] font-raleway text-sm leading-5 font-medium">
              {descriptionMobile}
            </p>
            <p className="hidden md:block text-[#666] font-raleway text-base leading-5 font-medium">
              {descriptionFull}
            </p>
          </div>
        </div>

        <div className="py-7 px-4 mt-2">
          <Button
            href={repoLink}
            icon={<Github color="#ffffff" />}
            className={"py-2 w-64 rounded-[100px]"}
          >
            Repository
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
