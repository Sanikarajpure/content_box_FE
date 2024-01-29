import React from "react";
import RegisterForm from "./components/registerForm";
import "./components/register.css";

const Register = () => {
  return (
    <div className="registerWrapper ">
      <div className="flex max-w-screen"></div>

      <RegisterForm />
    </div>
  );
};

export default Register;
