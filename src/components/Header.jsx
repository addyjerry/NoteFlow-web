import React, { useState } from "react";
import Logo from "../assets/images/Logo.webp";
import Navbar from "./Navbar";
import MyButton from "./MyButton";
import { SquareX, LayoutGrid } from "lucide-react";

const Header = () => {
  const [loginMenu, setLoginMenu] = useState(false);
  const [signUpMenu, setSignUpMenu] = useState(false);
  const [mobilemenu, setMobilemenu] = useState(false);

  const handleSignUp = () => {
    setMobilemenu(false);
    setSignUpMenu(!signUpMenu);
  };
  return (
    <section className="flex lg:gap-52 py-1 lg:place-self-center gap-20 md:gap-63 md:ml-[-12rem] lg:ml-0 px-5 ">
      <span className="flex lg:font-bold text-xl gap-3">
        <img src={Logo} alt="NoteFlow Logo" className="size-[28px]" />
        <p>NoteFlow</p>
      </span>
      <Navbar />
      <LayoutGrid
        className="flex lg:hidden"
        onClick={() => setMobilemenu(!mobilemenu)}
      />
      {mobilemenu ? (
        <div className="fixed top-0 left-0 backdrop-blur-2xl z-10 text-center w-[100vw] h-full py-8 px-3">
          <div className="bg-black   place-self-end mt-0 block w-60 h-150 py-6 rounded-xl  ">
            <SquareX
              className="place-self-start  size-8 m-2"
              onClick={() => setMobilemenu(!mobilemenu)}
            />
            <ul className="block py-5 place-self-start text-left m-2">
              <li className="py-2">Home</li>
              <li className="py-2">Pricing</li>
              <li className="py-2">About</li>
              <li className="py-2">Community</li>
            </ul>
            <div className="block pt-10">
              <MyButton
                onClick={() => setSignUpMenu(!signUpMenu)}
                className="w-50 my-3"
              >
                Login
              </MyButton>
              <MyButton
                className="bg-[#44e5e7]/100 text-black border-none w-50"
                onClick={() => setLoginMenu(!loginMenu)}
              >
                Get Started
              </MyButton>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {signUpMenu ? (
        <div className="fixed top-0 left-0 backdrop-blur-2xl z-10 text-center w-[100vw] h-full py-8 px-3">
          <div className="bg-black place-self-center mt-10 block w-80 h-100 py-6 rounded-xl  ">
            <SquareX
              className="place-self-end  size-8 m-2"
              onClick={() => handleSignUp()}
            />
            <p className="p-2 text-left">Email</p>
            <input
              type="text"
              placeholder="Username"
              className="p-2 bg-white text-black rounded-2xl w-80"
            />
            <p className="p-2 text-left">Password</p>
            <input
              type="password"
              placeholder="password"
              className="p-2 bg-white text-black rounded-2xl mb-10 w-80 "
            />{" "}
            <br />
            <input type="checkbox" />
            <label htmlFor="checkbox" className="text-xs pl-2 ">
              I agree with all terms
            </label>
            <br />
            <MyButton
              onClick={() => setLoginMenu(!loginMenu)}
              className="bg-[#44e5e7]/100 text-black border-none py-1 px-15 w-80"
            >
              Get Started
            </MyButton>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="lg:flex gap-3 mt-[-1.2rem] hidden">
        <MyButton>Login</MyButton>
        <MyButton
          className="bg-[#44e5e7]/100 text-black border-none"
          onClick={() => setLoginMenu(!loginMenu)}
        >
          Get Started
        </MyButton>
      </div>
      {loginMenu ? (
        <div className="fixed top-0 left-0 backdrop-blur-2xl z-10 text-center w-full h-full ">
          <div className="bg-black  place-self-center mt-20 flex">
            <div className=" py-40 px-6 w-xs">
              <p className="p-5 font-bold text-2xl">Let's Get You Signed Up</p>
              <p className="p-2">
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
                  className="p-2 bg-white text-black rounded-2xl"
                />
                <p className="p-2">Password</p>
                <input
                  type="password"
                  placeholder="password"
                  className="p-2 bg-white text-black rounded-2xl mb-10 "
                />{" "}
                <br />
                <input type="checkbox" />
                <label htmlFor="checkbox" className="text-xs pl-2 ">
                  I agree with all terms
                </label>
                <MyButton
                  onClick={() => setLoginMenu(!loginMenu)}
                  className="bg-[#44e5e7]/100 text-black border-none py-1 px-15"
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
