import axios from "axios";

export default axios.create({
  baseURL: "https://pre-onboarding-selection-task.shop",
  Headers: {
    "Content-Type": "application/json",
  },
});

export const axiosWithAuth = axios.create({
  baseURL: "https://pre-onboarding-selection-task.shop",
});
