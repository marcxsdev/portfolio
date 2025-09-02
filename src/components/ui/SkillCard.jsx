const SkillCard = ({ name, icon }) => {
  return (
    <div className="w-[203px] h-[245px] rounded-xl border border-black/20 flex flex-col gap-11 justify-center items-center">
      <img src={icon} alt={name} />
      <span className="text-black text-center font-raleway text-2xl font-bold">
        {name}
      </span>
    </div>
  );
};

export default SkillCard;
