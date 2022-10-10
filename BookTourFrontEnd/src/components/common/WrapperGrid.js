import React from "react";
import classNames from "~/utils/classNames";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorBoundary from "./ErrorBoundary";
import {
  arrSpacing,
  columnStartEnd,
  rowStartEnd,
  templateColumns,
  templateRows,
} from "~/utils/arrCss";
const Grid = ({ children, cols, col, row, rows, spacing, className }) => {
  return (
    <div
      className={classNames(
        "grid",
        templateColumns[cols - 1],
        columnStartEnd[col],
        templateRows[rows - 1],
        rowStartEnd[row],
        arrSpacing[spacing - 1],
        className
      )}
    >
      {children}
    </div>
  );
};
Grid.propTypes = {
  children: PropTypes.node,
  cols: PropTypes.string,
  col: PropTypes.string,
  rows: PropTypes.string,
  row: PropTypes.string,
  spacing: PropTypes.string,
  className: PropTypes.string,
};
export default withErrorBoundary(Grid, {
  FallbackComponent: ErrorBoundary,
});
