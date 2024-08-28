import React from "react";
import HeroMarqueeCircle from "../MiniComponents/HeroMarqueeCircle";
import HeroMarqueeOval from "../MiniComponents/HeroMarqueeOval";
import Marquee from "react-fast-marquee";

import cir1 from "@/public/Images/cir-1.jpg"
import cir2 from "@/public/Images/cir-2.jpg"
import cir3 from "@/public/Images/cir-3.jpg"
import cir4 from "@/public/Images/cir-4.jpg"

import mar1 from "@/public/Images/mar-1.jpg"
import mar2 from "@/public/Images/mar-2.jpg"
import mar3 from "@/public/Images/mar-3.jpg"


export default function HeroMarquee() {
  return (
    <Marquee className="flex" gradient={true} gradientColor="black">
      <HeroMarqueeCircle img={cir1} bgColor={"#a66b4a"} />
      <HeroMarqueeOval img={mar1} />
      <HeroMarqueeCircle img={cir2} bgColor={"#3d3b88"} />
      <HeroMarqueeOval img={mar2} />
      <HeroMarqueeCircle img={cir3} bgColor={"#336740"} />
      <HeroMarqueeOval img={mar3} />
      <HeroMarqueeCircle img={cir4} bgColor={"#FFF"} />
      <HeroMarqueeOval img={mar1} />
    </Marquee>
  );
}
