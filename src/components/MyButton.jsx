import React from "react";

const MyButton = ({ children }) => {
  return (
    <button className="border-2 border-white bg-blue-500 rounded p-4 ">
      {children}
    </button>
  );
};

export default MyButton;
