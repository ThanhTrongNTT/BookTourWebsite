import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import { backgroundButton, borderRadius } from "~/utils/arrCss";
import classNames from "~/utils/classNames";
import { ErrorBoundary } from "../common";
const ButtonSubmitDefault = ({ radius, background, children, className }) => {
  let resultRadius = borderRadius.find((item) => item.radius === radius);
  let resultBackgroundButton = backgroundButton.find(
    (item) => item.backgroundColor === background
  );
  
  return (
    <button
      type="submit"
      className={classNames(
        radius && resultRadius.radiusCss,
        className,
        background && resultBackgroundButton.backgroundCss
      )}
    >
      {children}
    </button>
  );
};
ButtonSubmitDefault.propTypes = {
  children: PropTypes.node,
  radius: PropTypes.string,
  classNames: PropTypes.string,
  background: PropTypes.string,
};
export default withErrorBoundary(ButtonSubmitDefault, {
  FallbackComponent: ErrorBoundary,
});
