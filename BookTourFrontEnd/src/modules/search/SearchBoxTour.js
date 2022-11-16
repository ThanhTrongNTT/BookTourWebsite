import { format } from "date-fns";
import { Fragment, useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RenderPlaceHot } from "../tippy/renders";

import ButtonSubmitDefault from "@/button/ButtonSubmitDefault";
import { WrapperFlex, WrapperGrid } from "@/common";
import { IconCalendar, IconLocationRegular } from "@/icon";
import Label from "@/label/Label";
import axios from "~/api/axios";
import DropdownList from "~/components/dropdown/DropdownList";
import { tourDetail } from "~/sagas/tour/tour-slice";

const SearchBoxTour = () => {
  const navigate = useNavigate();
  const dispath = useDispatch();
  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {
      startDay: new Date(),
    },
    mode: "onSubmit",
  });

  useEffect(() => {
    setValue("beginningLocation", "TP. Hồ Chí Minh");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (value) => {
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
    axios.post("/tours/search", tour).then((response) => {
      dispath(tourDetail(response.data));
      // localStorage.setItem("tour", JSON.stringify(response.data));
      navigate(
        `search-page?beginningLocation=${value.beginningLocation}&destinationLocation=${value.destinationLocation}&startDay=${value.startDay}`
      );
    });
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(handleSearch)}
      className="mt-5"
    >
      <WrapperGrid rows="2" spacing="4">
        <RenderPlaceHot control={control} setValue={setValue} />
        <WrapperGrid cols="12" spacing="4">
          <WrapperGrid col="5">
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
                        // minDate={new Date()}
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
          <WrapperGrid col="5">
            <DropdownList
              setValue={setValue}
              dropdownLabel="TP. Hồ Chí Minh"
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
          <WrapperGrid col="2">
            <ButtonSubmitDefault background="blue" radius="4">
              Search
            </ButtonSubmitDefault>
          </WrapperGrid>
        </WrapperGrid>
      </WrapperGrid>
    </form>
  );
};

export default SearchBoxTour;
