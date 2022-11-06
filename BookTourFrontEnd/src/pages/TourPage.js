import CardTourItem from "~/components/card/CardTourItem";
import { WrapperGrid } from "~/components/common";
import Describe from "~/components/describe/Describe";
import Heading from "~/components/heading/Heading";
import TextTour from "~/components/text/TextTour";
import CardDomesticTour from "~/modules/card/CardDomesticTour";
import CardNorthwestTour from "~/modules/card/CardNorthwestTour";

const NORTH_WEST_ROAD = {};
const TourPage = () => {
  return (
    <div className="h-screen">
      <div className="bg-gray-100">
        <div className="flex items-center justify-between py-4 font-DMSans lg:mx-auto lg:max-w-7xl">
          <TextTour>Best tour price</TextTour>
          <TextTour>Best quality</TextTour>
          <TextTour>Heartfelt advice</TextTour>
          <TextTour>Flexible payment</TextTour>
        </div>
      </div>
      <div className="px-4 lg:mx-auto lg:max-w-7xl">
        <div className="domestic-tour">
          <div className="mt-5 mb-4">
            <Heading sx="xl-3" color="light">
              Demestic Tour
            </Heading>
            <Describe color="light">Most Checked In</Describe>
          </div>
          <div className="card-tour">
            <CardDomesticTour />
            <div className=" py-5 text-center font-Helvetica">
              <button
                type="button"
                className="rounded-sm border-2 border-[#26bed6] bg-white  px-4 py-1 text-lg font-semibold text-[#26bed6] transition-all hover:bg-[#26bed6] hover:text-white"
              >
                View more
              </button>
            </div>
          </div>
        </div>
        <div className="north-west-road">
          <div className="mt-5 mb-4">
            <Heading sx="xl-3" color="light">
              North West Road
            </Heading>
            <Describe color="light">East Northwest Hung Vi</Describe>
          </div>
          <div className="card-northwest-tour">
            <CardNorthwestTour />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPage;
