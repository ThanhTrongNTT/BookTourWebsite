import { useEffect, useState } from "react";
import axios from "~/api/axios";
import { WrapperFlex } from "~/components/common";
import Heading from "~/components/heading/Heading";
import Rating from "~/components/text/Rating";
import ContentBookingTour from "~/modules/booking/ContentBookingTour";
import FormBooking from "~/modules/booking/FormBooking";

const TourDetailPage = ({ price }) => {
  const [tourDetail, setTourDetail] = useState([]);
  const id = localStorage.getItem("tourId");

  useEffect(() => {
    axios.get(`tour/${id}`).then((response) => {
      console.log(response.data.tourDetail);
      setTourDetail(response.data.tourDetail);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="select-none px-5 py-[30px] dark:bg-c2 lg:mx-auto lg:max-w-7xl lg:px-10 lg:py-5">
      <div className="h-10 w-full">
        <nav></nav>
        <div className="breadcrum"></div>
        <Heading className="text-[#003c71]" sx="xl-4">
          {tourDetail.tourName}
        </Heading>
        <Rating point={9.8} numberRate={8} className="mt-4">
          Perfect
        </Rating>
        <WrapperFlex spacing="8" className="mt-4">
          <div className="flex flex-1 flex-col">
            <ContentBookingTour />
          </div>
          <FormBooking tourDetail={tourDetail} />
        </WrapperFlex>
      </div>
    </div>
  );
};

export default TourDetailPage;
