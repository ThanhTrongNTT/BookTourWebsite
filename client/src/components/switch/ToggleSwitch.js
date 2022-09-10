import React, { useState } from "react";
import classNames from "~/utils/classNames";

const ToggleSwitch = ({ disabled}) => {
  const [toggle, setToggle] = useState();
  return (
    <div
      className={classNames(
        "relative h-6 w-12 cursor-pointer rounded-full py-1 disabled:cursor-none disabled:select-none disabled:bg-grayScale-c6",
        toggle ? "bg-[#145CE6]" : "bg-grayScale-c6"
      )}
      disabled={disabled}
      onClick={() => setToggle(!toggle)}
    >
      <div
        className={classNames(
          "absolute left-1 h-4 w-4 rounded-full bg-white transition-all",
          toggle && "translate-x-[24px]"
        )}
        onClick={() => setToggle(!toggle)}
      />
    </div>
  );
};

export default ToggleSwitch;
