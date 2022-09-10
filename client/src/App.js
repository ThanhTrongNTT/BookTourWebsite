import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const SignInPage = lazy(() => import("~/pages/auths/SignInPage"));
const SignUpPage = lazy(() => import("~/pages/auths/SignUpPage"));
const ForgotPassword = lazy(() => import("~/pages/auths/ForgotPassword"));

const HomePage = lazy(() => import("~/pages/HomePage"));
const FlightPage = lazy(() => import("~/pages/FlightPage"));
const ErrorPage = lazy(() => import("~/pages/ErrorPage"));

const MyProfile = lazy(() => import("~/pages/profiles/MyProfile"));
const AccountSetting = lazy(() => import("~/pages/profiles/AccountSetting"));
const DetailAccountSetting = lazy(() =>
  import("~/pages/profiles/DetailAccountSetting")
);

const LayoutDefault = lazy(() => import("~/layouts/LayoutDefault"));
const LayoutSetting = lazy(() => import("~/layouts/LayoutSetting"));

function App() {
  return (
    <Suspense fallback={<></>}>
      <div className="App">
        <Routes>
          <Route element={<LayoutDefault />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/flight-booking" element={<FlightPage />} />
          </Route>
          <Route element={<LayoutSetting />}>
            <Route path="setting/profile" element={<MyProfile />} />
            <Route
              path="setting/account/:settings"
              element={<DetailAccountSetting />}
            />
            <Route path="setting/account" element={<AccountSetting />} />
          </Route>
          <Route path="/login" element={<SignInPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
