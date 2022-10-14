import { Link } from "react-router-dom";
import { AuthOutletWrapper, AuthFormWrapper } from "../styles";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <AuthOutletWrapper>
      <AuthFormWrapper>
        <LoginForm />
      </AuthFormWrapper>
      <Link to="/register">회원가입</Link>
    </AuthOutletWrapper>
  );
};

export default Login;
