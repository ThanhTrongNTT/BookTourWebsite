import { takeLatest } from "redux-saga/effects";
import handleAuthRegister, {
  handleAuthLogin,
  handleAuthLogOut,
  handleAuthRefreshToken,
  handleAuthUpdateAvt,
} from "./auth-handlers";
import {
  authLogin,
  authLogOut,
  authRefreshToken,
  authRegister,
  authUpdateAvt,
} from "./auth-slice";
export default function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegister);
  yield takeLatest(authLogin.type, handleAuthLogin);
  yield takeLatest(authRefreshToken.type, handleAuthRefreshToken);
  yield takeLatest(authUpdateAvt.type, handleAuthUpdateAvt);
  yield takeLatest(authLogOut.type, handleAuthLogOut);
}
