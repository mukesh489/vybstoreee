// eslint-disable-next-line no-unused-vars
import React from "react";
import Hero from "../components/Hero";
import Section2 from "../components/Section2";
import Section4 from "../components/Section4";
import Section3 from "../components/Section3";
import Faq from "../components/Faq";

const Home = () => {
  return (
    <div className="mt-32">
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Faq />
    </div>
  );
};

export default Home;
