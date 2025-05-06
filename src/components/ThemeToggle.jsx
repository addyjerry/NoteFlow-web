import React from "react";
import { useTheme } from "./ThemeContext";
import { SunDim, MoonStar, SunMoon } from "lucide-react";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div
      onClick={toggleTheme}
      className=" text-gray-800 dark:text-white border-none transition-colors duration-200 lg:mt-4 pl-5 lg:px-0 hover:cursor-pointer"
    >
      {darkMode ? <SunDim /> : <SunMoon />}
    </div>
  );
};

export default ThemeToggle;
