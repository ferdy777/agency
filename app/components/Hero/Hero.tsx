import React from "react";
import ButtonBlue from "../Button/ButtonBlue";
import ButtonRed from "../Button/ButtonRed";
import HeroImg from "@/public/images/hero.svg";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="h-[70vh] lg:h-[88vh] md:h-[80vh] sm-[75vh] flex elex-col justify-center items-center">
      <div className="grid grid-cols-1  lg:grid-cols-5 w-[80%] mx-auto items-center">
        <div className="col-span-2">
          <h1
            data-aos="fade-right"
            className="text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]"
          >
            Exploring Innovative paths to Cutivate your Business
          </h1>
          <p
            data-aos="fade-left"
            data-aos-delay="200"
            className="md:text-[17px] text-[15px] mb-[1rem] text-black opacity-90 font-[400]"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            animi vel alias est aut dolores sint sit eaque nulla suscipit quo
            rem quod doloribus, reiciendis commodi sapiente iure nemo molestias.
          </p>
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="flex items-center space-x-4 md:space-x-6"
          >
            <Link href="/signup">
              <ButtonBlue text="Get started" />
            </Link>
            <Link href="/form">
              <ButtonRed text="Features" />
            </Link>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="600" className="col-span-3 ">
          <Image src={HeroImg} alt="Heroimg " />
        </div>
      </div>
    </div>
  );
};

export default Hero;
