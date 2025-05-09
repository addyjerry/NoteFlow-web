import React from "react";
import MyButton from "./MyButton";
import { SquareX } from "lucide-react";

const Sidebar = ({ handleLogin, handleSidebar }) => {
  return (
    <div className="fixed top-0 left-0 backdrop-blur z-10 text-center w-[100vw] h-full py-5 px-3 text-white animate-sidebar ">
      <div className="bg-[#012020] place-self-end mt-0 block w-[70vw] h-[90vh] py-6 rounded-xl text-lg ">
        <SquareX
          className="place-self-start  size-8 m-2"
          onClick={handleSidebar}
        />
        <ul className="block py-5 place-self-start text-left m-2">
          <li className="py-2">Home</li>
          <li className="py-2">Pricing</li>
          <li className="py-2">About</li>
          <li className="py-2">Community</li>
        </ul>
        <div className="block md:pt-[40vh] py-8 px-5">
          <MyButton
            onClick={handleLogin}
            className="w-full  justify-center my-3"
          >
            Login
          </MyButton>
          <MyButton
            className="bg-[#44e5e7]/100 w-full justify-center text-black"
            onClick={handleLogin}
          >
            Get Started
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
