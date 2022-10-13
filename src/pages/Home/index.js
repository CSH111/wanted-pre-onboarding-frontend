import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormToggler from "./FormToggler";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Home = () => {
  const [formToggle, setFormToggle] = useState({
    login: false,
    register: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/todo");
  }, []);

  return (
    <>
      <div>home..</div>
      <FormToggler setFormToggle={setFormToggle} />
      {formToggle.login && <LoginForm />}
      {formToggle.register && <RegisterForm />}
    </>
  );
};

export default Home;
