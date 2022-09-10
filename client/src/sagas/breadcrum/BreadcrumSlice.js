import { createSlice } from "@reduxjs/toolkit";

const BreadcrumSlice = createSlice({
  name: "breadcrum",
  initialState: {
    crumName: "Personal Informations",
  },
  reducers: {
    setNameCrum: (state, { payload }) => ({
      ...state,
      crumName: payload,
    }),
  },
});

export const { setNameCrum } = BreadcrumSlice.actions;
export default BreadcrumSlice.reducer;
