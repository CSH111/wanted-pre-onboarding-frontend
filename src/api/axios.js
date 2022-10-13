import axios from "axios";
const BASE_URL = "https://pre-onboarding-selection-task.shop";

export default axios.create({
  baseURL: BASE_URL,
});

// export const axiosWithAuth = axios.create({
//   baseURL: BASE_URL,
//   Headers:{
//     "Content-Type": "application/json",

//   }
// });
