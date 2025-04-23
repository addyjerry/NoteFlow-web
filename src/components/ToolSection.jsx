import React from "react";
import Notestool from "../assets/images/Smart.webp";

import Reminder from "../assets/images/Reminder.webp";
const ToolSection = () => {
  return (
    <section className="block text-left place-self-center lg:place-self-center  md:place-self-start">
      <p className="font-medium lg:text-5xl/15 text-2xl lg:w-3xl w-sm md:w-xl md:ml-12 lg:ml-0 px-15  pt-8 text-center lg:place-self-center">
        All the Tools You Need to{" "}
        <b className="text-[#44e5e7]/100 text-shadow-sm text-shadow-[#44e5e7]">
          Supercharge
        </b>{" "}
        Your Note taking
      </p>
      <div className="flex pt-40 lg:gap-45 md:gap-23 md:flex-row flex-col-reverse ">
        <>
          <img
            src={Notestool}
            alt="Notestool"
            className="lg:w-[538px] lg:h-[708px] size-80"
          />
        </>
        <div className="md:py-40 mt-[-5rem] md:mt-[-8rem] lg:mt-0 mb-[-5rem] md:mb-0">
          <h2 className="font-medium lg:text-4xl text-xl py-2 md:py-5">
            Smart Organization
          </h2>
          <p className="lg:text-lg/10 text-[rgba(199,247,248,1)] font-200 lg:w-md w-xs py-6">
            Automatically cartegorize and tag your notes using AI-driven
            analysis. NotesFlow intelligently identifies key topics and
            organises your content,making it easy to find and retrieve your
            notes when you need them most.
          </p>
        </div>
      </div>
      <div className="flex lg:gap-42 md:gap-20 flex-col md:flex-row">
        <div className="md:py-55 py-5 mb-[-5rem] md:mt-[-8rem]">
          <h2 className="font-medium lg:text-4xl  text-xl md:py-1">
            Contextual Reminders
          </h2>
          <p className="lg:text-lg/10 text-[rgba(199,247,248,1)] font-200 lg:w-md w-xs py-7">
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
            className="lg:w-[538px] lg:h-[708px] size-80 ml-[-1rem] md:ml-0"
          />
        </>
      </div>
    </section>
  );
};

export default ToolSection;
