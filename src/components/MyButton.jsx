import React, { useState } from "react";

const MyButton = ({ className, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`border-2 border-white rounded-4xl lg:px-8 md:px-5 lg:py-4 py-3 px-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default MyButton;
