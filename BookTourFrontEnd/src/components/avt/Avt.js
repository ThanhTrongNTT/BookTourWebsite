import React from "react";
import classNames from "~/utils/classNames";

const Avt = ({ src, sx }) => {

  switch (sx) {
    case "default":
      sx = "w-8 h-8";
      break;
    default:
      break;
  }

  return (
    <img
      src={src}
      alt="avt"
      loading="lazy"
      className={classNames("rounded-full object-cover", sx)}
    />
  );
};

export default Avt;
