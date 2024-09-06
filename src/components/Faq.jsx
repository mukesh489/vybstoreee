import React from "react";
import Accordion from "./Accordion";
import "../styles/mobile.css";

const Faq = () => {
  return (
    <section className="container sm:w-full md:h-full lg:flex lg:flex-col justify-center items-center p-4">
      <div className="flex flex-col sm:w-full md:h-full justify-center items-center">
        <div className="sm:text-lg md:text-xl text-center mb-4">
          <p>FREQUENTLY ASKED QUESTIONS</p>
        </div>
        <div className="sm:text-sm md:text-base text-center mb-4">
          <p>
            Quick answers to questions you may have. Can't find what
            you're looking for?
          </p>
          <p>Check out our full documentation</p>
        </div>
        <div className="sm:w-full md:flex md:flex-col justify-center items-center">
          <Accordion />
        </div>
      </div>
    </section>
  );
};

export default Faq;