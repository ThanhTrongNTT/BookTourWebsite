import { withErrorBoundary } from "react-error-boundary";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

import { SearchBoxHotel } from "~/modules/search";

import ErrorBoundary from "@/common/ErrorBoundary";
import NavSearchBox from "@/nav/NavSearchBox";
const LayoutSearchBox = () => {
  const location = useLocation();
  
  const { handleSubmit, control, setValue } = useForm({
    mode: "onSubmit",
  });

  const handleSearch = (value) => console.log(value);

  let render = "";
  switch (location.pathname) {
    case "/":
      render = <SearchBoxHotel control={control} setValue={setValue} />;
      break;
    case "/flight":
      render = <SearchBoxHotel control={control} setValue={setValue} />;
      break;
    case "/car":
      render = <SearchBoxHotel control={control} setValue={setValue} />;
      break;
    default:
      break;
  }
  return (
    <NavSearchBox>
      <form
        autoComplete="off"
        onSubmit={handleSubmit(handleSearch)}
        className="mt-5"
      >
        {render}
      </form>
    </NavSearchBox>
  );
};

export default withErrorBoundary(LayoutSearchBox, {
  FallbackComponent: ErrorBoundary,
});
