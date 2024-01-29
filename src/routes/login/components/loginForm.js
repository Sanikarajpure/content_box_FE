import React, { useState } from "react";
import { LoginUser } from "../loginAction";
import Content from "../../../assets/Content.png";
import { useDispatch } from "react-redux";
import { login_user } from "../../../actions/userActions";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../validations/loginValidation";
import { Oval } from "react-loader-spinner";
import InputField from "../../../components/inputField";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [loginError, setLoginError] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      if (data) {
        setLoader(true);
        let response = await LoginUser(data);
        if (response) {
          setLoader(false);
          localStorage.setItem("contentBox_Token", response.jwtToken);

          dispatch(login_user(response.user));
          navigate("/content/upload");
        }
      }
    } catch (err) {
      setLoader(false);
      if (err.response) {
        setLoginError(err.response.data.message);
      } else {
        setLoginError(err.message);
      }
    }
  };
  return (
    <React.Fragment>
      <div className="loginFormWrapper relative py-2 z-20">
        <div className="loginFormBlock w-full lg:max-w-lg md:max-w-lg max-w-xs">
          <div className="  flex  cursor-pointer   justify-center">
            <img
              className=" w-2/4  md:w-56 "
              src={Content}
              alt="logo"
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
          <form
            className="loginForm  px-8 pb-8 mb-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="LoginTitle text-center  font-extrabold pb-6">
              <span className="text-light-call-sec dark:text-light-accent"></span>{" "}
              <span className="text-dark-accent dark:text-light-call-sec">
                Login
              </span>
            </div>
            <div className="mb-6">
              <label
                className="block dark-accent dark:text-light-accent text-sm font-bold mb-2 px-1 text-left"
                htmlFor="Email"
              >
                Email
              </label>
              <InputField
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                register={register}
                errors={errors}
              />
            </div>

            <div className="mb-10">
              <label
                className="block dark-accent dark:text-light-accent text-sm font-bold mb-2 px-1 text-left"
                htmlFor="password"
              >
                Password
              </label>
              <InputField
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                register={register}
                errors={errors}
              />
            </div>
            <div
              className="invalid-feedback text-center text-output-error text-xs px-2 py-2 pt-1 "
              style={loginError ? { display: "block" } : {}}
            >
              {loginError ? loginError : null}
            </div>

            {loader ? (
              <div className=" flex justify-center w-full p-2">
                <Oval color="#5063F0" height={30} width={30} />
              </div>
            ) : (
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="  tracking-wide transition-background-color ease-in duration-200 p-2 pr-16 pl-16 bg-light-call-sec rounded text-center text-lg font-semibold text-white cursor-pointer hover:bg-light-hover hover:text-light-call-sec dark:hover:bg-dark-accent"
                >
                  Login
                </button>
              </div>
            )}
          </form>
          <div className="redirectToRegister dark-accent dark:text-light-accent text-center mt-4 text-xs lg:text-sm md:text-sm">
            Don't have a account?
            <span
              className="goToRegisterLink text-light-call-sec "
              onClick={() => {
                navigate("/register");
              }}
            >
              {" "}
              Register
            </span>
          </div>
          <p className="text-center text-gray-500 text-xs mt-4 dark-accent dark:text-light-accent">
            &copy;2024 Content Box. All rights reserved.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginForm;
