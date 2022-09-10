import { createSlice } from "@reduxjs/toolkit";

const darkModeSclie = createSlice({
  name: "darkmode",
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleDarkMode: (state, { payload }) => ({
      ...state,
      darkMode: payload,
    }),
  },
});

export const { toggleDarkMode } = darkModeSclie.actions;
export default darkModeSclie.reducer;
