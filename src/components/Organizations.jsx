import React from "react";
import netflix from "../assets/images/Netflix.webp";
import exxon from "../assets/images/Exxon.webp";
import microsoft from "../assets/images/Microsoft.webp";
import vice from "../assets/images/Vice.webp";
import walmart from "../assets/images/Walmart.webp";
import chase from "../assets/images/Chase.webp";
import visa from "../assets/images/Visa.webp";
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
    <section className="py-20 text-center">
      <p className="p-15">
        Organizations powered by <b>NoteFlow</b>
      </p>
      <div className="grid grid-cols-4 gap-9">
        {organizations.map((organization) => (
          <img src={organization} alt="organization" className="w-40 " />
        ))}
      </div>
    </section>
  );
};

export default Organizations;
