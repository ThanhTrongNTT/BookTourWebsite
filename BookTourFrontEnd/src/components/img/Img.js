import React from "react";
import classNames from "~/utils/classNames";

const Img = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={classNames("object-cover h-full w-full", className)}
    />
  );
};

export default Img;
