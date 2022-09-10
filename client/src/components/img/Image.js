import React from "react";
import PropTypes from "prop-types";
import classNames from "~/utils/classNames";
const Image = ({ rounded, margin, src, sx, className, display }) => {
  return (
    <div
      className={classNames(
        display,
        margin,
        sx ? sx : "h-full w-full",
        rounded,
        className
      )}
    >
      <img
        src={src}
        alt=""
        className={classNames("h-full w-full object-cover", rounded)}
        loading="lazy"
      />
    </div>
  );
};

Image.propTypes = {
  rounded: PropTypes.string,
  margin: PropTypes.string,
  src: PropTypes.string,
  sx: PropTypes.string,
  className: PropTypes.string,
  display: PropTypes.string,
};

export default Image;
