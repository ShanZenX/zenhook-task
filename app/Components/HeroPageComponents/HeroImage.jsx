import Image from "next/image";
import React from "react";
export default function HeroImage() {
  return (
    <div className="md:w-[25%] w-[100%] flex flex-col justify-center items-center ml-10 pr-10" >
      <div className="flex">
        <Image
          src="/Images/img-1.jpg"
          alt="img"
          width={100}
          height={100}
          className=" object-cover w-[150px] rounded-3xl h-[150px]"
        ></Image>{" "}
        <Image
          src="/Images/img-3.jpg"
          alt="img"
          width={100}
          height={100}
          className=" object-cover w-[150px] rounded-3xl h-[150px]"
        ></Image>
      </div>
      <div className="flex">
        <Image
          src="/Images/img-4.jpg"
          alt="img"
          width={100}
          height={100}
          className=" object-cover w-[150px] rounded-3xl h-[150px]"
        ></Image>{" "}
        <Image
          src="/Images/img-2.jpg"
          alt="img"
          width={100}
          height={100}
          className=" object-cover w-[150px] rounded-3xl h-[150px]"
        ></Image>
      </div>
    </div>
  );
}
