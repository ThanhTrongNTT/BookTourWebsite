import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "@/common";
import classNames from "~/utils/classNames";

const ItemSetting = ({ onClick, icon, name, describe, ...rest }) => {
  let defaultClass =
    "flex h-12 w-12 items-center justify-center rounded-full bg-opacity-10 ";

  switch (rest.color) {
    case "primary":
      defaultClass += "text-[#145CE6] bg-[#145CE6]";
      break;
    case "secondary":
      defaultClass += "text-[#FA8F54] bg-[#FA8F54]";
      break;
    case "teriary":
      defaultClass += "text-[#FF543D] bg-[#FF543D]";
      break;
    default:
      break;
  }

  return (
    <div
      className="mt-5 inline-block w-full max-w-[242px] cursor-pointer select-none rounded-[10px] bg-white py-6 px-9 font-DMSans last:mt-8 dark:bg-grayScale-c2 lg:mr-10 lg:last:mt-10"
      onClick={onClick}
    >
      <div className="w-full text-center">
        <div className="inline-block">
          <div className={classNames(defaultClass)}>{icon}</div>
        </div>
        <p className="mt-3 text-xl font-bold dark:text-grayScale-c6">{name}</p>
        <p className="text-sm font-normal leading-7 text-grayScale-c4">
          {describe}
        </p>
      </div>
    </div>
  );
};

ItemSetting.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.any,
  name: PropTypes.string,
  describe: PropTypes.string,
  // color: PropTypes.oneOf(["primary", "secondary, teriary"]),
};

export default withErrorBoundary(ItemSetting, {
  FallbackComponent: ErrorComponent,
});
