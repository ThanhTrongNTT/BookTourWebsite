import { Outlet } from "react-router-dom";
import { withErrorBoundary } from "react-error-boundary";

import ErrorComponent from "@/common/ErrorComponent";
import { Header, Footer } from "~/modules/partials";
import Banner from "~/modules/Banner";
const LayoutDefault = () => {
  return (
    <div className="wrapper">
      <Header />
      <Banner />
      <Outlet />
      <Footer />
    </div>
  );
};

export default withErrorBoundary(LayoutDefault, {
  FallbackComponent: ErrorComponent,
});
