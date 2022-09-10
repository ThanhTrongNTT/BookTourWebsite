import React from "react";
import { IconNotification } from "../icon";

const Notification = () => {
  return (
    <div className="relative mr-[17px] text-icon dark:text-grayScale-c6">
      <IconNotification />
      <div className="wrapper absolute top-0 right-0 flex h-[10px] w-[10px] translate-x-1/4 cursor-pointer select-none items-center justify-center rounded-full bg-primary-red text-white">
        <span className="number text-[8px]">1</span>
      </div>
    </div>
  );
};

export default Notification;
