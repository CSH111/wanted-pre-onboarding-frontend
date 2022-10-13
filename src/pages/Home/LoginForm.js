import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import useLogin from "../../hooks/useLogin";

const LoginForm = () => {
  const [emailValue, handleEmailChange] = useInput("");
  const [pwValue, handlePwChange] = useInput("");
  const { login, error, isLoading } = useLogin();

  const handleSumbit = (e) => {
    e.preventDefault();
    const body = { email: emailValue, password: pwValue };
    login(body);
    console.log(error);
  };

  return (
    <form onSubmit={handleSumbit}>
      <label htmlFor="email">email</label>
      <input
        id="email"
        type="email"
        onChange={handleEmailChange}
        value={emailValue}
      />
      <label htmlFor="pw">password</label>
      <input
        id="pw"
        type="password"
        onChange={handlePwChange}
        value={pwValue}
      />
      <button type="submit">로그인</button>
    </form>
  );
};

export default LoginForm;
