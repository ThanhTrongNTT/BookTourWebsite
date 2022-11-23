import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "~/modules/partials";

const LayoutSearch = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default LayoutSearch;
