import axios from "axios";

const BASE_URL = "https://pre-onboarding-selection-task.shop";
const JSON_TYPE = "application/json";

export const axiosAccount = axios.create({
  baseURL: BASE_URL,
});
axiosAccount.defaults.headers.post["Content-Type"] = JSON_TYPE;

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
});
axiosPrivate.defaults.headers.post["Content-Type"] = JSON_TYPE;
axiosPrivate.defaults.headers.put["Content-Type"] = JSON_TYPE;

export const setPrivateHeaders = (token) => {
  axiosPrivate.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
