import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appStore";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
