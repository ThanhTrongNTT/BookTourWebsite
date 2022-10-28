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
      "Content-Type": "application/json",
    },
  });
};

export const requestRefreshToken = (token) => {
  if (!token.accessToken) return;
  const decode = jwt_decode(token.accessToken);
  return axios.get(`user/${decode.sub}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
