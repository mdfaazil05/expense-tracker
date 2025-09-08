
import { configureStore } from "@reduxjs/toolkit";
import sampleReducer from "./sampleSlice";
import contextReducer from "./contextSlice";

const store = configureStore({
  reducer: {
    sample: sampleReducer,
    context: contextReducer,
  },
});

export default store;
