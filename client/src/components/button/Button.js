import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "~/utils/classNames";
const Button = ({
  shadow,
  children,
  onClick,
  type,
  className = "",
  disabled,
  primary,
  secondary,
  varient,
  ...passProps
}) => {
  const props = {
    onClick,
    ...passProps,
  };

  //* Remove even listener when btn is disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") || props[key] === "function") delete props[key];
    });
  }

  const { to, href } = props;
  let Comp = "button";
  if (to) {
    props.to = to;
    Comp = NavLink;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  let customClass = "";
  switch (varient) {
    case "outlined":
      customClass += "border-2 border-grayScale-c6 dark:border-grayScale-c3";
      break;
    default:
      break;
  }

  return (
    <Comp
      className={classNames(
        "rounded-[10px] font-DMSans",
        primary && "bg-primary-blue",
        secondary &&
          "bg-[#353945] shadow-[0px_12px_20px_-5px_rgba(23,_23,_126,_0.1)]",
        shadow && "shadow-[0px_20px_30px_rgba(20,_92,_230,_0.12)]",
        customClass,
        className
      )}
      type={type}
      {...props}
    >
      {children}
    </Comp>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
  className: PropTypes.node,
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default Button;
