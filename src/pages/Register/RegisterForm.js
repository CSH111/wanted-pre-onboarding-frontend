import { useEffect, useState } from "react";
import { URL } from "../../api/url";
import { AuthForm, AuthInput, AuthButton } from "../../components/Form/styles";

import { useAccount } from "../../hooks";
import useInput from "../../hooks/useInput";

const RegisterForm = () => {
  const [emailValue, handleEmailChange] = useInput("");
  const [pwValue, handlePwChange] = useInput("");
  const { postAccount, error } = useAccount();
  const { REGISTER } = URL;
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  const isValidEmail = (value) => (value.includes("@") ? true : false);
  const isValidPassword = (value) => (value.length > 7 ? true : false);

  useEffect(() => {
    const isValidAll = isValidEmail(emailValue) && isValidPassword(pwValue);
    setIsBtnDisabled(!isValidAll);
  }, [emailValue, pwValue]);

  const handleSumbit = (e) => {
    e.preventDefault();
    const body = { email: emailValue, password: pwValue };
    postAccount(REGISTER, body);
    console.log(error);
  };

  return (
    <AuthForm onSubmit={handleSumbit}>
      <label htmlFor="email">email</label>
      <AuthInput
        id="email"
        type="email"
        value={emailValue}
        onChange={handleEmailChange}
      />
      <label htmlFor="pw">password</label>
      <AuthInput
        id="pw"
        type="password"
        value={pwValue}
        onChange={handlePwChange}
      />
      <AuthButton type="submit" disabled={isBtnDisabled}>
        회원가입
      </AuthButton>
    </AuthForm>
  );
};

export default RegisterForm;
