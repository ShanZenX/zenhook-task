import { Raleway } from "next/font/google";
import React from "react";
 

const raleway = Raleway({weight:'800' , subsets:['latin']} )
export default function HeroHeading() {
  return (
    <div className={` text-white ${raleway.className} w-[45%]  flex`}>
      <p className="text-7xl text-gradient-wave">Collaborative workflow ecosystem</p>
    </div>
  );
}
