import { axiosInstance } from "../../utilities/axiosHelper";

import {
  getToken,
  getAuthHeader,
  removeToken,
} from "../../utilities/authTools";

export const uploadContent = async (values, creator) => {
  console.log(creator);
  if (!getToken()) {
    return false;
  } else {
    const response = await axiosInstance.post(
      "/content/create",
      {
        title: values.title,
        description: values.description,
        linkToContent: values.linkToContent,
        creator: creator,
      },
      getAuthHeader()
    );
    return response.data;
  }
};
