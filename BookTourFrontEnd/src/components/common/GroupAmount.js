import React from "react";
import classNames from "~/utils/classNames";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorBoundary from "./ErrorBoundary";
const GroupAmount = ({ children, spacing, className }) => {
  return (
    <div
      className={classNames(
        "flex gap-3 items-center",
        spacing ? spacing : "gap-2",
        className
      )}
    >
      {children}
    </div>
  );
};
GroupAmount.propTypes = {
  children: PropTypes.node,
  spacing: PropTypes.string,
  className: PropTypes.string,
};
export default withErrorBoundary(GroupAmount, {
  FallbackComponent: ErrorBoundary,
});
