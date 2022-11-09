import TextTour from "@/text/TextTour";
import {
  CardDomesticTour,
  CardExpeditionTour,
  CardLocalTour,
  CardNorthwestTour,
  CardResortTour,
} from "~/modules/card/";

const TourPage = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="flex items-center justify-between py-4 font-DMSans lg:mx-auto lg:max-w-7xl">
          <TextTour>Best tour price</TextTour>
          <TextTour>Best quality</TextTour>
          <TextTour>Heartfelt advice</TextTour>
          <TextTour>Flexible payment</TextTour>
        </div>
      </div>
      <div className="px-4 lg:mx-auto lg:max-w-7xl">
        <CardDomesticTour />
        <CardNorthwestTour />
        <CardLocalTour />
        <CardResortTour />
        <CardExpeditionTour />
      </div>
    </div>
  );
};

export default TourPage;
