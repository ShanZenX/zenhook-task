import React from "react";
import HeroMarqueeCircle from "../MiniComponents/HeroMarqueeCircle";
import HeroMarqueeOval from "../MiniComponents/HeroMarqueeOval";
import Marquee from "react-fast-marquee";

export default function HeroMarquee() {
  return (
    <Marquee className="flex" gradient={true} gradientColor="black">
      <HeroMarqueeCircle img={"/images/cir-1.jpg"} bgColor={"#a66b4a"} />
      <HeroMarqueeOval img={"/images/mar-1.jpg"} />
      <HeroMarqueeCircle img={"/images/cir-2.jpg"} bgColor={"#3d3b88"} />
      <HeroMarqueeOval img={"/images/mar-2.jpg"} />
      <HeroMarqueeCircle img={"/images/cir-3.jpg"} bgColor={"#336740"} />
      <HeroMarqueeOval img={"/images/mar-3.jpg"} />
      <HeroMarqueeCircle img={"/images/cir-4.jpg"} bgColor={"#FFF"} />
      <HeroMarqueeOval img={"/images/mar-1.jpg"} />
    </Marquee>
  );
}
