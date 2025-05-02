import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul className="lg:flex list-none gap-7 hidden ">
        <li>Home</li>
        <li>Pricing</li>
        <li>About</li>
        <li>Community</li>
      </ul>
    </nav>
  );
};

export default Navbar;
