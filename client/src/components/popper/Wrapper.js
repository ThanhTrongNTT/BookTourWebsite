import React from "react";
import PropTypes from "prop-types";
import classNames from "~/utils/classNames";
const Wrapper = ({ children, className = "" }) => {
  return (
    <div
      className={classNames(
        "flex w-full flex-col rounded-lg border border-[#E7ECF3] bg-white py-2 shadow-[0px_6px_30px_rgba(37,_37,_37,_0.16)] dark:border dark:border-grayScale-c3 dark:bg-grayScale-c2",
        className
      )}
    >
      {children}
    </div>
  );
};
Wrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
export default Wrapper;
