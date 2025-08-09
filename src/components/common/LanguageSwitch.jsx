import { useLanguage } from "../../context/LanguageContext";

const LanguageSwitch = () => {
  return (
    <button
      className={`relative w-32 h-14 flex items-center px-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 shadow-xl hover:cursor-pointer transition-all duration-300`}
    >
      <div
        className={`absolute left-2 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-500 `}
      ></div>

      <div className="flex w-full justify-between items-center px-5 text-white font-semibold"></div>
    </button>
  );
};

export default LanguageSwitch;
