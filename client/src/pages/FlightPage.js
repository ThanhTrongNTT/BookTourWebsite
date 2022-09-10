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
const FlightPage = () => {
  return (
    <div>
      <div className="bg-grayScale-c7 px-[135px] pt-32 pb-[70px] dark:bg-[#141416]">
        <div className="mt-12">
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

export default withErrorBoundary(FlightPage, {
  FallbackComponent: ErrorComponent,
});
