import React from "react";
import Price from "./Price/Price";
import SectionHeading from "../components/SectionHeading/SectionHeading";

const Services = () => {
  return (
    <div>
      <div className="xl:mt-[9rem]">
        <SectionHeading
          headingPrimary="Here are the services we render"
          headingMini="what we offer"
        />
        <Price />
      </div>
    </div>
  );
};

export default Services;
