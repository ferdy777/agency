import React from "react";
import Features from "./Features/Features";
import SectionHeading from "./SectionHeading/SectionHeading";

const About = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      <SectionHeading headingPrimary="All About Us" />
      <Features />
    </div>
  );
};

export default About;