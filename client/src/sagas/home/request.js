import axios from "axios";

export default function requestGetHome(query = "") {
  return axios.request({
    url: "http://localhost:5000/search",
    params: {
      query,
    },
  });
}
