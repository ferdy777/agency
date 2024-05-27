import React from "react";
import Price from "./Price/Price";
import SectionHeading from "../components/SectionHeading/SectionHeading";

const Services = () => {
  return (
    <div>
      <div className="pt-[5rem] pb-[3rem]">
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
