import axios from "~/api/axios";
import { authUpdateUser } from "~/sagas/auth/auth-slice";
import { getToken } from "~/utils/auth";

export default function useRefreshToken() {
  async function refresh() {
    const { refresh_token } = getToken();
    const response = await axios.get("token", {
      "Content-Type": "application/json",
    });
    if (response.data) {
      authUpdateUser((prev) => ({
        ...prev,
        accessToken: response?.data?.accessToken,
      }));
    }
    return response?.data?.accessToken || "";
  }
}
