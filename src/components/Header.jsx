import React, { useState } from "react";
import logo from "../assets/images/Logo.webp";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MyButton from "./MyButton";
import ThemeToggle from "./ThemeToggle";
import LoginMenu from "./LoginMenu";
import { LayoutGrid } from "lucide-react";

const Header = ({ loginMenu, handleLogin }) => {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <section className="container flex justify-between mx-auto 2xl:max-w-7xl">
      <a href="/">
        <div className="flex gap-1 lg:mt-3 ">
          <img src={logo} alt="logo" className="lg:size-9 size-5" />
          <p className="lg:text-2xl text-lg font-bold dark:text-white">
            NoteFlow
          </p>
        </div>
      </a>

      <Navbar />
      <div className="lg:flex gap-4 hidden">
        <MyButton onClick={handleLogin}>Login</MyButton>
        <MyButton
          onClick={handleLogin}
          className="bg-[#44e5e7] text-white dark:border-black"
        >
          Get Started{" "}
        </MyButton>
      </div>
      {loginMenu ? <LoginMenu handleLogin={handleLogin} /> : null}
      <div className="lg:hidden inline-flex">
        <LayoutGrid onClick={handleSidebar} className="md:mr-5" />
        <ThemeToggle />
      </div>
      {sidebar ? (
        <Sidebar handleLogin={handleLogin} handleSidebar={handleSidebar} />
      ) : null}
    </section>
  );
};

export default Header;
