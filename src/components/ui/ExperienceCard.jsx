const ExperienceCard = ({ logo, company, role, description, tags }) => {
  return (
    <div className="relative w-[333px] h-[470px] rounded-xl border border-black/20 lg:w-[390px] lg:h-[470px] overflow-hidden">
      <div className="w-full h-[235px] overflow-hidden">
        <img
          src={logo}
          alt={`${company} logo`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="px-6 mt-5">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h3 className="text-black font-raleway text-[26px] font-bold">
              {company}
            </h3>
            <h4 className="text-black font-raleway text-base font-bold">
              {role}
            </h4>
          </div>

          <p className="text-[#666] font-raleway text-sm leading-5 font-medium">
            {description}
          </p>
        </div>
      </div>

      <div className="absolute bottom-[26px] left-6 flex flex-row gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="py-2 px-3 border border-[#3C3C43] rounded-[100px] text-[#3C3C43] font-raleway text-[12px]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
