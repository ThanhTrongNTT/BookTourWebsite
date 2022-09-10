import React from "react";
import classNames from "~/utils/classNames";
import { IconSwitch } from "../icon";

const Switch = ({ className = "" }) => {
  return (
    <div
      className={classNames(
        "absolute right-0 top-2/4 z-20 lg:flex hidden h-[30px] w-[30px] translate-x-2/4 -translate-y-2/4 items-center justify-center rounded-full bg-white text-grayScale-c5 dark:bg-[#42464B] dark:text-grayScale-c7",
        className
      )}
    >
      <IconSwitch />
    </div>
  );
};

export default Switch;
