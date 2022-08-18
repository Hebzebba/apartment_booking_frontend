import axios from "axios";
import { BASE_URL } from "./GLOBAL_CONFIG.js";
import { fetch_ads } from "../redux/slice/adsSlice.js";

export const postAds = (formData) => {
  return axios
    .post(
      `${BASE_URL}/ads/post`,
      formData,

      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then((res) => res.data)
    .catch((error) => error);
};

export const fetch_all_ads = () => (dispatch) => {
  axios
    .get(`${BASE_URL}/ads/all`)
    .then((res) => {
      dispatch(fetch_ads(res.data));
    })
    .catch((error) => error);
};
