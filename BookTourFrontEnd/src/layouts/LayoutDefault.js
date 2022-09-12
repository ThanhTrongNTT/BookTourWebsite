import { Outlet } from "react-router-dom";
import { withErrorBoundary } from "react-error-boundary";

import ErrorBoundary from "@/common/ErrorBoundary";
import { Header, Footer } from "~/modules/partials";
import Banner from "~/modules/partials/Banner";
import SearchBox from "~/modules/search/SearchBox";
const LayoutDefault = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="relative">
        <Banner />
        <div className="absolute bottom-0 translate-y-2/4 left-2/4 -translate-x-2/4 w-[85%]  bg-white">
          <SearchBox />
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default withErrorBoundary(LayoutDefault, {
  FallbackComponent: ErrorBoundary,
});
