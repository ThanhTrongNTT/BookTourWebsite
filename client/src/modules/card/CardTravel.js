import React from "react";
import Image from "~/components/img/Image";
import StartPoint from "~/components/startpoint/StartPoint";

const CardTravel = ({ src, children }) => {
  return (
    <div className="relative">
      <Image src={src} sx="h-[323px] w-full" rounded="rounded-2xl" />
      <div className="absolute inset-0 select-none rounded-2xl bg-slate-900 bg-opacity-50" />
      <div className="absolute bottom-0 px-[30px] pb-[17px] text-white">
        <h1 className="mb-[6px] text-2xl font-semibold">{children}</h1>
        <StartPoint sm color main="4.8" extra="122 reviews" />
      </div>
    </div>
  );
};

export default CardTravel;
