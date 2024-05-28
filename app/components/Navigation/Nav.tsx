import Link from "next/link";
import React from "react";
import ButtonBlue from "../Button/ButtonBlue";
import ButtonRed from "../Button/ButtonRed";
import { Bars3BottomRightIcon } from "@heroicons/react/16/solid";
import about from "@/app/about/page";
import services from "@/app/services/page";
import customer from "@/app/customer/page";
import blog from "@/app/blog/page";

interface props {
  openNav: () => void;
}

const nav = ({ openNav }: props) => {
  return (
    <div className="bg-white w-full h-[10vh] fixed z-[1000] shadow-md">
      <div className="flex lg:max-w-[80%] mx-auto justify-between items-center z-[1000] space-x-2 max-w-[90%]   ">
        <h1 className="text-[16px] md:text-[25px] font-bold text-slate-800">
          <span className="text-red-400 text-[27px] md:text-[40px]">W</span>
          <span>ebdev.</span>
        </h1>
        <div className=" w-[85%] mx-auto h-[12vh] flex justify-between items-center">
          <ul className="hidden lg:flex items-center mx-auto space-x-10">
            <li className="text-[17px] text-red-500 cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="text-[17px] hover:text-red-500 transition duration-200 cursor-pointer">
              <Link href="/about">About</Link>
            </li>
            <li className="text-[17px] hover:text-red-500 transition duration-200 cursor-pointer">
              <Link href="/services">Services</Link>
            </li>
            <li className="text-[17px] hover:text-red-500 transition duration-200 cursor-pointer">
              <Link href="/customer">Customer</Link>
            </li>
            <li className="text-[17px] hover:text-red-500 transition duration-200 cursor-pointer">
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-2 md:space-x-5">
          <Link href="/form">
            <ButtonBlue text="Login" />
          </Link>
          <Link href="/signup">
            <ButtonRed text="SignUp" />
          </Link>

          <Bars3BottomRightIcon
            onClick={openNav}
            className="w-[1.5rem] lg:hidden h-[1.5rem] text-slate-900 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default nav;
