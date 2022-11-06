import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import { logOut, saveToken } from "~/utils/auth";
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
      toast.success(response.data.message, {
        autoClose: 500,
      });
    } else if (response.status === 200) {
      toast.warning(response.data.message, {
        autoClose: 500,
      });
      return;
    }
  } catch (error) {}
}

function* handleAuthLogin({ payload }) {
  try {
    const response = yield call(requestAuthLogin, payload);
    if (response.data.accessToken && response.data.refreshToken) {
      saveToken(response.data.accessToken, response.data.refreshToken);
      yield call(handleAuthFetchMe, { payload: response.data.accessToken });
    }
    yield 1;
  } catch (error) {
    const { response } = error;
    if (response) {
      toast.error(response.data.message, {
        autoClose: 500,
        pauseOnHover: false,
      });
      return;
    } else {
      toast.error(error.message, {
        autoClose: 1000,
        pauseOnHover: false,
      });
      return;
    }
  }
}

function* handleAuthFetchMe({ payload }) {
  try {
    const response = yield call(requestAuthFetchMe, payload);
    if (response.status === 200) {
      yield put(
        authUpdateUser({
          user: response.data,
          accessToken: payload,
        })
      );
      yield call(handleAuthFetchMe, {
        ...payload,
        accessToken: response.data.accessToken,
      });
    }
  } catch (error) {}
}

function* handleAuthRefreshToken({ payload }) {
  try {
    const response = yield call(requestRefreshToken, payload);
    if (response.data) {
      saveToken(response.data.accessToken, response.data.refreshToken);
      yield handleAuthFetchMe({
        payload: response.data.accessToken,
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
