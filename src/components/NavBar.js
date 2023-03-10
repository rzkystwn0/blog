import Link from "next/link";
import React, { useState } from "react";

function NavBar() {
  const [burger, setBurger] = useState(true);

  const showNav = () => {
    setBurger(!burger);
  };

  return (
    <div className="flex container w-11/12 md:px-4 mx-auto left-0 right-0 absolute items-center justify-between md:my-12 ">
      <div className="">
        <Link href="/">
          <img src="Logo.png" className="md:py-0 md:px-0 py-2 px-2" />
        </Link>
      </div>
      <div className="mx-3 block md:hidden cursor-pointer " onClick={showNav}>
        <img src="burger.png" alt="" className="absolute right-4 top-4 " />
      </div>
      <div className="bg-black ">
        <ul className={` ${burger ? "-top-72" : "top-24"} duration-300 md:flex md:items-center md:relative absolute md:top-0  md:bg-none bg-white w-full md:w-none border-b-2 md:border-none border-black left-0 montserraf font-medium`}>
          <li className="text-[#424242] hover:text-[#5A47AB] mx-4 md:my-0 my-8">
            <Link href="/">PORTFOLIO</Link>
          </li>
          <li className="text-[#424242] hover:text-[#5A47AB] mx-4 md:my-0 my-8">
            <Link href="/">BLOG</Link>
          </li>
          <li className="text-[#424242] hover:text-[#5A47AB] mx-4 md:my-0 my-8">
            <Link href="/">ABOUT ME</Link>
          </li>
          <li className="text-[#424242] hover:text-[#5A47AB] mx-4 md:my-0 my-8">
            <Link href="/">CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
