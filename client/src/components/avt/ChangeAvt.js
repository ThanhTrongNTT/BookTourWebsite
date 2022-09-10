import React from "react";
import { IconPen } from "../icon";
import Image from "../img/Image";

const ChangeAvt = () => {
  return (
    <div className="relative inline-block rounded-full">
      <Image
        src="https://images.unsplash.com/photo-1502301197179-65228ab57f78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80"
        alt="avt"
        rounded="rounded-full"
        sx="w-[170px] h-[170px]"
        className="mb-4"
        block
      />
      <div
        className="absolute bottom-0 right-0 flex -translate-y-1/3 -translate-x-1/3 cursor-pointer items-center justify-center rounded-full border-2 border-grayScale-c6 bg-grayScale-c7 p-3 dark:bg-grayScale-c2 dark:border-grayScale-c3 dark:text-grayScale-c5"
        onClick={() => {}}
      >
        <IconPen />
      </div>
    </div>
  );
};

export default ChangeAvt;
