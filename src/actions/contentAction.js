import { SET_UPLOADED_CONTENT, CLEAN_USER_DATA } from "./types";

export const set_Uploaded_Content = (content) => ({
  type: SET_UPLOADED_CONTENT,
  payload: content,
});

export const set_Clean_User_Data = (content) => ({
  type: CLEAN_USER_DATA,
  payload: content,
});
