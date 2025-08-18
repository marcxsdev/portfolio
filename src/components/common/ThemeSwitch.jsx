import { useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="transition-transform duration-200 ease-in-out hover:scale-110 active:scale-95"
    >
      {isDarkMode ? (
        <Sun className="w-6 h-6 text-white transition-all duration-300 ease-in-out animate-in spin-in-180 cursor-pointer" />
      ) : (
        <Moon className="w-6 h-6 text-black transition-all duration-300 ease-in-out animate-in spin-in-180 cursor-pointer" />
      )}
    </button>
  );
};

export default ThemeSwitch;
