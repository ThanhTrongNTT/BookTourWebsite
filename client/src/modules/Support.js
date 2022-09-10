import React from "react";
import Button from "@/button/Button";
import Image from "~/components/img/Image";

const Support = () => {
  return (
    <div
      className="top absolute left-2/4 w-[335px] -translate-x-2/4 lg:-translate-y-2/4 -translate-y-[80%] rounded-2xl
      lg:w-[1170px]"
    >
      <div className="relative">
        <Image
          src="/img-support.png"
          alt=""
          rounded="rounded-2xl"
          sx="h-[200px] lg:h-full w-full"
        />
        <div className="absolute inset-0 py-3 px-7 text-white lg:px-[90px] lg:py-[62px]">
          <h1 className="mb-2 text-xl font-bold lg:mb-4 lg:text-[44px]">
            Get our pro offers
          </h1>
          <div className="flex flex-col justify-between gap-3 lg:flex-row lg:gap-0">
            <p className="w-[234px] font-DMSans text-xs font-normal leading-7 lg:w-[370px] lg:font-Roboto lg:text-sm">
              Create a visual identity for your company, and an overall brand
            </p>
            <div className="flex w-[295px] items-center rounded-lg bg-[#FCFCFD] py-2 pl-[22px] pr-2 shadow-[10px_16px_60px_-7px_rgba(0,_0,_0,_0.04)] lg:w-[488px] lg:rounded-[4px]">
              <input
                type="text"
                placeholder="Type your email here"
                className="hidden flex-1 pr-6 text-black lg:block"
              />
              <input
                type="text"
                placeholder="Enter email..."
                className="block max-w-[150px] flex-1 rounded-xl pr-6 text-black lg:hidden"
              />
              <Button
                type="button"
                className="py-3 px-5 lg:py-[16px] lg:px-[30px]"
                secondary
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
