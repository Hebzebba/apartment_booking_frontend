import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ads: [],
};

export const adsSlice = createSlice({
  name: "ads",
  initialState,
  reducers: {
    fetch_ads: (state, action) => {
      state.ads = action.payload;
    },
  },
});

export const adsSelector = (state) => state.ads_data.ads;
export const { fetch_ads } = adsSlice.actions;
export default adsSlice.reducer;
