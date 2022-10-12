import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";

const RegisterForm = () => {
  const [emailValue, handleEmailChange] = useInput("");
  const [pwValue, handlePwChange] = useInput("");
  const navigate = useNavigate();
  const handleSumbit = (e) => {
    e.preventDefault();
    const body = { email: emailValue, password: pwValue };

    axios
      .post("https://pre-onboarding-selection-task.shop/auth/signup", body) //
      .then((res) => {
        localStorage.setItem("token", res.data.access_token);
        navigate("/todo");
      })
      .catch(console.log);
  };

  return (
    <form onSubmit={handleSumbit}>
      <label htmlFor="email">email</label>
      <input id="email" type="email" onChange={handleEmailChange} />
      <label htmlFor="pw">password</label>
      <input id="pw" type="password" onChange={handlePwChange} />
      <button type="submit">회원가입</button>
    </form>
  );
};

export default RegisterForm;
