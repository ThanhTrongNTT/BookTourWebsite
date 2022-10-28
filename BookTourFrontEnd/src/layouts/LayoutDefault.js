import { withErrorBoundary } from "react-error-boundary";
import { Outlet, useNavigate } from "react-router-dom";

import ErrorBoundary from "@/common/ErrorBoundary";

import { Footer, Header, Banner } from "~/modules/partials";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const LayoutDefault = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.email) navigate("/sign-in");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (!user || !user.email) return null;
  
  return (
    <div className="wrapper">
      <Header />
      <Banner />
      <Outlet />
      <Footer />
    </div>
  );
};

export default withErrorBoundary(LayoutDefault, {
  FallbackComponent: ErrorBoundary,
});
