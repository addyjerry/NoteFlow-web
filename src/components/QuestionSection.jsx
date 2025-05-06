import React, { useState } from "react";
import MyButton from "./MyButton";
import { questions } from "./Questions/questions";
import { ChevronUp } from "lucide-react";
import { ChevronDown } from "lucide-react";

const QuestionSection = () => {
  const [activeFilter, setActiveFilter] = useState("general");

  const [answer, setAnswer] = useState(false);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };
  const filteredQuestions =
    activeFilter === "general"
      ? questions
      : questions.filter((q) => q.type === activeFilter);
  const filters = [
    { value: "general", label: "General" },
    { value: "pricing", label: "Pricing" },
    { value: "features", label: "Features" },
    { value: "integration", label: "Integration" },
  ];

  const handleAnswer = (id) => {
    setAnswer(id !== answer ? id : null);
  };

  return (
    <section className=" text-center ">
      <div className=" lg:py-25 w-xl md:w-full">
        <p className=" lg:text-6xl md:text-3xl text-xl py-8 font-bold px-40 text-left md:text-center">
          Frequently Asked Questions
        </p>
        <p className="md:text-lg/10 dark:text-[rgba(199,247,248,1)]  font-200 md:px-60 px-35 md:py-6 text-center lg:w-full md:w-5xl place-self-center  ">
          The most commonly asked questions about NoteFlow. Have any other
          questions? <u>Chat with our expert tech team</u>
        </p>

        <div className="flex flex-wrap gap-2 mb-8 md:justify-center px-40 md:px-0">
          {filters.map((filter) => (
            <MyButton
              key={filter.value}
              onClick={() => handleFilterChange(filter.value)}
              className={`px-4 py-2 rounded ${
                activeFilter === filter.value ? "bg-[#44e5e7] " : " "
              }`}
            >
              {filter.label}
            </MyButton>
          ))}
        </div>
        <div className="space-y-4  text-left place-self-center">
          {filteredQuestions.map((question) => (
            <div key={question.id} className="lg:px-25 py-3 ">
              <div className="flex flex-nowrap justify-between w-2xs md:w-full lg:w-4xl text-sm md:text-xl">
                <div
                  className="flex justify-between"
                  onClick={() => {
                    handleAnswer(question.id);
                  }}
                >
                  <img
                    src={question.icon}
                    alt="icon"
                    className="size-8 md:size-12"
                  />
                  <p className="md:p-3 p-2">{question.question}</p>
                </div>
                <>
                  {question.id === answer ? (
                    <ChevronUp
                      className=" md:mt-2"
                      onClick={() => {
                        handleAnswer(question.id);
                      }}
                    />
                  ) : (
                    <ChevronDown
                      className=" md:mt-2 "
                      onClick={() => handleAnswer(question.id)}
                    />
                  )}
                </>
              </div>

              {question.id === answer ? (
                <p className="py-2 px-5 w-2xs text-xs md:text-xl text-left md:w-lg md:px-17 lg:px-15 lg:w-3xl ">
                  {question.answer}
                </p>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionSection;
