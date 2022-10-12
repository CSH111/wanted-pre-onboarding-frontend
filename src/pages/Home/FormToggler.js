import React from "react";

const FormToggler = ({ setFormToggle }) => {
  const handleLoginForm = () => {
    setFormToggle({ login: true, register: false });
  };
  const handleRegisterForm = () => {
    setFormToggle({ login: false, register: true });
  };

  return (
    <div>
      <button onClick={handleLoginForm}>로그인</button>
      <button onClick={handleRegisterForm}>회원가입</button>
    </div>
  );
};

export default FormToggler;
