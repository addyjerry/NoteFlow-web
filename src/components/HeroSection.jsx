import React from "react";
import Sum from "../assets/images/Sum.png";
import MyButton from "./MyButton";
import { MoveRight } from "lucide-react";
import ava1 from "../assets/images/avatar1.webp";
import ava2 from "../assets/images/avatar2.webp";
import ava3 from "../assets/images/avatar3.webp";
import ava4 from "../assets/images/avatar4.webp";
import ava5 from "../assets/images/avatar5.webp";

const HeroSection = ({ handleLogin }) => {
  const avatars = [ava1, ava2, ava3, ava4, ava5];
  return (
    <section className="container max-w-fit">
      <div className=" md:flex gap-5 justify-between  lg:py-30 md:py-20 dark:text-white">
        <div className="lg:w-2xl  py-12 w-2xs md:w-xs">
          <p className="font-bold lg:text-5xl py-3 pr-10 md:pr-0 text-xl">
            AI-Powered Notes. Organize and Summarize in Seconds
          </p>
          <p className="lg:w-md lg:py-10 py-3 dark:text-[rgba(199,247,248,1)] text-xs md:text-xl pr-5 md:pr-0">
            Let AI organize & summarize your notes, saving you time and boosting
            productivity
          </p>
          <MyButton
            className="bg-primary-500 shadow-glow border-none text-black glow"
            onClick={handleLogin}
          >
            Get Started <MoveRight className="hidden md:flex" />
          </MyButton>
        </div>
        <div>
          <img src={Sum} alt="Sum" className="lg:w-xl lg:h-120" />
        </div>
      </div>
      <div className="md:flex pl-4">
        <div className="flex">
          {avatars.map((avatar) => (
            <img
              src={avatar}
              alt="avatar"
              key={avatar.index}
              className="ml-[-1rem] lg:size-12 size-8
          "
            />
          ))}
        </div>
        <p className="md:px-5 text-xs md:text-xl py-4 md:py-1 ml-[-1rem]">
          Trusted by <b className="text-[#44e5e7]/100">12,653+</b> productivity
          junkies
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
