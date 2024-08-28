import { Poppins } from "next/font/google";
import Link from "next/link";
import React from "react";
import { AiFillDribbbleCircle } from "react-icons/ai";

const poppins = Poppins({ weight: "300", subsets: ["latin"] });

export default function Navbar() {
  return (
    <div
      className={`flex justify-between mx-10 h-[100px] gap-10 items-center text-white ${poppins.className}
       `}
    >
      <div className="w-60 gap-2 items-center flex">
        <AiFillDribbbleCircle />

        <h1>Fucce</h1>
      </div>
      <div className="w-full h-[2px] bg-white"></div>
      <div className="gap-5 flex ">
        <Link href={"/"} className="group relative">
          Product
          <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
        </Link>
        <Link href={"/"} className="group relative">
          Download
          <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
        </Link>
        <Link href={"/"} className="group relative">
          Solution
          <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
        </Link>
        <Link href={"/"} className="group relative">
          Resources
          <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
        </Link>
        <Link href={"/"} className="group relative">
          Pricing
          <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
        </Link>
      </div>
      <div className="w-full h-[2px] bg-white"></div>

      <div className="w-60">
        <Link href={"/"}>Log in</Link>
      </div>
    </div>
  );
}
