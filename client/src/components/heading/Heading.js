import React from "react";
import PropTypes from "prop-types";
import classNames from "~/utils/classNames";
const Heading = ({ children, className = "" }) => {
  return (
    <h1
      className={classNames(
        "mb-[14px] font-DMSans text-3xl font-bold text-grayScale-c1 dark:text-grayScale-c7 lg:mb-5 lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
};
Heading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
export default Heading;
