import { Swiper, SwiperSlide } from "swiper/react";
import Heading from "@/heading/Heading";
import Intro from "@/intro/Intro";
import "swiper/css";
import { CardExplore } from "~/modules/card";

const EXPLORE_ITEMS = [
  {
    src: "https://images.unsplash.com/photo-1553697388-94e804e2f0f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
    rice: "$200",
    describe: "Comfort Space",
    spacing: "1.2km to Town Center",
    location: "Turkey, Mamaris",
    totalRoom: 375,
  },
  {
    src: "https://images.unsplash.com/photo-1536323760109-ca8c07450053?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
    rice: "$200",
    describe: "Comfort Space",
    spacing: "1.2km to Town Center",
    location: "Turkey, Mamaris",
    totalRoom: 375,
  },
  {
    src: "https://images.unsplash.com/photo-1527824404775-dce343118ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    describe: "Comfort Space",
    rice: "$200",
    spacing: "1.2km to Town Center",
    location: "Turkey, Mamaris",
    totalRoom: 375,
  },
  {
    src: "https://images.unsplash.com/photo-1612278675615-7b093b07772d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    describe: "Comfort Space",
    rice: "$200",
    spacing: "1.2km to Town Center",
    location: "Turkey, Mamaris",
    totalRoom: 375,
  },
];
const ExploreWord = () => {
  return (
    <div className="explore-word">
      <div className="heading text-center lg:text-left">
        <Heading>Explore The World</Heading>
        <Intro className="mb-[50px] text-sm lg:text-base">
          10,788 beautiful places to go
        </Intro>
      </div>
      <div className="hidden grid-cols-4 gap-[30px] lg:grid">
        {EXPLORE_ITEMS.map((item, index) => (
          <CardExplore
            key={index}
            src={item.src}
            describe={item.describe}
            rice={item.rice}
            location={item.location}
            totalRoom={item.totalRoom}
          />
        ))}
      </div>
      <Swiper
        grabCursor={true}
        spaceBetween={20}
        slidesPerView={1.3}
        className="block lg:hidden"
      >
        {EXPLORE_ITEMS.map((item, index) => (
          <SwiperSlide key={index}>
            <CardExplore
              src={item.src}
              describe={item.describe}
              rice={item.rice}
              location={item.location}
              totalRoom={item.totalRoom}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ExploreWord;
