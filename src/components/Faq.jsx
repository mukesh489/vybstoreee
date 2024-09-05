// eslint-disable-next-line no-unused-vars
import React from "react";
import Accordion from "./Accordion";

const Faq = () => {
  return (
    <section className="container w-auto h-auto">
      <div className="flex flex-col w-full h-full">
        <div>
          <p>FREQUENTLY ASKED QUESTIONS</p>
        </div>
        <div>
          <p>
            Quick answers to questions you may have. Can&apos;t find what
            you&apos;re looking for?
          </p>
          <p>Check out our full documentation</p>
        </div>
        <div>
          <Accordion />
        </div>
      </div>
    </section>
  );
};

export default Faq;
