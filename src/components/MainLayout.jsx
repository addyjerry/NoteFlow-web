import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="py-10 lg:px-22 md:px-10 px-5 place-items-center justify-between lg:text-xl/relaxed text-md dark:text-white dark:bg-gradient-to-t from-[#0c2222] to-[#0E2E2E] bg-white overflow-x-hidden">
      {children}
    </div>
  );
};

export default MainLayout;
