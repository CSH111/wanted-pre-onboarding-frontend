import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosAccount, setPrivateHeaders } from "../api/axios";

const useAccount = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const postAccount = (url, body) => {
    axiosAccount
      .post(url, body) //
      .then((res) => {
        const token = res.data.access_token;
        localStorage.setItem("token", token);
        setPrivateHeaders(token);
        navigate("/todo");
      })
      .catch((err) => setError(err.response.data.message));
  };

  return { postAccount, error };
};

export default useAccount;
