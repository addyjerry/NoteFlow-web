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
    <section className="place-self-center ml-[-17rem] md:ml-[-8rem]">
      <div>
        <p className="font-bold md:text-5xl/15 text-4xl md:w-4xl w-xl px-10 pt-8 md:text-center place-self-center ml-[-20rem] md:ml-10">
          Frequently Asked Questions
        </p>
        <p className="text-lg/10 text-[rgba(199,247,248,1)] font-200 md:px-100 px-30 py-6 md:text-center text-left w-xl md:w-full ml-[-25rem] md:ml-0">
          The most commonly asked questions about NoteFlow. Have any other
          questions? <u>Chat with our expert tech team</u>
        </p>
        <div className="md:flex md:gap-3 gap-7 md:place-self-center place-self-start grid grid-cols-2 ml-[-18rem] md:ml-0 ">
          <MyButton className="bg-[#44e5e7]/100 text-black border-none shadow-lg shadow-[#44e5e7]">
            General
          </MyButton>
          <MyButton>Pricing</MyButton>
          <MyButton>Features</MyButton>
          <MyButton>Integrations</MyButton>
        </div>
        <div className="place-self-start p-20 ml-[-23rem]  md:ml-70 w-xl md:w-full">
          {questions.map((question) => (
            <div key={question.id} className="block md:p-5 p-2 md:w-full">
              <div className="flex flex-row md:gap-7 gap-5 ">
                <div className="inline-flex font-medium md:text-xl text-lg">
                  <img
                    src={question.pic}
                    alt="icon"
                    className="size-8 md:size-12"
                  />
                  <p className="md:p-3 w-3xs md:w-xl">{question.question}</p>
                </div>
                <>
                  {question.id === answer ? (
                    <ChevronUp
                      className="md:m-4  "
                      onClick={() => {
                        handleAnswer(question.id);
                      }}
                    />
                  ) : (
                    <ChevronDown
                      className="md:m-4 "
                      onClick={() => handleAnswer(question.id)}
                    />
                  )}
                </>
              </div>

              {question.id === answer ? (
                <p className="md:p-10 w-2xs md:w-2xl text-[rgba(199,247,248,1)]">
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
