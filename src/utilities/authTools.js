export const getToken = () => localStorage.getItem("contentBox_Token");

export const removeToken = async () => {
  localStorage.removeItem("contentBox_Token");
};
export const getAuthHeader = () => {
  return { headers: { authorization: `${getToken()}` } };
};
