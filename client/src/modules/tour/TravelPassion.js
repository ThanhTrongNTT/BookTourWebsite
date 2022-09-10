import React from "react";
import Heading from "@/heading/Heading";
import Intro from "@/intro/Intro";
import { CardTravel } from "~/modules/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const TRAVEL_ITEMS = [
  {
    src: "https://images.unsplash.com/photo-1553342385-111fd6bc6ab3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    category: "Beach Hobby",
  },
  {
    src: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    category: "City Tours",
  },
  {
    src: "https://images.unsplash.com/photo-1553342385-111fd6bc6ab3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    category: "Hiking Trips",
  },
  {
    src: "https://images.unsplash.com/photo-1522509585149-c9cd39d1ff08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=897&q=80",
    category: "Sports Trips",
  },
];

const TravelPassion = () => {
  return (
    <div className="bg-grayScale-c7 px-5 pt-[30px] pb-[220px] dark:bg-[#141416] lg:px-[135px] lg:pt-[66px] lg:pb-[244px]">
      <div className="text-center lg:text-left 2xl:mx-auto 2xl:max-w-7xl">
        <div className="heading mb-[42px] ">
          <Heading>Travel Your Passion</Heading>
          <Intro className="max-auto inline-block max-w-[236px] lg:max-w-max">
            Most Brilliant reasons Entrada should be your one-stop-shop!
          </Intro>
        </div>
        <div className="hidden grid-cols-4 gap-[30px] lg:grid">
          {TRAVEL_ITEMS.map((item, index) => (
            <CardTravel key={index} src={item.src} children={item.category} />
          ))}
        </div>
        <Swiper
          grabCursor={true}
          slidesPerView={1.3}
          spaceBetween={20}
          className="block lg:hidden"
        >
          {TRAVEL_ITEMS.map((item, index) => (
            <SwiperSlide key={index}>
              <CardTravel src={item.src} children={item.category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TravelPassion;
