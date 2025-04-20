import React, { useState } from "react";
import MyButton from "./MyButton";
import { questions } from "./Questions/data";
import { ChevronUp } from "lucide-react";
import { ChevronDown } from "lucide-react";

const QuestionSection = () => {
  const [answer, setAnswer] = useState(false);
  const handleAnswer = (id) => {
    setAnswer(id !== answer ? id : null);
  };

  return (
    <section className="place-items-center ">
      <div className="place-content-center">
        <p className="font-medium text-5xl/15 w-3xl pt-8 text-center place-self-center ">
          Frequently Asked Questions
        </p>
        <p className="text-lg/10 text-[rgba(199,247,248,1)] font-200 px-74 py-6 text-center place-self-center">
          The most commonly asked questions about NoteFlow. Have any other
          questions? <u>Chat with our expert tech team</u>
        </p>
        <div className="flex gap-3 place-self-center ">
          <MyButton className="bg-[#44e5e7]/100 text-black border-none shadow-lg shadow-[#44e5e7]">
            General
          </MyButton>
          <MyButton>Pricing</MyButton>
          <MyButton>Features</MyButton>
          <MyButton>Integrations</MyButton>
        </div>
        <div className="place-self-center p-20">
          {questions.map((question) => (
            <div key={question.id} className="block">
              <div className="flex flex-row gap-47 max-w-5xl ">
                <div className="inline-flex font-medium text-xl">
                  <img src={question.pic} alt="icon" className="size-12" />
                  <p className="p-3 ">{question.question}</p>
                </div>
                <>
                  {question.id === answer ? (
                    <ChevronUp
                      className="m-4 "
                      onClick={() => {
                        handleAnswer(question.id);
                      }}
                    />
                  ) : (
                    <ChevronDown
                      className="m-4 "
                      onClick={() => handleAnswer(question.id)}
                    />
                  )}
                </>
              </div>

              {question.id === answer ? (
                <p className="p-10 w-2xl text-[rgba(199,247,248,1)]">
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
