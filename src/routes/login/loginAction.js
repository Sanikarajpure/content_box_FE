import { axiosInstance } from "../../utilities/axiosHelper";

import {
  getToken,
  getAuthHeader,
  removeToken,
} from "../../utilities/authTools";

export const LoginUser = async (values) => {
  const loginInfo = await axiosInstance.post("/auth/signin", {
    email: values.email,
    password: values.password,
  });

  return loginInfo.data;
};

export const userIsAuth = async () => {
  if (!getToken()) {
    return false;
  } else {
    const user = await axiosInstance.get("/auth/isauth", getAuthHeader());

    return user;
  }
};

export const userSignOut = async () => {
  await removeToken();
  return true;
};
