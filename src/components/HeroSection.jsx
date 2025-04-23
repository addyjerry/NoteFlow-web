import React from "react";
import MyButton from "./MyButton";
import { MoveRight } from "lucide-react";
import Notes from "../assets/images/Summarizer.webp";
import avatar1 from "../assets/images/avatar4.webp";
import avatar2 from "../assets/images/avatar3.webp";
import avatar3 from "../assets/images/avatar2.webp";
import avatar4 from "../assets/images/avatar1.webp";
import avatar5 from "../assets/images/avatar5.webp";

const HeroSection = () => {
  const pictures = [avatar1, avatar2, avatar3, avatar4, avatar5];
  return (
    <section className="lg:py-5 py-0 lg:place-self-center max-w-300 md:ml-0 ml-[-34rem]">
      <div className="lg:flex md:gap-20 lg:text-left block md:flex lg:gap-20 ">
        <div className=" py-40 w-xs lg:w-7xl px-2 lg:px-1">
          <h1 className="lg:font-bold font-medium lg:text-5xl/15 text-2xl lg:w-xl  py-1">
            AI-Powered Notes. Organize and Summarize in Seconds
          </h1>
          <p className="lg:text-lg/10 text-sm text-[rgba(199,247,248,1)] lg:w-sm font-300  py-7">
            Let AI organize & summarize your notes, saving you time and boosting
            productivity
          </p>
          <MyButton className="bg-[#44e5e7]/100 text-black border-none flex gap-1 shadow shadow-[#44e5e7]">
            Get Started <MoveRight className="hidden lg:flex" />
          </MyButton>
        </div>

        <img
          src={Notes}
          alt="Notes image"
          className="lg:w-400 size-120 lg:h-200  lg:mt-[-3.4rem] md:mt-10 mt-[-12.4rem] lg:ml-[-8.2rem] ml-[-6.9rem]"
        />
      </div>
      <div className="lg:flex md:flex block">
        <div className="flex ml-5">
          {pictures.map((picture, index) => (
            <img
              src={picture}
              alt="avatar"
              className="w-10 ml-[-0.9rem] md:h-10"
              key={index}
            />
          ))}
        </div>
        <p className="lg:px-10 md:px-10 lg:py-2 py-4 font-extralight">
          Trusted by <b className="text-[#44e5e7]/100">12,653+</b> productivity
          junkies
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
