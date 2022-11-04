const { default: axios } = require("~/api/axios");
const { default: jwt_decode } = require("jwt-decode");
export const requestAuthRegister = (data) => {
  return axios.post("auth/signup", {
    ...data,
  });
};

export const requestAuthLogin = (data) => {
  return axios.post("auth/login", {
    ...data,
  });
};

export const requestAuthFetchMe = (token) => {
  if (!token) return;
  const decode = jwt_decode(token);
  return axios.get(`user/${decode.sub}`, {
    headers: {
      "Content-Type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const requestRefreshToken = (token) => {
  if (!token) return;
  return axios.post(`token/${token}`, {
    headers: {
      "Content-Type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
