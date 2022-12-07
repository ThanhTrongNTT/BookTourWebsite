import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import ButtonSubmitDefault from "~/components/button/ButtonSubmitDefault";
import { WrapperGrid } from "~/components/common";
import WrapperTour from "~/components/common/WrapperTour";
import Heading from "~/components/heading/Heading";
import useAxiosPrivate from "~/hooks/useAxiosPrivate";
import { useGetTourById } from "~/hooks/useGetTour";
import ContentBookingTour from "~/modules/booking/ContentBookingTour";

const TourDetailPage = ({ price }) => {
  const { user } = useSelector((state) => state.auth);
  const [searchParam, setSearchParam] = useSearchParams();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  // const id = getQueryVariable("id");
  // const { tourDetail } = useGetTourById(id);
  const { tourDetail } = useGetTourById(searchParam.get("id"));
  console.log("TCL: TourDetailPage -> tourDetail", tourDetail);
  const handleBooking = (id) => {
    const request = {
      email: user.email,
      tourId: id,
    };
    axiosPrivate.post(`/booking/create`, request);
    toast.success("Please check your email to active booking!", {
      autoClose: 2000,
    });
    navigate("../");
  };

  const a = "b";

  return (
    <WrapperTour>
      <div>
        <nav></nav>
        <div className="breadcrum"></div>
        <WrapperGrid cols="2">
          <div>
            <Heading className="text-[#003c71]" sx="xl-2">
              {tourDetail.tourName}
            </Heading>
          </div>
          <div className="flex justify-end">
            <div>
              <span className="text-2xl font-bold text-red-500">
                {tourDetail?.price?.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>
              <span className="text-c3">/ khách</span>
            </div>
            <div className="flex flex-col gap-2 px-4">
              <ButtonSubmitDefault
                // onClick={onClick}
                className="bg-[#f79321] px-14 py-3 font-semibold text-white transition-all hover:bg-[#f9ab52]"
                radius="4"
              >
                Booking
              </ButtonSubmitDefault>
              <ButtonSubmitDefault
                radius="4"
                className="border-2 border-[#f79321] bg-transparent px-4 py-2 font-semibold text-[#f79321] transition-all hover:border-transparent hover:bg-[#f9ab52] hover:text-white"
              >
                Contact
              </ButtonSubmitDefault>
            </div>
          </div>
        </WrapperGrid>
        <div className="mt-7">
          <WrapperGrid cols="12" spacing="3">
            <div className="col-span-7">
              <img
                src="https://images.unsplash.com/photo-1669114656836-d5b9389a207e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                alt=""
                className="h-full w-full rounded-md object-cover"
              />
            </div>
            <div className="col-span-5">
              <WrapperGrid rows="5" spacing="3">
                <WrapperGrid cols="2" className="row-span-2" spacing="3">
                  <img
                    src="https://images.unsplash.com/photo-1669114656836-d5b9389a207e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                    alt=""
                    className="h-full w-full rounded-md object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1669114656836-d5b9389a207e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                    alt=""
                    className="h-full w-full rounded-md object-cover"
                  />
                </WrapperGrid>
                <div className="col-span-1 row-span-3">
                  <img
                    src="https://images.unsplash.com/photo-1669114656836-d5b9389a207e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                    alt=""
                    className="h-full w-full rounded-md object-cover"
                  />
                </div>
              </WrapperGrid>
            </div>
          </WrapperGrid>
          <p className="mt-4 text-justify text-c3">{tourDetail.tourDes}</p>
        </div>
        <div className="mt-7">
          <Heading className="text-center text-[#003c71]" sx="xl-2">
            Schedule
          </Heading>
          {tourDetail.tourDetailDes && (
            <ContentBookingTour tourDetailDes={tourDetail.tourDetailDes} />
          )}
        </div>
        {/* <Heading className="text-[#003c71]" sx="xl-3">
          {tourDetail.tourName}
        </Heading>
        <Rating point={9.8} numberRate={8} className="mt-4">
          Perfect
        </Rating>
        <WrapperFlex spacing="8" className="mt-4">
          <div>
            <div className="flex flex-1 flex-col">
              <ContentBookingTour tourDetailDes={tourDetail.tourDetailDes} />
            </div>
          </div>
          <FormBooking
            onClick={() => handleBooking(id)}
            className="sticky top-0"
            tourDetail={tourDetail}
          />
        </WrapperFlex> */}
      </div>
    </WrapperTour>
  );
};

export default TourDetailPage;
