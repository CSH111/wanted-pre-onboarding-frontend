import { Link } from "react-router-dom";
import { AuthFormWrapper, AuthOutletWrapper } from "../styles";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <AuthOutletWrapper>
      <AuthFormWrapper>
        <RegisterForm />
      </AuthFormWrapper>
      <Link to="/">로그인</Link>
    </AuthOutletWrapper>
  );
};

export default Register;
