"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import Mobilenav from "./MobileNav";
import { useRouter } from "next/router";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  const handleClick = () => setShowNav(!showNav);

  return (
    <div>
      <Nav openNav={showNavHandler} />
      <Mobilenav
        nav={showNav}
        closeNav={closeNavHandler}
        handleClick={handleClick}
      />
    </div>
  );
};

export default ResponsiveNav;
