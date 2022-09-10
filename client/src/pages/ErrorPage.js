import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div id="notfound" className="relative h-screen">
      <div className="notfound-bg absolute h-full w-full bg-[#00000040] after:h-full after:w-full after:content-['_']">
        <img
          src="/bg-error-page.jpg"
          alt=""
          className="h-full w-full"
          loading="lazy"
        />
      </div>
      <div className="notfound absolute left-2/4 top-2/4 w-full max-w-[600px] -translate-x-2/4 -translate-y-2/4 p-[30px] text-center leading-normal after:absolute after:left-2/4 after:top-2/4 after:z-[-1] after:h-[600px] after:w-full after:-translate-x-2/4 after:-translate-y-2/4 after:rounded-lg after:bg-[#ffffffb3] after:shadow-[0px_0px_0px_30px_rgba(255,_255,_255,_0.7)_inset] after:content-['_']">
        <div className="notfound-404 relative h-[200px]">
          <h1 className="absolute left-2/4 top-2/4 m-0 -translate-x-2/4 -translate-y-2/4 font-PassionOne text-[220px] uppercase text-[#222225]">
            404
          </h1>
        </div>
        <h2 className="my-7 font-Muli text-[26px] font-normal uppercase">
          Oops! Page Not Found
        </h2>
        <Link to="/">
          <button className="rounded-lg bg-grayScale-c4 py-4 px-6 text-white hover:bg-grayScale-c3 hover:bg-opacity-60">
            Go back home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
