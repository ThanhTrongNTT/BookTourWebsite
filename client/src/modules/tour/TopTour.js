import React from "react";
import Heading from "@/heading/Heading";
import Intro from "@/intro/Intro";
import { CardTour } from "~/modules/card";
const TOP_TOUR = [
  {
    nation: "Japan",
    src: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    location: "Japan",
    numberPlace: "10 Popular Places",
  },
  {
    nation: "Indonesia",
    src: "https://images.unsplash.com/photo-1497262693247-aa258f96c4f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=376&q=80",
    location: "Bali",
    numberPlace: "10 Popular Places",
  },
  {
    nation: "Barcelona",
    src: "https://images.unsplash.com/photo-1498354178607-a79df2916198?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    location: "Spain",
    numberPlace: "10 Popular Places",
  },
];
const TopTour = () => {
  return (
    <div className="toure">
      <div className="heading mb-[30px] text-center lg:mb-[61px] lg:text-left">
        <Heading>Top Tour</Heading>
        <Intro>{"Keep calm & travel on"}</Intro>
      </div>
      <div className="mb-[30px] grid grid-rows-3 gap-[30px] lg:mb-[71px] lg:grid-cols-3 lg:grid-rows-none">
        {TOP_TOUR.map((item, index) => (
          <CardTour
            key={index}
            src={item.src}
            nation={item.nation}
            location={item.location}
            numberPlace={item.numberPlace}
          />
        ))}
      </div>
    </div>
  );
};

export default TopTour;
