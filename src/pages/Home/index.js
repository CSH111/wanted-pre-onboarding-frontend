import { useState } from "react";
import FormToggler from "./FormToggler";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Home = () => {
  const [formToggle, setFormToggle] = useState({
    login: false,
    register: false,
  });
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
