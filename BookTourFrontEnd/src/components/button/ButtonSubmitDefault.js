import PropTypes from "prop-types";
import { memo } from "react";
import { withErrorBoundary } from "react-error-boundary";
import { backgroundButton, borderRadius } from "~/utils/arrCss";
import classNames from "~/utils/classNames";
import { ErrorBoundary } from "../common";
const ButtonSubmitDefault = ({
  radius,
  background,
  children,
  className,
  disable,
  onClick,
}) => {
  let resultRadius = borderRadius.find((item) => item.radius === radius);
  let resultBackgroundButton = backgroundButton.find(
    (item) => item.backgroundColor === background
  );
  console.log("render");
  return (
    <button
      onClick={onClick}
      type="submit"
      className={classNames(
        "outline-none",
        radius && resultRadius.radiusCss,
        className,
        background && resultBackgroundButton.backgroundCss,
        disable && "pointer-events-none select-none bg-opacity-50"
      )}
    >
      {children}
    </button>
  );
};
export default withErrorBoundary(memo(ButtonSubmitDefault), {
  FallbackComponent: ErrorBoundary,
});
