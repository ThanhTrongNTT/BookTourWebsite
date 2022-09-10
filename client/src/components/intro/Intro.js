import React from "react";
import PropTypes from "prop-types";
import classNames from "~/utils/classNames";
const Intro = ({ children, className = "", text2xl }) => {
  return (
    <p
      className={classNames(
        "text-grayScale-c3",
        className,
        text2xl ? "text-sm lg:text-2xl" : "text-sm lg:text-base"
      )}
    >
      {children}
    </p>
  );
};
Intro.propTypes = {
  children: PropTypes.node,
  classNames: PropTypes.string,
  text2xl: PropTypes.bool,
};
export default Intro;
