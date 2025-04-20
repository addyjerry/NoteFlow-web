import React from "react";
import Logo from "../assets/images/Logo.webp";
import Navbar from "./Navbar";
import MyButton from "./MyButton";

const Header = () => {
  return (
    <section className="flex gap-44 py-1 items-center-safe ">
      <span className="flex font-bold text-xl gap-3">
        <img src={Logo} alt="NoteFlow Logo" className="size-[28px]" />
        <p>NoteFlow</p>
      </span>
      <Navbar />
      <div className="flex gap-3 mt-[-1.2rem]">
        <MyButton>Login</MyButton>
        <MyButton className="bg-[#44e5e7]/100 text-black border-none">
          Get Started
        </MyButton>
      </div>
    </section>
  );
};

export default Header;
