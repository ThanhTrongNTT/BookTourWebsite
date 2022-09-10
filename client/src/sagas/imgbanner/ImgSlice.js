import { createSlice } from "@reduxjs/toolkit";

const ImgSlice = createSlice({
  name: "imgbanner",
  initialState: {
    src: "https://media-exp1.licdn.com/dms/image/C561BAQEpJ3lJ5lWx8Q/company-background_10000/0/1591270774324?e=2147483647&v=beta&t=5iE0jTpYc9vy7fT64S1cikA37OEzx9nBoeu1uEfNiIQ",
  },
  reducers: {
    setSrc: (state, { payload }) => ({
      ...state,
      src: payload,
    }),
  },
});

export const { setSrc } = ImgSlice.actions;
export default ImgSlice.reducer;
