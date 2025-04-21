import React, { useState } from "react";

const MyButton = ({ className, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`border-2 border-white rounded-4xl px-8 py-4 ${className}`}
    >
      {children}
    </button>
  );
};

export default MyButton;
