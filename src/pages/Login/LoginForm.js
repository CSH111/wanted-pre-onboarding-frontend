import { URL } from "../../api/url";
import {
  AuthForm,
  AuthInput,
  AuthButton,
  AuthErrorBox,
  AuthLabel,
} from "../../components/Form/styles";
import { useAccount, useInput } from "../../hooks";
import * as S from "../styles";
const LoginForm = () => {
  const [emailValue, handleEmailChange] = useInput("");
  const [pwValue, handlePwChange] = useInput("");
  const { postAccount, error } = useAccount();
  const { LOGIN } = URL;

  const handleSumbit = (e) => {
    e.preventDefault();
    const body = { email: emailValue, password: pwValue };
    postAccount(LOGIN, body);
  };

  return (
    <AuthForm onSubmit={handleSumbit}>
      <AuthLabel htmlFor="email">email</AuthLabel>
      <AuthInput
        id="email"
        type="email"
        onChange={handleEmailChange}
        value={emailValue}
      />
      <AuthLabel htmlFor="pw">password</AuthLabel>
      <AuthInput
        id="pw"
        type="password"
        onChange={handlePwChange}
        value={pwValue}
      />
      <AuthButton type="submit">로그인</AuthButton>
      <AuthErrorBox>{error}</AuthErrorBox>
    </AuthForm>
  );
};

export default LoginForm;
