import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";
import Link from "next/link";
import about from "@/app/about/page";
import services from "@/app/services/page";
import customer from "@/app/customer/page";
import blog from "@/app/blog/page";
interface props {
  nav: boolean;
  closeNav: () => void;
  handleClick: () => void;
}

const Mobilenav = ({ nav, closeNav, handleClick }: props) => {
  const navOpenStyle = nav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div
      className={`transform transition-all ${navOpenStyle} duration-500 fixed top-0 left-0 z-[200] h-[100vh] right-0 bottom-0 bg-[#6d096b]`}
    >
      <XMarkIcon
        onClick={closeNav}
        className="w-[2rem] h-[2rem] absolute top-[2rem] text-white z-[202] right-[2rem]"
      />
      <ul className="relative h-[100%] flex justify-center items-center flex-col space-y-10 z-[201]">
        <li
          onClick={handleClick}
          className="text-[25px] text-yellow-300 cursor-pointer"
        >
          <Link href="/">Home</Link>
        </li>
        <li
          onClick={handleClick}
          className="text-[25px] text-white hover:text-yellow-300 transition duration-200 cursor-pointer"
        >
          <Link href="/about">About</Link>
        </li>
        <li
          onClick={handleClick}
          className="text-[25px] text-white hover:text-yellow-300 transition duration-200 cursor-pointer"
        >
          <Link href="/services">Services</Link>
        </li>
        <li
          onClick={handleClick}
          className="text-[25px] text-white hover:text-yellow-300 transition duration-200 cursor-pointer"
        >
          <Link href="/customer">Customer</Link>
        </li>
        <li
          onClick={handleClick}
          className="text-[25px] text-white hover:text-yellow-300 transition duration-200 cursor-pointer"
        >
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default Mobilenav;
