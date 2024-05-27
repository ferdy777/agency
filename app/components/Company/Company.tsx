import Image from "next/image";
import React from "react";
import CompanyImg from "@/public/images/customer.png";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

const Company = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] ">
      <h1 className="font-bold text-[22px] mb-[1.5rem] text-center text-[#02073e]">
        Company who also worked with us
      </h1>
      <p className="w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[55%] mx-auto text-[17px] text-center text-gray-950 opacity-70">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error delectus
        velit voluptatibus quaerat amet veniam fuga sit, sequi deserunt possimus
        nemo aspernatur at nostrum dignissimos incidunt nisi tempore blanditiis
        earum!
      </p>
      <p className="text-center mt-[1.7rem] font-[600] text-blue-600 cursor-pointer">
        Explore Details
      </p>
      <div className="mt-[2rem] text-center w-[80%] mx-auto">
        <Image src={CompanyImg} alt="company" />
      </div>
    </div>
  );
};

export default Company;
