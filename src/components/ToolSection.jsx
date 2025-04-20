import React from "react";
import Notestool from "../assets/images/Smart.webp";

import Reminder from "../assets/images/Reminder.webp";
const ToolSection = () => {
  return (
    <section className="block text-left items-center ">
      <p className="font-medium text-5xl/15 w-3xl pt-8 text-center place-self-center ">
        All the Tools You Need to{" "}
        <b className="text-[#44e5e7]/100 text-shadow-sm text-shadow-[#44e5e7]">
          Supercharge
        </b>{" "}
        Your Note taking
      </p>
      <div className="flex pt-40 gap-20 ">
        <>
          <img
            src={Notestool}
            alt="Notestool"
            className="w-[538px] h-[708px]"
          />
        </>
        <div className="py-40">
          <h2 className="font-medium text-4xl py-5">Smart Organization</h2>
          <p className="text-lg/10 text-[rgba(199,247,248,1)] font-200 w-md py-6">
            Automatically cartegorize and your notes using AI-driven analysis.
            NotesFlow intelligently identifies key topics and organises your
            content,making it easy to find and retrieve your notes when you need
            them most.
          </p>
        </div>
      </div>
      <div className="flex gap-20">
        <div className="py-55">
          <h2 className="font-medium text-4xl  py-1">Contextual Reminders</h2>
          <p className="text-lg/10 text-[rgba(199,247,248,1)] font-300 w-md py-7">
            Stay on top of important tasks with AI-powered reminders that adapt
            to the context of your notes. Noteflow recognizes deadlines,follow
            ups and key actions from your notes and sends timely alert to ensure
            nothing slips through the cracks
          </p>
        </div>
        <>
          <img src={Reminder} alt="Reminder" className="w-[538px] h-[708px]" />
        </>
      </div>
    </section>
  );
};

export default ToolSection;
