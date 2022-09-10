import React from "react";
import Image from "~/components/img/Image";
import PropTypes from "prop-types";
const CardPlace = ({ namePlace, destinations, src }) => {
  return (
    <div className="wrapper inline-block w-full cursor-pointer rounded-[10px] border border-[#ccc] border-opacity-30 p-6 text-center font-DMSans lg:p-[30px] lg:text-left">
      <Image
        display="inline-block"
        src={src}
        rounded="rounded-[10px]"
        margin="mb-[18px]"
        sx="h-[70px] w-[70px]"
      />
      <p className="name-place mb-3 text-base font-bold text-grayScale-c3 dark:text-grayScale-c6 lg:text-xl">
        {namePlace}
      </p>
      <span className="text-sm font-medium text-grayScale-c4 dark:text-[#777E90]">
        {destinations}
      </span>
    </div>
  );
};
CardPlace.propTypes = {
  namePlace: PropTypes.string,
  destinations: PropTypes.string,
  src: PropTypes.string,
};
export default CardPlace;
