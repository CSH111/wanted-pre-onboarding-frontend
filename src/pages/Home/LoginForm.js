import React from "react";
import useInput from "../../hooks/useInput";

const LoginForm = () => {
  const [emailValue, handleEmailChange] = useInput("");
  const [pwValue, handlePwChange] = useInput("");

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(emailValue);
    console.log(pwValue);
  };

  return (
    <form onSubmit={handleSumbit}>
      <label htmlFor="email">email</label>
      <input id="email" type="email" onChange={handleEmailChange} />
      <label htmlFor="pw">password</label>
      <input id="pw" type="password" onChange={handlePwChange} />
      <button type="submit">로그인</button>
    </form>
  );
};

export default LoginForm;
