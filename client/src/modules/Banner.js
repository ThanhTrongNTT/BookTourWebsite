import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "@/common/ErrorComponent";
import { useSelector } from "react-redux";
import SearchBox from "./SearchBox";
import Image from "~/components/img/Image";
const Banner = () => {
  const { src } = useSelector((state) => state.banner);
  return (
    <div className="banner relative h-[604px] w-full lg:h-[577px]">
      <Image src={src} alt="img-banner" className="select-none object-cover" />
      <h1 className="absolute top-10 right-[30px] left-[27px] select-none text-[40px] font-bold text-grayScale-c3 lg:max-w-[487px] lg:text-[64px] 2xl:top-[15%] 2xl:left-[18%] lg:left-[10%]">
        Book With Us And Enjoy your Journey !
      </h1>
      <SearchBox />
    </div>
  );
};

export default withErrorBoundary(Banner, {
  FallbackComponent: ErrorComponent,
});
