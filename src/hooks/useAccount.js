import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosPublic } from "../api/axios";

const useAccount = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const postAccount = (url, body) => {
    axiosPublic
      .post(url, body) //
      .then((res) => {
        const token = res.data.access_token;
        localStorage.setItem("token", token);
        navigate("/todo");
      })
      .catch((err) => {
        const msg = err.response.data.message;
        setError(msg === "Unauthorized" ? "비밀번호가 다릅니다" : msg);
      });
  };

  return { postAccount, error };
};

export default useAccount;
