import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import { getToken, logOut, saveToken } from "~/utils/auth";
import {
  requestAuthFetchMe,
  requestAuthLogin,
  requestAuthRegister,
  requestRefreshToken,
} from "./auth-requests";
import { authUpdateUser } from "./auth-slice";

export default function* handleAuthRegister({ payload }) {
  try {
    const response = yield call(requestAuthRegister, payload);
    if (response.status === 201) {
      toast.success(response.data.message);
    } else if (response.status === 200) {
      toast.warning(response.data.message);
      return;
    }
  } catch (error) {}
}

function* handleAuthLogin({ payload }) {
  try {
    const response = yield call(requestAuthLogin, payload);
    if (response.data.accessToken) {
      saveToken(response.data.accessToken);
      yield call(handleAuthFetchMe, {
        payload: response.data.accessToken,
      });
    }
    yield 1;
  } catch (error) {
    const { response } = error;
    if (response.status === 400) {
      toast.error(response.data.message);
      return;
    }
  }
}
function* handleAuthFetchMe({ payload }) {
  try {
    const respone = yield call(requestAuthFetchMe, payload);
    if (respone.status === 200) {
      yield put(
        authUpdateUser({
          user: respone.data,
          accessToken: payload,
        })
      );
    }
  } catch (error) {}
}

function* handleAuthRefreshToken({ payload }) {
  try {
    const response = yield call(requestRefreshToken, payload);
    const { access_token } = getToken();
    if (response.data) {
      yield handleAuthFetchMe({
        payload: access_token,
      });
    } else {
      yield handleAuthLogOut();
    }
  } catch (error) {}
}

function* handleAuthLogOut() {
  yield put(
    authUpdateUser({
      user: undefined,
      accessToken: null,
    })
  );
  logOut();
}

export {
  handleAuthLogin,
  handleAuthFetchMe,
  handleAuthRefreshToken,
  handleAuthLogOut,
};
