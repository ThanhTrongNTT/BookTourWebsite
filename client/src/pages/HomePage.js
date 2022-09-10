import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "@/common/ErrorComponent";
import {
  BestPlace,
  TopTour,
  FeatureDestinations,
  ExploreWord,
  Trending,
  TravelPassion,
} from "~/modules/tour";
const HomePage = () => {
  return (
    <div>
      <div className="h-auto bg-grayScale-c7 px-5 pt-24 dark:bg-[#141416] lg:px-[135px] lg:pb-[70px] lg:pt-32">
        <div className="mt-12 2xl:mx-auto 2xl:max-w-7xl">
          <BestPlace />
          <FeatureDestinations />
          <TopTour />
          <ExploreWord />
        </div>
      </div>
      <Trending />
      <div className="relative bg-gray bg-opacity-5">
        <TravelPassion />
      </div>
    </div>
  );
};

export default withErrorBoundary(HomePage, {
  FallbackComponent: ErrorComponent,
});
