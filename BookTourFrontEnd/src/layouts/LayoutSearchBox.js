import { withErrorBoundary } from "react-error-boundary";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

import ErrorBoundary from "@/common/ErrorBoundary";
import "react-datepicker/dist/react-datepicker.css";
import { RenderPlaceHot } from "~/modules/tippy";
import { SearchBoxHotel } from "~/modules/search";
const LayoutSearchBox = () => {
  const { handleSubmit, control, setValue, getValues } = useForm({
    mode: "onSubmit",
  });

  const handleSearch = (value) => console.log(value);
  const location = useLocation();
  let render = "";
  switch (location.pathname) {
    case "/":
      render = (
        <div className="grid gird-cols-2 gap-4">
          <RenderPlaceHot control={control} setValue={setValue} />
          <SearchBoxHotel control={control} setValue={setValue} />
        </div>
      );
      break;
    default:
      break;
  }
  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(handleSearch)}
      className="mt-4 p-4 bg-[#0000004d] rounded-[4px]"
    >
      {render}
    </form>
  );
};

export default withErrorBoundary(LayoutSearchBox, {
  FallbackComponent: ErrorBoundary,
});
