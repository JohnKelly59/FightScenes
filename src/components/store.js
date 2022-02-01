import { configureStore } from "@reduxjs/toolkit";

import loadReducer from "./loadVideos";

export default configureStore({
  reducer: {
    load: loadReducer,
  },
});
