import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IconArrowLeft } from "../icon/setting";

const BreadCrumAccountSetting = () => {
  const { crumName } = useSelector((state) => state.breadcrum);
  return (
    <div className="breadcrum hidden items-center gap-3 pt-10 font-DMSans text-base font-normal lg:flex">
      <span className="text-grayScale-c3 dark:text-grayScale-c6">
        <IconArrowLeft />
      </span>
      <Link to="/setting/account">
        <p className="inline-block text-grayScale-c3 dark:text-grayScale-c6">
          Back
        </p>
      </Link>
      <div className="h-3 w-[1px] bg-grayScale-c5" />
      <p className="text-grayScale-c inline-block text-grayScale-c5 dark:text-grayScale-c4">
        {crumName}
      </p>
    </div>
  );
};

export default BreadCrumAccountSetting;
