import React, { useState } from "react";
import MyButton from "./MyButton";
import { questions } from "./Questions/questions";
import { ChevronUp } from "lucide-react";
import { ChevronDown } from "lucide-react";

const QuestionSection = () => {
  const [answer, setAnswer] = useState(false);
  const handleAnswer = (id) => {
    setAnswer(id !== answer ? id : null);
  };

  return (
    <section className="place-self-center md:place-self-start xl:place-self-center xl:px-10 py-7">
      <div className="lg:px-50 ">
        <p className="font-bold lg:text-5xl/15 md:text-4xl lg:w-4xl w-xl px-10 pt-8 md:text-center place-self-center md:place-self-start lg:place-self-center  ml-60 md:ml-25 ">
          Frequently Asked Questions
        </p>
        <p className="md:text-lg/10 text-[rgba(199,247,248,1)] w-3xl  font-200 lg:px-70 px-60 py-6 md:text-center text-left lg:w-full lg:place-self-center ml-7  lg:ml-0 md:place-self-start ">
          The most commonly asked questions about NoteFlow. Have any other
          questions? <u>Chat with our expert tech team</u>
        </p>

        <div className="lg:flex md:grid md:gap-3 gap-7 lg:place-self-center place-self-start grid grid-cols-2 md:pl-40 lg:pl-0 md:ml-25 ml-65 lg:ml-0">
          <MyButton >
            General
          </MyButton>
          <MyButton>Pricing</MyButton>
          <MyButton>Features</MyButton>
          <MyButton>Integrations</MyButton>
        </div>
        <div className="place-self-center 2xl:pl-130 py-20 px-56   md:w-full md:place-self-start lg:place-self-center md:px-0 md:ml-23 lg:ml-0 lg:px-56">
          {questions.map((question) => (
            <div key={question.id} className="block md:p-6 p-2  md:w-full ">
              <div className="flex flex-row lg:gap-7 md:gap-0 gap-5 ">
                <div className="inline-flex font-medium md:text-xl text-lg">
                  <img
                    src={question.pic}
                    alt="icon"
                    className="size-7 md:size-12"
                  />
                  <p
                    className="md:p-3 px-5 w-3xs lg:w-xl md:w-md text-sm md:text-xl mr-[-2rem]"
                    onClick={() => {
                      handleAnswer(question.id);
                    }}
                  >
                    {question.question}
                  </p>
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
                <p className="md:py-2 md:px-18 px-8 w-2xs md:w-xl text-sm text-[rgba(199,247,248,1)]">
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
