import { withErrorBoundary } from "react-error-boundary";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

import { SearchBoxFlight, SearchBoxHotel } from "~/modules/search";

import ErrorBoundary from "@/common/ErrorBoundary";
import NavSearchBox from "@/nav/NavSearchBox";
const LayoutSearchBox = () => {
  const location = useLocation();

  let render = "";
  switch (location.pathname) {
    case "/":
      render = <SearchBoxHotel />;
      break;
    case "/flight":
      render = <SearchBoxFlight />;
      break;
    case "/car":
      break;
    default:
      break;
  }
  return (
    <NavSearchBox>
      {render}
      {/* <form
        autoComplete="off"
        onSubmit={handleSubmit(handleSearch)}
        className="mt-5"
      >
        {render}
      </form> */}
    </NavSearchBox>
  );
};

export default withErrorBoundary(LayoutSearchBox, {
  FallbackComponent: ErrorBoundary,
});
