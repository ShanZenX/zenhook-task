import { Raleway } from "next/font/google";
import React from "react";
 

const raleway = Raleway({weight:'800' , subsets:['latin']} )
export default function HeroHeading() {
  return (
    <div className={` text-white ${raleway.className} md:w-[40%]  flex`}>
      <p className="text-[50px] md:text-7xl text-gradient-wave pl-10">Collaborative workflow ecosystem</p>
    </div>
  );
}
