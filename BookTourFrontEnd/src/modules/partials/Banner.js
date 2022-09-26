import React from "react";
import { useLocation } from "react-router-dom";
import Img from "~/components/img/Img";
import { LayoutSearchBox } from "~/layouts";

const Banner = () => {
  const location = useLocation();
  let render = "";
  switch (location.pathname) {
    case "/":
      render = (
        <div className="relative h-[578px]">
          <Img
            src="https://meria.vn/wp-content/uploads/2021/08/a10-1.png"
            alt="banner-hotel"
          />
          <div className="absolute z-[20] inset-0">
            <div className="w-full max-w-7xl mx-auto px-10 pt-16 text-white">
              <div className="max-w-[760px] w-full inline-block">
                <h1 className="text-4xl font-bold ">
                  Great vacation experience
                </h1>
                <p className="mt-4 text-xl">Fully-equipped hotel</p>
                <LayoutSearchBox />
              </div>
            </div>
          </div>
        </div>
      );
      break;
    case "/flight":
      render = (
        <Img
          src="https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
          alt="banner-compo-flight-hotel"
        />
      );
      break;
    case "/car":
      render = (
        <Img
          alt="compo-car-hotel"
          src="https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/bhp/hero/desktop/Hornet_Reveal_BHP-Hero_Desktop.jpg"
        />
      );
      break;
    default:
      break;
  }
  return (
    <div className="w-full h-[578px] relative after:content-['_'] after:absolute after:inset-0 after:bg-black after:bg-opacity-40 after:z-[10]">
      {render}
    </div>
  );
};

export default Banner;
