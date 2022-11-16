import { createSlice } from "@reduxjs/toolkit";

const tourSlice = createSlice({
  name: "tour",
  initialState: {
    listTour: [],
  },
  reducers: {
    tourDetail: (state, { payload }) => ({
      listTour: payload,
      // state.listTour.push(payload);
    }),
  },
});

export const { tourDetail } = tourSlice.actions;
export default tourSlice.reducer;
