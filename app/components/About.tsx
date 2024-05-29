import React from "react";
import Features from "./Features/Features";
import SectionHeading from "./SectionHeading/SectionHeading";

const About = () => {
  return (
    <div className="xl:mt-[9rem]">
      <SectionHeading
        headingPrimary="All About Us"
        headingMini="Deal for your business"
      />
      <Features />
    </div>
  );
};

export default About;
