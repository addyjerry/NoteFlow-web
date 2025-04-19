import React from "react";
import Logo from "../assets/images/Logo.webp";
import Navbar from "./Navbar";
import MyButton from "./MyButton";

const Header = () => {
  return (
    <section className="flex gap-50">
      <span className="flex font-bold gap-3">
        <img src={Logo} alt="NoteFlow Logo" className="w-[27px] h-[38px] " />
        <p>NoteFlow</p>
      </span>
      <Navbar />
      <div className="flex gap-3">
        <MyButton>Login</MyButton>
        <MyButton>Get Started</MyButton>
      </div>
    </section>
  );
};

export default Header;
