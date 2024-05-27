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
    <div className="h-[12vh] bg-white shadow-md">
      <div className=" w-[85%] mx-auto h-[12vh] flex justify-between items-center">
        <h1 className="text-[16px] md:text-[25px] font-bold text-slate-800">
          <span className="text-red-400 text-[27px] md:text-[40px]">W</span>
          <span>ebdev.</span>
        </h1>
        <ul className="hidden lg:flex items-center space-x-10">
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

        <div className="flex items-center space-x-2 md:space-x-5">
          <Link href="/form">
            <ButtonBlue text="Login" />
          </Link>
          <Link href="/signup">
            <ButtonRed text="Sign Up" />
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
