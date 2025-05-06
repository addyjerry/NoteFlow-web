import React from "react";
import netflix from "../assets/images/Netflix.webp";
import exxon from "../assets/images/Exxon.webp";
import microsoft from "../assets/images/Microsoft.webp";
import vice from "../assets/images/Vice.webp";
import walmart from "../assets/images/Walmart.webp";
import chase from "../assets/images/Chase.webp";
import visa from "../assets/images/Visa.png";
import amazon from "../assets/images/Amazon.webp";

function Organizations() {
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
    <section className="lg:py-20 text-center md:text-xl text-sm">
      <div className="py-20">
        <p className="dark:text-[rgba(199,247,248,1)]">
          Organizations powered by <b>NoteFlow</b>
        </p>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-10 lg:gap-x-65">
        {organizations.map((org) => (
          <img
            src={org}
            alt="org"
            className="md:w-25 md:h-10 w-20"
            key={org.index}
          />
        ))}
      </div>
    </section>
  );
}

export default Organizations;
