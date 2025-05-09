import React from "react";
import Logo from "../assets/images/Logo.webp";

const Footer = () => {
  return (
    <footer className="py-18 flex  justify-between xl:gap-84  flex-col lg:flex-row ">
      <>
        <div className="flex font-bold text-xl dark:text-white gap-3 p-3 lg:mb-0  ">
          <img src={Logo} alt="NoteFlow Logo" className="size-[28px]" />
          <a href="/">
            <p>NoteFlow</p>
          </a>
        </div>

        <div className="flex gap-10 flex-wrap justify-between ml-[-1rem] lg:ml-0 px-5">
          <div className="block md:text-sm lg:text-xl">
            <p className="font-bold  md:text-sm lg:text-xl p-2 dark:text-white">
              Home
            </p>
            <ul className="p-2">
              <li className="py-3">FAQ</li>
              <li className="py-3">Features</li>
              <li className="py-3">Companies</li>
              <li className="py-3">Testimonials</li>
            </ul>
          </div>
          <div className="block md:text-sm lg:text-xl">
            <p className="font-bold md:text-sm lg:text-xl p-2 dark:text-white">
              Pricing
            </p>
            <ul className="p-2">
              <li className="py-3">Plans</li>
              <li className="py-3">Billing</li>
              <li className="py-3">Free Trial</li>
              <li className="py-3">Refunds</li>
            </ul>
          </div>
          <div className="block md:text-sm lg:text-xl">
            <p className="font-bold md:text-sm lg:text-xl p-2 dark:text-white">
              About
            </p>
            <ul className="p-2">
              <li className="py-3">Careers</li>
              <li className="py-3">Our Stories</li>
              <li className="py-3">Contact</li>
              <li className="py-3">Policies</li>
            </ul>
          </div>
          <div className="block md:text-sm lg:text-xl">
            <p className="font-bold md:text-sm lg:text-xl p-2 dark:text-white">
              Community
            </p>
            <ul className="p-2">
              <li className="py-3">Forum</li>
              <li className="py-3">Stories</li>
              <li className="py-3">Blog</li>
              <li className="py-3">Support</li>
            </ul>
          </div>
        </div>
      </>
    </footer>
  );
};

export default Footer;
