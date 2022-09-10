import React from "react";

import Heading from "@/heading/Heading";
import Intro from "@/intro/Intro";
import Image from "@/img/Image";

const FeatureDestinations = () => {
  return (
    <div className="feature">
      <div className="heading inline-block text-center lg:text-left">
        <Heading className="inline-block max-w-[180px] lg:block lg:w-full lg:max-w-max">
          Featured Destinations
        </Heading>
        <Intro className="mb-[37px] inline-block max-w-[186px] lg:block lg:w-full lg:max-w-max">
          Popular destinations open to visitors from Indonesia
        </Intro>
      </div>
      <div className="img-feature mb-[30px] flex flex-col items-center justify-center gap-5 lg:mb-[70px] lg:flex-row lg:gap-[30px]">
        <div className="flex flex-col gap-5 lg:w-3/4 lg:gap-[30px]">
          <Image
            src="https://images.unsplash.com/photo-1505832018823-50331d70d237?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1208&q=80"
            rounded="rounded-[18px]"
            sx="lg:h-[280px] w-full"
          />
          <div className="flex flex-col gap-4 rounded-lg lg:flex-row lg:gap-[54px]">
            <Image
              src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=564&q=80"
              rounded="rounded-[20px]"
              sx="h-[408px] w-full"
            />
            <Image
              src="https://images.unsplash.com/photo-1526495124232-a04e1849168c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              rounded="rounded-[20px]"
              sx="h-[408px] w-full"
            />
          </div>
        </div>
        <div className="grid flex-1 grid-rows-3 gap-[30px]">
          <Image
            src="https://images.unsplash.com/photo-1499363536502-87642509e31b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            rounded="rounded-2xl"
            sx="h-[220px]"
          />
          <Image
            src="https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
            rounded="rounded-2xl"
            sx="h-[220px]"
          />
          <Image
            src="https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            rounded="rounded-2xl"
            sx="h-[220px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureDestinations;
