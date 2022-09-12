import React from "react";
import classNames from "~/utils/classNames";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorBoundary from "../common/ErrorBoundary";
const IconText = ({
  text,
  icon,
  left,
  right,
  children,
  margin,
  className,
  ...props
}) => {
  return (
    <div className={classNames(className)} {...props}>
      {/* {left && (
        <span className={classNames("inline-block", margin)}>{icon}</span>
      )}
      {children}
      {right && (
        <span className={classNames("inline-block", margin)}>{icon}</span>
      )} */}
      {left && (
        <span
          className={`after:absolute relatvie inline after:content-['${text}'] after:leading-normal after:ml-2`}
        >
          {icon}
        </span>
      )}
    </div>
  );
};
IconText.propTypes = {
  left: PropTypes.bool,
  right: PropTypes.bool,
  children: PropTypes.node,
};
export default withErrorBoundary(IconText, {
  FallbackComponent: ErrorBoundary,
});
