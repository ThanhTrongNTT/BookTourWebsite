import React from "react";
import { IconCompany, IconLocation } from "@/icon";
import Image from "@/img/Image";
import StartPoint from "@/startpoint/StartPoint";
import PropTypes from "prop-types";

const CardExplore = ({ src, describe, rice, spacing, location, totalRoom }) => {
  return (
    <div className="rounded-[20px] bg-white p-[14px] font-DMSans dark:bg-grayScale-c3">
      <div className="mb-5 h-[152px]">
        <Image
          src={src}
          sx="max-h-[152px] h-full w-full"
          rounded="rounded-[10px]"
        />
      </div>
      <StartPoint className="mb-3" />
      <div className="mb-[9px] flex items-center justify-between">
        <h1 className="text-xl font-bold dark:text-grayScale-c8">{describe}</h1>
        <div className="rounded-md bg-primary-blue bg-opacity-20 px-[10px] py-[3px] text-lg font-medium text-primary-blue">
          {rice}
        </div>
      </div>
      <p className="mb-4 text-sm text-grayScale-c4 dark:text-grayScale-c5">
        {spacing}
      </p>
      <div className="inline-block">
        <div className="mb-4 flex items-center gap-[10px]">
          <IconLocation />
          <p className="text-sm text-grayScale-c4 dark:text-grayScale-c5">
            {location}
          </p>
        </div>
        <div className="flex items-center gap-[10px]">
          <IconCompany />
          <p className="text-sm text-grayScale-c4 dark:text-grayScale-c5">
            Rooms available: {totalRoom}
          </p>
        </div>
      </div>
    </div>
  );
};
CardExplore.propTypes = {
  src: PropTypes.string,
  describe: PropTypes.string,
  rice: PropTypes.string,
  spacing: PropTypes.string,
  location: PropTypes.string,
  totalRoom: PropTypes.number,
};
export default CardExplore;
