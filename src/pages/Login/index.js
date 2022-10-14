import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthOutletWrapper, AuthFormWrapper } from "../styles";
import LoginForm from "./LoginForm";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/todo");
  }, []);

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
