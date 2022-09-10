import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = ({ to }) => {
  return (
    <div className="mb-5 w-full text-right ">
      <Link to={to}>
        <p className="inline-block text-sm font-medium text-primary-blue">
          Forgot password?
        </p>
      </Link>
    </div>
  );
};

export default ForgotPassword;
