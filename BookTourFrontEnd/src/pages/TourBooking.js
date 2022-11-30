import { useForm } from "react-hook-form";
import WrapperTour from "~/components/common/WrapperTour";
import Heading from "~/components/heading/Heading";
import InputDefault from "~/components/input/InputDefault";
import Label from "~/components/label/Label";
import DetailTourInner from "~/components/text/DetailTourInner";
import { useGetTourById } from "~/hooks/useGetTour";
import getQueryVariable from "~/utils/getQueryVariable";

const TourBooking = () => {
  const id = getQueryVariable("id");
  const { tourDetail } = useGetTourById(id);
  const { handleSubmit, control } = useForm();

  const onSubmit = (values) => console.log(values);

  return (
    <WrapperTour>
      <div className="mb-5 grid grid-cols-3 rounded-md">
        <div className="col-span-1 rounded-tl-md rounded-bl-md">
          <img
            className="rounded-tl-md rounded-bl-md object-cover"
            alt="img-tour"
            src="https://images.unsplash.com/photo-1638887552349-dd0488e00347?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
        </div>
        <div className="col-span-2 bg-[#f8f8f8] p-8">
          <div className="flex-start mb-4 flex items-center">
            <span className="rate mr-3">2.1</span>
            <div>
              <span className="mr-3 text-lg font-bold text-dark-blue">
                Perfect
              </span>
              <span className="text-sm text-c4">997 interested</span>
            </div>
          </div>
          <Heading className="mb-5 text-dark-blue" sx="xl-2">
            {tourDetail.tourName}
          </Heading>
          <div className="flex flex-col gap-1 font-Roboto">
            <DetailTourInner text="Start day">
              {tourDetail.startDay}
            </DetailTourInner>
            <DetailTourInner text="End day">
              {tourDetail.endDay}
            </DetailTourInner>
            <DetailTourInner text="Beginning location">
              {tourDetail?.beginningLocation?.locationName}
            </DetailTourInner>
            <DetailTourInner text="Destination location">
              {tourDetail?.destinationLocation?.locationName}
            </DetailTourInner>
          </div>
          {console.log("234324324")}
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-2 mr-6 py-10">
          <Heading className="mb-8 text-dark-blue" sx="xl-2">
            Tour Info
          </Heading>
          <Heading className="mb-2 text-dark-blue" sx="lg">
            Communications
          </Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-[#f6f6f6] p-6">
              <div className="gird grid-cols-2 grid-rows-2 gap-x-8 gap-y-5">
                <Label htmlFor="fullName">
                  Full Name <strong className="text-red-500">*</strong>
                </Label>
                <InputDefault
                  control={control}
                  name="fullName"
                  id="fullName"
                  bg="bg-white"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="col-span-1 py-10">
          <div className="sticky top-0"></div>
        </div>
      </div>
    </WrapperTour>
  );
};

export default TourBooking;
