import { withErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";

import ErrorBoundary from "@/common/ErrorBoundary";

import { Footer, Header, Banner } from "~/modules/partials";
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
  FallbackComponent: ErrorBoundary,
});
