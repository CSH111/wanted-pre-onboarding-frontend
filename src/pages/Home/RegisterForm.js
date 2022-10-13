// import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import useInput from "../../hooks/useInput";
import useRegister from "../../hooks/useRegister";

const RegisterForm = () => {
  const [emailValue, handleEmailChange] = useInput("");
  const [pwValue, handlePwChange] = useInput("");
  const { register, isLoading, error } = useRegister();

  const handleSumbit = (e) => {
    e.preventDefault();
    const body = { email: emailValue, password: pwValue };
    register(body);
    console.log(error);
  };

  return (
    <form onSubmit={handleSumbit}>
      <label htmlFor="email">email</label>
      <input
        id="email"
        type="email"
        value={emailValue}
        onChange={handleEmailChange}
      />
      <label htmlFor="pw">password</label>
      <input
        id="pw"
        type="password"
        value={pwValue}
        onChange={handlePwChange}
      />
      <button type="submit">회원가입</button>
    </form>
  );
};

export default RegisterForm;
