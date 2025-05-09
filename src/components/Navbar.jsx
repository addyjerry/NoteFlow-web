import React from "react";

const Navbar = () => {
  const menus = ["Home", "Pricing", "About", "Community"];
  return (
    <nav>
      <ul className="lg:flex justify-between p-2 hidden mt-1 ">
        {menus.map((menu) => (
          <li
            key={menu.index}
            className="hover:font-bold px-2 hover:cursor-pointer"
          >
            {menu}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
