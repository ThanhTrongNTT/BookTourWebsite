import React from "react";
import PropTypes from "prop-types";
import classNames from "~/utils/classNames";
const Input = ({
  pNone,
  id,
  className = "",
  classNameInput = "",
  type,
  primary,
  children,
  textSize,
  bg,
  fontSize,
  ...props
}) => {
  return (
    <div
      className={classNames(
        "flex flex-col gap-[2px] rounded-lg border border-[#E7E8EA] font-DMSans dark:border-[#4A4E54] lg:gap-[6px]",
        primary ? "bg-[#F4F5F7] dark:bg-grayScale-c3" : "",
        pNone ? pNone : "lg:py-[10px] lg:px-6",
        className
      )}
    >
      <label
        htmlFor={id}
        className={classNames(
          "inline-block cursor-pointer text-base text-grayScale-c3 dark:text-grayScale-c8 lg:text-lg",
          fontSize ? fontSize : "font-medium"
        )}
      >
        {children}
      </label>
      <input
        type={type}
        id={id}
        {...props}
        className={classNames(
          "text-xs dark:text-grayScale-c8 lg:text-base",
          bg ? bg : "bg-transparent ",
          classNameInput
        )}
      />
    </div>
  );
};
Input.propTypes = {
  id: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  classNames: PropTypes.string,
};

export default Input;
