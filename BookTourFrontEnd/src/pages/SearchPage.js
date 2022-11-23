import { Fragment, useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";

import ButtonSubmitDefault from "@/button/ButtonSubmitDefault";
import { WrapperFlex, WrapperGrid } from "@/common";
import DropdownList from "@/dropdown/DropdownList";
import Heading from "@/heading/Heading";
import { IconCalendar, IconLocationRegular } from "@/icon";
import Label from "@/label/Label";

import { format } from "date-fns";
import { Pagination } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "~/api/axios";
import CardTourPage from "~/modules/card/CardTourPage";
import { RenderPlaceHot } from "~/modules/tippy/renders";
import getQueryVariable from "~/utils/getQueryVariable";
import { pushParmURL } from "~/utils/pushParamURL";

const SearchPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [listTour, setListTour] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  const location = {
    beginningLocation: getQueryVariable("beginningLocation"),
    destinationLocation: getQueryVariable("destinationLocation"),
    startDay: getQueryVariable("startDay"),
  };

  let dateParts = getQueryVariable("startDay").split("/");
  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {
      startDay: new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]),
    },
  });
  const tour = {
    tourDetail: {
      beginningLocation: {
        locationName: location.beginningLocation,
        locationType: "BEGINNING",
      },
      destinationLocation: {
        locationName: location.destinationLocation,
        locationType: "DESTINATION",
      },
      // startDay: location.startDay,
    },
    // type: "TOUR_BASIC",
  };

  const onPageChange = (page) => {
    axios
      .post(`/tours/search?pageSize=6&pageNo=${page - 1}`, tour)
      .then((response) => {
        setListTour(response.data);
      });
    setCurrentPage(page);
  };

  const onSubmit = (value) => {
    const tour = {
      tourDetail: {
        beginningLocation: {
          locationName: value.beginningLocation,
          locationType: "BEGINNING",
        },
        destinationLocation: {
          locationName: value.destinationLocation,
          locationType: "DESTINATION",
        },
        // startDay: format(value.startDay, "dd/MM/yyyy"),
      },
      // type: "TOUR_BASIC",
    };
    console.log(tour);
    axios.post("/tours/search?pageSize=6", tour).then((response) => {
      console.log(response);
      setListTour(response.data);
      navigate(
        `?beginningLocation=${pushParmURL(
          value.beginningLocation
        )}&destinationLocation=${pushParmURL(
          value.destinationLocation
        )}&startDay=${format(value.startDay, "dd/MM/yyyy")}`
      );
    });
  };
  const handleShowDetailTour = (id) => {
    console.log(id);
    localStorage.setItem("tourId", id);
    navigate(
      `/detail-page?beginningLocation=${pushParmURL(
        location.beginningLocation
      )}&id=${id}`
    );
  };

  useEffect(() => {
    setValue("beginningLocation", location.beginningLocation);
    setValue("destinationLocation", location.destinationLocation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(
    () => {
      axios.post("/tours/search?pageSize=6", tour).then((response) => {
        setListTour(response.data);
      });
      axios.post("/tours/search?pageSize=4", tour).then((response) => {
        setTotalPages(response.data.totalPages);
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div className="px-5 lg:mx-auto lg:max-w-7xl">
      <form
        className="rounded-br-md rounded-bl-md bg-[#0000001a] p-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <WrapperGrid cols="12" spacing="4">
          <WrapperGrid col="3">
            <DropdownList
              setValue={setValue}
              dropdownLabel={location.beginningLocation}
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
      {/* <div className="breadcurmb my-4 py-2">breadcrumb</div> */}
      <WrapperFlex justify="start" spacing="10">
        <div>
          <div className="mt-10 w-[260px] flex-shrink-0 border border-[#ddd]">
            <div className="w-full border-b border-b-[#ddd] bg-[#f5f5f5] px-4 py-3 text-center font-semibold">
              HOT places in the country
            </div>
            <ul className="py-4">
              <li className="cursor-pointer py-2 px-4 transition-all hover:bg-[#40a6f21a] hover:text-[#00c1de]">
                <Link to="/search-page">Hạ Long</Link>
              </li>
              <li className="cursor-pointer py-2 px-4 transition-all hover:bg-[#40a6f21a] hover:text-[#00c1de]">
                <Link to="/">Hạ Long</Link>
              </li>
              <li className="cursor-pointer py-2 px-4 transition-all hover:bg-[#40a6f21a] hover:text-[#00c1de]">
                <Link to="/">Hạ Long</Link>
              </li>
              <li className="cursor-pointer py-2 px-4 transition-all hover:bg-[#40a6f21a] hover:text-[#00c1de]">
                <Link to="/">Hạ Long</Link>
              </li>
              <li className="cursor-pointer py-2 px-4 transition-all hover:bg-[#40a6f21a] hover:text-[#00c1de]">
                <Link to="/">Hạ Long</Link>
              </li>
              <li className="cursor-pointer py-2 px-4 transition-all hover:bg-[#40a6f21a] hover:text-[#00c1de]">
                <Link to="/">Hạ Long</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <Heading sx="xl-4" className="mt-10 text-center">
            List of tours from {location.beginningLocation} to{" "}
            {location.destinationLocation}
          </Heading>
          <div className="mt-6">
            <div className="my-3 text-c3">
              We found <b>{listTour?.totalElements}</b> tours
            </div>
            <WrapperGrid cols="3" spacing="5">
              {listTour?.data?.map((item, index) => (
                <CardTourPage
                  onClick={() => handleShowDetailTour(item.id)}
                  tourDetail={item.tourDetail}
                  key={index}
                />
              ))}
            </WrapperGrid>
            <div className="my-5 text-center">
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={onPageChange}
                />
              )}
            </div>
          </div>
        </div>
      </WrapperFlex>
    </div>
  );
};

export default SearchPage;
