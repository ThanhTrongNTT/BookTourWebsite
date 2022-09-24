import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const LayoutDefault = lazy(() => import("~/layouts/LayoutDefault"));

const HomePage = lazy(() => import("~/pages/HomePage"));
const FlightPage = lazy(() => import("~/pages/FlightPage"));
const CarePage = lazy(() => import("~/pages/CarPage"));
const SignInPage = lazy(() => import("~/pages/SignInPage"));
const SignUpPage = lazy(() => import("~/pages/SignUpPage"));

function App() {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route element={<LayoutDefault />}>
          <Route path="/" element={<HomePage />} />
          <Route path="flight" element={<FlightPage />} />
          <Route path="/car" element={<CarePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
