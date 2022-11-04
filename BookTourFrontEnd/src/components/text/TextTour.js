import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorBoundary } from "../common";
const TextTour = ({ children }) => {
  return (
    <div className="flex items-center justify-center">
      <img alt="icon-check" src="/check.png" />
      {children}
    </div>
  );
};
TextTour.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
};
export default withErrorBoundary(TextTour, {
  FallbackComponent: ErrorBoundary,
});
