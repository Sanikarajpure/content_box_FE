import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Content from "../../../assets/Content.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../../validations/registerValidation";
import { RegisterUser } from "../registerAction";
import InputField from "../../../components/inputField";
import { Oval } from "react-loader-spinner";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [registerError, setRegisterError] = useState();
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      if (data) {
        setLoader(true);
        let response = await RegisterUser(data);
        if (response) {
          setLoader(false);
          navigate("/");
        }
      }
    } catch (err) {
      setLoader(false);
      if (err.response) {
        setRegisterError(err.response.data.message);
      } else {
        setRegisterError(err.message);
      }
    }
  };

  return (
    <React.Fragment>
      <div className="registerFormWrapper relative py-2 z-20">
        <div className="registerFormBlock w-full lg:max-w-lg md:max-w-lg max-w-xs">
          <form
            className="registerForm  rounded px-14 pt-5 pb-8 mb-4"
            onSubmit={handleSubmit(onSubmit)}
          >
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
            <div className="pb-6 text-center text-2xl font-extrabold text-dark-accent dark:text-light-call-sec ">
              <div>Hello! ✋ </div>
              <div>
                Let's get{" "}
                <span className=" text-light-call-sec dark:text-light-accent">
                  started.
                </span>
              </div>
            </div>
            <div className="lg:flex lg:space-x-12">
              <div className="mb-4">
                <label
                  className="block dark-accent dark:text-light-accent text-sm font-bold mb-2 px-1 text-left"
                  htmlFor="firstname"
                >
                  First Name
                </label>
                <InputField
                  id="firstname"
                  name="firstname"
                  type="text"
                  placeholder="First name"
                  register={register}
                  errors={errors}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block dark-accent dark:text-light-accent text-sm font-bold mb-2 px-1 text-left"
                  htmlFor="lastname"
                >
                  Last Name
                </label>
                <InputField
                  id="lastname"
                  name="lastname"
                  type="text"
                  placeholder="Last Name"
                  register={register}
                  errors={errors}
                />
              </div>
            </div>

            {/* Email, Password, Confirm Password fields go here */}
            <div className="mb-4">
              <label
                className="block dark-accent dark:text-light-accent text-sm font-bold mb-2 px-1 text-left"
                htmlFor="email"
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

            <div className="mb-6">
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
            <div className="mb-6">
              <label
                className="block dark-accent dark:text-light-accent text-sm font-bold mb-2 px-1 text-left "
                htmlFor="confirmpassword"
              >
                Confirm Password
              </label>
              <InputField
                id="confirmpassword"
                name="confirmpassword"
                type="password"
                placeholder="Confirm Password"
                register={register}
                errors={errors}
              />
            </div>

            <div
              className="invalid-feedback text-center text-output-error text-xs px-2 py-2  pt-1 "
              style={registerError ? { display: "block" } : {}}
            >
              {registerError ? registerError : null}
            </div>

            {loader ? (
              <div className=" flex justify-center w-full p-2">
                <Oval color="#5063F0" height={30} width={30} />
              </div>
            ) : (
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="registerBtn  tracking-wide transition-background-color ease-in duration-200 p-2 pr-20 pl-20 bg-light-call-sec rounded text-center text-lg font-semibold text-white cursor-pointer hover:bg-light-hover hover:text-light-call-sec dark:hover:bg-dark-accent"
                >
                  Register
                </button>
              </div>
            )}

            <div className="goToLoginLinkBlock text-center dark-accent dark:text-light-accent   mt-4 text-xs lg:text-sm md:text-sm ">
              <div>Already registered? </div>
              <div
                className="goToLoginLink px-1 text-light-call-sec"
                onClick={() => {
                  navigate("/");
                }}
              >
                Login
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RegisterForm;
