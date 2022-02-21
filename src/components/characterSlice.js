import { createSlice } from "@reduxjs/toolkit";
//slice to hold character name
export const characterSlice = createSlice({
  name: "character",
  initialState: {
    value: "",
  },
  reducers: {
    //gets character name and change value to character name
    characterChosen: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { characterChosen } = characterSlice.actions;

export default characterSlice.reducer;
