import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";

import { ErrorComponent } from "@/common";
import { Footer, Header } from "~/modules/partials";

const LayoutSetting = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="bg-[#FAFAFB] dark:bg-grayScale-c1">
        <div className="container mx-auto pb-52">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

LayoutSetting.propTypes = {
  title: PropTypes.string,
};

export default withErrorBoundary(LayoutSetting, {
  FallbackComponent: ErrorComponent,
});
