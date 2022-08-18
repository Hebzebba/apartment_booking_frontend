import axios from "axios";
import { BASE_URL } from "./GLOBAL_CONFIG.js";

export const registerUser = (name, email, contact, password) =>
  axios
    .post(`${BASE_URL}/user/register`, { name, email, contact, password })
    .then((res) => res.data)
    .catch((error) => error);

export const loginUser = (email, password) =>
  axios
    .post(`${BASE_URL}/user/login`, { email, password })
    .then((res) => res.data)
    .catch((error) => error);
