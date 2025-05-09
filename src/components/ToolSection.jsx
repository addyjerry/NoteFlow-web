import React from "react";
import sat from "../assets/images/Smart.webp";
import Remi from "../assets/images/Reminder.webp";
const ToolSection = () => {
  return (
    <section className="py-20 flex-row justify-center">
      <div className="">
        <p className="lg:text-6xl text-2xl px-3 font-extrabold text-center md:px-40 xl:w-6xl dark:text-white">
          All The Tools You Need to
          <b className="text-[#44e5e7]/100"> Supercharge</b> Your Note Taking
        </p>
      </div>
      <div>
        <div className=" flex flex-col-reverse md:flex-row justify-between lg:gap-5 md:my-30 my-20 place-items-center">
          <div>
            <img src={sat} alt="smart" className="md:w-xl w-70 " />
          </div>
          <div className="md:w-2xl lg:py-38 md:pl-25 place-self-center w-2xs ">
            <p className="lg:text-5xl text-xl md:py-8 py-5 dark:text-white font-bold">
              Smart Organization
            </p>
            <p className="text-sm md:text-lg">
              Automatically categorize and tag your notes using AI-driven
              analysis. NoteFlow intelligently identifies key topics and
              organizes your content, making it easy to find and retrieve your
              notes when you need them most.
            </p>
          </div>
        </div>
        <div className=" flex flex-col-reverse md:flex-row-reverse justify-between md:my-30 lg:gap-5 place-items-center">
          <div>
            <img
              src={Remi}
              alt="smart"
              className="w-70 md:w-sm lg:w-lg py-15 md:py-0"
            />
          </div>
          <div className="md:w-xl w-2xs lg:py-45 md:py-18 md:pr-5  ">
            <p className="lg:text-5xl text-xl md:py-10 dark:text-white font-bold">
              Contextual Reminders
            </p>
            <p className="md:pr-10 text-sm md:text-lg">
              Stay on top of important tasks with AI-powered reminders that
              adapt to the context of your notes. NoteFlow recognizes deadlines,
              follow-ups, and key actions from your notes and sends timely
              alerts to ensure nothing slips through the cracks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolSection;
