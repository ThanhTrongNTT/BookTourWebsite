import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const LayoutDefault = lazy(() => import("~/layouts/LayoutDefault"));
const LayoutSearch = lazy(() => import("~/layouts/LayoutSearch"));

const HomePage = lazy(() => import("~/pages/HomePage"));
const FlightPage = lazy(() => import("~/pages/FlightPage"));
const TourPage = lazy(() => import("~/pages/TourPage"));
const SignInPage = lazy(() => import("~/pages/SignInPage"));
const SignUpPage = lazy(() => import("~/pages/SignUpPage"));
const SearchPage = lazy(() => import("~/pages/SearchPage"));

function App() {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route element={<LayoutSearch />}>
          <Route path="search-page" element={<SearchPage />} />
        </Route>
        <Route element={<LayoutDefault />}>
          <Route path="/" element={<HomePage />} />
          <Route path="flight" element={<FlightPage />} />
          <Route path="/tour" element={<TourPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
