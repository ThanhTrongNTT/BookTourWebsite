import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";

import classNames from "~/utils/classNames";
import { IconStar } from "@/icon";
import ErrorComponent from "@/common/ErrorComponent";

const StartPoint = ({
  className = "",
  main = "4.19",
  extra = "147",
  sm,
  color,
}) => {
  return (
    <div className={classNames("flex items-center gap-2", className)}>
      <IconStar />
      <p>
        <b
          className={classNames(
            "font-normal",
            color ? "text-white" : "text-grayScale-c3 dark:text-grayScale-c6",
            sm ? "text-sm" : "text-base"
          )}
        >
          {main}{" "}
          <span
            className={classNames(
              color
                ? "dark:text-white"
                : "text-grrayScale-c4 dark:text-grayScale-c5"
            )}
          >
            ({extra})
          </span>
        </b>
      </p>
    </div>
  );
};

StartPoint.propTypes = {
  className: PropTypes.string,
  main: PropTypes.string,
  extra: PropTypes.string,
  sm: PropTypes.bool,
  color: PropTypes.bool,
};

export default withErrorBoundary(StartPoint, {
  FallbackComponent: ErrorComponent,
});
