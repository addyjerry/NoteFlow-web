import React, { useState } from "react";
import Logo from "../assets/images/Logo.webp";
import Navbar from "./Navbar";
import MyButton from "./MyButton";
import { SquareX, LayoutGrid } from "lucide-react";
import Sidebar from "./Sidebar";

const Login = ({ handleSignUp }) => {
  return (
    <div className="fixed top-0 left-0 backdrop-blur-2xl z-10 text-center w-[100vw] h-full py-8 px-3">
      <div className="bg-black place-self-center mt-10 block w-80 h-100 py-6 rounded-xl  ">
        <SquareX
          className="place-self-end  size-8 m-2"
          onClick={handleSignUp}
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
        <MyButton className="bg-[#44e5e7]/100 text-black border-none py-1 px-15 w-80">
          Get Started
        </MyButton>
      </div>
    </div>
  );
};

export default Login;
