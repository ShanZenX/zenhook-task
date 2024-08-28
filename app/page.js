import Image from "next/image";
import HeroHeading from "./Components/HeroPageComponents/HeroHeading";
import HeroPara from "./Components/HeroPageComponents/HeroPara";
import HeroImage from "./Components/HeroPageComponents/HeroImage";
import HeroMarquee from "./Components/HeroPageComponents/HeroMarquee";

export default function Home() {
  return (
    <div className=" flex w-full flex-col ">
      <div className="flex   md:h-[50vh] w-full justify-evenly  items-center flex-wrap ">
        {" "}
        <HeroHeading />
        <HeroPara />
        <HeroImage />
      </div>

      <div className=" w-full justify-center flex">
        <div className="md:w-[90%] w-[100%] py-20 md:py-0">
          {" "}
          <HeroMarquee />
        </div>
      </div>
    </div>
  );
}
