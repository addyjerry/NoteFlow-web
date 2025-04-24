import React from "react";
import Logo from "../assets/images/Logo.webp";

const Footer = () => {
  return (
    <section className="place-self-center py-18  md:ml-0 md:place-self-start lg:place-self-center">
      <div className="lg:flex gap-90 block">
        <span className="flex font-bold text-xl gap-3 mb-10 lg:mb-0">
          <img src={Logo} alt="NoteFlow Logo" className="size-[28px]" />
          <p>NoteFlow</p>
        </span>
        <div className="lg:flex gap-12 grid grid-cols-2">
          <div className="block">
            <p className="font-bold text-xl  p-2">Home</p>
            <ul className="p-2">
              <li className="py-3">FAQ</li>
              <li className="py-3">Features</li>
              <li className="py-3">Companies</li>
              <li className="py-3">Testimonials</li>
            </ul>
          </div>
          <div className="block">
            <p className="font-bold text-xl p-2">Pricing</p>
            <ul className="p-2">
              <li className="py-3">Plans</li>
              <li className="py-3">Billing</li>
              <li className="py-3">Free Trial</li>
              <li className="py-3">Refunds</li>
            </ul>
          </div>
          <div className="block">
            <p className="font-bold text-xl p-2">About</p>
            <ul className="p-2">
              <li className="py-3">Careers</li>
              <li className="py-3">Our Stories</li>
              <li className="py-3">Contact</li>
              <li className="py-3">Policies</li>
            </ul>
          </div>
          <div className="block">
            <p className="font-bold text-xl p-2">Community</p>
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
