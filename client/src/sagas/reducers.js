import { combineReducers } from "@reduxjs/toolkit";

import homeSlice from "./home/homeSlice";
import darkModeSlice from "./darkmode/darkModeSlice";
import ImgSlice from "./imgbanner/ImgSlice";
import BreadcrumSlice from "./breadcrum/BreadcrumSlice";

export const reducer = combineReducers({
  darkMode: darkModeSlice,
  home: homeSlice,
  banner: ImgSlice,
  breadcrum: BreadcrumSlice,
});
