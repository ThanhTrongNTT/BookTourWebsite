import { combineReducers } from "@reduxjs/toolkit";
import darkModeSlice from "./darkmode/darkModeSlice";

export const reducer = combineReducers({
  darkMode: darkModeSlice,
});
