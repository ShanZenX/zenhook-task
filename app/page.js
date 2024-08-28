import Image from "next/image";
import HeroHeading from "./Components/HeroPageComponents/HeroHeading";
import HeroPara from "./Components/HeroPageComponents/HeroPara";
import HeroImage from "./Components/HeroPageComponents/HeroImage";
import HeroMarquee from "./Components/HeroPageComponents/HeroMarquee";

export default function Home() {
  return (
    <div className="mx-20 flex flex-col ">
      <div className="flex  h-[50vh] items-center ">
        {" "}
        <HeroHeading />
        <HeroPara />
        <HeroImage />
      </div>

      <div>
        <HeroMarquee />
      </div>
    </div>
  );
}
