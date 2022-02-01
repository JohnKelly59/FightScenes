import { createSlice } from "@reduxjs/toolkit";

export const loadSlice = createSlice({
  name: "load",
  initialState: {
    value: [],
  },
  reducers: {
    videosLoaded: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { videosLoaded } = loadSlice.actions;

export default loadSlice.reducer;
