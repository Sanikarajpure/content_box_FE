import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadContent } from "../contentAction";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contentFormSchema } from "../../../validations/contentFormValidation";
import { Oval } from "react-loader-spinner";
import { set_Uploaded_Content } from "../../../actions/contentAction";
import InputField from "../../../components/inputField";

const ContentForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => (state.User.user ? state.User.user : ""));
  const [loader, setLoader] = useState(false);
  const [contentError, setContentError] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(contentFormSchema),
  });

  const onSubmit = async (data, e) => {
    e.preventDefault();

    try {
      if (data) {
        setLoader(true);

        let response = await uploadContent(data, user._id);
        if (response) {
          dispatch(set_Uploaded_Content(response.content));
          setLoader(false);
          navigate("/content/view");
        }
      }
    } catch (err) {
      console.log(err);
      setLoader(false);
      if (err.response) {
        setContentError(err.response.data.message);
      } else {
        setContentError(err.message);
      }
    }
  };
  return (
    <React.Fragment>
      <div className="loginFormWrapper relative z-20 ">
        <div className="loginFormBlock w-full lg:max-w-lg md:max-w-lg max-w-xs">
          <form className="loginForm  " onSubmit={handleSubmit(onSubmit)}>
            <div className="LoginTitle text-center  font-extrabold pb-6">
              <span className="text-light-call-sec dark:text-light-accent"></span>{" "}
              <span className="text-dark-accent dark:text-light-call-sec">
                Upload Content
              </span>
            </div>
            <div className="mb-6">
              <label
                className="block dark-accent dark:text-light-accent text-sm font-bold mb-2 px-1 text-left"
                htmlFor="Title"
              >
                Title
              </label>
              <InputField
                id="title"
                name="title"
                type="text"
                placeholder="Title"
                register={register}
                errors={errors}
              />
            </div>

            <div className="mb-10">
              <label
                className="block dark-accent dark:text-light-accent text-sm font-bold mb-2 px-1 text-left"
                htmlFor="Description"
              >
                Decription
              </label>
              <InputField
                id="description"
                name="description"
                type="text"
                placeholder="Description"
                register={register}
                errors={errors}
              />
            </div>
            <div className="mb-10">
              <label
                className="block dark-accent dark:text-light-accent text-sm font-bold mb-2 px-1 text-left"
                htmlFor="Link To Content"
              >
                Link to the Content
              </label>
              <InputField
                id="linkToContent"
                name="linkToContent"
                type="text"
                placeholder="Link to the Content"
                register={register}
                errors={errors}
              />
            </div>
            <div
              className="invalid-feedback text-center text-output-error text-xs px-2 py-2 pt-1 "
              style={contentError ? { display: "block" } : {}}
            >
              {contentError ? contentError : null}
            </div>

            {loader ? (
              <div className=" flex justify-center w-full p-2">
                <Oval color="#5063F0" height={30} width={30} />
              </div>
            ) : (
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="loginBtn  tracking-wide transition-background-color ease-in duration-200 p-2 pr-16 pl-16 bg-light-call-sec rounded text-center text-lg font-semibold text-white cursor-pointer hover:bg-light-hover hover:text-light-call-sec dark:hover:bg-dark-accent"
                >
                  Upload
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContentForm;
