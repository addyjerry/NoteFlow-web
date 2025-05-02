import React, { useState } from "react";
import Logo from "../assets/images/Logo.webp";
import Login from "./Login";
import Navbar from "./Navbar";
import MyButton from "./MyButton";
import { SquareX, LayoutGrid } from "lucide-react";
import Sidebar from "./Sidebar";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [loginMenu, setLoginMenu] = useState(false);
  const [signUpMenu, setSignUpMenu] = useState(false);
  const [mobilemenu, setMobilemenu] = useState(false);

  const handleSignUp = () => {
    setMobilemenu(false);
    setSignUpMenu(!signUpMenu);
  };
  return (
    <section className="flex lg:gap-33 py-1 lg:place-self-center  gap-[17vw] md:gap-60 md:ml-0 lg:ml-0 px-5 dark:text-white text-black">
      <a href="/">
        <span className="flex lg:font-bold text-xl gap-3">
          <img src={Logo} alt="NoteFlow Logo" className="size-[28px]" />
          <p >NoteFlow</p>
        </span>
      </a>
      <Navbar />
      <div className="flex gap-7 ">
        <ThemeToggle />
        <LayoutGrid
          onClick={() => setMobilemenu(!mobilemenu)}
          className="lg:hidden md:ml-10"
        />
      </div>
      {mobilemenu ? (
        <Sidebar
          setLoginMenu={setLoginMenu}
          setSignUpMenu={setSignUpMenu}
          handleSignUp={handleSignUp}
        />
      ) : (
        <></>
      )}
      {signUpMenu ? <Login handleSignUp={handleSignUp} /> : <></>}
      <div className="lg:flex gap-3 mt-[-1.2rem] hidden text-white">
        <MyButton onClick={() => setSignUpMenu(!signUpMenu)}>Login</MyButton>
        <MyButton
          className="bg-[#44e5e7]/100 text-black border-none shadow"
          onClick={() => setLoginMenu(!loginMenu)}
        >
          Get Started
        </MyButton>
      </div>
      {loginMenu ? (
        <div
          className={`fixed top-0 left-0 backdrop-blur-2xl z-10 text-center w-full h-full text-white`}
        >
          <div className="bg-black  place-self-center mt-20 flex">
            <div className=" py-40 px-6 w-xs hidden lg:block">
              <p className="p-5 font-bold text-2xl">Let's Get You Signed Up</p>
              <p className="p-2 ">
                No charges, no fees. Get note taking in minutes!
              </p>
            </div>
            <div>
              <SquareX
                className="place-self-end  size-8 m-2"
                onClick={() => setLoginMenu(!loginMenu)}
              />
              <div className="py-20 px-5 w-xs text-left">
                <p className="p-2">Email</p>
                <input
                  type="text"
                  placeholder="Username"
                  className="p-2 bg-white text-black rounded-2xl w-70"
                />
                <p className="p-2">Password</p>
                <input
                  type="password"
                  placeholder="password"
                  className="p-2 bg-white text-black rounded-2xl mb-10 w-70"
                />{" "}
                <br />
                <input type="checkbox" />
                <label htmlFor="checkbox" className="text-xs pl-2 ">
                  I agree with all terms
                </label>
                <br />
                <MyButton
                  onClick={() => setLoginMenu(!loginMenu)}
                  className="bg-[#44e5e7]/100 text-black border-none py-1 px-15 w-70"
                >
                  Get Started
                </MyButton>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Header;
