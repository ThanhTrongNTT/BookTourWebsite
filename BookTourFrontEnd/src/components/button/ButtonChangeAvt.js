import React from "react";
import { IconPen } from "../icon/IconProfilePage";

const ButtonChangeAvt = () => {
  return (
    <button className="relative inline-block rounded-full">
      <img
        src="https://images.unsplash.com/photo-1502301197179-65228ab57f78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80"
        alt="avt"
        className="mb-4 h-[170px] w-[170px] select-none rounded-full"
      />
      <div
        className="absolute bottom-0 right-0 flex -translate-y-1/3 -translate-x-1/3 cursor-pointer items-center justify-center rounded-full border-2 border-c6 bg-c7 p-3 dark:border-c3 dark:bg-c2 dark:text-c5"
        onClick={() => {}}
      >
        <IconPen />
      </div>
    </button>
  );
};

export default ButtonChangeAvt;
