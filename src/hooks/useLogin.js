import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

const useLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const login = (body) => {
    setIsLoading(true);

    const headers = { headers: { "Content-Type": "application/json" } };

    axios
      .post("/auth/signin", body, headers) //
      .then((res) => {
        localStorage.setItem("token", res.data.access_token);
        navigate("/todo");
      })
      .catch((err) => setError(err.response.data.message))
      .finally(() => setIsLoading(false));
  };

  return { login, isLoading, error };
};

export default useLogin;
