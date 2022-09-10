import React from "react";
import Image from "@/img/Image";

const CardTour = ({ src, nation, location, numberPlace }) => {
  return (
    <div className="relative h-full max-h-[495px]">
      <Image src={src} rounded="rounded-2xl" />
      <div className="absolute inset-0 w-full rounded-xl bg-slate-900 bg-opacity-25" />
      <div className="absolute top-0 h-full w-full px-[35px] py-[30px]">
        <div className="relative h-full">
          <div className="absolute top-0 rounded-full bg-[#14141633] py-3 px-7 font-DMSans text-xl font-bold text-white backdrop-blur-sm">
            {nation}
          </div>
          <div className="absolute bottom-0 text-grayScale-c8">
            <h1 className="mb-2 font-DMSans text-4xl font-bold">{location}</h1>
            <span className="font-Poppins text-base">{numberPlace}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTour;
