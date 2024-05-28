import Image from "next/image";
import React from "react";
import SupportImg from "@/public/images/support.jpg";
import { CheckIcon } from "@heroicons/react/20/solid";

const CustomerSupport = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[4rem] items-center">
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          className="order-2 lg:order-1"
        >
          <Image src={SupportImg} alt="support" />
        </div>
        <div className="order-1 lg:order-2">
          <h1
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-anchor-placement="top-center"
            className="text-[20px] md:text-[25px] lg:text-[30px] text-[#02073e] font-bold leading-[2rem] md:leading-[3rem]"
          >
            Customer support is our main priority with their hundered percent
            satisfaction
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-anchor-placement="top-center"
            className="mt-[1.5rem] mb-[1.5rem] text-black opactity-90 md:text-[16px] mx-auto"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            facere molestiae quasi molestias consequuntur nam blanditiis iste?
            Libero sit accusamus architecto accusantium aperiam mollitia ipsum,
            dolorem vel reprehenderit culpa provident.
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-anchor-placement="top-center"
            className="mb-[1rem] flex items-center space-x-3"
          >
            <CheckIcon className="w-[1.3rem] h-[1.3rem] text-red-600" />
            <p className="text-[17px] text-[#02073e] font-[500]">
              Medical and vision
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-anchor-placement="top-center"
            className="mb-[1rem] flex items-center space-x-3"
          >
            <CheckIcon className="w-[1.3rem] h-[1.3rem] text-red-600" />
            <p className="text-[17px] text-[#02073e] font-[500]">
              Life Insurance
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-anchor-placement="top-center"
            className="mb-[1rem] flex items-center space-x-3"
          >
            <CheckIcon className="w-[1.3rem] h-[1.3rem] text-red-600" />
            <p className="text-[17px] text-[#02073e] font-[500]">
              400(k) Savings
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="1200"
            data-aos-anchor-placement="top-center"
            className="mb-[1rem] flex items-center space-x-3"
          >
            <CheckIcon className="w-[1.3rem] h-[1.3rem] text-red-600" />
            <p className="text-[17px] text-[#02073e] font-[500]">
              HSAs and FSAs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
