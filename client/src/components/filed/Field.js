import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "../common";
import classNames from "~/utils/classNames";
const Field = ({
  label,
  id,
  placeholder,
  icon,
  right,
  left,
  type,
  className,
}) => {
  return (
    <div className={classNames("flex flex-col gap-3", className)}>
      <div className="inline-block">
        <label
          htmlFor={id}
          className="cursor-pointer text-base font-bold text-grayScale-c4 dark:text-grayScale-c5"
        >
          {label}
        </label>
      </div>
      <div className="flex items-center justify-start rounded-[10px] border border-[#DEDFE1] py-3 px-5 text-grayScale-c5 dark:border-grayScale-c2 dark:text-grayScale-c5">
        {left && <span className="mr-4">{icon}</span>}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent text-grayScale-c3 dark:text-white"
        />
        {right && <span className="ml-4">{icon}</span>}
      </div>
    </div>
  );
};

Field.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.any,
  right: PropTypes.bool,
  left: PropTypes.bool,
  type: PropTypes.string.isRequired,
};
export default withErrorBoundary(Field, {
  FallbackComponent: ErrorComponent,
});
