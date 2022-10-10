import React from "react";
import classNames from "~/utils/classNames";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorBoundary from "./ErrorBoundary";

const WrapperAmount = ({ children, className }) => {
  return (
    <div
      className={classNames(
        "flex justify-between p-[10px] bg-white",
        className
      )}
    >
      {children}
    </div>
  );
};
WrapperAmount.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
export default withErrorBoundary(WrapperAmount, {
  FallbackComponent: ErrorBoundary,
});
