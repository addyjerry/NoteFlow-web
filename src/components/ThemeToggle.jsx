// src/components/ThemeToggle.js
import React from "react";
import { useTheme } from "./ThemeContext";
import { SquareX, LayoutGrid, SunDim, MoonStar } from "lucide-react";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className=" text-gray-800 dark:text-gray-200 border-none transition-colors duration-200"
    >
      {darkMode ? <SunDim /> : <MoonStar />}
    </button>
  );
};

export default ThemeToggle;
