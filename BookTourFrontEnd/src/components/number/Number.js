import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorBoundary } from "../common";

const Number = ({ children, name, control, initialValue }) => {
  const { field } = useController({
    name,
    control,
    defaultValue: initialValue,
  });
  return (
    <span className="text-lg font-OpenSans font-medium" {...field}>
      {children}
    </span>
  );
};
Number.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  initialValue: PropTypes.any,
};
export default withErrorBoundary(Number, {
  FallbackComponent: ErrorBoundary,
});
