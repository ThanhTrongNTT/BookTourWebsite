import { format } from "date-fns";
import { Fragment, useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import ButtonSubmitDefault from "@/button/ButtonSubmitDefault";
import { WrapperFlex, WrapperGrid } from "@/common";
import Describe from "@/describe/Describe";
import DropdownList from "@/dropdown/DropdownList";
import Heading from "@/heading/Heading";
import { IconCalendar, IconLocationRegular } from "@/icon";
import Label from "@/label/Label";

import { useNavigate } from "react-router-dom";
import axios from "~/api/axios";
import CardTourPage from "~/modules/card/CardTourPage";
import { RenderPlaceHot } from "~/modules/tippy/renders";
import { tourDetail } from "~/sagas/tour/tour-slice";

const SearchPage = () => {
  const { listTour } = useSelector((state) => state.tour);
  const dispath = useDispatch();
  const navigate = useNavigate();
  function getQueryVariable(variable) {
    return (
      decodeURIComponent(
        (new RegExp("[?|&]" + variable + "=" + "([^&;]+?)(&|#|;|$)").exec(
          window.location.search
          // eslint-disable-next-line no-sparse-arrays
        ) || [, ""])[1].replace(/\+/g, "%20")
      ) || null
    );
  }
  useEffect(() => {
    setValue("beginningLocation", getQueryVariable("beginningLocation"));
    setValue("destinationLocation", getQueryVariable("destinationLocation"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {
      startDay: Date.parse(getQueryVariable("startDay")),
    },
  });
  const onSubmit = (value) => {
    const tour = {
      tourDetail: {
        beginningLocation: {
          locationName: value.beginningLocation,
        },
        destinationLocation: {
          locationName: value.destinationLocation,
        },
        startDay: format(value.startDay, "dd/MM/yyyy"),
      },
      type: "TOUR_BASIC",
    };
    axios.post("/tours/location", tour).then((response) => {
      dispath(tourDetail(response.data));
      navigate(
        `?beginningLocation=${value.beginningLocation}&destinationLocation=${value.destinationLocation}&startDay=${value.startDay}`
      );
    });
  };
  return (
    <div className="h-[1000px] px-5 lg:mx-auto lg:max-w-7xl">
      <form
        className="rounded-br-md rounded-bl-md bg-[#0000001a] p-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <WrapperGrid cols="12" spacing="4">
          <WrapperGrid col="3">
            <DropdownList
              setValue={setValue}
              dropdownLabel={getQueryVariable("beginningLocation")}
              bg="bg-white"
              icon={<IconLocationRegular />}
              control={control}
              radius="4"
              id="beginning-location"
              name="beginningLocation"
              list={[
                { type: "Hà Nội" },
                { type: "TP. Hồ Chí Minh" },
                { type: "Cao Lãnh" },
              ]}
            />
          </WrapperGrid>
          <WrapperGrid col="3">
            <WrapperFlex
              items="center"
              spacing="3"
              radius="4"
              className="bg-white"
            >
              <span className="pl-4 text-c4">
                <IconCalendar />
              </span>
              <span className="z-50 text-black">
                <Controller
                  control={control}
                  name="startDay"
                  render={({ field }) => (
                    <Fragment>
                      <Label htmlFor="start-date">Depart Date</Label>
                      <ReactDatePicker
                        id="start-date"
                        dateFormat="dd/MM/yyyy"
                        onChange={field.onChange}
                        selected={field.value}
                      />
                    </Fragment>
                  )}
                />
              </span>
            </WrapperFlex>
          </WrapperGrid>

          <WrapperGrid col="4">
            <RenderPlaceHot control={control} setValue={setValue} />
          </WrapperGrid>
          <WrapperGrid col="2">
            <ButtonSubmitDefault
              onClick={() => {}}
              background="blue"
              radius="4"
              className="text-lg font-semibold text-white"
            >
              Search
            </ButtonSubmitDefault>
          </WrapperGrid>
        </WrapperGrid>
      </form>
      <div className="breadcurmb my-4 py-2">breadcrumb</div>
      <Heading sx="xl-4" className="text-center">
        List of tours from {getQueryVariable("beginningLocation")} to{" "}
        {getQueryVariable("destinationLocation")}
      </Heading>
      {/* <Describe color="light" className="mt-4">
        Đà Lạt mộng mơ nơi mimosa và ngàn hoa khoe sắc, từ đồi Robin ngắm Hồ
        Tuyền Lâm, núi Voi, viếng Thiền Viện Trúc Lâm, thăm Dinh Bảo Đại, tản bộ
        dưới những tán thông, ngắm biệt thự cổ, nhấm nháp ly café ấm áp trong
        thời tiết se lạnh. Những chuyến xe ngựa thổ mộ chạy quanh Hồ Xuân Hương
        cũng là nét duyên của Đà Lạt mờ sương.
      </Describe> */}
      <div className="mt-6">
        <div className="my-3 text-c3">
          We found <b>{listTour?.totalElements}</b> tours
        </div>
        <WrapperGrid cols="4" spacing="7">
          {listTour?.data?.map((item, index) => (
            <CardTourPage tourDetail={item.tourDetail} key={index} />
          ))}
        </WrapperGrid>
      </div>
    </div>
  );
};

export default SearchPage;
