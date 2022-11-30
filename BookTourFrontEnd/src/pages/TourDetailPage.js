import { Navigate, useNavigate } from "react-router-dom";
import { WrapperFlex } from "~/components/common";
import WrapperTour from "~/components/common/WrapperTour";
import Heading from "~/components/heading/Heading";
import Rating from "~/components/text/Rating";
import { useGetTourById } from "~/hooks/useGetTour";
import ContentBookingTour from "~/modules/booking/ContentBookingTour";
import FormBooking from "~/modules/booking/FormBooking";
import getQueryVariable from "~/utils/getQueryVariable";

const TourDetailPage = ({ price }) => {
  const navigate = useNavigate();
  const id = getQueryVariable("id");
  const { tourDetail } = useGetTourById(id);
  const handleBooking = (id) => {
    navigate(`/booking?id=${id}`);
  };
  // useEffect(() => {
  //   axios.get(`tour/${id}`).then((response) => {
  //     console.log(response.data.tourDetail);
  //     setTourDetail(response.data.tourDetail);
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <WrapperTour>
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
          <FormBooking
            onClick={() => handleBooking(id)}
            className="sticky top-0"
            tourDetail={tourDetail}
          />
        </WrapperFlex>
      </div>
    </WrapperTour>
  );
};

export default TourDetailPage;
