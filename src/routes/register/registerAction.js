import axios from "axios";
import { axiosInstance } from "../../utilities/axiosHelper";

axios.defaults.headers.post["Content-Type"] = "application/json";

export const RegisterUser = async (values) => {
  const registerInfo = await axiosInstance.post("/auth/register", {
    email: values.email,
    password: values.password,
    firstName: values.firstname,
    lastName: values.lastname,
  });

  return registerInfo.data;
};
