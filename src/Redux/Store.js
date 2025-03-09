import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./JobReducer/JobSlice";
export const store = configureStore({
  reducer: {
    jobs: jobReducer,
  },
});
