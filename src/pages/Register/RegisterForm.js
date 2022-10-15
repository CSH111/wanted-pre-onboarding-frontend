import { useEffect, useState } from "react";
import { URL } from "../../api/url";
import {
  AuthForm,
  AuthInput,
  AuthButton,
  AuthErrorBox,
  ValidationMsgBox,
  AuthLabel,
} from "../../components/Form/styles";
import isEmpty from "../../helpers/isEmpty";

import { isValidEmail, isValidPassword } from "../../helpers/validation";

import { useAccount } from "../../hooks";
import useInput from "../../hooks/useInput";

const RegisterForm = () => {
  const [emailValue, handleEmailChange] = useInput("");
  const [pwValue, handlePwChange] = useInput("");
  const { postAccount, error } = useAccount();
  const { REGISTER } = URL;
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [validEmailMsg, setValidEmailMsg] = useState("");
  const [validPwMsg, setValidPwMsg] = useState("");
  // const [ValidationAlert, setValidationAlert] = useState(false)

  useEffect(() => {
    setValidEmailMsg(
      isValidEmail(emailValue) || isEmpty(emailValue) //함수명을 confirm 등으로 바꾸고 한번만돌려서 isvalidemail 변수로 이용(함수반복x)
        ? null
        : "잘못된 이메일 형식입니다."
    );
    setValidPwMsg(
      isValidPassword(pwValue) || isEmpty(pwValue)
        ? null
        : "비밀번호가 너무 짧습니다.."
    );

    const isValidAll = isValidEmail(emailValue) && isValidPassword(pwValue);
    setIsBtnDisabled(!isValidAll);
  }, [emailValue, pwValue]);

  const handleSumbit = (e) => {
    e.preventDefault();
    const body = { email: emailValue, password: pwValue };
    postAccount(REGISTER, body);
  };

  return (
    <AuthForm onSubmit={handleSumbit}>
      <AuthLabel htmlFor="email">
        email <ValidationMsgBox>{validEmailMsg}</ValidationMsgBox>
      </AuthLabel>
      <AuthInput
        id="email"
        type="email"
        value={emailValue}
        onChange={handleEmailChange}
      />

      <AuthLabel htmlFor="pw">
        password <ValidationMsgBox>{validPwMsg}</ValidationMsgBox>
      </AuthLabel>
      <AuthInput
        id="pw"
        type="password"
        value={pwValue}
        onChange={handlePwChange}
      />
      <AuthButton type="submit" disabled={isBtnDisabled}>
        회원가입
      </AuthButton>
      <AuthErrorBox>{error}</AuthErrorBox>
    </AuthForm>
  );
};

export default RegisterForm;
