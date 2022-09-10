import React from "react";
import Button from "~/components/button/Button";
import Image from "~/components/img/Image";
import StartPoint from "~/components/startpoint/StartPoint";

const CardTrending = ({ src, heading, rice }) => {
  return (
    <div className="rounded-[20px] bg-white p-6 dark:bg-grayScale-c2">
      <div className="flex items-center gap-6">
        <div className="h-[168px] w-[160px]">
          <Image src={src} rounded="rounded-[20px]" />
        </div>
        <div className="flex-1 text-left">
          <h1 className="mb-3 font-DMSans text-2xl font-bold text-[#282832] dark:text-grayScale-c8">
            {heading}
          </h1>
          <StartPoint className="mb-5" />
          <p className="mb-6 font-Poppins">
            <strong className="text-base font-bold text-grayScale-c3 dark:text-grayScale-c6">
              ${rice}
            </strong>
            <span className="text-sm font-medium text-grayScale-c4 dark:text-grayScale-c7">
              /night
            </span>
          </p>
          <Button
            primary
            type="button"
            className="py-2 px-4 text-sm font-bold text-white"
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardTrending;
