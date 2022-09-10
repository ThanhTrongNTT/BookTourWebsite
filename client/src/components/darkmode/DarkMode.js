import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import useDarkMode from "~/hooks/useDarkMode";
import classNames from "~/utils/classNames";
import { IconMoon, IconSun } from "@/icon";
import { toggleDarkMode } from "~/sagas/darkmode/darkModeSlice";

const DarkMode = () => {
  const dispath = useDispatch();
  const [darkMode, setDarkMode] = useDarkMode();
  useEffect(() => {
    dispath(toggleDarkMode(darkMode));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    dispath(toggleDarkMode(!darkMode));
  };
  return (
    <div
      className="dark-mode flex w-full max-w-[128px] cursor-pointer items-center rounded-[10px] bg-white p-1 dark:bg-grayScale-c3"
      onClick={handleToggleDarkMode}
    >
      <div
        className={classNames(
          "rounded-lg px-[21px] py-[5px]",
          !darkMode ? "bg-grayScale-c7 text-grayScale-c3" : "text-grayScale-c4"
        )}
      >
        <IconSun />
      </div>
      <div
        className={classNames(
          "rounded-lg px-[21px] py-[5px]",
          darkMode ? "bg-[#474A52] text-grayScale-c6" : "text-grayScale-c4"
        )}
      >
        <IconMoon />
      </div>
    </div>
  );
};

export default DarkMode;
