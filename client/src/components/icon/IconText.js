import React from "react";
import PropTypes from "prop-types";
import classNames from "~/utils/classNames";

const IconText = ({
  icon,
  left,
  right,
  className,
  classText,
  classIcon,
  children,
  onClick,
  medium,
  bold,
  primary,
  secondary,
  gap,
  font,
  padding,
  hover,
}) => {
  return (
    <div
      className={classNames(
        "flex cursor-pointer items-center",
        hover &&
          "transition-all hover:bg-[#16182308] hover:dark:bg-grayScale-c1",
        padding && "py-3 px-5",
        font ? font : "font-DMSans",
        medium && "text-lg font-medium",
        bold && "text-sm font-bold",
        primary && "text-grayScale-c3",
        secondary && "text-grayScale-c4",
        gap ? gap : "gap-2",
        className
      )}
      onClick={onClick}
    >
      {left && <span className={classNames(classIcon)}>{icon}</span>}
      <span className={classNames(classText)}>{children}</span>
      {right && <span className={classNames(classIcon)}>{icon}</span>}
    </div>
  );
};
IconText.propTypes = {
  onClick: PropTypes.func,
  logo: PropTypes.string,
  children: PropTypes.node,
  left: PropTypes.bool,
  right: PropTypes.bool,
  medium: PropTypes.bool,
  bold: PropTypes.bool,
  gap: PropTypes.string,
  font: PropTypes.string,
  padding: PropTypes.bool,
  hover: PropTypes.bool,
};
export default IconText;
