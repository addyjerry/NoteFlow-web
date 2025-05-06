import React from "react";
import Logo from "../assets/images/Logo.webp";

const Footer = () => {
  return (
    <section className="py-18  ">
      <div className="flex flex-wrap justify-between lg:gap-90 ">
        <a href="/">
          <span className="flex font-bold text-xl gap-3 mb-10 lg:mb-0  ">
            <img src={Logo} alt="NoteFlow Logo" className="size-[28px]" />
            <p>NoteFlow</p>
          </span>
        </a>
        <div className="flex gap-12 flex-wrap justify-around">
          <div className="block md:text-sm lg:text-xl">
            <p className="font-bold text-xl md:text-sm lg:text-xl p-2">Home</p>
            <ul className="p-2">
              <li className="py-3">FAQ</li>
              <li className="py-3">Features</li>
              <li className="py-3">Companies</li>
              <li className="py-3">Testimonials</li>
            </ul>
          </div>
          <div className="block md:text-sm lg:text-xl">
            <p className="font-bold md:text-sm lg:text-xl p-2">Pricing</p>
            <ul className="p-2">
              <li className="py-3">Plans</li>
              <li className="py-3">Billing</li>
              <li className="py-3">Free Trial</li>
              <li className="py-3">Refunds</li>
            </ul>
          </div>
          <div className="block md:text-sm lg:text-xl">
            <p className="font-bold md:text-sm lg:text-xl p-2">About</p>
            <ul className="p-2">
              <li className="py-3">Careers</li>
              <li className="py-3">Our Stories</li>
              <li className="py-3">Contact</li>
              <li className="py-3">Policies</li>
            </ul>
          </div>
          <div className="block md:text-sm lg:text-xl">
            <p className="font-bold md:text-sm lg:text-xl p-2">Community</p>
            <ul className="p-2">
              <li className="py-3">Forum</li>
              <li className="py-3">Stories</li>
              <li className="py-3">Blog</li>
              <li className="py-3">Support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
