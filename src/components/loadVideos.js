import { createSlice } from "@reduxjs/toolkit";
//slice to hold videos to load after actor is clicked
export const loadSlice = createSlice({
  name: "load",
  initialState: {
    value: [],
  },
  reducers: {
    //add character videos to value
    videosLoaded: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { videosLoaded } = loadSlice.actions;

export default loadSlice.reducer;
