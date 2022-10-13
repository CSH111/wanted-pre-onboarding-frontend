import { URL } from "../../api/url";
import { useAccount } from "../../hooks";
import useInput from "../../hooks/useInput";

const RegisterForm = () => {
  const [emailValue, handleEmailChange] = useInput("");
  const [pwValue, handlePwChange] = useInput("");
  const { postAccount, error } = useAccount();
  const { REGISTER } = URL;

  const handleSumbit = (e) => {
    e.preventDefault();
    const body = { email: emailValue, password: pwValue };
    postAccount(REGISTER, body);
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
