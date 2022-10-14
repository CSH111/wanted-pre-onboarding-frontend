import { URL } from "../../api/url";
import { AuthForm, AuthInput, AuthButton } from "../../components/Form/styles";
import { useAccount, useInput } from "../../hooks";

const LoginForm = () => {
  const [emailValue, handleEmailChange] = useInput("");
  const [pwValue, handlePwChange] = useInput("");
  const { postAccount } = useAccount();
  const { LOGIN } = URL;

  const handleSumbit = (e) => {
    e.preventDefault();
    const body = { email: emailValue, password: pwValue };
    postAccount(LOGIN, body);
  };

  return (
    <AuthForm onSubmit={handleSumbit}>
      <label htmlFor="email">email</label>
      <AuthInput
        id="email"
        type="email"
        onChange={handleEmailChange}
        value={emailValue}
      />
      <label htmlFor="pw">password</label>
      <AuthInput
        id="pw"
        type="password"
        onChange={handlePwChange}
        value={pwValue}
      />
      <AuthButton type="submit">로그인</AuthButton>
    </AuthForm>
  );
};

export default LoginForm;
