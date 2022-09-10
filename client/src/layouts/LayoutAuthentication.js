import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import { useSelector } from "react-redux";

import { ErrorComponent } from "@/common";
import classNames from "~/utils/classNames";

const LayoutAuthentication = ({
  children,
  heading = "",
  title,
  textCenter,
}) => {
  const { darkMode } = useSelector((state) => state.darkMode);

  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div className="relative isolate w-full bg-[#FCFCFD] px-6 pt-6 pb-14 font-Epilogue dark:bg-dark-primary lg:min-h-screen lg:px-10 lg:pt-10 lg:pb-64">
      <img
        srcSet={darkMode ? "/ellipse-dark.png 2x" : "/ellipse.png 2x"}
        alt="bg"
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[-1] hidden w-full lg:block"
      />
      {/* <img
        srcSet="/ellipse-dark.png 2x"
        alt="bg"
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[-1] hidden w-full lg:block"
      /> */}
      <Link to="/" className="mb-5 inline-block lg:mb-16">
        <img srcSet="/logo.png 2x" alt="crowfunding-app" />
      </Link>
      <div className="mx-auto w-full max-w-[556px] rounded-xl bg-white px-5 py-8 dark:bg-dark-secondary lg:px-16 lg:py-12">
        <h1
          className={classNames(
            " dark:text-white  lg:text-xl",
            textCenter
              ? "mb-2 text-left text-xl font-bold lg:mb-5 lg:text-2xl"
              : "mb-1 text-center text-lg font-semibold lg:mb-3"
          )}
        >
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};
LayoutAuthentication.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
};

export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorComponent,
});
