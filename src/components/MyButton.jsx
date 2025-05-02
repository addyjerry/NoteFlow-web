import React, { useState } from "react";

const MyButton = ({ className, children, onClick }) => {
  const [color, setColor] = useState(false);
  const handleColor = () => {
    setColor(!color);
  };

  return (
    <button
      onClick={onClick}
      onMouseOver={handleColor}
      onMouseLeave={handleColor}
      className={`border-2 dark:border-white border-black text-black dark:text-white rounded-4xl lg:px-8 md:px-5 lg:py-4 py-3 px-2 cursor-pointer ${className} ${
        color ? "dark:bg-[#44e5e7]/100 border-1 bg-black text-white shadow " : ""
      }`}
    >
      {children}
    </button>
  );
};

export default MyButton;
