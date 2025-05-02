import React from "react";
import { useTheme } from "./ThemeContext";
import { SunDim, MoonStar } from "lucide-react";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div
      onClick={toggleTheme}
      className=" text-gray-800 dark:text-gray-200 border-none transition-colors duration-200"
    >
      {darkMode ? <SunDim /> : <MoonStar />}
    </div>
  );
};

export default ThemeToggle;
