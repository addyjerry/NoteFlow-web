import React from "react";
import Notestool from "../assets/images/Smart.webp";
import Reminder from "../assets/images/Reminder.webp";
const ToolSection = () => {
  return (
    <section className="block text-left place-self-center lg:place-self-center  md:place-self-start py-50 ">
      <p className="font-medium lg:text-5xl/15 text-2xl lg:w-4xl w-sm md:w-xl md:ml-12 lg:ml-0 px-15   pt-8 text-center lg:place-self-center">
        All the Tools You Need to{" "}
        <b className="dark:text-[#44e5e7]/100 text-shadow-sm text-shadow-[#44e5e7] text-purple-500">
          Supercharge
        </b>{" "}
        Your Note taking
      </p>
      <div className="flex pt-40 lg:gap-45 md:gap-20 md:flex-row flex-col-reverse ml-15 md:ml-5 ">
        <>
          <img
            src={Notestool}
            alt="Notestool"
            className="lg:w-[538px] lg:h-[708px] md:size-80 size-65 mt-20 md:mt-0 md:px-0"
          />
        </>
        <div className="md:py-40 mt-[-5rem] md:mt-[-8rem] lg:mt-0 mb-[-5rem] md:mb-0">
          <h2 className="font-medium lg:text-4xl text-xl py-2 md:py-5">
            Smart Organization
          </h2>
          <p className="lg:text-lg/10 text-[rgba(199,247,248,1)] font-200 lg:w-md w-3xs py-6 md:w-xs">
            Automatically cartegorize and tag your notes using AI-driven
            analysis. NotesFlow intelligently identifies key topics and
            organises your content,making it easy to find and retrieve your
            notes when you need them most.
          </p>
        </div>
      </div>
      <div className="flex lg:gap-42 md:gap-15 flex-col md:flex-row ml-15 md:ml-5">
        <div className="lg:py-55 py-5 lg:mt-20 ">
          <h2 className="font-medium lg:text-4xl  text-xl md:py-1">
            Contextual Reminders
          </h2>
          <p className="lg:text-lg/10 text-[rgba(199,247,248,1)] font-200 lg:w-md w-3xs md:w-xs py-7">
            Stay on top of important tasks with AI-powered reminders that adapt
            to the context of your notes. Noteflow recognizes deadlines,follow
            ups and key actions from your notes and sends timely alert to ensure
            nothing slips through the cracks
          </p>
        </div>
        <>
          <img
            src={Reminder}
            alt="Reminder"
            className="lg:w-[538px] lg:h-[708px] md:size-80 ml-[-1rem] md:ml-0 px-2 size-65 mt-20 md:mt-0 md:px-0"
          />
        </>
      </div>
    </section>
  );
};

export default ToolSection;
