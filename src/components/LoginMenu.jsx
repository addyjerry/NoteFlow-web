import React from "react";
import MyButton from "./MyButton";
import { SquareX } from "lucide-react";

const LoginMenu = ({ handleLogin }) => {
  return (
    <div className="left-0 top-0 backdrop-blur flex  p-5 fixed w-full h-[100vh] place-content-center z-20">
      <div className="place-self-center p-10 lg:px-90 flex justify-self-center  ">
        <div className="dark:bg-[#0e2e1a] bg-gray-300 place-content-center lg:w-xs w-3xs px-10 text-center lg:py-40 hidden md:block ">
          <p className="text-xl font-bold">Lets Get You Signed Up</p>
          <p>No charges, no fees. Get note taking in minutes!</p>
        </div>
        <div className="dark:dark:bg-[#012020] bg-blue-300 lg:w-xs w-3xs px-10 py-5 rounded-xl">
          <SquareX className="justify-self-end  " onClick={handleLogin} />
          <div className="py-20">
            <p>Emain</p>
            <input
              type="text"
              className="bg-white text-black rounded-2xl p-1 w-full"
              placeholder="janet@gmail.com"
            />
            <p>Password</p>
            <input
              type="text"
              className="bg-white text-green-800 rounded-2xl p-1 w-full"
              placeholder="***********"
            />
          </div>
          <p className="flex gap-1 p-3 text-xs text-center lg:px-8">
            <input type="checkbox" name="" id="" />I agree to all terms
          </p>
          <MyButton className=" text-xs w-full justify-center bg-[#44e5e7] border-none">
            Sign Up
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default LoginMenu;
