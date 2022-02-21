import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./characterSlice";
import loadReducer from "./loadVideos";
//sore to hold character name and video links
export default configureStore({
  reducer: {
    load: loadReducer,
    character: characterReducer,
  },
});
