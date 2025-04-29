import React from "react";
import netflix from "../assets/sv/Netflix.svg";
import exxon from "../assets/sv/Exxon.svg";
import microsoft from "../assets/sv/Microsoft.svg";
import vice from "../assets/sv/Vice.svg";
import walmart from "../assets/sv/Walmart.svg";
import chase from "../assets/sv/Chase.svg";
import visa from "../assets/sv/Visa.svg";
import amazon from "../assets/sv/Amazon.svg";

const Organizations = () => {
  const organizations = [
    netflix,
    exxon,
    microsoft,
    vice,
    walmart,
    chase,
    visa,
    amazon,
  ];
  return (
    <section className="py-20 lg:text-center text-left place-self-center  lg:ml-15 text-lg dark:bg-gray-600 ">
      <p className="lg:my-15 md:py-10  lg:ml-4 text-center px-10">
        Organizations powered by <b>NoteFlow</b>
      </p>
      <div className="grid lg:grid-cols-4  gap-7 gap-x-17  grid-cols-2 md:gap-5 ml-5  ml:ml-0 lg:gap-x-55 lg:gap-y-10">
        {organizations.map((organization, index) => (
          <img
            src={organization}
            alt="organization"
            className="lg:h-8 h-6 px-0 size-20  "
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Organizations;
