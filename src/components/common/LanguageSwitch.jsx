import React, { useState } from "react";

const LanguageSwitch = () => {
  const [isEN, setIsEN] = useState(true);

  const toggleLanguage = () => {
    setIsEN(!isEN);
  };

  return (
    <div
      className="relative w-[121px] h-7 bg-white rounded-full shadow-[inset_0_6px_8px_3px_rgba(0,0,0,0.1)] flex items-center cursor-pointer overflow-hidden"
      onClick={toggleLanguage}
    >
      <div className="flex w-full z-10 text-black font-medium text-sm">
        <div className="w-[60.5px] text-center">EN</div>
        <div className="w-[60.5px] text-center">PT</div>
      </div>

      <div
        className={`absolute top-0 left-0 w-[65px] h-7 bg-[#EFEFEF] rounded-full shadow-[inset_0_6px_8px_3px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out ${
          !isEN ? "translate-x-[56px]" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
};

export default LanguageSwitch;
