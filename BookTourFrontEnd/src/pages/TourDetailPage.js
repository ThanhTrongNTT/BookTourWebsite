import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { WrapperFlex } from "~/components/common";
import WrapperTour from "~/components/common/WrapperTour";
import Heading from "~/components/heading/Heading";
import Rating from "~/components/text/Rating";
import useAxiosPrivate from "~/hooks/useAxiosPrivate";
import { useGetTourById } from "~/hooks/useGetTour";
import ContentBookingTour from "~/modules/booking/ContentBookingTour";
import FormBooking from "~/modules/booking/FormBooking";
import getQueryVariable from "~/utils/getQueryVariable";

const TourDetailPage = ({ price }) => {
  const { user } = useSelector((state) => state.auth);
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const id = getQueryVariable("id");
  const { tourDetail } = useGetTourById(id);
  const handleBooking = (id) => {
    const request = {
      email: user.email,
      tourId: id,
    };
    axiosPrivate.post(`/booking/create`, request);
    // navigate(`/booking?id=${id}`);
    toast.success("Please check your email to active booking!", {
      autoClose: 2000,
    });
    navigate("../");
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
            <ContentBookingTour tourDetailDes={tourDetail.tourDetailDes} />
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
