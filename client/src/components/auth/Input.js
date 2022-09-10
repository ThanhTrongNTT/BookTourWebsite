import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";

import { ErrorComponent } from "@/common";
import classNames from "~/utils/classNames";

const Input = ({
  children,
  control,
  name,
  type,
  error = "",
  placeholder = "",
  ...rest
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        type={type}
        className={classNames(
          "w-full rounded-xl border bg-transparent px-6 py-4 text-sm font-medium transition-all dark:border-dark-stroke dark:text-white",
          error.length > 0
            ? "border-primary-red text-primary-red"
            : "border-grayScale-c6 text-grayScale-c3",
          children ? "pr-16" : ""
        )}
        placeholder={error.length > 0 ? "" : placeholder}
        {...field}
        {...rest}
      />
      {children && (
        <span className="absolute right-6 top-2/4 -translate-y-2/4 cursor-pointer select-none">
          {children}
        </span>
      )}
    </div>
  );
};
Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  control: PropTypes.any.isRequired,
};
export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent,
});
