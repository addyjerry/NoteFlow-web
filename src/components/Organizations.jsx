import React from "react";
import netflix from "../assets/images/Netflix.webp";
import exxon from "../assets/images/Exxon.webp";
import microsoft from "../assets/images/Microsoft.webp";
import vice from "../assets/images/Vice.webp";
import walmart from "../assets/images/Walmart.webp";
import chase from "../assets/images/Chase.webp";
import visa from "../assets/images/Visa.png";
import amazon from "../assets/images/Amazon.webp";

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
    <section className="py-20 lg:text-center text-left place-self-center  lg:ml-15 md:ml-[-10rem] ">
      <p className="lg:p-15 md:py-10 md:ml-[-12rem] lg:ml-4 lg:text-center">
        Organizations powered by <b>NoteFlow</b>
      </p>
      <div className="grid lg:grid-cols-4   grid-cols-2 md:gap-5  md:ml-[-15rem] lg:ml-0 lg:gap-25">
        {organizations.map((organization, index) => (
          <img
            src={organization}
            alt="organization"
            className="lg:h-8 h-6 px-10"
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Organizations;
