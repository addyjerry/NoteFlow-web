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
    <section className="lg:py-5 py-0 lg:place-content-center  px-5 w-[100vw] bg-green-700 dark:bg-bg-gradient-to-b from-[#011f1f] to-[#001414] ">
      <div>
        <div className=" lg:text-left block md:flex md:gap-23 lg:gap-20  ">
          <div className=" py-40 md:w-xs lg:w-xl ">
            <h1 className="font-bold lg:text-5xl/15 text-2xl lg:w-xl  py-1">
              AI-Powered Notes. Organize and Summarize in Seconds
            </h1>
            <p className="lg:text-lg/10 text-sm text-[rgba(199,247,248,1)] lg:w-sm font-300  py-8">
              Let AI organize & summarize your notes, saving you time and
              boosting productivity
            </p>
            <MyButton className="bg-[#44e5e7]/100 text-black border-none flex gap-1 shadow shadow-[#44e5e7]">
              Get Started <MoveRight className="hidden lg:flex" />
            </MyButton>
          </div>

          <img
            src={Notes}
            alt="Notes image"
            className="lg:w-250 md:size-120 size-100  lg:h-200 md:ml-[-10rem] ml-[-2rem] xl:ml-[-8rem] mt-[-14rem] xl:w-180 md:mt-7 lg:mt-[-3rem]"
          />
        </div>
        <div className=" md:flex block ml-5">
          <div className="flex ">
            {pictures.map((picture, index) => (
              <img
                src={picture}
                alt="avatar"
                className="w-10 ml-[-1rem] md:h-10"
                key={index}
              />
            ))}
          </div>
          <p className="lg:px-10 md:px-10 lg:py-2 py-4 font-extralight">
            Trusted by <b className="text-[#44e5e7]/100">12,653+</b>{" "}
            productivity junkies
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
