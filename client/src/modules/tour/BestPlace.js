import React, { Fragment } from "react";
import Heading from "@/heading/Heading";
import Intro from "@/intro/Intro";
import { CardPlace } from "~/modules/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const PLACE_ITEMS = [
  {
    src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    namePlace: "Batu, East Java",
    destinations: "86 Destinations",
  },
  {
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80",
    namePlace: "Batu, East Java",
    destinations: "86 Destinations",
  },
  {
    src: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80",
    namePlace: "Batu, East Java",
    destinations: "86 Destinations",
  },
  {
    src: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80",
    namePlace: "Batu, East Java",
    destinations: "86 Destinations",
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    namePlace: "Batu, East Java",
    destinations: "86 Destinations",
  },
  {
    src: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    namePlace: "Batu, East Java",
    destinations: "86 Destinations",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    namePlace: "Batu, East Java",
    destinations: "86 Destinations",
  },
  {
    src: "https://images.unsplash.com/photo-1502301197179-65228ab57f78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80",
    namePlace: "Batu, East Java",
    destinations: "86 Destinations",
  },
];
const BestPlace = () => {
  return (
    <Fragment>
      <Heading className="text-center">
        Search a best place in the world
      </Heading>
      <div className="intro mx-auto mb-7 w-full max-w-[268px] lg:mb-[65px] lg:max-w-[593px]">
        <Intro className="text-center">
          Whether you're looking for places for a vacation. We are here to Guide
          you about the details you need to check in and ease your trips in
          advance
        </Intro>
      </div>
      <div className="card-place mb-[70px] hidden grid-cols-4 gap-[30px] lg:grid">
        {PLACE_ITEMS.map((item, index) => (
          <CardPlace
            key={index}
            src={item.src}
            namePlace={item.namePlace}
            destinations={item.destinations}
          />
        ))}
      </div>
      <Swiper
        grabCursor={true}
        spaceBetween={20}
        slidesPerView={1.6}
        className="mb-6 lg:hidden"
      >
        {PLACE_ITEMS.map((item, index) => (
          <SwiperSlide key={index}>
            <CardPlace
              key={index}
              src={item.src}
              namePlace={item.namePlace}
              destinations={item.destinations}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
};

export default BestPlace;
