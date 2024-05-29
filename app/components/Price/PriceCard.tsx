// "Use client";
import React from "react";
import ButtonRed from "../Button/ButtonRed";
import ButtonBlue from "../Button/ButtonBlue";
import Link from "next/link";

interface Props {
  bg: string;
  num: string;
  plan: string;
  price: string;
}

const PriceCard = ({ bg, num, plan, price }: Props) => {
  const large = num == "2" ? "lg:scale-110 scale-100 z-[100]" : "";
  return (
    <div className={`relative ${large} bg-gray-100 shadow-md transform`}>
      <div
        className={`${bg} h-[200px] flex items-center flex-col justify-center rounded-t-md`}
      >
        <p className="text-[20px] text-white font-[500] mb-[1.5rem]">{plan}</p>
        <h1 className="text-[20px] text-white">
          <span className="text-[30p] text-yellow-300 font-bold">${price}</span>
          per month
        </h1>
      </div>
      <div className="mt-[1rem p-4 text-center">
        <p className="text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]">
          Full Access Library
        </p>
        <p className="text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]">
          Multiple website
        </p>
        <p className="text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]">
          Next Js project
        </p>
        <p className="text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]">
          Mern stack project
        </p>
        <p className="text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]">
          Typescript project
        </p>
        <div className="mt-[1.5rem] mb-[1.5rem] text-center">
          {num != "2" && (
            <Link href="/about">
              <ButtonRed text="choose plan" />
            </Link>
          )}
          {num == "2" && (
            <Link href="/about">
              <ButtonBlue text="choose plan" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
