import React from "react";

const MyButton = ({ children, onClick, className }) => {
  return (
    <button
      className={`py-3 px-5 lg:text-xl border-1 bprder-black rounded-4xl cursor-pointer flex gap-2 hover:bg-[#44e5e7] hover:text-white hover:border-none ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MyButton;
