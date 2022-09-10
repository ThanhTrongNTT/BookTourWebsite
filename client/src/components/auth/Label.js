import React from "react";
import classNames from "~/utils/classNames";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";

import { ErrorComponent } from "@/common";
const Label = ({ htmlFor, className = "", children }) => {
  return (
    <div className="inline-block">
      <label
        htmlFor={htmlFor}
        className={classNames(
          "inline-block cursor-pointer text-sm font-medium text-grayScale-c3 dark:text-grayScale-c4",
          className
        )}
      >
        {children}
      </label>
    </div>
  );
};
Label.propTypes = {
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default withErrorBoundary(Label, {
  FallbackComponent: ErrorComponent,
});
