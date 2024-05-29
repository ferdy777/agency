"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import CustomerSupport from "./CustomerSupport/CustomerSupport";
import Price from "./Price/Price";
import SupportTeam from "./SupportTeam/SupportTeam";
import Company from "./Company/Company";
import Footer from "./Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeading from "./SectionHeading/SectionHeading";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <div className="mt-[6rem] xl:mt-[4rem]">
      <Hero />
      <div className="pt-[5rem] pb-[3rem]">
        <SectionHeading
          headingMini="Ideal solution for you"
          headingPrimary="Explore Ultimate features"
        />
        <Features />
      </div>
      <CustomerSupport />
      <div className="pt-[5rem] pb-[3rem]">
        <SectionHeading
          headingMini="Deal for your business"
          headingPrimary="Meet our pricing plan that suit you"
        />
        <Price />
      </div>
      <SupportTeam />
      <Company />
    </div>
  );
};

export default Home;
