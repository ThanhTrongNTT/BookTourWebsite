import React from "react";
import Heading from "@/heading/Heading";
import Intro from "@/intro/Intro";
import { CardTrending } from "~/modules/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const TREINDING_ITEMS = [
  {
    src: "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    rice: 250,
    location: "Manila",
  },
  {
    src: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
    rice: 250,
    location: "San Francisco",
  },
  {
    src: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    rice: 250,
    location: "Frankfurt main",
  },
  {
    src: "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    rice: 250,
    location: "Washington",
  },
  {
    src: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80",
    rice: 250,
    location: "Stockholm",
  },
  {
    src: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    rice: 250,
    location: "Scattle",
  },
];
const Trending = ({}) => {
  return (
    <div className="trending bg-gray bg-opacity-10 dark:bg-[#18191B]">
      <div className="py-[59px] text-center font-DMSans lg:px-[171px] 2xl:mx-auto 2xl:max-w-7xl 2xl:px-0">
        <Heading>Trending Cites</Heading>
        <Intro
          text2xl
          className="max-auto mb-[50px] inline-block max-w-[150px] lg:max-w-max"
        >
          The most searched for cities on TripGuide
        </Intro>
        <div className="mx-5 grid grid-rows-1 gap-[30px] lg:mx-0 lg:grid-cols-2 lg:grid-rows-none">
          {TREINDING_ITEMS.map((item, index) => (
            <CardTrending key={index} src={item.src} rice={item.rice} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
