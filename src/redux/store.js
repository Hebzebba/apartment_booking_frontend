import { configureStore } from "@reduxjs/toolkit";
import adsReducer from "./slice/adsSlice";

export const store = configureStore({
  reducer: { ads_data: adsReducer },
});
