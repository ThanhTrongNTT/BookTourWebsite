import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorBoundary } from "../common";
const TextTour = ({ children, icon }) => {
  return (
    <div>
      {icon && <span>{icon}</span>}
      {children}
    </div>
  );
};
TextTour.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
};
export default withErrorBoundary(TextTour, {
  FallbackComponent: ErrorBoundary,
});
