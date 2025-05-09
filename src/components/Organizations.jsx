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
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-10 lg:gap-x-10 xl:gap-x-40 lg:w-auto  place-items-center">
        {organizations.map((org) => (
          <img
            src={org}
            alt="org"
            className="w-50 bg-gradient-to-t from-[#104747] to-[#0E2E2E] p-5"
            key={org.index}
          />
        ))}
      </div>
    </section>
  );
}

export default Organizations;
