import React from "react";
import MyButton from "./MyButton";
import Notes from "../assets/images/Summarizer.webp";
import avatar1 from "../assets/images/avatar4.webp";
import avatar2 from "../assets/images/avatar3.webp";
import avatar3 from "../assets/images/avatar2.webp";
import avatar4 from "../assets/images/avatar1.webp";
import avatar5 from "../assets/images/avatar5.webp";

const HeroSection = () => {
  const pictures = [avatar1, avatar2, avatar3, avatar4, avatar5];
  return (
    <section>
      <div className="flex gap-0 text-left ">
        <div className=" py-40">
          <h1 className="font-bold text-5xl/15 w-xl py-1">
            AI-Powered Notes. Organize and Summarize in Seconds
          </h1>
          <p className="text-lg/10 text-[rgba(199,247,248,1)] font-300 w-sm py-7">
            Let AI organize & summarize your notes, saving you time and boosting
            productivity
          </p>
          <MyButton className="bg-[#44e5e7]/100 text-black border-none">
            Get Started
          </MyButton>
        </div>

        <img
          src={Notes}
          alt="Notes image"
          className="w-400 h-200 mt-[-3.4rem] ml-[-8.2rem]"
        />
      </div>
      <div className="flex ">
        {pictures.map((picture) => (
          <img src={picture} alt="avatar" className="w-10 ml-[-0.9rem]" />
        ))}
        <p className="px-10 py-2">
          Trusted by <b className="text-[#44e5e7]/100">12,653+</b> productivity
          junkies
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
